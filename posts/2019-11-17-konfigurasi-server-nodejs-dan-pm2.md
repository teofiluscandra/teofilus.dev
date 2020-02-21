---
title: Konfigurasi Server NodeJS dan PM2 (Manual Deploy)
keywords: [server, nginx]
preview: Beli VPS, terus konfigurasi

author: Teofilus Candra
slug: 2019-11-17-konfigurasi-server-nodejs-dan-pm2
created_at: 2019-11-17
status: published
---

Setelah sewa Virtual Private Server dilakukan pertama kali adalah memasang hal-hal yang kita butuhkan. Artikel ini membahas manual deploy, bukan menggunakan Docker. Sewa VPS bisa dimanapun: Digital Ocean, Alibaba Cloud, Linode, Vultr, dll. Ada beberapa layanan pada VPS yang secara default kita bisa memilih untuk sudah dipasangkan service yang kita butuhkan dalam satu paket atau kita bisa memilih kosongan saja.

Harga sewa sendiri beragam, untuk yang baru belajar, cocoknya $5 di digital ocean :), promocode nya banyak, googling aja. Setelah sewa, kalian dapet password root sama ip publik.

## SSH

Kita bisa masuk melalui SSH, karena pasti secara default port ini sudah kebuka. Gak tau ya kalau ada layanan yang menutup port ssh secara default. Tapi yang pasti, kita bisa masuk lewat console atau ssh untuk pertama kali.

`$ ssh root@ippublik`

lalu masukan password rootnya, biasanya disuruh untuk ganti password saat itu juga. Kalau passwordnya lupa, bisa reset melalui dashboard. Ada satu app namanya Termius, disana kalian bisa nyimpen history password sama ip publik, jadi bisa konek lagi tanpa tanya password.

Setelah masuk, biar aman, bikin user lain selain root. Kamu juga bisa bikinin temenmu yang satu tim.

` $ sudo adduser teofilus `

Bikin user ini as root / super user

` $ sudo usermod -aG sudo <username> `

Masuk dengan user 

` $ su - teofilus `

[Optional]
Supaya lebih aman lagi, ubah port SSH biar orang lain gak tau.
Ubah konfigurasi portnya di `/etc/ssh/sshd_config`


## Pasang Nodejs

Saya lebih nyaman menggunakan NVM ([https://github.com/creationix/nvm](https://github.com/creationix/nvm)), tidak hanya di Server yang saat ini akan dibicarakan, tetapi di komputer saya. Alternatif lain bisa pakai Homebrew atau install nodejs dari webnya. Kenapa NVM ? Mau install dan switch ke versi node lain lebih mudah aja.

Install NVM (sesuaikan dengan halaman github NVM)

` curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash `

Tambahkan konfigurasi (intinya untuk perintah nvm dapat dikenali bash)
`~/.bash_profile`,  `~/.zshrc`,  `~/.profile`, or  `~/.bashrc`


```
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"  
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```


Reload bash profile yang sudah diubah tadi


` source ~/.bashrc `

Cek apakah nvm sudah terpasang, cukup ketikkan nvm di terminal.

Lalu install node dengan langkah yang sangat mudah. Perintah ini akan memasang node versi LTS terbaru. Bisa juga install lebih dari satu versi, cukup ubah — lts itu ke versi yang diinginkan.

` nvm install --lts `


## Pasang PM2

NodeJS membutuhkan pustaka tambahan untuk membuatnya ‘hidup’ selamanya. Itu mengapa ada pustaka bernama ‘forever’ ([https://github.com/foreverjs/forever](https://github.com/foreverjs/forever)). Pustaka ini berbentuk CLI untuk memastikan sebuah skrip kode akan berjalan secara terus menerus. Selain forever, biasanya kita pakai PM2([https://github.com/Unitech/pm2](https://github.com/Unitech/pm2)).

Misal kita mau jalankan scriptnya, dengan perintah

` node server.js `

Atau biasanya jika di file  **package.json** sudah ada script untuk ‘jalan pintas’, cukup ketikkan

` npm start `

Nah sekarang, jika skrip kode ini kita unggah ke server, kita tidak bisa memakai perintah itu lagi untuk menjalankan nodejs, karena ketika kita keluar dari server, proses tersebut tidak berjalan.

Itulah singkatnya mengapa kita butuh ‘process manager’ seperti pustaka PM2 itu.

Install PM2 secara global

` npm install -g pm2 `

Jalankan ‘process manager’ ini untuk file ‘server.js’

` pm2 start server.js `

Tampilkan semua proses PM2

` pm2 list `

Pastikan status adalah ONLINE, bukan error. Jika ERROR, akan bewarna merah dan ada yang salah dengan skrip kode.

Ada satu kasus dimana sebuah node server itu dimulai tidak dengan “node server.js”, tapi memakai babel-node, semisal “babel-node — server.js”. Pada kasus seperti ini, bisa menggunakan perintah

` pm2 start --interpreter babel-node server.js `

Banyak sekali fitur yang bisa kita manfaatkan dari PM2. Kita bisa membuat satu file json untuk menampung konfigurasi file yang kita inginkan.

Misal kita ingin nodejs app kita berjalan di cluster mode, artinya jika ada 2 CPU, pm2 akan melakukan load balancing di 2 instances. Jika server.js tersebut dilihat di pm2 list, akan menunjukkan mode  **fork.** Mode tersebut default dari pm2 karena Nodejs berjalan 1 thread saja.

Sekarang kita buat file json itu dengan nama ecosystem.json. Kira-kira seperti ini penjelasannya : Namanya ‘kala-api’, dengan script yang dijalankan adalah file  **server.js**, jumlah instances adalah 2 dan menggunakan cluster mode.

![](https://miro.medium.com/max/384/1*mCK4h97Jz8YHO77jOZuysg.png)

Setelah sudah dibuat, file inilah yang akan dijalankan di PM2.

` pm2 start ecosystem.json `

![](https://miro.medium.com/max/639/1*0H_A2hKLijFAUNSSAOBPaA.png)

Dari gambar diatas akan muncul App name kala-api itu 2 yang jalan bersamaan dan akan secara otomatis handle load balancing. 

Kemudian untuk monitoring akses aplikasi secara real-time, gunakan perintah

` pm2 monit `

akan muncul dialog yang menunjukkan proses yang sedang berjalan, lengkap dengan ‘Active Handles’ dan ‘Active Requests’. Kalian bisa liat log log atau error disini.

![](https://miro.medium.com/max/1037/1*OG4keA8R5EEyRX9wOE6IOA.png)

Sekarang, server sudah langsung bisa dicoba dengan mengetikkan URL < ippublik >:< port > . Jika kita menyewa VPS yang menyediakan IP Publik, seharusnya akan diberitahu IP tersebut melalui dashboard penyedia VPSnya atau di  _interface_ server pada saat kita akses melalui SSH.

Mau setiap beli VPS gak konfigurasi lagi? Masukin Docker aja :) Tapi sebelum masuk ke Docker, pahami dulu fundamental diatas.
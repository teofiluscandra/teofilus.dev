---
title: Konfigurasi Sederhana Server NodeJS [Part 1] NodeJS dan PM2
keywords: [server, nginx]
preview: Konfigurasi berulang yang kadang membuat lupa (bersama dengan penjelasan singkat)

author: Teofilus Candra
slug: 2019-11-17-konfigurasi-sederhana-server-nodejs-part-1-nodejs-dan-pm2
created_at: 2019-11-17
status: draft
---

Setelah sewa Virtual Private Server untuk proyek iseng NodeJS, pasti yang dilakukan pertama kali adalah memasang NodeJS itu.  
Saya lebih nyaman menggunakan NVM ([https://github.com/creationix/nvm](https://github.com/creationix/nvm)), tidak hanya di Server yang saat ini akan dibicarakan, tetapi di komputer saya daripada menggunakan Homebrew.

Install NVM (sesuaikan dengan halaman github NVM)

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash 
```

Tambahkan konfigurasi (intinya untuk perintah nvm dapat dikenali bash)
`~/.bash_profile`,  `~/.zshrc`,  `~/.profile`, or  `~/.bashrc`

```
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"  
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
Reload bash profile yang sudah diubah tadi

``` 
source ~/.bashrc 
```

Cek apakah nvm sudah terpasang, cukup ketikkan nvm di terminal

Lalu install node dengan langkah yang sangat mudah. Perintah ini akan memasang node versi LTS terbaru. Bisa juga install lebih dari satu versi, cukup ubah — lts itu ke versi yang diinginkan.

``` 
nvm install --lts 
```

NVM, selain digunakan untuk install lebih dari satu versi NodeJS, berpindah dari satu versi ke versi lain pun juga sangat mudah. Ada banyak fitur lain yang memudahkan.

----------

NodeJS membutuhkan pustaka tambahan untuk membuatnya ‘hidup’ selamanya. Itu mengapa ada pustaka bernama ‘forever’ ([https://github.com/foreverjs/forever](https://github.com/foreverjs/forever)). Pustaka ini berbentuk CLI untuk memastikan sebuah skrip kode akan berjalan secara terus menerus.

Kita sedikit mundur ke ‘kebiasaan’ penulisan program NodeJS pada umumnya. Struktur folder pada minimal proyek NodeJS adalah  **server.js**  (atau biasanya index.js) dimana file ini adalah kode yang akan dijalankan pertama kali saat program berjalan.

Lalu pasti dijalankan dengan perintah

```
node server.js
```

Atau biasanya jika di file  **package.json** sudah ada script untuk ‘jalan pintas’, cukup ketikkan

```
npm start
```

Nah sekarang, jika skrip kode ini kita unggah ke server. Lalu, mengetikkan perintah npm start lagi, pas kita keluar, jadi tidak berjalan lagi.  
Itulah singkatnya mengapa kita butuh ‘process manager’ seperti pustaka ‘Forever’ itu. Selain ‘Forever’, pustaka yang populer selanjutnya adalah PM2 ([https://github.com/Unitech/pm2](https://github.com/Unitech/pm2)).

Install PM2 secara global

```
npm install pm2 -g
```

Jalankan ‘process manager’ ini untuk file ‘server.js’

```
pm2 start server.js
```

Lihat proses yang saat ini berjalan yang berbentuk tabel. Pastikan status adalah ONLINE, bukan error. Jika ERROR, akan bewarna merah dan ada yang salah dengan skrip kode.

```
pm2 list
```

Tenang, sabar, nanti ada screenshot dibawah.

Ada satu kasus dimana sebuah node server itu dimulai tidak dengan “node server.js”, tapi memakai babel-node, semisal “babel-node — server.js”. Pada kasus seperti ini, bisa menggunakan perintah

```
pm2 start --interpreter babel-node server.js
```

Kita buat agak sedikit rumit tapi asyik. Jika server.js tersebut dilihat di pm2 list, akan menunjukkan mode  **fork.** Mode tersebut default dari pm2 yang berkenaan langsung dengan ‘Single Thread’ NodeJS.

Skenarionya, saya ingin mengubah proyek iseng saya ini tidak ‘single’ instance, melainkan akan ada 2 instance yang jalan bersamaan, selain itu saya juga mau autorestart jika ada error. Semua konfigurasi itu dapat ditampung dalam bentuk json.

Sekarang kita buat file json itu dengan nama ecosystem.json. Kira-kira seperti ini penjelasannya : Namanya ‘kala-api’, dengan script yang dijalankan adalah file  **server.js**, jumlah instances adalah 2 dan menggunakan cluster mode.

![](https://miro.medium.com/max/384/1*mCK4h97Jz8YHO77jOZuysg.png)

Setelah sudah dibuat, file inilah yang akan dijalankan di PM2.

```
pm2 start ecosystem.json
```

![](https://miro.medium.com/max/639/1*0H_A2hKLijFAUNSSAOBPaA.png)

Dari gambar diatas akan muncul App name kala-api itu 2 yang jalan bersamaan dan akan secara otomatis handle load balancing. Kemudian untuk monitoring akses aplikasi secara real-time, gunakan perintah

``` 
pm2 monit 
```

akan muncul dialog yang menunjukkan proses yang sedang berjalan, lengkap dengan ‘Active Handles’ dan ‘Active Requests’

![](https://miro.medium.com/max/1037/1*OG4keA8R5EEyRX9wOE6IOA.png)

Ini adalah tulisan pertama saya di Medium, terimakasih sudah membaca. Setelah tulisan ini tayang, saya akan menulis Part 2 tentang NGINX dan SSL untuk melengkapi server ini. ([Klik Disini](/2019-11-17-konfigurasi-sederhana-server-nodejs-part-2-nginx-and-ssl.md))

Oh ya, server sudah langsung bisa dicoba dengan mengetikkan URL < ip >:< port > . Jika kita menyewa VPS yang menyediakan IP Publik, seharusnya akan diberitahu IP tersebut melalui dashboard penyedia VPSnya atau di  _interface_ server pada saat kita akses melalui SSH.
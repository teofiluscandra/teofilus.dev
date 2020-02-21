---
title: Konfigurasi Server Nginx and SSL
keywords: [server, nginx]
preview: Setelah running PM2 untuk nodejs

author: Teofilus Candra
slug: 2019-11-17-konfigurasi-server-nginx-ssl
created_at: 2019-11-17
status: published
---

Setelah pada tulisan sebelumnya  [(klik disini)](/post/2019-11-17-konfigurasi-server-nodejs-dan-pm2), NodeJS dan PM2 sudah terpasang dengan baik, dan bisa diakses melalui URL < ip >:< port >.

Tapi dengan konfigurasi ini, client akan langsung mengakses web server NodeJS tanpa ada ‘perantara’. Kita akan menambahkan Nginx sebagai Reverse Proxy karena beberapa fungsi seperti Caching, Security, SSL yang dapat di kelola oleh web server akan membebani web server itu sendiri tanpa Reverse Proxy.

Proxy pada umumnya adalah Forward Proxy, contohnya kita di suatu tempat konek internet lalu gak boleh akses Youtube, nah itu tugas Forward Proxy untuk Filtering. Reverse Proxy kebalikannya, orang yang dari luar yang mau masuk server kita itu melalui Reverse Proxy dulu.

Reverse Proxy ini akan menjadi perantara client dan web server melalui HTTP, ia tidak menggantikan web server tetapi meneruskan request dari HTTP request ke Web Server. Tugas proxy ini adalah salah satunya untuk menyimpan cache, sehingga jika user meminta halaman yang sama, akan langsung merespon HTTP tanpa request lagi, sedangkan disisi server, web server akan lebih ringan dan meningkatkan keamanan.

Reverse Proxy ini adalah salah satu fitur dari Nginx.

## **Install Nginx**

Pertama pasang Nginx di server kita

` $ sudo apt-get install nginx `

Pastikan nginx terpasang dan berjalan dengan baik

```
$ sudo systemctl status nginx

$ sudo systemctl start nginx

$ sudo systemctl enable nginx
```

Untuk memastikan lagi, akses IP Publikmu di browser. Tampilan webnya ada tulisan "Welcome to Nginx". Ini berarti, Nginx mu sudah bisa diakses.

# Pasangkan dengan domain

Kita akan bikin konfigurasi supaya domain bisa konek dengan NodeJS kita.

Bikin konfigurasi

` $vim /etc/nginx/sites-available/teofiluscandra.com `

Konfigurasinya seperti berikut 

```
server {
    listen 80; 
    server_name teofiluscandra.com www.teofiluscandra.com; 
    location / {  
        proxy_pass http://**_ip_**:**_port_**;
        proxy_http_version 1.1;  
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection 'upgrade';  
        proxy_set_header Host $host;  
        proxy_cache_bypass $http_upgrade;  
    }  
}
```

Daftarkan konfigurasi diatas supaya bisa dibaca oleh Nginx

`$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/`

Test konfigurasi yang telah diubah dan jika tidak ada error, reload kembali nginx

```
$ sudo nginx -t  
$ sudo /etc/init.d/nginx reload
```

Jangan lupa untuk ubah konfigurasi domainmu dan arahkan ke IP VPS.

Caranya, masuk ke dashboard area domainmu, ubah nameserver ke ns.digitalocean.com, tambahkan A record ke IP publik VPS, begitu pula untuk A record www.
Di Digital Ocean, juga daftarin nama domainmu pada pengaturan droplet.

Coba test akses melalui browser dengan domain (tanpa port).
Jika belum bisa, bisa jadi karena konfigurasimu salah atau DNS belum terpropagasi. 
Cek disini http://whois.domaintools.com/


## **Konfigurasi SSL**

SSL adalah protokol untuk membuat jalur keamanan untuk komunikasi client dan server. Jalur ini terenkripsi sehingga mempersulit orang/mesin yang akan melakukan kejahatan didalamnya. SSL ini menjadi suatu standard dari sebuah website. Sebagai tanda dari standard tersebut, setiap website yang ingin memasang SSL harus ada sertifikat (yang bisa berbeda jenisnya). Sertifikat tersebut diterbitkan oleh organisasi” yang sudah dipercaya, ada yang berbayar, ada yang gratis. 

Salah satu SSL gratis adalah  [Let’s Encypt](https://letsencrypt.org/).

Download Let’s Encrypt Client (certbot). Pastikan kembali, server sudah dipasang git

```
$ sudo apt-get update 

$ sudo apt-get install git
```

## **Install Certbort**

Pertama, tambahkan repository :

`$ sudo add-apt-repository ppa:certbot/certbot`

Install certbox nginx

`$ sudo apt install python-certbot-nginx`

## **Cek status firewall**

`$ sudo ufw status`

Jika Nginx HTTP active, HTTPS belum aktif, maka kita harus aktifkan secara full

```
$ sudo ufw allow 'Nginx Full'
$ sudo ufw delete allow 'Nginx HTTP'
```

## **Generate Sertifikat SSL**

Generate secara otomatis sertifikat

`$sudo certbot --nginx -d example.com -d www.example.com`

Kamu akan diminta untuk menjawab beberapa pertanyaan. Jika tidak ada error sampai selesai, SSL sudah terpasang dengan otomatis. Coba akses domainmu untuk memastikan.

## **Renew Sertifikat SSL**

SSL Let's Encrypt ini hanya bisa berjalan 3 bulan, setelah itu kita harus memperbarui dengan perintah:

`$sudo certbot renew --dry-run`
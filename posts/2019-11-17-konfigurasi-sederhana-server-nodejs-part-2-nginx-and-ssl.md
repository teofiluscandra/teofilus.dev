---
title: Konfigurasi Sederhana Server NodeJS [Part 2] Nginx and SSL
keywords: [server, nginx]
preview: Konfigurasi berulang yang kadang membuat lupa (bersama dengan penjelasan singkat)

author: Teofilus Candra
slug: 2019-11-17-konfigurasi-sederhana-server-nodejs-part-2-nginx-and-ssl
created_at: 2019-11-17
status: draft
---

Setelah pada tulisan sebelumnya  [(klik disini)](/2019-11-17-konfigurasi-sederhana-server-nodejs-part-1-nodejs-dan-pm2.md), NodeJS dan PM2 sudah terpasang dengan baik, dan bisa diakses melalui URL < ip >:< port >.  
Tapi dengan konfigurasi ini, client akan langsung mengakses web server NodeJS tanpa ada ‘perantara’. Beberapa fungsi seperti Caching, Security, SSL yang dapat di kelola oleh web server akan membebani web server itu sendiri.

Disini kita butuh Reverse Proxy. Proxy pada umumnya adalah Forward Proxy, proxy yang jalan di antara client dengan internet (komputer kita di internal network), tugasnya untuk caching halaman web yang sudah pernah dikunjungi, alokasi bandwith dan content filtering.

Untuk yang berjalan di sisi server, kita butuh Reverse Proxy. Reverse Proxy ini akan menjadi perantara client dan web server melalui HTTP, ia tidak menggantikan web server tetapi meneruskan request dari HTTP request ke Web Server. Tugas proxy ini adalah salah satunya untuk menyimpan cache, sehingga jika user meminta halaman yang sama, akan langsung merespon HTTP tanpa request lagi, sedangkan disisi server, web server akan lebih ringan dan meningkatkan keamanan.

Reverse Proxy ini adalah salah satu fitur dari Nginx.

----------

# **Reverse Proxy dengan Nginx**

Pertama pasang Nginx di server kita
```
$ sudo apt-get install nginx
```

Pastikan nginx terpasang dan berjalan dengan baik

```
$ sudo systemctl status nginx   
$ sudo systemctl start nginx      
$ sudo systemctl enable nginx
```

remove default site dan kemudian tulis kembali dengan yang baru

```
$ sudo rm /etc/nginx/sites-available/default  
$ sudo vi /etc/nginx/sites-available/default
```

Konfigurasi sites-available/default

```
server {  
    listen 80; server_name **_yourdomain.com_**; location / {  
        proxy_pass [http://**_ip_**:](http://172.31.21.32:8080/)**_port_**;  
        proxy_http_version 1.1;  
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection 'upgrade';  
        proxy_set_header Host $host;  
        proxy_cache_bypass $http_upgrade;  
     }  
}
```
Test konfigurasi yang telah diubah dan jika tidak ada error, reload kembali nginx

```
$ sudo nginx -t  
$ sudo /etc/init.d/nginx reload
```

Coba test akses melalui browser dengan domain (tanpa port).

----------
# **Konfigurasi SSL**

SSL adalah protokol untuk membuat jalur keamanan untuk komunikasi client dan server. Jalur ini terenkripsi sehingga mempersulit orang/mesin yang akan melakukan kejahatan didalamnya. SSL ini menjadi suatu standard dari sebuah website. Sebagai tanda dari standard tersebut, setiap website yang ingin memasang SSL harus ada sertifikat (yang bisa berbeda jenisnya). Sertifikat tersebut diterbitkan oleh organisasi” yang sudah dipercaya, ada yang berbayar, ada yang gratis. Salah satu SSL gratis adalah  [Let’s Encypt](https://letsencrypt.org/).

Download Let’s Encrypt Client (certbot). Pastikan kembali, server sudah dipasang git

```
$ sudo apt-get update  
$ sudo apt-get install git  
$ **sudo git clone** 
```
[**https://github.com/certbot/certbot**](https://github.com/certbot/certbot) **/opt/letsencrypt**

Buat direktori untuk penyimpanan let’s encrypt secara sementara

```
$ **cd /var/www**   
$ **mkdir letsencrypt**   
$ **sudo chgrp www-data letsencrypt**
```

Buat satu file untuk menyimpan konfigurasi.  **/etc/letsencrypt/configs/_my-domain_.conf** yang mana my-domain.conf diganti dengan nama domain kalian masing-masing. Misal :  [**www.teofiluscandra.com.conf**](http://www.teofiluscandra.com.conf/)

Dan isikan seperti berikut  
Yang perlu dimodifikasi adalah domains, email dan webroot-path (jika beda)

```
# the domain we want to get the cert for;  
# technically it's possible to have multiple of this lines, but it only worked with one domain for me,  
# another one only got one cert, so I would recommend sepaate config files per domain.  
domains = www.teofiluscandra.com  
  
# increase key size  
rsa-key-size = 4096  
  
# the current closed beta (as of 2015-Nov-07) is using this server  
server = https://acme-v01.api.letsencrypt.org/directory  
  
# this address will receive renewal reminders, IIRC  
email = teofiluschandra@gmail.com  
  
# turn off the ncurses UI, we want this to be run as a cronjob  
text = True  
  
# authenticate by placing a file in the webroot (under .well-known/acme-challenge/) and then letting  
# LE fetch it  
authenticator = webroot  
webroot-path = /var/www/letsencrypt
```
Tambahkan location untuk block traffic untuk HTTP

```
server {  
    listen 80 default_server;  
    server_name _domainmu.com_;  
   
    **location /.well-known/acme-challenge {  
        root /var/www/letsencrypt;  
    }**  
    # ...  
}

```
Reload kembali NGINX

```
$ **sudo nginx -t && sudo nginx -s reload**
```
Mengirim permintaan sertifikat
```
$ cd /opt/letsencrypt  
$ ./certbot-auto --config /etc/letsencrypt/configs/_domainmu_.conf certonly
```
*Tambahan : Dengan konfigurasi ini, hanya mendaftarkan sertifikasi dengan www.domainmu.com, tapi tidak dengan domainmu.com.  
Tambahkan perintah berikut untuk mendaftarkan keduanya.

```
$ sudo certbot --nginx -d example.com -d www.example.com
```

Porting NGINX ke sertifikat diatas

```
server {  
    listen 443 ssl default_server;  
    server_name _domainmu_;  
      
    ssl_certificate /etc/letsencrypt/live/_domainmu_/fullchain.pem;  
    ssl_certificate_key /etc/letsencrypt/live/_domainmu_/privkey.pem;  
    
    # ...  
}
```

Reload kembali NGINX

Coba akses domainmu dengan HTTPS

Konfigurasi tambahan :

Kita ingin supaya orang yang akses  [http://domainmu.com](http://www.domainmu.com/)  langsung redirect otomatis ke  [https://domainmu.com](https://domainmu.com/)

Buka konfigurasi nginx kembali, kemudian tambahkan diatasnya :
```
server {  
       listen         80;  
       server_name    **_domainmu.com_**;  
       return         301 https://$server_name$request_uri;  
}
```
Jadi, konfigurasi lengkap semuanya kira-kira adalah

```
server {  
       listen         80;  
       server_name    **_domainmu.com_**;  
       return         301 https://$server_name$request_uri;  
}  
  
server {  
    listen 443 ssl default_server;  
    server_name **_domainmu.com_**;  
    ssl_certificate /etc/letsencrypt/live/**_yourfulldomain_**/fullchain.pem;  
    ssl_certificate_key /etc/letsencrypt/live/**_yourfulldomain_**/privkey.pem;  
    location / {  
        proxy_pass http://**_yourprivateip_**:**_yourport_**;  
        proxy_http_version 1.1;  
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection 'upgrade';  
        proxy_set_header Host $host;  
        proxy_cache_bypass $http_upgrade;  
     }  
     location /.well-known/acme-challenge {  
        root /var/www/letsencrypt;  
     }  
}

```
Note : Sertifikat Let’s Encrypt ini akan kadularsa setelah 3 bulan, jadi kita harus mengulangi perintah mengirim permintaan kembali setiap 3 bulan. Hal ini bisa diakali dengan membuat Cron Job.

Referensi :  [https://www.nginx.com/blog/free-certificates-lets-encrypt-and-nginx/](https://www.nginx.com/blog/free-certificates-lets-encrypt-and-nginx/)

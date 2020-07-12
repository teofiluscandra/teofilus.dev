---
title: Tentang Big-O Notation
keywords: [cs, fundamental]
preview: Sebuah penjelasan sederhana tentang Notasi O-Besar

author: Teofilus Candra
slug: 2019-11-13-tentang-big-o-notation
created_at: 2019-11-13
status: draft
---

Bagaimana kita mengukur keefektifan dari suatu algoritma atau suatu kode? Untuk mengukur efisien, mencakup banyak sumber daya, termasuk :

 1. CPU (Time) Usage
 2. memory usage
 3. disk usage
 4. network usage

Semua sangat penting, tapi kali ini kita akan membahas tentang CPU (Time) atau lebih disebut **Time Complexity**.

Time Complexity adalah waktu yang komputer dibutuhkan untuk menjalankan suatu algoritma. Space Complexity, adalah seberapa besar memori yang akan digunakan untuk menjalankan suatu algoritma.

Untuk menganalisa masalah waktu (Time Complexity), kita butuh cara untuk mengetahui berapa lama waktu yang dibutuhkan untuk menjalankan suatu algoritma yang kemudian itu akan menjadi dasar apakah algoritma tersebut cepat atau tidak dan cocok digunakan atau tidak. Time Complexity Analysis dikenal dengan **Big-O Notation**.

Big-O Notation adalah notasi yang mendeksripsikan kompleksitas dari algoritma atau kode menggunakan bentuk aljabar. N adalah input size.

![Big-O Complexity Chart](/static/big-o-cheatsheet.png)
Big-O Complexity Chart
image from [https://www.bigocheatsheet.com/](https://www.bigocheatsheet.com/)

1.  **O(1) - Constant Running Time**
    
    Pada kasus ini, algoritma akan berjalan pada waktu yang sama, terlepas dari masukan data yang diberikan. Contoh pada kode dibawah, mau apapun _elements_, fungsi tersebut akan mengembalikan array pertama dan waktunya sama karena konstan.
    
    ```
     def returnFirst(elements):
     	return elements[0]
    ```
    
2.  **O(n) - Linear Runtime**
    
    Linear runtime terjadi ketika runtime berbanding lurus dengan jumlah input yang diberikan.
    
    ```
     for x in range(0, n):
     	print x;
    
    ```
    
3.  **O(n^2) - Quadratic Runtime**
    
    Quadratic Runtime terjadi ketika runtime berbanding lurus dengan 2 kali input / kuadran dari input. Contohnya jika dalam suatu fungsi terdapat nested iteration atau 2x perulangan yang kemudian mesin harus membaca data input itu 2x.
    
    Runtime juga akan berbanding lurus deeper nested iterations. Bisa 3x, 4x dan seterusnya. (n * n)
   
    ``` 
    for x in range(0, n):
            for y in range(0, n): 
                print x * y; 
    ```
    
4.  **O(log n) - Logarithmic runtime**
    
    Runtime yang dibutuhkan untuk menjalankan algoritma, tidak peduli ukuran set data input. Contoh, Binary search tree yang tidak berjalan pada semua node.
    
    Jumlah operasi yang diperlukan untuk sampai pada hasil yang diinginkan akan menjadi basis log 2 dari ukuran input.
    
5.  **O(n log n) - Linearithmic runtime**
    
    Runtime dari algoritma tergantung pada menjalankan operasi logaritma sebanyak n kali.
    
    Sebagian besar algoritma pengurutan memiliki kompleksitas runtime O (n log n), contohnya merge sort.
    
    Intinya bahwa algoritma melakukan jumlah operasi ‘N’ dan setiap operasi berjalan dalam waktu O (log (n)) (logaritmik).
    
6.  **O(2^n) - Exponential runtime**
    
    Algoritma di mana untuk setiap peningkatan ukuran kumpulan data, runtime digandakan. Untuk kumpulan data kecil, ini mungkin tidak terlihat buruk. Tetapi karena ukuran data meningkat, waktu yang dibutuhkan untuk mengeksekusi algoritma ini meningkat dengan cepat.
    
    Contoh umum dari ini adalah solusi rekursif untuk menemukan angka Fibonacci.
    
    ```
     function fibonacci(num) {
         if (num <= 1) return 1;
     
         return fibonacci(num - 2) + fibonacci(num - 1)
      }
    
    ```
 

Untuk mengetahui suatu algoritma atau data struktur termasuk jenis complexity yang mana, dapat dibaca lebih lanjut di [https://www.bigocheatsheet.com/](https://www.bigocheatsheet.com/)

Sumber belajar : 

1. [http://web.mit.edu/16.070/www/lecture/big_o.pdf](http://web.mit.edu/16.070/www/lecture/big_o.pdf)

2. [https://dev.to/sarah_chima/the-big-o-notation-an-introduction-34f7](https://dev.to/sarah_chima/the-big-o-notation-an-introduction-34f7)

3. [https://medium.com/bee-solution-partners/penjelasan-sederhana-tentang-time-complexity-dan-big-o-notation-4337ba275cfe](https://medium.com/bee-solution-partners/penjelasan-sederhana-tentang-time-complexity-dan-big-o-notation-4337ba275cfe)
var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "root-1-2-2-4",
  "level": "1",
  "url": "root-1-2-2-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Work on this text was supported by an Open Educational Resource Faculty Grant awarded to the author in 2020 by Northwestern University's Affordable Instructional Resources (AIR) initiative. The OER grants are funded by Northwestern's Office of the Provost and University Libraries. Special thanks are due to Lauren McKeen McDonald (Open Education Librarian) and Chris Diaz (Digital Publishing Librarian) for their constant strategic and technical support.  "
},
{
  "id": "s_matrix",
  "level": "1",
  "url": "s_matrix.html",
  "type": "Section",
  "number": "0.1",
  "title": "Aritmatika Matrik",
  "body": " Aritmatika Matrik   Sistem Linier Matriks sangat penting didalam pembahasan sistem linier. Dalam bab ini, kita akan membahasnya secara mendalam tentang matrik untuk sistem linier.    Dasar dasar Matrik Kita mulai dengan beberapa definisi dasar tentang matriks, persamaan matriks, dan jenis jenis matriks tertentu. Seperti yang dijelaskan dalam definisi berikut, matriks disusun engan cara yang sangat khusus..  Matrix  matrix   A (real) matrix is a rectangular array of real numbers . Nilai pada baris ke dan kolom ke dari disebut dengan -entry (a -th entry ) dari .  Matriks yang mempunyai baris dan kolom dikatakan mempunyai ukuran (atau dimensi ) .  Kita biasanya menggunakan huruf kapital di awal alfabet (  , ) untuk menunjukkan matriks..    Matriks yang ditampilkan dalam memerlukan banyak ruang untuk ditampilkan, dan waktu yang dibutuhkan untuk menulis atau menyusunnya. Oleh karena itu, kami memperkenalkan dua bentuk notasi yang agak saling melengkapi untuk membantu mendeskripsikan matriks.     Matriks dengan entri ke- adalah     Entri ke- dari matriks      Notasi pembentukan matriks  matriks notasi pembentukan matriks  Notasi menunjukkan matriks yang entri ke- (baris ke- , kolom ke- ) adalah . Notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan matriks , notasi menyatakan entri ke- dari .    Dengan demikian, jika , maka untuk semua dan .      Notasi pembentukan matriks sering digunakan hanya untuk memberi nama pada entri-entri sebuah matriks sembarang. Namun, notasi ini juga dapat digunakan untuk menggambarkan sebuah matriks di mana entri -nya diberikan oleh aturan atau rumus tertentu.  Sebagai contoh, misalkan , di mana . Ini adalah matriks berukuran yang entri -nya adalah . Dengan demikian, . Pada contoh ini, kita memiliki dan untuk .    Dalam bahasa sehari-hari, gagasan tentang kesetaraan dianggap sebagai sesuatu yang sudah jelas. Dua hal dianggap sama jika keduanya sama. Apa lagi yang perlu dikatakan? Dalam matematika, setiap kali kita memperkenalkan jenis objek matematika baru (misalnya, himpunan, fungsi, -tuple, dll.) kita perlu menjelaskan secara tepat apa yang kita maksud agar dua hal dianggap sama. Kita melakukannya sekarang dengan matriks.   Kesamaan Matrik   Misalkan dan adalah matriks dengan dimensi dan , secara berturut-turut. Kedua matriks tersebut dikatakan sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .      Matriks tidak sama satu sama lain, meskipun keduanya memiliki entri yang sama dan muncul dalam urutan yang hampir sama. Dalam hal ini, kesetaraan tidak berlaku karena dan memiliki bentuk yang berbeda: berukuran , dan berukuran .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .     Matriks bujur sangkar, vektor baris, vektor kolom, matriks nol  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    Sebuah matriks disebut bujur sangkar jika dimensinya adalah . Diagonal dari sebuah matriks bujur sangkar terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari vektor baris dinotasikan dengan .  Sebuah matriks  , disebut vektor kolom . Entri ke- dari vektor kolom dinotasikan dengan .   Matriks nol berukuran , dinotasikan dengan , adalah matriks dengan dimensi tersebut, di mana semua entrinya adalah nol: yaitu, untuk semua dan .  Jika dimensi sebenarnya tidak penting, kita sering menghilangkan subskrip dan cukup menulis untuk matriks nol dengan dimensi yang sesuai.     Matriks sebagai Koleksi Kolom\/Baris   Misalkan adalah matriks berukuran . Kita sering memandang sebagai kumpulan kolom, dalam hal ini kita tuliskan , di mana adalah vektor kolom yang terdiri dari entri-entri pada kolom ke- dari : , . Demikian pula, ketika kita memandang sebagai kumpulan baris, kita tuliskan , di mana adalah vektor baris yang terdiri dari entri-entri pada baris ke- dari : , . Garis vertikal dan horizontal dalam dan digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.     Elemen matriks, baris, dan kolom  Sintaks Sage untuk mengakses entri tertentu dari sebuah matriks memiliki kesamaan dengan notasi entri matriks. Akan tetapi dalam Python, index dimulai dari 0. Jadi, jika A ditetapkan ke matriks di Sage, A[i,j] adalah entri ke- .   Subset matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , yang disusun sebagai matriks.   Membiarkan sisi kiri atau kanan : kosong dalam notasi ini menghilangkan batasan pembatasan yang sesuai (kiri atau kanan) dari indeks yang dimaksud. Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian kolom keempat dari yang dimulai dengan entri keduanya.   Atau, kita bisa mendapatkan daftar semua baris atau kolom menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.      Penjumlahan, Pengurangan, dan Perkalian Skalar  Kita sekarang akan menjelaskan berbagai operasi aljabar yang akan kita gunakan untuk menggabungkan dan mentransformasi matriks; kita menyebut penggunaan operasi-operasi ini secara longgar sebagai aritmatika matriks . Beberapa dari operasi ini menyerupai operasi yang sudah dikenal dari aritmatika bilangan real dalam hal notasi dan definisinya. Jangan lengah! Ini adalah operasi baru yang didefinisikan untuk kelas objek matematika baru, dan harus diperlakukan dengan hati-hati. Secara khusus, perhatikan dengan cermat (a) jenis objek matematika apa yang menjadi masukan untuk setiap operasi (bahan dari operasi), dan (b) jenis objek matematika apa yang dihasilkan.   Penjumlahan dan Pengurangan Matriks   penjumlahan matriks    pengurangan matriks      Penjumlahan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   Pengurangan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Bahan untuk penjumlahan (atau pengurangan) matriks adalah dua matriks dengan dimensi yang sama ; dan hasilnya adalah matriks ketiga dengan dimensi yang sama.    Perkalian Skalar Matriks   perkalian skalar matriks    Diberikan matriks apa pun dan konstanta apa pun , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan menskalakan setiap entri dari dengan konstanta .  Kita menyebut sebagai kelipatan skalar dari . Selain itu, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .     Sedangkan penjumlahan dan pengurangan matriks sangat mirip dengan operasi yang sesuai yang melibatkan bilangan real, tidak ada analog aritmatika real yang jelas untuk perkalian skalar matriks. Secara khusus, perhatikan bagaimana perkalian skalar matriks adalah semacam operasi hibrida yang menggabungkan objek matematika dari dua sifat yang sangat berbeda: bilangan real (atau skalar) di satu sisi, dan matriks di sisi lain.   Kita menyebut hasil dari penerapan urutan penjumlahan matriks dan perkalian skalar sebagai kombinasi linear matriks .   Kombinasi Linear Matriks   kombinasi linear  dari matriks    Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear matriks . Skalar disebut koefisien dari kombinasi linear.      Misalkan dan . Hitunglah .     .      Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks-matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesetaraan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gauss, kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita simpulkan bahwa .     Misalkan adalah matriks , argumen induksi sederhana pada menunjukkan bahwa untuk skalar apa pun kita memiliki untuk semua , . (Lihat .)     Perkalian Matrik  Jadi, bagaimana kita mendefinisikan hasil perkalian dua matriks? Melihat operasi sebelumnya, Anda mungkin telah menduga bahwa kita harus mendefinisikan hasil perkalian dua matriks dengan mengambil hasil perkalian entri yang sesuai. Tidak demikian!   Perkalian matrik   matrix multiplication    Perkalian matriks adalah operasi yang didefinisikan sebagai berikut: diberikan matriks  dan matriks  , kita mendefinisikan hasil kali mereka sebagai matriks  yang entri -nya diberikan oleh rumus:   untuk semua and .     Visualizing matrix multiplication  dalam , the -th entry dihitung dengan bergerak melintasi baris ke- dari dan turun ke kolom ke- dari .       Size and matrix multiplication  Perhatikan bahwa, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar hasil kali dari dan terdefinisi, kita memerlukan . Dengan kata lain, kita membutuhkan dimensi dalam dari dan sama: . Jika kondisi ini terpenuhi, dimensi matriks hasil ditentukan oleh dimensi luar dari dan . Secara skematis, Anda dapat membayangkan dimensi dalam sebagai dihapus :     Perkalian Matriks  Perhatikan matriks-matriks berikut: . Karena dimensi dalam dari dan sesuai, kita dapat membentuk matriks hasil kali , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita menghitung: . Kita simpulkan bahwa: .   Rumus untuk entri ke- dari produk matriks dapat dijelaskan secara ringkas sebagai produk titik dari baris ke- dari dengan kolom ke- dari . Anda mungkin telah menemukan produk titik dalam kasus khusus tupel dan ; definisi tersebut dapat dengan mudah digeneralisasikan ke tupel untuk setiap bilangan bulat positif . Kami akan membahas lebih lanjut tentang produk titik dan operasi terkait di . Untuk saat ini, kami akan memberikan definisi resmi sehingga kami dapat dengan mudah menjelaskan perkalian matriks dalam bentuk produk titik..   Perkalian Titik  dot product    Perkalian Titik    Diberikan -tupel dan , hasil kali titik mereka yang dinotasikan didefinisikan sebagai:       Misalkan adalah matriks berukuran , dan adalah matriks berukuran . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua , misalkan adalah kolom ke- dari . Untuk semua , kita memiliki: , di mana dan diperlakukan sebagai -tupel. Dengan kata lain, entri dari adalah hasil kali titik (dot product) dari baris ke- dari dan kolom ke- dari .    Tetapkan pasangan dengan dan . Jika dipandang sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai: . Kita memiliki: , seperti yang diklaim.     Perkalian matrik dengan Perkalian titik (dot product)  Perhatikan matriks-matriks berikut: . Dua baris dari (dalam bentuk tupel) adalah: . Dua kolom dari (dalam bentuk tupel) adalah: . Dengan menggunakan deskripsi hasil kali titik untuk perkalian matriks, kita menghitung: .   Definisi dari produk matriks tentu lebih rumit daripada yang Anda harapkan, dan tampaknya muncul begitu saja tanpa peringatan. Semua ini akan lebih masuk akal begitu kita mulai memandang matriks sebagai pemberi definisi fungsi-fungsi tertentu . Rumus kami untuk entri-entri dipilih secara tepat agar matriks baru ini sesuai dengan komposisi dari fungsi-fungsi dan : sehingga . Dengan interpretasi ini, batasan berat pada dimensi matriks-matriks penyusun memastikan bahwa dua fungsi dan dapat dikomposisikan.   Aritmatika matrik  Kita menggunakan + dan * untuk penjumlahan dan perkalian matriks.   Sebagai bukti fleksibilitas Sage, simbol yang sama * juga digunakan untuk perkalian skalar.   Edit sel di bawah ini untuk mempraktikkan operasi ini.      Transpose Matriks  Kami mengakhiri bagian ini dengan satu operasi terakhir, transpose matriks . Kami tidak akan banyak menggunakan operasi ini hingga nanti, tetapi ini adalah tempat yang tepat untuk memperkenalkannya.   Transpose Matriks  transpose matriks  transpose   Diberikan sebuah matriks  , transpose-nya adalah matriks yang entri -nya adalah entri -nya dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Diberikan sebuah matriks , kita dapat memberikan deskripsi berbasis kolom atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .        Misalkan ; maka .  Misalkan , maka .     Transpose Matriks  Transpose matriks diimplementasikan dalam Sage sebagai metode transpose() . Dalam sel di bawah ini, kami (a) memilih bilangan bulat acak , (b) memilih matriks acak  dengan entri bilangan bulat, dan (c) menghitung transpose dari .   Seperti biasa, eksperimen dengan sel Sage di bawah ini.     "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_matrix.html#d_matrix",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Matrix.",
  "body": " Matrix  matrix   A (real) matrix is a rectangular array of real numbers . Nilai pada baris ke dan kolom ke dari disebut dengan -entry (a -th entry ) dari .  Matriks yang mempunyai baris dan kolom dikatakan mempunyai ukuran (atau dimensi ) .  Kita biasanya menggunakan huruf kapital di awal alfabet (  , ) untuk menunjukkan matriks..   "
},
{
  "id": "d_matrix_notation",
  "level": "2",
  "url": "s_matrix.html#d_matrix_notation",
  "type": "Definition",
  "number": "0.1.2",
  "title": "",
  "body": "   Matriks dengan entri ke- adalah     Entri ke- dari matriks      Notasi pembentukan matriks  matriks notasi pembentukan matriks  Notasi menunjukkan matriks yang entri ke- (baris ke- , kolom ke- ) adalah . Notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan matriks , notasi menyatakan entri ke- dari .    Dengan demikian, jika , maka untuk semua dan .   "
},
{
  "id": "ss_matrix_attributes-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_attributes-5",
  "type": "Remark",
  "number": "0.1.3",
  "title": "",
  "body": "  Notasi pembentukan matriks sering digunakan hanya untuk memberi nama pada entri-entri sebuah matriks sembarang. Namun, notasi ini juga dapat digunakan untuk menggambarkan sebuah matriks di mana entri -nya diberikan oleh aturan atau rumus tertentu.  Sebagai contoh, misalkan , di mana . Ini adalah matriks berukuran yang entri -nya adalah . Dengan demikian, . Pada contoh ini, kita memiliki dan untuk .   "
},
{
  "id": "d_matrix_equality",
  "level": "2",
  "url": "s_matrix.html#d_matrix_equality",
  "type": "Definition",
  "number": "0.1.4",
  "title": "Kesamaan Matrik.",
  "body": " Kesamaan Matrik   Misalkan dan adalah matriks dengan dimensi dan , secara berturut-turut. Kedua matriks tersebut dikatakan sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .   "
},
{
  "id": "ex_inequality",
  "level": "2",
  "url": "s_matrix.html#ex_inequality",
  "type": "Example",
  "number": "0.1.5",
  "title": "",
  "body": "  Matriks tidak sama satu sama lain, meskipun keduanya memiliki entri yang sama dan muncul dalam urutan yang hampir sama. Dalam hal ini, kesetaraan tidak berlaku karena dan memiliki bentuk yang berbeda: berukuran , dan berukuran .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .   "
},
{
  "id": "d_square_matrices",
  "level": "2",
  "url": "s_matrix.html#d_square_matrices",
  "type": "Definition",
  "number": "0.1.6",
  "title": "Matriks bujur sangkar, vektor baris, vektor kolom, matriks nol.",
  "body": " Matriks bujur sangkar, vektor baris, vektor kolom, matriks nol  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    Sebuah matriks disebut bujur sangkar jika dimensinya adalah . Diagonal dari sebuah matriks bujur sangkar terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari vektor baris dinotasikan dengan .  Sebuah matriks  , disebut vektor kolom . Entri ke- dari vektor kolom dinotasikan dengan .   Matriks nol berukuran , dinotasikan dengan , adalah matriks dengan dimensi tersebut, di mana semua entrinya adalah nol: yaitu, untuk semua dan .  Jika dimensi sebenarnya tidak penting, kita sering menghilangkan subskrip dan cukup menulis untuk matriks nol dengan dimensi yang sesuai.   "
},
{
  "id": "rm_matrices_as_row_columns",
  "level": "2",
  "url": "s_matrix.html#rm_matrices_as_row_columns",
  "type": "Remark",
  "number": "0.1.7",
  "title": "Matriks sebagai Koleksi Kolom\/Baris.",
  "body": " Matriks sebagai Koleksi Kolom\/Baris   Misalkan adalah matriks berukuran . Kita sering memandang sebagai kumpulan kolom, dalam hal ini kita tuliskan , di mana adalah vektor kolom yang terdiri dari entri-entri pada kolom ke- dari : , . Demikian pula, ketika kita memandang sebagai kumpulan baris, kita tuliskan , di mana adalah vektor baris yang terdiri dari entri-entri pada baris ke- dari : , . Garis vertikal dan horizontal dalam dan digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.   "
},
{
  "id": "sage_matrix_entries_rows_cols",
  "level": "2",
  "url": "s_matrix.html#sage_matrix_entries_rows_cols",
  "type": "Sage example",
  "number": "1",
  "title": "Elemen matriks, baris, dan kolom.",
  "body": " Elemen matriks, baris, dan kolom  Sintaks Sage untuk mengakses entri tertentu dari sebuah matriks memiliki kesamaan dengan notasi entri matriks. Akan tetapi dalam Python, index dimulai dari 0. Jadi, jika A ditetapkan ke matriks di Sage, A[i,j] adalah entri ke- .   Subset matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , yang disusun sebagai matriks.   Membiarkan sisi kiri atau kanan : kosong dalam notasi ini menghilangkan batasan pembatasan yang sesuai (kiri atau kanan) dari indeks yang dimaksud. Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian kolom keempat dari yang dimulai dengan entri keduanya.   Atau, kita bisa mendapatkan daftar semua baris atau kolom menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.   "
},
{
  "id": "d_matrix_add_subtract",
  "level": "2",
  "url": "s_matrix.html#d_matrix_add_subtract",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Penjumlahan dan Pengurangan Matriks.",
  "body": " Penjumlahan dan Pengurangan Matriks   penjumlahan matriks    pengurangan matriks      Penjumlahan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   Pengurangan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   "
},
{
  "id": "ss_matrix_arithmetic-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-4",
  "type": "Remark",
  "number": "0.1.9",
  "title": "",
  "body": " Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Bahan untuk penjumlahan (atau pengurangan) matriks adalah dua matriks dengan dimensi yang sama ; dan hasilnya adalah matriks ketiga dengan dimensi yang sama.  "
},
{
  "id": "d_matrix_scalar_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_scalar_mult",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Perkalian Skalar Matriks.",
  "body": " Perkalian Skalar Matriks   perkalian skalar matriks    Diberikan matriks apa pun dan konstanta apa pun , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan menskalakan setiap entri dari dengan konstanta .  Kita menyebut sebagai kelipatan skalar dari . Selain itu, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .   "
},
{
  "id": "ss_matrix_arithmetic-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-6",
  "type": "Remark",
  "number": "0.1.11",
  "title": "",
  "body": " Sedangkan penjumlahan dan pengurangan matriks sangat mirip dengan operasi yang sesuai yang melibatkan bilangan real, tidak ada analog aritmatika real yang jelas untuk perkalian skalar matriks. Secara khusus, perhatikan bagaimana perkalian skalar matriks adalah semacam operasi hibrida yang menggabungkan objek matematika dari dua sifat yang sangat berbeda: bilangan real (atau skalar) di satu sisi, dan matriks di sisi lain.  "
},
{
  "id": "d_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#d_matrix_lin_comb",
  "type": "Definition",
  "number": "0.1.12",
  "title": "Kombinasi Linear Matriks.",
  "body": " Kombinasi Linear Matriks   kombinasi linear  dari matriks    Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear matriks . Skalar disebut koefisien dari kombinasi linear.   "
},
{
  "id": "ss_matrix_arithmetic-9",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-9",
  "type": "Example",
  "number": "0.1.13",
  "title": "",
  "body": "  Misalkan dan . Hitunglah .     .   "
},
{
  "id": "ss_matrix_arithmetic-10",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-10",
  "type": "Example",
  "number": "0.1.14",
  "title": "",
  "body": "  Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks-matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesetaraan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gauss, kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita simpulkan bahwa .   "
},
{
  "id": "rm_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#rm_entry_lin_comb",
  "type": "Remark",
  "number": "0.1.15",
  "title": "",
  "body": " Misalkan adalah matriks , argumen induksi sederhana pada menunjukkan bahwa untuk skalar apa pun kita memiliki untuk semua , . (Lihat .)  "
},
{
  "id": "d_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_mult",
  "type": "Definition",
  "number": "0.1.16",
  "title": "Perkalian matrik.",
  "body": " Perkalian matrik   matrix multiplication    Perkalian matriks adalah operasi yang didefinisikan sebagai berikut: diberikan matriks  dan matriks  , kita mendefinisikan hasil kali mereka sebagai matriks  yang entri -nya diberikan oleh rumus:   untuk semua and .   "
},
{
  "id": "fig_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#fig_matrix_mult",
  "type": "Figure",
  "number": "0.1.17",
  "title": "Visualizing matrix multiplication",
  "body": " Visualizing matrix multiplication  dalam , the -th entry dihitung dengan bergerak melintasi baris ke- dari dan turun ke kolom ke- dari .     "
},
{
  "id": "ss_matrix_mult-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-5",
  "type": "Remark",
  "number": "0.1.18",
  "title": "Size and matrix multiplication.",
  "body": " Size and matrix multiplication  Perhatikan bahwa, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar hasil kali dari dan terdefinisi, kita memerlukan . Dengan kata lain, kita membutuhkan dimensi dalam dari dan sama: . Jika kondisi ini terpenuhi, dimensi matriks hasil ditentukan oleh dimensi luar dari dan . Secara skematis, Anda dapat membayangkan dimensi dalam sebagai dihapus :   "
},
{
  "id": "eg_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult",
  "type": "Example",
  "number": "0.1.19",
  "title": "Perkalian Matriks.",
  "body": " Perkalian Matriks  Perhatikan matriks-matriks berikut: . Karena dimensi dalam dari dan sesuai, kita dapat membentuk matriks hasil kali , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita menghitung: . Kita simpulkan bahwa: .  "
},
{
  "id": "d_dot_product",
  "level": "2",
  "url": "s_matrix.html#d_dot_product",
  "type": "Definition",
  "number": "0.1.20",
  "title": "Perkalian Titik.",
  "body": " Perkalian Titik  dot product    Perkalian Titik    Diberikan -tupel dan , hasil kali titik mereka yang dinotasikan didefinisikan sebagai:    "
},
{
  "id": "th_matrix_mult_dot_product",
  "level": "2",
  "url": "s_matrix.html#th_matrix_mult_dot_product",
  "type": "Theorem",
  "number": "0.1.21",
  "title": "",
  "body": "  Misalkan adalah matriks berukuran , dan adalah matriks berukuran . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua , misalkan adalah kolom ke- dari . Untuk semua , kita memiliki: , di mana dan diperlakukan sebagai -tupel. Dengan kata lain, entri dari adalah hasil kali titik (dot product) dari baris ke- dari dan kolom ke- dari .    Tetapkan pasangan dengan dan . Jika dipandang sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai: . Kita memiliki: , seperti yang diklaim.   "
},
{
  "id": "ss_matrix_mult-10",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-10",
  "type": "Example",
  "number": "0.1.22",
  "title": "Perkalian matrik dengan Perkalian titik (dot product).",
  "body": " Perkalian matrik dengan Perkalian titik (dot product)  Perhatikan matriks-matriks berikut: . Dua baris dari (dalam bentuk tupel) adalah: . Dua kolom dari (dalam bentuk tupel) adalah: . Dengan menggunakan deskripsi hasil kali titik untuk perkalian matriks, kita menghitung: .  "
},
{
  "id": "ss_matrix_mult-12",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-12",
  "type": "Sage example",
  "number": "2",
  "title": "Aritmatika matrik.",
  "body": " Aritmatika matrik  Kita menggunakan + dan * untuk penjumlahan dan perkalian matriks.   Sebagai bukti fleksibilitas Sage, simbol yang sama * juga digunakan untuk perkalian skalar.   Edit sel di bawah ini untuk mempraktikkan operasi ini.   "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "0.1.23",
  "title": "Transpose Matriks.",
  "body": " Transpose Matriks  transpose matriks  transpose   Diberikan sebuah matriks  , transpose-nya adalah matriks yang entri -nya adalah entri -nya dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   "
},
{
  "id": "s_matrix-6-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-6-4",
  "type": "Remark",
  "number": "0.1.24",
  "title": "",
  "body": " Diberikan sebuah matriks , kita dapat memberikan deskripsi berbasis kolom atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .     "
},
{
  "id": "s_matrix-6-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix-6-5",
  "type": "Example",
  "number": "0.1.25",
  "title": "",
  "body": "  Misalkan ; maka .  Misalkan , maka .   "
},
{
  "id": "s_matrix-6-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix-6-6",
  "type": "Sage example",
  "number": "3",
  "title": "Transpose Matriks.",
  "body": " Transpose Matriks  Transpose matriks diimplementasikan dalam Sage sebagai metode transpose() . Dalam sel di bawah ini, kami (a) memilih bilangan bulat acak , (b) memilih matriks acak  dengan entri bilangan bulat, dan (c) menghitung transpose dari .   Seperti biasa, eksperimen dengan sel Sage di bawah ini.   "
},
{
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Aljabar Matrik",
  "body": " Aljabar Matrik   Bab sebelumnya membahas apa yang bisa disebut sebagai aritmatika matriks. Kita mempelajari operasi dasar seperti penjumlahan, perkalian, penskalaan, dan transpose matriks. Dalam bagian ini, kita akan membahas aljabar matriks. Kita akan menyelidiki sifat-sifat (dan ketiadaan sifat-sifat tertentu) dari operasi matriks kita, serta menunjukkan bagaimana menggunakan operasi-operasi ini untuk menyelesaikan persamaan matriks.  Saat Anda mempelajari aljabar matriks, selalu ingat teman lama Anda, yaitu aljabar bilangan real. Secara umum, kedua sistem aljabar ini sangat mirip satu sama lain, seperti yang dijelaskan dalam di bawah ini. Namun, ada dua perbedaan penting antara keduanya : dua sifat penting dari aljabar bilangan real yang tidak berlaku untuk matriks. Akibat dari dua penyimpangan sederhana ini sangat luas dan memberikan kekayaan yang menarik pada aljabar matriks dibandingkan dengan aljabar bilangan real.    Sifat-sifat penjumlahan, perkalian dan perkalian skalar matriks   Sifat-sifat berikut berlaku untuk semua matriks dan skalar untuk ekspresi yang diberikan memiliki makna.   Hukum Komutatif Penjumlahan       Hukum Asosiatif Penjumlahan       Hukum Asosiatif Perkalian       Hukum Distributif Kiri       Hukum Distributif Kanan       Hukum Distributif Penskalaan       Hukum Distributif Penskalaan Lainnya       Hukum Asosiatif Penskalaan       Hukum Komutatif Penskalaan   .       Bagaimana cara membuktikan salah satu sifat ini? Semua ini merupakan kesamaan matriks dalam bentuk , sehingga menurut definisi kesamaan matriks , kita harus menunjukkan (1) bahwa matriks dan memiliki dimensi yang sama, dan (2) bahwa untuk semua . Pembuktian di bawah ini menggambarkan teknik ini untuk hukum asosiatif perkalian dari .   Bukti (iii)  Kami hanya membuktikan hukum asosiatif perkalian . Misalkan , , . Untuk menunjukkan , kita harus menunjukkan (1) bahwa dan memiliki dimensi yang sama, dan (2) bahwa untuk semua kemungkinan .  (1) Pengamatan biasa tentang dimensi dalam dan dimensi luar menunjukkan bahwa baik maupun memiliki dimensi .  (2) Diberikan sembarang dengan dan , kita memiliki:   Ini membuktikan bahwa semua entri dari kedua matriks tersebut sama, sehingga .   Sebagaimana dalam aljabar bilangan real, kita dapat mengidentifikasi beberapa matriks khusus yang bertindak sebagai identitas penjumlahan dan identitas perkalian ; dan setiap matriks memiliki invers penjumlahan . Apa yang kami maksud di sini dijelaskan secara rinci dalam .   Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Diberikan sebuah matriks  , invers penjumlahannya  didefinisikan sebagai .     Identity matrix  identity matrix  matrix identity matrix    inverse matrix     Matriks identitas adalah matriks persegi berukuran  dengan angka satu di sepanjang diagonal dan nol di semua tempat lainnya. Dengan kata lain, untuk semua dan , kita memiliki . Ketika ukuran dari matriks identitas tidak penting, kita sering menotasikannya secara sederhana sebagai .     Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian     Identitas Penjumlahan  Matriks nol berukuran  adalah identitas penjumlahan untuk matriks dalam arti berikut: untuk sembarang matriks  , kita memiliki .    Invers Penjumlahan  Untuk sembarang matriks  , kita memiliki .    Identitas Perkalian  Matriks identitas adalah identitas perkalian untuk matriks dalam arti berikut: untuk sembarang matriks  , kita memiliki .       Sifat Matrik Transpose  Properti berikut berlaku untuk semua matriks dan skalar yang ekspresinya masuk akal.                           Kami hanya membuktikan pernyataan pertama. Pertama, perhatikan bahwa jika berukuran , maka demikian pula dan . Kemudian adalah berdasarkan . Demikian pula, kita melihat bahwa juga berukuran .  Selanjutnya, untuk sembarang dengan , , kita memiliki . Karena entri dari kedua matriks tersebut sama untuk setiap , maka dapat disimpulkan bahwa .    "
},
{
  "id": "th_matrix_alg_props",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_alg_props",
  "type": "Theorem",
  "number": "0.2.1",
  "title": "Sifat-sifat penjumlahan, perkalian dan perkalian skalar matriks.",
  "body": " Sifat-sifat penjumlahan, perkalian dan perkalian skalar matriks   Sifat-sifat berikut berlaku untuk semua matriks dan skalar untuk ekspresi yang diberikan memiliki makna.   Hukum Komutatif Penjumlahan       Hukum Asosiatif Penjumlahan       Hukum Asosiatif Perkalian       Hukum Distributif Kiri       Hukum Distributif Kanan       Hukum Distributif Penskalaan       Hukum Distributif Penskalaan Lainnya       Hukum Asosiatif Penskalaan       Hukum Komutatif Penskalaan   .      "
},
{
  "id": "s_algebraic-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-5",
  "type": "Proof",
  "number": "0.2.1",
  "title": "Bukti (iii).",
  "body": " Bukti (iii)  Kami hanya membuktikan hukum asosiatif perkalian . Misalkan , , . Untuk menunjukkan , kita harus menunjukkan (1) bahwa dan memiliki dimensi yang sama, dan (2) bahwa untuk semua kemungkinan .  (1) Pengamatan biasa tentang dimensi dalam dan dimensi luar menunjukkan bahwa baik maupun memiliki dimensi .  (2) Diberikan sembarang dengan dan , kita memiliki:   Ini membuktikan bahwa semua entri dari kedua matriks tersebut sama, sehingga .  "
},
{
  "id": "d_matrix_add_inverse",
  "level": "2",
  "url": "s_algebraic.html#d_matrix_add_inverse",
  "type": "Definition",
  "number": "0.2.2",
  "title": "Additive inverse of a matrix.",
  "body": " Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Diberikan sebuah matriks  , invers penjumlahannya  didefinisikan sebagai .   "
},
{
  "id": "d_identity_matrix",
  "level": "2",
  "url": "s_algebraic.html#d_identity_matrix",
  "type": "Definition",
  "number": "0.2.3",
  "title": "Identity matrix.",
  "body": " Identity matrix  identity matrix  matrix identity matrix    inverse matrix     Matriks identitas adalah matriks persegi berukuran  dengan angka satu di sepanjang diagonal dan nol di semua tempat lainnya. Dengan kata lain, untuk semua dan , kita memiliki . Ketika ukuran dari matriks identitas tidak penting, kita sering menotasikannya secara sederhana sebagai .   "
},
{
  "id": "th_matrix_add_mult_ident",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_add_mult_ident",
  "type": "Theorem",
  "number": "0.2.4",
  "title": "Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian.",
  "body": " Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian     Identitas Penjumlahan  Matriks nol berukuran  adalah identitas penjumlahan untuk matriks dalam arti berikut: untuk sembarang matriks  , kita memiliki .    Invers Penjumlahan  Untuk sembarang matriks  , kita memiliki .    Identitas Perkalian  Matriks identitas adalah identitas perkalian untuk matriks dalam arti berikut: untuk sembarang matriks  , kita memiliki .     "
},
{
  "id": "th_trans_props",
  "level": "2",
  "url": "s_algebraic.html#th_trans_props",
  "type": "Theorem",
  "number": "0.2.5",
  "title": "Sifat Matrik Transpose.",
  "body": " Sifat Matrik Transpose  Properti berikut berlaku untuk semua matriks dan skalar yang ekspresinya masuk akal.                           Kami hanya membuktikan pernyataan pertama. Pertama, perhatikan bahwa jika berukuran , maka demikian pula dan . Kemudian adalah berdasarkan . Demikian pula, kita melihat bahwa juga berukuran .  Selanjutnya, untuk sembarang dengan , , kita memiliki . Karena entri dari kedua matriks tersebut sama untuk setiap , maka dapat disimpulkan bahwa .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

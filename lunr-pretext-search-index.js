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
  "body": " Aritmatika Matrik   Sistem Linier Matriks sangat penting didalam pembahasan sistem linier. Dalam bab ini, kita akan membahasnya secara mendalam tentang matrik untuk sistem linier.    Dasar dasar Matrik Kita mulai dengan beberapa definisi dasar tentang matriks, persamaan matriks, dan jenis jenis matriks tertentu. Seperti yang dijelaskan dalam definisi berikut, matriks disusun engan cara yang sangat khusus..  Matrix  matrix   A (real) matrix is a rectangular array of real numbers . Nilai pada baris ke dan kolom ke dari disebut dengan -entry (a -th entry ) dari .  Matriks yang mempunyai baris dan kolom dikatakan mempunyai ukuran (atau dimensi ) .  Kita biasanya menggunakan huruf kapital di awal alfabet (  , ) untuk menunjukkan matriks..    Matriks yang ditampilkan dalam memerlukan banyak ruang untuk ditampilkan, dan waktu yang dibutuhkan untuk menulis atau menyusunnya. Oleh karena itu, kami memperkenalkan dua bentuk notasi yang agak saling melengkapi untuk membantu mendeskripsikan matriks.     Matriks dengan entri ke- adalah     Entri ke- dari matriks      Notasi pembentukan matriks  matriks notasi pembentukan matriks  Notasi menunjukkan matriks yang entri ke- (baris ke- , kolom ke- ) adalah . Notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan matriks , notasi menyatakan entri ke- dari .    Dengan demikian, jika , maka untuk semua dan .      Notasi pembentukan matriks sering digunakan hanya untuk memberi nama pada entri-entri sebuah matriks sembarang. Namun, notasi ini juga dapat digunakan untuk menggambarkan sebuah matriks di mana entri -nya diberikan oleh aturan atau rumus tertentu.  Sebagai contoh, misalkan , di mana . Ini adalah matriks berukuran yang entri -nya adalah . Dengan demikian, . Pada contoh ini, kita memiliki dan untuk .    Dalam bahasa sehari-hari, gagasan tentang kesetaraan dianggap sebagai sesuatu yang sudah jelas. Dua hal dianggap sama jika keduanya sama. Apa lagi yang perlu dikatakan? Dalam matematika, setiap kali kita memperkenalkan jenis objek matematika baru (misalnya, himpunan, fungsi, -tuple, dll.) kita perlu menjelaskan secara tepat apa yang kita maksud agar dua hal dianggap sama. Kita melakukannya sekarang dengan matriks.   Kesamaan Matrik   Misalkan dan adalah matriks dengan dimensi dan , secara berturut-turut. Kedua matriks tersebut dikatakan sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .      Matriks tidak sama satu sama lain, meskipun keduanya memiliki entri yang sama dan muncul dalam urutan yang hampir sama. Dalam hal ini, kesetaraan tidak berlaku karena dan memiliki bentuk yang berbeda: berukuran , dan berukuran .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .     Matriks bujur sangkar, vektor baris, vektor kolom, matriks nol  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    Sebuah matriks disebut bujur sangkar jika dimensinya adalah . Diagonal dari sebuah matriks bujur sangkar terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari vektor baris dinotasikan dengan .  Sebuah matriks  , disebut vektor kolom . Entri ke- dari vektor kolom dinotasikan dengan .   Matriks nol berukuran , dinotasikan dengan , adalah matriks dengan dimensi tersebut, di mana semua entrinya adalah nol: yaitu, untuk semua dan .  Jika dimensi sebenarnya tidak penting, kita sering menghilangkan subskrip dan cukup menulis untuk matriks nol dengan dimensi yang sesuai.     Matriks sebagai Koleksi Kolom\/Baris   Misalkan adalah matriks berukuran . Kita sering memandang sebagai kumpulan kolom, dalam hal ini kita tuliskan , di mana adalah vektor kolom yang terdiri dari entri-entri pada kolom ke- dari : , . Demikian pula, ketika kita memandang sebagai kumpulan baris, kita tuliskan , di mana adalah vektor baris yang terdiri dari entri-entri pada baris ke- dari : , . Garis vertikal dan horizontal dalam dan digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.     Elemen matriks, baris, dan kolom  Sintaks Sage untuk mengakses entri tertentu dari sebuah matriks memiliki kesamaan dengan notasi entri matriks. Akan tetapi dalam Python, index dimulai dari 0. Jadi, jika A ditetapkan ke matriks di Sage, A[i,j] adalah entri ke- .   Subset matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , yang disusun sebagai matriks.   Membiarkan sisi kiri atau kanan : kosong dalam notasi ini menghilangkan batasan pembatasan yang sesuai (kiri atau kanan) dari indeks yang dimaksud. Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian kolom keempat dari yang dimulai dengan entri keduanya.   Atau, kita bisa mendapatkan daftar semua baris atau kolom menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.      Penjumlahan, Pengurangan, dan Perkalian Skalar  Kita sekarang akan menjelaskan berbagai operasi aljabar yang akan kita gunakan untuk menggabungkan dan mentransformasi matriks; kita menyebut penggunaan operasi-operasi ini secara longgar sebagai aritmatika matriks . Beberapa dari operasi ini menyerupai operasi yang sudah dikenal dari aritmatika bilangan real dalam hal notasi dan definisinya. Jangan lengah! Ini adalah operasi baru yang didefinisikan untuk kelas objek matematika baru, dan harus diperlakukan dengan hati-hati. Secara khusus, perhatikan dengan cermat (a) jenis objek matematika apa yang menjadi masukan untuk setiap operasi (bahan dari operasi), dan (b) jenis objek matematika apa yang dihasilkan.   Penjumlahan dan Pengurangan Matriks   penjumlahan matriks    pengurangan matriks      Penjumlahan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   Pengurangan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Bahan untuk penjumlahan (atau pengurangan) matriks adalah dua matriks dengan dimensi yang sama ; dan hasilnya adalah matriks ketiga dengan dimensi yang sama.    Perkalian Skalar Matriks   perkalian skalar matriks    Diberikan matriks apa pun dan konstanta apa pun , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan menskalakan setiap entri dari dengan konstanta .  Kita menyebut sebagai kelipatan skalar dari . Selain itu, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .     Sedangkan penjumlahan dan pengurangan matriks sangat mirip dengan operasi yang sesuai yang melibatkan bilangan real, tidak ada analog aritmatika real yang jelas untuk perkalian skalar matriks. Secara khusus, perhatikan bagaimana perkalian skalar matriks adalah semacam operasi hibrida yang menggabungkan objek matematika dari dua sifat yang sangat berbeda: bilangan real (atau skalar) di satu sisi, dan matriks di sisi lain.   Kita menyebut hasil dari penerapan urutan penjumlahan matriks dan perkalian skalar sebagai kombinasi linear matriks .   Kombinasi Linear Matriks   kombinasi linear  dari matriks    Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear matriks . Skalar disebut koefisien dari kombinasi linear.      Misalkan dan . Hitunglah .     .      Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks-matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesetaraan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gauss, kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita simpulkan bahwa .     Misalkan adalah matriks , argumen induksi sederhana pada menunjukkan bahwa untuk skalar apa pun kita memiliki untuk semua , . (Lihat     Perkalian Matrik  Jadi, bagaimana kita mendefinisikan hasil perkalian dua matriks? Melihat operasi sebelumnya, Anda mungkin telah menduga bahwa kita harus mendefinisikan hasil perkalian dua matriks dengan mengambil hasil perkalian entri yang sesuai. Tidak demikian!   Perkalian matrik   matrix multiplication    Perkalian matriks adalah operasi yang didefinisikan sebagai berikut: diberikan matriks  dan matriks  , kita mendefinisikan hasil kali mereka sebagai matriks  yang entri -nya diberikan oleh rumus:   untuk semua and .     Visualizing matrix multiplication  dalam , the -th entry dihitung dengan bergerak melintasi baris ke- dari dan turun ke kolom ke- dari .       Size and matrix multiplication  Perhatikan bahwa, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar hasil kali dari dan terdefinisi, kita memerlukan . Dengan kata lain, kita membutuhkan dimensi dalam dari dan sama: . Jika kondisi ini terpenuhi, dimensi matriks hasil ditentukan oleh dimensi luar dari dan . Secara skematis, Anda dapat membayangkan dimensi dalam sebagai dihapus :     Perkalian Matriks  Perhatikan matriks-matriks berikut: . Karena dimensi dalam dari dan sesuai, kita dapat membentuk matriks hasil kali , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita menghitung: . Kita simpulkan bahwa: .   Rumus untuk entri ke- dari produk matriks dapat dijelaskan secara ringkas sebagai produk titik dari baris ke- dari dengan kolom ke- dari . Anda mungkin telah menemukan produk titik dalam kasus khusus tupel dan ; definisi tersebut dapat dengan mudah digeneralisasikan ke tupel untuk setiap bilangan bulat positif . Kami akan membahas lebih lanjut tentang produk titik dan operasi terkait di . Untuk saat ini, kami akan memberikan definisi resmi sehingga kami dapat dengan mudah menjelaskan perkalian matriks dalam bentuk produk titik..   Perkalian Titik  dot product    Perkalian Titik    Diberikan -tupel dan , hasil kali titik mereka yang dinotasikan didefinisikan sebagai:       Misalkan adalah matriks berukuran , dan adalah matriks berukuran . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua , misalkan adalah kolom ke- dari . Untuk semua , kita memiliki: , di mana dan diperlakukan sebagai -tupel. Dengan kata lain, entri dari adalah hasil kali titik (dot product) dari baris ke- dari dan kolom ke- dari .    Tetapkan pasangan dengan dan . Jika dipandang sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai: . Kita memiliki: , seperti yang diklaim.     Perkalian matrik dengan Perkalian titik (dot product)  Perhatikan matriks-matriks berikut: . Dua baris dari (dalam bentuk tupel) adalah: . Dua kolom dari (dalam bentuk tupel) adalah: . Dengan menggunakan deskripsi hasil kali titik untuk perkalian matriks, kita menghitung: .   Definisi dari produk matriks tentu lebih rumit daripada yang Anda harapkan, dan tampaknya muncul begitu saja tanpa peringatan. Semua ini akan lebih masuk akal begitu kita mulai memandang matriks sebagai pemberi definisi fungsi-fungsi tertentu . Rumus kami untuk entri-entri dipilih secara tepat agar matriks baru ini sesuai dengan komposisi dari fungsi-fungsi dan : sehingga . Dengan interpretasi ini, batasan berat pada dimensi matriks-matriks penyusun memastikan bahwa dua fungsi dan dapat dikomposisikan.   Aritmatika matrik  Kita menggunakan + dan * untuk penjumlahan dan perkalian matriks.   Sebagai bukti fleksibilitas Sage, simbol yang sama * juga digunakan untuk perkalian skalar.   Edit sel di bawah ini untuk mempraktikkan operasi ini.      Transpose Matriks  Kami mengakhiri bagian ini dengan satu operasi terakhir, transpose matriks . Kami tidak akan banyak menggunakan operasi ini hingga nanti, tetapi ini adalah tempat yang tepat untuk memperkenalkannya.   Transpose Matriks  transpose matriks  transpose   Diberikan sebuah matriks  , transpose-nya adalah matriks yang entri -nya adalah entri -nya dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Diberikan sebuah matriks , kita dapat memberikan deskripsi berbasis kolom atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .        Misalkan ; maka .  Misalkan , maka .     Transpose Matriks  Transpose matriks diimplementasikan dalam Sage sebagai metode transpose() . Dalam sel di bawah ini, kami (a) memilih bilangan bulat acak , (b) memilih matriks acak  dengan entri bilangan bulat, dan (c) menghitung transpose dari .   Seperti biasa, eksperimen dengan sel Sage di bawah ini.     "
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
  "body": " Misalkan adalah matriks , argumen induksi sederhana pada menunjukkan bahwa untuk skalar apa pun kita memiliki untuk semua , . (Lihat  "
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
  "body": " Aljabar Matrik   Bab sebelumnya membahas apa yang bisa disebut sebagai aritmatika matriks. Kita mempelajari operasi dasar seperti penjumlahan, perkalian, penskalaan, dan transpose matriks. Dalam bagian ini, kita akan membahas aljabar matriks. Kita akan menyelidiki sifat-sifat (dan ketiadaan sifat-sifat tertentu) dari operasi matriks kita, serta menunjukkan bagaimana menggunakan operasi-operasi ini untuk menyelesaikan persamaan matriks.  Saat Anda mempelajari aljabar matriks, selalu ingat teman lama Anda, yaitu aljabar bilangan real. Secara umum, kedua sistem aljabar ini sangat mirip satu sama lain, seperti yang dijelaskan dalam di bawah ini. Namun, ada dua perbedaan penting antara keduanya : dua sifat penting dari aljabar bilangan real yang tidak berlaku untuk matriks. Akibat dari dua penyimpangan sederhana ini sangat luas dan memberikan kekayaan yang menarik pada aljabar matriks dibandingkan dengan aljabar bilangan real.    Sifat-sifat penjumlahan, perkalian dan perkalian skalar matriks   Sifat-sifat berikut berlaku untuk semua matriks dan skalar untuk ekspresi yang diberikan memiliki makna.   Hukum Komutatif Penjumlahan       Hukum Asosiatif Penjumlahan       Hukum Asosiatif Perkalian       Hukum Distributif Kiri       Hukum Distributif Kanan       Hukum Distributif Penskalaan       Hukum Distributif Penskalaan Lainnya       Hukum Asosiatif Penskalaan       Hukum Komutatif Penskalaan   .       Bagaimana cara membuktikan salah satu sifat ini? Semua ini merupakan kesamaan matriks dalam bentuk , sehingga menurut definisi kesamaan matriks , kita harus menunjukkan (1) bahwa matriks dan memiliki dimensi yang sama, dan (2) bahwa untuk semua . Pembuktian di bawah ini menggambarkan teknik ini untuk hukum asosiatif perkalian dari .   Bukti (iii)  Kami hanya membuktikan hukum asosiatif perkalian . Misalkan , , . Untuk menunjukkan , kita harus menunjukkan (1) bahwa dan memiliki dimensi yang sama, dan (2) bahwa untuk semua kemungkinan .  (1) Pengamatan biasa tentang dimensi dalam dan dimensi luar menunjukkan bahwa baik maupun memiliki dimensi .  (2) Diberikan sembarang dengan dan , kita memiliki:   Ini membuktikan bahwa semua entri dari kedua matriks tersebut sama, sehingga .   Sebagaimana dalam aljabar bilangan real, kita dapat mengidentifikasi beberapa matriks khusus yang bertindak sebagai identitas penjumlahan dan identitas perkalian ; dan setiap matriks memiliki invers penjumlahan . Apa yang kami maksud di sini dijelaskan secara rinci dalam .   Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Diberikan sebuah matriks  , invers penjumlahannya  didefinisikan sebagai .     Identity matrix  identity matrix  matrix identity matrix    inverse matrix     Matriks identitas adalah matriks persegi berukuran  dengan angka satu di sepanjang diagonal dan nol di semua tempat lainnya. Dengan kata lain, untuk semua dan , kita memiliki . Ketika ukuran dari matriks identitas tidak penting, kita sering menotasikannya secara sederhana sebagai .     Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian     Identitas Penjumlahan  Matriks nol berukuran  adalah identitas penjumlahan untuk matriks dalam arti berikut: untuk sembarang matriks  , kita memiliki .    Invers Penjumlahan  Untuk sembarang matriks  , kita memiliki .    Identitas Perkalian  Matriks identitas adalah identitas perkalian untuk matriks dalam arti berikut: untuk sembarang matriks  , kita memiliki .       Sifat Matrik Transpose  Properti berikut berlaku untuk semua matriks dan skalar yang ekspresinya masuk akal.                           Kami hanya membuktikan pernyataan pertama. Pertama, perhatikan bahwa jika berukuran , maka demikian pula dan . Kemudian adalah berdasarkan . Demikian pula, kita melihat bahwa juga berukuran .  Selanjutnya, untuk sembarang dengan , , kita memiliki . Karena entri dari kedua matriks tersebut sama untuk setiap , maka dapat disimpulkan bahwa .       "
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
},
{
  "id": "s_invertible_matrices",
  "level": "1",
  "url": "s_invertible_matrices.html",
  "type": "Section",
  "number": "0.3",
  "title": "Invertible matrices",
  "body": " Invertible matrices   Picking up the thread of , we observe that the cancellation property enjoyed in real number algebra is a consequence of the fact that every nonzero real number has a multiplicative inverse , denoted or , that satisfies . Indeed, canceling the in the equation (assuming ) is really the act of multiplying both sides of this equation by the multiplicative inverse .  Ever on the lookout for connections between real number and matrix algebra, we ask whether there is a sensible analogue of multiplicative inverses for matrices. We have seen already that identity matrices play the role of multiplicative identities for matrices, just as the number does for real numbers. This suggests we should restrict our attention to matrices. The following definition is then the desired analogue of the multiplicative inverse of a nonzero real number.    Invertible matrices   Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .    The phrase an inverse in is somewhat jarring. Shouldn't we speak of the inverse of a matrix? Not surprisingly, if a matrix is invertible, then it has one and only one inverse. As intuitive as this fact may seem, however, it still requires proof.   Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .     Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.   The next theorem tells us that we can multiplicatively cancel a matrix if it is invertible .   Solving with invertible matrices   Suppose is an invertible matrix. Then for any matrices and , and for any matrices and .  In other words, matrix equations of this sort have unique solutions obtained by multiplying on the left or right by .    We give a proof only for the the first equation: . To show the equivalence we must show the two implications and . To this end, we have , and .    Without any additional theory at our disposal, to show a matrix is invertible we must exhibit an inverse. The onus is on us to find a matrix satisfying both and . (Remember: since we cannot assume , we really need to show both equations hold.)  By the same token, to show is not invertible we must show that an inverse does not exist: that is, we must prove that there is no satisfying . The next example illustrates this technique for a variety of matrices.       Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.       As the preceding example illustrates, deciding whether a matrix is invertible is not so straightforward, especially if the matrix is large. For the case, however, we have a relatively simple test for invertibility. (We will generalize this to the case in .)   Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .     If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.    Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.        The next theorem tells us that invertibility is preserved by matrix multiplication: that is, if and are invertible matrices, then so is .   Invertibility of products   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .     Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .     More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .     We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .      Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.     Powers of matrices, matrix polynomials  We end this section by exploring how the matrix inverse operation fits into our matrix algebra. First, we can now use the inverse operation to define matrix powers of the form , where is a square matrix and is an arbitrary integer.   Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .    Equipped with a notion of matrix powers, we can further define matrix polynomials for square matrices.   matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .    It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense.   Matrix polynomials   Let . Evaluate at the matrices and .    We have and .     Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.     Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .     Inverse and transpose   Let be invertible. Then is invertible and .    Suppose is invertible with inverse . The theorem claims is invertible, and that in fact . To prove this, we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .       WeBWork Exercises      If and are invertible matrices, then the inverse of is .     True    False          SOLUTION: False. For example, let , and , then , which is not invertible.            Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that            Are the following matrices invertible?                          For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .            Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                      Written Exercises    For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .        Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                       Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.      Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.      Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.      Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .                  Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.      Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.      Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.       Expanding matrix products  Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on .    Polynomial expressions of commute   Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .       Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .      "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#d_invertible_matrix",
  "type": "Definition",
  "number": "0.3.1",
  "title": "Invertible matrix.",
  "body": " Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .   "
},
{
  "id": "th_inverse_unique",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_unique",
  "type": "Theorem",
  "number": "0.3.2",
  "title": "Inverses are unique.",
  "body": " Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .   "
},
{
  "id": "subsec--5",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--5",
  "type": "Proof",
  "number": "0.3.1.1",
  "title": "",
  "body": " Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.  "
},
{
  "id": "th_inverse_cancel",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_cancel",
  "type": "Theorem",
  "number": "0.3.3",
  "title": "Solving with invertible matrices.",
  "body": " Solving with invertible matrices   Suppose is an invertible matrix. Then for any matrices and , and for any matrices and .  In other words, matrix equations of this sort have unique solutions obtained by multiplying on the left or right by .    We give a proof only for the the first equation: . To show the equivalence we must show the two implications and . To this end, we have , and .   "
},
{
  "id": "ex_invertible_matrices",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_invertible_matrices",
  "type": "Example",
  "number": "0.3.4",
  "title": "",
  "body": "     Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.      "
},
{
  "id": "th_2by2_inverse",
  "level": "2",
  "url": "s_invertible_matrices.html#th_2by2_inverse",
  "type": "Theorem",
  "number": "0.3.5",
  "title": "Inverses of <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .   "
},
{
  "id": "subsec--13",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--13",
  "type": "Proof",
  "number": "0.3.1.2",
  "title": "",
  "body": " If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.  "
},
{
  "id": "subsec--14",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--14",
  "type": "Sage example",
  "number": "4",
  "title": "Invertible matrices.",
  "body": " Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.       "
},
{
  "id": "th_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#th_invertible_prod",
  "type": "Theorem",
  "number": "0.3.6",
  "title": "Invertibility of products.",
  "body": " Invertibility of products   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .   "
},
{
  "id": "subsec--17",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--17",
  "type": "Proof",
  "number": "0.3.1.3",
  "title": "",
  "body": " Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .  "
},
{
  "id": "c_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#c_invertible_prod",
  "type": "Corollary",
  "number": "0.3.7",
  "title": "",
  "body": "  More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .   "
},
{
  "id": "subsec--19",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--19",
  "type": "Proof",
  "number": "0.3.1.4",
  "title": "",
  "body": " We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .    "
},
{
  "id": "subsec--20",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--20",
  "type": "Remark",
  "number": "0.3.8",
  "title": "",
  "body": " Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.  "
},
{
  "id": "d_matrix_powers",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_powers",
  "type": "Definition",
  "number": "0.3.9",
  "title": "Matrix powers.",
  "body": " Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .   "
},
{
  "id": "d_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_polynomials",
  "type": "Definition",
  "number": "0.3.10",
  "title": "",
  "body": " matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .   "
},
{
  "id": "rem_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#rem_matrix_polynomials",
  "type": "Remark",
  "number": "0.3.11",
  "title": "",
  "body": "It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense. "
},
{
  "id": "s_invertible_matrices-4-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-7",
  "type": "Example",
  "number": "0.3.12",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials   Let . Evaluate at the matrices and .    We have and .   "
},
{
  "id": "s_invertible_matrices-4-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-8",
  "type": "Sage example",
  "number": "5",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.   "
},
{
  "id": "th_power_rules",
  "level": "2",
  "url": "s_invertible_matrices.html#th_power_rules",
  "type": "Theorem",
  "number": "0.3.13",
  "title": "Properties of matrix powers.",
  "body": " Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .   "
},
{
  "id": "th_inverse_trans",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_trans",
  "type": "Theorem",
  "number": "0.3.14",
  "title": "Inverse and transpose.",
  "body": " Inverse and transpose   Let be invertible. Then is invertible and .    Suppose is invertible with inverse . The theorem claims is invertible, and that in fact . To prove this, we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .   "
},
{
  "id": "s_invertible_matrices_ex-1-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-2",
  "type": "Exercise",
  "number": "0.3.3.1",
  "title": "",
  "body": "    If and are invertible matrices, then the inverse of is .     True    False          SOLUTION: False. For example, let , and , then , which is not invertible.       "
},
{
  "id": "s_invertible_matrices_ex-1-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-3",
  "type": "Exercise",
  "number": "0.3.3.2",
  "title": "",
  "body": "    Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that       "
},
{
  "id": "s_invertible_matrices_ex-1-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-4",
  "type": "Exercise",
  "number": "0.3.3.3",
  "title": "",
  "body": "    Are the following matrices invertible?                     "
},
{
  "id": "s_invertible_matrices_ex-1-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-5",
  "type": "Exercise",
  "number": "0.3.3.4",
  "title": "",
  "body": "    For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .       "
},
{
  "id": "s_invertible_matrices_ex-1-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-6",
  "type": "Exercise",
  "number": "0.3.3.5",
  "title": "",
  "body": "    Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                   "
},
{
  "id": "s_invertible_matrices_ex-2-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-2",
  "type": "Exercise",
  "number": "0.3.3.6",
  "title": "",
  "body": "  For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .     "
},
{
  "id": "s_invertible_matrices_ex-2-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-3",
  "type": "Exercise",
  "number": "0.3.3.7",
  "title": "",
  "body": "  Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                    "
},
{
  "id": "s_invertible_matrices_ex-2-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-4",
  "type": "Exercise",
  "number": "0.3.3.8",
  "title": "",
  "body": "  Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.   "
},
{
  "id": "s_invertible_matrices_ex-2-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-5",
  "type": "Exercise",
  "number": "0.3.3.9",
  "title": "",
  "body": "  Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.      Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.   "
},
{
  "id": "s_invertible_matrices_ex-2-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-6",
  "type": "Exercise",
  "number": "0.3.3.10",
  "title": "",
  "body": "  Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .               "
},
{
  "id": "s_invertible_matrices_ex-2-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-7",
  "type": "Exercise",
  "number": "0.3.3.11",
  "title": "",
  "body": "  Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.   "
},
{
  "id": "s_invertible_matrices_ex-2-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-8",
  "type": "Exercise",
  "number": "0.3.3.12",
  "title": "",
  "body": "  Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.   "
},
{
  "id": "s_invertible_matrices_ex-2-9",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-9",
  "type": "Exercise",
  "number": "0.3.3.13",
  "title": "",
  "body": "  Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.     "
},
{
  "id": "ex_expand_matrix_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_expand_matrix_prod",
  "type": "Exercise",
  "number": "0.3.3.14",
  "title": "Expanding matrix products.",
  "body": " Expanding matrix products  Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on .  "
},
{
  "id": "ex_poly_inA_commute",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_poly_inA_commute",
  "type": "Exercise",
  "number": "0.3.3.15",
  "title": "Polynomial expressions of <span class=\"process-math\">\\(A\\)<\/span> commute.",
  "body": " Polynomial expressions of commute   Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .    "
},
{
  "id": "s_invertible_matrices_ex-2-12",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-12",
  "type": "Exercise",
  "number": "0.3.3.16",
  "title": "",
  "body": "  Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .   "
},
{
  "id": "sec-vectors-lin-combs",
  "level": "1",
  "url": "sec-vectors-lin-combs.html",
  "type": "Section",
  "number": "0.4",
  "title": "Vectors and linear combinations",
  "body": " Vectors and linear combinations   It is a remarkable fact that algebra, which is about symbolic equations and their solutions, and geometry are intimately connected. For instance, the solution set of a linear equation in two unknowns, such as , can be represented graphically by a straight line. The aim of this section is to further this connection by introducing vectors, which will help us to apply geometric intuition to our thinking about linear systems.    Vectors   vector A vector is most simply thought of as a matrix with a single column. For instance, and are both vectors. The entries in a vector are called its components. Since the vector has two components, we say that it is a two-dimensional vector; in the same way, the vector is a four-dimensional vector.  We denote the set of all -dimensional vectors by . Consequently, if is a 3-dimensional vector, we say that is in .  While it can be difficult to visualize a four-dimensional vector, we can draw a simple picture describing the two-dimensional vector , as shown in .  A graphical representation of the vector .       We can think of as describing a walk in the plane where we move two units horizontally and one unit vertically. Though we allow ourselves to begin walking from any point in the plane, we will most frequently begin at the origin in which case we arrive at the the point , as shown in the figure.  There are two simple algebraic operations we often perform on vectors.  Scalar Multiplication  scalar multiplication  We multiply a vector by a real number by multiplying each of the components of by . For instance, We will frequently refer to real numbers, such as -3 in this example, as scalars to distinguish them from vectors.   Vector Addition  vector addition  We add two vectors of the same dimension by adding their components. For instance,       Scalar Multiplication and Vector Addition   Suppose that      Find expressions for the vectors and sketch them using .  Sketch the vectors on this grid.         What geometric effect does scalar multiplication have on a vector? Also, describe the effect that multiplying by a negative scalar has.   Sketch the vectors using .  Sketch the vectors on this grid.         Consider vectors that have the form where is any scalar. Sketch a few of these vectors when, say, and . Give a geometric description of this set of vectors.  Sketch the vectors on this grid.        If and are two scalars, then the vector is called a linear combination of the vectors and . Find the vector that is the linear combination when and .    Can the vector be represented as a linear combination of and ? Asked differently, can we find scalars and such that .      Solutions to this preview activity are given in the text below.    The preview activity demonstrates how we may interpret scalar multiplication and vector addition geometrically.  First, we see that scalar multiplication has the effect of stretching or compressing a vector. Multiplying by a negative scalar changes the direction of the vector. In either case, shows that a scalar multiple of a vector lies on the same line defined by .     Scalar multiples of the vector .    To represent the sum , we imagine walking from the origin with the appropriate horizontal and vertical changes given by . From there, we continue our walk using the horizontal and vertical changes prescribed by , after which we arrive at the sum . This is illustrated on the left of where the tail of is placed on the tip of .      Vector addition as a simple walk in the plane is illustrated on the left. The vector sum is represented as the diagonal of a parallelogram on the right.    Alternatively, we may construct the parallelogram with and as two sides. The sum is then the diagonal of the parallelogram, as illustrated on the right of .  We have now seen that the set of vectors having the form is a line. To form the set of vectors , we can begin with the vector and add multiples of . Geometrically, this means that we begin from the tip of and move in a direction parallel to . The effect is to translate the line by the vector , as shown in .     The set of vectors form a line.    At times, it will be useful for us to think of vectors and points interchangeably. That is, we may wish to think of the vector as describing the point and vice-versa. When we say that the vectors having the form form a line, we really mean that the tips of the vectors all lie on the line passing through and parallel to .   Even though these vector operations are new, it is straightforward to check that some familiar properties hold.   Commutativity   .   Distributivity   .     Sage can perform scalar multiplication and vector addition. We define a vector using the vector command; then * and + denote scalar multiplication and vector addition.     Linear combinations  Linear combinations, which we encountered in the preview activity, provide the link between vectors and linear systems. In particular, they will help us apply geometric intuition to problems involving linear systems.   linear combination  weights  The linear combination of the vectors with scalars is the vector The scalars are called the weights of the linear combination.     In this activity, we will look at linear combinations of a pair of vectors, and .   Linear combinations of vectors and .      The weight is initially set to 0. Explain what happens as you vary while keeping . How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   Describe the vectors that arise when the weight is set to 1 and is varied. How is this related to our investigations in the preview activity?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?       When we vary with , the linear combination moves along the line defined by .  When and , we find   When and is allowed to vary, the linear combinations lie on the line through parallel to .  If the weights and , then the linear combination is the vector .  If the weights and , then the linear combination is the vector .  We find the linear system for the weights: If we construct the corresponding augmented matrix and determine its reduced row echelon matrix, we find the weights and .  In the same way, we construct a linear system for the weights whose augmented matrix is which shows that there are weights that produce the desired linear combination. The same will happen for any vector that we ask to write as a linear combination of and .  Every two-dimensional vector can be written as a linear combination of and because the coefficient matrix of the linear system remains the same. Since that coefficient matrix has a pivot position in every row, the augmented matrix can never have a pivot position in the rightmost column.        The linear combinations lie on the line defined by .   .  They lie on the line through parallel to .  Yes, with weights .  Yes, with weights and .  This can be done by writing the appropriate linear system for the weights.  No, any two-dimensional vector can be expressed as a linear combination of and .      This activity illustrates how linear combinations are constructed geometrically: the linear combination is found by walking along a total of times followed by walking along a total of times. When one of the weights is held constant while the other varies, the vector moves along a line.    The previous activity also shows that questions about linear combinations lead naturally to linear systems. Suppose we have vectors and . Let's determine whether we can describe the vector as a linear combination of and . In other words, we would like to know whether there are weights and such that   This leads to the equations   Equating the components of the vectors on each side of the equation, we arrive at the linear system This means that is a linear combination of and if this linear system is consistent.  To solve this linear system, we construct its corresponding augmented matrix and find its reduced row echelon form, giving us the weights and ; that is, . In fact, we know more because the reduced row echelon matrix tells us that these are the only possible weights. Therefore, may be expressed as a linear combination of and in exactly one way.    This example demonstrates the connection between linear combinations and linear systems. Asking whether a vector is a linear combination of vectors is equivalent to asking whether an associated linear system is consistent.  In fact, we may easily describe the associated linear system in terms of the vectors , , and . Notice that the augmented matrix we found in our example was The first two columns of this matrix are and and the rightmost column is . As shorthand, we will write this augmented matrix replacing the columns with their vector representation: . This fact is generally true so we record it in the following proposition.    The vector is a linear combination of the vectors if and only if the linear system corresponding to the augmented matrix is consistent. A solution to this linear system gives weights such that .    The next activity puts this proposition to use.   Linear combinations and linear systems     Given the vectors , can be expressed as a linear combination of , , and ? Rephrase this question by writing a linear system for the weights , , and and use the Sage cell below to answer this question.   Consider the following linear system. Identify vectors , , , and such that the question \"Is this linear system consistent?\" is equivalent to the question \"Can be expressed as a linear combination of , , and ?\"   Consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.   Now consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.        We find the linear system with corresponding augmented matrix This shows that the linear system is inconsistent so there are no such weights , , and . This means that is not a linear combination of , , and .  We find vectors   This is the same as asking if the linear system corresponding to the following augmented matrix is consistent: From the reduced row echelon form, we see that the system is consistent, which means that can be expressed as a linear combination of , , and . Moreover, there are infinitely many ways in which we can do so.  No, it is not possible to write every three-dimensional as a linear combination of , , and because the matrix does not have a pivot position in every row. This means that, with some choice of vector , we will obtain an inconsistent system.  We find the augmented matrix This shows that can be expressed as a linear combination of , , and in exactly one way.  Every vector can be expressed as a linear combination of , , and in exactly one way because has a pivot position in every row and every column.        The vector cannot be expressed as a linear combination of , , and .  We find vectors   Yes, can be expressed as a linear combination of , , and in infinitely many ways.  No.  Yes, can be expressed as a linear combination of , , and in exactly one way.  Any vector can be expressed as a linear combination of , , and in exactly one way.        Consider the vectors and , as shown in .   Vectors and .      These vectors appear to lie on the same line, a fact that becomes apparent once we notice that . Intuitively, we think of the linear combination as the result of walking times in the direction and times in the direction. With these vectors, we are always walking along the same line so it would seem that any linear combination of these vectors should lie on the same line. In addition, a vector that is not on the line, say , should be not be expressible as a linear combination of and .  We can verify this by checking This shows that the associated linear system is inconsistent, which means that the vector cannot be written as a linear combination of and .  Notice that the reduced row echelon form of the coefficient matrix tells us to expect this. Since there is not a pivot position in the second row of the coefficient matrix , it is possible for a pivot position to appear in the rightmost column of the augmented matrix for some choice of .      Summary  This section has introduced vectors, linear combinations, and their connection to linear systems.   There are two operations we can perform with vectors: scalar multiplication and vector addition. Both of these operations have geometric meaning.   Given a set of vectors and a set of scalars we call weights, we can create a linear combination using scalar multiplication and vector addition.   A solution to the linear system whose augmented matrix is is a set of weights that expresses as a linear combination of .        Consider the vectors    Sketch these vectors below.     Compute the vectors , , , and and add them into the sketch above.  Sketch below the set of vectors having the form where is any scalar.     Sketch below the line . Then identify two vectors and so that this line is described by . Are there other choices for the vectors and ?                    This forms the line passing through parallel to .  There are many possibilities. One is and .                This forms the line passing through parallel to .  There are many possibilities. One is and .       Shown below are two vectors and       Express the labeled points as linear combinations of and .   Sketch the line described parametrically as .       We have   This is the line passing through parallel to .      We have   This is the line passing through parallel to .       Consider the vectors    Find the linear combination with weights , , and .   Can you write the vector as a linear combination of , , and ? If so, describe all the ways in which you can do so.    Can you write the vector as a linear combination using just the first two vectors  ? If so, describe all the ways in which you can do so.    Can you write as a linear combination of and ? If so, in how many ways?       The linear combination   The appropriate linear system corresponds to the augmented matrix This shows we obtain when the weights are chosen so that   In this case, we want , which means that .  We see that .      The linear combination    and .   .   .       Nutritional information about a breakfast cereal is printed on the box. For instance, one serving of Frosted Flakes has 111 calories, 140 milligrams of sodium, and 1.2 grams of protein. We may represent this as a vector . One serving of Cocoa Puffs has 120 calories, 105 milligrams of sodium, and 1.0 grams of protein.    Write the vector describing the nutritional content of Cocoa Puffs.   Suppose you eat servings of Frosted Flakes and servings of Cocoa Puffs. Use the language of vectors and linear combinations to express the quantities of calories, sodium, and protein you have consumed.   How many servings of each cereal have you eaten if you have consumed 342 calories, 385 milligrams of sodium, and 3.4 grams of protein.   Suppose your sister consumed 250 calories, 200 milligrams of sodium, and 4 grams of protein. What can you conclude about her breakfast?       .  The totals consumed are expressed by the vector   We ask to write the vector as a linear combination of the two cereal vectors. This leads to the augmented matrix This means that you had two servings of Frosted Flakes and one serving of Cocoa Puffs.  Now the augmented matrix is which represents an inconsistent system. This means that your sister must have eaten something else.       .  The totals consumed are expressed by the vector   You had two servings of Frosted Flakes and one serving of Cocoa Puffs.  Your sister must have eaten something else.       Consider the vectors     Can you express the vector as a linear combination of , , and ? If so, describe all the ways in which you can do so.   Can you express the vector as a linear combination of , , and ? If so, describe all the ways in which you can do so.   Show that can be written as a linear combination of and .   Explain why any linear combination of , , and , can be rewritten as a linear combination of just and .      We have the system corresponding to the augmented matrix from which we conclude that may be expressed as a linear combination of , , and provided that the weights are related by and .  Here we have which represents an inconsistent system and shows that cannot be written as a linear combination of , , and .  The augmented matrix is which shows that .   .      The vector may be expressed as a linear combination of , , and provided that the weights are related by and .  The vector cannot be written as a linear combination of , , and .   .   .       Consider the vectors For what value(s) of , if any, can the vector be written as a linear combination of and ?    We form the augmented matrix and find a triangular matrix that is row equivalent: This represents a consistent system when .     .      Determine whether the following statements are true or false and provide a justification for your response.  Given two vectors and , the vector is a linear combination of and .  Suppose is a collection of -dimensional vectors and that the matrix has a pivot position in every row. If is any -dimensional vector, then can be written as a linear combination of .  Suppose is a collection of -dimensional vectors and that the matrix has a pivot position in every row and every column. If is any -dimensional vector, then can be written as a linear combination of in exactly one way.  It is possible to find two 3-dimensional vectors and such that every 3-dimensional vector can be written as a linear combination of and .       True, because we can choose the weights and .  True, because the augmented matrix can never have a pivot position in the rightmost column.  True, because the augmented matrix can never have a pivot position in the rightmost column and the corresponding linear system cannot have a free variable.  False, because it is possible to choose a vector such that the augmented matrix has a pivot in the rightmost column.      True  True  True  False       A theme that will later unfold concerns the use of coordinate systems. We can identify the point with the tip of the vector , drawn emanating from the origin. We can then think of the usual Cartesian coordinate system in terms of linear combinations of the vectors For instance, the point is identified with the vector as shown on the left in .       The usual Cartesian coordinate system, defined by the vectors and , is shown on the left along with the representation of the point . The right shows a nonstandard coordinate system defined by vectors and .   If instead we have vectors , we may define a new coordinate system in which a point will correspond to the vector . For instance, the point is shown on the right side of .  Write the point in standard coordinates; that is, find and such that .   Write the point in the new coordinate system; that is, find and such that .   Convert a general point , expressed in the new coordinate system, into standard Cartesian coordinates .   What is the general strategy for converting a point from standard Cartesian coordinates to the new coordinates ? Actually implementing this strategy in general may take a bit of work so just describe the strategy. We will study this in more detail later.      We have   We have . Solving this equation, we find and , which means that .  As in the first part of this problem, we write   We want to solve by constructing the augmented matrix and finding its reduced row echelon form.        .   .     Solve the linear system corresponding to the augmented matrix       "
},
{
  "id": "fig-vector",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-vector",
  "type": "Figure",
  "number": "0.4.1",
  "title": "",
  "body": " A graphical representation of the vector .     "
},
{
  "id": "sec-vectors-lin-combs-3-7",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-3-7",
  "type": "Exploration",
  "number": "6",
  "title": "Scalar Multiplication and Vector Addition.",
  "body": " Scalar Multiplication and Vector Addition   Suppose that      Find expressions for the vectors and sketch them using .  Sketch the vectors on this grid.         What geometric effect does scalar multiplication have on a vector? Also, describe the effect that multiplying by a negative scalar has.   Sketch the vectors using .  Sketch the vectors on this grid.         Consider vectors that have the form where is any scalar. Sketch a few of these vectors when, say, and . Give a geometric description of this set of vectors.  Sketch the vectors on this grid.        If and are two scalars, then the vector is called a linear combination of the vectors and . Find the vector that is the linear combination when and .    Can the vector be represented as a linear combination of and ? Asked differently, can we find scalars and such that .      Solutions to this preview activity are given in the text below.   "
},
{
  "id": "fig-scalar-mult",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-scalar-mult",
  "type": "Figure",
  "number": "0.4.5",
  "title": "",
  "body": "    Scalar multiples of the vector .  "
},
{
  "id": "fig-vector-sum",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-vector-sum",
  "type": "Figure",
  "number": "0.4.6",
  "title": "",
  "body": "     Vector addition as a simple walk in the plane is illustrated on the left. The vector sum is represented as the diagonal of a parallelogram on the right.  "
},
{
  "id": "fig-parametric-line",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-parametric-line",
  "type": "Figure",
  "number": "0.4.7",
  "title": "",
  "body": "    The set of vectors form a line.  "
},
{
  "id": "sec-vectors-lin-combs-3-14",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-3-14",
  "type": "Observation",
  "number": "0.4.8",
  "title": "",
  "body": " Even though these vector operations are new, it is straightforward to check that some familiar properties hold.   Commutativity   .   Distributivity   .    "
},
{
  "id": "sec-vectors-lin-combs-4-3",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-3",
  "type": "Definition",
  "number": "0.4.9",
  "title": "",
  "body": " linear combination  weights  The linear combination of the vectors with scalars is the vector The scalars are called the weights of the linear combination.  "
},
{
  "id": "sec-vectors-lin-combs-4-4",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-4",
  "type": "Activity",
  "number": "7",
  "title": "",
  "body": "  In this activity, we will look at linear combinations of a pair of vectors, and .   Linear combinations of vectors and .      The weight is initially set to 0. Explain what happens as you vary while keeping . How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   Describe the vectors that arise when the weight is set to 1 and is varied. How is this related to our investigations in the preview activity?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?       When we vary with , the linear combination moves along the line defined by .  When and , we find   When and is allowed to vary, the linear combinations lie on the line through parallel to .  If the weights and , then the linear combination is the vector .  If the weights and , then the linear combination is the vector .  We find the linear system for the weights: If we construct the corresponding augmented matrix and determine its reduced row echelon matrix, we find the weights and .  In the same way, we construct a linear system for the weights whose augmented matrix is which shows that there are weights that produce the desired linear combination. The same will happen for any vector that we ask to write as a linear combination of and .  Every two-dimensional vector can be written as a linear combination of and because the coefficient matrix of the linear system remains the same. Since that coefficient matrix has a pivot position in every row, the augmented matrix can never have a pivot position in the rightmost column.        The linear combinations lie on the line defined by .   .  They lie on the line through parallel to .  Yes, with weights .  Yes, with weights and .  This can be done by writing the appropriate linear system for the weights.  No, any two-dimensional vector can be expressed as a linear combination of and .     "
},
{
  "id": "sec-vectors-lin-combs-4-6",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-6",
  "type": "Example",
  "number": "0.4.11",
  "title": "",
  "body": "  The previous activity also shows that questions about linear combinations lead naturally to linear systems. Suppose we have vectors and . Let's determine whether we can describe the vector as a linear combination of and . In other words, we would like to know whether there are weights and such that   This leads to the equations   Equating the components of the vectors on each side of the equation, we arrive at the linear system This means that is a linear combination of and if this linear system is consistent.  To solve this linear system, we construct its corresponding augmented matrix and find its reduced row echelon form, giving us the weights and ; that is, . In fact, we know more because the reduced row echelon matrix tells us that these are the only possible weights. Therefore, may be expressed as a linear combination of and in exactly one way.   "
},
{
  "id": "prop-system-comb",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#prop-system-comb",
  "type": "Proposition",
  "number": "0.4.12",
  "title": "",
  "body": "  The vector is a linear combination of the vectors if and only if the linear system corresponding to the augmented matrix is consistent. A solution to this linear system gives weights such that .   "
},
{
  "id": "sec-vectors-lin-combs-4-11",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-11",
  "type": "Activity",
  "number": "8",
  "title": "Linear combinations and linear systems.",
  "body": " Linear combinations and linear systems     Given the vectors , can be expressed as a linear combination of , , and ? Rephrase this question by writing a linear system for the weights , , and and use the Sage cell below to answer this question.   Consider the following linear system. Identify vectors , , , and such that the question \"Is this linear system consistent?\" is equivalent to the question \"Can be expressed as a linear combination of , , and ?\"   Consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.   Now consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.        We find the linear system with corresponding augmented matrix This shows that the linear system is inconsistent so there are no such weights , , and . This means that is not a linear combination of , , and .  We find vectors   This is the same as asking if the linear system corresponding to the following augmented matrix is consistent: From the reduced row echelon form, we see that the system is consistent, which means that can be expressed as a linear combination of , , and . Moreover, there are infinitely many ways in which we can do so.  No, it is not possible to write every three-dimensional as a linear combination of , , and because the matrix does not have a pivot position in every row. This means that, with some choice of vector , we will obtain an inconsistent system.  We find the augmented matrix This shows that can be expressed as a linear combination of , , and in exactly one way.  Every vector can be expressed as a linear combination of , , and in exactly one way because has a pivot position in every row and every column.        The vector cannot be expressed as a linear combination of , , and .  We find vectors   Yes, can be expressed as a linear combination of , , and in infinitely many ways.  No.  Yes, can be expressed as a linear combination of , , and in exactly one way.  Any vector can be expressed as a linear combination of , , and in exactly one way.     "
},
{
  "id": "sec-vectors-lin-combs-4-12",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-12",
  "type": "Example",
  "number": "0.4.13",
  "title": "",
  "body": "  Consider the vectors and , as shown in .   Vectors and .      These vectors appear to lie on the same line, a fact that becomes apparent once we notice that . Intuitively, we think of the linear combination as the result of walking times in the direction and times in the direction. With these vectors, we are always walking along the same line so it would seem that any linear combination of these vectors should lie on the same line. In addition, a vector that is not on the line, say , should be not be expressible as a linear combination of and .  We can verify this by checking This shows that the associated linear system is inconsistent, which means that the vector cannot be written as a linear combination of and .  Notice that the reduced row echelon form of the coefficient matrix tells us to expect this. Since there is not a pivot position in the second row of the coefficient matrix , it is possible for a pivot position to appear in the rightmost column of the augmented matrix for some choice of .   "
},
{
  "id": "sec-vectors-lin-combs-6-1",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-1",
  "type": "Exercise",
  "number": "0.4.4.1",
  "title": "",
  "body": "  Consider the vectors    Sketch these vectors below.     Compute the vectors , , , and and add them into the sketch above.  Sketch below the set of vectors having the form where is any scalar.     Sketch below the line . Then identify two vectors and so that this line is described by . Are there other choices for the vectors and ?                    This forms the line passing through parallel to .  There are many possibilities. One is and .                This forms the line passing through parallel to .  There are many possibilities. One is and .    "
},
{
  "id": "sec-vectors-lin-combs-6-2",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-2",
  "type": "Exercise",
  "number": "0.4.4.2",
  "title": "",
  "body": "  Shown below are two vectors and       Express the labeled points as linear combinations of and .   Sketch the line described parametrically as .       We have   This is the line passing through parallel to .      We have   This is the line passing through parallel to .    "
},
{
  "id": "sec-vectors-lin-combs-6-3",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-3",
  "type": "Exercise",
  "number": "0.4.4.3",
  "title": "",
  "body": "  Consider the vectors    Find the linear combination with weights , , and .   Can you write the vector as a linear combination of , , and ? If so, describe all the ways in which you can do so.    Can you write the vector as a linear combination using just the first two vectors  ? If so, describe all the ways in which you can do so.    Can you write as a linear combination of and ? If so, in how many ways?       The linear combination   The appropriate linear system corresponds to the augmented matrix This shows we obtain when the weights are chosen so that   In this case, we want , which means that .  We see that .      The linear combination    and .   .   .    "
},
{
  "id": "sec-vectors-lin-combs-6-4",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-4",
  "type": "Exercise",
  "number": "0.4.4.4",
  "title": "",
  "body": "  Nutritional information about a breakfast cereal is printed on the box. For instance, one serving of Frosted Flakes has 111 calories, 140 milligrams of sodium, and 1.2 grams of protein. We may represent this as a vector . One serving of Cocoa Puffs has 120 calories, 105 milligrams of sodium, and 1.0 grams of protein.    Write the vector describing the nutritional content of Cocoa Puffs.   Suppose you eat servings of Frosted Flakes and servings of Cocoa Puffs. Use the language of vectors and linear combinations to express the quantities of calories, sodium, and protein you have consumed.   How many servings of each cereal have you eaten if you have consumed 342 calories, 385 milligrams of sodium, and 3.4 grams of protein.   Suppose your sister consumed 250 calories, 200 milligrams of sodium, and 4 grams of protein. What can you conclude about her breakfast?       .  The totals consumed are expressed by the vector   We ask to write the vector as a linear combination of the two cereal vectors. This leads to the augmented matrix This means that you had two servings of Frosted Flakes and one serving of Cocoa Puffs.  Now the augmented matrix is which represents an inconsistent system. This means that your sister must have eaten something else.       .  The totals consumed are expressed by the vector   You had two servings of Frosted Flakes and one serving of Cocoa Puffs.  Your sister must have eaten something else.    "
},
{
  "id": "sec-vectors-lin-combs-6-5",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-5",
  "type": "Exercise",
  "number": "0.4.4.5",
  "title": "",
  "body": "  Consider the vectors     Can you express the vector as a linear combination of , , and ? If so, describe all the ways in which you can do so.   Can you express the vector as a linear combination of , , and ? If so, describe all the ways in which you can do so.   Show that can be written as a linear combination of and .   Explain why any linear combination of , , and , can be rewritten as a linear combination of just and .      We have the system corresponding to the augmented matrix from which we conclude that may be expressed as a linear combination of , , and provided that the weights are related by and .  Here we have which represents an inconsistent system and shows that cannot be written as a linear combination of , , and .  The augmented matrix is which shows that .   .      The vector may be expressed as a linear combination of , , and provided that the weights are related by and .  The vector cannot be written as a linear combination of , , and .   .   .    "
},
{
  "id": "sec-vectors-lin-combs-6-6",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-6",
  "type": "Exercise",
  "number": "0.4.4.6",
  "title": "",
  "body": "  Consider the vectors For what value(s) of , if any, can the vector be written as a linear combination of and ?    We form the augmented matrix and find a triangular matrix that is row equivalent: This represents a consistent system when .     .   "
},
{
  "id": "sec-vectors-lin-combs-6-7",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-7",
  "type": "Exercise",
  "number": "0.4.4.7",
  "title": "",
  "body": "  Determine whether the following statements are true or false and provide a justification for your response.  Given two vectors and , the vector is a linear combination of and .  Suppose is a collection of -dimensional vectors and that the matrix has a pivot position in every row. If is any -dimensional vector, then can be written as a linear combination of .  Suppose is a collection of -dimensional vectors and that the matrix has a pivot position in every row and every column. If is any -dimensional vector, then can be written as a linear combination of in exactly one way.  It is possible to find two 3-dimensional vectors and such that every 3-dimensional vector can be written as a linear combination of and .       True, because we can choose the weights and .  True, because the augmented matrix can never have a pivot position in the rightmost column.  True, because the augmented matrix can never have a pivot position in the rightmost column and the corresponding linear system cannot have a free variable.  False, because it is possible to choose a vector such that the augmented matrix has a pivot in the rightmost column.      True  True  True  False    "
},
{
  "id": "sec-vectors-lin-combs-6-8",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-6-8",
  "type": "Exercise",
  "number": "0.4.4.8",
  "title": "",
  "body": "  A theme that will later unfold concerns the use of coordinate systems. We can identify the point with the tip of the vector , drawn emanating from the origin. We can then think of the usual Cartesian coordinate system in terms of linear combinations of the vectors For instance, the point is identified with the vector as shown on the left in .       The usual Cartesian coordinate system, defined by the vectors and , is shown on the left along with the representation of the point . The right shows a nonstandard coordinate system defined by vectors and .   If instead we have vectors , we may define a new coordinate system in which a point will correspond to the vector . For instance, the point is shown on the right side of .  Write the point in standard coordinates; that is, find and such that .   Write the point in the new coordinate system; that is, find and such that .   Convert a general point , expressed in the new coordinate system, into standard Cartesian coordinates .   What is the general strategy for converting a point from standard Cartesian coordinates to the new coordinates ? Actually implementing this strategy in general may take a bit of work so just describe the strategy. We will study this in more detail later.      We have   We have . Solving this equation, we find and , which means that .  As in the first part of this problem, we write   We want to solve by constructing the augmented matrix and finding its reduced row echelon form.        .   .     Solve the linear system corresponding to the augmented matrix     "
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

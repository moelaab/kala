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
  "body": " Aritmatika Matrik   Sistem Linier Matriks sangat penting didalam pembahasan sistem linier. Dalam bab ini, kita akan membahasnya secara mendalam tentang matrik untuk sistem linier. Oleh karena itu kita akan membahasnya pada bab ini    Dasar dasar Matrik Kita mulai dengan beberapa definisi dasar tentang matriks, persamaan matriks, dan jenis jenis matriks tertentu. Seperti yang dijelaskan dalam definisi berikut, matriks disusun engan cara yang sangat khusus..  Matrix  matrix   A (real) matrix is a rectangular array of real numbers . Nilai pada baris ke dan kolom ke dari disebut dengan -entry (a -th entry ) dari .  Matriks yang mempunyai baris dan kolom dikatakan mempunyai ukuran (atau dimensi ) .  Kita biasanya menggunakan huruf kapital di awal alfabet (  , ) untuk menunjukkan matriks..    Matriks yang ditampilkan dalam memerlukan banyak ruang untuk ditampilkan, dan waktu yang dibutuhkan untuk menulis atau menyusunnya. Oleh karena itu, kami memperkenalkan dua bentuk notasi yang agak saling melengkapi untuk membantu mendeskripsikan matriks.     Matriks dengan entri ke- adalah     Entri ke- dari matriks      Notasi pembentukan matriks  matriks notasi pembentukan matriks  Notasi menunjukkan matriks yang entri ke- (baris ke- , kolom ke- ) adalah . Notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan matriks , notasi menyatakan entri ke- dari .    Dengan demikian, jika , maka untuk semua dan .      Notasi pembentukan matriks sering digunakan hanya untuk memberi nama pada entri-entri sebuah matriks sembarang. Namun, notasi ini juga dapat digunakan untuk menggambarkan sebuah matriks di mana entri -nya diberikan oleh aturan atau rumus tertentu.  Sebagai contoh, misalkan , di mana . Ini adalah matriks berukuran yang entri -nya adalah . Dengan demikian, . Pada contoh ini, kita memiliki dan untuk .    Dalam bahasa sehari-hari, gagasan tentang kesetaraan dianggap sebagai sesuatu yang sudah jelas. Dua hal dianggap sama jika keduanya sama. Apa lagi yang perlu dikatakan? Dalam matematika, setiap kali kita memperkenalkan jenis objek matematika baru (misalnya, himpunan, fungsi, -tuple, dll.) kita perlu menjelaskan secara tepat apa yang kita maksud agar dua hal dianggap sama. Kita melakukannya sekarang dengan matriks.   Kesamaan Matrik   Misalkan dan adalah matriks dengan dimensi dan , secara berturut-turut. Kedua matriks tersebut dikatakan sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .      Matriks tidak sama satu sama lain, meskipun keduanya memiliki entri yang sama dan muncul dalam urutan yang hampir sama. Dalam hal ini, kesetaraan tidak berlaku karena dan memiliki bentuk yang berbeda: berukuran , dan berukuran .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .     Matriks bujur sangkar, vektor baris, vektor kolom, matriks nol  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    Sebuah matriks disebut bujur sangkar jika dimensinya adalah . Diagonal dari sebuah matriks bujur sangkar terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari vektor baris dinotasikan dengan .  Sebuah matriks  , disebut vektor kolom . Entri ke- dari vektor kolom dinotasikan dengan .   Matriks nol berukuran , dinotasikan dengan , adalah matriks dengan dimensi tersebut, di mana semua entrinya adalah nol: yaitu, untuk semua dan .  Jika dimensi sebenarnya tidak penting, kita sering menghilangkan subskrip dan cukup menulis untuk matriks nol dengan dimensi yang sesuai.     Matriks sebagai Koleksi Kolom\/Baris   Misalkan adalah matriks berukuran . Kita sering memandang sebagai kumpulan kolom, dalam hal ini kita tuliskan , di mana adalah vektor kolom yang terdiri dari entri-entri pada kolom ke- dari : , . Demikian pula, ketika kita memandang sebagai kumpulan baris, kita tuliskan , di mana adalah vektor baris yang terdiri dari entri-entri pada baris ke- dari : , . Garis vertikal dan horizontal dalam dan digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.     Elemen matriks, baris, dan kolom  Sintaks Sage untuk mengakses entri tertentu dari sebuah matriks memiliki kesamaan dengan notasi entri matriks. Akan tetapi dalam Python, index dimulai dari 0. Jadi, jika A ditetapkan ke matriks di Sage, A[i,j] adalah entri ke- .   Subset matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , yang disusun sebagai matriks.   Membiarkan sisi kiri atau kanan : kosong dalam notasi ini menghilangkan batasan pembatasan yang sesuai (kiri atau kanan) dari indeks yang dimaksud. Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian kolom keempat dari yang dimulai dengan entri keduanya.   Atau, kita bisa mendapatkan daftar semua baris atau kolom menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.      Penjumlahan, Pengurangan, dan Perkalian Skalar  Kita sekarang akan menjelaskan berbagai operasi aljabar yang akan kita gunakan untuk menggabungkan dan mentransformasi matriks; kita menyebut penggunaan operasi-operasi ini secara longgar sebagai aritmatika matriks . Beberapa dari operasi ini menyerupai operasi yang sudah dikenal dari aritmatika bilangan real dalam hal notasi dan definisinya. Jangan lengah! Ini adalah operasi baru yang didefinisikan untuk kelas objek matematika baru, dan harus diperlakukan dengan hati-hati. Secara khusus, perhatikan dengan cermat (a) jenis objek matematika apa yang menjadi masukan untuk setiap operasi (bahan dari operasi), dan (b) jenis objek matematika apa yang dihasilkan.   Penjumlahan dan Pengurangan Matriks   penjumlahan matriks    pengurangan matriks      Penjumlahan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   Pengurangan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Bahan untuk penjumlahan (atau pengurangan) matriks adalah dua matriks dengan dimensi yang sama ; dan hasilnya adalah matriks ketiga dengan dimensi yang sama.    Perkalian Skalar Matriks   perkalian skalar matriks    Diberikan matriks apa pun dan konstanta apa pun , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan menskalakan setiap entri dari dengan konstanta .  Kita menyebut sebagai kelipatan skalar dari . Selain itu, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .     Sedangkan penjumlahan dan pengurangan matriks sangat mirip dengan operasi yang sesuai yang melibatkan bilangan real, tidak ada analog aritmatika real yang jelas untuk perkalian skalar matriks. Secara khusus, perhatikan bagaimana perkalian skalar matriks adalah semacam operasi hibrida yang menggabungkan objek matematika dari dua sifat yang sangat berbeda: bilangan real (atau skalar) di satu sisi, dan matriks di sisi lain.   Kita menyebut hasil dari penerapan urutan penjumlahan matriks dan perkalian skalar sebagai kombinasi linear matriks .   Kombinasi Linear Matriks   kombinasi linear  dari matriks    Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear matriks . Skalar disebut koefisien dari kombinasi linear.      Misalkan dan . Hitunglah .     .      Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks-matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesetaraan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gauss, kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita simpulkan bahwa .     Misalkan adalah matriks , argumen induksi sederhana pada menunjukkan bahwa untuk skalar apa pun kita memiliki untuk semua , . (Lihat     Perkalian Matrik  Jadi, bagaimana kita mendefinisikan hasil perkalian dua matriks? Melihat operasi sebelumnya, Anda mungkin telah menduga bahwa kita harus mendefinisikan hasil perkalian dua matriks dengan mengambil hasil perkalian entri yang sesuai. Tidak demikian!   Perkalian matrik   matrix multiplication    Perkalian matriks adalah operasi yang didefinisikan sebagai berikut: diberikan matriks  dan matriks  , kita mendefinisikan hasil kali mereka sebagai matriks  yang entri -nya diberikan oleh rumus:   untuk semua and .     Visualizing matrix multiplication  dalam , the -th entry dihitung dengan bergerak melintasi baris ke- dari dan turun ke kolom ke- dari .       Size and matrix multiplication  Perhatikan bahwa, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar hasil kali dari dan terdefinisi, kita memerlukan . Dengan kata lain, kita membutuhkan dimensi dalam dari dan sama: . Jika kondisi ini terpenuhi, dimensi matriks hasil ditentukan oleh dimensi luar dari dan . Secara skematis, Anda dapat membayangkan dimensi dalam sebagai dihapus :     Perkalian Matriks  Perhatikan matriks-matriks berikut: . Karena dimensi dalam dari dan sesuai, kita dapat membentuk matriks hasil kali , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita menghitung: . Kita simpulkan bahwa: .   Rumus untuk entri ke- dari produk matriks dapat dijelaskan secara ringkas sebagai produk titik dari baris ke- dari dengan kolom ke- dari . Anda mungkin telah menemukan produk titik dalam kasus khusus tupel dan ; definisi tersebut dapat dengan mudah digeneralisasikan ke tupel untuk setiap bilangan bulat positif . Kami akan membahas lebih lanjut tentang produk titik dan operasi terkait di . Untuk saat ini, kami akan memberikan definisi resmi sehingga kami dapat dengan mudah menjelaskan perkalian matriks dalam bentuk produk titik..   Perkalian Titik  dot product    Perkalian Titik    Diberikan -tupel dan , hasil kali titik mereka yang dinotasikan didefinisikan sebagai:       Misalkan adalah matriks berukuran , dan adalah matriks berukuran . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua , misalkan adalah kolom ke- dari . Untuk semua , kita memiliki: , di mana dan diperlakukan sebagai -tupel. Dengan kata lain, entri dari adalah hasil kali titik (dot product) dari baris ke- dari dan kolom ke- dari .    Tetapkan pasangan dengan dan . Jika dipandang sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai: . Kita memiliki: , seperti yang diklaim.     Perkalian matrik dengan Perkalian titik (dot product)  Perhatikan matriks-matriks berikut: . Dua baris dari (dalam bentuk tupel) adalah: . Dua kolom dari (dalam bentuk tupel) adalah: . Dengan menggunakan deskripsi hasil kali titik untuk perkalian matriks, kita menghitung: .   Definisi dari produk matriks tentu lebih rumit daripada yang Anda harapkan, dan tampaknya muncul begitu saja tanpa peringatan. Semua ini akan lebih masuk akal begitu kita mulai memandang matriks sebagai pemberi definisi fungsi-fungsi tertentu . Rumus kami untuk entri-entri dipilih secara tepat agar matriks baru ini sesuai dengan komposisi dari fungsi-fungsi dan : sehingga . Dengan interpretasi ini, batasan berat pada dimensi matriks-matriks penyusun memastikan bahwa dua fungsi dan dapat dikomposisikan.   Aritmatika matrik  Kita menggunakan + dan * untuk penjumlahan dan perkalian matriks.   Sebagai bukti fleksibilitas Sage, simbol yang sama * juga digunakan untuk perkalian skalar.   Edit sel di bawah ini untuk mempraktikkan operasi ini.      Transpose Matriks  Kami mengakhiri bagian ini dengan satu operasi terakhir, transpose matriks . Kami tidak akan banyak menggunakan operasi ini hingga nanti, tetapi ini adalah tempat yang tepat untuk memperkenalkannya.   Transpose Matriks  transpose matriks  transpose   Diberikan sebuah matriks  , transpose-nya adalah matriks yang entri -nya adalah entri -nya dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Diberikan sebuah matriks , kita dapat memberikan deskripsi berbasis kolom atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .        Misalkan ; maka .  Misalkan , maka .     Transpose Matriks  Transpose matriks diimplementasikan dalam Sage sebagai metode transpose() . Dalam sel di bawah ini, kami (a) memilih bilangan bulat acak , (b) memilih matriks acak  dengan entri bilangan bulat, dan (c) menghitung transpose dari .   Seperti biasa, eksperimen dengan sel Sage di bawah ini.     "
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
  "id": "sec-vectors-lin-combs",
  "level": "1",
  "url": "sec-vectors-lin-combs.html",
  "type": "Section",
  "number": "0.2",
  "title": "Vectors and linear combinations",
  "body": " Vectors and linear combinations   It is a remarkable fact that algebra, which is about symbolic equations and their solutions, and geometry are intimately connected. For instance, the solution set of a linear equation in two unknowns, such as , can be represented graphically by a straight line. The aim of this section is to further this connection by introducing vectors, which will help us to apply geometric intuition to our thinking about linear systems.    Vectors   vector A vector is most simply thought of as a matrix with a single column. For instance, and are both vectors. The entries in a vector are called its components. Since the vector has two components, we say that it is a two-dimensional vector; in the same way, the vector is a four-dimensional vector.  We denote the set of all -dimensional vectors by . Consequently, if is a 3-dimensional vector, we say that is in .  While it can be difficult to visualize a four-dimensional vector, we can draw a simple picture describing the two-dimensional vector , as shown in .  A graphical representation of the vector .       We can think of as describing a walk in the plane where we move two units horizontally and one unit vertically. Though we allow ourselves to begin walking from any point in the plane, we will most frequently begin at the origin in which case we arrive at the the point , as shown in the figure.  There are two simple algebraic operations we often perform on vectors.  Scalar Multiplication  scalar multiplication  We multiply a vector by a real number by multiplying each of the components of by . For instance, We will frequently refer to real numbers, such as -3 in this example, as scalars to distinguish them from vectors.   Vector Addition  vector addition  We add two vectors of the same dimension by adding their components. For instance,       Scalar Multiplication and Vector Addition   Suppose that      Find expressions for the vectors and sketch them using .  Sketch the vectors on this grid.         What geometric effect does scalar multiplication have on a vector? Also, describe the effect that multiplying by a negative scalar has.   Sketch the vectors using .  Sketch the vectors on this grid.         Consider vectors that have the form where is any scalar. Sketch a few of these vectors when, say, and . Give a geometric description of this set of vectors.  Sketch the vectors on this grid.        If and are two scalars, then the vector is called a linear combination of the vectors and . Find the vector that is the linear combination when and .    Can the vector be represented as a linear combination of and ? Asked differently, can we find scalars and such that .      Solutions to this preview activity are given in the text below.    The preview activity demonstrates how we may interpret scalar multiplication and vector addition geometrically.  First, we see that scalar multiplication has the effect of stretching or compressing a vector. Multiplying by a negative scalar changes the direction of the vector. In either case, shows that a scalar multiple of a vector lies on the same line defined by .     Scalar multiples of the vector .    To represent the sum , we imagine walking from the origin with the appropriate horizontal and vertical changes given by . From there, we continue our walk using the horizontal and vertical changes prescribed by , after which we arrive at the sum . This is illustrated on the left of where the tail of is placed on the tip of .      Vector addition as a simple walk in the plane is illustrated on the left. The vector sum is represented as the diagonal of a parallelogram on the right.    Alternatively, we may construct the parallelogram with and as two sides. The sum is then the diagonal of the parallelogram, as illustrated on the right of .  We have now seen that the set of vectors having the form is a line. To form the set of vectors , we can begin with the vector and add multiples of . Geometrically, this means that we begin from the tip of and move in a direction parallel to . The effect is to translate the line by the vector , as shown in .     The set of vectors form a line.    At times, it will be useful for us to think of vectors and points interchangeably. That is, we may wish to think of the vector as describing the point and vice-versa. When we say that the vectors having the form form a line, we really mean that the tips of the vectors all lie on the line passing through and parallel to .   Even though these vector operations are new, it is straightforward to check that some familiar properties hold.   Commutativity   .   Distributivity   .     Sage can perform scalar multiplication and vector addition. We define a vector using the vector command; then * and + denote scalar multiplication and vector addition.     Linear combinations  Linear combinations, which we encountered in the preview activity, provide the link between vectors and linear systems. In particular, they will help us apply geometric intuition to problems involving linear systems.   linear combination  weights  The linear combination of the vectors with scalars is the vector The scalars are called the weights of the linear combination.     In this activity, we will look at linear combinations of a pair of vectors, and .   Linear combinations of vectors and .      The weight is initially set to 0. Explain what happens as you vary while keeping . How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   Describe the vectors that arise when the weight is set to 1 and is varied. How is this related to our investigations in the preview activity?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?       When we vary with , the linear combination moves along the line defined by .  When and , we find   When and is allowed to vary, the linear combinations lie on the line through parallel to .  If the weights and , then the linear combination is the vector .  If the weights and , then the linear combination is the vector .  We find the linear system for the weights: If we construct the corresponding augmented matrix and determine its reduced row echelon matrix, we find the weights and .  In the same way, we construct a linear system for the weights whose augmented matrix is which shows that there are weights that produce the desired linear combination. The same will happen for any vector that we ask to write as a linear combination of and .  Every two-dimensional vector can be written as a linear combination of and because the coefficient matrix of the linear system remains the same. Since that coefficient matrix has a pivot position in every row, the augmented matrix can never have a pivot position in the rightmost column.        The linear combinations lie on the line defined by .   .  They lie on the line through parallel to .  Yes, with weights .  Yes, with weights and .  This can be done by writing the appropriate linear system for the weights.  No, any two-dimensional vector can be expressed as a linear combination of and .      This activity illustrates how linear combinations are constructed geometrically: the linear combination is found by walking along a total of times followed by walking along a total of times. When one of the weights is held constant while the other varies, the vector moves along a line.    The previous activity also shows that questions about linear combinations lead naturally to linear systems. Suppose we have vectors and . Let's determine whether we can describe the vector as a linear combination of and . In other words, we would like to know whether there are weights and such that   This leads to the equations   Equating the components of the vectors on each side of the equation, we arrive at the linear system This means that is a linear combination of and if this linear system is consistent.  To solve this linear system, we construct its corresponding augmented matrix and find its reduced row echelon form, giving us the weights and ; that is, . In fact, we know more because the reduced row echelon matrix tells us that these are the only possible weights. Therefore, may be expressed as a linear combination of and in exactly one way.    This example demonstrates the connection between linear combinations and linear systems. Asking whether a vector is a linear combination of vectors is equivalent to asking whether an associated linear system is consistent.  In fact, we may easily describe the associated linear system in terms of the vectors , , and . Notice that the augmented matrix we found in our example was The first two columns of this matrix are and and the rightmost column is . As shorthand, we will write this augmented matrix replacing the columns with their vector representation: . This fact is generally true so we record it in the following proposition.    The vector is a linear combination of the vectors if and only if the linear system corresponding to the augmented matrix is consistent. A solution to this linear system gives weights such that .    The next activity puts this proposition to use.   Linear combinations and linear systems     Given the vectors , can be expressed as a linear combination of , , and ? Rephrase this question by writing a linear system for the weights , , and and use the Sage cell below to answer this question.   Consider the following linear system. Identify vectors , , , and such that the question \"Is this linear system consistent?\" is equivalent to the question \"Can be expressed as a linear combination of , , and ?\"   Consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.   Now consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.        We find the linear system with corresponding augmented matrix This shows that the linear system is inconsistent so there are no such weights , , and . This means that is not a linear combination of , , and .  We find vectors   This is the same as asking if the linear system corresponding to the following augmented matrix is consistent: From the reduced row echelon form, we see that the system is consistent, which means that can be expressed as a linear combination of , , and . Moreover, there are infinitely many ways in which we can do so.  No, it is not possible to write every three-dimensional as a linear combination of , , and because the matrix does not have a pivot position in every row. This means that, with some choice of vector , we will obtain an inconsistent system.  We find the augmented matrix This shows that can be expressed as a linear combination of , , and in exactly one way.  Every vector can be expressed as a linear combination of , , and in exactly one way because has a pivot position in every row and every column.        The vector cannot be expressed as a linear combination of , , and .  We find vectors   Yes, can be expressed as a linear combination of , , and in infinitely many ways.  No.  Yes, can be expressed as a linear combination of , , and in exactly one way.  Any vector can be expressed as a linear combination of , , and in exactly one way.        Consider the vectors and , as shown in .   Vectors and .      These vectors appear to lie on the same line, a fact that becomes apparent once we notice that . Intuitively, we think of the linear combination as the result of walking times in the direction and times in the direction. With these vectors, we are always walking along the same line so it would seem that any linear combination of these vectors should lie on the same line. In addition, a vector that is not on the line, say , should be not be expressible as a linear combination of and .  We can verify this by checking This shows that the associated linear system is inconsistent, which means that the vector cannot be written as a linear combination of and .  Notice that the reduced row echelon form of the coefficient matrix tells us to expect this. Since there is not a pivot position in the second row of the coefficient matrix , it is possible for a pivot position to appear in the rightmost column of the augmented matrix for some choice of .      Summary  This section has introduced vectors, linear combinations, and their connection to linear systems.   There are two operations we can perform with vectors: scalar multiplication and vector addition. Both of these operations have geometric meaning.   Given a set of vectors and a set of scalars we call weights, we can create a linear combination using scalar multiplication and vector addition.   A solution to the linear system whose augmented matrix is is a set of weights that expresses as a linear combination of .     "
},
{
  "id": "fig-vector",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-vector",
  "type": "Figure",
  "number": "0.2.1",
  "title": "",
  "body": " A graphical representation of the vector .     "
},
{
  "id": "sec-vectors-lin-combs-3-7",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-3-7",
  "type": "Exploration",
  "number": "4",
  "title": "Scalar Multiplication and Vector Addition.",
  "body": " Scalar Multiplication and Vector Addition   Suppose that      Find expressions for the vectors and sketch them using .  Sketch the vectors on this grid.         What geometric effect does scalar multiplication have on a vector? Also, describe the effect that multiplying by a negative scalar has.   Sketch the vectors using .  Sketch the vectors on this grid.         Consider vectors that have the form where is any scalar. Sketch a few of these vectors when, say, and . Give a geometric description of this set of vectors.  Sketch the vectors on this grid.        If and are two scalars, then the vector is called a linear combination of the vectors and . Find the vector that is the linear combination when and .    Can the vector be represented as a linear combination of and ? Asked differently, can we find scalars and such that .      Solutions to this preview activity are given in the text below.   "
},
{
  "id": "fig-scalar-mult",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-scalar-mult",
  "type": "Figure",
  "number": "0.2.5",
  "title": "",
  "body": "    Scalar multiples of the vector .  "
},
{
  "id": "fig-vector-sum",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-vector-sum",
  "type": "Figure",
  "number": "0.2.6",
  "title": "",
  "body": "     Vector addition as a simple walk in the plane is illustrated on the left. The vector sum is represented as the diagonal of a parallelogram on the right.  "
},
{
  "id": "fig-parametric-line",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#fig-parametric-line",
  "type": "Figure",
  "number": "0.2.7",
  "title": "",
  "body": "    The set of vectors form a line.  "
},
{
  "id": "sec-vectors-lin-combs-3-14",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-3-14",
  "type": "Observation",
  "number": "0.2.8",
  "title": "",
  "body": " Even though these vector operations are new, it is straightforward to check that some familiar properties hold.   Commutativity   .   Distributivity   .    "
},
{
  "id": "sec-vectors-lin-combs-4-3",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-3",
  "type": "Definition",
  "number": "0.2.9",
  "title": "",
  "body": " linear combination  weights  The linear combination of the vectors with scalars is the vector The scalars are called the weights of the linear combination.  "
},
{
  "id": "sec-vectors-lin-combs-4-4",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-4",
  "type": "Activity",
  "number": "5",
  "title": "",
  "body": "  In this activity, we will look at linear combinations of a pair of vectors, and .   Linear combinations of vectors and .      The weight is initially set to 0. Explain what happens as you vary while keeping . How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   Describe the vectors that arise when the weight is set to 1 and is varied. How is this related to our investigations in the preview activity?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?       When we vary with , the linear combination moves along the line defined by .  When and , we find   When and is allowed to vary, the linear combinations lie on the line through parallel to .  If the weights and , then the linear combination is the vector .  If the weights and , then the linear combination is the vector .  We find the linear system for the weights: If we construct the corresponding augmented matrix and determine its reduced row echelon matrix, we find the weights and .  In the same way, we construct a linear system for the weights whose augmented matrix is which shows that there are weights that produce the desired linear combination. The same will happen for any vector that we ask to write as a linear combination of and .  Every two-dimensional vector can be written as a linear combination of and because the coefficient matrix of the linear system remains the same. Since that coefficient matrix has a pivot position in every row, the augmented matrix can never have a pivot position in the rightmost column.        The linear combinations lie on the line defined by .   .  They lie on the line through parallel to .  Yes, with weights .  Yes, with weights and .  This can be done by writing the appropriate linear system for the weights.  No, any two-dimensional vector can be expressed as a linear combination of and .     "
},
{
  "id": "sec-vectors-lin-combs-4-6",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-6",
  "type": "Example",
  "number": "0.2.11",
  "title": "",
  "body": "  The previous activity also shows that questions about linear combinations lead naturally to linear systems. Suppose we have vectors and . Let's determine whether we can describe the vector as a linear combination of and . In other words, we would like to know whether there are weights and such that   This leads to the equations   Equating the components of the vectors on each side of the equation, we arrive at the linear system This means that is a linear combination of and if this linear system is consistent.  To solve this linear system, we construct its corresponding augmented matrix and find its reduced row echelon form, giving us the weights and ; that is, . In fact, we know more because the reduced row echelon matrix tells us that these are the only possible weights. Therefore, may be expressed as a linear combination of and in exactly one way.   "
},
{
  "id": "prop-system-comb",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#prop-system-comb",
  "type": "Proposition",
  "number": "0.2.12",
  "title": "",
  "body": "  The vector is a linear combination of the vectors if and only if the linear system corresponding to the augmented matrix is consistent. A solution to this linear system gives weights such that .   "
},
{
  "id": "sec-vectors-lin-combs-4-11",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-11",
  "type": "Activity",
  "number": "6",
  "title": "Linear combinations and linear systems.",
  "body": " Linear combinations and linear systems     Given the vectors , can be expressed as a linear combination of , , and ? Rephrase this question by writing a linear system for the weights , , and and use the Sage cell below to answer this question.   Consider the following linear system. Identify vectors , , , and such that the question \"Is this linear system consistent?\" is equivalent to the question \"Can be expressed as a linear combination of , , and ?\"   Consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.   Now consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?    Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.        We find the linear system with corresponding augmented matrix This shows that the linear system is inconsistent so there are no such weights , , and . This means that is not a linear combination of , , and .  We find vectors   This is the same as asking if the linear system corresponding to the following augmented matrix is consistent: From the reduced row echelon form, we see that the system is consistent, which means that can be expressed as a linear combination of , , and . Moreover, there are infinitely many ways in which we can do so.  No, it is not possible to write every three-dimensional as a linear combination of , , and because the matrix does not have a pivot position in every row. This means that, with some choice of vector , we will obtain an inconsistent system.  We find the augmented matrix This shows that can be expressed as a linear combination of , , and in exactly one way.  Every vector can be expressed as a linear combination of , , and in exactly one way because has a pivot position in every row and every column.        The vector cannot be expressed as a linear combination of , , and .  We find vectors   Yes, can be expressed as a linear combination of , , and in infinitely many ways.  No.  Yes, can be expressed as a linear combination of , , and in exactly one way.  Any vector can be expressed as a linear combination of , , and in exactly one way.     "
},
{
  "id": "sec-vectors-lin-combs-4-12",
  "level": "2",
  "url": "sec-vectors-lin-combs.html#sec-vectors-lin-combs-4-12",
  "type": "Example",
  "number": "0.2.13",
  "title": "",
  "body": "  Consider the vectors and , as shown in .   Vectors and .      These vectors appear to lie on the same line, a fact that becomes apparent once we notice that . Intuitively, we think of the linear combination as the result of walking times in the direction and times in the direction. With these vectors, we are always walking along the same line so it would seem that any linear combination of these vectors should lie on the same line. In addition, a vector that is not on the line, say , should be not be expressible as a linear combination of and .  We can verify this by checking This shows that the associated linear system is inconsistent, which means that the vector cannot be written as a linear combination of and .  Notice that the reduced row echelon form of the coefficient matrix tells us to expect this. Since there is not a pivot position in the second row of the coefficient matrix , it is possible for a pivot position to appear in the rightmost column of the augmented matrix for some choice of .   "
},
{
  "id": "section4-1",
  "level": "1",
  "url": "section4-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "An introduction to eigenvalues and eigenvectors",
  "body": " An introduction to eigenvalues and eigenvectors   This section introduces the concept of eigenvalues and eigenvectors and offers an example that motivates our interest in them. The point here is to develop an intuitive understanding of eigenvalues and eigenvectors and explain how they can be used to simplify some problems that we have previously encountered. In the rest of this chapter, we will develop this concept into a richer theory and illustrate its use with more meaningful examples.    Before we introduce the definition of eigenvectors and eigenvalues, it will be helpful to remember some ideas we have seen previously.    Suppose that is the vector shown in the figure. Sketch the vector and the vector .     State the geometric effect that scalar multiplication has on the vector . Then sketch all the vectors of the form where is a scalar.  State the geometric effect of the matrix transformation defined by .  Suppose that is a matrix and that and are vectors such that . Use the linearity of matrix multiplication to express the following vectors in terms of and .   .   .   .   .   .   .        The vectors are as shown.     Scalar multiplication has the effect of stretching and possibly flipping along the line defined by .  This matrix transformation stretches vectors by a factor of in the horizontal direction and flips vectors vertically.  Applying linearity, we see that   .   .   .   .   .   .         A few examples  We will now introduce the definition of eigenvalues and eigenvectors and then look at a few simple examples.    eigenvalue  eigenvector  Given a square matrix , we say that a nonzero vector is an eigenvector of if there is a scalar such that . The scalar is called the eigenvalue associated to the eigenvector .    At first glance, there is a lot going on in this definition so let's look at an example.    Consider the matrix and the vector . We find that . In other words, , which says that is an eigenvector of the matrix with associated eigenvalue .  Similarly, if , we find that . Here again, we have showing that is an eigenvector of with associated eigenvalue .      This definition has an important geometric interpretation that we will investigate here.  Suppose that is a nonzero vector and that is a scalar. What is the geometric relationship between and ?  Let's now consider the eigenvector condition: . Here we have two vectors, and . If , what is the geometric relationship between and ?    A geometric interpretation of the eigenvalue-eigenvector condition .    Choose the matrix . Move the vector so that the eigenvector condition holds. What is the eigenvector and what is the associated eigenvalue?  By algebraically computing , verify that the eigenvector condition holds for the vector that you found.  If you multiply the eigenvector that you found by , do you still have an eigenvector? If so, what is the associated eigenvalue?  Are you able to find another eigenvector that is not a scalar multiple of the first one that you found? If so, what is the eigenvector and what is the associated eigenvalue?  Now consider the matrix . Use the diagram to describe any eigenvectors and associated eigenvalues.  Finally, consider the matrix . Use the diagram to describe any eigenvectors and associated eigenvalues. What geometric transformation does this matrix perform on vectors? How does this explain the presence of any eigenvectors?       The vectors and lie on the same line.  The vectors and lie on the same line.  There are many possibilities, but we see that is an eigenvector with associated eigenvalue .  If we perform the matrix multiplication, we see that .  Yes, is still an eigenvector with associated eigenvalue .  We see that is an eigenvector with associated eigenvalue .  The only eigenvectors that appear are scalar multiples of with associated eigenvalue .  There are no eigenvectors. The matrix transformation rotates vectors by so it is not possible for and to lie on the same line.     Let's consider the ideas we saw in the activity in some more depth. To be an eigenvector of , the vector must satisfy for some scalar . This means that and are scalar multiples of each other so they must lie on the same line.  Consider now the matrix . On the left of , we see that is not an eigenvector of since the vectors and do not lie on the same line. On the right, however, we see that is an eigenvector. In fact, is obtained from by stretching by a factor of . Therefore, is an eigenvector of with eigenvalue .       On the left, the vector is not an eigenvector. On the right, the vector is an eigenvector with eigenvalue .   It is not difficult to see that any multiple of is also an eigenvector of with eigenvalue . Indeed, we will see later that all the eigenvectors associated to a given eigenvalue form a subspace of .  In , we see that is also an eigenvector with eigenvalue .      Here we see another eigenvector with eigenvalue .   The interactive diagram we used in the activity is meant to convey the fact that the eigenvectors of a matrix are special vectors. Most of the time, the vectors and appear visually unrelated. For certain vectors, however, and line up with one another. Something important is going on when that happens so we call attention to these vectors by calling them eigenvectors. For these vectors, the operation of multiplying by reduces to the much simpler operation of scalar multiplying by . The reason eigenvectors are important is because it is extremely convenient to be able to replace matrix multiplication by scalar multiplication.    The usefulness of eigenvalues and eigenvectors  In the next section, we will introduce an algebraic technique for finding the eigenvalues and eigenvectors of a matrix. Before doing that, however, we would like to discuss why eigenvalues and eigenvectors are so useful.  Let's continue looking at the example . We have seen that is an eigenvector with eigenvalue and is an eigenvector with eigenvalue . This means that and . By the linearity of matrix multiplication, we can determine what happens when we multiply a linear combination of and by : .   For instance, if we consider the vector , we find that as seen in the figure.    In other words, multiplying by has the effect of stretching a vector in the direction by a factor of and flipping in direction.  We can draw an analogy with the more familiar example of the diagonal matrix . As we have seen, the matrix transformation defined by combines a horizontal stretching by a factor of 3 with a reflection across the horizontal axis, as is illustrated in .      The diagonal matrix stretches vectors horizontally by a factor of and flips vectors vertically.   The matrix has a similar effect when viewed in the basis defined by the eigenvectors and , as seen in .      The matrix has the same geometric effect as the diagonal matrix when expressed in the coordinate system defined by the basis of eigenvectors.   In a sense that will be made precise later, having a set of eigenvectors of that forms a basis of enables us to think of as being equivalent to a diagonal matrix . Of course, as the other examples in the previous activity show, it may not always be possible to form a basis from the eigenvectors of a matrix. For example, the only eigenvectors of the matrix , which represents a shear, have the form . In this example, we are not able to create a basis for consisting of eigenvectors of the matrix. This is also true for the matrix , which represents a rotation.    Let's consider an example that illustrates how we can put these ideas to use.  Suppose that we work for a car rental company that has two locations, and . When a customer rents a car at one location, they have the option to return it to either location at the end of the day. After doing some market research, we determine:  80% of the cars rented at location are returned to and 20% are returned to .  40% of the cars rented at location are returned to and 60% are returned to .    Suppose that there are 1000 cars at location and no cars at location on Monday morning. How many cars are there are locations and at the end of the day on Monday?  How many are at locations and at end of the day on Tuesday?  If we let and be the number of cars at locations and , respectively, at the end of day , we then have We can write the vector to reflect the number of cars at the two locations at the end of day , which says that or where .  Suppose that . Compute and to demonstrate that and are eigenvectors of . What are the associated eigenvalues and ?  We said that 1000 cars are initially at location and none at location . This means that the initial vector describing the number of cars is . Write as a linear combination of and .  Remember that and are eigenvectors of . Use the linearity of matrix multiplication to write the vector , describing the number of cars at the two locations at the end of the first day, as a linear combination of and .  Write the vector as a linear combination of and . Then write the next few vectors as linear combinations of and :   .   .   .   .    What will happen to the number of cars at the two locations after a very long time? Explain how writing as a linear combination of eigenvectors helps you determine the long-term behavior.     The solution to this activity is given in the text below.    This activity is important and motivates much of our work with eigenvalues and eigenvectors so it's worth reviewing to make sure we have a clear understanding of the concepts.  First, we compute This shows that is an eigenvector of with eigenvalue and is an eigenvector of with eigenvalue .  By the linearity of matrix matrix multiplication, we have . Therefore, we will write the vector describing the initial distribution of cars as a linear combination of and ; that is, . To do, we form the augmented matrix and row reduce: . Therefore, .  To determine the distribution of cars on subsequent days, we will repeatedly multiply by . We find that .  In particular, this shows us that . Taking notice of the pattern, we may write . Multiplying a number by is the same as taking 20% of that number. As each day goes by, the second term is multiplied by so the coefficient of in the expression for will eventually become extremely small. We therefore see that the distribution of cars will stabilize at .  Notice how our understanding of the eigenvectors of the matrix allows us to replace matrix multiplication with the simpler operation of scalar multiplication. As a result, we can look far into the future without having to repeatedly perform matrix multiplication.  Furthermore, notice how this example relies on the fact that we can express the initial vector as a linear combination of eigenvectors. For this reason, we would like, when given an matrix, to be able to create a basis of that consists of its eigenvectors. We will frequently return to this question in later sections.    If is an matrix, can we form a basis of consisting of eigenvectors of ?      Summary  We defined an eigenvector of a square matrix to be a nonzero vector such that for some scalar , which is called the eigenvalue associated to .  If is an eigenvector, then matrix multiplication by reduces to the simpler operation of scalar multiplication by .  Scalar multiples of an eigenvector are also eigenvectors. In fact, we will see that the eigenvectors associated to an eigenvalue form a subspace.  If we can form a basis for consisting of eigenvectors of , then is, in some sense, equivalent to a diagonal matrix.  Rewriting a vector as a linear combination of eigenvectors of simplifies the process of repeatedly multiplying by .      "
},
{
  "id": "section4-1-2-2",
  "level": "2",
  "url": "section4-1.html#section4-1-2-2",
  "type": "Exploration",
  "number": "7",
  "title": "",
  "body": "  Before we introduce the definition of eigenvectors and eigenvalues, it will be helpful to remember some ideas we have seen previously.    Suppose that is the vector shown in the figure. Sketch the vector and the vector .     State the geometric effect that scalar multiplication has on the vector . Then sketch all the vectors of the form where is a scalar.  State the geometric effect of the matrix transformation defined by .  Suppose that is a matrix and that and are vectors such that . Use the linearity of matrix multiplication to express the following vectors in terms of and .   .   .   .   .   .   .        The vectors are as shown.     Scalar multiplication has the effect of stretching and possibly flipping along the line defined by .  This matrix transformation stretches vectors by a factor of in the horizontal direction and flips vectors vertically.  Applying linearity, we see that   .   .   .   .   .   .      "
},
{
  "id": "section4-1-3-3",
  "level": "2",
  "url": "section4-1.html#section4-1-3-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  eigenvalue  eigenvector  Given a square matrix , we say that a nonzero vector is an eigenvector of if there is a scalar such that . The scalar is called the eigenvalue associated to the eigenvector .   "
},
{
  "id": "section4-1-3-5",
  "level": "2",
  "url": "section4-1.html#section4-1-3-5",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Consider the matrix and the vector . We find that . In other words, , which says that is an eigenvector of the matrix with associated eigenvalue .  Similarly, if , we find that . Here again, we have showing that is an eigenvector of with associated eigenvalue .   "
},
{
  "id": "activity-eigen-geom",
  "level": "2",
  "url": "section4-1.html#activity-eigen-geom",
  "type": "Activity",
  "number": "8",
  "title": "",
  "body": "  This definition has an important geometric interpretation that we will investigate here.  Suppose that is a nonzero vector and that is a scalar. What is the geometric relationship between and ?  Let's now consider the eigenvector condition: . Here we have two vectors, and . If , what is the geometric relationship between and ?    A geometric interpretation of the eigenvalue-eigenvector condition .    Choose the matrix . Move the vector so that the eigenvector condition holds. What is the eigenvector and what is the associated eigenvalue?  By algebraically computing , verify that the eigenvector condition holds for the vector that you found.  If you multiply the eigenvector that you found by , do you still have an eigenvector? If so, what is the associated eigenvalue?  Are you able to find another eigenvector that is not a scalar multiple of the first one that you found? If so, what is the eigenvector and what is the associated eigenvalue?  Now consider the matrix . Use the diagram to describe any eigenvectors and associated eigenvalues.  Finally, consider the matrix . Use the diagram to describe any eigenvectors and associated eigenvalues. What geometric transformation does this matrix perform on vectors? How does this explain the presence of any eigenvectors?       The vectors and lie on the same line.  The vectors and lie on the same line.  There are many possibilities, but we see that is an eigenvector with associated eigenvalue .  If we perform the matrix multiplication, we see that .  Yes, is still an eigenvector with associated eigenvalue .  We see that is an eigenvector with associated eigenvalue .  The only eigenvectors that appear are scalar multiples of with associated eigenvalue .  There are no eigenvectors. The matrix transformation rotates vectors by so it is not possible for and to lie on the same line.    "
},
{
  "id": "fig-eigen-intro",
  "level": "2",
  "url": "section4-1.html#fig-eigen-intro",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "     On the left, the vector is not an eigenvector. On the right, the vector is an eigenvector with eigenvalue .  "
},
{
  "id": "fig-eigen-intro-2",
  "level": "2",
  "url": "section4-1.html#fig-eigen-intro-2",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "    Here we see another eigenvector with eigenvalue .  "
},
{
  "id": "fig-eigen-intro-diagonal",
  "level": "2",
  "url": "section4-1.html#fig-eigen-intro-diagonal",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": "    The diagonal matrix stretches vectors horizontally by a factor of and flips vectors vertically.  "
},
{
  "id": "fig-eigen-intro-A",
  "level": "2",
  "url": "section4-1.html#fig-eigen-intro-A",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": "    The matrix has the same geometric effect as the diagonal matrix when expressed in the coordinate system defined by the basis of eigenvectors.  "
},
{
  "id": "activity-eigen-intro",
  "level": "2",
  "url": "section4-1.html#activity-eigen-intro",
  "type": "Activity",
  "number": "9",
  "title": "",
  "body": "  Let's consider an example that illustrates how we can put these ideas to use.  Suppose that we work for a car rental company that has two locations, and . When a customer rents a car at one location, they have the option to return it to either location at the end of the day. After doing some market research, we determine:  80% of the cars rented at location are returned to and 20% are returned to .  40% of the cars rented at location are returned to and 60% are returned to .    Suppose that there are 1000 cars at location and no cars at location on Monday morning. How many cars are there are locations and at the end of the day on Monday?  How many are at locations and at end of the day on Tuesday?  If we let and be the number of cars at locations and , respectively, at the end of day , we then have We can write the vector to reflect the number of cars at the two locations at the end of day , which says that or where .  Suppose that . Compute and to demonstrate that and are eigenvectors of . What are the associated eigenvalues and ?  We said that 1000 cars are initially at location and none at location . This means that the initial vector describing the number of cars is . Write as a linear combination of and .  Remember that and are eigenvectors of . Use the linearity of matrix multiplication to write the vector , describing the number of cars at the two locations at the end of the first day, as a linear combination of and .  Write the vector as a linear combination of and . Then write the next few vectors as linear combinations of and :   .   .   .   .    What will happen to the number of cars at the two locations after a very long time? Explain how writing as a linear combination of eigenvectors helps you determine the long-term behavior.     The solution to this activity is given in the text below.   "
},
{
  "id": "question-eigen-basis",
  "level": "2",
  "url": "section4-1.html#question-eigen-basis",
  "type": "Question",
  "number": "1.1.8",
  "title": "",
  "body": "  If is an matrix, can we form a basis of consisting of eigenvectors of ?   "
},
{
  "id": "section4-2",
  "level": "1",
  "url": "section4-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Finding eigenvalues and eigenvectors",
  "body": " Finding eigenvalues and eigenvectors   The last section introduced eigenvalues and eigenvectors, presented the underlying geometric intuition behind their definition, and demonstrated their use in understanding the long-term behavior of certain systems. We will now develop a more algebraic understanding of eigenvalues and eigenvectors. In particular, we will find an algebraic method for determining the eigenvalues and eigenvectors of a square matrix.    Let's begin by reviewing some important ideas that we have seen previously.  Suppose that is a square matrix and that the nonzero vector is a solution to the homogeneous equation . What can we conclude about the invertibility of ?  How does the determinant tell us if there is a nonzero solution to the homogeneous equation ?  Suppose that . Find the determinant . What does this tell us about the solution space to the homogeneous equation ?  Find a basis for .  What is the relationship between the rank of a matrix and the dimension of its null space?      The matrix cannot have a pivot position in every column so it is not invertible.  If there is a nonzero solution to the homogeneous equation , then is not invertible so .  We find that so there is a nonzero solution to the homogeneous equation.  The reduced row echelon form of is so the solution space to the homogeneous equation may be described parametrically as . A basis for is therefore .  If is an matrix, then .       The characteristic polynomial  We will first see that the eigenvalues of a square matrix appear as the roots of a particular polynomial. To begin, notice that we originally defined an eigenvector as a nonzero vector that satisfies the equation . We will rewrite this as In other words, an eigenvector is a solution of the homogeneous equation . This puts us in the familiar territory explored in the next activity.    The eigenvalues of a square matrix are defined by the condition that there be a nonzero solution to the homogeneous equation .  If there is a nonzero solution to the homogeneous equation , what can we conclude about the invertibility of the matrix ?  If there is a nonzero solution to the homogeneous equation , what can we conclude about the determinant ?  Let's consider the matrix from which we construct . Find the determinant . What kind of equation do you obtain when we set this determinant to zero to obtain ?  Use the determinant you found in the previous part to find the eigenvalues by solving the equation . We considered this matrix in so we should find the same eigenvalues for that we found by reasoning geometrically there.  Consider the matrix and find its eigenvalues by solving the equation .  Consider the matrix and find its eigenvalues by solving the equation .  Find the eigenvalues of the triangular matrix . What is generally true about the eigenvalues of a triangular matrix?         The matrix cannot be invertible.    It must be the case that .    We find that .     so we find eigenvalues and .    For this matrix, we have so there is one eigenvalue, .     so there are complex eigenvalues, and .    Because the determinant of a triangular matrix equals the product of its diagonal entries, The eigenvalues are equal to the entries on the diagonal.       This activity demonstrates a technique that enables us to find the eigenvalues of a square matrix . Since an eigenvalue is a scalar for which the equation has a nonzero solution, it must be the case that is not invertible. Therefore, its determinant is zero. This gives us the equation whose solutions are the eigenvalues of . This equation is called the characteristic equation of . characteristic equation    If we write the characteristic equation for the matrix , we see that This shows us that the eigenvalues are and .    characteristic polynomial In general, the expression is a polynomial in , which is called the characteristic polynomial of . If is an matrix, the degree of the characteristic polynomial is . For instance, if is a matrix, then is a quadratic polynomial; if is a matrix, then is a cubic polynomial.  The matrix in has a characteristic polynomial with two real and distinct roots. This will not always be the case, as demonstrated in the next two examples.   Consider the matrix , whose characteristic equation is In this case, the characteristic polynomial has one real root, which means that this matrix has a single real eigenvalue, .    To find the eigenvalues of a triangular matrix, we remember that the determinant of a triangular matrix is the product of the entries on the diagonal. For instance, the following triangular matrix has the characteristic equation showing that the eigenvalues are the diagonal entries .     Finding eigenvectors  Now that we can find the eigenvalues of a square matrix by solving the characteristic equation , we will turn to the question of finding the eigenvectors associated to an eigenvalue . The key, as before, is to note that an eigenvector is a nonzero solution to the homogeneous equation . In other words, the eigenvectors associated to an eigenvalue form the null space .  This shows that the eigenvectors associated to an eigenvalue form a subspace of . We will denote the subspace of eigenvectors of a matrix associated to the eigenvalue by and note that . We say that is the eigenspace of associated to the eigenvalue . eigenspace     In this activity, we will find the eigenvectors of a matrix as the null space of the matrix .  Let's begin with the matrix . We have seen that is an eigenvalue. Form the matrix and find a basis for the eigenspace . What is the dimension of this eigenspace? For each of the basis vectors , verify that .  We also saw that is an eigenvalue. Form the matrix and find a basis for the eigenspace . What is the dimension of this eigenspace? For each of the basis vectors , verify that .  Is it possible to form a basis of consisting of eigenvectors of ?  Now consider the matrix . Write the characteristic equation for and use it to find the eigenvalues of . For each eigenvalue, find a basis for its eigenspace . Is it possible to form a basis of consisting of eigenvectors of ?  Next, consider the matrix . Write the characteristic equation for and use it to find the eigenvalues of . For each eigenvalue, find a basis for its eigenspace . Is it possible to form a basis of consisting of eigenvectors of ?  Finally, find the eigenvalues and eigenvectors of the diagonal matrix . Explain your result by considering the geometric effect of the matrix transformation defined by .       We have The null space is one-dimensional with basis .  We have The null space is one-dimensional with basis .  We can form a basis for consisting of eigenvectors of by taking .  The characteristic equation is , which means that there is a single eigenvalue . This eigenspace is two-dimensional with basis . In this case, we can form a basis for consisting of eigenvectors of .  The characteristic equation is so there is again a single eigenvalue . In this case, the eigenspace is one-dimensional with basis vector . It is not possible to form a basis for consisting of eigenvectors.  We have eigenvectors with associated eigenvector and with associated eigenvector .     Once we find an eigenvalue of a matrix , describing the associated eigenspace amounts to the familiar task of describing the null space .   Revisiting the matrix from , we recall that we found eigenvalues and .  Considering the eigenvalue , we have Since the eigenvectors are the solutions of the equation , we see that they are determined by the single equation or . Therefore the eigenvectors in have the form In other words, is a one-dimensional subspace of with basis vector or basis vector . In the same way, we find that a basis for the eigenspace is .  We note that, for this matrix, it is possible to construct a basis of consisting of eigenvectors, namely,     Consider the matrix whose characteristic equation is   There is a single eigenvalue , and we find that Therefore, the eigenspace is one-dimensional with a basis vector .    If , then which implies that there is a single eigenvalue . We find that which says that every two-dimensional vector satisfies . Therefore, every vector is an eigenvector and so . This eigenspace is two-dimensional.  We can see this in another way. The matrix transformation defined by rotates vectors by , which says that for every vector . In other words, every two-dimensional vector is an eigenvector with associated eigenvalue .   These last two examples illustrate two types of behavior when there is a single eigenvalue. In one case, we are able to construct a basis of using eigenvectors; in the other, we are not. We will explore this behavior more in the next subsection.   A check on our work  When finding eigenvalues and their associated eigenvectors in this way, we first find eigenvalues by solving the characteristic equation. If is a solution to the characteristic equation, then is not invertible and, consequently, must contain a row without a pivot position.  This serves as a check on our work. If we row reduce and find the identity matrix, then we have made an error either in solving the characteristic equation or in finding .     The characteristic polynomial and the dimension of eigenspaces  Given a square matrix , we saw in the previous section the value of being able to express any vector in as a linear combination of eigenvectors of . For this reason, asks when we can construct a basis of consisting of eigenvectors. We will explore this question more fully now.  As we saw above, the eigenvalues of are the solutions of the characteristic equation . The examples we have considered demonstrate some different types of behavior. For instance, we have seen the characteristic equations    , which has real and distinct roots,     , which has repeated roots, and     , which has complex roots.     If is an matrix, then the characteristic polynomial is a degree polynomial, and this means that it has roots. Therefore, the characteristic equation can be written as giving eigenvalues . As we have seen, some of the eigenvalues may be complex. Moreover, some of the eigenvalues may appear in this list more than once. However, we can always write the characteristic equation in the form The number of times that appears as a factor in the characteristic polynomial, is called the multiplicity of the eigenvalue . multiplicity     We have seen that the matrix has the characteristic equation . This matrix has a single eigenvalue , which has multiplicity .      If a matrix has the characteristic equation , then that matrix has four eigenvalues: having multiplicity 2; having multiplicity 1; having multiplicity 7; and having multiplicity 2. The degree of the characteristic polynomial is the sum of the multiplicities so this matrix must be a matrix.    The multiplicities of the eigenvalues are important because they influence the dimension of the eigenspaces. We know that the dimension of an eigenspace must be at least one; the following proposition also tells us the dimension of an eigenspace can be no larger than the multiplicity of its associated eigenvalue.    If is a real eigenvalue of the matrix with multiplicity , then .      The diagonal matrix has the characteristic equation . There is a single eigenvalue having multiplicity , and we saw earlier that .      The matrix has the characteristic equation . This tells us that there is a single eigenvalue having multiplicity . In contrast with the previous example, we have .      We saw earlier that the matrix has the characteristic equation . There are three eigenvalues each having multiplicity . By the proposition, we are guaranteed that the dimension of each eigenspace is ; that is, . It turns out that this is enough to guarantee that there is a basis of consisting of eigenvectors.      If a matrix has the characteristic equation , we know there are four eigenvalues . Without more information, all we can say about the dimensions of the eigenspaces is We can guarantee that , but we cannot be more specific about the dimensions of the other eigenspaces.    Fortunately, if we have an matrix, it frequently happens that the characteristic equation has the form where there are distinct real eigenvalues, each of which has multiplicity . In this case, the dimension of each of the eigenspaces . With a little work, it can be seen that choosing a basis vector for each of the eigenspaces produces a basis for . We therefore have the following proposition.    If is an matrix having distinct real eigenvalues, then there is a basis of consisting of eigenvectors of .    This proposition provides one answer to our . The next activity explores this question further.      Identify the eigenvalues, and their multiplicities, of an matrix whose characteristic polynomial is . What can you conclude about the dimensions of the eigenspaces? What is the shape of the matrix? Do you have enough information to guarantee that there is a basis of consisting of eigenvectors?  Find the eigenvalues of and state their multiplicities. Can you find a basis of consisting of eigenvectors of this matrix?  Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?   Now consider the matrix whose characteristic equation is also .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?   Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?        There are three eigenvalues, has multiplicity , has multiplicity , and has multiplicity . We know that We can guarantee that , but we can say nothing further about the other two eigenspaces.  The dimension of the matrix is since the degree of the characteristic polynomial is . We cannot guarantee that we can form a basis for consisting of eigenvectors, however.  There is one eigenvalue having multiplicity two. Because the eigenspace is one-dimensional, however, we cannot find a basis for consisting of eigenvectors of .  For the matrix ,  We have eigenvalues with multiplicity and with multiplicity .  The eigenspace is two-dimensional with basis . The eigenspace is one-dimensional with basis vector .  We are able to form a basis for consisting of eigenvectors of .    For the matrix ,  We have eigenvalues with multiplicity and with multiplicity .  The eigenspace is one-dimensional with basis vector . The eigenspace is also one-dimensional with basis vector .  It is not possible to form a basis for consisting of eigenvectors of .    For this matrix,  There are three eigenvalues , , and , each having multiplicity .  A basis vector for the eigenspace is . A basis vector for the eigenspace is . A basis vector for the eigenspace is .  We can form a basis for consisting of eigenvectors of .         Using Sage to find eigenvalues and eigenvectors  We can use Sage to find the characteristic polynomial, eigenvalues, and eigenvectors of a matrix. As we will see, however, some care is required when dealing with matrices whose entries include decimals.    We will use Sage to find the eigenvalues and eigenvectors of a matrix. Let's begin with the matrix .  We can find the characteristic polynomial of by writing A.charpoly('lambda') . Notice that we have to give Sage a variable in which to write the polynomial; here, we use lambda though x works just as well.   The factored form of the characteristic polynomial may be more useful since it will tell us the eigenvalues and their multiplicities. The factored characteristic polynomial is found with A.fcp('lambda') .    If we only want the eigenvalues, we can use A.eigenvalues() .   Notice that the multiplicity of an eigenvalue is the number of times it is repeated in the list of eigenvalues.   Finally, we can find eigenvectors by A.eigenvectors_right() . (We are looking for right eigenvalues since the vector appears to the right of in the definition .)   At first glance, the result of this command can be a little confusing to interpret. What we see is a list with one entry for each eigenvalue. For each eigenvalue, there is a triple consisting of (i) the eigenvalue , (ii) a basis for , and (iii) the multiplicity of .   When working with decimal entries, which are called floating point numbers in computer science, we must remember that computers perform only approximate arithmetic. This is a problem when we wish to find the eigenvectors of such a matrix. To illustrate, consider the matrix .  Without using Sage, find the eigenvalues of this matrix.  What do you find for the reduced row echelon form of ?  Let's now use Sage to determine the reduced row echelon form of :   What result does Sage report for the reduced row echelon form? Why is this result not correct?   Because the arithmetic Sage performs with floating point entries is only approximate, we are not able to find the eigenspace . In this next chapter, we will learn how to address this issue. In the meantime, we can get around this problem by writing the entries in the matrix as rational numbers:          The fcp command will return the factored characteristic polynomial lambda^2 - 2*lambda - 3 .  The eigenvalues command returns a list of eigenvalues [-3, -3] .  The eigenvectors_right command returns [(-3, [(1, 0)], 2)] .  If we begin with the matrix , we find  The eigenvalues are and .  The reduced row echelon form is , which shows that is not invertible, as expected.  Sage returns , which is not correct because cannot be invertible if is an eigenvalue of .  Here we find the correct eigenvalues, with basis vector for and with basis vector for .         Summary  In this section, we developed a technique for finding the eigenvalues and eigenvectors of an matrix .  The expression is a degree polynomial, known as the characteristic polynomial of . The eigenvalues of are the roots of the characteristic polynomial found by solving the characteristic equation .  The set of eigenvectors associated to the eigenvalue forms a subspace of , the eigenspace .  If the factor appears times in the characteristic polynomial, we say that the eigenvalue has multiplicity and note that .  If each of the eigenvalues is real and has multiplicity , then we can form a basis of consisting of eigenvectors of .  We can use Sage to find the eigenvalues and eigenvalues of matrices. However, we need to be careful working with floating point numbers since floating point arithmetic is only an approximation.       For each of the following matrices, find its characteristic polynomial, its eigenvalues, and the multiplicity of each eigenvalue.   .   .   .   .      The characteristic polynomial is . There is a single eigenvalue having multiplicity .  The characteristic polynomial is . There are three eigenvalues , each of multiplicity .  The characteristic polynomial is , showing that there is one eigenvalue having multiplicity .  The characteristic polynomial is . There are two eigenvalues and , each having multiplicity .       . There is a single eigenvalue having multiplicity .   . There are three eigenvalues , each of multiplicity .   . There is one eigenvalue having multiplicity .   . There are two eigenvalues and , each having multiplicity .       Given an matrix , an important question, , asks whether we can find a basis of consisting of eigenvectors of . For each of the matrices in the previous exercise, find a basis of consisting of eigenvectors or state why such a basis does not exist.     There is a single eigenvalue and so it is not possible to find a basis for consisting of eigenvectors of .  The three eigenvalues each have multiplicity one so we know that their eigenspaces are one-dimensional. We find a basis vector for is , for is , and for is . A basis for consisting of eigenvectors of is therefore   Since is the zero matrix, every vector is an eigenvector of . This means that is a basis of consisting of eigenvectors.  The multiplicity of each eigenvalue is one so there will be a basis of consisting of eigenvectors. In particular, a basis vector for is and a basis vector for is . This means that is a basis for consisting of eigenvectors of .       It is not possible.   .              Determine whether the following statements are true or false and provide a justification for your response.  The eigenvalues of a matrix are the entries on the diagonal of .  If is an eigenvalue of multiplicity , then is one-dimensional.  If a matrix is invertible, then cannot be an eigenvalue.  If is a matrix, the characteristic polynomial has degree less than .  The eigenspace of is the same as the null space .      False. This is true for a diagonal matrix, but it is not generally true as we see by considering the matrix whose eigenvalues are and .  True. If is the multiplicity, we have so we must have .  True. If is an eigenvalue, then an associated eigenvector is a nonzero solution to the homogeneous equation . This would say that is not invertible.  False. The degree of the characteristic polynomial equals the number of rows and columns of the square matrix.  True. An eigenvector associated to the eigenvalue satisfies . This is the same equation that characterizes the null space .      False  True  True  False  True       Provide a justification for your response to the following questions.  Suppose that is a matrix having eigenvalues . What are the eigenvalues of ?  Suppose that is a diagonal matrix. Why can you guarantee that there is a basis of consisting of eigenvectors of ?  If is a matrix whose eigenvalues are , can you guarantee that there is a basis of consisting of eigenvectors of ?  Suppose that the characteristic polynomial of a matrix is . What are the eigenvalues of ? Is invertible? Is there a basis of consisting of eigenvectors of ?  If the characteristic polynomial of is , what is the characteristic polynomial of ? what is the characteristic polynomial of ?      If , then . This says that the eigenvalues of are .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes. Since there are three distinct eigenvalues, the multiplicity of each eigenvalue must be one. Therefore, the dimension of each eigenspace is one. If we choose a basis vector for each of the eigenspaces, we will obtain a basis for .  The eigenvalues are determined by , which shows that the eigenvalues are . This shows that is not invertible since is an eigenvalue. There is, however, a basis for consisting of eigenvectors of since the three eigenvalues are distinct.  If is an eigenvalue of , then is an eigenvalue of . Therefore, the characteristic polynomial of is .       .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes.   . The matrix is not invertible, but there is a basis for consisting of eigenvectors of .   .       For each of the following matrices, use Sage to determine its eigenvalues, their multiplicities, and a basis for each eigenspace. For which matrices is it possible to construct a basis for consisting of eigenvectors?                  Sage tells us there are three distinct eigenvalues , each having multiplicity one. A basis of eigenvectors is   It is not possible to find a basis of eigenvectors because the eigenvalue has multiplicity two but its eigenspace is one-dimensional.  It is possible to find a basis for consisting of eignevectors because one eigenvalue has multiplicity one while the other has multiplicity two and a two-dimensional eigenspace. A basis is       A basis of eigenvectors is   It is not possible to find a basis of eigenvectors.  A basis of eigenvectors is        There is a relationship between the determinant of a matrix and the product of its eigenvalues.  We have seen that the eigenvalues of the matrix are . What is ? What is the product of the eigenvalues of ?  Consider the triangular matrix . What are the eigenvalues of ? What is ? What is the product of the eigenvalues of ?  Based on these examples, what do you think is the relationship between the determinant of a matrix and the product of its eigenvalues?  Suppose the characteristic polynomial is written as . By substituting into this equation, explain why the determinant of a matrix equals the product of its eigenvalues.      We have , and the product of the eigenvalues is .  We have , and the product of the eigenvalues is   We suspect that equals the product of the eigenvalues.  Setting , we have Notice that we mean the product of the eigenvalues, including their multiplicities.      Both equal .  Both equal .   equals the product of the eigenvalues.  We see that .       Consider the matrix .  Find the eigenvalues of and a basis for their associated eigenspaces.  Suppose that . Express as a linear combination of eigenvectors of .  Define the vectors . Write , , and as a linear combination of eigenvectors of .  What happens to as grows larger and larger?      We find the eigenvalues with associated eigenvector and with associated eigenvector .  After constructing an augmented matrix, we find that .  Since , we have .  We have . As grows larger, becomes less significant. Eventually, .       with associated eigenvector and with associated eigenvector .   .  We have .   .       Consider the matrix   Find the eigenvalues of and a basis for their associated eigenspaces.  Suppose that . Express as a linear combination of eigenvectors of .  Define the vectors . Write , , and as a linear combination of eigenvectors of .  What happens to as grows larger and larger?      We have eigenvalues with associated eigenvector and with associated eigenvector .  After constructing an augmented matrix, we find .  Since , we have   We have . As grows larger, becomes less significant. Eventually, .       with associated eigenvector and with associated eigenvector .   .  We have .   .      "
},
{
  "id": "section4-2-2-2",
  "level": "2",
  "url": "section4-2.html#section4-2-2-2",
  "type": "Exploration",
  "number": "10",
  "title": "",
  "body": "  Let's begin by reviewing some important ideas that we have seen previously.  Suppose that is a square matrix and that the nonzero vector is a solution to the homogeneous equation . What can we conclude about the invertibility of ?  How does the determinant tell us if there is a nonzero solution to the homogeneous equation ?  Suppose that . Find the determinant . What does this tell us about the solution space to the homogeneous equation ?  Find a basis for .  What is the relationship between the rank of a matrix and the dimension of its null space?      The matrix cannot have a pivot position in every column so it is not invertible.  If there is a nonzero solution to the homogeneous equation , then is not invertible so .  We find that so there is a nonzero solution to the homogeneous equation.  The reduced row echelon form of is so the solution space to the homogeneous equation may be described parametrically as . A basis for is therefore .  If is an matrix, then .    "
},
{
  "id": "section4-2-3-3",
  "level": "2",
  "url": "section4-2.html#section4-2-3-3",
  "type": "Activity",
  "number": "11",
  "title": "",
  "body": "  The eigenvalues of a square matrix are defined by the condition that there be a nonzero solution to the homogeneous equation .  If there is a nonzero solution to the homogeneous equation , what can we conclude about the invertibility of the matrix ?  If there is a nonzero solution to the homogeneous equation , what can we conclude about the determinant ?  Let's consider the matrix from which we construct . Find the determinant . What kind of equation do you obtain when we set this determinant to zero to obtain ?  Use the determinant you found in the previous part to find the eigenvalues by solving the equation . We considered this matrix in so we should find the same eigenvalues for that we found by reasoning geometrically there.  Consider the matrix and find its eigenvalues by solving the equation .  Consider the matrix and find its eigenvalues by solving the equation .  Find the eigenvalues of the triangular matrix . What is generally true about the eigenvalues of a triangular matrix?         The matrix cannot be invertible.    It must be the case that .    We find that .     so we find eigenvalues and .    For this matrix, we have so there is one eigenvalue, .     so there are complex eigenvalues, and .    Because the determinant of a triangular matrix equals the product of its diagonal entries, The eigenvalues are equal to the entries on the diagonal.      "
},
{
  "id": "example-eigenvalues-poly",
  "level": "2",
  "url": "section4-2.html#example-eigenvalues-poly",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": " If we write the characteristic equation for the matrix , we see that This shows us that the eigenvalues are and .  "
},
{
  "id": "section4-2-3-8",
  "level": "2",
  "url": "section4-2.html#section4-2-3-8",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " Consider the matrix , whose characteristic equation is In this case, the characteristic polynomial has one real root, which means that this matrix has a single real eigenvalue, .  "
},
{
  "id": "section4-2-3-9",
  "level": "2",
  "url": "section4-2.html#section4-2-3-9",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " To find the eigenvalues of a triangular matrix, we remember that the determinant of a triangular matrix is the product of the entries on the diagonal. For instance, the following triangular matrix has the characteristic equation showing that the eigenvalues are the diagonal entries .  "
},
{
  "id": "section4-2-4-4",
  "level": "2",
  "url": "section4-2.html#section4-2-4-4",
  "type": "Activity",
  "number": "12",
  "title": "",
  "body": "  In this activity, we will find the eigenvectors of a matrix as the null space of the matrix .  Let's begin with the matrix . We have seen that is an eigenvalue. Form the matrix and find a basis for the eigenspace . What is the dimension of this eigenspace? For each of the basis vectors , verify that .  We also saw that is an eigenvalue. Form the matrix and find a basis for the eigenspace . What is the dimension of this eigenspace? For each of the basis vectors , verify that .  Is it possible to form a basis of consisting of eigenvectors of ?  Now consider the matrix . Write the characteristic equation for and use it to find the eigenvalues of . For each eigenvalue, find a basis for its eigenspace . Is it possible to form a basis of consisting of eigenvectors of ?  Next, consider the matrix . Write the characteristic equation for and use it to find the eigenvalues of . For each eigenvalue, find a basis for its eigenspace . Is it possible to form a basis of consisting of eigenvectors of ?  Finally, find the eigenvalues and eigenvectors of the diagonal matrix . Explain your result by considering the geometric effect of the matrix transformation defined by .       We have The null space is one-dimensional with basis .  We have The null space is one-dimensional with basis .  We can form a basis for consisting of eigenvectors of by taking .  The characteristic equation is , which means that there is a single eigenvalue . This eigenspace is two-dimensional with basis . In this case, we can form a basis for consisting of eigenvectors of .  The characteristic equation is so there is again a single eigenvalue . In this case, the eigenspace is one-dimensional with basis vector . It is not possible to form a basis for consisting of eigenvectors.  We have eigenvectors with associated eigenvector and with associated eigenvector .    "
},
{
  "id": "section4-2-4-6",
  "level": "2",
  "url": "section4-2.html#section4-2-4-6",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": " Revisiting the matrix from , we recall that we found eigenvalues and .  Considering the eigenvalue , we have Since the eigenvectors are the solutions of the equation , we see that they are determined by the single equation or . Therefore the eigenvectors in have the form In other words, is a one-dimensional subspace of with basis vector or basis vector . In the same way, we find that a basis for the eigenspace is .  We note that, for this matrix, it is possible to construct a basis of consisting of eigenvectors, namely,   "
},
{
  "id": "section4-2-4-7",
  "level": "2",
  "url": "section4-2.html#section4-2-4-7",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": " Consider the matrix whose characteristic equation is   There is a single eigenvalue , and we find that Therefore, the eigenspace is one-dimensional with a basis vector .  "
},
{
  "id": "section4-2-4-8",
  "level": "2",
  "url": "section4-2.html#section4-2-4-8",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": " If , then which implies that there is a single eigenvalue . We find that which says that every two-dimensional vector satisfies . Therefore, every vector is an eigenvector and so . This eigenspace is two-dimensional.  We can see this in another way. The matrix transformation defined by rotates vectors by , which says that for every vector . In other words, every two-dimensional vector is an eigenvector with associated eigenvalue .  "
},
{
  "id": "section4-2-5-5",
  "level": "2",
  "url": "section4-2.html#section4-2-5-5",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": "  We have seen that the matrix has the characteristic equation . This matrix has a single eigenvalue , which has multiplicity .   "
},
{
  "id": "section4-2-5-6",
  "level": "2",
  "url": "section4-2.html#section4-2-5-6",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "  If a matrix has the characteristic equation , then that matrix has four eigenvalues: having multiplicity 2; having multiplicity 1; having multiplicity 7; and having multiplicity 2. The degree of the characteristic polynomial is the sum of the multiplicities so this matrix must be a matrix.   "
},
{
  "id": "prop-eigen-basis",
  "level": "2",
  "url": "section4-2.html#prop-eigen-basis",
  "type": "Proposition",
  "number": "1.2.9",
  "title": "",
  "body": "  If is a real eigenvalue of the matrix with multiplicity , then .   "
},
{
  "id": "section4-2-5-9",
  "level": "2",
  "url": "section4-2.html#section4-2-5-9",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  The diagonal matrix has the characteristic equation . There is a single eigenvalue having multiplicity , and we saw earlier that .   "
},
{
  "id": "section4-2-5-10",
  "level": "2",
  "url": "section4-2.html#section4-2-5-10",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  The matrix has the characteristic equation . This tells us that there is a single eigenvalue having multiplicity . In contrast with the previous example, we have .   "
},
{
  "id": "section4-2-5-11",
  "level": "2",
  "url": "section4-2.html#section4-2-5-11",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": "  We saw earlier that the matrix has the characteristic equation . There are three eigenvalues each having multiplicity . By the proposition, we are guaranteed that the dimension of each eigenspace is ; that is, . It turns out that this is enough to guarantee that there is a basis of consisting of eigenvectors.   "
},
{
  "id": "section4-2-5-12",
  "level": "2",
  "url": "section4-2.html#section4-2-5-12",
  "type": "Example",
  "number": "1.2.13",
  "title": "",
  "body": "  If a matrix has the characteristic equation , we know there are four eigenvalues . Without more information, all we can say about the dimensions of the eigenspaces is We can guarantee that , but we cannot be more specific about the dimensions of the other eigenspaces.   "
},
{
  "id": "section4-2-5-14",
  "level": "2",
  "url": "section4-2.html#section4-2-5-14",
  "type": "Proposition",
  "number": "1.2.14",
  "title": "",
  "body": "  If is an matrix having distinct real eigenvalues, then there is a basis of consisting of eigenvectors of .   "
},
{
  "id": "section4-2-5-16",
  "level": "2",
  "url": "section4-2.html#section4-2-5-16",
  "type": "Activity",
  "number": "13",
  "title": "",
  "body": "    Identify the eigenvalues, and their multiplicities, of an matrix whose characteristic polynomial is . What can you conclude about the dimensions of the eigenspaces? What is the shape of the matrix? Do you have enough information to guarantee that there is a basis of consisting of eigenvectors?  Find the eigenvalues of and state their multiplicities. Can you find a basis of consisting of eigenvectors of this matrix?  Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?   Now consider the matrix whose characteristic equation is also .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?   Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?        There are three eigenvalues, has multiplicity , has multiplicity , and has multiplicity . We know that We can guarantee that , but we can say nothing further about the other two eigenspaces.  The dimension of the matrix is since the degree of the characteristic polynomial is . We cannot guarantee that we can form a basis for consisting of eigenvectors, however.  There is one eigenvalue having multiplicity two. Because the eigenspace is one-dimensional, however, we cannot find a basis for consisting of eigenvectors of .  For the matrix ,  We have eigenvalues with multiplicity and with multiplicity .  The eigenspace is two-dimensional with basis . The eigenspace is one-dimensional with basis vector .  We are able to form a basis for consisting of eigenvectors of .    For the matrix ,  We have eigenvalues with multiplicity and with multiplicity .  The eigenspace is one-dimensional with basis vector . The eigenspace is also one-dimensional with basis vector .  It is not possible to form a basis for consisting of eigenvectors of .    For this matrix,  There are three eigenvalues , , and , each having multiplicity .  A basis vector for the eigenspace is . A basis vector for the eigenspace is . A basis vector for the eigenspace is .  We can form a basis for consisting of eigenvectors of .      "
},
{
  "id": "section4-2-6-3",
  "level": "2",
  "url": "section4-2.html#section4-2-6-3",
  "type": "Activity",
  "number": "14",
  "title": "",
  "body": "  We will use Sage to find the eigenvalues and eigenvectors of a matrix. Let's begin with the matrix .  We can find the characteristic polynomial of by writing A.charpoly('lambda') . Notice that we have to give Sage a variable in which to write the polynomial; here, we use lambda though x works just as well.   The factored form of the characteristic polynomial may be more useful since it will tell us the eigenvalues and their multiplicities. The factored characteristic polynomial is found with A.fcp('lambda') .    If we only want the eigenvalues, we can use A.eigenvalues() .   Notice that the multiplicity of an eigenvalue is the number of times it is repeated in the list of eigenvalues.   Finally, we can find eigenvectors by A.eigenvectors_right() . (We are looking for right eigenvalues since the vector appears to the right of in the definition .)   At first glance, the result of this command can be a little confusing to interpret. What we see is a list with one entry for each eigenvalue. For each eigenvalue, there is a triple consisting of (i) the eigenvalue , (ii) a basis for , and (iii) the multiplicity of .   When working with decimal entries, which are called floating point numbers in computer science, we must remember that computers perform only approximate arithmetic. This is a problem when we wish to find the eigenvectors of such a matrix. To illustrate, consider the matrix .  Without using Sage, find the eigenvalues of this matrix.  What do you find for the reduced row echelon form of ?  Let's now use Sage to determine the reduced row echelon form of :   What result does Sage report for the reduced row echelon form? Why is this result not correct?   Because the arithmetic Sage performs with floating point entries is only approximate, we are not able to find the eigenspace . In this next chapter, we will learn how to address this issue. In the meantime, we can get around this problem by writing the entries in the matrix as rational numbers:          The fcp command will return the factored characteristic polynomial lambda^2 - 2*lambda - 3 .  The eigenvalues command returns a list of eigenvalues [-3, -3] .  The eigenvectors_right command returns [(-3, [(1, 0)], 2)] .  If we begin with the matrix , we find  The eigenvalues are and .  The reduced row echelon form is , which shows that is not invertible, as expected.  Sage returns , which is not correct because cannot be invertible if is an eigenvalue of .  Here we find the correct eigenvalues, with basis vector for and with basis vector for .      "
},
{
  "id": "section4-2-8-1",
  "level": "2",
  "url": "section4-2.html#section4-2-8-1",
  "type": "Exercise",
  "number": "1.2.6.1",
  "title": "",
  "body": "  For each of the following matrices, find its characteristic polynomial, its eigenvalues, and the multiplicity of each eigenvalue.   .   .   .   .      The characteristic polynomial is . There is a single eigenvalue having multiplicity .  The characteristic polynomial is . There are three eigenvalues , each of multiplicity .  The characteristic polynomial is , showing that there is one eigenvalue having multiplicity .  The characteristic polynomial is . There are two eigenvalues and , each having multiplicity .       . There is a single eigenvalue having multiplicity .   . There are three eigenvalues , each of multiplicity .   . There is one eigenvalue having multiplicity .   . There are two eigenvalues and , each having multiplicity .    "
},
{
  "id": "section4-2-8-2",
  "level": "2",
  "url": "section4-2.html#section4-2-8-2",
  "type": "Exercise",
  "number": "1.2.6.2",
  "title": "",
  "body": "  Given an matrix , an important question, , asks whether we can find a basis of consisting of eigenvectors of . For each of the matrices in the previous exercise, find a basis of consisting of eigenvectors or state why such a basis does not exist.     There is a single eigenvalue and so it is not possible to find a basis for consisting of eigenvectors of .  The three eigenvalues each have multiplicity one so we know that their eigenspaces are one-dimensional. We find a basis vector for is , for is , and for is . A basis for consisting of eigenvectors of is therefore   Since is the zero matrix, every vector is an eigenvector of . This means that is a basis of consisting of eigenvectors.  The multiplicity of each eigenvalue is one so there will be a basis of consisting of eigenvectors. In particular, a basis vector for is and a basis vector for is . This means that is a basis for consisting of eigenvectors of .       It is not possible.   .           "
},
{
  "id": "section4-2-8-3",
  "level": "2",
  "url": "section4-2.html#section4-2-8-3",
  "type": "Exercise",
  "number": "1.2.6.3",
  "title": "",
  "body": "  Determine whether the following statements are true or false and provide a justification for your response.  The eigenvalues of a matrix are the entries on the diagonal of .  If is an eigenvalue of multiplicity , then is one-dimensional.  If a matrix is invertible, then cannot be an eigenvalue.  If is a matrix, the characteristic polynomial has degree less than .  The eigenspace of is the same as the null space .      False. This is true for a diagonal matrix, but it is not generally true as we see by considering the matrix whose eigenvalues are and .  True. If is the multiplicity, we have so we must have .  True. If is an eigenvalue, then an associated eigenvector is a nonzero solution to the homogeneous equation . This would say that is not invertible.  False. The degree of the characteristic polynomial equals the number of rows and columns of the square matrix.  True. An eigenvector associated to the eigenvalue satisfies . This is the same equation that characterizes the null space .      False  True  True  False  True    "
},
{
  "id": "section4-2-8-4",
  "level": "2",
  "url": "section4-2.html#section4-2-8-4",
  "type": "Exercise",
  "number": "1.2.6.4",
  "title": "",
  "body": "  Provide a justification for your response to the following questions.  Suppose that is a matrix having eigenvalues . What are the eigenvalues of ?  Suppose that is a diagonal matrix. Why can you guarantee that there is a basis of consisting of eigenvectors of ?  If is a matrix whose eigenvalues are , can you guarantee that there is a basis of consisting of eigenvectors of ?  Suppose that the characteristic polynomial of a matrix is . What are the eigenvalues of ? Is invertible? Is there a basis of consisting of eigenvectors of ?  If the characteristic polynomial of is , what is the characteristic polynomial of ? what is the characteristic polynomial of ?      If , then . This says that the eigenvalues of are .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes. Since there are three distinct eigenvalues, the multiplicity of each eigenvalue must be one. Therefore, the dimension of each eigenspace is one. If we choose a basis vector for each of the eigenspaces, we will obtain a basis for .  The eigenvalues are determined by , which shows that the eigenvalues are . This shows that is not invertible since is an eigenvalue. There is, however, a basis for consisting of eigenvectors of since the three eigenvalues are distinct.  If is an eigenvalue of , then is an eigenvalue of . Therefore, the characteristic polynomial of is .       .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes.   . The matrix is not invertible, but there is a basis for consisting of eigenvectors of .   .    "
},
{
  "id": "section4-2-8-5",
  "level": "2",
  "url": "section4-2.html#section4-2-8-5",
  "type": "Exercise",
  "number": "1.2.6.5",
  "title": "",
  "body": "  For each of the following matrices, use Sage to determine its eigenvalues, their multiplicities, and a basis for each eigenspace. For which matrices is it possible to construct a basis for consisting of eigenvectors?                  Sage tells us there are three distinct eigenvalues , each having multiplicity one. A basis of eigenvectors is   It is not possible to find a basis of eigenvectors because the eigenvalue has multiplicity two but its eigenspace is one-dimensional.  It is possible to find a basis for consisting of eignevectors because one eigenvalue has multiplicity one while the other has multiplicity two and a two-dimensional eigenspace. A basis is       A basis of eigenvectors is   It is not possible to find a basis of eigenvectors.  A basis of eigenvectors is     "
},
{
  "id": "section4-2-8-6",
  "level": "2",
  "url": "section4-2.html#section4-2-8-6",
  "type": "Exercise",
  "number": "1.2.6.6",
  "title": "",
  "body": "  There is a relationship between the determinant of a matrix and the product of its eigenvalues.  We have seen that the eigenvalues of the matrix are . What is ? What is the product of the eigenvalues of ?  Consider the triangular matrix . What are the eigenvalues of ? What is ? What is the product of the eigenvalues of ?  Based on these examples, what do you think is the relationship between the determinant of a matrix and the product of its eigenvalues?  Suppose the characteristic polynomial is written as . By substituting into this equation, explain why the determinant of a matrix equals the product of its eigenvalues.      We have , and the product of the eigenvalues is .  We have , and the product of the eigenvalues is   We suspect that equals the product of the eigenvalues.  Setting , we have Notice that we mean the product of the eigenvalues, including their multiplicities.      Both equal .  Both equal .   equals the product of the eigenvalues.  We see that .    "
},
{
  "id": "section4-2-8-7",
  "level": "2",
  "url": "section4-2.html#section4-2-8-7",
  "type": "Exercise",
  "number": "1.2.6.7",
  "title": "",
  "body": "  Consider the matrix .  Find the eigenvalues of and a basis for their associated eigenspaces.  Suppose that . Express as a linear combination of eigenvectors of .  Define the vectors . Write , , and as a linear combination of eigenvectors of .  What happens to as grows larger and larger?      We find the eigenvalues with associated eigenvector and with associated eigenvector .  After constructing an augmented matrix, we find that .  Since , we have .  We have . As grows larger, becomes less significant. Eventually, .       with associated eigenvector and with associated eigenvector .   .  We have .   .    "
},
{
  "id": "section4-2-8-8",
  "level": "2",
  "url": "section4-2.html#section4-2-8-8",
  "type": "Exercise",
  "number": "1.2.6.8",
  "title": "",
  "body": "  Consider the matrix   Find the eigenvalues of and a basis for their associated eigenspaces.  Suppose that . Express as a linear combination of eigenvectors of .  Define the vectors . Write , , and as a linear combination of eigenvectors of .  What happens to as grows larger and larger?      We have eigenvalues with associated eigenvector and with associated eigenvector .  After constructing an augmented matrix, we find .  Since , we have   We have . As grows larger, becomes less significant. Eventually, .       with associated eigenvector and with associated eigenvector .   .  We have .   .    "
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

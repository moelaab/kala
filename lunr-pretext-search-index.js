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
  "title": "Transformasi Matriks",
  "body": " Transformasi Matriks    Belajar memandang matriks secara geometris sebagai fungsi.  Mempelajari contoh transformasi matriks: refleksi, dilatasi, rotasi, geser, proyeksi.  Memahami kosakata seputar transformasi: domain, kodomain, range.  Memahami domain, kodomain, dan range dari transformasi matriks.  Gambar: transformasi matriks umum.  Kosakata:  transformasi \/ fungsi , domain , kodomain , range , transformasi identitas , transformasi matriks .     Pada bagian ini kita akan mempelajari matriks secara geometris sebagai fungsi atau transformasi . Kita akan membahas transformasi secara umum, kemudian khusus pada transformasi matriks, yaitu transformasi yang berasal dari matriks.    Matriks sebagai Fungsi  Secara informal, fungsi adalah aturan yang menerima input dan menghasilkan output. Misalnya, adalah fungsi yang menerima satu angka sebagai input, dan menghasilkan kuadrat dari angka tersebut: . Pada subbagian ini, kita akan menginterpretasikan matriks sebagai fungsi.   Matriks sebagai fungsi  Matriks sebagai fungsi Transformasi matriks Misalkan adalah matriks dengan baris dan kolom. Pertimbangkan persamaan matriks (kita menulisnya seperti ini sebagai pengingat notasi ). Jika kita mengubah , maka juga akan berubah; dengan cara ini, kita menganggap sebagai fungsi dengan variabel independen dan variabel dependen .  Variabel independen (input) adalah , yaitu vektor di .  Variabel dependen (output) adalah , yaitu vektor di .  Himpunan semua vektor output yang mungkin adalah vektor sehingga memiliki solusi; ini sama dengan ruang kolom dari seperti yang dijelaskan dalam . \\begin{tikzpicture}[thin border nodes] \\path[use as bounding box] (-3,-5.5) -- (15,3); \\draw[grid lines, light gray] (-3,-3) grid (3,3); \\node (A) at (0,-3.5) {$\\R^n$}; \\node (B) at (8,-3.5) {$\\R^m$}; \\draw[->] (A.east) +(5mm,0) -- node[midway,above=1mm] {$b=Ax$} ($(B.west)-(5mm,0)$); \\point[\"$x$\" left] (P) at (1,1,5); \\begin{scope}[myxyz, xshift=8cm] \\path[clip, resetxy] (-3,-3) rectangle (3,3); \\def\\v{(-1,2,1)} \\def\\w{(0,1,-1)} \\node[coordinate] (X) at \\v {}; \\node[coordinate] (Y) at \\w {}; \\draw[very thin] (-2,0,0) -- (0,0,0); \\draw[very thin] (0,-2,0) -- (0,0,0); \\draw[very thin] (0,0,-2) -- (0,0,0); \\begin{scope}[x=(X), y=(Y), transformxy] \\fill[seq4!10, nearly opaque] (-1,-1) rectangle (1,1); \\draw[step=.5cm, seq4!30, very thin] (-1,-1) grid (1,1); \\point[\"$Ax$\" {fill=none,below}] (Q) at (-.5,.5); \\node[coordinate, pin={[pin edge={very thin,-},pin distance=3mm,anchor=north]-70:$\\Col(A)$}] at (0.1,1) {}; \\end{scope} \\draw[->, very thin] (0,0,0) -- (2,0,0); \\draw[->, very thin] (0,0,0) -- (0,2,0); \\draw[->, very thin] (0,0,0) -- (0,0,2); \\draw[resetxy] (-3,-3) rectangle (3,3); \\end{scope} \\draw[|->, shorten >=.35mm, shorten <=.35mm] (P.east) .. controls +(0:3cm) and +(190:3cm) .. (Q.west); \\end{tikzpicture}    Interaktif: Matriks   Gambar matriks , dianggap sebagai fungsi. Vektor input adalah , yaitu vektor di , dan vektor output adalah , yaitu vektor di . Garis ungu di sebelah kanan adalah ruang kolom; saat Anda mengubah , output terbatas pada garis ini.      Interaktif: Matriks   Gambar matriks , dianggap sebagai fungsi. Vektor input adalah , yaitu vektor di , dan vektor output adalah , yaitu vektor di . Bidang ungu di sebelah kanan adalah ruang kolom; saat Anda mengubah , output terbatas pada bidang ini.      Proyeksi ke bidang  Proyeksi Proyeksi ortogonal  Proyeksi ortogonal ke bidang   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan hanya mengatur koordinat sama dengan nol: ini adalah proyeksi vertikal ke bidang . \\begin{tikzpicture}[myxyz] \\begin{scope}[arrows={|[width=4pt]->[width=4pt]}, shorten=4pt] \\draw (-1,-1,-2.5) node[point, seq2] {} -- (-1,-1,0); \\draw (2,-2,-1) node[point, seq5] {} -- (2,-2,0); \\end{scope} \\begin{scope}[transformxy] \\fill[white, nearly opaque] (-3, -3) rectangle (3, 3); \\draw[step=1cm, help lines] (-3, -3) grid (3, 3); \\end{scope} \\begin{scope}[arrows={|[width=4pt]->[width=4pt]}, shorten=4pt] \\draw (2,1,3) node[point,seq1] {} -- (2,1,0) node[point,seq1] {}; \\point[seq2] at (-1,-1,0); \\point[seq5] at (2,-2,0); \\draw (-1,2,2) node[point,seq3] {} -- (-1,2,0) node[point,seq3] {}; \\draw (-2,0,1) node[point,seq4] {} -- (-2,0,0) node[point,seq4] {}; \\end{scope} \\end{tikzpicture}    Perkalian dengan matriks memproyeksikan sebuah vektor ke bidang . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.       Refleksi  Refleksi melalui sumbu   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan mengubah tanda koordinat : ini adalah refleksi melalui sumbu . \\def\\theo{\\includegraphics[width=4cm]{theo2.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.3] (-1.8,0) -- (1.8,0); \\draw[->,opacity=.3] (0,-1.8) -- (0,1.8); \\begin{scope}[xshift=7cm] \\node[xscale=-1] (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.3] (-1.8,0) -- (1.8,0); \\draw[->,opacity=.3] (0,-1.8) -- (0,1.8); \\end{scope} \\draw[->] (theo1.20) to[out=20,in=160] node[midway,above] {$b=Ax$} (theo2.20); \\end{tikzpicture}    Perkalian dengan matriks merefleksikan melalui sumbu . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.       Dilatasi  Dilatasi  Skala Dilatasi  Skala Operasi baris, penskalaan   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan sama dengan perkalian skalar dengan : ini menskalakan atau mendilatasi bidang dengan faktor . \\def\\theo{\\includegraphics[width=3.5cm]{theo3.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node[scale=1.5] (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(theo1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(theo2.west)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks mendilatasi bidang dengan faktor . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.       Identitas  Matriks identitas sebagai fungsi   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan tidak mengubah vektor input sama sekali: ini adalah transformasi identitas yang tidak melakukan apa-apa . \\def\\theo{\\includegraphics[width=4cm]{theo11.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(theo1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(theo2.west)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks tidak menggerakkan vektor : yaitu, . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.       Rotasi  Rotasi berlawanan arah jarum jam sebesar   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Kita substitusikan beberapa titik uji untuk memahami geometri transformasi: \\def\\arcarrow#1;{ \\pgfmathanglebetweenpoints{\\pgfpoint{0cm}{0cm}}{\\pgfpointanchor{#1}{center}} \\let\\sangle=\\pgfmathresult \\draw[|->, shorten=2mm] let \\p1 = (#1.center), \\n1={veclen(\\x1,\\y1)} in (#1) arc[radius=\\n1, delta angle=90, start angle=\\sangle]; } \\begin{minipage}{5cm} \\[\\begin{split} A\\color{seq1}\\vec{1 2} &= \\color{seq1}\\vec{-2 1} \\\\ A\\color{seq2}\\vec{-1 1} &= \\color{seq2}\\vec{-1 -1} \\\\ A\\color{seq3}\\vec{0 -2} &= \\color{seq3}\\vec{2 0} \\\\ \\end{split}\\] \\end{minipage} \\qquad \\begin{tikzpicture}[baseline=0] \\draw[help lines] (-3,-3) grid (3,3); \\draw[->] (-3,0) -- (3,0); \\draw[->] (0,-3) -- (0,3); \\point[seq1] (X1) at (1,2); \\point[seq1] (TX1) at (-2,1); \\arcarrow X1; \\point[seq2] (X2) at (-1,1); \\point[seq2] (TX2) at (-1,-1); \\arcarrow X2; \\point[seq3] (TX3) at (2,0); \\point[seq3] (X3) at (0,-2); \\arcarrow X3; \\end{tikzpicture} Perkalian dengan adalah rotasi berlawanan arah jarum jam sebesar . \\def\\theo{\\includegraphics[width=4cm]{theo8.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node[rotate=90] (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(theo1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(theo2.north)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks memutar vektor berlawanan arah jarum jam sebesar . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.       Geser  Geser dalam arah   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan menambahkan koordinat ke koordinat ; ini disebut geser dalam arah . \\def\\sheep{\\includegraphics[width=4cm]{sheep.jpg}} \\begin{tikzpicture} \\node (sheep1) at (0,0,0) {\\sheep}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node[cm={1,0,1,1,(0,0)}] (sheep2) at (0,0,0) {\\sheep}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(sheep1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(sheep2.west)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks menambahkan koordinat ke koordinat . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.        Transformasi  Pada titik ini, ada baiknya kita menetapkan gagasan dan terminologi kita mengenai fungsi, yang dalam buku ini akan kita sebut sebagai transformasi . Ini memungkinkan kita untuk mensistematisasi pembahasan tentang matriks sebagai fungsi.   Transformasi definisi dari  Transformasi domain dari  Transformasi kodomain dari  Transformasi range dari  Fungsi Transformasi  Domain Transformasi  Kodomain Transformasi  Range Transformasi  transformasi dengan domain dan kodomain   Sebuah transformasi dari ke adalah suatu aturan yang memasangkan setiap vektor dalam dengan sebuah vektor dalam .   disebut sebagai domain dari .   disebut sebagai kodomain dari .  Untuk dalam , vektor dalam disebut citra dari oleh .  Himpunan semua citra disebut range dari .  Notasi berarti adalah sebuah transformasi dari ke .      Transformasi sebagai mesin Mungkin membantu untuk membayangkan sebagai sebuah mesin yang menerima sebagai masukan, dan memberikan sebagai keluaran. ... (konten kode latex tetap, tidak perlu diterjemahkan) ... Titik-titik pada domain adalah masukan untuk : ini berarti bahwa masuk akal untuk mengevaluasi pada vektor-vektor dengan entri, yaitu daftar yang berisi bilangan. Demikian pula, titik-titik pada kodomain adalah keluaran dari : artinya, hasil evaluasi selalu berupa vektor dengan entri.   Range dari adalah himpunan semua vektor dalam kodomain yang benar-benar muncul sebagai keluaran dari fungsi untuk beberapa masukan tertentu. Dengan kata lain, range adalah semua vektor dalam kodomain sedemikian hingga memiliki solusi dalam domain.   Fungsi satu variabel  Transformasi satu variabel  Sebagian besar fungsi yang mungkin pernah Anda lihat sebelumnya memiliki domain dan kodomain yang sama, yaitu . Misalnya, Perhatikan bahwa kita mendefinisikan dengan sebuah aturan: fungsi didefinisikan dengan menentukan apa keluaran fungsi untuk setiap masukan yang mungkin.  Anda mungkin terbiasa memikirkan fungsi-fungsi semacam ini dalam bentuk grafik: ... (kode latex grafik tetap) ... Dalam kasus ini, sumbu horizontal adalah domain, dan sumbu vertikal adalah kodomain. Ini berguna jika domain dan kodomain adalah , tetapi akan sulit dilakukan ketika domain adalah dan kodomain adalah . Grafik fungsi semacam itu merupakan subset dari , yang sulit divisualisasikan. Oleh karena itu, kita jarang menggambarkan grafik suatu transformasi.  Perlu dicatat bahwa range dari adalah interval : ini adalah himpunan semua keluaran yang mungkin dari fungsi .    Fungsi beberapa variabel  Transformasi beberapa variabel  Berikut contoh fungsi dari ke : Masukan dari masing-masing memiliki dua entri, dan keluarannya memiliki tiga entri. Dalam kasus ini, kita mendefinisikan dengan sebuah formula, jadi kita mengevaluasi dengan menggantikan nilai-nilai untuk variabel-variabel:   Berikut contoh fungsi dari ke : Dengan kata lain, mengambil vektor dengan tiga entri, lalu memutarnya; sehingga keluaran juga memiliki tiga entri. Dalam kasus ini, didefinisikan oleh aturan geometris.    Transformasi identitas definisi dari  Transformasi identitas Transformasi identitas  Transformasi identitas    Transformasi identitas  adalah transformasi yang didefinisikan dengan aturan     Dengan kata lain, transformasi identitas tidak mengubah vektor masukan: keluaran sama persis dengan masukannya. Domain dan kodomainnya keduanya adalah , dan range-nya juga , karena setiap vektor dalam adalah keluarannya sendiri.   Transformasi dunia nyata: robotika  Definisi transformasi beserta kosakata terkaitnya mungkin terdengar abstrak, namun transformasi sangat umum dalam kehidupan nyata. Berikut adalah contoh dari bidang robotika dan grafika komputer.  Misalkan Anda sedang membangun sebuah lengan robot dengan tiga sambungan yang dapat menggerakkan tangan di atas sebuah bidang, seperti pada gambar berikut. ... (kode latex lanjutan tetap) ...      Transformasi Matriks  Sekarang kita memperjelas pengertian umum dan kosakata dari sebelumnya ke fungsi-fungsi yang didefinisikan oleh matriks yang telah kita bahas di .   Transformasi matriks definisi dari  Transformasi terkait dengan matriks Transformasi matriks   Misalkan adalah matriks berukuran . Transformasi matriks yang terkait dengan adalah transformasi Ini adalah transformasi yang membawa vektor di ke vektor di .    Jika memiliki kolom, maka hanya masuk akal untuk mengalikan dengan vektor yang memiliki entri. Inilah sebabnya domain dari adalah . Jika memiliki baris, maka memiliki entri untuk setiap vektor di ; inilah sebabnya kodomain dari adalah .  Definisi transformasi matriks memberi tahu kita bagaimana mengevaluasi pada vektor tertentu: kita mengalikan vektor input dengan matriks. Misalnya, misalkan dan adalah transformasi matriks yang terkait. Maka   Misalkan memiliki kolom-kolom . Jika kita mengalikan dengan vektor umum , kita mendapatkan Ini hanyalah kombinasi linear umum dari . Oleh karena itu, output dari tepatnya adalah kombinasi linear dari kolom-kolom : jangkauan dari adalah ruang kolom dari . Lihat .   Transformasi matriks domain dari  Transformasi matriks kodomain dari  Transformasi matriks jangkauan dari  Ruang kolom jangkauan dari transformasi  Misalkan adalah matriks berukuran , dan adalah transformasi matriks terkait.   Domain dari adalah , di mana adalah jumlah kolom dari .   Kodomain dari adalah , di mana adalah jumlah baris dari .   Jangkauan dari adalah ruang kolom dari .       "
},
{
  "id": "section4-1-2",
  "level": "2",
  "url": "section4-1.html#section4-1-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Belajar memandang matriks secara geometris sebagai fungsi.  Mempelajari contoh transformasi matriks: refleksi, dilatasi, rotasi, geser, proyeksi.  Memahami kosakata seputar transformasi: domain, kodomain, range.  Memahami domain, kodomain, dan range dari transformasi matriks.  Gambar: transformasi matriks umum.  Kosakata:  transformasi \/ fungsi , domain , kodomain , range , transformasi identitas , transformasi matriks .   "
},
{
  "id": "matrix-trans-matrices-functions-4",
  "level": "2",
  "url": "section4-1.html#matrix-trans-matrices-functions-4",
  "type": "Example",
  "number": "1.1.1",
  "title": "Interaktif: Matriks <span class=\"process-math\">\\(2\\times 3\\)<\/span>.",
  "body": " Interaktif: Matriks   Gambar matriks , dianggap sebagai fungsi. Vektor input adalah , yaitu vektor di , dan vektor output adalah , yaitu vektor di . Garis ungu di sebelah kanan adalah ruang kolom; saat Anda mengubah , output terbatas pada garis ini.    "
},
{
  "id": "matrix-trans-matrices-functions-5",
  "level": "2",
  "url": "section4-1.html#matrix-trans-matrices-functions-5",
  "type": "Example",
  "number": "1.1.3",
  "title": "Interaktif: Matriks <span class=\"process-math\">\\(3\\times 2\\)<\/span>.",
  "body": " Interaktif: Matriks   Gambar matriks , dianggap sebagai fungsi. Vektor input adalah , yaitu vektor di , dan vektor output adalah , yaitu vektor di . Bidang ungu di sebelah kanan adalah ruang kolom; saat Anda mengubah , output terbatas pada bidang ini.    "
},
{
  "id": "matrix-trans-eg-projection",
  "level": "2",
  "url": "section4-1.html#matrix-trans-eg-projection",
  "type": "Example",
  "number": "1.1.5",
  "title": "Proyeksi ke bidang <span class=\"process-math\">\\(xy\\)<\/span>.",
  "body": " Proyeksi ke bidang  Proyeksi Proyeksi ortogonal  Proyeksi ortogonal ke bidang   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan hanya mengatur koordinat sama dengan nol: ini adalah proyeksi vertikal ke bidang . \\begin{tikzpicture}[myxyz] \\begin{scope}[arrows={|[width=4pt]->[width=4pt]}, shorten=4pt] \\draw (-1,-1,-2.5) node[point, seq2] {} -- (-1,-1,0); \\draw (2,-2,-1) node[point, seq5] {} -- (2,-2,0); \\end{scope} \\begin{scope}[transformxy] \\fill[white, nearly opaque] (-3, -3) rectangle (3, 3); \\draw[step=1cm, help lines] (-3, -3) grid (3, 3); \\end{scope} \\begin{scope}[arrows={|[width=4pt]->[width=4pt]}, shorten=4pt] \\draw (2,1,3) node[point,seq1] {} -- (2,1,0) node[point,seq1] {}; \\point[seq2] at (-1,-1,0); \\point[seq5] at (2,-2,0); \\draw (-1,2,2) node[point,seq3] {} -- (-1,2,0) node[point,seq3] {}; \\draw (-2,0,1) node[point,seq4] {} -- (-2,0,0) node[point,seq4] {}; \\end{scope} \\end{tikzpicture}    Perkalian dengan matriks memproyeksikan sebuah vektor ke bidang . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.     "
},
{
  "id": "matrix-trans-eg-reflection",
  "level": "2",
  "url": "section4-1.html#matrix-trans-eg-reflection",
  "type": "Example",
  "number": "1.1.7",
  "title": "Refleksi.",
  "body": " Refleksi  Refleksi melalui sumbu   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan mengubah tanda koordinat : ini adalah refleksi melalui sumbu . \\def\\theo{\\includegraphics[width=4cm]{theo2.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.3] (-1.8,0) -- (1.8,0); \\draw[->,opacity=.3] (0,-1.8) -- (0,1.8); \\begin{scope}[xshift=7cm] \\node[xscale=-1] (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.3] (-1.8,0) -- (1.8,0); \\draw[->,opacity=.3] (0,-1.8) -- (0,1.8); \\end{scope} \\draw[->] (theo1.20) to[out=20,in=160] node[midway,above] {$b=Ax$} (theo2.20); \\end{tikzpicture}    Perkalian dengan matriks merefleksikan melalui sumbu . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.     "
},
{
  "id": "matrix-trans-eg-dilation",
  "level": "2",
  "url": "section4-1.html#matrix-trans-eg-dilation",
  "type": "Example",
  "number": "1.1.9",
  "title": "Dilatasi.",
  "body": " Dilatasi  Dilatasi  Skala Dilatasi  Skala Operasi baris, penskalaan   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan sama dengan perkalian skalar dengan : ini menskalakan atau mendilatasi bidang dengan faktor . \\def\\theo{\\includegraphics[width=3.5cm]{theo3.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node[scale=1.5] (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(theo1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(theo2.west)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks mendilatasi bidang dengan faktor . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.     "
},
{
  "id": "matrix-trans-eg-identity",
  "level": "2",
  "url": "section4-1.html#matrix-trans-eg-identity",
  "type": "Example",
  "number": "1.1.11",
  "title": "Identitas.",
  "body": " Identitas  Matriks identitas sebagai fungsi   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan tidak mengubah vektor input sama sekali: ini adalah transformasi identitas yang tidak melakukan apa-apa . \\def\\theo{\\includegraphics[width=4cm]{theo11.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(theo1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(theo2.west)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks tidak menggerakkan vektor : yaitu, . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.     "
},
{
  "id": "matrix-trans-eg-rotation",
  "level": "2",
  "url": "section4-1.html#matrix-trans-eg-rotation",
  "type": "Example",
  "number": "1.1.13",
  "title": "Rotasi.",
  "body": " Rotasi  Rotasi berlawanan arah jarum jam sebesar   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Kita substitusikan beberapa titik uji untuk memahami geometri transformasi: \\def\\arcarrow#1;{ \\pgfmathanglebetweenpoints{\\pgfpoint{0cm}{0cm}}{\\pgfpointanchor{#1}{center}} \\let\\sangle=\\pgfmathresult \\draw[|->, shorten=2mm] let \\p1 = (#1.center), \\n1={veclen(\\x1,\\y1)} in (#1) arc[radius=\\n1, delta angle=90, start angle=\\sangle]; } \\begin{minipage}{5cm} \\[\\begin{split} A\\color{seq1}\\vec{1 2} &= \\color{seq1}\\vec{-2 1} \\\\ A\\color{seq2}\\vec{-1 1} &= \\color{seq2}\\vec{-1 -1} \\\\ A\\color{seq3}\\vec{0 -2} &= \\color{seq3}\\vec{2 0} \\\\ \\end{split}\\] \\end{minipage} \\qquad \\begin{tikzpicture}[baseline=0] \\draw[help lines] (-3,-3) grid (3,3); \\draw[->] (-3,0) -- (3,0); \\draw[->] (0,-3) -- (0,3); \\point[seq1] (X1) at (1,2); \\point[seq1] (TX1) at (-2,1); \\arcarrow X1; \\point[seq2] (X2) at (-1,1); \\point[seq2] (TX2) at (-1,-1); \\arcarrow X2; \\point[seq3] (TX3) at (2,0); \\point[seq3] (X3) at (0,-2); \\arcarrow X3; \\end{tikzpicture} Perkalian dengan adalah rotasi berlawanan arah jarum jam sebesar . \\def\\theo{\\includegraphics[width=4cm]{theo8.jpg}} \\begin{tikzpicture} \\node (theo1) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node[rotate=90] (theo2) at (0,0,0) {\\theo}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(theo1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(theo2.north)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks memutar vektor berlawanan arah jarum jam sebesar . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.     "
},
{
  "id": "matrix-trans-shear",
  "level": "2",
  "url": "section4-1.html#matrix-trans-shear",
  "type": "Example",
  "number": "1.1.15",
  "title": "Geser.",
  "body": " Geser  Geser dalam arah   Misalkan Jelaskan fungsi secara geometris.    Dalam persamaan , vektor input dan vektor output keduanya berada di . Pertama kita kalikan dengan sebuah vektor untuk melihat apa yang dilakukannya: Perkalian dengan menambahkan koordinat ke koordinat ; ini disebut geser dalam arah . \\def\\sheep{\\includegraphics[width=4cm]{sheep.jpg}} \\begin{tikzpicture} \\node (sheep1) at (0,0,0) {\\sheep}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\begin{scope}[xshift=7cm] \\node[cm={1,0,1,1,(0,0)}] (sheep2) at (0,0,0) {\\sheep}; \\draw[->,opacity=.6] (-1.3,0) -- (1.3,0); \\draw[->,opacity=.6] (0,-1.3) -- (0,1.3); \\end{scope} \\draw[->] ($(sheep1.east)+(0,.3)$) to[bend left, \"$b = Ax$\"] ($(sheep2.west)+(0,.3)$); \\end{tikzpicture}    Perkalian dengan matriks menambahkan koordinat ke koordinat . Gerakkan vektor input untuk melihat bagaimana vektor output berubah.     "
},
{
  "id": "matrix-trans-transformations-3",
  "level": "2",
  "url": "section4-1.html#matrix-trans-transformations-3",
  "type": "Definition",
  "number": "1.1.17",
  "title": "",
  "body": " Transformasi definisi dari  Transformasi domain dari  Transformasi kodomain dari  Transformasi range dari  Fungsi Transformasi  Domain Transformasi  Kodomain Transformasi  Range Transformasi  transformasi dengan domain dan kodomain   Sebuah transformasi dari ke adalah suatu aturan yang memasangkan setiap vektor dalam dengan sebuah vektor dalam .   disebut sebagai domain dari .   disebut sebagai kodomain dari .  Untuk dalam , vektor dalam disebut citra dari oleh .  Himpunan semua citra disebut range dari .  Notasi berarti adalah sebuah transformasi dari ke .    "
},
{
  "id": "matrix-trans-transformations-6",
  "level": "2",
  "url": "section4-1.html#matrix-trans-transformations-6",
  "type": "Example",
  "number": "1.1.18",
  "title": "Fungsi satu variabel.",
  "body": " Fungsi satu variabel  Transformasi satu variabel  Sebagian besar fungsi yang mungkin pernah Anda lihat sebelumnya memiliki domain dan kodomain yang sama, yaitu . Misalnya, Perhatikan bahwa kita mendefinisikan dengan sebuah aturan: fungsi didefinisikan dengan menentukan apa keluaran fungsi untuk setiap masukan yang mungkin.  Anda mungkin terbiasa memikirkan fungsi-fungsi semacam ini dalam bentuk grafik: ... (kode latex grafik tetap) ... Dalam kasus ini, sumbu horizontal adalah domain, dan sumbu vertikal adalah kodomain. Ini berguna jika domain dan kodomain adalah , tetapi akan sulit dilakukan ketika domain adalah dan kodomain adalah . Grafik fungsi semacam itu merupakan subset dari , yang sulit divisualisasikan. Oleh karena itu, kita jarang menggambarkan grafik suatu transformasi.  Perlu dicatat bahwa range dari adalah interval : ini adalah himpunan semua keluaran yang mungkin dari fungsi .  "
},
{
  "id": "matrix-trans-transformations-7",
  "level": "2",
  "url": "section4-1.html#matrix-trans-transformations-7",
  "type": "Example",
  "number": "1.1.19",
  "title": "Fungsi beberapa variabel.",
  "body": " Fungsi beberapa variabel  Transformasi beberapa variabel  Berikut contoh fungsi dari ke : Masukan dari masing-masing memiliki dua entri, dan keluarannya memiliki tiga entri. Dalam kasus ini, kita mendefinisikan dengan sebuah formula, jadi kita mengevaluasi dengan menggantikan nilai-nilai untuk variabel-variabel:   Berikut contoh fungsi dari ke : Dengan kata lain, mengambil vektor dengan tiga entri, lalu memutarnya; sehingga keluaran juga memiliki tiga entri. Dalam kasus ini, didefinisikan oleh aturan geometris.  "
},
{
  "id": "matrix-trans-identity",
  "level": "2",
  "url": "section4-1.html#matrix-trans-identity",
  "type": "Definition",
  "number": "1.1.20",
  "title": "",
  "body": " Transformasi identitas definisi dari  Transformasi identitas Transformasi identitas  Transformasi identitas    Transformasi identitas  adalah transformasi yang didefinisikan dengan aturan    "
},
{
  "id": "matrix-trans-eg-robot",
  "level": "2",
  "url": "section4-1.html#matrix-trans-eg-robot",
  "type": "Example",
  "number": "1.1.21",
  "title": "Transformasi dunia nyata: robotika.",
  "body": " Transformasi dunia nyata: robotika  Definisi transformasi beserta kosakata terkaitnya mungkin terdengar abstrak, namun transformasi sangat umum dalam kehidupan nyata. Berikut adalah contoh dari bidang robotika dan grafika komputer.  Misalkan Anda sedang membangun sebuah lengan robot dengan tiga sambungan yang dapat menggerakkan tangan di atas sebuah bidang, seperti pada gambar berikut. ... (kode latex lanjutan tetap) ...   "
},
{
  "id": "matrix-trans-defn-of",
  "level": "2",
  "url": "section4-1.html#matrix-trans-defn-of",
  "type": "Definition",
  "number": "1.1.22",
  "title": "",
  "body": " Transformasi matriks definisi dari  Transformasi terkait dengan matriks Transformasi matriks   Misalkan adalah matriks berukuran . Transformasi matriks yang terkait dengan adalah transformasi Ini adalah transformasi yang membawa vektor di ke vektor di .   "
},
{
  "id": "section4-2",
  "level": "1",
  "url": "section4-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Finding eigenvalues and eigenvectors",
  "body": " Finding eigenvalues and eigenvectors   Bagian terakhir memperkenalkan nilai eigen dan vektor eigen, menyajikan intuisi geometris yang mendasari definisi mereka, dan menunjukkan penggunaannya dalam memahami perilaku jangka panjang dari sistem tertentu. Sekarang kita akan mengembangkan pemahaman aljabar tentang nilai eigen dan vektor eigen. Secara khusus, kita akan menemukan metode aljabar untuk menentukan nilai eigen dan vektor eigen dari matriks persegi.    Mari kita mulai dengan meninjau beberapa ide penting yang telah kita lihat sebelumnya.  Misalkan adalah matriks persegi dan vektor tak nol adalah solusi dari persamaan homogen . Apa yang dapat kita simpulkan tentang kemampuan invers matriks ?  Bagaimana determinan memberi tahu kita apakah ada solusi tak nol untuk persamaan homogen ?  Misalkan . Tentukan determinan . Apa yang diberitahukan tentang ruang solusi persamaan homogen ?  Temukan basis untuk .  Apa hubungan antara rank matriks dan dimensi dari null space-nya?      Matriks tidak dapat memiliki posisi pivot di setiap kolom sehingga tidak dapat diinverskan.  Jika ada solusi tak nol untuk persamaan homogen , maka tidak dapat diinverskan sehingga .  Kita menemukan bahwa sehingga ada solusi tak nol untuk persamaan homogen.  Bentuk eselon baris tereduksi dari adalah sehingga ruang solusi persamaan homogen dapat dijelaskan secara parametrik sebagai . Basis untuk adalah .  Jika adalah matriks , maka .       Polinomial Karakteristik  Kita akan melihat bahwa nilai eigen dari matriks persegi muncul sebagai akar dari polinomial tertentu. Untuk memulai, perhatikan bahwa kita awalnya mendefinisikan vektor eigen sebagai vektor tak nol yang memenuhi persamaan . Kita akan menulis ulang ini sebagai Dengan kata lain, vektor eigen adalah solusi dari persamaan homogen . Ini membawa kita ke wilayah yang sudah dikenal seperti yang dijelajahi dalam aktivitas berikut.    Nilai eigen dari matriks persegi didefinisikan dengan syarat bahwa ada solusi tak nol untuk persamaan homogen .  Jika ada solusi tak nol untuk persamaan homogen , apa yang dapat kita simpulkan tentang kemampuan invers matriks ?  Jika ada solusi tak nol untuk persamaan homogen , apa yang dapat kita simpulkan tentang determinan ?  Mari kita pertimbangkan matriks dari mana kita konstruksi . Tentukan determinan . Jenis persamaan apa yang Anda peroleh ketika kita menetapkan determinan ini menjadi nol untuk mendapatkan ?  Gunakan determinan yang Anda temukan di bagian sebelumnya untuk menemukan nilai eigen dengan menyelesaikan persamaan . Kami mempertimbangkan matriks ini di jadi kami harus menemukan nilai eigen yang sama untuk yang kami temukan dengan penalaran geometris di sana.  Pertimbangkan matriks dan temukan nilai eigennya dengan menyelesaikan persamaan .  Pertimbangkan matriks dan temukan nilai eigennya dengan menyelesaikan persamaan .  Temukan nilai eigen dari matriks segitiga . Apa yang secara umum benar tentang nilai eigen dari matriks segitiga?         Matriks tidak dapat diinverskan.    Haruslah demikian bahwa .    Kita menemukan bahwa .     sehingga kita menemukan nilai eigen dan .    Untuk matriks ini, kita memiliki sehingga ada satu nilai eigen, .     sehingga ada nilai eigen kompleks, dan .    Karena determinan matriks segitiga sama dengan produk dari entri diagonalnya, nilai eigen sama dengan entri pada diagonal.       Aktivitas ini menunjukkan teknik yang memungkinkan kita menemukan nilai eigen dari matriks persegi . Karena nilai eigen adalah skalar untuk mana persamaan memiliki solusi tak nol, maka haruslah tidak dapat diinverskan. Oleh karena itu, determinannya adalah nol. Ini memberi kita persamaan yang solusinya adalah nilai eigen dari . Persamaan ini disebut persamaan karakteristik dari . persamaan karakteristik    Jika kita menulis persamaan karakteristik untuk matriks , kita melihat bahwa Ini menunjukkan kepada kita bahwa nilai eigen adalah dan .    polinomial karakteristik Secara umum, ekspresi adalah polinomial dalam , yang disebut polinomial karakteristik dari . Jika adalah matriks , derajat polinomial karakteristik adalah . Sebagai contoh, jika adalah matriks , maka adalah polinomial kuadrat; jika adalah matriks , maka adalah polinomial kubik.  Matriks dalam memiliki polinomial karakteristik dengan dua akar real dan berbeda. Ini tidak selalu terjadi, seperti yang ditunjukkan dalam dua contoh berikut.   Pertimbangkan matriks , yang persamaan karakteristiknya adalah Dalam hal ini, polinomial karakteristik memiliki satu akar real, yang berarti bahwa matriks ini memiliki satu nilai eigen real, .    Untuk menemukan nilai eigen dari matriks segitiga, kita mengingat bahwa determinan matriks segitiga adalah produk dari entri pada diagonal. Sebagai contoh, matriks segitiga berikut memiliki persamaan karakteristik yang menunjukkan bahwa nilai eigen adalah entri diagonal .     Menemukan Vektor Eigen  Sekarang setelah kita dapat menemukan nilai eigen dari matriks persegi dengan menyelesaikan persamaan karakteristik , kita akan beralih ke pertanyaan tentang cara menemukan vektor eigen yang terkait dengan nilai eigen . Kuncinya, seperti sebelumnya, adalah untuk dicatat bahwa vektor eigen adalah solusi tak nol dari persamaan homogen . Dengan kata lain, vektor eigen yang terkait dengan nilai eigen membentuk ruang nol .  Ini menunjukkan bahwa vektor eigen yang terkait dengan nilai eigen membentuk subruang dari . Kita akan menotasikan subruang vektor eigen dari matriks yang terkait dengan nilai eigen oleh dan mencatat bahwa . Kita mengatakan bahwa adalah eigenspace dari yang terkait dengan nilai eigen . eigenspace     Dalam aktivitas ini, kita akan menemukan vektor eigen dari sebuah matriks sebagai ruang nol dari matriks .  Mari kita mulai dengan matriks . Kita telah melihat bahwa adalah nilai eigen. Bentuk matriks dan temukan basis untuk eigenspace . Berapa dimensi dari eigenspace ini? Untuk setiap vektor basis , verifikasi bahwa .  Kita juga melihat bahwa adalah nilai eigen. Bentuk matriks dan temukan basis untuk eigenspace . Berapa dimensi dari eigenspace ini? Untuk setiap vektor basis , verifikasi bahwa .  Apakah mungkin membentuk basis dari yang terdiri dari vektor eigen dari ?  Sekarang pertimbangkan matriks . Tulis persamaan karakteristik untuk dan gunakan untuk menemukan nilai eigen dari . Untuk setiap nilai eigen, temukan basis untuk eigenspace . Apakah mungkin membentuk basis dari yang terdiri dari vektor eigen dari ?  Selanjutnya, pertimbangkan matriks . Tulis persamaan karakteristik untuk dan gunakan untuk menemukan nilai eigen dari . Untuk setiap nilai eigen, temukan basis untuk eigenspace . Apakah mungkin membentuk basis dari yang terdiri dari vektor eigen dari ?  Akhirnya, temukan nilai eigen dan vektor eigen dari matriks diagonal . Jelaskan hasil Anda dengan mempertimbangkan efek geometris dari transformasi matriks yang didefinisikan oleh .       Kita memiliki Ruang nol berdimensi satu dengan basis .  Kita memiliki Ruang nol berdimensi satu dengan basis .  Kita dapat membentuk basis untuk yang terdiri dari vektor eigen dari dengan mengambil .  Persamaan karakteristik adalah , yang berarti ada satu nilai eigen . Eigenspace ini berdimensi dua dengan basis . Dalam kasus ini, kita dapat membentuk basis untuk yang terdiri dari vektor eigen dari .  Persamaan karakteristik adalah sehingga ada lagi satu nilai eigen . Dalam kasus ini, eigenspace berdimensi satu dengan vektor basis . Tidak mungkin membentuk basis untuk yang terdiri dari vektor eigen.  Kita memiliki vektor eigen dengan nilai eigen terkait dan dengan nilai eigen terkait .     Setelah kita menemukan nilai eigen dari matriks , mendeskripsikan eigenspace yang terkait adalah tugas yang sudah dikenal, yaitu mendeskripsikan ruang nol .   Mengulas kembali matriks dari , kita ingat bahwa kita menemukan nilai eigen dan .  Memperhatikan nilai eigen , kita memiliki Karena vektor eigen adalah solusi dari persamaan , kita melihat bahwa mereka ditentukan oleh satu persamaan atau . Oleh karena itu vektor eigen di memiliki bentuk Dengan kata lain, adalah subruang satu dimensi dari dengan vektor basis atau vektor basis . Dengan cara yang sama, kita menemukan bahwa basis untuk eigenspace adalah .  Kita mencatat bahwa, untuk matriks ini, dimungkinkan untuk membentuk basis dari yang terdiri dari vektor eigen, yaitu,     Pertimbangkan matriks yang persamaan karakteristiknya adalah   Ada satu nilai eigen , dan kita menemukan bahwa Oleh karena itu, eigenspace berdimensi satu dengan vektor basis .    Jika , maka yang menyiratkan bahwa ada satu nilai eigen . Kita menemukan bahwa yang mengatakan bahwa setiap vektor dua dimensi memenuhi . Oleh karena itu, setiap vektor adalah vektor eigen sehingga . Eigenspace ini berdimensi dua.  Kita dapat melihat ini dengan cara lain. Transformasi matriks yang didefinisikan oleh memutar vektor sebesar , yang mengatakan bahwa untuk setiap vektor . Dengan kata lain, setiap vektor dua dimensi adalah vektor eigen dengan nilai eigen terkait .   Dua contoh terakhir ini menggambarkan dua jenis perilaku ketika hanya ada satu nilai eigen. Dalam satu kasus, kita dapat membentuk basis dari menggunakan vektor eigen; dalam kasus lain, kita tidak bisa. Kita akan menjelajahi perilaku ini lebih lanjut di subbagian berikutnya.   Pemeriksaan atas pekerjaan kita  Ketika menemukan nilai eigen dan vektor eigen terkait dengan cara ini, kita pertama-tama menemukan nilai eigen dengan menyelesaikan persamaan karakteristik. Jika adalah solusi dari persamaan karakteristik, maka tidak dapat diinverskan dan, akibatnya, harus berisi baris tanpa posisi pivot.  Ini berfungsi sebagai pemeriksaan atas pekerjaan kita. Jika kita mereduksi baris dan menemukan matriks identitas, maka kita telah membuat kesalahan baik dalam menyelesaikan persamaan karakteristik maupun dalam menemukan .       For each of the following matrices, find its characteristic polynomial, its eigenvalues, and the multiplicity of each eigenvalue.   .   .   .   .      The characteristic polynomial is . There is a single eigenvalue having multiplicity .  The characteristic polynomial is . There are three eigenvalues , each of multiplicity .  The characteristic polynomial is , showing that there is one eigenvalue having multiplicity .  The characteristic polynomial is . There are two eigenvalues and , each having multiplicity .       . There is a single eigenvalue having multiplicity .   . There are three eigenvalues , each of multiplicity .   . There is one eigenvalue having multiplicity .   . There are two eigenvalues and , each having multiplicity .       Given an matrix , an important question, , asks whether we can find a basis of consisting of eigenvectors of . For each of the matrices in the previous exercise, find a basis of consisting of eigenvectors or state why such a basis does not exist.     There is a single eigenvalue and so it is not possible to find a basis for consisting of eigenvectors of .  The three eigenvalues each have multiplicity one so we know that their eigenspaces are one-dimensional. We find a basis vector for is , for is , and for is . A basis for consisting of eigenvectors of is therefore   Since is the zero matrix, every vector is an eigenvector of . This means that is a basis of consisting of eigenvectors.  The multiplicity of each eigenvalue is one so there will be a basis of consisting of eigenvectors. In particular, a basis vector for is and a basis vector for is . This means that is a basis for consisting of eigenvectors of .       It is not possible.   .              Determine whether the following statements are true or false and provide a justification for your response.  The eigenvalues of a matrix are the entries on the diagonal of .  If is an eigenvalue of multiplicity , then is one-dimensional.  If a matrix is invertible, then cannot be an eigenvalue.  If is a matrix, the characteristic polynomial has degree less than .  The eigenspace of is the same as the null space .      False. This is true for a diagonal matrix, but it is not generally true as we see by considering the matrix whose eigenvalues are and .  True. If is the multiplicity, we have so we must have .  True. If is an eigenvalue, then an associated eigenvector is a nonzero solution to the homogeneous equation . This would say that is not invertible.  False. The degree of the characteristic polynomial equals the number of rows and columns of the square matrix.  True. An eigenvector associated to the eigenvalue satisfies . This is the same equation that characterizes the null space .      False  True  True  False  True       Provide a justification for your response to the following questions.  Suppose that is a matrix having eigenvalues . What are the eigenvalues of ?  Suppose that is a diagonal matrix. Why can you guarantee that there is a basis of consisting of eigenvectors of ?  If is a matrix whose eigenvalues are , can you guarantee that there is a basis of consisting of eigenvectors of ?  Suppose that the characteristic polynomial of a matrix is . What are the eigenvalues of ? Is invertible? Is there a basis of consisting of eigenvectors of ?  If the characteristic polynomial of is , what is the characteristic polynomial of ? what is the characteristic polynomial of ?      If , then . This says that the eigenvalues of are .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes. Since there are three distinct eigenvalues, the multiplicity of each eigenvalue must be one. Therefore, the dimension of each eigenspace is one. If we choose a basis vector for each of the eigenspaces, we will obtain a basis for .  The eigenvalues are determined by , which shows that the eigenvalues are . This shows that is not invertible since is an eigenvalue. There is, however, a basis for consisting of eigenvectors of since the three eigenvalues are distinct.  If is an eigenvalue of , then is an eigenvalue of . Therefore, the characteristic polynomial of is .       .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes.   . The matrix is not invertible, but there is a basis for consisting of eigenvectors of .   .       For each of the following matrices, use Sage to determine its eigenvalues, their multiplicities, and a basis for each eigenspace. For which matrices is it possible to construct a basis for consisting of eigenvectors?                  Sage tells us there are three distinct eigenvalues , each having multiplicity one. A basis of eigenvectors is   It is not possible to find a basis of eigenvectors because the eigenvalue has multiplicity two but its eigenspace is one-dimensional.  It is possible to find a basis for consisting of eignevectors because one eigenvalue has multiplicity one while the other has multiplicity two and a two-dimensional eigenspace. A basis is       A basis of eigenvectors is   It is not possible to find a basis of eigenvectors.  A basis of eigenvectors is        There is a relationship between the determinant of a matrix and the product of its eigenvalues.  We have seen that the eigenvalues of the matrix are . What is ? What is the product of the eigenvalues of ?  Consider the triangular matrix . What are the eigenvalues of ? What is ? What is the product of the eigenvalues of ?  Based on these examples, what do you think is the relationship between the determinant of a matrix and the product of its eigenvalues?  Suppose the characteristic polynomial is written as . By substituting into this equation, explain why the determinant of a matrix equals the product of its eigenvalues.      We have , and the product of the eigenvalues is .  We have , and the product of the eigenvalues is   We suspect that equals the product of the eigenvalues.  Setting , we have Notice that we mean the product of the eigenvalues, including their multiplicities.      Both equal .  Both equal .   equals the product of the eigenvalues.  We see that .       Consider the matrix .  Find the eigenvalues of and a basis for their associated eigenspaces.  Suppose that . Express as a linear combination of eigenvectors of .  Define the vectors . Write , , and as a linear combination of eigenvectors of .  What happens to as grows larger and larger?      We find the eigenvalues with associated eigenvector and with associated eigenvector .  After constructing an augmented matrix, we find that .  Since , we have .  We have . As grows larger, becomes less significant. Eventually, .       with associated eigenvector and with associated eigenvector .   .  We have .   .       Consider the matrix   Find the eigenvalues of and a basis for their associated eigenspaces.  Suppose that . Express as a linear combination of eigenvectors of .  Define the vectors . Write , , and as a linear combination of eigenvectors of .  What happens to as grows larger and larger?      We have eigenvalues with associated eigenvector and with associated eigenvector .  After constructing an augmented matrix, we find .  Since , we have   We have . As grows larger, becomes less significant. Eventually, .       with associated eigenvector and with associated eigenvector .   .  We have .   .      "
},
{
  "id": "section4-2-2-2",
  "level": "2",
  "url": "section4-2.html#section4-2-2-2",
  "type": "Exploration",
  "number": "7",
  "title": "",
  "body": "  Mari kita mulai dengan meninjau beberapa ide penting yang telah kita lihat sebelumnya.  Misalkan adalah matriks persegi dan vektor tak nol adalah solusi dari persamaan homogen . Apa yang dapat kita simpulkan tentang kemampuan invers matriks ?  Bagaimana determinan memberi tahu kita apakah ada solusi tak nol untuk persamaan homogen ?  Misalkan . Tentukan determinan . Apa yang diberitahukan tentang ruang solusi persamaan homogen ?  Temukan basis untuk .  Apa hubungan antara rank matriks dan dimensi dari null space-nya?      Matriks tidak dapat memiliki posisi pivot di setiap kolom sehingga tidak dapat diinverskan.  Jika ada solusi tak nol untuk persamaan homogen , maka tidak dapat diinverskan sehingga .  Kita menemukan bahwa sehingga ada solusi tak nol untuk persamaan homogen.  Bentuk eselon baris tereduksi dari adalah sehingga ruang solusi persamaan homogen dapat dijelaskan secara parametrik sebagai . Basis untuk adalah .  Jika adalah matriks , maka .    "
},
{
  "id": "section4-2-3-3",
  "level": "2",
  "url": "section4-2.html#section4-2-3-3",
  "type": "Activity",
  "number": "8",
  "title": "",
  "body": "  Nilai eigen dari matriks persegi didefinisikan dengan syarat bahwa ada solusi tak nol untuk persamaan homogen .  Jika ada solusi tak nol untuk persamaan homogen , apa yang dapat kita simpulkan tentang kemampuan invers matriks ?  Jika ada solusi tak nol untuk persamaan homogen , apa yang dapat kita simpulkan tentang determinan ?  Mari kita pertimbangkan matriks dari mana kita konstruksi . Tentukan determinan . Jenis persamaan apa yang Anda peroleh ketika kita menetapkan determinan ini menjadi nol untuk mendapatkan ?  Gunakan determinan yang Anda temukan di bagian sebelumnya untuk menemukan nilai eigen dengan menyelesaikan persamaan . Kami mempertimbangkan matriks ini di jadi kami harus menemukan nilai eigen yang sama untuk yang kami temukan dengan penalaran geometris di sana.  Pertimbangkan matriks dan temukan nilai eigennya dengan menyelesaikan persamaan .  Pertimbangkan matriks dan temukan nilai eigennya dengan menyelesaikan persamaan .  Temukan nilai eigen dari matriks segitiga . Apa yang secara umum benar tentang nilai eigen dari matriks segitiga?         Matriks tidak dapat diinverskan.    Haruslah demikian bahwa .    Kita menemukan bahwa .     sehingga kita menemukan nilai eigen dan .    Untuk matriks ini, kita memiliki sehingga ada satu nilai eigen, .     sehingga ada nilai eigen kompleks, dan .    Karena determinan matriks segitiga sama dengan produk dari entri diagonalnya, nilai eigen sama dengan entri pada diagonal.      "
},
{
  "id": "example-eigenvalues-poly",
  "level": "2",
  "url": "section4-2.html#example-eigenvalues-poly",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": " Jika kita menulis persamaan karakteristik untuk matriks , kita melihat bahwa Ini menunjukkan kepada kita bahwa nilai eigen adalah dan .  "
},
{
  "id": "section4-2-3-8",
  "level": "2",
  "url": "section4-2.html#section4-2-3-8",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " Pertimbangkan matriks , yang persamaan karakteristiknya adalah Dalam hal ini, polinomial karakteristik memiliki satu akar real, yang berarti bahwa matriks ini memiliki satu nilai eigen real, .  "
},
{
  "id": "section4-2-3-9",
  "level": "2",
  "url": "section4-2.html#section4-2-3-9",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " Untuk menemukan nilai eigen dari matriks segitiga, kita mengingat bahwa determinan matriks segitiga adalah produk dari entri pada diagonal. Sebagai contoh, matriks segitiga berikut memiliki persamaan karakteristik yang menunjukkan bahwa nilai eigen adalah entri diagonal .  "
},
{
  "id": "section4-2-4-4",
  "level": "2",
  "url": "section4-2.html#section4-2-4-4",
  "type": "Activity",
  "number": "9",
  "title": "",
  "body": "  Dalam aktivitas ini, kita akan menemukan vektor eigen dari sebuah matriks sebagai ruang nol dari matriks .  Mari kita mulai dengan matriks . Kita telah melihat bahwa adalah nilai eigen. Bentuk matriks dan temukan basis untuk eigenspace . Berapa dimensi dari eigenspace ini? Untuk setiap vektor basis , verifikasi bahwa .  Kita juga melihat bahwa adalah nilai eigen. Bentuk matriks dan temukan basis untuk eigenspace . Berapa dimensi dari eigenspace ini? Untuk setiap vektor basis , verifikasi bahwa .  Apakah mungkin membentuk basis dari yang terdiri dari vektor eigen dari ?  Sekarang pertimbangkan matriks . Tulis persamaan karakteristik untuk dan gunakan untuk menemukan nilai eigen dari . Untuk setiap nilai eigen, temukan basis untuk eigenspace . Apakah mungkin membentuk basis dari yang terdiri dari vektor eigen dari ?  Selanjutnya, pertimbangkan matriks . Tulis persamaan karakteristik untuk dan gunakan untuk menemukan nilai eigen dari . Untuk setiap nilai eigen, temukan basis untuk eigenspace . Apakah mungkin membentuk basis dari yang terdiri dari vektor eigen dari ?  Akhirnya, temukan nilai eigen dan vektor eigen dari matriks diagonal . Jelaskan hasil Anda dengan mempertimbangkan efek geometris dari transformasi matriks yang didefinisikan oleh .       Kita memiliki Ruang nol berdimensi satu dengan basis .  Kita memiliki Ruang nol berdimensi satu dengan basis .  Kita dapat membentuk basis untuk yang terdiri dari vektor eigen dari dengan mengambil .  Persamaan karakteristik adalah , yang berarti ada satu nilai eigen . Eigenspace ini berdimensi dua dengan basis . Dalam kasus ini, kita dapat membentuk basis untuk yang terdiri dari vektor eigen dari .  Persamaan karakteristik adalah sehingga ada lagi satu nilai eigen . Dalam kasus ini, eigenspace berdimensi satu dengan vektor basis . Tidak mungkin membentuk basis untuk yang terdiri dari vektor eigen.  Kita memiliki vektor eigen dengan nilai eigen terkait dan dengan nilai eigen terkait .    "
},
{
  "id": "section4-2-4-6",
  "level": "2",
  "url": "section4-2.html#section4-2-4-6",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": " Mengulas kembali matriks dari , kita ingat bahwa kita menemukan nilai eigen dan .  Memperhatikan nilai eigen , kita memiliki Karena vektor eigen adalah solusi dari persamaan , kita melihat bahwa mereka ditentukan oleh satu persamaan atau . Oleh karena itu vektor eigen di memiliki bentuk Dengan kata lain, adalah subruang satu dimensi dari dengan vektor basis atau vektor basis . Dengan cara yang sama, kita menemukan bahwa basis untuk eigenspace adalah .  Kita mencatat bahwa, untuk matriks ini, dimungkinkan untuk membentuk basis dari yang terdiri dari vektor eigen, yaitu,   "
},
{
  "id": "section4-2-4-7",
  "level": "2",
  "url": "section4-2.html#section4-2-4-7",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": " Pertimbangkan matriks yang persamaan karakteristiknya adalah   Ada satu nilai eigen , dan kita menemukan bahwa Oleh karena itu, eigenspace berdimensi satu dengan vektor basis .  "
},
{
  "id": "section4-2-4-8",
  "level": "2",
  "url": "section4-2.html#section4-2-4-8",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": " Jika , maka yang menyiratkan bahwa ada satu nilai eigen . Kita menemukan bahwa yang mengatakan bahwa setiap vektor dua dimensi memenuhi . Oleh karena itu, setiap vektor adalah vektor eigen sehingga . Eigenspace ini berdimensi dua.  Kita dapat melihat ini dengan cara lain. Transformasi matriks yang didefinisikan oleh memutar vektor sebesar , yang mengatakan bahwa untuk setiap vektor . Dengan kata lain, setiap vektor dua dimensi adalah vektor eigen dengan nilai eigen terkait .  "
},
{
  "id": "section4-2-5-1",
  "level": "2",
  "url": "section4-2.html#section4-2-5-1",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": "  For each of the following matrices, find its characteristic polynomial, its eigenvalues, and the multiplicity of each eigenvalue.   .   .   .   .      The characteristic polynomial is . There is a single eigenvalue having multiplicity .  The characteristic polynomial is . There are three eigenvalues , each of multiplicity .  The characteristic polynomial is , showing that there is one eigenvalue having multiplicity .  The characteristic polynomial is . There are two eigenvalues and , each having multiplicity .       . There is a single eigenvalue having multiplicity .   . There are three eigenvalues , each of multiplicity .   . There is one eigenvalue having multiplicity .   . There are two eigenvalues and , each having multiplicity .    "
},
{
  "id": "section4-2-5-2",
  "level": "2",
  "url": "section4-2.html#section4-2-5-2",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": "  Given an matrix , an important question, , asks whether we can find a basis of consisting of eigenvectors of . For each of the matrices in the previous exercise, find a basis of consisting of eigenvectors or state why such a basis does not exist.     There is a single eigenvalue and so it is not possible to find a basis for consisting of eigenvectors of .  The three eigenvalues each have multiplicity one so we know that their eigenspaces are one-dimensional. We find a basis vector for is , for is , and for is . A basis for consisting of eigenvectors of is therefore   Since is the zero matrix, every vector is an eigenvector of . This means that is a basis of consisting of eigenvectors.  The multiplicity of each eigenvalue is one so there will be a basis of consisting of eigenvectors. In particular, a basis vector for is and a basis vector for is . This means that is a basis for consisting of eigenvectors of .       It is not possible.   .           "
},
{
  "id": "section4-2-5-3",
  "level": "2",
  "url": "section4-2.html#section4-2-5-3",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": "  Determine whether the following statements are true or false and provide a justification for your response.  The eigenvalues of a matrix are the entries on the diagonal of .  If is an eigenvalue of multiplicity , then is one-dimensional.  If a matrix is invertible, then cannot be an eigenvalue.  If is a matrix, the characteristic polynomial has degree less than .  The eigenspace of is the same as the null space .      False. This is true for a diagonal matrix, but it is not generally true as we see by considering the matrix whose eigenvalues are and .  True. If is the multiplicity, we have so we must have .  True. If is an eigenvalue, then an associated eigenvector is a nonzero solution to the homogeneous equation . This would say that is not invertible.  False. The degree of the characteristic polynomial equals the number of rows and columns of the square matrix.  True. An eigenvector associated to the eigenvalue satisfies . This is the same equation that characterizes the null space .      False  True  True  False  True    "
},
{
  "id": "section4-2-5-4",
  "level": "2",
  "url": "section4-2.html#section4-2-5-4",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": "  Provide a justification for your response to the following questions.  Suppose that is a matrix having eigenvalues . What are the eigenvalues of ?  Suppose that is a diagonal matrix. Why can you guarantee that there is a basis of consisting of eigenvectors of ?  If is a matrix whose eigenvalues are , can you guarantee that there is a basis of consisting of eigenvectors of ?  Suppose that the characteristic polynomial of a matrix is . What are the eigenvalues of ? Is invertible? Is there a basis of consisting of eigenvectors of ?  If the characteristic polynomial of is , what is the characteristic polynomial of ? what is the characteristic polynomial of ?      If , then . This says that the eigenvalues of are .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes. Since there are three distinct eigenvalues, the multiplicity of each eigenvalue must be one. Therefore, the dimension of each eigenspace is one. If we choose a basis vector for each of the eigenspaces, we will obtain a basis for .  The eigenvalues are determined by , which shows that the eigenvalues are . This shows that is not invertible since is an eigenvalue. There is, however, a basis for consisting of eigenvectors of since the three eigenvalues are distinct.  If is an eigenvalue of , then is an eigenvalue of . Therefore, the characteristic polynomial of is .       .  The standard basis vectors are eigenvectors associated to the diagonal entries.  Yes.   . The matrix is not invertible, but there is a basis for consisting of eigenvectors of .   .    "
},
{
  "id": "section4-2-5-5",
  "level": "2",
  "url": "section4-2.html#section4-2-5-5",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": "  For each of the following matrices, use Sage to determine its eigenvalues, their multiplicities, and a basis for each eigenspace. For which matrices is it possible to construct a basis for consisting of eigenvectors?                  Sage tells us there are three distinct eigenvalues , each having multiplicity one. A basis of eigenvectors is   It is not possible to find a basis of eigenvectors because the eigenvalue has multiplicity two but its eigenspace is one-dimensional.  It is possible to find a basis for consisting of eignevectors because one eigenvalue has multiplicity one while the other has multiplicity two and a two-dimensional eigenspace. A basis is       A basis of eigenvectors is   It is not possible to find a basis of eigenvectors.  A basis of eigenvectors is     "
},
{
  "id": "section4-2-5-6",
  "level": "2",
  "url": "section4-2.html#section4-2-5-6",
  "type": "Exercise",
  "number": "1.2.3.6",
  "title": "",
  "body": "  There is a relationship between the determinant of a matrix and the product of its eigenvalues.  We have seen that the eigenvalues of the matrix are . What is ? What is the product of the eigenvalues of ?  Consider the triangular matrix . What are the eigenvalues of ? What is ? What is the product of the eigenvalues of ?  Based on these examples, what do you think is the relationship between the determinant of a matrix and the product of its eigenvalues?  Suppose the characteristic polynomial is written as . By substituting into this equation, explain why the determinant of a matrix equals the product of its eigenvalues.      We have , and the product of the eigenvalues is .  We have , and the product of the eigenvalues is   We suspect that equals the product of the eigenvalues.  Setting , we have Notice that we mean the product of the eigenvalues, including their multiplicities.      Both equal .  Both equal .   equals the product of the eigenvalues.  We see that .    "
},
{
  "id": "section4-2-5-7",
  "level": "2",
  "url": "section4-2.html#section4-2-5-7",
  "type": "Exercise",
  "number": "1.2.3.7",
  "title": "",
  "body": "  Consider the matrix .  Find the eigenvalues of and a basis for their associated eigenspaces.  Suppose that . Express as a linear combination of eigenvectors of .  Define the vectors . Write , , and as a linear combination of eigenvectors of .  What happens to as grows larger and larger?      We find the eigenvalues with associated eigenvector and with associated eigenvector .  After constructing an augmented matrix, we find that .  Since , we have .  We have . As grows larger, becomes less significant. Eventually, .       with associated eigenvector and with associated eigenvector .   .  We have .   .    "
},
{
  "id": "section4-2-5-8",
  "level": "2",
  "url": "section4-2.html#section4-2-5-8",
  "type": "Exercise",
  "number": "1.2.3.8",
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

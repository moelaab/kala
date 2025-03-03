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
  "body": " Aritmatika Matrik   Sistem Linier Matriks sangat penting didalam pembahasan sistem linier. Dalam bab ini, kita akan membahasnya secara mendalam tentang matrik untuk sistem linier.    Dasar dasar Matrik Kita mulai dengan beberapa definisi dasar tentang matriks, persamaan matriks, dan jenis jenis matriks tertentu. Seperti yang dijelaskan dalam definisi berikut, matriks disusun engan cara yang sangat khusus..  Matrix  matrix   A (real) matrix is a rectangular array of real numbers . Nilai pada baris ke dan kolom ke dari disebut dengan -entry (a -th entry ) dari .  Matriks yang mempunyai baris dan kolom dikatakan mempunyai ukuran (atau dimensi ) .  Kita biasanya menggunakan huruf kapital di awal alfabet (  , ) untuk menunjukkan matriks..    Matriks yang ditampilkan dalam memerlukan banyak ruang untuk ditampilkan, dan waktu yang dibutuhkan untuk menulis atau menyusunnya. Oleh karena itu, kami memperkenalkan dua bentuk notasi yang agak saling melengkapi untuk membantu mendeskripsikan matriks.     Matriks dengan entri ke- adalah     Entri ke- dari matriks      Notasi pembentukan matriks  matriks notasi pembentukan matriks  Notasi menunjukkan matriks yang entri ke- (baris ke- , kolom ke- ) adalah . Notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan matriks , notasi menyatakan entri ke- dari .    Dengan demikian, jika , maka untuk semua dan .      Notasi pembentukan matriks sering digunakan hanya untuk memberi nama pada entri-entri sebuah matriks sembarang. Namun, notasi ini juga dapat digunakan untuk menggambarkan sebuah matriks di mana entri -nya diberikan oleh aturan atau rumus tertentu.  Sebagai contoh, misalkan , di mana . Ini adalah matriks berukuran yang entri -nya adalah . Dengan demikian, . Pada contoh ini, kita memiliki dan untuk .    Dalam bahasa sehari-hari, gagasan tentang kesetaraan dianggap sebagai sesuatu yang sudah jelas. Dua hal dianggap sama jika keduanya sama. Apa lagi yang perlu dikatakan? Dalam matematika, setiap kali kita memperkenalkan jenis objek matematika baru (misalnya, himpunan, fungsi, -tuple, dll.) kita perlu menjelaskan secara tepat apa yang kita maksud agar dua hal dianggap sama. Kita melakukannya sekarang dengan matriks.   Kesamaan Matrik   Misalkan dan adalah matriks dengan dimensi dan , secara berturut-turut. Kedua matriks tersebut dikatakan sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .      Matriks tidak sama satu sama lain, meskipun keduanya memiliki entri yang sama dan muncul dalam urutan yang hampir sama. Dalam hal ini, kesetaraan tidak berlaku karena dan memiliki bentuk yang berbeda: berukuran , dan berukuran .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .     Matriks bujur sangkar, vektor baris, vektor kolom, matriks nol  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    Sebuah matriks disebut bujur sangkar jika dimensinya adalah . Diagonal dari sebuah matriks bujur sangkar terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari vektor baris dinotasikan dengan .  Sebuah matriks  , disebut vektor kolom . Entri ke- dari vektor kolom dinotasikan dengan .   Matriks nol berukuran , dinotasikan dengan , adalah matriks dengan dimensi tersebut, di mana semua entrinya adalah nol: yaitu, untuk semua dan .  Jika dimensi sebenarnya tidak penting, kita sering menghilangkan subskrip dan cukup menulis untuk matriks nol dengan dimensi yang sesuai.     Matriks sebagai Koleksi Kolom\/Baris   Misalkan adalah matriks berukuran . Kita sering memandang sebagai kumpulan kolom, dalam hal ini kita tuliskan , di mana adalah vektor kolom yang terdiri dari entri-entri pada kolom ke- dari : , . Demikian pula, ketika kita memandang sebagai kumpulan baris, kita tuliskan , di mana adalah vektor baris yang terdiri dari entri-entri pada baris ke- dari : , . Garis vertikal dan horizontal dalam dan digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.     Elemen matriks, baris, dan kolom  Sintaks Sage untuk mengakses entri tertentu dari sebuah matriks memiliki kesamaan dengan notasi entri matriks. Akan tetapi dalam Python, index dimulai dari 0. Jadi, jika A ditetapkan ke matriks di Sage, A[i,j] adalah entri ke- .   Subset matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , yang disusun sebagai matriks.   Membiarkan sisi kiri atau kanan : kosong dalam notasi ini menghilangkan batasan pembatasan yang sesuai (kiri atau kanan) dari indeks yang dimaksud. Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian kolom keempat dari yang dimulai dengan entri keduanya.   Atau, kita bisa mendapatkan daftar semua baris atau kolom menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.      Penjumlahan, Pengurangan, dan Perkalian Skalar  Kita sekarang akan menjelaskan berbagai operasi aljabar yang akan kita gunakan untuk menggabungkan dan mentransformasi matriks; kita menyebut penggunaan operasi-operasi ini secara longgar sebagai aritmatika matriks . Beberapa dari operasi ini menyerupai operasi yang sudah dikenal dari aritmatika bilangan real dalam hal notasi dan definisinya. Jangan lengah! Ini adalah operasi baru yang didefinisikan untuk kelas objek matematika baru, dan harus diperlakukan dengan hati-hati. Secara khusus, perhatikan dengan cermat (a) jenis objek matematika apa yang menjadi masukan untuk setiap operasi (bahan dari operasi), dan (b) jenis objek matematika apa yang dihasilkan.   Penjumlahan dan Pengurangan Matriks   penjumlahan matriks    pengurangan matriks      Penjumlahan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   Pengurangan matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka sebagai matriks . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Bahan untuk penjumlahan (atau pengurangan) matriks adalah dua matriks dengan dimensi yang sama ; dan hasilnya adalah matriks ketiga dengan dimensi yang sama.    Perkalian Skalar Matriks   perkalian skalar matriks    Diberikan matriks apa pun dan konstanta apa pun , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan menskalakan setiap entri dari dengan konstanta .  Kita menyebut sebagai kelipatan skalar dari . Selain itu, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .     Sedangkan penjumlahan dan pengurangan matriks sangat mirip dengan operasi yang sesuai yang melibatkan bilangan real, tidak ada analog aritmatika real yang jelas untuk perkalian skalar matriks. Secara khusus, perhatikan bagaimana perkalian skalar matriks adalah semacam operasi hibrida yang menggabungkan objek matematika dari dua sifat yang sangat berbeda: bilangan real (atau skalar) di satu sisi, dan matriks di sisi lain.   Kita menyebut hasil dari penerapan urutan penjumlahan matriks dan perkalian skalar sebagai kombinasi linear matriks .   Kombinasi Linear Matriks   kombinasi linear  dari matriks    Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear matriks . Skalar disebut koefisien dari kombinasi linear.      Misalkan dan . Hitunglah .     .      Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks-matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesetaraan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gauss, kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita simpulkan bahwa .     Misalkan adalah matriks , argumen induksi sederhana pada menunjukkan bahwa untuk skalar apa pun kita memiliki untuk semua , . (Lihat .)     Perkalian Matrik  Jadi, bagaimana kita mendefinisikan hasil perkalian dua matriks? Melihat operasi sebelumnya, Anda mungkin telah menduga bahwa kita harus mendefinisikan hasil perkalian dua matriks dengan mengambil hasil perkalian entri yang sesuai. Tidak demikian!   Perkalian matrik   matrix multiplication    Perkalian matriks adalah operasi yang didefinisikan sebagai berikut: diberikan matriks  dan matriks  , kita mendefinisikan hasil kali mereka sebagai matriks  yang entri -nya diberikan oleh rumus:   untuk semua and .     Visualizing matrix multiplication  dalam , the -th entry dihitung dengan bergerak melintasi baris ke- dari dan turun ke kolom ke- dari .       Size and matrix multiplication  Perhatikan bahwa, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar hasil kali dari dan terdefinisi, kita memerlukan . Dengan kata lain, kita membutuhkan dimensi dalam dari dan sama: . Jika kondisi ini terpenuhi, dimensi matriks hasil ditentukan oleh dimensi luar dari dan . Secara skematis, Anda dapat membayangkan dimensi dalam sebagai dihapus :     Perkalian Matriks  Perhatikan matriks-matriks berikut: . Karena dimensi dalam dari dan sesuai, kita dapat membentuk matriks hasil kali , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita menghitung: . Kita simpulkan bahwa: .   The formula for the -th entry of a matrix product can be succinctly described as the dot product of the -th row of with the -th column of . You may have already met the dot product in the special case of - and -tuples; the definition generalizes easily to -tuples for any positive integer . We will have a lot more to say about the dot product and related operations in . For now we will provide an official definition so that we can conveniently describe matrix multiplication in terms of dot products.   Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .      Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.     Matrix multiplication via dot product  Consider the matrices . The two rows of (in tuple form) are . The two columns of (in tuple form) are . Using the dot product description of matrix multiplication, we compute .   The definition of a matrix product is undoubtedly more complicated than you expected, and seems to come completely out of the blue. All of this will make more sense once we begin thinking of matrices as defining certain functions . Our formula for the entries of is chosen precisely so that this new matrix corresponds to the composition of the functions and : so that . Under this interpretation, the ponderous restriction on the dimensions of the ingredient matrices ensures that the two functions and can be composed.   Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.      Alternative methods of multiplication  In addition to the given definition of matrix multiplication, we will make heavy use of two further ways of computing matrix products, called the column and row methods of matrix multiplication.   Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .      We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .       amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .    Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .      The proof is very similar to that of and is left to the reader.     Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.      Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have        Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.      Video example of matrix multiplication   Video: three methods of matrix multiplication  Video: three methods of matrix multiplication       Transpose of a matrix  We end this section with one last operation, matrix transposition . We will not make much use of this operation until later, but this is as good a place as any to introduce it.   Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .     Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .        Let ; then .  Let , then .     Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.       WeBWork Exercises    Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If AB is defined, then BA is also defined.    If A is a square matrix such that AA equals the 0 matrix, then A must equal the 0 matrix.           Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    C         If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                         Determine and such that                        Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.              Written Exercises   For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .      Let  . Compute the following matrices, or else explain why the given expression is not well defined.                     Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .         Using expansion by columns, the first column of is given by times the first column of . We compute        Use the row or column method to quickly compute the following product:    I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .    Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .    Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .     "
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
  "title": "Dot product.",
  "body": " Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .   "
},
{
  "id": "th_matrix_mult_dot_product",
  "level": "2",
  "url": "s_matrix.html#th_matrix_mult_dot_product",
  "type": "Theorem",
  "number": "0.1.21",
  "title": "",
  "body": "  Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.   "
},
{
  "id": "ss_matrix_mult-10",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-10",
  "type": "Example",
  "number": "0.1.22",
  "title": "Matrix multiplication via dot product.",
  "body": " Matrix multiplication via dot product  Consider the matrices . The two rows of (in tuple form) are . The two columns of (in tuple form) are . Using the dot product description of matrix multiplication, we compute .  "
},
{
  "id": "ss_matrix_mult-12",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-12",
  "type": "Sage example",
  "number": "2",
  "title": "Matrix arithmetic.",
  "body": " Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.   "
},
{
  "id": "th_column_method",
  "level": "2",
  "url": "s_matrix.html#th_column_method",
  "type": "Theorem",
  "number": "0.1.23",
  "title": "Column method of matrix multiplication.",
  "body": " Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .      We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .    "
},
{
  "id": "s_column_row_method-4",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-4",
  "type": "Remark",
  "number": "0.1.24",
  "title": "",
  "body": "  amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .  "
},
{
  "id": "th_row_method",
  "level": "2",
  "url": "s_matrix.html#th_row_method",
  "type": "Theorem",
  "number": "0.1.25",
  "title": "Row method of matrix multiplication.",
  "body": " Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .      The proof is very similar to that of and is left to the reader.   "
},
{
  "id": "s_matrix_ex_product",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex_product",
  "type": "Example",
  "number": "0.1.26",
  "title": "Column and row methods.",
  "body": " Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.      Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have      "
},
{
  "id": "s_column_row_method-7",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-7",
  "type": "Sage example",
  "number": "3",
  "title": "Column and row methods.",
  "body": " Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.    "
},
{
  "id": "fig_vid_matrix_mult_methods",
  "level": "2",
  "url": "s_matrix.html#fig_vid_matrix_mult_methods",
  "type": "Figure",
  "number": "0.1.27",
  "title": "Video: three methods of matrix multiplication",
  "body": " Video: three methods of matrix multiplication  Video: three methods of matrix multiplication   "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "0.1.28",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .   "
},
{
  "id": "s_matrix-7-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-4",
  "type": "Remark",
  "number": "0.1.29",
  "title": "",
  "body": " Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .     "
},
{
  "id": "s_matrix-7-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-5",
  "type": "Example",
  "number": "0.1.30",
  "title": "",
  "body": "  Let ; then .  Let , then .   "
},
{
  "id": "s_matrix-7-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-6",
  "type": "Sage example",
  "number": "4",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.   "
},
{
  "id": "s_matrix_ex-1-2",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-2",
  "type": "Exercise",
  "number": "0.1.6.1",
  "title": "",
  "body": "  Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If AB is defined, then BA is also defined.    If A is a square matrix such that AA equals the 0 matrix, then A must equal the 0 matrix.        "
},
{
  "id": "s_matrix_ex-1-3",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-3",
  "type": "Exercise",
  "number": "0.1.6.2",
  "title": "",
  "body": "  Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    C      "
},
{
  "id": "s_matrix_ex-1-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-4",
  "type": "Exercise",
  "number": "0.1.6.3",
  "title": "",
  "body": "  If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                      "
},
{
  "id": "s_matrix_ex-1-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-5",
  "type": "Exercise",
  "number": "0.1.6.4",
  "title": "",
  "body": "  Determine and such that                     "
},
{
  "id": "s_matrix_ex-1-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-6",
  "type": "Exercise",
  "number": "0.1.6.5",
  "title": "",
  "body": "  Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.           "
},
{
  "id": "s_matrix_ex-2-2",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-2",
  "type": "Exercise",
  "number": "0.1.6.6",
  "title": "",
  "body": " For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .    "
},
{
  "id": "s_matrix_ex-2-3",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-3",
  "type": "Exercise",
  "number": "0.1.6.7",
  "title": "",
  "body": " Let  . Compute the following matrices, or else explain why the given expression is not well defined.                   "
},
{
  "id": "s_matrix_ex-2-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-4",
  "type": "Exercise",
  "number": "0.1.6.8",
  "title": "",
  "body": " Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .         Using expansion by columns, the first column of is given by times the first column of . We compute      "
},
{
  "id": "s_matrix_ex-2-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-5",
  "type": "Exercise",
  "number": "0.1.6.9",
  "title": "",
  "body": " Use the row or column method to quickly compute the following product:    I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .  "
},
{
  "id": "s_matrix_ex-2-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-6",
  "type": "Exercise",
  "number": "0.1.6.10",
  "title": "",
  "body": " Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .  "
},
{
  "id": "ex_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#ex_entry_lin_comb",
  "type": "Exercise",
  "number": "0.1.6.11",
  "title": "",
  "body": " Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .  "
},
{
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Matrix algebra",
  "body": " Matrix algebra   The last section was devoted to what might be called the arithmetic of matrices. We learned the basic operations of adding, multiplying, scaling, and transposing matrices. In this section we tackle the algebra of matrices. We will investigate the properties enjoyed (and not enjoyed) by our matrix operations, and will show how to use these operations to solve matrix equations.  As you learn about matrix algebra, always keep in mind your old friend, real number algebra. For the most part these two algebraic systems closely resemble one another, as below makes clear. However, there are two crucial points where they differ (see ): two important properties of real number algebra that do not hold for matrices. The consequences of these two simple aberrations are far-reaching and imbue matrix algebra with a fascinating richness in comparison to real number algebra.    Properties of matrix addition, multiplication and scalar multiplication   The following properties hold for all matrices and scalars for which the given expression makes sense.   Addition commutative law       Addition associative law       Multiplication associative law       Left-distributive law       Right-distributive law       Scaling distributive law       Another scaling distributive law       Scaling associative law       Scaling commutative law   .       How does one actually prove one of these properties? These are all matrix equalities of the form , so according to the matrix equality definition we must show (1) that the matrices and have the same dimension, and (2) that for all . The proof below illustrates this technique for the multiplication associative law of .   Proof of (iii)  We prove only the multiplication associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  (1) The usual observation about inner and outer dimensions shows that both and have dimension .  (2) Given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .   Like real number algebra, we can identify some special matrices that act as additive identities and multiplciative identities ; and every matrix has an additive inverse . What we mean here is spelled out in detail in .   Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Given an matrix , its additive inverse  is defined as .     Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When the size of the identity matrix is not important, we will often denote it simply as .     Additive identities, additive inverses, and multiplicative identities     Additive identities  The zero matrix is an additive identity for matrices in the following sense: for any matrix we have .    Additive inverses  For any matrix we have .    Multiplicative identities  The identity matrix is a multiplicative identity for matrices in the following sense: for any matrix we have .       Left as an exercise.    Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.      The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  .   Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .   The example in our warning above is but one instance of the general failure of the principle of multiplicative cancellation in matrix algebra. This in turn is a consequence of the following theorem, which identifies the two crucial places where matrix algebra differs significantly from real number algebra.   Matrix algebra abnormalities      Matrix multiplication is not commutative  For two matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .       This is a good place to point out that to prove an identity does not hold, it suffices to provide a single counterexample to that effect. We do so for each failed identity of in turn. There is no significance to the particular counterexamples chosen here, and indeed there are infinitely many counterexamples to choose from in both cases.   We have and thus .    Observe that . This is an example of two nonzero matrices whose product is the zero matrix.     An important consequence of the abnormality is that matrix algebra does not enjoy the property of multiplicative cancellation .   Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:        Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .      Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .   We end our foray into matrix algebra with some properties articulating how matrix transposition interacts with matrix addition, multiplication and scalar multiplication.   Properties of matrix transposition  The following properties hold for all matrices and scalars for which the given expression makes sense.                           We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .     Video examples: proving matrix equalities   Video: matrix multiplication is associative  Video: matrix multiplication is associative     Video: transpose property  Video: transpose property       WeBWork Exercises    Determine which of the following statements are true and which are false.    If and are square matrices of the same size then .    The matrices and are always square, regardless of the size of .    If and is a column vector, then is a linear combination of the columns of .    If and is a column vector, then is a linear combination of the rows of .    If and are square matrices of the same size, then .            Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                             Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                 Written Exercises   In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .        We need both and to be for the expression to make sense. It is easy to see that and are both matrices. We must show for all , . We have .       Prove all three statements of .    In this exercise you will complete the proof of .    Prove .    Prove .    Prove .      Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .     For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .    Consider the matrix equation .   The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.   Find all satisfying .   Write and set up a system of linear equations in the unknowns .     "
},
{
  "id": "th_matrix_alg_props",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_alg_props",
  "type": "Theorem",
  "number": "0.2.1",
  "title": "Properties of matrix addition, multiplication and scalar multiplication.",
  "body": " Properties of matrix addition, multiplication and scalar multiplication   The following properties hold for all matrices and scalars for which the given expression makes sense.   Addition commutative law       Addition associative law       Multiplication associative law       Left-distributive law       Right-distributive law       Scaling distributive law       Another scaling distributive law       Scaling associative law       Scaling commutative law   .      "
},
{
  "id": "s_algebraic-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-5",
  "type": "Proof",
  "number": "0.2.1",
  "title": "Proof of (iii).",
  "body": " Proof of (iii)  We prove only the multiplication associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  (1) The usual observation about inner and outer dimensions shows that both and have dimension .  (2) Given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .  "
},
{
  "id": "d_matrix_add_inverse",
  "level": "2",
  "url": "s_algebraic.html#d_matrix_add_inverse",
  "type": "Definition",
  "number": "0.2.2",
  "title": "Additive inverse of a matrix.",
  "body": " Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Given an matrix , its additive inverse  is defined as .   "
},
{
  "id": "d_identity_matrix",
  "level": "2",
  "url": "s_algebraic.html#d_identity_matrix",
  "type": "Definition",
  "number": "0.2.3",
  "title": "Identity matrix.",
  "body": " Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When the size of the identity matrix is not important, we will often denote it simply as .   "
},
{
  "id": "th_matrix_add_mult_ident",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_add_mult_ident",
  "type": "Theorem",
  "number": "0.2.4",
  "title": "Additive identities, additive inverses, and multiplicative identities.",
  "body": " Additive identities, additive inverses, and multiplicative identities     Additive identities  The zero matrix is an additive identity for matrices in the following sense: for any matrix we have .    Additive inverses  For any matrix we have .    Multiplicative identities  The identity matrix is a multiplicative identity for matrices in the following sense: for any matrix we have .     "
},
{
  "id": "s_algebraic-10",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-10",
  "type": "Proof",
  "number": "0.2.2",
  "title": "",
  "body": " Left as an exercise.  "
},
{
  "id": "c_matrix_additive_canc",
  "level": "2",
  "url": "s_algebraic.html#c_matrix_additive_canc",
  "type": "Corollary",
  "number": "0.2.5",
  "title": "Additive cancellation of matrices.",
  "body": " Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.    "
},
{
  "id": "s_algebraic-12",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-12",
  "type": "Remark",
  "number": "0.2.6",
  "title": "",
  "body": " The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  . "
},
{
  "id": "s_algebraic-13",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-13",
  "type": "Warning",
  "number": "0.2.7",
  "title": "",
  "body": " Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .  "
},
{
  "id": "th_matrix_abnormalities",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_abnormalities",
  "type": "Theorem",
  "number": "0.2.8",
  "title": "Matrix algebra abnormalities.",
  "body": " Matrix algebra abnormalities      Matrix multiplication is not commutative  For two matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .      "
},
{
  "id": "th_matrix_cancel",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_cancel",
  "type": "Corollary",
  "number": "0.2.9",
  "title": "Failure of multiplicative cancellation.",
  "body": " Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:      "
},
{
  "id": "s_algebraic-19",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-19",
  "type": "Proof",
  "number": "0.2.3",
  "title": "",
  "body": " Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .    "
},
{
  "id": "rm_cancel_failure",
  "level": "2",
  "url": "s_algebraic.html#rm_cancel_failure",
  "type": "Remark",
  "number": "0.2.10",
  "title": "",
  "body": " Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .  "
},
{
  "id": "th_trans_props",
  "level": "2",
  "url": "s_algebraic.html#th_trans_props",
  "type": "Theorem",
  "number": "0.2.11",
  "title": "Properties of matrix transposition.",
  "body": " Properties of matrix transposition  The following properties hold for all matrices and scalars for which the given expression makes sense.                           We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .   "
},
{
  "id": "fig_proof_assoc",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_assoc",
  "type": "Figure",
  "number": "0.2.12",
  "title": "Video: matrix multiplication is associative",
  "body": " Video: matrix multiplication is associative  Video: matrix multiplication is associative   "
},
{
  "id": "fig_proof_transp",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_transp",
  "type": "Figure",
  "number": "0.2.13",
  "title": "Video: transpose property",
  "body": " Video: transpose property  Video: transpose property   "
},
{
  "id": "s_algebraic_ex-1-2",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-2",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "  Determine which of the following statements are true and which are false.    If and are square matrices of the same size then .    The matrices and are always square, regardless of the size of .    If and is a column vector, then is a linear combination of the columns of .    If and is a column vector, then is a linear combination of the rows of .    If and are square matrices of the same size, then .        "
},
{
  "id": "s_algebraic_ex-1-3",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-3",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "  Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                          "
},
{
  "id": "s_algebraic_ex-1-4",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-4",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "  Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                              "
},
{
  "id": "s_algebraic_ex-2-2",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-2",
  "type": "Exercise",
  "number": "0.2.4",
  "title": "",
  "body": " In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .        We need both and to be for the expression to make sense. It is easy to see that and are both matrices. We must show for all , . We have .     "
},
{
  "id": "s_algebraic_ex-2-3",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-3",
  "type": "Exercise",
  "number": "0.2.5",
  "title": "",
  "body": " Prove all three statements of .  "
},
{
  "id": "s_algebraic_ex-2-4",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-4",
  "type": "Exercise",
  "number": "0.2.6",
  "title": "",
  "body": " In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    "
},
{
  "id": "s_algebraic_ex-2-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-5",
  "type": "Exercise",
  "number": "0.2.7",
  "title": "",
  "body": " Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .     For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .  "
},
{
  "id": "s_algebraic_ex-2-6",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-6",
  "type": "Exercise",
  "number": "0.2.8",
  "title": "",
  "body": " Consider the matrix equation .   The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.   Find all satisfying .   Write and set up a system of linear equations in the unknowns .  "
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

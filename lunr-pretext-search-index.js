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
  "title": "Matrix arithmetic",
  "body": " Matrix arithmetic   c_linear_systems Matrices played a small supporting role in our discussion of linear systems in sistem linier. In this chapter we bring them to center stage and give them a full-blown treatment as independent mathematical objects in their own right.  Like any mathematical entity worth its salt, matrices can be employed in a vast multitude of ways. As such it is important to allow matrices to transcend their humble beginnings in this course as boiled down systems of linear equations. We record this observation as another principle.  Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.       The basics We begin with some elementary definitions about matrices, matrix equality, and special types of matrices. As the next definition makes clear, a matrix is just an ordered sequence of numbers arranged in a very particular manner.  Matrix  matrix   A (real) matrix is a rectangular array of real numbers . The number located in the -th row and -th column of is called the -entry (or -th entry ) of .  A matrix with rows and columns is said to have size (or dimension ) .  We will typically use capital letters near the beginning of the alphabet (  , ) to denote matrices.    The displayed matrix in is costly both in the space it takes up in show, and the time it takes to write down or typeset. Accordingly we introduce two somewhat complementary forms of notation to help describe matrices.     Matrix whose -th entry is     -th entry of the matrix      Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry ( -th row, -th column) is . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .    Thus if , then for all and .      The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .    In everyday language the notion of equality is taken as self-evident. Two things are equal if they are the same. What more is there to say? In mathematics, each time we introduce a new type of mathematical object (e.g., sets, functions, -tuples, etc.) we need to spell out exactly what we mean for two things to be considered equal. We do so now with matrices.   Matrix equality   Let and be matrices of dimension and , respectively. The two matrices are equal if    and ;     for all and .     In other words, we have if and only if and have the same shape, and each entry of is equal to the corresponding entry of .      The matrices are not equal to one another, despite their having the same entries that appear roughly in the same order. In this case equality does not hold as and have different shapes: is , and is .  The matrices and have the same dimension, but are not equal since .     Square matrices, row vectors, column vectors, zero matrices  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    A matrix is square if its dimension is . The diagonal of a square matrix consists of the entries for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .  The  zero matrix , denoted , is the matrix of that dimension, all of whose entries are zero: i.e., for all and .  When the actual dimension is not significant, we will often drop the subscript and write simply for a zero matrix of suitable dimension.     Matrices as collections of columns\/rows   Let be an matrix. We will often think of as a collection of columns, in which case we write , where is the column vector consisting of the entries of the -th column of : , . Similarly, when we think of as a collection of rows, we write , where is the row vector consisting of the entries of the -th row of : , . The vertical and horizontal lines in and are used to emphasize that the are columns vectors and the are row vectors.     Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.      Addition, subtraction and scalar multiplication  We now lay out the various algebraic operations we will use to combine and transform matrices; we refer to the use of these operations loosely as matrix arithmetic . Some of these operations resemble familiar operations from real arithmetic in terms of their notation and definition. Do not be lulled into complacency! These are new operations defined for a new class of mathematical objects, and must be treated carefully. In particular, pay close attention to (a) exactly what type of mathematical objects serve as inputs for each operation (the ingredients of the operation), and (b) what type of mathematical object is outputted.   Matrix addition and subtraction  matrix addition  matrix subtraction     Matrix addition is the operation defined as follows: given two matrices and , we define their sum to be the matrix . In other words is the matrix satisfying for all and .   Matrix subtraction is the operation defined as follows: given two matrices and , we define their difference to be the matrix . In other words is the matrix satisfying for all and .     Observe that matrix addition\/subtraction is not defined for any pair of matrices. The ingredients of matrix addition (or subtraction) are two matrices of the same dimension ; and the output is a third matrix of this common dimension.    Scalar multiplication of matrices  matrix scalar multiplication   Given any matrix and any constant , we define . In other words, is the matrix obtained by scaling each of the entries of by the constant .  We call a scalar multiple of . Furthermore, to help distinguish between matrices and real numbers, we will refer to elements of as scalars .     Whereas matrix addition and subtraction closely resemble corresponding operations involving real numbers, there is no obvious real arithmetic analogue to matrix scalar multiplication. In particular, notice how matrix scalar multiplication is a sort of hybrid operation that combines mathematical objects of two very different natures: a real number (or scalar) on the one hand, and a matrix on the other.   We call the result of applying a sequence of matrix additions and scalar multiplications a linear combination of matrices .   Linear combination of matrices  linear combination of matrices   Given matrices of the same dimension, and scalars , the expression is called a linear combination of matrices . The scalars are called the coefficients of the linear combination.      Let and . Compute .     .      Show that can be expressed as a linear combination of the matrices .    We must solve the matrix (or row vector) equation for the scalars . Computing the linear combination on the left yields the matrix equation . Using the definition of matrix equality ( ), we get the system of equations . Using Gaussian elimination we find that there is a unique solution to this system: namely, . We conclude that .     Let be matrices, An easy induction argument on shows that for any scalars we have for all , . (See . )     Matrix multiplication  So how do we define the product of two matrices? Looking at the previous operations, you might have guessed that we should define the product of two matrices by taking the product of their corresponding entries. Not so!   Matrix multiplication  matrix multiplication     Matrix multiplication is the operation defined as follows: given an matrix and an matrix , we define their product to be the matrix whose -th entry is given by the formula for all and .     Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .       Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :     Matrix multiplication  Consider the matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .   The formula for the -th entry of a matrix product can be succinctly described as the dot product of the -th row of with the -th column of . You may have already met the dot product in the special case of - and -tuples; the definition generalizes easily to -tuples for any positive integer . We will have a lot more to say about the dot product and related operations in . For now we will provide an official definition so that we can conveniently describe matrix multiplication in terms of dot products.   Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .      Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.     Matrix multiplication via dot product  Consider the matrices . The two rows of (in tuple form) are . The two columns of (in tuple form) are . Using the dot product description of matrix multiplication, we compute .   The definition of a matrix product is undoubtedly more complicated than you expected, and seems to come completely out of the blue. All of this will make more sense once we begin thinking of matrices as defining certain functions . Our formula for the entries of is chosen precisely so that this new matrix corresponds to the composition of the functions and : so that . Under this interpretation, the ponderous restriction on the dimensions of the ingredient matrices ensures that the two functions and can be composed.   Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.      Alternative methods of multiplication  In addition to the given definition of matrix multiplication, we will make heavy use of two further ways of computing matrix products, called the column and row methods of matrix multiplication.   Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .      We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .       amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .    Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .      The proof is very similar to that of and is left to the reader.     Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.      Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have        Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.      Video example of matrix multiplication   Video: three methods of matrix multiplication  Video: three methods of matrix multiplication       Transpose of a matrix  We end this section with one last operation, matrix transposition . We will not make much use of this operation until later, but this is as good a place as any to introduce it.   Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .     Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .        Let ; then .  Let , then .     Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.       WeBWork Exercises    Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If AB is defined, then BA is also defined.    If A is a square matrix such that AA equals the 0 matrix, then A must equal the 0 matrix.           Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    C         If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                         Determine and such that                        Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.              Written Exercises   For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .      Let  . Compute the following matrices, or else explain why the given expression is not well defined.                     Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .         Using expansion by columns, the first column of is given by times the first column of . We compute        Use the row or column method to quickly compute the following product:    I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .    Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .    Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .     "
},
{
  "id": "princ_matrix_mantra",
  "level": "2",
  "url": "s_matrix.html#princ_matrix_mantra",
  "type": "Mantra",
  "number": "0.1.1",
  "title": "Matrix mantra.",
  "body": " Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.   "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_matrix.html#d_matrix",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Matrix.",
  "body": " Matrix  matrix   A (real) matrix is a rectangular array of real numbers . The number located in the -th row and -th column of is called the -entry (or -th entry ) of .  A matrix with rows and columns is said to have size (or dimension ) .  We will typically use capital letters near the beginning of the alphabet (  , ) to denote matrices.   "
},
{
  "id": "d_matrix_notation",
  "level": "2",
  "url": "s_matrix.html#d_matrix_notation",
  "type": "Definition",
  "number": "0.1.3",
  "title": "",
  "body": "   Matrix whose -th entry is     -th entry of the matrix      Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry ( -th row, -th column) is . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .    Thus if , then for all and .   "
},
{
  "id": "ss_matrix_attributes-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_attributes-5",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": "  The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .   "
},
{
  "id": "d_matrix_equality",
  "level": "2",
  "url": "s_matrix.html#d_matrix_equality",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Matrix equality.",
  "body": " Matrix equality   Let and be matrices of dimension and , respectively. The two matrices are equal if    and ;     for all and .     In other words, we have if and only if and have the same shape, and each entry of is equal to the corresponding entry of .   "
},
{
  "id": "ex_inequality",
  "level": "2",
  "url": "s_matrix.html#ex_inequality",
  "type": "Example",
  "number": "0.1.6",
  "title": "",
  "body": "  The matrices are not equal to one another, despite their having the same entries that appear roughly in the same order. In this case equality does not hold as and have different shapes: is , and is .  The matrices and have the same dimension, but are not equal since .   "
},
{
  "id": "d_square_matrices",
  "level": "2",
  "url": "s_matrix.html#d_square_matrices",
  "type": "Definition",
  "number": "0.1.7",
  "title": "Square matrices, row vectors, column vectors, zero matrices.",
  "body": " Square matrices, row vectors, column vectors, zero matrices  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    A matrix is square if its dimension is . The diagonal of a square matrix consists of the entries for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .  The  zero matrix , denoted , is the matrix of that dimension, all of whose entries are zero: i.e., for all and .  When the actual dimension is not significant, we will often drop the subscript and write simply for a zero matrix of suitable dimension.   "
},
{
  "id": "rm_matrices_as_row_columns",
  "level": "2",
  "url": "s_matrix.html#rm_matrices_as_row_columns",
  "type": "Remark",
  "number": "0.1.8",
  "title": "Matrices as collections of columns\/rows.",
  "body": " Matrices as collections of columns\/rows   Let be an matrix. We will often think of as a collection of columns, in which case we write , where is the column vector consisting of the entries of the -th column of : , . Similarly, when we think of as a collection of rows, we write , where is the row vector consisting of the entries of the -th row of : , . The vertical and horizontal lines in and are used to emphasize that the are columns vectors and the are row vectors.   "
},
{
  "id": "sage_matrix_entries_rows_cols",
  "level": "2",
  "url": "s_matrix.html#sage_matrix_entries_rows_cols",
  "type": "Sage example",
  "number": "1",
  "title": "Matrix entries, rows, and columns.",
  "body": " Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.   "
},
{
  "id": "d_matrix_add_subtract",
  "level": "2",
  "url": "s_matrix.html#d_matrix_add_subtract",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Matrix addition and subtraction.",
  "body": " Matrix addition and subtraction  matrix addition  matrix subtraction     Matrix addition is the operation defined as follows: given two matrices and , we define their sum to be the matrix . In other words is the matrix satisfying for all and .   Matrix subtraction is the operation defined as follows: given two matrices and , we define their difference to be the matrix . In other words is the matrix satisfying for all and .   "
},
{
  "id": "ss_matrix_arithmetic-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-4",
  "type": "Remark",
  "number": "0.1.10",
  "title": "",
  "body": " Observe that matrix addition\/subtraction is not defined for any pair of matrices. The ingredients of matrix addition (or subtraction) are two matrices of the same dimension ; and the output is a third matrix of this common dimension.  "
},
{
  "id": "d_matrix_scalar_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_scalar_mult",
  "type": "Definition",
  "number": "0.1.11",
  "title": "Scalar multiplication of matrices.",
  "body": " Scalar multiplication of matrices  matrix scalar multiplication   Given any matrix and any constant , we define . In other words, is the matrix obtained by scaling each of the entries of by the constant .  We call a scalar multiple of . Furthermore, to help distinguish between matrices and real numbers, we will refer to elements of as scalars .   "
},
{
  "id": "ss_matrix_arithmetic-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-6",
  "type": "Remark",
  "number": "0.1.12",
  "title": "",
  "body": " Whereas matrix addition and subtraction closely resemble corresponding operations involving real numbers, there is no obvious real arithmetic analogue to matrix scalar multiplication. In particular, notice how matrix scalar multiplication is a sort of hybrid operation that combines mathematical objects of two very different natures: a real number (or scalar) on the one hand, and a matrix on the other.  "
},
{
  "id": "d_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#d_matrix_lin_comb",
  "type": "Definition",
  "number": "0.1.13",
  "title": "Linear combination of matrices.",
  "body": " Linear combination of matrices  linear combination of matrices   Given matrices of the same dimension, and scalars , the expression is called a linear combination of matrices . The scalars are called the coefficients of the linear combination.   "
},
{
  "id": "ss_matrix_arithmetic-9",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-9",
  "type": "Example",
  "number": "0.1.14",
  "title": "",
  "body": "  Let and . Compute .     .   "
},
{
  "id": "ss_matrix_arithmetic-10",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-10",
  "type": "Example",
  "number": "0.1.15",
  "title": "",
  "body": "  Show that can be expressed as a linear combination of the matrices .    We must solve the matrix (or row vector) equation for the scalars . Computing the linear combination on the left yields the matrix equation . Using the definition of matrix equality ( ), we get the system of equations . Using Gaussian elimination we find that there is a unique solution to this system: namely, . We conclude that .   "
},
{
  "id": "rm_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#rm_entry_lin_comb",
  "type": "Remark",
  "number": "0.1.16",
  "title": "",
  "body": " Let be matrices, An easy induction argument on shows that for any scalars we have for all , . (See . )  "
},
{
  "id": "d_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_mult",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  matrix multiplication     Matrix multiplication is the operation defined as follows: given an matrix and an matrix , we define their product to be the matrix whose -th entry is given by the formula for all and .   "
},
{
  "id": "fig_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#fig_matrix_mult",
  "type": "Figure",
  "number": "0.1.18",
  "title": "Visualizing matrix multiplication",
  "body": " Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .     "
},
{
  "id": "ss_matrix_mult-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-5",
  "type": "Remark",
  "number": "0.1.19",
  "title": "Size and matrix multiplication.",
  "body": " Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :   "
},
{
  "id": "eg_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult",
  "type": "Example",
  "number": "0.1.20",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  Consider the matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .  "
},
{
  "id": "d_dot_product",
  "level": "2",
  "url": "s_matrix.html#d_dot_product",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Dot product.",
  "body": " Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .   "
},
{
  "id": "th_matrix_mult_dot_product",
  "level": "2",
  "url": "s_matrix.html#th_matrix_mult_dot_product",
  "type": "Theorem",
  "number": "0.1.22",
  "title": "",
  "body": "  Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.   "
},
{
  "id": "ss_matrix_mult-10",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-10",
  "type": "Example",
  "number": "0.1.23",
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
  "number": "0.1.24",
  "title": "Column method of matrix multiplication.",
  "body": " Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .      We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .    "
},
{
  "id": "s_column_row_method-4",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-4",
  "type": "Remark",
  "number": "0.1.25",
  "title": "",
  "body": "  amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .  "
},
{
  "id": "th_row_method",
  "level": "2",
  "url": "s_matrix.html#th_row_method",
  "type": "Theorem",
  "number": "0.1.26",
  "title": "Row method of matrix multiplication.",
  "body": " Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .      The proof is very similar to that of and is left to the reader.   "
},
{
  "id": "s_matrix_ex_product",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex_product",
  "type": "Example",
  "number": "0.1.27",
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
  "number": "0.1.28",
  "title": "Video: three methods of matrix multiplication",
  "body": " Video: three methods of matrix multiplication  Video: three methods of matrix multiplication   "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "0.1.29",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .   "
},
{
  "id": "s_matrix-7-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-4",
  "type": "Remark",
  "number": "0.1.30",
  "title": "",
  "body": " Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .     "
},
{
  "id": "s_matrix-7-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-5",
  "type": "Example",
  "number": "0.1.31",
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
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-exercises",
  "level": "1",
  "url": "appendix-exercises.html",
  "type": "Appendix",
  "number": "B",
  "title": "Exercises",
  "body": " Exercises   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "C",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "D",
  "title": "Theory and procedures",
  "body": " Theory and procedures   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-sage",
  "level": "1",
  "url": "appendix-sage.html",
  "type": "Appendix",
  "number": "F",
  "title": "Sage examples",
  "body": " Sage examples   "
},
{
  "id": "appendix-mantras",
  "level": "1",
  "url": "appendix-mantras.html",
  "type": "Appendix",
  "number": "G",
  "title": "Video examples and figures",
  "body": " Video examples and figures   "
},
{
  "id": "appendix-vids",
  "level": "1",
  "url": "appendix-vids.html",
  "type": "Appendix",
  "number": "H",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
},
{
  "id": "root-1-2-4-9",
  "level": "1",
  "url": "root-1-2-4-9.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
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

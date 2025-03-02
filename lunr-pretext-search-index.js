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
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets",
  "body": " Sets   We will gradually make our way to definitions of the vector spaces and linear transformations mentioned in this text's title. For now it will suffice to observe that a vector space is a certain kind of set , and a linear transformation is a special type of function . Accordingly we gather here some notions about sets and (in the next section) functions that will come in handy once we meet the two main players of linear algebra.    sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .      The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .    With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .      Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .      Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection    set union     set complement     set intersection   sets complement  sets difference      set difference    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      With the help of these set operations, we can now describe some common sets used in mathematics.   sets empty set     the empty set   real numbers    the real numbers   integers    the integers   rational numbers    the rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .       Let , , .  List the elements of the following sets. If there is more than one element write them separated by commas.                                         Let ,  How many elements are in ?  Determine  [Note: Enter your answer as a comma-separated list. Pairs should be denoted with parentheses.]               The number of elements in a Cartesian product is simply for any sets . Thus, the number of elements in is The Cartesian product is defined as the set of all ordered pairs whose first component is a member of and whose second component is a member of . More formally, Thus, is        "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": "  The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .   "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": "  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .   "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection    set union     set complement     set intersection   sets complement  sets difference      set difference    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .     "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " sets empty set     the empty set   real numbers    the real numbers   integers    the integers   rational numbers    the rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .   "
},
{
  "id": "s_sets_functions_ex-1",
  "level": "2",
  "url": "s_sets_functions.html#s_sets_functions_ex-1",
  "type": "Exercise",
  "number": "0.1.1",
  "title": "",
  "body": "  Let , , .  List the elements of the following sets. If there is more than one element write them separated by commas.                                      "
},
{
  "id": "s_sets_functions_ex-2",
  "level": "2",
  "url": "s_sets_functions.html#s_sets_functions_ex-2",
  "type": "Exercise",
  "number": "0.1.2",
  "title": "",
  "body": "  Let ,  How many elements are in ?  Determine  [Note: Enter your answer as a comma-separated list. Pairs should be denoted with parentheses.]               The number of elements in a Cartesian product is simply for any sets . Thus, the number of elements in is The Cartesian product is defined as the set of all ordered pairs whose first component is a member of and whose second component is a member of . More formally, Thus, is      "
},
{
  "id": "s_functions",
  "level": "1",
  "url": "s_functions.html",
  "type": "Section",
  "number": "0.2",
  "title": "Functions",
  "body": " Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function       Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .    As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .    Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.     The proof of this theorem is left as an example of proving if and only if statements. See .      Let . Find each set.                 is not one-to-one, you can not simply plug the endpoints of the interval into the function to get the endpoints of the answer. Instead, try graphing the function and shading on the -axis the input set. Then use the graph to see which -values you get out when you put those 's in. For instance, notice that . Because , you should have . Do you?        For each of the following functions, state whether they are one-to-one, onto, both or neither. Use the following key:                                Consider the functions , , , , , and .  Which of these functions are inverses of each other?    and    and    and    and    and    and    and    and    No pairs of these functions are inverses of each other.     SOLUTION One way we can check which functions are inverses is to make sure they satisfy the identities and . This will show that and and and are inverses of each other, while the other pairs of functions are not. Let's consider and . The composition Also, Thus these are inverses of one another. We can similarly show that and are inverses of each other. However, the remaining pairs are not inverses. For example, if we consider and , we have Thus these functions are not inverses of each other.        "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_functions.html#d_function",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "s_functions-3",
  "level": "2",
  "url": "s_functions.html#s_functions-3",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "s_functions-4",
  "level": "2",
  "url": "s_functions.html#s_functions-4",
  "type": "Example",
  "number": "0.2.3",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.2.5",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_functions.html#d_image",
  "type": "Definition",
  "number": "0.2.6",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.2.7",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "s_functions-10",
  "level": "2",
  "url": "s_functions.html#s_functions-10",
  "type": "Example",
  "number": "0.2.8",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.2.9",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.2.10",
  "title": "Identity and inverse functions.",
  "body": " function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .  "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.2.11",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "s_functions-14",
  "level": "2",
  "url": "s_functions.html#s_functions-14",
  "type": "Proof",
  "number": "0.2.1",
  "title": "",
  "body": " The proof of this theorem is left as an example of proving if and only if statements. See .  "
},
{
  "id": "s_functions_ex-1",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-1",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "  Let . Find each set.                 is not one-to-one, you can not simply plug the endpoints of the interval into the function to get the endpoints of the answer. Instead, try graphing the function and shading on the -axis the input set. Then use the graph to see which -values you get out when you put those 's in. For instance, notice that . Because , you should have . Do you?     "
},
{
  "id": "s_functions_ex-2",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-2",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "  For each of the following functions, state whether they are one-to-one, onto, both or neither. Use the following key:                             "
},
{
  "id": "s_functions_ex-3",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-3",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "  Consider the functions , , , , , and .  Which of these functions are inverses of each other?    and    and    and    and    and    and    and    and    No pairs of these functions are inverses of each other.     SOLUTION One way we can check which functions are inverses is to make sure they satisfy the identities and . This will show that and and and are inverses of each other, while the other pairs of functions are not. Let's consider and . The composition Also, Thus these are inverses of one another. We can similarly show that and are inverses of each other. However, the remaining pairs are not inverses. For example, if we consider and , we have Thus these functions are not inverses of each other.     "
},
{
  "id": "s_tuples",
  "level": "1",
  "url": "s_tuples.html",
  "type": "Section",
  "number": "0.3",
  "title": "Tuples and Cartesian products",
  "body": " Tuples and Cartesian products   We now introduce the notion of a tuple , which is a formal description of an ordered collection of objects.    tuple finite    -tuple   -tuple   Let be a set, and fix a positive integer . An -tuple (or sequence of length ) of elements of is an ordered sequence where for all .  We define two -tuples , and to be equal, denoted , if for all .  We call the length of the tuple , and for each we call its -th entry or coordinate .      We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.      Observe how tuples capture the notion of an ordered collection of objects. For example, whereas the sets and are equal to one another, the 4-tuples and are not.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.     Cartesian product finite      Cartesian product   Cartesian product (finite)   Let be subsets of a common set . The (Cartesian) product of , denoted or , is the set . In other words is the set of all -tuples of whose -th coordinate lies in for all .  Given a set , its -ary Cartesian product  is defined as .    The notion of Cartesian product can be generalized to an infinite list of sets , and indeed to any collection indexed by a set . This is accomplished by looking at tuples in a slightly different manner: namely, we can describe a tuple as an assignment to each distinct element an element that we call the coordinate of . In other words, a tuple is just a function that assigns to each in our index set  an element . This notion generalize easily by replacing the finite index set with an arbitrary set (finite or infinite).   tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .     Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .    "
},
{
  "id": "d_tuple",
  "level": "2",
  "url": "s_tuples.html#d_tuple",
  "type": "Definition",
  "number": "0.3.1",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuple.",
  "body": " tuple finite    -tuple   -tuple   Let be a set, and fix a positive integer . An -tuple (or sequence of length ) of elements of is an ordered sequence where for all .  We define two -tuples , and to be equal, denoted , if for all .  We call the length of the tuple , and for each we call its -th entry or coordinate .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_tuples.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.3.2",
  "title": "",
  "body": "  We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.   "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_tuples.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.3.3",
  "title": "",
  "body": "  Observe how tuples capture the notion of an ordered collection of objects. For example, whereas the sets and are equal to one another, the 4-tuples and are not.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.   "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_tuples.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.3.4",
  "title": "Cartesian product (finite).",
  "body": " Cartesian product finite      Cartesian product   Cartesian product (finite)   Let be subsets of a common set . The (Cartesian) product of , denoted or , is the set . In other words is the set of all -tuples of whose -th coordinate lies in for all .  Given a set , its -ary Cartesian product  is defined as .   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_tuples.html#d_Ituple",
  "type": "Definition",
  "number": "0.3.5",
  "title": "I-tuple.",
  "body": " tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .   "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_tuples.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.3.6",
  "title": "Cartesian product (arbitrary).",
  "body": " Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .   "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.4",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.    Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!        Assign truth values to the propositions and so that the given proposition is false. Use T for true and F for false.   Answer: P: Q: R:    F    No correct answer specified    F         Determine the truth value of the following statements if the universe of discourse is the set of real numbers.                             Let be the statement \" has a cat\", let be the statement \" has a dog\" and let be the statement \" has a ferret\". Express each of the following statements in terms of , , and , quantifiers, and logical connectives. Let the universe of discourse consist of all students in your class. Put the appropriate letter next to the corresponding symbolic form.                   a) A student in your class has a cat, a dog, and a ferret.  b) All students in your class have a cat, a dog, or a ferret.  c) Some student in your class has a cat and a ferret but not a dog.  d) No student in this class has a cat, a dog, and a ferret.  e) For each of the three animals, cats, dogs, and ferrets, there is a student in your class who has one of these animals.         Let P(x) be the statement \"x is a duck\", let Q(x) be the statement \"x is one of my poultry\", let R(x) be the statement \"x is an officer\", and let S(x) be the statement \"x is willing to waltz\". Express each of the following statements in terms of P(x), Q(x), R(x) and S(x), quantifiers, and logical connectives. Let the universe of discourse consist of all living creatures. Put the appropriate letter next to the corresponding symbolic form.                   a) Some ducks are not willing to waltz.  b) No ducks are willing to waltz.  c) No officers ever decline to waltz.  d) All my poultry are ducks.  e) My poultry are not officers.         Determine whether the given proposition is true or false, for the universe of all real numbers. Use T for true and F for false.   Answer:   Answer:   Answer:   Answer:   Answer:    T    F    T    F    T         Suppose is an indexed family of sets. For each statement below, write the letter of the equivalent symbolic form.    for every       for some                      "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.4.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.4.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.4.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.4.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.4.5",
  "title": "",
  "body": "  Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.4.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.4.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.4.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.4.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.4.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_logic_ex-1",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-1",
  "type": "Exercise",
  "number": "0.4.3.1",
  "title": "",
  "body": "  Assign truth values to the propositions and so that the given proposition is false. Use T for true and F for false.   Answer: P: Q: R:    F    No correct answer specified    F      "
},
{
  "id": "s_logic_ex-2",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-2",
  "type": "Exercise",
  "number": "0.4.3.2",
  "title": "",
  "body": "  Determine the truth value of the following statements if the universe of discourse is the set of real numbers.                          "
},
{
  "id": "s_logic_ex-3",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-3",
  "type": "Exercise",
  "number": "0.4.3.3",
  "title": "",
  "body": "  Let be the statement \" has a cat\", let be the statement \" has a dog\" and let be the statement \" has a ferret\". Express each of the following statements in terms of , , and , quantifiers, and logical connectives. Let the universe of discourse consist of all students in your class. Put the appropriate letter next to the corresponding symbolic form.                   a) A student in your class has a cat, a dog, and a ferret.  b) All students in your class have a cat, a dog, or a ferret.  c) Some student in your class has a cat and a ferret but not a dog.  d) No student in this class has a cat, a dog, and a ferret.  e) For each of the three animals, cats, dogs, and ferrets, there is a student in your class who has one of these animals.      "
},
{
  "id": "s_logic_ex-4",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-4",
  "type": "Exercise",
  "number": "0.4.3.4",
  "title": "",
  "body": "  Let P(x) be the statement \"x is a duck\", let Q(x) be the statement \"x is one of my poultry\", let R(x) be the statement \"x is an officer\", and let S(x) be the statement \"x is willing to waltz\". Express each of the following statements in terms of P(x), Q(x), R(x) and S(x), quantifiers, and logical connectives. Let the universe of discourse consist of all living creatures. Put the appropriate letter next to the corresponding symbolic form.                   a) Some ducks are not willing to waltz.  b) No ducks are willing to waltz.  c) No officers ever decline to waltz.  d) All my poultry are ducks.  e) My poultry are not officers.      "
},
{
  "id": "s_logic_ex-5",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-5",
  "type": "Exercise",
  "number": "0.4.3.5",
  "title": "",
  "body": "  Determine whether the given proposition is true or false, for the universe of all real numbers. Use T for true and F for false.   Answer:   Answer:   Answer:   Answer:   Answer:    T    F    T    F    T      "
},
{
  "id": "s_logic_ex-6",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-6",
  "type": "Exercise",
  "number": "0.4.3.6",
  "title": "",
  "body": "  Suppose is an indexed family of sets. For each statement below, write the letter of the equivalent symbolic form.    for every       for some                   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.5",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  According to , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.5.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.5.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.5.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.5.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.5.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "sss_chain_equalities-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-4",
  "type": "Warning",
  "number": "0.5.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.5.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.5.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.5.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.5.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_complex_numbers",
  "level": "1",
  "url": "s_complex_numbers.html",
  "type": "Section",
  "number": "0.6",
  "title": "Complex numbers",
  "body": " Complex numbers  In this section we begin with a brief treatment of the complex numbers . As mentioned below, you should think of the complex numbers as an additional link in our chain of number systems . One major advantage of working with is that any polynomial factors as a product of linear terms over ( ). This fact, along with a review of basic definitions and properties of polynomials, will be taken up in . This section is meant mainly as a reference, and as such all theorems will be stated without proof.   Definition of   The complex numbers constitute a number system built by taking the set of all pairs of real numbers and defining operations on these pairs that we call complex addition and complex multiplication .    complex numbers  complex numbers real part  complex numbers imaginary part    the complex numbers     real part of complex number     imaginary part of complex number   Complex numbers    complex numbers    The set of complex numbers is defined as the set of all pairs of real numbers: , . Given a complex number , its first entry is called the real part of , denoted , and its second entry is called the imaginary part of , denoted .     Henceforth we will primarily denote a complex number as . Since and , you can think of the notation as a decomposition of as a sum of its real and imaginary components. In what follows we give actual arithmetic meaning to the symbols and used in this notation, but first and foremost should simply be thought of as an alternative manner of denoting the pair .  Additionally we will adopt the following notational conventions: , , , , and .    Complex equality   When moving to the notation do not lose sight of the essential nature of complex numbers as pairs of real numbers. This is important, for example, for understanding what it means for complex numbers and to be equal. According to the general definition of equality for tuples ( ), we have .     complex numbers addition  complex numbers multiplication  Complex addition and multiplication   We define addition and multiplication operations on as follows. Let and , where .    Complex addition  The sum  is the complex number defined as .    Complex multiplication  The product  is the complex number defined as .        Let and . We have     Our first theorem indicates that complex addition and multiplication behave in much the same way as real addition and multiplication. A number system that satisfies the properties of is called a field . You should think of the field properties as guaranteeing that we can perform arithmetic in the complex numbers (or any fied) essentially as we do with real numbers.   Basic properties of complex arithmetic     Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  The complex number satisfies for all . We call the additive identity of .    Additive inverse  For all the element satisfies . We call the additive inverse of .    Multiplicative identity  The complex number satisfies for all . We call the multiplicative identity of .    Multiplicative inverse  For all nonzero complex numbers ( , of ), the complex number satisfies . The complex number , also denoted , is called the multiplicative inverse of .        Let . According to , the multiplicative inverse of is . Let's check that : .     Complex numbers as extension of the reals   From now on we identify the real numbers as the set of complex numbers of the form , where : equivalently, the set of complex numbers satisfying . Under this identification can be thought of as a subset of , and we may add one more link to the chain of subsets given in : . Furthermore, it is easy to verify that the various operations on agree with their real counterparts when restricting to : , . This allows us to think of the complex numbers as a larger number system containing the reals, whose arithmetic operations are extensions of real number operations.      Absolute value and complex conjugation   We end our introduction to the complex numbers with two further operations: the absolute value and complex conjugation . is an indication of their usefulness, and articulates how they interact with the other operations on .    complex numbers modulus  complex numbers absolute value  complex numbers conjugation  Absolute value and complex conjugation   Let be a complex number. The absolute value (or modulus ) of , denoted , is defined as . The complex conjugate of , denoted , is defined as .     Properties of conjugation and modulus   The following properties hold for all .    .    .     .     .     (if ).     .        Let . Observe that and , as claimed in .        Rewrite the following expression into the form of a+b :         By definition, , so we have .  To get rid of in the denominator, we use the difference of squares formula:   The full solution is:          Let . Calculate the following:  (a)     ,  (b)     ,  (c)     .                                       Evaluate the following expressions and write them in the form .   .   .   .   .   .                                  Calculate:  (a)  ,  (b)  ,  (c)  ,  (d)  .                            "
},
{
  "id": "d_complex_numbers",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_numbers",
  "type": "Definition",
  "number": "0.6.1",
  "title": "Complex numbers.",
  "body": " complex numbers  complex numbers real part  complex numbers imaginary part    the complex numbers     real part of complex number     imaginary part of complex number   Complex numbers    complex numbers    The set of complex numbers is defined as the set of all pairs of real numbers: , . Given a complex number , its first entry is called the real part of , denoted , and its second entry is called the imaginary part of , denoted .   "
},
{
  "id": "ss_complex_definition-4",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_definition-4",
  "type": "Notation",
  "number": "0.6.2",
  "title": "",
  "body": " Henceforth we will primarily denote a complex number as . Since and , you can think of the notation as a decomposition of as a sum of its real and imaginary components. In what follows we give actual arithmetic meaning to the symbols and used in this notation, but first and foremost should simply be thought of as an alternative manner of denoting the pair .  Additionally we will adopt the following notational conventions: , , , , and .  "
},
{
  "id": "rm_complex_equality",
  "level": "2",
  "url": "s_complex_numbers.html#rm_complex_equality",
  "type": "Remark",
  "number": "0.6.3",
  "title": "Complex equality.",
  "body": " Complex equality   When moving to the notation do not lose sight of the essential nature of complex numbers as pairs of real numbers. This is important, for example, for understanding what it means for complex numbers and to be equal. According to the general definition of equality for tuples ( ), we have .   "
},
{
  "id": "d_complex_arithmetic",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_arithmetic",
  "type": "Definition",
  "number": "0.6.4",
  "title": "Complex addition and multiplication.",
  "body": " complex numbers addition  complex numbers multiplication  Complex addition and multiplication   We define addition and multiplication operations on as follows. Let and , where .    Complex addition  The sum  is the complex number defined as .    Complex multiplication  The product  is the complex number defined as .     "
},
{
  "id": "eg_complex_add_mult",
  "level": "2",
  "url": "s_complex_numbers.html#eg_complex_add_mult",
  "type": "Example",
  "number": "0.6.5",
  "title": "",
  "body": "  Let and . We have    "
},
{
  "id": "th_complex_arithmetic_basic",
  "level": "2",
  "url": "s_complex_numbers.html#th_complex_arithmetic_basic",
  "type": "Theorem",
  "number": "0.6.6",
  "title": "Basic properties of complex arithmetic.",
  "body": " Basic properties of complex arithmetic     Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  The complex number satisfies for all . We call the additive identity of .    Additive inverse  For all the element satisfies . We call the additive inverse of .    Multiplicative identity  The complex number satisfies for all . We call the multiplicative identity of .    Multiplicative inverse  For all nonzero complex numbers ( , of ), the complex number satisfies . The complex number , also denoted , is called the multiplicative inverse of .     "
},
{
  "id": "ss_complex_definition-10",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_definition-10",
  "type": "Example",
  "number": "0.6.7",
  "title": "",
  "body": "  Let . According to , the multiplicative inverse of is . Let's check that : .   "
},
{
  "id": "rm_complex_reals",
  "level": "2",
  "url": "s_complex_numbers.html#rm_complex_reals",
  "type": "Remark",
  "number": "0.6.8",
  "title": "Complex numbers as extension of the reals.",
  "body": " Complex numbers as extension of the reals   From now on we identify the real numbers as the set of complex numbers of the form , where : equivalently, the set of complex numbers satisfying . Under this identification can be thought of as a subset of , and we may add one more link to the chain of subsets given in : . Furthermore, it is easy to verify that the various operations on agree with their real counterparts when restricting to : , . This allows us to think of the complex numbers as a larger number system containing the reals, whose arithmetic operations are extensions of real number operations.   "
},
{
  "id": "d_complex_absolute_conjugation",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_absolute_conjugation",
  "type": "Definition",
  "number": "0.6.9",
  "title": "Absolute value and complex conjugation.",
  "body": " complex numbers modulus  complex numbers absolute value  complex numbers conjugation  Absolute value and complex conjugation   Let be a complex number. The absolute value (or modulus ) of , denoted , is defined as . The complex conjugate of , denoted , is defined as .   "
},
{
  "id": "th_complex_conjugation_modulus",
  "level": "2",
  "url": "s_complex_numbers.html#th_complex_conjugation_modulus",
  "type": "Theorem",
  "number": "0.6.10",
  "title": "Properties of conjugation and modulus.",
  "body": " Properties of conjugation and modulus   The following properties hold for all .    .    .     .     .     (if ).     .     "
},
{
  "id": "ss_complex_conjugation-5",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_conjugation-5",
  "type": "Example",
  "number": "0.6.11",
  "title": "",
  "body": "  Let . Observe that and , as claimed in .   "
},
{
  "id": "s_complex_numbers_ex-1",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-1",
  "type": "Exercise",
  "number": "0.6.3.1",
  "title": "",
  "body": "  Rewrite the following expression into the form of a+b :         By definition, , so we have .  To get rid of in the denominator, we use the difference of squares formula:   The full solution is:       "
},
{
  "id": "s_complex_numbers_ex-2",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-2",
  "type": "Exercise",
  "number": "0.6.3.2",
  "title": "",
  "body": "  Let . Calculate the following:  (a)     ,  (b)     ,  (c)     .                                    "
},
{
  "id": "s_complex_numbers_ex-3",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-3",
  "type": "Exercise",
  "number": "0.6.3.3",
  "title": "",
  "body": "  Evaluate the following expressions and write them in the form .   .   .   .   .   .                               "
},
{
  "id": "s_complex_numbers_ex-4",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-4",
  "type": "Exercise",
  "number": "0.6.3.4",
  "title": "",
  "body": "  Calculate:  (a)  ,  (b)  ,  (c)  ,  (d)  .                          "
},
{
  "id": "s_polynomials",
  "level": "1",
  "url": "s_polynomials.html",
  "type": "Section",
  "number": "0.7",
  "title": "Polynomials",
  "body": " Polynomials  Polynomials will play an important role in our treatment of linear algebra both in terms of building examples of vector spaces ( ) and as tools for studying linear operators ( ). We gather here some basic definitions and properties of polynomials. Although we will primarily be concerned with polynomials with real coefficients in this course, it is convenient to develop the theory over the complex numbers. As with , all theorems will be stated without proof.   Basic definitions   Polynomials  polynomial expression  polynomial degree  polynomial coefficient  polynomial leading coefficient  polynomial leading term  polynomial constant term   Assume a polynomial on is a function of the form , where for all , and there is a positive integer such that for all . Equivalently, is a function of the form , where for all .  We call the -th term of , and the -th coefficient ; is called the constant term of . Furthermore, if in the expression we have , then is called the leading term of , and its leading coefficient . Lastly, a root of is a an element such that .     Polynomials as finite power series  As we see in the expression we have essentially defined a polynomial to be a function with a finite power series representation. This may seem somewhat overkill in terms of the level of abstraction, but makes for simpler exposition in the discussion below. In any case you are always welcome to revert to the more familiar characterization in .    Basic properties of polynomials   Assume .   If and are polynomials on , then so are , , and for any .    If is a polynomial on and is a root of , then there is a polynomial on such that .    If is a nonzero polynomial on , then has at most distinct roots.       An important consequence of statement ( ) of is that the coefficients of a polynomial are uniquely determined by , as long as the domain is infinite . This furnishes us with a useful criterion for polynomial equality based on comparing coefficients.   Polynomial equality via coefficients   Assume is an infinite subset of . Let and be polynomials on of the form .   We have if and only if for all .    In particular, is the zero function on if and only if for all .         Degree of a polynomial   It follows from that if is an infinite subset of and is a nonzero polynomial on , then has a unique expression of the form , where . The integer appearing in this expression is an important invariant of called its degree .    polynomial degree  Degree of a polynomial    degree of polynomial    Assume is an infinite subset of and let be a nonzero polynomial on of the form with . The integer in this expression is called the degree of , denoted .  We call the polynomial  linear if , quadratic if , and cubic if .    Defining the degree of the zero function to be may seem a little peculiar. Do not be disturbed! You can think of this as a convention that allows for clean statements of theorems like the following.   Basic properties of degree   Assume is an infinite subset of . Let and be polynomials on .     .     .        Factoring polynomials   Statement (2) of makes a connection between roots of a polynomial and factorization; and the expression can be thought of as a first step in writing the polynomial as a product of linear polynomials. The existence of roots depends on the given domain of the function. Indeed, there are plenty of polynomials that have no roots whatsoever: for example, from the quadratic formula we know that any quadratic polynomial satisfying has no real roots. According to the fundamental theorem of algebra , the situation over is vastly different: not only does every polymonial have a root in , we can factor it completely as a product of linear polynomials. This is one of the main incentives for introducing the complex numbers as a number system.    Fundamental theorem of algebra   Any polynomial , thought of as a function from to itself, can be factored into linear terms as , where the are (not necessarily distinct) complex numbers.        Find a degree 3 polynomial whose coefficient of equal to 1. The zeros of this polynomial are , , and . Simplify your answer so that it has only real numbers as coefficients.  Your answer is .              The polynomial has as a root. Give all of the roots of in a comma-separated list, including the given one.  Roots:             "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_polynomials.html#d_polynomials",
  "type": "Definition",
  "number": "0.7.1",
  "title": "Polynomials.",
  "body": " Polynomials  polynomial expression  polynomial degree  polynomial coefficient  polynomial leading coefficient  polynomial leading term  polynomial constant term   Assume a polynomial on is a function of the form , where for all , and there is a positive integer such that for all . Equivalently, is a function of the form , where for all .  We call the -th term of , and the -th coefficient ; is called the constant term of . Furthermore, if in the expression we have , then is called the leading term of , and its leading coefficient . Lastly, a root of is a an element such that .   "
},
{
  "id": "rm_polynomials_powerseries",
  "level": "2",
  "url": "s_polynomials.html#rm_polynomials_powerseries",
  "type": "Remark",
  "number": "0.7.2",
  "title": "Polynomials as finite power series.",
  "body": " Polynomials as finite power series  As we see in the expression we have essentially defined a polynomial to be a function with a finite power series representation. This may seem somewhat overkill in terms of the level of abstraction, but makes for simpler exposition in the discussion below. In any case you are always welcome to revert to the more familiar characterization in .  "
},
{
  "id": "th_poly_basic",
  "level": "2",
  "url": "s_polynomials.html#th_poly_basic",
  "type": "Theorem",
  "number": "0.7.3",
  "title": "Basic properties of polynomials.",
  "body": " Basic properties of polynomials   Assume .   If and are polynomials on , then so are , , and for any .    If is a polynomial on and is a root of , then there is a polynomial on such that .    If is a nonzero polynomial on , then has at most distinct roots.      "
},
{
  "id": "cor_poly_equality",
  "level": "2",
  "url": "s_polynomials.html#cor_poly_equality",
  "type": "Corollary",
  "number": "0.7.4",
  "title": "Polynomial equality via coefficients.",
  "body": " Polynomial equality via coefficients   Assume is an infinite subset of . Let and be polynomials on of the form .   We have if and only if for all .    In particular, is the zero function on if and only if for all .      "
},
{
  "id": "d_poly_degree",
  "level": "2",
  "url": "s_polynomials.html#d_poly_degree",
  "type": "Definition",
  "number": "0.7.5",
  "title": "Degree of a polynomial.",
  "body": " polynomial degree  Degree of a polynomial    degree of polynomial    Assume is an infinite subset of and let be a nonzero polynomial on of the form with . The integer in this expression is called the degree of , denoted .  We call the polynomial  linear if , quadratic if , and cubic if .   "
},
{
  "id": "th_poly_degree",
  "level": "2",
  "url": "s_polynomials.html#th_poly_degree",
  "type": "Theorem",
  "number": "0.7.6",
  "title": "Basic properties of degree.",
  "body": " Basic properties of degree   Assume is an infinite subset of . Let and be polynomials on .     .     .     "
},
{
  "id": "th_fund_alg",
  "level": "2",
  "url": "s_polynomials.html#th_fund_alg",
  "type": "Theorem",
  "number": "0.7.7",
  "title": "Fundamental theorem of algebra.",
  "body": " Fundamental theorem of algebra   Any polynomial , thought of as a function from to itself, can be factored into linear terms as , where the are (not necessarily distinct) complex numbers.   "
},
{
  "id": "s_polynomials_ex-1",
  "level": "2",
  "url": "s_polynomials.html#s_polynomials_ex-1",
  "type": "Exercise",
  "number": "0.7.4.1",
  "title": "",
  "body": "  Find a degree 3 polynomial whose coefficient of equal to 1. The zeros of this polynomial are , , and . Simplify your answer so that it has only real numbers as coefficients.  Your answer is .           "
},
{
  "id": "s_polynomials_ex-2",
  "level": "2",
  "url": "s_polynomials.html#s_polynomials_ex-2",
  "type": "Exercise",
  "number": "0.7.4.2",
  "title": "",
  "body": "  The polynomial has as a root. Give all of the roots of in a comma-separated list, including the given one.  Roots:           "
},
{
  "id": "s_systems",
  "level": "1",
  "url": "s_systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations   Computing and studying solutions to equations, and systems of equations , unquestionably plays an important role in mathematics; though we hasten to add that this is not all that mathematicians do! In this chapter we will develop an essentially complete theory of a particularly simple family of mathematical equations: namely, linear equations . This will serve as a somewhat indirect introduction to our study of linear algebra, as lurking below our parametric descriptions of solutions to linear systems lie vector space notions like subspace, span, and linear independence. Furthermore, we will meet one of the most important computational tools of linear algebra: Gaussian elimination .    Systems of linear equations   Linear equations  linear equation   A linear expression in the unknowns (or variables) is an expression of the form , where are fixed real numbers.  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  Given a linear equation with standard form , the equation is called homogeneous if , and nonhomogeneous if .     Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .        Systems of linear equations  linear system   A system of linear equations (or linear system ) is a set of linear equations.  A homogeneous linear system is a set of homogeneous linear equations.    When displaying a system of equations in the unknowns , we typically write each equation in standard form and align the corresponding terms of each equation into columns: A homogeneous system is thus typically written as:    You will want to get comfortable with the double-indexing used to display linear systems as quickly as possible. Here is a good way to orient yourself:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .       Solutions to linear systems  solutions to linear systems   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true. We say  solves the equation in this case.  A solution to a system of linear equations  is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.    Given a linear system we will seek to find the set of all solutions to the system. As we will soon see, this set of solutions will take one of three qualitative forms:   The solution set is empty; i.e., there are no solutions. We say the system is inconsistent in this case. Otherwise a system is called consistent .    The solution set contains a single element; i.e., there is exactly one solution.    The solution set contains infinitely many elements; i.e., there are infinitely solutions.      Solutions to elementary systems   For each system, compute the set of solutions.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!       As you may recall, a (nontrivial) linear equation in two unknowns defines a line in ; and a (nontrivial) equation in three unknowns defines a plane in . This observation allows us to bring powerful geometric intuition to the analysis of systems of linear equations in two or three unknowns. As lines and planes will also serve as a rich source of examples in this course, we recall below some of their basic notions.   Lines and planes review  Below we define lines (in ) and planes (in ) as sets of solutions of linear equations in two or three unknowns. Recall that the graph of an equation is the set of all solutions to the equation.   Lines  A line in is the set of solutions (or graph) of a linear equation of the form , where are fixed constants, and at least one of and is nonzero: ,     Planes  A plane in is the set of solutions (or graph) of a linear equation of the form , where are fixed constants, and at least one of is nonzero: ,    We often use the abbreviated notation to introduce the line with defining equation or plane with defining equation .  TEST!!!! Given a plane , we call a normal vector of . Equipped with the normal vector and a single point lying on , we can quickly visualize as the set of all points such that the vector is orthogonal to . This allows us to envision as the plane passing through and orthogonal to . The customizable Sage Cell below nicely demonstrates this method of visualization.   Using Sage to visualize via normal vector  Using Sage to visualize via normal vector   A plane and its normal vector       Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.         Row operations  In we were able to combine some simple logic and arithmetic to solve each system completely. Of course, things get more complicated as the number of equations and\/or unknowns in the system increases.  For example, consider the system Observe first that the triple is not a solution to the system; one easily checks that is satisfies the first and second equations, but not the third. Similarly, it is easy to verify that and are both solutions to the system. The question remains: How do we find all solutions to the linear system in a systematic way?   Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.    Some systems are easier to solve than others  Below you find two systems of three equations in three unknowns. The staircase pattern of allows us to solve easily by backwards substitution . In more detail:   Equation 3 in tells us that .    Now substitute into Equation 2 of and solve for to get .    Finally, substitute and into Equation 1 of and solve for to get . We conclude that is a solution to .    Furthermore, since at each step we had no choice in the matter ( must be equal to 2, then must be equal to 4, etc.), we see that in fact is the only solution to .   Our method for solving a more complicated system, like above, will be to transform it to a simpler system like .   Key point . In order for this method to work, we need to make sure that the transformed system has exactly the same solutions as the original system! To this end we will restrict our permissible transformations to the elementary operations define below.   Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).    After reducing a linear system using elementary operations, we are left with a new system . The systems and will generally look very different from one another. Note, however, that the two systems will have the same number of equations, and the same number of variables. More importantly, the two systems will have identical sets of solutions; that is, the set of solutions of the new system is identical to the set of solutions to !  To convince ourselves of this last assertion, it suffices to show that the application of any one of these elementary row operations produces a new system with exactly the same set of solutions as ; if this is so, then performing any finite sequence of elementary row operations must also preserve the set of solutions in this sense. makes this argument official. First we introduce the notion of equivalent linear systems , mainly to spare ourselves from the mouthful that is obtained by applying a finite sequence of elementary row operations .   Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.     Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. This is the result of . (Note that a solution is provided to that exercise.)  We conclude that and have the same set of solutions, as desired.       Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!    Notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .    Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.      WeBWork Exercises    Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                    Suppose that the following   is a consistent system. Then               Find the set of solutions for the linear system  Use s1 , s2 , etc. for the free variables if necessary.   , ,                   SOLUTION: Equation 3 . Substitute into equation 2, . Substitute into equation 1, .         Give a geometric description of the following systems of equations                    Give a geometric description of the following system of equations                    Written exercises  Geometry of linear systems  In this exercise we will use the geometry of lines in and planes in to help analyze solutions to systems of equations in two and three unknowns, respectively. See for a refresher on these concepts.   Fix and consider a system of linear equations in the two unknowns and . What does a solution to this system of linear equations correspond to geometrically?    Use your interpretation in (a) to give a geometric argument that a system of equations in two unknowns will have either (i) zero solutions, (ii) exactly one solution, or (iii) infinitely many solutions.    Use your geometric interpretation to help produce explicit examples of systems in two variables satisfying these three different cases (i)-(iii).    Now repeat (a)-(b) for a system of linear equations in three variables .      (a) Geometrically, each equation in the system represents a line . A solution to the -th equation corresponds to a point on . Thus a solution to the system corresponds to a point lying on all of the lines: i.e., a point of intersection of the lines.  (b) First of all to prove the desired or statement it suffices to prove that if the number of solutions is greater than 1, then there are infinitely many solutions.  Now suppose there is more than one solution. Then there are at least two different solutions: and . Take any of the two lines . By above the intersection of and contains and . But two distinct lines intersect in at most one point. It follows that and must be equal. Since and were arbitrary, it follows all of the lines are in fact the same line . But this means the common intersection of the lines is , which has infinitely many points. It follows that the system has infinitely many solutions.  (c) We will get 0 solutions if the system includes two different parallel lines: e.g., and .  We will get exactly one solution when the slopes of each line in the system are distinct.  We will get infinitely many solutions when all equations in the system represent the same line . This happens when all equations are multiples of one another.  (d) Now each equation in our system defines a plane . A solution to the system corresponds to a point of intersection of the planes. We recall two facts from Euclidean geometry:   Fact 1  Given two distinct points, there is a unique line containing both of them.    Fact 2  Given any number of distinct planes, they either do not intersect, or intersect in a line.     We proceed as in part (b) above: that is show that if there are two distinct solutions to the system, then there are infinitely many solutions. First, for simplicity, we may assume that the equations define distinct planes; if we have two equations defining the same plane, we can delete one of them and not change the set of solutions to the system.  Now suppose and are two distinct solutions to the system. Let be the unique line containing and (Fact 1). I claim that is precisely the set of solutions to the system. To see this, take any two equations in the system and . Since the two corresponding planes are distinct, and intersect in at least the points and , they must intersect in a line (Fact 2); since this line contains and , it must be the line (Fact 1). Thus any two planes in the system intersect in the line . From this it follows that: (a) a point satisfying the system must lie in ; and (b) all points on satisfy the system (since we have shown that lies in all the planes). It follows that is precisely the set of solutions, and hence that there are infinitely many solutions.   Row operations preserve solutions  We made the claim that each of our three row operations   scalar multiplication ( for ),    swap ( ),    addition ( for some )   do not change the set of solutions of a linear system. To prove this claim, let be a general linear system . Now consider each type of row operation separately, write down the new system you get by applying this row operation, and prove that an -tuple is a solution to the original system if and only if it is a solution to the new system .   Let be the original system with equations . For each specified row operation, we will call the resulting new system and its equations .   Row swap  In this case systems and have exactly the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Scalar multiplication  In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row addition  The only equation of that differs from is . Writing this equation out in terms of coefficients gives us . Now if satisfies , then it satisfies and , in which case evaluating the RHS of the above at yields showing that satisfies . Now suppose satisfies . Since satisfies , we have Since satisfies , we have Substituting into the equation above we get , and hence . This shows that satisfies . It follows that satisfies .    Nonlinear systems A nonlinear system of equations is a collection of equations, at least one of which is nonlinear. Our definition of a solution to a linear system generalizes easily to any system of equations.   Consider the following nonlinear system in the unknowns : .   Sketch the graphs of each of the two equations in the system on a common coordinate system.    Describe geometrically what a solution to the system is in terms of your sketch. Explain your reasoning. How many solutions to the system are there, according to your sketch?    Compute the set of all solutions to the system algebraically.       Now consider a more general system where are fixed constants and at least one of or is nonzero.    Explain geometrically what a solution to the system corresponds to in terms of the graphs of its two equations.    Use your geometric interpretation in (i) to argue that the system has either 0, 1, or 2 solutions. Give explicit examples of such systems corresponding to each of these three cases.       Not all arithmetic operations preserve solutions  In this exercise we investigate how the operation of squaring both sides of an equation changes the set of solutions. Let represent a general equation (linear or nonlinear) in the unknowns , let be the equation obtained by squaring both sides of the , let be the set of solutions to , and let be the set of solutions to .    Show that .    Given an explicit example of an equation of the form in two variables for which .       "
},
{
  "id": "d_lin-equation",
  "level": "2",
  "url": "s_systems.html#d_lin-equation",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Linear equations.",
  "body": " Linear equations  linear equation   A linear expression in the unknowns (or variables) is an expression of the form , where are fixed real numbers.  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  Given a linear equation with standard form , the equation is called homogeneous if , and nonhomogeneous if .   "
},
{
  "id": "ss_linear_equations-3",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-3",
  "type": "Example",
  "number": "1.1.2",
  "title": "Linear and nonlinear equations.",
  "body": " Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .      "
},
{
  "id": "d_lin-sys",
  "level": "2",
  "url": "s_systems.html#d_lin-sys",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Systems of linear equations.",
  "body": " Systems of linear equations  linear system   A system of linear equations (or linear system ) is a set of linear equations.  A homogeneous linear system is a set of homogeneous linear equations.   "
},
{
  "id": "ss_linear_equations-6",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-6",
  "type": "Remark",
  "number": "1.1.4",
  "title": "",
  "body": " You will want to get comfortable with the double-indexing used to display linear systems as quickly as possible. Here is a good way to orient yourself:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .     "
},
{
  "id": "d_lin-sys-sols",
  "level": "2",
  "url": "s_systems.html#d_lin-sys-sols",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Solutions to linear systems.",
  "body": " Solutions to linear systems  solutions to linear systems   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true. We say  solves the equation in this case.  A solution to a system of linear equations  is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.   "
},
{
  "id": "ss_linear_equations-8",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inconsistent consistent "
},
{
  "id": "s_systems_eg_2eqns2varss",
  "level": "2",
  "url": "s_systems.html#s_systems_eg_2eqns2varss",
  "type": "Example",
  "number": "1.1.6",
  "title": "Solutions to elementary systems.",
  "body": " Solutions to elementary systems   For each system, compute the set of solutions.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!      "
},
{
  "id": "eg_lines_planes_review",
  "level": "2",
  "url": "s_systems.html#eg_lines_planes_review",
  "type": "Example",
  "number": "1.1.7",
  "title": "Lines and planes review.",
  "body": " Lines and planes review  Below we define lines (in ) and planes (in ) as sets of solutions of linear equations in two or three unknowns. Recall that the graph of an equation is the set of all solutions to the equation.   Lines  A line in is the set of solutions (or graph) of a linear equation of the form , where are fixed constants, and at least one of and is nonzero: ,     Planes  A plane in is the set of solutions (or graph) of a linear equation of the form , where are fixed constants, and at least one of is nonzero: ,    We often use the abbreviated notation to introduce the line with defining equation or plane with defining equation .  TEST!!!! Given a plane , we call a normal vector of . Equipped with the normal vector and a single point lying on , we can quickly visualize as the set of all points such that the vector is orthogonal to . This allows us to envision as the plane passing through and orthogonal to . The customizable Sage Cell below nicely demonstrates this method of visualization.   Using Sage to visualize via normal vector  Using Sage to visualize via normal vector   A plane and its normal vector     "
},
{
  "id": "eg_system_of_lines",
  "level": "2",
  "url": "s_systems.html#eg_system_of_lines",
  "type": "Example",
  "number": "1.1.9",
  "title": "Solutions to elementary systems (again).",
  "body": " Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.      "
},
{
  "id": "ss_row_equivalence-4",
  "level": "2",
  "url": "s_systems.html#ss_row_equivalence-4",
  "type": "Remark",
  "number": "1.1.10",
  "title": "",
  "body": " Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.  "
},
{
  "id": "d_eqops",
  "level": "2",
  "url": "s_systems.html#d_eqops",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Elementary operations on linear systems.",
  "body": " Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).   "
},
{
  "id": "d_rowequivalent",
  "level": "2",
  "url": "s_systems.html#d_rowequivalent",
  "type": "Definition",
  "number": "1.1.12",
  "title": "Row equivalent linear systems.",
  "body": " Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.   "
},
{
  "id": "s_systems_th_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_th_rowops",
  "type": "Theorem",
  "number": "1.1.13",
  "title": "Row equivalence theorem.",
  "body": " Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. This is the result of . (Note that a solution is provided to that exercise.)  We conclude that and have the same set of solutions, as desired.    "
},
{
  "id": "eg_systems_eg_long",
  "level": "2",
  "url": "s_systems.html#eg_systems_eg_long",
  "type": "Example",
  "number": "1.1.14",
  "title": "Complete example.",
  "body": " Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!  "
},
{
  "id": "s_systems_notation_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_notation_rowops",
  "type": "Remark",
  "number": "1.1.15",
  "title": "Notation.",
  "body": " Notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .  "
},
{
  "id": "s_systems_rm_oneoperation",
  "level": "2",
  "url": "s_systems.html#s_systems_rm_oneoperation",
  "type": "Remark",
  "number": "1.1.16",
  "title": "Mandate.",
  "body": " Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.  "
},
{
  "id": "s_systems_ex-1-2",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-2",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": "  Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                 "
},
{
  "id": "s_systems_ex-1-3",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-3",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "",
  "body": "  Suppose that the following   is a consistent system. Then            "
},
{
  "id": "s_systems_ex-1-4",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-4",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "",
  "body": "  Find the set of solutions for the linear system  Use s1 , s2 , etc. for the free variables if necessary.   , ,                   SOLUTION: Equation 3 . Substitute into equation 2, . Substitute into equation 1, .      "
},
{
  "id": "s_systems_ex-1-5",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-5",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "",
  "body": "  Give a geometric description of the following systems of equations                 "
},
{
  "id": "s_systems_ex-1-6",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-6",
  "type": "Exercise",
  "number": "1.1.3.5",
  "title": "",
  "body": "  Give a geometric description of the following system of equations                 "
},
{
  "id": "ex_solving_sys_geom",
  "level": "2",
  "url": "s_systems.html#ex_solving_sys_geom",
  "type": "Exercise",
  "number": "1.1.3.6",
  "title": "Geometry of linear systems.",
  "body": "Geometry of linear systems  In this exercise we will use the geometry of lines in and planes in to help analyze solutions to systems of equations in two and three unknowns, respectively. See for a refresher on these concepts.   Fix and consider a system of linear equations in the two unknowns and . What does a solution to this system of linear equations correspond to geometrically?    Use your interpretation in (a) to give a geometric argument that a system of equations in two unknowns will have either (i) zero solutions, (ii) exactly one solution, or (iii) infinitely many solutions.    Use your geometric interpretation to help produce explicit examples of systems in two variables satisfying these three different cases (i)-(iii).    Now repeat (a)-(b) for a system of linear equations in three variables .      (a) Geometrically, each equation in the system represents a line . A solution to the -th equation corresponds to a point on . Thus a solution to the system corresponds to a point lying on all of the lines: i.e., a point of intersection of the lines.  (b) First of all to prove the desired or statement it suffices to prove that if the number of solutions is greater than 1, then there are infinitely many solutions.  Now suppose there is more than one solution. Then there are at least two different solutions: and . Take any of the two lines . By above the intersection of and contains and . But two distinct lines intersect in at most one point. It follows that and must be equal. Since and were arbitrary, it follows all of the lines are in fact the same line . But this means the common intersection of the lines is , which has infinitely many points. It follows that the system has infinitely many solutions.  (c) We will get 0 solutions if the system includes two different parallel lines: e.g., and .  We will get exactly one solution when the slopes of each line in the system are distinct.  We will get infinitely many solutions when all equations in the system represent the same line . This happens when all equations are multiples of one another.  (d) Now each equation in our system defines a plane . A solution to the system corresponds to a point of intersection of the planes. We recall two facts from Euclidean geometry:   Fact 1  Given two distinct points, there is a unique line containing both of them.    Fact 2  Given any number of distinct planes, they either do not intersect, or intersect in a line.     We proceed as in part (b) above: that is show that if there are two distinct solutions to the system, then there are infinitely many solutions. First, for simplicity, we may assume that the equations define distinct planes; if we have two equations defining the same plane, we can delete one of them and not change the set of solutions to the system.  Now suppose and are two distinct solutions to the system. Let be the unique line containing and (Fact 1). I claim that is precisely the set of solutions to the system. To see this, take any two equations in the system and . Since the two corresponding planes are distinct, and intersect in at least the points and , they must intersect in a line (Fact 2); since this line contains and , it must be the line (Fact 1). Thus any two planes in the system intersect in the line . From this it follows that: (a) a point satisfying the system must lie in ; and (b) all points on satisfy the system (since we have shown that lies in all the planes). It follows that is precisely the set of solutions, and hence that there are infinitely many solutions.  "
},
{
  "id": "ex_row_ops_preserve",
  "level": "2",
  "url": "s_systems.html#ex_row_ops_preserve",
  "type": "Exercise",
  "number": "1.1.3.7",
  "title": "Row operations preserve solutions.",
  "body": "Row operations preserve solutions  We made the claim that each of our three row operations   scalar multiplication ( for ),    swap ( ),    addition ( for some )   do not change the set of solutions of a linear system. To prove this claim, let be a general linear system . Now consider each type of row operation separately, write down the new system you get by applying this row operation, and prove that an -tuple is a solution to the original system if and only if it is a solution to the new system .   Let be the original system with equations . For each specified row operation, we will call the resulting new system and its equations .   Row swap  In this case systems and have exactly the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Scalar multiplication  In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row addition  The only equation of that differs from is . Writing this equation out in terms of coefficients gives us . Now if satisfies , then it satisfies and , in which case evaluating the RHS of the above at yields showing that satisfies . Now suppose satisfies . Since satisfies , we have Since satisfies , we have Substituting into the equation above we get , and hence . This shows that satisfies . It follows that satisfies .   "
},
{
  "id": "ex_solving_nonlinear_system",
  "level": "2",
  "url": "s_systems.html#ex_solving_nonlinear_system",
  "type": "Exercise",
  "number": "1.1.3.8",
  "title": "Nonlinear systems.",
  "body": "Nonlinear systems A nonlinear system of equations is a collection of equations, at least one of which is nonlinear. Our definition of a solution to a linear system generalizes easily to any system of equations.   Consider the following nonlinear system in the unknowns : .   Sketch the graphs of each of the two equations in the system on a common coordinate system.    Describe geometrically what a solution to the system is in terms of your sketch. Explain your reasoning. How many solutions to the system are there, according to your sketch?    Compute the set of all solutions to the system algebraically.       Now consider a more general system where are fixed constants and at least one of or is nonzero.    Explain geometrically what a solution to the system corresponds to in terms of the graphs of its two equations.    Use your geometric interpretation in (i) to argue that the system has either 0, 1, or 2 solutions. Give explicit examples of such systems corresponding to each of these three cases.      "
},
{
  "id": "s_systems_ex-2-5",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-2-5",
  "type": "Exercise",
  "number": "1.1.3.9",
  "title": "Not all arithmetic operations preserve solutions.",
  "body": "Not all arithmetic operations preserve solutions  In this exercise we investigate how the operation of squaring both sides of an equation changes the set of solutions. Let represent a general equation (linear or nonlinear) in the unknowns , let be the equation obtained by squaring both sides of the , let be the set of solutions to , and let be the set of solutions to .    Show that .    Given an explicit example of an equation of the form in two variables for which .    "
},
{
  "id": "s_ge",
  "level": "1",
  "url": "s_ge.html",
  "type": "Section",
  "number": "1.2",
  "title": "Gaussian elimination",
  "body": " Gaussian elimination   In we sketched a procedure for solving a linear system . That procedure involved applying a sequence of row operations to to obtain a simpler system .  We will fill out this sketch in the next two sections. Specifically, we will   describe precisely what we mean by a simpler system,    provide an algorithm (or recipe) that decides exactly what sequence of row operations to apply to obtain this simpler system,    explain how to find all solutions of the resulting simpler system.       Row echelon matrices  Our first step in this direction will be to introduce a notational convenience. As you may have noticed, when performing row operations on a system of equations, we essentially treat the unknowns, as well as the plus and equals symbols, as placeholders; the only things that actually change in a given step are the coefficients in the equations. The augmented matrix associated to a linear system is a formal way of extracting just the information of the coefficients from a linear system.   Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .     As defined more thoroughly in , a matrix is just a rectangular array of numbers.   Here is our precise formulation of a simple linear system; it is a system whose associated augmented matrix is in row echelon form , as described below.   Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  (i)  In any nonzero row the first (i.e., leftmost) nonzero entry is equal to one. A leading one of a matrix is such an entry: i.e., an entry of a row that is equal to one, and that is also the first nonzero entry of that row.   (ii)  All zero rows are grouped together at the bottom of the matrix.   (iii)  Given any two nonzero rows in the matrix, the leading one of the lower row occurs strictly to the right of the leading one of the row above it.     A matrix is in reduced row echelon form if in addition to conditions (i)-(iii) it also satisfies the following condition.   (iv) Any column of the matrix that contains a leading one has zeros elsewhere. In other words, if a column contains a leading one, then that is the only nonzero entry of that column.    A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).    In practice to decide whether a matrix is in in (reduced) row echelon form, follow these steps:   First verify whether all zero rows are at the bottom.    For each nonzero row, determine whether the first nonzero entry is a 1, and put a box around it.    Make sure your boxes make a staircase pattern.    (For reduced row echelon form only.) Decide whether each column with a box has 0's everywhere else.      Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                  Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.        Gaussian elimination  We will now describe a systematic procedure, called Gaussian elimination , that allows us to reduce a given linear system to a system in row echelon form. In keeping with the foregoing discussion, we will identify a system with its augmented matrix . Furthermore, reducing a linear system using elementary operations on equations is now cast as performing elementary row operations on matrices. At the risk of redundancy we now officially translate a number of our former notions regarding reduction of linear systems to the setting of matrices.   Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. Let be a given matrix, and denote by the -th row of .    Scalar multplication  Multiply a row by a nonzero number : i.e., replace with , the result of multiplying all entries of the row by .    Row swap  Swap two rows of .    Row addition  Add a multiple of one row to another: i.e., replace with for some , , and .    The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.     Notation    scalar multiplication     row swap     replace with  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively.  At last we are ready to define Gaussian elimination. In its essence this is simply a procedure, or algorithm , that takes an input matrix and row reduces it to a matrix in row echelon form. It is important to note that although we employ Gaussian elimination in this chapter primarily to the end of simplifying and solving linear systems, this is not its only application. Indeed, we will come back to the procedure again and again, in a great variety of contexts and to greatly diverse ends. Gaussian elimination is one of linear algebra's most important tools. We memorialize this here as an official principle.   Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.     Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.    Step 1  Find the leftmost nonzero column and perform a row swap to move the row with this nonzero entry to the top of the matrix.    Step 2  Scale the new top row to produce a leading one in the row. Call this new row .    Step 3  For each row below perform a row operation of the form to replace all entries below the leading one of with zeros.    Step 4  Begin again with Step 1 applied to the matrix consisting of all rows below . Continue until the matrix is in row echelon form.       Model example  Use the following example as a model of how to both perform and annotate the steps in Gaussian elimination. When first learning this procedure, make sure to follow it to the letter . In particular, in the spirit of the mandate issued in , you should only perform one row operation at a time, and only in the sequence prescribed in Steps 1-4 of .   The matrix outputted by Gaussian elimination is guaranteed to be in row echelon form, but it may not be in reduced row echelon form. Gauss-Jordan elimination describes a systematic way to continue reducing to this even simpler state.    Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.    Steps 1-4  Apply Gaussian elimination to transform to a matrix in row echelon form.    Step 5  Find the rightmost column of the matrix containing a leading one. Let be the row containing this leading one. For each row above perform a row operation of the form to replace all entries above the leading one with zeros.    Step 6  Begin again with Step 5 applied to the next column to the left that contains a leading one. Continue until the matrix is in reduced row echelon form.      Continuing our previous example: .   and are really theorems in disguise, and we make this official in .   Row equivalent matrix forms     Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, Gaussian elimination row reduces any matrix to a matrix in row echelon form.    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, Gauss-Jordan elimination row reduces any matrix to a matrix in reduced row echelon form.    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.      We will make heavy use of the first two results of . The proofs of these statements are not difficult, but not especially illuminating. Accordingly we omit them here, and point the interested reader to Robert Beezer's A First Course in Linear Algebra . (See Theorem REMEF .)  The third statement of , that every matrix is row equivalent to a unique matrix in reduced row echelon form, does in fact have an enlightening proof. We will postpone this proof, however, until we have a little more theory at our disposal. (See .) Until then we will conscientiously not make use of this fact when developing any of our further theory.   Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)     Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The following activities could be useful for implementing Gaussian elimination in a manner that shows all intervening steps. Use the empty Sage cell below to experiment.   Modify the row_echelon_form code to make a non-recursive algorithm.    Add show commands to your non-recursive version of row_echelon_form to show steps in the row reduction.          WeBWork Exercises     Determine if the matrix   is in echelon form, reduced row echelon form, or neither. Choose the most appropriate answer.  Answer:   select    echelon form    reduced row echelon form    not in echelon form   .        SOLUTION: Reduced row echelon form.          PTX:ERROR: WeBWorK problem Library\/Mizzou\/Finite_Math\/MatrixOperations\/RowOp3by3e.pg with seed 24 is either empty or failed to compile Use -a to halt with returned content       On the augmented matrix below , perform all three row operations in the order given, ((a) followed by (b) followed by (c)) and then write the resulting augmented matrix.                                                                                             Written Exercises    Explain why each of the following matrices fails to be in row echelon form.        The first nonzero term in the second row is not a one.                For each of the given linear systems, find an equivalent system in row echelon form. Use augmented matrices and follow the Gaussian elimination algorithm to the letter.        First bring the system into standard form: . Then perform Gaussian elimination on the associated augmented matrix: . The corresponding equivalent system is .                          "
},
{
  "id": "d_augmented_matrix",
  "level": "2",
  "url": "s_ge.html#d_augmented_matrix",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Augmented matrix.",
  "body": " Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .   "
},
{
  "id": "s_ge_rm_see_def",
  "level": "2",
  "url": "s_ge.html#s_ge_rm_see_def",
  "type": "Remark",
  "number": "1.2.2",
  "title": "",
  "body": " As defined more thoroughly in , a matrix is just a rectangular array of numbers.  "
},
{
  "id": "d_row_echelon",
  "level": "2",
  "url": "s_ge.html#d_row_echelon",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Row echelon form.",
  "body": " Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  (i)  In any nonzero row the first (i.e., leftmost) nonzero entry is equal to one. A leading one of a matrix is such an entry: i.e., an entry of a row that is equal to one, and that is also the first nonzero entry of that row.   (ii)  All zero rows are grouped together at the bottom of the matrix.   (iii)  Given any two nonzero rows in the matrix, the leading one of the lower row occurs strictly to the right of the leading one of the row above it.     A matrix is in reduced row echelon form if in addition to conditions (i)-(iii) it also satisfies the following condition.   (iv) Any column of the matrix that contains a leading one has zeros elsewhere. In other words, if a column contains a leading one, then that is the only nonzero entry of that column.    A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).   "
},
{
  "id": "ss_ge_row_echelon-8",
  "level": "2",
  "url": "s_ge.html#ss_ge_row_echelon-8",
  "type": "Example",
  "number": "1.2.4",
  "title": "Row echelon versus reduced row echelon form.",
  "body": " Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                  Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.     "
},
{
  "id": "d_rowops",
  "level": "2",
  "url": "s_ge.html#d_rowops",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Elementary row operations on matrices.",
  "body": " Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. Let be a given matrix, and denote by the -th row of .    Scalar multplication  Multiply a row by a nonzero number : i.e., replace with , the result of multiplying all entries of the row by .    Row swap  Swap two rows of .    Row addition  Add a multiple of one row to another: i.e., replace with for some , , and .    The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.   "
},
{
  "id": "s_ge_notation",
  "level": "2",
  "url": "s_ge.html#s_ge_notation",
  "type": "Remark",
  "number": "1.2.6",
  "title": "Notation.",
  "body": " Notation    scalar multiplication     row swap     replace with  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively. "
},
{
  "id": "princ_GE",
  "level": "2",
  "url": "s_ge.html#princ_GE",
  "type": "Mantra",
  "number": "1.2.7",
  "title": "Gaussian elimination mantra.",
  "body": " Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.   "
},
{
  "id": "d_GE",
  "level": "2",
  "url": "s_ge.html#d_GE",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.    Step 1  Find the leftmost nonzero column and perform a row swap to move the row with this nonzero entry to the top of the matrix.    Step 2  Scale the new top row to produce a leading one in the row. Call this new row .    Step 3  For each row below perform a row operation of the form to replace all entries below the leading one of with zeros.    Step 4  Begin again with Step 1 applied to the matrix consisting of all rows below . Continue until the matrix is in row echelon form.     "
},
{
  "id": "d_GaussJordan",
  "level": "2",
  "url": "s_ge.html#d_GaussJordan",
  "type": "Definition",
  "number": "1.2.9",
  "title": "Gauss-Jordan elimination.",
  "body": " Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.    Steps 1-4  Apply Gaussian elimination to transform to a matrix in row echelon form.    Step 5  Find the rightmost column of the matrix containing a leading one. Let be the row containing this leading one. For each row above perform a row operation of the form to replace all entries above the leading one with zeros.    Step 6  Begin again with Step 5 applied to the next column to the left that contains a leading one. Continue until the matrix is in reduced row echelon form.     "
},
{
  "id": "th_matrixforms",
  "level": "2",
  "url": "s_ge.html#th_matrixforms",
  "type": "Theorem",
  "number": "1.2.10",
  "title": "Row equivalent matrix forms.",
  "body": " Row equivalent matrix forms     Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, Gaussian elimination row reduces any matrix to a matrix in row echelon form.    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, Gauss-Jordan elimination row reduces any matrix to a matrix in reduced row echelon form.    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.     "
},
{
  "id": "s_ge_ex_REFnotunique",
  "level": "2",
  "url": "s_ge.html#s_ge_ex_REFnotunique",
  "type": "Example",
  "number": "1.2.11",
  "title": "Row echelon form is not unique.",
  "body": " Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)   "
},
{
  "id": "sage_ge",
  "level": "2",
  "url": "s_ge.html#sage_ge",
  "type": "Sage example",
  "number": "1",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The following activities could be useful for implementing Gaussian elimination in a manner that shows all intervening steps. Use the empty Sage cell below to experiment.   Modify the row_echelon_form code to make a non-recursive algorithm.    Add show commands to your non-recursive version of row_echelon_form to show steps in the row reduction.      "
},
{
  "id": "s_ge_ex-1-2",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-2",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": "  Determine if the matrix   is in echelon form, reduced row echelon form, or neither. Choose the most appropriate answer.  Answer:   select    echelon form    reduced row echelon form    not in echelon form   .        SOLUTION: Reduced row echelon form.      "
},
{
  "id": "s_ge_ex-1-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-3",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": "   PTX:ERROR: WeBWorK problem Library\/Mizzou\/Finite_Math\/MatrixOperations\/RowOp3by3e.pg with seed 24 is either empty or failed to compile Use -a to halt with returned content    "
},
{
  "id": "s_ge_ex-1-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-4",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": "  On the augmented matrix below , perform all three row operations in the order given, ((a) followed by (b) followed by (c)) and then write the resulting augmented matrix.                                                                                          "
},
{
  "id": "s_ge_ex-2-2-2",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-2",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": "     The first nonzero term in the second row is not a one.  "
},
{
  "id": "s_ge_ex-2-2-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-3",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-2-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-4",
  "type": "Exercise",
  "number": "1.2.3.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_equivsys",
  "level": "2",
  "url": "s_ge.html#s_ge_equivsys",
  "type": "Exercise",
  "number": "1.2.3.7",
  "title": "",
  "body": "     First bring the system into standard form: . Then perform Gaussian elimination on the associated augmented matrix: . The corresponding equivalent system is .  "
},
{
  "id": "s_ge_ex-2-3-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-3",
  "type": "Exercise",
  "number": "1.2.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-3-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-4",
  "type": "Exercise",
  "number": "1.2.3.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-3-5",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-5",
  "type": "Exercise",
  "number": "1.2.3.10",
  "title": "",
  "body": "    "
},
{
  "id": "s_ge_ex-2-3-6",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-6",
  "type": "Exercise",
  "number": "1.2.3.11",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving",
  "level": "1",
  "url": "s_solving.html",
  "type": "Section",
  "number": "1.3",
  "title": "Solving linear systems",
  "body": " Solving linear systems   Let's continue with our model example from . Summarizing the various steps, we have . The new system in row echelon form is undoubtedly simpler, but describing all of its solutions still requires some subtle analysis.    Model example  We begin by illustrating the general method for solving a linear system using our model example; a careful description of the procedure, along with a proof of its validity, is found in .  A key first step involves separating the variables of the system into free and leading variables.   Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.      Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.    In our model example we transformed the original system to the equivalent system below: . The free variables of are and ; the leading variables are , and . Observe that if we assign and , where and are any real numbers, then we are left with a system in three unknowns ( ) of the form . Using back-substitution, we see that the unknowns are then uniquely expressed in terms of and as Thus for any choice of real numbers and we get a unique solution of the form . We conclude the set of solutions to is given as Alternatively, we can describe the solutions to with the parametric equations     Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation format of or the parametric equation format of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.     General method for solving linear systems  Before describing a precise algorithm for computing the set of solutions to a linear system, we must address the possibility that there are no solutions to the system whatsoever. Such a system is called inconsistent .   Consistent and inconsistent systems  consistent  inconsistent   A linear system is consistent if it has at least one solution; it is inconsistent if it has no solutions.    We are now in a position to describe an algorithm for computing the set of solutions of a linear system.   Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.    Step 1  Apply Gaussian elimination to reduce to an equivalent system in row echelon form.    Step 2  Let be the augmented matrix associated to . If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Step 3  Determine which if any of the unknowns are free variables of .    Step 4  If there are no free variables, solve for each unknown using back-substitution. In this case, there is a unique solution to : , contains exactly one element.  Otherwise, let be the leading variables of , and let be the free variables. Back-substitution allows us to express each leading variable in terms of the free variables. In other words, we can write , where each is a linear expression in the free variables. Each solution of thus corresponds to a unique variable assignment of the form , where are any real numbers.       First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.   Case 1: no free variables   Suppose in Step 3 you determine that there are no free variables. Then each of the first columns of has a leading one in it. If follows that for each the -th equation of is of the form Since does not have a leading one in the last column, it follows that all equations beyond the -th equation are of the form , and as such may be disregarded since they are satisfied by any choice of the . The remaining system of equations in unknowns can be solved by back-substitution, yielding a unique solution of the form Do not concern yourself overly with the exact formulas. The important point here is that once we know there is a unique assignment of the variables that satisfies the system, allows us to solve for in terms of the the , . As such working our way up from the last equation, we find there is a unique solution to the system.     Case 2: free variables  Suppose now that are the leading variables of , and are the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to solve for each leading variable as a function of the free variables: This new system of equations clearly has the same set of solutions as (and ), since it was obtained from by deleting zero rows of and using only addition and subtraction operations. Furthermore, it is clear that any assignment of the free variables extends uniquely to the solution of that further assigns . The idea behind uniqueness here, is that once you assign values to the free variables, the values of the leading variables are completely determined by the equations .  Lastly, we show that every solution of (and ) is obtained in this way. Suppose is a solution. According to the discussion above must be the unique solution to corresponding to the free variable assignment and corresponding leading variable assignment .     Video examples of solving linear systems    Video: solving linear systems  Video: solving linear systems     Video: solving linear systems 2  Video: solving linear systems 2       Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in . We will elaborate this method further in     In addition to providing a recipe for describing the full set of solutions to a linear system, also tells us that qualitatively this set must take one of three forms: the set is empty (inconsistent, no solutions); there is a unique solution (consistent, no free variables); there are infinitely many solutions (consistent, free variables). We record this fact, useful in its own right, as a corollary.   , , or -many solutions   Let be a linear system of equations, let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:    If has a leading one in its last column, then has no solutions.    If does not have a leading one in its last column and has no free variables, then has a unique solution.    If does not have a leading one in its last column and has a free variable, then has infinitely many solutions.      The decision tree in concisely summarizes the different cases articulated in .   Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system with augmented matrix in row echelon form.         Solutions to homogeneous systems  Consider the special case of a homogeneous system Such a system is always consistent. Why? Observe that is guaranteed to be a solution. Alternatively, it is easy to see that row reducing the system results in an augmented matrix whose last column is a zero column: a zero column certainly contains no leading ones. Thus, in the special case of a homogeneous system, boils down to the following result.   Solutions to homogeneous equations   Fix a homogeneous linear system in variables. There are two possibilities:   if all the variables are leading variables, then the system has a unique solution (i.e., solution);    if there is a free variable, then the system has infinitely many solutions.          WeBWork Exercises    Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix to reduced row echelon form. The reduced matrix is:              (e) How many solutions does the system have? If infinitely many, enter \"Infinity\".  (f) What are the solutions to the system?  If there are no solutions, write \"No Solution\" or \"None\" for each answer. If there are infinitely many solutions let and solve for in terms of .                                                                                                                                                    Solve the following system using augmented matrix methods:  (a) The initial matrix is:                      (b) First, perform the Row Operation . The resulting matrix is:                      (c) Next, perform the operations   .  The resulting matrix is:                      (d) Finish simplifying the augmented matrix down to reduced row echelon form. The reduced matrix is:                      Remember: This matrix must be simplified all the way to reduced form.  (e) How many solutions does the system have? If infinitely many, enter \"Infinity\". If none, enter 0.  (f) What are the solutions of the system?        Note: In part (f), if there are no solutions, write \"No Solution\" or \"None\" in the answer blank after each equal sign. If there are infinitely many solutions, and the solution set describes a line (that is, if there is only one free variable), set and solve for the remaining variables in terms of . If there are infinitely many solutions, and the solution set describes a plane (that is, if the solution set has two free variables), set the variables and , and then solve for in terms of and .                                                                                                                                                                                                                                                                             Solve  = , = , = , = .                             Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                       Written Exercises   Solving linear systems   Solve the following systems of equations.   When row reducing follow Gaussian elimination to the letter.    Make sure to indicate how variables are sorted into free and leading variables.    Express your answer in both the parametric equation format and set notation format.           We saw in that the system is equivalent to a system with augmented matrix . The row echelon matrix tells us that is the only free variable of . Back substitution then yields the parametric equation description: . Thus the set of solutions is .                         For each system below determine all values of for which the system below has (a) no solutions, (b) a unique solution, and (c) infinitely many solutions.              Show that a linear system with more unknowns than equations has either 0 solutions or infinitely many solutions.    True or false. If true, provide a proof; if false, provide an explicit counterexample.    Every matrix has a unique row echelon form.    Any homogeneous linear system with more unknowns than equations has infinitely many solutions.    If a homogeneous linear system of equations in unknowns has a corresponding augmented matrix with a reduced row echelon form containing leading ones, then the linear system has the unique solution .    All leading ones in of a matrix in row echelon form must occur in distinct columns.    If the reduced row echelon form of the augmented matrix for a linear system has a zero row, then the system must have infinitely many solutions.    If a linear system has more unknowns than equations, then it must have infinitely many solutions.      Interpret each matrix below as an augmented matrix of a linear system. Asterisks represent an unspecified real number. For each matrix, determine whether the corresponding system is consistent or inconsistent. If the system is consistent, decide further whether the solution is unique or not. If there is not enough information answer inconclusive and back up your claim by giving an explicit example where the system is consistent, and an explicit example where the system is inconsistent.                          What condition must and satisfy in order for the system below to be consistent? Express your answer as an equation involving and .     Solve the system of equations below for , , and .    First replace the given nonlinear system with a linear one using a change of variable substitution.    If is a matrix with three rows and five columns, then what is the maximum possible number of leading ones in its reduced row echelon form? Justify your answer.  Provide an explicit example of a matrix that attains this maximum number of leading ones.    If is a matrix with three rows and six columns, then what is the maximum possible number of free variables in the general solution of the linear system with augmented matrix ? Justify your answer.  Provide an explicit example of a matrix that attains this maximal number of free variables.    If is a matrix with five rows and three columns, then what is the minimum possible number of zero rows in any row echelon form of ?  Provide an explicit example of a matrix that attains this minimal number of zero rows.     "
},
{
  "id": "d_free-leading",
  "level": "2",
  "url": "s_solving.html#d_free-leading",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Free and leading variables.",
  "body": " Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.   "
},
{
  "id": "s_solving_eg_free-leading",
  "level": "2",
  "url": "s_solving.html#s_solving_eg_free-leading",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.   "
},
{
  "id": "s_solving_rm_parametric",
  "level": "2",
  "url": "s_solving.html#s_solving_rm_parametric",
  "type": "Remark",
  "number": "1.3.3",
  "title": "Mandate.",
  "body": " Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation format of or the parametric equation format of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.  "
},
{
  "id": "d_consistent",
  "level": "2",
  "url": "s_solving.html#d_consistent",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Consistent and inconsistent systems.",
  "body": " Consistent and inconsistent systems  consistent  inconsistent   A linear system is consistent if it has at least one solution; it is inconsistent if it has no solutions.   "
},
{
  "id": "proc_solveSystem",
  "level": "2",
  "url": "s_solving.html#proc_solveSystem",
  "type": "Procedure",
  "number": "1.3.5",
  "title": "Solving linear systems.",
  "body": " Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.    Step 1  Apply Gaussian elimination to reduce to an equivalent system in row echelon form.    Step 2  Let be the augmented matrix associated to . If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Step 3  Determine which if any of the unknowns are free variables of .    Step 4  If there are no free variables, solve for each unknown using back-substitution. In this case, there is a unique solution to : , contains exactly one element.  Otherwise, let be the leading variables of , and let be the free variables. Back-substitution allows us to express each leading variable in terms of the free variables. In other words, we can write , where each is a linear expression in the free variables. Each solution of thus corresponds to a unique variable assignment of the form , where are any real numbers.     "
},
{
  "id": "ss_solveSystem-6",
  "level": "2",
  "url": "s_solving.html#ss_solveSystem-6",
  "type": "Proof",
  "number": "1.3.2.1",
  "title": "",
  "body": " First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.   Case 1: no free variables   Suppose in Step 3 you determine that there are no free variables. Then each of the first columns of has a leading one in it. If follows that for each the -th equation of is of the form Since does not have a leading one in the last column, it follows that all equations beyond the -th equation are of the form , and as such may be disregarded since they are satisfied by any choice of the . The remaining system of equations in unknowns can be solved by back-substitution, yielding a unique solution of the form Do not concern yourself overly with the exact formulas. The important point here is that once we know there is a unique assignment of the variables that satisfies the system, allows us to solve for in terms of the the , . As such working our way up from the last equation, we find there is a unique solution to the system.     Case 2: free variables  Suppose now that are the leading variables of , and are the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to solve for each leading variable as a function of the free variables: This new system of equations clearly has the same set of solutions as (and ), since it was obtained from by deleting zero rows of and using only addition and subtraction operations. Furthermore, it is clear that any assignment of the free variables extends uniquely to the solution of that further assigns . The idea behind uniqueness here, is that once you assign values to the free variables, the values of the leading variables are completely determined by the equations .  Lastly, we show that every solution of (and ) is obtained in this way. Suppose is a solution. According to the discussion above must be the unique solution to corresponding to the free variable assignment and corresponding leading variable assignment .   "
},
{
  "id": "ss_GE_video_examples-2-1",
  "level": "2",
  "url": "s_solving.html#ss_GE_video_examples-2-1",
  "type": "Figure",
  "number": "1.3.6",
  "title": "Video: solving linear systems",
  "body": " Video: solving linear systems  Video: solving linear systems   "
},
{
  "id": "ss_GE_video_examples-2-2",
  "level": "2",
  "url": "s_solving.html#ss_GE_video_examples-2-2",
  "type": "Figure",
  "number": "1.3.7",
  "title": "Video: solving linear systems 2",
  "body": " Video: solving linear systems 2  Video: solving linear systems 2   "
},
{
  "id": "sage_solve_system",
  "level": "2",
  "url": "s_solving.html#sage_solve_system",
  "type": "Sage example",
  "number": "2",
  "title": "Solving linear systems.",
  "body": " Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in . We will elaborate this method further in    "
},
{
  "id": "c_qualitative",
  "level": "2",
  "url": "s_solving.html#c_qualitative",
  "type": "Corollary",
  "number": "1.3.8",
  "title": "<span class=\"process-math\">\\(0\\text{,}\\)<\/span> <span class=\"process-math\">\\(1\\text{,}\\)<\/span> or <span class=\"process-math\">\\(\\infty\\)<\/span>-many solutions.",
  "body": " , , or -many solutions   Let be a linear system of equations, let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:    If has a leading one in its last column, then has no solutions.    If does not have a leading one in its last column and has no free variables, then has a unique solution.    If does not have a leading one in its last column and has a free variable, then has infinitely many solutions.     "
},
{
  "id": "fig_decision_tree",
  "level": "2",
  "url": "s_solving.html#fig_decision_tree",
  "type": "Figure",
  "number": "1.3.9",
  "title": "Decision tree for number of solutions to a system",
  "body": " Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system with augmented matrix in row echelon form.     "
},
{
  "id": "s_solving_homogeneous",
  "level": "2",
  "url": "s_solving.html#s_solving_homogeneous",
  "type": "Corollary",
  "number": "1.3.10",
  "title": "Solutions to homogeneous equations.",
  "body": " Solutions to homogeneous equations   Fix a homogeneous linear system in variables. There are two possibilities:   if all the variables are leading variables, then the system has a unique solution (i.e., solution);    if there is a free variable, then the system has infinitely many solutions.      "
},
{
  "id": "s_solving_ex-1-2",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-2",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": "  Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix to reduced row echelon form. The reduced matrix is:              (e) How many solutions does the system have? If infinitely many, enter \"Infinity\".  (f) What are the solutions to the system?  If there are no solutions, write \"No Solution\" or \"None\" for each answer. If there are infinitely many solutions let and solve for in terms of .                                                                                                                                                 "
},
{
  "id": "s_solving_ex-1-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-3",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": "  Solve the following system using augmented matrix methods:  (a) The initial matrix is:                      (b) First, perform the Row Operation . The resulting matrix is:                      (c) Next, perform the operations   .  The resulting matrix is:                      (d) Finish simplifying the augmented matrix down to reduced row echelon form. The reduced matrix is:                      Remember: This matrix must be simplified all the way to reduced form.  (e) How many solutions does the system have? If infinitely many, enter \"Infinity\". If none, enter 0.  (f) What are the solutions of the system?        Note: In part (f), if there are no solutions, write \"No Solution\" or \"None\" in the answer blank after each equal sign. If there are infinitely many solutions, and the solution set describes a line (that is, if there is only one free variable), set and solve for the remaining variables in terms of . If there are infinitely many solutions, and the solution set describes a plane (that is, if the solution set has two free variables), set the variables and , and then solve for in terms of and .                                                                                                                                                                                                                                                                          "
},
{
  "id": "s_solving_ex-1-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-4",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": "  Solve  = , = , = , = .                          "
},
{
  "id": "s_solving_ex-1-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-5",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "",
  "body": "  Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                    "
},
{
  "id": "s_solving_ex-2-2-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-3",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "",
  "body": "     We saw in that the system is equivalent to a system with augmented matrix . The row echelon matrix tells us that is the only free variable of . Back substitution then yields the parametric equation description: . Thus the set of solutions is .  "
},
{
  "id": "s_solving_ex-2-2-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-4",
  "type": "Exercise",
  "number": "1.3.3.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-2-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-5",
  "type": "Exercise",
  "number": "1.3.3.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-2-6",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-6",
  "type": "Exercise",
  "number": "1.3.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-2-7",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-7",
  "type": "Exercise",
  "number": "1.3.3.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_solving_ex-2-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-3",
  "type": "Exercise",
  "number": "1.3.3.10",
  "title": "",
  "body": " For each system below determine all values of for which the system below has (a) no solutions, (b) a unique solution, and (c) infinitely many solutions.            "
},
{
  "id": "s_solving_ex-2-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-4",
  "type": "Exercise",
  "number": "1.3.3.11",
  "title": "",
  "body": " Show that a linear system with more unknowns than equations has either 0 solutions or infinitely many solutions.  "
},
{
  "id": "s_solving_ex-2-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-5",
  "type": "Exercise",
  "number": "1.3.3.12",
  "title": "",
  "body": " True or false. If true, provide a proof; if false, provide an explicit counterexample.    Every matrix has a unique row echelon form.    Any homogeneous linear system with more unknowns than equations has infinitely many solutions.    If a homogeneous linear system of equations in unknowns has a corresponding augmented matrix with a reduced row echelon form containing leading ones, then the linear system has the unique solution .    All leading ones in of a matrix in row echelon form must occur in distinct columns.    If the reduced row echelon form of the augmented matrix for a linear system has a zero row, then the system must have infinitely many solutions.    If a linear system has more unknowns than equations, then it must have infinitely many solutions.    "
},
{
  "id": "s_solving_ex-2-6",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-6",
  "type": "Exercise",
  "number": "1.3.3.13",
  "title": "",
  "body": " Interpret each matrix below as an augmented matrix of a linear system. Asterisks represent an unspecified real number. For each matrix, determine whether the corresponding system is consistent or inconsistent. If the system is consistent, decide further whether the solution is unique or not. If there is not enough information answer inconclusive and back up your claim by giving an explicit example where the system is consistent, and an explicit example where the system is inconsistent.                        "
},
{
  "id": "s_solving_ex-2-7",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-7",
  "type": "Exercise",
  "number": "1.3.3.14",
  "title": "",
  "body": " What condition must and satisfy in order for the system below to be consistent? Express your answer as an equation involving and .   "
},
{
  "id": "s_solving_ex-2-8",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-8",
  "type": "Exercise",
  "number": "1.3.3.15",
  "title": "",
  "body": " Solve the system of equations below for , , and .    First replace the given nonlinear system with a linear one using a change of variable substitution.  "
},
{
  "id": "s_solving_ex-2-9",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-9",
  "type": "Exercise",
  "number": "1.3.3.16",
  "title": "",
  "body": " If is a matrix with three rows and five columns, then what is the maximum possible number of leading ones in its reduced row echelon form? Justify your answer.  Provide an explicit example of a matrix that attains this maximum number of leading ones.  "
},
{
  "id": "s_solving_ex-2-10",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-10",
  "type": "Exercise",
  "number": "1.3.3.17",
  "title": "",
  "body": " If is a matrix with three rows and six columns, then what is the maximum possible number of free variables in the general solution of the linear system with augmented matrix ? Justify your answer.  Provide an explicit example of a matrix that attains this maximal number of free variables.  "
},
{
  "id": "s_solving_ex-2-11",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-11",
  "type": "Exercise",
  "number": "1.3.3.18",
  "title": "",
  "body": " If is a matrix with five rows and three columns, then what is the minimum possible number of zero rows in any row echelon form of ?  Provide an explicit example of a matrix that attains this minimal number of zero rows.  "
},
{
  "id": "s_matrix",
  "level": "1",
  "url": "s_matrix.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix arithmetic",
  "body": " Matrix arithmetic   Matrices played a small supporting role in our discussion of linear systems in . In this chapter we bring them to center stage and give them a full-blown treatment as independent mathematical objects in their own right.  Like any mathematical entity worth its salt, matrices can be employed in a vast multitude of ways. As such it is important to allow matrices to transcend their humble beginnings in this course as boiled down systems of linear equations. We record this observation as another principle.  Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.       The basics We begin with some elementary definitions about matrices, matrix equality, and special types of matrices. As the next definition makes clear, a matrix is just an ordered sequence of numbers arranged in a very particular manner.  Matrix  matrix   A (real) matrix is a rectangular array of real numbers . The number located in the -th row and -th column of is called the -entry (or -th entry ) of .  A matrix with rows and columns is said to have size (or dimension ) .  We will typically use capital letters near the beginning of the alphabet (  , ) to denote matrices.    The displayed matrix in is costly both in the space it takes up in show, and the time it takes to write down or typeset. Accordingly we introduce two somewhat complementary forms of notation to help describe matrices.     Matrix whose -th entry is     -th entry of the matrix      Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry ( -th row, -th column) is . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .    Thus if , then for all and .      The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .    In everyday language the notion of equality is taken as self-evident. Two things are equal if they are the same. What more is there to say? In mathematics, each time we introduce a new type of mathematical object (e.g., sets, functions, -tuples, etc.) we need to spell out exactly what we mean for two things to be considered equal. We do so now with matrices.   Matrix equality   Let and be matrices of dimension and , respectively. The two matrices are equal if    and ;     for all and .     In other words, we have if and only if and have the same shape, and each entry of is equal to the corresponding entry of .      The matrices are not equal to one another, despite their having the same entries that appear roughly in the same order. In this case equality does not hold as and have different shapes: is , and is .  The matrices and have the same dimension, but are not equal since .     Square matrices, row vectors, column vectors, zero matrices  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    A matrix is square if its dimension is . The diagonal of a square matrix consists of the entries for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .  The  zero matrix , denoted , is the matrix of that dimension, all of whose entries are zero: i.e., for all and .  When the actual dimension is not significant, we will often drop the subscript and write simply for a zero matrix of suitable dimension.     Matrices as collections of columns\/rows   Let be an matrix. We will often think of as a collection of columns, in which case we write , where is the column vector consisting of the entries of the -th column of : , . Similarly, when we think of as a collection of rows, we write , where is the row vector consisting of the entries of the -th row of : , . The vertical and horizontal lines in and are used to emphasize that the are columns vectors and the are row vectors.     Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.      Addition, subtraction and scalar multiplication  We now lay out the various algebraic operations we will use to combine and transform matrices; we refer to the use of these operations loosely as matrix arithmetic . Some of these operations resemble familiar operations from real arithmetic in terms of their notation and definition. Do not be lulled into complacency! These are new operations defined for a new class of mathematical objects, and must be treated carefully. In particular, pay close attention to (a) exactly what type of mathematical objects serve as inputs for each operation (the ingredients of the operation), and (b) what type of mathematical object is outputted.   Matrix addition and subtraction  matrix addition  matrix subtraction     Matrix addition is the operation defined as follows: given two matrices and , we define their sum to be the matrix . In other words is the matrix satisfying for all and .   Matrix subtraction is the operation defined as follows: given two matrices and , we define their difference to be the matrix . In other words is the matrix satisfying for all and .     Observe that matrix addition\/subtraction is not defined for any pair of matrices. The ingredients of matrix addition (or subtraction) are two matrices of the same dimension ; and the output is a third matrix of this common dimension.    Scalar multiplication of matrices  matrix scalar multiplication   Given any matrix and any constant , we define . In other words, is the matrix obtained by scaling each of the entries of by the constant .  We call a scalar multiple of . Furthermore, to help distinguish between matrices and real numbers, we will refer to elements of as scalars .     Whereas matrix addition and subtraction closely resemble corresponding operations involving real numbers, there is no obvious real arithmetic analogue to matrix scalar multiplication. In particular, notice how matrix scalar multiplication is a sort of hybrid operation that combines mathematical objects of two very different natures: a real number (or scalar) on the one hand, and a matrix on the other.   We call the result of applying a sequence of matrix additions and scalar multiplications a linear combination of matrices .   Linear combination of matrices  linear combination of matrices   Given matrices of the same dimension, and scalars , the expression is called a linear combination of matrices . The scalars are called the coefficients of the linear combination.      Let and . Compute .     .      Show that can be expressed as a linear combination of the matrices .    We must solve the matrix (or row vector) equation for the scalars . Computing the linear combination on the left yields the matrix equation . Using the definition of matrix equality ( ), we get the system of equations . Using Gaussian elimination we find that there is a unique solution to this system: namely, . We conclude that .     Let be matrices, An easy induction argument on shows that for any scalars we have for all , . (See . )     Matrix multiplication  So how do we define the product of two matrices? Looking at the previous operations, you might have guessed that we should define the product of two matrices by taking the product of their corresponding entries. Not so!   Matrix multiplication  matrix multiplication     Matrix multiplication is the operation defined as follows: given an matrix and an matrix , we define their product to be the matrix whose -th entry is given by the formula for all and .     Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .       Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :     Matrix multiplication  Consider the matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .   The formula for the -th entry of a matrix product can be succinctly described as the dot product of the -th row of with the -th column of . You may have already met the dot product in the special case of - and -tuples; the definition generalizes easily to -tuples for any positive integer . We will have a lot more to say about the dot product and related operations in . For now we will provide an official definition so that we can conveniently describe matrix multiplication in terms of dot products.   Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .      Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.     Matrix multiplication via dot product  Consider the matrices . The two rows of (in tuple form) are . The two columns of (in tuple form) are . Using the dot product description of matrix multiplication, we compute .   The definition of a matrix product is undoubtedly more complicated than you expected, and seems to come completely out of the blue. All of this will make more sense once we begin thinking of matrices as defining certain functions . Our formula for the entries of is chosen precisely so that this new matrix corresponds to the composition of the functions and : so that . (See .) Under this interpretation, the ponderous restriction on the dimensions of the ingredient matrices ensures that the two functions and can be composed.   Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.      Alternative methods of multiplication  In addition to the given definition of matrix multiplication, we will make heavy use of two further ways of computing matrix products, called the column and row methods of matrix multiplication.   Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .      We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .       amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .    Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .      The proof is very similar to that of and is left to the reader.     Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.      Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have        Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.      Video example of matrix multiplication   Video: three methods of matrix multiplication  Video: three methods of matrix multiplication       Transpose of a matrix  We end this section with one last operation, matrix transposition . We will not make much use of this operation until later, but this is as good a place as any to introduce it.   Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .     Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .        Let ; then .  Let , then .     Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.       WeBWork Exercises    Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If A has dimensions and B has dimensions , then AB has dimensions .    If A has dimensions and B has dimensions , then the 3rd row, 4th column entry of AB is obtained by multiplying the 3rd column of A by the 4th row of B.           Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    A         If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                         Determine and such that                        Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.              Written Exercises   For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .      Let  . Compute the following matrices, or else explain why the given expression is not well defined.                     Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .         Using expansion by columns, the first column of is given by times the first column of . We compute        Use the row or column method to quickly compute the following product:    I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .    Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .    Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .     "
},
{
  "id": "princ_matrix_mantra",
  "level": "2",
  "url": "s_matrix.html#princ_matrix_mantra",
  "type": "Mantra",
  "number": "2.1.1",
  "title": "Matrix mantra.",
  "body": " Matrix mantra   A matrix is a matrix is a matrix.  Not every matrix should be thought of as an augmented matrix associated to a linear system.   "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_matrix.html#d_matrix",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Matrix.",
  "body": " Matrix  matrix   A (real) matrix is a rectangular array of real numbers . The number located in the -th row and -th column of is called the -entry (or -th entry ) of .  A matrix with rows and columns is said to have size (or dimension ) .  We will typically use capital letters near the beginning of the alphabet (  , ) to denote matrices.   "
},
{
  "id": "d_matrix_notation",
  "level": "2",
  "url": "s_matrix.html#d_matrix_notation",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "   Matrix whose -th entry is     -th entry of the matrix      Matrix-building notation  matrix matrix-building notation  The notation denotes the matrix whose -th entry ( -th row, -th column) is . When there is no danger of confusion, this notation is often shortened to .    Matrix entry notation  matrix matrix entry notation  Given a matrix , the notation denotes the -th entry of .    Thus if , then for all and .   "
},
{
  "id": "ss_matrix_attributes-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_attributes-5",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": "  The matrix-building notation is often used simply to give names to the entries of an arbitrary matrix. However, it can also be used to describe a matrix whose -th entry is given by specified rule or formula.  For example, let , where . This is the matrix whose -th entry is . Thus . In this example we have and for .   "
},
{
  "id": "d_matrix_equality",
  "level": "2",
  "url": "s_matrix.html#d_matrix_equality",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Matrix equality.",
  "body": " Matrix equality   Let and be matrices of dimension and , respectively. The two matrices are equal if    and ;     for all and .     In other words, we have if and only if and have the same shape, and each entry of is equal to the corresponding entry of .   "
},
{
  "id": "ex_inequality",
  "level": "2",
  "url": "s_matrix.html#ex_inequality",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  The matrices are not equal to one another, despite their having the same entries that appear roughly in the same order. In this case equality does not hold as and have different shapes: is , and is .  The matrices and have the same dimension, but are not equal since .   "
},
{
  "id": "d_square_matrices",
  "level": "2",
  "url": "s_matrix.html#d_square_matrices",
  "type": "Definition",
  "number": "2.1.7",
  "title": "Square matrices, row vectors, column vectors, zero matrices.",
  "body": " Square matrices, row vectors, column vectors, zero matrices  matrix square   matrix row vector   matrix column vector   matrix diagonal of square matrix  matrix zero matrix    the zero matrix    A matrix is square if its dimension is . The diagonal of a square matrix consists of the entries for .  A matrix is called a row vector . The -th entry of a row vector is denoted   An matrix , is called a column vector . The -th entry of a column vector is denoted .  The  zero matrix , denoted , is the matrix of that dimension, all of whose entries are zero: i.e., for all and .  When the actual dimension is not significant, we will often drop the subscript and write simply for a zero matrix of suitable dimension.   "
},
{
  "id": "rm_matrices_as_row_columns",
  "level": "2",
  "url": "s_matrix.html#rm_matrices_as_row_columns",
  "type": "Remark",
  "number": "2.1.8",
  "title": "Matrices as collections of columns\/rows.",
  "body": " Matrices as collections of columns\/rows   Let be an matrix. We will often think of as a collection of columns, in which case we write , where is the column vector consisting of the entries of the -th column of : , . Similarly, when we think of as a collection of rows, we write , where is the row vector consisting of the entries of the -th row of : , . The vertical and horizontal lines in and are used to emphasize that the are columns vectors and the are row vectors.   "
},
{
  "id": "sage_matrix_entries_rows_cols",
  "level": "2",
  "url": "s_matrix.html#sage_matrix_entries_rows_cols",
  "type": "Sage example",
  "number": "3",
  "title": "Matrix entries, rows, and columns.",
  "body": " Matrix entries, rows, and columns  Sage syntax for accessing specific entries of a matrix is similar in spirit to our matrix entry notation. However, as with all things Python, we always count from 0. Thus if A is assigned to a matrix in Sage, A[i,j] is its -th entry.   Prescribed subsets of matrix entries are obtained via slicing methods: for example, A[a:b, c:d] returns the collection of entries with and , arranged as a matrix.   Leaving the left or right side of : blank in this notation removes the corresponding restriction bound (left or right) from the index in question. Thus A[2, :] returns the third row of , and A[1:, 3] returns the portion of the fourth column of beginning with its second entry.   Alternatively, we can obtain a list of all rows or columns of using the the methods rows() and columns() .   Use the empty cell below to try out some of these commands.   "
},
{
  "id": "d_matrix_add_subtract",
  "level": "2",
  "url": "s_matrix.html#d_matrix_add_subtract",
  "type": "Definition",
  "number": "2.1.9",
  "title": "Matrix addition and subtraction.",
  "body": " Matrix addition and subtraction  matrix addition  matrix subtraction     Matrix addition is the operation defined as follows: given two matrices and , we define their sum to be the matrix . In other words is the matrix satisfying for all and .   Matrix subtraction is the operation defined as follows: given two matrices and , we define their difference to be the matrix . In other words is the matrix satisfying for all and .   "
},
{
  "id": "ss_matrix_arithmetic-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-4",
  "type": "Remark",
  "number": "2.1.10",
  "title": "",
  "body": " Observe that matrix addition\/subtraction is not defined for any pair of matrices. The ingredients of matrix addition (or subtraction) are two matrices of the same dimension ; and the output is a third matrix of this common dimension.  "
},
{
  "id": "d_matrix_scalar_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_scalar_mult",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Scalar multiplication of matrices.",
  "body": " Scalar multiplication of matrices  matrix scalar multiplication   Given any matrix and any constant , we define . In other words, is the matrix obtained by scaling each of the entries of by the constant .  We call a scalar multiple of . Furthermore, to help distinguish between matrices and real numbers, we will refer to elements of as scalars .   "
},
{
  "id": "ss_matrix_arithmetic-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-6",
  "type": "Remark",
  "number": "2.1.12",
  "title": "",
  "body": " Whereas matrix addition and subtraction closely resemble corresponding operations involving real numbers, there is no obvious real arithmetic analogue to matrix scalar multiplication. In particular, notice how matrix scalar multiplication is a sort of hybrid operation that combines mathematical objects of two very different natures: a real number (or scalar) on the one hand, and a matrix on the other.  "
},
{
  "id": "d_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#d_matrix_lin_comb",
  "type": "Definition",
  "number": "2.1.13",
  "title": "Linear combination of matrices.",
  "body": " Linear combination of matrices  linear combination of matrices   Given matrices of the same dimension, and scalars , the expression is called a linear combination of matrices . The scalars are called the coefficients of the linear combination.   "
},
{
  "id": "ss_matrix_arithmetic-9",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-9",
  "type": "Example",
  "number": "2.1.14",
  "title": "",
  "body": "  Let and . Compute .     .   "
},
{
  "id": "ss_matrix_arithmetic-10",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-10",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": "  Show that can be expressed as a linear combination of the matrices .    We must solve the matrix (or row vector) equation for the scalars . Computing the linear combination on the left yields the matrix equation . Using the definition of matrix equality ( ), we get the system of equations . Using Gaussian elimination we find that there is a unique solution to this system: namely, . We conclude that .   "
},
{
  "id": "rm_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#rm_entry_lin_comb",
  "type": "Remark",
  "number": "2.1.16",
  "title": "",
  "body": " Let be matrices, An easy induction argument on shows that for any scalars we have for all , . (See . )  "
},
{
  "id": "d_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_mult",
  "type": "Definition",
  "number": "2.1.17",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  matrix multiplication     Matrix multiplication is the operation defined as follows: given an matrix and an matrix , we define their product to be the matrix whose -th entry is given by the formula for all and .   "
},
{
  "id": "fig_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#fig_matrix_mult",
  "type": "Figure",
  "number": "2.1.18",
  "title": "Visualizing matrix multiplication",
  "body": " Visualizing matrix multiplication  In , the -th entry is computed by moving across the -th row of and down the -th column of .     "
},
{
  "id": "ss_matrix_mult-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-5",
  "type": "Remark",
  "number": "2.1.19",
  "title": "Size and matrix multiplication.",
  "body": " Size and matrix multiplication  Observe how, like addition, matrix multiplication is not defined for any pair of matrices: there must be a certain agreement in their dimensions.  In more detail, for the product of and to be defined, we need . In other words we need the inner dimensions of and to be equal: . If this condition is met, the dimension of the resulting matrix is determined by the outer dimensions of and . Schematically, you can think of the inner dimensions as being canceled out :   "
},
{
  "id": "eg_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult",
  "type": "Example",
  "number": "2.1.20",
  "title": "Matrix multiplication.",
  "body": " Matrix multiplication  Consider the matrices . Since the inner dimensions of and agree, we can form the product matrix , which has dimension . Let for all . Using , we compute . We conclude that .  "
},
{
  "id": "d_dot_product",
  "level": "2",
  "url": "s_matrix.html#d_dot_product",
  "type": "Definition",
  "number": "2.1.21",
  "title": "Dot product.",
  "body": " Dot product  dot product    dot product    Given -tuples and , their dot product , denoted , is defined as .   "
},
{
  "id": "th_matrix_mult_dot_product",
  "level": "2",
  "url": "s_matrix.html#th_matrix_mult_dot_product",
  "type": "Theorem",
  "number": "2.1.22",
  "title": "",
  "body": "  Let be an matrix, and let be an matrix. For all , let be the -th row of ; and for all let be the -th column of . For all , we have , where and are treated as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .    Fix a pair with and . Considered as -tuples, the -th row of and -th column of are given as . We have , as claimed.   "
},
{
  "id": "ss_matrix_mult-10",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-10",
  "type": "Example",
  "number": "2.1.23",
  "title": "Matrix multiplication via dot product.",
  "body": " Matrix multiplication via dot product  Consider the matrices . The two rows of (in tuple form) are . The two columns of (in tuple form) are . Using the dot product description of matrix multiplication, we compute .  "
},
{
  "id": "ss_matrix_mult-12",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-12",
  "type": "Sage example",
  "number": "4",
  "title": "Matrix arithmetic.",
  "body": " Matrix arithmetic  We use + and * for matrix addition and multiplication.   As evidence of Sage's flexibility, the same symbol * is also used for scalar multiplication.   Edit the cell below to practice these operations.   "
},
{
  "id": "th_column_method",
  "level": "2",
  "url": "s_matrix.html#th_column_method",
  "type": "Theorem",
  "number": "2.1.24",
  "title": "Column method of matrix multiplication.",
  "body": " Column method of matrix multiplication  matrix multiplication column method   Let and . The column method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th column of , considered as a column vector. Then .    Step 2  Let be the -th column of , considered as a column vector. Given any column vector we have .      We prove the equalities in both steps separately.   Proof of Step 1  We must show , where . First we show and have the same size. By definition of matrix multiplication, is . By construction has columns and its -th column is . Since and have size and , respectively, has size . Thus each of the columns of is an column vector. It follows that is , as desired.  Next we show that for all , . Since the -th entry of is the -th entry of the -th column of , we have .    Proof of Step 2  We must show that , where . The usual argument shows that both and are column vectors. It remains only to show that the -th entry of the column is equal to the -th entry of for all . For any such we have .    "
},
{
  "id": "s_column_row_method-4",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-4",
  "type": "Remark",
  "number": "2.1.25",
  "title": "",
  "body": "  amounts to a two-step process for computing an arbitrary matrix product .  The first statement (Step 1) tells us that the -th column of the matrix can be obtained by computing the product of with the -th column of .  The second statement (Step 2) tells us that each product can itself be computed as a certain linear combination of the columns of with coefficients drawn from .  A similar remark applies to computing matrix products using the row method, as described below in .  "
},
{
  "id": "th_row_method",
  "level": "2",
  "url": "s_matrix.html#th_row_method",
  "type": "Theorem",
  "number": "2.1.26",
  "title": "Row method of matrix multiplication.",
  "body": " Row method of matrix multiplication  matrix multiplication row method   Let and . The row method of matrix multiplication computes using the two steps below.    Step 1  Let be the -th row of . Then .    Step 2  Let be the -th row of . Given any row vector we have .      The proof is very similar to that of and is left to the reader.   "
},
{
  "id": "s_matrix_ex_product",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex_product",
  "type": "Example",
  "number": "2.1.27",
  "title": "Column and row methods.",
  "body": " Column and row methods   Let and   Compute using (a) the definition of matrix multiplication, (b) the column method, (c) the row method.      Using the definition, we see easily that     Let be the columns of , and let be the columns of . We have     Now let be the rows of , and let be the rows of . We have      "
},
{
  "id": "s_column_row_method-7",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-7",
  "type": "Sage example",
  "number": "5",
  "title": "Column and row methods.",
  "body": " Column and row methods  Let's verify the validity of the column and row methods using Sage in some specific examples. Below we generate random integer matrices and of dimension and , respectively, and compute their product .   Let's check that the -th column of is equal to the product of with the -th column of .   Alternatively, we can visually confirm these equalities using the display of in the first cell above. Observe that the result of A*colsB[i] is displayed by Sage as a tuple, though technically for us this is a column vector.   Next, let's verify that the result of multiplying and the -th column of is the corresponding linear combination of the columns of given by the coefficients of this column.   Now use the Sage cells below to demonstrate the validity of the row method for the product . Simply modify the code in the two cells above to reflect the row method, as opposed to the column method.    "
},
{
  "id": "fig_vid_matrix_mult_methods",
  "level": "2",
  "url": "s_matrix.html#fig_vid_matrix_mult_methods",
  "type": "Figure",
  "number": "2.1.28",
  "title": "Video: three methods of matrix multiplication",
  "body": " Video: three methods of matrix multiplication  Video: three methods of matrix multiplication   "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "2.1.29",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  matrix transposition  transpose   Given an matrix its transpose is the matrix whose -entry is the -th entry of . In other words, is the matrix satisfying for all and .   "
},
{
  "id": "s_matrix-7-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-4",
  "type": "Remark",
  "number": "2.1.30",
  "title": "",
  "body": " Given a matrix we can give a column- or row-based description of as follows:    is the matrix whose -th row is the -th column of .     is the matrix whose -th column is the -th row of .     "
},
{
  "id": "s_matrix-7-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-5",
  "type": "Example",
  "number": "2.1.31",
  "title": "",
  "body": "  Let ; then .  Let , then .   "
},
{
  "id": "s_matrix-7-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-6",
  "type": "Sage example",
  "number": "6",
  "title": "Matrix transposition.",
  "body": " Matrix transposition  Matrix transposition is implemented in Sage as the transpose() method. In the cell below we (a) choose random integers , (b) choose a random matrix with integer entries, and (c) compute the transpose of .   As usual, experiment with the Sage cell below.   "
},
{
  "id": "s_matrix_ex-1-2",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-2",
  "type": "Exercise",
  "number": "2.1.6.1",
  "title": "",
  "body": "  Enter T or F depending on whether the statement is true or false. (You must enter T or F -- True and False will not work.)    If A has dimensions and B has dimensions , then AB has dimensions .    If A has dimensions and B has dimensions , then the 3rd row, 4th column entry of AB is obtained by multiplying the 3rd column of A by the 4th row of B.        "
},
{
  "id": "s_matrix_ex-1-3",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-3",
  "type": "Exercise",
  "number": "2.1.6.2",
  "title": "",
  "body": "  Matrix Products: Consider the matrices   Of the possible matrix products ,  which make sense?    A      "
},
{
  "id": "s_matrix_ex-1-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-4",
  "type": "Exercise",
  "number": "2.1.6.3",
  "title": "",
  "body": "  If A is B is and C is then:  a) BA has dimension    b) CB has dimension    c) AC has dimension                                      "
},
{
  "id": "s_matrix_ex-1-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-5",
  "type": "Exercise",
  "number": "2.1.6.4",
  "title": "",
  "body": "  Determine and such that                     "
},
{
  "id": "s_matrix_ex-1-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-1-6",
  "type": "Exercise",
  "number": "2.1.6.5",
  "title": "",
  "body": "  Determine the value(s) of such that   =  Note: If there is more than one value separate them by commas.           "
},
{
  "id": "s_matrix_ex-2-2",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-2",
  "type": "Exercise",
  "number": "2.1.6.6",
  "title": "",
  "body": " For each part below write down the most general matrix satisfying the given condition (use letter names ,etc. for entries).     for all .     for all      for .    "
},
{
  "id": "s_matrix_ex-2-3",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-3",
  "type": "Exercise",
  "number": "2.1.6.7",
  "title": "",
  "body": " Let  . Compute the following matrices, or else explain why the given expression is not well defined.                   "
},
{
  "id": "s_matrix_ex-2-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-4",
  "type": "Exercise",
  "number": "2.1.6.8",
  "title": "",
  "body": " Let . Compute the following using either the row or column method of matrix multiplication. Make sure to show how you are using the relevant method.   the first column of ;    the second row of ;    the third column of .         Using expansion by columns, the first column of is given by times the first column of . We compute      "
},
{
  "id": "s_matrix_ex-2-5",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-5",
  "type": "Exercise",
  "number": "2.1.6.9",
  "title": "",
  "body": " Use the row or column method to quickly compute the following product:    I'll just describe the row method here.  Note that the rows of are all identical, and equal to . From the row method it follows that each row of is given by .  Thus the rows of are all identical, and the row method computes the product above by taking the corresponding alternating sum of the rows of : .  Thus is the the matrix, all of whose rows are .  "
},
{
  "id": "s_matrix_ex-2-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex-2-6",
  "type": "Exercise",
  "number": "2.1.6.10",
  "title": "",
  "body": " Each of the matrices below performs a specific row operation when multiplying a matrix on the left; i.e., the matrix is the result of performing a certain row operation on the matrix . Use the row method of matrix multiplication to decide what row operation each performs. .  "
},
{
  "id": "ex_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#ex_entry_lin_comb",
  "type": "Exercise",
  "number": "2.1.6.11",
  "title": "",
  "body": " Let be an integer. Prove, by induction on , that for any matrices and scalars , we have for all , .  "
},
{
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix algebra",
  "body": " Matrix algebra   The last section was devoted to what might be called the arithmetic of matrices. We learned the basic operations of adding, multiplying, scaling, and transposing matrices. In this section we tackle the algebra of matrices. We will investigate the properties enjoyed (and not enjoyed) by our matrix operations, and will show how to use these operations to solve matrix equations.  As you learn about matrix algebra, always keep in mind your old friend, real number algebra. For the most part these two algebraic systems closely resemble one another, as below makes clear. However, there are two crucial points where they differ (see ): two important properties of real number algebra that do not hold for matrices. The consequences of these two simple aberrations are far-reaching and imbue matrix algebra with a fascinating richness in comparison to real number algebra.    Properties of matrix addition, multiplication and scalar multiplication   The following properties hold for all matrices and scalars for which the given expression makes sense.   Addition commutative law       Addition associative law       Multiplication associative law       Left-distributive law       Right-distributive law       Scaling distributive law       Another scaling distributive law       Scaling associative law       Scaling commutative law   .       How does one actually prove one of these properties? These are all matrix equalities of the form , so according to the matrix equality definition we must show (1) that the matrices and have the same dimension, and (2) that for all . The proof below illustrates this technique for the multiplication associative law of .   Proof of (iii)  We prove only the multiplication associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  (1) The usual observation about inner and outer dimensions shows that both and have dimension .  (2) Given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .   Like real number algebra, we can identify some special matrices that act as additive identities and multiplciative identities ; and every matrix has an additive inverse . What we mean here is spelled out in detail in .   Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Given an matrix , its additive inverse  is defined as .     Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When the size of the identity matrix is not important, we will often denote it simply as .     Additive identities, additive inverses, and multiplicative identities     Additive identities  The zero matrix is an additive identity for matrices in the following sense: for any matrix we have .    Additive inverses  For any matrix we have .    Multiplicative identities  The identity matrix is a multiplicative identity for matrices in the following sense: for any matrix we have .       Left as an exercise.    Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.      The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  .   Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .   The example in our warning above is but one instance of the general failure of the principle of multiplicative cancellation in matrix algebra. This in turn is a consequence of the following theorem, which identifies the two crucial places where matrix algebra differs significantly from real number algebra.   Matrix algebra abnormalities      Matrix multiplication is not commutative  For two matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .       This is a good place to point out that to prove an identity does not hold, it suffices to provide a single counterexample to that effect. We do so for each failed identity of in turn. There is no significance to the particular counterexamples chosen here, and indeed there are infinitely many counterexamples to choose from in both cases.   We have and thus .    Observe that . This is an example of two nonzero matrices whose product is the zero matrix.     An important consequence of the abnormality is that matrix algebra does not enjoy the property of multiplicative cancellation .   Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:        Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .      Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .   We end our foray into matrix algebra with some properties articulating how matrix transposition interacts with matrix addition, multiplication and scalar multiplication.   Properties of matrix transposition  The following properties hold for all matrices and scalars for which the given expression makes sense.                           We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .     Video examples: proving matrix equalities   Video: matrix multiplication is associative  Video: matrix multiplication is associative     Video: transpose property  Video: transpose property       WeBWork Exercises    Determine which of the following statements are true and which are false.    If and are matrices with sizes such that is square, then and must be square.    If and are square matrices of the same size, then .    If and is a column vector, then is a linear combination of the columns of .    If is a square matrix for which , then or .    If and are matrices such that and , then .            Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                             Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                 Written Exercises   In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .        We need both and to be for the expression to make sense. It is easy to see that and are both matrices. We must show for all , . We have .       Prove all three statements of .    In this exercise you will complete the proof of .    Prove .    Prove .    Prove .      Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .     For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .    Consider the matrix equation .   The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.   Find all satisfying .   Write and set up a system of linear equations in the unknowns .     "
},
{
  "id": "th_matrix_alg_props",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_alg_props",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Properties of matrix addition, multiplication and scalar multiplication.",
  "body": " Properties of matrix addition, multiplication and scalar multiplication   The following properties hold for all matrices and scalars for which the given expression makes sense.   Addition commutative law       Addition associative law       Multiplication associative law       Left-distributive law       Right-distributive law       Scaling distributive law       Another scaling distributive law       Scaling associative law       Scaling commutative law   .      "
},
{
  "id": "s_algebraic-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-5",
  "type": "Proof",
  "number": "2.2.1",
  "title": "Proof of (iii).",
  "body": " Proof of (iii)  We prove only the multiplication associative law . Let , , . To show , we must show (1) that and have the same dimension, and (2) that for all possible .  (1) The usual observation about inner and outer dimensions shows that both and have dimension .  (2) Given any with and , we have:   This proves that all entries of the two matrices are equal, and hence .  "
},
{
  "id": "d_matrix_add_inverse",
  "level": "2",
  "url": "s_algebraic.html#d_matrix_add_inverse",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Additive inverse of a matrix.",
  "body": " Additive inverse of a matrix  additive inverse of a matrix  matrix additive inverse    Additive inverse of    Given an matrix , its additive inverse  is defined as .   "
},
{
  "id": "d_identity_matrix",
  "level": "2",
  "url": "s_algebraic.html#d_identity_matrix",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Identity matrix.",
  "body": " Identity matrix  identity matrix  matrix identity matrix    inverse matrix    The identity matrix is the square matrix with ones along the diagonal and zeros everywhere else. In other words, for all and , we have . When the size of the identity matrix is not important, we will often denote it simply as .   "
},
{
  "id": "th_matrix_add_mult_ident",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_add_mult_ident",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "Additive identities, additive inverses, and multiplicative identities.",
  "body": " Additive identities, additive inverses, and multiplicative identities     Additive identities  The zero matrix is an additive identity for matrices in the following sense: for any matrix we have .    Additive inverses  For any matrix we have .    Multiplicative identities  The identity matrix is a multiplicative identity for matrices in the following sense: for any matrix we have .     "
},
{
  "id": "s_algebraic-10",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-10",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " Left as an exercise.  "
},
{
  "id": "c_matrix_additive_canc",
  "level": "2",
  "url": "s_algebraic.html#c_matrix_additive_canc",
  "type": "Corollary",
  "number": "2.2.5",
  "title": "Additive cancellation of matrices.",
  "body": " Additive cancellation of matrices   Given matrices , and , we have if and only if . Using logical notation:     As simple as this claim might seem, remember that we are dealing with a completely new algebraic system here. We will prove both implications of if and only if statement separately.   Proof:  We prove this via a chain of implications: .    Proof:  This direction is obvious: if and are equal matrices, then they remain equal when we add to each of them.    "
},
{
  "id": "s_algebraic-12",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-12",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " The algebraic importance of is that we can perform additive cancellation in matrix equations just as we do in real number algebra. For example, we can solve the matrix equation for as follows:  . "
},
{
  "id": "s_algebraic-13",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-13",
  "type": "Warning",
  "number": "2.2.7",
  "title": "",
  "body": " Though we can perform additive cancellation in matrix algebra, we can not always perform multiplicative cancellation . For example, consider the matrices . Check for yourself that , and yet . In other words, we cannot always cancel  from the matrix equation .  "
},
{
  "id": "th_matrix_abnormalities",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_abnormalities",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "Matrix algebra abnormalities.",
  "body": " Matrix algebra abnormalities      Matrix multiplication is not commutative  For two matrices and , we do not necessarily have .    Products of nonzero matrices may be equal to zero  If the product of two matrices is the zero matrix, we cannot conclude that one of matrices is the zero matrix. In logical notation: .      "
},
{
  "id": "th_matrix_cancel",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_cancel",
  "type": "Corollary",
  "number": "2.2.9",
  "title": "Failure of multiplicative cancellation.",
  "body": " Failure of multiplicative cancellation     Suppose matrices satisfy and . We cannot conclude that . In logical notation:     Suppose matrices satisfy and . We cannot conclude that . In logical notation:      "
},
{
  "id": "s_algebraic-19",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-19",
  "type": "Proof",
  "number": "2.2.3",
  "title": "",
  "body": " Again, we need only provide explicit counterexamples for each statement.    Let , , . Verify for yourself that . Thus , but clearly .    Let , , . We have . Thus , but .    "
},
{
  "id": "rm_cancel_failure",
  "level": "2",
  "url": "s_algebraic.html#rm_cancel_failure",
  "type": "Remark",
  "number": "2.2.10",
  "title": "",
  "body": " Mark well this important abnormality of matrix algebra. Confronted with a real number equation of the form , we have a deeply ingrained impulse to declare that either or . (If we're sloppy we may forget about that first possibility.) The corresponding maneuver for the matrix equation is simply not available to us, unless we know something more about .  "
},
{
  "id": "th_trans_props",
  "level": "2",
  "url": "s_algebraic.html#th_trans_props",
  "type": "Theorem",
  "number": "2.2.11",
  "title": "Properties of matrix transposition.",
  "body": " Properties of matrix transposition  The following properties hold for all matrices and scalars for which the given expression makes sense.                           We prove only the first statement. First observe that if is , then so is and . Then is by . Similarly, we see that is .  Next, given any with , , we have . Since the -entries of both matrices are equal for each , it follows that .   "
},
{
  "id": "fig_proof_assoc",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_assoc",
  "type": "Figure",
  "number": "2.2.12",
  "title": "Video: matrix multiplication is associative",
  "body": " Video: matrix multiplication is associative  Video: matrix multiplication is associative   "
},
{
  "id": "fig_proof_transp",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_transp",
  "type": "Figure",
  "number": "2.2.13",
  "title": "Video: transpose property",
  "body": " Video: transpose property  Video: transpose property   "
},
{
  "id": "s_algebraic_ex-1-2",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  Determine which of the following statements are true and which are false.    If and are matrices with sizes such that is square, then and must be square.    If and are square matrices of the same size, then .    If and is a column vector, then is a linear combination of the columns of .    If is a square matrix for which , then or .    If and are matrices such that and , then .        "
},
{
  "id": "s_algebraic_ex-1-3",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-3",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Let be a 5 by 8 matrix. Then is a by matrix, and is a by matrix.                          "
},
{
  "id": "s_algebraic_ex-1-4",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-4",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Let   Then   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                              "
},
{
  "id": "s_algebraic_ex-2-2",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-2",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .    Prove .        We need both and to be for the expression to make sense. It is easy to see that and are both matrices. We must show for all , . We have .     "
},
{
  "id": "s_algebraic_ex-2-3",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-3",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Prove all three statements of .  "
},
{
  "id": "s_algebraic_ex-2-4",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-4",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " In this exercise you will complete the proof of .    Prove .    Prove .    Prove .    "
},
{
  "id": "s_algebraic_ex-2-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-5",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": " Let an matrix. We define its square  as .    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .  Optional: can you describe in a parametric manner the set of all matrices satisfying ?    In real number algebra we know that . By contrast, show that there are infinitely many matrices satisfying .    In real number algebra we have the identity . Show that two matrices , satisfy if and only if .     For (a) set , compute , set this matrix equal to , and try and find some solutions to the corresponding (nonlinear) system of four equations in the unknowns .  Similar hint for (b), only now set .  "
},
{
  "id": "s_algebraic_ex-2-6",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-2-6",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": " Consider the matrix equation .   The following chain of implications is invalid. . For each implication in the chain, explain why it is valid or invalid.   Find all satisfying .   Write and set up a system of linear equations in the unknowns .  "
},
{
  "id": "s_invertible_matrices",
  "level": "1",
  "url": "s_invertible_matrices.html",
  "type": "Section",
  "number": "2.3",
  "title": "Invertible matrices",
  "body": " Invertible matrices   Picking up the thread of , we observe that the cancellation property enjoyed in real number algebra is a consequence of the fact that every nonzero real number has a multiplicative inverse , denoted or , that satisfies . Indeed, canceling the in the equation (assuming ) is really the act of multiplying both sides of this equation by the multiplicative inverse .  Ever on the lookout for connections between real number and matrix algebra, we ask whether there is a sensible analogue of multiplicative inverses for matrices. We have seen already that identity matrices play the role of multiplicative identities for matrices, just as the number does for real numbers. This suggests we should restrict our attention to matrices. The following definition is then the desired analogue of the multiplicative inverse of a nonzero real number.    Invertible matrices   Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .    The phrase an inverse in is somewhat jarring. Shouldn't we speak of the inverse of a matrix? Not surprisingly, if a matrix is invertible, then it has one and only one inverse. As intuitive as this fact may seem, however, it still requires proof.   Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .     Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.   The next theorem tells us that we can multiplicatively cancel a matrix if it is invertible .   Solving with invertible matrices   Suppose is an invertible matrix. Then for any matrices and , and for any matrices and .  In other words, matrix equations of this sort have unique solutions obtained by multiplying on the left or right by .    We give a proof only for the the first equation: . To show the equivalence we must show the two implications and . To this end, we have , and .    Without any additional theory at our disposal, to show a matrix is invertible we must exhibit an inverse. The onus is on us to find a matrix satisfying both and . (Remember: since we cannot assume , we really need to show both equations hold.)  By the same token, to show is not invertible we must show that an inverse does not exist: that is, we must prove that there is no satisfying . The next example illustrates this technique for a variety of matrices.       Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.       As the preceding example illustrates, deciding whether a matrix is invertible is not so straightforward, especially if the matrix is large. For the case, however, we have a relatively simple test for invertibility. (We will generalize this to the case in .)   Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .     If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.    Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.        The next theorem tells us that invertibility is preserved by matrix multiplication: that is, if and are invertible matrices, then so is .   Invertibility of products   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .     Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .     More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .     We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .      Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.     Powers of matrices, matrix polynomials  We end this section by exploring how the matrix inverse operation fits into our matrix algebra. First, we can now use the inverse operation to define matrix powers of the form , where is a square matrix and is an arbitrary integer.   Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .    Equipped with a notion of matrix powers, we can further define matrix polynomials for square matrices.   matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .    It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense.   Matrix polynomials   Let . Evaluate at the matrices and .    We have and .     Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.     Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .     Inverse and transpose   Let be invertible. Then is invertible and .    Suppose is invertible with inverse . The theorem claims is invertible, and that in fact . To prove this, we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .       WeBWork Exercises    If and are invertible matrices, then the inverse of is .     True    False          SOLUTION: False. For example, let , and , then , which is not invertible.         Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that         Are the following matrices invertible?                       For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .         Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                     Written Exercises   For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .      Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                     Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.    Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.     Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.    Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .                Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.    Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.    Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.     Expanding matrix products Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on .  Polynomial expressions of commute  Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .    Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .     "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#d_invertible_matrix",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Invertible matrix.",
  "body": " Invertible matrix  invertible matrix  matrix inverse    inverse of    An matrix is invertible (or nonsingular ) if there is a matrix satisfying . When this is the case we call an inverse of , and we say that and are inverses of one another.  A matrix satisfying is called an inverse of , denoted .  A square matrix that is not invertible is called singular .   "
},
{
  "id": "th_inverse_unique",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_unique",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "Inverses are unique.",
  "body": " Inverses are unique   If is an invertible matrix, then its inverse is unique: that is, there is only one matrix satisfying .   "
},
{
  "id": "subsec--5",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--5",
  "type": "Proof",
  "number": "2.3.1.1",
  "title": "",
  "body": " Suppose matrices and both satisfy the properties of the multiplicative inverse: i.e., . Then . Thus we see that , showing that the inverse of , if it exists, is unique.  "
},
{
  "id": "th_inverse_cancel",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_cancel",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Solving with invertible matrices.",
  "body": " Solving with invertible matrices   Suppose is an invertible matrix. Then for any matrices and , and for any matrices and .  In other words, matrix equations of this sort have unique solutions obtained by multiplying on the left or right by .    We give a proof only for the the first equation: . To show the equivalence we must show the two implications and . To this end, we have , and .   "
},
{
  "id": "ex_invertible_matrices",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_invertible_matrices",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "     Identity matrices are invertible, and in fact we have , as witnessed by the fact that .    Square zero matrices are never invertible, since for any square matrix of the same dimension we have . Thus there is no matrix satisfying the inverse property with respect to .    The inverse of the matrix is . Indeed, we have , as you can easily verify.    The matrix is not invertible. Indeed, using the row method of matrix multiplication , we see that given any matrix , each row of is given by . It follows that all the rows of are identical, and hence that we cannot have , since the rows of are not identical.      "
},
{
  "id": "th_2by2_inverse",
  "level": "2",
  "url": "s_invertible_matrices.html#th_2by2_inverse",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "Inverses of <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Inverses of matrices   A matrix is invertible if and only if .  When this is the case, we have .   "
},
{
  "id": "subsec--13",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--13",
  "type": "Proof",
  "number": "2.3.1.2",
  "title": "",
  "body": " If , the proposed matrix is indeed an inverse of , as one readily verifies.  Assume . If , then is not invertible, as we saw in the example above. Thus we can assume is nonzero, in which case is also nonzero. An easy computation shows This implies is not invertible. Indeed if it were, then the inverse would exist, and we'd have , which is a contradiction. We have proved that if , then is not invertible.  "
},
{
  "id": "subsec--14",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--14",
  "type": "Sage example",
  "number": "7",
  "title": "Invertible matrices.",
  "body": " Invertible matrices  Sage has a number of useful tools related to invertibility. The boolean function is_invertible() tests for invertibility, and the method inverse() computes the inverse of an invertible matrix. Below we generate a random matrix with rational coefficients, test whether it is invertible, and compute its inverse if it is invertible. The density=0.5 ensures that roughly half of the matrix entries are zero; and this in turn increases the likelihood that the matrix is singular, for reasons that will become somewhat clearer later.   Evaluate the Sage cell below multiple times.    When the matrix is invertible, verify that . If you like, use the blank Sage cell to compute and .    Try increasing the density setting in random_element() ( , density=0.75 , density=.875 ) and see if the matrix is more or less likely to be invertible.       "
},
{
  "id": "th_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#th_invertible_prod",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "Invertibility of products.",
  "body": " Invertibility of products   Let be matrices. If and are both invertible, then so is their product . Using logical notation: . In fact when this is the case we have .   "
},
{
  "id": "subsec--17",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--17",
  "type": "Proof",
  "number": "2.3.1.3",
  "title": "",
  "body": " Assume and are invertible. The statement of the theorem proposes a candidate for the inverse of : namely, . We need only show that satisfies . Here goes: .  "
},
{
  "id": "c_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#c_invertible_prod",
  "type": "Corollary",
  "number": "2.3.7",
  "title": "",
  "body": "  More generally, if are invertible matrices, then their product is invertible. Furthermore, we have in this case .   "
},
{
  "id": "subsec--19",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--19",
  "type": "Proof",
  "number": "2.3.1.4",
  "title": "",
  "body": " We prove by induction on the number of matrices, , that if the are invertible, then the proposed inverse formula is valid.  Base step:  For , the inverse formula reads , which is clearly true.    Induction step  For the induction step we assume that the inverse formula is valid for any collection of invertible matrices, and then show it is valid for any collection of invertible matrices. Let be invertible matrices. Define . Then .    "
},
{
  "id": "subsec--20",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec--20",
  "type": "Remark",
  "number": "2.3.8",
  "title": "",
  "body": " Whenever confronted with a logical implication of the form , where and denote arbitrary propositions, you should always ask whether the implication goes the other way . In other words, does the converse implication also hold?  The answer with regard to the implication is yes, though the proof of this is more difficult then you think. (See .)  The following argument is a common invalid proof of the reverse implication:   Assume is invertible.    Then has an inverse matrix.    Then the inverse of is .    Then and exist. Hence and are invertible.   Where is the flaw in our logic here? The second statement only allows us to conclude that there is some mystery matrix satisfying . We cannot yet say that , as this formula from only applies when we already know that and are both invertible. But this is exactly what we are trying to prove! As such we are guilty here of begging the question , or petitio principii in Latin.  "
},
{
  "id": "d_matrix_powers",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_powers",
  "type": "Definition",
  "number": "2.3.9",
  "title": "Matrix powers.",
  "body": " Matrix powers  matrix powers    matrix power    Let be an matrix, and let be an integer. We define the power matrix as follows: .   "
},
{
  "id": "d_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_polynomials",
  "type": "Definition",
  "number": "2.3.10",
  "title": "",
  "body": " matrix polynomials    matrix polynomial   Let be a polynomial with real coefficients. For any square matrix of size , we define the matrix as . We call the result of evaluating the polynomial at the matrix .   "
},
{
  "id": "rem_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#rem_matrix_polynomials",
  "type": "Remark",
  "number": "2.3.11",
  "title": "",
  "body": "It is both easy and perilous to forget the identity matrix in the term appearing in . Take caution not to make this mistake; without an identity matrix of appropriate size, the expression simply does not make sense. "
},
{
  "id": "s_invertible_matrices-4-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-7",
  "type": "Example",
  "number": "2.3.12",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials   Let . Evaluate at the matrices and .    We have and .   "
},
{
  "id": "s_invertible_matrices-4-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-8",
  "type": "Sage example",
  "number": "8",
  "title": "Matrix polynomials.",
  "body": " Matrix polynomials  An integer matrix power is computed in Sage as A^n .   Of course the matrix needs to be invertible for a negative of power to be computed. Sage will throw an error in this case if the matrix is singular.   Polynomial expressions can then be easily computed manually in Sage. The next cell computes and for .   We took care to heed the warning in , making sure to include for ( identity_matrix(3) ) and for ( identity_matrix(2) ). Interestingly, Sage is smart enough to figure out what we mean even if we are sloppy in this regard.   "
},
{
  "id": "th_power_rules",
  "level": "2",
  "url": "s_invertible_matrices.html#th_power_rules",
  "type": "Theorem",
  "number": "2.3.13",
  "title": "Properties of matrix powers.",
  "body": " Properties of matrix powers   The following properties hold for all matrices , all scalars , and all integers for which the given expression makes sense.                        .       The proofs of the first three statements are elementary, and closely resemble proofs of similar results in real number algebra. We leave these as an (unassigned) exercise.  For the fourth statement to make sense, we must assume that is invertible. The claim here is that is invertible, and that its inverse is itself. To prove this we need only show , which follows from the definition of the inverse.  The fifth statement also tacitly assumes is invertible. To prove it, we consider the three cases , and .  If , then by definition .  If , then by definition .  Suppose . Then .   "
},
{
  "id": "th_inverse_trans",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_trans",
  "type": "Theorem",
  "number": "2.3.14",
  "title": "Inverse and transpose.",
  "body": " Inverse and transpose   Let be invertible. Then is invertible and .    Suppose is invertible with inverse . The theorem claims is invertible, and that in fact . To prove this, we need only show that . We verify the two equalities separately:  . In both chains of equality we make use of the obvious claim .   "
},
{
  "id": "s_invertible_matrices_ex-1-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-2",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": "  If and are invertible matrices, then the inverse of is .     True    False          SOLUTION: False. For example, let , and , then , which is not invertible.      "
},
{
  "id": "s_invertible_matrices_ex-1-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-3",
  "type": "Exercise",
  "number": "2.3.3.2",
  "title": "",
  "body": "  Solve for the matrix if . Assume that all matrices are and invertible as needed.         SOLUTION: Note that      "
},
{
  "id": "s_invertible_matrices_ex-1-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-4",
  "type": "Exercise",
  "number": "2.3.3.3",
  "title": "",
  "body": "  Are the following matrices invertible?                    "
},
{
  "id": "s_invertible_matrices_ex-1-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-5",
  "type": "Exercise",
  "number": "2.3.3.4",
  "title": "",
  "body": "  For what values of will be invertible?  For all such that  and  .             SOLUTION: The matrix is invertible provided the columns of are linearly independent, which will be the case if . Thus, we require that and .      "
},
{
  "id": "s_invertible_matrices_ex-1-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-6",
  "type": "Exercise",
  "number": "2.3.3.5",
  "title": "",
  "body": "  Let   Then   where  ,  ,  ,  ,   where  ,  ,  ,  ,  and   where  ,  ,  ,  .                                                                  "
},
{
  "id": "s_invertible_matrices_ex-2-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-2",
  "type": "Exercise",
  "number": "2.3.3.6",
  "title": "",
  "body": " For each matrix either provide an inverse or show the matrix is not invertible. Justify your answer.               , where .    "
},
{
  "id": "s_invertible_matrices_ex-2-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-3",
  "type": "Exercise",
  "number": "2.3.3.7",
  "title": "",
  "body": " Each below is invertible. Find by guess and check. You may want to use the row or column method of matrix multiplication to justify your answer.                   "
},
{
  "id": "s_invertible_matrices_ex-2-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-4",
  "type": "Exercise",
  "number": "2.3.3.8",
  "title": "",
  "body": " Suppose is an invertible matrix. Prove: for any nonzero  the matrix is invertible.  "
},
{
  "id": "s_invertible_matrices_ex-2-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-5",
  "type": "Exercise",
  "number": "2.3.3.9",
  "title": "",
  "body": " Assume is a square matrix with .    Prove: if has two identical columns, then is not invertible.    Prove: if has a row that is a scalar multiple of another row, then is not invertible.     Use the column and\/or row method of matrix multiplication to show directly that cannot have an inverse matrix.  "
},
{
  "id": "s_invertible_matrices_ex-2-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-6",
  "type": "Exercise",
  "number": "2.3.3.10",
  "title": "",
  "body": " Find all invertible matrices satisfying the given equation, or show there is no such . Justify your answer.     .     .              "
},
{
  "id": "s_invertible_matrices_ex-2-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-7",
  "type": "Exercise",
  "number": "2.3.3.11",
  "title": "",
  "body": " Let . Find a formula for , where is an integer. Justify your answer using a proof by induction.  "
},
{
  "id": "s_invertible_matrices_ex-2-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-8",
  "type": "Exercise",
  "number": "2.3.3.12",
  "title": "",
  "body": " Let , the matrix consisting of all ones. Find a formula for , where is an integer. Justify your answer using a proof by induction.  "
},
{
  "id": "s_invertible_matrices_ex-2-9",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-9",
  "type": "Exercise",
  "number": "2.3.3.13",
  "title": "",
  "body": " Let , where is some fixed scalar. Suppose is an matrix satisfying .    Prove: if , then is invertible.    Suppose further that is not a scalar multiple of .  Prove: if , then is singular.    "
},
{
  "id": "ex_expand_matrix_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_expand_matrix_prod",
  "type": "Exercise",
  "number": "2.3.3.14",
  "title": "Expanding matrix products.",
  "body": "Expanding matrix products Fix a positive integer . Given linear combinations of matrices , prove by induction on that . Note that each step (base and induction) of your induction on will require an argument that uses induction on ! This is sometimes called double induction . For example, in the base step you must show that for any ; this should be proved by induction on . "
},
{
  "id": "ex_poly_inA_commute",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_poly_inA_commute",
  "type": "Exercise",
  "number": "2.3.3.15",
  "title": "Polynomial expressions of <span class=\"process-math\">\\(A\\)<\/span> commute.",
  "body": "Polynomial expressions of commute  Let and be polynomials with real coefficients. For any square matrix , show that the matrices and commute: i.e., . You may use the result of .  "
},
{
  "id": "s_invertible_matrices_ex-2-12",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-2-12",
  "type": "Exercise",
  "number": "2.3.3.16",
  "title": "",
  "body": " Suppose is an matrix satisfying for some .  Show that is invertible, and that in fact . You may use the results of and\/or . .  "
},
{
  "id": "s_invertibility_theorem",
  "level": "1",
  "url": "s_invertibility_theorem.html",
  "type": "Section",
  "number": "2.4",
  "title": "The invertibility theorem",
  "body": " The invertibility theorem   We saw in that verifying directly whether a matrix is invertible, using only , can be quite an involved task. The goal of this section is to make this less onerous by developing some equivalent methods of testing invertibility. Our work culminates in and , which draw connections between invertibility, solutions to linear systems, and row echelon forms of a square matrix. Not surprisingly, our old friend Gaussian elimination emerges as the fundamental computational tool.    Elementary matrices  We begin with a treatment of elementary matrices , which serve as the basic building blocks for invertible matrices, and provide a crucial link between row reduction and matrix multiplication.   elementary matrix  matrix elementary    Scaling elementary matrix     Row swap elementary matrix     Row addition elementary matrix   Elementary matrices   An matrix is elementary if multiplying any matrix on the left by performs one of our row operations on .  We have different types of elementary matrices depending on the type of row operation they perform, and we denote these with an elaboration of our earlier row operation notation:   A scaling elementary matrix is a matrix such that multiplying a matrix on the left by scales the -th row of by .    A row swap elementary matrix is a matrix such that multiplying a matrix on the left by swaps the -th and -th rows of .    A row addition elementary matrix is a matrix such that multiplying a matrix on the left by replaces the -th row of with .       Naturally, the row method of multiplication is the key to connecting a given row operation with a particular elementary matrix. shows that once you fix the dimension, an elementary matrix is uniquely defined by the row operation it performs.   Elementary matrix formulas   Fix an integer . The three types of elementary matrices can be described as follows:    The scaling matrix is the result of scaling the -th row of by .        The row swap matrix is the result of swapping the -th and -th rows of .        The row addition matrix is the result of replacing the -th row of with the sum of its -th row and times its -th row.          First we show that if is one of the elementary matrices, then it must assume one of the forms described above. Indeed, since multiplying on the left by performs a certain row operation, and since , we see that itself is the result of performing this particular row operation on the identity matrix. Thus is one of the three types of matrices described above, obtained by performing an elementary row operation on .  Next, we must show that any of the matrices described above is indeed elementary in the sense of : that is, we must show that multiplying any matrix on the left by performs the relevant row operation on . This is now a direct consequence of .  For example, take . For , the -th row of is given by the -th row of times . Since the -th row of in this case has a one in the -th entry and zeros elsewhere, the product of this row and is just the -th row of . Similarly, the -th row of in this case is times the -th row of . Thus leaves all the rows of except for the -th one, which is scaled by .    Elementary matrices provide us a way of understanding row reduction as a series of matrix multiplications (on the left). Recall that row operations on linear systems are useful in so far as they preserve the set of solutions, and that this is the result of each operation being in some sense reversible . (See .) In terms of matrix multiplication, this reversible attribute is reflected in the fact that elementary matrices are invertible .   Inverses of elementary matrices   Fix . All elementary matrices are invertible, and their inverses are elementary matrices. In fact, we have the following formulas:     These formulas all follow easily from , and the fact that the proposed inverse elementary matrix performs the reverse , or inverse, of the row operation corresponding to the given elementary matrix.      Fix . Verify that the following pairs of elementary matrices are indeed inverses of one another.                       We have and . You can verify for yourself that .    We have . You can verify for yourself that .    We have and . You can verify for yourself that .        Interlude on matrix equations  We take a moment to make the following simple, somewhat overdue observation. Namely, we can represent a system of linear equations  as a single matrix equation  , or , where , , .  Indeed if you expand out the left-hand side of into an column vector, using the definition of matrix multiplication, and then invoke the definition of matrix equality, then you obtain the linear system .  By the same token, an -tuple is a solution to the system of equations  if and only if its corresponding column vector is a solution to the matrix equation  .  We have thus recast the problem of solving linear systems to the problem of solving a certain matrix equation of the form for the unknown column vector . In particular, a homogeneous linear system can be represented as a matrix equation of the form .  Lastly, the use of Gaussian elimination to solve a linear system can now be understood in an algebraic way using matrix multiplication.  In more detail, suppose our given linear system has augmented matrix that row reduces to the row echelon matrix after performing a sequence of row operations. Denote the -th row operation , and denote by the result of applying to a matrix .  Our sequence of operations translates to the following sequence of matrix equations: .  Let correspond to the elementary matrix . Then we represent this same sequence using matrix multiplication: . This depiction of row reduction in terms of successive left-multiplication by elementary matrices will be useful to us in many ways. In particular, it follows from this discussion that two matrices and are row equivalent if and only if we have for some collection of elementary matrices .    The invertibility theorem  We are now in position to prove our first big theorem.   Invertibility theorem   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.      Recall that to show two statements and are equivalent, we must show two implications: , and . Instead of doing this for each possible pair of sentences above, we ease our work load by instead showing the following cycle of implications: . Since implication is transitive, starting at any point in our cycle and making our way around the chain of implications, we see that any one of the propositions implies any other proposition.    Suppose exists. Given any column vector , we have , which shows that is the unique solution to .     Clearly, if has a unique solution for any choice of , then it has a unique solution for the particular choice . Since is clearly a solution to the equation, it must be the only solution.     Row reduce to a matrix in reduced row echelon form using Gauss-Jordan elimination. (See .) Since the set of solutions to is identical to the set of solutions to (apply to their corresponding linear systems), we see that is the only solution to . now implies has a leading one in each column. Since is and in reduced row echelon form, it follows that must be the identity matrix. (Convince yourself of this.) Thus is row equivalent to , the identity matrix.     If is row equivalent to , then according to our discussion after , we have for some collection of elementary matrices . Since elementary matrices are invertible we can multiply both sides of this equation by to conclude . Since inverses of elementary matrices are elementary ( ), we conclude that is a product of elementary matrices.     If is a product of elementary matrices, then it is a product of invertible matrices. Since products of invertible matrices are invertible, we conclude that is invertible.       The invertibility theorem has an immediate application to linear systems where the number of equations is equal to the number of unknowns. In this special situation, the system is equivalent to a matrix equation of the form , where is a square matrix . According to the theorem, if we know is invertible, then the matrix equation, and hence the linear system, has a unique solution: namely, .  What if is not invertible? Then the theorem only tells us that there is some column vector , not necessarily the given , such that the equation does not have a unique solution. In other words, the theorem alone doesn't allow us to conclude whether the given has a solution, and we must resort to our usual Gaussian elimination procedure to answer this question.    The family of triangular matrices (upper, lower, and diagonal) defined below provides an easy testing ground for our new invertibility theorem.   matrices diagonal  matrices triangular  matrices upper triangular  matrices lower triangular  Diagonal and triangular matrices   Let be .   For each the entry is called the -th diagonal entry of , and subarray of consisting of is called the diagonal . An off-diagonal entry of is any entry not among the diagonal entries.    The matrix is diagonal if all off-diagonal entries are zero: , if for all with .    The matrix is upper triangular if all entries below the diagonal are zero: , if for all .    The matrix is lower triangular if all entries above the diagonal are zero: , if for all .    The matrix is triangular if is upper triangular or lower triangular.        Triangular matrices   The set of all diagonal matrices can be described as . The set of all upper triangular matrices can be described as . The set of all lower triangular matrices can be described as .     Invertibility of triangular matrices   Let be a triangular matrix. Then is invertible if and only if for all .  In other words, is invertible if and only if the diagonal entries of are all nonzero.    In this proof we will make use of the following easy consequence of : namely, is invertible if and only if is invertible. (The forward implication follows directly from the theorem; the reverse direction follows from the theorem applied to .)   Case: is upper triangular  If for all , then it is easy to see that we can row reduce first to a row echelon matrix with leading ones in every diagonal entry, and then further to the identity matrix. Thus is row equivalent to in this case, and we conclude from statement (4) of that is invertible.  For the other implication, we show that if it is not the case that for all , then there is a nonzero solution to the matrix equation . If this is the case, then since we have two distinct solutions to , is not invertible by Statement (3) of .  To this end, assume it is not the case that for all . Then we can find a smallest index such that and for any . It is easy to see that is row equivalent to a matrix , satisfying for and for all : i.e., is diagonal up until the -th column .  We now provide a nonzero solution to : namely, set , for all , and for all . (Verify this for yourself, using the description above of for .) Since is row equivalent to , the linear systems corresponding to and have the same solutions. Hence is also a nonzero solution to . We conclude that is not invertible by Statement (3) of . This concludes the proof of this implication.    Case: is lower triangular  Set . Then is upper triangular, and for all . Then .       Invertibility algorithms  The proof of the implication of can be expanded into an algorithm that (1) decides whether a given matrix is invertible, and (2) computes if is invertible.   Inverse algorithm   Let be an matrix. To test for invertibility of proceed as follows.    Step 1  Build the augmented matrix and use Gaussian elimination to row reduce to the form , where is in row echelon form.  The matrix is invertible if and only if has leading ones.    Step 2  If has leading ones, row reduce further to a matrix of the form . Then .      From the proof of we know is invertible if and only if has leading ones. The question remains as to why reducing the augmented matrix to tells us that . Let be the elementary matrices representing the row operations involved in this process. Then we have . After a little algebra, we see that . Since is the result of applying same row operations to we have , as claimed.    From the proof of we also derive an algorithm for writing an invertible matrix as a product of elementary matrices. You should think of this as a first example of the great versatility of Gaussian elimination, as conveyed by our .   Product of elementary matrices algorithm   Let be an matrix. To (potentially) write as a product of elementary matrices, proceed as follows.    Step 1  Attempt to row reduce to the identity, keeping track of your sequence of row operations in the form of elementary matrices.    Step 2  If you are able to row reduce to with a sequence of row operatons corresponding to the elementary matrices , then Since the inverse of an elementary matrix is elementary, we have written as a product of elementary matrices.      See the proof of the implication in .      In-depth example  Let . Combining both algorithms we can decide whether is invertible, and if so, compute and write as a product of elementary matrices. According to , the computation shows that is invertible and . Next, representing our row operations as elementary matrices, we see that , where . We conclude that .   Video example: inverse algorithm   Video: inverse algorithm  Video: inverse algorithm       Some theoretical loose ends  The two inveribility algorithms above are nice examples of how a theoretical result like our invertibility theorem can pay some serious computational dividends. Namely, thanks to the theory we have discovered a method of computing the inverse of a matrix that essentially boils down to row reduction.  We finish this section with a number of theoretical implications that tie up some loose ends. The results below are all consequences in some way of . The fist shows that in fact one one of the defining equalities or suffices to define the inverse of a matrix.   Left-inverse if and only if right-inverse   Let and be . Then    .     .   In plain English: a matrix is a left-inverse of if and only if it is a right-inverse of .    It is enough to prove the first implication: the second then follows by exchanging the roles of and .  Suppose . We first show that is invertible. We have . By Statement (3) of , we conclude that is invertible.  Now that we know exists we have .    As a further consequence of , we can at last strengthen the implication to an equivalence.   Invertibility of product equivalence   Let and be . Then is invertible if and only if and are both invertible: ,      Implication:  We know from that if and are invertible, then so is .    Implication: invertible  and invertible  Assume is invertible and let be its inverse. Thus . We first prove is invertible. We have . The last implication uses Statement (3) of and the fact that is invertible. We have shown that , and hence that is invertible, using once again Statement (3) of .  Next we prove directly that is invertible. Namely, we claim that . Indeed, since is the inverse of , we have . Thus is a right-inverse of . now implies , and hence that , as claimed.  This completes the proof that if is invertible, then and are invertible.     We conclude with two results related to row reduction. The first provides an equivalent formulation of row equivalence in terms of matrix arithmetic: an elaboration of our discussion in .   Row equivalence and invertible matrices   Let and be matrices. The following statements are equivalent.   The matrices and are row equivalent.    There are elementary matrices such that .    There is an invertible matrix such that .       The equivalence of (1) and (2) was shown in the course of our discussion in . The equivalence of (2) and (3) is a direct consequence of (5) of since a matrix is invertible if and only if it can be written as for some elementary matrices .     Properties of row equivalence  With the help of , we can easily show that the row equivalence relation is reflexive , symmetric , and transitive . In other words, letting denote that is row equivalent to , the following properties hold.   Reflexivity  For any matrix , we have : , every matrix is row equivalent to itself.    Symmetry  For all matrices and , if , then .    Transitivity  For all matrices , if and , then .   The proof of these facts is left as an exercise ( ).   Lastly, we provide at last the proof of the third statement of promised back in . This proof is due to Thomas Yuster Thomas Yuster. The reduced row echelon form of a matrix is unique: a simple proof , Mathematics Magazine 57 (1984), no. 2, 93-94. .   Uniqueness of reduced row echelon form   Any matrix is row equivalent to a unique matrix in reduced row echelon form.    Let be an matrix. Using Gauss-Jordan elimination, we can row reduce to matrix in reduced row echelon form. Suppose is also row equivalent to the matrix in reduced row echelon form. Then and are row equivalent, since the row equivalence relation is symmetric and transitive ( ). Thus it suffices to show that if and are row equivalent matrices in reduced row echelon form, then . We do so by induction on . The base step is trivial, since there is only one matrix in reduced row echelon form.  For the induction step we assume that any two row equivalent matrices in reduced row echelon form are equal. Suppose by contradiction that and are row equivalent matrices in reduced row echelon form, and that . By there is an invertible matrix such that . The first columns of and form matrices and , respectively, that are in reduced row echelon form, as one easily checks. Furthermore, and are row equivalent: indeed, using we see that implies . By the induction hypothesis we must have , and thus and can only differ in their last column.  We claim that and must both have a leading one in the last column. To see why, consider the matrix equation , where is a column vector. Since , we have , and thus . Because and differ in at most their last column, the first columns of are zero columns, and thus we have . Since , there is some such that . Since by , we must have . We have shown that for any satisfying , we must have . It follows from that must have a leading in its last column, since otherwise the variable in the system would be free, and could assume any value. To see that also has a leading one in the last column, we use the same argument, starting with the equation .  To summarize, starting with row equivalent matrices and in reduced row echelon form, and assuming by contradiction that , we conclude that (a) the first columns of and are equal and form matrices in reduced row echelon form, and (b) the last columns of and have leading ones. Since and are in reduced row echelon form, and since the first columns of and are equal, we see that the leading ones in the last columns of and must occur in the same row: namely, the first zero row of . It follows that , a contradiction.       WeBWork Exercises    True or false: Suppose that and are two elementary matrices. Then   .    True    False          SOLUTION: False. If then but         Let  Then   where  ,  ,  ,  ,  ,  ,  ,  ,  .                                                      Let   Find and use it to solve where    where  and  .                   Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                       Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                              a. The linear transformation is given by:  .  Find .  x + y, x + y  b. The linear transformation is given by:  .  Find .  x + y + z, x + y + z, x + y + z  c. Using from part a, it is given that:   Find x and y.      d. Using from part b, it is given that:   Find x, y, and z.                                                                                                         Written Exercises   Linear systems and matrix equations   Find a matrix and column vectors and such that the given linear system is equivalent to the matrix equation .               Solving linear systems with matrix inverses   Find an invertible matrix and column vectors and such that the given linear system is equivalent to the matrix equation . Compute and use this to find the unique solution to the linear system. (See .)               Inverse algorithm   Use the inverse algorithm to determine whether each matrix is invertible, and to compute its inverse if possible.  You are not required to follow Gaussian elimination to the letter, and you may perform multiple operations at the same time, as long as they are independent of one another. For example, do not do and in the same step.        We use the inverse algorithm: . We conclude that .                    ,      ,      Product of elementary matrices algorithm   Each matrix below is invertible. Use the product of elementary matrices algorithm to write as a product of elementary matrices.  Here you should perform Gaussian elimination to the letter, one row operation at a time.        Row reduce to the identity matrix:   The corresponding elementary matrices are . It follows that , and hence that .     .          .     According to Statement (2) of the invertibility theorem, a matrix is invertible if and only if for all column vectors the matrix equation has a unique solution. Show that we can add the following, weaker-looking version of (2) to our list of equivalent statements:   (2') The matrix equation has a solution for any column vector .    Try to logically weave Statement (2') into our original list of equivalent statements by (a) finding a statement from our original list that implies (2'), and (b) find a statement in our original list that is implied by (2').  You may make use of in your argument.   Properties of row equivalence  Let denote that matrix is row equivalent to . Use to show that the relation is reflexive, symmetric, and transitive, as described in .    Let be an matrix, and let be an invertible matrix.  Show that the two matrix equations have the same set of solutions. In other words show that .    Suppose and are row equivalent square matrices. Prove: is invertible if and only if is invertible.    Use the provided information to determine whether the given square matrix is invertible. Justify your answer using the inveribility theorem or one of its corollaries.  There are column vectors such that .  is invertible.  for some . The sum of the columns of is equal to the zero column vector.   Answer true or false. If true, provide a proof; if false, exhibit an explicit counterexample.  The product of two elementary matrices is elementary. The product of two elementary matrices is invertible. The sum of two invertible matrices is invertible. If is a singular matrix, then the linear system has infinitely many solutions. If is obtained from the invertible matrix by replacing its second row with the sum of its first and second rows, then is invertible. If is square matrix, and is a column vector such that the matrix equation has a unique solution, then is invertible. If and are row equivalent, then the matrix equations and have the same solution set. If or is singular, then is singular.    "
},
{
  "id": "d_elementary_matrix",
  "level": "2",
  "url": "s_invertibility_theorem.html#d_elementary_matrix",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Elementary matrices.",
  "body": " elementary matrix  matrix elementary    Scaling elementary matrix     Row swap elementary matrix     Row addition elementary matrix   Elementary matrices   An matrix is elementary if multiplying any matrix on the left by performs one of our row operations on .  We have different types of elementary matrices depending on the type of row operation they perform, and we denote these with an elaboration of our earlier row operation notation:   A scaling elementary matrix is a matrix such that multiplying a matrix on the left by scales the -th row of by .    A row swap elementary matrix is a matrix such that multiplying a matrix on the left by swaps the -th and -th rows of .    A row addition elementary matrix is a matrix such that multiplying a matrix on the left by replaces the -th row of with .      "
},
{
  "id": "th_elementary_matrices",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_elementary_matrices",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "Elementary matrix formulas.",
  "body": " Elementary matrix formulas   Fix an integer . The three types of elementary matrices can be described as follows:    The scaling matrix is the result of scaling the -th row of by .        The row swap matrix is the result of swapping the -th and -th rows of .        The row addition matrix is the result of replacing the -th row of with the sum of its -th row and times its -th row.          First we show that if is one of the elementary matrices, then it must assume one of the forms described above. Indeed, since multiplying on the left by performs a certain row operation, and since , we see that itself is the result of performing this particular row operation on the identity matrix. Thus is one of the three types of matrices described above, obtained by performing an elementary row operation on .  Next, we must show that any of the matrices described above is indeed elementary in the sense of : that is, we must show that multiplying any matrix on the left by performs the relevant row operation on . This is now a direct consequence of .  For example, take . For , the -th row of is given by the -th row of times . Since the -th row of in this case has a one in the -th entry and zeros elsewhere, the product of this row and is just the -th row of . Similarly, the -th row of in this case is times the -th row of . Thus leaves all the rows of except for the -th one, which is scaled by .   "
},
{
  "id": "th_inverse_elem",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_inverse_elem",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Inverses of elementary matrices.",
  "body": " Inverses of elementary matrices   Fix . All elementary matrices are invertible, and their inverses are elementary matrices. In fact, we have the following formulas:     These formulas all follow easily from , and the fact that the proposed inverse elementary matrix performs the reverse , or inverse, of the row operation corresponding to the given elementary matrix.   "
},
{
  "id": "ss_elementary_matrix-8",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_elementary_matrix-8",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "  Fix . Verify that the following pairs of elementary matrices are indeed inverses of one another.                       We have and . You can verify for yourself that .    We have . You can verify for yourself that .    We have and . You can verify for yourself that .     "
},
{
  "id": "th_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertibility",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "Invertibility theorem.",
  "body": " Invertibility theorem   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.      Recall that to show two statements and are equivalent, we must show two implications: , and . Instead of doing this for each possible pair of sentences above, we ease our work load by instead showing the following cycle of implications: . Since implication is transitive, starting at any point in our cycle and making our way around the chain of implications, we see that any one of the propositions implies any other proposition.    Suppose exists. Given any column vector , we have , which shows that is the unique solution to .     Clearly, if has a unique solution for any choice of , then it has a unique solution for the particular choice . Since is clearly a solution to the equation, it must be the only solution.     Row reduce to a matrix in reduced row echelon form using Gauss-Jordan elimination. (See .) Since the set of solutions to is identical to the set of solutions to (apply to their corresponding linear systems), we see that is the only solution to . now implies has a leading one in each column. Since is and in reduced row echelon form, it follows that must be the identity matrix. (Convince yourself of this.) Thus is row equivalent to , the identity matrix.     If is row equivalent to , then according to our discussion after , we have for some collection of elementary matrices . Since elementary matrices are invertible we can multiply both sides of this equation by to conclude . Since inverses of elementary matrices are elementary ( ), we conclude that is a product of elementary matrices.     If is a product of elementary matrices, then it is a product of invertible matrices. Since products of invertible matrices are invertible, we conclude that is invertible.    "
},
{
  "id": "rm_inv_solutions",
  "level": "2",
  "url": "s_invertibility_theorem.html#rm_inv_solutions",
  "type": "Remark",
  "number": "2.4.6",
  "title": "",
  "body": "  The invertibility theorem has an immediate application to linear systems where the number of equations is equal to the number of unknowns. In this special situation, the system is equivalent to a matrix equation of the form , where is a square matrix . According to the theorem, if we know is invertible, then the matrix equation, and hence the linear system, has a unique solution: namely, .  What if is not invertible? Then the theorem only tells us that there is some column vector , not necessarily the given , such that the equation does not have a unique solution. In other words, the theorem alone doesn't allow us to conclude whether the given has a solution, and we must resort to our usual Gaussian elimination procedure to answer this question.   "
},
{
  "id": "d_diagonal_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#d_diagonal_triangular",
  "type": "Definition",
  "number": "2.4.7",
  "title": "Diagonal and triangular matrices.",
  "body": " matrices diagonal  matrices triangular  matrices upper triangular  matrices lower triangular  Diagonal and triangular matrices   Let be .   For each the entry is called the -th diagonal entry of , and subarray of consisting of is called the diagonal . An off-diagonal entry of is any entry not among the diagonal entries.    The matrix is diagonal if all off-diagonal entries are zero: , if for all with .    The matrix is upper triangular if all entries below the diagonal are zero: , if for all .    The matrix is lower triangular if all entries above the diagonal are zero: , if for all .    The matrix is triangular if is upper triangular or lower triangular.      "
},
{
  "id": "eg_triang_matrices",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_triang_matrices",
  "type": "Example",
  "number": "2.4.8",
  "title": "Triangular <span class=\"process-math\">\\(3\\times 3\\)<\/span> matrices.",
  "body": " Triangular matrices   The set of all diagonal matrices can be described as . The set of all upper triangular matrices can be described as . The set of all lower triangular matrices can be described as .   "
},
{
  "id": "th_invertible_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertible_triangular",
  "type": "Theorem",
  "number": "2.4.9",
  "title": "Invertibility of triangular matrices.",
  "body": " Invertibility of triangular matrices   Let be a triangular matrix. Then is invertible if and only if for all .  In other words, is invertible if and only if the diagonal entries of are all nonzero.    In this proof we will make use of the following easy consequence of : namely, is invertible if and only if is invertible. (The forward implication follows directly from the theorem; the reverse direction follows from the theorem applied to .)   Case: is upper triangular  If for all , then it is easy to see that we can row reduce first to a row echelon matrix with leading ones in every diagonal entry, and then further to the identity matrix. Thus is row equivalent to in this case, and we conclude from statement (4) of that is invertible.  For the other implication, we show that if it is not the case that for all , then there is a nonzero solution to the matrix equation . If this is the case, then since we have two distinct solutions to , is not invertible by Statement (3) of .  To this end, assume it is not the case that for all . Then we can find a smallest index such that and for any . It is easy to see that is row equivalent to a matrix , satisfying for and for all : i.e., is diagonal up until the -th column .  We now provide a nonzero solution to : namely, set , for all , and for all . (Verify this for yourself, using the description above of for .) Since is row equivalent to , the linear systems corresponding to and have the same solutions. Hence is also a nonzero solution to . We conclude that is not invertible by Statement (3) of . This concludes the proof of this implication.    Case: is lower triangular  Set . Then is upper triangular, and for all . Then .    "
},
{
  "id": "th_invertibility_algorithm",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertibility_algorithm",
  "type": "Theorem",
  "number": "2.4.10",
  "title": "Inverse algorithm.",
  "body": " Inverse algorithm   Let be an matrix. To test for invertibility of proceed as follows.    Step 1  Build the augmented matrix and use Gaussian elimination to row reduce to the form , where is in row echelon form.  The matrix is invertible if and only if has leading ones.    Step 2  If has leading ones, row reduce further to a matrix of the form . Then .      From the proof of we know is invertible if and only if has leading ones. The question remains as to why reducing the augmented matrix to tells us that . Let be the elementary matrices representing the row operations involved in this process. Then we have . After a little algebra, we see that . Since is the result of applying same row operations to we have , as claimed.   "
},
{
  "id": "th_elem_matrices_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_elem_matrices_alg",
  "type": "Theorem",
  "number": "2.4.11",
  "title": "Product of elementary matrices algorithm.",
  "body": " Product of elementary matrices algorithm   Let be an matrix. To (potentially) write as a product of elementary matrices, proceed as follows.    Step 1  Attempt to row reduce to the identity, keeping track of your sequence of row operations in the form of elementary matrices.    Step 2  If you are able to row reduce to with a sequence of row operatons corresponding to the elementary matrices , then Since the inverse of an elementary matrix is elementary, we have written as a product of elementary matrices.      See the proof of the implication in .   "
},
{
  "id": "fig_vid_inver_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#fig_vid_inver_alg",
  "type": "Figure",
  "number": "2.4.12",
  "title": "Video: inverse algorithm",
  "body": " Video: inverse algorithm  Video: inverse algorithm   "
},
{
  "id": "cor_left-right_inverse",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_left-right_inverse",
  "type": "Corollary",
  "number": "2.4.13",
  "title": "Left-inverse if and only if right-inverse.",
  "body": " Left-inverse if and only if right-inverse   Let and be . Then    .     .   In plain English: a matrix is a left-inverse of if and only if it is a right-inverse of .    It is enough to prove the first implication: the second then follows by exchanging the roles of and .  Suppose . We first show that is invertible. We have . By Statement (3) of , we conclude that is invertible.  Now that we know exists we have .   "
},
{
  "id": "cor_inv_prod_eq",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_inv_prod_eq",
  "type": "Corollary",
  "number": "2.4.14",
  "title": "Invertibility of product equivalence.",
  "body": " Invertibility of product equivalence   Let and be . Then is invertible if and only if and are both invertible: ,      Implication:  We know from that if and are invertible, then so is .    Implication: invertible  and invertible  Assume is invertible and let be its inverse. Thus . We first prove is invertible. We have . The last implication uses Statement (3) of and the fact that is invertible. We have shown that , and hence that is invertible, using once again Statement (3) of .  Next we prove directly that is invertible. Namely, we claim that . Indeed, since is the inverse of , we have . Thus is a right-inverse of . now implies , and hence that , as claimed.  This completes the proof that if is invertible, then and are invertible.    "
},
{
  "id": "cor_row_equivalence_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_row_equivalence_invertibility",
  "type": "Corollary",
  "number": "2.4.15",
  "title": "Row equivalence and invertible matrices.",
  "body": " Row equivalence and invertible matrices   Let and be matrices. The following statements are equivalent.   The matrices and are row equivalent.    There are elementary matrices such that .    There is an invertible matrix such that .       The equivalence of (1) and (2) was shown in the course of our discussion in . The equivalence of (2) and (3) is a direct consequence of (5) of since a matrix is invertible if and only if it can be written as for some elementary matrices .   "
},
{
  "id": "rm_row_equivalence_props",
  "level": "2",
  "url": "s_invertibility_theorem.html#rm_row_equivalence_props",
  "type": "Remark",
  "number": "2.4.16",
  "title": "Properties of row equivalence.",
  "body": " Properties of row equivalence  With the help of , we can easily show that the row equivalence relation is reflexive , symmetric , and transitive . In other words, letting denote that is row equivalent to , the following properties hold.   Reflexivity  For any matrix , we have : , every matrix is row equivalent to itself.    Symmetry  For all matrices and , if , then .    Transitivity  For all matrices , if and , then .   The proof of these facts is left as an exercise ( ).  "
},
{
  "id": "ss_invertible_loose_ends-10",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_loose_ends-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "57 "
},
{
  "id": "cor_RRE_uniqueness",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_RRE_uniqueness",
  "type": "Corollary",
  "number": "2.4.17",
  "title": "Uniqueness of reduced row echelon form.",
  "body": " Uniqueness of reduced row echelon form   Any matrix is row equivalent to a unique matrix in reduced row echelon form.    Let be an matrix. Using Gauss-Jordan elimination, we can row reduce to matrix in reduced row echelon form. Suppose is also row equivalent to the matrix in reduced row echelon form. Then and are row equivalent, since the row equivalence relation is symmetric and transitive ( ). Thus it suffices to show that if and are row equivalent matrices in reduced row echelon form, then . We do so by induction on . The base step is trivial, since there is only one matrix in reduced row echelon form.  For the induction step we assume that any two row equivalent matrices in reduced row echelon form are equal. Suppose by contradiction that and are row equivalent matrices in reduced row echelon form, and that . By there is an invertible matrix such that . The first columns of and form matrices and , respectively, that are in reduced row echelon form, as one easily checks. Furthermore, and are row equivalent: indeed, using we see that implies . By the induction hypothesis we must have , and thus and can only differ in their last column.  We claim that and must both have a leading one in the last column. To see why, consider the matrix equation , where is a column vector. Since , we have , and thus . Because and differ in at most their last column, the first columns of are zero columns, and thus we have . Since , there is some such that . Since by , we must have . We have shown that for any satisfying , we must have . It follows from that must have a leading in its last column, since otherwise the variable in the system would be free, and could assume any value. To see that also has a leading one in the last column, we use the same argument, starting with the equation .  To summarize, starting with row equivalent matrices and in reduced row echelon form, and assuming by contradiction that , we conclude that (a) the first columns of and are equal and form matrices in reduced row echelon form, and (b) the last columns of and have leading ones. Since and are in reduced row echelon form, and since the first columns of and are equal, we see that the leading ones in the last columns of and must occur in the same row: namely, the first zero row of . It follows that , a contradiction.   "
},
{
  "id": "s_invertibility_theorem_ex-1-2",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-2",
  "type": "Exercise",
  "number": "2.4.7.1",
  "title": "",
  "body": "  True or false: Suppose that and are two elementary matrices. Then   .    True    False          SOLUTION: False. If then but      "
},
{
  "id": "s_invertibility_theorem_ex-1-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-3",
  "type": "Exercise",
  "number": "2.4.7.2",
  "title": "",
  "body": "  Let  Then   where  ,  ,  ,  ,  ,  ,  ,  ,  .                                                   "
},
{
  "id": "s_invertibility_theorem_ex-1-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-4",
  "type": "Exercise",
  "number": "2.4.7.3",
  "title": "",
  "body": "  Let   Find and use it to solve where    where  and  .                "
},
{
  "id": "s_invertibility_theorem_ex-1-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-5",
  "type": "Exercise",
  "number": "2.4.7.4",
  "title": "",
  "body": "  Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                    "
},
{
  "id": "s_invertibility_theorem_ex-1-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-6",
  "type": "Exercise",
  "number": "2.4.7.5",
  "title": "",
  "body": "  Solve the system of equations by converting to a matrix equation and using the inverse of the coefficient matrix.                           "
},
{
  "id": "s_invertibility_theorem_ex-1-7",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-1-7",
  "type": "Exercise",
  "number": "2.4.7.6",
  "title": "",
  "body": "  a. The linear transformation is given by:  .  Find .  x + y, x + y  b. The linear transformation is given by:  .  Find .  x + y + z, x + y + z, x + y + z  c. Using from part a, it is given that:   Find x and y.      d. Using from part b, it is given that:   Find x, y, and z.                                                                                                      "
},
{
  "id": "s_invertibility_theorem_ex-2-2-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-2-3",
  "type": "Exercise",
  "number": "2.4.7.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-2-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-2-4",
  "type": "Exercise",
  "number": "2.4.7.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-3-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-3-3",
  "type": "Exercise",
  "number": "2.4.7.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-3-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-3-4",
  "type": "Exercise",
  "number": "2.4.7.10",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-3",
  "type": "Exercise",
  "number": "2.4.7.11",
  "title": "",
  "body": "     We use the inverse algorithm: . We conclude that .  "
},
{
  "id": "s_invertibility_theorem_ex-2-4-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-4",
  "type": "Exercise",
  "number": "2.4.7.12",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-5",
  "type": "Exercise",
  "number": "2.4.7.13",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-6",
  "type": "Exercise",
  "number": "2.4.7.14",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-4-7",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-7",
  "type": "Exercise",
  "number": "2.4.7.15",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_invertibility_theorem_ex-2-4-8",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-4-8",
  "type": "Exercise",
  "number": "2.4.7.16",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_invertibility_theorem_ex-2-5-3",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-3",
  "type": "Exercise",
  "number": "2.4.7.17",
  "title": "",
  "body": "     Row reduce to the identity matrix:   The corresponding elementary matrices are . It follows that , and hence that .  "
},
{
  "id": "s_invertibility_theorem_ex-2-5-4",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-4",
  "type": "Exercise",
  "number": "2.4.7.18",
  "title": "",
  "body": "  .  "
},
{
  "id": "s_invertibility_theorem_ex-2-5-5",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-5",
  "type": "Exercise",
  "number": "2.4.7.19",
  "title": "",
  "body": "    "
},
{
  "id": "s_invertibility_theorem_ex-2-5-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-5-6",
  "type": "Exercise",
  "number": "2.4.7.20",
  "title": "",
  "body": "  .  "
},
{
  "id": "s_invertibility_theorem_ex-2-6",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-6",
  "type": "Exercise",
  "number": "2.4.7.21",
  "title": "",
  "body": " According to Statement (2) of the invertibility theorem, a matrix is invertible if and only if for all column vectors the matrix equation has a unique solution. Show that we can add the following, weaker-looking version of (2) to our list of equivalent statements:   (2') The matrix equation has a solution for any column vector .    Try to logically weave Statement (2') into our original list of equivalent statements by (a) finding a statement from our original list that implies (2'), and (b) find a statement in our original list that is implied by (2').  You may make use of in your argument.  "
},
{
  "id": "ex_row_equiv_props",
  "level": "2",
  "url": "s_invertibility_theorem.html#ex_row_equiv_props",
  "type": "Exercise",
  "number": "2.4.7.22",
  "title": "Properties of row equivalence.",
  "body": "Properties of row equivalence  Let denote that matrix is row equivalent to . Use to show that the relation is reflexive, symmetric, and transitive, as described in .  "
},
{
  "id": "s_invertibility_theorem_ex-2-8",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-8",
  "type": "Exercise",
  "number": "2.4.7.23",
  "title": "",
  "body": " Let be an matrix, and let be an invertible matrix.  Show that the two matrix equations have the same set of solutions. In other words show that .  "
},
{
  "id": "s_invertibility_theorem_ex-2-9",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-9",
  "type": "Exercise",
  "number": "2.4.7.24",
  "title": "",
  "body": " Suppose and are row equivalent square matrices. Prove: is invertible if and only if is invertible.  "
},
{
  "id": "s_invertibility_theorem_ex-2-10",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-10",
  "type": "Exercise",
  "number": "2.4.7.25",
  "title": "",
  "body": " Use the provided information to determine whether the given square matrix is invertible. Justify your answer using the inveribility theorem or one of its corollaries.  There are column vectors such that .  is invertible.  for some . The sum of the columns of is equal to the zero column vector. "
},
{
  "id": "s_invertibility_theorem_ex-2-11",
  "level": "2",
  "url": "s_invertibility_theorem.html#s_invertibility_theorem_ex-2-11",
  "type": "Exercise",
  "number": "2.4.7.26",
  "title": "",
  "body": " Answer true or false. If true, provide a proof; if false, exhibit an explicit counterexample.  The product of two elementary matrices is elementary. The product of two elementary matrices is invertible. The sum of two invertible matrices is invertible. If is a singular matrix, then the linear system has infinitely many solutions. If is obtained from the invertible matrix by replacing its second row with the sum of its first and second rows, then is invertible. If is square matrix, and is a column vector such that the matrix equation has a unique solution, then is invertible. If and are row equivalent, then the matrix equations and have the same solution set. If or is singular, then is singular. "
},
{
  "id": "s_det",
  "level": "1",
  "url": "s_det.html",
  "type": "Section",
  "number": "2.5",
  "title": "The determinant",
  "body": " The determinant   The determinant is a map that assigns to a square matrix a scalar . The definition given below of the determinant is far from intuitive, and we will do little to motivate it up front. Instead, we allow its various properties to speak for themselves by way of retroactive motivation. In particular, we will see that , making the determinant an important tool for investigating invertibility.    Definition of the determinant  Our definition of the determinant is a recursive one; given an matrix its determinant is defined in terms of the determinant of certain submatrices of dimension . This necessitates some notation to help our discussion along.   Submatrix notation  submatrix    submatrix of    Let be an matrix with . Given , the submatrix of obtained by removing the -th row and -th column of is denoted .      Do not conflate the submatrix notation with matrix entry notation : the former returns the submatrix of obtained by deleting the -th row and -th column; the latter returns the -th entry of .     The determinant  determinant    determinant of    Let . The determinant is defined as follows:   Base case:  When we have and we define .    Recursive case:  When we define .        Small cases   Let's look at determinant formulas for the cases. You may remember the formula for matrices from ; we will make the connection more explicit in .  Given , we have . The formula for the case is simple enough to serve as a second base case , allowing us to end the recursive process of computing a general matrix once we get to expressions involving matrices.  Given , we have .    The recursive nature of the determinant definition makes induction arguments particularly useful when proving properties of the determinant, as illustrated by the next theorem.   Determinant of triangular matrices   Let be triangular (upper, lower, or diagonal). Then . In other words, the determinant of a triangular matrix is the product of its diagonal entries.    We only give the proof for lower triangular matrices; the proof in the upper triangular case is nearly identical.  For any let denote the proposition: The determinant of any lower triangular matrix is the product of its diagonal entries . We prove by induction that is true for all .   Base step: show is true  In this case , and is indeed the product of the diagonal entries of .    Induction step: show for all  Let be a lower triangular matrix. Then for all , and hence the determinant of is given by . Claim: is lower triangular. Indeed, first observe that we have for all ; by deleting the first row and first column we effectively bump each index up by one. Since is lower triangular we have for all , and hence also for all , proving the claim.  Lastly, assuming is true (the induction hypothesis) we have , as desired.      Determinant of identity matrices   Let be the identity matrix. Then .    This follows directly from since the diagonal entries of are all ones.      Expansion along rows and columns   Morally speaking, we should give some examples of higher-dimensional determinants, but we first introduce some theory that affords us more leeway in our computations.    Minors and expansions along rows\/columns  minor of matrix  expansion along row\/column    the -th minor of a matrix    Given an matrix , for any pair the -th minor of is defined as .  For any the expression is called the expansion along the -th row of .  For any , the expression is called the expansion along the -th column of .     Expansion along rows   Let . For any we have . In other words, we can compute by expanding along any row of .    The proof is by induction on the size of the matrix.   Base step:  For there is nothing to prove. Given expanding along either row yields , as one easily verifies.    Induction step  Assume the claim is true of any matrix. Given we have . Expanding along the -th row of for any , on the other hand, we get . To show these two expressions are equal we use the induction hypothesis to compute each by expanding along its -th row: . The matrix is the result of first deleting row 1 and column from , and then deleting row and column of the resulting matrix. To deal with such iterated submatrices, we make some simple observations relating the rows and columns of and with those of .   The -th row of corresponds to the -th row of , and the first row of corresponds to the first row of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .   From these observations we derive the following table of formulas: . We now begin to unpack : . This completes the induction step, and thus the proof is finished.     Surprisingly, it turns out that we can compute the determinant of a matrix by expanding along any column ( ). This is a consequence of the following theorem, which is useful in its own right. The proof below is taken from Robert Beezer's A First Course in Linear Algebra . (See Theorem DT .) It uses induction and a wonderful trick starting from the observation that for any .   Determinant and transposition   Let be an matrix. Then .    The proof is by induction on . The base case ( ) is trivial since for any matrix .  For induction we assume that for all we have for any matrix. Suppose is an matrix. We have . This completes the proof by induction. (Note how in the second equality in the chain above we compute in the -th term of by expanding along the -th row of . A similar observation applies to the penultimate equality.)     Expansion along columns   Let . For any we have . In other words, we can compute by expanding along any row of .    For any , we have .      Compute for .    First we compute by expanding along the second row. The only nonzero term of this expansion is the last one, yielding . We have . To compute its determinant we expand along its third column: We conclude that .     Matrix of signs   When expanding along a row or column, it is easy to get tripped up by the sign in front of the -th coefficient. A matrix of signs is a sort of mnemonic device to help you in this regard. It is easily generated by observing that the sign in front of the -th entry is always a (since ), and that any horizontal or vertical step within the matrix is accompanied by a change of sign. As an example, for we have the following matrix of signs: .     Video example: determinant   Video: determinant  Video: determinant     The freedom to compute the determinant by expanding along any row or column gives rise to the following intuitive property.   Zero rows\/columns, swapping rows\/columns, identical rows\/columns   Let be an matrix.   If has a zero row or zero column, then     Assume . Let be the matrix obtained by swapping two rows (or two columns) of . Then .    Assume . If has two identical rows or two identical columns, then .       The first statement is obvious since according to and we may compute the determinant by expanding along the zero row or zero column in question.  The third statement follows from the second. Indeed, if has two identical rows or columns, then the matrix obtained from by swapping the rows (or columns) in question is itself. Thus by the second statement, and we conclude that .  It remains only to show the second statement. We prove only the statement regarding swapping rows; the corresponding statement about columns follows from . The proof is by induction.   Base step:  Let . Then , and .    Induction step  We assume by induction that the result holds for any matrices, , and show the same is true for any matrix.  Let be an matrix, and suppose is the result of swapping the -th and -th rows of . We compute the determinants of and by expanding along the -th row, where and . This is possible since .  Moving along the -th row, notice that each submatrix is the result of swapping the two rows of that originally corresponded to the -th and -th rows of . Since these submatrices are of dimension , we have by induction. Lastly, since the -th rows of and are the same we have .     As a further consequence of and , we can derive the adjoint matrix formula .   Adjoint matrix  adjoint matrix    adjoint of a square matrix    Let be an matrix. The adjoint matrix of , denoted , is the matrix whose -th entry is defined as follows: .      Be careful of the order reversal in this definition. The -th entry of is equal to plus or minus the -th minor of . Let's see this in action for some small matrices.  For we have .  For we have .     Adjoint matrix formula   Given an matrix , we have . As a consequence, if , then is invertible and .    First observe that the second statement regarding invertibility follows directly from , since in this case setting we have .  Thus it suffices to prove . To do so, we must show that .   Case:  In this case we have . A similar argument shows that , though in this case we use expansion along a column.    Case:  When we have , where is the matrix obtained by replacing the -th row of with a copy of its -th row. Since has two identical rows implies , as desired. Once again, a similar argument using expansion along a column shows that .       Use the adjoint matrix formula to compute , where .    First compute by expanding along the third row: . Next, compute . Then we have .      Before you get too excited about the adjoint matrix formula, you should know that as grows, this procedure becomes much more costly in terms of number of arithmetic operations involved than our inverse algorithm based on Gauss-Jordan elimination. You get a sense of this already from the previous example. In general, the Gauss-Jordan inverse algorithm is the way to go.      Row operations and determinant  Suppose the square matrix can be row reduced to via sequence of row operations. In general we do not have , but we can compute from by keeping track of which operations are used.   Row operations and determinant   Let be an matrix. Using the notation from we have:              .   In particular, taking , we have .    The first statement follows easily by computing by expanding along the -th row. The second statement is in fact a rephrasing of the second statement of . It remains to prove the third statement.  Let , and set . Then is identical to with the exception of the -th row, whose -th entry is . It follows that , where is the matrix obtained by replacing the -th row of with a row identical with its -th row. By we conclude , and thus , as desired.      In the language of row operations, translates as follows:   Scaling a row of a matrix by has the effect of scaling the determinant by .    Swapping two rows of a matrix changes the sign of the determinant.    Performing a row addition operation on a matrix has no effect on the determinant.        Column operations and the determinant   As shown in the determinant behaves in a similar manner with respect to elementary column operations : , scaling a column by a nonzero constant scales the determinant by , swapping columns multiplies the determinant by , adding a multiple of one column to another leaves the determinant unchanged.     Determinant and products of elementary matrices   Let be an matrix, and suppose we have for some collection of elementary matrices . Then .    This is an easy proof by induction on the number of elementary matrices involved, the base case ( ) of which is covered by .     has both computational and theoretical applications.  On the computational side, it suggests an alternative method of computing : first row reduce to a simpler matrix , making sure to keep track of the operations you use; set up an equation as in representing the row reduction; then solve the corresponding equation for in terms of and the .   Determinant via row reduction   Suppose the matrix can be row reduced to by perfomring the following sequence of row operations:   First swap the second and third rows.    Then scale the first row by     Then replace the second row with the second row plus the first row.   Compute .    In terms of elementary matrices we have and hence We conclude that .    On the theoretical side, implies both and .   Determinant and invertibility   Let be an matrix. Then is invertible if and only if .    The implication was proved in .  For the other direction, assume is invertible. Then implies is a product of elementary matrices: . Then implies . Since for all ( ), we conclude .     Determinant is multiplicative   Let and be matrices. Then .    We consider two cases based on the invertibility of and\/or .   or is not invertible  In this case is not invertible ( ), and hence by . By the same reasoning we must have or . It follows that in this case.    and both invertible  In this case we can write for some elementary matrices and ( ). Then .     We end this section (and chapter) by adding the results of and one of our homework exercises to our invertibility theorem.   Invertibility theorem (extended cut)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .         WeBWork Exercises    Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:               Consider the following Gauss elimination:   What is the determinant of ?                Find such that the following matrix is singular.                If and are matrices, , , then   ,   ,   ,   ,   .                                  Written Exercises   Let    Compute by expanding along the second row.    Compute by expanding along the third column.       Row\/column expansion   Compute the determinant of the given matrix. Indicate which row or column you expand along.                    Determinant and invertibility   For each matrix, find all values of (if any) making the matrix invertible. Use the determinant.                         Adjoint matrix formula  Use the adjoint matrix formula to compute the inverse of each matrix.              Let . Show without computing the determinant directly. In other words, use a row reduction technique or .    Let be an matrix, and let be a scalar. State and prove a formula relating with .    Assume is a matrix satisfying . Compute the determinant of the given matrix.                          Let and be matrices, and suppose is invertible. Prove the following:     .     .      Assume the square matrix satisfies . Show that .    Prove that a square matrix is invertible if and only if is invertible.    Adjoint matrix   The following exercises explore the relationship between a square matrix and its adjoint .    Give an explicit example of a square matrix satisfying and .  In other words, show that it is possible for a nonzero matrix to have a zero adjoint matrix.    Let be an matrix. Prove: .    Prove: is invertible if and only if is invertible.    Assume is invertible. Prove: .     In our proof of statement (2) of we only showed that if is a square matrix with two identical rows, then . Assuming this, show that the same is true if has two identical columns.    State and prove an analogue to that describes how the corresponding column operations (i.e., scale a column by , swap two columns, column addition) affect the determinant of a matrix. (See ).   Express each of these types of column operations as multiplication on the right by an elementary matrix.    Let be the matrix with along the diagonal and 's elsewhere: i.e., . State and prove a formula for . (Your formula will involve , , and .)  Look at the and cases first. To prove the formula in the general case you may want to make use of row reduction and .    Given scalars the Vandermonde matrix is defined as . In other words, we have Prove: .     "
},
{
  "id": "d_minors",
  "level": "2",
  "url": "s_det.html#d_minors",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Submatrix notation.",
  "body": " Submatrix notation  submatrix    submatrix of    Let be an matrix with . Given , the submatrix of obtained by removing the -th row and -th column of is denoted .   "
},
{
  "id": "rm_minors",
  "level": "2",
  "url": "s_det.html#rm_minors",
  "type": "Warning",
  "number": "2.5.2",
  "title": "",
  "body": "  Do not conflate the submatrix notation with matrix entry notation : the former returns the submatrix of obtained by deleting the -th row and -th column; the latter returns the -th entry of .   "
},
{
  "id": "d_det",
  "level": "2",
  "url": "s_det.html#d_det",
  "type": "Definition",
  "number": "2.5.3",
  "title": "The determinant.",
  "body": " The determinant  determinant    determinant of    Let . The determinant is defined as follows:   Base case:  When we have and we define .    Recursive case:  When we define .      "
},
{
  "id": "rm_det_small_cases",
  "level": "2",
  "url": "s_det.html#rm_det_small_cases",
  "type": "Remark",
  "number": "2.5.4",
  "title": "Small <span class=\"process-math\">\\(n\\)<\/span> cases.",
  "body": " Small cases   Let's look at determinant formulas for the cases. You may remember the formula for matrices from ; we will make the connection more explicit in .  Given , we have . The formula for the case is simple enough to serve as a second base case , allowing us to end the recursive process of computing a general matrix once we get to expressions involving matrices.  Given , we have .   "
},
{
  "id": "th_det_triangular",
  "level": "2",
  "url": "s_det.html#th_det_triangular",
  "type": "Theorem",
  "number": "2.5.5",
  "title": "Determinant of triangular matrices.",
  "body": " Determinant of triangular matrices   Let be triangular (upper, lower, or diagonal). Then . In other words, the determinant of a triangular matrix is the product of its diagonal entries.    We only give the proof for lower triangular matrices; the proof in the upper triangular case is nearly identical.  For any let denote the proposition: The determinant of any lower triangular matrix is the product of its diagonal entries . We prove by induction that is true for all .   Base step: show is true  In this case , and is indeed the product of the diagonal entries of .    Induction step: show for all  Let be a lower triangular matrix. Then for all , and hence the determinant of is given by . Claim: is lower triangular. Indeed, first observe that we have for all ; by deleting the first row and first column we effectively bump each index up by one. Since is lower triangular we have for all , and hence also for all , proving the claim.  Lastly, assuming is true (the induction hypothesis) we have , as desired.    "
},
{
  "id": "cor_det_identity",
  "level": "2",
  "url": "s_det.html#cor_det_identity",
  "type": "Corollary",
  "number": "2.5.6",
  "title": "Determinant of identity matrices.",
  "body": " Determinant of identity matrices   Let be the identity matrix. Then .    This follows directly from since the diagonal entries of are all ones.   "
},
{
  "id": "d_minors_expansions",
  "level": "2",
  "url": "s_det.html#d_minors_expansions",
  "type": "Definition",
  "number": "2.5.7",
  "title": "Minors and expansions along rows\/columns.",
  "body": " Minors and expansions along rows\/columns  minor of matrix  expansion along row\/column    the -th minor of a matrix    Given an matrix , for any pair the -th minor of is defined as .  For any the expression is called the expansion along the -th row of .  For any , the expression is called the expansion along the -th column of .   "
},
{
  "id": "th_expansion_row",
  "level": "2",
  "url": "s_det.html#th_expansion_row",
  "type": "Theorem",
  "number": "2.5.8",
  "title": "Expansion along rows.",
  "body": " Expansion along rows   Let . For any we have . In other words, we can compute by expanding along any row of .    The proof is by induction on the size of the matrix.   Base step:  For there is nothing to prove. Given expanding along either row yields , as one easily verifies.    Induction step  Assume the claim is true of any matrix. Given we have . Expanding along the -th row of for any , on the other hand, we get . To show these two expressions are equal we use the induction hypothesis to compute each by expanding along its -th row: . The matrix is the result of first deleting row 1 and column from , and then deleting row and column of the resulting matrix. To deal with such iterated submatrices, we make some simple observations relating the rows and columns of and with those of .   The -th row of corresponds to the -th row of , and the first row of corresponds to the first row of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .    If , then the -th column of corresponds to the -th column of ; if , then the -th column of corresponds to the -th column of .   From these observations we derive the following table of formulas: . We now begin to unpack : . This completes the induction step, and thus the proof is finished.    "
},
{
  "id": "th_det_transpose",
  "level": "2",
  "url": "s_det.html#th_det_transpose",
  "type": "Theorem",
  "number": "2.5.9",
  "title": "Determinant and transposition.",
  "body": " Determinant and transposition   Let be an matrix. Then .    The proof is by induction on . The base case ( ) is trivial since for any matrix .  For induction we assume that for all we have for any matrix. Suppose is an matrix. We have . This completes the proof by induction. (Note how in the second equality in the chain above we compute in the -th term of by expanding along the -th row of . A similar observation applies to the penultimate equality.)   "
},
{
  "id": "cor_expansion_columns",
  "level": "2",
  "url": "s_det.html#cor_expansion_columns",
  "type": "Corollary",
  "number": "2.5.10",
  "title": "Expansion along columns.",
  "body": " Expansion along columns   Let . For any we have . In other words, we can compute by expanding along any row of .    For any , we have .   "
},
{
  "id": "ss_expansion_rows_columns-8",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-8",
  "type": "Example",
  "number": "2.5.11",
  "title": "",
  "body": "  Compute for .    First we compute by expanding along the second row. The only nonzero term of this expansion is the last one, yielding . We have . To compute its determinant we expand along its third column: We conclude that .   "
},
{
  "id": "rm_sign_matrix",
  "level": "2",
  "url": "s_det.html#rm_sign_matrix",
  "type": "Remark",
  "number": "2.5.12",
  "title": "Matrix of signs.",
  "body": " Matrix of signs   When expanding along a row or column, it is easy to get tripped up by the sign in front of the -th coefficient. A matrix of signs is a sort of mnemonic device to help you in this regard. It is easily generated by observing that the sign in front of the -th entry is always a (since ), and that any horizontal or vertical step within the matrix is accompanied by a change of sign. As an example, for we have the following matrix of signs: .   "
},
{
  "id": "fig_vid_det",
  "level": "2",
  "url": "s_det.html#fig_vid_det",
  "type": "Figure",
  "number": "2.5.13",
  "title": "Video: determinant",
  "body": " Video: determinant  Video: determinant   "
},
{
  "id": "th_det_zero_repeated_row",
  "level": "2",
  "url": "s_det.html#th_det_zero_repeated_row",
  "type": "Theorem",
  "number": "2.5.14",
  "title": "Zero rows\/columns, swapping rows\/columns, identical rows\/columns.",
  "body": " Zero rows\/columns, swapping rows\/columns, identical rows\/columns   Let be an matrix.   If has a zero row or zero column, then     Assume . Let be the matrix obtained by swapping two rows (or two columns) of . Then .    Assume . If has two identical rows or two identical columns, then .       The first statement is obvious since according to and we may compute the determinant by expanding along the zero row or zero column in question.  The third statement follows from the second. Indeed, if has two identical rows or columns, then the matrix obtained from by swapping the rows (or columns) in question is itself. Thus by the second statement, and we conclude that .  It remains only to show the second statement. We prove only the statement regarding swapping rows; the corresponding statement about columns follows from . The proof is by induction.   Base step:  Let . Then , and .    Induction step  We assume by induction that the result holds for any matrices, , and show the same is true for any matrix.  Let be an matrix, and suppose is the result of swapping the -th and -th rows of . We compute the determinants of and by expanding along the -th row, where and . This is possible since .  Moving along the -th row, notice that each submatrix is the result of swapping the two rows of that originally corresponded to the -th and -th rows of . Since these submatrices are of dimension , we have by induction. Lastly, since the -th rows of and are the same we have .    "
},
{
  "id": "d_adjoint",
  "level": "2",
  "url": "s_det.html#d_adjoint",
  "type": "Definition",
  "number": "2.5.15",
  "title": "Adjoint matrix.",
  "body": " Adjoint matrix  adjoint matrix    adjoint of a square matrix    Let be an matrix. The adjoint matrix of , denoted , is the matrix whose -th entry is defined as follows: .   "
},
{
  "id": "rm_adjoint",
  "level": "2",
  "url": "s_det.html#rm_adjoint",
  "type": "Remark",
  "number": "2.5.16",
  "title": "",
  "body": "  Be careful of the order reversal in this definition. The -th entry of is equal to plus or minus the -th minor of . Let's see this in action for some small matrices.  For we have .  For we have .   "
},
{
  "id": "th_adjoint",
  "level": "2",
  "url": "s_det.html#th_adjoint",
  "type": "Theorem",
  "number": "2.5.17",
  "title": "Adjoint matrix formula.",
  "body": " Adjoint matrix formula   Given an matrix , we have . As a consequence, if , then is invertible and .    First observe that the second statement regarding invertibility follows directly from , since in this case setting we have .  Thus it suffices to prove . To do so, we must show that .   Case:  In this case we have . A similar argument shows that , though in this case we use expansion along a column.    Case:  When we have , where is the matrix obtained by replacing the -th row of with a copy of its -th row. Since has two identical rows implies , as desired. Once again, a similar argument using expansion along a column shows that .    "
},
{
  "id": "ss_expansion_rows_columns-17",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-17",
  "type": "Example",
  "number": "2.5.18",
  "title": "",
  "body": "  Use the adjoint matrix formula to compute , where .    First compute by expanding along the third row: . Next, compute . Then we have .   "
},
{
  "id": "rm_adjoint_form",
  "level": "2",
  "url": "s_det.html#rm_adjoint_form",
  "type": "Remark",
  "number": "2.5.19",
  "title": "",
  "body": "  Before you get too excited about the adjoint matrix formula, you should know that as grows, this procedure becomes much more costly in terms of number of arithmetic operations involved than our inverse algorithm based on Gauss-Jordan elimination. You get a sense of this already from the previous example. In general, the Gauss-Jordan inverse algorithm is the way to go.   "
},
{
  "id": "th_det_row_ops",
  "level": "2",
  "url": "s_det.html#th_det_row_ops",
  "type": "Theorem",
  "number": "2.5.20",
  "title": "Row operations and determinant.",
  "body": " Row operations and determinant   Let be an matrix. Using the notation from we have:              .   In particular, taking , we have .    The first statement follows easily by computing by expanding along the -th row. The second statement is in fact a rephrasing of the second statement of . It remains to prove the third statement.  Let , and set . Then is identical to with the exception of the -th row, whose -th entry is . It follows that , where is the matrix obtained by replacing the -th row of with a row identical with its -th row. By we conclude , and thus , as desired.   "
},
{
  "id": "rm_det_row_ops",
  "level": "2",
  "url": "s_det.html#rm_det_row_ops",
  "type": "Remark",
  "number": "2.5.21",
  "title": "",
  "body": "  In the language of row operations, translates as follows:   Scaling a row of a matrix by has the effect of scaling the determinant by .    Swapping two rows of a matrix changes the sign of the determinant.    Performing a row addition operation on a matrix has no effect on the determinant.      "
},
{
  "id": "rm_det_col_ops",
  "level": "2",
  "url": "s_det.html#rm_det_col_ops",
  "type": "Remark",
  "number": "2.5.22",
  "title": "Column operations and the determinant.",
  "body": " Column operations and the determinant   As shown in the determinant behaves in a similar manner with respect to elementary column operations : , scaling a column by a nonzero constant scales the determinant by , swapping columns multiplies the determinant by , adding a multiple of one column to another leaves the determinant unchanged.   "
},
{
  "id": "cor_det_prod_elem",
  "level": "2",
  "url": "s_det.html#cor_det_prod_elem",
  "type": "Corollary",
  "number": "2.5.23",
  "title": "Determinant and products of elementary matrices.",
  "body": " Determinant and products of elementary matrices   Let be an matrix, and suppose we have for some collection of elementary matrices . Then .    This is an easy proof by induction on the number of elementary matrices involved, the base case ( ) of which is covered by .   "
},
{
  "id": "ss_det_row_ops-9",
  "level": "2",
  "url": "s_det.html#ss_det_row_ops-9",
  "type": "Example",
  "number": "2.5.24",
  "title": "Determinant via row reduction.",
  "body": " Determinant via row reduction   Suppose the matrix can be row reduced to by perfomring the following sequence of row operations:   First swap the second and third rows.    Then scale the first row by     Then replace the second row with the second row plus the first row.   Compute .    In terms of elementary matrices we have and hence We conclude that .   "
},
{
  "id": "th_inv_iff_det",
  "level": "2",
  "url": "s_det.html#th_inv_iff_det",
  "type": "Theorem",
  "number": "2.5.25",
  "title": "Determinant and invertibility.",
  "body": " Determinant and invertibility   Let be an matrix. Then is invertible if and only if .    The implication was proved in .  For the other direction, assume is invertible. Then implies is a product of elementary matrices: . Then implies . Since for all ( ), we conclude .   "
},
{
  "id": "th_det_mult",
  "level": "2",
  "url": "s_det.html#th_det_mult",
  "type": "Theorem",
  "number": "2.5.26",
  "title": "Determinant is multiplicative.",
  "body": " Determinant is multiplicative   Let and be matrices. Then .    We consider two cases based on the invertibility of and\/or .   or is not invertible  In this case is not invertible ( ), and hence by . By the same reasoning we must have or . It follows that in this case.    and both invertible  In this case we can write for some elementary matrices and ( ). Then .    "
},
{
  "id": "th_invertibility_expanded",
  "level": "2",
  "url": "s_det.html#th_invertibility_expanded",
  "type": "Theorem",
  "number": "2.5.27",
  "title": "Invertibility theorem (extended cut).",
  "body": " Invertibility theorem (extended cut)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .     "
},
{
  "id": "s_det_ex-1-2",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-2",
  "type": "Exercise",
  "number": "2.5.4.1",
  "title": "",
  "body": "  Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:            "
},
{
  "id": "s_det_ex-1-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-3",
  "type": "Exercise",
  "number": "2.5.4.2",
  "title": "",
  "body": "  Consider the following Gauss elimination:   What is the determinant of ?             "
},
{
  "id": "s_det_ex-1-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-4",
  "type": "Exercise",
  "number": "2.5.4.3",
  "title": "",
  "body": "  Find such that the following matrix is singular.             "
},
{
  "id": "s_det_ex-1-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-5",
  "type": "Exercise",
  "number": "2.5.4.4",
  "title": "",
  "body": "  If and are matrices, , , then   ,   ,   ,   ,   .                               "
},
{
  "id": "s_det_ex-2-2",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-2",
  "type": "Exercise",
  "number": "2.5.4.5",
  "title": "",
  "body": " Let    Compute by expanding along the second row.    Compute by expanding along the third column.     "
},
{
  "id": "s_det_ex-2-3-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-3",
  "type": "Exercise",
  "number": "2.5.4.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-3-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-4",
  "type": "Exercise",
  "number": "2.5.4.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-3-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-5",
  "type": "Exercise",
  "number": "2.5.4.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-3",
  "type": "Exercise",
  "number": "2.5.4.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-4",
  "type": "Exercise",
  "number": "2.5.4.10",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-5",
  "type": "Exercise",
  "number": "2.5.4.11",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-4-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-6",
  "type": "Exercise",
  "number": "2.5.4.12",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-5-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-5-3",
  "type": "Exercise",
  "number": "2.5.4.13",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-5-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-5-4",
  "type": "Exercise",
  "number": "2.5.4.14",
  "title": "",
  "body": "    "
},
{
  "id": "s_det_ex-2-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-6",
  "type": "Exercise",
  "number": "2.5.4.15",
  "title": "",
  "body": " Let . Show without computing the determinant directly. In other words, use a row reduction technique or .  "
},
{
  "id": "s_det_ex-2-7",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-7",
  "type": "Exercise",
  "number": "2.5.4.16",
  "title": "",
  "body": " Let be an matrix, and let be a scalar. State and prove a formula relating with .  "
},
{
  "id": "s_det_ex-2-8",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-8",
  "type": "Exercise",
  "number": "2.5.4.17",
  "title": "",
  "body": " Assume is a matrix satisfying . Compute the determinant of the given matrix.                        "
},
{
  "id": "s_det_ex-2-9",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-9",
  "type": "Exercise",
  "number": "2.5.4.18",
  "title": "",
  "body": " Let and be matrices, and suppose is invertible. Prove the following:     .     .    "
},
{
  "id": "s_det_ex-2-10",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-10",
  "type": "Exercise",
  "number": "2.5.4.19",
  "title": "",
  "body": " Assume the square matrix satisfies . Show that .  "
},
{
  "id": "s_det_ex-2-11",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-11",
  "type": "Exercise",
  "number": "2.5.4.20",
  "title": "",
  "body": " Prove that a square matrix is invertible if and only if is invertible.  "
},
{
  "id": "s_det_ex-2-12-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-3",
  "type": "Exercise",
  "number": "2.5.4.21",
  "title": "",
  "body": " Give an explicit example of a square matrix satisfying and .  In other words, show that it is possible for a nonzero matrix to have a zero adjoint matrix.  "
},
{
  "id": "s_det_ex-2-12-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-4",
  "type": "Exercise",
  "number": "2.5.4.22",
  "title": "",
  "body": " Let be an matrix. Prove: .  "
},
{
  "id": "s_det_ex-2-12-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-5",
  "type": "Exercise",
  "number": "2.5.4.23",
  "title": "",
  "body": " Prove: is invertible if and only if is invertible.  "
},
{
  "id": "s_det_ex-2-12-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-6",
  "type": "Exercise",
  "number": "2.5.4.24",
  "title": "",
  "body": " Assume is invertible. Prove: .  "
},
{
  "id": "s_det_ex-2-13",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-13",
  "type": "Exercise",
  "number": "2.5.4.25",
  "title": "",
  "body": " In our proof of statement (2) of we only showed that if is a square matrix with two identical rows, then . Assuming this, show that the same is true if has two identical columns.  "
},
{
  "id": "ex_det_col_ops",
  "level": "2",
  "url": "s_det.html#ex_det_col_ops",
  "type": "Exercise",
  "number": "2.5.4.26",
  "title": "",
  "body": " State and prove an analogue to that describes how the corresponding column operations (i.e., scale a column by , swap two columns, column addition) affect the determinant of a matrix. (See ).   Express each of these types of column operations as multiplication on the right by an elementary matrix.  "
},
{
  "id": "s_det_ex-2-15",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-15",
  "type": "Exercise",
  "number": "2.5.4.27",
  "title": "",
  "body": " Let be the matrix with along the diagonal and 's elsewhere: i.e., . State and prove a formula for . (Your formula will involve , , and .)  Look at the and cases first. To prove the formula in the general case you may want to make use of row reduction and .  "
},
{
  "id": "s_det_ex-2-16",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-16",
  "type": "Exercise",
  "number": "2.5.4.28",
  "title": "",
  "body": " Given scalars the Vandermonde matrix is defined as . In other words, we have Prove: .  "
},
{
  "id": "s_vectorspace",
  "level": "1",
  "url": "s_vectorspace.html",
  "type": "Section",
  "number": "3.1",
  "title": "Real vector spaces",
  "body": " Real vector spaces   When discussing matrix algebra we saw that operations from real number arithmetic have natural analogues in the world of matrices. Furthermore, the act of comparing these two different algebraic systems brought to light many interesting features of matrix algebra.  Why stop at matrices? Are there other interesting algebraic systems that admit analogous operations? If so, to what degree do these systems agree with or differ from real number or matrix algebra?  A common technique in mathematics for such investigations is to distill the important properties of the motivating operations into a list of axioms , and then to prove statements that apply to any system that satisfies these axioms.  We now embark on just such an axiomatic approach. The notion of a vector space arises from focusing on just two operations from matrix algebra: matrix addition and matrix scalar multiplication. As we saw in , these two operations satisfy many useful properties: , commutativity, associativity, distributivity, . Whereas earlier we showed directly that matrix algebra satisfies these properties, now we will come at things the other way: we record these various properties as a list of axioms, and declare any system that satisfies these axioms to be a vector space.  Once we've established the definition of a vector space, when we go on to investigate the properties enjoyed by vector spaces we make no assumptions beyond the fact that the basic axioms are satisfied. This approach comes off as somewhat abstract, but has the advantage that our conclusions now apply to any vector space you can think of. You don't have to reinvent the wheel each time you stumble across a new vector space.    Definition of a vector space   Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   A (real) vector space is a set together with two operations, scalar multiplication and vector addition , described in detail below.    Scalar multiplication  This operation takes as input any real number and any element , and outputs another element of , denoted . We describe this operation using function notation as follows: .    Vector addition  This operation takes as input any pair of elements and returns another element of , denoted . In function notation: .    Furthermore, these two operations must satisfy the following list of axioms.    Vector addition is commutative  For all , we have .    Vector addition is associative  For all , we have .    Existence of additive identity  There is an element such that for all , we have . The element is called the zero vector of .    Existence of additive inverses  For all , there is another element satisfying . Given , the element is called the vector inverse of .    Distribution over vector addition  For all and , we have .    Distribution over scalar addition  For all and , we have     Scalar multiplication is associative  For all and all , we have .    Scalar multiplicative identity  For all , we have .    We call the elements of a vector space vectors .      What's the deal with the real modifier? The reals are one example of a type of number system called a field . Other examples of fields are given by the complex numbers ( ) and the rational numbers ( ). If is a field, and if we replace each mention of in with a mention of , then we are left with the definition of a vector space over . Setting , for example, we get the definition of a complex vector space.  In our treatment of linear algebra we will largely focus on real vector spaces, and as such will often drop this modifier: hence the parentheses in the definition.      Examples  When introducing a new vector space there are many details in that must be verified. To help organize this task, follow this checklist:   Make explicit the underlying set of the vector space.    Make explicit what the scalar multiplication and vector addition operations are.    Identify an element of that serves as the zero vector and indicate the rule that assigns vector inverses to elements of .    Show that the two vector operations and our choice of zero vector and vector inverses satisfy the axioms of .   Think of items (1)-(3) of our checklist as official declarations about the makeup of our vector space: The underlying set shall be as stated ; We declare the vector operations thusly ; The zero vector shall be this element here, and vector inverses shall be assigned in this manner . Item (4) is where we get down to the nitty gritty of showing that the our proposed vector space structure articulated in (1)-(3) does indeed satisfy all the necessary properties.  In each of the examples below we carefully lay out the details of items (1)-(3) while often leaving much of the work of item (4) to you. You will meet these vector spaces frequently throughout the rest of your life. Each time you do, it will be helpful for orientation purposes to mentally run through items (1)-(3). Ask yourself: What is the underlying set? What are vector operations? What acts as the zero vector, and how do I assign vector inverses?   Vector space of matrices  vector space of matrices    vector space of matrices     Underlying set  The vector space of matrices , denoted , is the set of all matrices: i.e., .    Vector operations  Scalar multiplication and vector addition in are defined as matrix scalar multiplication and matrix addition, respectively.    Zero vector and vector inverses  The zero vector of is the zero matrix: i.e., .  Given an element , its vector inverse is the matrix additive inverse .    Verification of axioms  We showed in that matrix scalar multiplication and vector addition, satisfy axioms (i), (ii), (v)-(viii). implies that our choice of zero vector ( ) and vector inverses ( ) satisfies axioms (iii)-(iv).      Vector space of real -tuples  vector space of -tuples    vector space of -tuples     Underlying set  The vector space of real -tuples , denoted , is the set of all real -tuples with real coefficients: , .    Vector operations  The vector operations on -tuples are defined entry-wise.   Scalar multiplication . Given and , we define .   Vector addition . Given and , we define .    Zero vector and vector inverses  The zero vector is the -tuple of all zeros: i.e., .  Given a vector , we have .    Verification of axioms  It is clear that structurally speaking behaves exactly like , the vector space of row vectors: we have essentially just replaced brackets with parentheses. As such it follows from the previous example that , along with the given operations, constitutes a vector space.     Why introduce a new vector space, , if it is essentially the same thing as , or even for that matter? Recall that a matrix is not simply an ordered sequence: it is an ordered sequence arranged in a very particular way. This subtlety is baked into the very definition of matrix equality, and allows us to say that . There are situations, however, where we don't need this extra layer of structure, where we want to treat an ordered sequence simply as an ordered sequence. In such situations tuples are preferred to row or column vectors.  That said, the close connection between linear systems and matrix equations makes it very convenient to treat an -tuple as if it were the column vector . This conflation is so convenient, in fact, that we will simply declare it to be true by fiat!   Tuples shall be column vectors, and vice versa   We hereby declare that for all we have . In other words, tuples are henceforth the same as column vectors.    We now continue our catalog of vector spaces by moving on to more exotic examples, starting with the zero (or trivial) vector space .   Zero vector space  vector space zero vector space    the zero vector space     Underlying set  A zero (or trivial) vector space is a set containing exactly one element: i.e., .    Vector operations  Since contains only one element we have no real choice in defining our vector operations.   Scalar multiplication . Define for any and the unique element .   Vector addition . Define for the unique element .    Zero vector and vector inverses  We declare . Accordingly we will write from now on.  We declare .    Verification of axioms  It is clear that satisfies the axioms of : for axioms (i)-(ii) and (v)-(viii) both sides of the desired equality are equal to ; axioms (iii)-(iv) boil down to the fact that by definition.      The vector space of infinite real sequences  vector space of infinite real sequences    the vector space of infinite real sequences     Underlying set  The vector space of real infinite sequences , denoted , is the set of all infinite sequences , where for all : i.e., .    Vector operations  As in we define our vector operations on infinite sequences entry-wise.   Scalar multiplication . Given and , we define .   Vector addition . Given and , we define .    Zero vector and vector inverses  The zero vector is the sequence of all zeros: i.e., .  Given a vector , we let .    Verification of axioms  Exercise. Observe that since the vector operations are defined entry-wise, the vector arithmetic in not so very different from that of .      Real-valued functions  vector space of real-valued functions on a set    vector space of functions from to     Underlying set  Let be a set. The vector space of functions from to , denoted , is the set of all real-valued functions : , the set of all functions with domain and codomain .    Vector operations  The vector operations on defined below are generalizations of operations you may have seen before when learning about function transformations.   Scalar multiplication . Given and a real-valued function , we let be the function defined as .   Vector addition . Given real-valued functions and with domain , we let be the function defined as .    Zero vector and vector inverses  The zero vector is the constant function that assigns a value of 0 to all elements of : i.e., for all .  Given a function , its vector inverse is the function defined as .    Verification of axioms Exercise.      Take a moment to let the exotic quality of this example sink in. The things we are calling vectors in this case are entire functions !  Consider . A vector of is a function : a rule that assigns to any input a unique output . Thus the functions and defined as and are both vectors of , as is any function given by a formula involving familiar mathematical functions and operations (as long as the formula is defined for all ). That's a lot of vectors! And yet we are only beginning to scratch the surface, since a function of need not be given by a nice formula; it simply has to be a well-defined rule. For example, the function defined as is also an element of .  Hopefully this discussion gives some indication of how a vector space like is in some sense much larger than spaces like or , whose general elements can be described in a finite manner. This vague intuition can be made precise with the notion of the dimension of a vector space, which we develop in .    We end with an example that illustrates how we can define the vector operations to be anything we like, as long as they satisfy the axioms of . In this case scalar multiplication will be defined as real number exponentiation , and vector addition will be defined as real number multiplication .   Vector space of positive real numbers  vector space of positive real numbers    vector space of positive real numbers     Underlying set  The vector space of positive real numbers , denoted , is defined as .    Vector operations  Scalar multiplication is defined via exponentiation and vector addition is defined as multiplication.   Scalar multiplication . Given and we define .   Vector addition . Given , we define .    Zero vector and vector inverses  The zero vector of is the number 1: i.e., we have in the vector space .  Given the vector inverse is defined as .    Verification of axioms  Exercise. We point out, however, that in this case the fact that the operations are actually well-defined should be justified. This is where the positivity of elements of comes into play: since is a positive number, the power is defined for any and is again positive. Thus is indeed an element of . Similarly, if and are both positive numbers, then so is .     The notion of a linear combination of matrices ( ) generalizes easily to any vector space, and will be an important concept in the further development of our theory.   Linear combination of vectors  linear combination of vectors   Let be a vector space. An expression of the form , where and for all , is called a linear combination . The scalars are called the coefficients of the linear combination.      Let . Given the vectors and , compute the linear combination .    By definition of scalar multiplication in ( ) we have . Next, since vector addition in is defined as real number multiplication ( ), we conclude .      General properties  When proving a general fact about vector spaces we can only invoke the defining axioms; we cannot assume the vectors of the space assume any particular form. For example, we cannot assume vectors of are -tuples, or matrices, etc. We end with an example of such an axiomatic proof.   Basic vector space properties   Let be a vector space.   For all , we have .    For all , we have .    For all , we have .    For all , if , then or .        We prove (1), leaving (2)-(4) as an exercise.  First observe that , since .  By Axiom (vi) we have . Thus .  Now add , the vector inverse of , to both sides of the last equation: .  Now simplify this equation step by step using the axioms: .      WeBWork Exercises    Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  the sum:   the scalar multiple:   the zero vector:   the additive inverse of :                              Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  the sum:  ( , )  the scalar multiple:  ( , )  the zero vector:  ( , )  the additive inverse of :  ( , )                                                 Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  the sum:   the scalar multiple:   the additive inverse of :   the zero vector:   the additive inverse of :                                   Verify that , along with the proposed vector operations , satisfies the defining axioms of a vector space.    Verify that , along with the proposed vector operations , satisfies the defining axioms of a vector space.  Note: we use the funny symbols and for scalar multiplication and vector addition to prevent confusion between the vector operations of and real number arithmetic operations.    Failed vector spaces   In each exercise below, the provided set, along with proposed vector operations, does not constitute a vector space. Identify all details of the vector space definition that fail to be satisfied. In addition to checking the axioms, you should also ask whether the proposed vector operations are well-defined. Provide explicit counterexamples for each failed property.    Let . Define vector addition on to be the usual -tuple vector addition, but define scalar multiplication as .    Let . Define vector addition on to be the usual -tuple vector addition, but define scalar multiplication as .    Let . Define scalar multiplication and vector addition to be the usual matrix scalar multiplication and matrix addition.     Verifying vector space axioms   In each exercise below the provided set, along with proposed vector operations, does constitute a vector space. Verify the indicated axioms.    Let be a variable. Define , the set of all linear polynomials with constant coefficient equal to one. Define the vector operations as follows: . Verify axioms (iii)-(vi).    Let : i.e., is the set of pairs whose first entry is positive and whose second entry is negative. . Verify axioms (iii)-(v), and axiom (viii).     Prove statements (2)-(4) of . When treating a specific part you may assume the results of any part that has already been proven, including statement (1).    Let be a vector space.   Show that the zero vector of is unique: , show that if satisfies for all , then .    Fix . Show that the vector inverse of is unique: , show that if , then .   Thus we may speak of the zero vector of a vector space, and the vector inverse of a vector .    Let be a vector space. Prove: .    Let be a vector space. Prove that either ( , is the zero space) or is infinite. In other words, a vector space contains either exactly one element or infinitely many elements.   Assume contains a nonzero vector . Show that if , then . You assume the results of .    "
},
{
  "id": "d_vector_space",
  "level": "2",
  "url": "s_vectorspace.html#d_vector_space",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Vector space.",
  "body": " Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   A (real) vector space is a set together with two operations, scalar multiplication and vector addition , described in detail below.    Scalar multiplication  This operation takes as input any real number and any element , and outputs another element of , denoted . We describe this operation using function notation as follows: .    Vector addition  This operation takes as input any pair of elements and returns another element of , denoted . In function notation: .    Furthermore, these two operations must satisfy the following list of axioms.    Vector addition is commutative  For all , we have .    Vector addition is associative  For all , we have .    Existence of additive identity  There is an element such that for all , we have . The element is called the zero vector of .    Existence of additive inverses  For all , there is another element satisfying . Given , the element is called the vector inverse of .    Distribution over vector addition  For all and , we have .    Distribution over scalar addition  For all and , we have     Scalar multiplication is associative  For all and all , we have .    Scalar multiplicative identity  For all , we have .    We call the elements of a vector space vectors .   "
},
{
  "id": "rm_vectorspace_real",
  "level": "2",
  "url": "s_vectorspace.html#rm_vectorspace_real",
  "type": "Remark",
  "number": "3.1.2",
  "title": "",
  "body": "  What's the deal with the real modifier? The reals are one example of a type of number system called a field . Other examples of fields are given by the complex numbers ( ) and the rational numbers ( ). If is a field, and if we replace each mention of in with a mention of , then we are left with the definition of a vector space over . Setting , for example, we get the definition of a complex vector space.  In our treatment of linear algebra we will largely focus on real vector spaces, and as such will often drop this modifier: hence the parentheses in the definition.   "
},
{
  "id": "ex_vs_matrices",
  "level": "2",
  "url": "s_vectorspace.html#ex_vs_matrices",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Vector space of <span class=\"process-math\">\\(m\\times n\\)<\/span> matrices.",
  "body": " Vector space of matrices  vector space of matrices    vector space of matrices     Underlying set  The vector space of matrices , denoted , is the set of all matrices: i.e., .    Vector operations  Scalar multiplication and vector addition in are defined as matrix scalar multiplication and matrix addition, respectively.    Zero vector and vector inverses  The zero vector of is the zero matrix: i.e., .  Given an element , its vector inverse is the matrix additive inverse .    Verification of axioms  We showed in that matrix scalar multiplication and vector addition, satisfy axioms (i), (ii), (v)-(viii). implies that our choice of zero vector ( ) and vector inverses ( ) satisfies axioms (iii)-(iv).    "
},
{
  "id": "ex_vs_ntuples",
  "level": "2",
  "url": "s_vectorspace.html#ex_vs_ntuples",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Vector space of real <span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " Vector space of real -tuples  vector space of -tuples    vector space of -tuples     Underlying set  The vector space of real -tuples , denoted , is the set of all real -tuples with real coefficients: , .    Vector operations  The vector operations on -tuples are defined entry-wise.   Scalar multiplication . Given and , we define .   Vector addition . Given and , we define .    Zero vector and vector inverses  The zero vector is the -tuple of all zeros: i.e., .  Given a vector , we have .    Verification of axioms  It is clear that structurally speaking behaves exactly like , the vector space of row vectors: we have essentially just replaced brackets with parentheses. As such it follows from the previous example that , along with the given operations, constitutes a vector space.    "
},
{
  "id": "declaration_tuples_columns",
  "level": "2",
  "url": "s_vectorspace.html#declaration_tuples_columns",
  "type": "Fiat",
  "number": "3.1.5",
  "title": "Tuples shall be column vectors, and vice versa.",
  "body": " Tuples shall be column vectors, and vice versa   We hereby declare that for all we have . In other words, tuples are henceforth the same as column vectors.   "
},
{
  "id": "ex_vs_zerospace",
  "level": "2",
  "url": "s_vectorspace.html#ex_vs_zerospace",
  "type": "Definition",
  "number": "3.1.6",
  "title": "Zero vector space.",
  "body": " Zero vector space  vector space zero vector space    the zero vector space     Underlying set  A zero (or trivial) vector space is a set containing exactly one element: i.e., .    Vector operations  Since contains only one element we have no real choice in defining our vector operations.   Scalar multiplication . Define for any and the unique element .   Vector addition . Define for the unique element .    Zero vector and vector inverses  We declare . Accordingly we will write from now on.  We declare .    Verification of axioms  It is clear that satisfies the axioms of : for axioms (i)-(ii) and (v)-(viii) both sides of the desired equality are equal to ; axioms (iii)-(iv) boil down to the fact that by definition.    "
},
{
  "id": "ex_vs_infinitesequences",
  "level": "2",
  "url": "s_vectorspace.html#ex_vs_infinitesequences",
  "type": "Definition",
  "number": "3.1.7",
  "title": "The vector space of infinite real sequences.",
  "body": " The vector space of infinite real sequences  vector space of infinite real sequences    the vector space of infinite real sequences     Underlying set  The vector space of real infinite sequences , denoted , is the set of all infinite sequences , where for all : i.e., .    Vector operations  As in we define our vector operations on infinite sequences entry-wise.   Scalar multiplication . Given and , we define .   Vector addition . Given and , we define .    Zero vector and vector inverses  The zero vector is the sequence of all zeros: i.e., .  Given a vector , we let .    Verification of axioms  Exercise. Observe that since the vector operations are defined entry-wise, the vector arithmetic in not so very different from that of .    "
},
{
  "id": "ex_vs_functions",
  "level": "2",
  "url": "s_vectorspace.html#ex_vs_functions",
  "type": "Definition",
  "number": "3.1.8",
  "title": "Real-valued functions.",
  "body": " Real-valued functions  vector space of real-valued functions on a set    vector space of functions from to     Underlying set  Let be a set. The vector space of functions from to , denoted , is the set of all real-valued functions : , the set of all functions with domain and codomain .    Vector operations  The vector operations on defined below are generalizations of operations you may have seen before when learning about function transformations.   Scalar multiplication . Given and a real-valued function , we let be the function defined as .   Vector addition . Given real-valued functions and with domain , we let be the function defined as .    Zero vector and vector inverses  The zero vector is the constant function that assigns a value of 0 to all elements of : i.e., for all .  Given a function , its vector inverse is the function defined as .    Verification of axioms Exercise.   "
},
{
  "id": "rm_vs_functions",
  "level": "2",
  "url": "s_vectorspace.html#rm_vs_functions",
  "type": "Remark",
  "number": "3.1.9",
  "title": "",
  "body": "  Take a moment to let the exotic quality of this example sink in. The things we are calling vectors in this case are entire functions !  Consider . A vector of is a function : a rule that assigns to any input a unique output . Thus the functions and defined as and are both vectors of , as is any function given by a formula involving familiar mathematical functions and operations (as long as the formula is defined for all ). That's a lot of vectors! And yet we are only beginning to scratch the surface, since a function of need not be given by a nice formula; it simply has to be a well-defined rule. For example, the function defined as is also an element of .  Hopefully this discussion gives some indication of how a vector space like is in some sense much larger than spaces like or , whose general elements can be described in a finite manner. This vague intuition can be made precise with the notion of the dimension of a vector space, which we develop in .   "
},
{
  "id": "ex_vs_positivereals",
  "level": "2",
  "url": "s_vectorspace.html#ex_vs_positivereals",
  "type": "Definition",
  "number": "3.1.10",
  "title": "Vector space of positive real numbers.",
  "body": " Vector space of positive real numbers  vector space of positive real numbers    vector space of positive real numbers     Underlying set  The vector space of positive real numbers , denoted , is defined as .    Vector operations  Scalar multiplication is defined via exponentiation and vector addition is defined as multiplication.   Scalar multiplication . Given and we define .   Vector addition . Given , we define .    Zero vector and vector inverses  The zero vector of is the number 1: i.e., we have in the vector space .  Given the vector inverse is defined as .    Verification of axioms  Exercise. We point out, however, that in this case the fact that the operations are actually well-defined should be justified. This is where the positivity of elements of comes into play: since is a positive number, the power is defined for any and is again positive. Thus is indeed an element of . Similarly, if and are both positive numbers, then so is .    "
},
{
  "id": "d_vector_lin_comb",
  "level": "2",
  "url": "s_vectorspace.html#d_vector_lin_comb",
  "type": "Definition",
  "number": "3.1.11",
  "title": "Linear combination of vectors.",
  "body": " Linear combination of vectors  linear combination of vectors   Let be a vector space. An expression of the form , where and for all , is called a linear combination . The scalars are called the coefficients of the linear combination.   "
},
{
  "id": "ss_vectorspace_examples-18",
  "level": "2",
  "url": "s_vectorspace.html#ss_vectorspace_examples-18",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": "  Let . Given the vectors and , compute the linear combination .    By definition of scalar multiplication in ( ) we have . Next, since vector addition in is defined as real number multiplication ( ), we conclude .   "
},
{
  "id": "th_vectorspace_props",
  "level": "2",
  "url": "s_vectorspace.html#th_vectorspace_props",
  "type": "Theorem",
  "number": "3.1.13",
  "title": "Basic vector space properties.",
  "body": " Basic vector space properties   Let be a vector space.   For all , we have .    For all , we have .    For all , we have .    For all , if , then or .      "
},
{
  "id": "ss_vectorspace_properties-4",
  "level": "2",
  "url": "s_vectorspace.html#ss_vectorspace_properties-4",
  "type": "Proof",
  "number": "3.1.3.1",
  "title": "",
  "body": " We prove (1), leaving (2)-(4) as an exercise.  First observe that , since .  By Axiom (vi) we have . Thus .  Now add , the vector inverse of , to both sides of the last equation: .  Now simplify this equation step by step using the axioms: .  "
},
{
  "id": "s_vectorspace_ex-1-2",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-1-2",
  "type": "Exercise",
  "number": "3.1.4.1",
  "title": "",
  "body": "  Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  the sum:   the scalar multiple:   the zero vector:   the additive inverse of :                           "
},
{
  "id": "s_vectorspace_ex-1-3",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-1-3",
  "type": "Exercise",
  "number": "3.1.4.2",
  "title": "",
  "body": "  Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  the sum:  ( , )  the scalar multiple:  ( , )  the zero vector:  ( , )  the additive inverse of :  ( , )                                              "
},
{
  "id": "s_vectorspace_ex-1-4",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-1-4",
  "type": "Exercise",
  "number": "3.1.4.3",
  "title": "",
  "body": "  Let . For and define vector addition by and scalar multiplication by . It can be shown that is a vector space over the scalar field . Find the following:  the sum:   the scalar multiple:   the additive inverse of :   the zero vector:   the additive inverse of :                                "
},
{
  "id": "s_vectorspace_ex-2",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-2",
  "type": "Exercise",
  "number": "3.1.4.4",
  "title": "",
  "body": " Verify that , along with the proposed vector operations , satisfies the defining axioms of a vector space.  "
},
{
  "id": "s_vectorspace_ex-3",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-3",
  "type": "Exercise",
  "number": "3.1.4.5",
  "title": "",
  "body": " Verify that , along with the proposed vector operations , satisfies the defining axioms of a vector space.  Note: we use the funny symbols and for scalar multiplication and vector addition to prevent confusion between the vector operations of and real number arithmetic operations.  "
},
{
  "id": "s_vectorspace_ex-4-3",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-4-3",
  "type": "Exercise",
  "number": "3.1.4.6",
  "title": "",
  "body": " Let . Define vector addition on to be the usual -tuple vector addition, but define scalar multiplication as .  "
},
{
  "id": "s_vectorspace_ex-4-4",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-4-4",
  "type": "Exercise",
  "number": "3.1.4.7",
  "title": "",
  "body": " Let . Define vector addition on to be the usual -tuple vector addition, but define scalar multiplication as .  "
},
{
  "id": "s_vectorspace_ex-4-5",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-4-5",
  "type": "Exercise",
  "number": "3.1.4.8",
  "title": "",
  "body": " Let . Define scalar multiplication and vector addition to be the usual matrix scalar multiplication and matrix addition.  "
},
{
  "id": "s_vectorspace_ex-5-3",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-5-3",
  "type": "Exercise",
  "number": "3.1.4.9",
  "title": "",
  "body": " Let be a variable. Define , the set of all linear polynomials with constant coefficient equal to one. Define the vector operations as follows: . Verify axioms (iii)-(vi).  "
},
{
  "id": "s_vectorspace_ex-5-4",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-5-4",
  "type": "Exercise",
  "number": "3.1.4.10",
  "title": "",
  "body": " Let : i.e., is the set of pairs whose first entry is positive and whose second entry is negative. . Verify axioms (iii)-(v), and axiom (viii).  "
},
{
  "id": "s_vectorspace_ex-6",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-6",
  "type": "Exercise",
  "number": "3.1.4.11",
  "title": "",
  "body": " Prove statements (2)-(4) of . When treating a specific part you may assume the results of any part that has already been proven, including statement (1).  "
},
{
  "id": "s_vectorspace_ex-7",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-7",
  "type": "Exercise",
  "number": "3.1.4.12",
  "title": "",
  "body": " Let be a vector space.   Show that the zero vector of is unique: , show that if satisfies for all , then .    Fix . Show that the vector inverse of is unique: , show that if , then .   Thus we may speak of the zero vector of a vector space, and the vector inverse of a vector .  "
},
{
  "id": "s_vectorspace_ex-8",
  "level": "2",
  "url": "s_vectorspace.html#s_vectorspace_ex-8",
  "type": "Exercise",
  "number": "3.1.4.13",
  "title": "",
  "body": " Let be a vector space. Prove: .  "
},
{
  "id": "ex_vs_zero_or_infinite",
  "level": "2",
  "url": "s_vectorspace.html#ex_vs_zero_or_infinite",
  "type": "Exercise",
  "number": "3.1.4.14",
  "title": "",
  "body": " Let be a vector space. Prove that either ( , is the zero space) or is infinite. In other words, a vector space contains either exactly one element or infinitely many elements.   Assume contains a nonzero vector . Show that if , then . You assume the results of .  "
},
{
  "id": "s_transformation",
  "level": "1",
  "url": "s_transformation.html",
  "type": "Section",
  "number": "3.2",
  "title": "Linear transformations",
  "body": " Linear transformations   As detailed in a linear transformation is a special type of function between two vector spaces: one that respects in some sense the vector operations of both spaces.  This manner of theorizing is typical in mathematics: first we introduce a special class of objects defined axiomatically, then we introduce special functions or maps between these objects. Since the original objects of study (e.g. vector spaces) come equipped with special structural properties (e.g. vector operations), the functions we wish to study are the ones that somehow acknowledge this structure.  You have already seen this principle at work in your study of calculus. First we give some structure by defining a notion of proximity (i.e., is close to if is small), then we introduce a special family of functions that somehow respects this structure: these are precisely the continuous functions!  As you will see, linear transformations are not just interesting objects of study in their own right, they also serve as invaluable tools in our continued exploration of the intrinsic properties of vector spaces.  In the meantime rejoice in the fact that we can now give a succinct definition of linear algebra: it is the theory of vector spaces and the linear transformations between them. Go shout it from the rooftops!    Linear transformations  First and foremost, a linear transformation is a function. Before continuing on in this section, you may want to reaquiant yourself with the basic function concepts and notation outlined in .   Linear transformations   Let and be vector spaces. A function is a linear transformation (or linear ) if it satisfies the following properties:   For all , we have .    For all and we have .     If a function between vector spaces is nonlinear if it is not a linear transformation.     How precisely does a linear transformation respect vector space structure? In plain English: the image of a sum is the sum of the images, and the image of a scalar multiple is the scalar multiple of the image.   As our first examples of linear transformations, we define the zero transformation and identity transformation on a vector space.   Zero and identity transformation  linear transformation zero transformation  linear transformation identity transformation   Let and be vector spaces.  The zero transformation from to , denoted , is defined as follows: , where is the zero vector of . In other words, is the function that maps all elements of to the zero vector of .  The identity transformation of , denoted , is defined as follows: . In other words, for all .     Model of linear transformation proof  Let's show that the zero and identity functions are indeed linear transformations.  Let and be vector spaces, and let be the zero function. We verify each defining property separately.   Given , we have .    Given and , we have .   This proves that is a linear transformation.  Now let be a vector spaces, and let be the identity function.   Given , we have .    Given and , we have .   This proves that is a linear transformation.    Basic properties of linear transformations   Let be a linear transformation. Let and be the zero vectors of and , respectively.   We have .    For all , we have .    For any linear combination we have .          We employ some similar trickery to what was done in the proof of . Assuming is linear: . Thus, whatever may be, it satisfies . Canceling on both sides using , we conclude .    The argument is similar: . Since , adding to both sides of the equation yields .    This is an easy proof by induction using the two defining properties of a linear transformation in tandem.        Statement (3) of provides a more algebraic interpretation of how linear transformations preserve vector space structure: namely, they distribute over linear combinations of vectors.    The one-step linear transformation proof   As a sort of converse to (3) in , observe that if satisfies for all and , and , then is linear. Indeed, taking the special case yields (1) of ; and choosing yields (2) of .  This observation gives rise to an alternate one-step technique for proving linearity: given , show that for all and .      Matrix transformations  We now describe what turns out to be an entire family of examples of linear transformations: so-called matrix transformations of the form , where is a given matrix. This is a good place to recall the matrix mantra . Not only can a matrix represent a system of linear equations, it can represent a linear transformation. These are two very different concepts, and the matrix mantra helps us to not confuse the two. In the end a matrix is just a matrix: a mathematical tool that can be employed to diverse ends. Observe that the definition of matrix multiplication marks the first point where comes into play.   Matrix transformations  matrix transformation    the matrix transformation associated to    Let be an matrix. The matrix transformation associated to is the function defined as follows: . In other words, given input , the output is defined as .     Matrix transformations I   Let be an matrix. The function is a linear transformation.    We use the one-step technique. For any and , we have . This proves is a linear transformation.     As the title of suggests, there is a follow-up result ( ), and this states that in fact any linear transformation is of the form for some matrix . In other words, all linear transformations from to are matrix transformations.  As general as these two results are, mark well the restriction that remains: they apply only to functions with domain and codomain equal to a vector spaces of tuples. They say nothing for example about functions from to .     gives rise to an alternative technique for showing a function is a linear transformation: show that for some matrix .  As an example, consider the function . Conflating tuples with column vectors as described in we see that where . In other words, the original formula is just a description in terms of tuples of the function . It follows from that is linear.     Rotations and reflections in the plane  We now introduce two very important geometric examples of linear transformations: rotations and reflections in the plane. These operations are described in detail below; we use to prove these operations are in fact linear transformations.   Rotation in the plane  rotation as linear transformation    rotation by in the plane    Fix an angle and define to be the function that takes an input , considered as a point in the -plane, and returns the output obtained rotating by an angle of about the origin. The function is called rotation about the origin by the angle .  We can extract a formula from the rule defining by using polar coordinates: if has polar coordinates , then has polar coordinates .     Rotation is a linear transformation   Fix an angle . The rotation function is a linear transformation. In fact, we have , where .    By , we need only show that for the matrix indicated.  If the point has polar coordinates (so that and ), then its image under our rotation has polar coordinates . Translating back to rectangular coordinates, we see that . It follows that , where , as claimed.     Observe that it is not at all obvious geometrically that the rotation operation is linear : , that it preserves addition and scalar multiplication of vectors in . Indeed, our proof does not even show this directly, but instead first gives a matrix formula for rotation and then uses .  Since matrices of the form can be understood as defining rotations of the plane, we call them rotation matrices .    Rotation matrices   Find formulas for and , expressing your answer in terms of pairs (as opposed to column vectors).    The rotation matrix corresponding to is . Thus has formula . Note: this is as expected! Rotating by 180 degrees produces the inverse vector.  The rotation matrix corresponding to is . Thus has formula . Let's check our formula for for the vectors and : . Confirm for yourself geometrically that these are the points you get by rotating and by an angle of about the origin.    A second example of a geometric linear transformation is furnished by reflection through a line in .   Reflection through a line  reflection through a line   Fix an angle with , and let be the line through the origin that makes an angle of with the positive -axis.  Define to be the function that takes an input and returns the output obtained by reflecting through the line . In more detail: if lies on , then ; otherwise, is obtained by drawing the perpendicular through that passes through and taking the point on the other side of this line whose distance to is equal to the distance from to .  The function is called rotation through the line  .     Reflection is a linear transformation   Fix an angle . The reflection is a linear transformation. In fact we have , where .    See .     Visualizing reflection and rotation   The GeoGebra interactive below helps visualize the operation of rotations and reflections on the plane by showing how they act on the triangle .   Move or alter the triangle as you see fit.    Check the box of the desired operation, rotation or reflection.    If rotation is selected, the slider adjusts the angle of rotation.    If reflection is selected, the slider adjusts the angle determining the line of reflection. Click the Draw perps box to see the the perpendicular lines used to define the reflections of vertices .      Eigenspaces of a symmetric matrix are orthogonal   Visualizing reflection and rotation. Made with GeoGebra .       Additional examples  We now proceed to some examples involving our more exotic vector spaces.   Transposition is linear   Fix . Define the function as follows: . In other words, maps a matrix to its transpose.  Show that is a linear transformation.    We must show for all scalars and all matrices . This follows easily from properties of transpose:      Left-shift transformation   Define the left-shift operation , as follows: . In other words, we have . Show that is a linear transformation.    Let and be two infinite sequences in . For any we have . This proves is a linear transformation.      Video examples: deciding if is linear    Video: deciding if is linear  Video: deciding if is linear     Video: deciding if is linear  Video: deciding if is linear       Composition of linear transformations and matrix multiplication  We end by making good on a promise we made long ago to retroactively make sense of the definition of matrix multiplication. The key connecting concept, as it turns out, is composition of functions. We first need a result showing that composition preserves linearity.   Composition of linear transformations   Let be vector spaces, and suppose and are linear transformations. Then the composition is a linear transformation.    Exercise.    Turning now to matrix multiplication, suppose is and is . Let be their product. These matrices give rise to linear transformations . According to the composition is a linear transformation from (the domain of ) to (the codomain of ). We claim that . Indeed, identifying elements of with column vectors, for all we have . Thus, we can now understand the definition of matrix multiplication as being chosen precisely to encode how to compute the composition of two matrix transformations. The restriction on the dimension of the ingredient matrices is now understood as guaranteeing that the corresponding matrix transformations can be composed!     WeBWork Exercises    Let be a linear transformation that sends the vector into and maps into . Use properties of a linear transformation to calculate the following. (Enter your answers as ordered pairs, such as (1,2), including the parentheses.)   ,   ,   .                        Let be a vector space, and a linear transformation such that and . Then      ,      ,      .                                       Let be the linear transformation such that Find , , , and , where , , and are arbitrary real numbers.   ,   ,   ,   .                             If is a linear transformation such that and then  .              Let Let be the linear transformation satisfying Find the image of an arbitrary vector           Let Define the linear transformation by . Find the images of and under .             Let be a vector space, , and let and be linear transformations such that  Find the images of and under the composite of and .   ,   .                   For each of the following functions , show that is nonlinear by providing an explicit counterexample to one of the defining axioms or a consequence thereof.     ,      ,      ,      ,      ,      Transposition  Define as : , the function takes as input an matrix and returns as output an matrix. Show that is a linear transformation.   Scalar multiplication  Let be a vector space. Fix and define as : , is scalar multiplication by . Show that is a linear transformation.   Trace  Fix an integer . The trace function is the function defined as . Show that the trace function is a linear transformation.   Left\/right matrix multiplication  Let be an matrix, and let be an matrix. Define the functions and as follows: . In other words, is the multiply on the left by operation, and is the multiply on the right by C operation Show that and are linear transformations.   Conjugation  Fix an invertible matrix . Define as . Show that is a linear transformation. This operation is called conjugation by .   Sequence shift operators  Let , the space of all infinite sequences. Define the shift left function , , and shift right function , , as follows: Prove that and are linear transformations.   Function shift operators  Fix . Define as , where . Show that is a linear transformation.   Function scaling operators  Fix and define the functions as follows: . Show that and are linear transformations.   Adding and scaling linear transformations  Suppose that and are linear transformations.    Define the function as . Show that is a linear transformation.    Define the function as . Show that is a linear transformation.      Let be defined as , where . Show that is linear. You may use the results of and .    Prove .   Reflection through a line  Fix an angle with , let be the line through the origin that makes an angle of with the positive -axis, and let be the reflection operation as described in . Prove that is a linear transformation following the steps below.   In a manner similar to , describe in terms of the polar coordinates of . Additionally, it helps to write , where is the angle the line segment from the origin to makes with the line . Include a drawing to support your explanation.    Use your description in (a), along with some trigonometric identities, to show where .      Compositions of rotations and reflections  In this exercise we will show that if we compose a rotation or reflection with another rotation or reflection, as defined in and , the result is yet another rotation or reflection. For each part, express the given composition either as a rotation or reflection , where is expressed in terms of and .                         Use and , along with some trigonometric identities.    "
},
{
  "id": "d_linear_transform",
  "level": "2",
  "url": "s_transformation.html#d_linear_transform",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Linear transformations.",
  "body": " Linear transformations   Let and be vector spaces. A function is a linear transformation (or linear ) if it satisfies the following properties:   For all , we have .    For all and we have .     If a function between vector spaces is nonlinear if it is not a linear transformation.   "
},
{
  "id": "ss_linear_transform-4",
  "level": "2",
  "url": "s_transformation.html#ss_linear_transform-4",
  "type": "Remark",
  "number": "3.2.2",
  "title": "",
  "body": " How precisely does a linear transformation respect vector space structure? In plain English: the image of a sum is the sum of the images, and the image of a scalar multiple is the scalar multiple of the image.  "
},
{
  "id": "d_transform_zero_identity",
  "level": "2",
  "url": "s_transformation.html#d_transform_zero_identity",
  "type": "Definition",
  "number": "3.2.3",
  "title": "Zero and identity transformation.",
  "body": " Zero and identity transformation  linear transformation zero transformation  linear transformation identity transformation   Let and be vector spaces.  The zero transformation from to , denoted , is defined as follows: , where is the zero vector of . In other words, is the function that maps all elements of to the zero vector of .  The identity transformation of , denoted , is defined as follows: . In other words, for all .   "
},
{
  "id": "rm_transform_zero_identity",
  "level": "2",
  "url": "s_transformation.html#rm_transform_zero_identity",
  "type": "Remark",
  "number": "3.2.4",
  "title": "Model of linear transformation proof.",
  "body": " Model of linear transformation proof  Let's show that the zero and identity functions are indeed linear transformations.  Let and be vector spaces, and let be the zero function. We verify each defining property separately.   Given , we have .    Given and , we have .   This proves that is a linear transformation.  Now let be a vector spaces, and let be the identity function.   Given , we have .    Given and , we have .   This proves that is a linear transformation.  "
},
{
  "id": "th_transform_basic_props",
  "level": "2",
  "url": "s_transformation.html#th_transform_basic_props",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "Basic properties of linear transformations.",
  "body": " Basic properties of linear transformations   Let be a linear transformation. Let and be the zero vectors of and , respectively.   We have .    For all , we have .    For any linear combination we have .          We employ some similar trickery to what was done in the proof of . Assuming is linear: . Thus, whatever may be, it satisfies . Canceling on both sides using , we conclude .    The argument is similar: . Since , adding to both sides of the equation yields .    This is an easy proof by induction using the two defining properties of a linear transformation in tandem.      "
},
{
  "id": "rm_transform_dist",
  "level": "2",
  "url": "s_transformation.html#rm_transform_dist",
  "type": "Remark",
  "number": "3.2.6",
  "title": "",
  "body": " Statement (3) of provides a more algebraic interpretation of how linear transformations preserve vector space structure: namely, they distribute over linear combinations of vectors.  "
},
{
  "id": "proc_transform_onestep",
  "level": "2",
  "url": "s_transformation.html#proc_transform_onestep",
  "type": "Procedure",
  "number": "3.2.7",
  "title": "The one-step linear transformation proof.",
  "body": " The one-step linear transformation proof   As a sort of converse to (3) in , observe that if satisfies for all and , and , then is linear. Indeed, taking the special case yields (1) of ; and choosing yields (2) of .  This observation gives rise to an alternate one-step technique for proving linearity: given , show that for all and .   "
},
{
  "id": "d_matrix_transform",
  "level": "2",
  "url": "s_transformation.html#d_matrix_transform",
  "type": "Definition",
  "number": "3.2.8",
  "title": "Matrix transformations.",
  "body": " Matrix transformations  matrix transformation    the matrix transformation associated to    Let be an matrix. The matrix transformation associated to is the function defined as follows: . In other words, given input , the output is defined as .   "
},
{
  "id": "th_matrix_transform_i",
  "level": "2",
  "url": "s_transformation.html#th_matrix_transform_i",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "Matrix transformations I.",
  "body": " Matrix transformations I   Let be an matrix. The function is a linear transformation.    We use the one-step technique. For any and , we have . This proves is a linear transformation.   "
},
{
  "id": "rm_matrix_transform",
  "level": "2",
  "url": "s_transformation.html#rm_matrix_transform",
  "type": "Remark",
  "number": "3.2.10",
  "title": "",
  "body": " As the title of suggests, there is a follow-up result ( ), and this states that in fact any linear transformation is of the form for some matrix . In other words, all linear transformations from to are matrix transformations.  As general as these two results are, mark well the restriction that remains: they apply only to functions with domain and codomain equal to a vector spaces of tuples. They say nothing for example about functions from to .  "
},
{
  "id": "rm_matrix_transform_example",
  "level": "2",
  "url": "s_transformation.html#rm_matrix_transform_example",
  "type": "Remark",
  "number": "3.2.11",
  "title": "",
  "body": "  gives rise to an alternative technique for showing a function is a linear transformation: show that for some matrix .  As an example, consider the function . Conflating tuples with column vectors as described in we see that where . In other words, the original formula is just a description in terms of tuples of the function . It follows from that is linear.  "
},
{
  "id": "d_rotation",
  "level": "2",
  "url": "s_transformation.html#d_rotation",
  "type": "Definition",
  "number": "3.2.12",
  "title": "Rotation in the plane.",
  "body": " Rotation in the plane  rotation as linear transformation    rotation by in the plane    Fix an angle and define to be the function that takes an input , considered as a point in the -plane, and returns the output obtained rotating by an angle of about the origin. The function is called rotation about the origin by the angle .  We can extract a formula from the rule defining by using polar coordinates: if has polar coordinates , then has polar coordinates .   "
},
{
  "id": "th_transform_rotation",
  "level": "2",
  "url": "s_transformation.html#th_transform_rotation",
  "type": "Theorem",
  "number": "3.2.13",
  "title": "Rotation is a linear transformation.",
  "body": " Rotation is a linear transformation   Fix an angle . The rotation function is a linear transformation. In fact, we have , where .    By , we need only show that for the matrix indicated.  If the point has polar coordinates (so that and ), then its image under our rotation has polar coordinates . Translating back to rectangular coordinates, we see that . It follows that , where , as claimed.   "
},
{
  "id": "rm_rotation_matrix",
  "level": "2",
  "url": "s_transformation.html#rm_rotation_matrix",
  "type": "Remark",
  "number": "3.2.14",
  "title": "",
  "body": " Observe that it is not at all obvious geometrically that the rotation operation is linear : , that it preserves addition and scalar multiplication of vectors in . Indeed, our proof does not even show this directly, but instead first gives a matrix formula for rotation and then uses .  Since matrices of the form can be understood as defining rotations of the plane, we call them rotation matrices .  "
},
{
  "id": "ss_rotations_reflections-6",
  "level": "2",
  "url": "s_transformation.html#ss_rotations_reflections-6",
  "type": "Example",
  "number": "3.2.15",
  "title": "Rotation matrices.",
  "body": " Rotation matrices   Find formulas for and , expressing your answer in terms of pairs (as opposed to column vectors).    The rotation matrix corresponding to is . Thus has formula . Note: this is as expected! Rotating by 180 degrees produces the inverse vector.  The rotation matrix corresponding to is . Thus has formula . Let's check our formula for for the vectors and : . Confirm for yourself geometrically that these are the points you get by rotating and by an angle of about the origin.   "
},
{
  "id": "d_reflection",
  "level": "2",
  "url": "s_transformation.html#d_reflection",
  "type": "Definition",
  "number": "3.2.16",
  "title": "Reflection through a line.",
  "body": " Reflection through a line  reflection through a line   Fix an angle with , and let be the line through the origin that makes an angle of with the positive -axis.  Define to be the function that takes an input and returns the output obtained by reflecting through the line . In more detail: if lies on , then ; otherwise, is obtained by drawing the perpendicular through that passes through and taking the point on the other side of this line whose distance to is equal to the distance from to .  The function is called rotation through the line  .   "
},
{
  "id": "th_transform_reflection",
  "level": "2",
  "url": "s_transformation.html#th_transform_reflection",
  "type": "Theorem",
  "number": "3.2.17",
  "title": "Reflection is a linear transformation.",
  "body": " Reflection is a linear transformation   Fix an angle . The reflection is a linear transformation. In fact we have , where .    See .   "
},
{
  "id": "eg_rot_refl",
  "level": "2",
  "url": "s_transformation.html#eg_rot_refl",
  "type": "Example",
  "number": "3.2.18",
  "title": "Visualizing reflection and rotation.",
  "body": " Visualizing reflection and rotation   The GeoGebra interactive below helps visualize the operation of rotations and reflections on the plane by showing how they act on the triangle .   Move or alter the triangle as you see fit.    Check the box of the desired operation, rotation or reflection.    If rotation is selected, the slider adjusts the angle of rotation.    If reflection is selected, the slider adjusts the angle determining the line of reflection. Click the Draw perps box to see the the perpendicular lines used to define the reflections of vertices .      Eigenspaces of a symmetric matrix are orthogonal   Visualizing reflection and rotation. Made with GeoGebra .    "
},
{
  "id": "eg_transform_transpose",
  "level": "2",
  "url": "s_transformation.html#eg_transform_transpose",
  "type": "Example",
  "number": "3.2.20",
  "title": "Transposition is linear.",
  "body": " Transposition is linear   Fix . Define the function as follows: . In other words, maps a matrix to its transpose.  Show that is a linear transformation.    We must show for all scalars and all matrices . This follows easily from properties of transpose:    "
},
{
  "id": "ss_transform_exotic_examples-4",
  "level": "2",
  "url": "s_transformation.html#ss_transform_exotic_examples-4",
  "type": "Example",
  "number": "3.2.21",
  "title": "Left-shift transformation.",
  "body": " Left-shift transformation   Define the left-shift operation , as follows: . In other words, we have . Show that is a linear transformation.    Let and be two infinite sequences in . For any we have . This proves is a linear transformation.   "
},
{
  "id": "ss_transormation_video_examples-2-1",
  "level": "2",
  "url": "s_transformation.html#ss_transormation_video_examples-2-1",
  "type": "Figure",
  "number": "3.2.22",
  "title": "Video: deciding if <span class=\"process-math\">\\(T\\)<\/span> is linear",
  "body": " Video: deciding if is linear  Video: deciding if is linear   "
},
{
  "id": "ss_transormation_video_examples-2-2",
  "level": "2",
  "url": "s_transformation.html#ss_transormation_video_examples-2-2",
  "type": "Figure",
  "number": "3.2.23",
  "title": "Video: deciding if <span class=\"process-math\">\\(T\\)<\/span> is linear",
  "body": " Video: deciding if is linear  Video: deciding if is linear   "
},
{
  "id": "th_transform_composition",
  "level": "2",
  "url": "s_transformation.html#th_transform_composition",
  "type": "Theorem",
  "number": "3.2.24",
  "title": "Composition of linear transformations.",
  "body": " Composition of linear transformations   Let be vector spaces, and suppose and are linear transformations. Then the composition is a linear transformation.    Exercise.   "
},
{
  "id": "s_transformation_ex-1-2",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-1-2",
  "type": "Exercise",
  "number": "3.2.6.1",
  "title": "",
  "body": "  Let be a linear transformation that sends the vector into and maps into . Use properties of a linear transformation to calculate the following. (Enter your answers as ordered pairs, such as (1,2), including the parentheses.)   ,   ,   .                     "
},
{
  "id": "s_transformation_ex-1-3",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-1-3",
  "type": "Exercise",
  "number": "3.2.6.2",
  "title": "",
  "body": "  Let be a vector space, and a linear transformation such that and . Then      ,      ,      .                                    "
},
{
  "id": "s_transformation_ex-1-4",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-1-4",
  "type": "Exercise",
  "number": "3.2.6.3",
  "title": "",
  "body": "  Let be the linear transformation such that Find , , , and , where , , and are arbitrary real numbers.   ,   ,   ,   .                          "
},
{
  "id": "s_transformation_ex-1-5",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-1-5",
  "type": "Exercise",
  "number": "3.2.6.4",
  "title": "",
  "body": "  If is a linear transformation such that and then  .           "
},
{
  "id": "s_transformation_ex-1-6",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-1-6",
  "type": "Exercise",
  "number": "3.2.6.5",
  "title": "",
  "body": "  Let Let be the linear transformation satisfying Find the image of an arbitrary vector        "
},
{
  "id": "s_transformation_ex-1-7",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-1-7",
  "type": "Exercise",
  "number": "3.2.6.6",
  "title": "",
  "body": "  Let Define the linear transformation by . Find the images of and under .          "
},
{
  "id": "s_transformation_ex-1-8",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-1-8",
  "type": "Exercise",
  "number": "3.2.6.7",
  "title": "",
  "body": "  Let be a vector space, , and let and be linear transformations such that  Find the images of and under the composite of and .   ,   .                "
},
{
  "id": "s_transformation_ex-2",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-2",
  "type": "Exercise",
  "number": "3.2.6.8",
  "title": "",
  "body": " For each of the following functions , show that is nonlinear by providing an explicit counterexample to one of the defining axioms or a consequence thereof.     ,      ,      ,      ,      ,     "
},
{
  "id": "ex_transformation_transposition",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_transposition",
  "type": "Exercise",
  "number": "3.2.6.9",
  "title": "Transposition.",
  "body": "Transposition  Define as : , the function takes as input an matrix and returns as output an matrix. Show that is a linear transformation.  "
},
{
  "id": "ex_transformation_vector_scale",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_vector_scale",
  "type": "Exercise",
  "number": "3.2.6.10",
  "title": "Scalar multiplication.",
  "body": "Scalar multiplication  Let be a vector space. Fix and define as : , is scalar multiplication by . Show that is a linear transformation.  "
},
{
  "id": "ex_transformation_trace",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_trace",
  "type": "Exercise",
  "number": "3.2.6.11",
  "title": "Trace.",
  "body": "Trace  Fix an integer . The trace function is the function defined as . Show that the trace function is a linear transformation.  "
},
{
  "id": "ex_transformation_matrix_mult",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_matrix_mult",
  "type": "Exercise",
  "number": "3.2.6.12",
  "title": "Left\/right matrix multiplication.",
  "body": "Left\/right matrix multiplication  Let be an matrix, and let be an matrix. Define the functions and as follows: . In other words, is the multiply on the left by operation, and is the multiply on the right by C operation Show that and are linear transformations.  "
},
{
  "id": "ex_transformation_conjugation",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_conjugation",
  "type": "Exercise",
  "number": "3.2.6.13",
  "title": "Conjugation.",
  "body": "Conjugation  Fix an invertible matrix . Define as . Show that is a linear transformation. This operation is called conjugation by .  "
},
{
  "id": "ex_transformation_sequence_shift",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_sequence_shift",
  "type": "Exercise",
  "number": "3.2.6.14",
  "title": "Sequence shift operators.",
  "body": "Sequence shift operators  Let , the space of all infinite sequences. Define the shift left function , , and shift right function , , as follows: Prove that and are linear transformations.  "
},
{
  "id": "ex_transformation_function_shift",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_function_shift",
  "type": "Exercise",
  "number": "3.2.6.15",
  "title": "Function shift operators.",
  "body": "Function shift operators  Fix . Define as , where . Show that is a linear transformation.  "
},
{
  "id": "ex_transformation_function_scale",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_function_scale",
  "type": "Exercise",
  "number": "3.2.6.16",
  "title": "Function scaling operators.",
  "body": "Function scaling operators  Fix and define the functions as follows: . Show that and are linear transformations.  "
},
{
  "id": "ex_transformation_add_scale",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_add_scale",
  "type": "Exercise",
  "number": "3.2.6.17",
  "title": "Adding and scaling linear transformations.",
  "body": "Adding and scaling linear transformations  Suppose that and are linear transformations.    Define the function as . Show that is a linear transformation.    Define the function as . Show that is a linear transformation.    "
},
{
  "id": "s_transformation_ex-12",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-12",
  "type": "Exercise",
  "number": "3.2.6.18",
  "title": "",
  "body": " Let be defined as , where . Show that is linear. You may use the results of and .  "
},
{
  "id": "s_transformation_ex-13",
  "level": "2",
  "url": "s_transformation.html#s_transformation_ex-13",
  "type": "Exercise",
  "number": "3.2.6.19",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "ex_transformation_reflection",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_reflection",
  "type": "Exercise",
  "number": "3.2.6.20",
  "title": "Reflection through a line.",
  "body": "Reflection through a line  Fix an angle with , let be the line through the origin that makes an angle of with the positive -axis, and let be the reflection operation as described in . Prove that is a linear transformation following the steps below.   In a manner similar to , describe in terms of the polar coordinates of . Additionally, it helps to write , where is the angle the line segment from the origin to makes with the line . Include a drawing to support your explanation.    Use your description in (a), along with some trigonometric identities, to show where .     "
},
{
  "id": "ex_transformation_composition_rotations_reflections",
  "level": "2",
  "url": "s_transformation.html#ex_transformation_composition_rotations_reflections",
  "type": "Exercise",
  "number": "3.2.6.21",
  "title": "Compositions of rotations and reflections.",
  "body": "Compositions of rotations and reflections  In this exercise we will show that if we compose a rotation or reflection with another rotation or reflection, as defined in and , the result is yet another rotation or reflection. For each part, express the given composition either as a rotation or reflection , where is expressed in terms of and .                         Use and , along with some trigonometric identities.  "
},
{
  "id": "s_subspace",
  "level": "1",
  "url": "s_subspace.html",
  "type": "Section",
  "number": "3.3",
  "title": "Subspaces",
  "body": " Subspaces   The definition of a subspace of a vector space is very much in the same spirit as our definition of linear transformations. It is a subset of that in some sense respects the vector space structure: in the language of , it is a subset that is closed under addition and closed under scalar multiplication .  In fact the connection between linear transformations and subspaces goes deeper than this. As we will see in , a linear transformation naturally gives rise to two important subspaces: the null space of and the image of .    Definition of subspace   Subspace  subspace  vector space subspace   Let be a vector space. A subset is a subspace of if the following conditions hold:    contains the zero vector  We have .    is closed under addition  For all , if , then . Using logical notation: .    is closed under scalar multiplication  For all and , if , then . In logical notation: .        Let and let . Prove that is a subspace.    We must show properties (i)-(iii) hold for .    The zero element of is , which is certainly of the form . Thus .    We must prove the implication . .    We must prove the implication , for any . We have         Let and let . Is a vector space? Decide which of the of properties (i)-(iii) in (if any) are satisfied by .      Clearly .    Suppose . Then , in which case , and hence . Thus is closed under addition.    The set is not closed under scalar multiplication. Indeed, let . Then .       Two-step proof for subspaces   As with proofs regarding linearity of functions, we can merge conditions (ii)-(iii) of into a single statement about linear combinations, deriving the following two-step method for proving a set is a subspace of a vector space .    Show     Show that , for all .       Video example: deciding if is a subspace   Video: deciding if is a subspace  Video: deciding if is a subspace     Video: deciding if is a subspace  Video: deciding if is a subspace      Subspaces are vector spaces   If is a subspace of a vector space , then it inherits a vector space structure from by simply restricting the vector operations defined on to the subset .  It is important to understand how conditions (ii)-(iii) of come into play here. Without them we would not be able to say that restricting the vector operations of to elements of actually gives rise to well-defined operations on . To be well-defined the operations must output elements that lie not just in , but in itself. This is precisely what being closed under addition and scalar multiplication guarantees.  Once we know restriction gives rise to well-defined operations on , verifying the axioms of mostly amounts to observing that if a condition is true for all in , it is certainly true for all in the subset .  The existential axioms (iii) and (iv) of , however, require special consideration. By definition, a subspace contains the zero vector of , and clearly this still acts as the zero vector when we restrict the vector operations to . What about vector inverses? We know that for any there is a vector inverse lying somewhere in . We must show that in fact lies in : we need to show that the operation of taking the vector inverse is well-defined on . We prove this as follows: .    We now know how to determine whether a given subset of a vector space is in fact a subspace. We are also interested in means of constructing subspaces from some given ingredients. The result below tells us that taking the intersection of a given collection of subspaces results in a subspace. In we see how a linear transformation automatically gives rise to two subspaces.   Intersection of subspaces   Let be a vector space. Given a collection , where each is a subspace of , the intersection is a subspace.    Exercise.     Unions of subspaces   While the intersection of subspaces is again a subspace, the same is not true for unions of subspaces.  For example, take , and . Then each is a subspace, but their union is not.  Indeed, observe that and , but . Thus is not closed under addition. (Interestingly, it is closed under scalar multiplication.)      Subspaces of  The following theorem gives a convenient method of producing a subspace of : namely, given any matrix , the subset defined as is guaranteed to be a subspace of . We will see in that this construction is just one example of a more general subspace-building operation (see and ). We introduce the special case here for two reasons: (a) the construction allows us to easily provide examples of subspaces of , and (b) the proof of is a nice example of the two-step technique.   Solutions to form a subspace   Let be an matrix. The set of solutions to the homogeneous matrix equation is a subspace of .    Following the two-step technique, we first show that . This is clear, since . (We introduce the subscripts to distinguish between the zero vectors of the domain and .)  Next, we show that for any and any we have . If , then we have , by definition of . It the follows that the vector satisfies . Thus , as desired.     Solutions to homogeneous linear systems form a subspace   Recall from that the set of solutions to a matrix equation is the same thing as the set of solutions to the system of linear equations with augmented matrix . Thus, implies that the set of solutions to a homogeneous system of linear equations forms a subspace.     Alternative subspace method    provides an alternative way of showing that a subset : namely, find an matrix for which we have . This is often much faster than using the two-step technique.      Define the subset of as .   Prove that is a subspace by identifying it as the set of solutions to a homogeneous matrix equation.    Use (a) and Gaussian elimination to compute a parametric description of .         It is easy to see that where . We conclude is a subspace.    The augmented matrix row reduces to . Following we conclude that . Geometrically this is the line in passing through with direction vector .       Lines and planes   Recall that a line in that passes through the origin can be expressed as the set of solutions to an equation of the form . Similarly, a plane in that passes through the origin can be expressed as the the set of solutions to an equation of the form . We see immediately that both objects can be described as null spaces of a certain matrix: . We conclude from that lines in , and planes in , are subspaces, as long as they pass through the origin .  On the other hand, a line or plane that does not pass through the origin is not a subspace, since it does not contain the zero vector.  Question: How do we classify all subspaces of of ? We will be able to answer this easily with dimension theory. (See .)      Important subspaces of  In we met three families of square matrices: namely, the diagonal, upper triangular, and lower triangular matrices. (See ). We now introduce three more naturally occuring families. Before doing so, we give an official definition of the trace function. (See .)   trace of a matrix    the trace of   Trace of a matrix   Let be an matrix. The trace of , denoted is defined as the sum of the diagonal entries of : , .     trace-zero matrix  symmetric matrix  skew-symmetric matrix  Trace-zero, symmetric, and skew-symmetric   Fix an integer .    A matrix is said to be a trace-zero matrix if .    A matrix is symmetric if : equivalently, if for all .    A matrix is skew-symmetric if : equivalently, if for all .       Trace-zero symmetric, and skew-symmetric matrices   The set of all trace-zero matrices can be described as . The set of all symmetric matrices can be described as . The set of all skew-symmetric matrices can be described as .      Assume is a skew-symmetric matrix. By definition, for all we must have . It follows that for all . Thus the diagonal entries of a skew-symmetric matrix are always equal to 0.    It will come as no surprise that all of the afore mentioned matrix families are in fact subspaces of .   Matrix subspaces   Fix an integer . Each of the following subsets of is a subspace.    Diagonal matrices       Upper triangular matrices       Lower triangular matrices       Trace-zero matrix       Symmetric matrices       Skew-symmetric matrices         See       Important subspaces of  Let be an nondegenerate interval of : , an interval containing at least two elements. Recall that is the set of all functions from to . This is a pretty unwieldy vector space, containing some pathological characters, and when studying functions on an interval we will often restrict our attention to certain more well-behaved subsets: , continuous, differentiable, or infinitely differentiable functions. Not surprisingly, these subsets turn out to be subspaces of .   function space continuous  function space  function space infinitely differentiable  function space polynomial  polynomial   Let be a nondegenerate interval.    We denote by the set of all continuous functions on : , .    Fix . A function is on X if is -times differentiable on and its -th derivative is continuous. The set of all functions on is denoted .    A function is on X if is infinitely differentiable on . The set of all functions on is denoted .    A polynomial on of degree at most is a polynomial of the form , where . (See , and in particular for more details about polynomials.) Recall that if , we call the the degree of , denoted .  The set of polynomials of degree at most on is denoted ; the set of all polynomials on is denoted . When , we shorten the notation to and .       Function subspaces   Let be an interval. The sets are all subspaces of . Thus we have the following chain of subspaces: .    The proof amounts to the following observations:   The zero function is an element of all of these sets: the zero function is continuous, , , a polynomial, .    If and both satisfy one of these properties (continuous, , , polynomial, ), then so does for any .   The second, closed under linear combinations observation is easily seen for and ( , the sum of two polynomials of degree at most is clearly a polynomial of degree at most ); for the other spaces, this is a result of calculus properties to the effect that adding and scaling functions preserves continuity and differentiability.  Lastly, that each subset relation holds in the given chain follows from similar observations: polynomials are infinitely differentiable, differentiable functions are continuous, .    When working within the polynomial spaces or , we will constantly make use of the fact that a polynomial is completely determined by its coefficients , and that equality between polynomials can be decided by comparing their coefficients. This is the content of . We restate the result here in a more convenient form.   Polynomial equality   Let be a nondegenerate interval, and let be polynomials on .   We have if and only if for all .    In particular, if and only if for all .        Differential operators   Let be an interval. Define as : , takes as input a function on the interval , and returns its (first) derivative. Note that the definition of ensures that exists and is continuous on : hence , as claimed.  The operator is a linear transformation. Indeed, given and , we have .  Since taking -th derivatives amounts to composing the derivative operator with itself times, it follows from that for any the map , which takes a function to its -th derivative, is also linear. (Note that we are careful to pick the domain to guarantee this operation is well-defined!)  Lastly, by , we can add and scale these various operators to obtain more general linear transformations of the form . We call such a function a linear differential operator . Understanding the linear algebraic properties of these operators is crucial to the theory of linear differential equations, as illustrates.       WeBWork Exercises    Determine if each of the following sets is a subspace of , for an appropriate value of . Type \"yes\" or \"no\" for each answer.  Let be the set of all polynomials of the form , where is in .  Let be the set of all polynomials of the form , where is in .  Let be the set of all polynomials of the form , where is in .    yes    no    yes          For each subset of described below: (a) sketch as a region of , and (b) determine whether is a subspace. Justify your answer either with a proof or explicit counterexample.                     Determine whether the subset of described is a subspace of . Justify your answer either with a proof or explicit counterexample.              Fix a matrix and define , the set of matrices that commute with .      Determine whether the subset of is a subspace. Justify your answer either with a proof or explicit counterexample.                     Determine whether the subset of described is a subspace. Justify your answer either with a proof or explicit counterexample.                               For each given subset : (a) show that is a subspace by identifying it with the set of solutions to a matrix equation, and (b) give a parametric description of .                    Prove .    Prove (1)-(6) of .    "
},
{
  "id": "d_subspace",
  "level": "2",
  "url": "s_subspace.html#d_subspace",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Subspace.",
  "body": " Subspace  subspace  vector space subspace   Let be a vector space. A subset is a subspace of if the following conditions hold:    contains the zero vector  We have .    is closed under addition  For all , if , then . Using logical notation: .    is closed under scalar multiplication  For all and , if , then . In logical notation: .     "
},
{
  "id": "ss_subspace-3",
  "level": "2",
  "url": "s_subspace.html#ss_subspace-3",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Let and let . Prove that is a subspace.    We must show properties (i)-(iii) hold for .    The zero element of is , which is certainly of the form . Thus .    We must prove the implication . .    We must prove the implication , for any . We have      "
},
{
  "id": "ss_subspace-4",
  "level": "2",
  "url": "s_subspace.html#ss_subspace-4",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Let and let . Is a vector space? Decide which of the of properties (i)-(iii) in (if any) are satisfied by .      Clearly .    Suppose . Then , in which case , and hence . Thus is closed under addition.    The set is not closed under scalar multiplication. Indeed, let . Then .     "
},
{
  "id": "proc_twostep_proof",
  "level": "2",
  "url": "s_subspace.html#proc_twostep_proof",
  "type": "Procedure",
  "number": "3.3.4",
  "title": "Two-step proof for subspaces.",
  "body": " Two-step proof for subspaces   As with proofs regarding linearity of functions, we can merge conditions (ii)-(iii) of into a single statement about linear combinations, deriving the following two-step method for proving a set is a subspace of a vector space .    Show     Show that , for all .     "
},
{
  "id": "fig_vid_subspace1",
  "level": "2",
  "url": "s_subspace.html#fig_vid_subspace1",
  "type": "Figure",
  "number": "3.3.5",
  "title": "Video: deciding if <span class=\"process-math\">\\(W\\subseteq V\\)<\/span> is a subspace",
  "body": " Video: deciding if is a subspace  Video: deciding if is a subspace   "
},
{
  "id": "fig_vid_subspace2",
  "level": "2",
  "url": "s_subspace.html#fig_vid_subspace2",
  "type": "Figure",
  "number": "3.3.6",
  "title": "Video: deciding if <span class=\"process-math\">\\(W\\subseteq V\\)<\/span> is a subspace",
  "body": " Video: deciding if is a subspace  Video: deciding if is a subspace   "
},
{
  "id": "rm_subspace_is_vectorspace",
  "level": "2",
  "url": "s_subspace.html#rm_subspace_is_vectorspace",
  "type": "Remark",
  "number": "3.3.7",
  "title": "Subspaces are vector spaces.",
  "body": " Subspaces are vector spaces   If is a subspace of a vector space , then it inherits a vector space structure from by simply restricting the vector operations defined on to the subset .  It is important to understand how conditions (ii)-(iii) of come into play here. Without them we would not be able to say that restricting the vector operations of to elements of actually gives rise to well-defined operations on . To be well-defined the operations must output elements that lie not just in , but in itself. This is precisely what being closed under addition and scalar multiplication guarantees.  Once we know restriction gives rise to well-defined operations on , verifying the axioms of mostly amounts to observing that if a condition is true for all in , it is certainly true for all in the subset .  The existential axioms (iii) and (iv) of , however, require special consideration. By definition, a subspace contains the zero vector of , and clearly this still acts as the zero vector when we restrict the vector operations to . What about vector inverses? We know that for any there is a vector inverse lying somewhere in . We must show that in fact lies in : we need to show that the operation of taking the vector inverse is well-defined on . We prove this as follows: .   "
},
{
  "id": "th_subspace_intersection",
  "level": "2",
  "url": "s_subspace.html#th_subspace_intersection",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "Intersection of subspaces.",
  "body": " Intersection of subspaces   Let be a vector space. Given a collection , where each is a subspace of , the intersection is a subspace.    Exercise.   "
},
{
  "id": "rm_subspace_union",
  "level": "2",
  "url": "s_subspace.html#rm_subspace_union",
  "type": "Remark",
  "number": "3.3.9",
  "title": "Unions of subspaces.",
  "body": " Unions of subspaces   While the intersection of subspaces is again a subspace, the same is not true for unions of subspaces.  For example, take , and . Then each is a subspace, but their union is not.  Indeed, observe that and , but . Thus is not closed under addition. (Interestingly, it is closed under scalar multiplication.)   "
},
{
  "id": "th_subspace_matrix_solutions",
  "level": "2",
  "url": "s_subspace.html#th_subspace_matrix_solutions",
  "type": "Theorem",
  "number": "3.3.10",
  "title": "Solutions to <span class=\"process-math\">\\(A\\boldx=\\boldzero\\)<\/span> form a subspace.",
  "body": " Solutions to form a subspace   Let be an matrix. The set of solutions to the homogeneous matrix equation is a subspace of .    Following the two-step technique, we first show that . This is clear, since . (We introduce the subscripts to distinguish between the zero vectors of the domain and .)  Next, we show that for any and any we have . If , then we have , by definition of . It the follows that the vector satisfies . Thus , as desired.   "
},
{
  "id": "rm_subspace_matrix_solution",
  "level": "2",
  "url": "s_subspace.html#rm_subspace_matrix_solution",
  "type": "Remark",
  "number": "3.3.11",
  "title": "Solutions to homogeneous linear systems form a subspace.",
  "body": " Solutions to homogeneous linear systems form a subspace   Recall from that the set of solutions to a matrix equation is the same thing as the set of solutions to the system of linear equations with augmented matrix . Thus, implies that the set of solutions to a homogeneous system of linear equations forms a subspace.   "
},
{
  "id": "rm_subspace_alt",
  "level": "2",
  "url": "s_subspace.html#rm_subspace_alt",
  "type": "Remark",
  "number": "3.3.12",
  "title": "Alternative subspace method.",
  "body": " Alternative subspace method    provides an alternative way of showing that a subset : namely, find an matrix for which we have . This is often much faster than using the two-step technique.   "
},
{
  "id": "ss_subspaces_tuples-6",
  "level": "2",
  "url": "s_subspace.html#ss_subspaces_tuples-6",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": "  Define the subset of as .   Prove that is a subspace by identifying it as the set of solutions to a homogeneous matrix equation.    Use (a) and Gaussian elimination to compute a parametric description of .         It is easy to see that where . We conclude is a subspace.    The augmented matrix row reduces to . Following we conclude that . Geometrically this is the line in passing through with direction vector .     "
},
{
  "id": "eg_lines_planes",
  "level": "2",
  "url": "s_subspace.html#eg_lines_planes",
  "type": "Example",
  "number": "3.3.14",
  "title": "Lines and planes.",
  "body": " Lines and planes   Recall that a line in that passes through the origin can be expressed as the set of solutions to an equation of the form . Similarly, a plane in that passes through the origin can be expressed as the the set of solutions to an equation of the form . We see immediately that both objects can be described as null spaces of a certain matrix: . We conclude from that lines in , and planes in , are subspaces, as long as they pass through the origin .  On the other hand, a line or plane that does not pass through the origin is not a subspace, since it does not contain the zero vector.  Question: How do we classify all subspaces of of ? We will be able to answer this easily with dimension theory. (See .)   "
},
{
  "id": "d_trace",
  "level": "2",
  "url": "s_subspace.html#d_trace",
  "type": "Definition",
  "number": "3.3.15",
  "title": "Trace of a matrix.",
  "body": " trace of a matrix    the trace of   Trace of a matrix   Let be an matrix. The trace of , denoted is defined as the sum of the diagonal entries of : , .   "
},
{
  "id": "d_tracezero_symmetric_skewsymmetric",
  "level": "2",
  "url": "s_subspace.html#d_tracezero_symmetric_skewsymmetric",
  "type": "Definition",
  "number": "3.3.16",
  "title": "Trace-zero, symmetric, and skew-symmetric.",
  "body": " trace-zero matrix  symmetric matrix  skew-symmetric matrix  Trace-zero, symmetric, and skew-symmetric   Fix an integer .    A matrix is said to be a trace-zero matrix if .    A matrix is symmetric if : equivalently, if for all .    A matrix is skew-symmetric if : equivalently, if for all .     "
},
{
  "id": "ss_subspace_matrices-5",
  "level": "2",
  "url": "s_subspace.html#ss_subspace_matrices-5",
  "type": "Example",
  "number": "3.3.17",
  "title": "Trace-zero symmetric, and skew-symmetric <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Trace-zero symmetric, and skew-symmetric matrices   The set of all trace-zero matrices can be described as . The set of all symmetric matrices can be described as . The set of all skew-symmetric matrices can be described as .   "
},
{
  "id": "rm_skew-symmetric",
  "level": "2",
  "url": "s_subspace.html#rm_skew-symmetric",
  "type": "Remark",
  "number": "3.3.18",
  "title": "",
  "body": "  Assume is a skew-symmetric matrix. By definition, for all we must have . It follows that for all . Thus the diagonal entries of a skew-symmetric matrix are always equal to 0.   "
},
{
  "id": "th_matrix_subspaces",
  "level": "2",
  "url": "s_subspace.html#th_matrix_subspaces",
  "type": "Theorem",
  "number": "3.3.19",
  "title": "Matrix subspaces.",
  "body": " Matrix subspaces   Fix an integer . Each of the following subsets of is a subspace.    Diagonal matrices       Upper triangular matrices       Lower triangular matrices       Trace-zero matrix       Symmetric matrices       Skew-symmetric matrices         See    "
},
{
  "id": "d_subspace_functions",
  "level": "2",
  "url": "s_subspace.html#d_subspace_functions",
  "type": "Definition",
  "number": "3.3.20",
  "title": "",
  "body": " function space continuous  function space  function space infinitely differentiable  function space polynomial  polynomial   Let be a nondegenerate interval.    We denote by the set of all continuous functions on : , .    Fix . A function is on X if is -times differentiable on and its -th derivative is continuous. The set of all functions on is denoted .    A function is on X if is infinitely differentiable on . The set of all functions on is denoted .    A polynomial on of degree at most is a polynomial of the form , where . (See , and in particular for more details about polynomials.) Recall that if , we call the the degree of , denoted .  The set of polynomials of degree at most on is denoted ; the set of all polynomials on is denoted . When , we shorten the notation to and .     "
},
{
  "id": "th_subspace_functions",
  "level": "2",
  "url": "s_subspace.html#th_subspace_functions",
  "type": "Theorem",
  "number": "3.3.21",
  "title": "Function subspaces.",
  "body": " Function subspaces   Let be an interval. The sets are all subspaces of . Thus we have the following chain of subspaces: .    The proof amounts to the following observations:   The zero function is an element of all of these sets: the zero function is continuous, , , a polynomial, .    If and both satisfy one of these properties (continuous, , , polynomial, ), then so does for any .   The second, closed under linear combinations observation is easily seen for and ( , the sum of two polynomials of degree at most is clearly a polynomial of degree at most ); for the other spaces, this is a result of calculus properties to the effect that adding and scaling functions preserves continuity and differentiability.  Lastly, that each subset relation holds in the given chain follows from similar observations: polynomials are infinitely differentiable, differentiable functions are continuous, .   "
},
{
  "id": "th_poly_equality",
  "level": "2",
  "url": "s_subspace.html#th_poly_equality",
  "type": "Theorem",
  "number": "3.3.22",
  "title": "Polynomial equality.",
  "body": " Polynomial equality   Let be a nondegenerate interval, and let be polynomials on .   We have if and only if for all .    In particular, if and only if for all .      "
},
{
  "id": "rm_subspaces_derivatives",
  "level": "2",
  "url": "s_subspace.html#rm_subspaces_derivatives",
  "type": "Remark",
  "number": "3.3.23",
  "title": "Differential operators.",
  "body": " Differential operators   Let be an interval. Define as : , takes as input a function on the interval , and returns its (first) derivative. Note that the definition of ensures that exists and is continuous on : hence , as claimed.  The operator is a linear transformation. Indeed, given and , we have .  Since taking -th derivatives amounts to composing the derivative operator with itself times, it follows from that for any the map , which takes a function to its -th derivative, is also linear. (Note that we are careful to pick the domain to guarantee this operation is well-defined!)  Lastly, by , we can add and scale these various operators to obtain more general linear transformations of the form . We call such a function a linear differential operator . Understanding the linear algebraic properties of these operators is crucial to the theory of linear differential equations, as illustrates.   "
},
{
  "id": "s_subspace_ex-1-2",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-1-2",
  "type": "Exercise",
  "number": "3.3.5.1",
  "title": "",
  "body": "  Determine if each of the following sets is a subspace of , for an appropriate value of . Type \"yes\" or \"no\" for each answer.  Let be the set of all polynomials of the form , where is in .  Let be the set of all polynomials of the form , where is in .  Let be the set of all polynomials of the form , where is in .    yes    no    yes      "
},
{
  "id": "s_subspace_ex-2-2",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-2-2",
  "type": "Exercise",
  "number": "3.3.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-2-3",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-2-3",
  "type": "Exercise",
  "number": "3.3.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-2-4",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-2-4",
  "type": "Exercise",
  "number": "3.3.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-3-2",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-3-2",
  "type": "Exercise",
  "number": "3.3.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-3-3",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-3-3",
  "type": "Exercise",
  "number": "3.3.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-3-4",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-3-4",
  "type": "Exercise",
  "number": "3.3.5.7",
  "title": "",
  "body": " Fix a matrix and define , the set of matrices that commute with .  "
},
{
  "id": "s_subspace_ex-4-2",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-4-2",
  "type": "Exercise",
  "number": "3.3.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-4-3",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-4-3",
  "type": "Exercise",
  "number": "3.3.5.9",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-4-4",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-4-4",
  "type": "Exercise",
  "number": "3.3.5.10",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-5-2",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-5-2",
  "type": "Exercise",
  "number": "3.3.5.11",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-5-3",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-5-3",
  "type": "Exercise",
  "number": "3.3.5.12",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-5-4",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-5-4",
  "type": "Exercise",
  "number": "3.3.5.13",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-5-5",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-5-5",
  "type": "Exercise",
  "number": "3.3.5.14",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-5-6",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-5-6",
  "type": "Exercise",
  "number": "3.3.5.15",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-6-2",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-6-2",
  "type": "Exercise",
  "number": "3.3.5.16",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-6-3",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-6-3",
  "type": "Exercise",
  "number": "3.3.5.17",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-6-4",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-6-4",
  "type": "Exercise",
  "number": "3.3.5.18",
  "title": "",
  "body": "    "
},
{
  "id": "s_subspace_ex-7",
  "level": "2",
  "url": "s_subspace.html#s_subspace_ex-7",
  "type": "Exercise",
  "number": "3.3.5.19",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "ex_matrix_subspaces",
  "level": "2",
  "url": "s_subspace.html#ex_matrix_subspaces",
  "type": "Exercise",
  "number": "3.3.5.20",
  "title": "",
  "body": " Prove (1)-(6) of .  "
},
{
  "id": "s_nullspace_image",
  "level": "1",
  "url": "s_nullspace_image.html",
  "type": "Section",
  "number": "3.4",
  "title": "Null space and image",
  "body": " Null space and image   In this section we introduce two subspaces that are associated naturally to a linear transformation : the null space and image .    Null space and image of a linear transformation   Null space and image  linear transformation null space  linear transformation image  null space of a linear transformation  image   Let be a linear transformation.    Null space  The null space of , denoted , is defined as .    Image  The image (or range ) of , denoted , is defined as .        A few remarks:    Let . It is useful to keep in mind where and  live in this picture: we have and . In other words, the null space is a subset of the domain, and the image is a subset of the codomain.    Note that the image of a linear transformation is just its image when considered simply as a function of sets. (See .)    The notion of a null space is analogous to the set of zeros (or roots) of a real-valued function , , and the zeros of is a useful English shorthand for . However, there is an important difference between the null space of a linear transformation and the zeros of an arbitrary real-valued function: the null space of a linear transformation comes with the added structure of a vector space ( ), whereas the zeros of an arbitrary function in general do not.  The same observation can be made about the image of a linear transformation ( ), in comparison to the image of an arbitrary function.       Null space and image  Null space and image     Null space lives in the domain; image lives in the codomain.         The entire null space gets mapped to .         The entire domain is mapped to .          Matrix transformation   Let , and let be its associated matrix transformation. Give parametric descriptions of and .    By definition . Thus we must solve the matrix equation . The corresponding augmented matrix row reduces to . Following we conclude that . Next, is the set of for which there is an satisfying . Thus we are asking which choices of make the linear system consistent. Again, Gaussian elimination gives us our answer. The corresponding augmented matrix row reduces to , and conclude from that the system is consistent if and only if , or . Thus .    This first example illustrates that in the special case of a matrix transformation , where is an matrix, we have . In other words, the null space of a matrix transformation is just the set of solutions to the matrix equation . The situation arises frequently enough that it deserves its own notation.   null space of a matrix    the null space of   Null space of a matrix   Let be an matrix. The null space of , denoted , is defined as . Equivalently, .      Define as .    Prove that is linear.    Identify as a familiar family of matrices.    Identify as a familiar family of matrices.         Linearity is an easy consequence of transpose properties. For any and , we have .    We have . Thus is the subspace of symmetric matrices!    Let , subspace of skew-symmetric matrices. We claim . As this is a set equality, we prove it by showing the two set inclusions and . (See )  The inclusion is the easier of the two. If , then for some . Using various properties of transposition, we have , showing that is skew-symmetric, and thus , as desired.  The inclusion is trickier: we must show that if is skew-symmetric, then there is an such that . Assume we have a with . Letting we have . Thus we have found a matrix satisfying . It follows that .        The derivative (calculus refresher)   Let be the differential operator . (See .) Recall that for function spaces the zero vector is by definition the zero function on .  The null space of is the set of all differentiable functions whose derivative is the zero function: . From calculus we know that this is precisely the set of all constant functions. Thus . The image of is defined as . In other words, is the set of continuous functions that are the derivative of some other function: , the set of continuous functions that have an antiderivative. The fundamental theorem of calculus implies that in fact every continuous function has an antiderivative! Indeed, we may take . We conclude that .    You may have noticed that in the examples above the null space and image of the given linear transformation turned out to be subspaces. This is no accident!   Null space and image   If is a linear transformation, then is a subspace of , and is a subspace of .     Null space of  We use the two-step technique to prove is a subspace.    Since ( ), we see that .    Suppose . Given any , we have . This shows that , completing our proof.      Image of  The proof proceeds in a similar manner.    Since ( ), we see that is hit by , and hence is a member of .         In the special case where is the matrix transformation of an matrix , tells us that is a subspace. We knew this already from , which we now understand as a special instance of .     gives rise to the following indirect method of proving that a subset is a subspace.    Let be a subset of a vector space . We can prove indirectly that is a subspace by identifying it as the null space of a linear transformation .      Define the subset of as . Prove that is a subspace by identifying it as the null space of a linear transformation.    Define to be the evaluation transformation defined as . It is a straightforward exercise to show is a linear transformation. Furthermore, it is clear that . We conclude that is a subspace.    It is somewhat tricky to give a simple, concise description of the image of a linear transformation. As the next example illustrates, however, we can often come up with a parametric description by relating the problem to systems of linear equations.   Image computation   Consider the matrix transformation , where . Give a parametric description of and identify it as a familiar geoetric object.    By definition is the set . Thus to compute we must determine which choice of makes the system consistent. We answer this using our old friend : . Thus for the system to be consistent we need , and we conclude . Geometrically we recognize this as the plane passing through with normal vector . To describe it parametrically we can use again on the equation . The unknowns and are free here, and we see that .    Our last example in this subsection applies the concept of null space to differential equations.   A differential equation   Fix an interval . Let be the set of functions of satisfying the differential equation : , . Define as the differential operator . We have . Thus , and we see that the set of solutions to has the structure of a subspace. That is helpful information for us. For example, since is closed under vector addition and scalar multiplication, we know that if and are solutions to , then so is for any .       Injective and surjective linear transformations  Recall the notions of injectivity and surjectivity from : a function is injective (or one-to-one) if for all we have implies ; it is surjective (or onto) if for all there is an with . As with all functions, we will be interested to know whether a given linear transformation is injective or surjective; as it turns out, the concepts of null space and image give us a convenient manner of answering these questions. As remarked in , there is in general a direct connection between the surjectivity and the image of a function: namely, is surjective if and only if . It follows immediately that a linear transformation is surjective if and only if . As for injectivity, it is relatively easy to see that if a linear transformation is injective, then its null space must consist of just the zero vector of . What is somewhat surprising is that the converse is also true, as described in (2) of the theorem below.   Null space and injectivity   Let be a linear transformation.    Given vectors , we have . Equivalently, given and satisfying , the set of all satisfying can be described as .    We have .        We have . Equation follows directly from by observing that if , then if and only if .    According to we have if and only if for some .  If , then implies . Thus is injective in this case.  Conversely, if we can find a nonzero . It follows that for any  we have . Furthermore, since , we have . Thus is not injective in this case.       To determine whether a function of sets is injective, we normally have to show that for each output in the image of there is exactly one input satisfying . Think of this as checking injectivity at every output. tells us that in the special case of a linear transformation it is enough to check injectivity at exactly one ouput : namely, .   Let be a linear transformation, and let . Equation can be interpreted as follows: if we can find one particular input satisfying , then the set of all inputs satisfying is given by . This set is not necessarily a subspace. Indeed, if , then ! Instead, is what is called the translate of the subspace by the vector , and is denoted as . The corollary below is an application of this observation to solutions to matrix equations (equivalently, linear systems). It is obtained by treating the special case of where is a matrix transformation.   Solutions to matrix equations   Fix an matrix and column vector . If is a solution to , then the set of all solutions to is described as . In other words, is the translate of by the vector .     Solving matrix equations  Let's use Sage and to find the set of solutions to the matrix equation . This is the matrix equation form of the linear system we investigated in . The method solve_right can be used to find a particular solution  to .   We get the entire set of solutions by translating by the particular solution : . We can illustrate this in Sage by taking random elements of (computed using right_kernel ), adding them to xp , and verifying that the result is a solution to . Each time you evaluate the cell below, a randomly generated element of will be outputted.   You may wonder just how random these elements of are, considering that the entries always seem to be integers! Indeed, soliciting information about NS from Sage, we see that it has the structure of a free module defined over the the Integer Ring .   Without getting too far into the weeds, this is a result of our initial definition of using Matrix() . Without further information, Sage interprets this as a matrix with integer coefficients, as opposed to real coefficients. All further computations ( , xp and NS ) are done in a similar spirit. More precisely, the object NS generated by Sage consists of all integer linear combinations of the two rows in the echelon basis matrix displayed in the cell above. The next cell shows you how things change when we alert Sage to the fact that we are dealing with matrices over the reals. The only change is adding RR to Matrix() , which specifies that matrix coefficients should be understood as real numbers.    Our final example uses to nicely round out the discussion of lines and planes in and begun in . The conclusion is that although it is not the case that all lines and planes are subspaces, it is the case that they are translates of subspaces.   Lines and planes (again)   Let be a line in . This line does not necessarily pass through the origin, but the line does. Using linear algebra we recognize and as the solutions to the matrix equations and , respectively, where . Furthermore we see that is none other than . Now, fix a particular point . Since is a solution to , according to we have . In other words we see that is just the translate of the line by the vector . Since is a subspace, we conclude that all lines in are translates of a subspace.  A very similar argument can be given for an arbitrary plane in to show that it is a translate of of , which itself is a subspace.       True\/False Questions    Let , , and . Define .  Select true or false for each statement.    The vector is in the range of    The vector is in the kernel of     , so . We row-reduce to determine a solution of . Thus , so range .        Let for the matrix and  , , and .  Select true or false for each statement.  The vector is in the kernel of .   ???    True    False    The vector is in the range of .   ???    True    False               , so . Row-reduce to determine a solution of . . or simply notice that is the second column of . Row reduction shows that the equation has infinitely many solutions: for arbitrary , and both approaches lead to the conclusion that . Thus range .        If is a linear transformation, then consider whether the set ker ( ) is a subspace of .  Select true or false for each statement. first problem looking at subspaces   This set is a subspace of    This set contains the zero vector and is closed under vector addition and scalar multiplication.    This set is a subset of the domain.    This set is a subset of the codomain     , that contains the zero vector, and is closed under vector addition and scalar multiplication.        Let , , and . Define .  Select true or false for each statement.    The vector is in the kernel of    The vector is in the range of     , so . Since the range of is a subset of and , range .        If is a linear transformation, then select true or false for each statement about the set .    This set contains the zero vector and is closed under vector addition and scalar multiplication.    This set is a subset of the codomain.    This set is a subspace of .    This set is a subset of the domain.     , not the codomain .        WeBWork Exercises    Let be a one-to-one linear transformation from to .    What can one say about the relationship between and .                  There is not enough information to tell           Let be an onto linear transformation from to .    What can one say about the relationship between and .                  There is not enough information to tell           Let be an linear transformation from to . Let be the matrix associated to .  Fill in the correct answer for each of the following situations.    Every column in the row-echelon form of is a pivot column.    Two columns in the row-echelon form of are not pivot columns.    The row-echelon form of has a column corresponding to a free variable.    The row-echelon form of has no column corresponding to a free variable.      T is not one-to-one    T is one-to-one    There is not enough information to tell.           Let be a linear transformation from to .  Determine whether or not is onto in each of the following situations:    Suppose , , .    Suppose , , , where are vectors in .    Suppose is a one-to-one function      T is onto.    T is not onto.    There is not enough information to tell           Match the following concepts with the correct definitions:    is an onto function from to    is a one-to-one function from to    is a function from to      For every , there is a such that .    For every , there is a such that .    For every , there is a unique such that .    For every , there is at most one such that .           Let be an linear transformation from to . Let be the matrix associated to .  Fill in the correct answer for each of the following situations.    Two rows in the row-echelon form of do not have pivots.    The row-echelon form of has a row of zeros.    Every row in the row-echelon form of has a pivot.    The row-echelon form of has a pivot in every column.      T is onto    T is not onto    There is not enough information to tell.           Let be the linear transformation defined by Find a vector that is NOT in the image of .    and find a different, nonzero vector that IS in the image of .   .         Let Define the linear transformation by . Find a vector whose image under is .   .  Is the vector unique?   choose    unique    not unique                  For each linear transformation give parametric descriptions of and . To do so you will want to relate each computation to a system of linear equations. (See for an example of computing an image.)                     For the given linear transformation prove the claim about .     . Claim:      . Claim: is the set of all continuous symmetric functions. In other words,      Define as : , the value of at the input polynomial is computed by evaluating at the inputs .    Prove: is a linear transformation.    Prove: the is a subspace of .     Use .     For each subset show is a subspace by identifying it with the null space of a linear transformation . You may use any of the examples from , and any of the results from the exercises in .                     For each matrix and vector :   Find a particular solution to .    Find all solutions to the corresponding homogeneous matrix equation .    Use (a), (b), and to describe all solutions to .                       "
},
{
  "id": "d_nullspace_image",
  "level": "2",
  "url": "s_nullspace_image.html#d_nullspace_image",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Null space and image.",
  "body": " Null space and image  linear transformation null space  linear transformation image  null space of a linear transformation  image   Let be a linear transformation.    Null space  The null space of , denoted , is defined as .    Image  The image (or range ) of , denoted , is defined as .     "
},
{
  "id": "rm_nullspace_image",
  "level": "2",
  "url": "s_nullspace_image.html#rm_nullspace_image",
  "type": "Remark",
  "number": "3.4.2",
  "title": "",
  "body": "  A few remarks:    Let . It is useful to keep in mind where and  live in this picture: we have and . In other words, the null space is a subset of the domain, and the image is a subset of the codomain.    Note that the image of a linear transformation is just its image when considered simply as a function of sets. (See .)    The notion of a null space is analogous to the set of zeros (or roots) of a real-valued function , , and the zeros of is a useful English shorthand for . However, there is an important difference between the null space of a linear transformation and the zeros of an arbitrary real-valued function: the null space of a linear transformation comes with the added structure of a vector space ( ), whereas the zeros of an arbitrary function in general do not.  The same observation can be made about the image of a linear transformation ( ), in comparison to the image of an arbitrary function.     "
},
{
  "id": "fig_null_image",
  "level": "2",
  "url": "s_nullspace_image.html#fig_null_image",
  "type": "Figure",
  "number": "3.4.3",
  "title": "Null space and image",
  "body": " Null space and image  Null space and image     Null space lives in the domain; image lives in the codomain.         The entire null space gets mapped to .         The entire domain is mapped to .        "
},
{
  "id": "eg_nullspace_image_matrix",
  "level": "2",
  "url": "s_nullspace_image.html#eg_nullspace_image_matrix",
  "type": "Example",
  "number": "3.4.4",
  "title": "Matrix transformation.",
  "body": " Matrix transformation   Let , and let be its associated matrix transformation. Give parametric descriptions of and .    By definition . Thus we must solve the matrix equation . The corresponding augmented matrix row reduces to . Following we conclude that . Next, is the set of for which there is an satisfying . Thus we are asking which choices of make the linear system consistent. Again, Gaussian elimination gives us our answer. The corresponding augmented matrix row reduces to , and conclude from that the system is consistent if and only if , or . Thus .   "
},
{
  "id": "d_nullspace_matrix",
  "level": "2",
  "url": "s_nullspace_image.html#d_nullspace_matrix",
  "type": "Definition",
  "number": "3.4.5",
  "title": "Null space of a matrix.",
  "body": " null space of a matrix    the null space of   Null space of a matrix   Let be an matrix. The null space of , denoted , is defined as . Equivalently, .   "
},
{
  "id": "eg_nullspace_image_transposition",
  "level": "2",
  "url": "s_nullspace_image.html#eg_nullspace_image_transposition",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  Define as .    Prove that is linear.    Identify as a familiar family of matrices.    Identify as a familiar family of matrices.         Linearity is an easy consequence of transpose properties. For any and , we have .    We have . Thus is the subspace of symmetric matrices!    Let , subspace of skew-symmetric matrices. We claim . As this is a set equality, we prove it by showing the two set inclusions and . (See )  The inclusion is the easier of the two. If , then for some . Using various properties of transposition, we have , showing that is skew-symmetric, and thus , as desired.  The inclusion is trickier: we must show that if is skew-symmetric, then there is an such that . Assume we have a with . Letting we have . Thus we have found a matrix satisfying . It follows that .      "
},
{
  "id": "eg_nullspace_image_derivative",
  "level": "2",
  "url": "s_nullspace_image.html#eg_nullspace_image_derivative",
  "type": "Example",
  "number": "3.4.7",
  "title": "The derivative (calculus refresher).",
  "body": " The derivative (calculus refresher)   Let be the differential operator . (See .) Recall that for function spaces the zero vector is by definition the zero function on .  The null space of is the set of all differentiable functions whose derivative is the zero function: . From calculus we know that this is precisely the set of all constant functions. Thus . The image of is defined as . In other words, is the set of continuous functions that are the derivative of some other function: , the set of continuous functions that have an antiderivative. The fundamental theorem of calculus implies that in fact every continuous function has an antiderivative! Indeed, we may take . We conclude that .   "
},
{
  "id": "th_nullspace_image",
  "level": "2",
  "url": "s_nullspace_image.html#th_nullspace_image",
  "type": "Theorem",
  "number": "3.4.8",
  "title": "Null space and image.",
  "body": " Null space and image   If is a linear transformation, then is a subspace of , and is a subspace of .     Null space of  We use the two-step technique to prove is a subspace.    Since ( ), we see that .    Suppose . Given any , we have . This shows that , completing our proof.      Image of  The proof proceeds in a similar manner.    Since ( ), we see that is hit by , and hence is a member of .      "
},
{
  "id": "rm_nullspace_matrix",
  "level": "2",
  "url": "s_nullspace_image.html#rm_nullspace_matrix",
  "type": "Remark",
  "number": "3.4.9",
  "title": "",
  "body": "  In the special case where is the matrix transformation of an matrix , tells us that is a subspace. We knew this already from , which we now understand as a special instance of .   "
},
{
  "id": "proc_subspace_nullspace",
  "level": "2",
  "url": "s_nullspace_image.html#proc_subspace_nullspace",
  "type": "Procedure",
  "number": "3.4.10",
  "title": "",
  "body": "  Let be a subset of a vector space . We can prove indirectly that is a subspace by identifying it as the null space of a linear transformation .   "
},
{
  "id": "ss_nullspace_image-15",
  "level": "2",
  "url": "s_nullspace_image.html#ss_nullspace_image-15",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  Define the subset of as . Prove that is a subspace by identifying it as the null space of a linear transformation.    Define to be the evaluation transformation defined as . It is a straightforward exercise to show is a linear transformation. Furthermore, it is clear that . We conclude that is a subspace.   "
},
{
  "id": "eg_subspace_image",
  "level": "2",
  "url": "s_nullspace_image.html#eg_subspace_image",
  "type": "Example",
  "number": "3.4.12",
  "title": "Image computation.",
  "body": " Image computation   Consider the matrix transformation , where . Give a parametric description of and identify it as a familiar geoetric object.    By definition is the set . Thus to compute we must determine which choice of makes the system consistent. We answer this using our old friend : . Thus for the system to be consistent we need , and we conclude . Geometrically we recognize this as the plane passing through with normal vector . To describe it parametrically we can use again on the equation . The unknowns and are free here, and we see that .   "
},
{
  "id": "eg_diff_eq_ex",
  "level": "2",
  "url": "s_nullspace_image.html#eg_diff_eq_ex",
  "type": "Example",
  "number": "3.4.13",
  "title": "A differential equation.",
  "body": " A differential equation   Fix an interval . Let be the set of functions of satisfying the differential equation : , . Define as the differential operator . We have . Thus , and we see that the set of solutions to has the structure of a subspace. That is helpful information for us. For example, since is closed under vector addition and scalar multiplication, we know that if and are solutions to , then so is for any .    "
},
{
  "id": "th_nullspace_injective",
  "level": "2",
  "url": "s_nullspace_image.html#th_nullspace_injective",
  "type": "Theorem",
  "number": "3.4.14",
  "title": "Null space and injectivity.",
  "body": " Null space and injectivity   Let be a linear transformation.    Given vectors , we have . Equivalently, given and satisfying , the set of all satisfying can be described as .    We have .        We have . Equation follows directly from by observing that if , then if and only if .    According to we have if and only if for some .  If , then implies . Thus is injective in this case.  Conversely, if we can find a nonzero . It follows that for any  we have . Furthermore, since , we have . Thus is not injective in this case.     "
},
{
  "id": "ss_injective_surjective_transforms-4",
  "level": "2",
  "url": "s_nullspace_image.html#ss_injective_surjective_transforms-4",
  "type": "Remark",
  "number": "3.4.15",
  "title": "",
  "body": " To determine whether a function of sets is injective, we normally have to show that for each output in the image of there is exactly one input satisfying . Think of this as checking injectivity at every output. tells us that in the special case of a linear transformation it is enough to check injectivity at exactly one ouput : namely, .  "
},
{
  "id": "cor_matrix_equations",
  "level": "2",
  "url": "s_nullspace_image.html#cor_matrix_equations",
  "type": "Corollary",
  "number": "3.4.16",
  "title": "Solutions to matrix equations.",
  "body": " Solutions to matrix equations   Fix an matrix and column vector . If is a solution to , then the set of all solutions to is described as . In other words, is the translate of by the vector .   "
},
{
  "id": "sage_solve_matrix_eqn",
  "level": "2",
  "url": "s_nullspace_image.html#sage_solve_matrix_eqn",
  "type": "Sage example",
  "number": "9",
  "title": "Solving matrix equations.",
  "body": " Solving matrix equations  Let's use Sage and to find the set of solutions to the matrix equation . This is the matrix equation form of the linear system we investigated in . The method solve_right can be used to find a particular solution  to .   We get the entire set of solutions by translating by the particular solution : . We can illustrate this in Sage by taking random elements of (computed using right_kernel ), adding them to xp , and verifying that the result is a solution to . Each time you evaluate the cell below, a randomly generated element of will be outputted.   You may wonder just how random these elements of are, considering that the entries always seem to be integers! Indeed, soliciting information about NS from Sage, we see that it has the structure of a free module defined over the the Integer Ring .   Without getting too far into the weeds, this is a result of our initial definition of using Matrix() . Without further information, Sage interprets this as a matrix with integer coefficients, as opposed to real coefficients. All further computations ( , xp and NS ) are done in a similar spirit. More precisely, the object NS generated by Sage consists of all integer linear combinations of the two rows in the echelon basis matrix displayed in the cell above. The next cell shows you how things change when we alert Sage to the fact that we are dealing with matrices over the reals. The only change is adding RR to Matrix() , which specifies that matrix coefficients should be understood as real numbers.   "
},
{
  "id": "eg_lines_planes_general",
  "level": "2",
  "url": "s_nullspace_image.html#eg_lines_planes_general",
  "type": "Example",
  "number": "3.4.17",
  "title": "Lines and planes (again).",
  "body": " Lines and planes (again)   Let be a line in . This line does not necessarily pass through the origin, but the line does. Using linear algebra we recognize and as the solutions to the matrix equations and , respectively, where . Furthermore we see that is none other than . Now, fix a particular point . Since is a solution to , according to we have . In other words we see that is just the translate of the line by the vector . Since is a subspace, we conclude that all lines in are translates of a subspace.  A very similar argument can be given for an arbitrary plane in to show that it is a translate of of , which itself is a subspace.   "
},
{
  "id": "s_nullspace_image_ex-1-2",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-1-2",
  "type": "Exercise",
  "number": "3.4.3.1",
  "title": "",
  "body": "  Let , , and . Define .  Select true or false for each statement.    The vector is in the range of    The vector is in the kernel of     , so . We row-reduce to determine a solution of . Thus , so range .     "
},
{
  "id": "s_nullspace_image_ex-1-3",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-1-3",
  "type": "Exercise",
  "number": "3.4.3.2",
  "title": "",
  "body": "  Let for the matrix and  , , and .  Select true or false for each statement.  The vector is in the kernel of .   ???    True    False    The vector is in the range of .   ???    True    False               , so . Row-reduce to determine a solution of . . or simply notice that is the second column of . Row reduction shows that the equation has infinitely many solutions: for arbitrary , and both approaches lead to the conclusion that . Thus range .     "
},
{
  "id": "s_nullspace_image_ex-1-4",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-1-4",
  "type": "Exercise",
  "number": "3.4.3.3",
  "title": "",
  "body": "  If is a linear transformation, then consider whether the set ker ( ) is a subspace of .  Select true or false for each statement. first problem looking at subspaces   This set is a subspace of    This set contains the zero vector and is closed under vector addition and scalar multiplication.    This set is a subset of the domain.    This set is a subset of the codomain     , that contains the zero vector, and is closed under vector addition and scalar multiplication.     "
},
{
  "id": "s_nullspace_image_ex-1-5",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-1-5",
  "type": "Exercise",
  "number": "3.4.3.4",
  "title": "",
  "body": "  Let , , and . Define .  Select true or false for each statement.    The vector is in the kernel of    The vector is in the range of     , so . Since the range of is a subset of and , range .     "
},
{
  "id": "s_nullspace_image_ex-1-6",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-1-6",
  "type": "Exercise",
  "number": "3.4.3.5",
  "title": "",
  "body": "  If is a linear transformation, then select true or false for each statement about the set .    This set contains the zero vector and is closed under vector addition and scalar multiplication.    This set is a subset of the codomain.    This set is a subspace of .    This set is a subset of the domain.     , not the codomain .     "
},
{
  "id": "s_nullspace_image_ex-2-2",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-2",
  "type": "Exercise",
  "number": "3.4.3.6",
  "title": "",
  "body": "  Let be a one-to-one linear transformation from to .    What can one say about the relationship between and .                  There is not enough information to tell        "
},
{
  "id": "s_nullspace_image_ex-2-3",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-3",
  "type": "Exercise",
  "number": "3.4.3.7",
  "title": "",
  "body": "  Let be an onto linear transformation from to .    What can one say about the relationship between and .                  There is not enough information to tell        "
},
{
  "id": "s_nullspace_image_ex-2-4",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-4",
  "type": "Exercise",
  "number": "3.4.3.8",
  "title": "",
  "body": "  Let be an linear transformation from to . Let be the matrix associated to .  Fill in the correct answer for each of the following situations.    Every column in the row-echelon form of is a pivot column.    Two columns in the row-echelon form of are not pivot columns.    The row-echelon form of has a column corresponding to a free variable.    The row-echelon form of has no column corresponding to a free variable.      T is not one-to-one    T is one-to-one    There is not enough information to tell.        "
},
{
  "id": "s_nullspace_image_ex-2-5",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-5",
  "type": "Exercise",
  "number": "3.4.3.9",
  "title": "",
  "body": "  Let be a linear transformation from to .  Determine whether or not is onto in each of the following situations:    Suppose , , .    Suppose , , , where are vectors in .    Suppose is a one-to-one function      T is onto.    T is not onto.    There is not enough information to tell        "
},
{
  "id": "s_nullspace_image_ex-2-6",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-6",
  "type": "Exercise",
  "number": "3.4.3.10",
  "title": "",
  "body": "  Match the following concepts with the correct definitions:    is an onto function from to    is a one-to-one function from to    is a function from to      For every , there is a such that .    For every , there is a such that .    For every , there is a unique such that .    For every , there is at most one such that .        "
},
{
  "id": "s_nullspace_image_ex-2-7",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-7",
  "type": "Exercise",
  "number": "3.4.3.11",
  "title": "",
  "body": "  Let be an linear transformation from to . Let be the matrix associated to .  Fill in the correct answer for each of the following situations.    Two rows in the row-echelon form of do not have pivots.    The row-echelon form of has a row of zeros.    Every row in the row-echelon form of has a pivot.    The row-echelon form of has a pivot in every column.      T is onto    T is not onto    There is not enough information to tell.        "
},
{
  "id": "s_nullspace_image_ex-2-8",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-8",
  "type": "Exercise",
  "number": "3.4.3.12",
  "title": "",
  "body": "  Let be the linear transformation defined by Find a vector that is NOT in the image of .    and find a different, nonzero vector that IS in the image of .   .      "
},
{
  "id": "s_nullspace_image_ex-2-9",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-2-9",
  "type": "Exercise",
  "number": "3.4.3.13",
  "title": "",
  "body": "  Let Define the linear transformation by . Find a vector whose image under is .   .  Is the vector unique?   choose    unique    not unique             "
},
{
  "id": "s_nullspace_image_ex-3-2",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-3-2",
  "type": "Exercise",
  "number": "3.4.3.14",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-3-3",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-3-3",
  "type": "Exercise",
  "number": "3.4.3.15",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-3-4",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-3-4",
  "type": "Exercise",
  "number": "3.4.3.16",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-4-2",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-4-2",
  "type": "Exercise",
  "number": "3.4.3.17",
  "title": "",
  "body": "  . Claim:   "
},
{
  "id": "s_nullspace_image_ex-4-3",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-4-3",
  "type": "Exercise",
  "number": "3.4.3.18",
  "title": "",
  "body": "  . Claim: is the set of all continuous symmetric functions. In other words,   "
},
{
  "id": "s_nullspace_image_ex-5",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-5",
  "type": "Exercise",
  "number": "3.4.3.19",
  "title": "",
  "body": " Define as : , the value of at the input polynomial is computed by evaluating at the inputs .    Prove: is a linear transformation.    Prove: the is a subspace of .     Use .  "
},
{
  "id": "s_nullspace_image_ex-6-2",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-6-2",
  "type": "Exercise",
  "number": "3.4.3.20",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-6-3",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-6-3",
  "type": "Exercise",
  "number": "3.4.3.21",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-6-4",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-6-4",
  "type": "Exercise",
  "number": "3.4.3.22",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-7-2",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-7-2",
  "type": "Exercise",
  "number": "3.4.3.23",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-7-3",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-7-3",
  "type": "Exercise",
  "number": "3.4.3.24",
  "title": "",
  "body": "    "
},
{
  "id": "s_nullspace_image_ex-7-4",
  "level": "2",
  "url": "s_nullspace_image.html#s_nullspace_image_ex-7-4",
  "type": "Exercise",
  "number": "3.4.3.25",
  "title": "",
  "body": "    "
},
{
  "id": "s_span_independence",
  "level": "1",
  "url": "s_span_independence.html",
  "type": "Section",
  "number": "3.5",
  "title": "Span and linear independence",
  "body": " Span and linear independence   There are many situations in mathematics where we want to describe an infinite set in a concise manner. We saw this at work already in , where infinite sets of solutions to linear systems were neatly described with parametric expressions.  A similar issue arises when describing vector spaces and their subspaces. As we know, any vector space is either the zero space or infinite ( ). If we happen to be dealing with a subspace of , then there is the possibility of giving a parametric description; but how do we proceed when working in one of our more exotic vector spaces like ?  As we will see in the relevant linear algebraic tool for this purpose is the concept of a basis . Loosely speaking, a basis for a vector space is a set of vectors that is large enough to generate the entire space, and small enough to contain no redundancies . What exactly we mean by generate is captured by the rigorous notion of span ; and what we mean by no redundancies is captured by linear independence .    Span  Recall that a linear combination in a vector space is a vector of the form , where are scalars. We use this notion to define the span of a set of vectors.   Span  span of a set of vectors    the span of    Let be a vector space, and let be any subset of . The span of , denoted , is the subset of defined as follows:   If , then .    Otherwise we define to be the set of all linear combinations of elements of : , .         Let be a subset of . Some simple observations:   The zero vector is always an element of . Indeed, if , then by definition. Otherwise, given any , the linear combination is an element of .    We have : , includes itself. Indeed, given any , the linear combination is an element of .    If contains exactly one element, then is simply the set of all scalar multiples of .  If , then we know that this set is infinite ( ). Thus even when is finite , will be infinite , as long as contains nonzero vectors.        Examples in   Let . For each , identify as a familiar geometric object.     .          ,                               , the set containing just the origin, by definition.     is the set of all scalar multiples of . Thus .     is the set of all scalar multiples of the nonzero vector . Geometrically, this is the line that passes through the the origin and the point .    By definition . Thus , the entire -plane.    By definition . It is easy to see that , the line with equation . Note that in this case we have , and thus that the vector is in some sense redundant.    By definition . Claim: . Proving the claim amounts to showing that for all there exist such that . Solving this system using Gaussian elimination, we see that the system has the unique solution , and thus that . This proves , as claimed.    By , we have . Thus . Since by definition, we conclude that .        Video example: computing span   Video: computing span  Video: computing span     You may have noticed that each span computation in the previous example produced a subspace of . This is no accident!   Spans are subspaces   Let be a subset of the vector space .   The set is a subspace of .    If is any subspace containing , then .   Taken together, (1) and (2) imply that is the smallest subspace of containing .    We prove each statement separately.   Statement (1)  To show is a subspace, we use the two-step technique.   By we know that .    Suppose . By definition we have for some vectors and scalars . Then for any we have , which is clearly a linear combination of elements of . Thus , as desired.       Statement (2)  Let be a subspace that contains all elements of . Since is closed under arbitrary linear combinations, it must contain any linear combination of elements of , and thus .     The results of motivate the following additional terminology.   Spanning set  spanning set   Let be a subset of the vector space . We call the subspace of  generated by S , and we call a spanning set for .     Some standard spanning sets  spanning set standard examples   For most of the vector spaces we've met a natural spanning set springs to mind. We will refer to these loosely as standard spanning sets. Some examples:   Zero space  Let . By definition the empty set is a spanning set of .    Tuples  Let . For , define to be the -tuple with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Matrices  Let . For each with and , define to be the matrix with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Polynomials of bounded degree  Let . The set clearly spans . This is just another way of saying that the monomials of degree at most generate the polynomials of degree at most .    Polynomials  Let , the space of all polynomials. In a similar vein, the set of all monomials is a spanning set for .   Note the glaring difference between the first three examples, and the last: our standard spanning set for is infinite , whereas the previous examples are all finite spanning sets. You suspect, no doubt, that there is no finite spanning set for . We will be able to prove this shortly.    It is important to observe that spanning sets for vector spaces are not unique. Far from it! In general, for any nonzero vector space there are infinitely many choices of spanning sets.   Spanning sets are not unique   For each and below, verify that is a spanning set for .    ,      , , .     ,           This was shown in     We must show, given any , we can find such that , or . We can find such if and only if the system with augmented matrix is consistent. This matrix row reduces to . Since the last column will never contain a leading one, we conclude that the system is consistent for any choice of , and thus that , as claimed.    We must show that given any we can find such that , or . According to this equality holds if and only if . As in the examples above, our reasoning implies if and only if this system is consistent for any choice of . Thus usual Gaussian elimination procedure tells us that this is indeed so. We leave the details to you.          Linear independence  As mentioned at the top, the notion of linear independence is precisely what we need to guarantee that a given spanning set has no redundancies . We first define linear independence of a finite set of vectors ( ) and later generalize to an arbitrary set of vectors ( ).   Linear independence (for finite subsets)  linear independence   Let be a vector space, let be a finite subset, and let be the distinct elements of : , for all . We say is linearly independent if the following condition holds: . We say is linearly dependent if it is not linearly independent; i.e., if we can find scalars with for some and . We call a linear combination  trivial if for all , and nontrivial if for some . Using this terminology, a set is linearly independent if the only linear combination of distinct elements of yielding the zero vector is the trivial one.      The definition of linear independence is quite a mouthful! Some clarifying remarks:   To prove a set of distinct vectors is linearly independent, we must prove an implication : . More often than not you will do so in the direct manner: , assume you have a linear combination equal to the zero vector, then show that all coefficients must be zero.    By the same token, to show is linearly dependent, we must produce a nontrivial linear combination of distinct elements equal to the zero vector.    It is easy to see that is linearly dependent if and only if some element of can be written as a linear combination of other elements of : just take the nontrivial linear combination yielding the zero vector, and solve for the vector in this combination with the nonzero coefficient.  This makes precise what it means for a spanning set to have redundancies or not. If is linearly dependent, then one of its vectors can be written as a linear combination of the others, and thus can be thrown out when computing , the set of all linear combinations of . Conversely, if is linearly independent, then no element of can be written as a linear combination of the others; throwing any element out would thus result in being strictly smaller.        Elementary examples   Let be a vector space, and let be a subset.    If , then is linearly dependent: indeed, we have the nontrivial linear combination .    If , then is linearly independent if and only if . The previous comment shows why is a necessary condition. Let's see why it is sufficient.  Suppose , and suppose we have . By we have or ( ). Since , we conclude . This shows that the only linear combination of yielding is the trivial one.    Suppose , where . From the last remark, it follows that is linearly independent if and only if one of its elements is a scalar multiple of the other.  This makes it very easy to decide whether a two-element set is linearly independent. Note however, that the same observation does not apply to larger sets: , can be shown to be linearly dependent, and yet no element of is a scalar multiple of any other element.      Deciding whether a subset of a vector space is linearly independent usually boils down to a question about the solutions to a certain system of linear equations. The procedure below outlines the steps necessary to extract the relevant linear system and draw the relevant conclusions.   Investigating linear independence     Write out the general vector equation  where the are arbitrary elements of the given set .    Translate this vector equation into a homogeneous linear system in the unknowns , using the definition of equality for your vector space.    Decide, using Gaussian elimination, whether this system has any nonzero ( , nontrivial) solutions.      This is a fitting point to recall our . As you can see, even as we move into more and more abstract realms of linear algebra (linear independence, span, ), Gaussian elimination remains our most important tool.    Linear independence   For each subset of the given vector space , decide whether is linearly independent.     ,      ,      , , where .        We have if and only if . After a little Gaussian elimination we see that is a nonzero solution to this system, and thus that Since there is a nontrivial linear combination of elements of yielding the zero vector, we conclude is linearly dependent.    Recall that the zero vector of is the zero polynomial . We have . Gaussian elimination shows that is the unique solution to this last system. We conclude that is linearly independent.    We have . Row reduction reveals that this last linear system has a free variable, and hence that there are infinitely many solutions to this system: , . We conclude that is linearly dependent.      So far we have only defined linead independence for finite subsets of a vector space. The notion is easily extended to arbitrary (potentially infinite) subsets.   Linear independence (for arbitrary subsets)   Let be a vector space. A subset is linearly independent if and only if every finite subset of is lineary independent in the sense of .      A subtle question arises here: namely, whether our definition of linear independence for arbitrary sets is consistent with our definition for finite ones. In other words, given a set of distinct vectors, is it true that is linearly independent (in the sense of ) if and only if every subset is linearly independent (in the sense of )? The answer of course is yes. One direction is easy: since is a subset of itself, clearly if every subset is linearly independent, then is linearly independent. The other direction is left as an exercise ( ).     Linear independence in  Consider the vector space of polynomial functions on . We show that the set is linearly independent. Given a finite subset , we can write ,where . By , we have if and only if . This proves is linearly independent. We have thus shown that any finite subset of is linearly independent, and thus conclude that is linearly independent by .     Linear independence in function spaces  In each computation of it was easy to derive a relevant linear system since the notion of equality in each of these spaces amounts to checking a finite number of numeric equalities: , between the entries of two triples, the coefficients of two polynomials, or the entries of two matrices.  Things are slightly more complicated when working in function spaces on an interval (  , ), since by definition functions and are equal if and only if for all . Thus, in principle verifying two functions are equal amounts to showing infinitely many equalities hold: one for each . Despite this added complexity, we can still investigate linear independence of functions with certain linear systems, as described in the procedure below.   Investigating linear independence of functions   Let , let , and let be a set of distinct elements of .    If you believe is linearly independent:    Write out the function equation  . Since the zero vector of is the zero function, the definition of function equality implies for all  .    Since is true for all , we can produce a homogeneous system of linear equations in the unknowns by picking elements of , and evaluating  at . The -th equation of the resulting system is thus .    If you can find elements so that the resulting homogeneous system in the unknowns has the unique solution , then we conclude that is linearly independent.      If you believe is linearly dependent:    A nontrivial linear combination of the equal to the zero function amounts to a function identity. Either cite a well-known function identity involving the , or else prove an identity of your own.          When using to show is linearly independent, you want to produce enough linear equations to force the unknowns to all be equal to 0. Note that since you you have unknowns, you need at at least  equations, and so must pick at least elements . Do so judiciously in order to (a) force the to all be equal to 0, and (b) make the necessary computations palatable.    We illustrate in the following example.   Linear independence of functions   Let . Determine whether the given subset is linearly independent.          .        We claim is linearly independent. If , then , for all . In particular, the equality is true when evaluated at , yielding the following linear system: , or . This system can be now be solved essentially by inspection: the first equation implies ; setting , in the third equation, we conclude ; the second equation now implies . We conclude that . Thus the only linear combination of yielding the zero function is the trivial one, showing that is linearly independent.    We claim is linearly dependent. As discussed in , to prove this we have to produce an identity involving these functions. The double-angle formula from trigonometry tells us that for all (in fact for all ). It follows that for all , or . Since we have found a nontrivial linear combination of elements of yielding the zero vector, we conclude that is linearly dependent.       Video example: linear independence of functions   Video: linear independence of functions  Video: linear independence of functions        WeBWork Exercises    Let be a linear combination of .  Select the best statement.    .    We only know that .    when is a scalar multiple of one of .    There is no obvious relationship between and .    none of the above     span .        Let be a vector that is not a linear combination of .  Select the best statement.    We only know that span span .    There is no obvious relationship between span and span .    We only know that span span .    span is a proper subset of span .    span span .    span span when none of is a linear combination of the others.    none of the above     is a proper subset of span .        Let be a linearly independent set of vectors.  Select the best statement.    is also a linearly independent set of vectors unless .    is always a linearly dependent set of vectors.    could be a linearly independent or linearly dependent set of vectors depending on the vectors chosen.    is always a linearly independent set of vectors.    is also a linearly independent set of vectors unless is a scalar multiple another vector in the set.    none of the above     is a linear combination of then is linearly dependent. Otherwise the set in linearly independent. could be a linearly independent or linearly dependent set of vectors depending on the vectors chosen.        Let be a linearly dependent set of vectors.  Select the best statement.    is a linearly independent set of vectors unless is a linear combination of other vectors in the set.    is always a linearly dependent set of vectors.    could be a linearly independent or linearly dependent set of vectors depending on the vectors chosen.    is a linearly independent set of vectors unless .    is always a linearly independent set of vectors.    none of the above     is always a linearly dependent set of vectors.        Let be the vector space of polynomials in with degree less than 3 and be the subspace  a. Find a nonzero polynomial in .    b. Find a polynomial in .                     Determine whether each set is a linearly independent set in . Type \"yes\" or \"no\" for each answer.  The polynomials and .  The polynomials and .  The polynomials and .    yes    yes    no         Are the vectors , and linearly independent?    Choose    linearly dependent    linearly independent    If they are linearly dependent, find scalars that are not all zero such that the equation below is true. If they are linearly independent, find the only scalars that will make the equation below true.        .                   Let be the vector space of symmetric matrices and be the subspace  a. Find a nonzero element in .    b. Find an element in that is not in .            A subset of a vector space is given in each exercise below. Determine whether the given elements are elements of . Justify your answer by either providing a linear combination of yielding the given element, or else showing that no such linear combination exists.     ,                       , , where .                 ,                       Determine whether is a spanning set of .     ,      ,      ,      (see ),        In each exercise, determine whether the given subset of the vector space is linearly independent. Justify your answer.     ,      ,      ,      ,      Let and let , where . Determine all values for which is linearly independent.    Let , and define , , .    Compute , identifying it as a certain familiar set of matrices.    Decide whether is independent.      Let be a vector space, and let be a subset of distinct vectors. Assume is linearly independent. Show that any subset is linearly independent.   The empty set is trivially linearly independent. Let represent an arbitrary nonempty set of distinct elements of . You can show is linearly independent by extending linear combinations of the elements of to a linear combination of the elements of in a certain way.   Span, independence, and invertibility  In this exercise we identify elements of with column vectors.  Let be a subset of , and let be the matrix whose -th column is : , .    Prove: if and only if is invertible.    Prove: is linearly independent if and only if is invertible.     Use the column method ( ) and the invertibility theorem ( )   Linear transformations, span, and independence  Suppose is a linear transformation. Let be a subset of , and let be the image of under : , . Assume and for all .  Answer true or false: if true, provide a proof; if false, provide an explicit counterexample. Note: for a complete counterexample you need to specify , and .    If is linearly independent, then is linearly independent.    If is linearly independent, then is linearly independent.    If is a spanning set for , then is a spanning set for .       "
},
{
  "id": "d_span",
  "level": "2",
  "url": "s_span_independence.html#d_span",
  "type": "Definition",
  "number": "3.5.1",
  "title": "Span.",
  "body": " Span  span of a set of vectors    the span of    Let be a vector space, and let be any subset of . The span of , denoted , is the subset of defined as follows:   If , then .    Otherwise we define to be the set of all linear combinations of elements of : , .      "
},
{
  "id": "rm_span",
  "level": "2",
  "url": "s_span_independence.html#rm_span",
  "type": "Remark",
  "number": "3.5.2",
  "title": "",
  "body": "  Let be a subset of . Some simple observations:   The zero vector is always an element of . Indeed, if , then by definition. Otherwise, given any , the linear combination is an element of .    We have : , includes itself. Indeed, given any , the linear combination is an element of .    If contains exactly one element, then is simply the set of all scalar multiples of .  If , then we know that this set is infinite ( ). Thus even when is finite , will be infinite , as long as contains nonzero vectors.      "
},
{
  "id": "eg_span_2space",
  "level": "2",
  "url": "s_span_independence.html#eg_span_2space",
  "type": "Example",
  "number": "3.5.3",
  "title": "Examples in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Examples in   Let . For each , identify as a familiar geometric object.     .          ,                               , the set containing just the origin, by definition.     is the set of all scalar multiples of . Thus .     is the set of all scalar multiples of the nonzero vector . Geometrically, this is the line that passes through the the origin and the point .    By definition . Thus , the entire -plane.    By definition . It is easy to see that , the line with equation . Note that in this case we have , and thus that the vector is in some sense redundant.    By definition . Claim: . Proving the claim amounts to showing that for all there exist such that . Solving this system using Gaussian elimination, we see that the system has the unique solution , and thus that . This proves , as claimed.    By , we have . Thus . Since by definition, we conclude that .      "
},
{
  "id": "fig_vid_span",
  "level": "2",
  "url": "s_span_independence.html#fig_vid_span",
  "type": "Figure",
  "number": "3.5.4",
  "title": "Video: computing span",
  "body": " Video: computing span  Video: computing span   "
},
{
  "id": "th_span",
  "level": "2",
  "url": "s_span_independence.html#th_span",
  "type": "Theorem",
  "number": "3.5.5",
  "title": "Spans are subspaces.",
  "body": " Spans are subspaces   Let be a subset of the vector space .   The set is a subspace of .    If is any subspace containing , then .   Taken together, (1) and (2) imply that is the smallest subspace of containing .    We prove each statement separately.   Statement (1)  To show is a subspace, we use the two-step technique.   By we know that .    Suppose . By definition we have for some vectors and scalars . Then for any we have , which is clearly a linear combination of elements of . Thus , as desired.       Statement (2)  Let be a subspace that contains all elements of . Since is closed under arbitrary linear combinations, it must contain any linear combination of elements of , and thus .    "
},
{
  "id": "d_spanning_set",
  "level": "2",
  "url": "s_span_independence.html#d_spanning_set",
  "type": "Definition",
  "number": "3.5.6",
  "title": "Spanning set.",
  "body": " Spanning set  spanning set   Let be a subset of the vector space . We call the subspace of  generated by S , and we call a spanning set for .   "
},
{
  "id": "rm_spanning_sets",
  "level": "2",
  "url": "s_span_independence.html#rm_spanning_sets",
  "type": "Remark",
  "number": "3.5.7",
  "title": "Some standard spanning sets.",
  "body": " Some standard spanning sets  spanning set standard examples   For most of the vector spaces we've met a natural spanning set springs to mind. We will refer to these loosely as standard spanning sets. Some examples:   Zero space  Let . By definition the empty set is a spanning set of .    Tuples  Let . For , define to be the -tuple with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Matrices  Let . For each with and , define to be the matrix with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Polynomials of bounded degree  Let . The set clearly spans . This is just another way of saying that the monomials of degree at most generate the polynomials of degree at most .    Polynomials  Let , the space of all polynomials. In a similar vein, the set of all monomials is a spanning set for .   Note the glaring difference between the first three examples, and the last: our standard spanning set for is infinite , whereas the previous examples are all finite spanning sets. You suspect, no doubt, that there is no finite spanning set for . We will be able to prove this shortly.   "
},
{
  "id": "s_span_independence-3-13",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence-3-13",
  "type": "Example",
  "number": "3.5.8",
  "title": "Spanning sets are not unique.",
  "body": " Spanning sets are not unique   For each and below, verify that is a spanning set for .    ,      , , .     ,           This was shown in     We must show, given any , we can find such that , or . We can find such if and only if the system with augmented matrix is consistent. This matrix row reduces to . Since the last column will never contain a leading one, we conclude that the system is consistent for any choice of , and thus that , as claimed.    We must show that given any we can find such that , or . According to this equality holds if and only if . As in the examples above, our reasoning implies if and only if this system is consistent for any choice of . Thus usual Gaussian elimination procedure tells us that this is indeed so. We leave the details to you.      "
},
{
  "id": "d_linear_independence",
  "level": "2",
  "url": "s_span_independence.html#d_linear_independence",
  "type": "Definition",
  "number": "3.5.9",
  "title": "Linear independence (for finite subsets).",
  "body": " Linear independence (for finite subsets)  linear independence   Let be a vector space, let be a finite subset, and let be the distinct elements of : , for all . We say is linearly independent if the following condition holds: . We say is linearly dependent if it is not linearly independent; i.e., if we can find scalars with for some and . We call a linear combination  trivial if for all , and nontrivial if for some . Using this terminology, a set is linearly independent if the only linear combination of distinct elements of yielding the zero vector is the trivial one.   "
},
{
  "id": "rm_linear_independence",
  "level": "2",
  "url": "s_span_independence.html#rm_linear_independence",
  "type": "Remark",
  "number": "3.5.10",
  "title": "",
  "body": "  The definition of linear independence is quite a mouthful! Some clarifying remarks:   To prove a set of distinct vectors is linearly independent, we must prove an implication : . More often than not you will do so in the direct manner: , assume you have a linear combination equal to the zero vector, then show that all coefficients must be zero.    By the same token, to show is linearly dependent, we must produce a nontrivial linear combination of distinct elements equal to the zero vector.    It is easy to see that is linearly dependent if and only if some element of can be written as a linear combination of other elements of : just take the nontrivial linear combination yielding the zero vector, and solve for the vector in this combination with the nonzero coefficient.  This makes precise what it means for a spanning set to have redundancies or not. If is linearly dependent, then one of its vectors can be written as a linear combination of the others, and thus can be thrown out when computing , the set of all linear combinations of . Conversely, if is linearly independent, then no element of can be written as a linear combination of the others; throwing any element out would thus result in being strictly smaller.      "
},
{
  "id": "eg_independence_basic_examples",
  "level": "2",
  "url": "s_span_independence.html#eg_independence_basic_examples",
  "type": "Example",
  "number": "3.5.11",
  "title": "Elementary examples.",
  "body": " Elementary examples   Let be a vector space, and let be a subset.    If , then is linearly dependent: indeed, we have the nontrivial linear combination .    If , then is linearly independent if and only if . The previous comment shows why is a necessary condition. Let's see why it is sufficient.  Suppose , and suppose we have . By we have or ( ). Since , we conclude . This shows that the only linear combination of yielding is the trivial one.    Suppose , where . From the last remark, it follows that is linearly independent if and only if one of its elements is a scalar multiple of the other.  This makes it very easy to decide whether a two-element set is linearly independent. Note however, that the same observation does not apply to larger sets: , can be shown to be linearly dependent, and yet no element of is a scalar multiple of any other element.     "
},
{
  "id": "proc_linear_independence",
  "level": "2",
  "url": "s_span_independence.html#proc_linear_independence",
  "type": "Procedure",
  "number": "3.5.12",
  "title": "Investigating linear independence.",
  "body": " Investigating linear independence     Write out the general vector equation  where the are arbitrary elements of the given set .    Translate this vector equation into a homogeneous linear system in the unknowns , using the definition of equality for your vector space.    Decide, using Gaussian elimination, whether this system has any nonzero ( , nontrivial) solutions.     "
},
{
  "id": "ex_linear_independence",
  "level": "2",
  "url": "s_span_independence.html#ex_linear_independence",
  "type": "Example",
  "number": "3.5.13",
  "title": "Linear independence.",
  "body": " Linear independence   For each subset of the given vector space , decide whether is linearly independent.     ,      ,      , , where .        We have if and only if . After a little Gaussian elimination we see that is a nonzero solution to this system, and thus that Since there is a nontrivial linear combination of elements of yielding the zero vector, we conclude is linearly dependent.    Recall that the zero vector of is the zero polynomial . We have . Gaussian elimination shows that is the unique solution to this last system. We conclude that is linearly independent.    We have . Row reduction reveals that this last linear system has a free variable, and hence that there are infinitely many solutions to this system: , . We conclude that is linearly dependent.     "
},
{
  "id": "d_linear_independence_arbitrary",
  "level": "2",
  "url": "s_span_independence.html#d_linear_independence_arbitrary",
  "type": "Definition",
  "number": "3.5.14",
  "title": "Linear independence (for arbitrary subsets).",
  "body": " Linear independence (for arbitrary subsets)   Let be a vector space. A subset is linearly independent if and only if every finite subset of is lineary independent in the sense of .   "
},
{
  "id": "rm_linear_independence_arbitrary",
  "level": "2",
  "url": "s_span_independence.html#rm_linear_independence_arbitrary",
  "type": "Remark",
  "number": "3.5.15",
  "title": "",
  "body": "  A subtle question arises here: namely, whether our definition of linear independence for arbitrary sets is consistent with our definition for finite ones. In other words, given a set of distinct vectors, is it true that is linearly independent (in the sense of ) if and only if every subset is linearly independent (in the sense of )? The answer of course is yes. One direction is easy: since is a subset of itself, clearly if every subset is linearly independent, then is linearly independent. The other direction is left as an exercise ( ).   "
},
{
  "id": "eg_lin_ind_P",
  "level": "2",
  "url": "s_span_independence.html#eg_lin_ind_P",
  "type": "Example",
  "number": "3.5.16",
  "title": "Linear independence in <span class=\"process-math\">\\(P\\)<\/span>.",
  "body": " Linear independence in  Consider the vector space of polynomial functions on . We show that the set is linearly independent. Given a finite subset , we can write ,where . By , we have if and only if . This proves is linearly independent. We have thus shown that any finite subset of is linearly independent, and thus conclude that is linearly independent by .  "
},
{
  "id": "proc_linear_independence_functions",
  "level": "2",
  "url": "s_span_independence.html#proc_linear_independence_functions",
  "type": "Procedure",
  "number": "3.5.17",
  "title": "Investigating linear independence of functions.",
  "body": " Investigating linear independence of functions   Let , let , and let be a set of distinct elements of .    If you believe is linearly independent:    Write out the function equation  . Since the zero vector of is the zero function, the definition of function equality implies for all  .    Since is true for all , we can produce a homogeneous system of linear equations in the unknowns by picking elements of , and evaluating  at . The -th equation of the resulting system is thus .    If you can find elements so that the resulting homogeneous system in the unknowns has the unique solution , then we conclude that is linearly independent.      If you believe is linearly dependent:    A nontrivial linear combination of the equal to the zero function amounts to a function identity. Either cite a well-known function identity involving the , or else prove an identity of your own.       "
},
{
  "id": "rm_linear_independence_functions",
  "level": "2",
  "url": "s_span_independence.html#rm_linear_independence_functions",
  "type": "Remark",
  "number": "3.5.18",
  "title": "",
  "body": "  When using to show is linearly independent, you want to produce enough linear equations to force the unknowns to all be equal to 0. Note that since you you have unknowns, you need at at least  equations, and so must pick at least elements . Do so judiciously in order to (a) force the to all be equal to 0, and (b) make the necessary computations palatable.   "
},
{
  "id": "ss_linear_independence_functionspace-7",
  "level": "2",
  "url": "s_span_independence.html#ss_linear_independence_functionspace-7",
  "type": "Example",
  "number": "3.5.19",
  "title": "Linear independence of functions.",
  "body": " Linear independence of functions   Let . Determine whether the given subset is linearly independent.          .        We claim is linearly independent. If , then , for all . In particular, the equality is true when evaluated at , yielding the following linear system: , or . This system can be now be solved essentially by inspection: the first equation implies ; setting , in the third equation, we conclude ; the second equation now implies . We conclude that . Thus the only linear combination of yielding the zero function is the trivial one, showing that is linearly independent.    We claim is linearly dependent. As discussed in , to prove this we have to produce an identity involving these functions. The double-angle formula from trigonometry tells us that for all (in fact for all ). It follows that for all , or . Since we have found a nontrivial linear combination of elements of yielding the zero vector, we conclude that is linearly dependent.     "
},
{
  "id": "fig_vid_ind_func",
  "level": "2",
  "url": "s_span_independence.html#fig_vid_ind_func",
  "type": "Figure",
  "number": "3.5.20",
  "title": "Video: linear independence of functions",
  "body": " Video: linear independence of functions  Video: linear independence of functions   "
},
{
  "id": "s_span_independence_ex-1-2",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-2",
  "type": "Exercise",
  "number": "3.5.4.1",
  "title": "",
  "body": "  Let be a linear combination of .  Select the best statement.    .    We only know that .    when is a scalar multiple of one of .    There is no obvious relationship between and .    none of the above     span .     "
},
{
  "id": "s_span_independence_ex-1-3",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-3",
  "type": "Exercise",
  "number": "3.5.4.2",
  "title": "",
  "body": "  Let be a vector that is not a linear combination of .  Select the best statement.    We only know that span span .    There is no obvious relationship between span and span .    We only know that span span .    span is a proper subset of span .    span span .    span span when none of is a linear combination of the others.    none of the above     is a proper subset of span .     "
},
{
  "id": "s_span_independence_ex-1-4",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-4",
  "type": "Exercise",
  "number": "3.5.4.3",
  "title": "",
  "body": "  Let be a linearly independent set of vectors.  Select the best statement.    is also a linearly independent set of vectors unless .    is always a linearly dependent set of vectors.    could be a linearly independent or linearly dependent set of vectors depending on the vectors chosen.    is always a linearly independent set of vectors.    is also a linearly independent set of vectors unless is a scalar multiple another vector in the set.    none of the above     is a linear combination of then is linearly dependent. Otherwise the set in linearly independent. could be a linearly independent or linearly dependent set of vectors depending on the vectors chosen.     "
},
{
  "id": "s_span_independence_ex-1-5",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-5",
  "type": "Exercise",
  "number": "3.5.4.4",
  "title": "",
  "body": "  Let be a linearly dependent set of vectors.  Select the best statement.    is a linearly independent set of vectors unless is a linear combination of other vectors in the set.    is always a linearly dependent set of vectors.    could be a linearly independent or linearly dependent set of vectors depending on the vectors chosen.    is a linearly independent set of vectors unless .    is always a linearly independent set of vectors.    none of the above     is always a linearly dependent set of vectors.     "
},
{
  "id": "s_span_independence_ex-1-6",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-6",
  "type": "Exercise",
  "number": "3.5.4.5",
  "title": "",
  "body": "  Let be the vector space of polynomials in with degree less than 3 and be the subspace  a. Find a nonzero polynomial in .    b. Find a polynomial in .                  "
},
{
  "id": "s_span_independence_ex-1-7",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-7",
  "type": "Exercise",
  "number": "3.5.4.6",
  "title": "",
  "body": "  Determine whether each set is a linearly independent set in . Type \"yes\" or \"no\" for each answer.  The polynomials and .  The polynomials and .  The polynomials and .    yes    yes    no      "
},
{
  "id": "s_span_independence_ex-1-8",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-8",
  "type": "Exercise",
  "number": "3.5.4.7",
  "title": "",
  "body": "  Are the vectors , and linearly independent?    Choose    linearly dependent    linearly independent    If they are linearly dependent, find scalars that are not all zero such that the equation below is true. If they are linearly independent, find the only scalars that will make the equation below true.        .                "
},
{
  "id": "s_span_independence_ex-1-9",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-1-9",
  "type": "Exercise",
  "number": "3.5.4.8",
  "title": "",
  "body": "  Let be the vector space of symmetric matrices and be the subspace  a. Find a nonzero element in .    b. Find an element in that is not in .        "
},
{
  "id": "s_span_independence_ex-2-2",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-2-2",
  "type": "Exercise",
  "number": "3.5.4.9",
  "title": "",
  "body": "  ,                    "
},
{
  "id": "s_span_independence_ex-2-3",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-2-3",
  "type": "Exercise",
  "number": "3.5.4.10",
  "title": "",
  "body": "  , , where .              "
},
{
  "id": "s_span_independence_ex-2-4",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-2-4",
  "type": "Exercise",
  "number": "3.5.4.11",
  "title": "",
  "body": "  ,                    "
},
{
  "id": "s_span_independence_ex-3",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-3",
  "type": "Exercise",
  "number": "3.5.4.12",
  "title": "",
  "body": " Determine whether is a spanning set of .     ,      ,      ,      (see ),     "
},
{
  "id": "s_span_independence_ex-4-2",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-4-2",
  "type": "Exercise",
  "number": "3.5.4.13",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_span_independence_ex-4-3",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-4-3",
  "type": "Exercise",
  "number": "3.5.4.14",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_span_independence_ex-4-4",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-4-4",
  "type": "Exercise",
  "number": "3.5.4.15",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_span_independence_ex-4-5",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-4-5",
  "type": "Exercise",
  "number": "3.5.4.16",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_span_independence_ex-5",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-5",
  "type": "Exercise",
  "number": "3.5.4.17",
  "title": "",
  "body": " Let and let , where . Determine all values for which is linearly independent.  "
},
{
  "id": "s_span_independence_ex-6",
  "level": "2",
  "url": "s_span_independence.html#s_span_independence_ex-6",
  "type": "Exercise",
  "number": "3.5.4.18",
  "title": "",
  "body": " Let , and define , , .    Compute , identifying it as a certain familiar set of matrices.    Decide whether is independent.    "
},
{
  "id": "ex_linear_independence_arbitrary",
  "level": "2",
  "url": "s_span_independence.html#ex_linear_independence_arbitrary",
  "type": "Exercise",
  "number": "3.5.4.19",
  "title": "",
  "body": " Let be a vector space, and let be a subset of distinct vectors. Assume is linearly independent. Show that any subset is linearly independent.   The empty set is trivially linearly independent. Let represent an arbitrary nonempty set of distinct elements of . You can show is linearly independent by extending linear combinations of the elements of to a linear combination of the elements of in a certain way.  "
},
{
  "id": "ex_span_independence_inveribility",
  "level": "2",
  "url": "s_span_independence.html#ex_span_independence_inveribility",
  "type": "Exercise",
  "number": "3.5.4.20",
  "title": "Span, independence, and invertibility.",
  "body": "Span, independence, and invertibility  In this exercise we identify elements of with column vectors.  Let be a subset of , and let be the matrix whose -th column is : , .    Prove: if and only if is invertible.    Prove: is linearly independent if and only if is invertible.     Use the column method ( ) and the invertibility theorem ( )  "
},
{
  "id": "ex_span_independence_transform",
  "level": "2",
  "url": "s_span_independence.html#ex_span_independence_transform",
  "type": "Exercise",
  "number": "3.5.4.21",
  "title": "Linear transformations, span, and independence.",
  "body": "Linear transformations, span, and independence  Suppose is a linear transformation. Let be a subset of , and let be the image of under : , . Assume and for all .  Answer true or false: if true, provide a proof; if false, provide an explicit counterexample. Note: for a complete counterexample you need to specify , and .    If is linearly independent, then is linearly independent.    If is linearly independent, then is linearly independent.    If is a spanning set for , then is a spanning set for .    "
},
{
  "id": "s_basis",
  "level": "1",
  "url": "s_basis.html",
  "type": "Section",
  "number": "3.6",
  "title": "Bases",
  "body": " Bases   Now that we have the notions of span and linear independence in place, we simply combine them to define a basis of a vector space. In the spirit of , a basis of a vector space should be understood as a minimal spanning set.  This section includes many theoretical results. There are two in particular that are worth highlighting, especially in regard to computational techniques for abstract vector spaces:   If is a basis of containing exactly elements, then any other basis also contains exactly elements. ( )    If is a basis for , then every element of can be written as a linear combination of elements of in a unique way . ( )   The first result allows us to define the dimension of a vector space as the number of elements in any given basis. The second result allows us to take any -dimensional vector space with chosen basis and effectively identify vectors with the sequence , where . This observation has the following consequence: given any -dimensional vector space , no matter how exotic, once we choose a basis of , we can reduce any and all linear algebraic questions or computations about to a corresponding question in . We will elaborate this idea further in .    Bases of vector spaces   Basis  basis of a vector space   A subset of a vector space is called a basis if    spans , and     is linearly independent.   If the basis comes equipped with an ordering ( , is an ordered set), then we call and ordered basis      Some standard bases   The examples of standard spanning sets in are easily seen to be linearly independent, and hence are in fact bases. We list them again here, using the same notation, and refer to these as standard bases for the given spaces.    Zero space  Let . The empty is a basis for . Note that spans by definition ( ), and it satisfies the defining implication of linear independence ( ) trivially.    Tuples  Let . The set is the standard basis of .    Matrices  Let . The set is the standard basis of .    Polynomials of bounded degree  Let . The set is the standard basis of .    Polynomials  Let , the space of all polynomials. The set is the standard basis of .      Just as with spanning sets, bases are not in general unique: in fact, for any nonzero vector space there are infinitely many different bases.   Some nonstandard bases   For each and below, verify that is a basis of .    , .     , .     , .       Each verification amounts to showing, using the techniques from , that the given spans the given and is linearly independent. We illustrate with (1) and (2), leaving (3) to the reader.    Since neither element of is a scalar multiple of the other, the set is linearly independent. To see that spans we show that for any we have for some . Indeed we may take and . (These formulas were obtained by solving the corresponding system of two equations in the unknowns and .)    To show spans we must show that for any we can find such that , or . Equating coefficients yields the system of equations , which corresponds to the matrix equation . An easy computation shows , and thus that is invertible. We conclude that the system can be solved for (set ), and thus that spans .  Our work above now can be used to also show that is linearly independent. Replacing the arbitrary polynomial with the zero polynomial , we see that a linear combination corresponds to a solution to the matrix equation . Since is invertible, we conclude that ( ), and thus that . This shows is linearly independent.      Not every vector space has a finite basis, as we show in the next example.   has no finite basis   Prove that , the space of all real polynomials, does not have a finite basis.    We show that no finite set of polynomials can span all of ; it follows that does not have a finite basis.  Indeed let be a finite set of polynomials, and let be the maximal degree of all the polynomials . Then for all , in which case : , is a subspace of the space of polynomials of degree at most . Since , we conclude that , as claimed.      By and its corollaries, we know that if has a finite basis, then and subspace of also has a finite basis. Let be an interval. Since is a chain of subspaces, and since does not have a finite basis, we conclude that none of these other function spaces has a finite basis.     Basis for   Let , and let , where is any positive real number. Prove: is a basis if and only if .      Suppose . Since , we have . Any set containing the zero vector is linearly dependent ( ). Thus is not a basis.     Since consists of one nonzero element, it is linearly independent ( ). It remains only to show that spans , which amounts to showing that every is a scalar multiple of . Since by definition scalar multiplication in is defined as , this is equivalent to showing that every can be written in the form . This fact is a familiar result from calculus, where you learn that the range (or image) of any exponential function is the set of all positive real numbers.     Proceeding directly from the definition, to show a set is a basis of we have to do two steps: (i) show ; (ii) show that is linearly independent. The following theorem offers gives rise to a one-step technique for proving is a basis: show that every element of can be written as a linear combination of elements of in a unique way .   Basis equivalence   Let be a subset of the vector space . The following statements are equivalent:    The set is a basis of     Every element can be written as a linear combination of elements of , and furthermore this linear combination is unique: if we have , for some distinct vectors , then for all .       Implication:  Suppose is a basis. By definition, spans , and so every element of can be written as a linear combination of elements of . It remains to show that this linear combination is unique in the sense described. This follows from the fact that is linearly independent. Indeed, if , then after some algebra we have . Since is linearly independent and since the are distinct, we must have , and hence for all .    Implication:  If satisfies (2), then clearly it spans . The uniqueness of linear combinations of elements of now easily implies is linearly independent: .      yields the following one-step technique for proving a set is a basis.   One-step technique for bases   Let be a vector space. To prove a subset is a basis it suffices to show that every can be written as a linear combination of elements of in a unique way, as specified in .     One-step technique for   Use the one step technique to decide whether the set is a basis of .    We ask whether for all elements we can write for a unique choice of . This is equivalent to asking whether the matrix equation . has a unique solution for any choice of . Performing Gaussian elimination on the corresponding augmented matrix yields . Since the third column of does not have a leading one, we conclude that the corresponding system has a free variable, and hence that for any given the equation has either no solutions (inconsistent) or infinitely many solutions. In particular, it is not true that there is always a unique solution. Thus is not a basis according to the one-step technique.  In fact, our Gaussian elimination analysis tells us exactly how fails to be a basis. Since the last column of does not have a leading one, the corresponding system is always consistent: , there is always at least one solution to for each . This tells us that is a spanning set of . On the other hand, the existence of the free variable tells us that for , we will have infinitely many choices satisfying . This shows that is not linearly independent.     One-step technique for   Use the one-step technique to decide whether the set is a basis of .    Take an arbitrary element and consider the polynomial equation The usual remark about polynomial equality implies that this is equivalent to the matrix equation . The matrix on the left is invertible, allowing us to solve: . We conclude that any can be written as in a unique way: namely, with and . Thus is a basis.     Video example: deciding if a set is a basis   Video: deciding if a basis of  Video: deciding if a basis of     Video: deciding if a basis of  Video: deciding if a basis of       Bases and linear transformations  In we saw that a vector space is completely and concisely determined by a basis in the sense that all elements of can be expressed in a unique was as a linear combination of elements of . A similar principle applies to linear transformations, as the next theorem illustrates.   Bases and linear transformations   Let be a basis for the vector space .    Let and be linear transformations from to . If for all , then .    Let be a vector space. Any mapping assigning each element of to a chosen element extends uniquely to a linear transformation satisfying for all . In more detail, given any , if , where and for all , then .       Proof of (i)  Assume and are linear transformations from to satisfying for all . Given any we can write . It follows that . Since for all , we have .    Proof of (ii)  That there can me at most one such follows from (i). Thus we need only show that such a exists.  Since any has a unique expression of the form , where for all , the formula in defines a function in a well-defined manner. Note also that the formula still applies even if some of the coefficients are equal to 0: if , then , and the right-hand side of is unchanged. We will use this fact below.  We now show that is linear. Given we can find a common collection of elements for which for some . We can no longer assume that and for all , but as observed above we still have . Given any , we have . Thus is a linear transformation.      Transformations determined by behavior on basis   Let's paraphrase the two results of .   A linear transformation is completely determined by its behavior on a basis . Once we know the images for all , the image for any other is then completely determined. Put another way, if two linear transformations out of  agree on the elements of a basis , then they agree for all elements of .    Once we have a basis on hand, it is easy to construct linear transformations : simply choose images for all in any manner you like, and then define for any element using .        Composition of reflections   Let be reflection across the -axis, and let be reflection across the -axis. (See .) Use an argument in the spirit of statement (i) from to show that . (Note: this equality can also be shown using our matrix formulas for rotations and reflections. See . )    Since and are both linear transformations ( ), so is the composition . We wish to show . Since is also a linear transformation, it suffices by to show that and agree on a basis of . Take the standard basis . Compute: . Since and agree on the basis , we have .    As a corollary to we can at last complete the partial description of linear transformations of the form given in .   Matrix transformations   Given any linear transformation there is a unique matrix such that . In fact we have , where is the standard basis of . As a result, in the special case where the domain and codomain are both spaces of tuples, all linear transformations are matrix transformations.    Let be the standard basis of , and let be the matrix defined as . In other words, the -th column of is , considered as an column vector. The corresponding matrix transformation is linear by . Since is linear by assumption, applies: to show we need only show that for all . We have . Thus , as claimed.    Besides rounding out our theoretical discussion of linear transformations from to , computationally provides a recipe for computing a matrix formula for a linear transformation . In other words, it tells us how to build the , column by column, such that for all . For reasons that will be made more clear in , we will call the standard matrix of .   Standard matrix of linear   Let be a linear transformation. The standard matrix of is the unique matrix satisfying . Equivalently, is the unique matrix satisfying for all .     Standard matrix computation   The function defined as is linear.    Use to compute the standard matrix of .    Use to compute .      We have . Let . Since provides a matrix formula for we have . Thus , as you can confirm.     Rotation matrices revisited   Fix an angle . Taking for granted that the rotation operation is a linear transformation, re-derive the matrix formula for : , compute , the standard matrix of .    Let . According to  , since gets rotated by to , and gets rotated to .       Webwork Exercises    Find a basis for the vector space where is the vector space of polynomials in with degree less than 3.   ,               Find a basis for the kernel of the linear transformation defined by where is the vector space of polynomials in with degree less than 3.   ,               Find a basis for the vector space of matrices with trace 0.   , ,  .         A square matrix is half-magic if the sum of the numbers in each row and column is the same. Find a basis for the vector space of half-magic squares.   ,  .         One-step basis technique   For each vector space and subset , use the one-step technique ( ) to decide whether is a basis for .                                            , where      , where        By-inspection basis technique   For each given and subspace , provide a basis for  by inspection as follows.    Give a simple parametric description of the elements of .    If your parametric description is simple enough, you should be able to find an obvious spanning set of .    Argue that your spanning set is linearly independent.       ,      ,      ,      , is set of all matrices whose rows and columns all sum to zero     Suppose be a basis for the vector space . Let , where . Prove that is a basis.    Let be a set of distinct elements of , let be an invertible matrix, and let . Prove that is a basis of if and only if is a basis of as follows.    Prove that for all : , contains distinct elements.    Prove that if is a basis of , then is also a basis for any invertible matrix .    Use the for all quantifier of (a) to prove that if is a basis of for the invertible matrix , then is a basis of .     Bases for important matrix subspaces  Let . For each of the following subspaces , give a basis of . You must explicitly describe the elements of your basis as linear combinations of the elements of the standard basis for . No justification needed, as long as your proposed basis is simple enough.    Upper triangular matrices       Symmetric matrices       Skew-symmetric matrices        It might help to look at the and cases to get an idea of what these bases should be.    The set is a basis of . Suppose the linear transformation satisfies . Find a formula for , where is a general element of .    The set is a basis of . Suppose the linear transformation satisfies . Find a formula for , where is a general element of .    The set is a basis of . Suppose the linear transformation satisfies . Show that the general formula for is given by .   Use (1) of .    Suppose is a linear transformation, and is a basis of for which for all . Show that : , is the zero transformation from to .   Use (1) of .    Suppose is a linear transformation, and is a basis of for which for all . Show that : , is the identity transformation of .   Use (1) of .    Let be a linear transformation. Assume there is a basis of and a constant such that for all . Prove: , where .   Use (1) of .    Matrix transformations   For each linear transformation and : (a) compute the standard matrix of using ; (b) compute using . You may take for granted that the given is linear.               "
},
{
  "id": "d_basis",
  "level": "2",
  "url": "s_basis.html#d_basis",
  "type": "Definition",
  "number": "3.6.1",
  "title": "Basis.",
  "body": " Basis  basis of a vector space   A subset of a vector space is called a basis if    spans , and     is linearly independent.   If the basis comes equipped with an ordering ( , is an ordered set), then we call and ordered basis    "
},
{
  "id": "rm_standard_bases",
  "level": "2",
  "url": "s_basis.html#rm_standard_bases",
  "type": "Remark",
  "number": "3.6.2",
  "title": "Some standard bases.",
  "body": " Some standard bases   The examples of standard spanning sets in are easily seen to be linearly independent, and hence are in fact bases. We list them again here, using the same notation, and refer to these as standard bases for the given spaces.    Zero space  Let . The empty is a basis for . Note that spans by definition ( ), and it satisfies the defining implication of linear independence ( ) trivially.    Tuples  Let . The set is the standard basis of .    Matrices  Let . The set is the standard basis of .    Polynomials of bounded degree  Let . The set is the standard basis of .    Polynomials  Let , the space of all polynomials. The set is the standard basis of .     "
},
{
  "id": "ss_bases-5",
  "level": "2",
  "url": "s_basis.html#ss_bases-5",
  "type": "Example",
  "number": "3.6.3",
  "title": "Some nonstandard bases.",
  "body": " Some nonstandard bases   For each and below, verify that is a basis of .    , .     , .     , .       Each verification amounts to showing, using the techniques from , that the given spans the given and is linearly independent. We illustrate with (1) and (2), leaving (3) to the reader.    Since neither element of is a scalar multiple of the other, the set is linearly independent. To see that spans we show that for any we have for some . Indeed we may take and . (These formulas were obtained by solving the corresponding system of two equations in the unknowns and .)    To show spans we must show that for any we can find such that , or . Equating coefficients yields the system of equations , which corresponds to the matrix equation . An easy computation shows , and thus that is invertible. We conclude that the system can be solved for (set ), and thus that spans .  Our work above now can be used to also show that is linearly independent. Replacing the arbitrary polynomial with the zero polynomial , we see that a linear combination corresponds to a solution to the matrix equation . Since is invertible, we conclude that ( ), and thus that . This shows is linearly independent.     "
},
{
  "id": "ss_bases-7",
  "level": "2",
  "url": "s_basis.html#ss_bases-7",
  "type": "Example",
  "number": "3.6.4",
  "title": "<span class=\"process-math\">\\(P\\)<\/span> has no finite basis.",
  "body": " has no finite basis   Prove that , the space of all real polynomials, does not have a finite basis.    We show that no finite set of polynomials can span all of ; it follows that does not have a finite basis.  Indeed let be a finite set of polynomials, and let be the maximal degree of all the polynomials . Then for all , in which case : , is a subspace of the space of polynomials of degree at most . Since , we conclude that , as claimed.   "
},
{
  "id": "rm_dimension_functionspaces",
  "level": "2",
  "url": "s_basis.html#rm_dimension_functionspaces",
  "type": "Remark",
  "number": "3.6.5",
  "title": "",
  "body": "  By and its corollaries, we know that if has a finite basis, then and subspace of also has a finite basis. Let be an interval. Since is a chain of subspaces, and since does not have a finite basis, we conclude that none of these other function spaces has a finite basis.   "
},
{
  "id": "ss_bases-9",
  "level": "2",
  "url": "s_basis.html#ss_bases-9",
  "type": "Example",
  "number": "3.6.6",
  "title": "Basis for <span class=\"process-math\">\\(\\R_{>0}\\)<\/span>.",
  "body": " Basis for   Let , and let , where is any positive real number. Prove: is a basis if and only if .      Suppose . Since , we have . Any set containing the zero vector is linearly dependent ( ). Thus is not a basis.     Since consists of one nonzero element, it is linearly independent ( ). It remains only to show that spans , which amounts to showing that every is a scalar multiple of . Since by definition scalar multiplication in is defined as , this is equivalent to showing that every can be written in the form . This fact is a familiar result from calculus, where you learn that the range (or image) of any exponential function is the set of all positive real numbers.    "
},
{
  "id": "th_basis_equivalence",
  "level": "2",
  "url": "s_basis.html#th_basis_equivalence",
  "type": "Theorem",
  "number": "3.6.7",
  "title": "Basis equivalence.",
  "body": " Basis equivalence   Let be a subset of the vector space . The following statements are equivalent:    The set is a basis of     Every element can be written as a linear combination of elements of , and furthermore this linear combination is unique: if we have , for some distinct vectors , then for all .       Implication:  Suppose is a basis. By definition, spans , and so every element of can be written as a linear combination of elements of . It remains to show that this linear combination is unique in the sense described. This follows from the fact that is linearly independent. Indeed, if , then after some algebra we have . Since is linearly independent and since the are distinct, we must have , and hence for all .    Implication:  If satisfies (2), then clearly it spans . The uniqueness of linear combinations of elements of now easily implies is linearly independent: .    "
},
{
  "id": "proc_basis_onestep",
  "level": "2",
  "url": "s_basis.html#proc_basis_onestep",
  "type": "Procedure",
  "number": "3.6.8",
  "title": "One-step technique for bases.",
  "body": " One-step technique for bases   Let be a vector space. To prove a subset is a basis it suffices to show that every can be written as a linear combination of elements of in a unique way, as specified in .   "
},
{
  "id": "eg_basis_onestep_R3",
  "level": "2",
  "url": "s_basis.html#eg_basis_onestep_R3",
  "type": "Example",
  "number": "3.6.9",
  "title": "One-step technique for <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " One-step technique for   Use the one step technique to decide whether the set is a basis of .    We ask whether for all elements we can write for a unique choice of . This is equivalent to asking whether the matrix equation . has a unique solution for any choice of . Performing Gaussian elimination on the corresponding augmented matrix yields . Since the third column of does not have a leading one, we conclude that the corresponding system has a free variable, and hence that for any given the equation has either no solutions (inconsistent) or infinitely many solutions. In particular, it is not true that there is always a unique solution. Thus is not a basis according to the one-step technique.  In fact, our Gaussian elimination analysis tells us exactly how fails to be a basis. Since the last column of does not have a leading one, the corresponding system is always consistent: , there is always at least one solution to for each . This tells us that is a spanning set of . On the other hand, the existence of the free variable tells us that for , we will have infinitely many choices satisfying . This shows that is not linearly independent.   "
},
{
  "id": "eg_basis_onestep_p1",
  "level": "2",
  "url": "s_basis.html#eg_basis_onestep_p1",
  "type": "Example",
  "number": "3.6.10",
  "title": "One-step technique for <span class=\"process-math\">\\(P_1\\)<\/span>.",
  "body": " One-step technique for   Use the one-step technique to decide whether the set is a basis of .    Take an arbitrary element and consider the polynomial equation The usual remark about polynomial equality implies that this is equivalent to the matrix equation . The matrix on the left is invertible, allowing us to solve: . We conclude that any can be written as in a unique way: namely, with and . Thus is a basis.   "
},
{
  "id": "fig_vid_basis",
  "level": "2",
  "url": "s_basis.html#fig_vid_basis",
  "type": "Figure",
  "number": "3.6.11",
  "title": "Video: deciding if a basis of <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Video: deciding if a basis of  Video: deciding if a basis of   "
},
{
  "id": "fig_vid_basis_exotic",
  "level": "2",
  "url": "s_basis.html#fig_vid_basis_exotic",
  "type": "Figure",
  "number": "3.6.12",
  "title": "Video: deciding if a basis of <span class=\"process-math\">\\(V\\)<\/span>",
  "body": " Video: deciding if a basis of  Video: deciding if a basis of   "
},
{
  "id": "th_bases_transformations",
  "level": "2",
  "url": "s_basis.html#th_bases_transformations",
  "type": "Theorem",
  "number": "3.6.13",
  "title": "Bases and linear transformations.",
  "body": " Bases and linear transformations   Let be a basis for the vector space .    Let and be linear transformations from to . If for all , then .    Let be a vector space. Any mapping assigning each element of to a chosen element extends uniquely to a linear transformation satisfying for all . In more detail, given any , if , where and for all , then .       Proof of (i)  Assume and are linear transformations from to satisfying for all . Given any we can write . It follows that . Since for all , we have .    Proof of (ii)  That there can me at most one such follows from (i). Thus we need only show that such a exists.  Since any has a unique expression of the form , where for all , the formula in defines a function in a well-defined manner. Note also that the formula still applies even if some of the coefficients are equal to 0: if , then , and the right-hand side of is unchanged. We will use this fact below.  We now show that is linear. Given we can find a common collection of elements for which for some . We can no longer assume that and for all , but as observed above we still have . Given any , we have . Thus is a linear transformation.    "
},
{
  "id": "rm_bases_transformations",
  "level": "2",
  "url": "s_basis.html#rm_bases_transformations",
  "type": "Remark",
  "number": "3.6.14",
  "title": "Transformations determined by behavior on basis.",
  "body": " Transformations determined by behavior on basis   Let's paraphrase the two results of .   A linear transformation is completely determined by its behavior on a basis . Once we know the images for all , the image for any other is then completely determined. Put another way, if two linear transformations out of  agree on the elements of a basis , then they agree for all elements of .    Once we have a basis on hand, it is easy to construct linear transformations : simply choose images for all in any manner you like, and then define for any element using .      "
},
{
  "id": "ss_bases_transformations-5",
  "level": "2",
  "url": "s_basis.html#ss_bases_transformations-5",
  "type": "Example",
  "number": "3.6.15",
  "title": "Composition of reflections.",
  "body": " Composition of reflections   Let be reflection across the -axis, and let be reflection across the -axis. (See .) Use an argument in the spirit of statement (i) from to show that . (Note: this equality can also be shown using our matrix formulas for rotations and reflections. See . )    Since and are both linear transformations ( ), so is the composition . We wish to show . Since is also a linear transformation, it suffices by to show that and agree on a basis of . Take the standard basis . Compute: . Since and agree on the basis , we have .   "
},
{
  "id": "cor_matrix_transformations",
  "level": "2",
  "url": "s_basis.html#cor_matrix_transformations",
  "type": "Corollary",
  "number": "3.6.16",
  "title": "Matrix transformations.",
  "body": " Matrix transformations   Given any linear transformation there is a unique matrix such that . In fact we have , where is the standard basis of . As a result, in the special case where the domain and codomain are both spaces of tuples, all linear transformations are matrix transformations.    Let be the standard basis of , and let be the matrix defined as . In other words, the -th column of is , considered as an column vector. The corresponding matrix transformation is linear by . Since is linear by assumption, applies: to show we need only show that for all . We have . Thus , as claimed.   "
},
{
  "id": "d_transformation_standard_matrix",
  "level": "2",
  "url": "s_basis.html#d_transformation_standard_matrix",
  "type": "Definition",
  "number": "3.6.17",
  "title": "Standard matrix of linear <span class=\"process-math\">\\(T\\colon \\R^n\\rightarrow \\R^m\\)<\/span>.",
  "body": " Standard matrix of linear   Let be a linear transformation. The standard matrix of is the unique matrix satisfying . Equivalently, is the unique matrix satisfying for all .   "
},
{
  "id": "eg_standard_matrix",
  "level": "2",
  "url": "s_basis.html#eg_standard_matrix",
  "type": "Example",
  "number": "3.6.18",
  "title": "Standard matrix computation.",
  "body": " Standard matrix computation   The function defined as is linear.    Use to compute the standard matrix of .    Use to compute .      We have . Let . Since provides a matrix formula for we have . Thus , as you can confirm.   "
},
{
  "id": "eg_rotation_via_standard_matrix",
  "level": "2",
  "url": "s_basis.html#eg_rotation_via_standard_matrix",
  "type": "Example",
  "number": "3.6.19",
  "title": "Rotation matrices revisited.",
  "body": " Rotation matrices revisited   Fix an angle . Taking for granted that the rotation operation is a linear transformation, re-derive the matrix formula for : , compute , the standard matrix of .    Let . According to  , since gets rotated by to , and gets rotated to .   "
},
{
  "id": "s_basis_ex-1-2",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-1-2",
  "type": "Exercise",
  "number": "3.6.3.1",
  "title": "",
  "body": "  Find a basis for the vector space where is the vector space of polynomials in with degree less than 3.   ,            "
},
{
  "id": "s_basis_ex-1-3",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-1-3",
  "type": "Exercise",
  "number": "3.6.3.2",
  "title": "",
  "body": "  Find a basis for the kernel of the linear transformation defined by where is the vector space of polynomials in with degree less than 3.   ,            "
},
{
  "id": "s_basis_ex-1-4",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-1-4",
  "type": "Exercise",
  "number": "3.6.3.3",
  "title": "",
  "body": "  Find a basis for the vector space of matrices with trace 0.   , ,  .      "
},
{
  "id": "s_basis_ex-1-5",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-1-5",
  "type": "Exercise",
  "number": "3.6.3.4",
  "title": "",
  "body": "  A square matrix is half-magic if the sum of the numbers in each row and column is the same. Find a basis for the vector space of half-magic squares.   ,  .      "
},
{
  "id": "s_basis_ex-2-3",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-2-3",
  "type": "Exercise",
  "number": "3.6.3.5",
  "title": "",
  "body": "                "
},
{
  "id": "s_basis_ex-2-4",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-2-4",
  "type": "Exercise",
  "number": "3.6.3.6",
  "title": "",
  "body": "                "
},
{
  "id": "s_basis_ex-2-5",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-2-5",
  "type": "Exercise",
  "number": "3.6.3.7",
  "title": "",
  "body": "       , where      , where     "
},
{
  "id": "s_basis_ex-3-3",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-3-3",
  "type": "Exercise",
  "number": "3.6.3.8",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_basis_ex-3-4",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-3-4",
  "type": "Exercise",
  "number": "3.6.3.9",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_basis_ex-3-5",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-3-5",
  "type": "Exercise",
  "number": "3.6.3.10",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_basis_ex-3-6",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-3-6",
  "type": "Exercise",
  "number": "3.6.3.11",
  "title": "",
  "body": "  , is set of all matrices whose rows and columns all sum to zero  "
},
{
  "id": "s_basis_ex-4",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-4",
  "type": "Exercise",
  "number": "3.6.3.12",
  "title": "",
  "body": " Suppose be a basis for the vector space . Let , where . Prove that is a basis.  "
},
{
  "id": "s_basis_ex-5",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-5",
  "type": "Exercise",
  "number": "3.6.3.13",
  "title": "",
  "body": " Let be a set of distinct elements of , let be an invertible matrix, and let . Prove that is a basis of if and only if is a basis of as follows.    Prove that for all : , contains distinct elements.    Prove that if is a basis of , then is also a basis for any invertible matrix .    Use the for all quantifier of (a) to prove that if is a basis of for the invertible matrix , then is a basis of .    "
},
{
  "id": "ex_basis_matrix_families",
  "level": "2",
  "url": "s_basis.html#ex_basis_matrix_families",
  "type": "Exercise",
  "number": "3.6.3.14",
  "title": "Bases for important matrix subspaces.",
  "body": "Bases for important matrix subspaces  Let . For each of the following subspaces , give a basis of . You must explicitly describe the elements of your basis as linear combinations of the elements of the standard basis for . No justification needed, as long as your proposed basis is simple enough.    Upper triangular matrices       Symmetric matrices       Skew-symmetric matrices        It might help to look at the and cases to get an idea of what these bases should be.  "
},
{
  "id": "s_basis_ex-7",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-7",
  "type": "Exercise",
  "number": "3.6.3.15",
  "title": "",
  "body": " The set is a basis of . Suppose the linear transformation satisfies . Find a formula for , where is a general element of .  "
},
{
  "id": "s_basis_ex-8",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-8",
  "type": "Exercise",
  "number": "3.6.3.16",
  "title": "",
  "body": " The set is a basis of . Suppose the linear transformation satisfies . Find a formula for , where is a general element of .  "
},
{
  "id": "s_basis_ex-9",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-9",
  "type": "Exercise",
  "number": "3.6.3.17",
  "title": "",
  "body": " The set is a basis of . Suppose the linear transformation satisfies . Show that the general formula for is given by .   Use (1) of .  "
},
{
  "id": "s_basis_ex-10",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-10",
  "type": "Exercise",
  "number": "3.6.3.18",
  "title": "",
  "body": " Suppose is a linear transformation, and is a basis of for which for all . Show that : , is the zero transformation from to .   Use (1) of .  "
},
{
  "id": "s_basis_ex-11",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-11",
  "type": "Exercise",
  "number": "3.6.3.19",
  "title": "",
  "body": " Suppose is a linear transformation, and is a basis of for which for all . Show that : , is the identity transformation of .   Use (1) of .  "
},
{
  "id": "s_basis_ex-12",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-12",
  "type": "Exercise",
  "number": "3.6.3.20",
  "title": "",
  "body": " Let be a linear transformation. Assume there is a basis of and a constant such that for all . Prove: , where .   Use (1) of .  "
},
{
  "id": "s_basis_ex-13-3",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-13-3",
  "type": "Exercise",
  "number": "3.6.3.21",
  "title": "",
  "body": "    "
},
{
  "id": "s_basis_ex-13-4",
  "level": "2",
  "url": "s_basis.html#s_basis_ex-13-4",
  "type": "Exercise",
  "number": "3.6.3.22",
  "title": "",
  "body": "    "
},
{
  "id": "s_dimension",
  "level": "1",
  "url": "s_dimension.html",
  "type": "Section",
  "number": "3.7",
  "title": "Dimension",
  "body": " Dimension   Intuitively, we think of as a two-dimensional space, and as three-dimensional one. Why? Loosely speaking this notion of dimension has something to do with the number of degrees of freedom involved in specifying a particular element of the given space: to specify an element of we need to give its two coordinates; to specify an element of we need to give its three coordinates. Clearly, this conception is too imprecise to serve as a mathematical definition. What exactly does degrees of freedom mean? And how do you quantify the number of degrees of freedom needed for a given space? For example, we also think of a plane passing through the origin as a two-dimensional object; it is not immediately clear how to square this intuition with our vague degrees of freedom formulation. In this section we introduce the definition of the dimension of a vector space, which will be a rigorous articulation of these notions. Our definition, which relies on the concept of bases, seems simple enough: the dimension of a vector space is defined as the number of elements contained in any basis of . However, as we will see there is considerable work involved (a) in proving that this definition is well-defined, and (b) in showing that it captures the intuition of dimension described above.    Dimension of a vector space   Cardinality of a set  cardinality of a set    the cardinality of the set    Let be a set. The cardinality of , denoted is defined as follows:   If is finite, then its cardinality is the number of distinct elements it contains, written .    If is infinite, then we say it has infinite cardinality , and write .      The following theorem is the crucial result needed to show that any two finite bases of a vector space have the same cardinality.   Suppose is a finite spanning set for the vector space and let . If is a finite set with , then is linearly dependent.    Let , and let . Since spans , each element of is a linear combination of elements of : , we have for all . Now consider the following chain of equivalences: . From the last vector equation, we see that if we can find a nonzero sequence satisfying for all , then there is a nontrivial combination of the equal to the zero vector, and hence that is linearly dependent. Such a sequence corresponds to a solution to the homogeneous linear with augmented matrix , where . Since this is a homogeneous system of equations in unknowns, and since , there are in fact infinitely many solutions. (The system has at most leading ones, and so there must be a free variable since one of the columns in the equivalent row echelon matrix must fail to contain a leading one.) In particular there is a nonzero solution , and we conclude that is linearly dependent.    The next theorem not only ensures that our definition of dimension ( ) is well-defined, it also characterizes dimension as the minimal cardinality of a spanning set, and the maximal cardinality of a linearly independent set.   Basis bounds   Let be a basis of the vector space , and suppose     If spans , then .    If is linearly independent, then .    If is a basis for , then .         Suppose by contradiction that and . Then would imply is linearly dependent. Since this is a contradiction, we conclude that .    This also follows from : since is a spanning set of any set containing more than elements must be linearly dependent.    This follows from (1) and (2): if is a basis, then since spans, we have (1); and since is linearly independent we have (2). We conclude that .        Dimension of a vector space  dimension of a vector space    dimension of    Let be a vector space. The dimension of , denoted , is defined as follows:   If has a finite basis , then the dimension of is the number of elements of : , .    If does not have a finite basis, then we say is infinite dimensional , and write .         Wouldn't it have been more natural to simply say is infinite dimensional if it has an infinite basis? As it turns out this is indeed equivalent to not having a finite basis, but to prove this we need to establish the general fact that we can always find a basis for a given vector space . As intuitive as that claim may sound ( , that bases always exist), its proof requires some set theory methods that are not covered in this text. As such we will not include it in our treatment of dimension, and so will have to make do with our slightly awkward definition of infinite-dimensional vector spaces.     Computing dimension   By definition, to show a vector space has dimension , we must exhibit a basis with . Similarly to show is infinite dimensional, we must show that it does not have a finite basis: equivalently, if you believe , we must exhibit an infinite basis of .  Consider our list of familiar vector spaces, for example. Since each vector spaces on this list comes equipped with a standard basis, we compute its dimension simply by counting the elements in the given standard basis. For each below we provide its standard basis and compute .    Zero space   , ,     Tuples   , ,     Matrices   , ,     Polynomials of bounded degree   , ,     Polynomials   , ,        Video example: computing dimension   Video: computing dimension  Video: computing dimension     The contracting and expanding theorem below is very useful theoretical consequence of . It allows us to construct a customized basis from a given set . This method is used prominently in the proof of the rank-nullity theorem .   Contracting and expanding to bases   Let be a vector space of dimension , and let be a finite subset.    Contract to basis  If spans , then there is a subset of that is a basis of : , we can contract a spanning set to a basis.    Extend to basis  If is linearly independent, then is contained in a basis of : , we can extend a linearly independent set to a basis.      Let .   Assume . Let be a subset of of minimal cardinality such that is still equal to . Such a set is guaranteed to exist: since is finite, it has a finite number of subsets; of these subsets some will span, others will not; of the subsets that do span, there will be one (or more) that has the least number of elements.  We claim that such a spanning subset of minimal cardinality is linearly independent, and hence is a basis for , as desired. We give a proof by contradiction. Suppose is linearly dependent. Then some element of , call it , can be expressed as a linear combination of the other elements ( ). Then in terms of span, the element is redundant . In other words, if we let , the set obtained by throwing out  , then we have . Since , this contradicts our choice of as a spanning set of minimal cardinality. We conclude that is linearly independent, completing the proof.    Assume is linearly independent. The procedure below constructs a finite chain of sets that ends with a basis .   Initialization  Let     Expansion loop  If , return . Otherwise set , where is any element of that is not contained in and repeat.   Some observations:   Each is linearly independent. This can be shown by induction, the crucial point being that if is linearly independent, and if , then is linearly independent. The proof is left as an exercise.    The procedure must halt. Why? Since , and since each is linearly independent, we must have for all by . Since and , the procedure must halt in at most steps.   From (ii) we may assume the procedure halts at for some . From (i) we know that is linearly independent. Furthermore, since the procedure halts at , we know that . It follows that is a basis containing , as desired.      The following corollary follows from and . We call it a street smarts result as the first two statements give us a quick and dirty way of dashing a set's hopes of being a basis. The third statement asserts that when a finite set's cardinality matches the dimension of a space, then to prove it is a basis it suffices to prove either one of the two defining properties of .  Street smarts   Let be a vector space of dimension , and let be a subset.    If , then does not span .    If , then is linearly dependent.    If , then the following are equivalent:   The set is a basis.    The set spans .    The set is linearly independent.         Statements (1) and (2) follow directly from . Statement (3) is an easy consequence of . For example, if spans , then there is a subset of that is a basis of ; since all bases of have elements, and since , we must have ; thus is a basis. The proof for a linear independent set is similar, and is left to the reader.    We are often in a situation where we wish to show a given subspace of a vector space is in fact the entire space. For example, when deciding whether a set spans a vector space , we are asking whether is all of . As another example, given a linear transformation , one of the first things we wish to determine is whether the subspace is in fact all of . As the next result illustrates, dimension is a very useful tool in this regard.   Dimension of subspaces   Let be a vector space.    If is a subspace, then .    If is a subspace, then if and only if .         Firstly, if , then clearly for any subspace .  Now assume . Apply the extending to a basis procedure described in the proof of to the emptyset , which is lienarly independent, considered as a subset of : , at each stage, if the current set is not a basis of , add any element . Since , and since , the linearly independent sets cannot have more than elements; thus the procedure must halt with a basis of satisfying . We conclude that .    Clearly, if , then . For the other direction, assume . Let be a basis for . Since is lienarly independent, it can be extended to a basis of ( ). Since , and since all bases of have cardinality , we must have . It follows that is also a basis of , and hence that .      That was quite a dose of theory! For your convenience, we collect the various results on dimension, together with their nicknames, in one omnibus theorem.  Dimension theory compendium   Let be a vector space of dimension .    Contract  If spans , then can be contracted to a basis of .    Expand  If is linearly independent, then can be extended to a basis of .    Street smarts  If and , then does not span .    Street smarts  If and , then is linearly dependent.    Street smarts  If and , then is a basis if and only if spans if and only if is linearly independent.    Dimension of subspaces  If is a subspace, then    , and     if and only if .            Webwork Exercises    Are the following statements true or false?    has exactly one subspace of dimension for each of .    The nullity of a matrix A is the same as the dimension of the subspace spanned be the columns of A.    If { } is a basis for , then span{ } is a plane.    The set {0} forms a basis for the zero subspace.    Let . Then { } in can form a basis for if the correct vectors are removed from .           Suppose that and are nonzero subspaces, with contained inside , and suppose that .  (a) What are the possible dimensions of ?   1    2    3    1 or 2    1,2, or 3    (b) If then what are the possible dimensions of ?   1    2    3    1 or 2    1,2, or 3               (a) The dimension of cannot exceed the dimension of since is contained in . is non-zero, and thus its dimension cannot be 0. Hence 1, 2, or 3 are the possible dimensions of . (b) If , then is properly contained in , and the dimension of is strictly less than the dimension of . Thus only 1 or 2 are possible dimensions of .        Suppose that and are nonzero subspaces, with contained inside , and suppose that    If , then what are the possible dimensions of ?    What are the possible dimensions of ?     cannot exceed the dimension of , since is contained in . us non-zero, and thus the its dimension cannot be zero. Hence the possible dimensions of are 1, 2, 3, and 4. b) If , then is properly contained in , and the dimension of is strictly less than the dimension of . So the possible dimensions of are 1, 2, and 3.        Find the dimensions of the following vector spaces.  (a) The vector space of matrices with trace 0  (b) The vector space   (c) The vector space of all upper triangular matrices  (d) The vector space of polynomials with degree less than   (e) The vector space   (f) The vector space of all diagonal matrices                                       By deleting linearly dependent vectors, find a basis of each subspace and give the dimension of the subspace.  A. The dimension of is .  B. The dimension of is .  C. The dimension of is .  D. The dimension of is .  E. The dimension of is .                                 Street smarts!    For each vector space and subset use an appropriate statement from to help decide whether is a basis for . Justify your answer.     ,      ,      ,      Let be the set of solutions to the following homogeneous system: .    Compute a basis of . Justify your answer.    Compute .      Compute bases and dimensions for the following subspaces of .                Suppoe be a basis for the vector space . Let , where . Prove that is a basis.   First explain why it is enough to show that is linearly independent.    In multivariable calculus, a plane in is defined as the set of solutions to an equation of the form , where at least one of is nonzero. In particular, a plane passing through the origin is the set of solutions to an equation of the form , where at least one of is nonzero.  Prove that the 2-dimensional subspaces of are precisely the planes of that pass through the origin. In other words, show (a) that any plane passing through the origin is a 2-dimensional subspace, and conversely, (b) that any 2-dimensional subspace is a plane passing through the origin.   For (b), begin with a basis of of , and use the cross product to find a normal vector that defines as a plane.    Let , , and , where Show that as follows:  Show that .   Compute the dimensions of and and use .       Let and define . Find a basis for by inspection and compute its dimension.    Let and let , where . Provide a basis for and compute .   You can contract to a basis by throwing out some redundant elements.   Dimensions of important matrix subspaces  Let . Compute for each subspace .    Upper triangular matrices       Symmetric matrices       Skew-symmetric matrices        Use your results from . The identity will be helpful.    Let . Show that there is a nonzero polynomial such that .   Consider the set and use a relevant statement from . Treat two cases separately: (a) the powers of are all distinct; (b) for some .    "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_dimension.html#d_cardinality",
  "type": "Definition",
  "number": "3.7.1",
  "title": "Cardinality of a set.",
  "body": " Cardinality of a set  cardinality of a set    the cardinality of the set    Let be a set. The cardinality of , denoted is defined as follows:   If is finite, then its cardinality is the number of distinct elements it contains, written .    If is infinite, then we say it has infinite cardinality , and write .      "
},
{
  "id": "th_basis_span_bounds",
  "level": "2",
  "url": "s_dimension.html#th_basis_span_bounds",
  "type": "Theorem",
  "number": "3.7.2",
  "title": "",
  "body": "  Suppose is a finite spanning set for the vector space and let . If is a finite set with , then is linearly dependent.    Let , and let . Since spans , each element of is a linear combination of elements of : , we have for all . Now consider the following chain of equivalences: . From the last vector equation, we see that if we can find a nonzero sequence satisfying for all , then there is a nontrivial combination of the equal to the zero vector, and hence that is linearly dependent. Such a sequence corresponds to a solution to the homogeneous linear with augmented matrix , where . Since this is a homogeneous system of equations in unknowns, and since , there are in fact infinitely many solutions. (The system has at most leading ones, and so there must be a free variable since one of the columns in the equivalent row echelon matrix must fail to contain a leading one.) In particular there is a nonzero solution , and we conclude that is linearly dependent.   "
},
{
  "id": "th_basis_dimension",
  "level": "2",
  "url": "s_dimension.html#th_basis_dimension",
  "type": "Theorem",
  "number": "3.7.3",
  "title": "Basis bounds.",
  "body": " Basis bounds   Let be a basis of the vector space , and suppose     If spans , then .    If is linearly independent, then .    If is a basis for , then .         Suppose by contradiction that and . Then would imply is linearly dependent. Since this is a contradiction, we conclude that .    This also follows from : since is a spanning set of any set containing more than elements must be linearly dependent.    This follows from (1) and (2): if is a basis, then since spans, we have (1); and since is linearly independent we have (2). We conclude that .      "
},
{
  "id": "d_dimension",
  "level": "2",
  "url": "s_dimension.html#d_dimension",
  "type": "Definition",
  "number": "3.7.4",
  "title": "Dimension of a vector space.",
  "body": " Dimension of a vector space  dimension of a vector space    dimension of    Let be a vector space. The dimension of , denoted , is defined as follows:   If has a finite basis , then the dimension of is the number of elements of : , .    If does not have a finite basis, then we say is infinite dimensional , and write .      "
},
{
  "id": "rm_basis_existence",
  "level": "2",
  "url": "s_dimension.html#rm_basis_existence",
  "type": "Remark",
  "number": "3.7.5",
  "title": "",
  "body": "  Wouldn't it have been more natural to simply say is infinite dimensional if it has an infinite basis? As it turns out this is indeed equivalent to not having a finite basis, but to prove this we need to establish the general fact that we can always find a basis for a given vector space . As intuitive as that claim may sound ( , that bases always exist), its proof requires some set theory methods that are not covered in this text. As such we will not include it in our treatment of dimension, and so will have to make do with our slightly awkward definition of infinite-dimensional vector spaces.   "
},
{
  "id": "rm_computing_dimension",
  "level": "2",
  "url": "s_dimension.html#rm_computing_dimension",
  "type": "Remark",
  "number": "3.7.6",
  "title": "Computing dimension.",
  "body": " Computing dimension   By definition, to show a vector space has dimension , we must exhibit a basis with . Similarly to show is infinite dimensional, we must show that it does not have a finite basis: equivalently, if you believe , we must exhibit an infinite basis of .  Consider our list of familiar vector spaces, for example. Since each vector spaces on this list comes equipped with a standard basis, we compute its dimension simply by counting the elements in the given standard basis. For each below we provide its standard basis and compute .    Zero space   , ,     Tuples   , ,     Matrices   , ,     Polynomials of bounded degree   , ,     Polynomials   , ,      "
},
{
  "id": "fig_vid_computing_dim",
  "level": "2",
  "url": "s_dimension.html#fig_vid_computing_dim",
  "type": "Figure",
  "number": "3.7.7",
  "title": "Video: computing dimension",
  "body": " Video: computing dimension  Video: computing dimension   "
},
{
  "id": "th_basis_contract_expand",
  "level": "2",
  "url": "s_dimension.html#th_basis_contract_expand",
  "type": "Theorem",
  "number": "3.7.8",
  "title": "Contracting and expanding to bases.",
  "body": " Contracting and expanding to bases   Let be a vector space of dimension , and let be a finite subset.    Contract to basis  If spans , then there is a subset of that is a basis of : , we can contract a spanning set to a basis.    Extend to basis  If is linearly independent, then is contained in a basis of : , we can extend a linearly independent set to a basis.      Let .   Assume . Let be a subset of of minimal cardinality such that is still equal to . Such a set is guaranteed to exist: since is finite, it has a finite number of subsets; of these subsets some will span, others will not; of the subsets that do span, there will be one (or more) that has the least number of elements.  We claim that such a spanning subset of minimal cardinality is linearly independent, and hence is a basis for , as desired. We give a proof by contradiction. Suppose is linearly dependent. Then some element of , call it , can be expressed as a linear combination of the other elements ( ). Then in terms of span, the element is redundant . In other words, if we let , the set obtained by throwing out  , then we have . Since , this contradicts our choice of as a spanning set of minimal cardinality. We conclude that is linearly independent, completing the proof.    Assume is linearly independent. The procedure below constructs a finite chain of sets that ends with a basis .   Initialization  Let     Expansion loop  If , return . Otherwise set , where is any element of that is not contained in and repeat.   Some observations:   Each is linearly independent. This can be shown by induction, the crucial point being that if is linearly independent, and if , then is linearly independent. The proof is left as an exercise.    The procedure must halt. Why? Since , and since each is linearly independent, we must have for all by . Since and , the procedure must halt in at most steps.   From (ii) we may assume the procedure halts at for some . From (i) we know that is linearly independent. Furthermore, since the procedure halts at , we know that . It follows that is a basis containing , as desired.      "
},
{
  "id": "cor_street_smarts",
  "level": "2",
  "url": "s_dimension.html#cor_street_smarts",
  "type": "Corollary",
  "number": "3.7.9",
  "title": "Street smarts.",
  "body": " Street smarts   Let be a vector space of dimension , and let be a subset.    If , then does not span .    If , then is linearly dependent.    If , then the following are equivalent:   The set is a basis.    The set spans .    The set is linearly independent.         Statements (1) and (2) follow directly from . Statement (3) is an easy consequence of . For example, if spans , then there is a subset of that is a basis of ; since all bases of have elements, and since , we must have ; thus is a basis. The proof for a linear independent set is similar, and is left to the reader.   "
},
{
  "id": "cor_dimension_subspace",
  "level": "2",
  "url": "s_dimension.html#cor_dimension_subspace",
  "type": "Corollary",
  "number": "3.7.10",
  "title": "Dimension of subspaces.",
  "body": " Dimension of subspaces   Let be a vector space.    If is a subspace, then .    If is a subspace, then if and only if .         Firstly, if , then clearly for any subspace .  Now assume . Apply the extending to a basis procedure described in the proof of to the emptyset , which is lienarly independent, considered as a subset of : , at each stage, if the current set is not a basis of , add any element . Since , and since , the linearly independent sets cannot have more than elements; thus the procedure must halt with a basis of satisfying . We conclude that .    Clearly, if , then . For the other direction, assume . Let be a basis for . Since is lienarly independent, it can be extended to a basis of ( ). Since , and since all bases of have cardinality , we must have . It follows that is also a basis of , and hence that .      "
},
{
  "id": "th_dimension_compendium",
  "level": "2",
  "url": "s_dimension.html#th_dimension_compendium",
  "type": "Theorem",
  "number": "3.7.11",
  "title": "Dimension theory compendium.",
  "body": " Dimension theory compendium   Let be a vector space of dimension .    Contract  If spans , then can be contracted to a basis of .    Expand  If is linearly independent, then can be extended to a basis of .    Street smarts  If and , then does not span .    Street smarts  If and , then is linearly dependent.    Street smarts  If and , then is a basis if and only if spans if and only if is linearly independent.    Dimension of subspaces  If is a subspace, then    , and     if and only if .        "
},
{
  "id": "s_dimension_ex-1-2",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-1-2",
  "type": "Exercise",
  "number": "3.7.2.1",
  "title": "",
  "body": "  Are the following statements true or false?    has exactly one subspace of dimension for each of .    The nullity of a matrix A is the same as the dimension of the subspace spanned be the columns of A.    If { } is a basis for , then span{ } is a plane.    The set {0} forms a basis for the zero subspace.    Let . Then { } in can form a basis for if the correct vectors are removed from .        "
},
{
  "id": "s_dimension_ex-1-3",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-1-3",
  "type": "Exercise",
  "number": "3.7.2.2",
  "title": "",
  "body": "  Suppose that and are nonzero subspaces, with contained inside , and suppose that .  (a) What are the possible dimensions of ?   1    2    3    1 or 2    1,2, or 3    (b) If then what are the possible dimensions of ?   1    2    3    1 or 2    1,2, or 3               (a) The dimension of cannot exceed the dimension of since is contained in . is non-zero, and thus its dimension cannot be 0. Hence 1, 2, or 3 are the possible dimensions of . (b) If , then is properly contained in , and the dimension of is strictly less than the dimension of . Thus only 1 or 2 are possible dimensions of .     "
},
{
  "id": "s_dimension_ex-1-4",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-1-4",
  "type": "Exercise",
  "number": "3.7.2.3",
  "title": "",
  "body": "  Suppose that and are nonzero subspaces, with contained inside , and suppose that    If , then what are the possible dimensions of ?    What are the possible dimensions of ?     cannot exceed the dimension of , since is contained in . us non-zero, and thus the its dimension cannot be zero. Hence the possible dimensions of are 1, 2, 3, and 4. b) If , then is properly contained in , and the dimension of is strictly less than the dimension of . So the possible dimensions of are 1, 2, and 3.     "
},
{
  "id": "s_dimension_ex-1-5",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-1-5",
  "type": "Exercise",
  "number": "3.7.2.4",
  "title": "",
  "body": "  Find the dimensions of the following vector spaces.  (a) The vector space of matrices with trace 0  (b) The vector space   (c) The vector space of all upper triangular matrices  (d) The vector space of polynomials with degree less than   (e) The vector space   (f) The vector space of all diagonal matrices                                    "
},
{
  "id": "s_dimension_ex-1-6",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-1-6",
  "type": "Exercise",
  "number": "3.7.2.5",
  "title": "",
  "body": "  By deleting linearly dependent vectors, find a basis of each subspace and give the dimension of the subspace.  A. The dimension of is .  B. The dimension of is .  C. The dimension of is .  D. The dimension of is .  E. The dimension of is .                               "
},
{
  "id": "s_dimension_ex-3-2",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-3-2",
  "type": "Exercise",
  "number": "3.7.2.6",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_dimension_ex-3-3",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-3-3",
  "type": "Exercise",
  "number": "3.7.2.7",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_dimension_ex-3-4",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-3-4",
  "type": "Exercise",
  "number": "3.7.2.8",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_dimension_ex-4",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-4",
  "type": "Exercise",
  "number": "3.7.2.9",
  "title": "",
  "body": " Let be the set of solutions to the following homogeneous system: .    Compute a basis of . Justify your answer.    Compute .    "
},
{
  "id": "s_dimension_ex-5",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-5",
  "type": "Exercise",
  "number": "3.7.2.10",
  "title": "",
  "body": " Compute bases and dimensions for the following subspaces of .              "
},
{
  "id": "s_dimension_ex-6",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-6",
  "type": "Exercise",
  "number": "3.7.2.11",
  "title": "",
  "body": " Suppoe be a basis for the vector space . Let , where . Prove that is a basis.   First explain why it is enough to show that is linearly independent.  "
},
{
  "id": "s_dimension_ex-7",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-7",
  "type": "Exercise",
  "number": "3.7.2.12",
  "title": "",
  "body": " In multivariable calculus, a plane in is defined as the set of solutions to an equation of the form , where at least one of is nonzero. In particular, a plane passing through the origin is the set of solutions to an equation of the form , where at least one of is nonzero.  Prove that the 2-dimensional subspaces of are precisely the planes of that pass through the origin. In other words, show (a) that any plane passing through the origin is a 2-dimensional subspace, and conversely, (b) that any 2-dimensional subspace is a plane passing through the origin.   For (b), begin with a basis of of , and use the cross product to find a normal vector that defines as a plane.  "
},
{
  "id": "s_dimension_ex-8",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-8",
  "type": "Exercise",
  "number": "3.7.2.13",
  "title": "",
  "body": " Let , , and , where Show that as follows:  Show that .   Compute the dimensions of and and use .     "
},
{
  "id": "s_dimension_ex-9",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-9",
  "type": "Exercise",
  "number": "3.7.2.14",
  "title": "",
  "body": " Let and define . Find a basis for by inspection and compute its dimension.  "
},
{
  "id": "s_dimension_ex-10",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-10",
  "type": "Exercise",
  "number": "3.7.2.15",
  "title": "",
  "body": " Let and let , where . Provide a basis for and compute .   You can contract to a basis by throwing out some redundant elements.  "
},
{
  "id": "ex_dimension_matrix_families",
  "level": "2",
  "url": "s_dimension.html#ex_dimension_matrix_families",
  "type": "Exercise",
  "number": "3.7.2.16",
  "title": "Dimensions of important matrix subspaces.",
  "body": "Dimensions of important matrix subspaces  Let . Compute for each subspace .    Upper triangular matrices       Symmetric matrices       Skew-symmetric matrices        Use your results from . The identity will be helpful.  "
},
{
  "id": "s_dimension_ex-12",
  "level": "2",
  "url": "s_dimension.html#s_dimension_ex-12",
  "type": "Exercise",
  "number": "3.7.2.17",
  "title": "",
  "body": " Let . Show that there is a nonzero polynomial such that .   Consider the set and use a relevant statement from . Treat two cases separately: (a) the powers of are all distinct; (b) for some .  "
},
{
  "id": "s_rank_nullity",
  "level": "1",
  "url": "s_rank_nullity.html",
  "type": "Section",
  "number": "3.8",
  "title": "Rank-nullity theorem and fundamental spaces",
  "body": " Rank-nullity theorem and fundamental spaces  This section is in a sense just a long-format example of how to compute bases and dimensions of subspaces. Along the way, however we meet the rank-nullity theorem (sometimes called the fundamental theorem of linear algebra ), and apply this theorem in the context of fundamental spaces of matrices ( ).   The rank-nullity theorem   The rank-nullity theorem relates the the dimensions of the null space and image of a linear transformation , assuming is finite dimensional. Roughly speaking, it says that the bigger the null space, the smaller the image. More precisely, it tells us that . As we will see, this elegant result can be used to significantly simplify computations with linear transformations. For example, in a situation where we wish to compute explicitly both the null space and image of a given linear transformation, we can often get away with just computing one of the two spaces and using the rank-nullity theorem (and a dimension argument) to easily determine the other. Additionally, the rank-nullity theorem will directly imply some intuitively obvious properties of linear transformations. For example, suppose is a finite-dimensional vector space. It seems obvious that if , then there is no linear transformation mapping surjectively onto : , you should not be able to map a smaller vector space onto a bigger one. Similarly, if , then we expect that there is no injective linear transformation mapping injectively into . Both these results are easy consequences of the rank-nullity theorem .  Before proving the theorem we give names to and .    Rank and nullity  rank of a linear transformation  nullity of a linear transformation    the rank of     the nullity of    Let be a linear transformation.   The rank of , denoted , is the dimension of : , .    The nullity of , denoted , is the dimension of : , .        Rank-nullity  rank-nullity theorem   Let be a vector space of dimension , and let be a linear transformation. Then , or alternatively, .    Choose a basis of and extend to a basis , using . Observe that and .  We claim that is a basis of .   Proof of claim   is linearly independent  Suppose . Then the vector satisfies (using linearity of ), and hence . Then, using the fact that is a basis of , we have and hence Since the set is linearly independent, we conclude that for all and . In particular, , as desired.    spans  It is clear that since for all and is closed under linear combinations.  For the other direction, suppose . Then there is a such that . Since is a basis of we may write , in which case . This shows that , as desired.   Having shown is a basis for , we conclude that , and thus that .    Rank-nullity: verification   Verify the rank-nullity theorem for the linear transformation defined as .    To verify the rank-nullity theorem, we must compute bases for and . Consider first . We have . Here the parametric description is obtained using our usual technique for solving systems of equations ( ). From the parametric description, it is clear that the set spans . Since is clearly linearly independent, it is a basis for , and we conclude that . (Alternatively, the equation defines a plane passing through the origin in , and we know such subspaces are of dimension two. )  Next it is fairly clearly that . Thus is a basis for and .  Finally we observe that as predicted by the rank-nullity theorem.     Rank-nullity: application   Show that the linear transformation is surjective: , . Do so by first computing .    We first examine . We have . The system above is already in row echelon form, and so we easily see that . Thus is a basis of , and we conclude that . The rank-nullity theorem now implies that . Since and , we conclude by that . Thus is surjective.      Fundamental spaces of matrices  We now treat the special case of matrix transformations . The fundamenal spaces of a matrix defined below are can each be connected to and , and hence the rank-nullity theorem comes to bear in their analysis. Observe that was defined previously ( ). We include it below to gather all the fundamental spaces together under one definition.   Fundamental spaces  fundamental space of a matrix  null space of a matrix  row space of a matrix  column space of a matrix  rank of a matrix  nullity of a matrix    the null space of matrix     the row space of a matrix     the column space of a matrix     the rank of a matrix     the nullity of a matrix    Let be a an matrix. Let be the rows of , and let be its columns. The following subspaces are called the fundamental subspaces of .    The null space of , denoted is defined as .    The row space of , denoted , is defined as .    The column space of , denoted , is defined as .    The rank and nullity of , denoted and , respectively, are defined as and .    How do the fundamental spaces of a matrix relate to its associated matrix transformation ? It is easy to see that , and indeed we made this connection in . What about ? We claim that . To see why, let be the columns of and consider the following chain of equivalences: . We now highlight three equivalent statments in this chain . The first equivalence tells us that is the set of for which the matrix equation is consistent. The second equivalence tells us that . In sum, we have proven the following result.   Null space and image as fundamental spaces   Let be an matrix, and let be its corresponding matrix transformation. The following equalities hold: .    The next theorem indicates how row reduction affects fundamental spaces.   Fundamental spaces and row equivalence   Let be an matrix, and suppose is row equivalent to . The following equalities hold . Although and have the same dimension, they are in general not equal as subspaces.    First observe that is row equivalent to and yet . Thus we do not have in general.  We now turn to the equalities . Assume that is row equivalent to . Using the formulation of row reduction in terms of multiplication by elementary matrices, we see that there is an invertible matrix such that , and hence also . But then we have . This proves .  Next, by we have , and , . It follows that . Lastly, we turn to the row spaces. We will show that each row of is an element of , from whence it follows that . Let be the -th row of , and let be the -th column of . By , we have , and furthermore, is the linear combination of the rows of whose coefficients come from the entries of . Thus , as desired.  Having shown that , we see that the same argument works mutatis mutandis (swapping the roles of and and using in place of ) to show that . We conclude that .    Now that we better understand the role row reduction plays in fundamental spaces, we investigate the special case of a matrix in row echelon form.   Fundamental spaces and row echelon forms   Let be an matrix, and suppose is row equivalent to the matrix in row echelon form. Let be the number of leading ones in , and let ; , and are the number of leading and free variables, respectively, of the system corresponding to . We have .    By we know that , and . So it is enough to show that and .  First, we will show that the nonzero rows of form a basis for , proving . Clearly the nonzero rows span , since any linear combination of all the rows of can be expressed as a linear combination of the nonzero rows. Furthermore, since is in row echelon form, the staircase pattern of the leading ones appearing in the nonzero rows assures that these row vectors are linearly independent.  Next, we show that the columns of containing leading ones form a basis of . Let be the columns of with leading ones, and let be the columns without leading ones. To prove the form a basis for , we will show that given any there is a unique choice of scalars such that . (Recall that the uniqueness of this choice implies linear independence.) Given , we can find such that ( ), which means the linear system with augmented matrix is consistent. Using our Gaussian elimination theory (specifically, ), we know that the solutions to this system are in 1-1 correspondence with choices for the free variables . (Remember that the columns without leading ones correspond to the free variables.) In particular, there is a unique solution to where we set all the free variables equal to 0. By the column method ( ), this gives us a unique linear combination of only the columns with leading ones equal to . This proves the claim, and shows that the columns with leading ones form a basis for . We conclude that .  Lastly, we have , where the last equality uses the fact that the sum of the number of columns with leading ones ( ) and the number of columns without leading ones ( ) is , the total number of columns.     is now an easy consequence of the foregoing.   Rank-nullity for matrices   Let be an matrix. We have .    We have .    We now gather this suite of results into one overall procedure for computing with fundamental spaces.   Computing bases of fundamental spaces   To compute bases for the fundamental spaces of an matrix , proceed as follow.    Row reduce to a matrix in row echelon form.    We have . Compute a parametric description of the solutions to the linear system following . If the free variables are , a basis of is obtained by letting be the solution corresponding to the choice and for .    We have . The set of nonzero rows of is a basis for .    In general . However, the columns of containing leading ones form a basis of , and the corresponding columns of form a basis for .       Video example: fundamental spaces   Video: computing fundamental spaces  Video: computing fundamental spaces     The results allow us to add seven more equivalent statements to our invertibility theorem, bringing us to a total of fourteen!   Invertibility theorem (supersized)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .                             Any of the following equivalent conditions about the set of columns of hold: is a basis of ; spans ; is linearly independent.    Any of the following equivalent conditions about the set of rows of hold: is a basis of ; spans ; is linearly independent.        Contracting and expanding to bases  Thanks to we know that spanning sets can be contracted to bases, and linearly independent sets can be extended to bases; and we have already seen a few instances where this result has been put to good use. However, neither the theorem nor its proof provide a practical means of performing this contraction or extension. We would like a systematic way of determining which vectors to throw out (when contracting), or which vectors to chuck in (when extending). In the special case where for some , we can adapt to our needs.   Contracting and extending to bases of   Let .    Contracting to a basis  Assume spans . To contract to a basis , proceed as follows.    Let be the matrix whose -th column is given by for all .    Use the column space procedure ( ) to compute a basis of , chosen from among the original columns of .    The subset is a basis for .      Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.    Let be the matrix whose first columns are the elements of , and whose remaining columns consist of , the standard basis elements of .    Use the column space procedure ( ) to compute a basis of , chosen from among the original columns of .    The set is a basis for containing .        Let's see why in both cases the procedure produces a basis of that is either a sub- or superset of .   Contracting to a basis  In this case we have . Thus is a basis for . Since the column space procedure selects columns from among the original columns of , we have , as desired.    Extending to a basis  Since contains for all , we have . Thus is a basis for . Since the first columns of are linearly independent (they are the elements of ), when we row reduce to a matrix in row echelon form, the first columns of will contain leading ones. (To see this, imagine row reducing the submatrix consisting of the first columns of to a row echelon matrix . Since these columns are linearly independent, they already form a basis for . Thus the corresponding colmns of must all have leading ones. ) It follows that the first columns of are selected to be in the basis , and hence that , as desired.      Video example: contracting to a basis   Video: contracting to a basis  Video: contracting to a basis        Webwork Exercises    Suppose that is a matrix that has an echelon form with two zero rows. Find the dimension of the row space of , the dimension of the column space of , and the dimension of the null space of .  The dimension of the row space of is .  The dimension of the column space of is .  The dimension of the null space of is .                  The dimension of the row space is the number of nonzero rows in the echelon form, or The dimension of the column space is the same as the dimension of the row space, and the dimension of the null space is         Are the following statements true or false?    has exactly one subspace of dimension for each of .    Let . Then { } in can form a basis for if the correct vectors are removed from .    Let . Then { } in can form a basis for if the correct vectors are added to .    The set {0} forms a basis for the zero subspace.    If { } is a basis for , then span{ } is a plane.           Are the following statements true or false?    If and are subspaces of of the same dimension, then .    If span{ }, then .    If the set of vectors spans a subspace , then vectors can be added to to create a basis for    If the set of vectors is linearly independent in a subspace then vectors can be added to to create a basis for    If the set of vectors is linearly independent in a subspace then vectors can be removed from to create a basis for .           Let Find dimensions of the kernel and image of .   ,   .                   Let be the linear transformation defined by Find bases for the kernel and image of . vector  A basis for the kernel of is    A basis for the image of is                     Let be the linear operator defined by   (a) Find the dimension of the range of :  (b) Find the dimension of the kernel of :  (c) Let be the subspace of spanned by and . Find the dimension of :                  Solution: (a) Since , , spans , we get that is spanned by , , . So    and hence the dimension of the range is 2.  (b) The rank-nullity theorem implies that the dimension of the kernel is .  (c) Notice that   and it is easy to check that these two vectors are linearly independent. Therefore, the dimension of is 2.         In this exercise we will show that for any , there is a polynomial satisfying . In other words given any list of values , we can find a polynomial that evaluates to these values at the inputs .    Define by . Show that is linear.    Compute . You may use the fact that a polynomial of degree has at most roots.    Use the rank-nullity theorem to compute . Explain why this implies     Explain why the equality is equivalent to the claim we wish to prove.       Use the rank-nullity theorem to compute the rank of the linear transformation described.     ,      ,      ,        For each linear transformation use the rank-nullity theorem to decide whether .          ,      ,       Let be with . Prove that there is a such that the system is inconsistent.   Use and .    For each matrix (i) row reduce to a matrix in row echelon form, (ii) compute bases for and , (iii) compute and ,and (iv) decide whether .                     Assume is invertible, and is row equivalent to the row echelon matrix . Prove: .    For each matrix below, (i) compute bases for each fundamental space, (ii) identify these spaces as familiar geometric objects in or , and (iii) provide sketches of each space. The sketches of and should be combined in the same coordinate system.                     For each compute bases for each fundamental space. In each case, you can find bases for one of the fundamental spaces by inspection, and then use the rank-nullity theorem to reduce your workload for the other spaces. See first solution for a model example.                 Clearly, is a basis for , and is a basis for . It follows that and hence . Thus we need to find three linearly independent elements of to find a basis. We can do so by inspection with the help of the column method. Namely, observe that are all in (column method). The location of zeros in these vectors make it clear that are linearly independent. Since , and , we conclude that is a basis of ( ).      For each use to compute bases for each fundamental space.                     Find the rank and nullity of each matrix by reducing it to row echelon form.                Let be an matrix.    Prove: if and only if .   Construct a matrix with . Verify that your satisfies .     Suppose is with .  Prove: either the rows of are linearly dependent or the columns of are linearly dependent.    Prove: if and only if is a square matrix.    Suppose and are row equivalent matrices. For each let and be the -th columns of and , respectively.  Prove: columns of are linearly independent if and only if the corresponding columns are linearly independent.   By there is an invertible such that . Let and be the submatrices of and obtained by taking columns . Show that we still have and relate linear independence of the columns to solutions of the matrix equations and .    Prove as follows.    First show that all three statements of (13) are equivalent, and that all three statements of (14) are equivalent. (Use .)    Show that statements (8)-(14) are equivalent with the help of .    Choose a statement from (1)-(7) that can be easily shown to be equivalent to one of the statements from (8)-(14).      "
},
{
  "id": "d_rank_nullity",
  "level": "2",
  "url": "s_rank_nullity.html#d_rank_nullity",
  "type": "Definition",
  "number": "3.8.1",
  "title": "Rank and nullity.",
  "body": " Rank and nullity  rank of a linear transformation  nullity of a linear transformation    the rank of     the nullity of    Let be a linear transformation.   The rank of , denoted , is the dimension of : , .    The nullity of , denoted , is the dimension of : , .      "
},
{
  "id": "th_rank-nullity",
  "level": "2",
  "url": "s_rank_nullity.html#th_rank-nullity",
  "type": "Theorem",
  "number": "3.8.2",
  "title": "Rank-nullity.",
  "body": " Rank-nullity  rank-nullity theorem   Let be a vector space of dimension , and let be a linear transformation. Then , or alternatively, .    Choose a basis of and extend to a basis , using . Observe that and .  We claim that is a basis of .   Proof of claim   is linearly independent  Suppose . Then the vector satisfies (using linearity of ), and hence . Then, using the fact that is a basis of , we have and hence Since the set is linearly independent, we conclude that for all and . In particular, , as desired.    spans  It is clear that since for all and is closed under linear combinations.  For the other direction, suppose . Then there is a such that . Since is a basis of we may write , in which case . This shows that , as desired.   Having shown is a basis for , we conclude that , and thus that .  "
},
{
  "id": "eg_rank-nullity_verification",
  "level": "2",
  "url": "s_rank_nullity.html#eg_rank-nullity_verification",
  "type": "Example",
  "number": "3.8.3",
  "title": "Rank-nullity: verification.",
  "body": " Rank-nullity: verification   Verify the rank-nullity theorem for the linear transformation defined as .    To verify the rank-nullity theorem, we must compute bases for and . Consider first . We have . Here the parametric description is obtained using our usual technique for solving systems of equations ( ). From the parametric description, it is clear that the set spans . Since is clearly linearly independent, it is a basis for , and we conclude that . (Alternatively, the equation defines a plane passing through the origin in , and we know such subspaces are of dimension two. )  Next it is fairly clearly that . Thus is a basis for and .  Finally we observe that as predicted by the rank-nullity theorem.   "
},
{
  "id": "eg_rank-nullity_computation",
  "level": "2",
  "url": "s_rank_nullity.html#eg_rank-nullity_computation",
  "type": "Example",
  "number": "3.8.4",
  "title": "Rank-nullity: application.",
  "body": " Rank-nullity: application   Show that the linear transformation is surjective: , . Do so by first computing .    We first examine . We have . The system above is already in row echelon form, and so we easily see that . Thus is a basis of , and we conclude that . The rank-nullity theorem now implies that . Since and , we conclude by that . Thus is surjective.   "
},
{
  "id": "d_fundamental_space",
  "level": "2",
  "url": "s_rank_nullity.html#d_fundamental_space",
  "type": "Definition",
  "number": "3.8.5",
  "title": "Fundamental spaces.",
  "body": " Fundamental spaces  fundamental space of a matrix  null space of a matrix  row space of a matrix  column space of a matrix  rank of a matrix  nullity of a matrix    the null space of matrix     the row space of a matrix     the column space of a matrix     the rank of a matrix     the nullity of a matrix    Let be a an matrix. Let be the rows of , and let be its columns. The following subspaces are called the fundamental subspaces of .    The null space of , denoted is defined as .    The row space of , denoted , is defined as .    The column space of , denoted , is defined as .    The rank and nullity of , denoted and , respectively, are defined as and .   "
},
{
  "id": "th_fundspaces_matrixtransform",
  "level": "2",
  "url": "s_rank_nullity.html#th_fundspaces_matrixtransform",
  "type": "Theorem",
  "number": "3.8.6",
  "title": "Null space and image as fundamental spaces.",
  "body": " Null space and image as fundamental spaces   Let be an matrix, and let be its corresponding matrix transformation. The following equalities hold: .   "
},
{
  "id": "th_fundspaces_rowreduce",
  "level": "2",
  "url": "s_rank_nullity.html#th_fundspaces_rowreduce",
  "type": "Theorem",
  "number": "3.8.7",
  "title": "Fundamental spaces and row equivalence.",
  "body": " Fundamental spaces and row equivalence   Let be an matrix, and suppose is row equivalent to . The following equalities hold . Although and have the same dimension, they are in general not equal as subspaces.    First observe that is row equivalent to and yet . Thus we do not have in general.  We now turn to the equalities . Assume that is row equivalent to . Using the formulation of row reduction in terms of multiplication by elementary matrices, we see that there is an invertible matrix such that , and hence also . But then we have . This proves .  Next, by we have , and , . It follows that . Lastly, we turn to the row spaces. We will show that each row of is an element of , from whence it follows that . Let be the -th row of , and let be the -th column of . By , we have , and furthermore, is the linear combination of the rows of whose coefficients come from the entries of . Thus , as desired.  Having shown that , we see that the same argument works mutatis mutandis (swapping the roles of and and using in place of ) to show that . We conclude that .   "
},
{
  "id": "th_fundspaces_rowechelon",
  "level": "2",
  "url": "s_rank_nullity.html#th_fundspaces_rowechelon",
  "type": "Theorem",
  "number": "3.8.8",
  "title": "Fundamental spaces and row echelon forms.",
  "body": " Fundamental spaces and row echelon forms   Let be an matrix, and suppose is row equivalent to the matrix in row echelon form. Let be the number of leading ones in , and let ; , and are the number of leading and free variables, respectively, of the system corresponding to . We have .    By we know that , and . So it is enough to show that and .  First, we will show that the nonzero rows of form a basis for , proving . Clearly the nonzero rows span , since any linear combination of all the rows of can be expressed as a linear combination of the nonzero rows. Furthermore, since is in row echelon form, the staircase pattern of the leading ones appearing in the nonzero rows assures that these row vectors are linearly independent.  Next, we show that the columns of containing leading ones form a basis of . Let be the columns of with leading ones, and let be the columns without leading ones. To prove the form a basis for , we will show that given any there is a unique choice of scalars such that . (Recall that the uniqueness of this choice implies linear independence.) Given , we can find such that ( ), which means the linear system with augmented matrix is consistent. Using our Gaussian elimination theory (specifically, ), we know that the solutions to this system are in 1-1 correspondence with choices for the free variables . (Remember that the columns without leading ones correspond to the free variables.) In particular, there is a unique solution to where we set all the free variables equal to 0. By the column method ( ), this gives us a unique linear combination of only the columns with leading ones equal to . This proves the claim, and shows that the columns with leading ones form a basis for . We conclude that .  Lastly, we have , where the last equality uses the fact that the sum of the number of columns with leading ones ( ) and the number of columns without leading ones ( ) is , the total number of columns.   "
},
{
  "id": "th_rank_nullity_matrix",
  "level": "2",
  "url": "s_rank_nullity.html#th_rank_nullity_matrix",
  "type": "Theorem",
  "number": "3.8.9",
  "title": "Rank-nullity for matrices.",
  "body": " Rank-nullity for matrices   Let be an matrix. We have .    We have .   "
},
{
  "id": "proc_fund_spaces",
  "level": "2",
  "url": "s_rank_nullity.html#proc_fund_spaces",
  "type": "Procedure",
  "number": "3.8.10",
  "title": "Computing bases of fundamental spaces.",
  "body": " Computing bases of fundamental spaces   To compute bases for the fundamental spaces of an matrix , proceed as follow.    Row reduce to a matrix in row echelon form.    We have . Compute a parametric description of the solutions to the linear system following . If the free variables are , a basis of is obtained by letting be the solution corresponding to the choice and for .    We have . The set of nonzero rows of is a basis for .    In general . However, the columns of containing leading ones form a basis of , and the corresponding columns of form a basis for .     "
},
{
  "id": "fig_vid_fund_space",
  "level": "2",
  "url": "s_rank_nullity.html#fig_vid_fund_space",
  "type": "Figure",
  "number": "3.8.11",
  "title": "Video: computing fundamental spaces",
  "body": " Video: computing fundamental spaces  Video: computing fundamental spaces   "
},
{
  "id": "th_invertibility_supersized",
  "level": "2",
  "url": "s_rank_nullity.html#th_invertibility_supersized",
  "type": "Theorem",
  "number": "3.8.12",
  "title": "Invertibility theorem (supersized).",
  "body": " Invertibility theorem (supersized)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .                             Any of the following equivalent conditions about the set of columns of hold: is a basis of ; spans ; is linearly independent.    Any of the following equivalent conditions about the set of rows of hold: is a basis of ; spans ; is linearly independent.     "
},
{
  "id": "proc_contract_extend",
  "level": "2",
  "url": "s_rank_nullity.html#proc_contract_extend",
  "type": "Procedure",
  "number": "3.8.13",
  "title": "Contracting and extending to bases of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Contracting and extending to bases of   Let .    Contracting to a basis  Assume spans . To contract to a basis , proceed as follows.    Let be the matrix whose -th column is given by for all .    Use the column space procedure ( ) to compute a basis of , chosen from among the original columns of .    The subset is a basis for .      Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.    Let be the matrix whose first columns are the elements of , and whose remaining columns consist of , the standard basis elements of .    Use the column space procedure ( ) to compute a basis of , chosen from among the original columns of .    The set is a basis for containing .        Let's see why in both cases the procedure produces a basis of that is either a sub- or superset of .   Contracting to a basis  In this case we have . Thus is a basis for . Since the column space procedure selects columns from among the original columns of , we have , as desired.    Extending to a basis  Since contains for all , we have . Thus is a basis for . Since the first columns of are linearly independent (they are the elements of ), when we row reduce to a matrix in row echelon form, the first columns of will contain leading ones. (To see this, imagine row reducing the submatrix consisting of the first columns of to a row echelon matrix . Since these columns are linearly independent, they already form a basis for . Thus the corresponding colmns of must all have leading ones. ) It follows that the first columns of are selected to be in the basis , and hence that , as desired.    "
},
{
  "id": "fig_vid_contract_basis",
  "level": "2",
  "url": "s_rank_nullity.html#fig_vid_contract_basis",
  "type": "Figure",
  "number": "3.8.14",
  "title": "Video: contracting to a basis",
  "body": " Video: contracting to a basis  Video: contracting to a basis   "
},
{
  "id": "s_rank_nullity_ex-1-2",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-1-2",
  "type": "Exercise",
  "number": "3.8.4.1",
  "title": "",
  "body": "  Suppose that is a matrix that has an echelon form with two zero rows. Find the dimension of the row space of , the dimension of the column space of , and the dimension of the null space of .  The dimension of the row space of is .  The dimension of the column space of is .  The dimension of the null space of is .                  The dimension of the row space is the number of nonzero rows in the echelon form, or The dimension of the column space is the same as the dimension of the row space, and the dimension of the null space is      "
},
{
  "id": "s_rank_nullity_ex-1-3",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-1-3",
  "type": "Exercise",
  "number": "3.8.4.2",
  "title": "",
  "body": "  Are the following statements true or false?    has exactly one subspace of dimension for each of .    Let . Then { } in can form a basis for if the correct vectors are removed from .    Let . Then { } in can form a basis for if the correct vectors are added to .    The set {0} forms a basis for the zero subspace.    If { } is a basis for , then span{ } is a plane.        "
},
{
  "id": "s_rank_nullity_ex-1-4",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-1-4",
  "type": "Exercise",
  "number": "3.8.4.3",
  "title": "",
  "body": "  Are the following statements true or false?    If and are subspaces of of the same dimension, then .    If span{ }, then .    If the set of vectors spans a subspace , then vectors can be added to to create a basis for    If the set of vectors is linearly independent in a subspace then vectors can be added to to create a basis for    If the set of vectors is linearly independent in a subspace then vectors can be removed from to create a basis for .        "
},
{
  "id": "s_rank_nullity_ex-1-5",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-1-5",
  "type": "Exercise",
  "number": "3.8.4.4",
  "title": "",
  "body": "  Let Find dimensions of the kernel and image of .   ,   .                "
},
{
  "id": "s_rank_nullity_ex-1-6",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-1-6",
  "type": "Exercise",
  "number": "3.8.4.5",
  "title": "",
  "body": "  Let be the linear transformation defined by Find bases for the kernel and image of . vector  A basis for the kernel of is    A basis for the image of is                  "
},
{
  "id": "s_rank_nullity_ex-1-7",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-1-7",
  "type": "Exercise",
  "number": "3.8.4.6",
  "title": "",
  "body": "  Let be the linear operator defined by   (a) Find the dimension of the range of :  (b) Find the dimension of the kernel of :  (c) Let be the subspace of spanned by and . Find the dimension of :                  Solution: (a) Since , , spans , we get that is spanned by , , . So    and hence the dimension of the range is 2.  (b) The rank-nullity theorem implies that the dimension of the kernel is .  (c) Notice that   and it is easy to check that these two vectors are linearly independent. Therefore, the dimension of is 2.      "
},
{
  "id": "s_rank_nullity_ex-2",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-2",
  "type": "Exercise",
  "number": "3.8.4.7",
  "title": "",
  "body": " In this exercise we will show that for any , there is a polynomial satisfying . In other words given any list of values , we can find a polynomial that evaluates to these values at the inputs .    Define by . Show that is linear.    Compute . You may use the fact that a polynomial of degree has at most roots.    Use the rank-nullity theorem to compute . Explain why this implies     Explain why the equality is equivalent to the claim we wish to prove.    "
},
{
  "id": "s_rank_nullity_ex-3",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-3",
  "type": "Exercise",
  "number": "3.8.4.8",
  "title": "",
  "body": "  Use the rank-nullity theorem to compute the rank of the linear transformation described.     ,      ,      ,      "
},
{
  "id": "s_rank_nullity_ex-4",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-4",
  "type": "Exercise",
  "number": "3.8.4.9",
  "title": "",
  "body": " For each linear transformation use the rank-nullity theorem to decide whether .          ,      ,     "
},
{
  "id": "s_rank_nullity_ex-5",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-5",
  "type": "Exercise",
  "number": "3.8.4.10",
  "title": "",
  "body": " Let be with . Prove that there is a such that the system is inconsistent.   Use and .  "
},
{
  "id": "s_rank_nullity_ex-6",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-6",
  "type": "Exercise",
  "number": "3.8.4.11",
  "title": "",
  "body": " For each matrix (i) row reduce to a matrix in row echelon form, (ii) compute bases for and , (iii) compute and ,and (iv) decide whether .                   "
},
{
  "id": "s_rank_nullity_ex-7",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-7",
  "type": "Exercise",
  "number": "3.8.4.12",
  "title": "",
  "body": " Assume is invertible, and is row equivalent to the row echelon matrix . Prove: .  "
},
{
  "id": "s_rank_nullity_ex-8",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-8",
  "type": "Exercise",
  "number": "3.8.4.13",
  "title": "",
  "body": " For each matrix below, (i) compute bases for each fundamental space, (ii) identify these spaces as familiar geometric objects in or , and (iii) provide sketches of each space. The sketches of and should be combined in the same coordinate system.                   "
},
{
  "id": "s_rank_nullity_ex-9",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-9",
  "type": "Exercise",
  "number": "3.8.4.14",
  "title": "",
  "body": " For each compute bases for each fundamental space. In each case, you can find bases for one of the fundamental spaces by inspection, and then use the rank-nullity theorem to reduce your workload for the other spaces. See first solution for a model example.                 Clearly, is a basis for , and is a basis for . It follows that and hence . Thus we need to find three linearly independent elements of to find a basis. We can do so by inspection with the help of the column method. Namely, observe that are all in (column method). The location of zeros in these vectors make it clear that are linearly independent. Since , and , we conclude that is a basis of ( ).    "
},
{
  "id": "s_rank_nullity_ex-10",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-10",
  "type": "Exercise",
  "number": "3.8.4.15",
  "title": "",
  "body": " For each use to compute bases for each fundamental space.                   "
},
{
  "id": "s_rank_nullity_ex-11",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-11",
  "type": "Exercise",
  "number": "3.8.4.16",
  "title": "",
  "body": " Find the rank and nullity of each matrix by reducing it to row echelon form.              "
},
{
  "id": "s_rank_nullity_ex-12",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-12",
  "type": "Exercise",
  "number": "3.8.4.17",
  "title": "",
  "body": " Let be an matrix.    Prove: if and only if .   Construct a matrix with . Verify that your satisfies .   "
},
{
  "id": "s_rank_nullity_ex-13",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-13",
  "type": "Exercise",
  "number": "3.8.4.18",
  "title": "",
  "body": " Suppose is with .  Prove: either the rows of are linearly dependent or the columns of are linearly dependent.  "
},
{
  "id": "s_rank_nullity_ex-14",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-14",
  "type": "Exercise",
  "number": "3.8.4.19",
  "title": "",
  "body": " Prove: if and only if is a square matrix.  "
},
{
  "id": "s_rank_nullity_ex-15",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-15",
  "type": "Exercise",
  "number": "3.8.4.20",
  "title": "",
  "body": " Suppose and are row equivalent matrices. For each let and be the -th columns of and , respectively.  Prove: columns of are linearly independent if and only if the corresponding columns are linearly independent.   By there is an invertible such that . Let and be the submatrices of and obtained by taking columns . Show that we still have and relate linear independence of the columns to solutions of the matrix equations and .  "
},
{
  "id": "s_rank_nullity_ex-16",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity_ex-16",
  "type": "Exercise",
  "number": "3.8.4.21",
  "title": "",
  "body": " Prove as follows.    First show that all three statements of (13) are equivalent, and that all three statements of (14) are equivalent. (Use .)    Show that statements (8)-(14) are equivalent with the help of .    Choose a statement from (1)-(7) that can be easily shown to be equivalent to one of the statements from (8)-(14).    "
},
{
  "id": "s_isom",
  "level": "1",
  "url": "s_isom.html",
  "type": "Section",
  "number": "3.9",
  "title": "Isomorphisms",
  "body": " Isomorphisms  In this section we utilize bases, dimension, and the rank-nullity theorem to investigate properties of linear transformations. The main focus will be the notion of an isomorphism , which is simply a linear transformation that is invertible when considered as a function. We begin, however, with an enlightening discussion relating linear transformations and bases.   Isomorphisms  We spoke of the coordinate vector map as a means of translating questions about an abstract vector space to equivalent ones about the more familiar vector space . Properties (1)-(3) of are what guarantee that nothing is lost in this translation. Axiomitizing these properties, we obtain an important family of linear transformations called isomorphisms . The word isomorphism is derived from the Greek terms iso , meaning same , and morphe , meaning form . As we will see, isomorphic vector spaces and are essentially the same creature, at least as far as linear algebraic properties are concerned. Furthermore, an isomorphism provides a one-to-one correspondence between them: a dictionary that allows us to translate statements about to statements about , and vice versa.  Before getting to the definition, recall that by definition a function is bijective if it is injective and surjective ( )   Isomorphism  isomorphism  invertible linear transformation  Let and be vector spaces. An isomorphism from to is a bijective linear transformation . Vector spaces and are isomorphic if there is an isomorphism from to .     Proving is an isomorphism  According to , to prove a function is an isomorphism, we must show that    is linear, and     is invertible.   Since being invertible is equivalent to being bijective, there are two main approaches to proving that (ii) holds for a linear transformation :   we can show directly that is invertible by providing an inverse ;    we can show that is bijective (i.e., injective and surjective).   Which approach, (a) or (b), is more convenient depends on the linear transformation in question.    Inverse of isomorphism is an isomorphism   Let be an isomorphism. Since is invertible, there is an inverse function . Not surprisingly, is itself a linear transformation, though of course this requires proof. (See .) Since is also invertible ( is its inverse), it follows that is itself an isomorphism.     Isomorphism equivalence   Let be a linear transformation. The following are equivalent.    is an isomorphism;     and .       We mentioned in the introduction that two isomorphic vector spaces are, for all linear algebraic intents and purposes, essentially the same thing. The next theorem provides some evidence for this claim. It also illustrates how a given isomorphism can translate back and forth between two isomorphic vector spaces. Recall ( ) that for a subset , the image of under is the set .   Properties preserved by isomorphisms   Let be an isomorphism. The following properties hold:    is linearly independent if and only if is linearly independent;     spans if and only if spans ;     is a basis of if and only if is a basis of      .       The following omnibus result is useful for deciding whether a linear transformation is an isomorphism, and lists a few of the properties of a vector space that are preserved by isomorphisms: namely, dimension, span, and linear independence.   Isomorphism compendium   Let be a linear transformation.     is injective if and only if     Assume is an isomorphism, let , and let , the set of images of under .   The inverse function is a linear transformation.    The set spans if and only if spans .    The set is linearly independent if and only if is linearly independent.       Assume . Then the following are equivalent:    is an isomorphism;     and ;     and .           Assume is injective. Then . It follows that .  Now assume . Then . Thus is injective.       "
},
{
  "id": "d_isomorphism",
  "level": "2",
  "url": "s_isom.html#d_isomorphism",
  "type": "Definition",
  "number": "3.9.1",
  "title": "Isomorphism.",
  "body": " Isomorphism  isomorphism  invertible linear transformation  Let and be vector spaces. An isomorphism from to is a bijective linear transformation . Vector spaces and are isomorphic if there is an isomorphism from to .   "
},
{
  "id": "ss_isomorphisms-5",
  "level": "2",
  "url": "s_isom.html#ss_isomorphisms-5",
  "type": "Remark",
  "number": "3.9.2",
  "title": "Proving <span class=\"process-math\">\\(T\\)<\/span> is an isomorphism.",
  "body": " Proving is an isomorphism  According to , to prove a function is an isomorphism, we must show that    is linear, and     is invertible.   Since being invertible is equivalent to being bijective, there are two main approaches to proving that (ii) holds for a linear transformation :   we can show directly that is invertible by providing an inverse ;    we can show that is bijective (i.e., injective and surjective).   Which approach, (a) or (b), is more convenient depends on the linear transformation in question.  "
},
{
  "id": "rm_isomorphism_inverse",
  "level": "2",
  "url": "s_isom.html#rm_isomorphism_inverse",
  "type": "Remark",
  "number": "3.9.3",
  "title": "Inverse of isomorphism is an isomorphism.",
  "body": " Inverse of isomorphism is an isomorphism   Let be an isomorphism. Since is invertible, there is an inverse function . Not surprisingly, is itself a linear transformation, though of course this requires proof. (See .) Since is also invertible ( is its inverse), it follows that is itself an isomorphism.   "
},
{
  "id": "th_bijective_transformation",
  "level": "2",
  "url": "s_isom.html#th_bijective_transformation",
  "type": "Theorem",
  "number": "3.9.4",
  "title": "Isomorphism equivalence.",
  "body": " Isomorphism equivalence   Let be a linear transformation. The following are equivalent.    is an isomorphism;     and .      "
},
{
  "id": "th_isomorphism_preserves",
  "level": "2",
  "url": "s_isom.html#th_isomorphism_preserves",
  "type": "Theorem",
  "number": "3.9.5",
  "title": "Properties preserved by isomorphisms.",
  "body": " Properties preserved by isomorphisms   Let be an isomorphism. The following properties hold:    is linearly independent if and only if is linearly independent;     spans if and only if spans ;     is a basis of if and only if is a basis of      .      "
},
{
  "id": "th_isomorphisms",
  "level": "2",
  "url": "s_isom.html#th_isomorphisms",
  "type": "Theorem",
  "number": "3.9.6",
  "title": "Isomorphism compendium.",
  "body": " Isomorphism compendium   Let be a linear transformation.     is injective if and only if     Assume is an isomorphism, let , and let , the set of images of under .   The inverse function is a linear transformation.    The set spans if and only if spans .    The set is linearly independent if and only if is linearly independent.       Assume . Then the following are equivalent:    is an isomorphism;     and ;     and .           Assume is injective. Then . It follows that .  Now assume . Then . Thus is injective.     "
},
{
  "id": "s_innerproducts",
  "level": "1",
  "url": "s_innerproducts.html",
  "type": "Section",
  "number": "4.1",
  "title": "Inner product spaces",
  "body": " Inner product spaces   An inner product is an additional layer of structure we can define on a vector space . It takes a pair of elements and returns a scalar . As with the vector addition and scalar multiplication, we define inner products axiomatically, taking as our model the dot product on and . Our definition ( ) simply promulgates a few important properties enjoyed by the dot product that may be familiar to you from studying calculus.  The addition of an inner product enriches the structure of a vector space considerably, and gives rise to a number of additional useful analytic tools. We highlight a few below.   Distance and angle  A notion of distance and angle between two vectors can be defined relative to a given inner product. These provide a numeric measurement of how close (distance) or closely oriented (angle) two vectors in our space are.    Orthogonality  Two vectors are orthogonal , relative to a given inner product, if . Orthogonality leads further to a general notion of orthogonal projection onto a subspace .    Orthogonal bases  An orthogonal basis of a vector space , relative to a given inner product, is one whose elements are pairwise orthogonal. As we will see there are many computational advantages of working with an orthogonal basis.       Inner products   Inner product   Let be a vector space. An inner product on is an operation that takes as input a pair of vectors and outputs a scalar . Using function notation: . Furthermore, this operation must satisfy the following axioms.   Symmetry  For all we have .    Linearity  For all and we have : . It follows by (i) (symmetry) that .    Positive definiteness  For all we have .   An inner product space is a pair , where is a vector space, and is a choice of inner product on .     Inner products of linear combinations   We will have many opportunities to expand out an inner product of two linear combinations of vectors. Using axioms (i) and (ii) in series, this process resembles the procedure for multiplying two polynomials. For example, we have . Note how in the last step we are able to group the cross terms , using the symmetry axiom.  More generally, given linear combinations , the same reasoning shows that . In particular, we have .    We now present a series of important examples of inner products defined on our various inner product spaces. Each is presented as a theorem, as we must prove that the proposed operation satisfies the axios of an inner product. The first example, the weighted dot product is itself a vast generalization of the familiar dot product operations defined on and .   Weighted dot product   Let . Let be any list of real numbers. Define an operation on as follows: given , let . This operation is an inner product if and only if for all .  We call this inner product a weighted dot product on , or more specifically, the dot product with weights . In the special case where for all we call this the (standard) dot product and write instead of .    First we show that axioms (i) and (ii) are satsified for any choice of . Let , the diagonal matrix whose -th diagonal entry is . Then for all we have . Here we treat as column vectors, and we treat the resulting matrix as a scalar. Axioms (i)-(ii) now follow from various matrix properties. For linearity, for example, we have . Symmetry requires a little more trickery: . Note that as is just a matrix.  Lastly, we show that axiom (iii) is satisfied if and only if for all . To this end consider the formula . If , then since for all , we have for any , and if and only if for all if and only if .  For the other direction suppose for some . Let , the -th element of the standard basis of . Then : a counterexample to the definiteness property of axiom (iii).     Euclidean -space  Weighted Euclidean space  (Weighted) Euclidean space   Fix a positive integer . Euclidean -space is the inner product space with underlying vector space and inner product given by the dot product. More generally, a weighted Eulidean space is an inner product space of the form , where is a weighted dot product.     Dot product on   Let . Then , and .     Weighted dot product   The dot product with weights on is defined as . Let and . We have , and .     Why the weights must be positive   Consider the operation on defined as where . This operation satisfies axioms (i) and (ii) of . (See proof of .) However, it fails both the positivity and definiteness properties of axiom (iii): .      It is worth highlighting the observation in the proof of that a dot product with weights can be expressed as a matrix product: , where is the diagonal matrix whose -th diagonal entry is . Here are treated as column vectors, and we identify the resulting matrix with a scalar.  In particular for the standard dot product this matrix formula reduces to . Conversely, the dot product gives another way to formulate general matrix multiplication. as the next theorem articulates.     Dot product and matrix multiplication     Given -tuples and , we have , where in the last equality and are treated as column vectors.    Let be an matrix, and let be a matrix. Let be the -th row of , and let be the -th column of . For all , we have , where and are considered as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .        See and the proof of .    Let and . Then , since and .    Next we introduce an important family of inner products defined on polynomials spaces called evaluation inner products . These are useful when we wish to compare polynomials by how they behave at a specified list of inputs.   Evaluation inner products on   Let , and let be any list of distinct real numbers. For any define . This defines an inner product on called an evaluation inner product , or more precisely, evaluation at the inputs .    That axioms (i)-(ii) are satisfied is left as an exercise. For axiom (iii), note that , and we have equality if and only if . Since a nonzero polynomial of degree or less has at most  distinct roots, we conclude that , the zero polynomial.     Evaluation at   Let , and let be the evaluation at inner product. Compute and     Let , . We have and .    Our last example defines an integral inner product on the space of continuous functions on an interval . This inner product plays an important role in Fourier analysis, which studies the approximation of arbibitrary continuous functions with linear combinations of certain trigonometric funtions.   Integral inner product   Fix an interval , and let , the space of all continuous functions on . For any define . This defines an inner product on called the integral inner product .    First observe that the integral defining the inner product always exists since the product is a continuous function on the closed interval .  Axioms (i)-(ii) follow directly from the definition and various properties of the integral. This is left as an exercise. As for (iii), we have , since for all . (This is a property of integration.) Furthermore, since is continuous and , we have if and only if for all (a property of integrals of continuous functions) if and only if for all if and only if , the zero function.     Integral inner product   Let , equipped with integral inner product. Let , . Compute and .    We have and .      Norm and distance  As mentioned above, once an inner product is established, we can define further notions like norm (or length), distance, and angle in terms of the given inner product. When the inner product in question is the standard dot product on or , then these are precisely the familiar notions you may have met in multivariable calculus. Things get really interesting when we treat a more exotic inner product space. For example, consider : the integral inner product on ( ) gives rise to useful notions of the length of a function , as well as the distance or angle between two functions .   Norm (or length) of a vector  norm of a vector    norm of    Let be an inner product space. Given we define its norm (or length ), denoted as . A unit vector is a vector of length one: , a vector satisfying .     Norm with respect to dot product   Consider with the standard dot product. Compute .    We have .     Norm with respect to weighted dot product   Consider equipped with the dot product with weights . Compute .    We have .     Norm with respect to integral inner product   Consider equipped with the integral inner product. Compute , where     We have .     Unit vectors   Given any , the vector is a unit vector. To verify this, let and compute .     Unit vectors   For each inner product space and compute the associated unit vector     with dot product,      with dot product with weights ,      with integral inner product,        The norms of the vectors in each case were computed in . We simply scale to compute the corresponding unit vectors.                     Next, we define the distance between two vectors in an inner product space as the length of their vector difference.   distance between two vectors    the distance between and   Distance between vectors   Let be an inner product space. The distance between , denoted , is defined as .      For each inner product space , compute the distance between the given vectors.     with the dot product, ,      with the evaluation at inner product, ,      with the integral inner product, ,         We have .    We have     We have        Basic properties of norm and distance   Let be an inner product space.    For all we have , and equality holds if and only if .    For all and we have .    For all we have , and equality holds if and only if .      We prove (2) and leave the rest as an exercise ( ).  Given and we have .      Cauchy-Schwarz inequality, triangle inequalities, and angles between vectors  The famous Cauchy-Schwarz inequality has a knack of cropping up all over the world of science: from properties of covariance in statistics, to the Heisenberg uncertainty principle of quantum mechanics. More directly pertinent to our discussion, the Cauchy-Schwarz inequality implies the triangle inequalities ( ) and ensures that our notion of the angle between two nonzero vectors ( ) is well-defined.   Cauchy-Schwarz inequality   Let be an inner product space. For all we have , and equality holds if and only if for some .     Fix vectors and . For any we have by positivity , where . Since for all the quadratic polynomial has at most one root. Using the quadratic formula we conclude that we must have , since otherwise would have two distinct roots. It follows that , or equivalently . Taking square-roots yields the desired inequality.  The same reasoning shows that the Cauchy-Schwarz inequality is an actual equality if and only if for some if and only if if and only if for some (by positivity).   The following triangle inequalities are more or less direct consequences of the Cauchy-Schwarz inequality.   Triangle Inequalities   Let be an inner product space.   For all we have .    For all we have        This is an elementary exercise of unpacking the definitions of norm and distance in terms of the inner product, and then applying the Cauchy-Schwarz inequality appropriately. The proof is left as an exercise.    Let be an inner product space. For any nonzero vectors , the Cauchy-Schwarz inequality tells us that , or equivalently, . It follows that there is a unique real number satisfying . We call the angle between and .   Angle between vectors  angle between vectors   Let be an inner product space. Given nonzero vectors , the angle between and is defined to be the unique satisfying . Equivalently, we have .      Our definition of the angle between two vectors may remind you of the dot product angle formula for vectors in : . Interestingly, whereas is typically treated as a theorem , derived from properties of the dot product and the law of cosines, in a general inner product space the equation is understood as the definition of the angle between two vectors.      Consider along with the dot product. Verify that our definition of the angle between and is consistent with our planar geometry notion of angle.    According to , is the unique element of satisfying . We recognize as the familiar angle , as expected.      Consider with the weighted dot product Compute the angle between and with respect to this inner product    First compute By definition is the unique value in satisfying . We see that is not one of our familiar angles from the unit circle ( , , ) and so express in terms of the function: .      Consider with the integral inner product. Compute the angle between and with respect to this inner product.    First compute It follows that , and hence that .      Choosing your inner product  Why, given a fixed vector space , would we prefer one inner product definition to another? One way of understanding a particular choice of inner product is to ask what its corresponding notion of distance measures.   Weighted dot product distance   Consider with a choice of weighted dot product where are fixed positive constants. With respect to this inner product the distance between two vectors and is . Thus is an aggregate measure of the difference between the corresponding entries of and , as weighted by our choice of the constants .  Imagine that each element of is a data point collected by measuring different properties of a sample : , is the measured value of property on for all . Given samples and with corresponding measurement vectors and , the weighted distance is then a quantitative way of saying how close the two samples are to one another. The choice of weights allows us to adjust the relative influence of a given property in determining this closeness. For example, the standard dot product ( for all ) yields a notion of distance that gives each property equal standing.     Evaluation inner product distance   Consider with the evaluation inner product at a fixed choice of inputs . Given two polynomials , the distance between them with respect to this inner product is . We see that with respect to this inner product, the distance between two polynomials is a measure of how much their values at the inputs differ. This inner product may be useful if you are interested in how a polynomial behaves at this finite list of inputs.     Integral inner product and distance   Take with the standard inner product . Here the distance between two functions is defined as , which we can think of as an aggregate measure of the difference of values for all . Thus is a global measure of the similarity between and that takes into account their values over the entire interval .       Webwork Exercises    Find the norm of and the unit vector in the direction of if   ,                Find the angle between the vectors   .              If and are arbitrary polynomials of degree at most 2, then the mapping defines an inner product in . Use this inner product to find , , , and the angle between and for   ,   ,   ,   .                             If and are arbitrary real matrices, then the mapping defines an inner product in . Use this inner product to find , the norms and , and the angle between and for   ,   ,   ,   .                             Use the inner product in the vector space of continuous functions on the domain to find , , , and the angle between and for   ,   ,   ,   .                             For each of the following operations on , determine whether it defines an inner product on . If it fails to be an inner product, identify which of the three inner product axioms (if any) it does satisfy, and provide explicit counterexamples for any axiom that fails.     .     .     .     The operation in (b) is an inner product. Use that fact that , where we treat as column vectors. This helps to prove axioms (i)-(ii). For axiom (iii), use either a complete the square or quadratic formula argument on the expression .    We work within the inner product space given by together with the evaluation at 0, 1, 2 inner product.  Let . Give a parametric description of the set .    We work in the inner product space given by together with the integral inner product.   Let . Compute and .    Show that if is an odd function (i.e., for all ) and is an even function ( for all ), then . Hint : use the area interpretation of the integral and properties of even\/odd functions.        Compute the angle between the given vectors with respect to the given inner product. The exercises are designed to be done by hand: , do not express your answer in terms of .    with the standard dot product;      with the dot product with weights ;      with the integral inner product;      with evaluation at inner product;      Let be an inner product space. Prove that for all .    Let and be nonzero vectors of the inner product space , and let be the angle between them. Prove the following equivalence: . Your proof should be a chain of equivalences with each step justified.   The equality is true if and only if it is true after squaring both sides. (Why?) Use the definition and expand the inner product.    Let be an inner product space. Suppose vectors satisfy and . Using the Cauchy-Schwarz inequality ( ) find the maximum and minimum possible values of , and give explicit examples where those values occur.    Prove statements (1) and (3) of .    Prove each inequality below using the Cauchy-Schwarz inequality ( ) applied to a judicious choice of inner product space, and possibly a judicious choice of vector in said inner product space.   For all  .    For all , .    For all  .      Isometries of inner product spaces  Let be an inner product space. An isometry of is a function that preserves distance: i.e., . In this exercise we will show that any isometry that maps to is a linear transformation. This is a very useful fact. For example, it implies the linearity of many geometric transformations we have considered: rotation about the origin in , reflection through a line in , .  In what follows assume that is an isometry of satisfying .    Prove that : i.e., preserves norms.    Prove : i.e., preserves inner products. Hint: first prove that .    To prove is linear it is enough to show for all , . To do so, use the above parts to show that .      "
},
{
  "id": "d_innerproduct",
  "level": "2",
  "url": "s_innerproducts.html#d_innerproduct",
  "type": "Definition",
  "number": "4.1.1",
  "title": "Inner product.",
  "body": " Inner product   Let be a vector space. An inner product on is an operation that takes as input a pair of vectors and outputs a scalar . Using function notation: . Furthermore, this operation must satisfy the following axioms.   Symmetry  For all we have .    Linearity  For all and we have : . It follows by (i) (symmetry) that .    Positive definiteness  For all we have .   An inner product space is a pair , where is a vector space, and is a choice of inner product on .   "
},
{
  "id": "rm_innerproduct_algebra",
  "level": "2",
  "url": "s_innerproducts.html#rm_innerproduct_algebra",
  "type": "Remark",
  "number": "4.1.2",
  "title": "Inner products of linear combinations.",
  "body": " Inner products of linear combinations   We will have many opportunities to expand out an inner product of two linear combinations of vectors. Using axioms (i) and (ii) in series, this process resembles the procedure for multiplying two polynomials. For example, we have . Note how in the last step we are able to group the cross terms , using the symmetry axiom.  More generally, given linear combinations , the same reasoning shows that . In particular, we have .   "
},
{
  "id": "th_weighted_dotproduct",
  "level": "2",
  "url": "s_innerproducts.html#th_weighted_dotproduct",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "Weighted dot product.",
  "body": " Weighted dot product   Let . Let be any list of real numbers. Define an operation on as follows: given , let . This operation is an inner product if and only if for all .  We call this inner product a weighted dot product on , or more specifically, the dot product with weights . In the special case where for all we call this the (standard) dot product and write instead of .    First we show that axioms (i) and (ii) are satsified for any choice of . Let , the diagonal matrix whose -th diagonal entry is . Then for all we have . Here we treat as column vectors, and we treat the resulting matrix as a scalar. Axioms (i)-(ii) now follow from various matrix properties. For linearity, for example, we have . Symmetry requires a little more trickery: . Note that as is just a matrix.  Lastly, we show that axiom (iii) is satisfied if and only if for all . To this end consider the formula . If , then since for all , we have for any , and if and only if for all if and only if .  For the other direction suppose for some . Let , the -th element of the standard basis of . Then : a counterexample to the definiteness property of axiom (iii).   "
},
{
  "id": "d_euclidean_space",
  "level": "2",
  "url": "s_innerproducts.html#d_euclidean_space",
  "type": "Definition",
  "number": "4.1.4",
  "title": "(Weighted) Euclidean space.",
  "body": " Euclidean -space  Weighted Euclidean space  (Weighted) Euclidean space   Fix a positive integer . Euclidean -space is the inner product space with underlying vector space and inner product given by the dot product. More generally, a weighted Eulidean space is an inner product space of the form , where is a weighted dot product.   "
},
{
  "id": "ss_inner_products-7",
  "level": "2",
  "url": "s_innerproducts.html#ss_inner_products-7",
  "type": "Example",
  "number": "4.1.5",
  "title": "Dot product on <span class=\"process-math\">\\(\\R^4\\)<\/span>.",
  "body": " Dot product on   Let . Then , and .   "
},
{
  "id": "ss_inner_products-8",
  "level": "2",
  "url": "s_innerproducts.html#ss_inner_products-8",
  "type": "Example",
  "number": "4.1.6",
  "title": "Weighted dot product.",
  "body": " Weighted dot product   The dot product with weights on is defined as . Let and . We have , and .   "
},
{
  "id": "ss_inner_products-9",
  "level": "2",
  "url": "s_innerproducts.html#ss_inner_products-9",
  "type": "Example",
  "number": "4.1.7",
  "title": "Why the weights must be positive.",
  "body": " Why the weights must be positive   Consider the operation on defined as where . This operation satisfies axioms (i) and (ii) of . (See proof of .) However, it fails both the positivity and definiteness properties of axiom (iii): .   "
},
{
  "id": "rm_dotproduct",
  "level": "2",
  "url": "s_innerproducts.html#rm_dotproduct",
  "type": "Remark",
  "number": "4.1.8",
  "title": "",
  "body": "  It is worth highlighting the observation in the proof of that a dot product with weights can be expressed as a matrix product: , where is the diagonal matrix whose -th diagonal entry is . Here are treated as column vectors, and we identify the resulting matrix with a scalar.  In particular for the standard dot product this matrix formula reduces to . Conversely, the dot product gives another way to formulate general matrix multiplication. as the next theorem articulates.   "
},
{
  "id": "th_dotproduct_method",
  "level": "2",
  "url": "s_innerproducts.html#th_dotproduct_method",
  "type": "Theorem",
  "number": "4.1.9",
  "title": "Dot product and matrix multiplication.",
  "body": " Dot product and matrix multiplication     Given -tuples and , we have , where in the last equality and are treated as column vectors.    Let be an matrix, and let be a matrix. Let be the -th row of , and let be the -th column of . For all , we have , where and are considered as -tuples. In other words, the -th entry of is the dot product of the -th row of and the -th column of .        See and the proof of .    Let and . Then , since and .   "
},
{
  "id": "th_evaluation_innerproduct",
  "level": "2",
  "url": "s_innerproducts.html#th_evaluation_innerproduct",
  "type": "Theorem",
  "number": "4.1.10",
  "title": "Evaluation inner products on <span class=\"process-math\">\\(P_n\\)<\/span>.",
  "body": " Evaluation inner products on   Let , and let be any list of distinct real numbers. For any define . This defines an inner product on called an evaluation inner product , or more precisely, evaluation at the inputs .    That axioms (i)-(ii) are satisfied is left as an exercise. For axiom (iii), note that , and we have equality if and only if . Since a nonzero polynomial of degree or less has at most  distinct roots, we conclude that , the zero polynomial.   "
},
{
  "id": "ss_inner_products-14",
  "level": "2",
  "url": "s_innerproducts.html#ss_inner_products-14",
  "type": "Example",
  "number": "4.1.11",
  "title": "Evaluation at <span class=\"process-math\">\\(-1, 0, 1\\)<\/span>.",
  "body": " Evaluation at   Let , and let be the evaluation at inner product. Compute and     Let , . We have and .   "
},
{
  "id": "th_integral_innerproduct",
  "level": "2",
  "url": "s_innerproducts.html#th_integral_innerproduct",
  "type": "Theorem",
  "number": "4.1.12",
  "title": "Integral inner product.",
  "body": " Integral inner product   Fix an interval , and let , the space of all continuous functions on . For any define . This defines an inner product on called the integral inner product .    First observe that the integral defining the inner product always exists since the product is a continuous function on the closed interval .  Axioms (i)-(ii) follow directly from the definition and various properties of the integral. This is left as an exercise. As for (iii), we have , since for all . (This is a property of integration.) Furthermore, since is continuous and , we have if and only if for all (a property of integrals of continuous functions) if and only if for all if and only if , the zero function.   "
},
{
  "id": "ss_inner_products-17",
  "level": "2",
  "url": "s_innerproducts.html#ss_inner_products-17",
  "type": "Example",
  "number": "4.1.13",
  "title": "Integral inner product.",
  "body": " Integral inner product   Let , equipped with integral inner product. Let , . Compute and .    We have and .   "
},
{
  "id": "d_norm",
  "level": "2",
  "url": "s_innerproducts.html#d_norm",
  "type": "Definition",
  "number": "4.1.14",
  "title": "Norm (or length) of a vector.",
  "body": " Norm (or length) of a vector  norm of a vector    norm of    Let be an inner product space. Given we define its norm (or length ), denoted as . A unit vector is a vector of length one: , a vector satisfying .   "
},
{
  "id": "eg_norm_dot",
  "level": "2",
  "url": "s_innerproducts.html#eg_norm_dot",
  "type": "Example",
  "number": "4.1.15",
  "title": "Norm with respect to dot product.",
  "body": " Norm with respect to dot product   Consider with the standard dot product. Compute .    We have .   "
},
{
  "id": "eg_norm_weighteddot",
  "level": "2",
  "url": "s_innerproducts.html#eg_norm_weighteddot",
  "type": "Example",
  "number": "4.1.16",
  "title": "Norm with respect to weighted dot product.",
  "body": " Norm with respect to weighted dot product   Consider equipped with the dot product with weights . Compute .    We have .   "
},
{
  "id": "eg_norm_integral",
  "level": "2",
  "url": "s_innerproducts.html#eg_norm_integral",
  "type": "Example",
  "number": "4.1.17",
  "title": "Norm with respect to integral inner product.",
  "body": " Norm with respect to integral inner product   Consider equipped with the integral inner product. Compute , where     We have .   "
},
{
  "id": "rm_unit_vectors",
  "level": "2",
  "url": "s_innerproducts.html#rm_unit_vectors",
  "type": "Remark",
  "number": "4.1.18",
  "title": "Unit vectors.",
  "body": " Unit vectors   Given any , the vector is a unit vector. To verify this, let and compute .   "
},
{
  "id": "eg_unit_vectors",
  "level": "2",
  "url": "s_innerproducts.html#eg_unit_vectors",
  "type": "Example",
  "number": "4.1.19",
  "title": "Unit vectors.",
  "body": " Unit vectors   For each inner product space and compute the associated unit vector     with dot product,      with dot product with weights ,      with integral inner product,        The norms of the vectors in each case were computed in . We simply scale to compute the corresponding unit vectors.                    "
},
{
  "id": "d_distance",
  "level": "2",
  "url": "s_innerproducts.html#d_distance",
  "type": "Definition",
  "number": "4.1.20",
  "title": "Distance between vectors.",
  "body": " distance between two vectors    the distance between and   Distance between vectors   Let be an inner product space. The distance between , denoted , is defined as .   "
},
{
  "id": "eg_distance",
  "level": "2",
  "url": "s_innerproducts.html#eg_distance",
  "type": "Example",
  "number": "4.1.21",
  "title": "",
  "body": "  For each inner product space , compute the distance between the given vectors.     with the dot product, ,      with the evaluation at inner product, ,      with the integral inner product, ,         We have .    We have     We have      "
},
{
  "id": "th_norm_basic_props",
  "level": "2",
  "url": "s_innerproducts.html#th_norm_basic_props",
  "type": "Theorem",
  "number": "4.1.22",
  "title": "Basic properties of norm and distance.",
  "body": " Basic properties of norm and distance   Let be an inner product space.    For all we have , and equality holds if and only if .    For all and we have .    For all we have , and equality holds if and only if .      We prove (2) and leave the rest as an exercise ( ).  Given and we have .   "
},
{
  "id": "th_Cauchy-Schwarz",
  "level": "2",
  "url": "s_innerproducts.html#th_Cauchy-Schwarz",
  "type": "Theorem",
  "number": "4.1.23",
  "title": "Cauchy-Schwarz inequality.",
  "body": " Cauchy-Schwarz inequality   Let be an inner product space. For all we have , and equality holds if and only if for some .   "
},
{
  "id": "s_innerproducts-5-4",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts-5-4",
  "type": "Proof",
  "number": "4.1.3.1",
  "title": "",
  "body": " Fix vectors and . For any we have by positivity , where . Since for all the quadratic polynomial has at most one root. Using the quadratic formula we conclude that we must have , since otherwise would have two distinct roots. It follows that , or equivalently . Taking square-roots yields the desired inequality.  The same reasoning shows that the Cauchy-Schwarz inequality is an actual equality if and only if for some if and only if if and only if for some (by positivity).  "
},
{
  "id": "th_triangle_inequalities",
  "level": "2",
  "url": "s_innerproducts.html#th_triangle_inequalities",
  "type": "Theorem",
  "number": "4.1.24",
  "title": "Triangle Inequalities.",
  "body": " Triangle Inequalities   Let be an inner product space.   For all we have .    For all we have        This is an elementary exercise of unpacking the definitions of norm and distance in terms of the inner product, and then applying the Cauchy-Schwarz inequality appropriately. The proof is left as an exercise.   "
},
{
  "id": "d_angle",
  "level": "2",
  "url": "s_innerproducts.html#d_angle",
  "type": "Definition",
  "number": "4.1.25",
  "title": "Angle between vectors.",
  "body": " Angle between vectors  angle between vectors   Let be an inner product space. Given nonzero vectors , the angle between and is defined to be the unique satisfying . Equivalently, we have .   "
},
{
  "id": "rm_general_angles",
  "level": "2",
  "url": "s_innerproducts.html#rm_general_angles",
  "type": "Remark",
  "number": "4.1.26",
  "title": "",
  "body": "  Our definition of the angle between two vectors may remind you of the dot product angle formula for vectors in : . Interestingly, whereas is typically treated as a theorem , derived from properties of the dot product and the law of cosines, in a general inner product space the equation is understood as the definition of the angle between two vectors.   "
},
{
  "id": "eg_angle_dotproduct",
  "level": "2",
  "url": "s_innerproducts.html#eg_angle_dotproduct",
  "type": "Example",
  "number": "4.1.27",
  "title": "",
  "body": "  Consider along with the dot product. Verify that our definition of the angle between and is consistent with our planar geometry notion of angle.    According to , is the unique element of satisfying . We recognize as the familiar angle , as expected.   "
},
{
  "id": "eg_angle_weighted",
  "level": "2",
  "url": "s_innerproducts.html#eg_angle_weighted",
  "type": "Example",
  "number": "4.1.28",
  "title": "",
  "body": "  Consider with the weighted dot product Compute the angle between and with respect to this inner product    First compute By definition is the unique value in satisfying . We see that is not one of our familiar angles from the unit circle ( , , ) and so express in terms of the function: .   "
},
{
  "id": "eg_angle_function",
  "level": "2",
  "url": "s_innerproducts.html#eg_angle_function",
  "type": "Example",
  "number": "4.1.29",
  "title": "",
  "body": "  Consider with the integral inner product. Compute the angle between and with respect to this inner product.    First compute It follows that , and hence that .   "
},
{
  "id": "eg_why_weightedproduct",
  "level": "2",
  "url": "s_innerproducts.html#eg_why_weightedproduct",
  "type": "Example",
  "number": "4.1.30",
  "title": "Weighted dot product distance.",
  "body": " Weighted dot product distance   Consider with a choice of weighted dot product where are fixed positive constants. With respect to this inner product the distance between two vectors and is . Thus is an aggregate measure of the difference between the corresponding entries of and , as weighted by our choice of the constants .  Imagine that each element of is a data point collected by measuring different properties of a sample : , is the measured value of property on for all . Given samples and with corresponding measurement vectors and , the weighted distance is then a quantitative way of saying how close the two samples are to one another. The choice of weights allows us to adjust the relative influence of a given property in determining this closeness. For example, the standard dot product ( for all ) yields a notion of distance that gives each property equal standing.   "
},
{
  "id": "eg_why_evaluationinner",
  "level": "2",
  "url": "s_innerproducts.html#eg_why_evaluationinner",
  "type": "Example",
  "number": "4.1.31",
  "title": "Evaluation inner product distance.",
  "body": " Evaluation inner product distance   Consider with the evaluation inner product at a fixed choice of inputs . Given two polynomials , the distance between them with respect to this inner product is . We see that with respect to this inner product, the distance between two polynomials is a measure of how much their values at the inputs differ. This inner product may be useful if you are interested in how a polynomial behaves at this finite list of inputs.   "
},
{
  "id": "eg_why_integralinner",
  "level": "2",
  "url": "s_innerproducts.html#eg_why_integralinner",
  "type": "Example",
  "number": "4.1.32",
  "title": "Integral inner product and distance.",
  "body": " Integral inner product and distance   Take with the standard inner product . Here the distance between two functions is defined as , which we can think of as an aggregate measure of the difference of values for all . Thus is a global measure of the similarity between and that takes into account their values over the entire interval .   "
},
{
  "id": "s_innerproducts_ex-1-2",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-1-2",
  "type": "Exercise",
  "number": "4.1.5.1",
  "title": "",
  "body": "  Find the norm of and the unit vector in the direction of if   ,             "
},
{
  "id": "s_innerproducts_ex-1-3",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-1-3",
  "type": "Exercise",
  "number": "4.1.5.2",
  "title": "",
  "body": "  Find the angle between the vectors   .           "
},
{
  "id": "s_innerproducts_ex-1-4",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-1-4",
  "type": "Exercise",
  "number": "4.1.5.3",
  "title": "",
  "body": "  If and are arbitrary polynomials of degree at most 2, then the mapping defines an inner product in . Use this inner product to find , , , and the angle between and for   ,   ,   ,   .                          "
},
{
  "id": "s_innerproducts_ex-1-5",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-1-5",
  "type": "Exercise",
  "number": "4.1.5.4",
  "title": "",
  "body": "  If and are arbitrary real matrices, then the mapping defines an inner product in . Use this inner product to find , the norms and , and the angle between and for   ,   ,   ,   .                          "
},
{
  "id": "s_innerproducts_ex-1-6",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-1-6",
  "type": "Exercise",
  "number": "4.1.5.5",
  "title": "",
  "body": "  Use the inner product in the vector space of continuous functions on the domain to find , , , and the angle between and for   ,   ,   ,   .                          "
},
{
  "id": "s_innerproducts_ex-2",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-2",
  "type": "Exercise",
  "number": "4.1.5.6",
  "title": "",
  "body": " For each of the following operations on , determine whether it defines an inner product on . If it fails to be an inner product, identify which of the three inner product axioms (if any) it does satisfy, and provide explicit counterexamples for any axiom that fails.     .     .     .     The operation in (b) is an inner product. Use that fact that , where we treat as column vectors. This helps to prove axioms (i)-(ii). For axiom (iii), use either a complete the square or quadratic formula argument on the expression .  "
},
{
  "id": "s_innerproducts_ex-3",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-3",
  "type": "Exercise",
  "number": "4.1.5.7",
  "title": "",
  "body": " We work within the inner product space given by together with the evaluation at 0, 1, 2 inner product.  Let . Give a parametric description of the set .  "
},
{
  "id": "s_innerproducts_ex-4",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-4",
  "type": "Exercise",
  "number": "4.1.5.8",
  "title": "",
  "body": " We work in the inner product space given by together with the integral inner product.   Let . Compute and .    Show that if is an odd function (i.e., for all ) and is an even function ( for all ), then . Hint : use the area interpretation of the integral and properties of even\/odd functions.     "
},
{
  "id": "s_innerproducts_ex-5-3",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-5-3",
  "type": "Exercise",
  "number": "4.1.5.9",
  "title": "",
  "body": "  with the standard dot product;   "
},
{
  "id": "s_innerproducts_ex-5-4",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-5-4",
  "type": "Exercise",
  "number": "4.1.5.10",
  "title": "",
  "body": "  with the dot product with weights ;   "
},
{
  "id": "s_innerproducts_ex-5-5",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-5-5",
  "type": "Exercise",
  "number": "4.1.5.11",
  "title": "",
  "body": "  with the integral inner product;   "
},
{
  "id": "s_innerproducts_ex-5-6",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-5-6",
  "type": "Exercise",
  "number": "4.1.5.12",
  "title": "",
  "body": "  with evaluation at inner product;   "
},
{
  "id": "s_innerproducts_ex-6",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-6",
  "type": "Exercise",
  "number": "4.1.5.13",
  "title": "",
  "body": " Let be an inner product space. Prove that for all .  "
},
{
  "id": "s_innerproducts_ex-7",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-7",
  "type": "Exercise",
  "number": "4.1.5.14",
  "title": "",
  "body": " Let and be nonzero vectors of the inner product space , and let be the angle between them. Prove the following equivalence: . Your proof should be a chain of equivalences with each step justified.   The equality is true if and only if it is true after squaring both sides. (Why?) Use the definition and expand the inner product.  "
},
{
  "id": "s_innerproducts_ex-8",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-8",
  "type": "Exercise",
  "number": "4.1.5.15",
  "title": "",
  "body": " Let be an inner product space. Suppose vectors satisfy and . Using the Cauchy-Schwarz inequality ( ) find the maximum and minimum possible values of , and give explicit examples where those values occur.  "
},
{
  "id": "ex_norm_props",
  "level": "2",
  "url": "s_innerproducts.html#ex_norm_props",
  "type": "Exercise",
  "number": "4.1.5.16",
  "title": "",
  "body": " Prove statements (1) and (3) of .  "
},
{
  "id": "s_innerproducts_ex-10",
  "level": "2",
  "url": "s_innerproducts.html#s_innerproducts_ex-10",
  "type": "Exercise",
  "number": "4.1.5.17",
  "title": "",
  "body": " Prove each inequality below using the Cauchy-Schwarz inequality ( ) applied to a judicious choice of inner product space, and possibly a judicious choice of vector in said inner product space.   For all  .    For all , .    For all  .     "
},
{
  "id": "ex_isometries",
  "level": "2",
  "url": "s_innerproducts.html#ex_isometries",
  "type": "Exercise",
  "number": "4.1.5.18",
  "title": "Isometries of inner product spaces.",
  "body": "Isometries of inner product spaces  Let be an inner product space. An isometry of is a function that preserves distance: i.e., . In this exercise we will show that any isometry that maps to is a linear transformation. This is a very useful fact. For example, it implies the linearity of many geometric transformations we have considered: rotation about the origin in , reflection through a line in , .  In what follows assume that is an isometry of satisfying .    Prove that : i.e., preserves norms.    Prove : i.e., preserves inner products. Hint: first prove that .    To prove is linear it is enough to show for all , . To do so, use the above parts to show that .    "
},
{
  "id": "s_orthogonality",
  "level": "1",
  "url": "s_orthogonality.html",
  "type": "Section",
  "number": "4.2",
  "title": "Orthogonal bases",
  "body": " Orthogonal bases   Orthogonal vectors and sets   Orthogonality  orthogonal vectors  orthogonal sets  orthonormal basis   Let be an inner product space. Vectors are orthogonal if .  Let be a set of nonzero vectors.   The set is orthogonal if for all . We say that the elements of are pairwise orthogonal in this case.    The set is orthonormal if it is both orthogonal and satisfies for all : , consists of pairwise orthogonal unit vectors.        Orthogonal implies linearly independent   Let be an inner product space. If is orthogonal, then is linearly independent.    Given any distinct elements , we have . This proves that is linearly independent.      Show that the set is orthogonal with respect to the dot product. Explain why it follows that is a basis of .    A simple computation shows for all , showing that is orthogonal. implies is linearly independent. Since , it follows from that is a basis.      Let with integral inner product , and let , where the element is understood as the constant function for all . Show that is orthogonal and hence linearly independent.    First observe that for all . (Note: since , the set is not orthonormal. ) Next, using the trigonometric identities it follows that .      Orthogonal bases  Given an inner product space we will see that working with orthogonal sets of vectors is extremely convenient computationally speaking. In particular, when picking basis of , we will look for one consisting of orthogonal vectors. Not surprisingly, this is called an orthogonal basis .   Orthogonal and orthonormal bases  orthogonal basis  orthonormal basis   Let be an inner product space. An orthogonal basis (resp., orthonormal basis ) of is a basis that is orthogonal (resp., orthonormal) as a set.     serves as a first example illustrating the virtue of orthogonal and orthonormal base. We preface it with a mantra conveying the general principle.   Orthogonal basis mantra   Working with an orthogonal basis is nice; working with an orthonormal basis is even nicer.     Calculating with orthogonal bases   Let be an inner product space. and let    Let be an orthogonal basis of . For any we have , where for all . If is orthonormal , so that for all , then .    Generalized Pythagorean theorem  Let be an orthonormal basis of . Given , we have .        Consider the inner product space with the dot product.   Verify that is an orthonormal basis of .    Let . Find the scalars such that .    Verify that .         Easily verified.    Using we compute .    Computing directly yields . Using the generalized Pythagorean theorem we have , as desired.       gives a first glimpse how working with orthogonal and orthonormal bases can make life easier. The question remains, however: Can we always find an orthonormal basis? The Gram-Schmidt procedure gives an affirmative answer to this question, at least in the finite-dimensional case, as it provides a method of converting an arbitrary basis into an orthogonal one.   Gram-Schmidt procedure  Gram-Schmidt procedure   Let be an inner product space, and let be a basis for . We can convert into an orthogonal basis , and further to an orthonormal basis , as follows:   Set .    Orthogonalize  Proceeding in succession for each , replace with the vector defined as . The resulting set is an orthogonal basis of .    Normalize  For each let . The set is an orthonormal basis of .        Existence of orthonormal bases   Let be an inner product space of dimension .    There is an orthonormal basis for . In fact, any basis of can be converted to an orthonormal basis using the Gram-Schmidt procedure .    If is an orthogonal set, then there is an orthogonal basis containing : , any orthogonal set can be extended to an orthogonal basis.        See and its proof.    The orthogonal set is linearly independent by . Let be the distinct elements of . (We must have since is linearly independent.) By we can extend to a basis . It is easy to see that when we apply the Gram-Schmidt procedure to , the first vectors are left unchanged, as they are already pairwise orthogonal. Thus Gram-Schmidt returns an orthogonal basis of the form , as desired.         Webwork Exercises    Let be an orthonormal basis for an inner product space . If   is so that , is orthogonal to , and , find the possible values for , , and .   ,  ,                   Solution: One checks by direct computation that  , ,  must hold.         Let Use the Gram-Schmidt process to determine an orthonormal basis for the subspace of spanned by and .   ,          Let Use the Gram-Schmidt process to determine an orthonormal basis for the subspace of spanned by , , and .   , ,          Let Find an orthonormal basis of the image of .   ,          Let Find an orthonormal basis of the kernel of .   ,          The vectors are pairwise orthogonal with respect to the dot product, as is easily verified. For each below, find the scalars such that .               (Your answer will be expressed in terms of , and . )      Consider the inner product space given by together with the dot product. Construct an orthogonal basis of containing following the steps below.    Produce a vector orthogonal to by inspection.    Produce a vector orthogonal to and by setting up an appropriate matrix equation of the form and finding a nontrivial solution. (Use .)    Produce a vector orthogonal to by setting up an appropriate matrix equation of the form and finding a nontrivial solution. (Use .)      Consider the inner product space given by together with the dot product. Let be the plane with defining equation . Compute an orthogonal basis of , and then extend this to an orthogonal basis of .  You do not have to use Gram-Schmidt here, but can proceed using a combination of inspection, your geometric understanding of , and\/or along similar lines of .   Consider the inner product space given by together with the weighted dot product Use the Gram-Schmidt procedure to convert the basis into a basis that is orthogonal with respect to this weighted dot product.    Consider the vector space with the integral inner product. Let , and define . Apply Gram-Schmidt to to obtain an orthogonal basis of .    Consider the vector space with the evaluation at inner product: . Apply Gram-Schmidt to the standard basis of to obtain an orthogonal basis of .    Consider the inner product space together with the dot product. .    Show that is a subspace of by finding a matrix for which .    Use (a) and an appropriate fundamental space algorithm to find a basis for .    Use Gram-Schmidt to convert your basis in (b) to an orthgonal basis of .      Let be an inner produce space. Prove: if , then . This result can be thought of as the Pythagorean theorem for general inner product spaces .    Let be an inner product space, and suppose is an orthonormal basis of . Suppose satisfy .    Prove: .    Prove: .      "
},
{
  "id": "ss_orthogonal-2",
  "level": "2",
  "url": "s_orthogonality.html#ss_orthogonal-2",
  "type": "Definition",
  "number": "4.2.1",
  "title": "Orthogonality.",
  "body": " Orthogonality  orthogonal vectors  orthogonal sets  orthonormal basis   Let be an inner product space. Vectors are orthogonal if .  Let be a set of nonzero vectors.   The set is orthogonal if for all . We say that the elements of are pairwise orthogonal in this case.    The set is orthonormal if it is both orthogonal and satisfies for all : , consists of pairwise orthogonal unit vectors.      "
},
{
  "id": "th_orthogonal",
  "level": "2",
  "url": "s_orthogonality.html#th_orthogonal",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "Orthogonal implies linearly independent.",
  "body": " Orthogonal implies linearly independent   Let be an inner product space. If is orthogonal, then is linearly independent.    Given any distinct elements , we have . This proves that is linearly independent.   "
},
{
  "id": "ss_orthogonal-4",
  "level": "2",
  "url": "s_orthogonality.html#ss_orthogonal-4",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Show that the set is orthogonal with respect to the dot product. Explain why it follows that is a basis of .    A simple computation shows for all , showing that is orthogonal. implies is linearly independent. Since , it follows from that is a basis.   "
},
{
  "id": "eg_orthogonal_functions",
  "level": "2",
  "url": "s_orthogonality.html#eg_orthogonal_functions",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Let with integral inner product , and let , where the element is understood as the constant function for all . Show that is orthogonal and hence linearly independent.    First observe that for all . (Note: since , the set is not orthonormal. ) Next, using the trigonometric identities it follows that .   "
},
{
  "id": "d_orthogonal_basis",
  "level": "2",
  "url": "s_orthogonality.html#d_orthogonal_basis",
  "type": "Definition",
  "number": "4.2.5",
  "title": "Orthogonal and orthonormal bases.",
  "body": " Orthogonal and orthonormal bases  orthogonal basis  orthonormal basis   Let be an inner product space. An orthogonal basis (resp., orthonormal basis ) of is a basis that is orthogonal (resp., orthonormal) as a set.   "
},
{
  "id": "princ_orthogonalbasis_mantra",
  "level": "2",
  "url": "s_orthogonality.html#princ_orthogonalbasis_mantra",
  "type": "Mantra",
  "number": "4.2.6",
  "title": "Orthogonal basis mantra.",
  "body": " Orthogonal basis mantra   Working with an orthogonal basis is nice; working with an orthonormal basis is even nicer.   "
},
{
  "id": "th_orthogonal_basis_formula",
  "level": "2",
  "url": "s_orthogonality.html#th_orthogonal_basis_formula",
  "type": "Theorem",
  "number": "4.2.7",
  "title": "Calculating with orthogonal bases.",
  "body": " Calculating with orthogonal bases   Let be an inner product space. and let    Let be an orthogonal basis of . For any we have , where for all . If is orthonormal , so that for all , then .    Generalized Pythagorean theorem  Let be an orthonormal basis of . Given , we have .     "
},
{
  "id": "s_orthogonality-3-7",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonality-3-7",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "  Consider the inner product space with the dot product.   Verify that is an orthonormal basis of .    Let . Find the scalars such that .    Verify that .         Easily verified.    Using we compute .    Computing directly yields . Using the generalized Pythagorean theorem we have , as desired.     "
},
{
  "id": "proc_gram-schmidt",
  "level": "2",
  "url": "s_orthogonality.html#proc_gram-schmidt",
  "type": "Procedure",
  "number": "4.2.9",
  "title": "Gram-Schmidt procedure.",
  "body": " Gram-Schmidt procedure  Gram-Schmidt procedure   Let be an inner product space, and let be a basis for . We can convert into an orthogonal basis , and further to an orthonormal basis , as follows:   Set .    Orthogonalize  Proceeding in succession for each , replace with the vector defined as . The resulting set is an orthogonal basis of .    Normalize  For each let . The set is an orthonormal basis of .      "
},
{
  "id": "cor_orthonormal_existence",
  "level": "2",
  "url": "s_orthogonality.html#cor_orthonormal_existence",
  "type": "Corollary",
  "number": "4.2.10",
  "title": "Existence of orthonormal bases.",
  "body": " Existence of orthonormal bases   Let be an inner product space of dimension .    There is an orthonormal basis for . In fact, any basis of can be converted to an orthonormal basis using the Gram-Schmidt procedure .    If is an orthogonal set, then there is an orthogonal basis containing : , any orthogonal set can be extended to an orthogonal basis.        See and its proof.    The orthogonal set is linearly independent by . Let be the distinct elements of . (We must have since is linearly independent.) By we can extend to a basis . It is easy to see that when we apply the Gram-Schmidt procedure to , the first vectors are left unchanged, as they are already pairwise orthogonal. Thus Gram-Schmidt returns an orthogonal basis of the form , as desired.     "
},
{
  "id": "s_orthogonal_bases_ex-1-2",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-1-2",
  "type": "Exercise",
  "number": "4.2.3.1",
  "title": "",
  "body": "  Let be an orthonormal basis for an inner product space . If   is so that , is orthogonal to , and , find the possible values for , , and .   ,  ,                   Solution: One checks by direct computation that  , ,  must hold.      "
},
{
  "id": "s_orthogonal_bases_ex-1-3",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-1-3",
  "type": "Exercise",
  "number": "4.2.3.2",
  "title": "",
  "body": "  Let Use the Gram-Schmidt process to determine an orthonormal basis for the subspace of spanned by and .   ,       "
},
{
  "id": "s_orthogonal_bases_ex-1-4",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-1-4",
  "type": "Exercise",
  "number": "4.2.3.3",
  "title": "",
  "body": "  Let Use the Gram-Schmidt process to determine an orthonormal basis for the subspace of spanned by , , and .   , ,       "
},
{
  "id": "s_orthogonal_bases_ex-1-5",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-1-5",
  "type": "Exercise",
  "number": "4.2.3.4",
  "title": "",
  "body": "  Let Find an orthonormal basis of the image of .   ,       "
},
{
  "id": "s_orthogonal_bases_ex-1-6",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-1-6",
  "type": "Exercise",
  "number": "4.2.3.5",
  "title": "",
  "body": "  Let Find an orthonormal basis of the kernel of .   ,       "
},
{
  "id": "s_orthogonal_bases_ex-2",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-2",
  "type": "Exercise",
  "number": "4.2.3.6",
  "title": "",
  "body": " The vectors are pairwise orthogonal with respect to the dot product, as is easily verified. For each below, find the scalars such that .               (Your answer will be expressed in terms of , and . )    "
},
{
  "id": "ex_extend_orthogonal",
  "level": "2",
  "url": "s_orthogonality.html#ex_extend_orthogonal",
  "type": "Exercise",
  "number": "4.2.3.7",
  "title": "",
  "body": " Consider the inner product space given by together with the dot product. Construct an orthogonal basis of containing following the steps below.    Produce a vector orthogonal to by inspection.    Produce a vector orthogonal to and by setting up an appropriate matrix equation of the form and finding a nontrivial solution. (Use .)    Produce a vector orthogonal to by setting up an appropriate matrix equation of the form and finding a nontrivial solution. (Use .)    "
},
{
  "id": "s_orthogonal_bases_ex-4",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-4",
  "type": "Exercise",
  "number": "4.2.3.8",
  "title": "",
  "body": " Consider the inner product space given by together with the dot product. Let be the plane with defining equation . Compute an orthogonal basis of , and then extend this to an orthogonal basis of .  You do not have to use Gram-Schmidt here, but can proceed using a combination of inspection, your geometric understanding of , and\/or along similar lines of . "
},
{
  "id": "s_orthogonal_bases_ex-5",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-5",
  "type": "Exercise",
  "number": "4.2.3.9",
  "title": "",
  "body": " Consider the inner product space given by together with the weighted dot product Use the Gram-Schmidt procedure to convert the basis into a basis that is orthogonal with respect to this weighted dot product.  "
},
{
  "id": "s_orthogonal_bases_ex-6",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-6",
  "type": "Exercise",
  "number": "4.2.3.10",
  "title": "",
  "body": " Consider the vector space with the integral inner product. Let , and define . Apply Gram-Schmidt to to obtain an orthogonal basis of .  "
},
{
  "id": "s_orthogonal_bases_ex-7",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-7",
  "type": "Exercise",
  "number": "4.2.3.11",
  "title": "",
  "body": " Consider the vector space with the evaluation at inner product: . Apply Gram-Schmidt to the standard basis of to obtain an orthogonal basis of .  "
},
{
  "id": "s_orthogonal_bases_ex-8",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-8",
  "type": "Exercise",
  "number": "4.2.3.12",
  "title": "",
  "body": " Consider the inner product space together with the dot product. .    Show that is a subspace of by finding a matrix for which .    Use (a) and an appropriate fundamental space algorithm to find a basis for .    Use Gram-Schmidt to convert your basis in (b) to an orthgonal basis of .    "
},
{
  "id": "ex_ortho_pythag",
  "level": "2",
  "url": "s_orthogonality.html#ex_ortho_pythag",
  "type": "Exercise",
  "number": "4.2.3.13",
  "title": "",
  "body": " Let be an inner produce space. Prove: if , then . This result can be thought of as the Pythagorean theorem for general inner product spaces .  "
},
{
  "id": "s_orthogonal_bases_ex-10",
  "level": "2",
  "url": "s_orthogonality.html#s_orthogonal_bases_ex-10",
  "type": "Exercise",
  "number": "4.2.3.14",
  "title": "",
  "body": " Let be an inner product space, and suppose is an orthonormal basis of . Suppose satisfy .    Prove: .    Prove: .    "
},
{
  "id": "s_orthogonal_projection",
  "level": "1",
  "url": "s_orthogonal_projection.html",
  "type": "Section",
  "number": "4.3",
  "title": "Orthogonal projection",
  "body": " Orthogonal projection   A trick we learn early on in physics-- specifically, in dynamics problems in -- is to pick a convenient axis and then decompose any relevant vectors (force, acceleration, velocity, position, ) into a sum of two components: one that points along the chosen axis, and one that points perpendicularly to it. As we will see in this section, this technique can be vastly generalized. Namely, instead of we can take any inner product space ; and instead of a chosen axis in , we can choose any finite-dimensional subspace ; then any can be decomposed in the form where and is a vector orthogonal to , in a sense we will make precise below. Just as in our toy physics example, this manner of decomposing vectors helps simplify computations in problems where the subspace chosen is of central importance.    Orthogonal complement   We begin by making sense of what it means for a vector to be orthogonal to a subspace.    Orthogonal complement  orthogonal complement (of a subspace)    the orthogonal complement of    . Let be an inner product vector space, and let be a subspace.  A vector is orthogonal to if it is orthogonal to every element of : , if for all .  The orthogonal complement of , denoted , is the set of all elements of orthogonal to : , .     Computing   According to , to verify that a vector lies in , we must show that for all . The for all quantifier here can potentially make this an onerous task: there are in principle infinitely many to check! In the special case where has a finite spanning set, so that for some vectors , deciding whether reduces to checking whether for all . In other words, we have . The forward implication of this equivalence is clear: if is orthogonal to all elements of , then clearly it is orthogonal to each . The reverse implication is left as an exercise. (See .)  We illustrate this computational technique in the next examples.      Consider the inner product space together with the dot product. Let : the line with equation . Compute and identify it as a familiar geometric object in .    According to , since , we have . Letting , we see that if and only if , if and only if . Thus is the line with equation . Observe that the lines and are indeed perpendicular to one another. (Graph them!)      Consider the inner product space together with the dot product. Let be the plane with equation . Compute and identify this as a familiar geometric object in .    First, solving for , we see that . Next, according to we have . It follows that is the set of vectors satisfying the linear system Solving this system using Gaussian elimination we conclude that , which we recognize as the line passing through the origin with direction vector . This is none other than the normal line to the plane passing through the origin.     Orthogonal complement   Let be an inner product vector space, and let be a subspace.   The orthogonal complement is a subspace of .    We have .    If then .       The proof is left as an exercise. (See .)      Consider the inner product space with the dot product. Let , the line passing through the origin with direction vector . The orthogonal complement is the set of vectors orthogonal to . Using the definition of dot product, this is the set of solutions to the equation , which we recognize as the plane passing through the origin with normal vector . Note that we have as predicted in .    The notion of orthogonal complement gives us a more conceptual way of understanding the relationship between the various fundamental spaces of a matrix.   Fundamental spaces and orthogonal complements   Let be , and consider and as inner product spaces with respect to the dot product. Then:    , and thus .     , and thus .         Using the dot product method of matrix multiplication, we see that a vector if and only if for each row of , if and only if for all (see ), if and only if . This shows .  We can use to conclude . Alternatively, and more directly, the argument above shows that , proving . Next, by the rank-nullity theorem we have ; and by we have . It follows that . Since and , we conclude by that .    This follows from (1) and the fact that .        Understanding the orthogonal relationship between and allows us in many cases to quickly determine\/visualize the one from the other. As an example, consider . Looking at the columns, we see easily that , which implies that . Since is an element of and , we must have , a line. By orthogonality, we conclude that , which is the plane with normal vector passing through the origin.      Orthogonal Projection   Orthogonal projection theorem   Let be an inner product space, and let be a finite-dimensional subspace.    Orthogonal decomposition  For all there are vectors and satisfying . Furthermore, the pair is unique in the following sense: if we have for some and , then and . Accordingly, the vector equation is called the orthogonal decomposition of with respect to ; and the vector is called the orthogonal projection of onto , denoted .    Orthogonal projection formula  Choose any orthogonal basis of . We have .    Distance to  The orthogonal projection is the element of that is closest to in the following sense: for all we have , or equivalently, . Accordingly, we define the distance  between and to be .      Let . We first show that the vectors and satisfy the conditions in . It is clear that the defined in is an element of , since it is a linear combination of the . Furthermore, we see easily that our choice satisfies . It remains only to show that . Since is a basis of , it suffices to show that for all . We compute: , as desired.  Having shown that a decomposition of of the form exists, we now show it is unique in the sense specified. Suppose we have , where and . Rearranging, we see that . We now claim that , in which case and , as desired. To see why the claim is true, consider the vector . Since , and , we have . On the other hand, since , and , we have . Thus . Since ( ), we conclude , as claimed.  At this point we have proved both (1) and (2), and it remains only to show that holds for all . To this end we compute: . This shows . Taking square-roots now proves the desired inequality.     Orthogonal projection formula   The formula is very convenient for computing an orthogonal projection , but mark well this important detail: to apply the formula we must first provide an orthogonal basis of . Thus unless one is provided, our first step in an orthogonal projection computation is to produce an orthogonal basis of . In some simple cases ( , when is 1- or 2-dimensional) this can be done by inspection. Otherwise, we use the Gram-Schmidt procedure.      Consider the inner product space with the dot product. Let be the plane with equation . Compute for each below.                     According to our first step is to produce an orthogonal basis of . We do so by inspection. Since , we simply need to find two solutions to that are orthogonal to one another: , and . Thus we choose as our orthogonal basis, and our computations become a matter of applying , which in this case becomes . Now compute: . The last two computations might give you pause. Why do we have and ? The answer is that is already an element of , so it stands to reason that its projection is itself; and is already orthogonal to (it is a scalar multiple of ), so it stands to reason that its projection is equal to . See for a rigorous proof of these claims.     Video example: orthogonal projection in function space   Video: orthogonal projection in function space  Video: orthogonal projection in function space       Let be an inner product space, and let be a finite-dimensional subspace. Then .     Clearly . For the other direction, take . Using the orthogonal projection theorem , we can write with and . We will show .  Since we have . Then we have   Thus . It follows that , and hence .    Orthgonal projection is linear   Let be an inner product space, and let be a finite-dimensional subspace.    The function is a linear transformation.    We have and .         We must show that for all and . We pick an orthogonal basis of and compute, using formula : .    By definition we have for all , and thus . For the other direction, if , then ( ), and thus . This proves .  The fact that follows from the equivalence stated in (b) of .       Orthogonal projection in and   For this subsection we will always work within Euclidean space: , with the dot product. In applications we often want to compute the projection of a point onto a line (in or ) or plane (in ). According to the operation of projecting onto any subspace is in fact a linear transformation . By we have , where . Lastly, gives us an easy formula for computing for all , once we have selected an orthogonal basis for . As a result we can easily derive matrix formulas for projection onto any subspace of any Euclidean space . We illustrate this with some examples in and below.    Projection onto a line   Any line in passing through the origin can be described as , for some . The set is trivially an orthogonal basis of . Using , we have . It follows that , where .      Consider the line .    Find the matrix such that .    Use your matrix formula from (a) to compute , , and .    Compute and .        Using the general formula described in , we have .    Now compute . The last two computations, and , should come as no surprise, since and . (See .)    We have . Again, the second computation should come as no surprise. Since is itself an element of , it stands to reason that its distance to is equal to zero.       Projection onto planes in   Any plane passing through the origin can be described as . Equivalently, is the set of all satisfying : , , where . Consider the orthogonal decomposition with respect to : . Since and , we see that this is also an orthogonal decomposition with respect to ! Using the matrix formula for from , we have . We conclude that , where .      Consider the plane .    Find the matrix such that .    Use your matrix formula from (a) to compute and .    Compute and .        Using the general formula described in , we have .    Now compute .    We have .         Trigonometric polynomial approximation  Consider the inner product space consisting of along with the integral inner product . In we saw that the set is orthogonal with respect to this inner product. Thus is an orthogonal basis of . We call the space of trigonometric polynomials of degree at most .  Since is an orthogonal basis of , given an arbitrary function , its orthogonal projection is given by , where . Here we are using , as well as the inner product formulas and from .  What is the relationship between and ? tells us that is the best trigonometric polynomial approximation of of degree at most in the following sense: given any any other trigonometric polynomial , we have . Unpacking the definition of norm in this inner product space, we conclude that for all .  Thus, given a continuous function on , linear algebra shows us how to find its best trigonometric polynomial approximation of the form . However, linear algebra does not tell us just how good this approximation is. This question, among others, is tackled by another mathematical theory: Fourier analysis . There we learn that the trigonometric polynomial approximations get arbitrarily close to as we let increase. More precisely, letting be the orthogonal projection of onto the space of trigonometric polynomials of degree at most , we have .    Least-squares solution to linear systems  In statistics we often wish to approximate a scatter plot of points , , with a line that best fits the data. Finding this line amounts to finding the appropriate slope and -intercept : , in this setup, the points are given, and and are the unknowns we wish to find. For the line to perfectly fit the data, we would want . In other words would be a solution to the matrix equation , where . Of course in most situations the provided points do not lie on a line, and thus there is no solution to the given matrix equation . When this is the case we can use the theory of orthogonal projection to find what is called a least-squares solution, which we now describe in detail.  The least-squares method applies to any matrix equation , where and are given, and is treated as an unknown vector. Recall that . When , and hence does not have a solution, the least-squares method proceeds by replacing with the element of closest to it: that is, with its orthogonal projection onto . Let , where orthogonal projection is taken with respect to the dot product on , and consider the adjusted matrix equation . By definition of , we have , and thus there is a solution to . We call a least-squares solution to . Observe that does not necessarily satisfy ; rather, it satisfies . What makes this a least-squares solution is that is the element of closest to . With respect to the dot product, this means that a least-squares solution minimizes the quantity , among all .   Best fitting line   Suppose we wish to find a line that best fits (in the least-square sense) the following data points: . Following the discussion above, we seek a solution to the matrix equation , where . Using Gaussian elimination, we see easily that this equation has no solution: equivalently, . Accordingly, we compute and find a solution to . Conveniently, the set is already an orthogonal basis of , allowing us to use : . Lastly, solving yields , and we conclude the line is the one that best fits the data in the least-squares sense.     Visualizing least-squares    helps us give a graphical interpretation of how the line best approximates the points .  Least-squares visualization  Least-squares visualization   Let be the given -values of the points, and let be the orthogonal projection of onto . In the graph the values denote the vertical difference between the data points, and our fitting line. The projection makes the error as small as possible. This means if I draw any other line and compute the corresponding differences at the -values -3, 1 and 2, then     To compute a least-squares solution to we must first compute the orthogonal projection of onto ; and this in turn requires first producing an orthogonal basis of , which may require using the Gram-Schmidt procedure. The following result bypasses these potentially onerous steps by characterizing a least-squares solution to as a solution to the matrix equation .   Least-squares matrix formula   Given an matrix and column vector , a vector is a least-squares solution to if and only if . In other words, we can find a least-squares solution by solving the matrix equation directly.    Let , and let . The key observation is that a vector satisfies if and only if is an orthogonal decomposition of with respect to ; and this is true if and only if . Thus we have .      Consider again the matrix equation from . According to the least-squares solution can be found by solving the equation for . We compute and solve just as before.        In each exercise below you are given an inner product space , a subspace where is orthogonal, and a vector . Compute .    with the dot product; ;      with dot product with weights ; ;      with the integral inner product; ; for all      Let be the plane passing through the origin with normal vector . Find the orthogonal projection of onto with respect to the dot product.    Recall that the trace of a square matrix is the sum of its diagonal entries. Let with inner product . (You may take for granted that this operation is indeed an inner product on .) Define .    Compute an orthogonal basis for . You can do this either by inspection (the space is manageable), or by starting with any basis of and applying the Gram-Schmidt procedure.    Compute , where .      Let with the integral inner product, and let . Find the function of the form that best approximates  in terms of this inner product: find the the of this form that minimizes .   The set is orthogonal with respect to the given inner product.    Let be an inner product space, let , and let . Prove: . In other words, to check whether an element is in , it suffices to check that it is orthogonal to each element of its spanning set .    Consider the inner product space together with the dot product. Let Provide orthogonal bases for and .    Prove statements (1) and (2) of .   Dimension of  Prove statement (3) of : if is an inner product space of dimension , and is a subspace of , then .   By there is an orthogonal basis of , and furthermore, we can extend to an orthogonal basis of all of . Show the form a basis for .    Prove following the suggestion in the text.    Let an inner product space, and let be a finite-dimensional subspace. Prove the following statements:     if and only if ;     if and only if .      We consider the problem of fitting a collection of data points with a quadratic curve of the form . Thus we are given some collection of points , and we seek parameters for which the graph of  best fits the points in some way.    Show, using linear algebra, that if we are given any three points , where the -coordinates are all distinct, then there is a unique choice of such that the corresponding quadratic function agrees precisely with the data. In other words, given just about any three points in the plane, there is a unique quadratic curve connecting them.    Now suppose we are given the four data points .    Use the least-squares method described in the lecture notes to come up with a quadratic function that best fits the data.    Graph the function you found, along with the points . (You may want to use technology.) Use your graph to explain precisely in what sense  best fits the data.        "
},
{
  "id": "d_orthogonal_complement",
  "level": "2",
  "url": "s_orthogonal_projection.html#d_orthogonal_complement",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Orthogonal complement.",
  "body": " Orthogonal complement  orthogonal complement (of a subspace)    the orthogonal complement of    . Let be an inner product vector space, and let be a subspace.  A vector is orthogonal to if it is orthogonal to every element of : , if for all .  The orthogonal complement of , denoted , is the set of all elements of orthogonal to : , .   "
},
{
  "id": "rm_computing_ortho_comp",
  "level": "2",
  "url": "s_orthogonal_projection.html#rm_computing_ortho_comp",
  "type": "Remark",
  "number": "4.3.2",
  "title": "Computing <span class=\"process-math\">\\(W^\\perp\\)<\/span>.",
  "body": " Computing   According to , to verify that a vector lies in , we must show that for all . The for all quantifier here can potentially make this an onerous task: there are in principle infinitely many to check! In the special case where has a finite spanning set, so that for some vectors , deciding whether reduces to checking whether for all . In other words, we have . The forward implication of this equivalence is clear: if is orthogonal to all elements of , then clearly it is orthogonal to each . The reverse implication is left as an exercise. (See .)  We illustrate this computational technique in the next examples.   "
},
{
  "id": "eg_ortho_comp_line",
  "level": "2",
  "url": "s_orthogonal_projection.html#eg_ortho_comp_line",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Consider the inner product space together with the dot product. Let : the line with equation . Compute and identify it as a familiar geometric object in .    According to , since , we have . Letting , we see that if and only if , if and only if . Thus is the line with equation . Observe that the lines and are indeed perpendicular to one another. (Graph them!)   "
},
{
  "id": "eg_ortho_comp_plane",
  "level": "2",
  "url": "s_orthogonal_projection.html#eg_ortho_comp_plane",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Consider the inner product space together with the dot product. Let be the plane with equation . Compute and identify this as a familiar geometric object in .    First, solving for , we see that . Next, according to we have . It follows that is the set of vectors satisfying the linear system Solving this system using Gaussian elimination we conclude that , which we recognize as the line passing through the origin with direction vector . This is none other than the normal line to the plane passing through the origin.   "
},
{
  "id": "th_orthogonal_complement",
  "level": "2",
  "url": "s_orthogonal_projection.html#th_orthogonal_complement",
  "type": "Theorem",
  "number": "4.3.5",
  "title": "Orthogonal complement.",
  "body": " Orthogonal complement   Let be an inner product vector space, and let be a subspace.   The orthogonal complement is a subspace of .    We have .    If then .       The proof is left as an exercise. (See .)   "
},
{
  "id": "ss_ortho_complement-8",
  "level": "2",
  "url": "s_orthogonal_projection.html#ss_ortho_complement-8",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Consider the inner product space with the dot product. Let , the line passing through the origin with direction vector . The orthogonal complement is the set of vectors orthogonal to . Using the definition of dot product, this is the set of solutions to the equation , which we recognize as the plane passing through the origin with normal vector . Note that we have as predicted in .   "
},
{
  "id": "th_row_null_comp",
  "level": "2",
  "url": "s_orthogonal_projection.html#th_row_null_comp",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "Fundamental spaces and orthogonal complements.",
  "body": " Fundamental spaces and orthogonal complements   Let be , and consider and as inner product spaces with respect to the dot product. Then:    , and thus .     , and thus .         Using the dot product method of matrix multiplication, we see that a vector if and only if for each row of , if and only if for all (see ), if and only if . This shows .  We can use to conclude . Alternatively, and more directly, the argument above shows that , proving . Next, by the rank-nullity theorem we have ; and by we have . It follows that . Since and , we conclude by that .    This follows from (1) and the fact that .     "
},
{
  "id": "ss_ortho_complement-11",
  "level": "2",
  "url": "s_orthogonal_projection.html#ss_ortho_complement-11",
  "type": "Example",
  "number": "4.3.8",
  "title": "",
  "body": "  Understanding the orthogonal relationship between and allows us in many cases to quickly determine\/visualize the one from the other. As an example, consider . Looking at the columns, we see easily that , which implies that . Since is an element of and , we must have , a line. By orthogonality, we conclude that , which is the plane with normal vector passing through the origin.   "
},
{
  "id": "th_orthogonal_projection",
  "level": "2",
  "url": "s_orthogonal_projection.html#th_orthogonal_projection",
  "type": "Theorem",
  "number": "4.3.9",
  "title": "Orthogonal projection theorem.",
  "body": " Orthogonal projection theorem   Let be an inner product space, and let be a finite-dimensional subspace.    Orthogonal decomposition  For all there are vectors and satisfying . Furthermore, the pair is unique in the following sense: if we have for some and , then and . Accordingly, the vector equation is called the orthogonal decomposition of with respect to ; and the vector is called the orthogonal projection of onto , denoted .    Orthogonal projection formula  Choose any orthogonal basis of . We have .    Distance to  The orthogonal projection is the element of that is closest to in the following sense: for all we have , or equivalently, . Accordingly, we define the distance  between and to be .      Let . We first show that the vectors and satisfy the conditions in . It is clear that the defined in is an element of , since it is a linear combination of the . Furthermore, we see easily that our choice satisfies . It remains only to show that . Since is a basis of , it suffices to show that for all . We compute: , as desired.  Having shown that a decomposition of of the form exists, we now show it is unique in the sense specified. Suppose we have , where and . Rearranging, we see that . We now claim that , in which case and , as desired. To see why the claim is true, consider the vector . Since , and , we have . On the other hand, since , and , we have . Thus . Since ( ), we conclude , as claimed.  At this point we have proved both (1) and (2), and it remains only to show that holds for all . To this end we compute: . This shows . Taking square-roots now proves the desired inequality.   "
},
{
  "id": "rm_ortho_proj_formula",
  "level": "2",
  "url": "s_orthogonal_projection.html#rm_ortho_proj_formula",
  "type": "Remark",
  "number": "4.3.10",
  "title": "Orthogonal projection formula.",
  "body": " Orthogonal projection formula   The formula is very convenient for computing an orthogonal projection , but mark well this important detail: to apply the formula we must first provide an orthogonal basis of . Thus unless one is provided, our first step in an orthogonal projection computation is to produce an orthogonal basis of . In some simple cases ( , when is 1- or 2-dimensional) this can be done by inspection. Otherwise, we use the Gram-Schmidt procedure.   "
},
{
  "id": "s_orthogonal_projection-4-4",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-4-4",
  "type": "Example",
  "number": "4.3.11",
  "title": "",
  "body": "  Consider the inner product space with the dot product. Let be the plane with equation . Compute for each below.                     According to our first step is to produce an orthogonal basis of . We do so by inspection. Since , we simply need to find two solutions to that are orthogonal to one another: , and . Thus we choose as our orthogonal basis, and our computations become a matter of applying , which in this case becomes . Now compute: . The last two computations might give you pause. Why do we have and ? The answer is that is already an element of , so it stands to reason that its projection is itself; and is already orthogonal to (it is a scalar multiple of ), so it stands to reason that its projection is equal to . See for a rigorous proof of these claims.   "
},
{
  "id": "fig_vid_orthoproj_functions",
  "level": "2",
  "url": "s_orthogonal_projection.html#fig_vid_orthoproj_functions",
  "type": "Figure",
  "number": "4.3.12",
  "title": "Video: orthogonal projection in function space",
  "body": " Video: orthogonal projection in function space  Video: orthogonal projection in function space   "
},
{
  "id": "cor_orthocomp_selfdual",
  "level": "2",
  "url": "s_orthogonal_projection.html#cor_orthocomp_selfdual",
  "type": "Corollary",
  "number": "4.3.13",
  "title": "",
  "body": "  Let be an inner product space, and let be a finite-dimensional subspace. Then .   "
},
{
  "id": "s_orthogonal_projection-4-7",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-4-7",
  "type": "Proof",
  "number": "4.3.2.1",
  "title": "",
  "body": " Clearly . For the other direction, take . Using the orthogonal projection theorem , we can write with and . We will show .  Since we have . Then we have   Thus . It follows that , and hence .  "
},
{
  "id": "cor_orthoproj_linear",
  "level": "2",
  "url": "s_orthogonal_projection.html#cor_orthoproj_linear",
  "type": "Corollary",
  "number": "4.3.14",
  "title": "Orthgonal projection is linear.",
  "body": " Orthgonal projection is linear   Let be an inner product space, and let be a finite-dimensional subspace.    The function is a linear transformation.    We have and .     "
},
{
  "id": "s_orthogonal_projection-4-9",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-4-9",
  "type": "Proof",
  "number": "4.3.2.2",
  "title": "",
  "body": "   We must show that for all and . We pick an orthogonal basis of and compute, using formula : .    By definition we have for all , and thus . For the other direction, if , then ( ), and thus . This proves .  The fact that follows from the equivalence stated in (b) of .    "
},
{
  "id": "eg_projection_line",
  "level": "2",
  "url": "s_orthogonal_projection.html#eg_projection_line",
  "type": "Example",
  "number": "4.3.15",
  "title": "Projection onto a line <span class=\"process-math\">\\(\\ell\\subseteq \\R^3\\)<\/span>.",
  "body": " Projection onto a line   Any line in passing through the origin can be described as , for some . The set is trivially an orthogonal basis of . Using , we have . It follows that , where .   "
},
{
  "id": "s_orthogonal_projection-5-4",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-5-4",
  "type": "Example",
  "number": "4.3.16",
  "title": "",
  "body": "  Consider the line .    Find the matrix such that .    Use your matrix formula from (a) to compute , , and .    Compute and .        Using the general formula described in , we have .    Now compute . The last two computations, and , should come as no surprise, since and . (See .)    We have . Again, the second computation should come as no surprise. Since is itself an element of , it stands to reason that its distance to is equal to zero.     "
},
{
  "id": "eg_projection_plane",
  "level": "2",
  "url": "s_orthogonal_projection.html#eg_projection_plane",
  "type": "Example",
  "number": "4.3.17",
  "title": "Projection onto planes in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Projection onto planes in   Any plane passing through the origin can be described as . Equivalently, is the set of all satisfying : , , where . Consider the orthogonal decomposition with respect to : . Since and , we see that this is also an orthogonal decomposition with respect to ! Using the matrix formula for from , we have . We conclude that , where .   "
},
{
  "id": "s_orthogonal_projection-5-6",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-5-6",
  "type": "Example",
  "number": "4.3.18",
  "title": "",
  "body": "  Consider the plane .    Find the matrix such that .    Use your matrix formula from (a) to compute and .    Compute and .        Using the general formula described in , we have .    Now compute .    We have .     "
},
{
  "id": "s_orthogonal_projection-6-2",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric polynomials of degree at most "
},
{
  "id": "s_orthogonal_projection-7-3",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-7-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least-squares "
},
{
  "id": "eg_least-squares",
  "level": "2",
  "url": "s_orthogonal_projection.html#eg_least-squares",
  "type": "Example",
  "number": "4.3.19",
  "title": "Best fitting line.",
  "body": " Best fitting line   Suppose we wish to find a line that best fits (in the least-square sense) the following data points: . Following the discussion above, we seek a solution to the matrix equation , where . Using Gaussian elimination, we see easily that this equation has no solution: equivalently, . Accordingly, we compute and find a solution to . Conveniently, the set is already an orthogonal basis of , allowing us to use : . Lastly, solving yields , and we conclude the line is the one that best fits the data in the least-squares sense.   "
},
{
  "id": "rm_least-squares",
  "level": "2",
  "url": "s_orthogonal_projection.html#rm_least-squares",
  "type": "Remark",
  "number": "4.3.20",
  "title": "Visualizing least-squares.",
  "body": " Visualizing least-squares    helps us give a graphical interpretation of how the line best approximates the points .  Least-squares visualization  Least-squares visualization   Let be the given -values of the points, and let be the orthogonal projection of onto . In the graph the values denote the vertical difference between the data points, and our fitting line. The projection makes the error as small as possible. This means if I draw any other line and compute the corresponding differences at the -values -3, 1 and 2, then    "
},
{
  "id": "th_leastsquares",
  "level": "2",
  "url": "s_orthogonal_projection.html#th_leastsquares",
  "type": "Theorem",
  "number": "4.3.22",
  "title": "Least-squares matrix formula.",
  "body": " Least-squares matrix formula   Given an matrix and column vector , a vector is a least-squares solution to if and only if . In other words, we can find a least-squares solution by solving the matrix equation directly.    Let , and let . The key observation is that a vector satisfies if and only if is an orthogonal decomposition of with respect to ; and this is true if and only if . Thus we have .   "
},
{
  "id": "s_orthogonal_projection-7-8",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection-7-8",
  "type": "Example",
  "number": "4.3.23",
  "title": "",
  "body": "  Consider again the matrix equation from . According to the least-squares solution can be found by solving the equation for . We compute and solve just as before.   "
},
{
  "id": "s_orthogonal_projection_ex-1-3",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-1-3",
  "type": "Exercise",
  "number": "4.3.6.1",
  "title": "",
  "body": "  with the dot product; ;   "
},
{
  "id": "s_orthogonal_projection_ex-1-4",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-1-4",
  "type": "Exercise",
  "number": "4.3.6.2",
  "title": "",
  "body": "  with dot product with weights ; ;   "
},
{
  "id": "s_orthogonal_projection_ex-1-5",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-1-5",
  "type": "Exercise",
  "number": "4.3.6.3",
  "title": "",
  "body": "  with the integral inner product; ; for all   "
},
{
  "id": "s_orthogonal_projection_ex-2",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-2",
  "type": "Exercise",
  "number": "4.3.6.4",
  "title": "",
  "body": " Let be the plane passing through the origin with normal vector . Find the orthogonal projection of onto with respect to the dot product.  "
},
{
  "id": "s_orthogonal_projection_ex-3",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-3",
  "type": "Exercise",
  "number": "4.3.6.5",
  "title": "",
  "body": " Recall that the trace of a square matrix is the sum of its diagonal entries. Let with inner product . (You may take for granted that this operation is indeed an inner product on .) Define .    Compute an orthogonal basis for . You can do this either by inspection (the space is manageable), or by starting with any basis of and applying the Gram-Schmidt procedure.    Compute , where .    "
},
{
  "id": "s_orthogonal_projection_ex-4",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-4",
  "type": "Exercise",
  "number": "4.3.6.6",
  "title": "",
  "body": " Let with the integral inner product, and let . Find the function of the form that best approximates  in terms of this inner product: find the the of this form that minimizes .   The set is orthogonal with respect to the given inner product.  "
},
{
  "id": "ex_ortho_comp",
  "level": "2",
  "url": "s_orthogonal_projection.html#ex_ortho_comp",
  "type": "Exercise",
  "number": "4.3.6.7",
  "title": "",
  "body": " Let be an inner product space, let , and let . Prove: . In other words, to check whether an element is in , it suffices to check that it is orthogonal to each element of its spanning set .  "
},
{
  "id": "s_orthogonal_projection_ex-6",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-6",
  "type": "Exercise",
  "number": "4.3.6.8",
  "title": "",
  "body": " Consider the inner product space together with the dot product. Let Provide orthogonal bases for and .  "
},
{
  "id": "ex_orthocomp_subspace",
  "level": "2",
  "url": "s_orthogonal_projection.html#ex_orthocomp_subspace",
  "type": "Exercise",
  "number": "4.3.6.9",
  "title": "",
  "body": " Prove statements (1) and (2) of .  "
},
{
  "id": "ex_orthocomp_dim",
  "level": "2",
  "url": "s_orthogonal_projection.html#ex_orthocomp_dim",
  "type": "Exercise",
  "number": "4.3.6.10",
  "title": "Dimension of <span class=\"process-math\">\\(W^\\perp\\)<\/span>.",
  "body": "Dimension of  Prove statement (3) of : if is an inner product space of dimension , and is a subspace of , then .   By there is an orthogonal basis of , and furthermore, we can extend to an orthogonal basis of all of . Show the form a basis for .  "
},
{
  "id": "s_orthogonal_projection_ex-9",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-9",
  "type": "Exercise",
  "number": "4.3.6.11",
  "title": "",
  "body": " Prove following the suggestion in the text.  "
},
{
  "id": "ex_orthoproj_props",
  "level": "2",
  "url": "s_orthogonal_projection.html#ex_orthoproj_props",
  "type": "Exercise",
  "number": "4.3.6.12",
  "title": "",
  "body": " Let an inner product space, and let be a finite-dimensional subspace. Prove the following statements:     if and only if ;     if and only if .    "
},
{
  "id": "s_orthogonal_projection_ex-11",
  "level": "2",
  "url": "s_orthogonal_projection.html#s_orthogonal_projection_ex-11",
  "type": "Exercise",
  "number": "4.3.6.13",
  "title": "",
  "body": " We consider the problem of fitting a collection of data points with a quadratic curve of the form . Thus we are given some collection of points , and we seek parameters for which the graph of  best fits the points in some way.    Show, using linear algebra, that if we are given any three points , where the -coordinates are all distinct, then there is a unique choice of such that the corresponding quadratic function agrees precisely with the data. In other words, given just about any three points in the plane, there is a unique quadratic curve connecting them.    Now suppose we are given the four data points .    Use the least-squares method described in the lecture notes to come up with a quadratic function that best fits the data.    Graph the function you found, along with the points . (You may want to use technology.) Use your graph to explain precisely in what sense  best fits the data.      "
},
{
  "id": "s_coordinatevectors",
  "level": "1",
  "url": "s_coordinatevectors.html",
  "type": "Section",
  "number": "5.1",
  "title": "Coordinate vectors",
  "body": " Coordinate vectors   Suppose is an -dimensional vector space. Once we choose a basis of , we know from that any can be expressed in a unique way as . Coordinate vectors turn this observation into a computational tool by exploiting the resulting one-to-one correspondence . We will use the correspondence in two distinct ways, as described below.   Given an -dimensional vector space and basis , the correspondence allow us to treat elements of the abstract space as if they were elements of , and to then make use of our wealth of computational procedures related to -tuples.    The correspondence is also useful when working in itself. Namely, there will be situations where it is convenient to represent vectors with a particular nonstandard basis , as opposed to the standard basis . In this setting the correspondence will be used as a change of coordinates technique.       Coordinate vectors  Before we can define coordinate vectors we need to define an ordered basis . As the name suggests this is nothing more than a basis along with a particular choice of ordering of its elements: first element, second element, . In other words, an ordered basis will be a sequence of vectors, as opposed to a set of vectors.   Ordered bases  ordered basis   Let be a finite-dimensional vector space. An ordered basis of is a sequence of distinct vectors whose underlying set is a basis of .      If is further given the structure of a (finite-dimensional) inner product space, then we say an ordered basis is orthogonal (resp., orthonormal) if its underlying set is orthogonal (resp. orthonormal).      A single (unordered) basis of an -dimensional vector space gives rise to different ordered bases: you have choices for the first element of the ordered basis, choices for the second element, .  For example the standard basis of gives rise to different ordered bases of : .  By a slight abuse of language we will use standard basis to describe both one of our standard unordered bases and the corresponding ordered basis obtained by choosing the implicit ordering of the set descriptions in . For example, and will both be called the standard basis of .     Coordinate vectors   Let be an ordered basis for the vector space . According to , for any there is a unique choice of scalars satisfying . We call the corresponding -tuple the coordinate vector of relative to the basis , and denote it : , .    To compute the coordinate vector of an element relative to a given ordered basis we must find the scalars that satisfy the vector equation . Usually this is accomplished by reducing this vector equation to an equivalent system of linear equations in the unknowns and solving using the method of Gaussian elimination. However, there are some cases when we can easily produce the by inspection: for example when computing with standard bases as the first example below illustrates.  Furthermore, if the given basis happens to be orthogonal (or orthonormal) with respect to some inner product, provides an inner product formula for computing the .   Standard bases   Computing coordinate vectors relative to one of our standard bases for , , or amounts to just listing the coefficients or entries used to specify the given vector. The examples below serve to illustrate the general method in this setting.    Let and . For any we have , since .    Let and . For any we have since .       Reorderings of standard bases   If we choose an alternate ordering of one of the standard bases, the entries of the coordinate vector are reordered accordingly, as illustrated by the examples below.    Let and . Given we have , since .    Let and . Given we have , since .       Nonstandard bases   For a nonstandard ordered basis, we compute coordinate vectors by solving a relevant system of linear equations, as the examples below illustrate.    Let , , and . Compute . More generally, compute for an arbitrary .    Let , , and . Compute . More generally, compute for an arbitrary element .        To compute we must find the unique pair satisfying . By inspection, we see that . We conclude that . More generally, to compute for an arbitrary , we must find the pair satisfying , or equivalently . The usual techniques yield the unique solution , and thus for .    To compute we must find the unique triple satisfying . The equivalent linear system once we combine like terms and equate coefficients is . The unique solution to this system is . We conclude . The same reasoning shows that more generally, given polynomial , we have .       Video example: coordinate vectors   Video: coordinate vectors  Video: coordinate vectors     When is an orthogonal basis with respect to some inner product , then by we have , and thus . We have thus proved the following theorem.   Coordinate vectors for orthogonal bases   Let be an inner product space, and suppose the ordered basis is orthogonal with respect to . For all we have .     Orthogonal bases   Let and . Find a general formula for . Note: is orthogonal with respect to the weighted dot product .    Applying to and the dot product with weights , for any we compute . Let's check our formula with . The formula yields , and indeed we see that .      Coordinate vector transformation  The next theorem is the key to understanding the tremendous computational value of coordinate vectors. Here we treat the coordinate vector operation as a function . Not surprisingly, this turns out to be a linear transformation, which we call a coordinate vector transformation . Furthermore, the correspondence is a one-to-one correspondence between and , allowing us to identify the vectors with -tuples in . In the language of , these two facts taken together mean that the coordinate vector transformation is an isomorphism between and . Practically speaking, this means any question regarding the vector space structure of can be translated to an equivalent question about the vector space . As a result, given any exotic vector space of finite dimension, once we choose an ordered basis of , questions about can be answered by taking coordinate vectors with respect to and answering the corresponding question in the more familiar setting of , where we have a wealth of computational procedures at our disposal. We memorialize this principle as a mantra.   Coordinate vector mantra   Coordinate vectors allow us to treat any -dimensional vector space as if it were .     Coordinate vector transformation   Let be an ordered basis for the vector space .   The function defined as is a linear transformation. We call the coordinate vector transformation with respect to .    We have if and only if : , is injective .    For all , there is with : , is surjective .    Given a subset , let . We have the following equivalences:    if and only if ;     is linearly independent if and only if is linearly independent.             Suppose . By definition this means . It follows that , and hence . This proves is linear.    Clearly, if , then . If , then by definition of we must have .    Given any , we have , where . This proves .    We have .  Similarly, we have . From this equivalence we see that there is a nontrivial linear combination of yielding if and only if there is a nontrivial linear combination of yielding . In other words, is linearly independent if and only if is linearly independent.       Statements (2) and (3) of tell us that the coordinate transformation is injective (or one-to-one) and surjective (or onto), respectively. (See ).    As an illustration of the coordinate vector mantra , we describe a general method of contracting and extending subsets of a general finite-dimensional vector space to bases. The method translates the problem into using the coordinate transformation, applies the relevant algorithm available to us for subsets of , and then lifts the results back to using the coordinate transformation again.   Contracting and extending to bases in general spaces   Let be a vector space of dimension , and let .    Contracting to a basis  Let . To contract to a basis , proceed as follows.    Pick any ordered basis of and let .    Use the relevant procedure of to contract to a basis of .    The set is a basis for .      Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.    Pick any ordered basis of and let .    Use the relevant procedure of to extend to a basis of .    By (3) of , for all there are vectors satisfying . The set is a basis of containing .          The set is a subset of the space . Let . Contract to a basis of and determine whether .    Choose an ordered basis of and use the coordinate vector map to translate to a question about subspaces of . Answer this question and translate back to .    Let be the standard basis of . Apply to the elements of the given to get a corresponding set : . Apply the column space procedure of to contract to a basis of . This produces the subset Translating back to , we conclude that the corresponding set is a basis for . We conclude that .  Lastly the space of all trace-zero matrices is easily seen to have basis , and hence . Since , we conclude that .       Coordinate vectors in   In each exercise an ordered basis is given for . Compute for the given .     ,      ,      Coordinate vectors in    In each exercise an ordered basis is given for . Compute for the given polynomial .     ,      ,      Coordinate vectors: orthogonal basis   In each exercise an inner product space and orthogonal ordered basis is given. Use to compute the requested coordinate vector.     with dot product; . Compute .     with dot product with weights ; . Compute .     with integral inner product ; . Compute . (Yes, can indeed be written as a linear combination of . In this exercise you will discover what the corresponding identity is using inner products!)     Let where . You may take for granted that is an ordered basis of .    Compute .    Compute for an arbitrary matrix .      Let .    Use one of the techniques described in to contract to a basis of . To begin, choose your favorite ordered basis of .    Use your result in (a) to describe is as simple a manner as possible.      Let .    Use one of the techniques described in to contract to a basis of . To begin, choose your favorite ordered basis of .    Using your result in (a) to decide whether .      Let . Use one of the techniques described in to extend to a basis of .    Let .   Use one of the techniques described in to contract to a basis of .    Show that Use a dimension argument to make your life easier.      Orthonormal coordinate vectors  Let be an inner product space, and suppose is an orthonormal ordered basis of .    Prove that for all . In other words we can compute the inner product of vectors by computing the dot product of their coordinate vectors with respect to the orthonormal basis .    Prove that a set is orthogonal (resp. orthonormal) with respect to if and only if is orthogonal (resp. orthonormal) with respect to the dot product.      "
},
{
  "id": "d_ordered_basis",
  "level": "2",
  "url": "s_coordinatevectors.html#d_ordered_basis",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Ordered bases.",
  "body": " Ordered bases  ordered basis   Let be a finite-dimensional vector space. An ordered basis of is a sequence of distinct vectors whose underlying set is a basis of .   "
},
{
  "id": "rm_orthogonal_ordered_basis",
  "level": "2",
  "url": "s_coordinatevectors.html#rm_orthogonal_ordered_basis",
  "type": "Remark",
  "number": "5.1.2",
  "title": "",
  "body": "  If is further given the structure of a (finite-dimensional) inner product space, then we say an ordered basis is orthogonal (resp., orthonormal) if its underlying set is orthogonal (resp. orthonormal).   "
},
{
  "id": "ss_coordinate_vectors-5",
  "level": "2",
  "url": "s_coordinatevectors.html#ss_coordinate_vectors-5",
  "type": "Remark",
  "number": "5.1.3",
  "title": "",
  "body": "  A single (unordered) basis of an -dimensional vector space gives rise to different ordered bases: you have choices for the first element of the ordered basis, choices for the second element, .  For example the standard basis of gives rise to different ordered bases of : .  By a slight abuse of language we will use standard basis to describe both one of our standard unordered bases and the corresponding ordered basis obtained by choosing the implicit ordering of the set descriptions in . For example, and will both be called the standard basis of .   "
},
{
  "id": "d_coordinatevector",
  "level": "2",
  "url": "s_coordinatevectors.html#d_coordinatevector",
  "type": "Definition",
  "number": "5.1.4",
  "title": "Coordinate vectors.",
  "body": " Coordinate vectors   Let be an ordered basis for the vector space . According to , for any there is a unique choice of scalars satisfying . We call the corresponding -tuple the coordinate vector of relative to the basis , and denote it : , .   "
},
{
  "id": "eg_coordinatevector_standard",
  "level": "2",
  "url": "s_coordinatevectors.html#eg_coordinatevector_standard",
  "type": "Example",
  "number": "5.1.5",
  "title": "Standard bases.",
  "body": " Standard bases   Computing coordinate vectors relative to one of our standard bases for , , or amounts to just listing the coefficients or entries used to specify the given vector. The examples below serve to illustrate the general method in this setting.    Let and . For any we have , since .    Let and . For any we have since .     "
},
{
  "id": "ss_coordinate_vectors-10",
  "level": "2",
  "url": "s_coordinatevectors.html#ss_coordinate_vectors-10",
  "type": "Example",
  "number": "5.1.6",
  "title": "Reorderings of standard bases.",
  "body": " Reorderings of standard bases   If we choose an alternate ordering of one of the standard bases, the entries of the coordinate vector are reordered accordingly, as illustrated by the examples below.    Let and . Given we have , since .    Let and . Given we have , since .     "
},
{
  "id": "ss_coordinate_vectors-11",
  "level": "2",
  "url": "s_coordinatevectors.html#ss_coordinate_vectors-11",
  "type": "Example",
  "number": "5.1.7",
  "title": "Nonstandard bases.",
  "body": " Nonstandard bases   For a nonstandard ordered basis, we compute coordinate vectors by solving a relevant system of linear equations, as the examples below illustrate.    Let , , and . Compute . More generally, compute for an arbitrary .    Let , , and . Compute . More generally, compute for an arbitrary element .        To compute we must find the unique pair satisfying . By inspection, we see that . We conclude that . More generally, to compute for an arbitrary , we must find the pair satisfying , or equivalently . The usual techniques yield the unique solution , and thus for .    To compute we must find the unique triple satisfying . The equivalent linear system once we combine like terms and equate coefficients is . The unique solution to this system is . We conclude . The same reasoning shows that more generally, given polynomial , we have .     "
},
{
  "id": "fig_vid_coordvecs",
  "level": "2",
  "url": "s_coordinatevectors.html#fig_vid_coordvecs",
  "type": "Figure",
  "number": "5.1.8",
  "title": "Video: coordinate vectors",
  "body": " Video: coordinate vectors  Video: coordinate vectors   "
},
{
  "id": "th_coordinates_orthogonal",
  "level": "2",
  "url": "s_coordinatevectors.html#th_coordinates_orthogonal",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "Coordinate vectors for orthogonal bases.",
  "body": " Coordinate vectors for orthogonal bases   Let be an inner product space, and suppose the ordered basis is orthogonal with respect to . For all we have .   "
},
{
  "id": "ss_coordinate_vectors-15",
  "level": "2",
  "url": "s_coordinatevectors.html#ss_coordinate_vectors-15",
  "type": "Example",
  "number": "5.1.10",
  "title": "Orthogonal bases.",
  "body": " Orthogonal bases   Let and . Find a general formula for . Note: is orthogonal with respect to the weighted dot product .    Applying to and the dot product with weights , for any we compute . Let's check our formula with . The formula yields , and indeed we see that .   "
},
{
  "id": "mantra_coordinate_vectors",
  "level": "2",
  "url": "s_coordinatevectors.html#mantra_coordinate_vectors",
  "type": "Mantra",
  "number": "5.1.11",
  "title": "Coordinate vector mantra.",
  "body": " Coordinate vector mantra   Coordinate vectors allow us to treat any -dimensional vector space as if it were .   "
},
{
  "id": "th_coordinates",
  "level": "2",
  "url": "s_coordinatevectors.html#th_coordinates",
  "type": "Theorem",
  "number": "5.1.12",
  "title": "Coordinate vector transformation.",
  "body": " Coordinate vector transformation   Let be an ordered basis for the vector space .   The function defined as is a linear transformation. We call the coordinate vector transformation with respect to .    We have if and only if : , is injective .    For all , there is with : , is surjective .    Given a subset , let . We have the following equivalences:    if and only if ;     is linearly independent if and only if is linearly independent.         "
},
{
  "id": "ss_coordinate_transformation-5",
  "level": "2",
  "url": "s_coordinatevectors.html#ss_coordinate_transformation-5",
  "type": "Proof",
  "number": "5.1.2.1",
  "title": "",
  "body": "   Suppose . By definition this means . It follows that , and hence . This proves is linear.    Clearly, if , then . If , then by definition of we must have .    Given any , we have , where . This proves .    We have .  Similarly, we have . From this equivalence we see that there is a nontrivial linear combination of yielding if and only if there is a nontrivial linear combination of yielding . In other words, is linearly independent if and only if is linearly independent.    "
},
{
  "id": "rm_coordinate_transform_invertible",
  "level": "2",
  "url": "s_coordinatevectors.html#rm_coordinate_transform_invertible",
  "type": "Remark",
  "number": "5.1.13",
  "title": "",
  "body": "  Statements (2) and (3) of tell us that the coordinate transformation is injective (or one-to-one) and surjective (or onto), respectively. (See ).   "
},
{
  "id": "proc_contract_extend_general",
  "level": "2",
  "url": "s_coordinatevectors.html#proc_contract_extend_general",
  "type": "Procedure",
  "number": "5.1.14",
  "title": "Contracting and extending to bases in general spaces.",
  "body": " Contracting and extending to bases in general spaces   Let be a vector space of dimension , and let .    Contracting to a basis  Let . To contract to a basis , proceed as follows.    Pick any ordered basis of and let .    Use the relevant procedure of to contract to a basis of .    The set is a basis for .      Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.    Pick any ordered basis of and let .    Use the relevant procedure of to extend to a basis of .    By (3) of , for all there are vectors satisfying . The set is a basis of containing .       "
},
{
  "id": "ss_coordinate_transformation-9",
  "level": "2",
  "url": "s_coordinatevectors.html#ss_coordinate_transformation-9",
  "type": "Example",
  "number": "5.1.15",
  "title": "",
  "body": "  The set is a subset of the space . Let . Contract to a basis of and determine whether .    Choose an ordered basis of and use the coordinate vector map to translate to a question about subspaces of . Answer this question and translate back to .    Let be the standard basis of . Apply to the elements of the given to get a corresponding set : . Apply the column space procedure of to contract to a basis of . This produces the subset Translating back to , we conclude that the corresponding set is a basis for . We conclude that .  Lastly the space of all trace-zero matrices is easily seen to have basis , and hence . Since , we conclude that .   "
},
{
  "id": "s_coordinatevectors_ex-1-3",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-1-3",
  "type": "Exercise",
  "number": "5.1.3.1",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_coordinatevectors_ex-1-4",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-1-4",
  "type": "Exercise",
  "number": "5.1.3.2",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_coordinatevectors_ex-2-3",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-2-3",
  "type": "Exercise",
  "number": "5.1.3.3",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_coordinatevectors_ex-2-4",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-2-4",
  "type": "Exercise",
  "number": "5.1.3.4",
  "title": "",
  "body": "  ,   "
},
{
  "id": "s_coordinatevectors_ex-3-3",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-3-3",
  "type": "Exercise",
  "number": "5.1.3.5",
  "title": "",
  "body": "  with dot product; . Compute .  "
},
{
  "id": "s_coordinatevectors_ex-3-4",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-3-4",
  "type": "Exercise",
  "number": "5.1.3.6",
  "title": "",
  "body": "  with dot product with weights ; . Compute .  "
},
{
  "id": "s_coordinatevectors_ex-3-5",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-3-5",
  "type": "Exercise",
  "number": "5.1.3.7",
  "title": "",
  "body": "  with integral inner product ; . Compute . (Yes, can indeed be written as a linear combination of . In this exercise you will discover what the corresponding identity is using inner products!)  "
},
{
  "id": "s_coordinatevectors_ex-4",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-4",
  "type": "Exercise",
  "number": "5.1.3.8",
  "title": "",
  "body": " Let where . You may take for granted that is an ordered basis of .    Compute .    Compute for an arbitrary matrix .    "
},
{
  "id": "s_coordinatevectors_ex-5",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-5",
  "type": "Exercise",
  "number": "5.1.3.9",
  "title": "",
  "body": " Let .    Use one of the techniques described in to contract to a basis of . To begin, choose your favorite ordered basis of .    Use your result in (a) to describe is as simple a manner as possible.    "
},
{
  "id": "s_coordinatevectors_ex-6",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-6",
  "type": "Exercise",
  "number": "5.1.3.10",
  "title": "",
  "body": " Let .    Use one of the techniques described in to contract to a basis of . To begin, choose your favorite ordered basis of .    Using your result in (a) to decide whether .    "
},
{
  "id": "s_coordinatevectors_ex-7",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-7",
  "type": "Exercise",
  "number": "5.1.3.11",
  "title": "",
  "body": " Let . Use one of the techniques described in to extend to a basis of .  "
},
{
  "id": "s_coordinatevectors_ex-8",
  "level": "2",
  "url": "s_coordinatevectors.html#s_coordinatevectors_ex-8",
  "type": "Exercise",
  "number": "5.1.3.12",
  "title": "",
  "body": " Let .   Use one of the techniques described in to contract to a basis of .    Show that Use a dimension argument to make your life easier.     "
},
{
  "id": "ex_coordinates_orthonormal",
  "level": "2",
  "url": "s_coordinatevectors.html#ex_coordinates_orthonormal",
  "type": "Exercise",
  "number": "5.1.3.13",
  "title": "Orthonormal coordinate vectors.",
  "body": "Orthonormal coordinate vectors  Let be an inner product space, and suppose is an orthonormal ordered basis of .    Prove that for all . In other words we can compute the inner product of vectors by computing the dot product of their coordinate vectors with respect to the orthonormal basis .    Prove that a set is orthogonal (resp. orthonormal) with respect to if and only if is orthogonal (resp. orthonormal) with respect to the dot product.    "
},
{
  "id": "s_matrixreps",
  "level": "1",
  "url": "s_matrixreps.html",
  "type": "Section",
  "number": "5.2",
  "title": "Matrix representations of linear transformations",
  "body": " Matrix representations of linear transformations   We have seen how the coordinate vector map can be used to translate a linear algebraic question posed about a finite-dimensional vector space into a question about , where we have many computational algorithms at our disposal. We would like to extend this technique to linear transformations , where both and are finite-dimensional . The basic idea, to be fleshed out below, can be described as follows:   Pick a basis for , and a basis for .     Identify  with and with using the coordinate vector isomorphisms and , respectively.     Model the linear transformation with a certain linear transformation .   The matrix defining will be called the matrix representing with respect to our choice of basis for and for .  In what sense does  model  ? All the properties of we are interested in ( , , , , etc.) are perfectly mirrored by the matrix . As a result, this technique allows us to answer questions about the original essentially by applying a relevant matrix algorithm to .    Matrix representations of linear transformations  Given a linear transformation and choice of ordered bases and of and , respectively, we define the matrix representing column by column, using a familiar looking formula.   Matrix representations of linear transformations   Let and be vector spaces with ordered bases and , respectively. Given a linear transformation , the matrix representing with respect to and , is the matrix whose -th column is , considered as a column vector: , . In the special case where and we pick we write simply .      Consider the linear transformation defined as . Compute , where and are the standard bases for and , respectively.    We have and . Denote by the -th column of . We use to compute: . Thus .    The formula for should remind you of the formula from used for computing the standard matrix for a linear transformation : , the matrix such that for all . explicates this resemblance.   Standard matrix as a matrix representation   Let be a linear transformation, and let be its standard matrix: , satisfies for all . We have where and are the standard bases of and , respectively. In other words, the matrix representing with respect to the standard bases of and is none other than the standard matrix of .    According to the recipe in we have . Let and be the standard ordered bases of and , respectively. To see why , observe that for all the -th column of is and the -th column of is . That these are equal is a result of the fact that for all vectors we have : that is, the coordinate vector of a vector with respect to the standard basis is just itself. (See ).      Let be a linear transformation, and let be its standard matrix: , is the matrix satisfying for all . According to , the standard matrix is just one way of representing : namely, the representation with respect to the standard bases of and . This begs the question of whether a different choice of bases might give rise to a more convenient matrix representation of . The answer is yes, as we will see over the course of this chapter.      Define as .    Compute , where is the standard basis of .    Compute , where .        According to , since is the standard basis is the matrix such that : .    We have , where the last equality uses the fact that and , as you can verify yourself.    So we have and . Moral: different choices of bases yield different matrix representations.      Matrix representations as models  Before moving to more examples, we describe in what precise sense the matrix models the original linear transformation , and how we can use to answer questions about . The next theorem is key to understanding this.    Let be a linear transformation, where and , and let be ordered bases for and , respectively.   For all we have . As usual is treated here as an column vector.    Property defines : , if is an matrix satisfying for all , then .       Let .    By definition we have . Given any , we can write for some . Then , as desired.    Assume satisfies for all . Then in particular we have for all . Since is the -th element of , we have , the -th standard basis element of . Using the column method ( ), we see that where is the -th column of . Thus implies that the -th column of is equal to , the -th column of , for all . Since and have identical columns, we conclude that , as desired.       Uniqueness of   The uniqueness property described in (2) of provides an alternative way of computing that can be useful in certain situations: namely, simply provide an matrix that satisfies the defining property for all . Since there is only one such matrix, we must have in this case.    Let , , and be as in . The defining property of can be summarized by saying that the following diagram is commutative .   Commutative diagram for  Commutative diagram for       The diagram being commutative here means that starting with an element in the top left of the diagram, whether we travel to the bottom right of the diagram either by first applying and then applying ( go right, then down ), or else by first applying and then applying ( go down, then right ), we get the same result! (The bottom map should technically be labeled , where , but this would detract from the elegance of the diagram.)  Besides commutativity, the other import feature of is that the two vertical coordinate transformations identify the domain and codomain of with the familiar spaces and in a one-to-one manner. (Using the language of , these maps are isomorphisms.) These properties together allow us to translate any linear algebraic question about to an equivalent question about the matrix , as the following theorem indicates.   Computing with matrix representations   Let be linear, and let and be ordered bases of and , respectively. The matrix satisfies the following properties:     if and only if ;     if and only if ;     is a basis of if and only if is a basis of ;     is a basis of if and only if is a basis of ;     and .       Proof of (1)  We have .    Proof of (2)  We have . The last equivalence follows from the fact that .    Proof (3)-(4)  These now follow from (1)-(2) and statement (4) of .       Consider again , where we modeled the linear transformation as . Here and are the respective standard bases of and .  Let . By inspection, we see easily that . Using we can lift these spanning sets back to and to conclude that . What do these results tell us about the differential operation ?  From , we conclude that if and only if for some : , the polynomials whose derivative is equal to the zero function are precisely the constant polynomials.  From , we conclude that for all there is a such that . Using the language of calculus, this means that every polynomial of degree at most two has an antiderivative that itself is a polynomial of degree at most three.  Linear algebra here reveals some properties of the derivative, in the restricted context of polynomial functions, that calculus shows to be true more generally: namely, that a function satisfies if and only if is a constant function, and that every continuous function has an antiderivative.     Video example: matrix representations   Video: matrix representations  Video: matrix representations       Choice of basis  Given a linear transformation , different choice of bases for and give rise to different matrix representations of . This observation immediately gives rise to two questions: What is the precise relationship between two different matrix representations?; How should we choose our bases so that the resulting matrix representation is useful to us? We will take up these questions in earnest in the subsequent sections. For now we content ourselves with an illustrative, long-format example.   Two representations of orthogonal projection   Let be the plane passing through the origin with normal vector (with respect to the dot product): , . Consider the orthogonal projection transformation . With respect to the standard basis we know from that is just the matrix such that . Using the general formaul for projection onto a plane derived in , we conclude: . Now consider a nonstandard basis of constructed with an eye toward the geometry involved in the definition of this projection operator. Namely, we begin with an orthogonal basis of the plane and extend to an orthogonal basis of . The vectors clearly form an orthogonal basis of . To complete the basis we simply add the normal vector : . Let , and for all let be the -th column of . Using we compute . Thus . Wow, is way simpler! How can the two very different matrices and represent the same linear transformation? A useful way of thinking about this is to consider and as two matrix formulas for with respect to two different coordinate systems . This can be made precise by using the defining properties ( ) of and . For we have , where we have used the fact that for the standard basis  we have for any . Thus we can compute directly with as . For , on the other hand, property reads as . Formula indicates that we cannot use directly to compute . Rather, we must first compute the -coordinates of and then multiply by , at which point the -coordinates of are returned. In other words, describes the operation of with respect -coordinates of vectors in . As such, may be more useful to us in terms of computing directly. However, has the advantage of giving us a clear conceptual picture of projection. For example, we see directly that has nullity one and rank 2, and thus the same is true of . Furthermore, understanding that the columns of describe how acts on the basis , we see easily that acts as the identity on the 2-dimensional space spanned by the first two basis elements, and sends the subspace spanned by the third basis element to . In other words, neatly encodes the conceptual picture of as an operator that fixes the plane and sends everything in to .        Compute for each provided and choice of bases and of and . You may assume that the given is a linear transformation.     , ; ;      , ; ;      , where ;      Suppose is a linear transformation with matrix representation , where and . Use the defining property of to determine the formula for for an arbitrary polynomial .    Suppose is a linear transformation with matrix representation , where     Use the defining property of to compute and . (You will first need to compute and . )    Use (a) and the fact that is linear to give a general formula for in terms of and .      The function defined as is a linear transformation.    Compute , where is the standard basis of .    Use to lift bases of and back to bases for and .    Identify and as familiar subspaces of matrices.      The function defined by is a linear transformation.    Compute , where and are the standard bases of and .    Use to lift bases of and back to bases for and .      Let be the linear transformation defined as , and let , ,     Compute .    Compute .      Let be the linear transformation defined as , and let , , (the standard basis of ).    Compute .    Compute .      Let and be linear transformations, and suppose are ordered bases for , , and , respectively. Prove: .   Let and . Show that the matrix satisfies the defining property of : , for all .    "
},
{
  "id": "d_matrix_representation",
  "level": "2",
  "url": "s_matrixreps.html#d_matrix_representation",
  "type": "Definition",
  "number": "5.2.1",
  "title": "Matrix representations of linear transformations.",
  "body": " Matrix representations of linear transformations   Let and be vector spaces with ordered bases and , respectively. Given a linear transformation , the matrix representing with respect to and , is the matrix whose -th column is , considered as a column vector: , . In the special case where and we pick we write simply .   "
},
{
  "id": "eg_matrixreps_derivative",
  "level": "2",
  "url": "s_matrixreps.html#eg_matrixreps_derivative",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Consider the linear transformation defined as . Compute , where and are the standard bases for and , respectively.    We have and . Denote by the -th column of . We use to compute: . Thus .   "
},
{
  "id": "th_matrixreps_matrixtransforms",
  "level": "2",
  "url": "s_matrixreps.html#th_matrixreps_matrixtransforms",
  "type": "Theorem",
  "number": "5.2.3",
  "title": "Standard matrix as a matrix representation.",
  "body": " Standard matrix as a matrix representation   Let be a linear transformation, and let be its standard matrix: , satisfies for all . We have where and are the standard bases of and , respectively. In other words, the matrix representing with respect to the standard bases of and is none other than the standard matrix of .    According to the recipe in we have . Let and be the standard ordered bases of and , respectively. To see why , observe that for all the -th column of is and the -th column of is . That these are equal is a result of the fact that for all vectors we have : that is, the coordinate vector of a vector with respect to the standard basis is just itself. (See ).   "
},
{
  "id": "rm_better_basis",
  "level": "2",
  "url": "s_matrixreps.html#rm_better_basis",
  "type": "Remark",
  "number": "5.2.4",
  "title": "",
  "body": "  Let be a linear transformation, and let be its standard matrix: , is the matrix satisfying for all . According to , the standard matrix is just one way of representing : namely, the representation with respect to the standard bases of and . This begs the question of whether a different choice of bases might give rise to a more convenient matrix representation of . The answer is yes, as we will see over the course of this chapter.   "
},
{
  "id": "ss_matrix_reps-8",
  "level": "2",
  "url": "s_matrixreps.html#ss_matrix_reps-8",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": "  Define as .    Compute , where is the standard basis of .    Compute , where .        According to , since is the standard basis is the matrix such that : .    We have , where the last equality uses the fact that and , as you can verify yourself.    So we have and . Moral: different choices of bases yield different matrix representations.   "
},
{
  "id": "th_matrixrep",
  "level": "2",
  "url": "s_matrixreps.html#th_matrixrep",
  "type": "Theorem",
  "number": "5.2.6",
  "title": "",
  "body": "  Let be a linear transformation, where and , and let be ordered bases for and , respectively.   For all we have . As usual is treated here as an column vector.    Property defines : , if is an matrix satisfying for all , then .       Let .    By definition we have . Given any , we can write for some . Then , as desired.    Assume satisfies for all . Then in particular we have for all . Since is the -th element of , we have , the -th standard basis element of . Using the column method ( ), we see that where is the -th column of . Thus implies that the -th column of is equal to , the -th column of , for all . Since and have identical columns, we conclude that , as desired.     "
},
{
  "id": "rm_matrixreps_uniqueness",
  "level": "2",
  "url": "s_matrixreps.html#rm_matrixreps_uniqueness",
  "type": "Remark",
  "number": "5.2.7",
  "title": "Uniqueness of <span class=\"process-math\">\\([T]_B^{B'}\\)<\/span>.",
  "body": " Uniqueness of   The uniqueness property described in (2) of provides an alternative way of computing that can be useful in certain situations: namely, simply provide an matrix that satisfies the defining property for all . Since there is only one such matrix, we must have in this case.   "
},
{
  "id": "fig_comm_diag",
  "level": "2",
  "url": "s_matrixreps.html#fig_comm_diag",
  "type": "Figure",
  "number": "5.2.8",
  "title": "Commutative diagram for <span class=\"process-math\">\\([T]_B^{B'}\\)<\/span>",
  "body": " Commutative diagram for  Commutative diagram for     "
},
{
  "id": "th_matrixreps_model",
  "level": "2",
  "url": "s_matrixreps.html#th_matrixreps_model",
  "type": "Theorem",
  "number": "5.2.9",
  "title": "Computing with matrix representations.",
  "body": " Computing with matrix representations   Let be linear, and let and be ordered bases of and , respectively. The matrix satisfies the following properties:     if and only if ;     if and only if ;     is a basis of if and only if is a basis of ;     is a basis of if and only if is a basis of ;     and .       Proof of (1)  We have .    Proof of (2)  We have . The last equivalence follows from the fact that .    Proof (3)-(4)  These now follow from (1)-(2) and statement (4) of .    "
},
{
  "id": "eg_matrixreps_derivative_contd",
  "level": "2",
  "url": "s_matrixreps.html#eg_matrixreps_derivative_contd",
  "type": "Example",
  "number": "5.2.10",
  "title": "",
  "body": "  Consider again , where we modeled the linear transformation as . Here and are the respective standard bases of and .  Let . By inspection, we see easily that . Using we can lift these spanning sets back to and to conclude that . What do these results tell us about the differential operation ?  From , we conclude that if and only if for some : , the polynomials whose derivative is equal to the zero function are precisely the constant polynomials.  From , we conclude that for all there is a such that . Using the language of calculus, this means that every polynomial of degree at most two has an antiderivative that itself is a polynomial of degree at most three.  Linear algebra here reveals some properties of the derivative, in the restricted context of polynomial functions, that calculus shows to be true more generally: namely, that a function satisfies if and only if is a constant function, and that every continuous function has an antiderivative.   "
},
{
  "id": "fig_vid_matrix_reps",
  "level": "2",
  "url": "s_matrixreps.html#fig_vid_matrix_reps",
  "type": "Figure",
  "number": "5.2.11",
  "title": "Video: matrix representations",
  "body": " Video: matrix representations  Video: matrix representations   "
},
{
  "id": "eg_matrixreps_proj",
  "level": "2",
  "url": "s_matrixreps.html#eg_matrixreps_proj",
  "type": "Example",
  "number": "5.2.12",
  "title": "Two representations of orthogonal projection.",
  "body": " Two representations of orthogonal projection   Let be the plane passing through the origin with normal vector (with respect to the dot product): , . Consider the orthogonal projection transformation . With respect to the standard basis we know from that is just the matrix such that . Using the general formaul for projection onto a plane derived in , we conclude: . Now consider a nonstandard basis of constructed with an eye toward the geometry involved in the definition of this projection operator. Namely, we begin with an orthogonal basis of the plane and extend to an orthogonal basis of . The vectors clearly form an orthogonal basis of . To complete the basis we simply add the normal vector : . Let , and for all let be the -th column of . Using we compute . Thus . Wow, is way simpler! How can the two very different matrices and represent the same linear transformation? A useful way of thinking about this is to consider and as two matrix formulas for with respect to two different coordinate systems . This can be made precise by using the defining properties ( ) of and . For we have , where we have used the fact that for the standard basis  we have for any . Thus we can compute directly with as . For , on the other hand, property reads as . Formula indicates that we cannot use directly to compute . Rather, we must first compute the -coordinates of and then multiply by , at which point the -coordinates of are returned. In other words, describes the operation of with respect -coordinates of vectors in . As such, may be more useful to us in terms of computing directly. However, has the advantage of giving us a clear conceptual picture of projection. For example, we see directly that has nullity one and rank 2, and thus the same is true of . Furthermore, understanding that the columns of describe how acts on the basis , we see easily that acts as the identity on the 2-dimensional space spanned by the first two basis elements, and sends the subspace spanned by the third basis element to . In other words, neatly encodes the conceptual picture of as an operator that fixes the plane and sends everything in to .   "
},
{
  "id": "s_matrixreps_ex-1-2",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-1-2",
  "type": "Exercise",
  "number": "5.2.4.1",
  "title": "",
  "body": "  , ; ;   "
},
{
  "id": "s_matrixreps_ex-1-3",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-1-3",
  "type": "Exercise",
  "number": "5.2.4.2",
  "title": "",
  "body": "  , ; ;   "
},
{
  "id": "s_matrixreps_ex-1-4",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-1-4",
  "type": "Exercise",
  "number": "5.2.4.3",
  "title": "",
  "body": "  , where ;   "
},
{
  "id": "s_matrixreps_ex-2",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-2",
  "type": "Exercise",
  "number": "5.2.4.4",
  "title": "",
  "body": " Suppose is a linear transformation with matrix representation , where and . Use the defining property of to determine the formula for for an arbitrary polynomial .  "
},
{
  "id": "s_matrixreps_ex-3",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-3",
  "type": "Exercise",
  "number": "5.2.4.5",
  "title": "",
  "body": " Suppose is a linear transformation with matrix representation , where     Use the defining property of to compute and . (You will first need to compute and . )    Use (a) and the fact that is linear to give a general formula for in terms of and .    "
},
{
  "id": "s_matrixreps_ex-4",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-4",
  "type": "Exercise",
  "number": "5.2.4.6",
  "title": "",
  "body": " The function defined as is a linear transformation.    Compute , where is the standard basis of .    Use to lift bases of and back to bases for and .    Identify and as familiar subspaces of matrices.    "
},
{
  "id": "s_matrixreps_ex-5",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-5",
  "type": "Exercise",
  "number": "5.2.4.7",
  "title": "",
  "body": " The function defined by is a linear transformation.    Compute , where and are the standard bases of and .    Use to lift bases of and back to bases for and .    "
},
{
  "id": "s_matrixreps_ex-6",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-6",
  "type": "Exercise",
  "number": "5.2.4.8",
  "title": "",
  "body": " Let be the linear transformation defined as , and let , ,     Compute .    Compute .    "
},
{
  "id": "s_matrixreps_ex-7",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-7",
  "type": "Exercise",
  "number": "5.2.4.9",
  "title": "",
  "body": " Let be the linear transformation defined as , and let , , (the standard basis of ).    Compute .    Compute .    "
},
{
  "id": "s_matrixreps_ex-8",
  "level": "2",
  "url": "s_matrixreps.html#s_matrixreps_ex-8",
  "type": "Exercise",
  "number": "5.2.4.10",
  "title": "",
  "body": " Let and be linear transformations, and suppose are ordered bases for , , and , respectively. Prove: .   Let and . Show that the matrix satisfies the defining property of : , for all .  "
},
{
  "id": "s_changeofbasis",
  "level": "1",
  "url": "s_changeofbasis.html",
  "type": "Section",
  "number": "5.3",
  "title": "Change of basis",
  "body": " Change of basis   Coordinate vectors and matrix representations work in tandem to model vectors in an abstract vector space as column vectors in , and linear transformations as matrices. In both cases the model depends on our choice of basis. In this section we investigate how different basis choices affect these various models. Specifically, we consider the two questions below.   Given and two ordered bases and , what is the algebraic relation between and ?    Given and two ordered bases and , what is the relation between and ?     We will tackle each question in turn. Both answers rely on something called a change of basis matrix  .    Change of basis matrix  We define change of basis matrices via a column-by-column formula and motivate the definition retroactively with .   Change of basis matrix  change of basis matrix    change of basis matrix    Let and be two ordered bases for the vector space . The change of basis from to is the matrix defined as . In other words, the -th column of is obtained by computing the coordinate vector of the -th element of the original basis with respect to the new basis .     Change of basis for coordinate vectors   Let and be two ordered bases of the -dimensional vector space .   Recall that is the identity transformation ( ), defined as for all . We have .    For all we have . In other words, to convert the -coordinates of a vector to -coordinates, simply multiply on the left by the matrix .    Property defines uniquely: , if satisfies for all , then .         Let be the identity transformation: , for all . By the matrix is the unique matrix satisfying . Comparing the formulas for and we see directly that .    This follows from (1) and : .    By (2) of (the uniqueness claim), if satisfies for all , then . Since , we conclude .        Let , , . Observe that and are both orthogonal with resepct to the dot product. This will simplify your computations below.   Compute .    Let . Compute using .         Using , we have . Here the two coordinate vector computations and were done using .    First we easily compute , again using . Now use : . This should come as now surprise since .        Let , , .    Compute .    Compute using .        We have . The first two coordinate vector computations are nontrivial; you can verify for yourself that and . Alternatively, see ) for a neat trick for computing these coordinate vectors.    Since is the standard basis, we see easily that . Using we have . Verify for yourself that we do indeed have .       Taylor's formula and change of basis   Let be the standard basis of . Fix any constant , and let . It is easy to see that is also an ordered basis: a simple degree argument shows that the polynomials are linearly independent. It follows from Taylor's theorem (from single-variable calculus) that given any polynomial we have . We call this expression the expansion of about . In terms of coordinate vectors, this means that . In other words, Taylor's theorem provides a simple derivative formula for computing coordinate vectors with respect to the basis .    The following properties are often useful when computing various change of basis matrices.   Change of basis matrix properties   Let be ordered bases for the -dimensional vector space .    We have .    The matrix is invertible. In fact, we have     We have .        Let . By definition, the -th column of is . Since , we see that , and hence that , as claimed.    Let and . For any we have . It follows from (3) of that . Since by (1), we conclude that , and hence , as desired.    See .       , standard basis   Consider the special situation where , is the standard basis, and is some nonstandard basis. In this case we have . In other words, is the matrix whose -th column is just the -th element of . Thus, in this situation we can compute by placing the elements of as columns of a matrix, and then use (2) of to compute .      Let , , . Compute and .    According to we have . We then compute .     standard basis of  The observation from applies more generally when is the standard basis of the given vector space and is nonstandard. In this case computing will be easy as the coordinate vectors can be produced by inspection. See .     Let , (standard basis) and , where . Compute .    We have . Here the coordinate vectors are easily computed by inspection since is the standard basis.  It turns out that is not so difficult to compute in this case since the columns of satisfy . From this observation and it is easy to see that .     Video example: change of basis matrix   Video: change of basis matrix  Video: change of basis matrix       Working with orthonormal bases  Let and be ordered bases of an -dimensional inner product space . Not surprisingly, if one or more of and are orthornormal, our change of basis computations are simplified significantly. For example, if is orthonormal (or even orthogonal), the coordinate vector computations necessary to compute can be done using the inner product formula of . Furthermore, as we see below, if both and are orthonormal, then the columns of form an orthonormal basis of , in which case we can compute as . In other words, when and are orthonormal bases, the change of basis matrix is what we call an orthogonal matrix .   Orthogonal matrices   An invertible matrix is orthogonal if .      Since for an invertible matrix we have it follows immediately from that .      The matrix is orthogonal, as one easily checks by computing . Observe that the columns of form an orthonormal set with respect to the dot product, as do the rows. This is not a coincidence!     Orthogonal matrices   Let be an matrix. The following statements are equivalent.    The matrix is orthogonal.    The columns of form an orthonormal basis of with respect to the dot product.    The rows of form an orthonormal basis of with respect to the dot product.      Let and be the -th row and column of , respectively, for each . From we see that . We use here that rows of are the columns of , and the columns of are the rows of . From it follows easily that , and . This proves and . The result follows.      It is somewhat unfortunate that the property of being an orthogonal matrix is equivalent to your rows or columns forming an orthonormal basis. You ask: Why not simply call such matrices orthonormal matrices? My answer: tradition!     Orthonormal change of basis   Let be a finite dimensional inner product space, and suppose and are orthonormal bases of .    The matrices and are orthogonal.    We have .        Let . By definition, the columns of are the coordinate vectors , . By , these coordinate vectors form an orthonormal subset of ; since there are of them, they form an orthonormal basis. From it follows that is orthogonal. Lastly, from it follows that is also orthogonal.    Since is orthogonal, we have .        Consider the vector space with inner product . The ordered bases are both orthonormal with respect to this inner product. Compute and .    Since is orthonormal, we use to compute . Thus and by  .    Before connecting change of basis matrices with matrix representations of linear transformations, it is worth gathering some the different techniques for computing change of basis matrices we have discussed so far.   Change of basis computational tips   Let and be ordered bases of the vector space . Below you find a variety of techniques for computing and .    To compute directly, we must compute for each . This typically involves setting up and solving a linear system.    We have . This observation is useful in situations where (a) one change of basis matrix is easier to compute than the other and (b) computing inverse matrices is not too onerous.    If is the standard basis of , then is easy to compute. (See .)    If is orthogonal with respect to some inner product on , then we can easily compute for each using .    If and are both orthonormal bases of with respect to a common inner product, then both change of basis matrices are orthogonal and we have .        Change of basis for transformations  We now investigate how our choice of basis affects matrix representations of linear transformations. We will only consider the special case where and we are comparing matrix representations and for two different ordered bases of .   Change of basis for transformations   Let be finite-dimensional, let be linear, and let and be two ordered bases for . We have , or equivalently .    First observe that follows from and (2) of . Next, to prove , it suffices by (2) of to show that the matrix satisfies for all . To this end, given any , we have .     Getting change of basis formulas correct   It is easy to get the various details of the change of basis formula wrong. Here is a potential way to keep things organized in your mind.   We wish to relate and with an equation of the form , where the asterisks are to be replaced with change of basis matrices or their inverses. Think of the three matrices on the right-hand side of this equation as a sequence of three things done to coordinate vectors, reading from right to left.     takes as inputs -coordinates of vectors, and outputs -coordinates. Thus the same should be true for .    Since takes as inputs -coordinates, we must first convert from -coordinates to -coordinates. So we should have .    Since outputs -coordinates, we need to then convert back to -coordinates. Thus .    If desired you may replace with .         Let be defined as .   Let . Compute .    Let . Use the change of basis formula to compute .         We easily compute using our usual recipe.    We need to compute both change of basis matrices. Since is standard we compute essentially by inspection. It follows that . Lastly, using we have .      Consider the special case where : that is, when is a space of -tuples. We know from that for a unique matrix . Recall that is called the standard matrix of ( ), and satisfies for all . We often wish to compute , as it provides a convenient matrix formula for .  To compute  directly using the recipe in , we must compute for each of the standard basis elements . For many naturally occurring transformations , this is often not so easy to do. provides an indirect method in such cases.  According to we have : , the standard matrix of is none other than the matrix representing with respect to the standard basis. This connection allows us to compute by first computing for some more convenient basis , and then using the change of basis formula.   Computing the standard matrix using change of basis   Let be a linear transformation, and let be its standard matrix. To compute using the change of basis formula , proceed as follows.    Find a convenient basis for which the action of is easily understood.    Compute .    Let be the standard basis of . Recall that . Now compute using the change of basis formula as .       is a powerful technique for computing matrix formulas for many interesting geometric linear transformations of : , rotations, reflections, and orthogonal projections. Often the very definition of such transformations will suggest a more convenient nonstandard basis : one that reflects the geometry involved. The next example illustrates this nicely.   Orthogonal projection (again)   Consider together with the dot product. Let's derive (once again) a matrix formula for orthogonal projection , where . In other words we want to compute , where is the standard basis. We will do so indirectly by first computing with respect to a more convenient basis: namely, . This is the same basis from , and was selected deliberateley so that the first two vectors form a basis of , and the third vector spans the normal line to . As in we then easily compute . Now use to compute . Lo and behold, we've discovered our matrix formula for projection onto once again! (Compare with and .)     Video example: change of basis for transformations   Video: change of basis for transformations  Video: change of basis for transformations      Video example: change of basis and reflection   Video: computing reflection via change of basis  Video: computing reflection via change of basis       Similarity and the holy commutative tent of linear algebra   supplies an algebraic answer to the question: What is the relation between two matrix representations and ? Letting , equation becomes . Matrices satisfying such a relation are said to be similar .   similar matrices  Matrices are similar if there is an invertible matrix such that .    So any two matrix representations of a linear transformation are similar in the technical sense of . In fact, a converse of sorts is also true, as articulated in the theorem below.   Similarity and matrix representations   Two matrices and are similar if and only if there is a linear transformation and bases of satisfying and .    The discussion above shows that if and , then , where ; thus and are similar in this case.  Now assume that and are similar. By definition this means there is an invertible matrix such that . Define as the matrix transformation . According to we have where is the standard basis of . Next, letting be the ordered basis whose -th element is the -th column of , we have ( ), and hence , as desired.    We will see in that similar matrices are indeed similar algebraically speaking: , they share many of the same properties. provides the theoretical foundation to understand why this should be so: if and are similar, then they are two matrix representations of a common linear transformation ; their many shared properties are simply inherited from the single overlying linear transformation that they both represent! This circle of ideas is neatly encompassed by .   The holy commutative tent of linear algebra  The holy commutative tent of linear algebra. Here we have and .       Perhaps a little exegesis is in order here. Think of the map as a linear transformation up in abstract heaven; and think of the two matrices and as two earthly shadows of . OK, this gets at the holy bit somewhat, but why commutative? Each face of the tent is a commutative diagram, as we now explain.   Slanted sides of the tent  The commutativity of the two slanted sides of the tent is a consequence of : .    Triangular ends of the tent  Let , so that . The commutativity of the two triangular ends of the tent are consequences of : .    Base of tent  Lastly the commutativity of the base of the tent is a consequence of : or equivalently, .   In summary, the holy commutative tent conveys a close connection between the three maps . Since the base of the tent is commutative, and since the maps given by and are invertible, we can translate back and forth between the matrices and . Furthermore, since the two slanted sides of the tent are commutative, and since the coordinate vector transformations are invertible, we can translate up and down between our two matrix representations and and the overlying linear transformation . There is one true !   Similar matrices mantra   Similar matrices are but two shadows of a single overlying linear transformation.       Change of basis matrix   In each exercise a vector space is given along with two ordered bases and . Compute and .     , ,      , ,      , ,      , ,      Let , , , as in .    Compute directly using .    Compute using the change of basis matrix and .      Let , , , as in .    Compute directly using .    Compute using the change of basis matrix and .      Let be the standard basis of . Find the ordered basis for which the change of basis matrix is given by .    Let be the standard basis of . Find the ordered basis for which the change of basis matrix is given by .    Orthonormal change of basis   In each exercise an inner product space is given along with two orthonormal ordered bases and . Compute and . Use to reduce your workload.     with the dot product, ,      with the dot product, ,      Suppose and are two bases for the space related by the change of basis matrix .   Let . Compute and .    Let . Compute and .       Let , , and be three ordered bases of the vector space .    Show that . To do so, set and and show that the matrix satisfies the defining property of : , for all .    Using (a), show that .      Change of basis methods   In each exercise a vector space is given along with two ordered bases and .    Compute directly using     Let be the standard basis for . Compute using formula from .       , ,      , ,     Determinant of orthogonal matrices  Prove: if , then .    Let be an orthogonal matrix. Prove the following statements.    If , then is a rotation matrix: , there is a such that . See .    If , then is a reflection matrix: , there is a such that . See .   It is easy to verify that rotation and reflection matrices are orthogonal. We now know that conversely any orthogonal matrix is either a rotation or a reflection matrix.   Let be the linear transformation defined as . Let be the standard basis of , and let .    Compute .    Compute using .      Let be the linear transformation defined as . Let be the standard basis of , and let .    Compute .    Compute using .     Reflection in  Let be nonzero and define , the line passing through the origin with direction vector . Let be reflection through . (See .) In this exercise we will use a change of basis argument to find a formula for the standard matrix of : , the matrix satisfying for all . Our answer will be expressed in terms of and .    Pick an orthonormal basis with one vector pointing along and compute .    Let be the standard basis of . Use to compute . (Use to reduce your workload.)    How do we know that is the standard matrix of ?    Explain why your matrix , expressed in terms of and for agrees with the matrix formula provided in , which is expressed in terms of the angle that makes with the -axis.      "
},
{
  "id": "d_change_of_basis",
  "level": "2",
  "url": "s_changeofbasis.html#d_change_of_basis",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Change of basis matrix.",
  "body": " Change of basis matrix  change of basis matrix    change of basis matrix    Let and be two ordered bases for the vector space . The change of basis from to is the matrix defined as . In other words, the -th column of is obtained by computing the coordinate vector of the -th element of the original basis with respect to the new basis .   "
},
{
  "id": "th_change_of_basis_coordinates",
  "level": "2",
  "url": "s_changeofbasis.html#th_change_of_basis_coordinates",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "Change of basis for coordinate vectors.",
  "body": " Change of basis for coordinate vectors   Let and be two ordered bases of the -dimensional vector space .   Recall that is the identity transformation ( ), defined as for all . We have .    For all we have . In other words, to convert the -coordinates of a vector to -coordinates, simply multiply on the left by the matrix .    Property defines uniquely: , if satisfies for all , then .         Let be the identity transformation: , for all . By the matrix is the unique matrix satisfying . Comparing the formulas for and we see directly that .    This follows from (1) and : .    By (2) of (the uniqueness claim), if satisfies for all , then . Since , we conclude .     "
},
{
  "id": "ss_change_of_basis-5",
  "level": "2",
  "url": "s_changeofbasis.html#ss_change_of_basis-5",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Let , , . Observe that and are both orthogonal with resepct to the dot product. This will simplify your computations below.   Compute .    Let . Compute using .         Using , we have . Here the two coordinate vector computations and were done using .    First we easily compute , again using . Now use : . This should come as now surprise since .     "
},
{
  "id": "ss_change_of_basis-6",
  "level": "2",
  "url": "s_changeofbasis.html#ss_change_of_basis-6",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  Let , , .    Compute .    Compute using .        We have . The first two coordinate vector computations are nontrivial; you can verify for yourself that and . Alternatively, see ) for a neat trick for computing these coordinate vectors.    Since is the standard basis, we see easily that . Using we have . Verify for yourself that we do indeed have .     "
},
{
  "id": "rm_change_of_basis_taylors",
  "level": "2",
  "url": "s_changeofbasis.html#rm_change_of_basis_taylors",
  "type": "Remark",
  "number": "5.3.5",
  "title": "Taylor’s formula and change of basis.",
  "body": " Taylor's formula and change of basis   Let be the standard basis of . Fix any constant , and let . It is easy to see that is also an ordered basis: a simple degree argument shows that the polynomials are linearly independent. It follows from Taylor's theorem (from single-variable calculus) that given any polynomial we have . We call this expression the expansion of about . In terms of coordinate vectors, this means that . In other words, Taylor's theorem provides a simple derivative formula for computing coordinate vectors with respect to the basis .   "
},
{
  "id": "th_change_of_basis_properties",
  "level": "2",
  "url": "s_changeofbasis.html#th_change_of_basis_properties",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Change of basis matrix properties.",
  "body": " Change of basis matrix properties   Let be ordered bases for the -dimensional vector space .    We have .    The matrix is invertible. In fact, we have     We have .        Let . By definition, the -th column of is . Since , we see that , and hence that , as claimed.    Let and . For any we have . It follows from (3) of that . Since by (1), we conclude that , and hence , as desired.    See .     "
},
{
  "id": "eg_changebasis_standard",
  "level": "2",
  "url": "s_changeofbasis.html#eg_changebasis_standard",
  "type": "Example",
  "number": "5.3.7",
  "title": "<span class=\"process-math\">\\(V=\\R^n\\text{,}\\)<\/span> <span class=\"process-math\">\\(B\\)<\/span> standard basis.",
  "body": " , standard basis   Consider the special situation where , is the standard basis, and is some nonstandard basis. In this case we have . In other words, is the matrix whose -th column is just the -th element of . Thus, in this situation we can compute by placing the elements of as columns of a matrix, and then use (2) of to compute .   "
},
{
  "id": "ss_change_of_basis-11",
  "level": "2",
  "url": "s_changeofbasis.html#ss_change_of_basis-11",
  "type": "Example",
  "number": "5.3.8",
  "title": "",
  "body": "  Let , , . Compute and .    According to we have . We then compute .   "
},
{
  "id": "rm_changebasis_standard",
  "level": "2",
  "url": "s_changeofbasis.html#rm_changebasis_standard",
  "type": "Remark",
  "number": "5.3.9",
  "title": "<span class=\"process-math\">\\(B\\)<\/span> standard basis of <span class=\"process-math\">\\(V\\)<\/span>.",
  "body": " standard basis of  The observation from applies more generally when is the standard basis of the given vector space and is nonstandard. In this case computing will be easy as the coordinate vectors can be produced by inspection. See .  "
},
{
  "id": "eg_changebasis_standard_mat",
  "level": "2",
  "url": "s_changeofbasis.html#eg_changebasis_standard_mat",
  "type": "Example",
  "number": "5.3.10",
  "title": "",
  "body": "  Let , (standard basis) and , where . Compute .    We have . Here the coordinate vectors are easily computed by inspection since is the standard basis.  It turns out that is not so difficult to compute in this case since the columns of satisfy . From this observation and it is easy to see that .   "
},
{
  "id": "fig_vid_changeofbasis",
  "level": "2",
  "url": "s_changeofbasis.html#fig_vid_changeofbasis",
  "type": "Figure",
  "number": "5.3.11",
  "title": "Video: change of basis matrix",
  "body": " Video: change of basis matrix  Video: change of basis matrix   "
},
{
  "id": "d_orthogonal_matrix",
  "level": "2",
  "url": "s_changeofbasis.html#d_orthogonal_matrix",
  "type": "Definition",
  "number": "5.3.12",
  "title": "Orthogonal matrices.",
  "body": " Orthogonal matrices   An invertible matrix is orthogonal if .   "
},
{
  "id": "rm_orthogonal_matrices",
  "level": "2",
  "url": "s_changeofbasis.html#rm_orthogonal_matrices",
  "type": "Remark",
  "number": "5.3.13",
  "title": "",
  "body": "  Since for an invertible matrix we have it follows immediately from that .   "
},
{
  "id": "ss_changebasis_orthonormal-5",
  "level": "2",
  "url": "s_changeofbasis.html#ss_changebasis_orthonormal-5",
  "type": "Example",
  "number": "5.3.14",
  "title": "",
  "body": "  The matrix is orthogonal, as one easily checks by computing . Observe that the columns of form an orthonormal set with respect to the dot product, as do the rows. This is not a coincidence!   "
},
{
  "id": "th_orthogonal_matrices",
  "level": "2",
  "url": "s_changeofbasis.html#th_orthogonal_matrices",
  "type": "Theorem",
  "number": "5.3.15",
  "title": "Orthogonal matrices.",
  "body": " Orthogonal matrices   Let be an matrix. The following statements are equivalent.    The matrix is orthogonal.    The columns of form an orthonormal basis of with respect to the dot product.    The rows of form an orthonormal basis of with respect to the dot product.      Let and be the -th row and column of , respectively, for each . From we see that . We use here that rows of are the columns of , and the columns of are the rows of . From it follows easily that , and . This proves and . The result follows.   "
},
{
  "id": "rm_orthogonal_matrices_misnomer",
  "level": "2",
  "url": "s_changeofbasis.html#rm_orthogonal_matrices_misnomer",
  "type": "Remark",
  "number": "5.3.16",
  "title": "",
  "body": "  It is somewhat unfortunate that the property of being an orthogonal matrix is equivalent to your rows or columns forming an orthonormal basis. You ask: Why not simply call such matrices orthonormal matrices? My answer: tradition!   "
},
{
  "id": "th_changebasis_orthonormal",
  "level": "2",
  "url": "s_changeofbasis.html#th_changebasis_orthonormal",
  "type": "Theorem",
  "number": "5.3.17",
  "title": "Orthonormal change of basis.",
  "body": " Orthonormal change of basis   Let be a finite dimensional inner product space, and suppose and are orthonormal bases of .    The matrices and are orthogonal.    We have .        Let . By definition, the columns of are the coordinate vectors , . By , these coordinate vectors form an orthonormal subset of ; since there are of them, they form an orthonormal basis. From it follows that is orthogonal. Lastly, from it follows that is also orthogonal.    Since is orthogonal, we have .     "
},
{
  "id": "ss_changebasis_orthonormal-9",
  "level": "2",
  "url": "s_changeofbasis.html#ss_changebasis_orthonormal-9",
  "type": "Example",
  "number": "5.3.18",
  "title": "",
  "body": "  Consider the vector space with inner product . The ordered bases are both orthonormal with respect to this inner product. Compute and .    Since is orthonormal, we use to compute . Thus and by  .   "
},
{
  "id": "proc_changebasis_tips",
  "level": "2",
  "url": "s_changeofbasis.html#proc_changebasis_tips",
  "type": "Procedure",
  "number": "5.3.19",
  "title": "Change of basis computational tips.",
  "body": " Change of basis computational tips   Let and be ordered bases of the vector space . Below you find a variety of techniques for computing and .    To compute directly, we must compute for each . This typically involves setting up and solving a linear system.    We have . This observation is useful in situations where (a) one change of basis matrix is easier to compute than the other and (b) computing inverse matrices is not too onerous.    If is the standard basis of , then is easy to compute. (See .)    If is orthogonal with respect to some inner product on , then we can easily compute for each using .    If and are both orthonormal bases of with respect to a common inner product, then both change of basis matrices are orthogonal and we have .     "
},
{
  "id": "th_change_of_basis_transformations",
  "level": "2",
  "url": "s_changeofbasis.html#th_change_of_basis_transformations",
  "type": "Theorem",
  "number": "5.3.20",
  "title": "Change of basis for transformations.",
  "body": " Change of basis for transformations   Let be finite-dimensional, let be linear, and let and be two ordered bases for . We have , or equivalently .    First observe that follows from and (2) of . Next, to prove , it suffices by (2) of to show that the matrix satisfies for all . To this end, given any , we have .   "
},
{
  "id": "rm_change_of_basis_transformations",
  "level": "2",
  "url": "s_changeofbasis.html#rm_change_of_basis_transformations",
  "type": "Remark",
  "number": "5.3.21",
  "title": "Getting change of basis formulas correct.",
  "body": " Getting change of basis formulas correct   It is easy to get the various details of the change of basis formula wrong. Here is a potential way to keep things organized in your mind.   We wish to relate and with an equation of the form , where the asterisks are to be replaced with change of basis matrices or their inverses. Think of the three matrices on the right-hand side of this equation as a sequence of three things done to coordinate vectors, reading from right to left.     takes as inputs -coordinates of vectors, and outputs -coordinates. Thus the same should be true for .    Since takes as inputs -coordinates, we must first convert from -coordinates to -coordinates. So we should have .    Since outputs -coordinates, we need to then convert back to -coordinates. Thus .    If desired you may replace with .      "
},
{
  "id": "s_changeofbasis-5-5",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis-5-5",
  "type": "Example",
  "number": "5.3.22",
  "title": "",
  "body": "  Let be defined as .   Let . Compute .    Let . Use the change of basis formula to compute .         We easily compute using our usual recipe.    We need to compute both change of basis matrices. Since is standard we compute essentially by inspection. It follows that . Lastly, using we have .     "
},
{
  "id": "proc_standard_matrix_via_change_of_basis",
  "level": "2",
  "url": "s_changeofbasis.html#proc_standard_matrix_via_change_of_basis",
  "type": "Procedure",
  "number": "5.3.23",
  "title": "Computing the standard matrix using change of basis.",
  "body": " Computing the standard matrix using change of basis   Let be a linear transformation, and let be its standard matrix. To compute using the change of basis formula , proceed as follows.    Find a convenient basis for which the action of is easily understood.    Compute .    Let be the standard basis of . Recall that . Now compute using the change of basis formula as .     "
},
{
  "id": "s_changeofbasis-5-11",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis-5-11",
  "type": "Example",
  "number": "5.3.24",
  "title": "Orthogonal projection (again).",
  "body": " Orthogonal projection (again)   Consider together with the dot product. Let's derive (once again) a matrix formula for orthogonal projection , where . In other words we want to compute , where is the standard basis. We will do so indirectly by first computing with respect to a more convenient basis: namely, . This is the same basis from , and was selected deliberateley so that the first two vectors form a basis of , and the third vector spans the normal line to . As in we then easily compute . Now use to compute . Lo and behold, we've discovered our matrix formula for projection onto once again! (Compare with and .)   "
},
{
  "id": "fig_vid_changebasis_transform",
  "level": "2",
  "url": "s_changeofbasis.html#fig_vid_changebasis_transform",
  "type": "Figure",
  "number": "5.3.25",
  "title": "Video: change of basis for transformations",
  "body": " Video: change of basis for transformations  Video: change of basis for transformations   "
},
{
  "id": "fig_vid_changebasis_reflection",
  "level": "2",
  "url": "s_changeofbasis.html#fig_vid_changebasis_reflection",
  "type": "Figure",
  "number": "5.3.26",
  "title": "Video: computing reflection via change of basis",
  "body": " Video: computing reflection via change of basis  Video: computing reflection via change of basis   "
},
{
  "id": "d_similar",
  "level": "2",
  "url": "s_changeofbasis.html#d_similar",
  "type": "Definition",
  "number": "5.3.27",
  "title": "",
  "body": " similar matrices  Matrices are similar if there is an invertible matrix such that .   "
},
{
  "id": "th_similarity_matrixreps",
  "level": "2",
  "url": "s_changeofbasis.html#th_similarity_matrixreps",
  "type": "Theorem",
  "number": "5.3.28",
  "title": "Similarity and matrix representations.",
  "body": " Similarity and matrix representations   Two matrices and are similar if and only if there is a linear transformation and bases of satisfying and .    The discussion above shows that if and , then , where ; thus and are similar in this case.  Now assume that and are similar. By definition this means there is an invertible matrix such that . Define as the matrix transformation . According to we have where is the standard basis of . Next, letting be the ordered basis whose -th element is the -th column of , we have ( ), and hence , as desired.   "
},
{
  "id": "fig_comm_tent",
  "level": "2",
  "url": "s_changeofbasis.html#fig_comm_tent",
  "type": "Figure",
  "number": "5.3.29",
  "title": "The holy commutative tent of linear algebra",
  "body": " The holy commutative tent of linear algebra  The holy commutative tent of linear algebra. Here we have and .      "
},
{
  "id": "princ_similar_matrices",
  "level": "2",
  "url": "s_changeofbasis.html#princ_similar_matrices",
  "type": "Mantra",
  "number": "5.3.30",
  "title": "Similar matrices mantra.",
  "body": " Similar matrices mantra   Similar matrices are but two shadows of a single overlying linear transformation.   "
},
{
  "id": "ex_changebasis_twospace",
  "level": "2",
  "url": "s_changeofbasis.html#ex_changebasis_twospace",
  "type": "Exercise",
  "number": "5.3.5.1",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "s_changeofbasis_ex-1-4",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-1-4",
  "type": "Exercise",
  "number": "5.3.5.2",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "ex_changebasis_threespace",
  "level": "2",
  "url": "s_changeofbasis.html#ex_changebasis_threespace",
  "type": "Exercise",
  "number": "5.3.5.3",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "ex_changebasis_polynomials",
  "level": "2",
  "url": "s_changeofbasis.html#ex_changebasis_polynomials",
  "type": "Exercise",
  "number": "5.3.5.4",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "s_changeofbasis_ex-2",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-2",
  "type": "Exercise",
  "number": "5.3.5.5",
  "title": "",
  "body": " Let , , , as in .    Compute directly using .    Compute using the change of basis matrix and .    "
},
{
  "id": "s_changeofbasis_ex-3",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-3",
  "type": "Exercise",
  "number": "5.3.5.6",
  "title": "",
  "body": " Let , , , as in .    Compute directly using .    Compute using the change of basis matrix and .    "
},
{
  "id": "s_changeofbasis_ex-4",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-4",
  "type": "Exercise",
  "number": "5.3.5.7",
  "title": "",
  "body": " Let be the standard basis of . Find the ordered basis for which the change of basis matrix is given by .  "
},
{
  "id": "s_changeofbasis_ex-5",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-5",
  "type": "Exercise",
  "number": "5.3.5.8",
  "title": "",
  "body": " Let be the standard basis of . Find the ordered basis for which the change of basis matrix is given by .  "
},
{
  "id": "s_changeofbasis_ex-6-3",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-6-3",
  "type": "Exercise",
  "number": "5.3.5.9",
  "title": "",
  "body": "  with the dot product, ,   "
},
{
  "id": "s_changeofbasis_ex-6-4",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-6-4",
  "type": "Exercise",
  "number": "5.3.5.10",
  "title": "",
  "body": "  with the dot product, ,   "
},
{
  "id": "s_changeofbasis_ex-7",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-7",
  "type": "Exercise",
  "number": "5.3.5.11",
  "title": "",
  "body": " Suppose and are two bases for the space related by the change of basis matrix .   Let . Compute and .    Let . Compute and .     "
},
{
  "id": "ex_changebasis_three_bases",
  "level": "2",
  "url": "s_changeofbasis.html#ex_changebasis_three_bases",
  "type": "Exercise",
  "number": "5.3.5.12",
  "title": "",
  "body": " Let , , and be three ordered bases of the vector space .    Show that . To do so, set and and show that the matrix satisfies the defining property of : , for all .    Using (a), show that .    "
},
{
  "id": "s_changeofbasis_ex-9-3",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-9-3",
  "type": "Exercise",
  "number": "5.3.5.13",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "s_changeofbasis_ex-9-4",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-9-4",
  "type": "Exercise",
  "number": "5.3.5.14",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "ex_ortho_matrix_det",
  "level": "2",
  "url": "s_changeofbasis.html#ex_ortho_matrix_det",
  "type": "Exercise",
  "number": "5.3.5.15",
  "title": "Determinant of orthogonal matrices.",
  "body": "Determinant of orthogonal matrices  Prove: if , then .  "
},
{
  "id": "ex_ortho_matrix_rotation_reflection",
  "level": "2",
  "url": "s_changeofbasis.html#ex_ortho_matrix_rotation_reflection",
  "type": "Exercise",
  "number": "5.3.5.16",
  "title": "",
  "body": " Let be an orthogonal matrix. Prove the following statements.    If , then is a rotation matrix: , there is a such that . See .    If , then is a reflection matrix: , there is a such that . See .   It is easy to verify that rotation and reflection matrices are orthogonal. We now know that conversely any orthogonal matrix is either a rotation or a reflection matrix. "
},
{
  "id": "s_changeofbasis_ex-12",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-12",
  "type": "Exercise",
  "number": "5.3.5.17",
  "title": "",
  "body": " Let be the linear transformation defined as . Let be the standard basis of , and let .    Compute .    Compute using .    "
},
{
  "id": "s_changeofbasis_ex-13",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-13",
  "type": "Exercise",
  "number": "5.3.5.18",
  "title": "",
  "body": " Let be the linear transformation defined as . Let be the standard basis of , and let .    Compute .    Compute using .    "
},
{
  "id": "s_changeofbasis_ex-14",
  "level": "2",
  "url": "s_changeofbasis.html#s_changeofbasis_ex-14",
  "type": "Exercise",
  "number": "5.3.5.19",
  "title": "Reflection in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": "Reflection in  Let be nonzero and define , the line passing through the origin with direction vector . Let be reflection through . (See .) In this exercise we will use a change of basis argument to find a formula for the standard matrix of : , the matrix satisfying for all . Our answer will be expressed in terms of and .    Pick an orthonormal basis with one vector pointing along and compute .    Let be the standard basis of . Use to compute . (Use to reduce your workload.)    How do we know that is the standard matrix of ?    Explain why your matrix , expressed in terms of and for agrees with the matrix formula provided in , which is expressed in terms of the angle that makes with the -axis.    "
},
{
  "id": "s_eigenvectors",
  "level": "1",
  "url": "s_eigenvectors.html",
  "type": "Section",
  "number": "5.4",
  "title": "Eigenvectors and eigenvalues",
  "body": " Eigenvectors and eigenvalues   For the remaining sections of this chapter we will focus our investigation on linear transformations of the form : that is, transformations from a space into itself. When is finite-dimensional we can get a computational grip on by choosing an ordered basis and considering the matrix representation . As was illustrated in , different matrix representations and provide different insights into the nature of . Furthermore, we see from this example that if the action of on a chosen basis is simple to describe, then so too is the matrix representation of with respect to that basis.  A particularly agreeable situation arises when the basis satisfies for all . Using recipe we in this case that the corresponding matrix representation is diagonal! Diagonal matrices are about as simple as they come: they wear all of their properties (rank, nullity, invertibility, ) on their sleeve. If we hope to find a diagonal matrix representation of , then we should seek nonzero vectors satisfying for some : these are called eigenvectors of .    Eigenvectors  We further motivate the notion of an eigenvector with an illustrative example.    Consider where . It turns out that has a simple geometric description, though you would not have guessed this from . To reveal the geometry at play, we represent with respect to the orthogonal basis . Since , it follows that . The alternative representation given by reveals that is none other than reflection through the line ! How? Given any vector , we can write . Note that since and are orthogonal, we have and : , is the orthogonal decomposition of with respect to . Next, the representation tells us that and . It follows that . This is nothing more than a vector description of reflection through the line , as makes clear.     Reflection through   Reflection through   The success of our analysis in depended on finding the vectors and satisfying and . These are examples of eigenvectors, a concept we now officially define. For reasons that will become clear below, it is convenient to give separate definitions for linear transformations and matrices.   eigenvector  eigenvalue  Eigenvectors and eigenvalues    Eigenvectors of linear transformations  Let be a linear transformation. A nonzero vector satisfying for some is called an eigenvector of with eigenvalue  .    Eigenvectors of matrices  Let be an matrix. A nonzero satisfying for some is called an eigenvector of with eigenvalue  .  In both cases we will call an eigenvector with eigenvalue a -eigenvector for short.     You ask: Why use instead of or ? My answer: tradition!      Note well the important condition that an eigenvector must be nonzero. This means the zero vector by definition is not an eigenvector. If we allowed as an eigenvector, then the notion of the eigenvalue of an eigenvector would no longer be well-defined. This is because for any linear transformation we have which implies that for all .     Visualizing eigenvectors   Suppose is an eigenvector of the linear transformation . Letting , this means that : , maps an eigenvector to some other element of the one-dimensional subspace it defines. The special case where is easy to visualize and can help guide your intuition in the general case. (See ) Here the space is a line passing through origin. If is an eigenvector of a given linear transformation, then it must be mapped to some other vector pointing along : , or . It it is not an eigenvector, it gets mapped to a vector that does not point along .     Visualizing eigenvectors  Visualizing eigenvectors     Given a linear transformation we wish to (a) determine which values are eigenvalues of , and (b) find all the eigenvectors corresponding to a given eigenvalue . In the next examples we carry out such an investigation in an ad hoc manner.   Zero and identity transformations   Assume is nonzero. Recall that the zero transformation and identity transformation are defined as and for all . Find all eigenvalues and eigenvectors of and .    Since for all , we see that is the only eigenvalue of , and that all nonzero vectors of are -eigenvectors.  Similarly, since for all , we see that is the only eigenvalue of , and that all nonzero vectors of are -eigenvectors.     Reflection   Let be a line in passing through the origin, and define to be reflection through . (See .) Find all eigenvectors and eigenvalues of . Use a geometric argument.    Since the reflection operator fixes all elements of the line , we have for any . This shows that any nonzero element of is an eigenvectors of with eigenvalue .  Similarly, since is orthogonal to , reflection through takes any element and maps it to . Thus any nonzero element is an eigenvector of with eigenvalue .  We claim that these two cases exhaust all eigenvectors of . Indeed, in general a nonzero vector lies in the line , and its reflection lies in the line , which itself is the result of reflecting the line through . Now assume . We must have , since if ; but if it follows that the line and its reflection are equal. Clearly the only lines that are mapped to themselves by reflection through are and . Thus if is an eigenvector of it must lie in or .     Rotation   Fix and define to be rotation by . (See ) Find all eigenvectors and eigenvalues of . Use a geometric argument. Your answer will depend on the choice of .      Case:  Rotation by sends every vector to : , . It follows that is the only eigenvalue of and all nonzero elements of are eigenvectors with eigenvalue .    Case:  A similar argument to the one in shows that has no eigenvalues in this case. In more detail, a nonzero vector lies in the line , and its rotation lies in the line , which is the result of rotating by the angle . Since , it is clear that , and thus we cannot have for some .       Transposition   Consider the linear transformation . Determine all eigenvectors and eigenvalues of .    To be an eigenvector of a nonzero matrix must satisfy for some . Using the definition of , this means . We ask for which scalars does there exist a nonzero matrix satisfying . Let's consider some specific choices of .   Case:  In this case reads . Thus the eigenvectors of with eigenvalue are precisely the nonzero symmetric matrices: , .    Case:  For this choice of we seek nonzero matrices satisfying . These are precisely the nonzero skew-symmetric matrices: , .    Case:  Suppose satisfies . Equating the entries of these two matrices yields the system . The first two equations imply , using the fact that . The second two equations imply further that and . Since , . It follows that . We conclude that for , if , then . It follows that is not an eigenvalue of in this case.  In summation, our analysis shows that the transposition operator has exactly two eigenvalues, and , that the eigenvectors of with eigenvalue 1 are the nonzero symmetric matrices, and that the eigenvalues of with eigenvalue are the nonzero skew-symmetric matrices.    Differentiation   Let be defined as . Find all eigenvalues and eigenvectors of .    An eigenvector of is a nonzero function satisfying for some . By definition, this means for some . Thus is an eigenvalue of if and only if the differential equation has a nonzero solution. This is true for all ! Indeed for any the exponential function satisfies for all . Furthermore, any solution to is of the form for some . We conclude that (a) every is an eigenvalue of , and (b) for a given , the -eigenvectors of are precisely the functions of the form for some .      Finding eigenvalues and eigenvectors systematically  You can imagine that our ad hoc approach to finding eigenvalues and eigenvectors will break down once the linear transformation under consideration becomes complicated enough. As such it is vital to have a systematic method of finding all eigenvalues and eigenvectors of a linear transformation . The rest of this section is devoted to describing just such a method in the special case where . The first key observation is that we can answer the eigenvalues\/eigenvectors of by answering the same question about , where is an ordered basis of .   Eigenvectors of a linear transformation   Let be a linear transformation, let be an ordered basis of , and let .    A vector is an eigenvector of with eigenvalue if and only if is an eigenvector of with eigenvalue .    A value is an eigenvalue of if and only if it is an eigenvalue of . Thus and have the same set of eigenvalues.      We prove statement (1) as a chain of equivalences: . From (1) it follows directly that if is an an eigenvalue of , then it is an eigenvalue of . Conversely, if is an eigenvalue of , then there is a nonzero such that . Since is surjective ( , (3)), there is a vector such that . It follows from (1) that is a -eigenvector of , and thus that is an eigenvalue of .    Thanks to , we can boil down the eigenvector\/eigenvalue question for linear transformations of finite vector spaces to the analogous question about square matrices. The next theorem is the key result.   Eigenvectors of matrices   Let be an matrix. Fix .   The eigenvectors of with eigenvalue are the nonzero elements of the subspace .    As a consequence, is an eigenvalue of if and only if the matrix is singular ( , not invertible).       First observe that . From this equivalence it follows that . Since an eigenvector must be nonzero, we conclude that the -eigenvectors of are precisely the nonzero elements of . This proves statement (1). As a consequence, we see that has as an eigenvalue if and only if contains nonzero element elements: , if and only if . By the invertibility theorem this is true if and only if is not invertible.    According to , the eigenvectors of live in null spaces of matrices of the form . Accordingly, we call these spaces eigenspaces .   Eigenspaces   Let be an matrix. Given the -eigenspace of is the subspace defined as . Similarly, given a finite-dimensional vector space , a linear transformation , and , the -eigenspace of is the subspace defined as . In both cases the nonzero elements of are precisely the -eigenvectors.    We nearly have a complete method for computing the eigenvalues and eigenvectors of a square matrix . The last step is to identify the values of for which is not invertible. By the invertibility theorem , the matrix is not invertible if and only if . Thus the eigenvalues of are precisely the zeros of the function . We have proved the following corollary.   Eigenvalues of a matrix   Let be an matrix, let , and let . The following are equivalent:     is an eigenvalue of ;     is singular;     ;     .       Rotation (again)   Fix and let be rotation by . Recall that we have where . Now compute . We can use the quadratic formula to find the roots of : . When , this reduces to , confirming our conclusion in that is the only eigenvalue of the rotation by operator.  When and , then and we see that has no real roots. This confirms our conclusion in that such rotations have no eigenvalues.    Clearly the function deserves a name; we call it the characteristic polynomial of .   characteristic polynomial of a matrix  Characteristic polynomial of a matrix   Let be . The characteristic polynomial of is the function .    We will show below that is indeed a polynomial ( ). We postpone that discussion for now in order to present some examples of systematically computing eigenvalues and eigenvectors of matrices. Below you find the the complete description of this procedure.   Computing eigenspaces of a matrix   Let be an matrix. To find all eigenvalues of and compute a basis for the corresponding eigenspace , proceed as follows.    Compute . Let be the distinct real roots of . These are the eigenvalues of .    For each , the corresponding eigenspace is . Use the null space algorithm ( ) to compute a basis for .        Let .   Find all eigenvalue of .    Compute a basis for the eigenspace for each eigenvalue .       We compute . Thus the eigenvalues of are and .   Basis for  We have . Thus all -eigenvectors of are of the form , where .    Basis for  We have . Thus all -eigenvectors of are of the form , where .       Let .    Find all eigenvalues of .    Compute a basis for the eigenspace for each eigenvalue .      First compute . We see that the eigenvalues of are and . Now compute bases for their corresponding eigenspaces.   Basis of  We have . (We have skipped the Gaussian elimination steps involved in computing a basis for .)    Basis of  We have .  We conclude that the -eigenvectors of are the nonzero scalar multiples of , and that the -eigenvectors are all nonzero vectors of the form .    bring to light a connection between eigenvalues and invertibility that is worth highlighting.    Let be an matrix.   The -eigenspace of is equal to the null space of : , .    Zero is an eigenvalue of if and only if is not invertible.         We have Since if and only if , we conclude that , and hence .    Zero is an eigenvalue of if and only if is nontrivial, if and only if is nontrivial (by (1)), if and only if is not invertible.      Of course statement (2) of gives rise to yet another equivalent formulation of invertibility, and we include this in our ever-expanding invertibility theorem at the end of the section. We end our current discussion with an example illustrating how to compute the eigenvalues and eigenvectors of an arbitrary linear transformation of a finite-dimensional space. The idea is to first represent as a matrix with respect to some basis , apply to this matrix, and then lift the results back to .   Computing eigenspaces of a linear transformation   Let be a linear transformation of a finite-dimensional vector space . To compute the eigenvalues and eigenspaces of , proceed as follows.    Pick any ordered basis of and compute .    Apply to to compute bases of for each eigenvalue of .    For each eigenvalue , lift the basis of back up to using the coordinate transformation . The result is the basis for the -eigenspace of .       Transposition (again)   Let be defined as .    Find all eigenvalues of .    For each eigenvalue of compute a basis for .      Let , the standard ordered basis of . Compute : . Now apply to . From we conclude that and are the only eigenvalues of (and hence also ). Bases for the corresponding eigenspaces of are easily computed as . Now lift these up to bases of the eigenspaces and of : . It is easy to see that and are the subspaces of symmetric and skew-symmetric matrices, respectively. This is consistent with our analysis in .      Properties of the characteristic polynomial  We turn now to some very useful properties of the characteristic polynomial of a square matrix .   Characteristic polynomial   Let be an matrix.    The function is a monic polynomial of degree with real coefficients: , .    Over the complex numbers we can factor completely as where the are the (not necessarily distinct) roots of .    The eigenvalues of are precisely the real roots of : , the for which .    The coefficient in satisfies .    The coefficient in satisfies .    We conclude that .       Proof of (1)  We show the claim by induction on . The claim is easily seen to be true for all and matrices.  Fix and assume the claim is true for all matrices. Let . Expanding along the first row yields . (Recall that for any matrix the notation denotes the submatrix obtained by removing the -th row and -th column of .) First observe that , and thus is the characteristic polynomial of the matrix . By induction this is a monic polynomial of degree , and hence the first term of , is a monic polynomial of degree . Unfortunately, the remaining terms in the expansion do not lend themselves to a direct application of the induction hypothesis. However, we observe that the submatrices for all satisfy the following property: their first columns contains only scalars; the remaining columns contain exactly one entry of the form , while the rest of the entries are scalars. An easy (additional) induction argument shows that the determinant of such a matrix is polynomial of degree at most . (We leave this to you!) Since the first term of is a monic polynomial of degree and the rest of the terms are polynomials of degree at most , we conclude that itself is a monic polynomial of degree , as desired.    Proof of (2)-(3)  Statement (2) is the fundamental theorem of algebra: every polynomial with real coeofficients factors completely over the complex numbers. Statement (3) follows from .    Proof of (4)-(6)  Statement (6) clearly follows from statements (4) and (5). From (1) and (2) we conclude . Expanding out the right-hand side of this polynomial equality yields a polynomial of the form . Going back and equating coefficients between the left- and right-hand sides of yields . This proves half of statements (4) and (5). The fact that can be proved by induction using a modified version of the argument from the proof of (1) above. It remains to show that . We have .      Characteristic polynomial for matrices   Let be a matrix, and let . Using we have . This is a useful trick if you want to produce a matrix with a prescribed characteristic polynomial. For example, a matrix with characteristic polynomial has trace equal to 0 and determinant equal to . Such matrices are easy to construct: , .    An important consequence of is that an matrix can have at most distinct eigenvalues. Indeed, the eigenvalues of are the real roots appearing among the in the factorization . This proves the following corollary.    An matrix has at most distinct eigenvalues.    Lastly, as promised we end by incorporating statement (2) of into our invertibility theorem.   Invertibility theorem (final version)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .                             Any of the following equivalent conditions about the set of columns of hold: is a basis of ; spans ; is linearly independent.    Any of the following equivalent conditions about the set of rows of hold: is a basis of ; spans ; is linearly independent.     is not an eigenvalue of .          For each matrix below (a) compute the characteristic polynomial , (b) find all eigenvalues of the matrix, and (c) compute bases for eigenspaces of each eigenvalue.                   A=                         Matrices and below both have characteristic polynomial . For each matrix compute a basis of for each eigenvalue .                Let be an invertible matrix. Prove: is an eigenvalue of if and only if is an eigenvalue of .    Let be a square matrix.   Prove: and have the same characteristic polynomial.   First show that , then use a relevant property of the determinant.   Prove: and have the same eigenvalues.   Fix and let be the -eigenspaces of and , respectively. Prove: .   First show that , then use the rank-nullity theorem.    Let be an eigenvalue of the matrix .   Prove: is an eigenvalue of for any positive integer .    Assume that is invertible. Prove: is an eigenvector of for any integer .       Assume is a square matrix satisfying for some positive integer . Show that is the only eigenvalue of . Your argument must make clear that is in fact an eigenvalue of .    Assume is a square matrix satisfying     Prove: if is an eigenvalue of , then or .    Prove: if does not have as an eigenvalue, then .    Give an example of       "
},
{
  "id": "eg_reflection_eigenvectors",
  "level": "2",
  "url": "s_eigenvectors.html#eg_reflection_eigenvectors",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  Consider where . It turns out that has a simple geometric description, though you would not have guessed this from . To reveal the geometry at play, we represent with respect to the orthogonal basis . Since , it follows that . The alternative representation given by reveals that is none other than reflection through the line ! How? Given any vector , we can write . Note that since and are orthogonal, we have and : , is the orthogonal decomposition of with respect to . Next, the representation tells us that and . It follows that . This is nothing more than a vector description of reflection through the line , as makes clear.   "
},
{
  "id": "fig_reflection_eigenvectors",
  "level": "2",
  "url": "s_eigenvectors.html#fig_reflection_eigenvectors",
  "type": "Figure",
  "number": "5.4.2",
  "title": "Reflection through <span class=\"process-math\">\\(\\ell=\\Span\\{(1,2)\\}\\)<\/span>",
  "body": " Reflection through   Reflection through  "
},
{
  "id": "d_eigenvectors",
  "level": "2",
  "url": "s_eigenvectors.html#d_eigenvectors",
  "type": "Definition",
  "number": "5.4.3",
  "title": "Eigenvectors and eigenvalues.",
  "body": " eigenvector  eigenvalue  Eigenvectors and eigenvalues    Eigenvectors of linear transformations  Let be a linear transformation. A nonzero vector satisfying for some is called an eigenvector of with eigenvalue  .    Eigenvectors of matrices  Let be an matrix. A nonzero satisfying for some is called an eigenvector of with eigenvalue  .  In both cases we will call an eigenvector with eigenvalue a -eigenvector for short.  "
},
{
  "id": "rm_eigenvector_lambda",
  "level": "2",
  "url": "s_eigenvectors.html#rm_eigenvector_lambda",
  "type": "Remark",
  "number": "5.4.4",
  "title": "",
  "body": "  You ask: Why use instead of or ? My answer: tradition!   "
},
{
  "id": "rm_eigenvector_nonzero",
  "level": "2",
  "url": "s_eigenvectors.html#rm_eigenvector_nonzero",
  "type": "Remark",
  "number": "5.4.5",
  "title": "",
  "body": "  Note well the important condition that an eigenvector must be nonzero. This means the zero vector by definition is not an eigenvector. If we allowed as an eigenvector, then the notion of the eigenvalue of an eigenvector would no longer be well-defined. This is because for any linear transformation we have which implies that for all .   "
},
{
  "id": "rm_eigenvectors_visual",
  "level": "2",
  "url": "s_eigenvectors.html#rm_eigenvectors_visual",
  "type": "Remark",
  "number": "5.4.6",
  "title": "Visualizing eigenvectors.",
  "body": " Visualizing eigenvectors   Suppose is an eigenvector of the linear transformation . Letting , this means that : , maps an eigenvector to some other element of the one-dimensional subspace it defines. The special case where is easy to visualize and can help guide your intuition in the general case. (See ) Here the space is a line passing through origin. If is an eigenvector of a given linear transformation, then it must be mapped to some other vector pointing along : , or . It it is not an eigenvector, it gets mapped to a vector that does not point along .   "
},
{
  "id": "fig_eigenvector_visual",
  "level": "2",
  "url": "s_eigenvectors.html#fig_eigenvector_visual",
  "type": "Figure",
  "number": "5.4.7",
  "title": "Visualizing eigenvectors",
  "body": " Visualizing eigenvectors  Visualizing eigenvectors    "
},
{
  "id": "eg_eigenvectors_zerotransform",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenvectors_zerotransform",
  "type": "Example",
  "number": "5.4.8",
  "title": "Zero and identity transformations.",
  "body": " Zero and identity transformations   Assume is nonzero. Recall that the zero transformation and identity transformation are defined as and for all . Find all eigenvalues and eigenvectors of and .    Since for all , we see that is the only eigenvalue of , and that all nonzero vectors of are -eigenvectors.  Similarly, since for all , we see that is the only eigenvalue of , and that all nonzero vectors of are -eigenvectors.   "
},
{
  "id": "eg_eigenvector_adhoc_reflection",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenvector_adhoc_reflection",
  "type": "Example",
  "number": "5.4.9",
  "title": "Reflection.",
  "body": " Reflection   Let be a line in passing through the origin, and define to be reflection through . (See .) Find all eigenvectors and eigenvalues of . Use a geometric argument.    Since the reflection operator fixes all elements of the line , we have for any . This shows that any nonzero element of is an eigenvectors of with eigenvalue .  Similarly, since is orthogonal to , reflection through takes any element and maps it to . Thus any nonzero element is an eigenvector of with eigenvalue .  We claim that these two cases exhaust all eigenvectors of . Indeed, in general a nonzero vector lies in the line , and its reflection lies in the line , which itself is the result of reflecting the line through . Now assume . We must have , since if ; but if it follows that the line and its reflection are equal. Clearly the only lines that are mapped to themselves by reflection through are and . Thus if is an eigenvector of it must lie in or .   "
},
{
  "id": "eg_eigenvector_adhoc_rotation",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenvector_adhoc_rotation",
  "type": "Example",
  "number": "5.4.10",
  "title": "Rotation.",
  "body": " Rotation   Fix and define to be rotation by . (See ) Find all eigenvectors and eigenvalues of . Use a geometric argument. Your answer will depend on the choice of .      Case:  Rotation by sends every vector to : , . It follows that is the only eigenvalue of and all nonzero elements of are eigenvectors with eigenvalue .    Case:  A similar argument to the one in shows that has no eigenvalues in this case. In more detail, a nonzero vector lies in the line , and its rotation lies in the line , which is the result of rotating by the angle . Since , it is clear that , and thus we cannot have for some .     "
},
{
  "id": "eg_eigenvector_adhoc_transposition",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenvector_adhoc_transposition",
  "type": "Example",
  "number": "5.4.11",
  "title": "Transposition.",
  "body": " Transposition   Consider the linear transformation . Determine all eigenvectors and eigenvalues of .    To be an eigenvector of a nonzero matrix must satisfy for some . Using the definition of , this means . We ask for which scalars does there exist a nonzero matrix satisfying . Let's consider some specific choices of .   Case:  In this case reads . Thus the eigenvectors of with eigenvalue are precisely the nonzero symmetric matrices: , .    Case:  For this choice of we seek nonzero matrices satisfying . These are precisely the nonzero skew-symmetric matrices: , .    Case:  Suppose satisfies . Equating the entries of these two matrices yields the system . The first two equations imply , using the fact that . The second two equations imply further that and . Since , . It follows that . We conclude that for , if , then . It follows that is not an eigenvalue of in this case.  In summation, our analysis shows that the transposition operator has exactly two eigenvalues, and , that the eigenvectors of with eigenvalue 1 are the nonzero symmetric matrices, and that the eigenvalues of with eigenvalue are the nonzero skew-symmetric matrices.  "
},
{
  "id": "eg_eigenvectors_adhoc_derivative",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenvectors_adhoc_derivative",
  "type": "Example",
  "number": "5.4.12",
  "title": "Differentiation.",
  "body": " Differentiation   Let be defined as . Find all eigenvalues and eigenvectors of .    An eigenvector of is a nonzero function satisfying for some . By definition, this means for some . Thus is an eigenvalue of if and only if the differential equation has a nonzero solution. This is true for all ! Indeed for any the exponential function satisfies for all . Furthermore, any solution to is of the form for some . We conclude that (a) every is an eigenvalue of , and (b) for a given , the -eigenvectors of are precisely the functions of the form for some .   "
},
{
  "id": "th_eigenvectors_transformation_matrixrep",
  "level": "2",
  "url": "s_eigenvectors.html#th_eigenvectors_transformation_matrixrep",
  "type": "Theorem",
  "number": "5.4.13",
  "title": "Eigenvectors of a linear transformation.",
  "body": " Eigenvectors of a linear transformation   Let be a linear transformation, let be an ordered basis of , and let .    A vector is an eigenvector of with eigenvalue if and only if is an eigenvector of with eigenvalue .    A value is an eigenvalue of if and only if it is an eigenvalue of . Thus and have the same set of eigenvalues.      We prove statement (1) as a chain of equivalences: . From (1) it follows directly that if is an an eigenvalue of , then it is an eigenvalue of . Conversely, if is an eigenvalue of , then there is a nonzero such that . Since is surjective ( , (3)), there is a vector such that . It follows from (1) that is a -eigenvector of , and thus that is an eigenvalue of .   "
},
{
  "id": "th_eigenvectors_matrices",
  "level": "2",
  "url": "s_eigenvectors.html#th_eigenvectors_matrices",
  "type": "Theorem",
  "number": "5.4.14",
  "title": "Eigenvectors of matrices.",
  "body": " Eigenvectors of matrices   Let be an matrix. Fix .   The eigenvectors of with eigenvalue are the nonzero elements of the subspace .    As a consequence, is an eigenvalue of if and only if the matrix is singular ( , not invertible).       First observe that . From this equivalence it follows that . Since an eigenvector must be nonzero, we conclude that the -eigenvectors of are precisely the nonzero elements of . This proves statement (1). As a consequence, we see that has as an eigenvalue if and only if contains nonzero element elements: , if and only if . By the invertibility theorem this is true if and only if is not invertible.   "
},
{
  "id": "d_eigenspace",
  "level": "2",
  "url": "s_eigenvectors.html#d_eigenspace",
  "type": "Definition",
  "number": "5.4.15",
  "title": "Eigenspaces.",
  "body": " Eigenspaces   Let be an matrix. Given the -eigenspace of is the subspace defined as . Similarly, given a finite-dimensional vector space , a linear transformation , and , the -eigenspace of is the subspace defined as . In both cases the nonzero elements of are precisely the -eigenvectors.   "
},
{
  "id": "cor_eigenvalues",
  "level": "2",
  "url": "s_eigenvectors.html#cor_eigenvalues",
  "type": "Corollary",
  "number": "5.4.16",
  "title": "Eigenvalues of a matrix.",
  "body": " Eigenvalues of a matrix   Let be an matrix, let , and let . The following are equivalent:     is an eigenvalue of ;     is singular;     ;     .     "
},
{
  "id": "eg_eigenvalues_rotation",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenvalues_rotation",
  "type": "Example",
  "number": "5.4.17",
  "title": "Rotation (again).",
  "body": " Rotation (again)   Fix and let be rotation by . Recall that we have where . Now compute . We can use the quadratic formula to find the roots of : . When , this reduces to , confirming our conclusion in that is the only eigenvalue of the rotation by operator.  When and , then and we see that has no real roots. This confirms our conclusion in that such rotations have no eigenvalues.   "
},
{
  "id": "s_eigenvectors-4-12",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors-4-12",
  "type": "Definition",
  "number": "5.4.18",
  "title": "Characteristic polynomial of a matrix.",
  "body": " characteristic polynomial of a matrix  Characteristic polynomial of a matrix   Let be . The characteristic polynomial of is the function .   "
},
{
  "id": "proc_eigenspaces_matrix",
  "level": "2",
  "url": "s_eigenvectors.html#proc_eigenspaces_matrix",
  "type": "Procedure",
  "number": "5.4.19",
  "title": "Computing eigenspaces of a matrix.",
  "body": " Computing eigenspaces of a matrix   Let be an matrix. To find all eigenvalues of and compute a basis for the corresponding eigenspace , proceed as follows.    Compute . Let be the distinct real roots of . These are the eigenvalues of .    For each , the corresponding eigenspace is . Use the null space algorithm ( ) to compute a basis for .     "
},
{
  "id": "eg_eigenspaces_A",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenspaces_A",
  "type": "Example",
  "number": "5.4.20",
  "title": "",
  "body": "  Let .   Find all eigenvalue of .    Compute a basis for the eigenspace for each eigenvalue .       We compute . Thus the eigenvalues of are and .   Basis for  We have . Thus all -eigenvectors of are of the form , where .    Basis for  We have . Thus all -eigenvectors of are of the form , where .    "
},
{
  "id": "eg_eigenspaces_B",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenspaces_B",
  "type": "Example",
  "number": "5.4.21",
  "title": "",
  "body": "  Let .    Find all eigenvalues of .    Compute a basis for the eigenspace for each eigenvalue .      First compute . We see that the eigenvalues of are and . Now compute bases for their corresponding eigenspaces.   Basis of  We have . (We have skipped the Gaussian elimination steps involved in computing a basis for .)    Basis of  We have .  We conclude that the -eigenvectors of are the nonzero scalar multiples of , and that the -eigenvectors are all nonzero vectors of the form .  "
},
{
  "id": "cor_eigenvalue_invertible",
  "level": "2",
  "url": "s_eigenvectors.html#cor_eigenvalue_invertible",
  "type": "Corollary",
  "number": "5.4.22",
  "title": "",
  "body": "  Let be an matrix.   The -eigenspace of is equal to the null space of : , .    Zero is an eigenvalue of if and only if is not invertible.         We have Since if and only if , we conclude that , and hence .    Zero is an eigenvalue of if and only if is nontrivial, if and only if is nontrivial (by (1)), if and only if is not invertible.     "
},
{
  "id": "proc_eigenspaces_transformation",
  "level": "2",
  "url": "s_eigenvectors.html#proc_eigenspaces_transformation",
  "type": "Procedure",
  "number": "5.4.23",
  "title": "Computing eigenspaces of a linear transformation.",
  "body": " Computing eigenspaces of a linear transformation   Let be a linear transformation of a finite-dimensional vector space . To compute the eigenvalues and eigenspaces of , proceed as follows.    Pick any ordered basis of and compute .    Apply to to compute bases of for each eigenvalue of .    For each eigenvalue , lift the basis of back up to using the coordinate transformation . The result is the basis for the -eigenspace of .     "
},
{
  "id": "eg_eigenvector_systematic_transposition",
  "level": "2",
  "url": "s_eigenvectors.html#eg_eigenvector_systematic_transposition",
  "type": "Example",
  "number": "5.4.24",
  "title": "Transposition (again).",
  "body": " Transposition (again)   Let be defined as .    Find all eigenvalues of .    For each eigenvalue of compute a basis for .      Let , the standard ordered basis of . Compute : . Now apply to . From we conclude that and are the only eigenvalues of (and hence also ). Bases for the corresponding eigenspaces of are easily computed as . Now lift these up to bases of the eigenspaces and of : . It is easy to see that and are the subspaces of symmetric and skew-symmetric matrices, respectively. This is consistent with our analysis in .   "
},
{
  "id": "th_characteristic_polynomial",
  "level": "2",
  "url": "s_eigenvectors.html#th_characteristic_polynomial",
  "type": "Theorem",
  "number": "5.4.25",
  "title": "Characteristic polynomial.",
  "body": " Characteristic polynomial   Let be an matrix.    The function is a monic polynomial of degree with real coefficients: , .    Over the complex numbers we can factor completely as where the are the (not necessarily distinct) roots of .    The eigenvalues of are precisely the real roots of : , the for which .    The coefficient in satisfies .    The coefficient in satisfies .    We conclude that .       Proof of (1)  We show the claim by induction on . The claim is easily seen to be true for all and matrices.  Fix and assume the claim is true for all matrices. Let . Expanding along the first row yields . (Recall that for any matrix the notation denotes the submatrix obtained by removing the -th row and -th column of .) First observe that , and thus is the characteristic polynomial of the matrix . By induction this is a monic polynomial of degree , and hence the first term of , is a monic polynomial of degree . Unfortunately, the remaining terms in the expansion do not lend themselves to a direct application of the induction hypothesis. However, we observe that the submatrices for all satisfy the following property: their first columns contains only scalars; the remaining columns contain exactly one entry of the form , while the rest of the entries are scalars. An easy (additional) induction argument shows that the determinant of such a matrix is polynomial of degree at most . (We leave this to you!) Since the first term of is a monic polynomial of degree and the rest of the terms are polynomials of degree at most , we conclude that itself is a monic polynomial of degree , as desired.    Proof of (2)-(3)  Statement (2) is the fundamental theorem of algebra: every polynomial with real coeofficients factors completely over the complex numbers. Statement (3) follows from .    Proof of (4)-(6)  Statement (6) clearly follows from statements (4) and (5). From (1) and (2) we conclude . Expanding out the right-hand side of this polynomial equality yields a polynomial of the form . Going back and equating coefficients between the left- and right-hand sides of yields . This proves half of statements (4) and (5). The fact that can be proved by induction using a modified version of the argument from the proof of (1) above. It remains to show that . We have .    "
},
{
  "id": "rm_char_poly_trick",
  "level": "2",
  "url": "s_eigenvectors.html#rm_char_poly_trick",
  "type": "Remark",
  "number": "5.4.26",
  "title": "Characteristic polynomial for <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Characteristic polynomial for matrices   Let be a matrix, and let . Using we have . This is a useful trick if you want to produce a matrix with a prescribed characteristic polynomial. For example, a matrix with characteristic polynomial has trace equal to 0 and determinant equal to . Such matrices are easy to construct: , .   "
},
{
  "id": "cor_eigenvalues_atmost_n",
  "level": "2",
  "url": "s_eigenvectors.html#cor_eigenvalues_atmost_n",
  "type": "Corollary",
  "number": "5.4.27",
  "title": "",
  "body": "  An matrix has at most distinct eigenvalues.   "
},
{
  "id": "th_invertibility_penultimate",
  "level": "2",
  "url": "s_eigenvectors.html#th_invertibility_penultimate",
  "type": "Theorem",
  "number": "5.4.28",
  "title": "Invertibility theorem (final version).",
  "body": " Invertibility theorem (final version)   Let be an matrix. The following statements are equivalent.     is invertible.    The matrix equation has a unique solution for any column vector .    The matrix equation has a solution for any column vector .    The matrix equation has a unique solution : namely, .     is row equivalent to , the identity matrix.     is a product of elementary matrices.     .                             Any of the following equivalent conditions about the set of columns of hold: is a basis of ; spans ; is linearly independent.    Any of the following equivalent conditions about the set of rows of hold: is a basis of ; spans ; is linearly independent.     is not an eigenvalue of .     "
},
{
  "id": "s_eigenvectors_ex-1-2",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-2",
  "type": "Exercise",
  "number": "5.4.4.1",
  "title": "",
  "body": "    "
},
{
  "id": "s_eigenvectors_ex-1-3",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-3",
  "type": "Exercise",
  "number": "5.4.4.2",
  "title": "",
  "body": "    "
},
{
  "id": "s_eigenvectors_ex-1-4",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-4",
  "type": "Exercise",
  "number": "5.4.4.3",
  "title": "",
  "body": "    "
},
{
  "id": "s_eigenvectors_ex-1-5",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-5",
  "type": "Exercise",
  "number": "5.4.4.4",
  "title": "",
  "body": " A=   "
},
{
  "id": "s_eigenvectors_ex-1-6",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-6",
  "type": "Exercise",
  "number": "5.4.4.5",
  "title": "",
  "body": "    "
},
{
  "id": "s_eigenvectors_ex-1-7",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-7",
  "type": "Exercise",
  "number": "5.4.4.6",
  "title": "",
  "body": "    "
},
{
  "id": "s_eigenvectors_ex-1-8",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-8",
  "type": "Exercise",
  "number": "5.4.4.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_eigenvectors_ex-1-9",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-9",
  "type": "Exercise",
  "number": "5.4.4.8",
  "title": "",
  "body": "    "
},
{
  "id": "s_eigenvectors_ex-1-10",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-10",
  "type": "Exercise",
  "number": "5.4.4.9",
  "title": "",
  "body": " Matrices and below both have characteristic polynomial . For each matrix compute a basis of for each eigenvalue .              "
},
{
  "id": "s_eigenvectors_ex-1-11",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-11",
  "type": "Exercise",
  "number": "5.4.4.10",
  "title": "",
  "body": " Let be an invertible matrix. Prove: is an eigenvalue of if and only if is an eigenvalue of .  "
},
{
  "id": "s_eigenvectors_ex-1-12",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-12",
  "type": "Exercise",
  "number": "5.4.4.11",
  "title": "",
  "body": " Let be a square matrix.   Prove: and have the same characteristic polynomial.   First show that , then use a relevant property of the determinant.   Prove: and have the same eigenvalues.   Fix and let be the -eigenspaces of and , respectively. Prove: .   First show that , then use the rank-nullity theorem.  "
},
{
  "id": "s_eigenvectors_ex-1-13",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-13",
  "type": "Exercise",
  "number": "5.4.4.12",
  "title": "",
  "body": " Let be an eigenvalue of the matrix .   Prove: is an eigenvalue of for any positive integer .    Assume that is invertible. Prove: is an eigenvector of for any integer .     "
},
{
  "id": "s_eigenvectors_ex-1-14",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-14",
  "type": "Exercise",
  "number": "5.4.4.13",
  "title": "",
  "body": " Assume is a square matrix satisfying for some positive integer . Show that is the only eigenvalue of . Your argument must make clear that is in fact an eigenvalue of .  "
},
{
  "id": "s_eigenvectors_ex-1-15",
  "level": "2",
  "url": "s_eigenvectors.html#s_eigenvectors_ex-1-15",
  "type": "Exercise",
  "number": "5.4.4.14",
  "title": "",
  "body": " Assume is a square matrix satisfying     Prove: if is an eigenvalue of , then or .    Prove: if does not have as an eigenvalue, then .    Give an example of    "
},
{
  "id": "s_diagonalization",
  "level": "1",
  "url": "s_diagonalization.html",
  "type": "Section",
  "number": "5.5",
  "title": "Diagonalization",
  "body": " Diagonalization   Our treatment of eigenvectors in was motivated in part by the objective of finding particularly simple matrix representations of a linear transformation . The simplest situation we could hope for is that there is a choice of basis for which is diagonal. We say that the basis  diagonalizes the transformation in this case, and that is diagonalizable . In this section we develop theoretical and computational tools for determining whether a linear transformation is diagonalizable, and for finding a diagonalizing basis when is in fact diagonalizable.    Diagonalizable transformations   diagonalizable  diagonalizing basis  Diagonalizable   Let be a finite-dimensional vector space. A linear transformation is diagonalizable if there exists an ordered basis of for which is a diagonal matrix. In this case, we say the basis  diagonalizes  .  An matrix is diagonalizable if the matrix transformation is diagonalizable.    As was already laid out in a matrix representation is diagonal if the elements of are eigenvectors of . According to , the converse is also true.   Diagonalizabilty: basis of eigenvectors   Let be a linear transformation, and let be an ordered basis of .    The matrix is diagonal if and only if consists of eigenvectors of .    If is diagonal, then the -th diagonal entry of is the eigenvalue associated to the eigenvector .    The transformation is diagonalizable if and only if there is an ordered basis of consisting of eigenvectors of .      Let be an ordered basis of . The matrix will be diagonal if and only if for each the -th column of is of the form for some . By the -th column of is the coordinate vector . Thus is diagonal if and only if for all we have for some . Next, by definition of , we have . We conclude that is diagonal if and only if is an eigenvector of for all . Furthermore, when this is the case, we see that the -th diagonal entry of is the corresponding eigenvalue . This proves statements (1) and (2). Statement (3) follows from (1) and .    The phrase an ordered basis consisting of eigenvectors of is a bit of a mouthful. The definition below allows us to shorten this to simply an eigenbasis of .   eigenbasis  Eigenbasis   Let be a linear transformation. An ordered basis is an eigenbasis of if is an eigenvector of for all .      Let , where . We saw in that and are eigenvectors of with eigenvalues , respectively. It is clear that the two eigenvectors are linearly independent, and hence that is an eigenbasis of . It follows from that is diagonalizable, and that in fact , as one easily verifies.      Let be rotation by : , , where . As discussed in , has no eigenvectors whatsoever. It follows that there is no eigenbasis of , and hence that is not diagonalizable.      Let , where . As is easily computed, is the only eigenvalue of , and . It follows that any two eigenvectors and lie in the one-dimensional space , and hence are scalar multiples of one another. Thus we cannot find two linearly independent eigenvectors of . We conclude that does not have an eigenbasis, and hence is not diagonalizable.      Linear independence of eigenvectors  Roughly put, tells us that is diagonalizable if it has enough eigenvectors: more precisely, if we can find a large enough collection of linearly independent eigenvectors. So when exactly can we do this? Our first examples were deceptively simple in this regard due to their low-dimensional setting. For transformations of higher-dimensional spaces we need more theory, which we now develop. will serve as one of the key results for our purposes. It tells us that eigenvectors chosen from different eigenspaces are linearly independent.   Linear independence of eigenvectors   Let be a linear transformation, and let be a set of eigenvectors of satisfying . If the eigenvalues are distinct ( , for ), then is linearly independent.    We prove the result by contradiction. Suppose we can find a finite set of eigenvectors with distinct eigenvalues that is linearly dependent. It follows that we can find such a set of minimum cardinality . In other words, there is positive integer satisfying the following properties: (i) we can find a linearly dependent set of eigenvectors of with distinct eigenvalues; (ii) for all , any set of eigenvectors of with distinct eigenvalues is linearly independent That we can find a minimal in this sense is plausible enough, but we are secretly using the well-ordering principle of the integers here. .  Now assume is a set of minimal cardinality satisfying for all and for all . First observe that we must have : eigenvectors are nonzero by definition, and thus any set consisting of a single eigenvector is linearly independent. Next, since is linearly dependent we have , where for some . After reordering, we may assume without loss of generality that . Next we apply to both sides of : . From equation and the equation in we have , and hence . Since and , we have . Thus equation implies that the set is a linearly dependent set of eigenvectors of with distinct eigenvalues, contradicting the minimality of . This completes our proof by contradiction.     Diagonalizable if distinct eigenvalues   Let be a linear transformation, and suppose . If has distinct eigenvalues, then is diagonalizable.    Let be a set eigenvectors of with distinct eigenvalues. According to the set is linearly independent. Since it follows that is an eigenbasis for and hence is diagonalizable.      Let , where . The characteristic polynomial of is . Since has three distinct eigenvalues the linear transformation is diagonalizable. Indeed, any choice of eigenvectors with is guaranteed to be linearly independent, and hence gives rise to an eigenbasis of . For example the usual procedure allows us to easily find eigenvectors from the three eigenspaces. You can verify for yourself that these three vectors are indeed linearly independent.      Let be a linear transformation, . It cannot be stressed enough that having distinct eigenvalues is a sufficient , but not necessary condition for to be diagonalizable. In other words we have but . A good counterexample to keep in mind is , where is the identity matrix. The transformation is clearly diagonalizable since , where is the standard basis; and yet is the only eigenvalue of .     makes no assumption about the dimension of and can thus can be applied to linear transformations of infinite-dimensional spaces. The differential operator provides an interesting example.    Differentiation  Let , and let be defined as . For each let . In we saw that the functions are eigenvectors of with eigenvalue : , . It follows from that for any distinct values the set is linearly independent, and thus that the (uncountably) infinite set is linearly independent.    The next corollary is a useful strengthening of , and will be used to prove . Roughly speaking, it says that eigenspaces associated to distinct eigenvalues are linearly independent . Be careful: the phrase in quotes currently has no real meaning for us. We know what it means for vectors to be linearly independent, but not subspaces . However, it is a decent shorthand for the precise statement of .    Let be a linear transformation, where . Let be distinct eigenvalues of , and for each let be the -eigenspace. If , where , then for all .    Before proving the result, we point out one subtlety here: although the for all , we cannot assume that each is an eigenvector. Indeed, is an eigenvector in this case if and only if . This observation guides the proof that follows.  To pick out the terms of that are nonzero (if any), we define . Assume by contradiction that is nonempty: , . In this case we would have , since for all . But then would be a nontrivial linear combination of the eigenvectors equal to . Since the eigenvectors have distinct eigenvalues, this contradicts . Thus . Equivalently, for all , as desired.    At last we are ready to state and prove what will be our main tool for determining whether a linear transformation is diagonalizable.   Diagonalizability: dimension of eigenspaces   Let be a linear transformation, where . Let be the distinct eigenvalues of , and for each , let be the -eigenspace. We have .   We prove the two implications separately. In each we use the equivalence , proved in .  Proof: diagonalizable  Assume is diagonalizable. From , there is an eigenbasis of . After reordering we may assume that , where for each and each , the element is an eigenvector with eigenvalue : , . Observer that since is a list of vectors, we have . We claim that for all the set is a basis of . The desired result follows in this case since . Proceeding then to the claim, observe that each set is linearly independent, since the underlying set of is linearly independent. Thus it suffices to show that for all . To this end, fix an with and take any . Since is a basis we can write , where for each we have . Bringing to the right-hand side of the equation above yields . Recall that , and thus . Since for all , it follows from that . Thus , showing that , as desired.    Proof: is diagonalizable  Let for all . We assume that . For each , let be a basis of the eigenspace . We claim is an eigenbasis of . Since for all and , we see that consists of eigenvectors of . Since , to show that is a basis it suffices to show that it is linearly independent. To this end, assume we have , where for each we have . By we must have for all . Finally, since the set is linearly independent for each , we must have for all and . This proves that is linearly independent, hence a basis.     We now collect our various results about diagonalizability into one procedure that (a) decides whether a linear transformation is diagonalizable, and (b) if it is, computes an eigenbasis for . The procedure applies to any linear transformation of a finite-dimensional vector space, not just matrix transformations. As usual, the first step is to choose a matrix representation for .   Deciding whether a linear transformation is diagonalizable   Let be a linear transformation, where . To decide whether is diagonalizable proceed as follows.    Pick any ordered basis of and compute . We have diagonalizable if and only if diagonalizable.    Let be the distinct eigenvalues of . Compute for each . We have .    Assume is diagonalizable according to Step (2). For each compute a basis of . The ordered list , is an eigenbasis of .     Lifting the basis back to via the coordinate transformation yields an eigenbasis of . The matrix is diagonal, of the form .      For the most part the validity of this procedure is a direct consequence of and . However, there are two details that need to be pointed out.   That is diagonalizable if and only if is diagonalizable follows from the fact that a basis of the -eigenspace of to a basis of the -eigenspace of using the coordinate vector transformation .    That the ordered list described in Step 3 is in fact a basis is shown in the proof of .         Let , where . Decide whether is diagonalizable. If yes, find an eigenbasis of and compute the corresponding matrix representing .    Note first that where is the standard basis of . (See .) Since is upper triangular, we easily see that its characteristic polynomial is . Next we investigate the eigenspaces: . By inspection we see that both and have rank 2, and hence nullity by the rank-nullity theorem. Thus both eigenspaces have dimension one, and we have . We conclude that , and hence , is not diagonalizable.    The diagonalizability examples in this text will focus largely on the special case of matrix transformations . However, our conscience demands that we give at least one full example of a more abstract linear transformation.   Transposition   Let be the linear transformation defined as . Decide whether is diagonalizable. If yes, find an eigenbasis for and compute the corresponding matrix representing .    We saw in that , where is the standard ordered basis of . Furthermore, we saw that and are the distinct eigenvalues of , and that are bases of and , respectively. It follows that , that is diagonalizable, and that is an eigenbasis of . We conclude that is diagonalizable, and we lift via to the eigenbasis of . Lastly, we have .     Video example: deciding if diagonalizable   Video: deciding if diagonalizable  Video: deciding if diagonalizable       Diagonalizable matrices  In this subsection we will focus on matrix transformations . Recall ( ) that in this situation we have where is the standard basis of . As such boils down to steps (2)-(3), and the eigenbasis of found in (3) is itself an eigenbasis for . Letting the change of basis formula ( ) yields , where . Lastly, since is the standard basis of , the change of basis matrix is obtained by placing the -th element of as the -th column for all . We record these observations as a separate procedure specifically for matrix transformations.   Deciding whether a matrix is diagonalizable   Let be an matrix, and let be its corresponding matrix transformation. To decide whether is diagonalizable, proceed as follows.    Let be the nonzero eigenspaces of . We have .    Assume is diagonalizable and let be an eigenbasis of satisfying for all . (We do not assume the are distinct here.) Letting , we have .      The process of finding and satisfying is called diagonalizing the matrix ; and we say that the matrix  diagonalizes  in this case. (Of course this is possible if and only if is diagonalizable.)    The matrix has characteristic polynomial . Decide whether is diagonalizable. If yes, find an invertible matrix and diagonal matrix such that .    To factor , we first look for integer roots dividing the constant term : , we test whether any of are roots. Luckily, we see that is a root of . Doing polynomial division of by yields . Repeating this factoring technique on , we see that , and thus can continue to factor: . We conclude that the eigenvalues of are , , and . We now compute bases for the corresponding eigenspaces. The bases below were obtained using . We omit the details of the Gaussian elimination performed in each case. (Check for yourself!) . We have ski Since , we conclude that is diagonalizable. Furthermore, we have , where .    Recall that two square matrices and are similar if for some invertible matrix ( ). From the foregoing discussion it follows that a matrix is diagonalizable if and only if it is similar to a diagonal matrix.   Diagonalizabilty and similarity   An matrix is diagonalizable if and only if it is similar to a diagonal matrix: , if and only if there is an invertible matrix and a diagonal matrix such that .    According to the matrix is similar to a diagonal matrix if and only if there is a linear transformation and ordered bases of such that and . By definition such a would be diagonalizable, since is diagonal. Since is diagonalizable if and only if is diagonalizable, we conclude that is similar to a diagonal matrix if and only if is diagonalizable.    We know from that similar matrices can be thought of as two matrix representations of the same overlying linear transformation . As such similar matrices share many of the same algebraic properties, as details.   Properties of similarity   Suppose is similar to : , there is an invertible matrix such that . The following hold:    is similar to : , there is an invertible matrix such that .     and have the same characteristic polynomial.     and have the same eigenvalues.     and have the same trace and determinant.     and have the same rank.    For any we have , where are the -eigenspaces of and , respectively.       Statement (1) follows by taking .  Let and be the characteristic polynomials of and , repsectively. We have . This proves statement (2).  Statement (3) follows from (2) since the eigenvalues of a matrix are the real roots of its characteristic polynomial. Furthermore, by the trace and determinant of a matrix are equal to the sum and product of the roots of its characteristic polynomial. Thus (4) also follows from (2).  The proofs of statements (5)-(6) are left as exercises.    A diagonalizable matrix is similar to a diagonal matrix ( ) and similar matrices share many essential properties ( , ) In this spirit, a good way of thinking about a diagonalizable matrix is that it is as good as diagonal .   Diagonalizable mantra   A diagonalizable matrix is as good as diagonal.    In practical terms, if is diagonalizable, then we have where is diagonal. This allows us to answer questions about by first answering the question for and then use the equations in to translate the results back to . What makes this method effective is that algebraic questions involving diagonal matrices are easy to answer! Before getting to some illustrative examples, we need a few results about the operation , which is called conjugation by .   Properties of conjugation   Let be an invertible matrix.   Conjugation is linear  For all and , we have .    Conjugation commutes with powers  For all and integers , we have . If is invertible, this equality holds for all integers .    Conjugation commutes with polynomials  Given any polynomial with real coefficients, we have .       The proof is left as an exercise.     Diagonalizable: matrix powers   Assume , where is diagonal. The normally difficult computation can be accomplished by first computing (easy) and then observing that . For example, the matrix is diagonalizable and satisfies , where . It follows that for any we have .     Diagonalizable: matrix polynomials   Assume , where is a diagonal matrix. Let . Given any polynomial , we have . Furthermore, since is diagonal, it follows that is also diagonal, and in fact its diagonal entries are given by . This gives us an easy method of computing arbitrary polynomials of the matrix .  Consider again the matrix (and and ) from . Let . Since , it follows that . We conclude that , as you can check directly.      A square-root of an matrix is a matrix such that . If and are similar matrices, satisfying , then has a square-root if and only if has a square-root. Indeed, if satisfies , then satisfies . Similarly, if satisfies , then satisfies . As an example, the matrix satisfies , where . Since is a square-root of , is a square-root of .  So when exactly does a diagonal matrix have a square-root? Clearly, it is sufficient that the diagonal entries satisfy for all , as in the example above. Interestingly, this is not a necessary condition! Indeed, consider the following example: .      Algebraic and geometric multiplicity  We end this section with a deeper look at what the characteristic polynomial reveals about eigenspaces. To begin with, we first define the characteristic polynomial of a general linear transformation , where is a finite-dimensional vector space.   Characteristic polynomial of a transformation   Let be a linear transformation, where is finite-dimensional. Let be an ordered basis of , and let . We define the characteristic polynomial of to be the characteristic polynomial of : , the characteristic polynomial of is .      For the characteristic polynomial of a linear transformation to be well-defined, it should not depend on the choice of basis. This is true thanks to and . Indeed, given two choice of ordered bases of , the matrices and are similar ( ), and thus their characteristic polynomials are equal ( ,(2)).    Let be a linear transformation, where is finite-dimensional. If is an eigenvalue of , then we can factor the chacteristic polynomial of as , where is not a root of . As we will see, the exponent is an upper bound for the dimension of . We call the algebraic multiplicity of the eigenvalue .   multiplicity of an eigenvalue algebraic  multiplicity of an eigenvalue geometric  Algebraic\/geometric multiplicity   Let be a linear transformation, where is finite-dimensional, and let be the characteristic polynomial of . Given an eigenvalue of , we can factor as , where is not a root of the polynomial : , . We call the geometric multiplicity of the eigenvalue , and we call its geometric multiplicity . If , we say is a repeated eigenvalue of .     Algebraic and geometric multiplicity   Let be a linear transformation, where , let be the characteristic polynomial of , and suppose is an eigenvalue of of algebraic multiplicity : , and . We have . In other words, the geometric multiplicity of an eigenvalue is bounded above by its algebraic multiplicity.    Since is an eigenvalue, we have , and thus . Assume by contradiction that . Let , and let be a basis for . We can extend to an ordered basis of . By definition, the characteristic polynomial of is given my , where w. Since are -eigenvectors of , the matrix is of the form   An easy proof by induction on shows that for such a matrix we have for some polynomial . On the other hand, since has algebraic multiplicity we have for some polynomial with . Setting these two expressions equal to one another we see that , or equivalently, . Since it follows that . Contradiction! We conclude that , as desired.      Let be a linear transformation, where , and suppose the characteristic polynomial of factors over as , where for all . The following are equivalent:    is diagonalizable.    For all we have and .   In other words, is diagonalizable if and only if all roots of are real, and the geometric multiplicity of each eigenvalue is equal to its algebraic multiplicity.     Implication:  If (2) is true, then each is an eigenvalue of and we have , by counting degrees in . It follows from that is diagonalizable.    Implication:  If is diagonalizable, then there is an ordered basis of for which is diagonal. Letting be the -th diagonal element of , we have . This expression tells us that are the roots of , and hence that all roots are real since since for all . On the other hand each is a root of , and thus for all . It follows that are the distinct eigenvalues of . By , since is diagonalizable we must have . Since for all ( ), and since (counting degrees in ), for the equality to hold we must have for all , as desired.     From and we can deduce a much finer picture of the eigenspaces of a linear transformation from its factored characteristic polynomial. This often reduces our workload when treating questions of diagonalizability, as the next examples illustrate.    The matrix has characteristic polynomial . Decide whether is diagonalizable.    The eigenvalues of are . Since the eigenvalues and both have algebraic multiplicity , we have by  , and hence . It follows that is diagonalizable if and only if . We have , where . This matrix clearly has rank 2 (the first two columns form a basis for its column space), and hence nullity . We conclude that is diagonalizable.      The matrix has characterisic polynomial . Decide whether is diagonalizable.    The eigenvalues of are and , and each has algebraic multiplicity . Thus , and is diagonalizable if and only if . By inspection we see that and are -eigenvectors, and thus we must have . Next we have where . It is not difficult to see (either using Gaussian elimination or inspection) that this matrix has rank 3, and hence nullity 1. We conclude that , and hence is not diagonalizable.        For each matrix use to determine whether it is diagonalizable. If yes, then produce an invertible matrix and diagonal matrix satisfying . For the last matrix the characteristic polynomial is provided for convenience.                         ;      Let . Show that is diagonalizable if and only if either or ( , and ).    Prove .   Show that for any we have .     For each exercise construct a matrix satisfying the given conditions. Begin by showing that the given must be diagonalizable.     has eigenspaces and .     for all , for .     Assume is a matrix with eigenvalues , , and .    Show that is diagonalizable. Provide an explicit diagonal matrix that is similar to.    Prove that for all odd integers .      Prove statement (5) of .   Use and .    Prove statement (6) of .   Use and .    According to if and are similar, then they have the same rank. Show that the converse is false by showing that the matrices have the same rank, but are not similar.    According to if and are similar, then they have the same characteristic polynomial. Show that the converse is false by showing that the matrices have the same characteristic polynomial, but are not similar.    Prove all statements of .   In each case information about a matrix is given. Decide whether is diagonalizable.   , ,     ,     , ,    See .    Each matrix below has characteristic polynomial . Use to decide whether is diagonalizable. If yes, provide an inverible and diagonal satisfying .                Let . Use your work from to find a matrix satisfying .    "
},
{
  "id": "d_diagonalizable",
  "level": "2",
  "url": "s_diagonalization.html#d_diagonalizable",
  "type": "Definition",
  "number": "5.5.1",
  "title": "Diagonalizable.",
  "body": " diagonalizable  diagonalizing basis  Diagonalizable   Let be a finite-dimensional vector space. A linear transformation is diagonalizable if there exists an ordered basis of for which is a diagonal matrix. In this case, we say the basis  diagonalizes  .  An matrix is diagonalizable if the matrix transformation is diagonalizable.   "
},
{
  "id": "th_diagonalizability_eigenbasis",
  "level": "2",
  "url": "s_diagonalization.html#th_diagonalizability_eigenbasis",
  "type": "Theorem",
  "number": "5.5.2",
  "title": "Diagonalizabilty: basis of eigenvectors.",
  "body": " Diagonalizabilty: basis of eigenvectors   Let be a linear transformation, and let be an ordered basis of .    The matrix is diagonal if and only if consists of eigenvectors of .    If is diagonal, then the -th diagonal entry of is the eigenvalue associated to the eigenvector .    The transformation is diagonalizable if and only if there is an ordered basis of consisting of eigenvectors of .      Let be an ordered basis of . The matrix will be diagonal if and only if for each the -th column of is of the form for some . By the -th column of is the coordinate vector . Thus is diagonal if and only if for all we have for some . Next, by definition of , we have . We conclude that is diagonal if and only if is an eigenvector of for all . Furthermore, when this is the case, we see that the -th diagonal entry of is the corresponding eigenvalue . This proves statements (1) and (2). Statement (3) follows from (1) and .   "
},
{
  "id": "d_eigenbasis",
  "level": "2",
  "url": "s_diagonalization.html#d_eigenbasis",
  "type": "Definition",
  "number": "5.5.3",
  "title": "Eigenbasis.",
  "body": " eigenbasis  Eigenbasis   Let be a linear transformation. An ordered basis is an eigenbasis of if is an eigenvector of for all .   "
},
{
  "id": "eg_diagonalizable_matrix",
  "level": "2",
  "url": "s_diagonalization.html#eg_diagonalizable_matrix",
  "type": "Example",
  "number": "5.5.4",
  "title": "",
  "body": "  Let , where . We saw in that and are eigenvectors of with eigenvalues , respectively. It is clear that the two eigenvectors are linearly independent, and hence that is an eigenbasis of . It follows from that is diagonalizable, and that in fact , as one easily verifies.   "
},
{
  "id": "ss_diagonalizable-8",
  "level": "2",
  "url": "s_diagonalization.html#ss_diagonalizable-8",
  "type": "Example",
  "number": "5.5.5",
  "title": "",
  "body": "  Let be rotation by : , , where . As discussed in , has no eigenvectors whatsoever. It follows that there is no eigenbasis of , and hence that is not diagonalizable.   "
},
{
  "id": "ss_diagonalizable-9",
  "level": "2",
  "url": "s_diagonalization.html#ss_diagonalizable-9",
  "type": "Example",
  "number": "5.5.6",
  "title": "",
  "body": "  Let , where . As is easily computed, is the only eigenvalue of , and . It follows that any two eigenvectors and lie in the one-dimensional space , and hence are scalar multiples of one another. Thus we cannot find two linearly independent eigenvectors of . We conclude that does not have an eigenbasis, and hence is not diagonalizable.   "
},
{
  "id": "th_independent_eigenvectors",
  "level": "2",
  "url": "s_diagonalization.html#th_independent_eigenvectors",
  "type": "Theorem",
  "number": "5.5.7",
  "title": "Linear independence of eigenvectors.",
  "body": " Linear independence of eigenvectors   Let be a linear transformation, and let be a set of eigenvectors of satisfying . If the eigenvalues are distinct ( , for ), then is linearly independent.    We prove the result by contradiction. Suppose we can find a finite set of eigenvectors with distinct eigenvalues that is linearly dependent. It follows that we can find such a set of minimum cardinality . In other words, there is positive integer satisfying the following properties: (i) we can find a linearly dependent set of eigenvectors of with distinct eigenvalues; (ii) for all , any set of eigenvectors of with distinct eigenvalues is linearly independent That we can find a minimal in this sense is plausible enough, but we are secretly using the well-ordering principle of the integers here. .  Now assume is a set of minimal cardinality satisfying for all and for all . First observe that we must have : eigenvectors are nonzero by definition, and thus any set consisting of a single eigenvector is linearly independent. Next, since is linearly dependent we have , where for some . After reordering, we may assume without loss of generality that . Next we apply to both sides of : . From equation and the equation in we have , and hence . Since and , we have . Thus equation implies that the set is a linearly dependent set of eigenvectors of with distinct eigenvalues, contradicting the minimality of . This completes our proof by contradiction.   "
},
{
  "id": "cor_independent_eigenvectors",
  "level": "2",
  "url": "s_diagonalization.html#cor_independent_eigenvectors",
  "type": "Corollary",
  "number": "5.5.8",
  "title": "Diagonalizable if distinct eigenvalues.",
  "body": " Diagonalizable if distinct eigenvalues   Let be a linear transformation, and suppose . If has distinct eigenvalues, then is diagonalizable.    Let be a set eigenvectors of with distinct eigenvalues. According to the set is linearly independent. Since it follows that is an eigenbasis for and hence is diagonalizable.   "
},
{
  "id": "ss_diagonalizable_independent_eigenvectors-5",
  "level": "2",
  "url": "s_diagonalization.html#ss_diagonalizable_independent_eigenvectors-5",
  "type": "Example",
  "number": "5.5.9",
  "title": "",
  "body": "  Let , where . The characteristic polynomial of is . Since has three distinct eigenvalues the linear transformation is diagonalizable. Indeed, any choice of eigenvectors with is guaranteed to be linearly independent, and hence gives rise to an eigenbasis of . For example the usual procedure allows us to easily find eigenvectors from the three eigenspaces. You can verify for yourself that these three vectors are indeed linearly independent.   "
},
{
  "id": "rm_independent_eigenvectors",
  "level": "2",
  "url": "s_diagonalization.html#rm_independent_eigenvectors",
  "type": "Remark",
  "number": "5.5.10",
  "title": "",
  "body": "  Let be a linear transformation, . It cannot be stressed enough that having distinct eigenvalues is a sufficient , but not necessary condition for to be diagonalizable. In other words we have but . A good counterexample to keep in mind is , where is the identity matrix. The transformation is clearly diagonalizable since , where is the standard basis; and yet is the only eigenvalue of .   "
},
{
  "id": "ss_diagonalizable_independent_eigenvectors-8",
  "level": "2",
  "url": "s_diagonalization.html#ss_diagonalizable_independent_eigenvectors-8",
  "type": "Example",
  "number": "5.5.11",
  "title": "",
  "body": "  Differentiation  Let , and let be defined as . For each let . In we saw that the functions are eigenvectors of with eigenvalue : , . It follows from that for any distinct values the set is linearly independent, and thus that the (uncountably) infinite set is linearly independent.   "
},
{
  "id": "cor_independent_eigenspaces",
  "level": "2",
  "url": "s_diagonalization.html#cor_independent_eigenspaces",
  "type": "Corollary",
  "number": "5.5.12",
  "title": "",
  "body": "  Let be a linear transformation, where . Let be distinct eigenvalues of , and for each let be the -eigenspace. If , where , then for all .    Before proving the result, we point out one subtlety here: although the for all , we cannot assume that each is an eigenvector. Indeed, is an eigenvector in this case if and only if . This observation guides the proof that follows.  To pick out the terms of that are nonzero (if any), we define . Assume by contradiction that is nonempty: , . In this case we would have , since for all . But then would be a nontrivial linear combination of the eigenvectors equal to . Since the eigenvectors have distinct eigenvalues, this contradicts . Thus . Equivalently, for all , as desired.   "
},
{
  "id": "th_diagonalizability_eigenspaces",
  "level": "2",
  "url": "s_diagonalization.html#th_diagonalizability_eigenspaces",
  "type": "Theorem",
  "number": "5.5.13",
  "title": "Diagonalizability: dimension of eigenspaces.",
  "body": " Diagonalizability: dimension of eigenspaces   Let be a linear transformation, where . Let be the distinct eigenvalues of , and for each , let be the -eigenspace. We have .   We prove the two implications separately. In each we use the equivalence , proved in .  Proof: diagonalizable  Assume is diagonalizable. From , there is an eigenbasis of . After reordering we may assume that , where for each and each , the element is an eigenvector with eigenvalue : , . Observer that since is a list of vectors, we have . We claim that for all the set is a basis of . The desired result follows in this case since . Proceeding then to the claim, observe that each set is linearly independent, since the underlying set of is linearly independent. Thus it suffices to show that for all . To this end, fix an with and take any . Since is a basis we can write , where for each we have . Bringing to the right-hand side of the equation above yields . Recall that , and thus . Since for all , it follows from that . Thus , showing that , as desired.    Proof: is diagonalizable  Let for all . We assume that . For each , let be a basis of the eigenspace . We claim is an eigenbasis of . Since for all and , we see that consists of eigenvectors of . Since , to show that is a basis it suffices to show that it is linearly independent. To this end, assume we have , where for each we have . By we must have for all . Finally, since the set is linearly independent for each , we must have for all and . This proves that is linearly independent, hence a basis.    "
},
{
  "id": "proc_diagonalize",
  "level": "2",
  "url": "s_diagonalization.html#proc_diagonalize",
  "type": "Procedure",
  "number": "5.5.14",
  "title": "Deciding whether a linear transformation is diagonalizable.",
  "body": " Deciding whether a linear transformation is diagonalizable   Let be a linear transformation, where . To decide whether is diagonalizable proceed as follows.    Pick any ordered basis of and compute . We have diagonalizable if and only if diagonalizable.    Let be the distinct eigenvalues of . Compute for each . We have .    Assume is diagonalizable according to Step (2). For each compute a basis of . The ordered list , is an eigenbasis of .     Lifting the basis back to via the coordinate transformation yields an eigenbasis of . The matrix is diagonal, of the form .      For the most part the validity of this procedure is a direct consequence of and . However, there are two details that need to be pointed out.   That is diagonalizable if and only if is diagonalizable follows from the fact that a basis of the -eigenspace of to a basis of the -eigenspace of using the coordinate vector transformation .    That the ordered list described in Step 3 is in fact a basis is shown in the proof of .      "
},
{
  "id": "eg_diagonalizable_uppertriang",
  "level": "2",
  "url": "s_diagonalization.html#eg_diagonalizable_uppertriang",
  "type": "Example",
  "number": "5.5.15",
  "title": "",
  "body": "  Let , where . Decide whether is diagonalizable. If yes, find an eigenbasis of and compute the corresponding matrix representing .    Note first that where is the standard basis of . (See .) Since is upper triangular, we easily see that its characteristic polynomial is . Next we investigate the eigenspaces: . By inspection we see that both and have rank 2, and hence nullity by the rank-nullity theorem. Thus both eigenspaces have dimension one, and we have . We conclude that , and hence , is not diagonalizable.   "
},
{
  "id": "eg_diagonalizable_transposition",
  "level": "2",
  "url": "s_diagonalization.html#eg_diagonalizable_transposition",
  "type": "Example",
  "number": "5.5.16",
  "title": "Transposition.",
  "body": " Transposition   Let be the linear transformation defined as . Decide whether is diagonalizable. If yes, find an eigenbasis for and compute the corresponding matrix representing .    We saw in that , where is the standard ordered basis of . Furthermore, we saw that and are the distinct eigenvalues of , and that are bases of and , respectively. It follows that , that is diagonalizable, and that is an eigenbasis of . We conclude that is diagonalizable, and we lift via to the eigenbasis of . Lastly, we have .   "
},
{
  "id": "fig_vid_diag",
  "level": "2",
  "url": "s_diagonalization.html#fig_vid_diag",
  "type": "Figure",
  "number": "5.5.17",
  "title": "Video: deciding if diagonalizable",
  "body": " Video: deciding if diagonalizable  Video: deciding if diagonalizable   "
},
{
  "id": "proc_diagonalize_matrixtransform",
  "level": "2",
  "url": "s_diagonalization.html#proc_diagonalize_matrixtransform",
  "type": "Procedure",
  "number": "5.5.18",
  "title": "Deciding whether a matrix is diagonalizable.",
  "body": " Deciding whether a matrix is diagonalizable   Let be an matrix, and let be its corresponding matrix transformation. To decide whether is diagonalizable, proceed as follows.    Let be the nonzero eigenspaces of . We have .    Assume is diagonalizable and let be an eigenbasis of satisfying for all . (We do not assume the are distinct here.) Letting , we have .     "
},
{
  "id": "eg_diagonalizable_big",
  "level": "2",
  "url": "s_diagonalization.html#eg_diagonalizable_big",
  "type": "Example",
  "number": "5.5.19",
  "title": "",
  "body": "  The matrix has characteristic polynomial . Decide whether is diagonalizable. If yes, find an invertible matrix and diagonal matrix such that .    To factor , we first look for integer roots dividing the constant term : , we test whether any of are roots. Luckily, we see that is a root of . Doing polynomial division of by yields . Repeating this factoring technique on , we see that , and thus can continue to factor: . We conclude that the eigenvalues of are , , and . We now compute bases for the corresponding eigenspaces. The bases below were obtained using . We omit the details of the Gaussian elimination performed in each case. (Check for yourself!) . We have ski Since , we conclude that is diagonalizable. Furthermore, we have , where .   "
},
{
  "id": "cor_diagonalizable_matrix",
  "level": "2",
  "url": "s_diagonalization.html#cor_diagonalizable_matrix",
  "type": "Corollary",
  "number": "5.5.20",
  "title": "Diagonalizabilty and similarity.",
  "body": " Diagonalizabilty and similarity   An matrix is diagonalizable if and only if it is similar to a diagonal matrix: , if and only if there is an invertible matrix and a diagonal matrix such that .    According to the matrix is similar to a diagonal matrix if and only if there is a linear transformation and ordered bases of such that and . By definition such a would be diagonalizable, since is diagonal. Since is diagonalizable if and only if is diagonalizable, we conclude that is similar to a diagonal matrix if and only if is diagonalizable.   "
},
{
  "id": "th_similarity",
  "level": "2",
  "url": "s_diagonalization.html#th_similarity",
  "type": "Theorem",
  "number": "5.5.21",
  "title": "Properties of similarity.",
  "body": " Properties of similarity   Suppose is similar to : , there is an invertible matrix such that . The following hold:    is similar to : , there is an invertible matrix such that .     and have the same characteristic polynomial.     and have the same eigenvalues.     and have the same trace and determinant.     and have the same rank.    For any we have , where are the -eigenspaces of and , respectively.       Statement (1) follows by taking .  Let and be the characteristic polynomials of and , repsectively. We have . This proves statement (2).  Statement (3) follows from (2) since the eigenvalues of a matrix are the real roots of its characteristic polynomial. Furthermore, by the trace and determinant of a matrix are equal to the sum and product of the roots of its characteristic polynomial. Thus (4) also follows from (2).  The proofs of statements (5)-(6) are left as exercises.   "
},
{
  "id": "mantra_diagonalizable",
  "level": "2",
  "url": "s_diagonalization.html#mantra_diagonalizable",
  "type": "Mantra",
  "number": "5.5.22",
  "title": "Diagonalizable mantra.",
  "body": " Diagonalizable mantra   A diagonalizable matrix is as good as diagonal.   "
},
{
  "id": "th_conjugation",
  "level": "2",
  "url": "s_diagonalization.html#th_conjugation",
  "type": "Theorem",
  "number": "5.5.23",
  "title": "Properties of conjugation.",
  "body": " Properties of conjugation   Let be an invertible matrix.   Conjugation is linear  For all and , we have .    Conjugation commutes with powers  For all and integers , we have . If is invertible, this equality holds for all integers .    Conjugation commutes with polynomials  Given any polynomial with real coefficients, we have .       The proof is left as an exercise.   "
},
{
  "id": "eg_diagonalizable_matrix_powers",
  "level": "2",
  "url": "s_diagonalization.html#eg_diagonalizable_matrix_powers",
  "type": "Example",
  "number": "5.5.24",
  "title": "Diagonalizable: matrix powers.",
  "body": " Diagonalizable: matrix powers   Assume , where is diagonal. The normally difficult computation can be accomplished by first computing (easy) and then observing that . For example, the matrix is diagonalizable and satisfies , where . It follows that for any we have .   "
},
{
  "id": "eg_diagonalizable_matrix_polynomials",
  "level": "2",
  "url": "s_diagonalization.html#eg_diagonalizable_matrix_polynomials",
  "type": "Example",
  "number": "5.5.25",
  "title": "Diagonalizable: matrix polynomials.",
  "body": " Diagonalizable: matrix polynomials   Assume , where is a diagonal matrix. Let . Given any polynomial , we have . Furthermore, since is diagonal, it follows that is also diagonal, and in fact its diagonal entries are given by . This gives us an easy method of computing arbitrary polynomials of the matrix .  Consider again the matrix (and and ) from . Let . Since , it follows that . We conclude that , as you can check directly.   "
},
{
  "id": "ss_diagonalizable_matrices-16",
  "level": "2",
  "url": "s_diagonalization.html#ss_diagonalizable_matrices-16",
  "type": "Example",
  "number": "5.5.26",
  "title": "",
  "body": "  A square-root of an matrix is a matrix such that . If and are similar matrices, satisfying , then has a square-root if and only if has a square-root. Indeed, if satisfies , then satisfies . Similarly, if satisfies , then satisfies . As an example, the matrix satisfies , where . Since is a square-root of , is a square-root of .  So when exactly does a diagonal matrix have a square-root? Clearly, it is sufficient that the diagonal entries satisfy for all , as in the example above. Interestingly, this is not a necessary condition! Indeed, consider the following example: .   "
},
{
  "id": "d_char_poly_transform",
  "level": "2",
  "url": "s_diagonalization.html#d_char_poly_transform",
  "type": "Definition",
  "number": "5.5.27",
  "title": "Characteristic polynomial of a transformation.",
  "body": " Characteristic polynomial of a transformation   Let be a linear transformation, where is finite-dimensional. Let be an ordered basis of , and let . We define the characteristic polynomial of to be the characteristic polynomial of : , the characteristic polynomial of is .   "
},
{
  "id": "rm_char_poly_transform",
  "level": "2",
  "url": "s_diagonalization.html#rm_char_poly_transform",
  "type": "Remark",
  "number": "5.5.28",
  "title": "",
  "body": "  For the characteristic polynomial of a linear transformation to be well-defined, it should not depend on the choice of basis. This is true thanks to and . Indeed, given two choice of ordered bases of , the matrices and are similar ( ), and thus their characteristic polynomials are equal ( ,(2)).   "
},
{
  "id": "d_alg_geom_mult",
  "level": "2",
  "url": "s_diagonalization.html#d_alg_geom_mult",
  "type": "Definition",
  "number": "5.5.29",
  "title": "Algebraic\/geometric multiplicity.",
  "body": " multiplicity of an eigenvalue algebraic  multiplicity of an eigenvalue geometric  Algebraic\/geometric multiplicity   Let be a linear transformation, where is finite-dimensional, and let be the characteristic polynomial of . Given an eigenvalue of , we can factor as , where is not a root of the polynomial : , . We call the geometric multiplicity of the eigenvalue , and we call its geometric multiplicity . If , we say is a repeated eigenvalue of .   "
},
{
  "id": "th_alg_geom_mult",
  "level": "2",
  "url": "s_diagonalization.html#th_alg_geom_mult",
  "type": "Theorem",
  "number": "5.5.30",
  "title": "Algebraic and geometric multiplicity.",
  "body": " Algebraic and geometric multiplicity   Let be a linear transformation, where , let be the characteristic polynomial of , and suppose is an eigenvalue of of algebraic multiplicity : , and . We have . In other words, the geometric multiplicity of an eigenvalue is bounded above by its algebraic multiplicity.    Since is an eigenvalue, we have , and thus . Assume by contradiction that . Let , and let be a basis for . We can extend to an ordered basis of . By definition, the characteristic polynomial of is given my , where w. Since are -eigenvectors of , the matrix is of the form   An easy proof by induction on shows that for such a matrix we have for some polynomial . On the other hand, since has algebraic multiplicity we have for some polynomial with . Setting these two expressions equal to one another we see that , or equivalently, . Since it follows that . Contradiction! We conclude that , as desired.   "
},
{
  "id": "cor_alg_geom_mult",
  "level": "2",
  "url": "s_diagonalization.html#cor_alg_geom_mult",
  "type": "Corollary",
  "number": "5.5.31",
  "title": "",
  "body": "  Let be a linear transformation, where , and suppose the characteristic polynomial of factors over as , where for all . The following are equivalent:    is diagonalizable.    For all we have and .   In other words, is diagonalizable if and only if all roots of are real, and the geometric multiplicity of each eigenvalue is equal to its algebraic multiplicity.     Implication:  If (2) is true, then each is an eigenvalue of and we have , by counting degrees in . It follows from that is diagonalizable.    Implication:  If is diagonalizable, then there is an ordered basis of for which is diagonal. Letting be the -th diagonal element of , we have . This expression tells us that are the roots of , and hence that all roots are real since since for all . On the other hand each is a root of , and thus for all . It follows that are the distinct eigenvalues of . By , since is diagonalizable we must have . Since for all ( ), and since (counting degrees in ), for the equality to hold we must have for all , as desired.    "
},
{
  "id": "eg_alg_geom_1",
  "level": "2",
  "url": "s_diagonalization.html#eg_alg_geom_1",
  "type": "Example",
  "number": "5.5.32",
  "title": "",
  "body": "  The matrix has characteristic polynomial . Decide whether is diagonalizable.    The eigenvalues of are . Since the eigenvalues and both have algebraic multiplicity , we have by  , and hence . It follows that is diagonalizable if and only if . We have , where . This matrix clearly has rank 2 (the first two columns form a basis for its column space), and hence nullity . We conclude that is diagonalizable.   "
},
{
  "id": "eg_alg_geom_2",
  "level": "2",
  "url": "s_diagonalization.html#eg_alg_geom_2",
  "type": "Example",
  "number": "5.5.33",
  "title": "",
  "body": "  The matrix has characterisic polynomial . Decide whether is diagonalizable.    The eigenvalues of are and , and each has algebraic multiplicity . Thus , and is diagonalizable if and only if . By inspection we see that and are -eigenvectors, and thus we must have . Next we have where . It is not difficult to see (either using Gaussian elimination or inspection) that this matrix has rank 3, and hence nullity 1. We conclude that , and hence is not diagonalizable.   "
},
{
  "id": "s_diagonalization_ex-1-2",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-1-2",
  "type": "Exercise",
  "number": "5.5.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "s_diagonalization_ex-1-3",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-1-3",
  "type": "Exercise",
  "number": "5.5.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "s_diagonalization_ex-1-4",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-1-4",
  "type": "Exercise",
  "number": "5.5.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "s_diagonalization_ex-1-5",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-1-5",
  "type": "Exercise",
  "number": "5.5.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "s_diagonalization_ex-1-6",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-1-6",
  "type": "Exercise",
  "number": "5.5.5.5",
  "title": "",
  "body": "  ;   "
},
{
  "id": "s_diagonalization_ex-2",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-2",
  "type": "Exercise",
  "number": "5.5.5.6",
  "title": "",
  "body": " Let . Show that is diagonalizable if and only if either or ( , and ).  "
},
{
  "id": "s_diagonalization_ex-3",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-3",
  "type": "Exercise",
  "number": "5.5.5.7",
  "title": "",
  "body": " Prove .   Show that for any we have .  "
},
{
  "id": "s_diagonalization_ex-4-2",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-4-2",
  "type": "Exercise",
  "number": "5.5.5.8",
  "title": "",
  "body": "  has eigenspaces and .  "
},
{
  "id": "s_diagonalization_ex-4-3",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-4-3",
  "type": "Exercise",
  "number": "5.5.5.9",
  "title": "",
  "body": "  for all , for .  "
},
{
  "id": "s_diagonalization_ex-5",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-5",
  "type": "Exercise",
  "number": "5.5.5.10",
  "title": "",
  "body": " Assume is a matrix with eigenvalues , , and .    Show that is diagonalizable. Provide an explicit diagonal matrix that is similar to.    Prove that for all odd integers .    "
},
{
  "id": "s_diagonalization_ex-6",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-6",
  "type": "Exercise",
  "number": "5.5.5.11",
  "title": "",
  "body": " Prove statement (5) of .   Use and .  "
},
{
  "id": "s_diagonalization_ex-7",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-7",
  "type": "Exercise",
  "number": "5.5.5.12",
  "title": "",
  "body": " Prove statement (6) of .   Use and .  "
},
{
  "id": "s_diagonalization_ex-8",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-8",
  "type": "Exercise",
  "number": "5.5.5.13",
  "title": "",
  "body": " According to if and are similar, then they have the same rank. Show that the converse is false by showing that the matrices have the same rank, but are not similar.  "
},
{
  "id": "s_diagonalization_ex-9",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-9",
  "type": "Exercise",
  "number": "5.5.5.14",
  "title": "",
  "body": " According to if and are similar, then they have the same characteristic polynomial. Show that the converse is false by showing that the matrices have the same characteristic polynomial, but are not similar.  "
},
{
  "id": "s_diagonalization_ex-10",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-10",
  "type": "Exercise",
  "number": "5.5.5.15",
  "title": "",
  "body": " Prove all statements of .  "
},
{
  "id": "s_diagonalization_ex-11",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-11",
  "type": "Exercise",
  "number": "5.5.5.16",
  "title": "",
  "body": "In each case information about a matrix is given. Decide whether is diagonalizable.   , ,     ,     , ,    See .  "
},
{
  "id": "ex_diagonalization",
  "level": "2",
  "url": "s_diagonalization.html#ex_diagonalization",
  "type": "Exercise",
  "number": "5.5.5.17",
  "title": "",
  "body": " Each matrix below has characteristic polynomial . Use to decide whether is diagonalizable. If yes, provide an inverible and diagonal satisfying .              "
},
{
  "id": "s_diagonalization_ex-13",
  "level": "2",
  "url": "s_diagonalization.html#s_diagonalization_ex-13",
  "type": "Exercise",
  "number": "5.5.5.18",
  "title": "",
  "body": " Let . Use your work from to find a matrix satisfying .  "
},
{
  "id": "s_spectral_theorem",
  "level": "1",
  "url": "s_spectral_theorem.html",
  "type": "Section",
  "number": "5.6",
  "title": "The spectral theorem",
  "body": " The spectral theorem   Among the many takeaways from is the simple fact that not all matrices are diagonalizable. In principle gives a complete answer to the question of diagonalizability in terms of eigenspaces. However, you should not be mislead by the artificially simple examples treated in . In practice even the determination (or approximation) of the distinct eigenvalues of an matrix poses a very challenging computational problem as gets large. As such the general question of whether a matrix is diagonalizable remains an intractable one. This makes all the more welcoming the main result of this section: all symmetric matrices are diagonalizable! This surprising fact is a consequence of the spectral theorem for self-adjoint operators : a result which itself fits into a larger suite of spectral theorems that treat the diagonalizability of various families of linear transformations of inner product spaces (both finite and infinite dimensional).    Self-adjoint operators  Though we are mainly interested in the diagonalizability of symmetric matrices, our arguments are made more elegant by abstracting somewhat to the realm of linear transformations of inner product spaces. In this setting the appropriate analogue of a symmetric matrix is a self-adjoint linear transformation.   Self-adjoint operators   Let be a finite-dimensional inner product space. A linear transformation is called a self-adjoint operator if for all .    The next theorem makes explicit the connection between self-adjoint operators and symmetric matrices.   Self-adjoint operators and symmetry   Let be a finite-dimensional inner product space, let be a linear transformation, and let be an orthonormal ordered basis of . The following statements are equivalent.     is self-adjoint.     is symmetric.      Let . We have . Furthermore, since is orthonormal, the -th entry of is computed as ( ). Thus , where It follows that . The last equality in this chain of equivalences states that satisfies property for all elements of . Not surprisingly, this is equivalent to satisfying the property for all elements in . (See .) We conclude that is symmetric if and only if is self-adjoint.     Self-adjoint operators and symmetry   Let . The following statements are equivalent.     is symmetric.     is self-adjoint with respect to the dot product.     for all .      Since , where is the standard ordered basis of , and since is orthonormal with respect to the dot product, it follows from that statements (1) and (2) are equivalent. Statements (2) and (3) are equivalent since by definition for all .    The next result, impressive in its own right, is also key to the induction argument we will use to prove . A proper proof would require a careful treatment of complex vector spaces: a topic which lies just outside the scope of this text. The proof sketch we provide can easily be upgraded to a complete argument simply by justifying a few statements about and its standard inner product.   Eigenvalues of self-adjoint operators   Let be a finite-dimensional inner product space. If is self adjoint, then all roots of its characteristic polynomial are real: i.e., we have , where for all .    Proof sketch of  Pick an orthonormal ordered basis of , and let . By , is symmetric. To prove that all roots of the characteristic polynomial are real, we make a slight detour into complex vector spaces. The set of all complex -tuples, together with the operations and where , forms what is called a vector space over . This means that satisfies the strengthened axioms of obtained by replacing every mention of a scalar with a scalar . Additionally, the vector space has the structure of a complex inner product defined as , where denotes the complex conjugate of for each . Essentially all of our theory of real vector spaces can be transported to complex vector spaces, including definitions and results about eigenvectors and inner products. The rest of this argument makes use of this principle by citing without proof some of these properties, and this is why it has been downgraded to a proof sketch .  We now return to and its characteristic polynomial . Recall that we want to show that all roots of are real. Let be a root of . The complex theory of eigenvectors implies that there is a nonzero vector satisfying . On the one hand, we have using properties of our complex inner product. On the other hand, since it is easy to see that extends to our complex inner product: , for all . Thus . (In the last equality we use the fact that our complex inner product satisfies for any and vectors .) It follows that . Since , we have (another property of our complex inner product), and thus . Since a complex number satisfies if and only if if and only if is real, we conclude that is a real number, as claimed.     Eigenvalues of self-adjoint operators   If is a self-adjoint operator on a finite-dimensional inner product space , then has an eigenvalue: , there is a and nonzero such that .    The corollary follows from and the fact that the eigenvalues of are the real roots of its characteristic polynomial ( ).    From and it follows that the characterisitic polynomial of any symmetric matrix must factor as a product of linear terms over , as illustrated by the next two examples.   Symmetric matrices   Verify that the characteristic polynomial of any symmetric matrix factors into linear terms over .    Given a symmetric matrix , we have . Using the quadratic formula and some algebra, we see that the roots of are given by where (using the quadratic formula) . Since , we see that both these roots are real. Thus , where .     Symmetric matrix   Verify that the characteristic polynomial of the symmetric matrix factors into linear terms over .    The characteristic polynomial of is . We can use the quadratic equation to solve for , yielding . We conclude that or , and thus or . It follows that .      The spectral theorem for self-adjoint operators   Our version of the spectral theorem concerns self-adjoint linear transformations on a finite-dimensional inner product space. It tells us two remarkable things: (a) every such linear transformation has an eigenbasis (and hence is diagonalizable); and furthermore, (b) the eigenbasis can be chosen to be orthogonal, or even orthonormal.    Spectral theorem for self-adjoint operators   Let be a finite-dimensional vector space, and let be a linear transformation. The following statements are equivalent.     is self-adjoint.     is diagonalizable and eigenvectors with distinct eigenvalues are orthogonal.     has an orthogonal eigenbasis.     has an orthonormal eigenbasis.      We will prove the cycle of implications .   Implication:  Assume is self adjoint. First we show that eigenvectors with distinct eigenvalues are orthogonal. To this end, suppose we have and , where . Using the definition of self-adjoint, we have . We now prove by induction on that if is self-adjoint, then is diagonalizable. The base case is trivial. Assume the result is true of any -dimensional inner product space, and suppose . By there is a nonzero with . Let . Since , we have . The following two facts are crucial for the rest of the argument and are left as an exercise ( ).   For all we have , and thus by restricting to we get a linear transformation .    The restriction is self-adjoint, considered as a linear transformation of the inner product space . Here the inner product on the subspace is inherited from by restriction.   Now since and is self-adjoint, we may assume by induction that has an eigenbasis . We claim that is an eigenbasis of . Since by definition for all , we see that the vectors are also eigenvectors of , and thus that consists of eigenvectors. To show is a basis it is enought to prove linear independence, since . Suppose we have for scalars . Taking the inner product with , we have : . It follows that we have , and thus for all , since is linearly independent. Having proved that is an eigenbasis, we conclude that is diagonalizable.    Implication:  Let be the distinct eigenvalues of . Since is assumed to be diagonalizable, following we can create an eigenbasis by picking bases of each eigenspace and combining them. We can always choose these bases so that each is orthogonal. When we do so, the assembled will be orthogonal as a whole. Indeed given any two elements of , if both vectors are elements of for some , then they are orthogonal by design ; furthermore, if is an element of basis and is an element of basis with , then they are eigenvectors with distinct eigenvalues, and hence orthogonal by assumption !    Implication:  This is easy to see since an orthonormal eigenbasis can be obtained from an orthogonal eigenbasis by scaling each element by the reciprocal of its norm.    Implication:  Assume is an orthonormal eigenbasis of . Since is an eigenbasis, is a diagonal matrix, and hence symmetric. Since is orthonormal with respect to the dot product, we conclude from that is self-adjoint.     An operator that admits an orthogonal (and hence an orthonormal) eigenbasis is called orthogonally diagonalizable .   diagonalizable orthogonally  orthogonally diagonalizable  Orthogonally diagonalizable   Let be a finite-dimensional inner product space. A linear transformation is orthogonally diagonalizable if there exists an orthogonal (equivalently, an orthonormal) eigenbasis of .    This new language affords us a more succinct articulation of : to be self-adjoint is to be orthogonally diagonalizable. Think of this as a sort of diagonalizable+ condition.   Self-adjoint mantra   To be self-adjoint on a finite-dimensional inner product space is to be diagonalizable+ . In more detail: .    As an immediate consequence of , we have the following result about symmetric matrices.   Spectral theorem for symmetric matrices   Let be an matrix. The following statements are equivalent.     is symmetric.     is diagonalizable and eigenvectors with distinct eigenvalues are orthogonal with respect to the dot product.     is orthogonally diagonalizable.    There exists an orthogonal matrix  and diagonal matrix such that .      By we have symmetric if and only if is self-adjoint with respect to the dot product. Statements (1)-(3) are seen to be equivalent by applying to (with respect to the dot product). Let be the standard basis of . We see that (4) is equivalent to (3) by observing that is an orthonormal eigenbasis of if and only if the matrix obtained by placing the elements of as columns is orthogonal and diagonalizes .    The process of finding matrices and satisfying is called orthogonal diagonalization . A close look at the proof of gives rise to the following orthogonal diagonalization method for matrices.   Orthogonal diagonalization   Let be a symmetric matrix. To orthogonally diagonalize proceed as follows.    Let be the distinct eigenvalues of . For each , compute an orthonormal ordered basis of .    Let be the ordered basis obtained by concatenating the orthonormal bases computed in (1). This is an orthonormal basis of eigenvectors. It follows that the matrix is orthogonal ( , ), and the matrix is diagonal.       Orthogonal diagonalization   The symmetric matrix has characteristic polynomial . Find an orthogonal matrix and diagonal matrix such that .    First we factor . Looking at the constant term we see that the only possible integer roots of are . It is easily verified that , and polynomial division yields the factorization . Further factorization of gives us .  Next we compute orthonormal bases of the eigenspaces and , yielding . Assembling these bases elements into the orthogonal matrix , we conclude that , where .    Observe that the two eigenspaces and of the matrix in are orthogonal to one another, as predicted by the spectral theorem. Indeed, is the line passing through the origin with direction vector , and is its orthogonal complement, the plane passing through the origin with normal vector . depicts the orthogonal configuration of the eigenspaces of this example. This is an excellent illustration of what makes the diagonalizability of symmetric matrices (and self-adjoint operators) special. Keep it in mind!   Eigenspaces of a symmetric matrix are orthogonal   Eigenspaces of a symmetric matrix are orthogonal   Do not overlook the reverse implication of equivalence . As the next example illustrates, we can show an operator is self-adjoint by examining the geometry of its eigenspaces.   Orthogonal projections are self-adjoint   Let be a finite-dimensional inner product space, let be a subpsace of , and let be orthogonal projection onto . Prove that is self-adjoint.    By it suffices to show that is orthogonally diagonalizable. According to we have . Equivalently, and are the 1- and 0-eigenspaces of , respectively. Since we conclude that is diagonalizable. Since clearly and are orthogonal, we conclude that is in fact othogonally diagonalizable, hence self-adjoint.        Orthogonally diagonalize the given symmetric matrix following : find a diagonal matrix and orthogonal matrix satisfying .                                            Let be a finite-dimensional inner product space, let be a linear transformation, and let be an ordered basis of . Prove: is self-adjoint if and only if for all . In other words, to prove is self-adjoint it suffices to show property holds for all elements of a basis of .    Let be a finite-dimensional inner product space, let be a self-adjoint operator, and let be a subspace of .    Prove: if , then .    By (a), restricting to defines a linear transformation . Prove that is self-adjoint. Here the inner product on the subspace is inherited from by restriction.      Assume is symmetric and orthogonal. Prove that the characteristic polynomial of factors as for some nonnegative integers . In particular, the eigenvalues of are among and .     Let be a conic curve defined by a quadratic equation of the form where are fixed constants. You may have learned that can be rotated to a conic with a standard equation of the form . In the following exercises we will see why this is true.    Find a symmetric matrix satisfying the following property: satisfies if and only if . (Here we conflate the matrix with the scalar .)    Show that there is a rotation matrix satisfying , where for some .   See .    Show that satisfies if and only if satisfies .    Explain why we can conclude that there is a rotation that maps the conic with equation to the conic with standard equation  .    Let be the conic curve with equation .    Find an angle and constants such that the rotation maps to a conic with defining equation .    First graph , and then graph using the result of (a). What type of conics (parabolas, ellipses, hyperbolas) are and ?       "
},
{
  "id": "d_self-adjoint",
  "level": "2",
  "url": "s_spectral_theorem.html#d_self-adjoint",
  "type": "Definition",
  "number": "5.6.1",
  "title": "Self-adjoint operators.",
  "body": " Self-adjoint operators   Let be a finite-dimensional inner product space. A linear transformation is called a self-adjoint operator if for all .   "
},
{
  "id": "th_self-adjoint_symmetric",
  "level": "2",
  "url": "s_spectral_theorem.html#th_self-adjoint_symmetric",
  "type": "Theorem",
  "number": "5.6.2",
  "title": "Self-adjoint operators and symmetry.",
  "body": " Self-adjoint operators and symmetry   Let be a finite-dimensional inner product space, let be a linear transformation, and let be an orthonormal ordered basis of . The following statements are equivalent.     is self-adjoint.     is symmetric.      Let . We have . Furthermore, since is orthonormal, the -th entry of is computed as ( ). Thus , where It follows that . The last equality in this chain of equivalences states that satisfies property for all elements of . Not surprisingly, this is equivalent to satisfying the property for all elements in . (See .) We conclude that is symmetric if and only if is self-adjoint.   "
},
{
  "id": "cor_self-adjoint_symmetric",
  "level": "2",
  "url": "s_spectral_theorem.html#cor_self-adjoint_symmetric",
  "type": "Corollary",
  "number": "5.6.3",
  "title": "Self-adjoint operators and symmetry.",
  "body": " Self-adjoint operators and symmetry   Let . The following statements are equivalent.     is symmetric.     is self-adjoint with respect to the dot product.     for all .      Since , where is the standard ordered basis of , and since is orthonormal with respect to the dot product, it follows from that statements (1) and (2) are equivalent. Statements (2) and (3) are equivalent since by definition for all .   "
},
{
  "id": "th_self-adjoint_eigenvalue",
  "level": "2",
  "url": "s_spectral_theorem.html#th_self-adjoint_eigenvalue",
  "type": "Theorem",
  "number": "5.6.4",
  "title": "Eigenvalues of self-adjoint operators.",
  "body": " Eigenvalues of self-adjoint operators   Let be a finite-dimensional inner product space. If is self adjoint, then all roots of its characteristic polynomial are real: i.e., we have , where for all .    Proof sketch of  Pick an orthonormal ordered basis of , and let . By , is symmetric. To prove that all roots of the characteristic polynomial are real, we make a slight detour into complex vector spaces. The set of all complex -tuples, together with the operations and where , forms what is called a vector space over . This means that satisfies the strengthened axioms of obtained by replacing every mention of a scalar with a scalar . Additionally, the vector space has the structure of a complex inner product defined as , where denotes the complex conjugate of for each . Essentially all of our theory of real vector spaces can be transported to complex vector spaces, including definitions and results about eigenvectors and inner products. The rest of this argument makes use of this principle by citing without proof some of these properties, and this is why it has been downgraded to a proof sketch .  We now return to and its characteristic polynomial . Recall that we want to show that all roots of are real. Let be a root of . The complex theory of eigenvectors implies that there is a nonzero vector satisfying . On the one hand, we have using properties of our complex inner product. On the other hand, since it is easy to see that extends to our complex inner product: , for all . Thus . (In the last equality we use the fact that our complex inner product satisfies for any and vectors .) It follows that . Since , we have (another property of our complex inner product), and thus . Since a complex number satisfies if and only if if and only if is real, we conclude that is a real number, as claimed.   "
},
{
  "id": "cor_self-adjoint_eigenvalue",
  "level": "2",
  "url": "s_spectral_theorem.html#cor_self-adjoint_eigenvalue",
  "type": "Corollary",
  "number": "5.6.5",
  "title": "Eigenvalues of self-adjoint operators.",
  "body": " Eigenvalues of self-adjoint operators   If is a self-adjoint operator on a finite-dimensional inner product space , then has an eigenvalue: , there is a and nonzero such that .    The corollary follows from and the fact that the eigenvalues of are the real roots of its characteristic polynomial ( ).   "
},
{
  "id": "eg_symmetric_matrix",
  "level": "2",
  "url": "s_spectral_theorem.html#eg_symmetric_matrix",
  "type": "Example",
  "number": "5.6.6",
  "title": "Symmetric <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices.",
  "body": " Symmetric matrices   Verify that the characteristic polynomial of any symmetric matrix factors into linear terms over .    Given a symmetric matrix , we have . Using the quadratic formula and some algebra, we see that the roots of are given by where (using the quadratic formula) . Since , we see that both these roots are real. Thus , where .   "
},
{
  "id": "ss_self-adjoint-12",
  "level": "2",
  "url": "s_spectral_theorem.html#ss_self-adjoint-12",
  "type": "Example",
  "number": "5.6.7",
  "title": "Symmetric <span class=\"process-math\">\\(4\\times 4\\)<\/span> matrix.",
  "body": " Symmetric matrix   Verify that the characteristic polynomial of the symmetric matrix factors into linear terms over .    The characteristic polynomial of is . We can use the quadratic equation to solve for , yielding . We conclude that or , and thus or . It follows that .   "
},
{
  "id": "th_spectral",
  "level": "2",
  "url": "s_spectral_theorem.html#th_spectral",
  "type": "Theorem",
  "number": "5.6.8",
  "title": "Spectral theorem for self-adjoint operators.",
  "body": " Spectral theorem for self-adjoint operators   Let be a finite-dimensional vector space, and let be a linear transformation. The following statements are equivalent.     is self-adjoint.     is diagonalizable and eigenvectors with distinct eigenvalues are orthogonal.     has an orthogonal eigenbasis.     has an orthonormal eigenbasis.      We will prove the cycle of implications .   Implication:  Assume is self adjoint. First we show that eigenvectors with distinct eigenvalues are orthogonal. To this end, suppose we have and , where . Using the definition of self-adjoint, we have . We now prove by induction on that if is self-adjoint, then is diagonalizable. The base case is trivial. Assume the result is true of any -dimensional inner product space, and suppose . By there is a nonzero with . Let . Since , we have . The following two facts are crucial for the rest of the argument and are left as an exercise ( ).   For all we have , and thus by restricting to we get a linear transformation .    The restriction is self-adjoint, considered as a linear transformation of the inner product space . Here the inner product on the subspace is inherited from by restriction.   Now since and is self-adjoint, we may assume by induction that has an eigenbasis . We claim that is an eigenbasis of . Since by definition for all , we see that the vectors are also eigenvectors of , and thus that consists of eigenvectors. To show is a basis it is enought to prove linear independence, since . Suppose we have for scalars . Taking the inner product with , we have : . It follows that we have , and thus for all , since is linearly independent. Having proved that is an eigenbasis, we conclude that is diagonalizable.    Implication:  Let be the distinct eigenvalues of . Since is assumed to be diagonalizable, following we can create an eigenbasis by picking bases of each eigenspace and combining them. We can always choose these bases so that each is orthogonal. When we do so, the assembled will be orthogonal as a whole. Indeed given any two elements of , if both vectors are elements of for some , then they are orthogonal by design ; furthermore, if is an element of basis and is an element of basis with , then they are eigenvectors with distinct eigenvalues, and hence orthogonal by assumption !    Implication:  This is easy to see since an orthonormal eigenbasis can be obtained from an orthogonal eigenbasis by scaling each element by the reciprocal of its norm.    Implication:  Assume is an orthonormal eigenbasis of . Since is an eigenbasis, is a diagonal matrix, and hence symmetric. Since is orthonormal with respect to the dot product, we conclude from that is self-adjoint.    "
},
{
  "id": "d_orthogonally_diagable",
  "level": "2",
  "url": "s_spectral_theorem.html#d_orthogonally_diagable",
  "type": "Definition",
  "number": "5.6.9",
  "title": "Orthogonally diagonalizable.",
  "body": " diagonalizable orthogonally  orthogonally diagonalizable  Orthogonally diagonalizable   Let be a finite-dimensional inner product space. A linear transformation is orthogonally diagonalizable if there exists an orthogonal (equivalently, an orthonormal) eigenbasis of .   "
},
{
  "id": "mantra_self-adjoint",
  "level": "2",
  "url": "s_spectral_theorem.html#mantra_self-adjoint",
  "type": "Mantra",
  "number": "5.6.10",
  "title": "Self-adjoint mantra.",
  "body": " Self-adjoint mantra   To be self-adjoint on a finite-dimensional inner product space is to be diagonalizable+ . In more detail: .   "
},
{
  "id": "cor_spectral",
  "level": "2",
  "url": "s_spectral_theorem.html#cor_spectral",
  "type": "Corollary",
  "number": "5.6.11",
  "title": "Spectral theorem for symmetric matrices.",
  "body": " Spectral theorem for symmetric matrices   Let be an matrix. The following statements are equivalent.     is symmetric.     is diagonalizable and eigenvectors with distinct eigenvalues are orthogonal with respect to the dot product.     is orthogonally diagonalizable.    There exists an orthogonal matrix  and diagonal matrix such that .      By we have symmetric if and only if is self-adjoint with respect to the dot product. Statements (1)-(3) are seen to be equivalent by applying to (with respect to the dot product). Let be the standard basis of . We see that (4) is equivalent to (3) by observing that is an orthonormal eigenbasis of if and only if the matrix obtained by placing the elements of as columns is orthogonal and diagonalizes .   "
},
{
  "id": "proc_ortho_diag",
  "level": "2",
  "url": "s_spectral_theorem.html#proc_ortho_diag",
  "type": "Procedure",
  "number": "5.6.12",
  "title": "Orthogonal diagonalization.",
  "body": " Orthogonal diagonalization   Let be a symmetric matrix. To orthogonally diagonalize proceed as follows.    Let be the distinct eigenvalues of . For each , compute an orthonormal ordered basis of .    Let be the ordered basis obtained by concatenating the orthonormal bases computed in (1). This is an orthonormal basis of eigenvectors. It follows that the matrix is orthogonal ( , ), and the matrix is diagonal.     "
},
{
  "id": "eg_ortho_diag",
  "level": "2",
  "url": "s_spectral_theorem.html#eg_ortho_diag",
  "type": "Example",
  "number": "5.6.13",
  "title": "Orthogonal diagonalization.",
  "body": " Orthogonal diagonalization   The symmetric matrix has characteristic polynomial . Find an orthogonal matrix and diagonal matrix such that .    First we factor . Looking at the constant term we see that the only possible integer roots of are . It is easily verified that , and polynomial division yields the factorization . Further factorization of gives us .  Next we compute orthonormal bases of the eigenspaces and , yielding . Assembling these bases elements into the orthogonal matrix , we conclude that , where .   "
},
{
  "id": "fig_ortho_diag",
  "level": "2",
  "url": "s_spectral_theorem.html#fig_ortho_diag",
  "type": "Figure",
  "number": "5.6.14",
  "title": "Eigenspaces of a symmetric matrix are orthogonal",
  "body": " Eigenspaces of a symmetric matrix are orthogonal   Eigenspaces of a symmetric matrix are orthogonal  "
},
{
  "id": "eg_ortho_proj_selfadjoint",
  "level": "2",
  "url": "s_spectral_theorem.html#eg_ortho_proj_selfadjoint",
  "type": "Example",
  "number": "5.6.15",
  "title": "Orthogonal projections are self-adjoint.",
  "body": " Orthogonal projections are self-adjoint   Let be a finite-dimensional inner product space, let be a subpsace of , and let be orthogonal projection onto . Prove that is self-adjoint.    By it suffices to show that is orthogonally diagonalizable. According to we have . Equivalently, and are the 1- and 0-eigenspaces of , respectively. Since we conclude that is diagonalizable. Since clearly and are orthogonal, we conclude that is in fact othogonally diagonalizable, hence self-adjoint.   "
},
{
  "id": "s_spectral_theorem_ex-1-2",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-2",
  "type": "Exercise",
  "number": "5.6.3.1",
  "title": "",
  "body": "    "
},
{
  "id": "s_spectral_theorem_ex-1-3",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-3",
  "type": "Exercise",
  "number": "5.6.3.2",
  "title": "",
  "body": "    "
},
{
  "id": "s_spectral_theorem_ex-1-4",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-4",
  "type": "Exercise",
  "number": "5.6.3.3",
  "title": "",
  "body": "    "
},
{
  "id": "s_spectral_theorem_ex-1-5",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-5",
  "type": "Exercise",
  "number": "5.6.3.4",
  "title": "",
  "body": "    "
},
{
  "id": "s_spectral_theorem_ex-1-6",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-6",
  "type": "Exercise",
  "number": "5.6.3.5",
  "title": "",
  "body": "    "
},
{
  "id": "s_spectral_theorem_ex-1-7",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-7",
  "type": "Exercise",
  "number": "5.6.3.6",
  "title": "",
  "body": "   "
},
{
  "id": "s_spectral_theorem_ex-1-8",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-8",
  "type": "Exercise",
  "number": "5.6.3.7",
  "title": "",
  "body": "    "
},
{
  "id": "s_spectral_theorem_ex-1-9",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-1-9",
  "type": "Exercise",
  "number": "5.6.3.8",
  "title": "",
  "body": "    "
},
{
  "id": "ex_self-adjoint_symmetric",
  "level": "2",
  "url": "s_spectral_theorem.html#ex_self-adjoint_symmetric",
  "type": "Exercise",
  "number": "5.6.3.9",
  "title": "",
  "body": " Let be a finite-dimensional inner product space, let be a linear transformation, and let be an ordered basis of . Prove: is self-adjoint if and only if for all . In other words, to prove is self-adjoint it suffices to show property holds for all elements of a basis of .  "
},
{
  "id": "ex_selfadjoint_complement",
  "level": "2",
  "url": "s_spectral_theorem.html#ex_selfadjoint_complement",
  "type": "Exercise",
  "number": "5.6.3.10",
  "title": "",
  "body": " Let be a finite-dimensional inner product space, let be a self-adjoint operator, and let be a subspace of .    Prove: if , then .    By (a), restricting to defines a linear transformation . Prove that is self-adjoint. Here the inner product on the subspace is inherited from by restriction.    "
},
{
  "id": "s_spectral_theorem_ex-4",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-4",
  "type": "Exercise",
  "number": "5.6.3.11",
  "title": "",
  "body": " Assume is symmetric and orthogonal. Prove that the characteristic polynomial of factors as for some nonnegative integers . In particular, the eigenvalues of are among and .  "
},
{
  "id": "s_spectral_theorem_ex-5-2",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-5-2",
  "type": "Exercise",
  "number": "5.6.3.12",
  "title": "",
  "body": " Find a symmetric matrix satisfying the following property: satisfies if and only if . (Here we conflate the matrix with the scalar .)  "
},
{
  "id": "s_spectral_theorem_ex-5-3",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-5-3",
  "type": "Exercise",
  "number": "5.6.3.13",
  "title": "",
  "body": " Show that there is a rotation matrix satisfying , where for some .   See .  "
},
{
  "id": "s_spectral_theorem_ex-5-4",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-5-4",
  "type": "Exercise",
  "number": "5.6.3.14",
  "title": "",
  "body": " Show that satisfies if and only if satisfies .  "
},
{
  "id": "s_spectral_theorem_ex-5-5",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-5-5",
  "type": "Exercise",
  "number": "5.6.3.15",
  "title": "",
  "body": " Explain why we can conclude that there is a rotation that maps the conic with equation to the conic with standard equation  .  "
},
{
  "id": "s_spectral_theorem_ex-5-6",
  "level": "2",
  "url": "s_spectral_theorem.html#s_spectral_theorem_ex-5-6",
  "type": "Exercise",
  "number": "5.6.3.16",
  "title": "",
  "body": " Let be the conic curve with equation .    Find an angle and constants such that the rotation maps to a conic with defining equation .    First graph , and then graph using the result of (a). What type of conics (parabolas, ellipses, hyperbolas) are and ?    "
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
  "id": "root-1-2-9-9",
  "level": "1",
  "url": "root-1-2-9-9.html",
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

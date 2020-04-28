.. qnum::
   :prefix: lists-overview
   :start: 1


Using Lists
=======================================

.. topic:: Quick Overview of Day

    Creating lists. Checking the length of a list. Access elements of a list using the index operator. Using ``in`` and ``not in``. Taking a slice of a list. Immutability of strings, mutability of lists. For loops with lists.


.. reveal:: curriculum_addressed_lists_overview
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.
    - **CS20-FP4**  Investigate one-dimensional arrays and their applications.


List Overview
---------------

We've been using lists throughout the course, so you probably already feel quite comfortable with them. Some of the following information will be a review for you, but we will spend a bit of time going into more depth than we have done up to now.

A **list** is a sequential collection of Python data values, where each value is identified by an
index. The values that make up a list are called its **elements**. Lists are
similar to strings, which are ordered collections of characters, except that the
elements of a list can have any type and for any one list, the items can be of different types.


List Values
-----------

There are several ways to create a new list.  The simplest is to enclose the
elements in square brackets ( ``[`` and ``]``).

.. sourcecode:: python
    
    [10, 20, 30, 40]
    ["spam", "bungee", "swallow"]

The first example is a list of four integers. The second is a list of three
strings. As we said above, the elements of a list don't have to be the same type.  The following
list contains a string, a float, an integer, and
another list.

.. sourcecode:: python
    
    ["hello", 2.0, 5, [10, 20]]

A list within another list is said to be **nested** and the inner list is often called a **sublist**.
Finally, there is a special list that contains no elements. It is called the
empty list and is denoted ``[]``.

As you would expect, we can also assign list values to variables and pass lists as parameters to functions.  

.. activecode:: list_overview_1
    
    vocabulary = ["iteration", "selection", "control"]
    numbers = [17, 123]
    empty = []
    mixed_list = ["hello", 2.0, 5*2, [10, 20]]

    print(numbers)
    print(mixed_list)
    new_list = [ numbers, vocabulary ]
    print(new_list)

.. index:: len()

List Length
-----------

As with strings, the function ``len`` returns the length of a list (the number
of items in the list).  However, since lists can have items which are themselves lists, it important to note
that ``len`` only returns the top-most length.  In other words, sublists are considered to be a single
item when counting the length of the list.

.. activecode:: list_overview_2

    a_list =  ["hello", 2.0, 5, [10, 20]]
    print(len(a_list))
    print(len(['Hepburn', 1, ['Saskatoon', 'Regina', 'Prince Albert'], [1, 2, 3]]))


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: test_question9_2_1
   :answer_a: 4
   :answer_b: 5
   :correct: b
   :feedback_a: len returns the actual number of items in the list, not the maximum index value.
   :feedback_b: Yes, there are 5 items in this list.

   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", 3.14, False]
     print(len(a_list))
   
   
.. mchoice:: test_question9_2_2
   :answer_a: 7
   :answer_b: 8
   :correct: a
   :feedback_a: Yes, there are 7 items in this list even though two of them happen to also be lists.
   :feedback_b: len returns the number of top level items in the list.  It does not count items in sublists.

   What is printed by the following statements?
   

   .. code-block:: python

      a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(len(a_list))


.. index:: index operator

Accessing Elements
------------------

The syntax for accessing the elements of a list is the same as the syntax for
accessing the characters of a string.  We use the index operator ( ``[]`` -- not to
be confused with an empty list). The expression inside the brackets specifies
the index. Remember that the indices start at 0.  Any integer expression can be used
as an index and as with strings, negative index values will locate items from the right instead
of from the left.

.. activecode:: list_overview_3
    
    numbers = [17, 123, 87, 34, 66, 8398, 44]
    print(numbers[2])
    print(numbers[9 - 8])
    print(numbers[-2])
    print(numbers[len(numbers) - 1])
    

Also note that you can use the index operator ``[]`` more than once in a row to access things inside the list. For example, if you had a list of places in Saskatchewan, you could access both a place, as well as an individual character, as follows:

.. activecode:: list_overview_4
    
    places = ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Yorkton", "Swift Current", "North Battleford"]
    print(places[2])
    print(places[2][1])

The same syntax works if you are trying to access an element of a list inside a list as well. Consider the following:

.. activecode:: list_overview_5
    
    places = [["Saskatoon", "Regina"], ["Prince Albert", "Moose Jaw"], ["Yorkton", "Swift Current", "North Battleford"]]
    print(places[2])
    print(places[2][1])
    print(places[2][1][3])


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~
 
.. mchoice:: test_question9_3_1
   :answer_a: [ ]
   :answer_b: 3.14
   :answer_c: False
   :correct: b
   :feedback_a: The empty list is at index 4.
   :feedback_b: Yes, 3.14 is at index 5 since we start counting at 0 and sublists count as one item.
   :feedback_c: False is at index 6.
   
   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(a_list[5])

   
.. mchoice:: test_question9_3_3
   :answer_a: 56
   :answer_b: c
   :answer_c: cat
   :answer_d: Error, you cannot have two index values unless you are using slicing.
   :correct: b
   :feedback_a: Indexes start with 0, not 1.
   :feedback_b: Yes, the first character of the string at index 2 is c 
   :feedback_c: cat is the item at index 2 but then we index into it further.
   :feedback_d: Using more than one index is fine.  You read it from left to right.
   
   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(a_list[2][0])

.. index:: in, not in
   
List Membership
---------------

``in`` and ``not in`` are boolean operators that test membership in a sequence. We
used them previously with strings and they also work here.

.. activecode:: list_overview_6
    
    fruit = ["apple", "orange", "banana", "cherry"]

    print("apple" in fruit)
    print("pear" in fruit)


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: test_question9_4_1
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Yes, 3.14 is an item in the list a_list.
   :feedback_b: There are 7 items in the list, 3.14 is one of them. 
   
   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(3.14 in a_list)


.. mchoice:: test_question9_4_2
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: in returns True for top level items only.  57 is in a sublist.
   :feedback_b: Yes, 57 is not a top level item in a_list.  It is in a sublist.
   
   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(57 in a_list)


.. index:: slice operator

List Slices
-----------

The slice operation we saw with strings also work on lists.  Remember that the first index is the starting point for the slice and the second number is one index past the end of the slice (up to but not including that element).  Recall also
that if you omit the first index (before the colon), the slice starts at the
beginning of the sequence. If you omit the second index, the slice goes to the
end of the sequence.

.. activecode:: list_overview_7
    
    a_list = ['a', 'b', 'c', 'd', 'e', 'f']
    print(a_list[1:3])
    print(a_list[:4])
    print(a_list[3:])
    print(a_list[:])

Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: test_question9_6_1
   :answer_a: [ [ ], 3.14, False]
   :answer_b: [ [ ], 3.14]
   :answer_c: [ [56, 57, "dog"], [ ], 3.14, False]
   :correct: a
   :feedback_a: Yes, the slice starts at index 4 and goes up to and including the last item.
   :feedback_b: By leaving out the upper bound on the slice, we go up to and including the last item.
   :feedback_c: Index values start at 0.
   
   What is printed by the following statements?
   
   .. code-block:: python
   
     a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(a_list[4:])


.. index:: immutable

Strings are Immutable
----------------------

One thing that makes strings different from Python lists is that
you are not allowed to modify the individual characters in a string.  It is tempting to use the ``[]`` operator on the left side of an assignment,
with the intention of changing a character in a string.  For example, in the following code, we would like to change the first letter of ``greeting``.

.. activecode:: cg08_imm1
    
    greeting = "Hello, world!"
    greeting[0] = 'J'            # ERROR!
    print(greeting)

Instead of producing the output ``Jello, world!``, this code produces the
runtime error ``TypeError: 'str' object does not support item assignment``.

Strings are **immutable**, which means you cannot change an existing string. The
best you can do is create a new string that is a variation on the original.

.. activecode:: ch08_imm2
    
    greeting = "Hello, world!"
    new_greeting = 'J' + greeting[1:]
    print(new_greeting)
    print(greeting)            # same as it was

The solution here is to concatenate a new first letter onto a slice of
``greeting``. This operation has no effect on the original string.


.. index:: mutable

Lists are Mutable
-------------------

Unlike strings, lists are **mutable**.  This means we can change an item in a list by accessing
it directly as part of the assignment statement. Using the indexing operator (square brackets) on the left side of an assignment, we can
update one of the list items.

.. activecode:: ch09_7
    
    fruit = ["banana", "apple", "cherry"]
    print(fruit)

    fruit[0] = "pear"
    fruit[-1] = "orange"
    print(fruit)


An assignment to an element of a list is called **item assignment**. Item
assignment does not work for strings.  Recall that strings are immutable.


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: test_question9_7_1
   :answer_a: [4, 2, True, 8, 6, 5]
   :answer_b: [4, 2, True, 6, 5]
   :answer_c: Error, it is illegal to assign
   :correct: b
   :feedback_a: Item assignment does not insert the new item into the list.
   :feedback_b: Yes, the value True is placed in the list at index 2.  It replaces 8.
   :feedback_c: Item assignment is allowed with lists.  Lists are mutable.
   
   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [4, 2, 8, 6, 5]
     a_list[2] = True
     print(a_list)


Lists and ``for`` loops
-----------------------

It is also possible to perform **list traversal** using iteration by item as well as iteration by index.


.. activecode:: chp09_03a

    fruits = ["apple", "orange", "banana", "cherry"]

    # looping by item
    for some_fruit in fruits:     
        print(some_fruit)

It almost reads like natural language: For (every) fruit in (the list of) fruits,
print (the name of the) fruit.

We can also use the indices to access the items in an iterative fashion.

.. activecode:: chp09_03b

    fruits = ["apple", "orange", "banana", "cherry"]

    # looping by index
    for position in range(len(fruits)):     
        print(fruits[position])


In this example, each time through the loop, the variable ``position`` is used as an index into the
list, printing the ``position``-eth element. Note that we used ``len`` as the upper bound on the range
so that we can iterate correctly no matter how many items are in the list.


Since lists are mutable, it is often desirable to traverse a list, modifying
each of its elements as you go. The following code squares all the numbers from ``1`` to
``5`` using iteration by position.

.. activecode:: chp09_for4

    numbers = [1, 2, 3, 4, 5]
    print(numbers)

    for i in range(len(numbers)):
        numbers[i] = numbers[i] ** 2

    print(numbers)


Take a moment to think about ``range(len(numbers))`` until you understand how
it works. We are interested here in both the *value* and its *index* within the
list, so that we can assign a new value to it.


Practice Problems
-------------------

Warmup
~~~~~~~

Create a list called ``my_list`` with the following six items: ``76, 92.3, "hello", True, 4, 76``. Print out the list to make sure it is doing what you intend.

.. activecode:: list_overview_practice_problem_1
    :enabledownload:
    
    # your code goes here!



Make it Fun
~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: list_overview_practice_problem_6
    :nocodelens:
    :enabledownload:

    Write a function to replace the first element of a list with the word ``"fun"``, and then return the altered list. You can assume that the list will always have at least one element.

    **Examples:**

    ``make_fun(["computer", "science"]) → ["fun", "science"]``

    ``make_fun(["sask", "is", "nice"]) → ["fun", "is", "nice"]``

    ``make_fun(["we", "live", "in", "saskatchewan"]) → ["fun", "live", "in", "saskatchewan"]``
    ~~~~   
    def make_fun(a_list):
        # your code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(make_fun(["computer", "science"]),["fun", "science"],'make_fun(["computer", "science"])')
          self.assertEqual(make_fun(["sask", "is", "nice"]),["fun", "is", "nice"],'make_fun(["sask", "is", "nice"])')
          self.assertEqual(make_fun(["we", "live", "in", "saskatchewan"]),["fun", "live", "in", "saskatchewan"],'make_fun(["we", "live", "in", "saskatchewan"])')

    myTests().main()


Sum of Squares
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: list_overview_practice_problem_2
    :nocodelens:
    :enabledownload:

    Write a function ``sum_of_squares(a_list)`` that computes the sum of the squares of the numbers in the list ``a_list``.  For example, ``sum_of_squares([2, 3, 4])`` should return 29, which is the sum of 4+9+16.

    **Examples:**

    ``sum_of_squares([2,3,4]) → 29``

    ``sum_of_squares([0,1,-1]) → 2``

    ``sum_of_squares([5,12]) → 169``
    ~~~~   
    def sum_of_squares(a_list):
        # your code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(sum_of_squares([2,3,4]),29,"sum_of_squares([2,3,4])")
          self.assertEqual(sum_of_squares([0,1,-1]),2,"sum_of_squares([0,1,-1])")
          self.assertEqual(sum_of_squares([5,12]),169,"sum_of_squares([5,12])")
          self.assertEqual(sum_of_squares([5,12,14]),365,"sum_of_squares([5,12,14])")
          self.assertEqual(sum_of_squares([5]),25,"sum_of_squares([5])")

    myTests().main()


Count Odd Numbers 
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: list_overview_practice_problem_3
    :nocodelens:
    :enabledownload:

    Write a function to count how many odd numbers are in a list.

    **Examples:**

    ``count_odds([1,3,5,7,9]) → 5``

    ``count_odds([1,2,3,4,5]) → 3``

    ``count_odds([2,4,6,8,10]) → 0``
    ~~~~   
    def count_odds(a_list):
        # your code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(count_odds([1,3,5,7,9]),5,"count_odds([1,3,5,7,9])")
          self.assertEqual(count_odds([1,2,3,4,5]),3,"count_odds([-1,-2,-3,-4,-5])")
          self.assertEqual(count_odds([2,4,6,8,10]),0,"count_odds([2,4,6,8,10])")
          self.assertEqual(count_odds([0,-1,12,-33]),2,"count_odds([0,-1,12,-33])")

    myTests().main()



Count Words with Length 5 
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: list_overview_practice_problem_4
    :nocodelens:
    :enabledownload:

    Write a function to count how many words in a list have a length of 5.

    **Examples:**

    ``count_words(["computer", "science"]) → 0``

    ``count_words(["nobody", "knows"]) → 1``

    ``count_words(["think", "pizza", "quick"]) → 3``
    ~~~~   
    def count_words(a_list):
        # your code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(count_words(["computer", "science"]),0,'count_words(["computer", "science"])')
          self.assertEqual(count_words(["nobody", "knows"]),1,'count_words(["nobody", "knows"])')
          self.assertEqual(count_words(["think", "pizza", "quick"]),3,'count_words(["think", "pizza", "quick"])')

    myTests().main()


Look For "saskatchewan"
~~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: list_overview_practice_problem_5
    :nocodelens:
    :enabledownload:

    Write a function to check if the word "saskatchewan" shows up somewhere in a list. If it does, return ``True``. If it doesn't, return ``False``.

    **Examples:**

    ``has_sask(["computer", "science"]) → False``

    ``has_sask(["sask", "is", "nice"]) → False``

    ``has_sask(["we", "live", "in", "saskatchewan"]) → True``
    ~~~~   
    def has_sask(a_list):
        # your code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def testOne(self):
          self.assertEqual(has_sask(["computer", "science"]),False,'has_sask(["computer", "science"])')
          self.assertEqual(has_sask(["sask", "is", "nice"]),False,'has_sask(["sask", "is", "nice"])')
          self.assertEqual(has_sask(["we", "live", "in", "saskatchewan"]),True,'has_sask(["we", "live", "in", "saskatchewan"])')
          self.assertEqual(has_sask(["saskatchewan", "roughriders"]),True,'has_sask(["saskatchewan", "roughriders"])')
          self.assertEqual(has_sask(["saskatoon", "has", "bridges"]),False,'has_sask(["saskatoon", "has", "bridges"])')

    myTests().main()


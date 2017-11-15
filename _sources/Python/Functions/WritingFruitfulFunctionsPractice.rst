
.. qnum::
   :prefix: fruitful-functions-practice
   :start: 1


Writing Fruitful Functions Practice
====================================

.. topic:: Quick Overview of Day

    Warmup drawing problem. WDTPD questions about functions. Students practice writing fruitful functions.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Warmup Problem
---------------

.. image:: images/confusion-25.png

Draw the image above using the Python turtle module. **You must define a function as part of your solution!**

.. activecode:: turtle_confusion_practice_25
    :nocanvas:
    :nocodelens:

    import turtle


What Does This Program Do?
---------------------------

Remember that variables created inside of a function have **local scope** (can only be used inside that function), whereas variables created outside of a function have **global scope** (can be accessed from anywhere).

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_functions_1
    :caption: What will this program print?

    def a():
        print("A")

    def b():
        print("B")

    def c():
        print("C")

    a()


.. activecode:: wdtpd_functions_2
    :caption: What will this program print?

    def a():
        b()
        print("A")

    def b():
        c()
        print("B")

    def c():
        print("C")

    a()


.. activecode:: wdtpd_functions_3
    :caption: What will this program print?

    def a():
        print("A")
        b()
         
    def b():
        print("B")
        c()
         
    def c():
        print("C")
           
    a()


.. activecode:: wdtpd_functions_4
    :caption: What will this program print?

    def a():
        print("A start")
        b()
        print("A end")
         
    def b():
        print("B start")
        c()
        print("B end")
         
    def c():
        print("C start and end")
         
    a()



.. activecode:: wdtpd_functions_5
    :caption: What will this program print?

    def foo():
        print(a)

    a = 10
    foo()


.. activecode:: wdtpd_functions_6
    :caption: What will this program print?

    def foo():
        a = a + 1
        print(a)

    a = 10
    foo()


.. activecode:: wdtpd_functions_7
    :caption: What will this program print?

    def a(x):
        print("A start, x =",x)
        b(x + 1)
        print("A end, x =",x)
         
    def b(x):
        print("B start, x =",x)
        c(x + 1)
        print("B end, x =",x)
         
    def c(x):
        print("C start and end, x =",x)
         
    a(5)


.. activecode:: wdtpd_functions_8
    :caption: What will this program print?

    def a(x):
        x = x + 1
     
    x = 3
    a(x)
     
    print(x)


.. activecode:: wdtpd_functions_9
    :caption: What will this program print?

    def a(x):
        x = x + 1
        return x
     
    x = 3
    a(x)
     
    print(x)


.. activecode:: wdtpd_functions_10
    :caption: What will this program print?

    def a(x):
        x = x + 1
        return x
     
    x = 3
    x = a(x)
     
    print(x)


Practice Problems
------------------

Try the following practice problems to be sure you understand how to create fruitful functions. Your functions **have** to return the correct value -- using ``print()`` will not work. When you run your code for these questions, your code will automatically be checked with a number of test cases to see if your function works in all situations. You will be able to see any situations in which your function does not provide the correct answer.

.. note:: The only thing you need to do for the following is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.


Area of rectangle
~~~~~~~~~~~~~~~~~~

.. activecode:: rectangle-area
    :nocodelens:

    The parameters ``length`` and ``width`` represent the lengths of the sides of a rectangle. Calculate the area of the rectangle with the given values, and return the result. 

    **Examples:**

    ``rectangle_area(5, 10) → 50``

    ``rectangle_area(1, 10) → 10``

    ``rectangle_area(2, 6) → 12``
    ~~~~
    def rectangle_area(length, width):
        return 0

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(rectangle_area(5, 10),50,"X")
            self.assertEqual(rectangle_area(1, 10),10,"X")
            self.assertEqual(rectangle_area(2, 6),12,"X")
            self.assertEqual(rectangle_area(1, 1),1,"X")
            self.assertEqual(rectangle_area(3, 5),15,"X")
            self.assertEqual(rectangle_area(15, 4),60,"X")

    myTests().main()


Find the Smallest
~~~~~~~~~~~~~~~~~~

.. activecode:: find-min
    :nocodelens:

    The function find_min(a, b, c) will take three numbers as parameters and return the *smallest* value. If more than one number is tied for the smallest, still return that smallest number. Note that you cannot use the ``min`` function in this solution.

    **Examples:**

    ``find_min(4, 7, 5) → 4``

    ``find_min(4, 5, 5) → 4``

    ``find_min(4, -7, 5) → -7``
    ~~~~
    def find_min(a, b, c):
        return a

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(find_min(4, 7, 5),4,"X")
            self.assertEqual(find_min(4, 5, 5),4,"X")
            self.assertEqual(find_min(4, 4, 4),4,"X")
            self.assertEqual(find_min(-2, -6, -100),-100,"X")
            self.assertEqual(find_min(4, -7, 5),-7,"X")
            self.assertEqual(find_min(-4, 7, -5),-5,"X")

    myTests().main()



Letter Grade
~~~~~~~~~~~~~~~~~~~~~

.. activecode:: letter-grade
    :nocodelens:

    Write a function that returns the letter grade, given an exam mark as the parameter. The grading scheme is:

    =============   ================
    Letter Grade    Interval
    =============   ================
    A               >= 90
    B               [80, 90)
    C               [70, 80)
    D               [60, 70)
    F               < 60
    =============   ================

    The square and round brackets denote closed and open intervals. A closed interval includes the number, and open interval excludes it. So 79.99999 gets grade C, but 80 gets grade B.

    **Examples:**

    ``letter_grade(83) → "B"``

    ``letter_grade(73) → "C"``

    ``letter_grade(80) → "B"``
    ~~~~
    def letter_grade(exam_grade):
        return "A"

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(letter_grade(83),"B","X")
            self.assertEqual(letter_grade(75),"C","X")
            self.assertEqual(letter_grade(80),"B","X")
            self.assertEqual(letter_grade(90),"A","X")
            self.assertEqual(letter_grade(89.9),"B","X")
            self.assertEqual(letter_grade(55),"F","X")
            self.assertEqual(letter_grade(45),"F","X")
            self.assertEqual(letter_grade(69.7),"D","X")

    myTests().main()


Is Even
~~~~~~~~~~~~~~~~~~

.. activecode:: is-even
    :nocodelens:

    The function is_even(number) will return ``True`` if the number passed in is even, and ``False`` if it is odd. Hint: You might want to look back at the :ref:`math_operator_list` list.

    **Examples:**

    ``is_even(4) → True``

    ``is_even(-4) → True``

    ``is_even(5) → False``
    ~~~~
    def is_even(number):
        return False

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(is_even(4),True,"X")
            self.assertEqual(is_even(-4),True,"X")
            self.assertEqual(is_even(5),False,"X")
            self.assertEqual(is_even(-5),False,"X")
            self.assertEqual(is_even(0),True,"X")
            self.assertEqual(is_even(513),False,"X")

    myTests().main()



Leap Year
~~~~~~~~~~~~~~~~~~

.. activecode:: leap-year
    :nocodelens:

    A year is a leap year if it is divisible by 4 unless it is a century that is not divisible by 400. Write a function that takes a year as a parameter and returns True if the year is a leap year, False otherwise. The following pseudocode determines whether a year is a leap year or a common year in the Gregorian calendar (from `Wikipedia <http://en.wikipedia.org/wiki/Leap_year#Algorithm>`_):

        if (year is not divisible by 4) then (it is a common year)
        else if (year is not divisible by 100) then (it is a leap year)
        else if (year is not divisible by 400) then (it is a common year)
        else (it is a leap year)

    **Examples:**

    ``leap_year(2001) → False``

    ``leap_year(2020) → True``

    ``leap_year(1900) → False``
    ~~~~
    def leap_year(year):
        return False

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(leap_year(2001),False,"2001")
            self.assertEqual(leap_year(2020),True,"2020")
            self.assertEqual(leap_year(1900),False,"1900")
            self.assertEqual(leap_year(2004),True,"2004")
            self.assertEqual(leap_year(2000),True,"2000")

            
    myTests().main()


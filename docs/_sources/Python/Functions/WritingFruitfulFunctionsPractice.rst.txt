.. qnum::
   :prefix: fruitful-functions
   :start: 1


Writing Fruitful Functions Practice
====================================

.. topic:: Quick Overview of Day

    Warmup drawing problem. WDTPD questions about functions. Students practice writing fruitful functions.


.. reveal:: curriculum_addressed_fruitful_functions
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.


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

    def doubler(some_number):
        new_value = some_number * 2
        return new_value
        
    initial_value = 15
    new_value = doubler(initial_value)
    print(new_value)


.. activecode:: wdtpd_functions_8
    :caption: What will this program print?

    def greeting(first_name, last_name):
        message = f"Hello there, {first_name} {last_name}!"
        return message
        
    first = "Sherlock"
    last = "Holmes"
    print(greeting(first, last))


.. activecode:: wdtpd_functions_9
    :caption: What will this program print?

    def is_big(number):
        if number > 42:
            return True
        else:
            return False
        
    my_number = 50
    result = is_big(my_number)
    print(result)



Practice Problems
------------------

Try the following practice problems to be sure you understand how to create fruitful functions. Your functions **have** to return the correct value -- using ``print()`` will not work. When you run your code for these questions, your code will automatically be checked with a number of test cases to see if your function works in all situations. You will be able to see any situations in which your function does not provide the correct answer.

.. note:: The only thing you need to do for the following is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.


Area of rectangle
~~~~~~~~~~~~~~~~~~

.. activecode:: rectangle-area
    :enabledownload:

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
            self.assertEqual(rectangle_area(5, 10),50,"rectangle_area(5, 10)")
            self.assertEqual(rectangle_area(1, 10),10,"rectangle_area(1, 10)")
            self.assertEqual(rectangle_area(2, 6),12,"rectangle_area(2, 6)")
            self.assertEqual(rectangle_area(1, 1),1,"rectangle_area(1, 1)")
            self.assertEqual(rectangle_area(3, 5),15,"rectangle_area(3, 5)")
            self.assertEqual(rectangle_area(15, 4),60,"rectangle_area(15, 4)")

    myTests().main()


Letter Grade
~~~~~~~~~~~~~~~~~~~~~

.. activecode:: letter-grade
    :enabledownload:

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
            self.assertEqual(letter_grade(83),"B","letter_grade(83)")
            self.assertEqual(letter_grade(75),"C","letter_grade(75)")
            self.assertEqual(letter_grade(80),"B","letter_grade(80)")
            self.assertEqual(letter_grade(90),"A","letter_grade(90)")
            self.assertEqual(letter_grade(89.9),"B","letter_grade(89.9)")
            self.assertEqual(letter_grade(55),"F","letter_grade(55)")
            self.assertEqual(letter_grade(45),"F","letter_grade(45)")
            self.assertEqual(letter_grade(69.7),"D","letter_grade(69.7)")

    myTests().main()


Find the Smallest
~~~~~~~~~~~~~~~~~~

.. activecode:: find-min
    :enabledownload:

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
            self.assertEqual(find_min(4, 7, 5),4,"find_min(4, 7, 5)")
            self.assertEqual(find_min(4, 5, 5),4,"find_min(4, 5, 5)")
            self.assertEqual(find_min(4, 4, 4),4,"find_min(4, 4, 4)")
            self.assertEqual(find_min(-2, -6, -100),-100,"find_min(-2, -6, -100)")
            self.assertEqual(find_min(-2, -100, -6),-100,"find_min(-2, -100, -6)")
            self.assertEqual(find_min(4, -7, 5),-7,"find_min(4, -7, 5)")
            self.assertEqual(find_min(-4, 7, -5),-5,"find_min(-4, 7, -5)")

    myTests().main()

.. _is_even_fruitful_function:

Is Even
~~~~~~~~~~~~~~~~~~

.. activecode:: is-even
    :enabledownload:

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
            self.assertEqual(is_even(4),True,"is_even(4)")
            self.assertEqual(is_even(-4),True,"is_even(-4)")
            self.assertEqual(is_even(5),False,"is_even(5)")
            self.assertEqual(is_even(-5),False,"is_even(-5)")
            self.assertEqual(is_even(0),True,"is_even(0)")
            self.assertEqual(is_even(513),False,"is_even(513)")
            self.assertEqual(is_even(1235518),True,"is_even(1235518)")

    myTests().main()



Leap Year
~~~~~~~~~~~~~~~~~~

.. activecode:: leap-year
    :enabledownload:

    A year is a leap year if it is divisible by 4 unless it is a century that is not divisible by 400. Write a function that takes a year as a parameter and returns True if the year is a leap year, False otherwise. The following pseudocode determines whether a year is a leap year or a common year in the Gregorian calendar (from `Wikipedia <http://en.wikipedia.org/wiki/Leap_year#Algorithm>`_):

        | if (year is not divisible by 4) then (it is a common year)
        | else if (year is not divisible by 100) then (it is a leap year)
        | else if (year is not divisible by 400) then (it is a common year)
        | else (it is a leap year)

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
            self.assertEqual(leap_year(2001),False,"leap_year(2001)")
            self.assertEqual(leap_year(2020),True,"leap_year(2020)")
            self.assertEqual(leap_year(1900),False,"leap_year(1900)")
            self.assertEqual(leap_year(2004),True,"leap_year(2004)")
            self.assertEqual(leap_year(2000),True,"leap_year(2000)")

            
    myTests().main()




Using Your Is Even Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that continues to take in a number from the user until the number given is NOT even. For example, the user might enter 4, 10, 42, 5. The program would only stop when the non-even number 5 is entered. You need to use the ``is_even`` function you defined above.

.. activecode:: using-is-even
    :enabledownload:

    # your code here!
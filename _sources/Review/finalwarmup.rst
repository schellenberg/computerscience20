.. qnum::
   :prefix: final-python-warmup
   :start: 1

Python Warmup
=================


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

.. activecode:: final-warmup-find-min
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
            self.assertEqual(find_min(4, 7, 5),4,"find_min(4, 7, 5)")
            self.assertEqual(find_min(4, 5, 5),4,"find_min(4, 5, 5)")
            self.assertEqual(find_min(4, 4, 4),4,"find_min(4, 4, 4)")
            self.assertEqual(find_min(-2, -6, -100),-100,"find_min(-2, -6, -100)")
            self.assertEqual(find_min(4, -7, 5),-7,"find_min(4, -7, 5)")
            self.assertEqual(find_min(-4, 7, -5),-5,"find_min(-4, 7, -5)")

    myTests().main()


First Letter of a Word
~~~~~~~~~~~~~~~~~~~~~~~

.. activecode:: final-warmup-first-letter
    :nocodelens:

    Create a function with a single parameter ``word`` that returns ``True`` if the ``word`` begins with the letter "t" or "c".

    **Examples:**

    ``starts_with_tc("thing") → True``

    ``starts_with_tc("concatenation") → True``

    ``starts_with_tc("warman") → False``
    ~~~~
    def starts_with_tc(word):
        return False

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(starts_with_tc("thing"),True,'starts_with_tc("thing")')
            self.assertEqual(starts_with_tc("concatenation"),True,'starts_with_tc("concatenation")')
            self.assertEqual(starts_with_tc("warman"),False,'starts_with_tc("warman")')
            self.assertEqual(starts_with_tc("Thing"),False,'starts_with_tc("Thing")')
            self.assertEqual(starts_with_tc("candy"),True,'starts_with_tc("candy")')
            self.assertEqual(starts_with_tc("saskatoon"),False,'starts_with_tc("saskatoon")')

    myTests().main()


Even Letters of a Word
~~~~~~~~~~~~~~~~~~~~~~~

.. activecode:: final-warmup-even-letters
    :nocodelens:

    Create a function with a single parameter ``word`` that returns the even letters of the ``word`` (the first letter is even, since we start counting our index values at 0). For example, given the ``word`` "Saskatoon", the function should return "Ssaon".

    **Examples:**

    ``even_letters("Saskatoon") → "Ssaon"``

    ``even_letters("Saskatchewan") → "Ssacea"``

    ``even_letters("Roughriders") → "Ruhies"``
    ~~~~
    def even_letters(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(even_letters("Saskatoon"),"Ssaon",'even_letters("Saskatoon")')
            self.assertEqual(even_letters("Saskatchewan"),"Ssacea",'even_letters("Saskatchewan")')
            self.assertEqual(even_letters("Roughriders"),"Ruhies",'even_letters("Roughriders")')
            self.assertEqual(even_letters("Tisdale"),"Tsae",'even_letters("Tisdale")')
            self.assertEqual(even_letters("Hepburn"),"Hpun",'even_letters("Hepburn")')
            self.assertEqual(even_letters("Neuanlage"),"Nunae",'even_letters("Neuanlage")')
            self.assertEqual(even_letters("Blumenheim"),"Buehi",'even_letters("Blumenheim")')

    myTests().main()
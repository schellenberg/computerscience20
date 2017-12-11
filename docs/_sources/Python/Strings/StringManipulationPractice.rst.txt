.. qnum::
   :prefix: string-manipulation-practice
   :start: 1

String Manipulation Practice
==================================

.. topic:: Quick Overview of Day

    WDTPD string questions. Practice problems with string manipulation. Time to catch up on any string practice problems not completed on previous days.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

**What will the following programs output? Why?**

.. activecode:: wdtpd_string_manipulation_practice_1
    :caption: What will this program print?

    fruit = "grapefruit"
    for item in fruit:
        print(item)

    # after you determine what this will print, rename the variable name item to something more helpful for understanding the loop


.. activecode:: wdtpd_string_manipulation_practice_2
    :caption: What will this program print?

    fruit = "grapefruit"
    for counter in len(fruit):
        print(fruit[item])

.. activecode:: wdtpd_string_manipulation_practice_3
    :caption: What will this program print?

    sentence = "saskatoon saskatchewan"
    for current_index in range(len(sentence)):
      if current_index % 4 == 0:
          print(sentence[current_index])

.. activecode:: wdtpd_string_manipulation_practice_4
    :caption: What will this program print?

    def foo(text):
        count = 0
        for c in text:
            if c == "a":
                count += 1
        return(count)

    print(foo("banana"))
    
    # print(foo("orange"))


Controlling a Turtle With Strings
-----------------------------------

By combining what we know about moving turtles on the screen, and what we have learned about traversing strings, we can now write a program that controls the movement of a turtle based on a string. For example, the string ``FF+F-FF`` might make a turtle:

- move forward by some distance twice in a row
- turn right by some angle
- move forward again
- turn left by some angle
- move forward twice in a row 

To turn a string like ``FF+F-FF`` into a set of instructions that our turtle can execute, we need to look at each character of the string, one at a time. We can do this easily with a for loop, as you can see in the following example.

.. activecode:: string_turtle_movement_1
    
    import turtle

    canvas = turtle.Screen()
    escher = turtle.Turtle()
    escher.speed(1)

    instructions = "FF+F-FF"

    for task in instructions:
        if task == "F":
            escher.forward(25)
        elif task == "+":
            escher.right(45)
        elif task == "-":
            escher.left(45)


.. note:: 

    In the code above, try:

    - changing the instruction string to have the turtle draw a different image
    - adding three additional possible instruction for the turtle. Any ``B`` in the string should be interpreted as an instruction to move backwards (by the same amount as ``F`` moves forward). A ``U`` should cause the turtle to pick up it's pen (so it doesn't draw as it moves). A ``D`` should cause the turtle should put down it's pen (so that it draws as it moves).
    - increasing the speed of the turtle
    
    After completing the tasks above, try having the turtle use the following instruction string: ``UBBBBBBDF-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F``



Practice Problems
------------------

Try the following practice problems. You can either work directly in the textbook, or use Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish!

**Hint: For each of the following, you will want to use the accumulator pattern with strings. In other words, you first need to create an empty string, then concatenate letters onto it as needed.**


Even Letters of a Word
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_1
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


Reverse Me
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_2
    :nocodelens:

    Create a function with a single parameter ``word`` that returns the ``word`` spelled backwards. For example, if the ``word`` was "Saskatoon", the function should return "nootaksaS".

    **Examples:**

    ``reverse_me("Saskatoon") → "nootaksaS"``

    ``reverse_me("Saskatchewan") → "nawehctaksaS"``

    ``reverse_me("Roughriders") → "sredirhguoR"``
    ~~~~
    def reverse_me(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(reverse_me("Saskatoon"),"nootaksaS",'reverse_me("Saskatoon")')
            self.assertEqual(reverse_me("Saskatchewan"),"nawehctaksaS",'reverse_me("Saskatchewan")')
            self.assertEqual(reverse_me("Roughriders"),"sredirhguoR",'reverse_me("Roughriders")')
            self.assertEqual(reverse_me("Oxbow"),"wobxO",'reverse_me("Oxbow")')
            self.assertEqual(reverse_me("Lumsden"),"nedsmuL",'reverse_me("Lumsden")')
            self.assertEqual(reverse_me("La Loche"),"ehcoL aL",'reverse_me("La Loche")')
            self.assertEqual(reverse_me("Waskesiu"),"uiseksaW",'reverse_me("Waskesiu")')

    myTests().main()



Letter Destroyer
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_3
    :nocodelens:

    Create a function with two parameters, ``word`` and ``letter_to_destroy``. The function should return the ``word``, but without any of the occurrences of the ``letter_to_destroy`` in the string. For example, if the ``word`` was "Saskatoon", and the ``letter_to_destroy`` was 'o', the function should return "Saskatn".

    **Examples:**

    ``letter_destroyer("Saskatoon", "o") → "Saskatn"``

    ``letter_destroyer("Saskatchewan", "a") → "Ssktchewn"``

    ``letter_destroyer("roughriders", "r") → "oughides"``
    ~~~~
    def letter_destroyer(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(letter_destroyer("Saskatoon", "o"),"Saskatn",'letter_destroyer("Saskatoon", "o")')
            self.assertEqual(letter_destroyer("Saskatchewan", "a"),"Ssktchewn",'letter_destroyer("Saskatchewan", "a")')
            self.assertEqual(letter_destroyer("roughriders", "r"),"oughides",'letter_destroyer("roughriders", "r")')
            self.assertEqual(letter_destroyer("hotshots", "h"),"otsots",'letter_destroyer("hotshots", "h")')
            self.assertEqual(letter_destroyer("hotshots", "o"),"htshts",'letter_destroyer("hotshots", "o")')
            self.assertEqual(letter_destroyer("hotshots", "t"),"hoshos",'letter_destroyer("hotshots", "t")')
            self.assertEqual(letter_destroyer("hotshots", "s"),"hothot",'letter_destroyer("hotshots", "s")')

    myTests().main()



QWERTY Finder
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_4
    :nocodelens:

    Create a function that takes in a single parameter ``word`` and returns the location of the first occurrence of one of the following letters: "qwerty". If none of these letters exist in the word, have the function return -1. For example, if the ``word`` was "Saskatoon", the function should return 5 (the index value for the ``t`` in "Saskatoon").

    **Examples:**

    ``qwerty_finder("Saskatoon") → 5``

    ``qwerty_finder("Naomi") → -1``

    ``qwerty_finder("bunnyhug") → 4``
    ~~~~
    def qwerty_finder(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(qwerty_finder("Saskatoon"), 5,'qwerty_finder("Saskatoon")')
            self.assertEqual(qwerty_finder("Naomi"), -1,'qwerty_finder("Naomi")')
            self.assertEqual(qwerty_finder("bunnyhug"), 4,'qwerty_finder("bunnyhug")')
            self.assertEqual(qwerty_finder("Schellenberg"), 3,'qwerty_finder("Schellenberg")')
            self.assertEqual(qwerty_finder("roughriders"), 0,'qwerty_finder("roughriders")')
            self.assertEqual(qwerty_finder("junk"),-1 ,'qwerty_finder("junk")')
            self.assertEqual(qwerty_finder("university"), 4,'qwerty_finder("university")')

    myTests().main()


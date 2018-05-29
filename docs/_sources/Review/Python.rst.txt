.. qnum::
   :prefix: python-review
   :start: 1


Python Review
==========================


Variables and Data Types
------------------------

The fundamental data types that we are concerned about in Python include:

- **int** (integer, such as ``3`` or ``-5``)
- **float** (floating point number, such as ``1.2`` or ``-4.75``)
- **str** (string, such as ``"hello"`` or ``'Friday'`` or ``"5"``)
- **bool** (boolean, such as ``True`` or ``False``) 


Your Turn
~~~~~~~~~~

.. mchoice:: review_data_types_1_1
    :answer_a: boolean
    :answer_b: integer
    :answer_c: float
    :answer_d: string
    :correct: d
    :feedback_a: It is not True or False.
    :feedback_b: The data is not numeric.
    :feedback_c: The value is not numeric with a decimal point.
    :feedback_d: Great! Strings are enclosed in quotes.

    What is the data type of ``'what is your name?'``?

.. mchoice:: review_data_types_1_2
    :answer_a: boolean
    :answer_b: integer
    :answer_c: float
    :answer_d: string
    :correct: b
    :feedback_a: It is not True or False.
    :feedback_b: Great! The data is numeric, without a decimal point.
    :feedback_c: The value is not numeric with a decimal point.
    :feedback_d: Strings are enclosed in quotes.

    What is the data type of ``42``?

.. mchoice:: review_data_types_1_3
    :answer_a: boolean
    :answer_b: integer
    :answer_c: float
    :answer_d: string
    :correct: a
    :feedback_a: Great! Boolean is either True or False.
    :feedback_b: The data is not numeric.
    :feedback_c: The value is not numeric with a decimal point.
    :feedback_d: Strings are enclosed in quotes.

    What is the data type of ``False``?
   
.. mchoice:: review_data_types_1_4
    :answer_a: boolean
    :answer_b: integer
    :answer_c: float
    :answer_d: string
    :correct: c
    :feedback_a: It is not True or False.
    :feedback_b: The data is not numeric.
    :feedback_c: Great! The value is numeric with a decimal point.
    :feedback_d: Strings are enclosed in quotes.

    What is the data type of ``4.5``?


Converting Between Data Types
-----------------------------

Sometimes you might need to convert from one data type to another. You can use the following functions to **type cast** data:

- ``str(x)`` to convert *x* to a string
- ``int(x)`` to convert *x* to an integer
- ``float(x)`` to convert *x* to a floating point number

.. activecode:: review_casting_data_types
    :nocodelens:

    a = 4         #a is an int
    print( type(a) )

    b = str(a)    #b is the string '4'
    print( type(b) )
   
    c = float(b)  #c is the float 4.0
    print( type(c) )



Taking Input from User
-------------------------

If you want the user to type something, you can use the ``input()`` function. Here are a couple examples:

.. note:: ``input()`` will always return a string. You will need to convert it to an int or a float if you are expecting a number.


.. activecode:: review_input_intro_1
    :nocodelens:
    
    your_name = input("What is your name?")
    print(your_name)


.. activecode:: review_input_intro_2
    :nocodelens:
    
    def say_hello(some_name):
        print("Hello there, ", some_name)

    your_name = input("What is your name?")
    say_hello(your_name)


Your Turn
~~~~~~~~~~

The following example is not going to work when you try to run it. Try entering in ``16``, then ``15``. Notice that nothing is printed either time, even though it looks like the conditional should be causing it to print. Can you figure out what is wrong and fix it? *Hint: think about data types!*

.. activecode:: review_input_intro_3
    :nocodelens:
    :caption: Can you figure out what is wrong?
    
    age = input("How old are you?")

    if age == 16:
        print("You can get your driver's license!")
    elif age == 15:
        print("You can get your learner driver's license.")

   

Math Operators
--------------

The following table shows the most frequently used Python math operators.

=======   ==============================    ===============       ======
Symbols   Operations                        Example               Output
=======   ==============================    ===============       ======
\+        Addition                          ``1 + 2``             3
\-        Subtraction                       ``2 - 1``             1
\*        Multiplication                    ``2 * 2``             4
/         Division                          ``5 / 2``             2.5
//        Truncating Division (quotient)    ``5 // 2``            2
%         Modulo (remainder)                ``5 % 2``             1
\*\*       Power                            ``5 ** 2``            25
=======   ==============================    ===============       ======


Your Turn
~~~~~~~~~~

.. fillintheblank:: review_python_math_operators_1

    What would the following code print?::

        number = 12
        print( number / 4)

    - :3: Great!
      :.*: Try again!

.. fillintheblank:: review_python_math_operators_2

    What would the following code print?::

        number = 12
        print( number % 5)

    - :2: Great!
      :.*: Try again!


.. fillintheblank:: review_python_math_operators_3

    What would the following code print?::

        number = 42
        print( number // 5)

    - :8: Great!
      :8.4: Remember that // returns only an integer!
      :.*: Try again!

.. fillintheblank:: review_python_math_operators_4

    What would the following code print?::

        number = 2
        print( number ** 4)

    - :16: Great!
      :8: Remember that ** means "to the power of".
      :.*: Try again!


``if``
----------------

The ``if`` control structure works the same way it did with Reeborg. Run the example given below. What happens if you change it to ``number = 23``. How about ``number = 10``? 

.. note:: A single equal sign ``=`` is used to **assign** a value. Two equal signs ``==`` are used when **comparing** a value.

.. activecode:: review_if_intro_1
    :nocodelens:
    
    number = 42
    number = number // 4

    if number == 10:
        print("So long and thanks for all the fish.")

    else:
        print("And now for something completely different...")


Your Turn
~~~~~~~~~~

.. mchoice:: review_conditionals_if_mc_1
   :answer_a: Output a
   :answer_b: Output b
   :answer_c: Output c
   :answer_d: It will cause an error because every if must have an else clause.
   :correct: b
   :feedback_a: Because -10 is less than 0, Python will execute the body of the if-statement here.
   :feedback_b: Python executes the body of the if-block as well as the statement that follows the if-block.
   :feedback_c: Python will also execute the statement that follows the if-block (because it is not enclosed in an else-block, but rather just a normal statement).
   :feedback_d: It is valid to have an if-block without a corresponding else-block (though you cannot have an else-block without a corresponding if-block).

   What does the following code print?

   .. code-block:: python
     
     x = -10
     if x < 0:
         print("The negative number ",  x, " is not valid here.")
     print("This is always printed")

   ::

     a.
     This is always printed

     b.
     The negative number -10 is not valid here
     This is always printed

     c.
     The negative number -10 is not valid here


``if/elif/else``
----------------

The ``if/elif/else`` control structure works in the exact same way it did when you were programming Reeborg. The important thing to remember is that **only one of the branches can execute**. Read the code below, and predict what you think the output will be. Then change it to ``temp = 25``. What will the output be now? How about if you change it to ``temp = 5``? What about ``temp = 15``?

.. activecode:: review_if_elif_else_intro
    :nocodelens:
    
    temp = -3

    if temp < -10:
        print("wear winter jacket")
    elif temp < 15:
        print("wear long sleeve shirt")
    else:
        print("wear t-shirt")

Your Turn
~~~~~~~~~~

.. mchoice:: review_conditionals_mc_1
   :answer_a: TRUE
   :answer_b: FALSE
   :answer_c: TRUE on one line and FALSE on the next
   :answer_d: Nothing will be printed
   :correct: b
   :feedback_a: TRUE is printed by the if-block, which only executes if the conditional (in this case, 4+5 == 10) is true.  In this case 5+4 is not equal to 10.
   :feedback_b: Since 4+5==10 evaluates to False, Python will skip over the if block and execute the statement in the else block.
   :feedback_c: Python would never print both TRUE and FALSE because it will only execute one of the if-block or the else-block, but not both.
   :feedback_d: Python will always execute either the if-block (if the condition is true) or the else-block (if the condition is false).  It would never skip over both blocks.

   What does the following code print (choose from output a, b, c or nothing)?

   .. code-block:: python

     if 4 + 5 == 10:
         print("TRUE")
     else:
         print("FALSE")


.. mchoice:: review_conditionals_mc_2
   :answer_a: Output a
   :answer_b: Output b
   :answer_c: Output c
   :answer_d: Output d
   :correct: c
   :feedback_a: Although TRUE is printed after the if-else statement completes, both blocks within the if-else statement print something too.  In this case, Python would have had to have skipped both blocks in the if-else statement, which it never would do.
   :feedback_b: Because there is a TRUE printed after the if-else statement ends, Python will always print TRUE as the last statement.
   :feedback_c: Python will print FALSE from within the else-block (because 5+4 does not equal 10), and then print TRUE after the if-else statement completes.
   :feedback_d: To print these three lines, Python would have to execute both blocks in the if-else statement, which it can never do.

   What does the following code print?

   .. code-block:: python

     if 4 + 5 == 10:
         print("TRUE")
     else:
         print("FALSE")
     print("TRUE")

   ::

      a. TRUE

      b.
         TRUE
         FALSE

      c.
         FALSE
         TRUE
      d.
         TRUE
         FALSE
         TRUE



``while`` loop
--------------

We use a ``while`` loop when we don't know the number of iterations ahead of time. In other words, the body of while will be repeated as long as the controlling boolean expression evaluates to ``True``. Run the code below. Can you change the code so that it counts **up** from 1 to 10, then says "Here I come!"?

.. activecode:: review_while_loop_intro
    :nocodelens:
    
    counter = 10

    while counter > 0:
        print(counter)
        counter = counter - 1   #decrease the counter each iteration

    print("Blastoff!")

Your Turn
~~~~~~~~~~

Write a program that asks the user to enter a password. Keep asking for the password until they enter "sask".  Once they have successfully typed in "sask", print out *What a great place!*.

.. activecode:: review_while_intro_6

    #put your code here!



``for`` loop
------------

We use a ``for`` loop when we know the number of iterations before the looping begins. 

.. activecode:: review_for_loop_intro_1
    :nocodelens:
    
    for counter in range(10):
        print(counter)

Notice that the loop above repeats 10 times, but begins counting at 0, so the last number is a 9. We can control the for loop even more by passing two arguments, like this:

.. activecode:: review_for_loop_intro_2
    :nocodelens:
    
    for counter in range(5, 11):
        print(counter)

Recall that calling ``range(5, 11)`` creates a list of numbers starting at 5, and going up to (but not including) 11. Although we could accomplish the same thing by specifying the list of numbers ourselves (as in, ``for counter in [5, 6, 7, 8, 9, 10]:``), it is cumbersome when counting a large amount.

Note that if you give a third argument to the ``range(min, max, step)`` function, it acts as the amount to step/increase by.

Although using range allows us to generate a list of numerical values, we can use a for loop to iterate through a list of values involving any data type, as follows.

.. activecode:: review_for_loop_intro_3
    :nocodelens:
    
    grocery_list = ["apples", "carrots", "milk", "yogurt"]
    for item in grocery_list:
        print("Don't forget to buy the", item)


Your Turn
~~~~~~~~~~

.. mchoice:: review_test_question3_4_1
    :answer_a: 1
    :answer_b: 5
    :answer_c: 6
    :answer_d: 10
    :correct: c
    :feedback_a: The loop body prints one line, but the body will execute exactly one time for each element in the list [5, 4, 3, 2, 1, 0].
    :feedback_b: Although the biggest number in the list is 5, there are actually 6 elements in the list.
    :feedback_c: The loop body will execute (and print one line) for each of the 6 elements in the list [5, 4, 3, 2, 1, 0].
    :feedback_d: The loop body will not execute more times than the number of elements in the list.

    In the following code, how many lines does this code print?

    .. code-block:: python

        for number in [5, 4, 3, 2, 1, 0]:
            print("I have", number, "cookies.  I'm going to eat one.")


``and``, ``or``, ``not``
----------------------------

There are three **logical operators**: ``and``, ``or``, and ``not``. The
semantics (meaning) of these operators is similar to their meaning in English.
For example, ``x > 0 and x < 10`` is true only if ``x`` is greater than 0 *and*
at the same time, x is less than 10.  How would you describe this in words?  You would say that x is between 0 and 10, not including the endpoints.

``n % 2 == 0 or n % 3 == 0`` is true if *either* of the conditions is true,
that is, if the number is divisible by 2 *or* divisible by 3.  In this case, one, or the other, or both of the parts has to be true for the result to be true.

Finally, the ``not`` operator negates a boolean expression, so ``not  x > y``
is true if ``x > y`` is false, that is, if ``x`` is less than or equal to
``y``.

.. activecode:: local_operators_example_1

    x = 5
    print(x > 0 and x < 10)

    n = 25
    print(n % 2 == 0 or n % 3 == 0)


Your Turn
~~~~~~~~~~


.. mchoice:: review_booleans_practice_quiz_1
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again!

    What would the following print?::

        a = 6
        b = 10
        print(a == 6)

.. mchoice:: review_booleans_practice_quiz_2
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again!

    What would the following print?::

        a = 6
        b = 10
        print( not (b == 6) )

.. mchoice:: review_booleans_practice_quiz_3
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again!

    What would the following print?::

        a = 6
        b = 10
        print( a == 10 or b == 10 )

.. mchoice:: review_booleans_practice_quiz_4
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again! Notice that we did not ask a full question on the right side of the AND.

    What would the following print?::

        a = 6
        b = 10
        print( a == 6 and 10 )

.. mchoice:: review_booleans_practice_quiz_5
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again!

    What would the following print?::

        a = 6
        b = 10
        print( not a == 10 and b == 10 )

.. mchoice:: review_booleans_practice_quiz_6
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: Great!

    What would the following print?::

        a = 6
        b = 10
        print( a == 10 or not b == 10 )

.. mchoice:: review_booleans_practice_quiz_7
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again!

    What would the following print?::

        a = 6
        b = 10
        print( a == 6 and (not a == 10) )

.. mchoice:: review_booleans_practice_quiz_8
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again!
    :feedback_b: Great!

    What would the following print?::

        a = 6
        b = 10
        print( not ( not a == 10 or not b == 10) )


Functions
----------

Recall that we can create both fruitful and non-fruitful functions. Fruitful means that the function *returns* a value, whereas non-fruitful functions do not return anything.

.. activecode:: review_functions_intro_1
    :nocodelens:
    
    def say_hello():
        print("Hello there!")

    say_hello()


.. activecode:: review_functions_intro_2
    :nocodelens:
    
    def say_hello(some_name):
        print("Hello there,", some_name)

    say_hello("Eli")




Your Turn
~~~~~~~~~~

.. activecode:: review-double-it-positive
    :nocodelens:

    The parameter ``the_number`` needs to be doubled, but only if ``the_number`` is positive. Return the doubled value of the number that is passed in if ``the_number`` is positive. If ``the_number`` is negative, return -1. If ``the_number`` is 0, return 0.

    ``double_it_positive(5) → 10``

    ``double_it_positive(0) → 0``

    ``double_it_positive(-4) → -1``
    ~~~~
    def double_it_positive(the_number):
        return 0

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(double_it_positive(5),10,"double_it_positive(5)")
            self.assertEqual(double_it_positive(11),22,"double_it_positive(11)")
            self.assertEqual(double_it_positive(0),0,"double_it_positive(0)")
            self.assertEqual(double_it_positive(-12),-1,"double_it_positive(-12)")
            self.assertEqual(double_it_positive(-1),-1,"double_it_positive(-1)")

    myTests().main()


.. mchoice:: review_test_question5_3_1
   :answer_a: Its value
   :answer_b: The area in the code where a variable can be accessed.
   :answer_c: Its name
   :correct: b
   :feedback_a: Value is the contents of the variable.  Scope concerns where the variable is &quot;known&quot;.
   :feedback_b:
   :feedback_c: The name of a variable is just an identifier or alias.  Scope concerns where the variable is &quot;known&quot;.

   What is a variable's scope?

.. mchoice:: review_test_question5_3_2
   :answer_a: A temporary variable that is only used inside a function
   :answer_b: The same as a parameter
   :answer_c: Another name for any variable
   :correct: a
   :feedback_a: Yes, a local variable is a temporary variable that is only known (only exists) in the function it is defined in.
   :feedback_b: While parameters may be considered local variables, functions may also define and use additional local variables.
   :feedback_c: Variables that are used outside a function are not local, but rather global variables.

   What is a local variable?

.. mchoice:: review_test_question5_3_3
   :answer_a: Yes, and there is no reason not to.
   :answer_b: Yes, but it is considered bad form.
   :answer_c: No, it will cause an error.
   :correct: b
   :feedback_a: While there is no problem as far as Python is concerned, it is generally considered bad style because of the potential for the programmer to get confused.
   :feedback_b: It is generally considered bad style because of the potential for the programmer to get confused.  If you must use global variables (also generally bad form) make sure they have unique names.
   :feedback_c: Python manages global and local scope separately and has clear rules for how to handle variables with the same name in different scopes, so this will not cause a Python error.

   Can you use the same name for a local variable as a global variable?


Python Modules
---------------

One of the great things about Python is that there are a lot of modules that extend the basic functionality of Python. A module is simply a file (or folder) containing Python functions and variables. 

.. activecode:: review_module_intro_2
    :nocodelens:
    
    import math

    print( math.sqrt(16) )
    print( math.cos(0) )

.. activecode:: review_module_intro_3
    :nocodelens:
    
    import random

    print( random.randrange(1, 10) )


Drawing Images Practice
-------------------------

Draw the following image. Be sure to define and use at least one function as part of your solution.

.. image:: images/confusion-19.png

.. activecode:: drawing_images_review_1
    
    # first review shape

Once you have completed the shape above, try the following. *Use the code you made above as a starting point.*

.. image:: images/confusion-27.png

.. activecode:: drawing_images_review_2
    
    # second review shape


Image Manipulation with Nested Loops
-------------------------------------

.. raw:: html

    <img src="../../_static/skflag.png" id="skflag.png">


Recall that we were able to manipulate images using a nested loop (a loop inside a loop). Fix the following code, which is missing the nested for loop. Make it display the *negative* image, which you can calculate by subtracting the original RGB values from 255.

.. activecode::  review_acimg_1
    :nocodelens:

    import image

    img = image.Image("skflag.png")
    width = img.get_width()
    height = img.get_height()
    
    canvas = image.ImageWin(width, height)
    img.draw(canvas)

    # create nested loop here
    
            # inside nested loop, get pixel
            p = img.get_pixel(col, row)

            # recall that you can access RGB values by calling something like:
            # new_red = p.get_red()
            
            # you can create a new pixel as follows
            new_pixel = image.Pixel(new_red, new_green, new_blue)

            # set the pixel of the original image to the new, transformed value
            img.set_pixel(col, row, new_pixel)

        # unindent the following line to remove the "animation"
        img.draw(canvas)


Strings
--------

Recall that we can access portions of a string by using the indexing operator ``[]``, and that the index of the leftmost character of the string is 0. Remember as well that strings are immutable (you cannot modify individual characters within a string).


.. mchoice:: review_string_index_test_question_1
   :answer_a: t
   :answer_b: h
   :answer_c: c
   :answer_d: Error, you cannot use the [ ] operator with a string.
   :correct: b
   :feedback_a: Index locations do not start with 1, they start with 0.
   :feedback_b: Yes, index locations start with 0.
   :feedback_c: sentence[-3] would return c, counting from right to left.
   :feedback_d: [ ] is the index operator

   What is printed by the following statements?
      
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[3])


.. mchoice:: review_string_index_test_question_2
   :answer_a: tr
   :answer_b: ps
   :answer_c: nn
   :answer_d: Error, you cannot use the [ ] operator with the + operator.
   :correct: a
   :feedback_a: Yes, indexing operator has precedence over concatenation.
   :feedback_b: p is at location 0, not 2.
   :feedback_c: n is at location 5, not 2.
   :feedback_d: [ ] operator returns a string that can be concatenated with another string.

   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[2] + sentence[-5])


.. mchoice:: review_string_length_test_question_1
   :answer_a: 11
   :answer_b: 12
   :correct: b
   :feedback_a: The blank counts as a character.
   :feedback_b: Yes, there are 12 characters in the string.

   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(len(sentence))


.. mchoice:: review_string_length_test_question_2
   :answer_a: o
   :answer_b: r
   :answer_c: s
   :answer_d: Error, len(sentence) is 12 and there is no index 12.
   :correct: b
   :feedback_a: Take a look at the index calculation again, len(sentence)-5.
   :feedback_b: Yes, len(sentence) is 12 and 12-5 is 7.  Use 7 as index and remember to start counting with 0.
   :feedback_c: sentence is at index 11
   :feedback_d: You subtract 5 before using the index operator so it will work.

   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[len(sentence)-5])


.. mchoice:: review_string_length_test_question_3
   :answer_a: c
   :answer_b: k
   :answer_c: s
   :answer_d: Error, negative indices are illegal.
   :correct: a
   :feedback_a: Yes, 3 characters from the end.
   :feedback_b: Count backward 3 characters.
   :feedback_c: When expressed with a negative index the last character s is at index -1.
   :feedback_d: Python does use negative indices to count backward from the end.

   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[-3])


.. mchoice:: review_string_length_test_question_1
   :answer_a: python
   :answer_b: rocks
   :answer_c: hon r
   :answer_d: Error, you cannot have two numbers inside the [ ].
   :correct: c
   :feedback_a: That would be sentence[0:6].
   :feedback_b: That would be sentence[7:].
   :feedback_c: Yes, start with the character at index 3 and go up to but not include the character at index 8.
   :feedback_d: This is called slicing, not indexing.  It requires a start and an end.

   What is printed by the following statements?
   
   .. code-block:: python

      sentence = "python rocks"
      print(sentence[3:8])


.. mchoice:: review_string_length_test_question_2
   :answer_a: rockrockrock
   :answer_b: rock rock rock
   :answer_c: rocksrocksrocks
   :answer_d: Error, you cannot use repetition with slicing.
   :correct: a
   :feedback_a: Yes, rock starts at 7 and goes through 10.  Repeat it 3 times.
   :feedback_b: Repetition does not add a space.
   :feedback_c: Slicing will not include the character at index 11.  Just up to it (10 in this case).
   :feedback_d: The slice will happen first, then the repetition.  So it is ok.

   What is printed by the following statements?
   
   .. code-block:: python

      sentence = "python rocks"
      print(sentence[7:11] * 3)


.. mchoice:: review_string_for_loop_by_item_test_question_1
   :answer_a: 10
   :answer_b: 11
   :answer_c: 12
   :answer_d: Error, the for statement needs to use the range function.
   :correct: c
   :feedback_a: Iteration by item will process once for each item in the sequence.
   :feedback_b: The blank is part of the sequence.
   :feedback_c: Yes, there are 12 characters, including the blank.
   :feedback_d: The for statement can iterate over a sequence item by item.

   How many times is the word HELLO printed by the following statements?
   
   .. code-block:: python

      s = "python rocks"
      for ch in s:
          print("HELLO")


.. mchoice:: review_string_for_loop_by_item_test_question_2
   :answer_a: 4
   :answer_b: 5
   :answer_c: 6
   :answer_d: Error, the for statement cannot use slice.
   :correct: b
   :feedback_a: Slice returns a sequence that can be iterated over.
   :feedback_b: Yes, The blank is part of the sequence returned by slice
   :feedback_c: Check the result of s[3:8].  It does not include the item at index 8.
   :feedback_d: Slice returns a sequence.

   How many times is the word HELLO printed by the following statements?
   
   .. code-block:: python

      s = "python rocks"
      for ch in s[3:8]:
          print("HELLO")


.. mchoice:: review_string_accumulator_pattern_test_question_1
    :answer_a: ball
    :answer_b: llab
    :correct: a
    :feedback_a: Yes, the repeated concatenation will cause another_string to become the same as some_string.
    :feedback_b: Look again at the *order* of the concatenation!

    What is printed by the following statements:

    .. code-block:: python

        some_string = "ball"
        another_string = ""
        for item in some_string:
            another_string = another_string + item
        print(another_string)


.. mchoice:: review_string_accumulator_pattern_test_question_2
    :answer_a: ball
    :answer_b: llab
    :correct: b
    :feedback_a: Look again at the *order* of the concatenation!
    :feedback_b: Yes, the order is reversed due to the order of the concatenation.

    What is printed by the following statements:

    .. code-block:: python

        some_string = "ball"
        another_string = ""
        for item in some_string:
            another_string = item + another_string
        print(another_string)


.. mchoice:: review_string_methods_check_understanding1
   :answer_a: 0
   :answer_b: 2
   :answer_c: 3
   :correct: c
   :feedback_a: There are definitely o and p characters.
   :feedback_b: There are 2 o characters but what about p?
   :feedback_c: Yes, add the number of o characters and the number of p characters.

   What is printed by the following statements?
   
   .. code-block:: python
   
      s = "python rocks"
      print(s.count("o") + s.count("p"))


.. mchoice:: review_string_methods_check_understanding2
   :answer_a: yyyyy
   :answer_b: 55555
   :answer_c: n
   :answer_d: Error, you cannot combine all those things together.
   :correct: a
   :feedback_a: Yes, s[1] is y and the index of n is 5, so 5 y characters.  It is important to realize that the index method has precedence over the repetition operator.  Repetition is done last.
   :feedback_b: Close.  5 is not repeated, it is the number of times to repeat.
   :feedback_c: This expression uses the index of n
   :feedback_d: This is fine, the repetition operator used the result of indexing and the index method.

   What is printed by the following statements?
   
   .. code-block:: python
   
      s = "python rocks"
      print(s[1] * s.find("n"))



Lists
------

Recall that for lists:

- ``len`` returns the length of a list (the number of items in the list). However, since lists can have items which are themselves lists, it important to note that len only returns the top-most length.
- The syntax for accessing the elements of a list is the same as the syntax for accessing the characters of a string. Also note that you can use the index operator ``[]`` more than once in a row to access things inside the list.
- ``in`` and ``not in`` are boolean operators that test membership in a sequence. We used them previously with strings and they also work here.
- The slice operation we saw with strings also work on lists.
- Unlike strings, lists are **mutable**. This means we can change an item in a list by accessing it directly as part of the assignment statement.
- Just as there are built-in methods for strings, there are built-in methods for lists. Some of the most helpful are ``append()`` (adds an item to the end of a list), ``pop`` (removes and returns the last item), and ``remove()`` (removes first occurrence of an item)
  

.. mchoice:: review_test_question9_2_1
   :answer_a: 4
   :answer_b: 5
   :correct: b
   :feedback_a: len returns the actual number of items in the list, not the maximum index value.
   :feedback_b: Yes, there are 5 items in this list.

   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", 3.14, False]
     print(len(a_list))
   
   
.. mchoice:: review_test_question9_2_2
   :answer_a: 7
   :answer_b: 8
   :correct: a
   :feedback_a: Yes, there are 7 items in this list even though two of them happen to also be lists.
   :feedback_b: len returns the number of top level items in the list.  It does not count items in sublists.

   What is printed by the following statements?
   
   .. code-block:: python

      a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(len(a_list))


.. mchoice:: review_test_question9_3_1
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

   
.. mchoice:: review_test_question9_3_3
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


.. mchoice:: review_test_question9_4_1
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Yes, 3.14 is an item in the list a_list.
   :feedback_b: There are 7 items in the list, 3.14 is one of them. 
   
   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(3.14 in a_list)


.. mchoice:: review_test_question9_4_2
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: in returns True for top level items only.  57 is in a sublist.
   :feedback_b: Yes, 57 is not a top level item in a_list.  It is in a sublist.
   
   What is printed by the following statements?
   
   .. code-block:: python

     a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(57 in a_list)


.. mchoice:: review_test_question9_6_1
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


.. mchoice:: review_list_methods_check_1
    :answer_a: [4, 2, 8, 6, 5, False, True]
    :answer_b: [4, 2, 8, 6, 5, True, False]
    :answer_c: [True, False, 4, 2, 8, 6, 5]
    :correct: b
    :feedback_a: True was added first, then False was added last.
    :feedback_b: Yes, each item is added to the end of the list.
    :feedback_c: append adds at the end, not the beginning.
   
    What is printed by the following statements?
   
    .. code-block:: python

        a_list = [4, 2, 8, 6, 5]
        a_list.append(True)
        a_list.append(False)
        print(a_list)


.. mchoice:: review_list_methods_check_2
    :answer_a: [4, 8, 6]
    :answer_b: [2, 6, 5]
    :answer_c: [4, 2, 6]
    :correct: c
    :feedback_a: pop(2) removes the item at index 2, not the 2 itself.
    :feedback_b: pop() removes the last item, not the first.
    :feedback_c: Yes, first the 8 was removed, then the last item, which was 5.
   
    What is printed by the following statements?
   
    .. code-block:: python

        a_list = [4, 2, 8, 6, 5]
        temp = a_list.pop(2)
        temp = a_list.pop()
        print(a_list)

   
.. mchoice:: review_list_methods_check_3
    :answer_a: [2, 8, 6, 5]
    :answer_b: [4, 2, 8, 6, 5]
    :answer_c: 4
    :answer_d: None
    :correct: c
    :feedback_a: a_list is now the value that was returned from pop(0).
    :feedback_b: pop(0) changes the list by removing the first item.
    :feedback_c: Yes, first the 4 was removed from the list, then returned and assigned to a_list.  The list is lost.
    :feedback_d: pop(0) returns the first item in the list so a_list has now been changed.
   
    What is printed by the following statements?
   
    .. code-block:: python

        a_list = [4, 2, 8, 6, 5]
        a_list = a_list.pop(0)
        print(a_list)


Number Guessing Game
--------------------

To confirm that you can put many of these ideas into practice, see if you can implement a number guessing game in Python that does the following:

- generate a random number from 1 to 100 and stores it in a variable
- repeat the following until the user guesses the number:

    - get the user to guess the number
    - tell the user if the number is too high or too low

- congratulate the user when they guess the correct number with a message such as "Way to go! You guessed the right number in 9 tries!"


.. activecode:: number_guessing_game_review
    :caption: Create a number guessing game here!
    
    # the algorithm for the game can be described as follows
    # your job is to try to convert the comments into real Python code!

    # have the computer pick a random number between 1 to 100


    # create a variable to keep track of the number of guesses taken


    # set a variable with an initial value for the users guess, like this:
    user_guess = -1

    # repeat the following until the user guesses correctly

        # ask the user for their guess


        # update the number of guesses variable


        # if they guess high, tell them


        # if they guess low, tell them


    # congratulate the user, telling them how many guesses it took







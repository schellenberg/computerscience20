.. qnum::
   :prefix: python-review
   :start: 1


Python Review
==========================


Variables and Data Types
------------------------

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

.. parsonsprob:: review_type_casting_1

    Construct a block of code that correctly takes in a number from a user, then prints out twice the value that was given.
    -----
    number =  input("Please enter a number:")
    number = float(number)
    doubled = number * 2
    print(str(doubled) + " is twice the value of the number you entered.")



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

If you have trouble with any of the following, you might want to look back at the :ref:`math_operator_list` list.

.. fillintheblank:: review_python_math_operators_1

    What would the following code print?::

        number = 12
        print(number / 4)

    - :3: Great!
      :.*: Try again!

.. fillintheblank:: review_python_math_operators_2

    What would the following code print?::

        number = 12
        print(number % 5)

    - :2: Great!
      :.*: Try again!


.. fillintheblank:: review_python_math_operators_3

    What would the following code print?::

        number = 42
        print(number // 5)

    - :8: Great!
      :8.4: Remember that // returns only an integer!
      :.*: Try again!

.. fillintheblank:: review_python_math_operators_4

    What would the following code print?::

        number = 2
        print(number ** 4)

    - :16: Great!
      :8: Remember that ** means "to the power of".
      :.*: Try again!

.. fillintheblank:: review_python_math_operators_5

    What would the following code print?::

        number = 2
        number += 4
        print(number)

    - :6: Great!
      :.*: Try again! Remember that number += 4 is the same as number = number + 4

.. fillintheblank:: review_python_math_operators_6

    What would the following code print?::

        number = 9
        number -= 2
        print(number)

    - :7: Great!
      :.*: Try again! Remember that number -= 2 is the same as number = number - 2


``if``
----------------

.. note:: A single equal sign ``=`` is used to **assign** a value. Two equal signs ``==`` are used when **comparing** a value.


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


    .. highlight:: none

    .. code-block:: html

        a.
        This is always printed

        b.
        The negative number -10 is not valid here
        This is always printed

        c.
        The negative number -10 is not valid here

    .. highlight:: python

.. mchoice:: review_conditionals_if_mc_2
    :answer_a: Output a
    :answer_b: Output b
    :answer_c: Output c
    :answer_d: Output d
    :answer_e: It will cause an error because every if must have an else clause.
    :correct: d
    :feedback_a: Try again. Remember that any number of consecutive if statements can evaluate to True.
    :feedback_b: Try again. Remember that any number of consecutive if statements can evaluate to True.
    :feedback_c: Try again. It's less than 100!
    :feedback_d: Great!
    :feedback_e: Try again. An if statement does not require an else!

    What does the following code print?

    .. code-block:: python
     
        number = 64

        if number > 0:
            print("It's positive!")

        if number > 50:
            print("It's pretty big.")

        if number > 100:
            print("It's really big!")



    .. highlight:: none

    .. code-block:: html

        a.
        It's positive!

        b.
        It's positive!
        It's really big!

        c.
        It's pretty big.

        d.
        It's positive!
        It's pretty big.

    .. highlight:: python


``if/elif/else``
----------------

.. mchoice:: review_conditionals_mc_1
    :answer_a: Output 1
    :answer_b: Output 2
    :answer_c: Output 3
    :answer_d: Output 4
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

    ::

        a.  TRUE

        b.  FALSE

        c.  TRUE
            FALSE

        d.  Nothing will be printed.


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


.. mchoice:: review_conditionals_mc_3
    :answer_a: Output a
    :answer_b: Output b
    :answer_c: Output c
    :answer_d: Output d
    :correct: a
    :feedback_a: Great! Remember that only one branch of an if/elif/else block can execute.
    :feedback_b: Try again. Remember that only one branch of an if/elif/else block can execute.
    :feedback_c: Try again. Remember that only one branch of an if/elif/else block can execute.
    :feedback_d: Try again. Remember that only one branch of an if/elif/else block can execute.

    What does the following code print?

    .. code-block:: python
     
        number = 64

        if number > 0:
            print("It's positive!")

        elif number > 50:
            print("It's pretty big.")

        elif number > 100:
            print("It's really big!")



    .. highlight:: none

    .. code-block:: html

        a.
        It's positive!

        b.
        It's positive!
        It's really big!

        c.
        It's pretty big.

        d.
        It's positive!
        It's pretty big.

    .. highlight:: python



``while`` loop
--------------

.. parsonsprob:: review_while_loop_1

    Construct a block of code that correctly counts from 10 down to 1, then prints Blastoff!
    -----
    counter = 10
    while counter > 0:
        print(counter)
        counter = counter - 1
    print("Blastoff!")

Write a program that asks the user to enter a password. Keep asking for the password until they enter "sask".  Once they have successfully typed in "sask", print out *What a great place!*.

.. activecode:: review_while_intro_6

    #put your code here!



``for`` loop
------------

.. parsonsprob:: review_for_loop_1

    Construct a block of code that correctly counts from 1 up to 10, then prints ``Made it!``
    -----
    for counter in range(1, 11):
        print(counter)
    print("Made it!")

.. parsonsprob:: review_for_loop_2

    Construct a block of code that correctly prints out a greeting for each person, using a for loop.
    -----
    people = ["Alice", "Bob", "Eve"]
    for name in people:
        print("Hello there, " + name)

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

.. parsonsprob:: review_functions_1

    Construct a function which returns the type of clothing you should wear, based on the parameter temperature. If the temperature is below -10, you will wear a parka and toque. If the temperature is between -10 and 0, wear a toque. If the temperature is greater than 0 but less than 10, wear a sweater. If the temperature is between 10 and 20, wear a t-shirt. If the temperature is greater than 20, wear shorts.
    -----
    def wear_the_right_thing(temperature):
        """Return a suggestion of what to wear, given a temperature."""
        if temperature < -10:
            return "parka and toque"
        elif temperature <= 0:
            return "toque"
        elif temperature < 10:
            return "sweater"
        elif temperature <= 20:
            return "t-shirt"
        else:
            return "shorts"

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

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
   :feedback_b: Great! Remember that a variable defined inside a function "disappears" after the function has finished executing.
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


Drawing Images Practice
-------------------------

.. image:: images/confusion-5.png

.. parsonsprob:: review_turtle_drawings_1

    Construct a function that draws the image shown above:
    -----
    import turtle
    =====
    def draw_cross(some_turtle, side_length):
        """Draws a cross shape with the given some_turtle, with each side being of side_length."""
    =====
        for tower in range(4):
    =====
            for side in range(3):
    =====
                some_turtle.forward(side_length)
                some_turtle.left(90)
    =====
            some_turtle.left(180)
    =====
    canvas = turtle.Screen()
    ramisa = turtle.Turtle()
    =====
    draw_cross(ramisa, 50)

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


.. parsonsprob:: review_image_manipulation_1

    Construct a function that draws the *negative* of the image shown above. *Note*: due to technical limitations with this question, you need to use the *x* coordinate as your outer loop.
    -----
    import image
    =====
    img = image.Image("skflag.png")
    =====
    width = img.get_width()
    height = img.get_height()
    =====
    canvas = image.ImageWin(width, height)
    img.draw(canvas)
    =====
    for x in range(width):
    =====
        for y in range(height):
    =====
            p = img.get_pixel(x, y)
    =====
            r = 255 - p.get_red()
            g = 255 - p.get_green()
            b = 255 - p.get_blue()
    =====
            new_pixel = image.Pixel(r, g, b)
    =====
            img.set_pixel(x, y, new_pixel)
    =====
    img.draw(canvas)


Strings
--------

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


.. mchoice:: review_string_length_test_question_4
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


.. parsonsprob:: review_even_letters

    Construct a block of code that correctly creates a function with a single parameter word that returns the even letters of the word, then calls the function and prints the result.
    -----
    def even_letters(word):
        new_word = ''
        counter = 0
        for letter in word:
            if counter % 2 == 0:
                new_word = new_word + letter
            counter = counter + 1
        return new_word
    changed_word = even_letters("Saskatchewan")
    print(changed_word)


Lists
------

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


.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: review_list_overview_practice_problem_3
    :nocodelens:

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



Number Guessing Game
--------------------

Implement a number guessing game in Python that does the following:

- generate a random number from 1 to 100 and stores it in a variable
- repeat the following until the user guesses the number:

    - get the user to guess the number
    - tell the user if the number is too high or too low

- congratulate the user when they guess the correct number with a message such as "Way to go! You guessed the right number in 9 tries!"


.. activecode:: review_number_guessing_game
    :caption: Create a number guessing game here!
    
    # your code here!


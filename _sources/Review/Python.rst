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

Recall that we used a ``while`` loop in Reeborg when we didn't know the number of iterations ahead of time. In other words, the body of while will be repeated as long as the controlling boolean expression evaluates to ``True``. Run the code below. Can you change the code so that it counts **up** from 1 to 10, then says "Here I come!"?

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

When we knew the exact number of iterations required in Reeborg, we used the ``repeat`` command. That command was not part of regular Python -- it was added to keep Reeborg coding as simple as possible. Although I won't explain all the details about it yet, I will introduce you to the Python version of a repeat loop. If we want something to repeat 10 times, we could do the following: (after running the code, change the ``10`` to some other number and try it again)

.. activecode:: review_for_loop_intro_1
    :nocodelens:
    
    for counter in range(10):
        print(counter)

Notice that the loop above repeats 10 times, but begins counting at 0, so the last number is a 9. We can control the for loop even more by passing two arguments, like this:

.. activecode:: review_for_loop_intro_2
    :nocodelens:
    
    for counter in range(5, 11):
        print(counter)

One last version of the for loop that we will introduce allows us to go through a *list* of values, as follows. *Please note that there are a bunch of things in this example that you don't need to understand yet! We'll get there!*

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




Python Modules
---------------

One of the great things about Python is that there are a lot of modules that extend the basic functionality of Python. A module is simply a file (or folder) containing Python functions and variables. You have created your own module when you were exploring Reeborg. When you typed ``from library import *```, you made all of the functions in the library tab available to your program. Please note that although we could use the ``from library import *`` syntax, it can cause problems if you accidentally create a function that has the same name as something you have imported. See the second example below for the recommended way to import. 

.. activecode:: module_intro_1
    :nocodelens:
    :caption: This works, but is not recommended.
    
    from math import *

    print( sqrt(16) )
    print( cos(0) )

.. activecode:: module_intro_2
    :nocodelens:
    :caption: This is the better way to import a module.
    
    import math

    print( math.sqrt(16) )
    print( math.cos(0) )

.. activecode:: module_intro_3
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


Number Guessing Game
--------------------

Remember the number guessing game we created in Scratch? The basic premise was as follows:

- generates a random number from 1 to 100 and stores it in a variable
- repeats the following until the user guesses the number
- gets the user to guess the number (using the **ask** block)
- tells the user if the number is too high or too low
- congratulates the user when they guess the correct number with a message such as "Way to go! You guessed the right number in 9 tries!"

We are going to try to implement this game in Python. **Please note: you will likely run into many problems trying to create this game in Python.** However, it can be really helpful to try problems that feel like they are above your skill level. Soon, you will be able to create programs like this on your own! Your teacher might choose to give you some time to try this on your own, then demonstrate a possible solution to the problem, or perhaps come back to this game in a couple of weeks.


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







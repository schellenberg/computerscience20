Conditionals
=============

.. topic:: Quick Overview of Day

    Go over practice problems from last day. Give more details about boolean expressions. Practice some Python problems with input/output and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


What Does This Program Do?
---------------------------

Remember that in our quick Python overview, we saw that a single equal sign ``=`` is used to **assign** a value. Two equal signs ``==`` are used when **comparing** a value.

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_conditionals_1
    :caption: What will this program print?
    :nocodelens:

    number = 20
    number = number + 10

    if number == 10:
      print("The number is assigned a value of 10")

    if number == 20:
      print("The number is assigned a value of 20")

    if number == 30:
      print("The number is assigned a value of 30")


.. activecode:: wdtpd_conditionals_2
    :caption: What will this program print?
    :nocodelens:

    age = 15
    name = "Zoe"

    if age == 15:
      print("Almost old enough to drive on your own.")
    else:
      print("Either older or younger than 15")


.. activecode:: wdtpd_conditionals_3
    :caption: What will this program print?
    :nocodelens:

    age = 15
    name = "Zoe"

    if age == 15:
      print("Almost old enough to drive on your own.")
    elif name == "Zoe":
      print("Hi Zoe! Good to see you!")
    else:
      print("Either older or younger than 15")


.. activecode:: wdtpd_conditionals_4
    :caption: What will this program print?
    :nocodelens:

    age = 15
    name = "Zoe"

    if name == "Eli":
      print("Good to see you again!")
    elif age == 16:
      print("You can drive!")
    else:
      print("It's been awhile!")

    print("I'm a little sleepy.")


Booleans
---------

The Python type for storing true and false values is called ``bool``, named
after the British mathematician, George Boole. George Boole created *Boolean
Algebra*, which is the basis of all modern computer arithmetic.

There are only two **boolean values**.  They are ``True`` and ``False``.  Capitalization
is important, since ``true`` and ``false`` are not boolean values (remember Python is case
sensitive).

.. note:: Boolean values are not strings!

    It is extremely important to realize that True and False are not strings.   They are not surrounded by quotes.  They are the only two values in the data type ``bool``.  Take a close look at the types shown below.


.. activecode:: boolean_1
    :nocodelens:

    print(type(True))
    print(type("True"))

A **boolean expression** is an expression that evaluates to a boolean value.
The equality operator, ``==``, compares two values and produces a boolean value related to whether the two values are equal to one another.

.. activecode:: boolean_2
    :nocodelens:

    print(5 == 5)
    print(5 == 6)

In the first statement, the two operands are equal, so the expression evaluates
to ``True``.  In the second statement, 5 is not equal to 6, so we get ``False``.

The ``==`` operator is one of six common **comparison operators**; the others are:

.. sourcecode:: python

    x != y               # x is not equal to y
    x > y                # x is greater than y
    x < y                # x is less than y
    x >= y               # x is greater than or equal to y
    x <= y               # x is less than or equal to y

We have already been using most of these, but ``!=`` is new to us. We have used ``not`` with Reeborg, but ``not`` switches the value of a boolean expression. Consider the following:

.. activecode:: boolean_3
    :nocodelens:

    print(5 != 5)
    print(not 5 != 5)


When asking the computer a question with a boolean expression, a common error is to use a single equal sign (``=``) instead of a double equal sign (``==``). Remember that ``=`` is an assignment operator and ``==`` is a comparison operator.



Practice Problems
------------------

Try the following practice problems. You can either work directly in the textbook, or using Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish!

.. note:: Remember that every time you take ``input()`` from the user, the data type of that input will be a string! Sometimes you need to convert what the user enters into a number.


Add/Subtract Two Numbers
~~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that can either add or subtract two numbers. You should first ask the user whether they want to add or subtract, then take in the two numbers, then finally perform the required operation and print the result.
   
.. activecode:: practice_problem_conditionals_1
    :nocodelens:

    # Add/Subtract Two Numbers
    # Put Your Name Here
    # Put the Date Here

    # your code goes here


**Do not look** at this sample solution unless you have already finished creating your own solution!

.. reveal:: reveal_solution_practice_problem_conditionals_1
    :showtitle: Reveal Solution
    :hidetitle: Hide Solution

    This is one possible solution. Note that it is not particularly efficient, as the same code appears in the ``if`` and ``elif`` blocks. This can be improved once variable scope and functions are understood.::

      # Add/Subtract Two Numbers
      # Dan Schellenberg
      # Oct 23, 2017

      operation_chosen = input("Would you like to add or subtract? ")

      if operation_chosen == "add":
          #get user input
          first_number = input("Please enter the first number: ")
          second_number = input("Please enter the second number: ")

          #convert input into numbers
          first_number = float(first_number)
          second_number = float(second_number)
          
          the_answer = first_number + second_number
          print("The answer when you add is", the_answer)

      elif operation_chosen == "subtract":
          #get user input
          first_number = input("Please enter the first number: ")
          second_number = input("Please enter the second number: ")

          #convert input into numbers
          first_number = float(first_number)
          second_number = float(second_number)
          
          the_answer = first_number - second_number
          print("The answer when you subtract is", the_answer)

      else:
          #neither add or subtract was entered
          print("Error. I don't know what that means. Please enter 'add' or 'subtract'.")
        
        

Area Calculator
~~~~~~~~~~~~~~~~

Write a program that asks the user if they want to find the area of a rectangle, circle, or triangle. Then have the user input the appropriate sizes (length and width, radius, or base and height) for the shape you will be calculating. Finally, perform the calculation and output the result with a nice message. *Note: You might want to use the code you created yesterday to help you create parts of this!*
   
.. activecode:: practice_problem_conditionals_2
    :nocodelens:

    # Area Calculator
    # Put Your Name Here
    # Put the Date Here

    # your code goes here



If You Are Having Trouble - More Details on Conditionals
---------------------------------------------------------


``if/else``
~~~~~~~~~~~~

The ``if``, ``if/else`` and ``if/elif/else`` control structures are all referred to as conditional statements. Note that each time you ask the computer a question using one of these conditional statements, Python evaluates the question as a Boolean expression. 

.. activecode:: conditionals_1
    :nocodelens:

    x = 15

    if x % 2 == 0:
        print(x, "is even")
    else:
        print(x, "is odd")

.. sidebar::  Flowchart of a **if** statement with an **else**

   .. image:: images/flowchart_if_else.png

Just like with Reeborg, the syntax for an ``if`` statement looks like this:

.. sourcecode:: python

    if BOOLEAN EXPRESSION:
        STATEMENTS_1        # executed if condition evaluates to True
    else:
        STATEMENTS_2        # executed if condition evaluates to False

The boolean expression after the ``if`` statement is called the **condition**.
If it is true, then the immediately following indented statements get executed. If not, then the statements
indented under the ``else`` clause get executed.

The more indented statements that follow are called a **block**. There is no limit on the number of statements that can appear under the two clauses of an
``if`` statement, but there has to be at least one statement in each block.


.. mchoice:: conditionals_mc_1
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


.. mchoice:: conditionals_mc_2
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


``if``
~~~~~~~

.. sidebar::  Flowchart of an **if** with no **else**

   .. image:: images/flowchart_if_only.png

Another form of the ``if`` statement is one in which the ``else`` clause is omitted entirely.
This creates what is sometimes called **unary selection**.
In this case, when the condition evaluates to ``True``, the statements are
executed.  Otherwise the flow of execution continues to the statement after the body of the ``if``.


.. activecode:: conditionals_if_1
    :nocodelens:

    x = 10
    if x < 0:
        print("The negative number ",  x, " is not valid here.")
    print("This is always printed")


What would be printed if the value of ``x`` is negative?  Try it.


**Check your understanding**

.. mchoice:: conditionals_if_mc_1
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
~~~~~~~~~~~~~~~~~

``elif`` is an abbreviation of ``else if``. Remember that exactly one branch will be
executed. There is no limit of the number of ``elif`` statements but only a
single (and optional) final ``else`` statement is allowed and it must be the last
branch in the statement.

.. image:: images/flowchart_chained_conditional.png

Each condition is checked in order. If the first is false, the next is checked,
and so on. If one of them is true, the corresponding branch executes, and the
statement ends. **Even if more than one condition is true, only the first true
branch executes**.


.. activecode:: conditionals_if_elif_else_1
    :nocodelens:
    
    x = 10
    y = 10

    if x < y:
        print("x is less than y")
    elif x > y:
        print("x is greater than y")
    else:
        print("x and y must be equal")
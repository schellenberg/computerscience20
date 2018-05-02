.. qnum::
   :prefix: input-output-assn
   :start: 1


Input/Output Assignment
========================

.. topic:: Quick Overview of Day

    Go over practice problem(s) from last day. Work on a first Python assignment, focused on input/output, data types and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


What Does This Program Do?
---------------------------

Remember that a single equal sign ``=`` is used to **assign** a value. Two equal signs ``==`` are used when **comparing** a value.

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_input_output_first_assn_1
    :caption: What will this program print?
    :nocodelens:

    print(16 == "16")


Can you spot the error in the following example? How could you fix it?

.. activecode:: wdtpd_input_output_first_assn_2
    :caption: Spot the error and fix it!
    :nocodelens:

    name = input("What is your name? ")
    if name == sarah:
      print("Hi Sarah! Good to see you!")


.. activecode:: wdtpd_input_output_first_assn_3
    :caption: What will this program print?
    :nocodelens:

    number = input("What number should we double? ")
    doubled_value = number * 2
    print(doubled_value)




Being Careful with Data Types
------------------------------

Remember that when you are taking input from the user with the ``input()`` function, the value is **always, always a string!** If you need to do some kind of mathematical calculation with input from the user, you must convert the input into a number (either an int or a float). Recall that the functions available to you for type conversion are:

- ``int(x)`` to convert *x* to an integer
- ``float(x)`` to convert *x* to a floating point number (number with a decimal)
- ``str(x)`` to convert *x* to a string (a value surrounded by quotes)


Input/Output Assignment
----------------------------------

.. note:: You have now had a chance to practice a number of problems that involved taking in input from the user, performing some operation on that input, and printing out a result. This might be a nice time to put the knowledge you've gained into practice on a hand-in assignment. One possible assignment is given below.

*You can either work directly in the textbook, or using Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish for the day!*

Write a Python program that will convert degrees Celsius to degrees Fahrenheit AND from Fahrenheit to Celsius.

Your program should ask the user which conversion you'd like to do (F to C, or C to F), then to input a value in degrees Celsius/Fahrenheit, and should output the converted value in degrees Fahrenheit/Celsius. 

For this first assignment, you don't need to foolproof user input (in other words, you can assume that the user will enter just a number). This means that if the user were to enter in ``bob`` when you ask them for the temperature, your program will crash, and that is okay. 

As this is the first Python assignment you are going to submit, the following notes might be useful:

- be sure to include a comment header in your code, which means your Python file should start with something like::

    # Temperature Conversion Assignment
    # Put Your Name Here
    # Put the Date Here

    # your code goes here
 

**Extras for Experts (things to try if you finish before your classmates)**

- try to foolproof the user input (in other words, make sure your program doesn't crash if the user types in "frank" instead of 15 when asked for a temperature). *Hint: check out the try and except control structure in Python. You'll probably want to search the internet for some ideas on that.*
- add the ability to convert to/from Kelvin as well


.. activecode:: first_input_output_assignment_scratch_work_area
    :nocodelens:

    # Temperature Conversion Assignment
    # Put Your Name Here
    # Put the Date Here

    # your code goes here



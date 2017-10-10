Your First Python Program!
==========================


What is Python?
---------------

You've already been writing Python programs using Reeborg. Everything you have already learned (with the exception of `repeat`), works in regular Python. Using regular Python allows us to start exploring other ways our programs can produce output, and take input.

In today's high level exploration of Python, you will see some things that you do not understand. That is okay. We will go into each of the ideas in much more detail as the semester progresses, but it is really helpful to see a large overview before we get into the details of each section.

Whitespace
-----------

Just like when you were programming Reeborg, it is **really important to indent your code correctly** in Python. For example, the code given below will cause a **syntax error** when you click the Run button. Click the Run button to see the error. Now, can you figure out how to fix it? Edit the code, then click Run again to see if you've fixed it!

.. activecode:: syntax_error_indentation
   :caption: Fix the syntax error by indenting the code properly.

   some_number = 5
   if some_number > 3:
   print("Yeah, the number is bigger.")

Variables and Data Types
------------------------

You hopefully remember using variables to keep track of things when we were using Scratch. For example, we used a variable called `number of sides` when we began to draw regular polygons. In Python, we can create variables as well. We have to be careful how we name variables, since they can't be keywords like `if`, `not`, etc. Variables should start with a letter, and if they contain more than one word, you should put an underscore between the words (like `helpful_variable` or `something_else`).

The fundamental data types that we are concerned about in Python include:

- int (integer, such as `3` or `-5`)
- float (floating point, such as `1.2` or `-4.75`)
- str (string, such as `"hello"` or `'Friday` or `"5"`)
- bool (boolean, such as `True` or `False`) 

We will use each of the data types given above throughout the course, and it is **really important** that you understand the differences between them. Take a moment now to try the following questions.

**Check Your Understanding**

.. mchoice:: data_types_1_1
   :answer_a: boolean
   :answer_b: integer
   :answer_c: float
   :answer_d: string
   :correct: d
   :feedback_a: It is not True or False.
   :feedback_b: The data is not numeric.
   :feedback_c: The value is not numeric with a decimal point.
   :feedback_d: Great! Strings are enclosed in quotes.

   What is the data type of `'this is what kind of data'`?

.. mchoice:: data_types_1_2
   :answer_a: boolean
   :answer_b: integer
   :answer_c: float
   :answer_d: string
   :correct: b
   :feedback_a: It is not True or False.
   :feedback_b: Great! The data is numeric, without a decimal point.
   :feedback_c: The value is not numeric with a decimal point.
   :feedback_d: Strings are enclosed in quotes.

   What is the data type of `3`?

.. mchoice:: data_types_1_3
   :answer_a: boolean
   :answer_b: integer
   :answer_c: float
   :answer_d: string
   :correct: a
   :feedback_a: Great! Boolean is either True or False.
   :feedback_b: The data is not numeric.
   :feedback_c: The value is not numeric with a decimal point.
   :feedback_d: Strings are enclosed in quotes.

   What is the data type of `True`?

.. mchoice:: data_types_1_4
   :answer_a: boolean
   :answer_b: integer
   :answer_c: float
   :answer_d: string
   :correct: c
   :feedback_a: It is not True or False.
   :feedback_b: The data is not numeric.
   :feedback_c: Great! The value is numeric with a decimal point.
   :feedback_d: Strings are enclosed in quotes.

   What is the data type of `1.5`?


Checking Data Types
-------------------
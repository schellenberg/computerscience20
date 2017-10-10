Your First Python Program!
==========================


What is Python?
---------------

You've already been writing Python programs using Reeborg. Everything you have already learned (with the exception of `repeat`), works in regular Python. Using regular Python allows us to start exploring other ways our programs can produce output, and take input.

In today's high level exploration of Python, you will see some things that you do not understand. That is okay. We will go into each of the ideas in much more detail as the semester progresses, but it is really helpful to see a large overview before we get into the details of each section.

Whitespace
-----------

Just like when you were programming Reeborg, it is **really important to indent your code correctly** in Python.

.. activecode:: syntax_error_indentation
   :caption: Fix the syntax error by indenting the code properly.

   some_number = 5
   if some_number > 3:
   print("Yeah, the number is bigger.")


Multiple Choice
---------------

.. mchoice:: question1_2
    :multiple_answers:
    :correct: a,b,d
    :answer_a: red
    :answer_b: yellow
    :answer_c: black
    :answer_d: green
    :feedback_a: Red is a definitely on of the colors.
    :feedback_b: Yes, yellow is correct.
    :feedback_c: Remember the acronym...ROY G BIV.  B stands for blue.
    :feedback_d: Yes, green is one of the colors.

    Which colors might be found in a rainbow? (choose all that are correct)
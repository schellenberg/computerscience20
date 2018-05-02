.. qnum::
   :prefix: turtle-drawing-practice
   :start: 1


Turtle Drawing Practice
================================

.. topic:: Quick Overview of Day

    Use ``for`` loops and functions to draw shapes elegantly. Continue working on a Python turtle graphics assignment, focused on repetition and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Practice Problems
-----------------

Inner Squares
~~~~~~~~~~~~~~

.. image:: images/confusion-6.png

Define a function similar to ``draw_square(my_turtle, side_length)`` and call it twice to draw the shape above. You may find it helpful define a new version of of this function, instead of reusing the one from yesterday. Perhaps you might not start in the same location as we did the last time we drew a square?

.. activecode:: practice_problems_1
    :nocodelens:

    import turtle

.. reveal:: hint_given
    :showtitle: Need a Hint?

    For the first three problems, beginning your drawing from the *middle* of the square, then ending in the middle of the square (facing the same direction as you started) can be a really helpful strategy. You might want to create a function such as ``draw_square_from_centre(the_turtle, side_length)`` that does this. This new function could even call your old ``draw_square(my_turtle, side_length)`` function, if you'd like.

Square Logo
~~~~~~~~~~~~~~

.. image:: images/confusion-7.png

Draw the shape above. Depending on how you defined the function in the problem above, you may be able to easily use reuse your function.

.. activecode:: practice_problems_2
    :nocodelens:

    import turtle


Overlapped Squares
~~~~~~~~~~~~~~~~~~~

.. image:: images/confusion-8.png

Draw the shape above. Depending on how you defined your earlier function(s) in the problems aboves, you may be able to easily use reuse your function(s).

.. activecode:: practice_problems_3
    :nocodelens:

    import turtle


Bonus - If You Are Done Before Others
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: images/confusion-20.png

Draw the shape above. Think carefully about how you might be able to draw this elegantly (efficiently and readably)! Creating an adapted version of one of your previous functions isn't a bad idea...

.. activecode:: practice_problems_4
    :nocodelens:

    import turtle


Turtle Graphics Assignment
---------------------------

Use the rest of this class time to keep working on your current Python assignment (possibly a turtle graphics drawing, with a focus on looping and conditionals).

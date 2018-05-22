.. qnum::
   :prefix: loops-practice-quiz
   :start: 1


Loops Practice Quiz and Assignment Work Period
===============================================

.. topic:: Quick Overview of Day

    Use ``for`` loops and functions to draw one shape elegantly. Continue working on a Python turtle graphics assignment, focused on repetition and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.
    - **CS20-FP4** Investigate one-dimensional arrays and their applications.


Practice Problem
-----------------

.. image:: images/confusion-17.png

Draw the shape above. You can choose to either:

- create a function, and repeatedly call that function
- use repetition without a function (if you choose this method, you will want to use a nested ``for`` loop)

.. activecode:: practice_problems_17
    :nocodelens:

    import turtle


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_functions_1
    :caption: What will this program print?

    def a():
        print("A")

    def b():
        print("B")

    def c():
        print("C")

    a()


.. activecode:: wdtpd_functions_2
    :caption: What will this program print?

    def a():
        b()
        print("A")

    def b():
        c()
        print("B")

    def c():
        print("C")

    a()


.. activecode:: wdtpd_functions_3
    :caption: What will this program print?

    def a():
        print("A")
        b()
         
    def b():
        print("B")
        c()
         
    def c():
        print("C")
           
    a()


.. activecode:: wdtpd_functions_4
    :caption: What will this program print?

    def a():
        print("A start")
        b()
        print("A end")
         
    def b():
        print("B start")
        c()
        print("B end")
         
    def c():
        print("C start and end")
         
    a()


Loops Practice Quiz
--------------------

Question 1
~~~~~~~~~~~~

.. mchoice:: loops_practice_quiz_1
    :answer_a: No shape will be drawn.
    :answer_b: A line segment.
    :answer_c: A triangle.
    :answer_d: A square.
    :correct: b
    :feedback_a: Try again!
    :feedback_b: Great!
    :feedback_c: Try again!
    :feedback_d: Try again! Notice that that alex.left(90) command is not inside the for loop.

    What shape will the turtle alex draw when the code below is executed?::

        import turtle

        the_window = turtle.Screen()
        the_window.bgcolor("lightgreen")
        alex = turtle.Turtle()
        alex.pensize(3)

        for i in [0,1,2,3]: 
            alex.forward(50)
        alex.left(90)


Question 2
~~~~~~~~~~~~

.. mchoice:: loops_practice_quiz_2
    :answer_a: No shape will be drawn.
    :answer_b: A line segment.
    :answer_c: A triangle.
    :answer_d: A square.
    :correct: d
    :feedback_a: Try again!
    :feedback_b: Try again! This time, the alex.left(90) is included in the for loop.
    :feedback_c: Try again!
    :feedback_d: Great!

    What shape will the turtle alex draw when the code below is executed?::

        import turtle

        the_window = turtle.Screen()
        the_window.bgcolor("lightgreen")
        alex = turtle.Turtle()
        alex.pensize(3)

        for i in [0,1,2,3]: 
            alex.forward(50)
            alex.left(90)


Question 3
~~~~~~~~~~~~

.. fillintheblank:: loops_practice_quiz_3

    In the following code, how many lines does this code print?::

        for number in [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]:
            print("I have", number, "cookies.  I'm going to eat one.")

    - :11: Great!
      :10: Not quite. Don't forget about the 0 at the end of the list!
      :.*: Try again!


Question 4
~~~~~~~~~~~~

.. mchoice:: loops_practice_quiz_4
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Nope. Remember that range(4) will create a list with elements [0,1,2,3].
    :feedback_b: Great!

    The following will print a line showing the number 4::

        for i in range(4):
            print(i)


Question 5
~~~~~~~~~~~~

.. fillintheblank:: loops_practice_quiz_5

    What is the last line that this code will print?::

        i = 1
        while (i <= 3):
            i = i + 1
            print(i)
      
    - :4: Great!
      :3: Not quite. Remember the while loop will only check the conditional at the start of the loop!
      :.*: Try again!


Turtle Graphics Assignment
---------------------------

Use the rest of this class time to keep working on your current Python assignment (possibly a turtle graphics drawing, with a focus on looping and conditionals).

.. qnum::
   :prefix: loops-quiz
   :start: 1

.. _loops_practice_quiz:

Loops Practice Quiz
================================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-FP2** Investigate how control structures affect program flow.

To confirm that you understand the major concepts you've seen in Python, try to answer the following questions **without opening Python**.


Question 1
-----------

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

        theWindow = turtle.Screen()
        theWindow.bgcolor("lightgreen")
        alex = turtle.Turtle()
        alex.pensize(3)

        for i in [0,1,2,3]: 
            alex.forward(50)
        alex.left(90)


Question 2
-----------

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

        theWindow = turtle.Screen()
        theWindow.bgcolor("lightgreen")
        alex = turtle.Turtle()
        alex.pensize(3)

        for i in [0,1,2,3]: 
            alex.forward(50)
            alex.left(90)


Question 3
-----------

.. fillintheblank:: loops_practice_quiz_3

    In the following code, how many lines does this code print?::

        for number in [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]:
            print("I have", number, "cookies.  I'm going to eat one.")

    - :11: Great!
      :10: Not quite. Don't forget about the 0 at the end of the list!
      :.*: Try again!


Question 4
-----------

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
-----------

.. fillintheblank:: loops_practice_quiz_5

    What is the last line that this code will print?::

        i = 1
        while (i <= 3):
            i = i + 1
            print(i)
      
    - :4: Great!
      :3: Not quite. Remember the while loop will only check the conditional at the start of the loop!
      :.*: Try again!
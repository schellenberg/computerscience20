.. qnum::
   :prefix: reeborg-second-quiz
   :start: 1


Second Practice Quiz
================================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.

To confirm that you understand the major concepts you've seen with Reeborg, try to answer the first 4 questions **without opening the Reeborg environment**.

Question 1 - While Loops
------------------------

.. mchoice:: reeborg_while_loops
    :answer_a: east
    :answer_b: south
    :answer_c: west
    :answer_d: north
    :correct: d
    :feedback_a: Try again!
    :feedback_b: Try again!
    :feedback_c: Try again!
    :feedback_d: Great!

    Reeborg is facing east. The following code is then executed::

        while not is_facing_north():
            turn_left()

    What direction is the robot is facing now?


Question 2 - While and Repeat Loops
-----------------------------------

.. mchoice:: reeborg_while_and_repeat
    :answer_a: east
    :answer_b: south
    :answer_c: west
    :answer_d: north
    :correct: c
    :feedback_a: Try again!
    :feedback_b: Try again!
    :feedback_c: Great!
    :feedback_d: Try again!

    Reeborg is facing east. The following code is then executed::

        while not is_facing_north():
            turn_left()
        repeat 5:
            turn_left()

    What direction is the robot is facing now?


Question 3 - Loops and If
-------------------------

.. fillintheblank:: reeborg_while_repeat_if

    Reeborg is standing in a world in which every location square has 3 carrots, which looks like this:

    .. image:: images/practice_quiz_start.png
    
    The following code is then executed::

        repeat 8:
            if object_here():
                repeat 2:
                    take()
            move()

    How many carrots is Reeborg holding now?

    - :16: Great!
      :8: Remember there is a repeat 2 inside the repeat 8.
      :.*: Try again!


Question 4 - Loops and If/Else
------------------------------

.. fillintheblank:: reeborg_while_repeat_if_else
    
    Reeborg is holding a large handful of carrots, and is planning to plant them as he walks around a world that looks like this:

    .. image:: images/quiz_if_else_start.png
    
    The following code is then executed::

        repeat 7:
            if front_is_clear():
                move()
            else:
                turn_left()
                put()

    How many carrots has Reeborg planted when the code has finished?

    - :1: Great!
      :2: Careful! Remember that the `else` does not include `move`.
      :.*: Try again!
      

Question 5 - Mirror Image
-------------------------

The room (shown below) has alcoves on the left and the right. Some of the alcoves contain daisies. For each alcove on the left side that contains a daisy, make Reeborg move the daisy to the opposite alcove on the right hand side. One possible starting world could look like the following:

Open the |alcove1| and create a solution to this problem!

.. image:: images/practice_quiz_alcove_start.png

**Do not look** at this sample solution unless you have already finished creating your own solution!

.. reveal:: reveal_practice_quiz_solution
    :showtitle: Reveal Solution
    :hidetitle: Hide Solution

    Since all of the distances in the world stay exactly the same each time, this problem can be solved using only `repeat` loops. Please note that there are many possible solutions to this problem. This is one::

        think(0)

        def turn_around():
            repeat 2:
                turn_left()

        def turn_right():
            repeat 3:
                turn_left()
                
        def move_daisy():
            take()
            turn_around()
            repeat 6:
                move()
            put()
            turn_around()
            repeat 5:
                move()
            turn_right()

        repeat 6:
            move()
            turn_left()
            move()
            if object_here():
                move_daisy()
            else:
                turn_around()
                move()
                turn_left()
            if front_is_clear():
                move()
    

.. |alcove1| raw:: html

   <a href="/reeborg?lang=en&mode=python&url=worlds/sk/practice-quiz-alcove.json&name=PracticeQuizAlcove" target="_blank">Mirror Image Practice Quiz world</a>



Question 6 - Mirror Image - Part 2
----------------------------------

This time, the distance between the alcove on the right and left is not consistent (in other words, the alcoves can be different distances apart). Once again, for each alcove on the left side that contains a daisy, make Reeborg move the daisy to the opposite alcove on the right hand side. One possible starting world could look like the following:

Open the |alcove2| and create a solution to this problem!

.. image:: images/practice_quiz_alcove2_start.png

**Do not look** at this sample solution unless you have already finished creating your own solution!

.. reveal:: reveal_practice_quiz_solution2
    :showtitle: Reveal Solution
    :hidetitle: Hide Solution

    Since there is an unknown distance to travel, you will need to use a `while` loop, instead of just a `repeat` loop. This is one possible solution::

        think(0)

        def turn_around():
            repeat 2:
                turn_left()

        def turn_right():
            repeat 3:
                turn_left()

        def backup():
            turn_around()
            move()
            turn_around()
            
        def move_daisy():
            take()
            turn_around()
            while front_is_clear():
                move()
            put()
            turn_around()
            while front_is_clear():
                move()
            backup()
            turn_right()

        repeat 6:
            move()
            turn_left()
            move()
            if object_here():
                move_daisy()
            else:
                turn_around()
                move()
                turn_left()
            if front_is_clear():
                move()


.. |alcove2| raw:: html

   <a href="/reeborg?lang=en&mode=python&url=worlds/sk/practice-quiz-alcove2.json&name=PracticeQuizAlcove2" target="_blank">Mirror Image Practice Quiz world</a>
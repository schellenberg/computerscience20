Practice Quiz
================================

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

The room (shown below) has alcoves on the left and the right. Some of the alcoves contain daisies. For each alcove on the left side that contains a daisy, Reeborg should move that daisy in the opposite alcove on the right hand side. One possible starting world could look like the following:

Open the |reeborg_environment| and create a solution to this problem!

.. image:: images/practice_quiz_alcove_start.png

**Do not look** at this sample solution unless you have already finished creating your own solution!

.. reveal:: reveal_practice_quiz_solution
    :showtitle: Reveal Solution
    :hidetitle: Hide Solution

    Please note that there are many possible solutions to this problem. This is one::

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
    

.. |reeborg_environment| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg?lang=en&mode=python&url=src/worlds/steps/practice-quiz-alcove.json&name=PracticeQuizAlcove" target="_blank">Mirror Image Practice Quiz world</a>
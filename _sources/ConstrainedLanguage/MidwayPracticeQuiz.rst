Halfway Through Practice Quiz
================================

To confirm that you understand the major concepts you've seen with Reeborg, try to answer the following questions **without opening the Reeborg environment**.

Question 1 - Repeat Loops
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


Question 2 - Repeat Loops
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


Question 3 - Repeat and  If
----------------------------

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


Question 4 - Repeat and Def
----------------------------

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
      


.. qnum::
   :prefix: reeborg-practice-quiz
   :start: 1


First Practice Quiz - ``repeat``, ``if``, ``def``
==================================================

.. reveal:: curriculum_addressed_reeborg_practice_quiz_1
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


To confirm that you understand the major concepts you've seen with Reeborg, try to answer the following questions **without opening the Reeborg environment**.

Question 1 - Repeat Loops
--------------------------

.. mchoice:: reeborg_repeat_loops
    :answer_a: Option 1
    :answer_b: Option 2
    :answer_c: Option 3
    :answer_d: Option 4
    :correct: c
    :feedback_a: Notice that move() is not in the repeat loop. Try again!
    :feedback_b: Careful! There should be more than one daisy down...
    :feedback_c: Great!
    :feedback_d: Careful! move() will only happen once. Try again!

    Consider the following world, in which Reeborg is holding 4 daisies:

    .. image:: images/quiz-starting-world.png
    
    Assume the following code is executed::

        repeat 4:
            put()
        move()

    Which of the following images shows what the world would look like after the code is finished running?

    **Option 1:**

    .. image:: images/quiz-optiona.png
    
    **Option 2:**

    .. image:: images/quiz-optionb.png
    
    **Option 3:**

    .. image:: images/quiz-optionc.png
    
    **Option 4:**

    .. image:: images/quiz-optiond.png
    
    

Question 2 - Repeat Loops
--------------------------

.. mchoice:: reeborg_repeat_loops2
    :answer_a: Option 1
    :answer_b: Option 2
    :answer_c: Option 3
    :answer_d: Option 4
    :correct: a
    :feedback_a: Great!
    :feedback_b: Careful! There should be more than one daisy down...
    :feedback_c: Notice that move() is inside repeat. Try again!
    :feedback_d: Careful! Both commands inside repeat will happen, in order. Try again!

    **Note: This question is very similar to the last one, but there is a slight change. Read carefully!**
    Consider the following world, in which Reeborg is holding 4 daisies:

    .. image:: images/quiz-starting-world.png
    
    Assume the following code is executed::

        repeat 4:
            put()
            move()

    Which of the following images shows what the world would look like after the code is finished running?

    **Option 1:**

    .. image:: images/quiz-optiona.png
    
    **Option 2:**

    .. image:: images/quiz-optionb.png
    
    **Option 3:**

    .. image:: images/quiz-optionc.png
    
    **Option 4:**

    .. image:: images/quiz-optiond.png


Question 3 - Repeat and If
----------------------------

.. fillintheblank:: reeborg_repeat_if

    Assume the starting world looks like this:

    .. image:: images/quiz-starting-world2.png
    
    The following code is then executed::

        repeat 10:
            move()
            if object_here():
                take()

    How many dandelions has Reeborg picked up when the code has finished?

    - :6: Great!
      :10: Reeborg will only take one dandelion per location, due to the move() before the if object_here().
      :.*: Try again!


Question 4 - Repeat and Def
----------------------------

.. mchoice:: reeborg_repeat_with_functions
    :answer_a: 0
    :answer_b: 4
    :answer_c: 7
    :answer_d: An error will occur
    :correct: b
    :feedback_a: Try again!
    :feedback_b: Great!
    :feedback_c: Try again!
    :feedback_d: Try again!
    
    Assume the starting world looks like this:

    .. image:: images/quiz-starting-world3.png
    
    The following code is then executed::

        def turn_right():
            repeat 3:
                turn_left()

        def turn_around():
            repeat 2:
                turn_left()

        def move_and_pick():
            move()
            take()
         
        def weeding_time():
            repeat 2:
                move_and_pick()

        repeat 4:
            move()
        turn_left()
        move()
        turn_left()

        weeding_time()
        move()
        turn_right()
        move()
        turn_right()

        weeding_time()
        move()

    How many dandelions has Reeborg picked up when the code has finished?


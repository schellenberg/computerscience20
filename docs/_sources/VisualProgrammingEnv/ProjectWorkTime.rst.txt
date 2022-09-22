.. qnum::
   :prefix: scratch-project
   :start: 1


Project Work Period and Practice Quiz
======================================

.. topic:: Quick Overview of Day

    Work period to put the concepts learned so far into practice. Your teacher will have you create a project that uses most of the ideas seen so far -- a Rock Paper Scissors game is a nice option.

.. reveal:: curriculum_addressed_scratch_projects
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.



We won't be learning anything new today. Instead, you will be given time to work on a project that puts to use many of the ideas that we've seen so far. Before you begin working on your project, however, you should try the practice quiz below to confirm that you understand the ideas we've seen so far.

Check Your Understanding
-------------------------

.. mchoice:: scratch_practice_quiz_1
    :answer_a: The current sprite would say "Hi" for 1 second, then say "there" for 1 second, then say "everyone" for 1 second.
    :answer_b: The current sprite would say "Hi" for 1 second, then say "everyone" for 1 second, then say "there" for 1 second.
    :answer_c: The current sprite would say "Hi" for 1 second, then say "there" for 1 second.
    :correct: b
    :feedback_a: No. Be sure to look very carefully at the names of the broadcasts!
    :feedback_b: Yes! The order is controlled by the names of the broadcasts, not which is higher or lower in your script.
    :feedback_c: No. Be sure to look very carefully at the names of the broadcasts!

    What would happen when you click the green flag, given the code below?

    .. image:: images/scratch_practice_quiz_1.png


.. mchoice:: scratch_practice_quiz_2
    :answer_a: The current sprite would say "Hi" for 1 second, then say "there" for 1 second, then say "everyone" for 1 second.
    :answer_b: The current sprite would say "Hi" for 1 second, then say "everyone" for 1 second, then say "there" for 1 second.
    :answer_c: The current sprite would say "Hi" for 1 second, then say "everyone" forever.
    :correct: c
    :feedback_a: No. Be sure to look very carefully at the names of the broadcasts!
    :feedback_b: No. Be sure to look very carefully at the names of the broadcasts!
    :feedback_c: Yes! Since the 'when I receive alpha' block of code calls itself, it will never stop repeating.

    What would happen when you click the green flag, given the code below?

    .. image:: images/scratch_practice_quiz_2.png


.. fillintheblank:: scratch_practice_quiz_3

    Given the code below, how far would the current sprite move when you click the green flag?

    .. image:: images/scratch_practice_quiz_3.png

    - :50: Yes! Since we repeat the 'move 10 steps' block 5 times, it is the equivalent of executing the move 10 steps block 5 times.
      :5: No. Although there is a repeat 5 block, for each repetition the sprite will move 10 steps.
      :10: No. Since we repeat the 'move 10 steps' block 5 times, it is the equivalent of executing the move 10 steps block 5 times.
      :.*: Try again!


.. fillintheblank:: scratch_practice_quiz_4

    Given the code below, how many times will you hear the meow sound when you click the green flag?

    .. image:: images/scratch_practice_quiz_4.png

    - :3: Yes! Since the execution of the script will only pause until the sound is completed for the 'until done' blocks, you will only hear the two 'until done' blocks and the final play sound block.
      :6: No. Since the execution of the script will only pause until the sound is completed for the 'until done' blocks, you will only hear the two 'until done' blocks and the final play sound block.
      :2: No. Since the execution of the script will only pause until the sound is completed for the 'until done' blocks, you will only hear the two 'until done' blocks and the final play sound block.
      :.*: Try again!



.. fillintheblank:: scratch_practice_quiz_5

    Given the code below, how far will the current sprite move when you click the green flag?

    .. image:: images/scratch_practice_quiz_5.png

    - :60: Yes! Since the 'move 10 steps' is inside a nested loop, there will be 2 times that it is repeated 3 times. You can think of this as multiplying the nested loop values.
      :30: No. Since the 'move 10 steps' is inside a nested loop, there will be 2 times that it is repeated 3 times. You can think of this as multiplying the nested loop values.
      :5: No. Since the 'move 10 steps' is inside a nested loop, there will be 2 times that it is repeated 3 times. You can think of this as multiplying the nested loop values.
      :.*: Try again! Since the 'move 10 steps' is inside a nested loop, there will be 2 times that it is repeated 3 times.



.. fillintheblank:: scratch_practice_quiz_6

    Given the code below, what would be the value of x after the following code is executed?

    .. image:: images/scratch_practice_quiz_6.png

    - :20: Yes! Since the 'set x to x + 3' is outside the if/else block, it will occur regardless of whether 'x' is less than or 10.
      :17: No. Since the 'set x to x + 3' is outside the if/else block, it will occur regardless of whether 'x' is less than or 10.
      :.*: Try again! Since the 'set x to x + 3' is outside the if/else block, it will occur regardless of whether 'x' is less than or 10.



.. fillintheblank:: scratch_practice_quiz_7

    Given the code below, how many iterations would occur when the following code is executed?

    .. image:: images/scratch_practice_quiz_6.png

    - :3: Yes! Since the 'set x to x + 3' is outside the if/else block, it will occur regardless of whether 'x' is less than or 10.
      :5: No. Since the 'set x to x + 3' is outside the if/else block, it will occur regardless of whether 'x' is less than or 10.
      :.*: Try again! Since the 'set x to x + 3' is outside the if/else block, it will occur regardless of whether 'x' is less than or 10.


.. fillintheblank:: scratch_practice_quiz_8

    Given the code below, what would be the value of the "My Number" variable after this code has executed?

    .. image:: images/set_change_test_yourself1.png

    - :99: Yes! Remember that "change" simply adds some amount to the current value of the variable.
      :.*: Try again! Remember that "change" simply adds some amount to the current value of the variable.

.. fillintheblank:: scratch_practice_quiz_9

    Given the code below, what would be the value of the "My Number" variable after this code has executed?

    .. image:: images/set_change_test_yourself2.png

    - :50: Yes! Remember that "set" makes the current value of the variable into a specific value, regardless of what it was previously.
      :.*: Try again! Remember that "set" makes the current value of the variable into a specific value, regardless of what it was previously.

.. fillintheblank:: scratch_practice_quiz_10

    Given the code below, what would be the value of the "My Number" variable after this code has executed?

    .. image:: images/set_change_test_yourself3.png

    - :30: Yes! Remember that "set" makes the current value of the variable into a specific value, regardless of what it was previously.
      :.*: Try again! Remember that "set" makes the current value of the variable into a specific value, regardless of what it was previously.

.. fillintheblank:: scratch_practice_quiz_11

    Given the code below, what would be the value of the "My Number" variable after this code has executed?

    .. image:: images/set_change_test_yourself4.png

    - :96: Yes! Remember that if you use a variable within a new set/change statement, the variable contains it's previous value (in this case, 88).
      :.*: Try again! Remember that if you use a variable within a new set/change statement, the variable contains it's previous value (in this case, 88).

.. fillintheblank:: scratch_practice_quiz_12

    Given the code below, what would be the value of the "My Number" variable after this code has executed?

    .. image:: images/set_change_test_yourself5.png

    - :12: Yes! Remember that only one branch of an if/else block can occur, but statements outside the if/else will execute no matter what.
      :.*: Try again! Remember that only one branch of an if/else block can occur, but statements outside the if/else will execute no matter what.

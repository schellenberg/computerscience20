.. qnum::
   :prefix: strings-quiz
   :start: 1

.. _strings_practice_quiz:

Strings Practice Quiz
================================

.. reveal:: curriculum_addressed_strings_quiz
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.

To confirm that you understand the string concepts you've seen in Python, try to answer the following questions **without opening Python**.


Question 1
-----------

.. fillintheblank:: strings_practice_quiz_1

    In the following code, how many lines does this code print?::

        for number in [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]:
            print("I have", number, "cookies.  I'm going to eat one.")

    - :11: Great!
      :10: Not quite. Don't forget about the 0 at the end of the list!
      :.*: Try again!


Question 4
-----------

.. mchoice:: strings_practice_quiz_4
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Nope. Remember that range(4) will create a list with elements [0,1,2,3].
    :feedback_b: Great!

    The following will print a line showing the number 4::

        for i in range(4):
            print(i)

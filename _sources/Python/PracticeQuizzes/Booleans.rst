.. qnum::
   :prefix: boolean-quiz
   :start: 1

.. _booleans_practice_quiz:

Booleans Practice Quiz
=======================

.. reveal:: curriculum_addressed_boolean_quiz
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-FP2** Investigate how control structures affect program flow.

To confirm that you understand the major concepts you've seen in Python, try to answer the following questions **without opening Python**.


Question 1
-----------

.. mchoice:: booleans_practice_quiz_1
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: The expression a == 6 evaluates to True because a is indeed 6.

    What would the following print?::

        a = 6
        b = 10
        print(a == 6)


Question 2
-----------

.. mchoice:: booleans_practice_quiz_2
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: The expression b == 6 evaluates to False, so not (b == 6) evaluates to True.

    What would the following print?::

        a = 6
        b = 10
        print( not (b == 6) )


Question 3
-----------

.. mchoice:: booleans_practice_quiz_3
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: The expression a == 10 evaluates to False, but b == 10 evaluates to True, so the overall expression evaluates to True.

    What would the following print?::

        a = 6
        b = 10
        print( a == 10 or b == 10 )


Question 4
-----------

.. mchoice:: booleans_practice_quiz_4
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: The expression a == 6 and 10 evaluates to True because the if statement does not have a full condition on both sides of the and operator. In other words, the a == 6 evaluates to True and the 10 evaluates to True. This is a common error when writing a boolean question. What is likely intended is a == 6 and a === 10.

    What would the following print?::

        a = 6
        b = 10
        if a == 6 and 10:
            print("True")
        else:
            print("False")


Question 5
-----------

.. mchoice:: booleans_practice_quiz_5
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: The expression a == 10 evaluates to False, so not a == 10 evaluates to True, and b == 10 is True, so the overall expression is True.

    What would the following print?::

        a = 6
        b = 10
        print( not a == 10 and b == 10 )
      

Question 6
-----------

.. mchoice:: booleans_practice_quiz_6
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: The expression a == 10 evaluates to False, and not b == 10 evaluates to False, so the overall expression is False.
    :feedback_b: Great!

    What would the following print?::

        a = 6
        b = 10
        print( a == 10 or not b == 10 )
      

Question 7
-----------

.. mchoice:: booleans_practice_quiz_7
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: The expression a == 6 evaluates to True and not a == 10 evaluates to True, so the overall expression is True.

    What would the following print?::

        a = 6
        b = 10
        print( a == 6 and (not a == 10) )


Question 8
-----------

.. mchoice:: booleans_practice_quiz_8
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: The expression not a == 10 evaluates to True and not b == 10 evaluates to False, so the overall expression inside the parentheses is True, and the outer not makes it False.
    :feedback_b: Great!

    What would the following print?::

        a = 6
        b = 10
        print( not ( not a == 10 or not b == 10) )


Question 9
-----------

.. mchoice:: booleans_practice_quiz_9
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: The expression a != 6 evaluates to False, so the overall expression is False.
    :feedback_b: Great!

    What would the following print?::

        a = 6
        b = 10
        print( a != 6 and b == 10 )


Question 10
-----------

.. mchoice:: booleans_practice_quiz_10
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: The expression a != 10 evaluates to True and b != 10 evaluates to False, so the overall expression inside the parentheses is False, and the outer not makes it True. The second part of the expression not b == 5 evaluates to True, so the overall expression is True.

    What would the following print?::

        a = 6
        b = 10
        print( not ( a != 10 or b != 10) or not b == 5)


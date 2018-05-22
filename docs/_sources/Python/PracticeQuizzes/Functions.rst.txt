.. qnum::
   :prefix: function-quiz
   :start: 1


Functions Practice Quiz
================================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.

To confirm that you understand the major concepts you've seen in Python, try to answer the following questions **without opening Python**.


Question 1
-----------

.. mchoice:: functions_practice_quiz_1
    :answer_a: def some_function()
    :answer_b: function some_function()
    :answer_c: function some_function():
    :answer_d: def some_function():
    :correct: d
    :feedback_a: Try again! Something is missing at the end...
    :feedback_b: Try again! We don't use the word function...
    :feedback_c: Try again! We don't use the word function...
    :feedback_d: Great!

    Which of the following is the valid way to begin the definition of a function in Python?


Question 2
-----------

.. mchoice:: functions_practice_quiz_2
    :answer_a: 5
    :answer_b: 21
    :answer_c: 18
    :answer_d: None of the above.
    :correct: b
    :feedback_a: Try again! The first_value is returned.
    :feedback_b: Great!
    :feedback_c: Try again! 8 is added to the first_value, not the second_value.
    :feedback_d: Try again!

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            return first_value

        print(some_thing(13, 10))



Question 3
-----------

.. mchoice:: functions_practice_quiz_3
    :answer_a: 5
    :answer_b: 21
    :answer_c: 18
    :answer_d: None of the above.
    :correct: d
    :feedback_a: Try again! Consider what Python is doing with the answer that is being returned.
    :feedback_b: Try again! Consider what Python is doing with the answer that is being returned.
    :feedback_c: Try again! Consider what Python is doing with the answer that is being returned.
    :feedback_d: Great! Although the function is called, nothing is actually printed!

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            return first_value

        some_thing(13, 10)


Question 4
-----------

.. fillintheblank:: functions_practice_quiz_4

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            temp_value = other_thing(second_value)
            return temp_value

        def other_thing(another_value):
            return (another_value + 5) * 3

        print(some_thing(13, 10))
      
    - :30: Great!
      :.*: Try again!


Question 5
-----------

.. mchoice:: functions_practice_quiz_5
    :answer_a: 30
    :answer_b: An error will occur.
    :answer_c: 5
    :answer_d: None of the above.
    :correct: b
    :feedback_a: Try again! Think about variable scope.
    :feedback_b: Great! Since the second_value variable is defined inside the some_thing function, you cannot access it from anywhere else in your code.
    :feedback_c: Try again! Although the value of second_value is 5 while your code is inside the some_thing function, we are trying to print that value outside the some_thing function.
    :feedback_d: Try again!

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            temp_value = other_thing(second_value)
            return temp_value

        def other_thing(another_value):
            return (another_value + 5) * 3

        some_thing(13, 10)
        print(second_value)


Question 6
-----------

.. fillintheblank:: functions_practice_quiz_6

    What will the following program print?::

        def surprising_function(value):
            thing = 0
            for counter in range(value+1):
                thing = thing + counter
            return thing

        print(surprising_function(5))
      
    - :15: Great!
      :.*: Try again! Notice that this is an example of the accumulator pattern.



Question 7
-----------

.. fillintheblank:: functions_practice_quiz_7

    What will the following program print?::

        def a(x, y):
            x = x + 3
            y = y + 2
            return x+y

        x = 5
        y = 10
        z = a(x, y)

        print(z)
      
    - :20: Great!
      :.*: Try again! Notice that we are returning the sum of x and y.


Question 8
-----------

.. fillintheblank:: functions_practice_quiz_7

    What will the following program print?::

        def a(x, y):
            x = x + 3
            y = y + 2
            return x+y

        x = 5
        y = 10
        z = a(x, y)

        print(x)
      
    - :5: Great!
      :8: Be careful! There are two variables called x (one global, and one local).
      :.*: Try again! Notice that we are returning the sum of x and y.


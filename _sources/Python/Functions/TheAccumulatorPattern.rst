.. qnum::
   :prefix: accumulator-pattern
   :start: 1


The Accumulator Pattern
========================

.. topic:: Quick Overview of Day

    Introduce the accumulator pattern with numbers. 


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.

Squaring a Number with the Accumulator Pattern
-----------------------------------------------

In a previous example, we wrote a function that computes the square of a number.  The algorithm we used
in the function was simple: multiply the number by itself.
In this section we will re-implement the square function and use a different algorithm, one that relies on addition instead
of multiplication.

If you want to multiply two numbers together, the most basic approach is to think of it as repeating the process of
adding one number to itself.  The number of repetitions is where the second number comes into play.  For example, if we
wanted to multiply three and five, we could think about it as adding three to itself five times.  Three plus three is six, plus three is nine, plus three is 12, and finally plus three is 15.  Generalizing this, if we want to implement
the idea of squaring a number, call it ``n``, we would add ``n`` to itself ``n`` times.

.. note:: Teacher note: A nice introduction to this lesson is to either demonstrate the process of multiplication by repeated addition on the whiteboard, or having the students work through a question on their own.

Do this by hand first and try to isolate exactly what steps you take.  You'll find you need to keep some "running total" of the sum so far, either on a piece of paper, or in your head.  Remembering things from one step to the next is
precisely why we have variables in a program.  This means that we will need some variable
to remember the "running total".  It should be initialized with a value of zero.  Then, we need to **update** the "running total" the correct number of times.  For each repetition, we'll want
to update the running total by adding the number to it.

In words we could say it this way.  To square the value of ``n``, we will repeat the process of updating a running total ``n`` times.  To update the running total, we take the old value of the "running total" and add ``n``.  That sum becomes the new value of the "running total".

Here is the program in Python.  Note that the heading of the function definition is the same as it was before.  All that has changed
is the details of how the squaring is done.  This is a great example of "black box" design.  We can change out the details inside of the box and still use the function exactly as we did before.


.. activecode:: sq_accum1

    def square(original_number):
        running_total = 0
        for counter in range(original_number):
            running_total = running_total + original_number

        return running_total

    to_square = 10
    result = square(to_square)
    print("The result of", to_square, "squared is", result)


In the program above, notice that the variable ``running_total`` starts out with a value of 0.  Next, the iteration is performed ``original_number`` times.  Inside the for loop, the update occurs. ``running_total`` is reassigned a new value which is the old value plus the value of ``original_number``.


This pattern of iterating the updating of a variable is commonly
referred to as the **accumulator pattern**.  We refer to the variable as the **accumulator**.  This pattern will come up over and over again.  Remember that the key
to making it work successfully is to **be sure to initialize the variable before you start the iteration**.
Once inside the iteration, it is required that you update the accumulator.

.. note::

    What would happen if we put the assignment ``running_total = 0`` inside the for statement?  Not sure? Try it and find out.



Here is the same program in codelens.  Step through the function and watch the "running total" accumulate the result.

.. codelens:: sq_accum3

    def square(original_number):
        running_total = 0
        for counter in range(original_number):
            running_total = running_total + original_number

        return running_total

    to_square = 10
    result = square(to_square)
    print("The result of", to_square, "squared is", result)


.. index:: accumulator pattern

The General Accumulator Pattern
--------------------------------

.. code-block:: python

    initialize the accumulator variable
    repeat:
        modify the accumulator variable

    # when the loop terminates the accumulator has the correct value


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: test_question5_4_1
   :answer_a: The square function will return x instead of x * x
   :answer_b: The square function will cause an error
   :answer_c: The square function will work as expected and return x * x
   :answer_d: The square function will return 0 instead of x * x
   :correct: a
   :feedback_a: The variable running_total will be reset to 0 each time through the loop.   However because this assignment happens as the first instruction, the next instruction in the loop will set it back to x.   When the loop finishes, it will have the value x, which is what is returned.
   :feedback_b: Assignment statements are perfectly legal inside loops and will not cause an error.
   :feedback_c: By putting the statement that sets running_total to 0 inside the loop, that statement gets executed every time through the loop, instead of once before the loop begins.  The result is that running_total is 'cleared' (reset to 0) each time through the loop.
   :feedback_d: The line running_total = 0 is the first line in the for loop, but immediately after this line, the line running_total = running_total + x will execute, giving running_total a non-zero value  (assuming x is non-zero).

   Consider the following code:

   .. code-block:: python

        def square(x):
            running_total = 0
            for counter in range(x):
                running_total = running_total + x
            return running_total

   What happens if you put the initialization of running_total (the
   line running_total = 0) inside the for loop as the first
   instruction in the loop?


.. parsonsprob:: question5_4_1p

   Rearrange the code statements so that the program will add up the first n odd numbers where n is provided by the user.
   -----
   n = int(input('How many odd numbers would
   you like to add together?'))
   the_sum = 0
   odd_number = 1
   =====
   for counter in range(n):
   =====
      the_sum = the_sum + odd_number
      odd_number = odd_number + 2
   =====
   print(the_sum)


Applying the Accumulator Pattern
---------------------------------

Use the accumulator pattern to write a fruitful function ``sum_to(n)`` that returns the sum of all integer numbers up to and including n. So ``sum_to(10)`` would be ``1+2+3...+10`` which would return the value 55.

.. activecode:: sum_to_accumulator

    # if you aren't sure how to use the accumulator pattern, scroll up!


Now that you have written a solution for the ``sum_to(n)`` function, let's test it a bit. You might want to do the following in Thonny, rather than your browser, as it will cause your browser to become unresponsive while the program is working. 

Although our accumulator pattern worked just fine when we passed in a number like 10, let's see what happens if we crank that number up a bit. Try 100. How about 1000? Let's keep going, and try 10000. Continue to add on one more zero, then running the code again. Depending on the speed of your computer, there will come a point where you begin to notice a distinct pause before your program prints an answer. Why is this? By looking at your code, you should realize that the loop must repeat by the number you pass into the function, so when we pass in 100, the loop repeats 100 times. Is there any way we can write a better ``sum_to(n)`` function?

There's a famous story (no one really knows if it's true) about the mathematician Carl Friedrich Gauss, from when the mathematician was only in grade school (in the late 18th century). Gauss' teacher wanted a break from dealing with his students, so he assigned them a simple, but tedious problem; find the sum of the integers from 1 to 100. The teacher expected to have a few minutes of peace and quiet, but Gauss thought briefly, and astonished his teacher by correctly answering the question without doing the tedious task of summing all the values together. 

How did he do it? He noticed a pattern, as follows::

    the_sum = 1 + 2 + 3 + 4 + ... + 98 + 99 + 100

Writing the terms in the opposite order will still provide the same result::

    the_sum = 100 + 99 + 98 + ... + 4 + 3 + 2 + 1

If we combine the two ideas together, you get the following::

    the_sum = 1   + 2  + 3  + 4  + ... + 98 + 99 + 100
    the_sum = 100 + 99 + 98 + 97 + ... + 3  + 2  + 1

If you add each of the values vertically, you notice that what you get is the sum of 101 added 100 times::

    the_sum * 2 = 101 + 101 + 101 + ... + 101

This can be written as::
    
    the_sum * 2 = 100 * 101

Dividing by 2::

    the_sum = (100 * 101) / 2

Writing this more generically to work for any number, the formula becomes:

.. math::

  S=\frac{n(n+1)}{2}

.. .. image:: images/sum_to_formula.png

Now that you understand Gauss' pattern for finding the sum of a series, rewrite the ``sum_to(n)`` function you created above, this time using the formula!

.. activecode:: sum_to_formula

    # use the formula given above

To be sure you understand why we bothered to learn another way to create the ``sum_to(n)`` function, test out the function with ridiculously large numbers. Notice that with this version of the function, the solution can be calculated dramatically faster. This is another example of why black-box function design is helpful: if an optimized version of the function is found, it can be implemented without affecting any of the code that calls that function.


Practice Problems
--------------------

Estimating Square Roots
~~~~~~~~~~~~~~~~~~~~~~~~

Write a function called ``my_sqrt`` that will approximate the square root of a number, call it n, by using Newton's algorithm. Newton's approach is an iterative guessing algorithm where the initial guess is n/2 and each subsequent guess is computed using the formula: ``new_guess = (1/2) * (old_guess + (n/old_guess))``.

To be sure you understand how this works, it is a good idea to try out Newton's algorithm by hand at least once! Try estimating the square root of 9 by hand. You will see that it only takes a couple iterations to get really close to the actual value of the square root.

Be sure to test your square root function with a variety of numbers, and check with a calculator to see how well your function is performing!

.. activecode:: my-sqrt

    def my_sqrt(n, number_of_guesses):
        # your code here

.. reveal:: reveal_my_sqrt_hint
    :showtitle: Need a hint?
    :hidetitle: Hide Hint

    Don't forget to update the value of old_guess within your loop!


Approximating Pi
~~~~~~~~~~~~~~~~~

Write a function called ``my_pi()`` that will return an approximation of PI (3.14159…). Use the `Leibniz approximation <http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80>`_, which shows that you can approximate 1/4 of PI with the following series:

.. math::

  1-\frac{1}{3}+\frac{1}{5}-\frac{1}{7}+\frac{1}{9}-\cdots =\frac{\pi}{4}

.. .. image:: images/leibniz_pi_formula.png

.. reveal:: reveal_my_sqrt_hint
    :showtitle: Need a hint?
    :hidetitle: Hide Hint

    You might find it helpful to look back at the :ref:`is_even_fruitful_function` fruitful function that you created when we started practicing fruitful functions. For the Leibniz approximation, depending on whether you are on an odd or even time through the loop, you will need to either add or subtract... 

    Remember that you will need to add 2 to the denominator every time through the loop, whether you were adding or subtracting.

.. activecode:: my-pi

    def my_pi():
        # your code here

Finding A Natural Logarithm
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Write a function called ``ln2()`` that will return an approximation of ln(2). You can calculate an approximation of the natural logarithm of 2 with the following series:

.. math::
    ln(2)=\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\cdots 

.. reveal:: reveal_ln2_hint
    :showtitle: Need a hint?
    :hidetitle: Hide Hint

    You might find it helpful to look back at the :ref:`is_even_fruitful_function` fruitful function that you created when we started practicing fruitful functions. For this series, depending on whether you are on an odd or even iteration (time through the loop), you will need to either add or subtract... 

    Remember that you will need to add 1 to the denominator every time through the loop, whether you were adding or subtracting.

.. activecode:: ln2_practice_problem

    def ln2():
        # your code here



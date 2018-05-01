Image Processing Practice
==========================

.. topic:: Quick Overview of Day

    Use nested loops to practice simple image processing.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Nested Loop Review
-------------------

In the previous section, we used a lot of nested loops, which is a loop inside another loop. Use what you learned from that section to answer the following:

.. fillintheblank:: nested_loops_review_1

    In the following code, how many lines does this code print?::

        for i in range(4):
            for j in range(3):
                print(i, j)

    - :12: Great!
      :4: Careful! Although the outer loop does repeat four times, the inner loop repeats three times for each outer iteration.
      :3: Careful! Although the inner loop does repeat three times, the outer loop causes that to happen four times.
      :.*: Try again!


.. mchoice:: nested_loops_review_2
    :answer_a: 0 0
    :answer_b: 4 3
    :answer_c: 3 4
    :answer_d: 3 2
    :answer_e: 2 3
    :correct: d
    :feedback_a: Try again! This would be the first thing printed.
    :feedback_b: Try again! Remember that when using range, the numbers will go up to, but not including, the value passed to range. This is because the first number will be a 0.
    :feedback_c: Try again! Consider which loop is using the variable i as it's counter.
    :feedback_d: Great!
    :feedback_e: Try again! Consider which loop is using the variable i as it's counter.

    What is the last line that the following code will print?::

        for i in range(4):
            for j in range(3):
                print(i, j)


As we saw in the last section, nested loops allow us to look through all of the pixels for an image. You will need to use a nested for loop for each of the following practice problems. *Although you could copy/paste much of the same template code for these problems, try to write out a full solution from scratch for at least 3 of the problems!*

Practice Problems
------------------

For the following problems, use one of these images:

.. raw:: html

    <img src="../../_static/skflag.png" id="skflag.png">
    <h4 style="text-align: center;">skflag.png</h4>

.. raw:: html

    <img src="../../_static/moon.jpg" id="moon.jpg">
    <h4 style="text-align: center;">moon.jpg</h4>

.. raw:: html

    <img src="../../_static/sneakers.jpg" id="sneakers.jpg">
    <h4 style="text-align: center;">sneakers.jpg</h4>

.. raw:: html

    <img src="../../_static/rooster.jpg" id="rooster.jpg">
    <h4 style="text-align: center;">rooster.jpg</h4>


Red Remover
~~~~~~~~~~~~

Write a program that opens an image and uses a nested loop to look at all of the pixels. For each pixel, you should remove all of the red intensity from the pixel. The green and blue intensities should remain unchanged.


.. activecode::  practice_problem_red_remover
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())
    img.draw(win)
    img.set_delay(1,15)   # set_delay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Color Swapping 
~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets the red value to the original green value, the green value to the original blue value, and the blue value to the original red value.

 .. activecode::  practice_problem_color_swapper
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())
    img.draw(win)
    img.set_delay(1,15)   # set_delay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Keep the Green
~~~~~~~~~~~~~~~~~~~~

Write a program that keeps only the green values of all pixels in the image. Once it is working, turn the code into a function.

 .. activecode::  practice_problem_keep_the_green
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())
    img.draw(win)
    img.set_delay(1,15)   # set_delay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Half Red
~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's red intensity to be half of the original value. The green and blue intensities should remain the same as in the original image.

 .. activecode::  practice_problem_half_red
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())
    img.draw(win)
    img.set_delay(1,15)   # set_delay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Combining Bits of Colors
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's blue intensity to be an eighth of the original green value plus an eighth of the original red value. The red and green intensities should remain the same as in the original image.

 .. activecode::  practice_problem_combining_colors
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())
    img.draw(win)
    img.set_delay(1,15)   # set_delay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Half Each Color
~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's RGB intensities to be half of their original value.

 .. activecode::  practice_problem_half_each_color
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())
    img.draw(win)
    img.set_delay(1,15)   # set_delay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Acknowledgments
~~~~~~~~~~~~~~~~~~

Images are from `Pexels <https://www.pexels.com/>`_, and are licensed as CC-0. Saskatchewan flag images are also licensed as CC-0, obtained from Wikimedia.

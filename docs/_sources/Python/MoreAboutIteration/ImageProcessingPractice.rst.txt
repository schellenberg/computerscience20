.. qnum::
   :prefix: image-processing-practice
   :start: 1


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

        for x in range(4):
            for y in range(3):
                print(x, y)


.. mchoice:: nested_loops_review_3
    :answer_a: The window will slowly be filled in from top to bottom with red pixels.
    :answer_b: The window will slowly be filled in from bottom to top with red pixels.
    :answer_c: The window will slowly be filled in from left to right with red pixels.
    :answer_d: The window will slowly be filled in from right to left with red pixels.
    :answer_e: No animation will be shown. The window will simply show up as all red pixels.
    :correct: c
    :feedback_a: Try again! Notice that the y value will iterate entirely through the loop before the x value iterates at all.
    :feedback_b: Try again! Remember that the origin is on the top left side of the image, and range begins counting at 0.
    :feedback_c: Great!
    :feedback_d: Try again! Remember that the origin is on the top left side of the image, and range begins counting at 0.
    :feedback_e: Try again! This would happen if img.draw(win) was NOT inside the nested for loop.

    When you run this code, what will the animation look like?::

        import image

        width = 400
        height = 300

        win = image.ImageWin(width, height)
        img = image.EmptyImage(width, height)

        for x in range(width):
            for y in range(height):
                new_pixel = image.Pixel(255, 0, 0)
                img.set_pixel(x, y, new_pixel)
            img.draw(win)

Warmup Problems
-----------------

.. note:: Your teacher may choose to work through the following problems to help build your confidence before you attempt the practice problems.

Gray Scale
~~~~~~~~~~~

See if you can create a **gray scale** version of the image. When looking at each pixel, you should average the red, green and blue intensities and then using that average value for setting the new red, new green, and new blue intensities. *Note that any RGB value that contains the same value for it's R, G and B amounts will be a gray value. For example, (50, 50, 50) is a dark gray, and (200, 200, 200) is a lighter gray.* 


.. activecode::  gray_scale
    :nocodelens:

    import image

    img = image.Image("skflag.png")
    width = img.get_width()
    height = img.get_height()

    canvas = image.ImageWin(width, height)
    img.draw(canvas)

    for y in range(height):
        for x in range(width):
            p = img.get_pixel(x, y)

            # adjust the following to apply your image processing
            r = p.get_red()
            g = p.get_green()
            b = p.get_blue()
            
            new_pixel = image.Pixel(r, g, b)

            img.set_pixel(x, y, new_pixel)

        # unindent the following line to remove the "animation"
        img.draw(canvas)


.. reveal:: greyscale_solution
    :showtitle: Reveal Solution

    One possible solution is as follows:

    .. code-block:: python
    
        import image

        img = image.Image("skflag.png")
        width = img.get_width()
        height = img.get_height()

        canvas = image.ImageWin(width, height)
        img.draw(canvas)

        for y in range(height):
            for x in range(width):
                p = img.get_pixel(x, y)

                # adjust the following to apply your image processing
                r = p.get_red()
                g = p.get_green()
                b = p.get_blue()

                average = (r + g + b) / 3
                
                new_pixel = image.Pixel(average, average, average)

                img.set_pixel(x, y, new_pixel)

            # unindent the following line to remove the "animation"
            img.draw(canvas)


Black and White Threshold
~~~~~~~~~~~~~~~~~~~~~~~~~~

You can create interesting **black and white** images by setting a threshold (if the sum of the intensities is larger than some value) and choosing to either insert a white pixel or a black pixel at the current location. For example, if you use the ``skflag.png`` image, it looks like this originally:

.. raw:: html

    <img src="../../_static/skflag.png">

If you look at every pixel to find the sum of the red, green, and blue values, then insert a black pixel whenever the sum is greater than 200 (or a white pixel if it is not), you will create the following image:

.. image:: images/threshold-flag.png

.. activecode:: black_white_threshold
    :nocodelens:

    # Try to create a solution to this problem 
    #   WITHOUT looking back to previous solutions.
    # Be sure to experiment with different threshold values!

.. reveal:: threshold_solution
    :showtitle: Reveal Solution

    One possible solution is as follows:

    .. code-block:: python

        import image

        img = image.Image("skflag.png")
        width = img.get_width()
        height = img.get_height()

        canvas = image.ImageWin(width, height)
        img.draw(canvas)

        for y in range(height):
            for x in range(width):
                p = img.get_pixel(x, y)

                # adjust the following to apply your image processing
                r = p.get_red()
                g = p.get_green()
                b = p.get_blue()
                
                if r + g + b > 200:
                    new_pixel = image.Pixel(0, 0, 0)
                else:
                    new_pixel = image.Pixel(255, 255, 255)

                img.set_pixel(x, y, new_pixel)

            # unindent the following line to remove the "animation"
            img.draw(canvas)


Practice Problems
------------------

As we have seen, nested loops allow us to look through all of the pixels for an image. You will need to use a nested for loop for each of the following practice problems. *Although you could copy/paste much of the same template code for these problems, try to write out a full solution from scratch for at least 3 of the problems!*

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

    width = img.get_width()
    height = img.get_height()

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(width, height)
    img.draw(win)

    # your code goes here!

    img.draw(win)

.. reveal:: red_remover_solution
    :showtitle: Solution Image

    If you are using the sneakers.jpg image, your solution should look something like this:

    .. image:: images/red-remover-solution.png


Color Swapping 
~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets the red value to the original green value, the green value to the original blue value, and the blue value to the original red value.

 .. activecode::  practice_problem_color_swapper
    :nocodelens:

    # Try to create a solution to this problem 
    #   WITHOUT looking back to previous solutions.

.. reveal:: color_swapping_solution
    :showtitle: Solution Image

    If you are using the sneakers.jpg image, your solution should look something like this:

    .. image:: images/color-swapping-solution.png

Keep the Green
~~~~~~~~~~~~~~~~~~~~

Write a program that keeps only the green values of all pixels in the image.

 .. activecode::  practice_problem_keep_the_green
    :nocodelens:

    # Try to create a solution to this problem 
    #   WITHOUT looking back to previous solutions.

.. reveal:: keep_green_solution
    :showtitle: Solution Image

    If you are using the sneakers.jpg image, your solution should look something like this:

    .. image:: images/keep-green-solution.png

Half Red
~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's red intensity to be half of the original value. The green and blue intensities should remain the same as in the original image.

 .. activecode::  practice_problem_half_red
    :nocodelens:

    # Try to create a solution to this problem 
    #   WITHOUT looking back to previous solutions.

.. reveal:: half_red_solution
    :showtitle: Solution Image

    If you are using the sneakers.jpg image, your solution should look something like this:

    .. image:: images/half-red-solution.png

Combining Bits of Colors
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's blue intensity to be an eighth of the original green value plus an eighth of the original red value. The red and green intensities should remain the same as in the original image.

 .. activecode::  practice_problem_combining_colors
    :nocodelens:

    # Try to create a solution to this problem 
    #   WITHOUT looking back to previous solutions.

.. reveal:: combining_colors_solution
    :showtitle: Solution Image

    If you are using the sneakers.jpg image, your solution should look something like this:

    .. image:: images/combining-colors-solution.png

Half Each Color
~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's RGB intensities to be half of their original value.

 .. activecode::  practice_problem_half_each_color
    :nocodelens:

    # Try to create a solution to this problem 
    #   WITHOUT looking back to previous solutions.

.. reveal:: half_each_solution
    :showtitle: Solution Image

    If you are using the sneakers.jpg image, your solution should look something like this:

    .. image:: images/half-each-solution.png

Sepia
~~~~~~~

Write a program that converts an image using a sepia filter (`Sepia Tone <https://stackoverflow.com/questions/1061093/how-is-a-sepia-tone-created>`_).

 .. activecode::  practice_problem_sepia_tone
    :nocodelens:

    # Try to create a solution to this problem 
    #   WITHOUT looking back to previous solutions.

.. reveal:: sepia_solution
    :showtitle: Solution Image

    If you are using the sneakers.jpg image, your solution should look something like this:

    .. image:: images/sepia-solution.png


Acknowledgments
~~~~~~~~~~~~~~~~~~

Images are from `Pexels <https://www.pexels.com/>`_, and are licensed as CC-0. The Saskatchewan flag image is also licensed as CC-0, and was obtained from Wikimedia.

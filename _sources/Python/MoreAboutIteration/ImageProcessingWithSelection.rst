.. qnum::
   :prefix: accumulator-pattern
   :start: 1

Image Processing With Conditionals
===================================

.. topic:: Quick Overview of Day

    Use nested loops to practice simple image processing, this time including conditionals to control when certain effects are done.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Demonstration
---------------------------------

Say you had an image that looked like this:

.. raw:: html

    <img src="../../_static/moon.jpg" id="moon.jpg">
    <h4 style="text-align: center;">moon.jpg</h4>


Due to the contrast in the image, we can apply certain effects to only a portion of the image. For example, we could turn the sky (which is currently black) into another colour, while leaving the moon itself untouched. The following code turns the sky a light gray colour.

.. activecode::  isolate_the_moon
    :nocodelens:

    import image

    img = image.Image("moon.jpg")
    width = img.getWidth()
    height = img.getHeight()

    win = image.ImageWin(width, height)

    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    for x in range(width):
        for y in range(height):
            this_pixel = img.getPixel(col, row)

            r = this_pixel.getRed()
            g = this_pixel.getGreen()
            b = this_pixel.getBlue()

            if r + g + b < 30:
                new_red = 100
                new_green = 100
                new_blue = 100
            else:
                new_red = r
                new_green = g
                new_blue = b

            new_pixel = image.Pixel(new_red, new_green, new_blue)

            img.setPixel(col, row, new_pixel)

    img.draw(win)


Practice Problems
------------------

For the following problems, use one of these images:


.. raw:: html

    <img src="../../_static/bird-far.jpg" id="bird-far.jpg">
    <h4 style="text-align: center;">bird-far.jpg</h4>

.. raw:: html

    <img src="../../_static/berries.jpg" id="berries.jpg">
    <h4 style="text-align: center;">berries.jpg</h4>

.. raw:: html

    <img src="../../_static/rooster.jpg" id="rooster.jpg">
    <h4 style="text-align: center;">rooster.jpg</h4>

.. raw:: html

    <img src="../../_static/sneakers.jpg" id="sneakers.jpg">
    <h4 style="text-align: center;">sneakers.jpg</h4>


No Red Left Side
~~~~~~~~~~~~~~~~~~~

Write a program that sets the red intensity of all pixels on the left half of the picture to be 0. On the right side of the picture, the red intensity should remain the same as the original value. The green and blue intensities should remain the same as the original for all parts of the image.

 .. activecode::  practice_problem_no_red_left_side
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Blue Tint Top Right
~~~~~~~~~~~~~~~~~~~~

Write a program that makes the top right quarter of the image be tinted blue.

 .. activecode::  practice_problem_blue_tint_top_right
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Bottom Half Grayscale
~~~~~~~~~~~~~~~~~~~~~~

Write a program that turns the bottom half of the picture into a grayscale image. The top half should remain the same as the original image.

 .. activecode::  practice_problem_bottom_half_grayscale
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Repeat Left Twice
~~~~~~~~~~~~~~~~~~~~~~

Write a program that takes the left side of an image and displays it both on the left half, and the right half, of the image. In other words, replace the right side of the image with a copy of the left side of the image.

 .. activecode::  practice_problem_repeat_left_twice
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Mirror Horizontal
~~~~~~~~~~~~~~~~~~~~~~

Write a program that mirrors an image from left to right around a vertical line of symmetry in the middle of the image. If you get it working, try to turn this into a function!

 .. activecode::  practice_problem_mirror_horizontal
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Mirror Vertical
~~~~~~~~~~~~~~~~~~~~~~

Write a program that mirrors an image from top to bottom around a horizontal line of symmetry in the middle of the image. If you get it working, try to turn this into a function!

 .. activecode::  practice_problem_mirror_vertical
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Gradient
~~~~~~~~~

Write a program that creates a gradient effect (slowly transitioning from one color to another). Begin with all red and no green, and after each row, decrease the red and increase the green by some amount. The blue intensity can be set to 0 for all pixels.

 .. activecode::  practice_problem_gradient
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Enlarge
~~~~~~~~

Write a function to uniformly enlarge an image by a factor of 2 (double the size).

 .. activecode::  practice_problem_gradient
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Acknowledgments
~~~~~~~~~~~~~~~~~~

Images are from `Pexels <https://www.pexels.com/>`_, and are licensed as CC-0. Emoji artwork is provided by `EmojiOne <https://www.emojione.com/>`_ EmojiOne and is licensed under `CC-BY 4.0 <https://creativecommons.org/licenses/by/4.0/legalcode>`_.
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



Consider the following code, in which the increase green code from a previous lesson is turned into a function:


.. activecode::  increase_green_function
    :nocodelens:

    import image

    def increase_green(original_image):
        width = original_image.getWidth()
        height = original_image.getHeight()
        new_image = image.EmptyImage(width, height)
        for row in range(height):
            for col in range(width):
                p = original_image.getPixel(col, row)

                new_red = p.getRed()
                new_green = p.getGreen() + 50
                new_blue = p.getBlue()

                new_pixel = image.Pixel(new_red, new_green, new_blue)

                new_image.setPixel(col, row, new_pixel)
        return new_image


    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)

    converted_img = increase_green(img)

    converted_img.draw(win)

If you'd like to watch the function do it's work, you can reorganize your code as follows:

.. activecode::  increase_green_function_2
    :nocodelens:

    import image

    def increase_green(original_image, window):
        width = original_image.getWidth()
        height = original_image.getHeight()
        new_image = image.EmptyImage(width, height)
        
        original_image.draw(window)
        
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)

                new_red = p.getRed()
                new_green = p.getGreen() + 50
                new_blue = p.getBlue()

                new_pixel = image.Pixel(new_red, new_green, new_blue)

                new_image.setPixel(col, row, new_pixel)
            new_image.draw(window)
        return new_image


    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())

    converted_img = increase_green(img, win)
    converted_img.draw(win)


Practice Problems
------------------

For the following problems, use one of these images:


.. raw:: html

    <img src="../../_static/LutherBellPic.jpg" id="luther.jpg">
    <h4 style="text-align: center;">luther.jpg</h4>

.. raw:: html

    <img src="../../_static/cy.png" id="cy.png">
    <h4 style="text-align: center;">cy.png</h4>

.. raw:: html

    <img src="../../_static/goldygopher.png" id="goldygopher.png">
    <h4 style="text-align: center;">goldygopher.png</h4>


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

Images are from `Pexels <url>`_, and are licensed as CC-0. Emoji artwork is provided by `EmojiOne <https://www.emojione.com/>`_ EmojiOne and is licensed under `CC-BY 4.0 <https://creativecommons.org/licenses/by/4.0/legalcode>`_.
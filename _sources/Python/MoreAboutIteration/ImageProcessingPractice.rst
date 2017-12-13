.. qnum::
   :prefix: accumulator-pattern
   :start: 1

Image Processing Practice
==========================

.. topic:: Quick Overview of Day

    Use nested loops to practice simple image processing.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Image Conversion with Functions
---------------------------------

.. caution:: Need to explain this in text. For now, I'm just going to demonstrate this in class. Essentially, just make a function that takes in an Image object, performs some pixel manipulations, then returns the converted image.


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


    img = image.Image("rooster.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)

    converted_img = increase_green(img)

    converted_img.draw(win)


If you'd like the function to animate while it runs, you can reorganize your code as follows:

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


    img = image.Image("rooster.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())

    converted_img = increase_green(img, win)
    converted_img.draw(win)


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
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Red Remover Function
~~~~~~~~~~~~~~~~~~~~~~

Turn the code you wrote above into a function called ``red_remover(original_image, window)``. 

.. activecode::  practice_problem_red_remover_function
    :nocodelens:

    import image

    def red_remover(original_image, window):
        # your code goes here!
        return new_image


    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())

    converted_img = red_remover(img, win)
    converted_img.draw(win)


Color Swapping 
~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets the red value to the original green value, the green value to the original blue value, and the blue value to the original red value.

 .. activecode::  practice_problem_color_swapper
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Keep the Green
~~~~~~~~~~~~~~~~~~~~

Write a program that keeps only the green values of all pixels in the image. Once it is working, turn the code into a function.

 .. activecode::  practice_problem_keep_the_green
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Half Red
~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's red intensity to be half of the original value. The green and blue intensities should remain the same as in the original image. *Note that if you do this in Thonny, you need to make sure you convert back into an integer after you divide!*

 .. activecode::  practice_problem_half_red
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Combining Bits of Colors
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's blue intensity to be an eighth of the original green value plus an eighth of the original red value. The red and green intensities should remain the same as in the original image. *Note that if you do this in Thonny, you need to make sure you convert back into an integer after you divide!*

 .. activecode::  practice_problem_combining_colors
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)


Half Each Color
~~~~~~~~~~~~~~~~~~~

Write a program that sets each pixel's RGB intensities to be half of their original value. *Note that if you do this in Thonny, you need to make sure you convert back into an integer after you divide!*

 .. activecode::  practice_problem_half_each_color
    :nocodelens:

    import image

    img = image.Image("sneakers.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)



Acknowledgments
~~~~~~~~~~~~~~~~~~

Images are from `Pexels <https://www.pexels.com/>`_, and are licensed as CC-0. Saskatchewan flag images are also licensed as CC-0, obtained from Wikimedia.

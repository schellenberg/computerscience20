.. qnum::
   :prefix: image-processing-functions
   :start: 1


Functions and Image Processing
===============================

.. topic:: Quick Overview of Day

    Use nested loops to practice simple image processing.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

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
        width = original_image.get_width()
        height = original_image.get_height()
        new_image = image.EmptyImage(width, height)
        for row in range(height):
            for col in range(width):
                p = original_image.get_pixel(col, row)

                new_red = p.get_red()
                new_green = p.get_green() + 50
                new_blue = p.get_blue()

                new_pixel = image.Pixel(new_red, new_green, new_blue)

                new_image.set_pixel(col, row, new_pixel)
        return new_image


    img = image.Image("rooster.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())
    img.draw(win)

    converted_img = increase_green(img)

    converted_img.draw(win)


If you'd like the function to animate while it runs, you can reorganize your code as follows:

.. activecode::  increase_green_function_2
    :nocodelens:

    import image

    def increase_green(original_image, window):
        width = original_image.get_width()
        height = original_image.get_height()
        new_image = image.EmptyImage(width, height)
        
        original_image.draw(window)
        
        for row in range(height):
            for col in range(width):
                p = img.get_pixel(col, row)

                new_red = p.get_red()
                new_green = p.get_green() + 50
                new_blue = p.get_blue()

                new_pixel = image.Pixel(new_red, new_green, new_blue)

                new_image.set_pixel(col, row, new_pixel)
            new_image.draw(window)
        return new_image


    img = image.Image("rooster.jpg")
    win = image.ImageWin(img.get_width(), img.get_height())

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
    win = image.ImageWin(img.get_width(), img.get_height())

    converted_img = red_remover(img, win)
    converted_img.draw(win)
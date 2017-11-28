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

Consider the following code, in which 


Practice Problems
------------------

Red Remover
~~~~~~~~~~~~

Write a program that opens an image and uses a nested loop to look at all of the pixels. For each pixel, you should remove all of the red intensity from the pixel. The green and blue intensities should remain unchanged.


.. activecode::  practice_problem_red_remover
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    # your code goes here!    

    img.draw(win)
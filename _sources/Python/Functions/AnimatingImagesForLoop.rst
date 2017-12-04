
.. qnum::
   :prefix: for-loop-animating-images
   :start: 1


Animating a Micro:bit LED Image with a ``for`` Loop
====================================================

.. topic:: Quick Overview of Day

    Animate images using a list and a ``for`` loop. Create a Micro:bit game, making sure to create at least one fruitful and one non-fruitful function.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.



Animate Built-In Images On Micro:bit LEDs
-----------------------------------------------

Let's pick a few of the :ref:`microbit_predefined_images`), and have them show in succession, one after another. There are a number of ways we could do this, but let's use a list to do it. We've used a list before, in code that looked like this:

.. activecode:: colorlist-list-refresher
    :nocodelens:

    import turtle

    # setup the drawing environment
    wn = turtle.Screen()
    alex = turtle.Turtle()

    for aColor in ["yellow", "red", "purple", "blue"]:
       alex.color(aColor)
       alex.forward(50)
       alex.left(90)


We could have rewritten the code above to store the list in a variable, like this:

.. activecode:: colorlist-list-refresher-variable-added
    :nocodelens:

    import turtle

    # setup the drawing environment
    wn = turtle.Screen()
    alex = turtle.Turtle()

    color_list = ["yellow", "red", "purple", "blue"]

    for aColor in color_list:
       alex.color(aColor)
       alex.forward(50)
       alex.left(90)

We are going to use the same idea, but now we will create a list of images that we can display on the Micro:bit. Remember that we can display a single image by doing something like:

.. code-block:: python

    import microbit
    microbit.display.show(microbit.Image.HAPPY)

To create a list of images that we want to show, we can do the following:


.. code-block:: python

    import microbit

    arrow_image_list = [microbit.Image.ARROW_N, microbit.Image.ARROW_NE, microbit.Image.ARROW_E, microbit.Image.ARROW_SE, microbit.Image.ARROW_S, microbit.Image.ARROW_SW, microbit.Image.ARROW_W, microbit.Image.ARROW_NW]

    for this_image in arrow_image_list:
        microbit.display.show(this_image)


When you run the code above, you will see that your Micro:bit flashes through all of the images of the different arrows, but it happens really, really fast. To slow that down, we can use a ``sleep()`` function that pauses the execution of the program for a specified number of milliseconds. Notice that when we include the ``sleep()`` function below, we do so in the for loop, so that there is a pause prior to displaying the next image in the list.

.. code-block:: python
    :emphasize-lines: 7

    import microbit

    arrow_image_list = [microbit.Image.ARROW_N, microbit.Image.ARROW_NE, microbit.Image.ARROW_E, microbit.Image.ARROW_SE, microbit.Image.ARROW_S, microbit.Image.ARROW_SW, microbit.Image.ARROW_W, microbit.Image.ARROW_NW]

    for this_image in arrow_image_list:
        microbit.display.show(this_image)
        microbit.sleep(250)

If you would like this animation to continue forever, simply enclose the for loop inside of a ``while True:`` loop that keeps the program going infinitely.

.. code-block:: python
    :emphasize-lines: 5

    import microbit

    arrow_image_list = [microbit.Image.ARROW_N, microbit.Image.ARROW_NE, microbit.Image.ARROW_E, microbit.Image.ARROW_SE, microbit.Image.ARROW_S, microbit.Image.ARROW_SW, microbit.Image.ARROW_W, microbit.Image.ARROW_NW]

    while True:
        for this_image in arrow_image_list:
            microbit.display.show(this_image)
            microbit.sleep(250)

Moving an LED On the Bottom Row
--------------------------------

If you want to create a game that moves an LED around the 5x5 LED grid of the Micro:bit, you will need to learn how to manipulate strings. For now, however, we can make a simple visualization of how to "move" and LED left and right on the bottom row of the grid using the a and b buttons. Before we can do this, however, you need to understand how to access particular elements inside of a list. Consider the following:

.. activecode:: list-accessing-values
    :nocodelens:

    color_list = ["yellow", "red", "purple", "blue"]

    print(color_list[0])

After running the code above, change the 0 to some different numbers to make sure you understand how to access particular elements inside of a list.

In the code below, print out the element of the list that contains "00090":

.. activecode:: list-accessing-values-practice
    :nocodelens:

    possible_bottom_row_values = ["90000", "09000", "00900", "00090", "00009"]

    print()


Now that we can access an element inside a list, we can build a function that takes in a location specifying which LED on the bottom of the grid should be turned on, and return an image with that LED on that can be displayed on the Micro:bit.

.. code-block:: python

    import microbit

    def make_image(led_location):
        """Takes in a location for which pixel should be turned on on the bottom row.
            Returns a micro:bit Image object to display.
            Note that the location of the pixels should be one of:
                01234"""
        upper_portion_of_grid = "00000:00000:00000:00000:"
        possible_bottom_row_values = ["90000", "09000", "00900", "00090", "00009"]
        image_string = upper_portion_of_grid + possible_bottom_row_values[led_location]
        
        # to understand what this function is doing, uncomment the print statement below
        # print(image_string)
        
        return microbit.Image(image_string)

    x_cor = 2
    current_image = make_image(x_cor)
    microbit.display.show(current_image)

    while True:
        if microbit.button_a.is_pressed():
            x_cor -= 1
            current_image = make_image(x_cor)
            microbit.display.show(current_image)
            microbit.sleep(250)
            
        if microbit.button_b.is_pressed():
            x_cor += 1
            current_image = make_image(x_cor)
            microbit.display.show(current_image)
            microbit.sleep(250)


.. note:: Although the code above works, you might want to adapt the code so that the program does not crash (or behave strangely) when the LED goes "off the screen".

Moving a Turtle By Tilting Micro:bit
-------------------------------------

.. caution:: Explanation needs to be written up. Should include description of register_shape() function, saving the .gif image file in the same folder as the Python script.

.. code-block:: python

    import microbit
    import turtle

    def horizontal_tilt(sensitivity_amount):
        """Returns left or right, depending on which way the micro:bit is tilted. Small sensitivity_amount is more sensitive, large sensitivity_amount is less sensitive."""
        x_tilt = microbit.accelerometer.get_x()

        if x_tilt > sensitivity_amount:
            return "right"

        elif x_tilt < -1 * sensitivity_amount:
            return "left"


    canvas = turtle.Screen()
    canvas.bgcolor("black")
    #canvas.register_shape("ship.gif")

    travis = turtle.Turtle()
    travis.color("white")
    travis.penup()
    #travis.shape("ship.gif")
    travis.shape("square")
    travis.pensize(5)

    while True:
        horizontal_tilt_direction = horizontal_tilt(100)

        if horizontal_tilt_direction == "right":
            microbit.display.show("R")
            print("Tilted right.")
            travis.forward(10)

        elif horizontal_tilt_direction == "left":
            microbit.display.show("L")
            print("Tilted left.")
            travis.backward(10)

        else:
            microbit.display.show("-")
            print("Flat!")

.. note:: Adapt the code above by creating another turtle that starts at the top of the screen and moves downward. If you want to get really fancy, you could look up xcor() and ycor(). These functions allow you to check where turtles are, and with some clever logic, whether two turtles are touching each other.


Work Time on Assignment
------------------------

Continue working on your current assignment (focused on creating fruitful and non-fruitful functions).

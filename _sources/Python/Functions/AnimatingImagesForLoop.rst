Animating a Micro:bit LED Image with a ``for`` Loop
====================================================

.. topic:: Quick Overview of Day

    Animate images using a list and a ``for`` loop. Create a Micro:bit game, making sure to create at least one fruitful and one non-fruitful function.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.



Animate Built-In Images On Micro:bit LEDs
-----------------------------------------------

Let's pick a few of the :ref:`microbit_predefined_images`), and have them show in succession, one after another. There are a number of ways we could do this, but we will use a list. We've used a list before, in code that looked like this:

.. activecode:: colorlist-list-refresher
    :nocodelens:

    import turtle

    # setup the drawing environment
    canvas = turtle.Screen()
    alex = turtle.Turtle()

    for some_color in ["yellow", "red", "purple", "blue"]:
       alex.color(some_color)
       alex.forward(50)
       alex.left(90)


We could have rewritten the code above to store the list in a variable, like this:

.. activecode:: colorlist-list-refresher-variable-added
    :nocodelens:

    import turtle

    # setup the drawing environment
    canvas = turtle.Screen()
    alex = turtle.Turtle()

    color_list = ["yellow", "red", "purple", "blue"]

    for some_color in color_list:
       alex.color(some_color)
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


When you run the code above, you will see that your Micro:bit flashes through all of the images of the different arrows, but it happens really, really fast. To slow that down, we can ``import time`` and use the ``time.sleep()`` function that pauses the execution of the program for a specified number of seconds. Notice that when we include the ``sleep()`` function below, we do so in the for loop, so that there is a pause prior to displaying the next image in the list.

.. code-block:: python
    :emphasize-lines: 8

    import microbit
    import time

    arrow_image_list = [microbit.Image.ARROW_N, microbit.Image.ARROW_NE, microbit.Image.ARROW_E, microbit.Image.ARROW_SE, microbit.Image.ARROW_S, microbit.Image.ARROW_SW, microbit.Image.ARROW_W, microbit.Image.ARROW_NW]

    for this_image in arrow_image_list:
        microbit.display.show(this_image)
        time.sleep(0.25)

If you would like this animation to continue forever, simply enclose the for loop inside of a ``while True:`` loop that keeps the program going infinitely.

.. code-block:: python
    :emphasize-lines: 6

    import microbit
    import time

    arrow_image_list = [microbit.Image.ARROW_N, microbit.Image.ARROW_NE, microbit.Image.ARROW_E, microbit.Image.ARROW_SE, microbit.Image.ARROW_S, microbit.Image.ARROW_SW, microbit.Image.ARROW_W, microbit.Image.ARROW_NW]

    while True:
        for this_image in arrow_image_list:
            microbit.display.show(this_image)
            time.sleep(0.25)

Animating Custom Made Images
-----------------------------

Sometimes we might want to animate a series of Micro:bit images that we create, as opposed to the built in images we animated above. The logic for this is the same as what we did above, though we need to define each image first. Consider the following, in which an image is defined for each side of a 6 sided die, then displayed one after another.

.. code-block:: python

    import microbit
    import time

    # define each of the dice images as strings
    dice1 = "33333:" \
            "30003:" \
            "30903:" \
            "30003:" \
            "33333"

    dice2 = "33333:" \
            "30093:" \
            "30003:" \
            "39003:" \
            "33333"

    dice3 = "33333:" \
            "39003:" \
            "30903:" \
            "30093:" \
            "33333"

    dice4 = "33333:" \
            "39093:" \
            "30003:" \
            "39093:" \
            "33333"

    dice5 = "33333:" \
            "39093:" \
            "30903:" \
            "39093:" \
            "33333"

    dice6 = "33333:" \
            "39093:" \
            "39093:" \
            "39093:" \
            "33333"

    # convert the strings to microbit images
    roll1 = microbit.Image(dice1)
    roll2 = microbit.Image(dice2)
    roll3 = microbit.Image(dice3)
    roll4 = microbit.Image(dice4)
    roll5 = microbit.Image(dice5)
    roll6 = microbit.Image(dice6)

    # create a list that contains all of the images
    all_dice = [roll1, roll2, roll3, roll4, roll5, roll6]

    # loop over all of the dice images
    for die in all_dice:
        microbit.display.show(die)
        time.sleep(1)



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


Work Time on Assignment
------------------------

Continue working on your current assignment (focused on creating fruitful and non-fruitful functions).

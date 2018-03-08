Fruitful Functions and the Micro:bit
=====================================

.. topic:: Quick Overview of Day

    Adapt the Micro:bit reaction game from yesterday, and review how the code works. Create a game for the Micro:bit in which the Micro:bit controls a turtle's movement on the screen.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Adapting the Reaction Game
---------------------------

- change the game so that either a HAPPY face or a SKULL can be displayed. If it is a HAPPY face and a user clicks, they should get a point. However, if it is a SKULL and the user clicks, they should lose a point.


Micro:bit Accelerometer
-------------------------

Copy/paste the following code into Thonny, and connect a Micro:bit to your computer. You will need to have the ``cs20-microbitio`` package installed (if you do not, just open Tools -> Manage Packages... and type it into the search bar). 

The Micro:bit can measure movement along three axes:

- X - tilting left/right.
- Y - tilting forwards/backwards.
- Z - moving up/down.

You can ask the Micro:bit for the current amount of tilt on any of the x, y and z axes. To do this, you use a the following functions:

- ``microbit.accelerometer.get_x()``
- ``microbit.accelerometer.get_y()``
- ``microbit.accelerometer.get_z()``

Each of the above functions will return an integer representing the measurement in milli-g's. If you are "level" along a particular axis, the function will return 0.

A simple example of how this works follows. Notice that for the ``get_x``, a positive value means "tilted right", and a negative value means "tilted left". The larger the value is (either positive or negative), the more the Micro:bit is tilted. You might want to print out the value of ``x_tilt`` below, to be sure you understand how this works.

.. code-block:: python

    import microbit

    while True:
        x_tilt = microbit.accelerometer.get_x()
        
        if x_tilt > 100:
            microbit.display.show("R")
            print("Tilted right.")
        
        elif x_tilt < -100:
            microbit.display.show("L")
            print("Tilted left.")
        
        else:
            microbit.display.show("-")
            print("Flat!")


An Accelerometer Fruitful Function
----------------------------------

Let's adapt the code above to use a fruitful function. We will make a function called ``horizontal_tilt()`` that returns either "left", "right", or None. 


.. code-block:: python

    import microbit

    def horizontal_tilt(sensitivity_amount):
        """Returns left or right, depending on which way the micro:bit is tilted. Small sensitivity_amount is more sensitive, large sensitivity_amount is less sensitive."""
        x_tilt = microbit.accelerometer.get_x()

        if x_tilt > sensitivity_amount:
            return "right"
        
        elif x_tilt < -1 * sensitivity_amount:
            return "left"


    while True:
        horizontal_tilt_direction = horizontal_tilt(100)
        
        if horizontal_tilt_direction == "right":
            microbit.display.show("R")
            print("Tilted right.")
        
        elif horizontal_tilt_direction == "left":
            microbit.display.show("L")
            print("Tilted left.")
        
        else:
            microbit.display.show("-")
            print("Flat!")



Things to Explain in the Code
------------------------------

.. note:: This will be written up better soon. For now, use the following topic list to guide your class discussion regarding how the code works.

Talk through the following parts of the code:

- using a parameter ``sensitivity_amount`` to allow the user of the function to easily set how sensitive the program is to the tilting of the micro:bit


Adapt the Code
------------------

Try the following (either by yourself or with a partner):

- create a fruitful function ``vertical_tilt(sensitivity_amount)`` that uses ``get_y`` and returns either "forward", "backward", or None
- create a fruitful function ``held_up_down(sensitivity_amount)`` that uses ``get_z`` and returns either "up", "down", or None


Turtle Drawing
----------------

Now that you have created some functions that let us easily find out what direction the Micro:bit is tilted in, let's use those functions to do some turtle drawing. Your program should be able to have your turtle:

- move forward when the Micro:bit is tilted forward
- move backward when the Micro:bit is tilted backward
- turn left when the Micro:bit is tilted left
- turn right when the Micro:bit is tilted right


**Extra Challenges**

- create a fruitful function ``totally_level(sensitivity_amount)`` that calls your ``vertical_tilt()`` and ``horizontal_tilt`` functions. ``totally_level()`` should return True if there is no vertical tilt and no horizontal tilt, and False otherwise.
- have the turtle ``stamp()`` it's image whenever the Micro:bit is held totally_level
- control whether the pen is up or down based on whether the Micro:bit is being held facing up or down
- **harder challenge** - adapt your code to work so that movement is not backwards when the Micro:bit is held facing down. The turtle should still move intuitively, but just not leave a trail behind it.


*Note: You will need to do this in Thonny, so there is no activecode area included below.* 


.. note:: If your class doesn't have access to Micro:bits, you will be working on an assignment that focuses on creating fruitful and non-fruitful functions.


Micro:bit Game Assignment
-------------------------

Use the examples we've done as a starting point, and come up with your own game that uses the Micro:bit and functions! You are welcome to combine the turtle module as well. At a minimum, your game must:

- use at least one fruitful function (that you have created). You are welcome to use the fruitful functions shown in our demos, but you need to create at least one of your own!
- use at least one non-fruitful function (that you have created).

Some ideas of things you might want to try creating include:

- "guess the time" game (in which a number of seconds is displayed on the Micro:bit, and the user needs to try to press a button as close to the correct amount of time as possible)
- bop-it game (display an A or B, and user needs to press the correct button. User gets more points the faster they can press the correct button. The game ends if the user presses the wrong button, or after a certain number of clicks.)
- have an "object" (led) fall from the top of the screen. The user needs to catch the object, and can move left/right by using the buttons or accelerometer. If they do not catch the object, the game ends.
- create a morse code visualizer, in which the user can type in a message, and the Micro:bit will display the message by flashing the LEDs using morse code. Another option would be to have the Micro:bit flash AND play beeps on your headphones (`see how to connect your headphones to the Micro:bit <https://makecode.microbit.org/projects/hack-your-headphones/make>`_)
- - dice rolling simulator, in which a random number is displayed on the Micro:bit, and used in the program you have running in Thonny
- anything else you can dream up!


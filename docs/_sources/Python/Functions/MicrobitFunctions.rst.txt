
.. qnum::
   :prefix: fruitful-functions-microbit
   :start: 1


Fruitful Functions and the Micro:bit
=====================================

.. topic:: Quick Overview of Day

    Adapt the Micro:bit reaction game from yesterday, and review how the code works. Create a game for the Micro:bit in which the Micro:bit controls a turtle's movement on the screen.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


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
- create a fruitful function ``totally_level(sensitivity_amount)`` that calls your ``vertical_tilt()`` and ``horizontal_tilt`` functions. ``totally_level()`` should return True if there is no vertical tilt and no horizontal tilt, and False otherwise.


Turtle Drawing
----------------

Now that you have created some functions that let us easily find out what direction the Micro:bit is tilted in, let's use those functions to do some turtle drawing. Your program should be able to have your turtle:

- move forward when the Micro:bit is tilted forward
- move backward when the Micro:bit is tilted backward
- turn left when the Micro:bit is tilted left
- turn right when the Micro:bit is tilted right


**Extra Challenges**

- have the turtle ``stamp()`` it's image whenever the Micro:bit is held totally_level
- control whether the pen is up or down based on whether the Micro:bit is being held facing up or down
- **harder challenge** - adapt your code to work so that movement is not backwards when the Micro:bit is held facing down. The turtle should still move intuitively, but just not leave a trail behind it.


*Note: You will need to do this in Thonny, so there is no activecode area included below.* 

.. qnum::
   :prefix: microbit-race
   :start: 1


Micro:bit Controlled Turtle Race
=====================================

.. topic:: Quick Overview of Day

    WDTPD function questions. Continue working on a game for the Micro:bit in which the Micro:bit controls a turtle's movement on the screen.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_functions_11
    :caption: What will this program print?

    def a(x, y):
        x = x + 1
        y = y + 1
        print(x, y)

    x = 10
    y = 20
    a(y, x)

    print(z)


.. activecode:: wdtpd_functions_12
    :caption: What will this program print?

    def a(x, y):
        x = x + 1
        y = y + 1
        return x
        return y
     
    x = 10
    y = 20
    z = a(x, y)
     
    print(z)


.. activecode:: wdtpd_functions_13
    :caption: What will this program print?

    def a(x, y):
        x = x + 1
        y = y + 1
        return x+y

    x = 10
    y = 20
    z = a(x, y)

    print(z)


.. activecode:: wdtpd_functions_14
    :caption: What will this program print?

    def a(my_data):
        print("function a, my_data =  ", my_data)
        my_data = 20
        print("function a, my_data =  ", my_data)

    my_data = 10

    print("global scope, my_data =", my_data)
    a(my_data)
    print("global scope, my_data =", my_data)


.. activecode:: wdtpd_functions_15
    :caption: What will this program print?

    def some_function( a_number, another_number ):
        a_number = a_number * 2
        another_number -= 5
        something_else = a_number + another_number
        something_else = weird_function(something_else)
        print( something_else )

    def weird_function( boo_urns ):
        return boo_urns / 2

    some_function( 2, 3)

.. note:: To execute the following Python code, you will need to have the ``cs20-microbitio`` package installed (if you do not, just open Tools -> Manage Packages... and type it into the search bar). If you have not already done so, you need to flash your Micro:bit with the bitio hex file. First connect your Micro:bit to your computer via USB, then download the :download:`bitio.hex <../Microbit/bitio.hex>` file to your computer. Drag the .hex file onto your Micro:bit in the Windows Explorer (or Mac Finder). If you need more detailed setup instructions, you can look back at the :ref:`microbit_setup` section.


Micro:bit Button Pressing 
-------------------------

Copy/paste the following code into Thonny, then run it and hold down the *a* button on your Micro:bit.

.. code-block:: python

    import microbit

    count = 0

    while True:
        if microbit.button_a.is_pressed():
            count = count + 1
            print(count)

Notice that the value of count continues to be increased as long as you hold button *a* down. The reason is that the ``is_pressed()`` function simply checks the current state of the button, and returns True or False.

If we want to be able to only increase the value of count once for every separate time the a button is pressed, we can use the ``was_pressed()`` function instead. Try the following code in Thonny:

.. code-block:: python

    import microbit

    count = 0

    while True:
        if microbit.button_a.was_pressed():
            count = count + 1
            print(count)

The `Micro:bit micropython documentation <http://microbit-micropython.readthedocs.io/en/latest/button.html>`_  tells us that:

    ``is_pressed()``
    
        Returns ``True`` if the specified button button is pressed, and ``False`` otherwise.

    ``was_pressed()``

        Returns ``True`` or ``False`` to indicate if the button was pressed since the device started or the last time this method was called.


.. note:: Be aware that not all of the functions described in the micropython documentation linked to above are implemented in the bitio Python module that we are using. Specifically, the get_pixel and set_pixel functions are not implemented. If you really want to create a program that uses these functions, you can certainly do so by flashing the Micro:bit with your program (as described in the Hello World section of the micropython documentation), but your program will not be able to communicate with Python running on your computer.


User Controlled Turtle Racing
--------------------------------

.. note:: If you have Micro:bit's, they are a great way to control a user controlled turtle race. If you do not have Micro:bit's, you can accomplish the same thing with keyboard input.

Create a turtle racing game, in which one player presses the "a" button, and the other presses the "b" button. You may want to:

- create a non-fruitful function called ``move_to_starting_locations(player1, player2, starting_x_cord)``
- create a non-fruitful function called ``draw_finish_line(ref_turtle, finish_line_x_cord)`` 
- experiment with ``is_pressed()`` and ``was_pressed()`` to see which makes more sense for this simulation


Micro:bit Accelerometer
-------------------------

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


Turtle Racing Using the Accelerometer
--------------------------------------

Adjust your turtle race code so that one of the turtles is controlled by the user, while the other moves forward with a random number of steps each time through the loop. The user controlled turtle should move based on the accelerometer of the Micro:bit. You may either:

- take the accelerometer value on the x axis, divide it by some amount, and then move your turtle forward accordingly
- make the user tilt the Micro:bit back and forth, so that the turtle only moves forward after the Micro:bit has been tilted sufficiently to the left, and then sufficiently to the right


Practice Problem
-----------------

Continue working on your most recent assignment (likely focused on non-fruitful and fruitful functions).
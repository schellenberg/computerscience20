User Controlled Turtle Race
=====================================

.. topic:: Quick Overview of Day

    WDTPD function questions. Continue working on a game for the Micro:bit in which the Micro:bit controls a turtle's movement on the screen.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


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

Microbit Button Pressing - Extra Details
-----------------------------------------

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


User Controlled Turtle Racing
--------------------------------

.. note:: If you have Micro:bit's, they are a great way to control a user controlled turtle race. If you do not have Micro:bit's, you can accomplish the same thing with keyboard input.

Create a turtle racing game, in which one player presses the "a" button, and the other presses the "b" button. Be sure to:

- create a non-fruitful function called ``move_to_starting_locations(player1, player2, starting_x_cord)``
- create a non-fruitful function called ``draw_finish_line(ref_turtle, finish_line_x_cord)`` 
- experiment with ``is_pressed()`` and ``was_pressed()`` to see which makes more sense for this simulation

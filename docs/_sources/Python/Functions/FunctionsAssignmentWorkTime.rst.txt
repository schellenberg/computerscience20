
.. qnum::
   :prefix: functions-assignment-work-period
   :start: 1


Custom Images and Work Period for Micro:bit Game
=================================================

.. topic:: Quick Overview of Day

    Create a Micro:bit game, making sure to create at least one fruitful and one non-fruitful function.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.



Creating Custom Images on the Micro:bit
----------------------------------------

We have seen that we can display many built-in images on the Micro:bit. You can display any of the built in images (see the :ref:`microbit_predefined_images`) by doing something like:


.. code-block:: python

    import microbit
    microbit.display.show(microbit.Image.HAPPY)


What if you want to create your own images? The way an image is created on the Micro:bit is by making a string that represents each LED/pixel on the Micro:bit. For each LED, you need to set the value to be a number from 0 to 9, which is the brightness of that LED. Setting the brightness to 0 means that LED should be off, while setting the brightness to 9 means turning it on as bright as possible. Any number in between will set the LED to be turned on somewhat bright, where 1 is the least bright, and 8 is almost the brightest.

The following code creates an image of a boat and displays it on the Micro:bit:

.. code-block:: python

    import microbit

    boat = microbit.Image("05050:05050:05050:99999:09990")

    microbit.display.show(boat)


Although we can figure out what is going on in the above code (each row is separated by a :), it would be nice to improve the readability of creating our own images. One way we can do this is to use concatenation to join a number of strings together. Consider the following:

.. activecode:: concatenation_reminder
    :nocanvas:
    :nocodelens:

    message = "Hello there" + " Computer Science 20"
    print(message)

Recall that the ``+`` operator means *concatenation* (think join) when used on strings. Python gives us a second way to concatenate two strings together, as follows:

.. activecode:: concatenation_reminder
    :nocanvas:
    :nocodelens:

    message = "Hello there" \
              " Computer Science 20"
    print(message)

The purpose of using this second style of concatenation is simply to increase the readability of your code. It would be a poor decision to use this style in the example above, but it is a great choice when we think back to how we might come up with a customized image for the Micro:bit to display. Consider the following, which accomplishes the same task of making and displaying a boat image:

.. code-block:: python

    import microbit

    # using the \ character at the end of a string tells Python to
    # keep looking for more of the string on the next line, and
    # concatenates the strings automatically for you

    my_image = "05050:" \
               "05050:" \
               "05050:" \
               "99999:" \
               "09990"
            
    boat = microbit.Image(my_image)
    microbit.display.show(boat)


.. note:: 
    If you would rather not teach/use another method of concatenation, you could also accomplish the same thing by creating a fruitful function that combines multiple strings together for you, as follows:

    .. code-block:: python

        import microbit

        def create_microbit_image(row1, row2, row3, row4, row5):
            """Takes in 5 strings, each containing 5 integers.
            Returns an image that works on the micro:bit"""
            combined_string = row1 + ":" + row2 +  ":" + row3 +  ":" + row4 +  ":" + row5
            custom_image = microbit.Image(combined_string)
            return custom_image


        line1 = "05050"
        line2 = "05050"
        line3 = "05050"
        line4 = "99999"
        line5 = "09990"

        boat = create_microbit_image(line1, line2, line3, line4, line5)
        microbit.display.show(boat)


    The ``create_microbit_image()`` fruitful function defined above allows us to pass in 5 strings, each containing 5 integers representing the brightness of an LED. Organizing our code in this way allows us to visualize what the image will look like, simply by looking at the code.


Work Time on Assignment
------------------------

Continue working on your current assignment (focused on creating fruitful and non-fruitful functions).

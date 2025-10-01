Step 6: Saving Functions in the Library
=======================================

.. reveal:: curriculum_addressed_step6
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.


.. index:: import

Tutorial
---------

In addition to having Reeborg making right turns, you might also want to make a function that changes direction so that Reeborg is heading back to where it was coming from.
We can define a function ``turn_around()`` as follows::

    def turn_around():
        turn_left()
        turn_left()

When we want to use the same function over and over in many different programs, we can save ourselves some work. Instead of redefining the function in every program, we can save it to the Library, and then just import it whenever we need it. Click on the library tab (as shown below), and and copy/paste your ``turn_around()`` and ``turn_right()`` functions there.

.. image:: images/library.png

Now whenever you want to use the functions defined in your library, you will
simply type ``import library``. Then in order to use the function, you would call ``library.turn_right()``. See the example below::

    # import functions from the library tab
    import library

    # when you want to use the function
    library.turn_right()
    library.turn_around()


If you want to, you can save yourself a few keystrokes by renaming the library tab when you import it. Consider the following example::

    # import functions from the library tab
    import library as lib

    # when you want to use the function
    lib.turn_right()
    lib.turn_around()


.. caution:: Although you may see it in some tutorials, you should avoid using wildcard import statements like ``from library import *``. Although this imports all the functions in the library, it can cause problems with your code, since what you import may clash with existing code. This is sometimes called namespace pollution. You can also import individual functions using something like ``from library import turn_right``, but as you begin to import multiple libraries later, this can make your code confusing.


Your Turn
----------

Open Step 6 on the |reeborg_environment|.

.. image:: images/step6.png

Reeborg needs to go pick up the newspaper (The **Star** Phoenix) that is sitting outside his house. If you haven't done it yet, define both the ``turn_right()`` and ``turn_around()`` functions in the library tab. Now use the functions defined in the library to have Reeborg pick up the newspaper, walk back into the house, and put the newspaper down. Once again, be sure to use comments and whitespace to increase the readability of your solution!


.. |reeborg_environment| raw:: html

   <a href="https://reeborg.cs20.ca/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%206" target="_blank">Reeborg environment</a>
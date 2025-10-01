Step 9: Repeating Instructions
=======================================

.. reveal:: curriculum_addressed_step9
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.
    

.. index:: repeat

Tutorial
--------

Often, we will find that we want to repeat a series of instructions a fixed number of times. For example, in Step 8, you had to tell Reeborg to do the same thing over and over again. Instead of writing the same code over and over, you can use the ``repeat`` block. For example, instead of this::

    move()
    move()
    move()
    move()
    move()
    move()
    move()
    move()

You could instead just write this::

    repeat 8:
        move()


A **loop** is a block of instructions that is repeated. Each time the loop is repeated is called an iteration, so the code below would have 4 iterations.

The following code will make Reeborg trace a square::

    repeat 4:
        move()
        turn_left()

By using ``repeat``, we can rewrite some function definitions without
having to repeat instructions::

    def turn_right():
        repeat 3:
            turn_left()

You might want to adjust the code that you have saved in the library tab to use the repeat block.

.. admonition:: For educators

    Using ``repeat`` will not work in Python programs meant to be run outside of Reeborg's World. The rationale for having ``repeat`` as an addition to Python's ``for`` loop is to avoid having to introduce 4 concepts at the same time (loops, variables as in ``_`` in ``for _ in range(n)``, builtin functions like ``range`` as well as the concept of function arguments).


Your Turn
---------

Open Step 9 on the |reeborg_environment|.

.. image:: images/step9.png

Adjust the solution you created for Step 8, this time making use of at least two repeat loops. The world doesn't change from Step 8, but your solution should be much nicer. Remember to use comments and whitespace to increase the readability of your solution!


.. |reeborg_environment| raw:: html

   <a href="https://reeborg.cs20.ca/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%209" target="_blank">Reeborg environment</a>
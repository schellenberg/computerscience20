Step 12: While
=================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.

.. index:: while

Tutorial
---------

When we want to repeat some instructions until a certain condition is
satisfied, Python gives us a simpler way to write this using a new
keyword: ``while``. For example, suppose we want to have Reeborg keep
moving until it reaches a wall. Previously, we might have done something
like the following:

.. code-block:: python

    def move_until_wall():
        if front_is_clear():
            move()

    repeat 42:
        move_until_wall()

and hoped that 42 would have been a number of repetitions sufficient to
reach a wall. Using ``while``, we can write the following::

    while front_is_clear():
        move()

That's it! No more guessing and asking something to be performed a large
number of time just to ensure that it will be enough.

Here's a flowchart for this simple program:

.. figure:: images/flowcharts/while.jpg
   :align: center


Your Turn
---------

Open Step 12 on the |reeborg_environment|.

.. image:: images/step12.png

One of Reeborg's household jobs is to take out the compost. There is, however, a different amount of compost in the container in the house every time Reeborg needs to bring it outside.

Create a program to have Reeborg take out the compost, then return to the house. Reeborg needs to pick up as many rotten apples as are in the compost pail, bring them to the compost container outside, then return to the goal (7, 8). You will need to use ``while`` loops in your solution.

.. |reeborg_environment| raw:: html

   <a href="https://reeborg.cs20.ca/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%2012" target="_blank">Reeborg environment</a>


If You're Having Trouble (a more detailed explanation)
------------------------------------------------------

Suppose we have the following::

    while condition():
        do_1()
        do_2()
        do_3()

You can think of this as being equivalent to::

    if condition():
        do_1()
        do_2()
        do_3()
    if condition():
        do_1()
        do_2()
        do_3()
    if condition():
        do_1()
        do_2()
        do_3()
    if condition():
        do_1()
        do_2()
        do_3()
    ....

which is to say that the block of code is repeated as long as the
condition remains ``True``. So, what happens if the condition is always
``True``? The block of code is repeated for ever and the program never
ends.

This is bad.

Instead of using this description of repeated blocks of code,
programmers describe this as a **loop**: that is, you start with the
first instruction (``do_1()``) inside the code block, continue with all
the others until you reach the last instruction (``do_3()``), then
***loop* back**, or go back, to the test just before the beginning of
the block and see if the condition is satisfied; if not, you repeat the cycle once again. If the condition never becomes ``False``, you keep
repeating and end up with an **infinite loop**.

Conclusion: you want to make sure that the condition will become
``False`` at some point.
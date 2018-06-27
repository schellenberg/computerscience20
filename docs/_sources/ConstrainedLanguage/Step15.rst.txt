Step 15: It's Going to Rain
===============================================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


Project
--------

Open Step 15 on the |reeborg_environment|.

.. image:: images/step15.png

It's raining hard.  Water is going to come in through the open windows unless Reeborg closes them. Open windows look like this:

.. image:: images/open_window.png

Have Reeborg move around the room and close the windows by using the ``build_wall()`` function. The size of the room and the location of the windows are always changing.

.. note:: Since the windows are in different places in each world, be sure that your solution does not *hard code* a number of steps to get to a window. Instead, Reeborg must check for an open window as it walks around the inside of the house.

.. |reeborg_environment| raw:: html

   <a href="https://reeborg.cs20.ca//?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%2015" target="_blank">Reeborg environment</a>
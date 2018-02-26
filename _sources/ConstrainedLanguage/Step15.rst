Step 15: It's Going to Rain
===============================================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


Project
--------

Open Step 15a on the |reeborg_environment|.

.. image:: images/step15a.png

It's raining hard.  Water is going to come in through the open windows unless Reeborg closes them. Open windows look like this:

.. image:: images/open_window.png

Have Reeborg move around the room and close the windows by using the ``build_wall()`` function. The size of the room and the location of the windows are always changing.

.. note:: Since the windows are in different places in each world, be sure that your solution does not *hard code* a number of steps to get to a window. Instead, Reeborg must check for an open window as it walks around the inside of the house.

Extra for Experts
------------------

**Only attempt the following step if you are either: ahead of the rest of your peers, or finished off the rest of the steps. If you've been having any trouble with these Reeborg steps, just skip this Extra for Experts for now. You can always come back and try it later!**

Extend the program you wrote above. This time it must also be able work on the second test world, which is Step 15b on the `Reeborg website <https://sk-opentexts.github.io/reeborg/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%2015b>`_ . 

.. image:: images/step15b.png

You still need to have Reeborg move around the room and close the windows by using the ``build_wall()`` function. The shape and size of the room, and the location of the windows are always changing.

Imagine that Reeborg is standing next to a wall, takes a single step, and finds that there is no longer a wall next to him. What can happen if Reeborg takes another step? *Hint: there are two possible cases.*

.. |reeborg_environment| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%2015a" target="_blank">Reeborg environment</a>
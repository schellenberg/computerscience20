Step 15: It's Going to Rain
===============================================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


Project
--------

Open Step 15a on the |reeborg_environment|.

.. image:: images/step15a.png

Reeborg is standing by the door to the house, sees a storm coming, and decides to close all of the windows in the house. First, Reeborg ``put``s down a star where it is standing (so that it can tell when it gets back to the door). Then Reeborg will walk around the house, closing any open windows it finds. We will represent the window closing by Reeborg putting a star down at an open window (represented by wall openings). Reeborg loves storms, so after closing all the windows, it will step outside to watch the storm.

Be sure to run your program multiple times, as Reeborg will need to be able to close all the windows in many different houses (the location of the windows can change).

.. note:: Since the windows are in different places in each world, be sure that your solution does not *hard code* a number of steps to get to a window. Instead, Reeborg must check for an open window as it walks around the inside of the house.

Extra for Experts
------------------

**Only attempt the following step if you are either: ahead of the rest of your peers, or finished off the rest of the steps. If you've been having any trouble with these Reeborg steps, just skip this Extra for Experts for now. You can always come back and try it later!**

The program you write to solve the problem above must also be able work on the second test world, which is Step 15b on the `Reeborg website <https://sk-opentexts.github.io/reeborg>`_ . 

.. image:: images/step15b.png


.. |reeborg_environment| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg" target="_blank">Reeborg environment</a>
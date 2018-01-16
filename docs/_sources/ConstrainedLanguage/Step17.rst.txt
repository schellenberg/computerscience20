Step 17: Solving a Maze
=============================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


Tutorial
---------

As you begin to think through the following problem, I once again **highly recommend** that you begin by writing **pseudocode** with paper and pencil.

Your challenge is to see if you can refine the pseudocode solution you come up with well enough that when you actually write the Reeborg solution, it works on the first try. To accomplish this, you should spend much more time with paper and pencil than with your keyboard on this step! If you don't have any scrap paper with you, ask your teacher for some.


Your Turn
----------

Open Step 17 on the |reeborg_environment|.

Reeborg has lost it's lunchbox. Reeborg was playing in a maze and set it down and then wandered around. Now Reeborg is hungry. The lunchbox is represented by the flag. Each time you press play, both the flag and Reeborg will begin in a random location. Reeborg's situation looks like this:

.. image:: images/step17.gif

Write a program to help Reeborg find the lunchbox. The secret is to have Reeborg follow along the right edge of the maze, turning and moving right if it can, going straight ahead if it can't turn right, or turning left as a last resort. Write a program using an if..elif..else statement so Reeborg can have lunch.


.. |reeborg_environment| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg" target="_blank">Reeborg environment</a>
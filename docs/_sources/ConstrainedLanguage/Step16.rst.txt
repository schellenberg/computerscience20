Step 16: Solving a Maze
=============================

Tutorial
---------

As you begin to think through the following problem, I once again **highly recommend** that you begin by writing **pseudocode** with paper and pencil.

Your challenge is to see if you can refine the pseudocode solution you come up with well enough that when you actually write the Reeborg solution, it works on the first try. To accomplish this, you should spend much more time with paper and pencil than with your keyboard on this step!


Your Turn
----------

Open Step 16 on the `Reeborg website <https://sk-opentexts.github.io/reeborg>`_ .

Reeborg has lost it's lunchbox. Reeborg was playing in a maze and set it down and then wandered around. Now Reeborg is hungry. The lunchbox is represented by the flag. Each time you press play, both the flag and Reeborg will begin in a random location. Reeborg's situation looks like this:

.. image:: images/step16.gif

Write a program to help Reeborg find the lunchbox. The secret is to have Reeborg follow along the right edge of the maze, turning right if it can, going straight ahead if it can't turn right, or turning left as a last resort. Write a program using an if..elif..else statement so Reeborg can have lunch.
Step 16: Pseudocode
======================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


Tutorial
---------

You have learned a lot about programming Reeborg. Congratulations! What you may not realize is that you have learned a lot about programming in any language. Most programs are a sequence of steps (called an **algorithm**), interspersed with conditional decisions and groups of instructions that repeat.

Implementing the solutions to the assignments so far has required a little more thought at each step. You understand the question and the desired result, but sometimes it's not immediately clear how to get it done. When you are solving a non-trivial problem, it is often **best to begin with pencil and paper**.

When coming up with the solution to a problem, write the steps down in your own words with pencil and paper. This is sometimes called **pseudocode** because it isn't really instructions that Reeborg (or any programming language) could use. But it helps you understand what needs to happen. Then you code it -- write the real instructions -- to create a Reeborg program.

Be sure to think the following situation through before you start coding. First, press the play button on the world a number of times to be sure you understand what the possible worlds look like. Now figure out the algorithm, or sequence of steps, required.  Then simulate in your mind the execution of the program you are going to write. If it does what you expect, then and only then should you start coding.


Your Turn
----------

Open Step 16 on the |reeborg_environment|.

.. image:: images/step16.png

Reeborg has been hired to pick carrots in a number of gardens. Although the gardens are all the same size, the carrots have grown in different places in each of the gardens. You need to create a program that will allow Reeborg to harvest all of the carrots in each of the possible gardens. You know that at each location, there will only ever be either 1 or 0 carrots.

.. note:: Remember (from our explorations in Scratch), that you can have a repeat statement inside another repeat statement -- we called this a nested repeat. Consider how you might be able to use a nested repeat to solve this problem.


.. |reeborg_environment| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg" target="_blank">Reeborg environment</a>
Number Guessing Game (Pair Programming)
=======================================

.. topic:: Quick Overview of Day

    In this pair programming activity, you will create a number guessing game that uses many of the concepts we've learned.

.. warning:: This is just a stub, to give a sense of what should go here. It will be written up properly soon...

This will be your first foray into pair programming. One of you should be at the keyboard and mouse, while the other partner is helping discuss the ideas. Switch roles every 10 minutes. 

.. sidebar:: Teacher Note

    Before having the students attempt to create the game, you may want to model the game. The teacher can act as the computer (picking a random number between 1-100, providing too high/low feedback, and ending with "You got it in 8 tries!"), and one of the students can be the user who is attempting to guess the number.

Basic Game
-----------

For this assignment, you will create a game that does the following:

- generates a random number from 1 to 100 and stores it in a variable
- repeats the following until the user guesses the number
- gets the user to guess the number (using the **ask** block)
- tells the user if the number is too high or too low
- congratulates the user when they guess the correct number with a message such as "Way to go! You guessed the right number in 9 tries!"

When you complete the basic functionality, put up your hand and I'll tell you how you can make it even better! 

If the description above doesn't make sense to you, here's a `short video <https://www.youtube.com/watch?v=BoSNTdrd24I>`_  of what the basic number guessing game might look like:

.. youtube:: BoSNTdrd24I
    :height: 315
    :width: 560
    :align: left
    :http: https


Extensions
-----------

Extras that can be added to the basic game:

- WAY too high/low, if the guess is dramatically far away from the actual number
- very close, but it's too high/low, if the guess is really close the actual number
- STILL too high/low, if the guess is above/below the actual number multiple times in a row
- only allow specific number of attempts before ending the game
- CPU/human reverse roles



.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.

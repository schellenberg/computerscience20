Timing Issues and Dodging Game (Broadcasts and Variables)
=========================================================

.. topic:: Quick Overview of Day

    Explore issues that arise when more than one script is triggered by the same event, and solve them by setting up ordered broadcasts. Create an object dodging game, using variables to allow both the object and character to increase in speed as the game progresses.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


If you'd prefer to watch a video, `the following video <https://www.youtube.com/watch?v=1vPKlqxNloc>`_ demonstrates the same ideas I've described in text below.

.. youtube:: 1vPKlqxNloc
    :height: 315
    :width: 560
    :align: left
    :http: https


Timing Issues
-------------

When you begin creating more complicated projects in Scratch, it is possible to run into problems that we will call *timing issues*. This can happen when you respond to one event with multiple sprites. Although you can certainly respond to an event with many different sprites, there is no guarantee as to the order in which those responses will occur. If the response of one sprite depends on another sprite already taking an action, this can cause difficult to find problems in your project.

To demonstrate this problem, we will create a very simple "game" that intentionally exposes this problem. First, create three sprites and position them on the stage as follows:

.. image:: images/scratch_timing_issues_sprite_setup.png

For our game, we will the dinosaur and reindeer sprites each choose a random number from 1 to 100. The duck sprite will then determine which sprite is the winner (by checking which number is larger), and announce the winner. This would obviously be a terrible game to play with humans, but it will serve nicely to illustrate possible timing issues.

We need to create two variables, one to hold the number chosen by the dinosaur and one to hold the number chosen by the reindeer. Go to the Data tab to create these, making sure you provide descriptive names for the variables.

.. note:: 
	When creating your variables, you should leave the **For all sprites** button selected (instead of switching it to **For this sprite only**) unless you have a very good reason for declaring the variable only be accessible by the current sprite. If you create a variable for this sprite only, no other sprites are able to see what the value of that variable is (even if you drag the variable onto another sprite). You can tell that you have created a variable for a single sprite if, prior to the name of the variable, Scratch displays the name of the sprite followed by a colon:

	.. image:: images/scratch_variable_scope.png
	
Set up the basic version of the game by creating the following scripts for your sprites:

.. image:: images/scratch_timing_issue_game_1.png

To make the variables a bit nicer to look at, you can right click on the variable (as shown on the stage), and select the "large readout" option. Now drag that variable so that it is over the appropriate sprite.

You should now test out your sketch by pressing the green flag a few times. You should notice that your program will occasionally select the correct winner, but will often make an error about who has won. Why is this happening? The logic of the duck sprite is correct, and yet we are encountering an error...

.. image:: images/scratch_broadcast_issues_animation.gif

Although the individual logic of each of our sprites is correct, **they are all reacting to the same event** (in this case, the flag being clicked). We are therefore unable to guarantee the order the code will run. When the flag is clicked, we do not know whether the dinosaur, reindeer or duck will have their code executed first. If the duck code happens before both of the other sprites select their new numbers, the duck may be making a decision based on the numbers selected the last time the flag was clicked (or one old number and one new number). 

Since we need to guarantee the order in which these scripts run, we can remake the script so that dinosaur picks a number when the flag is clicked, then broadcasts a message telling the reindeer to pick a number. The reindeer can react to that message by picking a number, then broadcast a message telling the duck to determine the winner. With this setup, we are guaranteed to have both numbers chosen before the duck attempts to decide which sprite is the winner.

.. image:: images/scratch_timing_issue_game_2.png


Dodging Game
------------

Create a dodging game, in which the object to avoid (bouncing randomly around the screen) and the character (which is following the mouse) both speed up as the game progresses. When they contact each other, the game should end.


Practice Problem
------------------

Work time on RPS/Coolest Scratch Assn.


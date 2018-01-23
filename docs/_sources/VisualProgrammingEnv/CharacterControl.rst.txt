Controlling a Character with WASD (Repetition and Conditionals)
===============================================================

.. topic:: Quick Overview of Day

    Introduce the **repeat** block by having a sprite shrink before disappearing. Demonstrate simple event-driven programming by moving a sprite with WASD using the **when key pressed** block. Use the **forever** block, combined with the **if-then** block to improve the motion of the sprite.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.


If you'd prefer to watch a video describing how to create your first Scratch program, `the following video <https://www.youtube.com/watch?v=cvGC6Sr6rvU>`_ demonstrates the same ideas as what I've described in text below.

.. youtube:: cvGC6Sr6rvU
    :height: 315
    :width: 560
    :align: left
    :http: https


Changing the Size of a Character
---------------------------------

To begin today, we are going to adapt the example created yesterday. To open projects you have made previously, log into `Scratch <https://scratch.mit.edu>`_ and look for the "My Stuff" folder icon on the top right hand side of the page.

.. image:: images/scratch_my_stuff.png

If we want to have a sprite appear larger or smaller than the default size, we can use the **change size by 10** block, which you can find in the **Looks** tab.

.. image:: images/scratch_change_size_block.png

Drag the block shown above onto the scripts area, and double click it. You should see the current sprite get a bit larger. Experiment by changing the number 10 to different values. *Be sure to try both positive and negative values!*


Repetition
-------------------------------

We would like to adapt our previous project to have the characters shrink before they disappear. In order to accomplish this, we need to use the **change size by #** block multiple times. One way to do this would be to put a large number of blocks one after another, like this:

.. image:: images/scratch_change_size_many_times.png

Although this begins to do what we want, to have this shrink our character completely, we would need to have 50 of these blocks. There must be a better way.

As it turns out, one thing that computers are really good at is repeating commands over and over again. Rather than duplicating the exact same command over and over, we can enclose the command inside a **repeat** block, and just tell the computer how many times it should repeat the command. You can find the repeat block under the **Control** tab.

.. image:: images/scratch_repeat_block.png

To make a character shrink, we simply change it's size by some negative amount. If we were to change the size of the character by -50, however, the character would make a sudden jump from being quite large to being half as large as before. Using the repeat block with a smaller number in the change size block allows us to make the shrinking process appear much smoother. Adapt the previous code to make it look like the following (note that the changes are circled in red):

.. image:: images/scratch_shrinking_characters.png



Movement Using WASD - Version 1
------------------------------------------

If we want to control the motion of a sprite on the screen, one way we can do it is using the classic WASD controls on a keyboard, where

- **w** moves the character **up**
- **a** moves the character **left**
- **s** moves the character **down**
- **d** moves the character **right**

Under the **Events** tab, there's a **when key pressed** block. We can use this to have a sprite react to keyboard input. 

.. image:: images/scratch_key_pressed_block.png

In order to control the motion of a sprite, we need to recall the coordinate system that Scratch uses. Remember that the coordinate plane in Scratch is set up in the same way as the coordinate plane you are used to in math class, as shown in the image below.

.. image:: images/scratch_coordinate_plane.png

In order for a sprite to move up on the screen, we need to increase the y value of coordinate. To move it down, we need to decrease the y value. To move right, we would increase the x value. Finally, to move left, we would decrease the x value. To make this happen, we can use the **change x by** and **change y by** blocks found in the **Motion** tab. To move in the correct direction, we just need to put in positive/negative *change by* values for x and y, depending on which direction we want the sprite to move. Recreate the following:

.. image:: images/scratch_wasd_basic.png

Take a minute to experiment with this first attempt at WASD motion. You will quickly notice that there are a few issues with the way the motion is happening. 


Movement Using WASD - Version 2
------------------------------------------
WASD smoothly (FOREVER block, using if statements)


Work time on first assignment [short story], for any remaining time.




Your First Computer Program
==============================

Introduction
----------------------------

Welcome here! The goal of this course is to teach you how to problem solve, and we will be using the concepts of Computer Science to achieve that goal. By the end of the semester, you will be able to confidently solve problems by writing computer programs. In other words, you will be able to control what the computer does by writing algorithms (a series of steps). 

Although we will eventually get to writing plain text into a file to create computer programs, that process can be a bit intimidating. To help you understand what you are able to teach a computer to do, we will follow the following process:

- use a visual programming environment (this will allow you to understand the basic control structures of computer science, and will prevent you from making any syntax errors that would cause your program to report an error when you run it)
- use a constrained language to solve algorithmic puzzles (here you will type in text to control what the computer is doing, which means you will run into syntax errors, but the puzzles you are solving will give you instant visual feedback)
- use a "traditional" computer science language (once you are feeling confident with many of the basic ideas of computer science, we will apply them using a traditional computer language)


Your First Computer Program!
----------------------------

There are many different visual programming environments, but the one we will use is called `Scratch <https://scratch.mit.edu/>`_. Your first task is to create an account on the Scratch website, so that the programs you write can be saved and accessed later. Go do that now!

If you'd prefer to watch a video describing how to create your first Scratch program, `the following video <https://www.youtube.com/watch?v=pJYCRtSDJSk>`_ demonstrates the same ideas as what I've described in text below.

.. youtube:: pJYCRtSDJSk
    :height: 315
    :width: 560
    :align: left
    :http: https


Now that you have an account, let's make your first computer program of the semester! Click the Create button on the top of the Scratch website to create a new project. 

.. image:: images/scratch_create.png

In the project view, the screen is divided into a number of panes, including the *stage* (where you will see your project run), *sprite list* (shows which sprites are part of your project, and allows you to select them), *block palette* (where all the blocks you can drag-and-drop onto your scripts), and the *scripts area* (where you will combine blocks of code to create programs for your sprites to run). One of the most important things for you to keep in mind is that **you can't break the environment**, so feel free to explore as much as you want!

.. image:: images/scratch_areas.png

.. sidebar:: Teacher Note

    You may want to spend some time exploring the environment with the students before you actually create the first program.

For our first program, let's create a simple conversation between two sprites. To do this, you'll need to add a second sprite to the project. You do this in a number of ways, each of which have an icon at the top of the sprite list pane. You can hover over each of the images with your mouse to discover what they represent. For now, use the "Choose Sprite from Library" icon to add an additional sprite to the stage. 

.. note:: Once you have more than one sprite in the sprite list pane, you will be able to see that the scripts area pane shows the script for the currently selected sprite. To be sure you understand this, drag a block from the block palette onto the scripts area. Now select a different sprite in the sprite list by clicking on it. Notice how the blocks in the scripts area change when you select a different sprite.

Now that you have two sprites in the sprite list pane, let's get them to have a simple conversation. Select the *Looks* tab in the blocks palette, then drag a *Say "Hello" for 2 secs* block to the scripts area. A quick way to see the result of this block is by double clicking it. Try it now!

.. image:: images/scratch_say_block.png

Of course, we don't want to have to double click the block to make the conversation happen, so we need to have an event trigger the say block. Select the *Events* tab in the blocks palette, then drag a *When Flag Clicked* block into the scripts area. Now, drag the *Say "Hello" for 2 secs* block until it snaps onto the *When Flag Clicked* block. At this point, you should be able to make your sprite say Hello when you click the flag above the stage.

.. image:: images/scratch_blocks_connected.png



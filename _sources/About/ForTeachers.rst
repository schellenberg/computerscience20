How to Use This Textbook - For Teachers
============================================

Introduction
----------------------------

Not sure what needs to be put in here for teachers. A bit of help, implementation support team? Some things I'm thinking of including:

- that each page roughly maps to one day's worth of instruction (with the notable exception of the Reeborg unit)
- what to do if you have junky internet access
- download links for `Thonny <http://thonny.org/>`_ (for Python section), `Atom <https://atom.io/>`_ (to view any other plain text you want)
- remixing the book `(source is available on GitHub) <https://github.com/sk-opentexts/computerscience20>`_

Sample Overview of Days
------------------------

When I was creating this textbook (in the fall of 2017), I kept track of what I did each day below.

Scratch
~~~~~~~
#. Introduction to Scratch (Broadcasts)
#. Controlling a Character with WASD (Repetition and Conditionals)
#. Chase the Mouse and Drawing Polygons (Repeat and If/Else)
#. Drawing Polygons - Part 2 (Variables and Nested Repeat)
#. Tracing Code and Cannonball Motion (Repeat Until)
#. Making a Start Screen (Repeat, If/Else, Broadcast)
#. Project Work Period
#. Timing Issues and Dodging Game (Broadcasts and Variables)
#. Built-In Variables (Tempo, Answer and Timer)
#. Project Work Period
#. Number Guessing Game (Pair Programming)
#. Making Your Own Blocks (Functions)
#. Number Guessing Game (Pair Programming)
#. Student Directed Project Work Period
#. Student Directed Project Work Period

Reeborg
~~~~~~~

Note that this is hard to pin down to exactly what students will get through, since they all work through this section at a different pace. We started on a Tuesday, and I've asked them to all be done step 9 (if they aren't already) by Monday. 

Still going through this. I'm thinking approximately two weeks to get through this, but to keep the keen students interested, that might mean creating a few "extra challenges" that aren't required...

.. admonition:: Loading Quizzes

    You might want to use the ``World()`` function instead to load a world file::

        World("Step 6")
        move()
        move()

    If the world currently displayed is not
    **Step 6**, then running this program will result in the selected
    world changing to **Step 6** and the rest of the program will be ignored.
    Running it a second time (when the world shown **is** the desired
    world **Step 6**), the ``World()`` function will be ignored and the rest
    of the program will be executed.

    Instead of using pre-defined worlds, you can use any world accessible
    by a URL somewhere on the web.  Using this, you could create and save a quiz world anywhere that is accessible on the web. To use it, you could have the students simply enter something like::

        World("http://personnel.usainteanne.ca/aroberge/reeborg/token.json",
              "Token test")

    Running this program should add one more world to the current selection.
    Note the second (optional) argument to ``World`` which, if provided,
    is used as the name appearing in the world selector.


Python
~~~~~~~

To be added.


Computing and Society
~~~~~~~~~~~~~~~~~~~~~~

To be added.


Career Exploration
~~~~~~~~~~~~~~~~~~

To be added.


Student-Directed Research
~~~~~~~~~~~~~~~~~~~~~~~~~

To be added.
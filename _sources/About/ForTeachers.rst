How to Use This Textbook - For Teachers
============================================

Introduction
----------------------------

This textbook has been written to support your teaching of Computer Science 20 in Saskatchewan, and I have attempted to tie everything into the curricular outcomes of the course. There are a few important things you should know: 

- each page roughly maps to one day's worth of instruction (with the notable exception of the Reeborg unit, which is intended to be approximately a two week unit, during which the students work through the content at their own pace)
- the Python editor I've chosen to use throughout the book is called Thonny, which you can download for free `Thonny <http://thonny.org/>`_. Thonny provides the same experience for the student whether they are on a Mac, PC, or Linux machine, which is a huge advantage when a student uses a different operating system at home and at school. No administrator rights are required to install Thonny, so I simply have the students download and install Thonny on our first day of Python (takes about 5 minutes). Thonny also makes installing Python packages/modules trivially easy, which is why I have included a few within the text. If you want to extend your Python teaching, you can search on the `Python Package Index <https://pypi.python.org/pypi>`_ for a package that does what you want, and install it easily with Thonny (Tools -> Manage Packages...).
- I have incorporated Micro:bit hardware into some of the Python lessons (specifically, Python sections 19-22). Students have been very engaged with the Micro:bit, and although I am teaching them the same concepts as I would be without using an additional piece of hardware, they are much more excited about the process.
- if you would like to access the Teachers Only repository of code/quizzes/etc, please send me an email from your school division email address (so that I know it is from a teacher), and I'll give you access to it. My email is schellenberg@gmail.com.
- if you find errors in the textbook, `please let me know! <https://github.com/sk-opentexts/computerscience20/#contributing-to-the-book>`_
- if you want to create your own version of this book, you are free to do so. The general process of remixing the book is to `documented on the GitHub page that holds the source code of the book <https://github.com/sk-opentexts/computerscience20/#building-the-book-yourself>`_.




Scratch
~~~~~~~

When I was creating this textbook (in the fall of 2017), I kept track of what I did each day below.

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

The exact amount of time that you spend on the Reeborg unit is hard to predict, as each class will progress through the material at a slightly different speed. A reasonable estimate, however, is that students should be done at least up to Step 9 by the end of the first 4/5 periods, which would be a logical time to give them a quiz on Steps 1-9. Finishing the remaining steps will likely take another 5-8 periods, at which point a quiz covering all of the content from Steps 1-18 would be a good idea.

**Making Your Own Quiz Worlds**

Creating your own worlds in Reeborg can be time consuming, but once you understand the process, it works quite well. The general procedure is to select "Additional Options", then click "Edit world". Note that in order to use the world that you create with your students, you will need to save the world to your computer (Additional Options -> Save world to file). Then you need to give the students a way to access that file. One simple way to do this is to copy/paste the contents of the ``world_name.json`` file into a web service like `pastebin.com <pastebin.com>`_. I have done this with `a simple demo world <https://pastebin.com/yLb3CUzq>`_. Note that to get just the contents of the file, you can click the "raw" button on pastebin, which provides `something like this <https://pastebin.com/raw/yLb3CUzq>`_. You should now be able to use that url to create a link that your students can access. It will look something like this:

    `https://sk-opentexts.github.io/reeborg?lang=en&mode=python&url=https://pastebin.com/raw/yLb3CUzq&name=DemoExternalWorld <https://sk-opentexts.github.io/reeborg?lang=en&mode=python&url=https://pastebin.com/raw/yLb3CUzq&name=DemoExternalWorld>`_

To make the same thing work for you, simply replace the ``https://pastebin.com/raw/yLb3CUzq`` portion of the link with the link to your world, and change ``DemoExternalWorld`` to whatever name you would like to have appear in the Reeborg World Selector menu. **This is how I link to extra worlds in the More Challenges and Second Practice Quiz sections of Reeborg.**

.. note:: Although it does take one extra step, I like to use a url shortening service, such as `bitly.com <https://bitly.com>`_, which allows you to take that long url and make it into something easier for students (and you!) to type. The url above is shortened into `http://bit.ly/2hI9ejK <http://bit.ly/2hI9ejK>`_

To find out much more information about how to create worlds, you might want to `read the guide created by André Roberge <https://github.com/aroberge/reeborg-world-creation>`_ (the creator of Reeborg).
    

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
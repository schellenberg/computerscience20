How to Use This Textbook - For Teachers
============================================

.. caution:: This version of the textbook is my (Dan Schellenberg) own personal fork. I will continue to update/adapt the book here. If you would like a version that will not change, Saskatoon Public Schools hosts a version at `opensask.ca <http://opensask.ca>`_.

Introduction
----------------------------

This textbook has been written to support your teaching of Computer Science 20 in Saskatchewan, and I have attempted to tie everything into the curricular outcomes of the course. There are a few important things you should know: 

- each page roughly maps to one day's worth of instruction (with the notable exception of the Reeborg unit, which is intended to be approximately a two week unit, during which the students work through the content at their own pace)
- the Python editor I've chosen to use throughout the book is called `Thonny <http://thonny.org/>`_, which you can download for free. Thonny provides the same experience for the student whether they are on a Mac, PC, or Linux machine, which is a huge advantage when a student uses a different operating system at home and at school. No administrator rights are required to install Thonny, so I simply have the students download and install Thonny on our first day of Python (takes about 5 minutes). Thonny also makes installing Python packages/modules incredibly easy, which is why I have included a few within the text. If you want to extend your Python teaching, or provide an additional challenge for some of your students, you can search on the `Python Package Index <https://pypi.python.org/pypi>`_ for a package that does what you want, and install it easily with Thonny (Tools -> Manage Packages...).
- I have incorporated `Micro:bit <http://microbit.org/>`_ hardware into some of the Python lessons (primarily in the Python - Micro:bit and More Functions section). Students have been very engaged with the Micro:bit, and although I am teaching them the same concepts as I would be without using an additional piece of hardware, they are much more excited about the process. If you do not have access to Micro:bits, you can still accomplish the same objectives by exploring functions in more detail, perhaps making use of a module like pygame.
- if you would like to access the Teachers Only repository of code/quizzes/etc, please send me an email from your school division email address (so that I know it is from a teacher), and I'll give you access to it. My email is schellenbergd@spsd.sk.ca.
- if you find errors in the textbook, `please let me know! <https://github.com/schellenberg/computerscience20#contributing-to-the-book>`_
- if you want to create your own version of this book, you are free to do so. The general process of remixing the book is `documented on the GitHub page that holds the source code of the book <https://github.com/schellenberg/computerscience20#building-the-book-yourself>`_.


Scratch
~~~~~~~

For the Scratch unit, most days tended to be set up as:

- teacher led demonstration of the concepts, with the students following along by building the demonstration on their computer during the demonstration
- any time remaining at the end of the demonstration for the day is spent working on the current Scratch assignment (I used three Scratch assignemnts -- one per week)

During the semester I was creating this textbook, the number of days spent on Scratch were as follows:

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

The exact amount of time that you spend on the Reeborg unit is hard to predict, as each class will progress through the material at a slightly different speed. A reasonable estimate, however, is that students should be done at least up to Step 9 by the end of the first 4/5 periods, which would be a logical time to give them a quiz on Steps 1-9. Finishing the remaining steps will likely take another 5-8 periods, at which point a quiz covering all of the content from Steps 1-20 would be a good idea.

**Making Your Own Quiz Worlds**

Creating your own worlds in Reeborg can be time consuming, but once you understand the process, it works quite well. The general procedure is to select "Additional Options", then click "Edit world". Creating a simple world (that doesn't change each time you open it), you can simply use the graphical world editor on the Reeborg website. If you want to make a world that changes, you can use Python or JavaScript to change certain portions of the world when it is loaded. To find out much more information about how to create worlds, you might want to `read the guide created by André Roberge <https://aroberge.gitbooks.io/reeborg-s-world-advanced-world-creation/content/included/chapter1.html>`_ (the creator of Reeborg).

Note that in order to use the world that you create with your students, you will need to save the world to your computer (Additional Options -> Save world to file). Then you need to give the students a way to access that file. One simple way to do this is to copy/paste the contents of the ``world_name.json`` file into a web service like `pastebin.com <pastebin.com>`_. I have done this with `a simple demo world <https://pastebin.com/yLb3CUzq>`_. Note that to get just the contents of the file, you can click the "raw" button on pastebin, which provides `something like this <https://pastebin.com/raw/yLb3CUzq>`_. You should now be able to use that url to create a link that your students can access. It will look something like this:

    `https://reeborg.cs20.ca/?lang=en&mode=python&url=https://pastebin.com/raw/yLb3CUzq&name=DemoExternalWorld <https://reeborg.cs20.ca/?lang=en&mode=python&url=https://pastebin.com/raw/yLb3CUzq&name=DemoExternalWorld>`_

To make the same thing work for you, simply replace the ``https://pastebin.com/raw/yLb3CUzq`` portion of the link with the link to your world, and change ``DemoExternalWorld`` to whatever name you would like to have appear in the Reeborg World Selector menu. **This is similar to how I link to extra worlds in the More Challenges and Second Practice Quiz sections of Reeborg.**

.. note:: Although it does take one extra step, I like to use a url shortening service, such as `bitly.com <https://bitly.com>`_, which allows you to take that long url and make it into something easier for students (and you!) to type. The url above is shortened into `http://bit.ly/2Kin79e <http://bit.ly/2Kin79e>`_


Python
~~~~~~~

The Python pages are set up to reflect the material that I covered in one 65 minute class period. Some of the pages have much more content to cover than others, as some days had work time for the current assignment built into them. In the Getting Started section, I was very explicit about recommending hand-in assignments at certain times (such as 4. Input/Output Assignment), since I've found that setting up students for success on a simple assignment early on is very helpful. Later on in the textbook, however, I've avoided including assignments in the text to give you as much freedom as possible.

I have included What Does This Program Do (WDTPD) questions throughout the Python sections of the textbook. While you can obviously use these however you like, I have found it helpful to zoom in on the textbook and project the questions so that the students can easily see the code. I then give them some time to try to determine what will happen when we click "Run", and have one of the students volunteer their guess. 

If you are confident with the material, I have found that *live coding* with the students is an excellent way to explore new concepts in class. For example, during the :ref:`turtle_races` class period, I would start the class by drawing a description of what we are trying to create on the white board. We would then begin to code a solution together in Thonny. I try to give them as little help as possible, and instead force the group to come up with the logic on their own (though providing leading hints if they are stuck).


Computing and Society
~~~~~~~~~~~~~~~~~~~~~~

**CS1 - Explore the underlying technology of computing devices and the internet, and their impacts on society.**

Although this textbook does not completely fulfill this outcome, the materials included in the Computing and Society section should give you a place to begin your discussions. 

I would suggest using the How Computers Work videos near the beginning of the semester (either during Scratch or Reeborg). My own method is to play one of these videos at the start of the class, followed by a short class discussion about the topic at hand. 

I tend to use the How the Internet Works videos in a very similar fashion as the How Computers Work videos, but later on in the semester. You could do this in whatever order you prefer, as there isn't any prerequisite knowledge for either video series.

I like to use learning basic HTML/CSS as a break from Python for the students, usually right after I've finished up with the image processing unit. The amount of time you spend on this could vary quite a bit from one semester to the next (depending on the cohort of students you are teaching), but would likely be between 3 to 6 class periods.


**CS2 - Investigate the impacts of information technologies on privacy, including digital security practices.**

This textbook does not attempt to fulfill this outcome. It is hoped that this outcome can be interwoven into discussions held throughout the semester. Using current events as examples of these issues can be a very helpful way to start a discussion on these topics.


Career Exploration
~~~~~~~~~~~~~~~~~~

I did not attempt to address this outcome within this textbook, so you will need to fulfill the outcome on your own. If you are teaching in the Saskatoon area, the University of Saskatchewan's Computer Science Department has hosted a career exploration event called Digitized for the last few years (historically held at the start of May).


Student-Directed Research
~~~~~~~~~~~~~~~~~~~~~~~~~

Once you have finished teaching new Python concepts, the students should have an opportunity to build (or research) a project of their choosing. As mentioned in the indicators for this outcome, if a coding project is chosen, the students can choose to use the language you have been teaching for most of the semester (Python), or spend time learning a language of their choice. Although the amount of time given to this project will vary from semester to semester, I would suggest reserving at least 2 weeks of class time for the students to work on it.

.. note:: I have had students use each of the resources mentioned below in my computer lab in Saskatoon Public Schools, but your environment may vary. Some of the resources require installation, while others are web based, which may influence the choices you are able to provide the students.

I have found it helpful to dissuade weaker students from attempting to learn a new language, unless the new language is a block based language like `App Inventor <http://appinventor.mit.edu/>`_, `Microsoft MakeCode <https://makecode.com/>`_, `Stencyl <http://www.stencyl.com/>`_, or `GameMaker <https://www.yoyogames.com/gamemaker>`_. 

For students that would like to stick with Python, but try something more graphical, learning `pyGame <https://www.pygame.org>`_ can be a good choice (you might want to suggest looking at a learning resource such as `Invent with Python <http://inventwithpython.com/pygame/>`_ or `Program Arcade Games <http://programarcadegames.com/>`_). pyGame can be installed in Thonny (Tools -> Manage Packages), which makes this easy to explore. If the student would like to build something in Python, but wants to explore additional possibilities, you might want to direct them to the `Python Packaging Index <https://pypi.org/>`_, where they can look up more modules that they can install easily in Thonny. I have had students incorporate weather information, flight arrival/departure times, and more using various Python modules. 

Students that are interested in music might be interested in creating a project using `EarSketch <https://earsketch.gatech.edu>`_ (creating music with Python), or `Sonic Pi <http://sonic-pi.net/>`_ (need to learn a new language, but it is relatively simple, and there are easy to follow tutorials).

If you have some very strong students that are looking for a serious challenge, I have had some students work with `Unity <https://unity3d.com/>`_ or `Unreal Engine <https://www.unrealengine.com>`_, but the learning curve is very, very steep. Students have only been successful with these environments, when they have begun the project at least 2 months before the end of the semester.

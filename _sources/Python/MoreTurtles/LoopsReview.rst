.. qnum::
   :prefix: turtle-drawing-loops
   :start: 1


Loops Review and Turtle Drawing 
================================

.. topic:: Quick Overview of Day

    Review ``for`` and ``while`` loops. Work on a Python turtle graphics assignment, focused on repetition and conditionals.


.. reveal:: curriculum_addressed_turtle_drawing_loops
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_turtle_assn_1
    :caption: What will this program print?
    :nocodelens:

    i = 0
    while (i < 5):
        print(i)
        i = i + 1

.. activecode:: wdtpd_turtle_assn_2
    :caption: What will this program print?
    :nocodelens:

    i = 0
    while (i < 5):
        i = i + 1
        print(i)


.. activecode:: wdtpd_turtle_assn_3
    :caption: What will this program print?
    :nocodelens:

    for i in [0,1,2,3,4]:
        print(i)


.. activecode:: wdtpd_turtle_assn_4
    :caption: What will this program output? Be as specific as possible!
    :nocodelens:

    import turtle

    wn = turtle.Screen()
    wn.bgcolor("lightgreen")
    
    alex = turtle.Turtle()
    alex.pensize(3)

    for some_color in ["blue", "red", "orange"]:
        alex.color(some_color)
        alex.forward(200)
        alex.left(120)


Extra Information About Turtles
--------------------------------

Here are a few more things that you might find useful as you write programs that use turtles.

* Turtle methods can use negative angles or distances.  So ``tess.forward(-100)``
  will move tess backwards, and ``tess.left(-30)`` turns her to the right.
  Additionally, because there are 360 degrees in a circle, turning 30 to the
  left will leave you facing in the same direction as turning 330 to the right!
  (The on-screen animation will differ, though --- you will be able to tell if
  tess is turning clockwise or counter-clockwise!)

  This suggests that we don't need both a left and a right turn method --- we
  could be minimalists, and just have one method.  There is also a *backward*
  method.  (If you want to do things the hard way, you might enjoy saying
  ``alex.backward(-100)`` to move alex forward!)

  Part of *thinking like a scientist* is to understand more of the structure
  and rich relationships in your field.  So reviewing a few basic facts about
  geometry and number lines, like we've done here is a good start if we're
  going to play with turtles.

* A turtle's pen can be picked up or put down.  This allows us to move a turtle
  to a different place without drawing a line.   The methods are ``penup`` and ``pendown``.  Note that the methods ``up`` and ``down`` do the same thing.

  .. sourcecode:: python

     alex.penup()
     alex.forward(100)     # this moves alex, but no line is drawn
     alex.pendown()

* Every turtle can have its own shape.  The ones available "out of the box"
  are ``arrow``, ``blank``, ``circle``, ``classic``, ``square``, ``triangle``,
  ``turtle``.

  .. sourcecode:: python

     ...
     alex.shape("turtle")
     ...


* You can speed up or slow down the turtle's animation speed. (Animation
  controls how quickly the turtle turns and moves forward).  Speed settings can
  be set between 1 (slowest) to 10 (fastest).  But if you set the speed to 0,
  it has a special meaning --- turn off animation and go as fast as possible.

  .. sourcecode:: python

     alex.speed(10)

* A turtle can "stamp" its footprint onto the canvas, and this will remain
  after the turtle has moved somewhere else.  Stamping works even when the pen
  is up.

Let's do an example that shows off some of these new features.

.. activecode:: ch03_7
   :nocodelens:

   import turtle

   wn = turtle.Screen()
   wn.bgcolor("lightgreen")

   tess = turtle.Turtle()
   tess.color("blue")
   tess.shape("turtle")

   tess.penup()

   # start with size = 5 and grow by 2
   for size in range(5, 60, 2):
       tess.stamp()
       tess.forward(size)
       tess.right(24)

   wn.exitonclick()


.. note:: Note that if you give a third argument to the ``range(min, max, step)`` function, it acts as the amount to step/increase by.

One more thing to be careful about.  All except one of the shapes you see on the screen here are
footprints created by ``stamp``.  But the program still only has *one* turtle
instance --- can you figure out which one is the real tess?  (Hint: if you're
not sure, write a new line of code after the ``for`` loop to change tess'
color, or to put her pen down and draw a line, or to change her shape, etc.)

Mixed Up Programs
~~~~~~~~~~~~~~~~~

.. parsonsprob:: wdtpd_turtle_assn_parsons_1

    .. image:: images/TurtleCircle.png 
      :width: 150
      :align: left 
      
    The following program uses the stamp method to create a circle of turtle shapes as shown to the left, but the lines are mixed up.  The program should do all necessary set-up, create the turtle, set the shape to "turtle", and pick up the pen.  Then the turtle should repeat the following ten times: go forward 50 pixels, leave a copy of the turtle at the current position, reverse for 50 pixels, and then turn right 36 degrees.  After the loop, set the window to close when the user clicks in it.

    Drag the blocks of statements from the left column to the right column and put them in the right order with the correct indention.  Click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are incorrectly indented. 
    -----
    import turtle
    wn = turtle.Screen()
    jose = turtle.Turtle()
    jose.shape("turtle")
    jose.penup()
    =====                   
    for size in range(10):  
    =====    
      jose.forward(50)
    =====
      jose.stamp()    
    =====      
      jose.forward(-50)
    =====
      jose.right(36)

.. parsonsprob:: wdtpd_turtle_assn_parsons_2
    
  .. image:: images/Turtle3Stamp.png 
      :width: 150
      :align: left 
      
  The following program uses the stamp method to create a line of turtle shapes as shown to the left, but the lines are mixed up.  The program should do all necessary set-up, create the turtle, set the shape to "turtle", and pick up the pen.  Then the turtle should repeat the following three times: go forward 50 pixels and leave a copy of the turtle at the current position.  After the loop, set the window to close when the user clicks in it.

  Drag the blocks of statements from the left column to the right column and put them in the right order with the correct indention.  Click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are incorrectly indented.
  -----
  import turtle
  wn = turtle.Screen()
  =====
  nikea = turtle.Turtle()
  =====
  nikea.shape("turtle")
  =====
  nikea.penup()
  =====                   
  for size in range(3):  
  =====    
    nikea.forward(50)
  =====
    nikea.stamp()


.. index:: turtle methods

.. _turtle_methods_list:

Summary of Turtle Methods
-------------------------

==========  ==========  =========================
Method      Parameters  Description
==========  ==========  =========================
Turtle      None          Creates and returns a new turtle object
forward     distance      Moves the turtle forward
backward    distance      Moves the turle backward
right       angle         Turns the turtle clockwise
left        angle         Turns the turtle counter clockwise
penup       None          Picks up the turtles tail
pendown     None          Puts down the turtles tail
color       color name    Changes the color of the turtle's tail
fillcolor   color name    Changes the color of the turtle will use to fill a polygon
heading     None          Returns the current heading
position    None          Returns the current position
xcor        None          Return the current x coordinate
ycor        None          Return the current y coordinate
goto        x,y           Move the turtle to position x,y
begin_fill  None          Remember the starting point for a filled polygon
end_fill    None          Close the polygon and fill with the current fill color
dot         None          Leave a dot at the current position
stamp       None          Leaves an impression of a turtle shape at the current location
shape       shape name    Should be 'arrow', 'classic', 'turtle', 'circle' or 'square'
==========  ==========  =========================

As we have seen previously, you can read about even more options on the `Python Docs Website <http://docs.python.org/dev/py3k/library/turtle.html>`_.  

Practice Problems
------------------

Hollow C
~~~~~~~~~

.. image:: images/confusion-4.png

Let's draw the image three different ways:

- using any commands that you like
- using only the ``.forward()`` and ``.right()`` commands
- using ``.forward()``, ``.backward()``, and ``.right(90)`` (note that you may use 90, and only 90, as the argument to the ``.right()`` command for this solution)

.. note:: Getting a solution to this problem is great, but consider whether you have chosen the most *elegant* solution you can. After you have completed your solution, it might be a good idea to compare your solution with what your classmates came up with.

.. activecode:: hollow_c_practice_problem
    :nocodelens:
    :enabledownload:

    import turtle


Open Ended Drawing
~~~~~~~~~~~~~~~~~~~~

Create a Python program that uses the turtle module, and draws something cool. The sky is the limit on what you can draw. There are a couple things you need to make sure you do, though:

- use at least two for or while loops
- use at least one if/elif/else block
- utilize multiple colours
  
Other than that, surprise me with your creativity!

**Extras for Experts (things to try if you finish before your classmates)**

- use the Micro:bit to control your program is some way. Perhaps pressing the *a* button draws something different than the *b* button. Maybe tilting the Micro:bit makes different things happen. Be creative!
- You may want to investigate controlling your turtle with keyboard commands. See `this section of the Python Docs Reference <http://docs.python.org/dev/py3k/library/turtle.html#using-screen-events>`_ 
- use other features of the turtle module by exploring the `Python Docs for turtle <http://docs.python.org/dev/py3k/library/turtle.html>`_

.. activecode:: open_ended_drawing_practice_problem
    :nocodelens:
    :enabledownload:

    import turtle
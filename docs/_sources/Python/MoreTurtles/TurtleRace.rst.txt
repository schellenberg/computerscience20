.. qnum::
   :prefix: turtle-race
   :start: 1

.. _turtle_races:

Turtle Races
=============

.. topic:: Quick Overview of Day

    Use what you know about turtles so far to simulate a basic race between two turtles. If time, may choose to turn this into an interactive game, by controlling the turtles with the micro:bit.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.

Random Numbers
--------------

Before we begin writing code for this lab, we need to introduce one more
Python module.  The ``random`` module allows us to generate random numbers. It has been used in a few places earlier in the text, so you might already feel comfortable with it.
It's easy to use:

.. activecode:: lab01_1
   :nocanvas:

   import random
   number = random.randrange(1,10)
   print(number)

The ``randrange`` function, as called in the example above, generates a random
number from 1 to 9. Even though we passed in 1,10 the randrange function works just like the *range*
function when it comes to starting and stopping points. In other words, the randrange function will start at 1, and go *up to but not including 10*. If you run the
program over and over again you should see that each time you run it a
different number is generated.  Random numbers are the basis of all kinds of
interesting programs we can write, and the ``randrange`` function is just one
of many functions available in the random module.

Turtle Race with a For Loop
----------------------------

In this lab we are going to work step by step through the problem of racing
turtles.  The idea is that we want to create two or more turtles and have
them race across the screen from left to right. For the first version of the race, the turtle that goes the farthest is the winner.

There are several different, and equally plausible, solutions to this problem.
Let's look at what needs to be done, and then look at some of the options for
the solution.  To start, let's think about a solution to the simplest form
of the problem, a race between two turtles. We'll look at more complex races
later.  

When you are faced with a problem like this in computer science it is
often a good idea to find a solution to a simple problem first and then
figure out how to make the solution more general.

Here is a possible sequence of steps that we will need to accomplish:

#. Import the modules we need

#. Create a screen

#. Create two turtles

#. Move the turtles to their starting positions

#. Send them moving across the screen

Here is the Python code for the first 4 steps above

.. activecode:: turtle_races_1
   :nocodelens:

   import turtle
   import random

   window = turtle.Screen()
   window.bgcolor('lightblue')

   #create the turtles, and specify their attributes
   lance = turtle.Turtle()
   andy = turtle.Turtle()
   lance.color('red')
   andy.color('blue')
   lance.shape('turtle')
   andy.shape('turtle')

   # move the turtles to their starting locations
   andy.penup()
   lance.penup()
   andy.goto(-100,20)
   lance.goto(-100,-20)

   # your code goes here



Now, you have several choices for how to fill in code for step 5. Here are
some possibilities to try.  Try coding each of the following in the box above
to see the different kinds of behavior.

* Use a single call to ``forward`` for each turtle, using a random number as
  the distance to move.

* Create a for loop, using a random number for the argument passed to the
  range function.  Inside the for loop move one of the turtles forward by
  some number of units.

* Create a single for loop using something like ``range(150)`` or ``range(200)``. Then inside the for loop move each turtle forward using a random number as the argument to forward.


So, which of these programs is better?  Which of these programs is most
correct?  These are excellent questions. Program 1 is certainly the simplest,
but it isn't very satisfying as far as a race is concerned.  Each turtle
simply moves their distance on their turn.  That is not very satisfying as far
as a simulated race goes.  Program 2 ends up looking a lot like Program 1
when you run it.  Program 3 is probably the most 'realistic' assuming realism
is very important when we're talking about a simulated race of virtual
turtles.

You may be thinking why can't each turtle just move forward until they cross
some artificial finish line?  Good question!  In order to make that happen, we'll need to use a **while loop** and ask about the turtles coordinates.

Turtle Race with a While Loop
-----------------------------

As we've seen before, we can ask a turtle about it's current x or y coordinate using the ``turtle_name.xcor()`` and ``turtle_name.ycor()`` functions. Consider the following example:

.. activecode:: turtle_races_2
    :nocodelens:

    import turtle

    window = turtle.Screen()

    lance = turtle.Turtle()
    lance.shape('turtle')

    # move the turtles to their starting locations
    print(lance.xcor())
    print(lance.ycor())
    
    print()
    lance.forward(100)
    
    print(lance.xcor())
    print(lance.ycor())


Use the ``xcor()`` function to write a version of the turtle race that has the turtles stop after they reach a virtual finish line. *You might want to create a third turtle that draws a finish line before the race begins.*  You will want to recall the logical operators we have studied: specifically, ``and`` and ``or``.


.. activecode:: turtle_races_3
   :nocodelens:

   import turtle
   import random

   window = turtle.Screen()
   window.bgcolor('lightblue')

   #create the turtles, and specify their attributes
   lance = turtle.Turtle()
   andy = turtle.Turtle()
   lance.color('red')
   andy.color('blue')
   lance.shape('turtle')
   andy.shape('turtle')

   # move the turtles to their starting locations
   andy.up()
   lance.up()
   andy.goto(-100,20)
   lance.goto(-100,-20)

   # your code goes here


.. note::  After you get the program working, you should try switching your while conditional statement to use ``and`` instead of ``or``. Can you predict what the program will do?


Assignment Work Time
---------------------

Continue working on your most recent assignment (possibly a turtle graphics assignment focused on loops and conditionals).

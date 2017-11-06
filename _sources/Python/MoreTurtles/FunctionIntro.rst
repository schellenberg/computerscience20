
.. qnum::
   :prefix: turtle-functions-intro
   :start: 1


Functions Introduction
================================

.. topic:: Quick Overview of Day

    Use ``for`` loops to draw shapes elegantly. Introduce non-fruitful functions in Python. Continue working on a Python turtle graphics assignment, focused on repetition and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


Practice Problem
-----------------

.. image:: images/confusion-5.png

Draw the shape above. After you have finished drawing your version, share your code with another student. Work together to see if you can come up with a more efficient way to draw this shape!

.. activecode:: turtle_confusion_4
    :nocodelens:

    import turtle


Functions
---------

In Python, a **function** is a named sequence of statements that belong together.  Their primary purpose is to help us organize programs into chunks that match how we think about the solution to the problem.

The syntax for a **function definition** is the same as it was when we wrote functions in Reeborg:

.. code-block:: python

    def name( parameters ):
        statements

The one part of this function definition that looks different from our Reeborg investigations is the parameters inside the parentheses. The parameters specify what information, if any, you have to provide in order to use the new function.  Another way to say this is that the parameters specify what the function needs to do its work.

There can be any number of statements inside the function, but they have to be
indented from the ``def``. In the examples in this book, we will use the
standard indentation of four spaces. 

In a function definition, the keyword in the header is ``def``, which is
followed by the name of the function and some *parameters* enclosed in
parentheses. The parameter list may be empty, or it may contain any number of
parameters separated from one another by commas. In either case, the parentheses are required.

We need to say a bit more about the parameters.  In the definition, the parameter list is more specifically known
as the **formal parameters**.  This list of names describes those things that the function will
need to receive from the user of the function.  When you use a function, you provide values to the formal parameters.

The figure below shows this relationship.  A function needs certain information to do its work.  These values, often called **arguments** or **actual parameters**, are passed to the function by the user.

.. image:: images/blackboxproc.png

This type of diagram is often called a **black-box diagram** because it only states the requirements from the perspective of the user.  The user must know the name of the function and what arguments need to be passed.  The details of how the function works are hidden inside the "black-box".

Suppose we're working with turtles and a common operation we need is to draw
squares.  It would make sense if we did not have to duplicate all the steps each time we want to make a square.   "Draw a square" can be thought of as an *abstraction* of a number of smaller steps.  We will need to provide two pieces of information for the function to do its work: a turtle to do the drawing and a size for the side of the square.  We could represent this using the following black-box diagram.

.. image:: images/turtleproc.png

Here is a program containing a function to capture this idea.  Give it a try.

.. activecode:: functions_intro_1
    :nocodelens:

    import turtle

    def draw_square(some_turtle, side_length):
        """Make turtle some_turtle draw a square, with each side being of length side_length."""

        for counter in range(4):
            some_turtle.forward(side_length)
            some_turtle.left(90)


    # Set up the window and its attributes
    wn = turtle.Screen()
    wn.bgcolor("lightgreen")

    alex = turtle.Turtle()

    # Call the function to draw the square passing the actual turtle and the actual side size
    drawSquare(alex, 50)


This function is named ``draw_square``.  It has two parameters --- one to tell
the function which turtle to move around and the other to tell it the size
of the square we want drawn.  In the function definition they are called ``some_turtle`` and ``side_length`` respectively.   Make sure you know where the body of the function ends --- it depends on the indentation and the blank lines don't count for
this purpose!

.. admonition::  docstrings

    If the first thing after the function header is a string (some tools insist that
    it must be a triple-quoted string), it is called a **docstring**
    and gets special treatment in Python and in some of the programming tools.

    Another way to retrieve this information is to use the interactive
    interpreter, and enter the expression ``<function_name>.__doc__``, which will retrieve the
    docstring for the function.  So the string you write as documentation at the start of a function is
    retrievable by python tools *at runtime*.  This is different from comments in your code,
    which are completely eliminated when the program is parsed.

    By convention, Python programmers use docstrings for the key documentation of
    their functions.


Defining a new function does not make the function run. To do that we need a
**function call**.  This is also known as a **function invocation**. We've already seen how to call some built-in functions like
``print``, ``range`` and ``int``. Function calls contain the name of the function to be
executed followed by a list of values in parentheses, called *arguments*, which are assigned
to the parameters in the function definition.  
So in the  last line of the program, we call the function, and pass ``alex`` as the turtle to be manipulated,
and 50 as the size of the square we want.  

Once we've defined a function, we can call it as often as we like and its
statements will be executed each time we call it.  In this case, we could use it to get
one of our turtles to draw a square and then we can move the turtle and have it draw a different square in a
different location.  Note that we lift the tail so that when ``alex`` moves there is no trace.  We put the tail
back down before drawing the next square.  Make sure you can identify both invocations of the ``draw_square`` function.

.. activecode:: functions_intro_2
    :nocodelens:

    import turtle

    def draw_square(some_turtle, side_length):
        """Make turtle some_turtle draw a square, with each side being of length side_length."""

        for counter in range(4):
            some_turtle.forward(side_length)
            some_turtle.left(90)


    # Set up the window and its attributes
    wn = turtle.Screen()
    wn.bgcolor("lightgreen")

    alex = turtle.Turtle()

    # Call the function to draw the square
    draw_square(alex, 50)

    alex.penup()
    alex.goto(100,100)
    alex.pendown()

    # Draw another square
    draw_square(alex,75)

In the next example, we've changed the ``draw_square``
function a little and we get ``tess`` to draw 15 squares with some variations.  Once the function has
been defined, we can call it as many times as we like with whatever actual parameters we like.

.. activecode:: functions_intro_3
    :nocodelens:

    import turtle

    def draw_multicolor_square(some_turtle, side_length):
        """Make turtle some_turtle draw a multi-colour square with the given side_length."""
        for the_color in ['red','purple','hotpink','blue']:
            some_turtle.color(the_color)
            some_turtle.forward(side_length)
            some_turtle.left(90)

    # Set up the window and its attributes
    wn = turtle.Screen()
    wn.bgcolor("lightgreen")

    # create tess and set some attributes
    tess = turtle.Turtle()
    tess.pensize(3)

    # size of the smallest square
    size = 20

    # repeatedly draw a square, increase the size, move a bit, turn a bit
    for i in range(15):
        draw_multicolor_square(tess, size)
        size = size + 10
        tess.forward(10)
        tess.right(18)


.. warning::

   Even if a function call needs no arguments, 
   the parentheses ``( )`` after the function name are *required*.  This 
   can lead to a difficult bug:  A function name without the
   parenthesis is a legal expression *referring* to the function; for example,  
   ``print`` and ``alex.penup``, but they do 
   not *call* the associated functions.


Check your understanding
~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: functions_intro_understanding_1
   :answer_a: def draw_circle(t):
   :answer_b: def draw_circle:
   :answer_c: draw_circle(t, sz):
   :answer_d: def draw_circle(t, sz)
   :correct: a
   :feedback_a: A function may take zero or more parameters.  It does not have to have two.  In this case the size of the circle might be specified in the body of the function.
   :feedback_b: A function needs to specify its parameters in its header.
   :feedback_c: A function definition needs to include the keyword def.
   :feedback_d: A function definition header must end in a colon (:).

   Which of the following is a valid function header (first line of a function definition)?


.. mchoice:: functions_intro_understanding_2
   :answer_a: i
   :answer_b: t
   :answer_c: t, sz
   :answer_d: t, sz, i
   :correct: c
   :feedback_a: i is a variable used inside of the function, but not a parameter, which is passed in to the function.
   :feedback_b: t is only one of the parameters to this function.
   :feedback_c: Yes, the function specifies two parameters: t and sz.
   :feedback_d: the parameters include only those variables whose values that the function expects to receive as input.  They are specified in the header of the function.

   What are the parameters of the following function?

   .. code-block:: python

     def draw_square(t, sz):
         """Make turtle t draw a square of with side sz."""
         for i in range(4):
             t.forward(sz)
             t.left(90)



.. mchoice:: functions_intro_understanding_3
   :answer_a: def draw_square(t, sz)
   :answer_b: draw_square
   :answer_c: draw_square(10)
   :answer_d: draw_Square(alex, 10):
   :answer_e: draw_square(alex, 10)
   :correct: e
   :feedback_a: No, t and sz are the names of the formal parameters to this function.  When the function is called, it requires actual values to be passed in.
   :feedback_b: A function call always requires parentheses after the name of the function.
   :feedback_c: This function takes two parameters (arguments)
   :feedback_d: A colon is only required in a function definition.  It will cause an error with a function call.
   :feedback_e: Since alex was already previously defined and 10 is a value, we have passed in two correct values for this function.

   Considering the function below, which of the following statements correctly invokes, or calls, this function (i.e., causes it to run)?  Assume we already have a turtle named alex.

   .. code-block:: python

     def draw_square(t, sz):
         """Make turtle t draw a square of with side sz."""
         for i in range(4):
             t.forward(sz)
             t.left(90)

.. mchoice:: functions_intro_understanding_4
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Yes, you can call a function multiple times by putting the call in a loop.
   :feedback_b: One of the purposes of a function is to allow you to call it more than once.   Placing it in a loop allows it to executed multiple times as the body of the loop runs multiple times.

   True or false: A function can be called several times by placing a function call in the body of a loop.


Practice Problems
-------------------

Cross
~~~~~~

.. image:: images/confusion-5.png

Convert the code you wrote at the start of today's class into a function. You should be able to call something like ``draw_cross(some_turtle, side_length)``.


Hollow C
~~~~~~~~~

.. image:: images/confusion-4.png

Look back to the code you made when you drew a *hollow c* last class. Adapt your code by creating a function called ``draw_c(a_turtle, longest_side_length, width_of_c)``. You should be able to draw a hollow c by calling the function with something like ``draw_c(tess, 150, 25)``.


Turtle Graphics Assignment
---------------------------

Use the rest of this class time to keep working on your current Python assignment (possibly a turtle graphics drawing, with a focus on looping and conditionals).

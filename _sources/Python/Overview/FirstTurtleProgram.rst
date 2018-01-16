
.. qnum::
   :prefix: turtle-intro-
   :start: 1

Our First Turtle Program
=========================

.. topic:: Quick Overview of Day

    Learn how to do basic drawing in Python using the turtle module.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.

There are many *modules* in Python that provide very powerful features that we
can use in our own programs.  Some of these can send email or fetch web pages. Others allow us to perform complex mathematical calculations. We have already used one module, called ``appJar``, which allowed us to use pop-up windows when asking for user input. Today, we will introduce a module that allows us to create a data object called a **turtle** that can be used to draw pictures. *The turtle module is very similar to the Pen functionality that we explored using Scratch!* Note that the ``turtle`` module is part of the standard Python installation, so you do not need to install it before using it.

Turtle graphics, as it is known, is based on a very simple
metaphor. Imagine that you have a turtle that understands English.  You can
tell your turtle to do simple commands such as go forward and turn right.  As the turtle
moves around, if its tail is down touching the ground, it will
draw a line (leave a trail behind) as it moves.  If you tell your turtle to lift up its tail it can still move around but will not leave a trail.  As you will see, you can make
some pretty amazing drawings with this simple capability. 

Let's try a couple of lines of Python code to create a new turtle and start drawing a simple figure like a rectangle. We will refer to our first turtle using the variable name ``alex``, but remember that you can choose any name you wish as long as you follow the naming rules from the previous chapter.

The program as shown will only draw the first two sides of the rectangle.
After line 4 you will have a straight line going from the center of the
drawing canvas towards the right.  After line 6, you will have a canvas with a
turtle and a half drawn rectangle.  Press the run button to try it and see.

.. activecode:: turtle_intro_1
    :nocodelens:

    import turtle            	# allows us to use the turtles library
    window = turtle.Screen()    # creates a graphics window
    alex = turtle.Turtle()   	# create a turtle named alex
    alex.forward(150)        	# tell alex to move forward by 150 units
    alex.left(90)           	# turn by 90 degrees
    alex.forward(75)         	# complete the second side of a rectangle


.. admonition:: **Try This!**

    Modify the program above by adding the commands necessary to have *alex* complete the rectangle. 


Understanding a Turtle Program
-------------------------------

Here are a couple of things you'll need to understand about the turtle program we wrote above.

The first line tells Python to load a **module** named ``turtle``.  That module
brings us two new types that we can use: the ``Turtle`` type, and the
``Screen`` type.  The dot notation ``turtle.Turtle`` means *"The Turtle type
that is defined within the turtle module"*.   (Remember that Python is case
sensitive, so the module name, ``turtle``, with a lowercase `t`, is different from the type
``Turtle`` because of the uppercase `T`.)

We then create and open what the turtle module calls a screen (we would
prefer to call it a window, or in the case of this web version of Python
simply a canvas), which we assign to variable ``window``. Every window
contains a **canvas**, which is the area inside the window on which we can draw.

In line 3 we create a turtle. The variable ``alex`` is made to refer to this
turtle.   These first three lines set us up so that we are ready to do some drawing.

In lines 4-6, we instruct the **object** ``alex`` to move and to turn. We do this
by **invoking** or activating alex's **methods** --- these are the
instructions that all turtles know how to respond to.  Here the dot indicates that
the methods invoked belong to and refer to the object ``alex``.


**Check your understanding**

.. mchoice:: turtle_intro_check_1
   :answer_a: North
   :answer_b: South
   :answer_c: East 
   :answer_d: West
   :correct: c
   :feedback_a: Some turtle systems start with the turtle facing north, but not this one.
   :feedback_b: No, look at the first example with a turtle.  Which direction does the turtle move?
   :feedback_c: Yes, the turtle starts out facing east.
   :feedback_d: No, look at the first example with a turtle.  Which direction does the turtle move?

   Which direction does the Turtle face when it is created?


Mixed Up Programs
~~~~~~~~~~~~~~~~~~

.. parsonsprob:: turtle_intro_parsons_1

   The following program uses a turtle to draw a capital L as shown in the picture, <img src="../../_static/parsons/TurtleL4.png" width="150" align="left" hspace="10" vspace="5" /> but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the window to draw on, and create the turtle.  Remember that the turtle starts off facing east when it is created.  The turtle should turn to face south and draw a line that is 150 pixels long and then turn to face east and draw a line that is 75 pixels long.  We have added a compass to the picture to indicate the directions north, south, west, and east.  <br /><br /><p>Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order.</p>
   -----
   import turtle
   window = turtle.Screen()
   ella = turtle.Turtle()
   =====
   ella.right(90)
   ella.forward(150)
   =====
   ella.left(90)
   ella.forward(75)


.. parsonsprob:: turtle_intro_parsons_2

   The following program uses a turtle to draw a checkmark as shown to the left, <img src="../../_static/parsons/TurtleCheckmark4.png" width="150" align="left" hspace="10" vspace="5" /> but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the window to draw on, and create the turtle.  The turtle should turn to face southeast, draw a line that is 75 pixels long, then turn to face northeast, and draw a line that is 150 pixels long.  We have added a compass to the picture to indicate the directions north, south, west, and east.  Northeast is between north and east. Southeast is between south and east. <br /><br /><p>Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order.</p>
   -----
   import turtle
   =====
   window = turtle.Screen()
   =====
   maria = turtle.Turtle()
   =====
   maria.right(45)
   maria.forward(75)
   =====
   maria.left(90)
   maria.forward(150)

.. parsonsprob:: turtle_intro_parsons_3

   The <img src="../../_static/parsons/TurtleLineToWest.png" width="150" align="left" hspace="10" vspace="5" /> following program uses a turtle to draw a single line to the west as shown to the left, but the program lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the window to draw on, and create the turtle.  The turtle should then turn to face west and draw a line that is 75 pixels long.<br /><br /><p>Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order.</p>
   -----
   import turtle
   window = turtle.Screen()
   jamal = turtle.Turtle()
   jamal.left(180)
   jamal.forward(75)

Turtle Methods
---------------

An object can have various methods --- things it can do --- and it can also
have **attributes** --- (sometimes called *properties*).  For example, each
turtle has a *color* attribute.  The method invocation  ``alex.color("red")``
will make alex red and the line that it draws will be red too.

The color of the turtle, the width of its pen(tail), the position of the turtle
within the window, which way it is facing, and so on are all part of its
current **state**.   Similarly, the window object has a background color which is part of its state.

Quite a number of methods exist that allow us to modify the turtle and
window objects.  In the example below, we show just show a couple and have only commented those
lines that are different from the previous example.  Note also that we have decided to call our turtle object *tess*, and have changed the name of the Screen object to be *wn*.

.. activecode:: turtle_intro_2
    :nocodelens:
    
    import turtle

    wn = turtle.Screen()
    wn.bgcolor("lightgreen")        # set the window background color

    tess = turtle.Turtle()
    tess.color("blue")              # make tess blue
    tess.pensize(3)                 # set the width of her pen

    tess.forward(50)
    tess.left(120)
    tess.forward(50)

    wn.exitonclick()                # wait for a user click on the canvas


The last line plays a very important role. The *wn* variable refers to the window shown
above. When we invoke its ``exitonclick`` method, the program pauses execution and waits for the user to click the mouse somewhere in the window.
When this click event occurs, the response is to close the turtle window and
exit (stop execution of) the Python program.

Each time we run this program, a new drawing window pops up, and will remain on the
screen until we click on it.


Check your understanding
-------------------------

.. mchoice:: turtle_intro_check_2
   :answer_a: It creates a new turtle object that can be used for drawing.
   :answer_b: It defines the module turtle which will allow you to create a Turtle object and draw with it.
   :answer_c: It makes the turtle draw half of a rectangle on the screen.
   :answer_d: Nothing, it is unnecessary.
   :correct: b
   :feedback_a: The line &quotalex = turtle.Turtle()&quot is what actually creates the turtle object.
   :feedback_b: This line imports the module called turtle, which has all the built in functions for drawing on the screen with the Turtle object.
   :feedback_c: This functionality is performed with the lines: &quotalex.forward(150)&quot, &quotlex.left(90)&quot, and &quotalex.forward(75)&quot
   :feedback_d: If we leave it out, Python will give an error saying that it does not know about the name &quotturtle&quot when it reaches the line &quotwn = turtle.Screen()&quot

   Consider the following code:

   .. code-block:: python

     import turtle
     wn = turtle.Screen()
     alex = turtle.Turtle()
     alex.forward(150)
     alex.left(90)
     alex.forward(75)

   What does the line "import turtle" do?

.. mchoice:: turtle_intro_check_3
   :answer_a: This is simply for clarity.  It would also work to just type "Turtle()" instead of "turtle.Turtle()".
   :answer_b: The period (.) is what tells Python that we want to invoke a new object.
   :answer_c: The first "turtle" (before the period) tells Python that we are referring to the turtle module, which is where the object "Turtle" is found.
   :correct: c
   :feedback_a: We must specify the name of the module where Python can find the Turtle object.
   :feedback_b: The period separates the module name from the object name.  The parentheses at the end are what tell Python to invoke a new object.
   :feedback_c: Yes, the Turtle type is defined in the module turtle.  Remember that Python is case sensitive and Turtle is different from turtle.

   Why do we type ``turtle.Turtle()`` to get a new Turtle object?

.. mchoice:: turtle_intro_check_4
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: In this chapter you saw one named alex and one named tess, but any legal variable name is allowed.
   :feedback_b: A variable, including one referring to a Turtle object, can have whatever name you choose as long as it follows the naming conventions from Chapter 2.

   True or False: A Turtle object can have any name that follows the naming rules from Chapter 2.

.. mchoice:: turtle_intro_check_5
   :answer_a: <img src="../../_static/parsons/test1Alt1.png" alt="right turn of 90 degrees before drawing, draw a line 150 pixels long, turn left 90, and draw a line 75 pixels long">
   :answer_b: <img src="../../_static/parsons/test1Alt2.png" alt="left turn of 180 degrees before drawing,  draw a line 150 pixels long, turn left 90, and draw a line 75 pixels long">
   :answer_c: <img src="../../_static/parsons/test1Alt3.png" alt="left turn of 270 degrees before drawing,  draw a line 150 pixels long, turn left 90, and draw a line 75 pixels long">
   :answer_d: <img src="../../_static/parsons/test1Alt4v2.png" alt="right turn of 270 degrees before drawing, draw a line 150 pixels long, turn right 90, and draw a line 75 pixels long">
   :answer_e: <img src="../../_static/parsons/test1correct.png" alt="left turn of 90 degrees before drawing,  draw a line 150 pixels long, turn left 90, and draw a line 75 pixels long">
   :correct: e
   :feedback_a: This code would turn the turtle to the south before drawing
   :feedback_b: This code would turn the turtle to the west before drawing
   :feedback_c: This code would turn the turtle to the south before drawing
   :feedback_d: This code is almost correct, but the short end would be facing east instead of west.  
   :feedback_e: Yes, the turtle starts facing east, so to turn it north you can turn left 90 or right 270 degrees.

   Which of the following code would produce the following image? 

   .. image:: images/turtleTest1.png
      :alt: long line to north with shorter line to west on top
      :width: 150px

More Mixed Up Programs!
------------------------

.. parsonsprob:: turtle_intro_parsons_4

   The following program uses a turtle to draw a capital L in white on a blue background as shown to the left, <img src="../../_static/parsons/BlueTurtleL.png" width="150" align="left" hspace="10" vspace="5" /> but the lines are mixed up.  The program should do all necessary set-up and create the turtle and set the pen size to 10.  The turtle should then turn to face south, draw a line that is 150 pixels long, turn to face east, and draw a line that is 75 pixels long.   Finally, set the window to close when the user clicks in it.<br /><br /><p>Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order.</p>
   -----
   import turtle
   wn = turtle.Screen()
   =====
   wn.bgcolor("blue")     	
   jamal = turtle.Turtle()
   =====
   jamal.color("white")               	
   jamal.pensize(10) 
   =====                
   jamal.right(90)
   jamal.forward(150)
   ===== 
   jamal.left(90)
   jamal.forward(75)
   wn.exitonclick()

.. parsonsprob:: turtle_intro_parsons_5

   The following program uses a turtle to draw a capital T in white on a green background as shown to the left, <img src="../../_static/parsons/TurtleT.png" width="150" align="left" hspace="10" vspace="5"/> but the lines are mixed up.  The program should do all necessary set-up, create the turtle, and set the pen size to 10.  After that the turtle should turn to face north, draw a line that is 150 pixels long, turn to face west, and draw a line that is 50 pixels long.  Next, the turtle should turn 180 degrees and draw a line that is 100 pixels long.  Finally, set the window to close when the user clicks in it.<br /><br /><p>Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order.</p>  
   -----
   import turtle
   wn = turtle.Screen()
   wn.bgcolor("green")     	
   jamal = turtle.Turtle()
   jamal.color("white")               	
   jamal.pensize(10) 
   =====                
   jamal.left(90)
   jamal.forward(150)
   =====
   jamal.left(90)
   jamal.forward(50)
   =====
   jamal.right(180)
   jamal.forward(100)
   =====
   wn.exitonclick()


Practice Problems
------------------

Try the following practice problems. You can either work directly in the textbook, or using Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish!

You might find the Python Documentation for the turtle module to be helpful: `https://docs.python.org/3/library/turtle.html <https://docs.python.org/3/library/turtle.html>`_ 


.. caution::

   Be sure that you DO NOT save any file as ``turtle.py``. If you do, when you call ``import turtle``, Python looks for a file called turtle.py, which means that it will import the turtle.py file you just saved. You will get an error when attempting to create a Screen() or Turtle() object, as these will not actually be defined.


Color Selection
~~~~~~~~~~~~~~~~~~~~~~~~~

Modify the program given below so that before it creates the window, it prompts the user to enter the desired background color. It should store the user's response in a variable, and modify the color of the window according to the user's wishes. Do similar changes to allow the user to set the turtle bree's color as well.

(Hint: you can find a list of permitted color names at `https://www.w3schools.com/colors/colors_names.asp <https://www.w3schools.com/colors/colors_names.asp>`_ .  It includes some quite unusual ones, like "PeachPuff" and "HotPink".)

.. note:: 
    If you are running your code in Thonny, the order of your instructions matters a lot, since a window will open up in front of the main Thonny window (whereas in the browser, the window is just a canvas on the webpage). You might want to ask the user questions *before* creating a Screen() to draw on. Although you can use something like ``appJar`` to ask the questions with pop-up windows, there is also a ``screen.textinput("Window name", "Question to ask")`` function built into the turtle module that will cause a pop-up window to appear. You need to use the name of your turtle.Screen() instance when calling the ``textinput`` function. For example::
      
      canvas = turtle.Screen()
      question = canvas.textinput("Window name", "Question to ask")

    Be aware, however, that the ``textinput()`` function will not work in the browser version of Python.

.. activecode:: practice_problem_turtle_intro_1
    :nocodelens:

    # Color Selection

    import turtle

    # create window, and set it's color
    canvas = turtle.Screen()
    canvas.bgcolor("lightgreen")        

    #create the turtle, and it's attributes
    bree = turtle.Turtle()
    bree.color("blue")
    bree.pensize(3)

    #draw!
    bree.forward(100)
    bree.right(60)
    bree.forward(100)

**Do not look** at this sample solution unless you have already finished creating your own solution!

.. reveal:: reveal_solution_practice_problem_turtle_intro_1
    :showtitle: Reveal Solution
    :hidetitle: Hide Solution

    The following solution will work well in the browser, where a text input box appears automatically when you call the ``input()`` function::

      # Color Selection

      import turtle

      # create window, and set it's color
      canvas = turtle.Screen()
      the_background_color = input("Please enter a background color: ")
      canvas.bgcolor(the_background_color)

      #create the turtle, and it's attributes
      bree = turtle.Turtle()
      brees_color = input("Please enter the color of the turtle: ")
      bree.color(brees_color)
      bree.pensize(3)

      #draw!
      bree.forward(100)
      bree.right(60)
      bree.forward(100)

    If you are using Thonny to create your solution, you will likely want to use the ``screen.textinput("window name", "question to ask")`` function when asking for user input. Here is a version that does that::

      # Color Selection

      import turtle

      # create window, and set it's color
      canvas = turtle.Screen()
      the_background_color = canvas.textinput("Color", "Please enter a background color: ")
      canvas.bgcolor(the_background_color)

      #create the turtle, and it's attributes
      bree = turtle.Turtle()
      brees_color = canvas.textinput("Color", "Please enter the color of the turtle: ")
      bree.color(brees_color)
      bree.pensize(3)

      #draw!
      bree.forward(100)
      bree.right(60)
      bree.forward(100)


Drawing any Size of Square
~~~~~~~~~~~~~~~~~~~~~~~~~~

Create a program that uses the turtle module to draw a square. The user should be able to set a number of options each time the code runs, so the program should ask the user for: 

-  the width of the turtles pen
-  the turtle color
-  the length of the sides of the square that will be drawn
-  the background color to use
   
*Hint:* your input from the user will return a string, but the turtles ``pensize`` method expects its argument to be an ``int``.  That means you need to convert the string to an int before you pass it to ``pensize``.

.. activecode:: practice_problem_turtle_intro_1
    :nocodelens:

    # Color Selection

    import turtle

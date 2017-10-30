
.. qnum::
   :prefix: turtle-intro-
   :start: 1

Multiple Turtles, and Repeating Instructions
=============================================




Practice Problems
------------------

Try the following practice problems. You can either work directly in the textbook, or using Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish!

**You might find the Python Documentation for the turtle module to be helpful: https://docs.python.org/3/library/turtle.html**


Color Selection
~~~~~~~~~~~~~~~~~~~~~~~~~

Modify the program given below so that before it creates the window, it prompts the user to enter the desired background color. It should store the user's response in a variable, and modify the color of the window according to the user's wishes. Do similar changes to allow the user to set the turtle bree's color as well.

*(Hint: you can find a list of permitted color names at https://www.w3schools.com/colors/colors_names.asp.  It includes some quite unusual ones, like "PeachPuff" and "HotPink".)*
   
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

.. qnum::
   :prefix: lists-and-turtles
   :start: 1

Lists and Turtle Drawing
=========================

.. topic:: Quick Overview of Day

    Use lists while moving turtles.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.




Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~


.. mchoice:: test_question_turtle_lists_1
    :answer_a: Option 1
    :answer_b: Option 2
    :answer_c: Option 3
    :answer_d: Error, will not run.
    :correct: a
    :feedback_a: Nice!
    :feedback_b: Try again.
    :feedback_c: Try again.
    :feedback_d: Try again.
   
    What will be the result of the following code being executed?
   
    .. code-block:: python

        import turtle

        def draw_thing(some_turtle, tasks):
            for value in tasks:
                some_turtle.forward(value)
                some_turtle.stamp()
                some_turtle.backward(value)
                some_turtle.right(30)

        window = turtle.Screen()
        bob = turtle.Turtle()

        my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
        draw_thing(bob, my_list)


    .. image:: images/turtle-list-options.png
    
    

.. mchoice:: test_question_turtle_lists_2
    :answer_a: Option 1
    :answer_b: Option 2
    :answer_c: Option 3
    :answer_d: Error, will not run.
    :correct: b
    :feedback_a: Try again.
    :feedback_b: Nice!
    :feedback_c: Try again.
    :feedback_d: Try again.
   
    What will be the result of the following code being executed?
   
    .. code-block:: python

        import turtle

        def draw_thing(some_turtle, tasks):
            for value in tasks:
                some_turtle.forward(value)
                some_turtle.stamp()
                some_turtle.right(30)

        window = turtle.Screen()
        bob = turtle.Turtle()

        my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
        draw_thing(bob, my_list)


    .. image:: images/turtle-list-options.png


Turtle Coordinate List
------------------------

Recall that you can use ``in`` to check for membership in a list as follows:

.. activecode:: turtle_coordinates_1

    some_list = [42, 5, 12, 99, 23]
    print(99 in some_list)

If a portion of your list is *itself a list*, you need to check for the entire sublist when using ``in``.

.. activecode:: turtle_coordinates_2

    some_list = [42, 5, [12, 99], 23]
    print(99 in some_list)          # False
    print([12, 99] in some_list)    # True


Consider the following:

.. activecode:: turtle_coordinates_3

    import turtle
    import random

    window = turtle.Screen()
    jennifer = turtle.Turtle()

    history = [[0, 0]]

    while True:
        # randomly turn either left or right
        number = random.randrange(1, 101)
        if number < 50:
            jennifer.left(90)
        else:
            jennifer.right(90)

        # move forward by 10 steps
        jennifer.forward(10)

        # since the turtle module stores coordinates as a float,
        #   we convert them to an integer before storing the coordinates
        x = int(round(jennifer.xcor()))
        y = int(round(jennifer.ycor()))
        
        current_spot = [x, y]
        
        # check if the turtle has been here before
        if current_spot in history:
            # we've been to this location before, so end the while True loop
            break
        else:
            # add the current location to the list of where we've been
            history.append(current_spot)
            
    print("Done. Places jennifer walked are:")
    print(history)



The Return of L-Systems
-----------------------

Let's return to the L-systems we introduced in the previous chapter and
introduce a very interesting new feature that requires the use of lists.

Suppose we have the following grammar::

    X
    X --> F[-X]+X
    F --> FF

This L-system looks very similar to the old L-system except that we've added
one change.  We've added the characters '[' and ']'.  The meaning of these
characters adds a very interesting new dimension to our L-Systems.  The '['
character indicates that we want to save the state of our turtle,
namely its position and its heading so that we can come back to this position
later.  The ']' tells the turtle to warp to the most recently saved position.
The way that we will accomplish this is to use lists.  We can save the
heading and position of the turtle as a list of 3 elements.  ``[heading x
y]``  The first index position in the list holds the heading,
the second index position in the list holds the x coordinate,
and the third index position holds the y coordinate.

Now, if we create an empty list and every time we see a '[' we append the
list that contains ``[heading, x, y]`` we create a history of saved places
the turtle has been where the most recently saved location will always be at
the end of the list.  When we find a ']' in the string we use the pop
function to remove the the most recently appended information.

Let's modify our ``drawLsystem`` function to begin to implement this new
behavior.

.. activecode:: list_lsys1
    :nocodelens:

    import turtle

    def drawLsystem(aTurtle, instructions, angle, distance):
        savedInfoList = []
        for cmd in instructions:
            if cmd == 'F':
                aTurtle.forward(distance)
            elif cmd == 'B':
                aTurtle.backward(distance)
            elif cmd == '+':
                aTurtle.right(angle)
            elif cmd == '-':
                aTurtle.left(angle)
            elif cmd == '[':
                savedInfoList.append([aTurtle.heading(), aTurtle.xcor(), aTurtle.ycor()])
                print(savedInfoList)
            elif cmd == ']':
                newInfo = savedInfoList.pop()
                print(newInfo)
                print(savedInfoList)

    t = turtle.Turtle()
    inst = "FF[-F[-X]+X]+F[-X]+X"
    drawLsystem(t, inst, 60, 20)

When we run this example we can see that the picture is not very interesting,
but notice what gets printed out, and how the saved information about the
turtle gets added and removed from the end of the list.  In the next example
we'll make use of the information from the list to save and restore the
turtle's position and heading when needed.  We'll use a longer example here
so you get an idea of what the kind of drawing the L-System can really make.

.. activecode:: list_lsys2
    :nocodelens:

    import turtle

    def drawLsystem(aTurtle, instructions, angle, distance):
        savedInfoList = []
        for cmd in instructions:
            if cmd == 'F':
                aTurtle.forward(distance)
            elif cmd == 'B':
                aTurtle.backward(distance)
            elif cmd == '+':
                aTurtle.right(angle)
            elif cmd == '-':
                aTurtle.left(angle)
            elif cmd == '[':
                savedInfoList.append([aTurtle.heading(), aTurtle.xcor(), aTurtle.ycor()])
                print(savedInfoList)
            elif cmd == ']':
                newInfo = savedInfoList.pop()
                aTurtle.setheading(newInfo[0])
                aTurtle.setposition(newInfo[1], newInfo[2])

    t = turtle.Turtle()
    inst = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF[-FFFFFFFFFFFFFFFF[-FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFFFFFFFFFFFFFF[-FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X"
    t.setposition(0, -200)
    t.left(90)
    drawLsystem(t, inst, 30, 2)


Rather than use the ``inst`` string supplied here, use the code from the string
chapter, and write your own applyRules function to implement this L-system.
This example only uses 6 expansions.  Try it out with a larger number of
expansions.  You may also want to try this example with different values for
the angle and distance parameters.





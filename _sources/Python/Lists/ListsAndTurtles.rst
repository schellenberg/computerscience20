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
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.
    - **CS20-FP4**  Investigate one-dimensional arrays and their applications.


Check Your Understanding
-------------------------


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

Let's return to the L-systems we introduced previously and
introduce a very interesting new feature that requires the use of lists.

Suppose our L-System has the following rules::

    X --> F[-X]+X
    F --> FF

This L-system looks very similar to the old L-system, except that we've added
one change.  We've added the characters ``[`` and ``]``.  The meaning of these
characters adds a very interesting new dimension to our L-Systems.  The ``[``
character indicates that we want to save the state of our turtle,
namely its position and its heading (direction the turtle is facing) so that we can come back to this position later.  The ``]`` tells the turtle to warp to the most recently saved position.
The way that we will accomplish this is to use lists.  We can save the
heading and position of the turtle as a list of 3 elements, like this: ``[heading, x,
y]``.  The index position 0 in the list holds the heading, 
index position 1 in the list holds the x coordinate,
and index position 2 holds the y coordinate.

Now, if we create an empty list and every time we see a ``[`` we append a
list that contains ``[heading, x, y]``, we create a history of saved places
the turtle has been where the most recently saved location will always be at
the end of the list.  When we find a ``]`` in the string we use the ``pop``
function to remove the the most recently appended information.

Let's modify our ``draw_l_system`` function to begin to implement this new
behavior.

.. activecode:: list_lsys1
    :nocodelens:

    import turtle

    def draw_l_system(some_turtle, instructions, angle, distance):
        """Draw with some_turtle, interpreting each letter in the instructions passed in."""
        saved_info_list = []
        for task in instructions:
            if task == 'F':
                some_turtle.forward(distance)
            elif task == 'B':
                some_turtle.backward(distance)
            elif task == '+':
                some_turtle.right(angle)
            elif task == '-':
                some_turtle.left(angle)
            elif task == '[':
                saved_info_list.append([some_turtle.heading(), some_turtle.xcor(), some_turtle.ycor()])
                print(saved_info_list)
            elif task == ']':
                new_info = saved_info_list.pop()
                print(new_info)
                print(saved_info_list)

    # setup for drawing
    window = turtle.Screen()
    jill = turtle.Turtle()

    # draw the picture, using angle 60 and segment length 20
    instruction_string = "FF[-F[-X]+X]+F[-X]+X"
    draw_l_system(jill, instruction_string, 60, 20)

When we run this example we can see that the picture is not very interesting,
but notice what gets printed out, and how the saved information about the
turtle gets added and removed from the end of the list.  In the next example
we'll make use of the information from the list to save and restore the
turtle's position and heading when needed.  We'll use a longer example here
so you get an idea of what the kind of drawing the L-System can really make.


.. activecode:: list_lsys2
    :nocodelens:

    import turtle

    def draw_l_system(some_turtle, instructions, angle, distance):
        """Draw with some_turtle, interpreting each letter in the instructions passed in."""
        saved_info_list = []
        for task in instructions:
            if task == 'F':
                some_turtle.forward(distance)
            elif task == 'B':
                some_turtle.backward(distance)
            elif task == '+':
                some_turtle.right(angle)
            elif task == '-':
                some_turtle.left(angle)
            elif task == '[':
                saved_info_list.append([some_turtle.heading(), some_turtle.xcor(), some_turtle.ycor()])
                # uncomment the following line to see the information saved each time a [ is encountered
                # print(saved_info_list)
            elif task == ']':
                new_info = saved_info_list.pop()
                some_turtle.setheading(new_info[0])
                some_turtle.goto(new_info[1], new_info[2])

    # setup for drawing
    window = turtle.Screen()
    jill = turtle.Turtle()

    instruction_string = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF[-FFFFFFFFFFFFFFFF[-FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFFFFFFFFFFFFFF[-FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFFFFFF[-FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X]+FFFF[-FF[-F[-X]+X]+F[-X]+X]+FF[-F[-X]+X]+F[-X]+X"

    # move turtle to bottom and middle of screen
    jill.goto(0, -200)
    jill.left(90)

    # draw the picture, using angle 30 and segment length 2
    draw_l_system(jill, instruction_string, 30, 2)


Putting It All Together
------------------------

To determine the ``instruction_string`` we used in the last example, we used an axiom of ``X`` and applied the following rules 6 times::

    X --> F[-X]+X
    F --> FF

If you run the code below, you will not see much happen. To fix the code below, you need to:

- fix the ``apply_rules`` function so that the rules given above are applied
- fix the call to ``create_l_system`` to use the correct axiom and number_of_iterations

.. activecode:: list_lsys3
    :nocodelens:

    import turtle

    def apply_rules(letter):
        """Apply rules to an individual letter, and return the result."""
        # Rule 1
        if letter == 'X':
            new_string = 'X'
            
        # Rule 2
        elif letter == 'F':
            new_string = 'F'
            
        # no rules apply so keep the character
        else:
            new_string = letter

        return new_string

    def process_string(original_string):
        """Apply rules to a string, one letter at a time, and return the result."""
        tranformed_string = ""
        for letter in original_string:
            tranformed_string = tranformed_string + apply_rules(letter)

        return tranformed_string

    def create_l_system(number_of_iterations, axiom):
        """Begin with an axiom, and apply rules to the original axiom string number_of_iterations times, then return the result."""
        start_string = axiom
        for counter in range(number_of_iterations):
            end_string = process_string(start_string)
            start_string = end_string

        return end_string

    def draw_l_system(some_turtle, instructions, angle, distance):
        """Draw with some_turtle, interpreting each letter in the instructions passed in."""
        saved_info_list = []
        for task in instructions:
            if task == 'F':
                some_turtle.forward(distance)
            elif task == 'B':
                some_turtle.backward(distance)
            elif task == '+':
                some_turtle.right(angle)
            elif task == '-':
                some_turtle.left(angle)
            elif task == '[':
                saved_info_list.append([some_turtle.heading(), some_turtle.xcor(), some_turtle.ycor()])
                # print(saved_info_list)
            elif task == ']':
                new_info = saved_info_list.pop()
                some_turtle.setheading(new_info[0])
                some_turtle.goto(new_info[1], new_info[2])

    # create the string of turtle instructions, 
    #   with 3 iterations and an axiom of F
    instruction_string = create_l_system(3, "F")
    print(instruction_string)

    # setup for drawing
    window = turtle.Screen()
    jill = turtle.Turtle()
    jill.speed(0)

    # using screen.tracer() speeds up your drawing (by skipping some frames when drawing)
    #window.tracer(10)

    # move turtle to bottom and middle of screen
    jill.goto(0, -200)
    jill.left(90)

    # draw the picture, using angle 30 and segment length 2
    draw_l_system(jill, instruction_string, 30, 2)


.. note:: 

    Once you have the code working, try it out with a larger number of iterations. You may also want to try this example with different values for the angle and distance parameters.


Practice Problems
------------------

Garden Herb
~~~~~~~~~~~~

Here are the rules for an L-system that creates something that resembles a common garden herb. Use an angle of 27.5 degrees, and a distance of 5.
   
::

    Axiom: H
    Rule 1: H --> HFX[+H][-H]
    Rule 2: X --> X[-FFF][+FFF]FX


.. activecode:: list_turtle_practice_1
    :nocodelens:

    import turtle

    # your code here!

.. reveal:: garden_herb_image
    :showtitle: Reveal Solution Image

    If you iterated through the rules 5 times to create your ``instruction_string``, and used a distance of 5, your code should have created something that looks like the following:

    .. image:: images/garden-herb.png
    


Branch
~~~~~~~~

Here are the rules for an L-system that creates something that resembles a branch. Use an angle of 25 degrees, and a distance of 5.
   
::

    Axiom: F
    Rule 1: F --> F[-F]F[+F]F


.. activecode:: list_turtle_practice_2
    :nocodelens:

    import turtle

    # your code here!

.. reveal:: branch_image
    :showtitle: Reveal Solution Image

    If you iterated through the rules 4 times to create your ``instruction_string``, and used a distance of 5, your code should have created something that looks like the following:

    .. image:: images/branch.png
    


Symmetrical Branch
~~~~~~~~~~~~~~~~~~~

Here are the rules for an L-system that creates something that resembles a symmetrical branch. Use an angle of 25.7 degrees, and a distance of 5.
   
::

    Axiom: X
    Rule 1: X --> F[+X][-X]FX
    Rule 2: F --> FF


.. activecode:: list_turtle_practice_3
    :nocodelens:

    import turtle

    # your code here!

.. reveal:: symmetrical_branch_image
    :showtitle: Reveal Solution Image

    If you iterated through the rules 5 times to create your ``instruction_string``, and used a distance of 5, your code should have created something that looks like the following:

    .. image:: images/symmetrical-branch.png
    


Seaweed
~~~~~~~~

Here are the rules for an L-system that creates something that resembles seaweed. Use an angle of 22.5 degrees, and a distance of 10.
   
::

    Axiom: F
    Rule 1: F --> FF-[-F+F+F]+[+F-F-F]


.. activecode:: list_turtle_practice_4
    :nocodelens:

    import turtle

    # your code here!

.. reveal:: seaweed_image
    :showtitle: Reveal Solution Image

    If you iterated through the rules 4 times to create your ``instruction_string``, and used a distance of 10, your code should have created something that looks like the following:

    .. image:: images/seaweed.png
    

    

Create Your Own
~~~~~~~~~~~~~~~~

Experiment by creating your own rules for an L-system. Be sure to use the ``[`` and ``]`` characters in the rule(s) of your L-system.


.. activecode:: list_turtle_practice_5
    :nocodelens:

    import turtle

    # your code here!


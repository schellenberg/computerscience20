.. qnum::
   :prefix: l-systems
   :start: 1


Turtle Drawing and Strings (L-Systems)
=======================================

.. topic:: Quick Overview of Day

    Turtle drawing by interpreting strings. L-Systems to generate strings. Draw interesting patterns using L-System strings.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Controlling a Turtle With Strings
-----------------------------------

By combining what we know about moving turtles on the screen, and what we have learned about traversing strings, we can now write a program that controls the movement of a turtle based on a string. For example, the string ``FF+F-FF`` might make a turtle:

- move forward by some distance twice in a row
- turn right by some angle
- move forward again
- turn left by some angle
- move forward twice in a row 

To turn a string like ``FF+F-FF`` into a set of instructions that our turtle can execute, we need to look at each character of the string, one at a time. We can do this easily with a for loop, as you can see in the following example.

.. activecode:: string_turtle_movement_1
    
    import turtle

    canvas = turtle.Screen()
    escher = turtle.Turtle()
    escher.speed(1)

    instructions = "FF+F-FF"

    for task in instructions:
        if task == "F":
            escher.forward(25)
        elif task == "+":
            escher.right(45)
        elif task == "-":
            escher.left(45)


.. note:: 

    In the code above, try:

    - changing the instruction string to have the turtle draw a different image
    - adding three additional possible instruction for the turtle. Any ``B`` in the string should be interpreted as an instruction to move backwards (by the same amount as ``F`` moves forward). A ``U`` should cause the turtle to pick up it's pen (so it doesn't draw as it moves). A ``D`` should cause the turtle should put down it's pen (so that it draws as it moves).
    - increasing the speed of the turtle
    
    After completing the tasks above, try having the turtle use the following instruction string: ``UBBBBBBDF-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F``


Turtles and Strings and L-Systems
---------------------------------

This section describes a much more interested example of string iteration and the accumulator pattern.  Even though it seems like we are doing something that is much more complex, the basic processing is the same as was shown in the previous sections.

In 1968 Aristid Lindenmayer, a biologist, invented a formal system that
provides a mathematical description of plant growth known as an
**L-system**.  L-systems were designed to model the growth of biological
systems.  You can think of L-systems as containing the instructions for how
a single cell can grow into a complex organism.  L-systems can be used to
specify the **rules** for all kinds of interesting patterns.  In our case, we are going to use them to specify the rules for drawing pictures.

The rules of an L-system are really a set of instructions for transforming
one string into a new string.  After a number of these string transformations
are complete, the string contains a set of instructions.  Our plan is to let these instructions direct a turtle as it draws a picture.

To begin, we will look at an example set of rules:

========  =====================
A         Axiom
A -> B    Rule 1 Change A to B
B -> AB   Rule 2 Change B to AB
========  =====================

Each rule set contains an axiom which represents the starting point in the transformations that will follow.  The rules are of the form::

        left hand side -> right hand side

where the left hand side is a single symbol and the right hand side is a sequence of symbols.  You can think of both sides as being simple strings.
The way the rules are used is to replace occurrences of the left hand side with the corresponding right hand side.

Now let's look at these simple rules in action, starting with the string A:

.. sourcecode:: html

    A
    B      Apply Rule 1  (A is replaced by B)
    AB     Apply Rule 2  (B is replaced by AB)
    BAB    Apply Rule 1 to A then Rule 2 to B
    ABBAB  Apply Rule 2 to B, Rule 1 to A, and Rule 2 to B

Notice that each line represents a new transformation for entire string.  Each character that matches a left-hand side of a rule in the original has been replaced by the corresponding right-hand side of that same rule.  After doing the replacement for
each character in the original, we have one transformation.

So how would we encode these rules in a Python program?  There are a couple
of very important things to note here:

#. Rules are very much like if statements.
#. We are going to start with a string and iterate over each of its characters.
#. As we apply the rules to one string we leave that string alone and create
   a brand new string using the accumulator pattern.  When we are all done with the original we replace it
   with the new string.

Let's look at a simple Python program that implements the example set of rules described
above.

.. activecode::  string_l_systems_1

    def apply_rules(letter):
        """Apply rules to an individual letter, and return the result."""
        # Rule 1
        if letter == 'A':
            new_string = 'B'

        # Rule 2
        elif letter == 'B':
            new_string = 'AB'
        
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

    def create_l_system(number_of_iterations,axiom):
        """Begin with an axiom, and apply rules to the original axiom string number_of_iterations times, then return the result."""
        start_string = axiom
        for counter in range(number_of_iterations):
            end_string = process_string(start_string)
            start_string = end_string

        return end_string

    print(create_l_system(4, "A"))

Try running the example above with different values for the ``number_of_iterations``
parameter.  You should see that for values 1, 2, 3, and 4, the strings generated follow the
example above exactly.

One of the nice things about the program above is that if you want to
implement a different set of rules, you don't need to re-write the entire
program. All you need to do is re-write the ``apply_rules`` function.

.. note:: 

    Suppose you had the following rules:

    ========  =======================
    A         Axiom
    A -> BAB  Rule 1 Change A to BAB
    ========  =======================

    What kind of a string would these rules create?  Modify the program above to
    implement the rule.


Drawing With L-Systems
-----------------------

Now let's look at a real L-system that implements a famous drawing.  This
L-system has just one rule:

=============  =====================
F              Axiom
F -> F-F++F-F  Rule 1
=============  =====================

This L-system uses symbols that will have special meaning when we use them later with the turtle to draw a picture.

====  ===================================
F     Go forward by some number of units
B     Go backward by some number of units
\-    Turn left by some degrees
\+    Turn right by some degrees
====  ===================================

Here is the ``apply_rules`` function for this L-system.

.. sourcecode:: python

    def apply_rules(letter):
        """Apply rules to an individual letter, and return the result."""
        # Rule 1
        if letter == 'F':
            new_string = 'F-F++F-F'

        # no rules apply so keep the character
        else:
            new_string = letter

        return new_string

Pretty simple so far.  As you can imagine this string will get pretty long
with a few applications of the rules.  You might try to expand the string a
couple of times on your own just to see.

The last step is to take the final string and turn it into a picture.  Let's
assume that we are always going to go forward or backward by 5 units.  In
addition we will also assume that when the turtle turns left or right we'll
turn by 60 degrees.  Now look at the string ``F-F++F-F``.  *This is the string we used to draw a simple image at the start of this section!*  At this point its not a very exciting
drawing, but once we expand it a few times it will get a lot more interesting.

To create a Python function to draw a string we will write a function called
``draw_l_system``  The function will take four parameters:

* A turtle to do the drawing
* An expanded string that contains the results of expanding the rules above.
* An angle to turn
* A distance to move forward or backward

.. sourcecode:: python

    def draw_l_system(some_turtle, instructions, angle, distance):
        for task in instructions:
            if task == 'F':
                some_turtle.forward(distance)
            elif task == 'B':
                some_turtle.backward(distance)
            elif task == '+':
                some_turtle.right(angle)
            elif task == '-':
                some_turtle.left(angle)


Here is the complete program, which combines generating the L-System string, and then using it to draw with the turtle.

.. activecode:: string_l_systems_2
    :nocodelens:

    import turtle

    def apply_rules(letter):
        """Apply rules to an individual letter, and return the result."""
        # Rule 1
        if letter == 'F':
            new_string = 'F-F++F-F'

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

    def create_l_system(number_of_iterations,axiom):
        """Begin with an axiom, and apply rules to the original axiom string number_of_iterations times, then return the result."""
        start_string = axiom
        for counter in range(number_of_iterations):
            end_string = process_string(start_string)
            start_string = end_string

        return end_string

    def draw_l_system(some_turtle, instructions, angle, distance):
        """Draw with some_turtle, interpreting each letter in the instructions passed in."""
        for task in instructions:
            if task == 'F':
                some_turtle.forward(distance)
            elif task == 'B':
                some_turtle.backward(distance)
            elif task == '+':
                some_turtle.right(angle)
            elif task == '-':
                some_turtle.left(angle)

    ############################################################################

    # create the string of turtle instructions
    instruction_string = create_l_system(4, "F")
    print(instruction_string)

    # setup for drawing
    window = turtle.Screen()
    jill = turtle.Turtle()
    jill.speed(0)

    # using screen.tracer() speeds up your drawing (by skipping some frames when drawing)
    #window.tracer(10)

    # move turtle to left side of screen
    jill.up()
    jill.back(200)
    jill.down()
    
    # draw the picture, using angle 60 and segment length 5
    draw_l_system(jill, instruction_string, 60, 5)


.. note:: Try some different angles and segment lengths to see how the drawing changes. Start with 90 degrees, and experiment from there. You might want to use Thonny when experimenting, since Thonny makes it easy to end a program at any point. Using ``window.tracer(10)`` will also greatly speed up your programs.

Practice Problems
------------------

Adapt the template code given above to create drawings of other famous L-Systems. 


Hilbert Curve
~~~~~~~~~~~~~~~

Use the following axiom and rules to create the Hilbert curve. Use an angle of 90 degrees.

=====================   =====================
``L``                   Axiom
``L -> +RF-LFL-FR+``    Rule 1
``R -> -LF+RFR+FL-``    Rule 2
=====================   =====================


.. activecode:: strings_l_systems_practice_1
    :nocodelens:

    # adapt the template code given above to draw this image


Dragon Curve
~~~~~~~~~~~~~~~

Use the following axiom and rules to create the dragon curve. Use an angle of 90 degrees.

==================  =====================
``FX``              Axiom
``X -> X+YF+``      Rule 1
``Y -> -FX-Y``      Rule 2
==================  =====================


.. activecode:: strings_l_systems_practice_2
    :nocodelens:

    # adapt the template code given above to draw this image


Arrowhead Curve
~~~~~~~~~~~~~~~~

Use the following axiom and rules to create the arrowhead curve. Use an angle of 60 degrees.

==================  =====================
``FX``              Axiom
``X -> YF+XF+Y``    Rule 1
``Y -> XF-YF-X``    Rule 2
==================  =====================


.. activecode:: strings_l_systems_practice_3
    :nocodelens:

    # adapt the template code given above to draw this image


Peano-Gosper Curve
~~~~~~~~~~~~~~~~~~~

Use the following axiom and rules to create the Peano-Gosper curve. Use an angle of 60 degrees.

===============================     =====================
``FX``                              Axiom
``X -> X+YF++YF-FX--FXFX-YF+``      Rule 1
``Y -> -FX+YFYF++YF+FX--FX-Y``      Rule 2
===============================     =====================


.. activecode:: strings_l_systems_practice_4
    :nocodelens:

    # adapt the template code given above to draw this image


Sierpinski Triangle
~~~~~~~~~~~~~~~~~~~~

Use the following axiom and rules to create the Sierpinski Triangle. Use an angle of 60 degrees.

===========================     =====================
``FXF--FF--FF``                 Axiom
``F -> FF``                     Rule 1
``X -> --FXF++FXF++FXF--``      Rule 2
===========================     =====================


.. activecode:: strings_l_systems_practice_5
    :nocodelens:

    # adapt the template code given above to draw this image



Snowflake
~~~~~~~~~~~~~~~~~~~~

Use the following axiom and rules to create a snowflake shape. Use an angle of 72 degrees.

===========================     =====================
``F-F-F-F-F``                   Axiom
``F -> F-F++F+F-F-F``           Rule 1
===========================     =====================


.. activecode:: strings_l_systems_practice_6
    :nocodelens:

    # adapt the template code given above to draw this image


Unnamed Shape
~~~~~~~~~~~~~~

*If you know the name of this shape, please tell me!*

Use the following axiom and rules to create an interesting shape. Use an angle of 45 degrees.

===========================     =====================
``L--F--L--F``                  Axiom
``L -> +R-F-R+``                Rule 1
``R -> -L+F+L-``                Rule 2
===========================     =====================


.. activecode:: strings_l_systems_practice_7
    :nocodelens:

    # adapt the template code given above to draw this image


Making Your Own Shapes
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: 

    If you have experimented with all of the shapes above, and are thinking about creating your own, look for symmetry in the rules given above...
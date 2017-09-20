Step 4: Small Project and Comments
==================================

.. important::

     Write your computer programs to make them easy for **people** to
     read and understand.

When writing programs, please write  so that other people, just
like you, would find them easy to read on their own, and figure out what
they do. Yes, computer languages are designed to allow you to
communicate with computers, just as human languages have evolved to
allow humans to communicate with each other. But computer languages,
which are much simpler than human languages, are often used by
programmers to share their work with other programmers.

.. index:: #, comments, " " " (triple), ' ' ' (triple)

Comments
--------

I present to you the first tool you can use to write computer programs
that are easier for people to understand: *comments*.

Comments are notes made by a programmer which are ignored by the
computer; they are meant to be read and understood only by humans.

When using Python, one can write comments in one of two ways:

-  By enclosing an arbitrary quantity of text between triple-quotes like ``""" ... """`` or ``''' ... '''``.
-  By writing some text preceded by ``#`` on any given line.

I will first write a simple program without any comments followed by a
second version with comments added and a third version ... slightly less
readable; however, I will make the same error in all three programs. Can
you spot it more easily in the first program orthe second?

.. code-block:: python

    move()
    move()
    turn_left()
    put()
    move()
    move()
    turn_left()
    put()
    move()
    turn_left()
    put()
    move()
    move()
    turn_left()
    put()

Contrast the above program with the same one, from Reeborg's point of
view, but with comments added for humans; you will be able so recognize
comments as they appear in a different colour and font style.

.. code-block:: python

    '''  This is an example of
    a simple program where Reeborg draws a square,
    leaving a token behind at each corner. '''

    move()  # Python commands are on separate lines
    move()
    turn_left() # Reeborg only knows to turn left
    put()  # we assume that Reeborg carries enough tokens

    # we repeat the above three more times to complete the square
    move()
    move()
    turn_left()
    put()

    move()
    turn_left()
    put()

    move()
    move()
    turn_left()
    put()

The above are not particularly good comments, but at least one of them
should have helped you find what was wrong with the program. You might
think this is cheating; however, how can you guess the intent behind
some lines of code in a program on their own? The addition of comments
explaining what a given program should do can be very helpful in finding
mistakes.

Note that in addition to comments, I have used blank lines to separate
some "logical" blocks of code, to help see the pattern better. Together,
the use of comments and insertion of blank lines can make a program much
easier to read.



.. admonition:: For educators

    If you have already explained how to use function arguments, may I suggest
    that you modify the example above to replace::

        put()

    by::

        put('token')

    the rationale being that this makes the intent of the program clearer
    for someone who is just reading the code.

Project
--------

Open Step 4 on the `Reeborg website <http://wmcicompsci.ca/reeborg>`_ .

.. image:: images/step4.png

Use the ``move()`` function and the ``turn_left()`` function to make Reeborg walk around the lake.

.. topic:: Try this!

    To see what happens, let's do some things intentionally wrong. For example, make Reeborg walk into the lake. You might also want to try not walking all the way around the lake to see what the error message will be.

Reeborg's Bugs
-----------------

In computer jargon, a bug is an error that causes a program to behave in
an unexpected way. If you are writing computer programs, you are going
to have bugs in them sooner or later - everybody does. Good programmers
seek to "remove" bugs or "fix" them as soon as they find that their
program behaves unexpectedly.

Not so good programmers state that "bugs" are not really bugs but that
they are "features" of their programs. **You** are going to be a good
programmer, unlike the maker of Reeborg, whose program is littered with
bugs. Some of the problems with Reeborg are:

   
#. Reeborg has an oil leak. Oil leaks are damaging for the environment
   and inconvenient for Reeborg who must replenish its supplies when
   it's not busy accomplishing tasks. The maker of Reeborg claims that
   it is a feature, as it enables you to follow Reeborg's path, just
   like any programmer can learn to "trace" a program.
#. Reeborg's steering mechanism is not handled properly by Reeborg's
   program: it can only turn left. The maker of Reeborg, once again,
   claims that this is a feature as it present you with an opportunity
   to learn about **functions**. You will soon learn how
   to program a *workaround solution*, enabling Reeborg to turn right,
   although in a wasteful fashion. 
#. Reeborg has a compass, enabling him to determine which direction he
   is facing. Unfortunately, yet again, the program that enables Reeborg
   to get the information from the compass has a bug: it only tells
   Reeborg if he is facing North ... or not. Once again, you will 
   learn how to implement a workaround solution soon.
#. Reeborg can see if a wall is in front of him, and can also turn its
   head to the right to see if there is a wall there. However, a
   software "glitch" (which is another weasel term that software
   manufacturers use to avoid having to say that their product has a
   bug) prevents Reeborg's program from properly registering a wall when
   it turns its head left.


Stepping Through Code
---------------------

Sometimes to find the cause of bugs, it can help to break the normal
flow of the program. To this end you may do one or more of the
following:

#. You can *pause* a program as it is running by pressing the **pause**
   button. This is similar to what people refer to as
   setting a *breakpoint* in a computer program
#. Instead of actually pressing the pause button, you can type in the
   instruction ``pause()`` at any point inside a program and Reeborg
   will pause, awaiting your permission to continue.
#. You can *step through* a program, one instruction at a time, by
   pressing the *execute one instruction and pause*, or **step** button.
   By default, the line about to be executed is highlighted; you can turn off
   the highlighting by clicking on a button above the code editor.
#. You can stop a program at any point by pressing the **stop**
   button; this unfortunately may not work if you create
   what is known as an infinite loop, outside of Reeborg's control. If
   worse comes to worst, you can always just reload the web page.
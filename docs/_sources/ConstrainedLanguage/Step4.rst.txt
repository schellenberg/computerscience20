Step 4: Comments
==================================

.. important::

     Write your computer programs to make them easy for **people** to
     read and understand.

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.


Tutorial
--------

When writing programs, you should write them so that other people, just
like you, would find them easy to read, and be able to figure out what
they do. Yes, computer languages are designed to allow you to
communicate with computers, just as human languages have evolved to
allow humans to communicate with each other. But computer languages,
which are much simpler than human languages, are often used by
programmers to share their work with other programmers.

Comments are notes made by a programmer which are ignored by the
computer; they are meant to be read and understood only by humans. They allow programmers to write programs that are easier to understand for other people.

When using Python, one can write comments in one of two ways:

-  By putting a ``#`` before a comment on any given line.
-  By enclosing any amount of text (even if it takes up more than one line) between triple-quotes like ``""" ... """`` or ``''' ... '''``.


I will first write a simple program without any comments followed by a
second version with comments added and a third version ... slightly less
readable; however, I will make the same error in all three programs. Can
you spot it more easily in the first program or the second?

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
view, but with comments added for humans; you will be able to recognize
comments as they appear in a different colour and font style.

.. code-block:: python

    '''  This is an example of
    a simple program where Reeborg draws a square,
    leaving an object behind at each corner. '''

    move()  # Python commands are on separate lines
    move()
    turn_left() # Reeborg only knows to turn left
    put()  # we assume that Reeborg carries enough objects

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

Note that in addition to comments, I have used blank lines (often called whitespace) to separate some "logical" blocks of code, to help see the pattern better. Together, the use of comments and insertion of blank lines can make a program much easier to read.


Your Turn
----------

Open Step 4 on the |reeborg_environment|.

.. image:: images/step4.png

Use the functions we've learned about so far to make Reeborg walk down the gravel path, picking up dandelions as it finds them, and depositing them in the conveniently placed garbage cans (represented by greyscale dandelion images). Use the ``pause`` function to have Reeborg wait at each location it finds a dandelion to pick. Be sure to use comments and whitespace to increase the readability of your solution!

Recall that the functions discussed so far include:

-  ``move()``
-  ``turn_left()``
-  ``take()``
-  ``put()``
-  ``pause()``


.. |reeborg_environment| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg" target="_blank">Reeborg environment</a>
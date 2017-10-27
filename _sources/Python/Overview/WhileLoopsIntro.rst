
.. qnum::
   :prefix: while-loops-intro-
   :start: 1

The ``while`` Statement
========================

When we programmed in Reeborg, we used a ``while`` loop whenever we did not know the number of iterations (times the loop would repeat) before hand. This was helpful when we needed to do things like::

    while front_is_clear(): 
        move() 

Similar to the ``if`` statement, a ``while`` statement uses a boolean expression to control the flow of execution.  The body of while will be repeated as long as the controlling boolean expression evaluates to ``True``. In the example above, the function ``front_is_clear()`` returned either ``True`` or ``False``.

The following figure shows the flow of control.

.. image:: images/while_flow.png

A short example of a ``while`` statement follows. 

.. note:: For these introductory examples, we know the number of iterations (times the loop repeats) *before* the code executes. Later on, we will practice while loops in which we do not know the number of iterations ahead of time.

.. activecode:: while_intro_1

    i = 0
    while (i < 5):
        print(i)
        i = i + 1

It may be helpful to view the code above using codelens:

.. codelens:: while_intro_1_codelens

    i = 0
    while (i < 5):
        print(i)
        i = i + 1  

You can do something similar to the codelens feature above using Thonny. First, click on *View -> Variables* to see the values of variables while your code runs.

**Insert image of menu here.**

Copy/paste the while loop code from above into the Thonny text editor. Now press the *Debug current script* button. Thonny will now highlight the next line it will evaluate. You can control the debugger using the *Step over*, *Step into*, and *Step out* buttons. For now, have Thonny go through the code by pressing **Step into** (or press the keyboard shortcut **F7**). 

**Insert animation of stepping through the code here.**

.. note:: Using a visualization tool like codelens or Thonny's debugger can really help you build a mental model of how Python works. Whenever you encounter a piece of Python code that you do not understand, your first reaction should be to run the code in one of these environments to help yourself figure out how it works!

The following code is just slightly different from the version above. Can you spot the difference? Before you run the code, try to figure out what it will print. Will it be the same as the first version?

.. activecode:: while_intro_2

    i = 0
    while (i < 5):
        i = i + 1
        print(i)


Quick Practice Problems
-----------------------

Can you make a program that will print out the numbers 1 to 100?

.. activecode:: while_intro_3

    #put your code here!


How about a program that counts down from 20, then prints *Blastoff!*?

.. activecode:: while_intro_4

    #put your code here!


.. warning::
   Though Python's ``while`` is very close to the English "while", 
   there is an important difference:  In English "while X, do Y", 
   we usually assume that immediately after X becomes false, we stop 
   with Y.  In Python there is *not* an immediate stop:  After the 
   initial test, any following tests come only after the execution of 
   the *whole* body, even if the condition becomes false in the middle of the loop body.



Assignment Work Time
---------------------

Please spend the rest of the class continuing to work on your current Python assignment (Madlib, or something similar). 


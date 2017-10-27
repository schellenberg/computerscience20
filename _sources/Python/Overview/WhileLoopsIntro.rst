
.. qnum::
   :prefix: while-loops-intro-
   :start: 1

The ``while`` Statement
-----------------------

When we programmed in Reeborg, we used a ``while`` loop whenever we did not know the number of iterations (times the loop would repeat) before hand. This was helpful when we needed to do things like::
    while front_is_clear(): 
        move() 

Similar to the ``if`` statement, a ``while`` statement uses a boolean expression to control the flow of execution.  The body of while will be repeated as long as the controlling boolean expression evaluates to ``True``. In the example above, the function front_is_clear() returned either ``True`` or ``False``.

The following figure shows the flow of control.

.. image:: Figures/while_flow.png

A short (and not overly helpful) example of a ``while`` statement follows.

.. activecode:: while_intro_1

    i = 0
    while (i < 5):
        print(i)
        i = i + 1

Consider how this is different than the following:

.. activecode:: while_intro_2

    i = 0
    while (i < 5):
        i = i + 1
        print(i)


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


Step 13: If/Elif/Else
=====================

.. reveal:: curriculum_addressed_step13
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.

.. index:: if-elif-else

Tutorial
---------

Sometimes you want to create branches in your code where only one out of many possible options can occur. For example, Reeborg lives in Canada where it not only can rain or be sunny, but snow can also be falling. Let's suppose that only one of those can happen at a time. Then, Reeborg could be faced with the following choices::

    if it_rains():
        play_indoors()
    elif it_snows():
        go_skiing()
    else:
        go_swimming() # assuming it is warm!

Notice the use of ``elif`` (which means "else if") for choice 2. If we took into account other possible weather phenomena, like hail, thunder, fog, drizzle, etc., we could add other choices using additional ``elif: ...`` code blocks.

Here is a graphical representation of the choices that Reeborg faces:

.. figure:: images/flowcharts/elif.jpg
   :align: center

In an ``if/elif/else`` statement, you should see that it gives three independent choices and **only one of them will be executed**.


Your Turn
---------

Open Step 13 on the |reeborg_environment|, and copy/paste the following code to begin your solution:

.. code-block:: python

    def jump_over_hurdle():
        # suitable definition

    def run_jump_or_finish():
        if at_goal():
            done()  #tells Reeborg to stop
        elif front_is_clear():
            # something
        else:
            # something

    repeat 42:
        run_jump_or_finish()

.. image:: images/step13.png

Reeborg is jumping hurdles again. This time, however, the hurdles may not all be the same distance apart. You should use a ``repeat`` loop to have Reeborg jump the hurdles, and end at the goal (12, 1). You **must** use an ``if/elif/else`` structure in your program. 

.. |reeborg_environment| raw:: html

   <a href="https://reeborg.cs20.ca/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%2013" target="_blank">Reeborg environment</a>


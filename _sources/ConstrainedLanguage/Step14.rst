Step 14: The ``not`` Keyword
===============================================

.. reveal:: curriculum_addressed_step14
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.

.. index:: not

Tutorial
--------

Sometimes we want to ask if something is ``not`` True. For example, you might want to turn right, but only if there isn't a wall to your right. You could do this with the following code:

.. code-block:: python

    def turn_right():
        repeat 3:
            turn_left()

    if not wall_on_right():
        turn_right()

Note the use of the word ``not`` before the question ``wall_on_right()``. This makes your question into the opposite of what it would be without the ``not``. 

You can use the ``not`` keyword with ``while`` loops as well. For example, say you wanted to make Reeborg face north no matter what orientation Reeborg is in. To do that, you could write the following:

.. code-block:: python

    while not is_facing_north():
        turn_left()


Your Turn
---------

Open Step 14 on the |reeborg_environment|.

.. image:: images/step14.gif

Reeborg loves going for walks, especially when it is around a lake. The lakes in Reeborg's neighborhood are all different sizes of rectangles, so Reeborg does not know how many steps it will take to get back to the start of walk. Thankfully, Reeborg happens to be carrying a banana, which you can tell Reeborg to ``put()`` down at the start of it's walk. Reeborg knows it's done walking when it reaches the banana again.

Use a ``while`` statement (looking for the banana object) and an ``if/else`` to have Reeborg complete his walking adventure. You must use the ``not`` keyword in your solution!

.. note:: Reeborg cannot use a ``repeat`` statement, since it has no idea of the dimensions of the lake it is walking around.

.. |reeborg_environment| raw:: html

   <a href="https://reeborg.cs20.ca/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%2014" target="_blank">Reeborg environment</a>

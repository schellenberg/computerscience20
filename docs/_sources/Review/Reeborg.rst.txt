Reeborg Review
================================

.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-CP2** Use common coding techniques to enhance code elegance and troubleshoot errors throughout Computer Science 20.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.

To confirm that you understand the major concepts we learned from our Reeborg unit, try the following *without looking back at any previous code*!


Question 1 - Step 16
---------------------

See if you can recreate a solution for |step_16| (without looking back at how you did it previously).


.. |step_16| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg/?lang=en&mode=python&menu=worlds/menus/sk_menu.json&name=Step%2016" target="_blank">Step 16</a>

Question 2 - Review a Previous Quiz
------------------------------------

Earlier in the course, you showed your understanding of Reeborg by doing a quiz. Let's review that quiz to be sure you recall the important concepts we studied.


Question 3 - Go To Origin
-------------------------

Define a new function called ``go_to_origin`` that sends Reeborg to the bottom left corner of the screen (south-west corner), regardless of its initial location or the direction it is initially facing. Assume that there are no wall sections present. 

*Hint: Use the south and west boundary walls as guides.*

Open the |origin_world| and create a solution to this problem!

.. image:: images/reeborg_goToOrigin.png


.. think(0)

.. def turn_right():
..     repeat 3:
..         turn_left()

.. def go_to_bottom():
..     while not is_facing_north():
..         turn_left()
..     repeat 2:
..         turn_left()
..     while front_is_clear():
..         move()

.. def go_to_left_side():
..     #assumes you are facing south to begin with
..     turn_right()
..     while front_is_clear():
..         move()
        
.. def go_to_origin():
..     go_to_bottom()
..     go_to_left_side()

.. go_to_origin()

.. |origin_world| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg?lang=en&mode=python&url=worlds/sk/goToOrigin.json&name=GoToOrigin" target="_blank">Go To Origin Review world</a>


Question 4 - Hurdle Jumping
----------------------------------

Reeborg is jumping hurdles again. This time, the hurdles can be of any height, and of any width. Reeborg needs to keep jumping over them until it gets to the end of the world, which will always be at (12, 1).

Open the |hurdle1| and create a solution to this problem!

.. caution:: Due to time constraints, the hurdle worlds above do not test the path followed automatically. I will come back to this section and add path following logic when time permits.

.. image:: images/reeborg_hurdle_jump.png

.. |hurdle1| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg?lang=en&mode=python&url=worlds/sk/hurdle.json&name=HurdleReview" target="_blank">Hurdle Jump Review World</a>

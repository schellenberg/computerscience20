
.. qnum::
   :prefix: turtle-square-shapes
   :start: 1


Assignment Work Period
================================

.. topic:: Quick Overview of Day

    Use ``for`` loops and functions to draw one shape elegantly. Continue working on a Python turtle graphics assignment, focused on repetition and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


Practice Problem
-----------------

.. image:: images/confusion-17.png

Draw the shape above. You can choose to either:

- create a function, and repeatedly call that function
- use repetition without a function (if you choose this method, you will want to use a nested ``for`` loop)

.. activecode:: practice_problems_17
    :nocodelens:

    import turtle


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_functions_1
    :caption: What will this program print?

    def a():
        print("A")

    def b():
        print("B")

    def c():
        print("C")

    a()


.. activecode:: wdtpd_functions_2
    :caption: What will this program print?

    def a():
        b()
        print("A")

    def b():
        c()
        print("B")

    def c():
        print("C")

    a()


.. activecode:: wdtpd_functions_3
    :caption: What will this program print?

    def a():
        print("A")
        b()
         
    def b():
        print("B")
        c()
         
    def c():
        print("C")
           
    a()


.. activecode:: wdtpd_functions_4
    :caption: What will this program print?

    def a():
        print("A start")
        b()
        print("A end")
         
    def b():
        print("B start")
        c()
        print("B end")
         
    def c():
        print("C start and end")
         
    a()



Turtle Graphics Assignment
---------------------------

Use the rest of this class time to keep working on your current Python assignment (possibly a turtle graphics drawing, with a focus on looping and conditionals).

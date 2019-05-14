.. qnum::
   :prefix: microbit-functions
   :start: 1


Fruitful Functions and the Micro:bit
=====================================

.. topic:: Quick Overview of Day

    WDTPD on variable scope. Functions practice quiz. Micro:bit fruitful functions. 


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.
    - **CS20-FP4** Investigate one-dimensional arrays and their applications.


What Does This Program Do?
---------------------------

Remember that variables created inside of a function have **local scope** (can only be used inside that function), whereas variables created outside of a function have **global scope** (can be accessed from anywhere).

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?


.. activecode:: wdtpd_functions_7
    :caption: What will this program print?

    def a(x):
        print("A start, x =",x)
        b(x + 1)
        print("A end, x =",x)
         
    def b(x):
        print("B start, x =",x)
        c(x + 1)
        print("B end, x =",x)
         
    def c(x):
        print("C start and end, x =",x)
         
    a(5)


.. activecode:: wdtpd_functions_8
    :caption: What will this program print?

    def a(x):
        x = x + 1
     
    x = 3
    a(x)
     
    print(x)


.. activecode:: wdtpd_functions_9
    :caption: What will this program print?

    def a(x):
        x = x + 1
        return x
     
    x = 3
    a(x)
     
    print(x)


.. activecode:: wdtpd_functions_10
    :caption: What will this program print?

    def a(x):
        x = x + 1
        return x
     
    x = 3
    x = a(x)
     
    print(x)


Functions Practice Quiz
------------------------

To confirm that you understand the major concepts you've seen in Python, try to answer the following questions **without opening Python**.


Question 1
~~~~~~~~~~~~~

.. mchoice:: functions_practice_quiz_1
    :answer_a: def some_function()
    :answer_b: function some_function()
    :answer_c: function some_function():
    :answer_d: def some_function():
    :correct: d
    :feedback_a: Try again! Something is missing at the end...
    :feedback_b: Try again! We don't use the word function...
    :feedback_c: Try again! We don't use the word function...
    :feedback_d: Great!

    Which of the following is the valid way to begin the definition of a function in Python?


Question 2
~~~~~~~~~~~~~

.. mchoice:: functions_practice_quiz_2
    :answer_a: 5
    :answer_b: 21
    :answer_c: 18
    :answer_d: None of the above.
    :correct: b
    :feedback_a: Try again! The first_value is returned.
    :feedback_b: Great!
    :feedback_c: Try again! 8 is added to the first_value, not the second_value.
    :feedback_d: Try again!

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            return first_value

        print(some_thing(13, 10))



Question 3
~~~~~~~~~~~~~

.. mchoice:: functions_practice_quiz_3
    :answer_a: 5
    :answer_b: 21
    :answer_c: 18
    :answer_d: None of the above.
    :correct: d
    :feedback_a: Try again! Consider what Python is doing with the answer that is being returned.
    :feedback_b: Try again! Consider what Python is doing with the answer that is being returned.
    :feedback_c: Try again! Consider what Python is doing with the answer that is being returned.
    :feedback_d: Great! Although the function is called, nothing is actually printed!

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            return first_value

        some_thing(13, 10)


Question 4
~~~~~~~~~~~~~

.. fillintheblank:: functions_practice_quiz_4

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            temp_value = other_thing(second_value)
            return temp_value

        def other_thing(another_value):
            return (another_value + 5) * 3

        print(some_thing(13, 10))
      
    - :30: Great!
      :.*: Try again!


Question 5
~~~~~~~~~~~~~

.. mchoice:: functions_practice_quiz_5
    :answer_a: 30
    :answer_b: An error will occur.
    :answer_c: 5
    :answer_d: None of the above.
    :correct: b
    :feedback_a: Try again! Think about variable scope.
    :feedback_b: Great! Since the second_value variable is defined inside the some_thing function, you cannot access it from anywhere else in your code.
    :feedback_c: Try again! Although the value of second_value is 5 while your code is inside the some_thing function, we are trying to print that value outside the some_thing function.
    :feedback_d: Try again!

    What will the following program print?::

        def some_thing(number1, number2):
            first_value = number1 + 8
            second_value = number2 - 5
            temp_value = other_thing(second_value)
            return temp_value

        def other_thing(another_value):
            return (another_value + 5) * 3

        some_thing(13, 10)
        print(second_value)


Question 6
~~~~~~~~~~~~~

.. fillintheblank:: functions_practice_quiz_6

    What will the following program print?::

        def surprising_function(value):
            thing = 0
            for counter in range(value+1):
                thing = thing + counter
            return thing

        print(surprising_function(5))
      
    - :15: Great!
      :.*: Try again! Notice that this is an example of the accumulator pattern.



Question 7
~~~~~~~~~~~~~

.. fillintheblank:: functions_practice_quiz_7

    What will the following program print?::

        def a(x, y):
            x = x + 3
            y = y + 2
            return x+y

        x = 5
        y = 10
        z = a(x, y)

        print(z)
      
    - :20: Great!
      :.*: Try again! Notice that we are returning the sum of x and y.


Question 8
~~~~~~~~~~~~~

.. fillintheblank:: functions_practice_quiz_8

    What will the following program print?::

        def a(x, y):
            x = x + 3
            y = y + 2
            return x+y

        x = 5
        y = 10
        z = a(x, y)

        print(x)
      
    - :5: Great!
      :8: Be careful! There are two variables called x (one global, and one local).
      :.*: Try again! Notice that we are returning the sum of x and y.




An Accelerometer Fruitful Function
----------------------------------

Let's adapt the code above to use a fruitful function. We will make a function called ``horizontal_tilt()`` that returns either "left", "right", or "flat". 


.. code-block:: python

    import microbit

    def horizontal_tilt(sensitivity_amount):
        """Returns left, right or flat, depending on which way the micro:bit is tilted. Small sensitivity_amount is more sensitive, large sensitivity_amount is less sensitive."""
        x_tilt = microbit.accelerometer.get_x()

        if x_tilt > sensitivity_amount:
            return "right"
        
        elif x_tilt < -1 * sensitivity_amount:
            return "left"

        else:
            return "flat"


    while True:
        horizontal_tilt_direction = horizontal_tilt(100)
        
        if horizontal_tilt_direction == "right":
            microbit.display.show("R")
            print("Tilted right.")
        
        elif horizontal_tilt_direction == "left":
            microbit.display.show("L")
            print("Tilted left.")
        
        else:
            microbit.display.show("-")
            print("Flat!")



Notice that in the ``horizontal_tilt`` function, an if/elif/else structure is used. Since one (and only one) branch of the if/elif/else *must* occur, we are guaranteed to return either "right", "left", or "flat". The parameter ``sensitivity_amount`` in the function definition allows the user of the function to easily set how sensitive their program is to the tilting of the micro:bit. 

Inside the ``while True`` loop, we start by calling the ``horizontal_tilt`` function, so we will call the function many times per second. 


Adapt the Code
------------------

Try the following (either by yourself or with a partner):

- create a fruitful function ``vertical_tilt(sensitivity_amount)`` that uses ``get_y`` and returns either "forward", "backward", or None
- create a fruitful function ``held_up_down(sensitivity_amount)`` that uses ``get_z`` and returns either "up", "down", or None


A More Involved Micro:bit Function Example
-------------------------------------------

One of the great things about using functions is that you can use a function without having to know all of the details about how it works. In the following example, **you do not need to worry about how the functions work** (though you can definitely try to figure them out, if you want to). The important things you need to understand are all inside the ``while True`` loop. We are using two things that you may not have seen before:

- ``some_list.append("thing")`` adds "thing" to the end of a list. We use this to keep track of the actions the user has made in a list called ``actions``.
- ``break`` forces the current looping structure to terminate. We use this to exit out of the ``while True`` loop if the user enters in a `secret code <https://en.wikipedia.org/wiki/Konami_Code>`_.


.. code-block:: python

    import microbit

    actions = []  
    current_action = ""

    def get_konami_action(sensitivity_amount):
        """Returns a single action that has occured on the Micro:bit, either a button a or b, then a tilt
        value of right, left, up or down. The sensitivity_amount affects all the tilt options."""
        x_tilt = microbit.accelerometer.get_x()
        y_tilt = microbit.accelerometer.get_y()

        if microbit.button_a.was_pressed():
            return "a"

        elif microbit.button_b.was_pressed():
            return "b"

        # if tilted more on one axis, use that axis to determine the 'direction' of the tilt
        elif abs(x_tilt) > abs(y_tilt):
            # use x axis
            if x_tilt > sensitivity_amount:
                return "right"
            
            elif x_tilt < -1 * sensitivity_amount:
                return "left"
            
        else:
            # use y axis
            if y_tilt > sensitivity_amount:
                return "down"
            
            elif y_tilt < -1 * sensitivity_amount:
                return "up"
        
    def konami_code(action_list):
        """Look for the pattern up, up, down, down, left, left, right, right, b, a at the end of a list.
        Return True if the pattern is found, False if it is not."""
        
        if len(action_list) < 10:
            return False
        else:
            return (action_list[-1] == "a" and action_list[-2] == "b" and
                    action_list[-3] == "right" and action_list[-4] == "right" and
                    action_list[-5] == "left" and action_list[-6] == "left" and
                    action_list[-7] == "down" and action_list[-8] == "down" and
                    action_list[-9] == "up" and action_list[-10] == "up")
        


    while True:
        # remember what the action was last time through the loop
        last_action = current_action
        current_action = get_konami_action(700)
        
        # is this a "new" action?
        if current_action != last_action and current_action != None:
            actions.append(current_action)
            print(actions)
        
        if konami_code(actions):
            break

    print("Easter egg time!!!")


.. Turtle Drawing
.. ----------------

.. Now that you have created some functions that let us easily find out what direction the Micro:bit is tilted in, let's use those functions to do some turtle drawing. Your program should be able to have your turtle:

.. - move forward when the Micro:bit is tilted forward
.. - move backward when the Micro:bit is tilted backward
.. - turn left when the Micro:bit is tilted left
.. - turn right when the Micro:bit is tilted right


.. **Extra Challenges**

.. - create a fruitful function ``totally_level(sensitivity_amount)`` that calls your ``vertical_tilt()`` and ``horizontal_tilt`` functions. ``totally_level()`` should return True if there is no vertical tilt and no horizontal tilt, and False otherwise.
.. - have the turtle ``stamp()`` it's image whenever the Micro:bit is held totally_level
.. - control whether the pen is up or down based on whether the Micro:bit is being held facing up or down
.. - **harder challenge** - adapt your code to work so that movement is not backwards when the Micro:bit is held facing down. The turtle should still move intuitively, but just not leave a trail behind it.


.. *Note: You will need to do this in Thonny, so there is no activecode area included below.* 


.. note:: If your class doesn't have access to Micro:bits, you will be working on an assignment that focuses on creating fruitful and non-fruitful functions.


Micro:bit Game Assignment
-------------------------

Use the examples we've done as a starting point, and come up with your own game that uses the Micro:bit and functions! You are welcome to combine the turtle module as well. At a minimum, your game must:

- use at least one fruitful function (that you have created). You are welcome to use the fruitful functions shown in our demos, but you need to create at least one of your own!
- use at least one non-fruitful function (that you have created).

Some ideas of things you might want to try creating include:

- "guess the time" game (in which a number of seconds is displayed on the Micro:bit, and the user needs to try to press a button as close to the correct amount of time as possible)
- bop-it game (display an A or B, and user needs to press the correct button. User gets more points the faster they can press the correct button. The game ends if the user presses the wrong button, or after a certain number of clicks.)
- have an "object" (led) fall from the top of the screen. The user needs to catch the object, and can move left/right by using the buttons or accelerometer. If they do not catch the object, the game ends.
- create a morse code visualizer, in which the user can type in a message, and the Micro:bit will display the message by flashing the LEDs using morse code. Another option would be to have the Micro:bit flash AND play beeps on your headphones (`see how to connect your headphones to the Micro:bit <https://makecode.microbit.org/projects/hack-your-headphones/make>`_)
- - dice rolling simulator, in which a random number is displayed on the Micro:bit, and used in the program you have running in Thonny
- anything else you can dream up!


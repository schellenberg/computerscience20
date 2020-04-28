.. qnum::
   :prefix: microbit-game
   :start: 1


Reaction Game with Micro:bit
====================================

.. topic:: Quick Overview of Day

    Play Micro:bit reaction game, and discuss how the code works. Add features to the game, if time.


.. reveal:: curriculum_addressed_microbit_game
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.



Micro:bit Reaction Game
-------------------------

In this game, you and a friend will compete to see who has faster reactions. After clicking Run, your Micro:bit will wait between 1 and 5 seconds, then display a happy face image. Whichever player presses their button (A or B) first gets one point. *Be careful! If you click your button too soon, you will lose 2 points!*


.. code-block:: python

    # Mico:bit Reaction Game
    # Computer Science 20
    # Dan Schellenberg

    import microbit
    import random
    import time


    def button_clicked(current_score, should_be_pressing):
        """Adds or subtracts from the current score, based on whether an image is showing."""
        if should_be_pressing == True:
            current_score = current_score + 1
        else:
            current_score = current_score - 2
            
        return current_score

    def show_winner(a_score, b_score):
        """Print winner to console, and display winner on Micro:bit."""
        if a_score > b_score:
            print("Player A wins!")
            microbit.display.show("A")
        else:
            print("Player B wins!")
            microbit.display.show("B")

    # global variables
    a_score = 0
    b_score = 0
    someone_pressed_button = True
    showing_image = False
    time_to_wait = 0
    starting_time = 0
    ending_time = 0

    # constants
    POINTS_TO_WIN_GAME = 5


    # game loop
    while True:
        # check if need to pick a new amount of time to wait
        if someone_pressed_button == True:
            microbit.display.clear()
            showing_image = False

            # pausing execution for 0.5 seconds stops players from accidentally clicking more than once
            time.sleep(0.5)

            # determine when the image should reappear on the microbit
            time_to_wait = random.randrange(1, 6)
            starting_time = time.time()  # unit is seconds

            someone_pressed_button = False
        
        # check if it is time to display the image
        time_now = time.time()
        time_since_start = time_now - starting_time
        
        # uncomment the following line to understand how the time works
        # print(time_since_start)
        
        # change the boolean to turn on the image if enough time has gone by
        if time_since_start > time_to_wait:
            showing_image = True
        
        # display image if enough time has elapsed
        if showing_image == True:
            microbit.display.show(microbit.Image.HAPPY)
        
        
        # deal with a button being pressed
        if microbit.button_a.is_pressed():
            a_score = button_clicked(a_score, showing_image)
            print("Player A:", a_score, "    Player B:", b_score)
            someone_pressed_button = True
            
        if microbit.button_b.is_pressed():
            b_score = button_clicked(b_score, showing_image)
            print("Player A:", a_score, "    Player B:", b_score)
            someone_pressed_button = True
        
        # if somebody wins, end the game
        if a_score >= POINTS_TO_WIN_GAME or b_score >= POINTS_TO_WIN_GAME:
            break

    show_winner(a_score, b_score)
    print("Game over!")



New Ideas Used in the Reaction Game
------------------------------------

As you read through the reaction game code, there are a number of things that may deserve some explanation. Notice that the structure of the code is generally:

- comment header
- import statements
- function definitions
- global variables / constants
- main code

Although you do not have to follow the structure given above exactly, it does provide a reasonable way to organize your code.

.. index:: constant

Another thing you likely noticed is that I used ALL_CAPS when creating a *constant*. In Python, a constant is just a regular variable (so it behaves the exact same way as any other variable). However, a common convention is to use ALL_CAPITAL_LETTERS_IN_THE_VARIABLE_NAME, which simply reminds us as programmers that this is a variable whose value should never be changed within our code.

.. index:: time.time()

I also used a new function from the ``time`` module in this program. ``time.time()`` returns the number of seconds that have elapsed since the *epoch*, which is how your computer keeps track of what the current time is. To understand what this means, call ``time.time()`` in Thonny's shell a few times. Notice that the number you get back from the function is a really large number, and that it has increased each time you call the function. It is important to realize that the unit of this number is **seconds**. You might find it helpful to uncomment the line containing ``print(time_since_start)`` to help you understand the ``time.time()`` function.

.. note:: The `Python docs section on time <https://docs.python.org/3/library/time.html#epoch>`_ define the epoch as "the point where the time starts, and is platform dependent. For Unix, the epoch is January 1, 1970, 00:00:00 (UTC). To find out what the epoch is on a given platform, look at ``time.gmtime(0)``." 

.. index:: break

The ``break`` command forces the nearest enclosing loop to terminate. In this case, it allows us to exit the ``while True`` infinite loop when one of the players has earned enough points to win the game.


Adapt the Code
------------------

Try the following with a partner (the person you were playing the game with):

- change the game so that you need only 3 points to win the game
- change the game so that a click at the wrong time makes you only lose 1 point instead of 2


Extra for Experts
~~~~~~~~~~~~~~~~~~

- change the game so that either a HAPPY face or a SKULL can be displayed. If it is a HAPPY face and a user clicks, they should get a point. However, if it is a SKULL and the user clicks, they should lose a point.
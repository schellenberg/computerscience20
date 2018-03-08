Reaction Game with Micro:bit
====================================

.. topic:: Quick Overview of Day

    WDTPD questions about functions. Play Micro:bit reaction game, and discuss how the code works. Add features to the game, if time.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.



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


Micro:bit Reaction Game
-------------------------

.. caution:: Need to improve the description of how to connect the micro:bit. It's the same way we did it before...

Copy/paste the following code into Thonny, and connect a Micro:bit to your computer. You will need to have the ``cs20-microbitio`` package installed (if you do not, just open Tools -> Manage Packages... and type it into the search bar). The Micro:bit also needs to have the ``bitio.hex`` file (drag and drop this file onto the Micro:bit in Windows Explorer/Mac Finder, or install the ``thonny-flash-microbitio`` plugin by going to Tools -> Manage plugins...).

In this game, you and a friend will compete to see who has faster reactions. After clicking Run, your Micro:bit will wait between 1 and 5 seconds, then display a happy face image. Whichever player presses their button (A or B) first gets one point. Be careful! If you click your button too soon, you will lose 2 points! 


.. code-block:: python

    # Mico:bit Reaction Game
    # Computer Science 20
    # Dan Schellenberg

    import microbit
    import random
    import time


    def button_clicked(current_score, should_be_pressing):
        if should_be_pressing == True:
            current_score += 1
        else:
            current_score -= 2
            
        return current_score


    # global variables
    a_score = 0
    b_score = 0
    run_reset_code = True
    showing_image = False
    time_to_wait = 0
    starting_time = 0
    ending_time = 0

    # constants
    POINTS_TO_WIN_GAME = 5


    # game loop
    while True:
        # check if need to pick a new amount of time to wait
        if run_reset_code == True:
            microbit.display.clear()
            showing_image = False

            # pausing execution for 1 second stops players from accidentally clicking more than once
            time.sleep(1)

            time_to_wait = random.randrange(1, 6)
            starting_time = time.time()

            run_reset_code = False
        
        # check if it is time to display the image
        time_now = time.time()
        time_since_start = time_now - starting_time
        if time_since_start > time_to_wait:
            showing_image = True
        
        if showing_image == True:
            microbit.display.show(microbit.Image.HAPPY)
        
        
        # deal with a button being pressed
        if microbit.button_a.is_pressed():
            a_score = button_clicked(a_score, showing_image)
            print("Player A:", a_score, "    Player B:", b_score)
            run_reset_code = True
            
            
        if microbit.button_b.is_pressed():
            b_score = button_clicked(b_score, showing_image)
            print("Player A:", a_score, "    Player B:", b_score)
            run_reset_code = True
        
        # if somebody wins, end the game
        if a_score >= POINTS_TO_WIN_GAME or b_score >= POINTS_TO_WIN_GAME:
            break

    print("Game over!")


Things to Explain in the Code
------------------------------

.. note:: This will be written up better soon. For now, use the following topic list to guide your class discussion regarding how the code works.

Talk through the following parts of the code:

- initializing the global variables with a value at the start of the code
- using ALL_CAPS when creating a constant (variable whose value should never be changed within your code)
- using an infinite loop for the game loop (``while True``)
- using booleans to keep track of the state of the program
- time.sleep(1)  -- comment out this line and run the code again...
- time.time()  -- run this in the Python interpreter to see what the function returns [The epoch is the point where the time starts, and is platform dependent. For Unix, the epoch is January 1, 1970, 00:00:00 (UTC). To find out what the epoch is on a given platform, look at time.gmtime(0). `Python time docs <https://docs.python.org/3/library/time.html#epoch>`_]
- might want to add a print(time_since_start) line, to be sure students understand what that variable is doing
- is_pressed() vs. was_pressed() for the button_a and button_b -- is_pressed() is used, since we only want to know "is it pressed RIGHT NOW"? If we use was_pressed(), micro:bit keeps track of whether it's been pressed since the last time that question was asked
- ``break`` to force an exit out of loop. In this case, it allows us to exit the ``while True`` infinite loop


Adapt the Code
------------------

Try the following with a partner (the person you were playing the game with):

- change the game so that you need only 3 points to win the game
- change the game so that a click at the wrong time makes you only lose 1 point instead of 2
- add a message when somebody wins. In Thonny, your program should say something like "Player A wins!", while on the Micro:bit, an "A" should be shown. You should also display a message if it is a tie.

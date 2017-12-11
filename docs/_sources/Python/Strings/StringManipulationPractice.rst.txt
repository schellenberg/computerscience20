.. qnum::
   :prefix: string-manipulation-practice
   :start: 1

String Manipulation Practice
==================================

.. topic:: Quick Overview of Day

    WDTPD string questions. Practice problems with string manipulation. Time to catch up on any string practice problems not completed on previous days.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

**What will the following programs output? Why?**

.. activecode:: wdtpd_string_manipulation_practice_1
    :caption: What will this program print?

    fruit = "grapefruit"
    for item in fruit:
        print(item)

    # after you determine what this will print, rename the variable name item to something more helpful for understanding the loop


.. activecode:: wdtpd_string_manipulation_practice_2
    :caption: What will this program print?

    fruit = "grapefruit"
    for counter in len(fruit):
        print(fruit[item])

.. activecode:: wdtpd_string_manipulation_practice_3
    :caption: What will this program print?

    sentence = "saskatoon saskatchewan"
    for current_index in range(len(sentence)):
      if current_index % 4 == 0:
          print(sentence[current_index])

.. activecode:: wdtpd_string_manipulation_practice_4
    :caption: What will this program print?

    def foo(text):
        count = 0
        for c in text:
            if c == "a":
                count += 1
        return(count)

    print(foo("banana"))
    
    # print(foo("orange"))

.. Controlling a Turtle With Strings
.. -----------------------------------

.. By combining what we know about moving turtles on the screen, and what we have learned about traversing strings, we can now write a program that controls the movement of a turtle based on a string. For example, the string ``FF+F-FF`` might make a turtle:

.. - move forward by some distance twice in a row
.. - turn right by some angle
.. - move forward again
.. - turn left by some angle
.. - move forward twice in a row 

.. To turn a string like ``FF+F-FF`` into a set of instructions that our turtle can execute, we need to look at each character of the string, one at a time. We can do this easily with a for loop, as you can see in the following example.

.. .. activecode:: string_turtle_movement_1
    
..     import turtle

..     canvas = turtle.Screen()
..     escher = turtle.Turtle()
..     escher.speed(1)

..     instructions = "FF+F-FF"

..     for task in instructions:
..         if task == "F":
..             escher.forward(25)
..         elif task == "+":
..             escher.right(45)
..         elif task == "-":
..             escher.left(45)


.. .. note:: 

..     In the code above, try:

..     - changing the instruction string to have the turtle draw a different image
..     - adding three additional possible instruction for the turtle. Any ``B`` in the string should be interpreted as an instruction to move backwards (by the same amount as ``F`` moves forward). A ``U`` should cause the turtle to pick up it's pen (so it doesn't draw as it moves). A ``D`` should cause the turtle should put down it's pen (so that it draws as it moves).
..     - increasing the speed of the turtle
    
..     After completing the tasks above, try having the turtle use the following instruction string: ``UBBBBBBDF-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F``

Letter Counting
----------------

Assign to a variable in your program a triple-quoted string that contains
your favorite paragraph of text - perhaps a poem, a speech, instructions
to bake a cake, some inspirational verses, etc.

Write a function that counts the number of alphabetic characters (a through z, or A through Z) in your text and then keeps track of how many are the letter 'e'.  Your function should print an analysis of the text like this::

    Your text contains 243 alphabetic characters, of which 109 (44.8%) are 'e'.


.. activecode:: letter_counting_demo

    def count(p):
        lows = "abcdefghijklmnopqrstuvwxyz"
        ups =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        numberOfe = 0
        totalChars = 0
        for achar in p:
            if achar in lows or achar in ups:
                totalChars = totalChars + 1
                if achar == 'e':
                    numberOfe = numberOfe + 1

        percent_with_e = (numberOfe / totalChars) * 100
        print("Your text contains", totalChars, "alphabetic characters of which", numberOfe, "(", percent_with_e, "%)", "are 'e'.")


    p = '''
    "If the automobile had followed the same development cycle as the computer, a
    Rolls-Royce would today cost $100, get a million miles per gallon, and explode
    once a year, killing everyone inside."
    -Robert Cringely
    '''

    count(p)

Substitution Cipher
--------------------

Write a function that implements a substitution cipher.  In a substitution
cipher one letter is substituted for another to garble the message.  For
example A -> Q, B -> T, C -> G etc.  your function should take two
parameters, the message you want to encrypt, and a string that represents
the mapping of the 26 letters in the alphabet.  Your function should
return a string that is the encrypted version of the message.

.. activecode:: cipher_encryption_message

    def encrypt(message, cipher):
        # delete the line below and replace with your code
        return "an encrypted message"


    cipher = "badcfehgjilknmporqtsvuxwzy"

    encrypted = encrypt('hello world', cipher)
    print(encrypted)


Write a function that decrypts the message from the previous exercise.  It
should also take two parameters.  The encrypted message,
and the mixed up alphabet.  The function should return a string that is
the same as the original unencrypted message.


.. activecode:: cipher_decryption_message

    def decrypt(encrypted, cipher):
        # delete the line below and replace with your code
        return "a decrypted message"

    def encrypt(message, cipher):
        # replace this with your encrypt function from the last exercise
        return "an encrypted message"

    cipher = "badcfehgjilknmporqtsvuxwzy"

    encrypted = encrypt('hello world', cipher)
    print(encrypted)

    decrypted = decrypt(encrypted, cipher)
    print(decrypted)


.. def encrypt(message, cipher):
..     alphabet = "abcdefghijklmnopqrstuvwxyz"
..     encrypted = ''
..     for char in message:
..         if char == ' ':
..             encrypted = encrypted + ' '
..         else:
..             pos = alphabet.index(char)
..             encrypted = encrypted + cipher[pos]
..     return encrypted

.. def decrypt(encrypted, cipher):
..     alphabet = "abcdefghijklmnopqrstuvwxyz"
..     decrypted = ''
..     for char in encrypted:
..         if char == ' ':
..             decrypted = decrypted + ' '
..         else:
..             pos = cipher.index(char)
..             decrypted = decrypted + alphabet[pos]
..     return decrypted


.. cipher = "badcfehgjilknmporqtsvuxwzy"

.. encrypted = encrypt('hello world', cipher)
.. print(encrypted)

.. decrypted = decrypt(encrypted, cipher)
.. print(decrypted)


Practice Problems
------------------

Try the following practice problems. You can either work directly in the textbook, or use Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish!

Keep working on the practice problems from the previous two days. If you complete these ahead of your classmates, ask your teacher what you should work on.
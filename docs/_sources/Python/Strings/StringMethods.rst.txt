.. qnum::
   :prefix: string-methods
   :start: 1


String Methods
==================================

.. topic:: Quick Overview of Day

    WDTPD string questions. Practice problems with string manipulation. Introduction to additional string methods. Time to catch up on any string practice problems not completed on previous days.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

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


Letter Counting
----------------

.. note:: This example is intended to be done together as a class, with the teacher explaining the problem at hand, then building a possible solution with the students.

By traversing through a string, we are able to analyze text for patterns. For example, the code below assigns a variable ``p`` in the program a triple-quoted string that contains a paragraph of text. The function ``count`` determines the number of alphabetic characters (a through z, or A through Z) in the text and then keeps track of how many are the letter 'e'.  Finally, the function prints an analysis of the text like this::

    Your text contains 243 alphabetic characters, of which 109 (44.8%) are 'e'.


.. activecode:: letter_counting_demo

    def count(paragraph):
        lows = "abcdefghijklmnopqrstuvwxyz"
        ups =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        number_of_e = 0
        total_chars = 0
        for this_char in paragraph:
            if this_char in lows or this_char in ups:
                total_chars = total_chars + 1
                if this_char == "e":
                    number_of_e = number_of_e + 1

        percent_with_e = (number_of_e / total_chars) * 100
        print("Your text contains", total_chars, "alphabetic characters of which", number_of_e, "(", percent_with_e, "%)", "are 'e'.")


    paragraph = '''
    "If the automobile had followed the same development cycle as the computer, a
    Rolls-Royce would today cost $100, get a million miles per gallon, and explode
    once a year, killing everyone inside."
    -Robert Cringely
    '''

    count(paragraph)

.. note:: 

    Adapt the code above so that it:

    - analyses a different paragraph of text (perhaps your favorite poem, saying, etc.)
    - improve the print statement to not have extra spaces (you will need to use concatenation)
    - use the `round function <https://docs.python.org/3/library/functions.html#round>`_ to improve the readability of the percentage calculated (round the percentage to 2 decimals)
    - change the function so that you can pass in (as an argument) which character you want to count


String Methods
--------------

We previously saw that each turtle instance has its own attributes and a number of methods that can be applied to the instance.  For example, we wrote ``tess.right(90)`` when we wanted the turtle object ``tess`` to perform the ``right`` method to turn to the right 90 degrees.  The "dot notation" is the way we connect the name of an object to the name of a method it can perform.  

Strings are also objects.  Each string instance has its own attributes and methods.  The most important attribute of the string is the collection of characters.  There are a wide variety of methods.  Try the following program.

.. activecode:: string_methods_example1

    some_string = "Hello, World"
    print(some_string.upper())

    other_string = some_string.lower()
    print(other_string)


In this example, ``upper`` is a method that can be invoked on any string object 
to create a new string in which all the characters are in uppercase.  ``lower`` works in a similar fashion changing all characters in the string to lowercase.  (The original string ``some_string`` remains unchanged.  A new string ``other_string`` is created.)

In addition to ``upper`` and ``lower``, the following table provides a summary of some other useful string methods.  There are a few activecode examples that follow so that you can try them out.

==========  ==============      ==================================================================
Method      Parameters          Description
==========  ==============      ==================================================================
upper       none                Returns a string in all uppercase
lower       none                Returns a string in all lowercase
capitalize  none                Returns a string with first character capitalized, the rest lower

strip       none                Returns a string with the leading and trailing whitespace removed
lstrip      none                Returns a string with the leading whitespace removed
rstrip      none                Returns a string with the trailing whitespace removed
count       item                Returns the number of occurrences of item
replace     old, new            Replaces all occurrences of old substring with new

center      width               Returns a string centered in a field of width spaces
ljust       width               Returns a string left justified in a field of width spaces
rjust       width               Returns a string right justified in a field of width spaces

find        item                Returns the leftmost index where the substring item is found, or -1 if not found
rfind       item                Returns the rightmost index where the substring item is found, or -1 if not found
index       item                Like find except causes a runtime error if item is not found
rindex      item                Like rfind except causes a runtime error if item is not found
==========  ==============      ==================================================================

You should experiment with these methods so that you understand what they do.  Note once again that the methods that return strings do not change the original.  You can also consult the `Python documentation for strings <https://docs.python.org/3/library/stdtypes.html#string-methods>`_.

.. activecode:: string_methods_example2

    some_string = "    Hello, World    "

    els = some_string.count("l")
    print(els)

    print("***" + some_string.strip() + "***")
    print("***" + some_string.lstrip() + "***")
    print("***" + some_string.rstrip() + "***")

    news = some_string.replace("o", "***")
    print(news)


.. activecode:: string_methods_example3


    food = "banana bread"
    print(food.capitalize())

    print("*" + food.center(25) + "*")
    print("*" + food.ljust(25) + "*")     # stars added to show bounds
    print("*" + food.rjust(25) + "*")

    print(food.find("e"))
    print(food.find("na"))
    print(food.find("b"))

    print(food.rfind("e"))
    print(food.rfind("na"))
    print(food.rfind("b"))

    print(food.index("e"))


**Check your understanding**

.. mchoice:: string_methods_check_understanding1
   :answer_a: 0
   :answer_b: 2
   :answer_c: 3
   :correct: c
   :feedback_a: There are definitely o and p characters.
   :feedback_b: There are 2 o characters but what about p?
   :feedback_c: Yes, add the number of o characters and the number of p characters.


   What is printed by the following statements?
   
   .. code-block:: python
   
      s = "python rocks"
      print(s.count("o") + s.count("p"))




.. mchoice:: string_methods_check_understanding2
   :answer_a: yyyyy
   :answer_b: 55555
   :answer_c: n
   :answer_d: Error, you cannot combine all those things together.
   :correct: a
   :feedback_a: Yes, s[1] is y and the index of n is 5, so 5 y characters.  It is important to realize that the index method has precedence over the repetition operator.  Repetition is done last.
   :feedback_b: Close.  5 is not repeated, it is the number of times to repeat.
   :feedback_c: This expression uses the index of n
   :feedback_d: This is fine, the repetition operator used the result of indexing and the index method.


   What is printed by the following statements?
   
   .. code-block:: python
   
      s = "python rocks"
      print(s[1] * s.index("n"))



Substitution Cipher
--------------------

.. note:: This example is intended to be done together as a class, with the teacher explaining the problem at hand, then building a possible solution with the students.

Write a function that implements a substitution cipher.  In a substitution
cipher one letter is substituted for another to garble the message.  For
example A -> Q, B -> T, C -> G etc.  your function should take two
parameters, the message you want to encrypt, and a string that represents
the mapping of the 26 letters in the alphabet.  Your function should
return a string that is the encrypted version of the message.

You will need to use either the ``find`` or ``index`` string method as part of your solution.

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


.. reveal:: substitution_cipher_solution
    :showtitle: Reveal Solution

    One possible solution is as follows:

    .. code-block:: python
    
        def encrypt(message, cipher):
            alphabet = "abcdefghijklmnopqrstuvwxyz"
            encrypted = ''
            for char in message:
                if char == ' ':
                    encrypted = encrypted + ' '
                else:
                    pos = alphabet.index(char)
                    encrypted = encrypted + cipher[pos]
            return encrypted

        def decrypt(encrypted, cipher):
            alphabet = "abcdefghijklmnopqrstuvwxyz"
            decrypted = ''
            for char in encrypted:
                if char == ' ':
                    decrypted = decrypted + ' '
                else:
                    pos = cipher.index(char)
                    decrypted = decrypted + alphabet[pos]
            return decrypted


        cipher = "badcfehgjilknmporqtsvuxwzy"

        encrypted = encrypt('hello world', cipher)
        print(encrypted)

        decrypted = decrypt(encrypted, cipher)
        print(decrypted)


Practice Problems
------------------

Keep working on the practice problems from the previous two days. If you complete these ahead of your classmates, ask your teacher what you should work on.
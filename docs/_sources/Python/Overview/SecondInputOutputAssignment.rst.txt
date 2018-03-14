Input/Output Strings Assignment
===============================

.. topic:: Quick Overview of Day

    Triple quoted strings can span multiple lines, and contain other types of quotes. Work on a Python assignment, focused on input/output of strings, and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


A Bit More Detail About Strings
--------------------------------

Strings in Python can be enclosed in either single quotes (``'``) or double
quotes (``"`` - the double quote character), or three of the same separate quote characters (``'''`` or ``"""``).

.. activecode:: ch02_4
    :nocanvas:

    print(type('This is a string.') )
    print(type("And so is this.") )
    print(type("""and this.""") )
    print(type('''and even this...''') )


Double quoted strings can contain single quotes inside them, as in ``"Bruce's
beard"``, and single quoted strings can have double quotes inside them, as in
``'The knights who say "Ni!"'``.
Strings enclosed with three occurrences of either quote symbol are called
triple quoted strings.  They can contain either single or double quotes:

.. activecode:: ch02_5
    :nocanvas:

    print('''"Oh no", she exclaimed, "Ben's bike is broken!"''')

Triple quoted strings can even span multiple lines:

.. activecode:: ch02_6
    :nocanvas:

    print("""This message will span
    several lines
    of the text.""")

Python doesn't care whether you use single or double quotes or the
three-of-a-kind quotes to surround your strings.  Once it has parsed the text of
your program or command, the way it stores the value is identical in all cases,
and the surrounding quotes are not part of the value.

.. activecode:: ch02_7
    :nocanvas:

    print('This is a string.')
    print("""And so is this.""")


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

Can you fix the error in the following programs?

.. activecode:: wdtpd_other_input_methods_1
    :caption: Find and fix the error in this program!
    :nocodelens:

    song_quote = 'Leonard Cohen, in his song "Anthem", sings "There is a crack in everything; That's how the light gets in."'

    print(song_quote)


.. activecode:: wdtpd_other_input_methods_2
    :caption: Find and fix the errors in this program!
    :nocodelens:

    part_one = "Leonard Cohen, in his song "Anthem", sings"
    part_two = 'There is a crack in everything; That's how the light gets in.'

    print(part_one + part_two)

.. activecode:: wdtpd_other_input_methods_3
    :caption: Find and fix the errors in this program!
    :nocodelens:

    interesting_quotes = 'There's a lot of people who have said interesting things. Some fun quotes include:
    
    "What I cannot create, I do not understand." - Richard Feynman
    "Judge a man by his questions rather than by his answers." - Voltaire
    "Our ignorance of history causes us to slander our own times." - Gustave Flaubert'

    print(interesting_quotes)


Remember that a single equal sign ``=`` is used to **assign** a value. Two equal signs ``==`` are used when **comparing** a value.

Try the following code with ``x = 42``, ``x = 32``, ``x = 2``, ``x = 82``, and ``x = 142``.

.. activecode:: wdtpd_input_output_strings_1
    :caption: What will this program print?
    :nocodelens:

    x = 42
    if x < 10:
        x = x + 10
    elif x < 40:
        x = x + 5
    elif x < 70:
        x = x - 10
    elif x < 100:
        x = x - 5
    else:
        print("big number!")

    print(x)


.. activecode:: wdtpd_input_output_strings_2
    :caption: What will this program print?
    :nocodelens:

    age = input("How old are you?")
    print("Wow! Already " + age + " years old!")


Try the following, entering in ``17``. How about ``14``? Can you fix it? *Hint: think data types!*

.. activecode:: wdtpd_input_output_strings_3
    :caption: What will this program print?
    :nocodelens:

    age = input("How old are you?")
    if age > 15:
        print("Wow! Already " + age + " years old!")



.. note:: You have now had a chance to practice a number of problems that involved taking in input from the user, performing some operation on that input, and printing out a result. You will now put the knowledge you've gained into practice on your first Python hand-in assignment. Your teacher may choose to give you a different assignment, but one possible assignment is given below.


Madlibs Assignment
----------------------------------

You can either work directly in the textbook, or using Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish for the day!

Your assignment is to make a program that asks the user choose which madlib they would like to use (your program must have at least two madlibs for the user to choose from), take in user input, and print out the result.

If you are not familiar with madlibs, you may want to investigate what they are all about by searching the web for a "madlibs website". In essence, you want to take a familiar story and make it funny by randomly placing your users words into the story. For example, you might take the classic Old MacDonald rhyme::

    Old Macdonald had a farm, E-I-E-I-O
    and on that farm he had an cow, E-I-E-I-O
    with a moo moo here
    and a moo moo there,
    here a moo, there a moo,
    everywhere a moo moo,
    Old Macdonald had a farm, E-I-E-I-O.

In your program, you could take user input::

    Adjective: Post-war
    Noun: dog toy
    Animal: Redtail Catfish
    Noise: crack

After processing the user input, your program might print out::

    Post-War Macdonald had a dog toy, E-I-E-I-O
    and on that dog toy he had an Redtail Catfish, E-I-E-I-O
    with a crack crack here
    and a crack crack there,
    here a crack, there a crack,
    everywhere a crack crack,
    Post-War Macdonald had a dog toy, E-I-E-I-O.

Both of your madlibs should take in at least 5 words from the user, but no more than 10. Feel free to use any old school rhyme, or something of your own creation. Make sure your story makes sense, though!

Remember to use a comment header at the top of your program!

**Extra for Experts**

- instead of having the user enter in all of the parts of speech, have the computer choose some of the words at random. You can do this in one of two ways:
- easier: create a list of possible words, and have Python choose one of these words `at random <http://stackoverflow.com/questions/306400/how-do-i-randomly-select-an-item-from-a-list-using-python>`_.
- harder: create text files for each of the parts of speech that you will require (ie. nouns.txt, adjectives.txt, etc) and have the computer randomly choose one of the words from the appropriate text file to complete the madlib. Hint: To simplify things, I'd recommend that you generate the text file with one word per line.


.. activecode:: second_input_output_assignment_scratch_work_area
    :nocodelens:

    # Madlib Assignment
    # Put Your Name Here
    # Put the Date Here

    # your code goes here



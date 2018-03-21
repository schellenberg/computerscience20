Which Quotes to Use When Creating Strings
==========================================

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



Assignment Work Time
---------------------

Please spend the rest of the class continuing to work on your current Python assignment (likely something emphasizing user input and output). 

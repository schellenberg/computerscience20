.. qnum::
   :prefix: intro-string-operators
   :start: 1


String Operators and Assignment Work Time
==========================================

.. topic:: Quick Overview of Day

    Explore how the ``+`` and ``*`` operators work on strings. Continue to work on the first Python assignment, focused on input/output, data types and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


What Does This Program Do?
---------------------------

As you saw in the WDTPD questions from yesterday, using the ``*`` operator with strings results in something very different than using the ``*`` operator with numeric data. Consider the following questions carefully, being sure you understand WHY they output what they do.

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

**What will the following programs output? Why?**

What will this print if you enter in a ``15``? How about typing ``hey``? 

.. activecode:: wdtpd_string_operators_1
    :caption: What will this program print?
    :nocodelens:

    number = input("What value should we change? ")
    changed_value = number * 4
    print(changed_value)

Enter ``3`` and ``5`` when you run the code below. What will the program print? *Hint: it will not be an error!*

.. activecode:: wdtpd_string_operators_2
    :caption: What will this program print?
    :nocodelens:

    number_one = input("Please enter the first number: ")
    number_two = input("Please enter the second number: ")
    combined_value = number_one + number_two
    print(combined_value)

Type in your first name and last name when you run the code below. How can you fix this code to write your name properly?

.. activecode:: wdtpd_string_operators_3
    :caption: Fix the output of this code.
    :nocodelens:

    first_name = input("Please enter your first name: ")
    last_name = input("Please enter your last name: ")
    full_name = first_name + last_name
    print("Good to see you" + full_name)


.. index:: concatenation

Operations on Strings
---------------------

In general, you cannot perform mathematical operations on strings, even if the
strings look like numbers. The following are illegal (assuming that ``message``
has type string):

.. sourcecode:: python
    
    message - 1   
    "Hello" / 123   
    message * "Hello"   
    "15" + 2

Interestingly, the ``+`` operator does work with strings, but for strings, the
``+`` operator represents **concatenation**, not addition.  Concatenation means
joining the two operands by linking them end-to-end. This is the equivalent of using the Scratch |scratch_join_block_inline| join block.  For example:

.. |scratch_join_block_inline| image:: images/scratch_join_block.png

.. activecode:: string_concatenation
    :nocanvas:

    fruit = "banana"
    bakedGood = " nut bread"
    print(fruit + bakedGood)

The output of this program is ``banana nut bread``. The space before the word
``nut`` is part of the string and is necessary to produce the space between
the concatenated strings.  Take out the space and run it again.

The ``*`` operator also works on strings.  It performs repetition. For example,
``'Fun'*3`` is ``'FunFunFun'``. One of the operands has to be a string and the
other has to be an integer.

.. activecode:: string_repetition
    :nocanvas:

    print("Go" * 6)

    name = "Riders"
    print(name * 3)

    print(name + "Go" * 3)

    print((name + "Go") * 3)

This interpretation of ``+`` and ``*`` makes sense by analogy with
addition and multiplication. Just as ``4*3`` is equivalent to ``4+4+4``, we
expect ``"Go"*3`` to be the same as ``"Go"+"Go"+"Go"``, and it is.  Note also in the last
example that the order of operations for ``*`` and ``+`` is the same as it was for arithmetic.
The repetition is done before the concatenation.  If you want to cause the concatenation to be
done first, you will need to use parenthesis.


**Check your understanding**

.. mchoice:: string_operators_practice_1
   :answer_a: python rocks
   :answer_b: python
   :answer_c: pythonrocks
   :answer_d: Error, you cannot add two strings together.
   :correct: c
   :feedback_a: Concatenation does not automatically add a space.
   :feedback_b: The expression first_string + second_string is evaluated first, then the resulting string is printed.
   :feedback_c: Yes, the two strings are glued end to end.
   :feedback_d: The + operator has different meanings depending on the operands, in this case, two strings.


   What is printed by the following statements?
   
   .. code-block:: python

      first_string = "python"
      second_string = "rocks"
      print(first_string + second_string)



.. mchoice:: string_operators_practice_2
   :answer_a: python!!!
   :answer_b: python!python!python!
   :answer_c: pythonpythonpython!
   :answer_d: Error, you cannot perform concatenation and repetition at the same time.
   :correct: a
   :feedback_a: Yes, repetition has precedence over concatenation
   :feedback_b: Repetition is done first.
   :feedback_c: The repetition operator is working on the exclamation variable.
   :feedback_d: The + and * operator are defined for strings as well as numbers.


   What is printed by the following statements?
   
   .. code-block:: python
 
      first_string = "python"
      exclamation = "!"
      print(first_string + exclamation * 3)


Assignment Work Time
---------------------

Please spend the rest of the class continuing to work on your current Python assignment (likely some kind of input/output assignment). If you are completely done that assignment, you may want to look ahead at the next assignment or ask your teacher what additional challenges you can attempt.
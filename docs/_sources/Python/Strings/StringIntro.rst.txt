.. qnum::
   :prefix: string-exploration
   :start: 1


String Index, Length, Slicing and Traversal
============================================

.. topic:: Quick Overview of Day

    Explore string operators, index values, length of strings, string slicing, and traversing a string using a for loop (by item).


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.


Throughout the portion of the course, we have used strings to represent words or phrases that we
wanted to print out.  Our definition was simple:  a string is simply some characters inside quotes.  We will now explore strings in much more detail.


A Collection Data Type
----------------------

So far we have seen built-in types like: ``int``, ``float``, 
``bool``, ``str`` and we've seen lists. 
``int``, ``float``, and
``bool`` are considered to be simple or primitive data types because their values are not composed
of any smaller parts.  They cannot be broken down.
On the other hand, strings and lists are different from the others because they
are made up of smaller pieces.  In the case of strings, they are made up of smaller
strings each containing one **character**.  

Types that are comprised of smaller pieces are called **collection data types**.
Depending on what we are doing, we may want to treat a collection data type as a
single entity (the whole), or we may want to access its parts. This ambiguity is useful.

Strings can be defined as sequential collections of characters.  This means that the individual characters
that make up the string are assumed to be in a particular order from left to right.

A string that contains no characters, often referred to as the **empty string**, is still considered to be a string.  It is simply a sequence of zero characters and is represented by '' or "" (two single or two double quotes with nothing in between).


Concatenation Reminder
-----------------------

As we have seen before, you cannot perform mathematical operations on strings, even if the
strings look like numbers. The one exception to this rule is that the ``+`` operator does work with strings, but for strings, the ``+`` operator represents **concatenation**, not addition.  As we have learned previously, concatenation means joining the two operands by linking them end-to-end. For example:

.. activecode:: concatenation_reminder_demo
    :nocanvas:

    fruit = "banana"
    bakedGood = " nut bread"
    print(fruit + bakedGood)




Index Operator: Working with the Characters of a String
-------------------------------------------------------

The **indexing operator** (Python uses square brackets to enclose the index) 
selects a single character from a string.  The characters are accessed by their position or 
index value.  For example, in the string shown below, the 14 characters are indexed left to right from postion 0 to position 13.  


.. image:: images/indexvalues.png
   :alt: index values

It is also the case that the positions are named from right to left using negative numbers where -1 is the rightmost
index and so on.
Note that the character at index 9 (or -5) is the blank/space character.


.. activecode:: string_index_1
    
    place = "Saskatoon Sask"
    some_char = place[4]
    print(some_char)
    
    last_char = place[-1]
    print(last_char)

The expression ``place[4]`` selects the character at index 4 from ``place``, and creates a new
string containing just this one character. The variable ``some_char`` refers to the result. 

Remember that computer scientists often start counting
from zero. The letter at index zero of ``"Saskatoon Sask"`` is ``S``.  So at
position ``[4]`` we have the letter ``a``.

If you want the zero-eth letter of a string, you just put 0, or any expression
with the value 0, in the brackets.  Give it a try.

The expression in brackets is called an **index**. An index specifies a member
of an ordered collection.  In this case the collection of characters in the string. The index
*indicates* which character you want. It can be any integer
expression so long as it evaluates to a valid index value.

Note that indexing returns a *string* --- Python has no special type for a single character.
It is just a string of length 1.

Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: string_index_test_question_1
   :answer_a: t
   :answer_b: h
   :answer_c: c
   :answer_d: Error, you cannot use the [ ] operator with a string.
   :correct: b
   :feedback_a: Index locations do not start with 1, they start with 0.
   :feedback_b: Yes, index locations start with 0.
   :feedback_c: sentence[-3] would return c, counting from right to left.
   :feedback_d: [ ] is the index operator


   What is printed by the following statements?
      
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[3])



.. mchoice:: string_index_test_question_2
   :answer_a: tr
   :answer_b: ps
   :answer_c: nn
   :answer_d: Error, you cannot use the [ ] operator with the + operator.
   :correct: a
   :feedback_a: Yes, indexing operator has precedence over concatenation.
   :feedback_b: p is at location 0, not 2.
   :feedback_c: n is at location 5, not 2.
   :feedback_d: [ ] operator returns a string that can be concatenated with another string.


   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[2] + sentence[-5])



Length
------

The ``len`` function, when applied to a string, returns the number of characters in a string.

.. activecode:: string_length_1
    
    fruit = "Banana"
    print(len(fruit))
    

To get the last letter of a string, you might be tempted to try something like
this:

.. activecode:: string_length_2
    
    fruit = "Banana"
    size = len(fruit)
    last = fruit[size]       # ERROR!
    print(last)

That won't work. It causes the runtime error
``IndexError: string index out of range``. The reason is that there is no
letter at index position 6 in ``"Banana"``. 
Since we started counting at zero, the six indexes are
numbered 0 to 5. To get the last character, we have to subtract 1 from
the length.  Give it a try in the example above.

.. activecode:: string_length_3
    
    fruit = "Banana"
    size = len(fruit)
    last_char = fruit[size-1]
    print(last_char)

Alternatively in Python, we can use **negative indices**, which count backward from the
end of the string. The expression ``fruit[-1]`` yields the last letter,
``fruit[-2]`` yields the second to last, and so on.  Try it!  
Most other languages do *not* allow the negative indices, but they are a handy feature of Python!


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: string_length_test_question_1
   :answer_a: 11
   :answer_b: 12
   :correct: b
   :feedback_a: The blank counts as a character.
   :feedback_b: Yes, there are 12 characters in the string.


   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(len(sentence))



.. mchoice:: string_length_test_question_2
   :answer_a: o
   :answer_b: r
   :answer_c: s
   :answer_d: Error, len(sentence) is 12 and there is no index 12.
   :correct: b
   :feedback_a: Take a look at the index calculation again, len(sentence)-5.
   :feedback_b: Yes, len(sentence) is 12 and 12-5 is 7.  Use 7 as index and remember to start counting with 0.
   :feedback_c: sentence is at index 11
   :feedback_d: You subtract 5 before using the index operator so it will work.


   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[len(sentence)-5])


.. mchoice:: string_length_test_question_3
   :answer_a: c
   :answer_b: k
   :answer_c: s
   :answer_d: Error, negative indices are illegal.
   :correct: a
   :feedback_a: Yes, 3 characters from the end.
   :feedback_b: Count backward 3 characters.
   :feedback_c: When expressed with a negative index the last character s is at index -1.
   :feedback_d: Python does use negative indices to count backward from the end.


   What is printed by the following statements?
   
   .. code-block:: python
   
      sentence = "python rocks"
      print(sentence[-3])



The Slice Operator
------------------

A substring of a string is called a **slice**. Selecting a slice is similar to
selecting a character:

.. activecode:: string_slice_1
    
    places = "Regina, Estevan, and Melville"
    print(places[0:6])
    print(places[8:15])
    print(places[21:29])
    

The `slice` operator ``[n:m]`` returns the part of the string from the n'th character
to the m'th character, including the first but excluding the last. In other words,  start with the character at index n and
go up to but do not include the character at index m.
This
behavior may seem counter-intuitive but if you recall the ``range`` function, it did not include its end
point either.

If you omit the first index (before the colon), the slice starts at the
beginning of the string. If you omit the second index, the slice goes to the
end of the string.

There is no Index Out Of Range exception for a slice. A slice is forgiving and shifts any offending index to something legal. 

.. activecode:: string_slice_2
    
    fruit = "banana"
    print(fruit[:3])
    print(fruit[3:])
    print(fruit[3:-10])
    print(fruit[3:99])

.. note:: 

    What do you think ``fruit[:]`` means?


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: string_length_test_question_1
   :answer_a: python
   :answer_b: rocks
   :answer_c: hon r
   :answer_d: Error, you cannot have two numbers inside the [ ].
   :correct: c
   :feedback_a: That would be sentence[0:6].
   :feedback_b: That would be sentence[7:].
   :feedback_c: Yes, start with the character at index 3 and go up to but not include the character at index 8.
   :feedback_d: This is called slicing, not indexing.  It requires a start and an end.


   What is printed by the following statements?
   
   .. code-block:: python

      sentence = "python rocks"
      print(sentence[3:8])



.. mchoice:: string_length_test_question_2
   :answer_a: rockrockrock
   :answer_b: rock rock rock
   :answer_c: rocksrocksrocks
   :answer_d: Error, you cannot use repetition with slicing.
   :correct: a
   :feedback_a: Yes, rock starts at 7 and goes through 10.  Repeat it 3 times.
   :feedback_b: Repetition does not add a space.
   :feedback_c: Slicing will not include the character at index 11.  Just up to it (10 in this case).
   :feedback_d: The slice will happen first, then the repetition.  So it is ok.


   What is printed by the following statements?
   
   .. code-block:: python

      sentence = "python rocks"
      print(sentence[7:11] * 3)



Traversal and the ``for`` Loop: By Item
---------------------------------------

A lot of computations involve processing a collection one item at a time.  For strings this means
that we would like to process one character at a time.
Often we start at the beginning, select each character in turn, do something
to it, and continue until the end. This pattern of processing is called a
**traversal**.

We have previously seen that the ``for`` statement can iterate over the items of a sequence (a list of names in the case below).

.. activecode:: string_for_loop_by_item_1
    :nocanvas:

    for a_name in ["Joe", "Amy", "Brad", "Angelina", "Zuki", "Thandi", "Paris"]:
        invitation = "Hi " + a_name + ".  Please come to my party on Saturday!"
        print(invitation)
      
Recall that the loop variable takes on each value in the sequence of names.  The body is performed once for each name.  The same was true for the sequence of integers created by the ``range`` function.

.. activecode:: string_for_loop_by_item_2
    :nocanvas:

    for a_value in range(10):
        print(a_value)


Since a string is simply a sequence of characters, the ``for`` loop iterates over each character automatically.

.. activecode:: string_for_loop_by_item_3
    :nocanvas:

    for a_char in "Go Spot Go":
        print(a_char)

The loop variable ``a_char`` is automatically reassigned each character in the string "Go Spot Go".
We will refer to this type of sequence iteration as **iteration by item**.  
Note that it is only possible to process the characters one at a time from left to right.

Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: string_for_loop_by_item_test_question_1
   :answer_a: 10
   :answer_b: 11
   :answer_c: 12
   :answer_d: Error, the for statement needs to use the range function.
   :correct: c
   :feedback_a: Iteration by item will process once for each item in the sequence.
   :feedback_b: The blank is part of the sequence.
   :feedback_c: Yes, there are 12 characters, including the blank.
   :feedback_d: The for statement can iterate over a sequence item by item.


   How many times is the word HELLO printed by the following statements?
   
   .. code-block:: python

      s = "python rocks"
      for ch in s:
          print("HELLO")

   
.. mchoice:: string_for_loop_by_item_test_question_2
   :answer_a: 4
   :answer_b: 5
   :answer_c: 6
   :answer_d: Error, the for statement cannot use slice.
   :correct: b
   :feedback_a: Slice returns a sequence that can be iterated over.
   :feedback_b: Yes, The blank is part of the sequence returned by slice
   :feedback_c: Check the result of s[3:8].  It does not include the item at index 8.
   :feedback_d: Slice returns a sequence.


   How many times is the word HELLO printed by the following statements?
   
   .. code-block:: python

      s = "python rocks"
      for ch in s[3:8]:
          print("HELLO")


Practice Problems
------------------

Try the following practice problems. You can either work directly in the textbook, or use Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish!

Con Cat
~~~~~~~~~~~~~~~~~~~~~~~~~

Create a program that takes in the name of a cat, then prints out a hello message. For example, if the user types in ``Garfield``, your program could print something like ``Good to see you, Garfield!``. **Be sure to use concatenation in your solution!**
   
.. activecode:: practice_problem_string_into_1
    :nocodelens:

    # Hello message to a cat


Duckling Names
~~~~~~~~~~~~~~~~~~~~~~~~~

In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack.  This code below attempts to output these names in order. Unfortunately, the output is not quite right because Ouack and Quack are misspelled. See if you can fix it without changing the value of either the ``prefixes`` or ``suffix`` variables! *You should do this by adding a conditional statement within the for loop.*
    
.. activecode:: practice_problem_string_into_2
    :nocodelens:

    prefixes = "JKLMNOPQ"
    suffix = "ack"

    for letter in prefixes:
        # add a conditional statement here...
        print(letter + suffix)



First Letter of a Word
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_into_3
    :nocodelens:

    Create a function with a single parameter ``word`` that returns ``True`` if the ``word`` begins with the letter "t" or "c".

    **Examples:**

    ``starts_with_tc("thing") → True``

    ``starts_with_tc("concatenation") → True``

    ``starts_with_tc("warman") → False``
    ~~~~
    def starts_with_tc(word):
        return False

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(starts_with_tc("thing"),True,'starts_with_tc("thing")')
            self.assertEqual(starts_with_tc("concatenation"),True,'starts_with_tc("concatenation")')
            self.assertEqual(starts_with_tc("warman"),False,'starts_with_tc("warman")')
            self.assertEqual(starts_with_tc("Thing"),False,'starts_with_tc("Thing")')
            self.assertEqual(starts_with_tc("candy"),True,'starts_with_tc("candy")')
            self.assertEqual(starts_with_tc("saskatoon"),False,'starts_with_tc("saskatoon")')

    myTests().main()


Password Length
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_into_4
    :nocodelens:

    Create a function with a single parameter ``password`` that returns ``True`` if the ``password`` is between 8 and 32 characters (inclusive), and ``False`` otherwise. *Please note there is much more to a strong password than just the length of the string!*

    **Examples:**

    ``password_length("123456789") → True``

    ``password_length("qwerty") → False``

    ``password_length("cray-topnotch-tampa-anthem-trial") → True``
    ~~~~
    def password_length(password):
        return False

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(password_length("123456789"),True,'password_length("123456789")')
            self.assertEqual(password_length("qwerty"),False,'password_length("qwerty")')
            self.assertEqual(password_length("cray-topnotch-tampa-anthem-trial"),True,'password_length("cray-topnotch-tampa-anthem-trial")')
            self.assertEqual(password_length("7mvRVNwB9JAeVtdWywB3MfGsU6+Rnz4PyVDNCnUt"),False,'password_length("7mvRVNwB9JAeVtdWywB3MfGsU6+Rnz4PyVDNCnUt")')
            self.assertEqual(password_length("fixate"),False,'password_length("fixate")')
            self.assertEqual(password_length("8X?3a739"),True,'password_length("8X?3a739")')

    myTests().main()



Removing the Start and End
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create a program that takes in three inputs from the user:

- a word/sentence
- a starting number
- an ending number

After taking in the input, the program should print out a portion of the word/sentence that was entered. For example, if the word the user entered was ``Saskatchewan``, the starting number was 3 and the ending number was 2, the program should print ``katchew``. Notice that in the output, it is the same as the word, except that the first 3 characters and last 2 characters have been removed.

To be sure you understand the challenge, consider the following example:

- word = "unimaginatively"
- starting_number = 3
- ending_number = 2
- output should be ``maginative``


.. activecode:: practice_problem_string_into_5
    :nocodelens:

    # Remove the Start and End


.. qnum::
   :prefix: more-info-about-strings
   :start: 1

More Information About Strings
==================================

.. topic:: Quick Overview of Day

    WDTPD string questions. Explore string traversal (for loop by index), ``in`` and ``not in`` operators, accumulator pattern with strings, and using strings to control turtle movement.


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

.. activecode:: wdtpd_string_manipulation_1
    :caption: What will this program print?

    title = "Pirates of the Caribbean"
    print(title[1])

.. activecode:: wdtpd_string_manipulation_2
    :caption: What will this program print?

    title = "Pirates of the Caribbean"
    print(title[-3])

.. activecode:: wdtpd_string_manipulation_3
    :caption: What will this program print?

    title = "Pirates of the Caribbean"
    print(title[2:6])

.. activecode:: wdtpd_string_manipulation_4
    :caption: What will this program print?

    fruit = "pineapple"
    for poorly_named_variable in fruit:
        print(poorly_named_variable)



Traversal and the ``for`` Loop: By Index
----------------------------------------

It is also possible to use the ``range`` function to systematically generate the indices of the characters.  The ``for`` loop can then be used to iterate over these positions. 
These positions can be used together with the indexing operator to access the individual
characters in the string.

Consider the following codelens example.

.. codelens:: string_for_loop_by_index_1

    fruit = "apple"
    for current_index in range(5):
        current_char = fruit[current_index]
        print(current_char)

The index positions in "apple" are 0,1,2,3 and 4.  This is exactly the same sequence of integers returned by ``range(5)``.  The first time through the for loop, ``current_index`` will be 0 and the "a" will be printed.  Then, ``current_index`` will be reassigned to 1 and "p" will be displayed.  This will repeat for all the range values up to but not including 5.  Since "e" has index 4, this will be exactly right to show all 
of the characters.

In order to make the iteration more general, we can use the ``len`` function to provide the bound for ``range``.  This is a very common pattern for traversing any sequence by position.  Make sure you understand why the range function behaves
correctly when using ``len`` of the string as its parameter value.

.. activecode:: string_for_loop_by_index_2
    :nocanvas:

    fruit = "apple"
    for current_index in range(len(fruit)):
        print(fruit[current_index])


You may also note that iteration by position allows the programmer to control the direction of the
traversal by changing the sequence of index values.  Recall that we can create ranges that count down as 
well as up so the following code will print the characters from right to left.

.. codelens:: string_for_loop_by_index_3

    fruit = "apple"
    for current_index in range(len(fruit)-1, -1, -1):
        print(fruit[current_index])

Trace the values of ``current_index`` and satisfy yourself that they are correct.  In particular, note the start and end of the range.


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: string_for_loop_by_index_test_question_1
    :answer_a: 0
    :answer_b: 1
    :answer_c: 2
    :answer_d: Error, the for statement cannot have an if inside.
    :correct: c
    :feedback_a: The for loop visits each index but the selection only prints some of them.
    :feedback_b: o is at positions 4 and 8
    :feedback_c: Yes, it will print all the characters in even index positions and the o character appears both times in an even location.
    :feedback_d: The for statement can have any statements inside, including if as well as for.


    How many times is the letter o printed by the following statements?

    .. code-block:: python

        sentence = "python rocks"
        for current_index in range(len(sentence)):
          if current_index % 2 == 0:
              print(sentence[current_index])
      

The ``in`` and ``not in`` operators
-----------------------------------

The ``in`` operator tests if one string is a substring of another:

.. activecode:: string_in_not_in_1
    
    print('p' in 'apple')
    print('i' in 'apple')
    print('ap' in 'apple')
    print('pa' in 'apple')

Note that a string is a substring of itself, and the empty string is a 
substring of any other string. *(Also note that computer scientists 
like to think about these edge cases quite carefully!) *

.. activecode:: string_in_not_in_2
    
    print('a' in 'a')
    print('apple' in 'apple')
    print('' in 'a')
    print('' in 'apple')
    
The ``not in`` operator returns the logical opposite result of ``in``.

.. activecode:: string_in_not_in_3

    print('x' not in 'apple')



The Accumulator Pattern with Strings
------------------------------------

Combining the ``in`` operator with string concatenation using ``+`` and the accumulator pattern, we can
write a function that removes all the vowels from a string.  The idea is to start with a string and iterate over each character, checking to see if the character is a vowel.  As we process the characters, we will build up a new string consisting of only the nonvowel characters.  To do this, we use the accumulator pattern.

Remember that the accumulator pattern allows us to keep a "running total".  With strings, we are not accumulating a numeric total.  Instead we are accumulating characters onto a string.

.. activecode:: string_accumulator_pattern_1
    
    def remove_vowels(original_string):
        vowels = "aeiouAEIOU"
        string_without_vowels = ""
        for each_char in original_string:
            if each_char not in vowels:
                string_without_vowels = string_without_vowels + each_char
        return string_without_vowels 
       
    print(remove_vowels("compsci"))
    print(remove_vowels("aAbEefIijOopUus"))

Line 5 uses the ``not in`` operator to check whether the current character is not in the string ``vowels``. The alternative to using this operator would be to write a very large ``if`` statement that checks each of the individual vowel characters.  Note we would need to use logical ``and`` to be sure that the character is not any of the vowels.

.. sourcecode:: python

    if each_char != 'a'  and each_char != 'e'  and each_char != 'i'  and
       each_char != 'o'  and each_char != 'u'  and each_char != 'A'  and
       each_char != 'E'  and each_char != 'I'  and each_char != 'O'  and
       each_char != 'U':      
       
         string_without_vowels = string_without_vowels + each_char
      

Look carefully at line 6 in the above program (``string_without_vowels = string_without_vowels + each_char``).  We will do this for every character that is not a vowel.  This should look
very familiar.  As we were describing earlier, it is an example of the accumulator pattern, this time using a string to "accumulate" the final result.
In words it says that the new value of ``string_without_vowels`` will be the old value of ``string_without_vowels`` concatenated with
the value of ``each_char``.  We are building the result string character by character. 

Take a close look also at the initialization of ``string_without_vowels``.  We start with an empty string and then begin adding
new characters to the end.

Step through the function using codelens to see the accumulator variable grow.

.. codelens:: string_accumulator_pattern_2
    
    def remove_vowels(original_string):
        vowels = "aeiouAEIOU"
        string_without_vowels = ""
        for each_char in original_string:
            if each_char not in vowels:
                string_without_vowels = string_without_vowels + each_char
        return string_without_vowels 
       
    print(remove_vowels("compsci"))


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: string_accumulator_pattern_test_question_1
    :answer_a: Ball
    :answer_b: BALL
    :answer_c: LLAB
    :correct: c
    :feedback_a: Each item is converted to upper case before concatenation.
    :feedback_b: Each character is converted to upper case but the order is wrong.
    :feedback_c: Yes, the order is reversed due to the order of the concatenation.

    What is printed by the following statements:

    .. code-block:: python

        some_string = "ball"
        another_string = ""
        for item in some_string:
            another_string = item.upper() + another_string
        print(another_string)


Controlling a Turtle With Strings
-----------------------------------

By combining what we know about moving turtles on the screen, and what we have learned about traversing strings, we can now write a program that controls the movement of a turtle based on a string. For example, the string ``FF+F-FF`` might make a turtle:

- move forward by some distance twice in a row
- turn right by some angle
- move forward again
- turn left by some angle
- move forward twice in a row 






































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

In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack.  This loop tries to output these names in order.
    
.. activecode:: practice_problem_string_into_2
    :nocodelens:

    prefixes = "JKLMNOPQ"
    suffix = "ack"

    for letter in prefixes:
        # add a conditional statement here...
        print(letter + suffix)
    
    
Of course, that's not quite right because Ouack and Quack are misspelled. See if you can fix it without changing the value of either the ``prefixes`` or ``suffix`` variables! *You should do this by adding a conditional statement within the for loop.*


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


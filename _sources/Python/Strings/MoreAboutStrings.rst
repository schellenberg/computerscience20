.. qnum::
   :prefix: more-info-about-strings
   :start: 1

String Traversal (by index), and the Accumulator Pattern with Strings
=====================================================================================

.. topic:: Quick Overview of Day

    WDTPD string questions. Explore string traversal (for loop by index), ``in`` and ``not in`` operators, and the accumulator pattern with strings. Work on practice problems covering these ideas.


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
        for this_char in original_string:
            if this_char not in vowels:
                string_without_vowels = string_without_vowels + this_char
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
    :answer_a: ball
    :answer_b: llab
    :correct: a
    :feedback_a: Yes, the repeated concatenation will cause another_string to become the same as some_string.
    :feedback_b: Look again at the *order* of the concatenation!

    What is printed by the following statements:

    .. code-block:: python

        some_string = "ball"
        another_string = ""
        for item in some_string:
            another_string = another_string + item
        print(another_string)


.. mchoice:: string_accumulator_pattern_test_question_2
    :answer_a: ball
    :answer_b: llab
    :correct: b
    :feedback_a: Look again at the *order* of the concatenation!
    :feedback_b: Yes, the order is reversed due to the order of the concatenation.

    What is printed by the following statements:

    .. code-block:: python

        some_string = "ball"
        another_string = ""
        for item in some_string:
            another_string = item + another_string
        print(another_string)


.. parsonsprob:: string_accumulator_patten_parsons_1

    Construct a block of code that correctly implements the accumulator pattern with strings. After the code has finished executing, ``new_word`` is printed, and will have the same value as ``original_word``.
    -----
    original_word = "clockwork"
    new_word = ""
    for letter in original_word:
        new_word = new_word + letter
    print(new_word)


Practice Problems
------------------

Try the following practice problems. You can either work directly in the textbook, or use Thonny. Either way, copy/paste your finished code into Thonny and save your solution into your Computer Science 20 folder when you finish!

**Hint: For each of the following, you will want to use the accumulator pattern with strings. In other words, you first need to create an empty string, then concatenate letters onto it as needed.**


Even Letters of a Word
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_1
    :nocodelens:

    Create a function with a single parameter ``word`` that returns the even letters of the ``word`` (the first letter is even, since we start counting our index values at 0). For example, given the ``word`` "Saskatoon", the function should return "Ssaon".

    **Examples:**

    ``even_letters("Saskatoon") → "Ssaon"``

    ``even_letters("Saskatchewan") → "Ssacea"``

    ``even_letters("Roughriders") → "Ruhies"``
    ~~~~
    def even_letters(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(even_letters("Saskatoon"),"Ssaon",'even_letters("Saskatoon")')
            self.assertEqual(even_letters("Saskatchewan"),"Ssacea",'even_letters("Saskatchewan")')
            self.assertEqual(even_letters("Roughriders"),"Ruhies",'even_letters("Roughriders")')
            self.assertEqual(even_letters("Tisdale"),"Tsae",'even_letters("Tisdale")')
            self.assertEqual(even_letters("Hepburn"),"Hpun",'even_letters("Hepburn")')
            self.assertEqual(even_letters("Neuanlage"),"Nunae",'even_letters("Neuanlage")')
            self.assertEqual(even_letters("Blumenheim"),"Buehi",'even_letters("Blumenheim")')

    myTests().main()


Reverse Me
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_2
    :nocodelens:

    Create a function with a single parameter ``word`` that returns the ``word`` spelled backwards. For example, if the ``word`` was "Saskatoon", the function should return "nootaksaS".

    **Examples:**

    ``reverse_me("Saskatoon") → "nootaksaS"``

    ``reverse_me("Saskatchewan") → "nawehctaksaS"``

    ``reverse_me("Roughriders") → "sredirhguoR"``
    ~~~~
    def reverse_me(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(reverse_me("Saskatoon"),"nootaksaS",'reverse_me("Saskatoon")')
            self.assertEqual(reverse_me("Saskatchewan"),"nawehctaksaS",'reverse_me("Saskatchewan")')
            self.assertEqual(reverse_me("Roughriders"),"sredirhguoR",'reverse_me("Roughriders")')
            self.assertEqual(reverse_me("Oxbow"),"wobxO",'reverse_me("Oxbow")')
            self.assertEqual(reverse_me("Lumsden"),"nedsmuL",'reverse_me("Lumsden")')
            self.assertEqual(reverse_me("La Loche"),"ehcoL aL",'reverse_me("La Loche")')
            self.assertEqual(reverse_me("Waskesiu"),"uiseksaW",'reverse_me("Waskesiu")')

    myTests().main()



Letter Destroyer
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_3
    :nocodelens:

    Create a function with two parameters, ``word`` and ``letter_to_destroy``. The function should return the ``word``, but without any of the occurrences of the ``letter_to_destroy`` in the string. For example, if the ``word`` was "Saskatoon", and the ``letter_to_destroy`` was 'o', the function should return "Saskatn".

    **Examples:**

    ``letter_destroyer("Saskatoon", "o") → "Saskatn"``

    ``letter_destroyer("Saskatchewan", "a") → "Ssktchewn"``

    ``letter_destroyer("roughriders", "r") → "oughides"``
    ~~~~
    def letter_destroyer(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(letter_destroyer("Saskatoon", "o"),"Saskatn",'letter_destroyer("Saskatoon", "o")')
            self.assertEqual(letter_destroyer("Saskatchewan", "a"),"Ssktchewn",'letter_destroyer("Saskatchewan", "a")')
            self.assertEqual(letter_destroyer("roughriders", "r"),"oughides",'letter_destroyer("roughriders", "r")')
            self.assertEqual(letter_destroyer("hotshots", "h"),"otsots",'letter_destroyer("hotshots", "h")')
            self.assertEqual(letter_destroyer("hotshots", "o"),"htshts",'letter_destroyer("hotshots", "o")')
            self.assertEqual(letter_destroyer("hotshots", "t"),"hoshos",'letter_destroyer("hotshots", "t")')
            self.assertEqual(letter_destroyer("hotshots", "s"),"hothot",'letter_destroyer("hotshots", "s")')

    myTests().main()



QWERTY Finder
~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The only thing you need to do for this question is to complete the function definition! **You do not need to call the function**, as that will be done automatically for you.

.. activecode:: practice_problem_string_more_info_4
    :nocodelens:

    Create a function that takes in a single parameter ``word`` and returns the location of the first occurrence of one of the following letters: "qwerty". If none of these letters exist in the word, have the function return -1. For example, if the ``word`` was "Saskatoon", the function should return 5 (the index value for the ``t`` in "Saskatoon").

    **Examples:**

    ``qwerty_finder("Saskatoon") → 5``

    ``qwerty_finder("Naomi") → -1``

    ``qwerty_finder("bunnyhug") → 4``
    ~~~~
    def qwerty_finder(word):
        return ""

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(qwerty_finder("Saskatoon"), 5,'qwerty_finder("Saskatoon")')
            self.assertEqual(qwerty_finder("Naomi"), -1,'qwerty_finder("Naomi")')
            self.assertEqual(qwerty_finder("bunnyhug"), 4,'qwerty_finder("bunnyhug")')
            self.assertEqual(qwerty_finder("Schellenberg"), 3,'qwerty_finder("Schellenberg")')
            self.assertEqual(qwerty_finder("roughriders"), 0,'qwerty_finder("roughriders")')
            self.assertEqual(qwerty_finder("junk"),-1 ,'qwerty_finder("junk")')
            self.assertEqual(qwerty_finder("university"), 4,'qwerty_finder("university")')

    myTests().main()


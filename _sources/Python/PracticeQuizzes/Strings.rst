.. qnum::
   :prefix: strings-quiz
   :start: 1

.. _strings_practice_quiz:

Strings Practice Quiz
================================

To confirm that you understand the string concepts you've seen in Python, try to answer the following questions **without opening Python**.


Question 1
-----------

.. fillintheblank:: strings_practice_quiz_1

    In the following code, how many lines does this code print?::

        sentence = "python rocks"
        print(sentence[5])

    - :n: Great!
      :o: Not quite. Don't forget that we start counting at 0 for index values!
      :.*: Try again!


Question 2
-----------

.. fillintheblank:: strings_practice_quiz_2

    In the following code, what does this code print?::

        sentence = "python rocks"
        print(sentence[2] + sentence[-3])

    - :tc: Great!
      :tk: Not quite. Don't forget that the last character of a string is index value -1.
      :.*: Try again!


Question 3
-----------

.. fillintheblank:: strings_practice_quiz_3

    In the following code, how many times is the word "Saskatchewan" printed?::

        word = "practice"
        for character in word:
            print("Saskatchewan")

    - :8: Great!
      :.*: Try again! Remember that a for loop using a string will iterate once for each character in the string.


Question 4
-----------

.. fillintheblank:: strings_practice_quiz_4

    In the following code, what does this code print?::

        sentence = "Walter Murray Collegiate Institute"
        print(sentence[8:12])

    - :urra: Great!
      :urray: Not quite. Remember we count up to (but not including) the last index value.
      :Murra: Not quite. Remember we start counting index values at 0.
      :.*: Try again!


Question 5
-----------

.. fillintheblank:: strings_practice_quiz_5

    In the following code, what does this code print?::

        sentence = "Walter Murray Collegiate Institute"
        print(sentence[8:12])

    - :urra: Great!
      :urray: Not quite. Remember we count up to (but not including) the last index value.
      :Murra: Not quite. Remember we start counting index values at 0.
      :.*: Try again!


Question 6
-----------

.. fillintheblank:: strings_practice_quiz_6

    In the following code, what does this code print?::

        sentence = "Walter Murray Collegiate Institute"
        print(sentence[:9])

    - :Walter Mu: Great!
      :Walter Mur: Not quite. Remember we count up to (but not including) the last index value.
      :.*: Try again!


Question 7
-----------

.. fillintheblank:: strings_practice_quiz_7

    In the following code, what does this code print?::

        sentence = "Greenall"
        print(len(sentence))

    - :8: Great!
      :7: Not quite. Although index values start counting from 0, len() just counts the number of characters in a string, starting at character 1.
      :.*: Try again!


Question 8
-----------

.. fillintheblank:: strings_practice_quiz_8

    In the following code, what does this code print?::

        place = "sask"
        thing = ""
        for item in place:
            thing = thing + item
        print(thing)

    - :sask: Great!
      :.*: Try again!


Question 9
-----------

.. fillintheblank:: strings_practice_quiz_9

    In the following code, what does this code print?::

        place = "sask"
        thing = ""
        for item in place:
            thing = item + thing
        print(thing)

    - :ksas: Great!
      :.*: Try again!



Question 10
------------

.. fillintheblank:: strings_practice_quiz_10

    In the following code, what does this code print?::

        def apply_rule(character):
            new_character = ""
            if character == "X":
                new_character = "X+YF+"
            elif character == "Y":
                new_character = "-FX-Y"
            else:
                new_character = character
            return new_character

        print(apply_rule("Y"))


    - :-FX-Y: Great!
      :.*: Try again!




Question 11
------------

.. fillintheblank:: strings_practice_quiz_11

    In the following code, what does this code print?::

        def apply_rule(character):
            new_character = ""
            if character == "X":
                new_character = "X+YF+"
            elif character == "Y":
                new_character = "-FX-Y"
            else:
                new_character = character
            return new_character

        def process_string(some_string):
            new_string = ""
            for character in some_string:
                new_string = new_string + apply_rule(character)
            return new_string

        print(process_string("XZY"))

    - :X+YF+Z-FX-Y: Great!
      :.*: Try again!


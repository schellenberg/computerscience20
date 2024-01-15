.. qnum::
   :prefix: lists-quiz
   :start: 1

.. _lists_practice_quiz:

Lists Practice Quiz
================================

To confirm that you understand the list concepts you've seen in Python, try to answer the following questions **without opening Python**.


Question 1
-----------

.. fillintheblank:: lists_practice_quiz_1

    In the following code, what does this code print?::

        stuff = [12, True, "test", 2.71, "ok", 8]
        print(stuff[2])

    - :test: Great!
      :"test": Not quite. Quotes don't appear when you print a string.
      :'test': Not quite. Quotes don't appear when you print a string.
      :.*: Try again!


Question 2
-----------

.. fillintheblank:: lists_practice_quiz_2

    In the following code, what does this code print?::

        stuff = [12, True, "test", 2.71, "ok", 8]
        print(stuff[1:4])

    - :\[\s*True\s*,\s*["\']test["\']\s*,\s*2\.71\s*\]: Great!
      :.*: Try again! Don't forget that when you print a subset of a list, it will be a list, so it will look something like ["stuff", "goes", "here"].


Question 3
-----------

.. fillintheblank:: lists_practice_quiz_3

    In the following code, what does this code print?::

        stuff = [5, 1.3, ["cat", "dog", "fish"], "fox", [], 3.14, False]
        print(stuff[2][0])

    - :cat: Great!
      :.*: Try again!


Question 4
-----------

.. fillintheblank:: lists_practice_quiz_4

    In the following code, what does this code print?::

        stuff = [5, 1.3, ["cat", "dog", "fish"], "fox", [], 3.14, False]
        print(stuff[2][0][2])

    - :t: Great!
      :.*: Try again!


Question 5
-----------

.. fillintheblank:: lists_practice_quiz_5

    In the following code, what does this code print?::

        stuff = [5, 1.3, ["cat", "dog", "fish"], "fox", [], 3.14, False]
        print(len(stuff))

    - :7: Great!
      :.*: Try again!


Question 6
-----------

.. fillintheblank:: lists_practice_quiz_6

    In the following code, what does this code print?::

        stuff = [5, 1.3, ["cat", "dog", "fish"], "fox", [], 3.14, False]
        stuff.append("cow")
        stuff.append("sheep")
        stuff.append("horses")
        print(len(stuff))

    - :10: Great!
      :.*: Try again! Remember that .append() adds an element to the end of a list.



Question 7
-----------

.. fillintheblank:: lists_practice_quiz_7

    In the following code, what does this code print?::

        stuff = [5, 1.3, ["cat", "dog", "fish"], "fox", [], 3.14, False]
        a = stuff.pop()
        b = stuff.pop()
        c = stuff.pop()
        d = stuff.pop()
        e = stuff.pop()
        f = stuff.pop()
        print(f)

    - :1.3: Great!
      :.*: Try again!


Question 8
-----------

.. fillintheblank:: lists_practice_quiz_8

    In the following code, what does this code print?::

        def fancy_function(my_list):
            thing = 20
            for something in my_list:
                something = something - 2
                thing = thing - something
            return thing

        print(fancy_function([5,4,4,3]))


    - :12: Great!
      :.*: Try again!


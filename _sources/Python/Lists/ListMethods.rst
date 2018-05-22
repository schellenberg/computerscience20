.. qnum::
   :prefix: list-methods
   :start: 1


List Methods
=======================================

.. topic:: Quick Overview of Day

    Explore methods that allow you to manipulate lists.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to create reusable pieces of code.
    - **CS20-FP4**  Investigate one-dimensional arrays and their applications.



What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_lists_1
    :caption: What will this program print?
    :nocodelens:

    a_list = [3, 67, "cat", 3.14, False]
    print(len(a_list))


.. activecode:: wdtpd_lists_2
    :caption: What will this program print?
    :nocodelens:

    a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(len(a_list))


.. activecode:: wdtpd_lists_3
    :caption: What will this program print?
    :nocodelens:

    a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(a_list[5])


.. activecode:: wdtpd_lists_4
    :caption: What will this program print?
    :nocodelens:

    a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(a_list[2][0])


.. activecode:: wdtpd_lists_5
    :caption: What will this program print?
    :nocodelens:

    a_list = [4, 2, 8, 6, 5]
    a_list[2] = True
    print(a_list)


.. activecode:: wdtpd_lists_6
    :caption: What will this program print?
    :nocodelens:

    a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(a_list[3][2])


.. activecode:: wdtpd_lists_7
    :caption: What will this program print?
    :nocodelens:

    a_list = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(a_list[3][2][2])



List Methods
------------

The dot operator can also be used to access built-in methods of list objects.  
``append`` is a list method which adds the argument passed to it to the end of
the list. Continuing with this example, we show several other list methods.  Many of them are
easy to understand.  

.. activecode:: list_methods_1

    my_list = []
    my_list.append(5)
    my_list.append(27)
    my_list.append(3)
    my_list.append(12)
    print(my_list)

    my_list.insert(1, 12)
    print(my_list)
    print(my_list.count(12))

    print(my_list.index(3))
    print(my_list.count(5))

    my_list.reverse()
    print(my_list)

    my_list.sort()
    print(my_list)

    my_list.remove(5)
    print(my_list)

    last_item = my_list.pop()
    print(last_item)
    print(my_list)

There are two ways to use the ``pop`` method.  The first, with no parameter, will remove and return the
last item of the list.  If you provide a parameter for the position, ``pop`` will remove and return the
item at that position.  Either way the list is changed.

The following table provides a summary of the list methods shown above.  The column labeled
`result` gives an explanation as to what the return value is as it relates to the new value of the list.  The word
**mutator** means that the list is changed by the method but nothing is returned (actually ``None`` is returned).  A **hybrid** method is one that not only changes the list but also returns a value as its result.  Finally, if the result is simply a return, then the list
is unchanged by the method.

Be sure to experiment with these methods to gain a better understanding of what they do.

==========  ==============  ============  ================================================
Method      Parameters       Result       Description
==========  ==============  ============  ================================================
append      item            mutator       Adds a new item to the end of a list
insert      position, item  mutator       Inserts a new item at the position given
pop         none            hybrid        Removes and returns the last item
pop         position        hybrid        Removes and returns the item at position
sort        none            mutator       Modifies a list to be sorted
reverse     none            mutator       Modifies a list to be in reverse order
index       item            return idx    Returns the position of first occurrence of item
count       item            return ct     Returns the number of occurrences of item
remove      item            mutator       Removes the first occurrence of item
==========  ==============  ============  ================================================


Details for these and others
can be found in the `Python Documentation <http://docs.python.org/py3k/library/stdtypes.html#sequence-types-str-bytes-bytearray-list-tuple-range>`_.

It is important to remember that methods like ``append``, ``sort``, 
and ``reverse`` all return ``None``.  This means that re-assigning ``my_list`` to the result of sorting ``my_list`` will result in losing the entire list.  Calls like these will likely never appear as part of an assignment statement (see line 8 below).

.. activecode:: list_methods_2

    my_list = []
    my_list.append(5)
    my_list.append(27)
    my_list.append(3)
    my_list.append(12)
    print(my_list)

    my_list = my_list.sort()   #probably an error
    print(my_list)


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: list_methods_check_1
    :answer_a: [4, 2, 8, 6, 5, False, True]
    :answer_b: [4, 2, 8, 6, 5, True, False]
    :answer_c: [True, False, 4, 2, 8, 6, 5]
    :correct: b
    :feedback_a: True was added first, then False was added last.
    :feedback_b: Yes, each item is added to the end of the list.
    :feedback_c: append adds at the end, not the beginning.
   
    What is printed by the following statements?
   
    .. code-block:: python

        a_list = [4, 2, 8, 6, 5]
        a_list.append(True)
        a_list.append(False)
        print(a_list)


.. mchoice:: list_methods_check_2
    :answer_a: [4, 8, 6]
    :answer_b: [2, 6, 5]
    :answer_c: [4, 2, 6]
    :correct: c
    :feedback_a: pop(2) removes the item at index 2, not the 2 itself.
    :feedback_b: pop() removes the last item, not the first.
    :feedback_c: Yes, first the 8 was removed, then the last item, which was 5.
   
    What is printed by the following statements?
   
    .. code-block:: python

        a_list = [4, 2, 8, 6, 5]
        temp = a_list.pop(2)
        temp = a_list.pop()
        print(a_list)

   
   
.. mchoice:: list_methods_check_3
    :answer_a: [2, 8, 6, 5]
    :answer_b: [4, 2, 8, 6, 5]
    :answer_c: 4
    :answer_d: None
    :correct: c
    :feedback_a: a_list is now the value that was returned from pop(0).
    :feedback_b: pop(0) changes the list by removing the first item.
    :feedback_c: Yes, first the 4 was removed from the list, then returned and assigned to a_list.  The list is lost.
    :feedback_d: pop(0) returns the first item in the list so a_list has now been changed.
   
    What is printed by the following statements?
   
    .. code-block:: python

        a_list = [4, 2, 8, 6, 5]
        a_list = a_list.pop(0)
        print(a_list)


Inventory Example
--------------------

If you were making a computer game, and you needed to keep track of what items the player was currently holding, using a list would be a good choice. At the beginning of the game, you might create an empty list, if the player begins the game without any items.

.. activecode:: inventory_example_1

    inventory = []
    print(inventory)


If the player obtains a new item, the new item should be added to the list. The easiest way to do this is to use the built-in ``.append()`` method. 


.. activecode:: inventory_example_2

    inventory = []
    inventory.append("room 1 key")
    print(inventory)


When you need to check if the player is currently able to perform a certain action, such as opening a locked door, you simply need to check if an item is in the inventory list.

.. activecode:: inventory_example_3

    inventory = []
    
    # after the player does something to find the key...
    # try commenting out the line below and running the code again
    inventory.append("room 1 key")

    # player now attempts to open a door
    if "room 1 key" in inventory:
        print("Door opened.")
    else:
        print("Sorry. The door is locked. You need a key.")

    print(inventory)


Sometimes, the item the player uses might be something they can only use once. For example, after they used the "rooom 1 key", we might want the "room 1 key" to no longer be in the player's inventory. The following code does just that.


.. activecode:: inventory_example_4

    inventory = []
    
    # after the player does something to find the key
    # try commenting out the line below and running the code again
    inventory.append("room 1 key")

    # player now attempts to open a door
    if "room 1 key" in inventory:
        print("Door opened.")

        # now remove the room 1 key from the inventory
        inventory.remove("room 1 key")

    else:
        print("Sorry. The door is locked. You need a key.")

    print(inventory)

.. note:: Change the code above so you append a ``book`` instead of a ``room 1 key``, then run the code again. 



Shopping List
-----------------

Say you want to make a list of things to buy when you go to the store. You could do something like this:

.. activecode:: shopping_list_1

    shopping_list = []
    item = input("Please enter an item to add to your shopping list:")
    shopping_list.append(item)
    print(shopping_list)


The obvious problem here is that we can only add one item to our list. Let's put that logic into an infinite loop, so that we can continue to add items until we enter the word ``quit``:

.. activecode:: shopping_list_2

    shopping_list = []

    while True:
        item = input("Please enter an item to add to your shopping list:")
        
        if item == "quit":
            break
        
        else:
            shopping_list.append(item)

    
    print()
    print("Don't Forget To Buy:")
    print()

    for thing_to_get in shopping_list:
        print(thing_to_get)

Shakespearean Insult Generator
-------------------------------

By importing other modules, you can add additional methods that can be used on lists. One example of this is from the ``random`` module, which provides a ``choice`` method that takes in a string, and returns one element of the list at random. Consider the following, which will pick a random name each time the code is executed:

.. activecode:: shakespeare_insult_example_1

    import random

    name_list = ["Carl", "Christy", "Braden", "Lanae"]

    print(random.choice(name_list))


The following is a simple insult generator, using words found in the works of the great bard.

.. activecode:: shakespeare_insult_example_2

    # Shakespeare Insult Kit
    # Idea from http://www.pangloss.com/seidel/shake_rule.html
    # Original concept attributed to Jerry Maguire, an English teacher at Center Grove High School in Greenwood, Indiana

    import random

    first_word_list = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty"]
    second_word_list = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted, ""dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten"]
    third_word_list = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail"]


    first_word = random.choice(first_word_list)
    second_word = random.choice(second_word_list)
    third_word = random.choice(third_word_list)

    the_insult = "Thou " + first_word + " " + second_word + " " + third_word + "!"

    print(the_insult)


Strings and Lists
-----------------

Two of the most useful methods on strings involve lists of
strings. The ``split`` method
breaks a string into a list of words.  By
default, any number of whitespace characters is considered a word boundary.

.. activecode:: string_lists_split1
    
    song = "The rain in Spain..."
    word_list = song.split()
    print(word_list)

An optional argument called a **delimiter** can be used to specify which
characters to use as word boundaries. The following example uses the string
``ai`` as the delimiter:

.. activecode:: string_lists_split2
    
    song = "The rain in Spain..."
    word_list = song.split('ai')
    print(word_list)

Notice that the delimiter doesn't appear in the result.

The inverse of the ``split`` method is ``join``.  You choose a
desired **separator** string, (often called the *glue*) 
and join the list with the glue between each of the elements.

.. activecode:: string_lists_join

    word_list = ["red", "blue", "green"]
    glue = ';'
    s = glue.join(word_list)
    print(s)
    print(word_list)

    print("***".join(word_list))
    print("".join(word_list))


The list that you glue together (``word_list`` in this example) is not modified.  Also, 
you can use empty glue or multi-character strings as glue.



Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: list_methods_check_4
   :answer_a: Poe
   :answer_b: EdgarAllanPoe
   :answer_c: EAP
   :answer_d: William Shakespeare
   :correct: c
   :feedback_a: Three characters but not the right ones.  name_list is the list of names.
   :feedback_b: Too many characters in this case.  There should be a single letter from each name.
   :feedback_c: Yes, split creates a list of the three names.  The for loop iterates through the names and creates a string from the first characters.
   :feedback_d: That does not make any sense.
   
   What is printed by the following statements?
   
   .. code-block:: python

     my_name = "Edgar Allan Poe"
     name_list = my_name.split()
     some_string = ""
     for a_name in name_list:
         some_string = some_string + a_name[0]
     print(some_string)


Practice Problems
-------------------

Appending to a List
~~~~~~~~~~~~~~~~~~~~

Create an empty list called ``my_list``. Now append the following items (one item at a time): 76, 92.3, "hello", True, 4, 76.

.. activecode:: list_methods_practice_1

    # your code goes here!

.. reveal:: methods_practice_1
    :showtitle: Reveal Solution

    .. code-block:: python
    
        my_list = []

        my_list.append(76)
        my_list.append(92.3)
        my_list.append("hello")
        my_list.append(True)
        my_list.append(4)
        my_list.append(76)


List Methods Practice
~~~~~~~~~~~~~~~~~~~~~~

Given ``my_list`` below, write Python statements to do the following:

a. Append "apple" and 76 to the list.
#. Insert the value "cat" at position 3.
#. Insert the value 99 at the start of the list.
#. Find the index of "hello".
#. Count the number of 76s in the list.
#. Remove the first occurrence of 76 from the list.
#. Remove the last element from the list, and print it's value.

.. activecode:: list_methods_practice_2

    my_list = [76, 92.3, 'hello', True, 4, 76]

    # add your code below

.. reveal:: methods_practice_2
    :showtitle: Reveal Solution

    .. code-block:: python
    
        my_list = [76, 92.3, 'hello', True, 4, 76]

        my_list.append("apple")         # a
        my_list.append(76)              # a
        my_list.insert(3, "cat")        # b
        my_list.insert(0, 99)           # c

        print(my_list.index("hello"))   # d
        print(my_list.count(76))        # e
        my_list.remove(76)              # f
        print(my_list.pop())            # g

        print (my_list)


Compliment Generator
~~~~~~~~~~~~~~~~~~~~~

Those Shakespearean insults sting a bit. Let's cheer everyone up by creating a random compliment generator. Your compliments should be in the style of "You are a ``great`` ``friend``!". Store any number of words similar to ``great`` into a list called ``first_word_list``, and any number of words similar to ``friend``into a list called ``second_word_list``. Then pick one word from each of the lists at random, and print out a random compliment!


.. activecode:: list_methods_practice_3

    # your code goes here!


Averaging Random Integer List
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create a list containing 100 random integers between 0 and 1000 (use iteration, append, and the random module). Write a function called average that will take the list as a parameter and return the average.

.. activecode:: list_methods_practice_4

    # your code goes here!



Writing Your Own Methods
~~~~~~~~~~~~~~~~~~~~~~~~~

Although Python provides us with many list methods, it is good practice and very instructive to think about how they are implemented.  Write Python functions that work like the following:
   
a. ``count``
#. ``in``
#. ``reverse``
#. ``index``
#. ``insert``


.. activecode:: list_methods_practice_5

    def count(thing_to_find, list_to_look_in):
        # your code goes here!


    # add the other methods below


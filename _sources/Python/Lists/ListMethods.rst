.. qnum::
   :prefix: using-lists
   :start: 1

List Methods
=======================================

.. topic:: Quick Overview of Day

    Use lists while moving turtles.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.
    - **CS20-FP3** Construct and utilize functions to encapsulate reusable pieces of code.



What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

.. activecode:: wdtpd_lists_1
    :caption: What will this program print?
    :nocodelens:

    alist = [3, 67, "cat", 3.14, False]
    print(len(alist))


.. activecode:: wdtpd_lists_2
    :caption: What will this program print?
    :nocodelens:

    alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(len(alist))


.. activecode:: wdtpd_lists_3
    :caption: What will this program print?
    :nocodelens:

    alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(alist[5])


.. activecode:: wdtpd_lists_4
    :caption: What will this program print?
    :nocodelens:

    alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(alist[2][0])


.. activecode:: wdtpd_lists_5
    :caption: What will this program print?
    :nocodelens:

    alist = [4, 2, 8, 6, 5]
    alist[2] = True
    print(alist)


.. activecode:: wdtpd_lists_6
    :caption: What will this program print?
    :nocodelens:

    alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(alist[3][2])


.. activecode:: wdtpd_lists_7
    :caption: What will this program print?
    :nocodelens:

    alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
    print(alist[3][2][2])



List Methods
------------

The dot operator can also be used to access built-in methods of list objects.  
``append`` is a list method which adds the argument passed to it to the end of
the list. Continuing with this example, we show several other list methods.  Many of them are
easy to understand.  

.. activecode:: chp09_meth1

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

    lastitem = my_list.pop()
    print(lastitem)
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

.. activecode:: chp09_meth2

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

.. mchoice:: test_question9_13_1
    :answer_a: [4, 2, 8, 6, 5, False, True]
    :answer_b: [4, 2, 8, 6, 5, True, False]
    :answer_c: [True, False, 4, 2, 8, 6, 5]
    :correct: b
    :feedback_a: True was added first, then False was added last.
    :feedback_b: Yes, each item is added to the end of the list.
    :feedback_c: append adds at the end, not the beginning.
   
    What is printed by the following statements?
   
    .. code-block:: python

        alist = [4, 2, 8, 6, 5]
        alist.append(True)
        alist.append(False)
        print(alist)



.. mchoice:: test_question9_13_2
    :answer_a: [False, 4, 2, True, 8, 6, 5]
    :answer_b: [4, False, True, 2, 8, 6, 5]
    :answer_c: [False, 2, True, 6, 5]
    :correct: a
    :feedback_a: Yes, first True was added at index 2, then False was added at index 0.
    :feedback_b: insert will place items at the index position specified and move everything down to the right.
    :feedback_c: insert does not remove anything or replace anything.
   
    What is printed by the following statements?
   
    .. code-block:: python

        alist = [4, 2, 8, 6, 5]
        alist.insert(2, True)
        alist.insert(0, False)
        print(alist)


.. mchoice:: test_question9_13_3
    :answer_a: [4, 8, 6]
    :answer_b: [2, 6, 5]
    :answer_c: [4, 2, 6]
    :correct: c
    :feedback_a: pop(2) removes the item at index 2, not the 2 itself.
    :feedback_b: pop() removes the last item, not the first.
    :feedback_c: Yes, first the 8 was removed, then the last item, which was 5.
   
    What is printed by the following statements?
   
    .. code-block:: python

        alist = [4, 2, 8, 6, 5]
        temp = alist.pop(2)
        temp = alist.pop()
        print(alist)

   
   
.. mchoice:: test_question9_13_4
    :answer_a: [2, 8, 6, 5]
    :answer_b: [4, 2, 8, 6, 5]
    :answer_c: 4
    :answer_d: None
    :correct: c
    :feedback_a: alist is now the value that was returned from pop(0).
    :feedback_b: pop(0) changes the list by removing the first item.
    :feedback_c: Yes, first the 4 was removed from the list, then returned and assigned to alist.  The list is lost.
    :feedback_d: pop(0) returns the first item in the list so alist has now been changed.
   
    What is printed by the following statements?
   
    .. code-block:: python

        alist = [4, 2, 8, 6, 5]
        alist = alist.pop(0)
        print(alist)


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
    
    # after the player does something to find the key
    # try commenting out the line below and running the code again
    inventory.append("room 1 key")

    # player now attempts to open a door
    if "room 1 key" in inventory:
        print("Door opened.")
    else:
        print("Sorry. The door is locked. You need a key.")

    print(inventory)


Sometimes, the item the players uses might be something they can only use once. For example, after they used the "rooom 1 key", we might want the "room 1 key" to no longer be in the player's inventory. The following code does just that.


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

.. note:: Change the code above so you append a ``book`` instead of a room 1 key, then run the code again. 


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~


.. mchoice:: test_question_turtle_lists_1
    :answer_a: Option 1
    :answer_b: Option 2
    :answer_c: Option 3
    :answer_d: Error, will not run.
    :correct: a
    :feedback_a: Nice!
    :feedback_b: Try again.
    :feedback_c: Try again.
    :feedback_d: Try again.
   
    What will be the result of the following code being executed?
   
    .. code-block:: python

        import turtle

        def draw_thing(some_turtle, tasks):
            for value in tasks:
                some_turtle.forward(value)
                some_turtle.stamp()
                some_turtle.backward(value)
                some_turtle.right(30)

        window = turtle.Screen()
        bob = turtle.Turtle()

        my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
        draw_thing(bob, my_list)


    .. image:: images/turtle-list-options.png
    
    

.. mchoice:: test_question_turtle_lists_1
    :answer_a: Option 1
    :answer_b: Option 2
    :answer_c: Option 3
    :answer_d: Error, will not run.
    :correct: b
    :feedback_a: Try again.
    :feedback_b: Nice!
    :feedback_c: Try again.
    :feedback_d: Try again.
   
    What will be the result of the following code being executed?
   
    .. code-block:: python

        import turtle

        def draw_thing(some_turtle, tasks):
            for value in tasks:
                some_turtle.forward(value)
                some_turtle.stamp()
                some_turtle.right(30)

        window = turtle.Screen()
        bob = turtle.Turtle()

        my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
        draw_thing(bob, my_list)


    .. image:: images/turtle-list-options.png
    
    
Turtle Coordinate List
-----------------------

Consider the following:

.. activecode:: turtle_coordinates_1

    import turtle

    window = turtle.Screen()
    jane = turtle.Turtle()

    turtle_coordinate_list = [[0, 50], [50, 50], [50, 100]]
    
    for coordinate in turtle_coordinate_list:
        x = coordinate[0]
        y = coordinate[1]

        jane.goto(x, y)




Create a program that:

- repeat the following in a ``while True`` loop (forever)

    - makes a turtle move 10 steps forward
    - randomly turn left or right by 90 degrees 


.. activecode:: turtle_coordinates_1

    import turtle

    window = turtle.Screen()
    jane = turtle.Turtle()



Now, adapt the code above so that the program:

- adds the current coordinates to a list of places the turtle has been before. Remember that you can get the current x position with something like ``jane.xcor()``.
- change the program so that it stops when the turtle touches a location that it has been before.



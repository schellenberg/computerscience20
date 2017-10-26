
.. qnum::
   :prefix: input-output-assn-1
   :start: 1


Other Input Methods (appJar)
===============================

.. topic:: Quick Overview of Day

    Triple quoted strings can span multiple lines. Getting user input with a pop-up window using the appJar module. Work on a Python assignment, focused on input/output of strings, and conditionals.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


What Does This Program Do?
---------------------------

.. note:: Your teacher may choose to use the following examples as a class activity, by displaying the  examples, and having you take a guess as to what you think each will do before running the code. 

What will the following programs output? Why?

Can you fix the error in the following program?

.. activecode:: wdtpd_other_input_methods_1
    :caption: Find and fix the error in this program!
    :nocodelens:

    song_quote = "Leonard Cohen, in his song "Anthem", sings "There is a crack in everything; That's how the light gets in.""

    print(song_quote)

.. activecode:: wdtpd_other_input_methods_2
    :caption: What will this program print?
    :nocodelens:

    the_story = '''This is a really long story. There
    is so much to tell that it takes
    more than one line to say it all.'''

    print(the_story)


.. activecode:: wdtpd_other_input_methods_3
    :caption: What will this program print?
    :nocodelens:

    interesting_quotes = '''There's a lot of people who have said interesting things. Some fun quotes include:
    
    "What I cannot create, I do not understand." - Richard Feynman
    "Judge a man by his questions rather than by his answers." - Voltaire
    "Our ignorance of history causes us to slander our own times." - Gustave Flaubert'''

    print(interesting_quotes)



Getting User Input With appJar
----------------------------------

One of the great things about Thonny is how easy it is to add additional modules to the standard Python installation. You can think of a module as being similar to the *Library* tab that we used in Reeborg. It gives us the ability to use extra functionality that another programmer has created. For example, if you'd like to get user input through a graphical pop-up box instead of just through the console, we can do that easily by installing a module called ``appJar``. In Thonny, open *Tools -> Manage packages...*. 

.. image:: images/thonny_manage_packages_menu_item.png

Now type in ``appJar`` into the Search box (capitalization doesn't matter, but be sure to spell it *exactly*). Now click the Install button.

.. image:: images/thonny_add_appjar_module.png

You will now be able to use the appJar module in the same way you can use any other module. Here is a simple program that will use pop-up boxes to get the first and last names of the user, then print out the result to the console. If you'd like to learn how to do other things with this module, you can learn more about the `appJar module here <http://appjar.info/pythonDialogs/>`_

.. sourcecode:: python
    
    # import the library
    from appJar import gui

    # create a GUI (Graphical User Interface) instance called app
    app = gui()

    #spawn pop-up boxes
    first_name = app.textBox("Name", "First Name?") #Name is the window title, First Name? is the label text
    last_name = app.textBox("Name", "Last Name?")

    #use concatenation to join the strings together
    print("Hello there, " + first_name + " " + last_name + "!")


Assignment Work Time
---------------------

Please spend the rest of the class continuing to work on your current Python assignment (Madlib, or something similar). 


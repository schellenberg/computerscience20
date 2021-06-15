.. qnum::
   :prefix: networkzero-intro
   :start: 1


NetworkZero Introduction
=========================

.. topic:: Quick Overview of Day

    Explore NetworkZero.


Installing NetworkZero
-----------------------

In Thonny, open Tools -> Manage Packages, then type ``networkzero`` and click Search. Now click install.


References
---------------

- `NetworkZero Docs <https://networkzero.readthedocs.io/en/latest/toc.html/>`_
- `Simple demo code used with a Raspberry Pi and Sense Hat <https://gist.github.com/schellenberg/f00239d5ed23f3f00d1e8fe978c268db>`_

Basics
--------

The following runs a service, advertised under the name “hello” which will send back “Hello <name>” whenever <name> is sent to it. Other machines or processes discover the service and send names to it, receiving a greeting in return.

Machine or Process A
~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    import networkzero as nw0

    ip_address = "172.*"  #seems to be required in our lab in SPSD. You can try without this (removing the second parameter from below), or check your ip address by typing ``ipconfig`` in a command prompt on Windows. 
    address = nw0.advertise("hello", ip_address)
    while True:
        name = nw0.wait_for_message_from(address)
        nw0.send_reply_to(address, "Hello " + name)


Machine or Process B and C and D ...
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    import networkzero as nw0

    hello = nw0.discover("hello")
    reply = nw0.send_message_to(hello, "World!")
    print(reply)
    reply = nw0.send_message_to(hello, "Tim")
    print(reply)


Turtle Race Demo
-------------------

The following server code will be run on the projector. Can you adapt the client code from above to make one of the turtles move?

.. code-block:: python

    import networkzero as nw0
    import turtle

    ip_address = "172.*"  
    address = nw0.advertise("turtle-time", ip_address)
    print(f"Server is at {address}")

    window = turtle.Screen()
    window.bgcolor("lightgreen")

    FINISH_LINE = 200

    eli = turtle.Turtle()
    eli.shape("turtle")
    eli.color("red")
    eli.penup()
    eli.goto(-250, 50)

    bree = turtle.Turtle()
    bree.shape("turtle")
    bree.penup()
    bree.color("blue")
    bree.goto(-250, -50)

    ref = turtle.Turtle()
    ref.speed(0)
    ref.pensize(5)
    ref.penup()
    ref.goto(FINISH_LINE, 100)
    ref.pendown()
    ref.goto(FINISH_LINE, -100)
    ref.hideturtle()


    while True:
        message = nw0.wait_for_message_from(address)
        if message == "eli":
            eli.forward(100)
            nw0.send_reply_to(address, f"Moved eli to, {eli.xcor()}!")
        elif message == "bree":
            bree.forward(100)
            nw0.send_reply_to(address, f"Moved bree to, {bree.xcor()}!")
        
        if eli.xcor() >= FINISH_LINE or bree.xcor() >= FINISH_LINE:
            if eli.xcor() > bree.xcor():
                print("Eli wins!")
                eli.write("Eli wins!", move=False, align="right", font=("Arial", 20, "normal"))
            elif eli.xcor() < bree.xcor():
                print("Bree wins!")
                bree.write("Bree wins!", move=False, align="right", font=("Arial", 20, "normal"))
            else:
                print("It's a tie!")
            break
            
        

Your Turn
----------

Pick a partner or two. Adapt one of the programs you have written previously to work with networking. For example, you might make a program that takes in a temperature value as the message, and sends back the converted fahrenheit value. 
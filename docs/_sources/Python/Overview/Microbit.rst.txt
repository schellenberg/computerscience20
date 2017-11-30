
.. qnum::
   :prefix: microbit-intro-
   :start: 1

The Time Module and Using a Micro:bit
======================================

.. topic:: Quick Overview of Day

    Learn about the time module. Learn how to use a BBC Micro:bit to sense the physical world, and send output to the LED grid of the Micro:bit.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


.. warning:: This is just a stub, to show what should go here. It will be written up properly later. The install process for bitio is also really awkward right now. It will be improved to use the "Manage Packages..." menu soon.

Time Module
------------

Sometimes, we'd like to wait a bit before running the next command in a Python program. To do this, we can ``import time``, then use the ``.sleep()`` function. An example is below:

.. activecode:: time-sleep-1
	:nocodelens:

	# How to Pause in Python

	import time
	print("first thing")
	time.sleep(2)
	print("second thing")


.. activecode:: time-sleep-2
	:nocodelens:

	# Another Pausing Program

	import time

	for counter in range(10):
		print("Counting up. Now at", counter)
		time.sleep(1)

	print("All done!")


Micro:bit Setup
----------------

Installing a Driver If Using Legacy Windows OS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**The following only applies to users of Windows that are on a version earlier than Windows 10. If you are using Windows 10, Mac, or Linux, you can skip this step.**

If you are on a Windows machine (*< Windows 10*), you will need to download the `mbed driver <https://os.mbed.com/handbook/Windows-serial-configuration>`_ if you want to use your Micro:bit as an input/output device. Note that you will need to have a Micro:bit plugged into your machine when installing the driver, and that it requires admin rights. If you want to simply run code on your Micro:bit, and not communicate with your computer, no driver is required for any platform (but this does really limit the types of interesting things that can be done, and none of the examples in the textbook will work).

Micro:bit Modes
~~~~~~~~~~~~~~~

Your Micro:bit can be used in two modes:

- running "flashed" code, independent of a computer (can run on batteries, or through power supplied via the computers USB port)
- communicating through the serial port with your computer as an input/output device

For the purposes of this textbook, we will always be using the Micro:bit as an input/output device by communicating through the serial port. In order to do this, we need to flash the Micro:bit with a micropython .hex file. This lets you use a BBC Micro:bit in Python to sense the physical world around you, and to output to LEDs (and much more, if you hook up additional sensors). You should only have to do this once, unless you flash the Micro:bit with a different .hex file in order to use it without being tethered to a computer.

.. note::
	
	If you want to learn more about how to use the Micro:bit without it being hooked up to a computer, you can find out about how to do that on the` Microbit website <http://microbit.org/>`_. 

Flashing the Micro:bit
~~~~~~~~~~~~~~~~~~~~~~

To get this working, you will first need to install a plugin for Thonny. To do this, go to Tools -> Manage plug-ins..., then type ``thonny-flash-microbitio`` into the search bar. After the plugin has been installed, you will need to restart Thonny. You should now see an extra icon beside the Stop button, which will flash the Micro:bit with a micropython .hex file, to allow it to act as an input/output device. Connect the Micro:bit, wait until your computer has recognized it, then click the "Flash I/O .hex to BBC Microbit" icon. You should now see an I/O image on the LED grid of the Micro:bit, which tells you that your Micro:bit is ready to communicate with Python (though you still need to install a module in Thonny, as described below).

.. image:: images/bitio.png

.. note:: The ``thonny-flash-microbitio`` was written very quickly to try to ease the process of getting the Micro:bit going in my class, and is currently very much alpha quality. If the process fails for any reason, you can do the same thing manually. Download the `bitio module <https://github.com/whaleygeek/bitio/archive/master.zip>`_ and extract the contents of the .zip file. Flash the Micro:bit by dragging and dropping the ``bitio.hex`` file inside the folder you just extracted onto the ``MICROBIT`` device (in Windows Explorer, or the Mac Finder). 

Installing the Micro:bit Module in Thonny
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In order to communicate with the microbit in Python, you need to install the package ``cs20-microbitio`` in Thonny. To do that, go to Tools -> Manage packages..., type in cs20-microbitio into the search bar, and install. You only need to do this once, after which you should be able to use ``import microbit`` whenever you want to interact with the Micro:bit in Python.


Using the Micro:bit
--------------------

Once you have done that, try running the code below::

	import microbit

	microbit.display.scroll("Hey there, CS20")

When you press Run, there will be a prompt in the console telling you to disconnect the Micro:bit, then press ENTER. Follow the prompts, which allow the bitio module to detect which device connected to your computer is the Micro:bit. The console will look something like this:

	| No micro:bit has previously been detected
	| Scanning for serial ports
	| remove device, then press ENTER
	| scanning...
	| found 132 device(s)
	| plug in device, then press ENTER
	| scanning...
	| found 133 device(s)
	| found 1 new device
	| selected:/dev/tty.usbmodem1422
	| Do you want this device to be remembered? (Y/N)Y
	| connecting...
	| Your micro:bit has been detected
	| Now running your program


Once the connection is established, you should see the message scroll across the 5x5 LED grid on your Micro:bit.

Look at the :ref:`microbit_reference` in the appendix, and run some of the demonstration code found there to get a sense of what the Micro:bit can do.


Now that you've seen how some things can be accomplished, try this:

- create a program that draws a square when you press the "A" button, and a triangle when you press the "B" button.



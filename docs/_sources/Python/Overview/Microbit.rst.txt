
.. qnum::
   :prefix: microbit-intro-
   :start: 1

Using a Micro:bit with Python
==============================

.. topic:: Quick Overview of Day

    Learn how to use a BBC Micro:bit to sense the physical world, and send output to the LED grid of the Micro:bit.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CP1** Apply various problem-solving strategies to solve programming problems throughout Computer Science 20.
    - **CS20-FP1** Utilize different data types, including integer, floating point, Boolean and string, to solve programming problems.
    - **CS20-FP2** Investigate how control structures affect program flow.


.. warning:: This is just a stub, to show what should go here. It will be written up properly later. The install process for bitio is also really awkward right now. It will be improved to use the "Manage Packages..." menu soon.

.. note:: If you are on a Windows machine (< Windows 10), you will need to download the `mbed driver <https://os.mbed.com/handbook/Windows-serial-configuration>`_ if you want to use your Micro:bit as an input/output device. If you are on Mac, Linux, or Windows 10, no driver install is required. Note that you will need to have a Micro:bit plugged into your machine when installing the driver, and that it requires admin rights. If you want to simply run code on your Micro:bit, and not communicate with your computer, no driver is required for any platform (but this does really limit the types of interesting things that can be done).


Your Micro:bit can be used in two modes:

- running "flashed" code, independent of a computer (can run on batteries, or another power source)
- communicating through the serial port with your computer as an input/output device

The rest of today's demo's will assume that we are using the Micro:bit as an input/output device communicating through the serial port of your computer.

Download the `bitio module <https://github.com/whaleygeek/bitio/archive/master.zip>`_ and extract the contents of the .zip file. This lets you use a BBC Micro:bit in Python to sense the physical world around you, and to output to LEDs (and much more, if you hook up sensors).

To use the Micro:bit as an input/output device, you need to "flash" it with a .hex file that contains code to communicate with your computer. Do this by dragging and dropping the ``bitio.hex`` file inside the folder you just extracted onto the ``MICROBIT`` device (in Windows Explorer, or the Mac Finder). You should now see an I/O image on the LED grid of the Micro:bit, which tells you that your Micro:bit is ready to communicate with Python via the bitio module.

.. image:: images/bitio.png

Now, navigate to the src/ folder, and open the file ``std_image.py`` in Thonny. When you press Run, there will be a prompt in the console telling you to disconnect the Micro:bit, then press ENTER. Follow the prompts, which allow the bitio module to detect which device connected to your computer is the Micro:bit. Once that is complete, you should see a series of images begin to show up on the 5x5 LED grid on your Micro:bit. The console will look something like this:

	No micro:bit has previously been detected
	Scanning for serial ports
	remove device, then press ENTER
	scanning...
	found 132 device(s)
	plug in device, then press ENTER
	scanning...
	found 133 device(s)
	found 1 new device
	selected:/dev/tty.usbmodem1422
	Do you want this device to be remembered? (Y/N)Y
	connecting...
	Your micro:bit has been detected
	Now running your program

Change the code in this file to read::

	import microbit

	microbit.display.scroll("Hey there, CS20")


Try some of the other demonstration code files, including:

- tilt.py
- touched.py
- sensing.py
- custom_image.py
- counter.py
- button.py
- arrows.py
  
Now that you've seen how some things can be accomplished, try this:

- create a program that draws a square when you press the "A" button, and a triangle when you press the "B" button.
- create a program that controls a turtles drawing by using the accelerometer. You might want to use the code in ``tilt.py`` as a starting point.
- try something new! 

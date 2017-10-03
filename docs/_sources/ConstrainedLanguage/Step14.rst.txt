Step 14: It's Going to Rain
===============================================

Project
--------

Open Step 14a on the |reeborg_environment|.

.. image:: images/step14a.png

Reeborg is standing by the door to the house, sees a storm coming, and decides to close all of the windows in the house. First, Reeborg ``put``s down a star where it is standing (so that it can tell when it gets back to the door). Then Reeborg will walk around the house, closing any open windows it finds. We will represent the window closing by Reeborg putting a star down at an open window (represented by wall openings). Reeborg loves storms, so after closing all the windows, it will step outside to watch the storm.

.. note:: Since the windows are in different places in each world, be sure that your solution does not *hard code* a number of steps to get to a window. Instead, Reeborg must check for an open window as it walks around the inside of the house.

The program you write to solve the problem above must also be able work on the second test world, which is Step 14b on the `Reeborg website <https://sk-opentexts.github.io/reeborg>`_ . 

.. image:: images/step14b.png


.. |reeborg_environment| raw:: html

   <a href="https://sk-opentexts.github.io/reeborg" target="_blank">Reeborg environment</a>
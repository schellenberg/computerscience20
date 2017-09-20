Step 2: Taking and Putting Down Objects
=======================================

Tutorial
--------

Sometimes Reeborg may need to take an object that is on the ground, or put down an object that he is carrying. You can use the ``take()`` function to tell Reeborg to pick up an object that is on the ground. To put an object that Reeborg is carrying back down on the ground, use the ``put()`` function.

In the Step 2 world, there are three dandelions on the ground between Reeborg and his house. Your job is to pick them up, then put them in the garbage can, which is directly in front of the house at (5, 1).

.. image:: images/step2.png

When there is an object on the ground, it is represented using a colorful image, and the red number on the left-hand side of the image tells you how many of those objects there are. For example, in location (2, 1), there is one dandelion.

.. image:: images/object_on_ground.png

If there is a specific place that objects should be put down (also known as a goal), it is represented using a grayscale image, and the blue number on the right-hand side of the image tells you how many objects are expected to be put down in that location. For example, in location (5,1), Reeborg needs to put down 3 dandelions.

.. image:: images/objects_required_here.png


Your Turn
---------

Open Step 2 on the `Reeborg website <http://wmcicompsci.ca/reeborg>`_ .

Give Reeborg the appropriate instructions to make him pick up the dandelions, put them in the garbage, and return home!
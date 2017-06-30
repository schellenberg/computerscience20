# how to add images - put them into a Figures folder in the chapter, then include something like this in the text:
.. image:: Figures/fractionpic1.png


# how to include activecode
.. activecode:: fractions_init

    for counter in range(5):
        print("hello world")


# how to include inline code (written in red text by default)
To design our class, we simply need to use the analysis above to realize that
the `state` of a fraction object can be completely described by representing
two integers.  We can begin by implementing the ``Fraction`` class and the
``__init__`` method which will allow the user to provide a numerator and a
denominator for the fraction being created.


# how to include a Scratch project in the text
.. raw:: html

   <iframe allowtransparency="true" width="485" height="402" src="//scratch.mit.edu/projects/embed/143017505/?autostart=false" frameborder="0" allowfullscreen></iframe>
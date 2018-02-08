
.. qnum::
   :prefix: warmup-1
   :start: 1


Warmup 1
========


Practice Problems
------------------

Try the following practice problems. Each time you press Run, you will see if your solution works the way it should, or in what situation it has failed.


sleep_in
~~~~~~~~


   

.. activecode:: sleep-in
    :nocodelens:

    The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

    ``sleep_in(False, False) → True``
    ``sleep_in(True, False) → False``
    ``sleep_in(False, True) → True``
    ~~~~
    def sleep_in(a,b):
      return 4

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(sleep_in(False,False),True,"X")
            self.assertEqual(sleep_in(True,False),False,"X")
            self.assertEqual(sleep_in(False,True),True,"X")
            self.assertEqual(sleep_in(True,True),True,"X")

    myTests().main()
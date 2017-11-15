
.. activecode:: wdtpd_functions_7
    :caption: What will this program print?

    def a(x):
        print("A start, x =",x)
        b(x + 1)
        print("A end, x =",x)
         
    def b(x):
        print("B start, x =",x)
        c(x + 1)
        print("B end, x =",x)
         
    def c(x):
        print("C start and end, x =",x)
         
    a(5)


.. activecode:: wdtpd_functions_8
    :caption: What will this program print?

    def a(x):
        x = x + 1
     
    x = 3
    a(x)
     
    print(x)


.. activecode:: wdtpd_functions_9
    :caption: What will this program print?

    def a(x):
        x = x + 1
        return x
     
    x = 3
    a(x)
     
    print(x)


.. activecode:: wdtpd_functions_10
    :caption: What will this program print?

    def a(x):
        x = x + 1
        return x
     
    x = 3
    x = a(x)
     
    print(x)
.. qnum::
   :prefix: pygame-intro
   :start: 1


pyGame Introduction
=====================

.. topic:: Quick Overview of Day

    Explore pyGame.


Installing pyGame
------------------

In Thonny, open Tools → Manage Packages, then type ``pygame`` and click Search. Now click install.


References
---------------

- `Invent With Python - Making Games with Python & Pygame <http://inventwithpython.com/pygame/>`_
- `Pygame Docs <https://www.pygame.org/docs/>`_

Basics
--------

`Boilerplate code  <http://inventwithpython.com/pygame/chapter2.html>`_

.. code-block:: python

	import pygame, sys
    from pygame.locals import *
    
    pygame.init()
    DISPLAYSURF = pygame.display.set_mode((400, 300))
    pygame.display.set_caption('Hello World!')
    
    while True: # main game loop
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
        pygame.display.update()

- coordinate system (origin in top left)
- colors are RGB tuples (same as lists, but with regular parentheses) -- might want to set a few variables to hold frequently used ones...
- drawing simple shapes (line, circle, ellipse, rect) ``pygame.draw.rect(DISPLAYSURF, RED, (200, 150, 100, 50))``
- load an image ``pygame.image.load('cat.png')``, then display it in the loop ``DISPLAYSURF.blit(catImg, (catx, caty))``
- FPS clock
    - declare an FPS constant, something like ``FPS = 30``
    - create a clock, like ``fpsClock = pygame.time.Clock()``
    - at the end of the game loop, make the clock update by ``fpsClock.tick(FPS)``
- playing sounds
How to Fork the Textbook
=========================

- create a GitHub account
	- confirm your account (check your email)
- fork https://github.com/schellenberg/computerscience20
- download GitHub desktop (desktop.github.com)
- clone the GitHub fork you just made to some location on your computer by clicking the big green "Clone or download" button, then clicking "Open in desktop"
- if you don't already have a text editor of choice, go get VS Code (code.visualstudio.com)
	- might want to install a .rst extension on the text editor (will save you from making dumb typos, as all of the source code files are in reStructuredText)
- if you do not already have Python 3.x installed, do that (https://www.python.org/)
- open a terminal and type ``pip install pipenv``
- on GitHub website, open up your forked repo, and go to the Settings tab
	- scroll down to the GitHub Pages section, then select "master branch /docs folder" as the Source, then click Save
- installing dependencies
	- open GitHub Desktop
	- select the computerscience20 repository (if required, if you have more than just one repo set up)
	- fetch origin (top right button) -- this makes sure your local copy is the most up to date version before you start changing things
	- use Repository → Open in Visual Studio Code to access the source code of the textbook
	- in VS Code, select Terminal → New Terminal, then type ``pipenv install``. This should install all the dependencies for you.

Daily workflow
---------------

- open GitHub Desktop
	- select the computerscience20 repository (if required, if you have more than just one repo set up)
	- fetch origin (top right button) -- this makes sure your local copy is the most up to date version before you start changing things
	- use Repository → Open in Visual Studio Code to access the source code of the textbook

- in VS Code, expand the _sources folder (all the source code for the textbook can be found in here)
	- change whatever you want in any of the _source code folder, then save your work

- to build the book while working in VS Code, select Terminal → New Terminal, then type ``pipenv shell``. You should now have two commands to use:
	- runestone build -- this is the command that takes your _source code folder, and converts each source code file into an .html file. The resulting website is saved into the ``/docs`` folder. This is the folder that contains the actual static website that your students will be using.
	- runestone serve -- this command opens up a local development webserver so that you can test out your most recent website build before pushing it live to the web. You can access the website at http://localhost:8000/

- once you are satisfied with your changes and the resulting build, open up GitHub Desktop, and:
	- provide a message describing your changes in the ``Summary (required)`` text input
	- click on ``Commit to master``
	- click ``Push origin`` (top right hand of the GitHub Desktop window). This should update the live version of your fork of the textbook.


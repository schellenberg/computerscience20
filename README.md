# Computer Science 20 - Saskatchewan
An open textbook intended to cover the requirements of the Saskatchewan Computer Science 20 curriculum (curriculum went live Feb, 2018).

## Contributing to the Book
If you spot any errors in the book, or would like to contribute changes that you have made to the book, you have a few options:
- create an issue through GitHub Issues (click the issues tab above, then create a new issue).
- if you are familiar with the GitHub workflow, you can fork the project, then create a pull request of your changes back to this repository.
- get in touch with me (schellenbergd@spsd.sk.ca), and let me know what changes need to be made.

## Building the book yourself
If you want to create your own version of the book, you are welcome to do so! The book is released under the Creative Commons Attribution Share-Alike 4.0 International License, so you are welcome to change it as you see fit and create your own version of it. To do this, simply fork/clone this repository, then follow the [build-instructions.md](notes-to-self/build-instructions.md) file (in the notes-to-self folder) to get going. The short version of this is:

1. Install Python 3.10 (on Windows, I'd recommend doing this by using the Python Install Manager in the Microsoft Store). Use 3.10 rather than a newer version, to make using the older version of Runestone work without difficulty.

2. [Install Poetry](https://python-poetry.org/docs/#installing-with-the-official-installer) (a tool to simplify Python dependency management)

3. If you don't have a text editor of choice, I would suggest using [VS Code](https://code.visualstudio.com/). 

4. If you don't have [GitHub Desktop](https://desktop.github.com/), download it.

5. On the GitHub web interface, click the "Clone or download" green button, then "Open in Desktop". Clone the repo locally. Click on "Open in Visual Studio Code".

6.  In VS Code, open a terminal (alternatively, open a terminal and ``cd`` to the computerscience20 folder) and tell Poetry to use Python 3.10 by typing ``poetry env use py -3.10``. Now type ``poetry install``. This should install everything you need.

7.  Type ``poetry run runestone build`` -- this will build the html and put it in ``./docs/`` directory (if you have cloned this project on GitHub, that should automatically update your GitHub Pages output with your changes).

8. To test out your changes locally before pushing up to GitHub Pages, type ``poetry run runestone serve``, which will run a local web server and allow you to confirm that your changes are doing what you expect. Open your browser and go to ``localhost:8000``.

For a more comprehensive overview of what you need to do to get a fork of the textbook going, [follow the instructions I created when getting another teacher set up](notes-to-self/how-to-fork-the-textbook.rst) to create a French fork of the textbook.

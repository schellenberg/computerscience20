# Computer Science 20 - Saskatchewan
An open textbook intended to cover the requirements of the Saskatchewan Computer Science 20 curriculum (curriculum went live Feb, 2018).

## Contributing to the Book
If you spot any errors in the book, or would like to contribute changes that you have made to the book, you have a few options:
- create an issue through GitHub Issues (click the issues tab above, then create a new issue).
- if you are familiar with the GitHub workflow, you can fork the project, then create a pull request of your changes back to this repository.
- get in touch with me (schellenberg@gmail.com), and let me know what changes need to be made.

## Building the book yourself
If you want to create your own version of the book, you are welcome to do so! The book is released under the Creative Commons Attribution Share-Alike 4.0 International License, so you are welcome to change it as you see fit and create your own version of it. To do this, simply fork/clone this repository, then follow the [build-instructions.md](notes-to-self/build-instructions.md) file (in the notes-to-self folder) to get going. In short, it will involve a few simple commands (you'll need Python installed on your system):

1. If you don't already have it installed, [install pipenv](https://pipenv.readthedocs.io/en/latest/) which allows you to install all of the dependencies in a virtual environment (in other words, in a way that won't mess up anything else you are building). The easiest way is to open a terminal and type ``pip install pipenv``.
2. If you don't have a text editor of choice, I would suggest using [VS Code](https://code.visualstudio.com/). 
3. If you don't have [GitHub Desktop](https://desktop.github.com/), download it.
4. On the GitHub web interface, click the "Clone or download" green button, then "Open in Desktop". Clone the repo locally. Click on "Open in Visual Studio Code".
5.  In VS Code, open a terminal (alternatively, open a terminal and ``cd`` to the computerscience20 folder) and type ``pipenv install``. This should install everything you need for you.
6.  Type ``pipenv shell``. This allows you to use the customized commands installed in the last step.
6.  Type ``runestone build`` -- will build the html and put it in ``./docs/`` directory (if you have cloned this project on GitHub, that should automatically update your GitHub Pages output with your changes).
7. To test out your changes, type ``runestone serve``, which will run a local web server and allow you to confirm that your changes are doing what you expect.

For a more comprehensive overview of what you need to do to get a fork of the textbook going, [follow the instructions I created when getting another teacher set up](notes-to-self/how-to-fork-the-textbook.rst) to create a French fork of the textbook.

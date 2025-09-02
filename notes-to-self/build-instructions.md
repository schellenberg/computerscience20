# Build Instructions

## First time
- install Python 3.10 (on Windows, I'd recommend doing this by using the Python Install Manager in the Microsoft Store). Use 3.10 rather than a newer version, to make using the older version of Runestone work without difficulty.
- install poetry (``(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -``) -- allows you to easily install dependencies based on a pyproject.toml file included in a project -- it's a modern replacement for pipenv
- initiate a new poetry project ``poetry init --no-interaction``
- tell Poetry to use Python 3.10
  ``cd "C:\Users\schellenbergd\Github no sync\computerscience30"``
  ``poetry env use py -3.10`` (if this fails, get the full path with ``py -3.10 -c "import sys; print(sys.executable)"``, and then point poetry to that -- ask AI for help if needed)
- clone the computerscience20 repository, and `cd` to it in your shell (something like `cd C:\Users\dan\Documents\GitHub\computerscience20`)
- `poetry install` --  Should install everything you need [note that as the Runestone project has continued to grow, this usage case of building a self-contained book and hosting it on Github Pages may not continue to work well. For that reason, I specified runestone version 6.2 in the Pipfile]
- `poetry run runestone build` -- will build the html and put it in ./docs/ folder, which is set up to serve the webpage on GitHub Pages

### Important Note!!!
If serving the resulting build on GitHub pages, you MUST create a file called `.nojekyll` and save it in the folder you are serving the pages from. This will convince GitHub to include files/folders prepended with an underscore (such as _static).

## Subsequent times
- `cd` to the computerscience20 folder (something like `cd C:\Users\dan\Documents\GitHub\computerscience20`) 
    - alternatively, if you are using VS Code as your editor, you can just open a terminal within VS Code when opening the repo, and it will automatically be in the correct folder
- `poetry run runestone build` -- will build the html and put it in ./docs/
- `poetry run runestone serve` -- serves a local development version of the textbook. Open your browser to `http://localhost:8000/` to see it.
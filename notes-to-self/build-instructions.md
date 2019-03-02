# Build Instructions

## First time
- install python3
- `pip install pipenv` -- allows you to easily install dependencies based on a pipfile included in a project
- clone the computerscience20 repository, and `cd` to it in your shell (something like `cd C:\Users\dan\Documents\GitHub\computerscience20`)
- `pipenv install` --  Should install everything you need
- `pipenv run runestone build` -- will build the html and put it in ./docs/ folder, which is set up to serve the webpage on GitHub Pages

### Important Note!!!
If serving the resulting build on GitHub pages, you MUST create a file called `.nojekyll` and save it in the folder you are serving the pages from. This will convince GitHub to include files/folders prepended with an underscore (such as _static).

### Skulpt build
For right now, I'm using a customized build of Skulpt, in order to be able to use under_score_separated_variable_names on the website while doing image manipulation. In order to do this, just drag the skulpt.min.js and skulpt-stdlib.js files from this notes-to-self folder into the /docs/_static/ folder.

## Subsequent times
- `cd` to the computerscience20 folder (something like `cd C:\Users\dan\Documents\GitHub\computerscience20`) 
    - alternatively, if you are using VS Code as your editor, you can just open a terminal within VS Code when opening the repo, and it will automatically be in the correct folder
- `pipenv run runestone build` -- will build the html and put it in ./docs/
- `pipenv run runestone serve` -- serves a local development version of the textbook. Open your browser to `http://localhost:8000/` to see it.
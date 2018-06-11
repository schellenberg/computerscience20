# Build Instructions

## First time
- install python3 (`brew install python3`, on a Mac, assuming homebrew has been installed)
- [optionally, if you want to set up a virtual env] install pyvirtualenv (`pip3 install virtualenv`)
- [optionally, if you want to set up a virtual env] install virtualenvwrapper (info from here: http://docs.python-guide.org/en/latest/dev/virtualenvs/) -- be sure to set both $PROJECT_HOME and $WORKON_HOME variables
- [optionally, if you want to set up a virtual env] create virtual environment for the project: `mkvirtualenv sk-thinkcs`
- [optionally, if you want to set up a virtual env] `workon sk-thinkcs`
- `pip install -r requirements.txt` -- Should install everything you need
- `runestone build` -- will build the html and put it in ./docs/ folder, which is set up to serve the webpage on GitHub Pages
- [optionally, if you want to set up a virtual env] `deactivate` (when done working)

### Important Note!!!
If serving the resulting build on GitHub pages, you MUST create a file called `.nojekyll` and save it in the folder you are serving the pages from. This will convince GitHub to include files/folders prepended with an underscore (such as _static).

### Skulpt build
For right now, I'm using a customized build of Skulpt, in order to be able to use under_score_separated_variable_names on the website while doing image manipulation. In order to do this, just drag the skulpt.min.js and skulpt-stdlib.js files from this notes-to-self folder into the /docs/_static/ folder. *Note: this shouldn't be required for too much longer, as my customized version of the image library has been incorporated into Skulpt, so manually including a customized build should not be required long term.*

## Subsequent times
- [optionally, if you want to set up a virtual env] `workon sk-thinkcs`
  - if not using a virtual env, just navigate to the computerscience20 folder, then
- `runestone build` -- will build the html and put it in ./docs/
- `deactivate` (when done working)

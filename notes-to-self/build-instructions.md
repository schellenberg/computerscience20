# Build Instructions

## First time
- install python3 (brew install python3, on a Mac, assuming homebrew has been installed)
- install pyvirtualenv (pip3 install virtualenv)
- install virtualenvwrapper (info from here: http://docs.python-guide.org/en/latest/dev/virtualenvs/) -- be sure to set both $PROJECT_HOME and $WORKON_HOME variables
- create virtual environment for the project: mkvirtualenv sk-thinkcs
- workon sk-thinkcs
- pip install -r requirements.txt -- Should install everything you need
- runestone build -- will build the html and put it in ./build/thinkcspy
    - if happy with the results, move contents of this folder over to /docs folder (where the webpage is served from)
- deactivate (when done working)

### Important Note!!!
If serving the resulting build on GitHub pages, you MUST create a file called `.nojekyll` and save it in the folder you are serving the pages from. This will convince GitHub to include files/folders prepended with an underscore (such as _static).

## Subsequent times
- workon sk-thinkcs
- runestone build -- will build the html and put it in ./build/thinkcspy
    - if happy with the results, move contents of this folder over to /docs folder (where the webpage is served from)
- deactivate (when done working)
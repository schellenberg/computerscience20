# How to Set Up a Reeborg Quiz

- situation: you want to have your students write a quiz, and do not want to give them access prior to the quiz
- might be other ways that are better? if not, this might be worth hacking on Reeborg to make it happen...

- can give the students the .json world file, and just have them import it to Reeborg
- can upload a file onto the web server (or the worlds folder, if you are running it locally), then have the students execute the code:
    World("path/to/world.json", "world name")

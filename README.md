# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alvin Ly**

Time spent: **3** hours spent in total

Link to project: https://sticky-classic-salmon.glitch.me/   (Not sure if this works properly)
                 https://glitch.com/edit/#!/sticky-classic-salmon?path=README.md%3A1%3A0
## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
(NOTE: Not sure why the frequencies don't work on the video, but on my end it works fine.)
![]!https://www.loom.com/share/a7f399b9fc9d42f38d0486b2ea3093a7


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I looked up via google whatever I needed help with. Websites I used the most were GeeksForGeeks and W3Schools.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[For the longest time, I had no idea the "lose after 3 mistakes" wasn't working. I triple checked my logic, and it seemed perfectly fine. A simple counter increment and once that counter hits 3, then I loseGame(); <br />
I didn't realize at the end of the document, there were hints on how to implement it. But after reading it, I still couldn't get my code to work.<br />
First of all, I read the "global variable" to keep track. Global? I thought to myself. I just copy and paste these "const" variables right? <br />
"My logic seems fine, right?" I thought to myself. I kept trying to implement with the game logic. Moving the loseGame() here, incrementing the loseCounter there. Stuff like that <br />
For the "global variable", I simply copied and pasted the first "const" variables I saw at the top of the code.<br />
Then it hit me, "const". Const stands for a constant variable. But I'm trying to increment my counter by 1. <br />
I simply changed that "const" to "var".<br />
Unfortunately, my mindless copy and paste was simple mistake that took me quite a long time to fix.<br />
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Web Development is a beautiful thing, and there are beautiful things you can do with it. So my first question is, What's the limit of web development? 
What exactly can I do and not do? Can I create an animation that pops out words to me? Could I create a game where users can simply play on the website using pure HTML, CSS, and JAVASCRIPT?
Probably. 
Another question I had was say if there was a login / password system, how does that work? In terms of back-end, I'm assuming it'll be stored as a map / dictionary in the database, but it doesn't sound that simple
I would probably look up a youtube video after I'm finished typing this up.
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[Unfortunately for me, I didn't see this opportunity until 9:00 PM 3/24/2021 while browsing my HackatUCI Discord.
I only had 3 hours to implement everything, and I wish I had more time. I wish I had more time to implement every single "Optional" feature. I wish I had time to fiddle around and play with certain things
I wish I had time to figure out how to implement background images on a #button instead of just giving up in order to submit in time. 
Outside of the optional features, I was thinking if there a way to create another gamemode where it's not based on the sound, but the location. 
Maybe shuffle the squares (same color) around and have the user trace it and try to memorize its location.
]



## License

    Copyright [Alvin Ly]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

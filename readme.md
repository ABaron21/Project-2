# Tribal Minds
![responive-image](docx/screenshots/responsive-screenshot.png)
Click here to vist the Tribal Minds website https://abaron21.github.io/Tribal_Minds

## Project Purpose
Expanding on the static website style with basic user interaction & expierience, the website that will be built is going to extend that interaction with funcionality programmed through JS (JavaScript) and external APIs. The intended purpose for the website is for user to access different games on the website either being a mind game or maths game and also to be able to send feedback on the website.

----
## User Stories
As a user I want to be able to switch between the different web pages so I can navigate easily around the website.

As a user I would like to see the different difficulties of the games so I can choose to play easy, medium or hard difficulty.

As a user I would like to know the different versions of the memory game so I can decide which one I want to play.

As a user I want to read feedback from other users so I can see what the games are like before playing.

As a user I would like to be able to send feedback to the developer so I can give a positive review or some suggestions for future developments.

----
## Features
* Games with Easy, Medium & Hard difficulties:
    * Memory game with either buttons or circles.
        * Each difficulty will change the the max number of turns a turn will need to reach in order to complete that difficulty, i.e easy - 10 medium - 20 etc.
    * Maths game
        * The difficulties change the factors that the number generator takes into account for each operand within the game, easy - 25 medium - 50 hard - 100.
* Reviews from previous users.
* Sending feedback via Email.
* See plans for new games to come.

----
## Future Features
* Multiplayer option to challenge other users.
* Different game modes (e.g time trials, one life).
* Leaderboard system for each game.
* Chat system to talk with other users.

----
## Typography & Colour Scheme
* Font:
    * Style: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans#styles)
    * Colour: 
* Background: Linear gradient going left to right starting with a violet colour that fades into a light purple/pink blend and fades out to the same violet colour.

----
## Wireframes
Landing Page
![landing-page](docx/wireframes/landing-page.png)

About Page
![contact-page](docx/wireframes/contact-page.png)

Maths Game
![maths-game](docx/wireframes/maths-game.png)

Memory Game(Circle)
![memory-game-circle](docx/wireframes/memory-game-circle.png)

Memory Game(Buttons)
![memory-game-buttons](docx/wireframes/memory-game-buttons.png)

## Technology Used
Balsamiq Wireframes - Used to build/create the visual outline for the different web pages that the website consists of.

GitPod - Cloud based IDE used to create and build the code for the website.

HTML - Programming language used to build the structure of the website/web pages by the use of elements and different components.

CSS - The styling for the website, used to make the web pages more visually appealing.

Bootstrap - An external libary used that aims to focus on the resposiveness of the website.

JavaScript - Provides the functionality for the website, allowing for improved user interaction/expierience.

Jest - Testing environment used to test the javascript functions within the website.

GitHub - A cloud based storage used as the version control for the production by committing and pushing at various stages throughout the development.

GitPages - Used to deploy the final development.

----
# Testing

## Code Validation
### Landing Page
HTML

![index-html](docx/screenshots/code-validations/landing-page-html-validation.png)

CSS

![index-css](docx/screenshots/code-validations/landing-page-css-validation.png)

### Contact Page
HTML

![contact-html](docx/screenshots/code-validations/contact-page-html-validation.png)

CSS

![contact-css](docx/screenshots/code-validations/contact-page-css-validation.png)

### MatheMania Page
HTML

![mathemania-html](docx/screenshots/code-validations/mathemania-html-validation.png)

CSS

![mathemania-css](docx/screenshots/code-validations/mathemania-css-validation.png)

### MemoryMania(Circles) Page
HTML

![memorycircle-html](docx/screenshots/code-validations/memorycircle-html-validation.png)

CSS

![memorycircle-css](docx/screenshots/code-validations/memorycircle-css-validation.png)

### MemoryMania(Buttons) Page
HTML

![memorybuttons-html](docx/screenshots/code-validations/memorybuttons-html-validation.png)

CSS

![memorybuttons-css](docx/screenshots/code-validations/memorybuttons-css-validation.png)

### JavaScript Jest Tests

To run the tests within the command line type 'npm test' or run coverage as shown below type in the CLI 'npm test -- --coverage'.

![jest-testing](docx/screenshots/jest-screenshot.png)

## User Stories

### Navigating through Tribal Minds:
1. Load the website.
2. Look at the top right of the page.
3. (Mobile device) Click the hamburger icon at the top right of the screen.

![userstory1-mobile](docx/screenshots/user-stories/us1-mobile.png)
![userstory1-tablet](docx/screenshots/user-stories/us1-tablet.png)
![userstory1-desktop](docx/screenshots/user-stories/us1-desktop.png)

### Seeing feedback other users have given:
1. Navigate to the contact page.
2. Read the second section on the page.
3. (Small devices) Scroll down to the second section.

![userstory2-mobile](docx/screenshots/user-stories/us2-mobile.png)
![userstory2-tablet](docx/screenshots/user-stories/us2-tablet.png)
![userstory2-desktop](docx/screenshots/user-stories/us2-desktop.png)

### Sending feedback to the developer:
1. Navigate to the contact page.
2. Go to the bottom of the page.
3. Fill in the name, email and message input fields.
4. Click the send button.

![userstory3](docx/screenshots/user-stories/us3.png)

### Selecting a different version of MemoryMania:
1. Click the play button under the MemoryMania heading.
2. Select the radio button labelled with which version you want to play.
3. Click play at the bottom of the modal.

![userstory4-mobile](docx/screenshots/user-stories/us4-mobile.png)
![userstory4-tablet](docx/screenshots/user-stories/us4-tablet.png)
![userstory4-desktop](docx/screenshots/user-stories/us4-desktop.png)

### Switching difficulites in a game:
1. Locate the 3 difficulty buttons on the screen/page.
2. Click on the medium difficulty.
3. The button will change once selected.

![userstory5-mobile](docx/screenshots/user-stories/us5-mobile.png)
![userstory5-tablet](docx/screenshots/user-stories/us5-tablet.png)
![userstory5-desktop](docx/screenshots/user-stories/us5-desktop.png)

## Bugs

### JSDom Installing & Implementing
This bug occurred closed to the beginning of the test driven development and the cause of this was because the jsdom test environment wasn't installed and imported properly into the test scripts.

![jsdom-error](docx/screenshots/bugs/jsdom-error.png)

Fixing the issues was a simple solution of searching and reading through the documentation for the latest version of jest and jsdom test environment, then just following the steps shown to install and import the test environment.

### Sending Feedback Trigger 405 Error
This issue didn't show up until the website was deployed to GitHub Pages, when a user would attempt to send feedback through the contact page and click the send button it would respond with a 405 'Method Not Allowed' response resulting in the user not being able to send feeback via emailJS.

![feedback-error](docx/screenshots/bugs/feedback-bug.png)

Resolving this issue was a case of throughly checking through the form element within contact.html as well as the sendEmail.js file, after checking the code the cause of the issue was within the form attributes and it was fixed by removing the method attribute and taking out the 'return' in the onsubmit click attribute.

## Screens
Each web pages has been tested to make sure that they are fully responsive across all screen sizes beginning with mobile devices and increasing upwards to tablets, laptops and finally desktops as it's the largest screen size expected for a browser window.

----
## Deployment
Two versions on deployment:
* GitPod - used throughout the development by typing 'python3 -m http.server' in the terminal which gives a prompt to open in a new tab within the browser.
* GitPages - the final deployment of the website which makes it accesible to the public.

----
## Credits

### External Code
* Bootstrap:
    * Collapsable Nav Bar
    * Modals

* EmailJS
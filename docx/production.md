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

![index-html](screenshots/code-validations/landing-page-html-validation.png)

CSS

![index-css](screenshots/code-validations/landing-page-css-validation.png)

### Contact Page
HTML

![contact-html](screenshots/code-validations/contact-page-html-validation.png)

CSS

![contact-css](screenshots/code-validations/contact-page-css-validation.png)

### MatheMania Page
HTML

![mathemania-html](screenshots/code-validations/mathemania-html-validation.png)

CSS

![mathemania-css](screenshots/code-validations/mathemania-css-validation.png)

### MemoryMania(Circles) Page
HTML

![memorycircle-html](screenshots/code-validations/memorycircle-html-validation.png)

CSS

![memorycircle-css](screenshots/code-validations/memorycircle-css-validation.png)

### MemoryMania(Buttons) Page
HTML

![memorybuttons-html](screenshots/code-validations/memorybuttons-html-validation.png)

CSS

![memorybuttons-css](screenshots/code-validations/memorybuttons-css-validation.png)

### JavaScript Jest Tests

To run the tests within the command line type 'npm test' or run coverage as shown below type in the CLI 'npm test -- --coverage'. Jest is the testing stage before/during & after coding javascript depending upon how you want to construct your, for this production jest was used before/during to conform with current best practice of TDD(Test Driven Development) where the javascript functionality is driven from the jest tests that have been designed and built.

Alongside Jest there are 2 different forms of testing (Manual or Automatic), Automatic testing is when tests have been built to run continously behind the scenes to ensure that the code that doesn't require any user interaction runs smoothly. Manual testing on the other hand is testing functions that play the part with user interaction and ensuring it works as intended such as the code returning something to the user based on the input they've given.

![jest-testing](screenshots/jest-screenshot.png)

### JSHint Testing

#### Mathemania
![mathemania-jshint](docx/screenshots/code-validations/mathemania-jshint.PNG)

#### MemoryCirle
![memorycircle-jshint](docx/screenshots/code-validations/memorycircle-jshint.PNG)

#### MemoryButtons
![memorybuttons-jshint](docx/screenshots/code-validations/memorybuttons-jshint.PNG)


## User Stories

### Navigating through Tribal Minds:
1. Load the website.
2. Look at the top right of the page.
3. (Mobile device) Click the hamburger icon at the top right of the screen.

![userstory1-mobile](screenshots/user-stories/us1-mobile.png)
![userstory1-tablet](screenshots/user-stories/us1-tablet.png)
![userstory1-desktop](screenshots/user-stories/us1-desktop.png)

### Seeing feedback other users have given:
1. Navigate to the contact page.
2. Read the second section on the page.
3. (Small devices) Scroll down to the second section.

![userstory2-mobile](screenshots/user-stories/us2-mobile.png)
![userstory2-tablet](screenshots/user-stories/us2-tablet.png)
![userstory2-desktop](screenshots/user-stories/us2-desktop.png)

### Sending feedback to the developer:
1. Navigate to the contact page.
2. Go to the bottom of the page.
3. Fill in the name, email and message input fields.
4. Click the send button.

![userstory3](screenshots/user-stories/us3.png)

### Selecting a different version of MemoryMania:
1. Click the play button under the MemoryMania heading.
2. Select the radio button labelled with which version you want to play.
3. Click play at the bottom of the modal.

![userstory4-mobile](screenshots/user-stories/us4-mobile.png)
![userstory4-tablet](screenshots/user-stories/us4-tablet.png)
![userstory4-desktop](screenshots/user-stories/us4-desktop.png)

### Switching difficulites in a game:
1. Locate the 3 difficulty buttons on the screen/page.
2. Click on the medium difficulty.
3. The button will change once selected.

![userstory5-mobile](screenshots/user-stories/us5-mobile.png)
![userstory5-tablet](screenshots/user-stories/us5-tablet.png)
![userstory5-desktop](screenshots/user-stories/us5-desktop.png)

## Bugs

### JSDom Installing & Implementing
This bug occurred closed to the beginning of the test driven development and the cause of this was because the jsdom test environment wasn't installed and imported properly into the test scripts.

![jsdom-error](screenshots/bugs/jsdom-error.png)

Fixing the issues was a simple solution of searching and reading through the documentation for the latest version of jest and jsdom test environment, then just following the steps shown to install and import the test environment.

### Sending Feedback Trigger 405 Error
This issue didn't show up until the website was deployed to GitHub Pages, when a user would attempt to send feedback through the contact page and click the send button it would respond with a 405 'Method Not Allowed' response resulting in the user not being able to send feeback via emailJS.

![feedback-error](screenshots/bugs/feedback-bug.png)

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
# Equation Training!

This website is aim towards younger students starting to learn how to solve equations. 

Users will use this website to test their understanding of simple equations and memorize the steps need to be taken to solve them. 

![responsive](assets/images/Screenshot%20Responsiveness.png)

## Features
- ### The Header
    - Positioned at the top of the page is the title of the page. It lets the user know what the website is aiming to provide for them. 
    - It is coloured to look like a blackboard with white chalk written. 

![header](assets/images/Screenshot%20header.png)

- ### Game score
    - This section contains text to explain what the user is required to do.
    - It has a 'New equation' button that will generate a new equation whenever the user requires one.
    - It also contains the correct and incorrect scores to let the user keep track of how many equations they have successfully and unsuccessfully solved.

![gameScore](assets/images/Screenshot%20Game%20Score.png)

- ### Equation area
    - When the page loads the JavaScript will create a randomly generated equation. All the numbers used are from 1 to 12 this is to keep the equation simple and allows the division required to solve the equation just to be a simple mental division and not having to test their long division skills.
    - The answer box is focused when a new equation is fun to stop the user having to click into the answer box every time. 
    - The submit button will cause the solution to be shown and will compare the users answer to the correct answer.
    - The hint button will reveal one step in the solution for each time it is clicked stopping at the second to last step.

![equationArea](assets/images/Screenshot%20equation%20area.png)

- ### Equation area solution
    - once the submit button is clicked the solution will be loaded underneath the original equation. 
    - If the user is correct, it will also grade the answer by how many times the user required the hint button.

![equationAreaSolution](assets/images/Screenshot%20equation%20area%20solution.png)

- ### Footer
    - The footer contains a useful hint to help the user solve the equation.

![footer](assets/images/Screenshot%20footer.png)

## Surface
- ### Colours
    - The background colour used for the body is #20433e and the background colour used for the div is #31343A. The colour of the main text is #fff, and the colour for the correct and incorrect text is #59EB35 and #FD7E79 respectively. 

- ### Fonts
    - The fonts used for the body is Pangolin with a backup of Open Sans. The font used for the equation and solution text is Kalam with a backup of Pangolin and Open Sans.

- ### Image
    - The background image was found on [clipart-library.com](http://clipart-library.com/clip-art/math-transparent-background-1.htm).

## Technologies used
- ### HTML5
    - As a structure language.

- ### CSS3
    - As a style language.

- ### JavaScript
    - For interactivity. 

- ### Google fonts
    - As a font resource.

- ### GitHub
    - As a software hosting platform.

- ### Git
    - As a version control tracking system.

- ### Gitpod
    - As a development hosting platform.

## Testing
- ### Functionality and compatibility testing
    - I have used Chrome developer tools throughout the project for testing and solving style and responsiveness problems.
    - I have tested this site across multiple virtual devices. I have also checked the site on iPhone, iPad, and a Samsung phone.

- ### Issues found during site development
    - When testing the website during development I discovered as we need to leave the result once the solution has been submitted it allowed for the user to repeatedly enter the solution to the equation allowing them to generate more correct points. To solve this, I created two functions one that disables the submit button after its been clicked and one to enable the submit button once a new equation has been selected. 

    ![submitButton](assets/images/Screenshot%20disable%20enable%20functions.png)

    - When checking my lighthouse score my SEO was not reaching 100%. On checking it was because my index page didn't have keywords and description to help users find the website. After adding this in the SEO score went to 100%. Please see the before and after screenshots below.

    ![SEO Before](assets/images/Screenshot%20SEO.jpg)

    ![SEO After](assets/images/Screenshot%20SEO%20modified.jpg)

- ### Performance testing
    - Lighthouse report

![Lighthouse](assets/images/Screenshot%20lighthouse.png)

- ### Code Validation
    - I used [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), [Validator w3](https://validator.w3.org/), and [JShint](https://jshint.com/) to test CSS, HTML, and JavaScript respectively.

    - Validator response of CSS

    ![Validator-CSS](assets/images/Screenshot%20CSS%20validator.png)

    - Validator response of HTML

    ![Validator-HTML](assets/images/Screenshot%20HTML%20validator.png)

    - Validator response of JavaScript

    ![Validator-JS](assets/images/Screenshot%20JS%20validator.png)

## Deployment
The site was deployed to GitHub pages. The steps to deploy the site are as follows:
- In the GitHub repository, go to the ‘Settings’ tab.
- They select the ‘Pages’ option in the ‘Code and automation’ section.
- From the source dropdown select ‘Branch: main’ and then select ‘Save’.
- The site is now published at https://harveyburton96.github.io/equation-training/

## Credits
- To complete this project I used Code Institute student template: [gitpod-full-template](https://github.com/Code-Institute-Org/gitpod-full-template)

- Ideas and knowledge
    - [w3schools](https://www.w3schools.com/)
    - Code institute Diploma in Full Stack Software Development (Common Curriculum) course
    - [Marcin-kli/MP1s README.md](https://github.com/marcin-kli/MP1/blob/Milestone-Projects/README.md#new-user-goals)

## Screenshot
Project screenshot

![Project-screenshot](assets/images/Screenshot%20fullwebsite.png)
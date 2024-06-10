# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![1040px] (FAQs-1040px-screenshot.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: https://github.com/marcfranciss/FMC_FAQ-accordion.git
- Live Site URL: https://marcfranciss.github.io/FMC_FAQ-accordion/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanila Javascript

### What I learned

I learned about the technique used in FAQ accordion.
\*An FAQ Accordion is a type of user interface element that presents a list of frequently asked questions (FAQs) in a compact and organized manner. It is a collapsible section that allows users to expand or collapse individual questions and answers, making it easy to access and navigate the content.

To see how you can add code snippets, see below:

```html
  <div class="query-container">
    <div class="query">
      <h2>What is Frontend Mentor, and how will it help me?</h2>
      <img class="expand" src="assets/images/icon-plus.svg" alt="" />
    </div>
    <div class="response">
      <p>
        Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      </p>
    </div>
  </div>
</div>
```

```css
/* Initial style of '.response' */
.response {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease;
}

/* Here, I change the height of '.response' and also the icon's url depending on status (active or not) */
.query-container.active .response {
  max-height: 300px;
}
.query-container.active img {
  transform: rotate(180deg);
  content: url(assets/images/icon-minus.svg);
}
```

```js
const queryR = document.querySelectorAll(".query-container");

queryR.forEach((que) => {
  que.addEventListener("click", () => {
    que.classList.toggle("active");
  });
});
```

### Continued development

Planning to use this technique further on other web development projects.

### Useful resources

\*\*

## Author

- Website - [mackersdev] (www.mackersdev.net)
- Frontend Mentor - [@marcfranciss](https://www.frontendmentor.io/profile/marcfranciss)

## Acknowledgments

Thank you for checking this project! Please don't hesitate to comment on things you find incorrect or need improvements.

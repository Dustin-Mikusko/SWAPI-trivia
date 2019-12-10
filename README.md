# Star Wars API - Gathering data from far, far away...

## Description

SWAPI is a Turing project with various areas of focus: 
* Designing architecture of React application, including class and functional components and passing props
* Utilizing React lifecycle methods
* Using the Star Wars API to fetch data, including deeply nested fetch requests
* Resolving promises and cleaning data
* Defining propTypes for all components receiving props
* Router to navigate App
* Test Driven Development, including testing asynchronous methods

## Installation

To access this repo, simply clone down and run `npm install` to access the necessary packages.  For the best viewing experience, run `npm run start` and copy and paste your local server into the browser.

## User Interface and User Experience
### Landing Page
![Landing page when the user loads the app](https://imgur.com/iOIS8UL.png)

The user must fill out all fields in order to log in, and there will be a red glow for error handling if a user misses a field.  The user has three different rank levels to choose from:
1. What is Star Wars? (novice)
2. Padawan (intermediate)
3. The Force is strong with this one... (expert)

Upon logging in, the user will be redirected to a loading page.

### Movie Page
![View information about the seven different Star Wars movies with the option to view characters for that movie](https://imgur.com/5n4Hpdn.png)

The Movie Page includes a Header Component at the top with the user's information, including their name, skill level, and favorite quote.  The crossed light sabers in the upper right hand corner will log the user out and bring them back to the main login screen.

## Character Page
![characters3](https://user-images.githubusercontent.com/52764657/70578019-cb077100-1b69-11ea-9d2f-0a34a2ddd72e.gif)

When the user clicks on "View Characters" from the specific Movie Component, they will be routed to a specific page for that movie that includes all of the characters for that movie.  There is still a Header component at the top of the page, the scrolling text from the beginning of the specific movie they're viewing, and Character components, each one being a character from that specific movie.

## Future Iterations 
Future iterations of this project will include the following:
* Responsiveness for mobile phones
* Refactor the Loading Component to be dependent on state
* Build Error Component if there is an error fetching the data from the Star Wars Api
* Include movie and character-specific images on each card that's rendered

## Project Members
This project was done over the course of 8 days at Turing School of Software and Design.  Team members are:

[Dustin Mikusko](https://github.com/Dustin-Mikusko)

[Trisha Langlois](https://github.com/trishalanglois)



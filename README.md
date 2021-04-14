# city-explorer-api

**Author**: Aloysious

**Version**: 1.0.0

+ [{ `city-explorer Trello Project Board` }](https://trello.com/b/0jJjZi3c/city-explorer-trello-board)

<!-- increment the patch/fix/version number if you make more commits past your first submission -->

## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture


**Languages :** JavaScript | HTML | CSS | Markdown

**Libraries :** Node | LocationIq

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

04-11-2021 8:13pm **Successfully Deployed from Heroku** · v7 · f357bef5

04-10-2021 09:30pm- **Failed to deploy properly from Heroku** 


04-10-2021 5:00pm - **Repository Created** : https://github.com/AL0YSI0US/city-explorer-api

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. 
-->

## ⏰ T I M E . E S T I M A T E S

## ⚙️ Set up your server repository : Feature One

{ `Back End` }

- [X] Create a new repo called `city-explorer-api` on GitHub, initialized with a README file. Clone it locally, and do all your work on a meaningfully-named feature branch off of `main`.
- [X] Run the command `npm init` to create a new project. Answer the prompts with reasonable answers, or just hit enter to accept the defaults. Review the `package.json` file that it creates for you, and edit it if desired.
- [X] Use `npm install` to add the required dependencies to this project: `express`, `dotenv`, and `cors`.
- [X] Manually add the remaining files identified in the folder tree above. Put appropriate content into `.gitignore` and `.eslintrc.json`.
- [X] Copy the contents of [weather.json](https://codefellows.github.io/code-301-guide-react/curriculum/class-07/lab/starter-code/data/weather.json) and paste it into your (otherwise empty) local `/data/weather.json`.
- [X] Set the contents of .env to set a value for `PORT`. Ensure `.env` is in your `.gitignore` file.
- [X] Populate your `README.md` file with the template provided in the lab. Fill in what you can at this point, and the rest before you submit your finalized assignment.

````sh
Estimate of time needed to complete: 120 minutes

Start time: 1200

Finish time: 100

Actual time needed to complete: 60 minutes
````

````sh
city-explorer-api
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── data
   |   └── weather.json
   ├── package-lock.json
   ├── package.json
   ├── README.md
   └── server.js
````

## ⚙️ Weather : Feature Two

As a user of City Explorer, I want to see weather info for the city I searched, so that I know how to pack for an upcoming trip.

**Given** that a user enters a valid location in the input
**When** the user clicks the "Explore!" button
**Then** some old weather data will be displayed on the page

{ `Back End` }

- [ ] Create a basic Express server. Verify it runs without errors.
- [ ] Create an API endpoint of `/weather` that processes a `GET` request that contains `lat` and `lon` information.
- [ ] Create a constructor function for a `Forecast` object, that has a properties of `date` and `description`.
- [ ] Using each data point from the static data, create an array of `Forecast` objects, one for each day. Do the necessary data munging to ensure the objects you create contain the information as required for correct client rendering. See the sample response.
- [ ] Send the full array back to the client who requested data from the `weather` endpoint.
- [ ] Test your endpoint in the browser, to verify the raw response object is coming through as expected.

{ `Front End` }

- [ ] When a city search successfully returns `lat` and `lon` info, immediately create a new request (lat/lon included) to your server's `/weather` endpoint.
- [ ] Create a new `Weather.js` component to render forecast data to the page.
- [ ] When the server returns the array of forecast data, show the Weather component, populated with the server data.
- [ ] Use appropriate Bootstrap components to nicely display the forecast data.

````sh
Estimate of time needed to complete:

Start time: 

Finish time:

Actual time needed to complete:
````

## ⚙️ Errors : Feature Three

As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

**Given** that the server responds with an error code for any API endpoint
**When** the user clicks the "Explore!" button
**Then** the user will receive an error message on the page and the data will not be rendered

- [ ] Create a function to handle errors from any API call.
- [ ] Send a status of 500 along with an error message to the client.

````sh
Estimate of time needed to complete:

Start time: 

Finish time:

Actual time needed to complete:
````

## ❤️ Credit and Collaborations 👥

Shout out to { `Hexx` } for helping me stand up my lab.

## Resources

+ [NPM JS](https://www.npmjs.com/package/axios)
+ [locationiq](https://locationiq.com/docs#search-forward-geocoding)
+ [locationiq - docs](https://locationiq.com/docs)
+ [Node JS Docs](https://nodejs.org/en/)
+ [NPM JS Docs](https://docs.npmjs.com/)
+ [Express JS Docs](http://expressjs.com/en/4x/api.html)
+ [dotenv Docs](https://www.npmjs.com/package/dotenv)

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

[Reflections ⇒](reflections.md)

---

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/AL0YSI0US/" property="cc:attributionName" rel="cc:attributionURL">AL0YSI0US</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>. <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />

This license lets others distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.

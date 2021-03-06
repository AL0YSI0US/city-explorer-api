# city-explorer-api

**Author**: Aloysious

**Version**: 1.7.15

+ [{ `city-explorer Trello Project Board` }](https://trello.com/b/0jJjZi3c/city-explorer-trello-board)

<!-- increment the patch/fix/version number if you make more commits past your first submission -->

## Overview
![](https://github.com/AL0YSI0US/city-explorer/blob/main/Documentation/web-reponse-cycle-lab-10.PNG?raw=true)
Web request Response Cycle -in collaboration with Kevin H 
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

**Languages :** JavaScript | HTML | CSS | Markdown

**Libraries :** Node

**Tools :** VS Code | GitHub | Trello

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

04-17-2021 7:09pm **Successfully Deployed from Heroku** · v15 · 734010df

04-15-2021 4:55pm **Successfully Deployed from Heroku** · v12 · 4e12091c

04-15-2021  4:48pm **Successfully Deployed from Heroku** · v11 · f357bef5

04-14-2021  1:51am **Successfully Deployed from Heroku** · v10 · 46a143cb

04-13-2021 5:02pm **Successfully Deployed from Heroku** · v9 · 01bac221

04-12-2021 10:58pm **Successfully Deployed from Heroku** · v8 · 37605f06

04-11-2021 8:13pm **Successfully Deployed from Heroku** · v7 · f357bef5

04-10-2021 09:30pm- **Failed to deploy properly from Heroku**

04-10-2021 5:00pm - **Repository Created** : https://github.com/AL0YSI0US/city-explorer-api

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:
01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. 
-->

<h2 align="center">⏰ T I M E . E S T I M A T E S</h2>

## ⚙️ Set up your server repository : Feature One

{ `Back End` }

- [x] Create a new repo called `city-explorer-api` on GitHub, initialized with a README file. Clone it locally, and do all your work on a meaningfully-named feature branch off of `main`.
- [X] Run the command `npm init` to create a new project. Answer the prompts with reasonable answers, or just hit enter to accept the defaults. Review the `package.json` file that it creates for you, and edit it if desired.
- [x] Use `npm install` to add the required dependencies to this project: `express`, `dotenv`, and `cors`.
- [x] Manually add the remaining files identified in the folder tree above. Put appropriate content into `.gitignore` and `.eslintrc.json`.
- [x] Copy the contents of [weather.json](https://codefellows.github.io/code-301-guide-react/curriculum/class-07/lab/starter-code/data/weather.json) and paste it into your (otherwise empty) local `/data/weather.json`.
- [x] Set the contents of .env to set a value for `PORT`. Ensure `.env` is in your `.gitignore` file.
- [x] Populate your `README.md` file with the template provided in the lab. Fill in what you can at this point, and the rest before you submit your finalized assignment.

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

- [x] Create a basic Express server. Verify it runs without errors.
- [x] Create an API endpoint of `/weather` that processes a `GET` request that contains `lat` and `lon` information.
- [x] Create a constructor function for a `Forecast` object, that has a properties of `date` and `description`.
- [x] Using each data point from the static data, create an array of `Forecast` objects, one for each day. Do the necessary data munging to ensure the objects you create contain the information as required for correct client rendering. See the sample response.
- [x] Send the full array back to the client who requested data from the `weather` endpoint.
- [x] Test your endpoint in the browser, to verify the raw response object is coming through as expected.

{ `Front End` }

- [X] When a city search successfully returns `lat` and `lon` info, immediately create a new request (lat/lon included) to your server's `/weather` endpoint.
- [x] Create a new `Weather.js` component to render forecast data to the page.
- [x] When the server returns the array of forecast data, show the Weather component, populated with the server data.
- [x] Use appropriate Bootstrap components to nicely display the forecast data.

````2sh
Estimate of time needed to complete: 120 minutes

Start time: 12:00 

Finish time: 2:02

Actual time needed to complete: 122 minutes
````

## ⚙️ Errors : Feature Three

As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

**Given** that the server responds with an error code for any API endpoint
**When** the user clicks the "Explore!" button
**Then** the user will receive an error message on the page and the data will not be rendered

- [x] Create a function to handle errors from any API call.
- [x] Send a status of 500 along with an error message to the client.
- [x] Then the user will receive an error message on the page and the data will not be rendered properly

````sh
Estimate of time needed to complete: 120 minutes

Start time: 12:00

Finish time: 2:00

Actual time needed to complete: 120 minutes
````

## ⚙️ Movies : Feature Four

As a user of City Explorer, I want to see info about movies related to the city I searched, so that I can learn more about the destination.

 - [x] **Given** that a user enters a valid location in the input
 - [x] **When** the user clicks the "Explore!" button
 - [x] **Then** the top twenty movies set in the area will be displayed in the browser

````sh
Estimate of time needed to complete: 120 minutes

Start time: 3:00

Finish time: 5:00

Actual time needed to complete: 120 minutes
````

<h2 align="center">❤️ Credit and Collaborations 👥</h2>

Shout out to { `Hexx` } for helping me stand up my lab. Making sense of the trello board was a bit of a task initially.

Shout out to { `Daniel` } for helping me brainstorm error handling and for being a stellar coding buddy along this journey!!!

Shout out to { `Michelle` } for helping me debug/ implement my error messages

Shout out to { `TA JOE & TA KRISTIAN` } between the two of them I managed to end up with an error handler I was quite pleased with. 

Shout out to { `TA Chance` } for helped me access the movie database which was a bit different than the weather api imo

Shout out to { `Daniel` } for helping me get my server to properly access the data I have located within my `weather.json` file.

+ I couldn't remember how to use the web browser to verify that my server could in fact send data elsewhere.

{ `Daniel` } talked me through opening my web browser and typing in the following commands:

````javascript
1. http://localhost:3000/

2. Then change the default sever number to reflect the one in use

3. http://localhost:3002/

4. Then add the `weather.json` file path 

5. http://localhost:3002/weather

// Desired resultls looked like this for me:

[{
  "date":"2021-03-23",
  "description":"Heavy rain",
  "lowTemp":18.1,"hiTemp":19.9
},
{
  "date":"2021-03-24",
  "description":"Few clouds",
  "lowTemp":16.1,"hiTemp":26.9
},
{  "date":"2021-03-25",
  "description":"Broken clouds",
  "lowTemp":14.9,"hiTemp":26.5
},
 {  
  "date":"2021-03-26",
  "description":"Broken clouds",
  "lowTemp":14.5,"hiTemp":21.9
}]
````

## Resources

+ [NPM JS](https://www.npmjs.com/package/axios)
+ [locationiq](https://locationiq.com/docs#search-forward-geocoding)
+ [locationIq - docs](https://locationiq.com/docs)
+ [Node JS Docs](https://nodejs.org/en/)
+ [NPM JS Docs](https://docs.npmjs.com/)
+ [Express JS Docs](http://expressjs.com/en/4x/api.html)
+ [dotenv Docs](https://www.npmjs.com/package/dotenv)

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

[Reflections ⇒](reflections.md)

---

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/AL0YSI0US/" property="cc:attributionName" rel="cc:attributionURL">AL0YSI0US</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>. <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />

This license lets others distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.

Code notes and cleanup / / 

```javascript

// CREATE .env on the first line do this: PORT=30002
// in the terminal....do this: npm install dotenv

// most of your actual server definition goes here
// a servers job is to listen t some file path for a particular method
// listening for GET requests at the path
// take in in two arguments: the path and the response
// app.get('/weather', (request, response) => {
//   try {
// this will be where I input the weatherbitIo hyperlink ---------------------------------]
// query parameters in class 08 Demo  ------------------------------------------]
// const dailyForecasts = weatherData.data.map(day => new Forecasts(day));
// when we get the request, send a response that says returns some forecasts
// response has some methods that are very helpful such as teh send method
  
 response.send(dailyForecasts);
} catch (error) {
     handleErrors(error, response);
  }
})

// "data munging" 1.0 weatherbit
 function Forecasts(day) {
   this.date = day.datetime;
   this.description = day.weather.description;
   this.lowTemp = day.low_temp;
   this.hiTemp = day.max_temp;
 }

// TODO
// https://api.weatherbit.io/v2.0/forecast/daily?key=000000000000&days=7&units=I&lat=47.6062&lon=-122.3321
// come back later to ensure that I am requesting the lat and long
// that was skipped early on in lab 7 [cannot be done locally]
// can be imported from 8bit though:
 [english] &lang=en
 [degrees in F] &units=I
 [optional / callback function] &callback=${}
 [populate a week] &days=7 
 [lattitude and longitude] &lat&lon&
```

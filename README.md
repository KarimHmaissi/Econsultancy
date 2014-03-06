#Front End Developer Test

##Questions
####Will this code work in IE8? If no, why?

Node.textContent is not supported 

JSON.parseJson is not supported

####What design patterns where used here?

As far as I can tell Model View Controller. With User acting as the model, View defined by the HTML and render function and userSummary as the controller. 


####The app loads many separate script tags, how could this be optimized?

By minifying and combining all the scripts into one. Then placing that script on a CDN. 

####Point out potential problems in the code
Initial state of the user is not really defined anywhere. For example I was unsure where the initial state of the user should come from. The data api does not provide this data. As it stands I added it to the call to userSummary.

##If I had more time:

1. Work more on combining the initial user object with the data returned from the API.
2. Add AngularJS and jQuery. ng-repeat and jQuery extend as well as AngularJS $http with promises, would make this type of application much simpler, easier to test and easier to maintain.
3. Significantly improve the CSS styling. Add responsive columns, improve padding and margins. 
4. Add functionality to render the date correctly perhaps date.toString(), as well as correctly render the arrays of purchases and subscriptions. 
5. Run the Jasmine tests. I ensured the user object was not added to the global scope but did not have time to verify the extend gotcha. 





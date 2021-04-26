### Instructions

-   Navigate to a directory within your terminal
-   Clone this repo to your directory
    -   Using HTTP; `$ git clone https://github.com/enodi/country-list.git`
-   Navigate to the root directory e.g `$ cd country-list`
-   Run `npm install` to install project dependencies
-   Start the application using: `npm start`
-   Navigate to app in [browser](http://localhost:3000)
-   Enjoy!

### Discussion

I used the following technologies: HTML, CSS, React, Jest, and Enzyme.
I used create-react-app to generate the scaffolding for this app.

#### Build an application that allow users search for countries and display country name, capital, population and currency. Users should also be able to enter an amount in SEK and get the amount converted into local currency for each country.

I used a table component to display country information. The table contains 6 heading: Name, Capital, Population, Currencu Code, Local Currency Equivalent and Flag.

I also used an input field to search for countries and also input an amount in SEK. Users input an amount in SEK and see the equivalent for each country's local currency on the table.

### TEST

-   To run test, navigate to the root directory
    -   Run `npm test`

### What I would have done if given more time

-   Add pagination to the table: This is important as we don't want users scrolling to the end of the page to see all the list of countries displayed.
-   Move api key to `.env` file and gitignore `.env`: API keys are private and shouldn't be exposed. I didn't store the API key in a `.env` file to ensure whoever is testing doesn't run into errors.
-   I would have written more tests: I was able to setup the test environment using jest and enzyme and also tested all components but I would have loved to test more functions.

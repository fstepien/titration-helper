Titration App
=============

Live site available at [titrationhelper.ca](http://titrationhelper.ca)

* HTML/CSS
* MATERIALIZE
* JAVASCRIPT

App for quick plating bath calculation. When working in a analytical laboratory I used an excel spreadsheet to calculate parameters, here I use JavaScript to do the same in a mobile app. :computer:  :hourglass_flowing_sand: :green_book: :heavy_check_mark:

To start this will be a single bath calculator, then an app where users can add their own tests/parameters to local storage and finally create a database of methods/calculations to pull from.  

Steps taken:
1. Create UI using Materialize
2. Add JS Calculations
3. Add Card Delete
4. Add New Card (at this point only a copy of the first card)'
5. Realize the JS functions created do not work on the second card
6. Add event delegation to functions and the card works
7. Change card addition performed through an event listener function to a class call. Class contains a procedures constructor, method to create the card and a method to generate procedure steps as li elements.
8. Used switch in event listener to change formulas.
9. Noticed that if a second card with the same procedure was added all of the steps would go to the first card. Created a counter to vary list id based on procedure name and count

Short Term Goals:
1. ~~Add New card inserting Object parameters~~
2. ~~Fix Check boxes that are using IDs~~
3. Pull calculation from procedures ~~based on card ID~~

Long Term Goals:
1. Add Procedures to firebase
2. Allow user login
3. Create new Procedure form, convert form data to JSON and send to firebase based on user authentication.

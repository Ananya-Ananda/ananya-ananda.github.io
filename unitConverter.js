function convertCupToTbsp(cups) {
    let tbsp = 16 * cups;
    document.getElementById("cupToTb").innerHTML = tbsp; // write to HTML from javascript
}

/*
Conversions:
    - ounces to cups
    - ounces to tablespoons
    - tablespoons to teaspoons
    - ounces to teaspoons
*/

//one tbsp = 3 teaspoons
function convertTbspToTsp(tbsp){
    let tsp = 3 * tbsp;
    document.getElementById("tbToTsp").innerHTML = tsp;
}

//one cup = 48 teaspoons
function convertCupsToTsp(cups){
    let tsp = 48 * cups;
    document.getElementById("cupToTsp").innerHTML = tsp;
}
//ounces to cups - 1 oz = 0.125 cups
function convertOzToCups(oz){
    let cups = 0.125 * oz;
    document.getElementById("ozToCups").innerHTML = cups;
}

//ounces to tbsp - 1 ounc = 2 tbsp
function convertOzToTbsp(oz){
    let tbsp = 2 * oz;
    document.getElementById("ozToTbsp").innerHTML = tbsp;
}

//ounces to tsp - 1 ounce = 6 teaspoons
function convertOzToTsp(oz){
    let tsp = 6 * oz;
    document.getElementById("ozToTsp").innerHTML = tsp;

}


const makeFood = function (food, callback) {
    console.log(`Order for cocking ${food} is received. Starting to cook…`);
    setTimeout(callback, 3000);
   }
   
   const readBook = function () {
    console.log('Reading book "JavaScript for Dummies"');
   }
   
   const eatFood = function (drink) {
    return function() {
      console.log(`Hooray! The food is ready, it's time to eat and drink ${drink}.`);
    }
   }
   
   makeFood('Pizza', eatFood('Coca-Cola'));
   readBook();
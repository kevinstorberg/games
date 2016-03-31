var grid;
var main = function() {

   grid = $('td');
   var numbers = [];
   var i = 0;
   while (i < grid.length) {
      numbers[i] = i;
      numbers[i + 1] = i;
      i = i + 2;
   };

   i = 0
   while (i < numbers.length) {
      j = Math.floor((Math.random()*numbers.length));
      a = numbers[i];
      b = numbers [j];
      numbers[i] = b;
      numbers[j] = a;
      i = i + 1;
   };

   $('td').text(function(i) {
      return numbers[i];
   });

   t = 0
   c = 0
   $('td').click(function() {
      if ( t == 0 && $(this).hasClass('card-two') != true ) {
         $(".card-one").removeClass("card-one");
         $(".card-two").removeClass("card-two");
         $(this).addClass("card-one");
         t = t + 1;

      } else if ( t == 1 && $(this).hasClass('card-one') != true ) {
         $(this).addClass("card-two");
         if ( $('.card-one').text() == $('.card-two').text() ) {
            $('.card-one').addClass('solved');
            $('.card-two').addClass('solved');
            c = c + 1
            if ( c == 32 ) {
               alert("YOU DID IT!!!");
               location.reload();
            };
         };
         t = t - 1;
      };

   });

}
$(document).ready(main);

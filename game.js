
//värvid
var color;
var colorNumber;


$("#kitty-red-btn").on("click", function () {
  color = "kitty-red-bg";
  colorNumber = "1";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#kitty-white-btn").on("click", function () {
  color = "kitty-white-bg";
  colorNumber = "2";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#kitty-black-btn").on("click", function () {
  color = "kitty-black-bg";
  colorNumber = "3";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#heart-red-btn").on("click", function () {
  color = "heart-red-bg";
  colorNumber = "1";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#heart-white-btn").on("click", function () {
  color = "heart-white-bg";
  colorNumber = "2";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#heart-black-btn").on("click", function () {
  color = "heart-black-bg";
  colorNumber = "3";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#watermelon-red-btn").on("click", function () {
  color = "watermelon-red-bg";
  colorNumber = "1";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#watermelon-white-btn").on("click", function () {
  color = "watermelon-white-bg";
  colorNumber = "2";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#watermelon-black-btn").on("click", function () {
  color = "watermelon-black-bg";
  colorNumber = "3";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});
$("#watermelon-pink-btn").on("click", function () {
  color = "watermelon-pink-bg";
  colorNumber = "6";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#watermelon-green-btn").on("click", function () {
  color = "watermelon-green-bg";
  colorNumber = "4";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#watermelon-megagreen-btn").on("click", function () {
  color = "watermelon-megagreen-bg";
  colorNumber = "5";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});


$("#ice-lpink-btn").on("click", function () {
  color = "ice-lpink-bg";
  colorNumber = "1";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#ice-dpink-btn").on("click", function () {
  color = "ice-dpink-bg";
  colorNumber = "2";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#ice-yellow-btn").on("click", function () {
  color = "ice-yellow-bg";
  colorNumber = "3";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#ice-black-btn").on("click", function () {
  color = "ice-black-bg";
  colorNumber = "4";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#ice-white-btn").on("click", function () {
  color = "ice-white-bg";
  colorNumber = "5";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});




// klikkides ruudu peale
$(".cell").on("click", function () {
  // panna colorNumber muutuja 
  $(this).attr("data-color", colorNumber);
  // kui on juba olemas värv mida kasutatakse
  if ($(this).hasClass(color)) {
    // võta maha värv
    $(this).removeClass(color);
    $(this).removeClass("hide-copy");
    // ja kui  seal on teine värv
  } else if (

    $(this).hasClass("kitty-red-bg") ||
    $(this).hasClass("kitty-white-bg") ||
    $(this).hasClass("kitty-black-bg") ||
 
    $(this).hasClass("ice-lpink-bg") ||
    $(this).hasClass("ice-dpink-bg") ||
    $(this).hasClass("ice-yellow-bg") ||
    $(this).hasClass("ice-black-bg") ||
    $(this).hasClass("ice-white-bg") ||


    $(this).hasClass("heart-red-bg") ||
    $(this).hasClass("heart-white-bg") ||
    $(this).hasClass("heart-black-bg") || 


    $(this).hasClass("watermelon-red-bg") ||
    $(this).hasClass("watermelon-white-bg") ||
    $(this).hasClass("watermelon-black-bg") ||
    $(this).hasClass("watermelon-green-bg") ||
    $(this).hasClass("watermelon-megagreen-bg") ||
    $(this).hasClass("watermelon-pink-bg") 
    
  ) {
    // võta maha värv ja pane selected oma

    $(this).removeClass("kitty-red-bg");
    $(this).removeClass("kitty-white-bg");
    $(this).removeClass("kitty-black-bg");

    $(this).removeClass("ice-lpink-bg");
    $(this).removeClass("ice-dpink-bg");
    $(this).removeClass("ice-yellow-bg");
    $(this).removeClass("ice-black-bg");


    $(this).removeClass("heart-red-bg");
    $(this).removeClass("heart-white-bg"); 
    $(this).removeClass("heart-black-bg");



    $(this).removeClass("watermelon-red-bg");
    $(this).removeClass("watermelon-white-bg");
    $(this).removeClass("watermelon-black-bg");
    $(this).removeClass("watermelon-green-bg"); 
    $(this).removeClass("watermelon-megagreen-bg"); 
    $(this).removeClass("watermelon-pink-bg"); 


    $(this).removeClass(color);
    $(this).removeClass("hide-copy");
  } else {
    // pane selected color
    $(this).addClass(color);
    $(this).addClass("hide-copy");
  }
});

// On click of the clear button...
$("#clear").on("click", function () {
  // Clear all cells

  $(".cell").removeClass("kitty-red-bg");
  $(".cell").removeClass("kitty-white-bg");
  $(".cell").removeClass("kitty-black-bg");

  $(".cell").removeClass("ice-lpink-bg");
  $(".cell").removeClass("ice-dpink-bg");
  $(".cell").removeClass("ice-yellow-bg");
  $(".cell").removeClass("ice-black-bg");
  $(".cell").removeClass("ice-white-bg");



  $(".cell").removeClass("heart-red-bg");
  $(".cell").removeClass("heart-white-bg"); 
  $(".cell").removeClass("heart-black-bg");



  $(".cell").removeClass("watermelon-red-bg");
  $(".cell").removeClass("watermelon-white-bg");
  $(".cell").removeClass("watermelon-black-bg");
  $(".cell").removeClass("watermelon-green-bg"); 
  $(".cell").removeClass("watermelon-megagreen-bg"); 
  $(".cell").removeClass("watermelon-pink-bg"); 


  $(".cell").removeClass("hide-copy");
});

// On click of the check button clear all wrong cells
$("#check").on("click", function () {
  var cells = $(".cell");
  // Loop through array of cells
  for (i = 0; i < cells.length; ++i) {
    // If number in cell doesn't match data-color...
    if (cells[i].textContent != cells[i].dataset.color) {
      var test = cells[i];

      $(test).removeClass("kitty-red-bg");
      $(test).removeClass("kitty-white-bg");

      $(test).removeClass("ice-lpink-bg");
      $(test).removeClass("ice-dpink-bg");
      $(test).removeClass("ice-yellow-bg");
      $(test).removeClass("ice-black-bg");
      $(test).removeClass("ice-white-bg");

      $(test).removeClass("hide-copy");

      $(test).removeClass("heart-red-bg");
      $(test).removeClass("heart-white-bg"); 
      $(test).removeClass("heart-black-bg");


      $(test).removeClass("watermelon-red-bg");
      $(test).removeClass("watermelon-white-bg");
      $(test).removeClass("watermelon-black-bg");
      $(test).removeClass("watermelon-green-bg"); 
      $(test).removeClass("watermelon-megagreen-bg"); 
      $(test).removeClass("watermelon-pink-bg"); 
      
    }
  }

});


// aeg sekundites
let timerInSeconds = 3600;

const intervalId = setInterval(() => {
  timerInSeconds--;
  if (timerInSeconds < 1) {
    alert("Aeg on läbi")
    clearInterval(intervalId)
  }
}, 1000);



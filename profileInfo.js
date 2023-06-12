$(document).ready(function () {
     let mode = localStorage.getItem("mode");
     (mode == "0") ? dark() : light();
     inputStored();

     $("#dark").click(function () {
          localStorage.setItem("mode", "0");
          dark();
     });
     $("#light").click(function () {
          localStorage.setItem("mode", "1");
          light();
     });
     $("#save").click(function () {
          $("input").each(function () {
               var inputName = $(this).attr('placeholder');
               var inputValue = $(this).val();
               localStorage.setItem(inputName, inputValue);
          })
     })
})

function inputStored(){
     $("input").each(function () {
          var inputName = $(this).attr('placeholder');
          var storeValue = localStorage.getItem(inputName);
          if (storeValue) {
               $(this).val(storeValue);
          }
     })
}

function dark() {
     $("body").css("backgroundColor", "black");
     $(".darkmode").css("display", "none");
     $(".dark").css("display", "none");
     $(".lightmode").css("display", "block");
     $(".light").css("display", "block");
     $(".position").css("backgroundColor", "black");
     $("input").css("backgroundColor", "black");
     $("input").css("color", "white");
     $("ion-icon").css("color", "white");
}
function light() {
     $("body").css("backgroundColor", "white");
     $(".lightmode").css("display", "none");
     $(".light").css("display", "none");
     $(".darkmode").css("display", "block");
     $(".dark").css("display", "block");
     $(".position").css("backgroundColor", "white");
     $("input").css("backgroundColor", "white");
     $("input").css("color", "black");
     $("ion-icon").css("color", "black");
}
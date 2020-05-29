
function check() {
    let checked = document.querySelector('.messageCheckbox').checked; 
    if(checked === true){
         changing();  
    }
    else{
        notchange();
    }  
}

  
 function changing(){
        $(".top-card").addClass("dark-top");
        $("body").addClass("dark");
        $(".card").addClass("card-dark");
        $("h1").css("color", "hsl(0, 0%, 100%)");
        $(".card-body").addClass(".dark-body");
        $("h2").css("color", "hsl(0, 0%, 100%)");
        $(".last").addClass("last-dark");
       
    } 
    function notchange(){
        $(".top-card").removeClass("dark-top");
        $("body").removeClass("dark");
        $(".card").removeClass("card-dark");
        $("h1").css("color", "hsl(230, 17%, 14%)");
        $(".card-body").removeClass(".dark-body");
        $("h2").css("color", "hsl(228, 12%, 44%)");
        $(".last").removeClass("last-dark");
    }


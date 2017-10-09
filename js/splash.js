
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
    	if (op <= 0.1){
    		clearInterval(timer);

    		element.style.display = 'none';
    	}
    	element.style.opacity = op;
    	element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    	op -= op * 0.1;
    }, 50);
}

(function(){
	var splash = document.getElementById('splash');
	if(typeof(Storage) !== "undefined") {

		console.log("Já mostrou" +sessionStorage.getItem('spalashShown'));

		if( !sessionStorage.getItem('spalashShown') || sessionStorage.getItem('spalashShown') === null ) {  

			
			splash.style.display = 'inline';

                //Display splash
                setTimeout(function(){   

                	fade(splash);
                  // document.getElementById('splash') .style.display = 'none'
                   // window.location = "http://hiteshsahu.com";

                   sessionStorage.setItem('spalashShown', true  );
               }
               , 3000);

            } else {

                     //Display Main Content
                     splash.style.display = 'none'
                     console.log("Already shown");
                 }
             }

             else {
             	document.getElementById("result").innerHTML = "Seu navegador não suporta Web Storage...";
             }
         })();
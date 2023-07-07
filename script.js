let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector("input").value = string;
            return;
        }
        if(e.target.innerHTML == "="){
            string =  eval(string);
            document.querySelector("input").value = string;
            
            return;
        }
        if(e.target.innerHTML == "-2"){
            string = string-2;
            document.querySelector("input").value = string;
            return
        }
        
        if(e.target.innerHTML == "-1"){
            string = string-1;
            document.querySelector("input").value = string;
            return
        }
        else {
         console.log(e.target);
         string = string + e.target.innerHTML;
         document.querySelector("input").value = string; 
        }
    })})

let string = "";
// To store the operations entered by the user
let buttons = document.querySelectorAll('.button');
// . reprents the class
Array.from(buttons).forEach((button)=>{
 button.addEventListener('click', (e)=>{
   if(e.target.innerHTML == '='){ 
        string=eval(string)
        // If the clicked button's inner HTML code is '=',the code inside this block is executed.It evaluates the current'string' using the 'eval()',updates the 'string' variable with the result,&stes the value of an input elemnet to th the result
        document.querySelector('input').value = string;
        // will give o/p aafter clicking the button in the box
    }
    else if(e.target.innerHTML == 'C'){ 
        string= " ";
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'dlt'){
        string=string.slice(0,-1)
        document.querySelector('input').value = string;
    }
    else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    // Here innerHTML is a digit or a operator
    document.querySelector('input').value = string;
        }
    })
       
 })

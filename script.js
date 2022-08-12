let string = ""; //blank string which represents the input class
//we want to apply event listener to all the buttons- hnece creating a variable "buttons"
let buttons = document.querySelectorAll('.button'); // 'querySelectorAll' will select all the classes with button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        //evaluating the "=" button for calculation
        if (e.target.innerHTML == '=') { //i.e. if clicked of the "=" button then run the below code
            string = eval(string); //
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') { //if click on "C" button
            string = "" //then make the input box blank i.e. clear the input box
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML; //i.e.merging the input box "string with the click event
            document.querySelector('input').value = string;
        }
    })
}) 

// anonymous function
(function() {
    "use strict";

    //let current_val = 0

    // gets set to true after the user presses a mathematical operation
    let operation_used = false
    let decimal_used = false
    let first_number = ''
    let second_number = ''
    let operation = ''
    let new_number_state = true

    //TODO: make dst a global variable

    function evaluate(){
        let dst = document.getElementById('value')
        console.log("evaluating")
        let num_one = parseFloat(first_number)
        let num_two = parseFloat(second_number)
        operation_used = false
        decimal_used = false
        new_number_state = true

        if (operation === "x"){
            let result = num_one * num_two;
            dst.innerText = result;
            first_number = result;
            second_number = '';
        }

        else if (operation === "/"){
            let result = num_one / num_two;
            dst.innerText = result;
            first_number = result;
            second_number = '';

        }
        else if (operation === "add"){
            let result = num_one + num_two;
            dst.innerText = result;
            first_number = result;
            second_number = '';

        }
        else if (operation === "-"){
            let result = num_one - num_two;
            dst.innerText = result;
            first_number = result;
            second_number = ''
        }



    }

    function clear_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = '';

        operation_used = false;
        decimal_used = false;
        first_number = ''
        second_number = ''

    }

    function decimal_clicked(){
        let dst = document.getElementById('value')

        if (!decimal_used) {
            decimal_used = true
            dst.innerText = dst.innerText + '.';

            if (operation_used){
                second_number = second_number + '.'
            }
            else {
                first_number = first_number + '.'
            }
        }
    }

    function plus_equal_clicked(){
        let dst = document.getElementById('value')
        console.log(operation_used)

        if (!operation_used) {
            operation_used = true
            decimal_used = false
            dst.innerText = dst.innerText + '+'
            operation = 'add'
            new_number_state = false
        }
        else if (second_number) {
            evaluate();
        }

    }


    function num_clicked(btn_id){
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + btn_id;

        if (new_number_state){
            dst.innerText = btn_id;

            operation_used = false;
            decimal_used = false;
            new_number_state = false;
            first_number = String(btn_id);
            second_number = '';
        }

        else if (operation_used){
            second_number = second_number + btn_id
        }
        else {
            first_number = first_number + btn_id
        }
    }

    function operation_clicked(operation_type){
        let dst = document.getElementById('value')
        if (!operation_used){
            operation_used = true
            decimal_used = false
            dst.innerText = dst.innerText + operation_type
            operation = operation_type
            new_number_state = false
            
        }
    }

    function setup_buttons () {

        let num_btns = document.getElementsByClassName('num-btn');
        num_btns = Array.from(num_btns);

        num_btns.forEach(element => {
            element.addEventListener('click', function() {num_clicked(element.id); }, false);
        });

        let clear_btn = document.getElementById('clear');
        clear_btn.addEventListener('click', clear_clicked, false)

        let decimal_btn = document.getElementById('decimal');
        decimal_btn.addEventListener('click', decimal_clicked, false)

        let plus_equal_btn = document.getElementById('plus-equal');
        plus_equal_btn.addEventListener('click', plus_equal_clicked, false)

        let operation_btns = document.getElementsByClassName('operation');
        operation_btns = Array.from(operation_btns);

        operation_btns.forEach(element => {
            element.addEventListener('click', function() {operation_clicked(element.id)})

        });

      }
    
      // Delay the setup code until page is fully loaded.
      window.addEventListener('load', setup_buttons, false);

})();
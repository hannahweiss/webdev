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

    //TODO: make dst a global variable

    function evaluate(){
        let dst = document.getElementById('value')
        console.log("evaluating")
        let num_one = parseFloat(first_number)
        let num_two = parseFloat(second_number)
        operation_used = false
        decimal_used = false

        if (operation === "times"){
            let result = num_one * num_two;
            dst.innerText = result;
            first_number = result;
            second_number = '';
        }

        else if (operation === "divide"){
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
        else if (operation === "minus"){
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
        }
        else {
            evaluate();
        }

    }

    function divide_clicked(){
        let dst = document.getElementById('value')
        if (!operation_used) {
            operation_used = true
            decimal_used = false
            dst.innerText = dst.innerText + '÷'
            operation = 'divide'
        }
    }

    function times_clicked(){
        let dst = document.getElementById('value')
        if (!operation_used){
            operation_used = true
            decimal_used = false
            dst.innerText = dst.innerText + 'x'
            operation = 'times'
            
        }
    }

    function minus_clicked(){
        let dst = document.getElementById('value')
        if (!operation_used){
            operation_used = true
            decimal_used = false
            dst.innerText = dst.innerText + '-'
            operation = 'minus'
            
        }

    }

    function num_clicked(btn_id){
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + btn_id;

        if (operation_used){
            second_number = second_number + btn_id
        }
        else {
            first_number = first_number + btn_id
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

        let divide_btn = document.getElementById('divide');
        divide_btn.addEventListener('click', divide_clicked, false)

        let times_btn = document.getElementById('times');
        times_btn.addEventListener('click', times_clicked, false)

        let minus_btn = document.getElementById('minus');
        minus_btn.addEventListener('click', minus_clicked, false)

      }
    
      // Delay the setup code until page is fully loaded.
      window.addEventListener('load', setup_buttons, false);

})();
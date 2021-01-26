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

    function one_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 1;

        if (operation_used){
            second_number = second_number + '1'
        }
        else {
            first_number = first_number + '1'
        }
        
    }

    function two_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 2;

        if (operation_used){
            second_number = second_number + '2'
        }
        else {
            first_number = first_number + '2'
        }
    }

    function three_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 3;

        if (operation_used){
            second_number = second_number + '3'
        }
        else {
            first_number = first_number + '3'
        }
    }

    function four_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 4;

        if (operation_used){
            second_number = second_number + '4'
        }
        else {
            first_number = first_number + '4'
        }
    }

    function five_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 5;

        if (operation_used){
            second_number = second_number + '5'
        }
        else {
            first_number = first_number + '5'
        }
    }

    function six_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 6;

        if (operation_used){
            second_number = second_number + '6'
        }
        else {
            first_number = first_number + '6'
        }
    }

    function seven_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 7;

        if (operation_used){
            second_number = second_number + '7'
        }
        else {
            first_number = first_number + '7'
        }
    }

    function eight_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 8;

        if (operation_used){
            second_number = second_number + '8'
        }
        else {
            first_number = first_number + '8'
        }
    }

    function nine_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 9;

        if (operation_used){
            second_number = second_number + '9'
        }
        else {
            first_number = first_number + '9'
        }
    }

    function zero_clicked() {
        let dst = document.getElementById('value');
        dst.innerText = dst.innerText + 0;

        if (operation_used){
            second_number = second_number + '0'
        }
        else {
            first_number = first_number + '0'
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

    function setup_buttons () {
        let one_btn = document.getElementById('1');
        one_btn.addEventListener('click', one_clicked, false);

        let two_btn = document.getElementById('2');
        two_btn.addEventListener('click', two_clicked, false)

        let three_btn = document.getElementById('3');
        three_btn.addEventListener('click', three_clicked, false)

        let four_btn = document.getElementById('4');
        four_btn.addEventListener('click', four_clicked, false)

        let five_btn = document.getElementById('5');
        five_btn.addEventListener('click', five_clicked, false)

        let six_btn = document.getElementById('6');
        six_btn.addEventListener('click', six_clicked, false)

        let seven_btn = document.getElementById('7');
        seven_btn.addEventListener('click', seven_clicked, false)

        let eight_btn = document.getElementById('8');
        eight_btn.addEventListener('click', eight_clicked, false)

        let nine_btn = document.getElementById('9');
        nine_btn.addEventListener('click', nine_clicked, false)

        let zero_btn = document.getElementById('0');
        zero_btn.addEventListener('click', zero_clicked, false)

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
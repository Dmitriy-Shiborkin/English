'use strict';

let min;

let max;

let key;

let key2;

let key3;

let decimal_number;

let arr = [];

let arrPlayers = [];

let array;

player0.style.display = 'none';
player1.style.display = 'none';
player2.style.display = 'none';
player3.style.display = 'none';
player4.style.display = 'none';
player5.style.display = 'none';
player6.style.display = 'none';
player7.style.display = 'none';
player8.style.display = 'none';
player9.style.display = 'none';
player10.style.display = 'none';
player11.style.display = 'none';

btn_show_the_number_show.addEventListener('click', function() {

    btn_show_the_number_show.style.display = 'none';
    btn_show_the_number_hide.style.display = 'block';

    word_show_the_number.style.display = 'block';

});

btn_show_the_number_hide.addEventListener('click', function() {

    btn_show_the_number_show.style.display = 'block';
    btn_show_the_number_hide.style.display = 'none';

    word_show_the_number.style.display = 'none';

});

function num_0_99(a, b) {
    let c = String(a);
    let d = String(b);
    let num;

    if (Number(c + d) < 10) {
        num = d;
    } else {
        num = c + d;
    }

    let value;
    
    if (numbers_switch.value == 'decimal') {

        value = 0;

    } else {

        value = 1;

    }

    for (let i = value; i < 100; i++) {

        if (i == num) {
            
            arrPlayers.push('sounds/numbers/quantitative/' + i + '.mp3');

            break;

        }

    }

}

function num_100_900(a) {

    for (let i = 1; i < 10; i++) {

        if (i == a) {

            arrPlayers.push('sounds/numbers/quantitative/' + i + '00.mp3');

            break;
            
        }

    }

}

function thousand() {

    arrPlayers.push('sounds/numbers/quantitative/thousand.mp3');

    num_100_900(array[array.length - 3]);

    num_0_99(array[array.length - 2], array[array.length - 1]);

}

function num_0_99_th(a, b) {
    let c = String(a);
    let d = String(b);
    let num;

    if (Number(c + d) < 10) {
        num = d;
    } else {
        num = c + d;
    }

    for (let i = 1; i < 100; i++) {

        if (i == num) {

            if (array.length === 1 || array.length === 2) {

                arrPlayers.push('sounds/numbers/oridinal/the oridinal/' + i + '.mp3');
    
            } else {
    
                arrPlayers.push('sounds/numbers/oridinal/' + i + '.mp3');
    
            }

            break;

        }

    }

}

function num_100_900_th(a) {

    for (let i = 1; i < 10; i++) {

        if (i == a) {

            if (array.length === 4) {

                if (array[array.length - 1] === 0 && array[array.length - 2] === 0) {

                    arrPlayers.push('sounds/numbers/oridinal/' + i + '00.mp3');
        
                } else {
        
                    arrPlayers.push('sounds/numbers/quantitative/' + i + '00.mp3');

        
                }

            } else {

                if (array[array.length - 1] === 0 && array[array.length - 2] === 0) {

                    arrPlayers.push('sounds/numbers/oridinal/the oridinal/' + i + '00.mp3');
        
                } else {
        
                    arrPlayers.push('sounds/numbers/oridinal/the quantitative/' + i + '00.mp3');

                }

            }

            break;

        }

    }

}

function num_1000_9000_th(a) {

    for (let i = 1; i < 10; i++) {

        if (i == a) {

            if (array[array.length - 1] === 0 && array[array.length - 2] === 0 && array[array.length - 3] === 0) {

                arrPlayers.push('sounds/numbers/oridinal/the oridinal/' + i + '000.mp3');
    
            } else {
    
                arrPlayers.push('sounds/numbers/oridinal/the quantitative/' + i + '000.mp3');
    
            }

            break;

        }

    }

}

function million() {

    arrPlayers.push('sounds/numbers/quantitative/million.mp3');

    if (array[array.length - 6] === 0 ) {

        if (array[array.length - 5] != 0 || array[array.length - 4] != 0) {

            num_0_99(array[array.length - 5], array[array.length - 4]);

            arrPlayers.push('sounds/numbers/quantitative/thousand.mp3');

        } 

    } else {

        num_100_900(array[array.length - 6]);

        if (array[array.length - 5] != 0 || array[array.length - 4] != 0) {

            num_0_99(array[array.length - 5], array[array.length - 4]);

        } 

        arrPlayers.push('sounds/numbers/quantitative/thousand.mp3');

    }

    num_100_900(array[array.length - 3]);

    num_0_99(array[array.length - 2], array[array.length - 1]);

}

function word_show_the_number_func() {

    key += '';

    if (array.length === 1 || array.length === 2 || array.length === 3) {

        word_show_the_number.innerHTML = key;

    } else if (array.length === 4) {

        word_show_the_number.innerHTML = key.slice(0, 1) + ' ' + key.slice(1, 4);

    } else if (array.length === 5) {

        word_show_the_number.innerHTML = key.slice(0, 2) + ' ' + key.slice(2, 5);

    } else if (array.length === 6) {

        word_show_the_number.innerHTML = key.slice(0, 3) + ' ' + key.slice(3, 6);

    } else if (array.length === 7) {

        word_show_the_number.innerHTML = key.slice(0, 1) + ' ' + key.slice(1, 4) + ' ' + key.slice(4, 7);

    } else if (array.length === 8) {

        word_show_the_number.innerHTML = key.slice(0, 2) + ' ' + key.slice(2, 5) + ' ' + key.slice(5, 8);

    } else if (array.length === 9) {

        word_show_the_number.innerHTML = key.slice(0, 3) + ' ' + key.slice(3, 6) + ' ' + key.slice(6, 9);

    } else if (array.length === 10) {

        word_show_the_number.innerHTML = key.slice(0, 1) + '.' + key.slice(1, 4) + ' ' + key.slice(4, 7) + ' ' + key.slice(7, 10);

    } else if (array.length === 11) {

        word_show_the_number.innerHTML = key.slice(0, 2) + ' ' + key.slice(2, 5) + ' ' + key.slice(5, 8) + ' ' + key.slice(8, 11);

    } else if (array.length === 12) {

        word_show_the_number.innerHTML = key.slice(0, 3) + ' ' + key.slice(3, 6) + ' ' + key.slice(6, 9) + ' ' + key.slice(9, 12);

    }

}

btn_repeat_voice.addEventListener('click', function() {

    for (let i = 0; i < arrPlayers.length; i++) {

        document.getElementById('player' + i).src = arrPlayers[i];

    }

    let audio = document.getElementsByTagName('audio');

    audio[0].play();
    
    for (let i = 0; i < audio.length; i++) {

        audio[i].addEventListener('ended', function() {

            audio[i + 1].play();

        });

    }  

});

function voice() {

    for (let i = 0; i < arrPlayers.length; i++) {

        document.getElementById('player' + i).src = arrPlayers[i];

    }

    let audio = document.getElementsByTagName('audio');

    if (voice_switch.value === 'with_voice') {

        audio[0].play();

    } 
    
    for (let i = 0; i < audio.length; i++) {

        audio[i].addEventListener('ended', function() {

            audio[i + 1].play();

        });

    }

}

btn_farther_number_1.addEventListener('click', function() {

    if (numbers_switch.value == 'quantitative') {

        select_wrapper_numbers.style.marginTop = '0';

        word_click_on_start_3.style.marginTop = '140px';

        max_value.innerHTML = 'до 1 000 000 000 000';

    } else if (numbers_switch.value == 'ordinals') {

        select_wrapper_numbers.style.marginTop = '0';

        word_click_on_start_3.style.marginTop = '140px';

        max_value.innerHTML = 'до 10 000';

    } else if (numbers_switch.value == 'decimal') {

        word_select_a_list.style.marginBottom = '40px'

        word_click_on_start_3.style.marginTop = '90px';

        min_value.innerHTML = '';

        select_1.style.display = 'none';

        max_value.innerHTML = 'количество знаков после . до 5';

    } else if (numbers_switch.value == 'fractional') {

        word_select_a_list.style.marginBottom = '40px';

        word_click_on_start_3.style.marginTop = '90px';

        min_value.innerHTML = '';

        select_1.style.display = 'none';

        max_value.innerHTML = 'количество знаков знаменателя от 2 до 10';

    }

    word_select_a_list.style.display = 'block';
    word_click_on_start_2.style.display = 'none';
    word_click_on_start_3.style.display = 'block';

    select_wrapper_numbers.style.display = 'block';

    word_section_numbers_1.style.display = 'none';
    word_section_numbers_2.style.display = 'block';

    btn_farther_number_1.style.display = 'none';
    btn_farther_number_2.style.display = 'block';

});

btn_farther_number_2.addEventListener('click', function() {

    if (numbers_switch.value == 'quantitative') {

        quantitative_func();

    } else if (numbers_switch.value == 'ordinals') {

        ordinals_func();

    } else if (numbers_switch.value == 'decimal') {

        decimal_func();

    } else if (numbers_switch.value == 'fractional') {

        fractional_func();

    }

    btn_show_the_number_show.style.display = 'block';

    word_select_a_list.style.display = 'none';
    word_click_on_start_3.style.display = 'none';
    select_wrapper_numbers.style.display = 'none';

    btn_repeat_voice.style.display = 'block';
    btn_farther_number_2.style.display = 'none';
    btn_farther_number_3.style.display = 'block';

});

btn_farther_number_3.addEventListener('click', function() {

    btn_show_the_number_show.style.display = 'block';

    arrPlayers = [];

    player0.src = '';
    player1.src = '';
    player2.src = '';
    player3.src = '';
    player4.src = '';
    player5.src = '';
    player6.src = '';
    player7.src = '';
    player8.src = '';

    if (numbers_switch.value == 'quantitative') {

        quantitative_func();

    } else if (numbers_switch.value == 'ordinals') {

        ordinals_func();

    } else if (numbers_switch.value == 'decimal') {

        decimal_func();

    } else if (numbers_switch.value == 'fractional') {

        fractional_func();

    }

    voice();

});

function quantitative_func() {

    min = Number(select_1.value);

    max = Number(select_2.value);

    let maxNumRundom = max.toString().length + 2;
 
    // let length = Object.keys(obj).length;
        
    // if (length < max - min + 1) {

        do {
            
            key = Number( String( Math.random() ).slice(2, maxNumRundom) );
            
        } while (key in arr || key < min || key > max - 1);

        arr[key] = key;

        array = (""+key).split("").map(Number)

        if (array.length === 1) {

            num_0_99(0, array[0]);

        } else if (array.length === 2) {

            num_0_99(array[0], array[1]);

        } else if (array.length === 3) {

            num_100_900(array[0]);

            num_0_99(array[1], array[2]);

        } else if (array.length === 4) {

            num_0_99(0, array[0]);

            thousand();

        } else if (array.length === 5) {

            num_0_99(array[0], array[1]);

            thousand();

        }  else if (array.length === 6) {

            num_100_900(array[0]);

            if (array[1] != 0 || array[2] != 0) {

                num_0_99(array[1], array[2]);

            } 

            thousand();

        } else if (array.length === 7) {

            num_0_99(0, array[0]);

            million();

        } else if (array.length === 8) {

            num_0_99(array[0], array[1]);

            million();

        } else if (array.length === 9) {

            num_100_900(array[0]);

            if (array[1] != 0 || array[2] != 0) {

                num_0_99(array[1], array[2]);
    
            } 

            million();

        } else if (array.length === 10) {

            num_0_99(0, array[0]);

            arrPlayers.push('sounds/numbers/quantitative/billion.mp3');

            num_100_900(array[1]);

            if (array[2] != 0 || array[3] != 0) {

                num_0_99(array[2], array[3]);
    
            } 

            million();

        } else if (array.length === 11) {

            num_0_99(array[0], array[1]);

            arrPlayers.push('sounds/numbers/quantitative/billion.mp3');

            num_100_900(array[2]);

            if (array[3] != 0 || array[4] != 0) {

                num_0_99(array[3], array[4]);
    
            } 

            million();

        } else if (array.length === 12) {

            num_100_900(array[0]);

            if (array[1] != 0 || array[2] != 0) {

                num_0_99(array[1], array[2]);

            } 

            arrPlayers.push('sounds/numbers/quantitative/billion.mp3');

            num_100_900(array[3]);
        
            if (array[4] != 0 || array[5] != 0) {

                num_0_99(array[4], array[5]);
    
            } 

            million();

        } 

    // }

    word_show_the_number_func();

    voice();

}

function ordinals_func() {

    min = Number(select_1.value);

    max = Number(select_2.value);

    let maxNumRundom = max.toString().length + 2;
 
    // let length = Object.keys(obj).length;
        
    // if (length < max - min + 1) {

        do {
            
            key = Number( String( Math.random() ).slice(2, maxNumRundom) );
            
        } while (key in arr || key < min || key > max - 1);

        arr[key] = key;

        array = (""+key).split("").map(Number)

        if (array.length === 1) {

            num_0_99_th(0, array[0]);

        } else if (array.length === 2) {

            num_0_99_th(array[0], array[1]);

        } else if (array.length === 3) {

            num_100_900_th(array[0]);

            if (array[1] != 0 || array[2] != 0) {

                num_0_99_th(array[1], array[2]);

            } 

        } else if (array.length === 4) {

            num_1000_9000_th(array[0]);

            num_100_900_th(array[1]);

            num_0_99_th(array[2], array[3]);
            
        } 

    // }

    word_show_the_number_func();

    voice();

}

function decimal_func() {

    max = Number(select_2.value);
 
    // let length = Object.keys(obj).length;
        
    // if (length < max - min + 1) {

        do {
            
            key = Number( String( Math.random() ).slice(2, 4) );

            key2 = String( Math.random() ).slice(2, max + 2);

            decimal_number = key + '.' + key2;
            
        } while (decimal_number in arr);

        arr[decimal_number] = decimal_number;

        array = decimal_number.split('');

        let value = Number(decimal_number);

        word_show_the_number.innerHTML = value;

        if (array[2] != '.') {

            num_0_99(0, array[0]);

        } else {

            num_0_99(array[0], array[1]);

        } 

        function after_the_point() {

            arrPlayers.push('sounds/numbers/decimal/point.mp3');

            for (let i = 0; i < arr_key_2.length; i++) {

                arrPlayers.push('sounds/numbers/decimal/' + arr_key_2[i] + '.mp3');        
                        
            }

        }

        let arr_key_2 = key2.split('');

        if (arr_key_2.length === 1 && arr_key_2[0] == 0 ||
            arr_key_2.length === 2 && arr_key_2[1] == 0 && arr_key_2[0] == 0 ||
            arr_key_2.length === 3 && arr_key_2[2] == 0 && arr_key_2[1] == 0 && arr_key_2[0] == 0 ||
            arr_key_2.length === 4 && arr_key_2[3] == 0 && arr_key_2[2] == 0 && arr_key_2[1] == 0 && arr_key_2[0] == 0 ||
            arr_key_2.length === 5 && arr_key_2[4] == 0 && arr_key_2[3] == 0 && arr_key_2[2] == 0 && arr_key_2[1] == 0 && arr_key_2[0] == 0) {
                 


        } else if (arr_key_2.length === 2 && arr_key_2[1] == 0 ||
                   arr_key_2.length === 3 && arr_key_2[2] == 0 ||
                   arr_key_2.length === 4 && arr_key_2[3] == 0 ||
                   arr_key_2.length === 5 && arr_key_2[4] == 0) {

            arr_key_2.pop();

            after_the_point();

        } else if (arr_key_2.length === 3 && arr_key_2[2] == 0 && arr_key_2[1] == 0 ||
                   arr_key_2.length === 4 && arr_key_2[3] == 0 && arr_key_2[2] == 0 ||
                   arr_key_2.length === 5 && arr_key_2[4] == 0 && arr_key_2[3] == 0) {

            arr_key_2.pop();
            arr_key_2.pop();

            after_the_point();

        } else if (arr_key_2.length === 4 && arr_key_2[3] == 0 && arr_key_2[2] == 0 && arr_key_2[1] == 0 ||
                   arr_key_2.length === 5 && arr_key_2[4] == 0 && arr_key_2[3] == 0 && arr_key_2[2] == 0) {

            arr_key_2.pop();
            arr_key_2.pop();
            arr_key_2.pop();

            after_the_point();

        } else if (arr_key_2.length === 5 && arr_key_2[4] == 0 && arr_key_2[3] == 0 && arr_key_2[2] == 0 && arr_key_2[1] == 0) {

            arr_key_2.pop();
            arr_key_2.pop();
            arr_key_2.pop();
            arr_key_2.pop();

            after_the_point();

        } else {

            after_the_point();

        }

    voice();

}

function fractional_func() {

    max = Number(select_2.value);
 
    // let length = Object.keys(obj).length;
        
    // if (length < max - min + 1) {

        do {
                    
            key = Number( String( Math.random() ).slice(2, 3) );

            key2 = Number( String( Math.random() ).slice(2, 4) );

            key3 = Number( String( Math.random() ).slice(2, 4) );

            decimal_number = key + '.' + key2 + '.' + key3;
            
        } while (decimal_number in arr || key2 < 1 || key2 >= key3 || key2 > max || key3 < 2 || key3 > max);

        arr[decimal_number] = decimal_number;

        array = decimal_number.split('.');
        console.log(array);

        if (key != 0) {
                    
            arrPlayers.push('sounds/numbers/quantitative/' + key + '.mp3');
        
            arrPlayers.push('sounds/numbers/fractional/and.mp3');

            word_show_the_number.innerHTML = key + ' & ' + key2 + ' / ' + key3;

        } else {

            word_show_the_number.innerHTML = key2 + ' / ' + key3;

        }
     
        arrPlayers.push('sounds/numbers/fractional/' + key2 + key3 + '.mp3');

    // } 

    voice();

}


















































































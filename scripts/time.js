'use strict';

let hour;

let minutes;

let am_pm;

player0.style.display = 'none';
player1.style.display = 'none';
player2.style.display = 'none';
player3.style.display = 'none';
player4.style.display = 'none';
player5.style.display = 'none';
player6.style.display = 'none';
player7.style.display = 'none';
player8.style.display = 'none';

//============================================================================================================================

function beginning() {

    do {
            
        hour = Number( String( Math.random() ).slice(2, 4) );
        
    } while (hour < 0 || hour > 12);

    do {
        
        minutes = Number( String( Math.random() ).slice(2, 4) );
        
    } while (minutes < 0 || minutes > 59);

    document.getElementById('player0').src = 'sounds/time/It\'s.mp3';

}

function end() {

    if (minutes >= 0 && minutes <= 9) {

        minutes = '0' + minutes;

    } 

    if (hour == 0 ) {

        word_show_the_number.innerHTML = hour + ':' + minutes + ' am';

    } else if (hour == 12) {

        word_show_the_number.innerHTML = hour + ':' + minutes + ' pm';

    } else {

        if (am_pm == 1) {

            word_show_the_number.innerHTML = hour + ':' + minutes + ' am';

        } else {

            word_show_the_number.innerHTML = hour + ':' + minutes + ' pm';

        }

    }

}

//============================================================================================================================

function voice() {

    let audio = document.getElementsByTagName("audio");

    if (voice_switch.value === 'with_voice') {

        audio[0].play();

    } 

    for (let i = 0; i < audio.length; i++) {

        audio[i].addEventListener('ended', function() {

            audio[i + 1].play();

        });

    }

}

//============================================================================================================================

function general() {

    player0.src = '';
    player1.src = '';
    player2.src = '';
    player3.src = '';
    player4.src = '';
    player5.src = '';
    player6.src = '';
    player7.src = '';
    player8.src = '';

    // let length = Object.keys(obj).length;
        
    // if (length < max - min + 1) {

    if (time_switch.value == 'digital') {

        do {
            
            hour = Number( String( Math.random() ).slice(2, 4) );
            
        } while (hour < 0 || hour > 23);

        do {
            
            minutes = Number( String( Math.random() ).slice(2, 4) );
            
        } while (minutes < 0 || minutes > 59);    
 
        document.getElementById('player0').src = 'sounds/time/figures/' + hour + '.mp3';

        document.getElementById('player1').src = 'sounds/time/figures/' + minutes + '.mp3';

        if (minutes >= 0 && minutes <= 9) {

            minutes = '0' + minutes;
    
        } 

        if (hour >= 0 && hour <= 9) {

            hour = '0' + hour;
    
        } 

        word_show_the_number.innerHTML = hour + ':' + minutes;

    } else if (time_switch.value == 'past to am pm') {

        beginning();

        if (minutes >= 1 && minutes <= 14 || minutes >= 16 && minutes <= 29) {

            document.getElementById('player1').src = 'sounds/time/figures/' + minutes + '.mp3';

            document.getElementById('player2').src = 'sounds/time/past.mp3';

            if (hour == 0) {

                document.getElementById('player3').src = 'sounds/time/figures/12.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + hour + '.mp3';

            }

        } else if (minutes >= 31 && minutes <= 44 || minutes >= 46 && minutes <= 59) {

            document.getElementById('player1').src = 'sounds/time/figures/' + (60 - minutes)  + '.mp3';

            document.getElementById('player2').src = 'sounds/time/to.mp3';

            if (hour == 0 || hour == 12) {

                document.getElementById('player3').src = 'sounds/time/figures/1.mp3';

            } else {
    
                document.getElementById('player3').src = 'sounds/time/figures/' + (hour + 1) + '.mp3';

            }

        } else if (minutes == 0) {

            document.getElementById('player1').src = 'sounds/time/figures/' + hour + '.mp3';

        } else if (minutes == 15) {

            document.getElementById('player1').src = 'sounds/time/quarer.mp3';

            document.getElementById('player2').src = 'sounds/time/past.mp3';

            if (hour == 0) {

                document.getElementById('player3').src = 'sounds/time/figures/12.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + hour + '.mp3';

            }
        
        } else if (minutes == 30) {

            document.getElementById('player1').src = 'sounds/time/half.mp3';

            document.getElementById('player2').src = 'sounds/time/past.mp3';

            if (hour == 0) {
    
                document.getElementById('player3').src = 'sounds/time/figures/12.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + hour + '.mp3';

            }

        } else if (minutes == 45) {

            document.getElementById('player1').src = 'sounds/time/quarer.mp3';

            document.getElementById('player2').src = 'sounds/time/to.mp3';

            if (hour == 0 || hour == 12) {

                document.getElementById('player3').src = 'sounds/time/figures/1.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + (hour + 1) + '.mp3';
        
            }

        }

        do {
            
            am_pm = Number( String( Math.random() ).slice(2, 3) );
            
        } while (am_pm < 1 || am_pm > 2);

        if (minutes != 0) {

            if (hour == 0) {

                document.getElementById('player4').src = 'sounds/time/am.mp3';
                
            } else if (hour == 11 && minutes >= 31 && minutes <= 59) {

                if (am_pm == 1) {

                    document.getElementById('player4').src = 'sounds/time/pm.mp3';

                } else {

                    document.getElementById('player4').src = 'sounds/time/am.mp3';

                }

            } else if (hour == 12) {

                document.getElementById('player4').src = 'sounds/time/pm.mp3';

            } else {

                if (am_pm == 1 ) {

                    document.getElementById('player4').src = 'sounds/time/am.mp3';
        
                } else {
        
                    document.getElementById('player4').src = 'sounds/time/pm.mp3';
        
                }

            }

        } else {

            if (am_pm == 1 ) {

                document.getElementById('player2').src = 'sounds/time/am.mp3';
    
            } else {
    
                document.getElementById('player2').src = 'sounds/time/pm.mp3';


            }
            
        }


        // document.getElementById('player2').src = 'sounds/time/minutes.mp3';

        end();

    } else if (time_switch.value == 'after till am pm') {

        beginning();

        if (minutes >= 1 && minutes <= 14 || minutes >= 16 && minutes <= 29) {

            document.getElementById('player1').src = 'sounds/time/figures/' + minutes + '.mp3';

            document.getElementById('player2').src = 'sounds/time/after.mp3';

            if (hour == 0) {

                document.getElementById('player3').src = 'sounds/time/figures/12.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + hour + '.mp3';

            }

        } else if (minutes >= 31 && minutes <= 44 || minutes >= 46 && minutes <= 59) {

            document.getElementById('player1').src = 'sounds/time/figures/' + (60 - minutes)  + '.mp3';

            document.getElementById('player2').src = 'sounds/time/till.mp3';

            if (hour == 0 || hour == 12) {

                document.getElementById('player3').src = 'sounds/time/figures/1.mp3';

            } else {
    
                document.getElementById('player3').src = 'sounds/time/figures/' + (hour + 1) + '.mp3';

            }

        } else if (minutes == 0) {

            document.getElementById('player1').src = 'sounds/time/figures/' + hour + '.mp3';

        } else if (minutes == 15) {

            document.getElementById('player1').src = 'sounds/time/quarer.mp3';

            document.getElementById('player2').src = 'sounds/time/after.mp3';

            if (hour == 0 || hour == 12) {

                document.getElementById('player3').src = 'sounds/time/figures/12.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + hour + '.mp3';

            }
        
        } else if (minutes == 30) {

            document.getElementById('player1').src = 'sounds/time/half.mp3';

            document.getElementById('player2').src = 'sounds/time/till.mp3';

            if (hour == 0 || hour == 12) {
    
                document.getElementById('player3').src = 'sounds/time/figures/12.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + hour + '.mp3';

            }

        } else if (minutes == 45) {

            document.getElementById('player1').src = 'sounds/time/quarer.mp3';

            document.getElementById('player2').src = 'sounds/time/till.mp3';

            if (hour == 0 || hour == 12) {

                document.getElementById('player3').src = 'sounds/time/figures/1.mp3';

            } else {

                document.getElementById('player3').src = 'sounds/time/figures/' + (hour + 1) + '.mp3';
        
            }

        }

        do {
            
            am_pm = Number( String( Math.random() ).slice(2, 3) );
            
        } while (am_pm < 1 || am_pm > 2);

        if (minutes != 0) {

            if (hour == 0) {

                document.getElementById('player4').src = 'sounds/time/am.mp3';
                
            } else if (hour == 11 && minutes >= 31 && minutes <= 59) {

                if (am_pm == 1) {

                    document.getElementById('player4').src = 'sounds/time/pm.mp3';

                } else {

                    document.getElementById('player4').src = 'sounds/time/am.mp3';

                }

            } else if (hour == 12) {

                document.getElementById('player4').src = 'sounds/time/pm.mp3';

            } else {

                if (am_pm == 1 ) {

                    document.getElementById('player4').src = 'sounds/time/am.mp3';
        
                } else {
        
                    document.getElementById('player4').src = 'sounds/time/pm.mp3';
        
                }

            }

        } else {

            if (am_pm == 1 ) {

                document.getElementById('player2').src = 'sounds/time/am.mp3';
    
            } else {
    
                document.getElementById('player2').src = 'sounds/time/pm.mp3';


            }
            
        }


        // document.getElementById('player2').src = 'sounds/time/minutes.mp3';

        end();

    } else if (time_switch.value == 'am pm') {

        beginning();

        if (hour == 0) {

            document.getElementById('player1').src = 'sounds/time/figures/12.mp3';

        } else {

            document.getElementById('player1').src = 'sounds/time/figures/' + hour + '.mp3';

        }

        if (minutes == 0) {

        } else {

            document.getElementById('player2').src = 'sounds/time/figures/' + minutes + '.mp3';

        }

        do {
            
            am_pm = Number( String( Math.random() ).slice(2, 3) );
            
        } while (am_pm < 1 || am_pm > 2);

        if (minutes != 0) {

            if (hour == 0) {

                document.getElementById('player3').src = 'sounds/time/am.mp3';
                
            } else if (hour == 12) {

                document.getElementById('player3').src = 'sounds/time/pm.mp3';

            } else {

                if (am_pm == 1 ) {

                    document.getElementById('player3').src = 'sounds/time/am.mp3';
        
                } else {
        
                    document.getElementById('player3').src = 'sounds/time/pm.mp3';
        
                }

            }

        } else {

            if (am_pm == 1 ) {

                document.getElementById('player2').src = 'sounds/time/am.mp3';
    
            } else {
    
                document.getElementById('player2').src = 'sounds/time/pm.mp3';


            }
            
        }


        // document.getElementById('player2').src = 'sounds/time/minutes.mp3';

        end();

    }                        
 
    voice();

    // }

}

//============================================================================================================================

btn_farther_time_1.addEventListener('click', function() {

    btn_farther_time_1.style.display = 'none';
    btn_farther_time_2.style.display = 'block';

    btn_repeat_voice.style.display = 'block';

    word_select_a_list_1.style.display = 'none';
    word_click_on_start.style.display = 'none';

    time_switch.style.display = 'none';

    btn_show_the_number_show.style.display = 'block';

    general();

});

btn_farther_time_2.addEventListener('click', function() {

    general();

});

//============================================================================================================================

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

//============================================================================================================================

btn_repeat_voice.addEventListener('click', function() {

    voice();

});

//============================================================================================================================














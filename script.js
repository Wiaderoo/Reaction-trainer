    //Get buttons/containers

let main_button = document.getElementById(`main_button`);
let main_game_container = document.getElementById(`main_game_container`);
let start_text_container = document.getElementById(`start_text_container`);
let start_text_1 = document.querySelector(`.start_text1`);
let start_text_2 = document.querySelector(`.start_text2`);
let start_text_3 = document.querySelector(`.start_text3`);
let start_text_4 = document.querySelector(`.start_text_4`);
let stopwatch_container = document.getElementById(`stopwatch_container`);
let box1 = document.querySelector(`.box1`);
let box2 = document.querySelector(`.box2`);
let box3 = document.querySelector(`.box3`);
let box4 = document.querySelector(`.box4`);

    //Start game

function start_game(){
    main_button.style.display = `none`;
    show_text();
    setTimeout(() => {
        start_text_container.style.display = `none`;
        main_game_container.style.display = `flex`;
        stopwatch();
        change_box();
    }, 2000);
}

    //Show text before game

function show_text(){
        start_text_container.style.display = `block`;
        start_text_1.style.animation = `show_text 0.5s linear`;
    setTimeout(() => {
        start_text_2.style.animation = `show_text 0.5s linear`;
    }, 500);
    setTimeout(() => {
        start_text_3.style.animation = `show_text 0.5s linear`;
    }, 1000);
    setTimeout(() => {
        start_text_4.style.animation = `show_text 0.5s linear`;
    }, 1500);
}

    //Stopwath function

let seconds = 10;
let tens = 0;

function stopwatch(){
    if((tens == 0) && (seconds == 0)){
        stopwatch_container.innerHTML = `STOP`;
      }
      else{
        if(tens == 0){
          tens = 99;
          seconds--;
          show_time();
          setTimeout(() => {
            stopwatch();
          }, 10);
        }
        else{
          tens--;
          show_time();
          setTimeout(() => {
            stopwatch();
          }, 10);
        }
      }
}

function show_time(){
    if(tens > 9){
        stopwatch_container.innerHTML = `${seconds} : ${tens}`;
    }
    else{
        stopwatch_container.innerHTML = `${seconds} : 0${tens}`;
    }
}

    //Changing box colours

function change_box(){
    if(seconds > 2){
        let random_time = Math.floor((Math.random() * 2000) + 500);
        setTimeout(() => {
            change_box_color();
        }, random_time);
    }
}

let time_start = 0;
let time_end = 0;
let time_reaction_difference = 0;

function change_box_color(){
    let number_of_box = Math.floor(Math.random() * 4) + 1;
    document.querySelector(`.box${number_of_box}`).style.backgroundColor = `red`;
    time_start = Date.now();
}

    //Checking keys

function Checkthebutton(event){
    if((event.keyCode === 90) && (box1.style.backgroundColor == `red`)){
        time_reaction_difference = Date.now() - time_start;
        console.log(time_reaction_difference);
    }
    else if((event.keyCode === 88) && (box2.style.backgroundColor == `red`)){
        time_reaction_difference = Date.now() - time_start;
        console.log(time_reaction_difference);
    }
    else if((event.keyCode === 78) && (box3.style.backgroundColor == `red`)){
        time_reaction_difference = Date.now() - time_start;
        console.log(time_reaction_difference);
    }
    else if((event.keyCode === 77) && (box4.style.backgroundColor == `red`)){
        time_reaction_difference = Date.now() - time_start;
        console.log(time_reaction_difference);
    }

box1.style.backgroundColor = `green`;
box2.style.backgroundColor = `green`;
box3.style.backgroundColor = `green`;
box4.style.backgroundColor = `green`;

change_box();
}

document.addEventListener("keydown", Checkthebutton);

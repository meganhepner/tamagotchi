import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Doritama } from './../src/doritama.js';
import { Tamagotchi } from './../src/tamagotchi.js';

$(document).ready(function() {
  let doritama;
  let tamagotchi;

  $("button#start").click(function() {

    doritama = new Doritama;
    $(".show").hide();
  });
  
  $("button#add").click(function(event) {
    event.preventDefault();

    tamagotchi = new Tamagotchi($("input#tamagotchi").val());
    tamagotchi.setHunger();
    tamagotchi.setPlay();
    tamagotchi.setSleep();
    doritama.tamagotchis.push(tamagotchi);

    $("#tamagotchis").append(`<button type="button" class="btn btn-primary" id="${tamagotchi.name}">${tamagotchi.name}</button>`)
    $("body").append(`<div><h1 id="name-${tamagotchi.name}">${tamagotchi.name}</h1><h6>Tamagotchi</h6></div><div><h1 class="hunger-level" id="hunger-${tamagotchi.name}">${tamagotchi.foodStatus}</h1><h6>Hunger Level</h6><button type="button" class="btn btn-primary" id="feed-${tamagotchi.name}">Feed your Tamagotchi!</button></div><div><h1 id="play-${tamagotchi.name}">${tamagotchi.playStatus}</h1><h6>Play Level</h6><button type="button" class="btn btn-primary" id="play-with-${tamagotchi.name}">Play with your Tamagotchi!</button></div><div><h1 id="sleep-${tamagotchi.name}">${tamagotchi.sleepStatus}</h1><h6>Sleep Level</h6><button type="button" class="btn btn-primary" id="put-${tamagotchi.name}-to-sleep">Put your Tamagotchi to bed!</button></div>`);

    doritama.tamagotchis.forEach(function(tamagotchi) {
      setInterval(function(){
        tamagotchi.displayStatus();
        $(`#hunger-${tamagotchi.name}`).text(tamagotchi.food);
        $(`#play-${tamagotchi.name}`).text(tamagotchi.play);
        $(`#sleep-${tamagotchi.name}`).text(tamagotchi.sleep);
      }, 1000);
    });

    doritama.tamagotchis.forEach(function(tamagotchi) { 
      tamagotchi.deathInterval = setInterval(function() {
        if (tamagotchi.starved === true || tamagotchi.neglected === true || tamagotchi.exhausted === true) {
          $("#death").append(`<h1>Your Tamagotchi, ` + `${tamagotchi.name}` + ` has died!</h1>`)
          doritama.tamagotchis.splice(`${tamagotchi.name}`, 1);
        }
        tamagotchi.isStarved();
        tamagotchi.isNeglected();
        tamagotchi.isExhausted();
      }, 1000);
    });

    $(`#feed-${tamagotchi.name}`).click(function() {
      tamagotchi.feed();
    });
  
    $(`#play-with-${tamagotchi.name}`).click(function() {
      tamagotchi.playWith();
    });
  
    $(`#put-${tamagotchi.name}-to-sleep`).click(function() {
      tamagotchi.putToBed();
    });
  });
});
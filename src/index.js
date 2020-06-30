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
  
  $("button#add").click(function() {

    tamagotchi = new Tamagotchi($("input#tamagotchi").val());
    tamagotchi.setHunger();
    tamagotchi.setPlay();
    tamagotchi.setSleep();
    doritama.tamagotchis.push(tamagotchi);

    $("#tamagotchis").append(`<button type="button" class="btn btn-primary" id="${tamagotchi.name}">${tamagotchi.name}</button>`)
    $("body").append(`<div><h1 id="name-${tamagotchi.name}">${tamagotchi.name}</h1><h6>Tamagotchi</h6></div><div><h1 class="hunger-level" id="hunger-${tamagotchi.name}">${tamagotchi.foodStatus}</h1><h6>Hunger Level</h6><button type="button" class="btn btn-primary" id="feed">Feed your Tamagotchi!</button></div><div><h1 id="play-${tamagotchi.name}">${tamagotchi.playStatus}</h1><h6>Play Level</h6><button type="button" class="btn btn-primary" id="play">Play with your Tamagotchi!</button></div><div><h1 id="sleep-${tamagotchi.name}">${tamagotchi.sleepStatus}</h1><h6>Sleep Level</h6><button type="button" class="btn btn-primary" id="sleep">Put your Tamagotchi to bed!</button></div>`);

    setInterval(function() {
      if (tamagotchi.starved === true || tamagotchi.neglected === true || tamagotchi.exhausted === true) {
        $("#tamagotchi-info").hide();
        $("#death").append(`<h1>Your Tamagotchi has died!</h1>`);
      }
      tamagotchi.isStarved();
      tamagotchi.isNeglected();
      tamagotchi.isExhausted();
    }, 1000);
  
//    $("#tamagotchi-info").show();
  });

  setInterval(function(){
    tamagotchi.displayStatus();
    $(`#hunger-${tamagotchi.name}`).text(tamagotchi.foodStatus);
    $(`#play-${tamagotchi.name}`).text(tamagotchi.playStatus);
    $(`#sleep-${tamagotchi.name}`).text(tamagotchi.sleepStatus);
  }, 1000);

  $("#feed").click(function() {
    tamagotchi.feed();
  });

  $("#play").click(function() {
    tamagotchi.playWith();
  });

  $("#sleep").click(function() {
    tamagotchi.putToBed();
  });

  $("#refresh").click(function(){
    location.reload(true);
  });

  // $(`#${tamagotchi.name}`).click(function() {

  //   $("#tamagotchi-name").text(tamagotchi.name);

  //   setInterval(function(){
  //     tamagotchi.displayStatus();
  //     $("#hunger-level").text(tamagotchi.foodStatus);
  //     $("#play-level").text(tamagotchi.playStatus);
  //     $("#sleep-level").text(tamagotchi.sleepStatus);
  //   }, 1000);
  // });
});
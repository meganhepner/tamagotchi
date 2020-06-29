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

    $("#tamagotchi-name").text(tamagotchi.name);
    $("#tamagotchis").append(`<button type="button" class="btn btn-primary">${tamagotchi.name}</button>`)

    setInterval(function() {
      if (tamagotchi.food > 7) {
        $("#hunger-level").text("Satisfied!");
      } else if (tamagotchi.food > 3) {
        $("#hunger-level").text("Hungry!");
      } else {
        $("#hunger-level").text("Starving!");
      }
      if (tamagotchi.play > 7) {
        $("#play-level").text("Content!");
      } else if (tamagotchi.play > 3) {
        $("#play-level").text("Bored!");
      } else {
        $("#play-level").text("Wearied!");
      }
      if (tamagotchi.sleep > 7) {
        $("#sleep-level").text("Rested!");
      } else if (tamagotchi.sleep > 3) {
        $("#sleep-level").text("Tired!");
      } else {
        $("#sleep-level").text("Exhausted!");
      }      
    }, 1000);

    setInterval(function() {
      if (tamagotchi.starved === true || tamagotchi.neglected === true || tamagotchi.exhausted === true) {
        $("#tamagotchi-info").hide();
        $("#death").show();
      }
      tamagotchi.isStarved();
      tamagotchi.isNeglected();
      tamagotchi.isExhausted();
    }, 1000);
  
    $("#tamagotchi-info").show();
  });

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
});
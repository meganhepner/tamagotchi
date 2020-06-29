import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Tamagotchi } from './../src/tamagotchi.js';

$(document).ready(function() {
  
  let tamagotchi;
  
  $("button#start").click(function() {
    
    tamagotchi = new Tamagotchi($("input#tamagotchi").val());
    tamagotchi.setHunger();
    tamagotchi.setPlay();
    tamagotchi.setSleep();

    $("#tamagotchi-name").text(tamagotchi.name);

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
  
    $(".show").hide();
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
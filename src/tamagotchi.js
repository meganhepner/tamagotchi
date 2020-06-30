export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.food = 10;
    this.play = 10;
    this.sleep = 10;
    this.foodStatus = "";
    this.playStatus = "";
    this.sleepStatus = "";
    this.hungerInterval;
    this.playInterval;
    this.sleepInterval;
    this.deathInterval;
    this.death;
  }

  setHunger() {
    this.hungerInterval = setInterval(() => {
      this.food--;
    }, 1000);
  }

  setPlay() {
    this.playInterval = setInterval(() => {
      this.play--;
    }, 1000);
  }

  setSleep() {
    this.sleepInterval = setInterval(() => {
      this.sleep--;
    }, 1000);
  }

  feed() {
    this.food += 5;
  }

  playWith() {
    this.play += 3;
  }

  putToBed() {
    this.sleep = 10;
  }

  isStarved() {
    if (this.food > 0) {
      return this.starved = false;
    } else {
      clearInterval(this.hungerInterval);
      clearInterval(this.playInterval);
      clearInterval(this.sleepInterval);
      clearInterval(this.deathInterval);
      return this.starved = true;
    }
  }

  isNeglected() {
    if (this.play > 0) {
      return this.neglected = false;
    } else {
      clearInterval(this.hungerInterval);
      clearInterval(this.playInterval);
      clearInterval(this.sleepInterval);
      clearInterval(this.deathInterval);
      return this.neglected = true;
    }
  }

  isExhausted() {
    if (this.sleep > 0) {
      return this.exhausted = false;
    } else {
      clearInterval(this.hungerInterval);
      clearInterval(this.playInterval);
      clearInterval(this.sleepInterval);
      clearInterval(this.deathInterval);
      return this.exhausted = true;
    }
  }

  displayStatus() {
      if (this.food > 7) {
        this.foodStatus = "Satisfied!";
      } else if (this.food > 3) {
        this.foodStatus = "Hungry!";
      } else {
        this.foodStatus = "Starving!";
      }
      if (this.play > 7) {
        this.playStatus = "Content!";
      } else if (this.play > 3) {
        this.playStatus = "Bored!";
      } else {
        this.playStatus = "Wearied!";
      }
      if (this.sleep > 7) {
        this.sleepStatus = "Rested!";
      } else if (this.sleep > 3) {
        this.sleepStatus = "Tired!";
      } else {
        this.sleepStatus = "Exhausted!";
      }      
  }


}
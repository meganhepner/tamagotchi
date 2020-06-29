export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.food = 10;
    this.play = 10;
    this.sleep = 10;
  }

  setHunger() {
    setInterval(() => {
      this.food--;
    }, 1000);
  }

  setPlay() {
    setInterval(() => {
      this.play--;
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
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
        return this.starved = true;
      }
    }

    isNeglected() {
      if (this.play > 0) {
        return this.neglected = false;
      } else {
        return this.neglected = true;
      }
    }

    isExhausted() {
      if (this.sleep > 0) {
        return this.exhausted = false;
      } else {
        return this.exhausted = true;
      }
    }
}
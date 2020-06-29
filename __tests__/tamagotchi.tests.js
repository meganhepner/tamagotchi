import { Tamagotchi } from "./../src/tamagotchi.js"

describe('tamagotchi', () => {

  jest.useFakeTimers();
  
  let tamagotchi;
  beforeEach(function() {
    tamagotchi = new Tamagotchi("bob");
    tamagotchi.setHunger();
    tamagotchi.setPlay();
    tamagotchi.setSleep();
  });

  afterEach(function() {
    jest.clearAllTimers();
  })
  
  test('should correctly create a new tamagotchi object', () => {
    expect(tamagotchi).toBeInstanceOf(Tamagotchi);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(tamagotchi.food).toEqual(7);
  });

  test('should have a play level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(tamagotchi.play).toEqual(7);
  });

  test('should have a sleep level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(tamagotchi.sleep).toEqual(7);
  });

  test('should increase food level by 5', () => {
    jest.advanceTimersByTime(6001);
    tamagotchi.feed();
    expect(tamagotchi.food).toEqual(9);
  });

  test('should increase play level by 3', () => {
    jest.advanceTimersByTime(6001);
    tamagotchi.playWith();
    expect(tamagotchi.play).toEqual(7);
  });

  test('should reset sleep level', () => {
    jest.advanceTimersByTime(9001);
    tamagotchi.putToBed();
    expect(tamagotchi.sleep).toEqual(10);
  });

  test('should die if food value goes below 0', () => {
    jest.advanceTimersByTime(10001);
    tamagotchi.isStarved();
    expect(tamagotchi.isStarved()).toEqual(true);
  });

  test('should die if play value goes below 0', () => {
    jest.advanceTimersByTime(10001);
    tamagotchi.isNeglected();
    expect(tamagotchi.isNeglected()).toEqual(true);
  });

  test('should die if sleep value goes below 0', () => {
    jest.advanceTimersByTime(10001);
    tamagotchi.isExhausted();
    expect(tamagotchi.isExhausted()).toEqual(true);
  });
});



import { Doritama } from './../src/doritama.js'
import { Tamagotchi } from '../src/tamagotchi.js';
import { TestScheduler } from 'jest';

describe('doritama', () => {

  let doritama;

  let tamagotchi;
  let tamagotchi2;

  beforeEach(function() {

    doritama = new Doritama;

    tamagotchi = new Tamagotchi("bob");
    tamagotchi2 = new Tamagotchi("steve");
  });

  test('should push tamagotchi into doritama array', () => {
    doritama.tamagotchis.push(tamagotchi, tamagotchi2);
    expect(doritama.tamagotchis).toHaveLength(2);
    console.log(doritama.tamagotchis);
  });
})
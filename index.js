const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
// 1. Destructure animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Four animals (skip horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Three animals (skip horse and chicken)
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays
// 4. Assign color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Skip indigo, use first letters
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo to `indg`
const [,,,,, indg] = colors;

// Objects
// 7. Destructure all muppet properties
const { 
  muppetName, 
  color, 
  song, 
  job, 
  partner 
} = muppet;

// 8. Destructure nested songs and Kermit's details
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  },
  nestedJob,
  nestedPartner 
} = nestedMuppet;







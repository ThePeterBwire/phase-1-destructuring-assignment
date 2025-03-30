const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const muppet = { /* ... */ };
const nestedMuppet = { /* ... */ };

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
// 7. Destructure muppet properties
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nested songs and Kermit's details
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;
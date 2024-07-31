// @ts-check

/**
 * @typedef {Object} Classes
 * @property {string} MAGE
 * @property {string} WARRIOR
 * @property {string} ROGUE
 */
export const classes = {
  MAGE: 'mage',
  WARRIOR: 'warrior',
  ROGUE: 'rogue',
  CREATURE: 'creature',
};

/**
 * @typedef {keyof Classes} ClassKey
 */

/**
 * @typedef Character
 * @type {Object}
 * @property {'character'} type
 * @property {number} id
 * @property {string} name
 * @property {string} image
 * @property {Classes[ClassKey]} characterClass
 * @property {number} hp
 * @property {number} move
 * @property {boolean} createNew
 */

/**
 * @type {Character[]}
 */
const characters = [
  {
    type: 'character',
    id: 1,
    name: 'Kael',
    image: 'characters/1.png',
    characterClass: classes.MAGE,
    hp: 6,
    move: 1,
    createNew: true,
  },
  {
    type: 'character',
    id: 2,
    name: 'Garrosh',
    image: 'characters/2.png',
    characterClass: classes.WARRIOR,
    hp: 10,
    move: 1,
    createNew: true,
  },
  {
    type: 'character',
    id: 3,
    name: 'Jaina',
    image: 'characters/3.png',
    characterClass: classes.ROGUE,
    hp: 7,
    move: 2,
    createNew: true,
  },
  {
    type: 'character',
    id: 4,
    name: 'Medivh',
    image: 'characters/4.png',
    characterClass: classes.MAGE,
    hp: 6,
    move: 1,
    createNew: true,
  },
  {
    type: 'character',
    id: 5,
    name: 'Thrall',
    image: 'characters/5.png',
    characterClass: classes.WARRIOR,
    hp: 10,
    move: 2,
    createNew: true,
  },
  {
    type: 'character',
    id: 6,
    name: 'Maiev',
    image: 'characters/6.png',
    characterClass: classes.ROGUE,
    hp: 7,
    move: 2,
    createNew: true,
  },
];

/**
 * @type {Character[]}
 */
export const creatures = [
  {
    type: 'character',
    id: 7,
    name: 'Goblin',
    image: 'creatures/1.png',
    characterClass: classes.CREATURE,
    hp: 6,
    move: 1,
    createNew: true,
  },
  {
    type: 'character',
    id: 8,
    name: 'Blob',
    image: 'creatures/2.png',
    characterClass: classes.CREATURE,
    hp: 10,
    move: 1,
    createNew: true,
  },
  {
    type: 'character',
    id: 9,
    name: 'Frog',
    image: 'creatures/3.png',
    characterClass: classes.CREATURE,
    hp: 7,
    move: 3,
    createNew: true,
  },
  {
    type: 'character',
    id: 10,
    name: 'Wolf',
    image: 'creatures/4.png',
    characterClass: classes.CREATURE,
    hp: 6,
    move: 1,
    createNew: true,
  },
  {
    type: 'character',
    id: 11,
    name: 'Hornet',
    image: 'creatures/5.png',
    characterClass: classes.CREATURE,
    hp: 10,
    move: 4,
    createNew: true,
  },
  {
    type: 'character',
    id: 12,
    name: 'Goblin Archer',
    image: 'creatures/6.png',
    characterClass: classes.CREATURE,
    hp: 7,
    move: 2,
    createNew: true,
  },
];

export default characters;

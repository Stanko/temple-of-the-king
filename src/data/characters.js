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
};

/**
 * @typedef {keyof Classes} ClassKey
 */

/**
 * @typedef Card
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
 * @type {Card[]}
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

export default characters;

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
 * @property {number} id
 * @property {string} name
 * @property {string} image
 * @property {Classes[ClassKey]} characterClass
 * @property {number} hp
 * @property {boolean} createNew
 */

/**
 * @type {Card[]}
 */
const characters = [
  {
    id: 1,
    name: 'Kael',
    image: 'characters/1.png',
    characterClass: classes.MAGE,
    hp: 6,
    createNew: true,
  },
  {
    id: 2,
    name: 'Garrosh',
    image: 'characters/2.png',
    characterClass: classes.WARRIOR,
    hp: 10,
    createNew: true,
  },
  {
    id: 3,
    name: 'Jaina',
    image: 'characters/3.png',
    characterClass: classes.ROGUE,
    hp: 7,
    createNew: true,
  },
  {
    id: 4,
    name: 'Medivh',
    image: 'characters/4.png',
    characterClass: classes.MAGE,
    hp: 6,
    createNew: true,
  },
  {
    id: 5,
    name: 'Thrall',
    image: 'characters/5.png',
    characterClass: classes.WARRIOR,
    hp: 10,
    createNew: true,
  },
  {
    id: 6,
    name: 'Maiev',
    image: 'characters/6.png',
    characterClass: classes.ROGUE,
    hp: 7,
    createNew: true,
  },
];

export default characters;

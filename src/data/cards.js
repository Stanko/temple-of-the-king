// @ts-check

/**
 * @typedef {Object} Colors
 * @property {string} TURQUOISE
 * @property {string} GREEN
 * @property {string} BLUE
 * @property {string} PURPLE
 * @property {string} DARK_GRAY
 * @property {string} YELLOW
 * @property {string} ORANGE
 * @property {string} RED
 * @property {string} LIGHT_GRAY
 * @property {string} MIDNIGHT_BLUE
 */
const colors = {
  TURQUOISE: '#1abc9c',
  GREEN: '#2ecc71',
  BLUE: '#3498db',
  PURPLE: '#9b59b6',
  DARK_GRAY: '#34495e',
  YELLOW: '#f1c40f',
  ORANGE: '#e67e22',
  RED: '#e74c3c',
  LIGHT_GRAY: '#ecf0f1',
};

/**
 * @typedef {keyof Colors} ColorKey
 */

/**
 * @typedef Card
 * @type {Object}
 * @property {'card'} type
 * @property {string} name
 * @property {Colors[ColorKey]} color
 * @property {number} cost
 * @property {number} attack
 * @property {number} block
 * @property {number} heal
 * @property {number} repeat
 * @property {number} vulnerable
 * @property {number} weak
 * @property {number} slow
 * @property {number} freeze
 * @property {boolean} affectsAll
 */

/**
 * @type {Card[]}
 */
const cards = [
  {
    type: 'card',
    name: 'Attack',
    color: colors.BLUE,
    cost: 1,
    attack: 1,
    block: 0,
    heal: 0,
    freeze: 0,
    repeat: 1,
    slow: 0,
    vulnerable: 0,
    weak: 0,
    affectsAll: false,
  },
  {
    type: 'card',
    name: 'Triple hit',
    color: colors.BLUE,
    cost: 2,
    attack: 1,
    block: 0,
    heal: 0,
    freeze: 0,
    repeat: 3,
    slow: 0,
    vulnerable: 0,
    weak: 0,
    affectsAll: false,
  },
  {
    type: 'card',
    name: 'Bash',
    color: colors.PURPLE,
    cost: 2,
    attack: 3,
    block: 0,
    heal: 0,
    freeze: 0,
    repeat: 1,
    slow: 0,
    vulnerable: 2,
    weak: 0,
    affectsAll: false,
  },
  {
    type: 'card',
    name: 'Whirlwind',
    color: colors.PURPLE,
    cost: 3,
    attack: 2,
    block: 2,
    heal: 0,
    freeze: 0,
    repeat: 3,
    slow: 0,
    vulnerable: 0,
    weak: 1,
    affectsAll: true,
  },
  {
    type: 'card',
    name: 'Block',
    color: colors.TURQUOISE,
    cost: 1,
    attack: 0,
    block: 1,
    heal: 0,
    freeze: 0,
    repeat: 1,
    slow: 0,
    vulnerable: 0,
    weak: 0,
    affectsAll: false,
  },
  {
    type: 'card',
    name: 'Healing rain',
    color: colors.GREEN,
    cost: 3,
    attack: 0,
    block: 1,
    heal: 1,
    freeze: 0,
    repeat: 2,
    slow: 0,
    vulnerable: 0,
    weak: 0,
    affectsAll: true,
  },
];

export const getEmptyCard = (index) => ({
  name: 'Card ' + index,
  color: colors.DARK_GRAY,
  cost: 0,
  attack: 0,
  block: 0,
  heal: 0,
  freeze: 0,
  repeat: 0,
  slow: 0,
  vulnerable: 0,
  weak: 0,
  affectsAll: false,
});

export default cards;

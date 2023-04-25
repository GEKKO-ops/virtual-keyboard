const keyMap = {
  Backquote: {
    en: { shiftOff: '`', shiftOn: '~' },
    ru: { shiftOff: 'ё', shiftOn: 'Ё' },
    type: 'alphanumeric',
  },
  Digit1: {
    en: { shiftOff: '1', shiftOn: '!' },
    ru: { shiftOff: '1', shiftOn: '!' },
    type: 'alphanumeric',
  },
  Digit2: {
    en: { shiftOff: '2', shiftOn: '@' },
    ru: { shiftOff: '2', shiftOn: '"' },
    type: 'alphanumeric',
  },
  Digit3: {
    en: { shiftOff: '3', shiftOn: '#' },
    ru: { shiftOff: '3', shiftOn: '№' },
    type: 'alphanumeric',
  },
  Digit4: {
    en: { shiftOff: '4', shiftOn: '$' },
    ru: { shiftOff: '4', shiftOn: ';' },
    type: 'alphanumeric',
  },
  Digit5: {
    en: { shiftOff: '5', shiftOn: '%' },
    ru: { shiftOff: '5', shiftOn: '%' },
    type: 'alphanumeric',
  },
  Digit6: {
    en: { shiftOff: '6', shiftOn: '^' },
    ru: { shiftOff: '6', shiftOn: ':' },
    type: 'alphanumeric',
  },
  Digit7: {
    en: { shiftOff: '7', shiftOn: '&' },
    ru: { shiftOff: '7', shiftOn: '?' },
    type: 'alphanumeric',
  },
  Digit8: {
    en: { shiftOff: '8', shiftOn: '*' },
    ru: { shiftOff: '8', shiftOn: '*' },
    type: 'alphanumeric',
  },
  Digit9: {
    en: { shiftOff: '9', shiftOn: '(' },
    ru: { shiftOff: '9', shiftOn: '(' },
    type: 'alphanumeric',
  },
  Digit0: {
    en: { shiftOff: '0', shiftOn: ')' },
    ru: { shiftOff: '0', shiftOn: ')' },
    type: 'alphanumeric',
  },
  Minus: {
    en: { shiftOff: '-', shiftOn: '_' },
    ru: { shiftOff: '-', shiftOn: '_' },
    type: 'alphanumeric',
  },
  Equal: {
    en: { shiftOff: '=', shiftOn: '+' },
    ru: { shiftOff: '=', shiftOn: '+' },
    type: 'alphanumeric',
  },
  Backspace: {
    text: 'Backspace',
    type: 'backspace',
  },
  Tab: {
    text: 'Tab',
    type: 'tab',
  },
  KeyQ: {
    en: { shiftOff: 'q', shiftOn: 'Q' },
    ru: { shiftOff: 'й', shiftOn: 'Й' },
    type: 'alphanumeric',
  },
  KeyW: {
    en: { shiftOff: 'w', shiftOn: 'W' },
    ru: { shiftOff: 'ц', shiftOn: 'Ц' },
    type: 'alphanumeric',
  },
  KeyE: {
    en: { shiftOff: 'e', shiftOn: 'E' },
    ru: { shiftOff: 'у', shiftOn: 'У' },
    type: 'alphanumeric',
  },
  KeyR: {
    en: { shiftOff: 'r', shiftOn: 'R' },
    ru: { shiftOff: 'к', shiftOn: 'К' },
    type: 'alphanumeric',
  },
  KeyT: {
    en: { shiftOff: 't', shiftOn: 'T' },
    ru: { shiftOff: 'е', shiftOn: 'Е' },
    type: 'alphanumeric',
  },
  KeyY: {
    en: { shiftOff: 'y', shiftOn: 'Y' },
    ru: { shiftOff: 'н', shiftOn: 'Н' },
    type: 'alphanumeric',
  },
  KeyU: {
    en: { shiftOff: 'u', shiftOn: 'U' },
    ru: { shiftOff: 'г', shiftOn: 'Г' },
    type: 'alphanumeric',
  },
  KeyI: {
    en: { shiftOff: 'i', shiftOn: 'I' },
    ru: { shiftOff: 'ш', shiftOn: 'Ш' },
    type: 'alphanumeric',
  },
  KeyO: {
    en: { shiftOff: 'o', shiftOn: 'O' },
    ru: { shiftOff: 'щ', shiftOn: 'Щ' },
    type: 'alphanumeric',
  },
  KeyP: {
    en: { shiftOff: 'p', shiftOn: 'P' },
    ru: { shiftOff: 'з', shiftOn: 'З' },
    type: 'alphanumeric',
  },
  BracketLeft: {
    en: { shiftOff: '[', shiftOn: '{' },
    ru: { shiftOff: 'х', shiftOn: 'Х' },
    type: 'alphanumeric',
  },
  BracketRight: {
    en: { shiftOff: ']', shiftOn: '}' },
    ru: { shiftOff: 'ъ', shiftOn: 'Ъ' },
    type: 'alphanumeric',
  },
  Backslash: {
    en: { shiftOff: '\\', shiftOn: '|' },
    ru: { shiftOff: '\\', shiftOn: '/' },
    type: 'alphanumeric',
  },
  Delete: {
    text: 'Del',
    type: 'del',
  },
  CapsLock: {
    text: 'Caps Lock',
    type: 'capsLock',
  },
  KeyA: {
    en: { shiftOff: 'a', shiftOn: 'A' },
    ru: { shiftOff: 'ф', shiftOn: 'Ф' },
    type: 'alphanumeric',
  },
  KeyS: {
    en: { shiftOff: 's', shiftOn: 'S' },
    ru: { shiftOff: 'ы', shiftOn: 'Ы' },
    type: 'alphanumeric',
  },
  KeyD: {
    en: { shiftOff: 'd', shiftOn: 'D' },
    ru: { shiftOff: 'в', shiftOn: 'В' },
    type: 'alphanumeric',
  },
  KeyF: {
    en: { shiftOff: 'f', shiftOn: 'F' },
    ru: { shiftOff: 'а', shiftOn: 'А' },
    type: 'alphanumeric',
  },
  KeyG: {
    en: { shiftOff: 'g', shiftOn: 'G' },
    ru: { shiftOff: 'п', shiftOn: 'П' },
    type: 'alphanumeric',
  },
  KeyH: {
    en: { shiftOff: 'h', shiftOn: 'H' },
    ru: { shiftOff: 'р', shiftOn: 'Р' },
    type: 'alphanumeric',
  },
  KeyJ: {
    en: { shiftOff: 'j', shiftOn: 'J' },
    ru: { shiftOff: 'о', shiftOn: 'О' },
    type: 'alphanumeric',
  },
  KeyK: {
    en: { shiftOff: 'k', shiftOn: 'K' },
    ru: { shiftOff: 'л', shiftOn: 'Л' },
    type: 'alphanumeric',
  },
  KeyL: {
    en: { shiftOff: 'l', shiftOn: 'L' },
    ru: { shiftOff: 'д', shiftOn: 'Д' },
    type: 'alphanumeric',
  },
  Semicolon: {
    en: { shiftOff: ';', shiftOn: ':' },
    ru: { shiftOff: 'ж', shiftOn: 'Ж' },
    type: 'alphanumeric',
  },
  Quote: {
    en: { shiftOff: '\'', shiftOn: '"' },
    ru: { shiftOff: 'э', shiftOn: 'Э' },
    type: 'alphanumeric',
  },
  Enter: {
    text: 'Enter',
    type: 'enter',
  },
};

export default keyMap;

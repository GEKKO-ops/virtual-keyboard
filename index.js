import keyMap from './keyMap.js';

const language = 'en';

const createKeys = () => {
  const lang = language;
  const keyArr = Object.keys(keyMap);
  const fragment = document.createDocumentFragment();

  keyArr.forEach((key) => {
    const keyBtn = document.createElement('div');
    keyBtn.classList.add('key-btn');
    const keyItem = keyMap[key];

    keyBtn.setAttribute('data-code', key);
    keyBtn.setAttribute('data-type', keyItem.type);

    if (keyItem.type === 'alphanumeric') {
      keyBtn.textContent = keyItem[lang].shiftOff;
    } else {
      keyBtn.textContent = keyItem.text;
      keyBtn.classList.add(`${keyItem.type}`);
    }
    fragment.append(keyBtn);
  });
  return fragment;
};

let activeElement = null;
let capsLock = false;

const typedBtn = (textareaElem) => {
  const { type } = activeElement.dataset;
  const textarea = textareaElem;

  const pozStart = textarea.selectionStart;
  const pozEnd = textarea.selectionEnd;
  const textLength = textarea.value.length;
  const textBefore = textarea.value.slice(0, pozStart);
  const textAfter = textarea.value.slice(pozEnd);
  const textBeforeCursor = textarea.value.substring(0, pozStart);
  const textAfterCursor = textarea.value.substring(pozStart);

  if (type === 'alphanumeric') {
    textarea.value = textBefore + activeElement.textContent + textAfter;
    textarea.focus();
    const position = pozStart + activeElement.textContent.length;
    textarea.setSelectionRange(position, position);
  }
  if (type === 'backspace') {
    if (pozStart !== pozEnd) {
      textarea.value = textBefore + textAfter;
      textarea.focus();
      const position = pozStart;
      textarea.setSelectionRange(position, position);
    } else if (pozStart === 0) {
      return;
    } else {
      textarea.value = textarea.value.slice(0, pozStart - 1) + textAfter;
      textarea.focus();
      const position = pozStart - 1;
      textarea.setSelectionRange(position, position);
    }
  }
  if (type === 'tab') {
    const tabText = '    ';
    textarea.value = textBefore + tabText + textAfter;
    textarea.focus();
    const position = pozStart + tabText.length;
    textarea.setSelectionRange(position, position);
  }
  if (type === 'del') {
    if (pozStart === textLength) {
      return;
    }
    if (pozStart !== pozEnd) {
      textarea.value = textBefore + textAfter;
      textarea.focus();
      const position = pozStart;
      textarea.setSelectionRange(position, position);
    } else {
      textarea.value = textBefore + textarea.value.slice(pozEnd + 1);
      textarea.focus();
      const position = pozStart;
      textarea.setSelectionRange(position, position);
    }
  }
  if (type === 'enter') {
    const enterText = '\n';
    textarea.value = textBefore + enterText + textAfter;
    textarea.focus();
    const position = pozStart + enterText.length;
    textarea.setSelectionRange(position, position);
  }
  if (type === 'arrowUp') {
    textarea.focus();
    const position = textBeforeCursor.replace(/\n[^\n]*$/, '').length;
    textarea.setSelectionRange(position, position);
  }
  if (type === 'arrowDown') {
    textarea.focus();
    const position = pozStart + textAfterCursor.length - textAfterCursor.replace(/^[^\n]*\n?/, '').length;
    textarea.setSelectionRange(position, position);
  }
  if (type === 'arrowLeft') {
    if (pozStart === 0 && pozEnd === 0) {
      return;
    }
    textarea.focus();
    const position = pozStart - 1;
    textarea.setSelectionRange(position, position);
  }
  if (type === 'arrowRight') {
    textarea.focus();
    const position = pozStart + 1;
    textarea.setSelectionRange(position, position);
  }
  if (type === 'space') {
    textarea.value = `${textBefore} ${textAfter}`;
    textarea.focus();
    const position = pozStart + 1;
    textarea.setSelectionRange(position, position);
  }
};

const toggleCapsLock = (alphanumeric) => {
  capsLock = !capsLock;
  alphanumeric.forEach((item) => {
    const btn = item;
    if (capsLock) {
      btn.textContent = item.textContent.toUpperCase();
    } else {
      btn.textContent = item.textContent.toLowerCase();
    }
  });
};

const capsLockOn = (capsLockBtn, alphanumeric) => {
  capsLockBtn.addEventListener('click', () => {
    capsLockBtn.classList.toggle('active-caps');
    toggleCapsLock(alphanumeric);
  });

  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.code === 'CapsLock') {
      capsLockBtn.classList.toggle('active-caps');
      toggleCapsLock(alphanumeric);
    }
  });
};

const toUpperCase = (alphanumeric) => {
  const lang = language;
  alphanumeric.forEach((item) => {
    const { code } = item.dataset;
    const btn = item;
    btn.textContent = keyMap[code][lang].shiftOn.toLowerCase();
    btn.textContent = keyMap[code][lang].shiftOn;
  });
};

const toLowerCase = (alphanumeric) => {
  const lang = language;
  alphanumeric.forEach((item) => {
    const { code } = item.dataset;
    const btn = item;
    btn.textContent = keyMap[code][lang].shiftOff.toUpperCase();
    btn.textContent = keyMap[code][lang].shiftOff;
  });
};

const shiftOn = (shifts, alphanumeric) => {
  shifts.forEach((shift) => {
    shift.addEventListener('mousedown', () => {
      shift.classList.add('active');
      toUpperCase(alphanumeric);
    });

    shift.addEventListener('mouseup', () => {
      shift.classList.remove('active');
      toLowerCase(alphanumeric);
    });

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.code === shift.dataset.code) {
        shift.classList.add('active');
        toUpperCase(alphanumeric);
      }
    });
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.code === shift.dataset.code) {
        shift.classList.remove('active');
        toLowerCase(alphanumeric);
      }
    });
  });
};

const toggleLanguage = (alphanumeric) => {
  const lang = language === 'en' ? 'ru' : 'en';

  alphanumeric.forEach((item) => {
    const { code } = item.dataset;
    const btn = item;
    btn.textContent = keyMap[code][lang].shiftOff.toUpperCase();
    btn.textContent = keyMap[code][lang].shiftOff;
  });
};

const changeLanguage = (ctrlBtn, altBtn, alphanumeric) => {
  const keyCode = [ctrlBtn.dataset.code, altBtn.dataset.code];
  const activeBtn = new Set();

  document.addEventListener('keydown', (e) => {
    activeBtn.add(e.code);

    for (let i = 0; i < keyCode.length; i += 1) {
      if (!activeBtn.has(keyCode[i])) {
        return;
      }
    }
    activeBtn.clear();
    toggleLanguage(alphanumeric);
  });

  document.addEventListener('keyup', (e) => {
    activeBtn.delete(e.code);
  });
};

const createKeyboard = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  document.body.append(main);

  const container = document.createElement('div');
  container.classList.add('container');
  main.append(container);
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.setAttribute('type', 'text');
  textarea.autofocus = true;
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const title = document.createElement('h1');
  title.innerText = 'Virtual Keyboard';
  const subtitle = document.createElement('h2');
  subtitle.innerText = 'The virtual keyboard was created in Windows OS. \n To switch the language, press left ctrl + alt';
  container.append(title, subtitle, textarea, keyboard);

  const keys = createKeys();
  keyboard.append(keys);

  const alphanumeric = document.querySelectorAll('[data-type="alphanumeric"]');
  const capsLockBtn = document.querySelector('[data-type="capsLock"]');
  const shiftBtns = document.querySelectorAll('[data-type="shift"]');
  const ctrlLeftBtn = document.querySelector('[data-type="controlLeft"]');
  const altLeftBtn = document.querySelector('[data-type="altLeft"]');

  capsLockOn(capsLockBtn, alphanumeric);
  shiftOn(shiftBtns, alphanumeric);
  changeLanguage(ctrlLeftBtn, altLeftBtn, alphanumeric);

  container.addEventListener('mousedown', (e) => {
    if (e.target !== capsLockBtn && e.target.closest('.key-btn')) {
      const activeElem = e.target.closest('.key-btn');
      activeElem.classList.add('active');
      activeElement = activeElem;
      typedBtn(textarea);
    }
  });
  container.addEventListener('mouseup', (e) => {
    if (e.target !== capsLockBtn && e.target.closest('.key-btn')) {
      const activeElem = e.target.closest('.key-btn');
      activeElem.classList.remove('active');
      textarea.focus();
    }
  });
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const activeBtn = document.querySelector(`[data-code="${e.code}"]`);
    if (e.code !== 'CapsLock' && activeBtn) {
      activeBtn.classList.add('active');
      activeElement = activeBtn;
      typedBtn(textarea);
    }
  });
  document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const activeBtn = document.querySelector(`[data-code="${e.code}"]`);
    if (e.code !== 'CapsLock' && activeBtn) {
      activeBtn.classList.remove('active');
    }
  });
};
createKeyboard();

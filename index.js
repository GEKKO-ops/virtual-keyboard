import keyMap from './keyMap.js';

const language = 'en';

const createKeys = () => {
  const lang = language;
  const keyArr = Object.keys(keyMap);
  console.log(keyArr);
  const fragment = document.createDocumentFragment();

  keyArr.forEach((key) => {
    const keyBtn = document.createElement('div');
    keyBtn.classList.add('key-btn');
    const keyItem = keyMap[key];
    console.log(keyItem);

    keyBtn.setAttribute('data-code', key);
    keyBtn.setAttribute('data-type', keyItem.type);

    if (keyItem.type === 'alphanumeric') {
      keyBtn.textContent = keyItem[lang].shiftOff;
    } else {
      keyBtn.textContent = keyItem.text;
    }
    fragment.append(keyBtn);
  });
  return fragment;
};

let activeElement = null;

const typedBtn = (textareaElem) => {
  const { type } = activeElement.dataset;
  const textarea = textareaElem;

  const pozStart = textarea.selectionStart;
  const pozEnd = textarea.selectionEnd;
  const valueLength = textarea.value.length;
  const valueBefore = textarea.value.slice(0, pozStart);
  const valueAfter = textarea.value.slice(pozEnd);

  if (type === 'alphanumeric') {
    textarea.value = valueBefore + activeElement.textContent + valueAfter;
    textarea.focus();
    const position = pozStart + activeElement.textContent.length;
    textarea.setSelectionRange(position, position);
  }
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

  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('.key-btn')) {
      const activeElem = e.target.closest('.key-btn');
      activeElem.classList.add('active');
      activeElement = activeElem;
      typedBtn(textarea);
    }
  });
  container.addEventListener('mouseup', (e) => {
    if (e.target.closest('.key-btn')) {
      const activeElem = e.target.closest('.key-btn');
      activeElem.classList.remove('active');
      textarea.focus();
    }
  });
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const activeBtn = document.querySelector(`[data-code="${e.code}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
      activeElement = activeBtn;
      typedBtn(textarea);
    }
  });
  document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const activeBtn = document.querySelector(`[data-code="${e.code}"]`);
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
  });
};
createKeyboard();

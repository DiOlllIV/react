// <div class="greeting">Hello, React!</div>

const rootElement = document.querySelector('#root');

/* const wrapperElem = document.createElement('div');
wrapperElem.classList.add('greeting');

const titleElem = document.createElement('div');
titleElem.textContent = 'Hello,world!';
titleElem.classList.add('greeting__title');

const greetingTExtElem = document.createElement('div');
greetingTExtElem.textContent = "I'm learning React";
greetingTExtElem.classList.add('greeting__text');

wrapperElem.append(titleElem, greetingTExtElem);

rootElement.append(wrapperElem); */

const greetingElem = React.createElement(
    'div', { className: 'greeting' },
    'Hello, React!'
);

ReactDOM.render(greetingElem, rootElement);
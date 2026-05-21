// const { Children } = require("react");

const react = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Google Me'
}

const mainContainer = document.querySelector('#root');

customRender(react, mainContainer);
function customRender(reactElement, container) {
    const { type, props } = reactElement;
    const domElement = document.createElement(type);
    domElement.innerHTML = react.Children;
    domElement.setAttribute('href', props.href);
    domElement.setAttribute('target', props.target);
    container.appendChild(domElement);
}
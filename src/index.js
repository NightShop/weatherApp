import './style.css';
import './img/background-test.jpg';

const newTitle = document.createElement('h1');
const domBody = document.querySelector('body');

newTitle.textContent = 'javascript test';
domBody.appendChild(newTitle);

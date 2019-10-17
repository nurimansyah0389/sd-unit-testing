import Main from './main';

const App = document.createElement('div');

// Logic to Main
Main(App);

// Render
document.body.prepend(App);

// Change title
document.title = 'Share Day #4 - Unit Testing Showcase';
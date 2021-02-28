import menuTemplate from './template/menu.hbs';
import menu from './menu.json';
import { theme } from './js/theme';
import './scss/styles.scss';

const menuRef = document.querySelector('.js-menu');


const markupMenu = menuTemplate(menu);

menuRef.insertAdjacentHTML('beforeend', markupMenu);

const themeSwitch = document.querySelector('#theme-switch-toggle');
const setLocalTheme = localStorage.getItem('theme');

actualTheme();

themeSwitch.addEventListener('change', switchToggle);



function switchToggle(event) {
    const checkedRef = event.target.checked;
    
    if (checkedRef) {
        localStorage.setItem('theme', theme.DARK);
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
        return;
    }

    if (!checkedRef) {
       localStorage.setItem('theme', theme.LIGHT);
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme'); 
        return;
    }
}

function actualTheme() {
    if (setLocalTheme === theme.DARK) {
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
    
        document.body.classList.add('light-theme');
    
}


// actualTheme();

// function switchToggle() {
//     if (JSON.parse(localStorage.getItem('theme')) === theme.LIGHT) {
//          document.body.classList.remove('light-theme')
//         document.body.classList.add('dark-theme')
//         localStorage.setItem('theme', JSON.stringify(theme.DARK));
//         return;
//     }

//     if (JSON.parse(localStorage.getItem('theme')) === theme.DARK) {
//         document.body.classList.remove('dark-theme')
//         document.body.classList.add('light-theme')
//         localStorage.setItem('theme', JSON.stringify(theme.LIGHT));
//         return;
//     }
// }

// function actualTheme() {
//     if (localStorage.getItem('theme') === null) {
//     document.body.classList.add('light-theme');
//         localStorage.setItem('theme', JSON.stringify(theme.LIGHT));
//         return;
//     }

//     if (JSON.parse(localStorage.getItem('theme')) === theme.LIGHT) {
//         document.body.classList.add('light-theme');
//         return;
// }

// if (JSON.parse(localStorage.getItem('theme')) === theme.DARK ){
//     document.body.classList.add('dark-theme');
//     localStorage.setItem('theme', JSON.stringify(theme.DARK));
//     themeSwitch.checked = true;
//     return;
// }
// }
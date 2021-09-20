//A variable to keep track of the current height of the menu_list display
let x = 0;
let show = false;
//Function to create an effect for the menu items to dynamically appear.
const showMenu = () => {

    //clearInterval(widthHeight);
    let menuList = document.getElementById('menu_items');

    const menuContainer = document.getElementById('menu_container');

    if (menuList.style.display === 'none') {
        x = 0;
        widthHeight();
        menuList.style.display = 'flex';
    } else {
        menuList.style.display = 'none';
    }
}

//This function will be to create the width and height for the menu_items

const widthHeight = () => {
    let menuList = document.getElementById('menu_items');

    setInterval(() => {
        if (x < 100) {
            x++;
            console.log(x);
            menuList.style = "width:" + x + "vw;";
        } else {
            clearInterval(widthHeight);
        }
    }, 5);
}



const menu = document.getElementById('menu_container');

menu.addEventListener('click', () => {
    //widthHeight();
    showMenu();
});


//This function will remove the menu dropdown that appears after the hamburger dropdown is selected.

const body = document.querySelector('body');

body.addEventListener('click', () => {
    const menuItems = document.getElementById('menu_items');
    clearInterval(widthHeight);
    menuItems.style.display = 'none';

});
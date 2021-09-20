//A variable to keep track of the current height of the menu_list display
let x = 0;


/**
 * @description used to create an effect for the menu items to dynamically appear.
 * @returns an updated UI
 */

const showMenu = () => {

    let menuList = document.getElementById('menu_items');

    if (menuList.style.display === 'none') {
        x = 0;
        scrollOut();
        menuList.style.display = 'flex';
    } else {
        menuList.style.display = 'none';

    }
}


/**
 * @description this setInterfal function will be used to create a scroll effect.
 * @returns an updated width for the menu items.
 */

const scrollOut = () => {
    let menuList = document.getElementById('menu_items');

    setInterval(() => {

        if (x < 100) {
            x++;
            menuList.style = "width:" + x + "vw;";
        } else {
            clearInterval(scrollOut);

        }
    }, 5);
}

/**
 * @description this function will be used to create a scroll in effect.
 * @returns updates the UI with a scroll in feature.
 */

const scrollIn = () => {
    let menuList = document.getElementById('menu_items');

    setInterval(() => {

        if (x > 0) {
            x--;
            menuList.style.width = x + "vw;";
        } else {
            clearInterval(scrollIn);
        }
    }, 5);
}

/**
 * @description an event listener placed on the menu container.
 * @returns an updated UI with the menu items being shown or hidden.
 */

const menu = document.getElementById('menu_container');

menu.addEventListener('click', () => {
    showMenu();
});


/**
 * @description an event listener placed on the body of the DOM.
 * @returns hides the menu items if they are already being displayed.
 */

const body = document.querySelector('body');

body.addEventListener('click', () => {

    const menuItems = document.getElementById('menu_items');
    clearInterval(scrollOut);

    menuItems.style.display = 'none';

});

/**
 * @description creates a smooth scroll feature when a menu list item is clicked.
 * @returns navigates the user to the part of the document that they have chosen to go to.
 */

const scrollToSection = () => {

    const menuParent = document.getElementById('menu_items').children;

    const itemsParent = menuParent[0];

    for (let i = 0; i < itemsParent.children.length; i++) {
        itemsParent.children[i].addEventListener('click', () => {
            //place smooth scroll function here
            console.log('I have been clicked');
        })
    }

}

scrollToSection();
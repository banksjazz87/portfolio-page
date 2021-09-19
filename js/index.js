//A variable to keep track of the current height of the menu_list display
let x = 0;

//Function to create an effect for the menu items to dynamically appear.
const showMenu = () => {

    clearInterval(widthHeight());
    x = 0;
    let menuList = document.getElementById('menu_items');

    if (menuList.style.display === "none") {
        return () => {
            widthHeight();
            menuList.style.display = "flex";
        }

    } else {
        return menuList.style.display = "none";
    }
}

//This function will be to create the width and height for the menu_items

const widthHeight = () => {
    let menuList = document.getElementById('menu_items');

    setInterval(() => {
        if (x < 100) {
            x++;
            console.log(x);
            return menuList.style = "height:" + x + "vh; width:" + x + "vw;";
        } else {
            console.log(x);
        }
    }, );
}



const menu = document.getElementById('menu_container');

menu.addEventListener('click', () => {
    //widthHeight();
    showMenu();
});


/*let i = 0;

const testing = () => {
    setInterval(() => {
        if (i < 10) {
            i++;
            console.log(i);
        }
    }, 1000);
    clearInterval(testing());
}



//clearInterval(intTest);


testing();*/
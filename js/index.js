//A variable to keep track of the current height of the menu_list display
let x = 0;

function toggleItemDisplay(idString) {
    const item = document.getElementById(idString);
    console.log(item.style.display);
    if (item.style.display === 'none') {
        item.style.display = 'flex';
    } else {
        item.style.display = 'none';
    }
}

/**
 * @description used to create an effect for the menu items to dynamically appear.
 * @returns an updated UI
 */

function showMenu() {
    let menuList = document.getElementById('mobile_menu_items');
    x = 0;
    scrollOut();
    toggleItemDisplay('menu_container');
    toggleItemDisplay('close_mobile_menu');
    menuList.style.display = 'flex';
}

function hideMenu() {
    let menuList = document.getElementById('mobile_menu_items');
    let nav = document.querySelector('navbar');
    menuList.style.display = 'none';
}

/**
 * @description this setInterval function will be used to create a scroll effect.
 * @returns an updated width for the menu items.
 */

const scrollOut = () => {
    let menuList = document.getElementById('mobile_menu_items');

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
    let menuList = document.getElementById('mobile_menu_items');

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
 * @description an event listener placed on the mobile_menu_items.
 * @returns hides the menu items if they are already being displayed.
 */

const menuItems = document.getElementById('mobile_menu_items');

menuItems.addEventListener('click', () => {

    const nav = document.querySelector('navbar');
    clearInterval(scrollOut);
    menuItems.style.display = 'none';
})

/**
 * @description creates a smooth scroll feature when a menu list item is clicked.
 * @returns navigates the user to the part of the document that they have chosen to go to.
 */

const scrollToSection = () => {

    const menuParent = document.getElementById('mobile_menu_items').children;

    const itemsParent = menuParent[0];

    const nav = document.querySelector('nav');

    for (let i = 0; i < itemsParent.children.length; i++) {
        itemsParent.children[i].addEventListener('click', (e) => {

            let targetId = e.target.textContent.split(" ");

            let targetElement = "";

            if (targetId.length > 1) {

                targetId = targetId[0].toLowerCase();

                targetElement = document.getElementById(targetId);

                targetElement.scrollIntoView({
                    behavior: "smooth"
                })

                showMenu();

            } else {
                targetId = targetId[0].toLowerCase();

                targetElement = document.getElementById(targetId);

                targetElement.scrollIntoView({ behavior: "smooth" });
                showMenu();
            }
        })
    }
}

scrollToSection();

//Array of values for the logos.
const logoArray = [{
        imgSrc: "/assets/images/logos/css-logo.png",
        altText: 'css logo',
        titleText: 'CSS Logo',
        text: 'CSS'
    },
    {
        imgSrc: "/assets/images/logos/express-black.png",
        altText: 'express logo',
        titleText: 'Express logo',
        text: 'Express'
    },
    {
        imgSrc: "/assets/images/logos/Git-Icon.png",
        altText: 'Git Icon',
        titleText: 'Git logo',
        text: 'Git'
    },
    {
        imgSrc: "/assets/images/logos/html-logo.png",
        altText: 'HTML logo',
        titleText: 'HTML logo',
        text: 'HTML'
    },
    {
        imgSrc: "/assets/images/logos/JavaScript-logo.png",
        altText: 'JavaScript logo',
        titleText: 'JavaScript logo',
        text: 'JavaScript'
    },
    {
        imgSrc: "/assets/images/logos/mongodb_logo.png",
        altText: 'MongoDB logo',
        titleText: 'MongoDB logo',
        text: 'MongoDB'
    },
    {
        imgSrc: "/assets/images/logos/mysql-logo.png",
        altText: 'MySQL logo',
        titleText: 'MySQL logo',
        text: 'MySQL'
    },
    {
        imgSrc: "/assets/images/logos/node-logo.png",
        altText: 'Node logo',
        titleText: 'Node logo',
        text: 'Node JS'
    },
    {
        imgSrc: "/assets/images/logos/php_logo.png",
        altText: 'PHP logo',
        titleText: 'PHP logo',
        text: 'PHP'
    },
    {
        imgSrc: "/assets/images/logos/react-icon.png",
        altText: 'React logo',
        titleText: 'React logo',
        text: 'React'
    },
    {
        imgSrc: "/assets/images/logos/typescript-logo-removebg-preview.png",
        altText: 'TypeScript logo',
        titleText: 'TypeScript logo',
        text: 'TypeScript'
    },

];

//Used to create the logo items
const renderLogos = () => {

    const parentContainer = document.getElementById('technical_skills_logos_wrapper');

    for (let i = 0; i < logoArray.length; i++) {

        let currentLogo = logoArray[i];
        let divWrapper = document.createElement('div');
        divWrapper.classList.add('logo_item');

        let newImage = document.createElement('img');
        newImage.src = currentLogo.imgSrc;
        newImage.title = currentLogo.titleText;
        newImage.alt = currentLogo.altText;
        newImage.classList.add('logo_image');

        let newParagraph = document.createElement('p');
        newParagraph.textContent = currentLogo.text;

        divWrapper.appendChild(newImage);
        divWrapper.appendChild(newParagraph);

        parentContainer.appendChild(divWrapper);

    }
}
renderLogos();
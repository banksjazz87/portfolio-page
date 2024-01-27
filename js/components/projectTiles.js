const projectsArray = [{
        title: "Shipping Application",
        description: "This is a full-stack CRUD web application that I created for my shipping job at Seneca Printing Express. I was able to expedite the shipping process by removing all redundancies in the process of creating: pack slips, carton labels, and skid tags.",
        image: "/assets/images/shippingCreatorImage.jpg",
        demoUser: "Demo",
        demoPassword: "demo123",
        tools: "React.js, MongoDB, Node.js, Express.js, React Router",
        activeWebpage: "https://www.shippingcreator.app/",
        githubRepo: "https://github.com/banksjazz87/label_creator"
    },
    {
        title: "Shipping Application",
        description: "This is a full-stack CRUD web application that I created for my shipping job at Seneca Printing Express. I was able to expedite the shipping process by removing all redundancies in the process of creating: pack slips, carton labels, and skid tags.",
        image: "/assets/images/shippingCreatorImage.jpg",
        demoUser: "Demo",
        demoPassword: "demo123",
        tools: "React.js, MongoDB, Node.js, Express.js, React Router",
        activeWebpage: "https://www.shippingcreator.app/",
        githubRepo: "https://github.com/banksjazz87/label_creator"
    },
    {
        title: "Shipping Application",
        description: "This is a full-stack CRUD web application that I created for my shipping job at Seneca Printing Express. I was able to expedite the shipping process by removing all redundancies in the process of creating: pack slips, carton labels, and skid tags.",
        image: "/assets/images/shippingCreatorImage.jpg",
        demoUser: "Demo",
        demoPassword: "demo123",
        tools: "React.js, MongoDB, Node.js, Express.js, React Router",
        activeWebpage: "https://www.shippingcreator.app/",
        githubRepo: "https://github.com/banksjazz87/label_creator"
    },
    {
        title: "Shipping Application",
        description: "This is a full-stack CRUD web application that I created for my shipping job at Seneca Printing Express. I was able to expedite the shipping process by removing all redundancies in the process of creating: pack slips, carton labels, and skid tags.",
        image: "/assets/images/shippingCreatorImage.jpg",
        demoUser: "Demo",
        demoPassword: "demo123",
        tools: "React.js, MongoDB, Node.js, Express.js, React Router",
        activeWebpage: "https://www.shippingcreator.app/",
        githubRepo: "https://github.com/banksjazz87/label_creator"
    },
];

function populateProjects() {
    const parentContainer = document.getElementById('projects_wrapper');

    for (let i = 0; i < projectsArray.length; i++) {
        let project = projectsArray[i];

        let card = document.createElement('card');
        card.classList.add('card_tile');

        //Append this to the parent container.
        let backgroundImage = document.createElement('div');
        backgroundImage.classList.add('project_pic');
        backgroundImage.style.backgroundImage = `url(${project.image})`;

        card.appendChild(backgroundImage);

        //Text links
        let textParent = document.createElement('div');
        textParent.classList.add('project_text_content');

        //Card title
        let cardTitle = document.createElement('h3');
        cardTitle.classList.add('card_title');
        cardTitle.textContent = project.title;
        textParent.appendChild(cardTitle);

        //Description heading
        let descriptionHeading = document.createElement('h4');
        descriptionHeading.classList.add('subheading');
        descriptionHeading.textContent = 'Description';
        textParent.appendChild(descriptionHeading);

        //Description text
        let description = document.createElement('p');
        description.textContent = project.description;
        textParent.appendChild(description);

        //Tools heading
        let toolsHeading = document.createElement('h4');
        toolsHeading.classList.add('subheading');
        toolsHeading.textContent = 'Tools used';
        textParent.appendChild(toolsHeading);

        //Tools text
        let toolsList = document.createElement('p');
        toolsList.textContent = project.tools;
        textParent.appendChild(toolsList);

        card.appendChild(textParent);


        //Project Links
        let projectLinksWrapper = document.createElement('div');
        projectLinksWrapper.classList.add('project_links');

        let webPageLink = document.createElement('a');
        webPageLink.classList.add('webpage');
        webPageLink.setAttribute('target', '_blank');
        webPageLink.setAttribute('href', project.activeWebpage);
        webPageLink.textContent = "Active Webpage";
        projectLinksWrapper.appendChild(webPageLink);

        let githubLink = document.createElement('a');
        githubLink.classList.add('github');
        githubLink.setAttribute('target', '_blank');
        githubLink.setAttribute('href', project.activeWebpage);
        githubLink.textContent = "Github Repository";
        projectLinksWrapper.appendChild(githubLink);

        card.appendChild(projectLinksWrapper);

        parentContainer.appendChild(card);

    }
}

populateProjects();
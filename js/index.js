//function to remove all of the child elements from the card elements.
const hideChildren = (parent, exception) => {

    const parents = document.querySelectorAll(parent);
    const keep = document.querySelectorAll(exception);

    for (let i = 0; i < parents.length; i++) {
        let currentItems = parents[i];

        for (let j = 0; j < currentItems.length; j++) {
            /*if (currentItems[j] !== exception) {
                //parents[i].removeChild(currentItems[j]);
                console.log(curr)
            }*/
            console.log(currentItems);
        }
    }
}

hideChildren('card', 'a');
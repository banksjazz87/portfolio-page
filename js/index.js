/*//function to remove all of the child elements from the card elements.
const hideChildren = (parent, exception) => {

    const parents = document.querySelectorAll(parent);
    const keep = document.querySelectorAll(exception);

    for (let i = 0; i < parents.length; i++) {
        let currentItems = parents[i];
<<<<<<< HEAD
        console.log(typeof(currentItems));
=======

        for (let j = 0; j < currentItems.length; j++) {
            /*if (currentItems[j] !== exception) {
                //parents[i].removeChild(currentItems[j]);
                console.log(curr)
            }*/
           // console.log(currentItems);
       /* }
>>>>>>> 3bf491dff593d7a5d26cf5431c2be1621ce2038c
    }
}

hideChildren('card', 'a');*/

let i = 0;

const testing = () => {
  setInterval(() => {
  if(i < 10){
    i++;
    console.log(i);
  }
  }, 1000);
  clearInterval(testing());
} 
  
  

//clearInterval(intTest);

  
testing();
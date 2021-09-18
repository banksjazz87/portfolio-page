let i = 0;

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


testing();
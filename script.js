

//Final roll
function roll(values, images) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    //PUSH is permanent add to array
}

//Stop for specific milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Need async because of stupid await delay
async function rollDice() {

    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];  //Stores final numbers
    const images = [];  //Stores final images
    const rollframes = Math.floor(Math.random() * 3) + 3; //Number of frames to cycle through before stopping

    for (let i=0; i<numDice; i++) {

        //Cycle through random faces for the current die
        for (let j=0; j<rollframes; j++) {
            const tempValue = Math.floor(Math.random() * 6) + 1;
            
            //Show rolling dice after previously rolled dice. JOIN is temporarily add to array
            diceImages.innerHTML = images.join('') + `<img src="dice_images/${tempValue}.png" alt="Dice ${tempValue}">`;
            
            await delay(120); //Delay between frames
        }

        roll(values, images); //Pick final face and add to number and image arrays
        diceImages.innerHTML = images.join(''); //Overwrite and show new final results
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
}








/*
Stable version 1



function rollDice() {

    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i=0; i<numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

}
*/



//Declaring variables
let messageNumber = document.getElementById('quantity');
let contentBox = document.getElementById('instructions');
const drawBtn = document.getElementById('draw-button');
const goBack = document.getElementById('back-button');

//Create an event listener for Draw button

drawBtn.addEventListener('click', () => {
    messageNumber.innerHTML = 'Message no: #';
    let message = document.createElement('h2');
    message.style = 'color: #001530; text-shadow: 2px 2px 5px #4200008c;';
    message.innerHTML = 'This will be the message drawn!';
    contentBox.innerHTML = '';
    contentBox.appendChild(message);
    drawBtn.style = 'display: none;';
    goBack.style = 'display: block;';
});


goBack.addEventListener('click', () => {
    messageNumber.innerHTML = '360 Draws';
    let afterMessage = document.createElement('h2');
    afterMessage.style = 'color: #001530; text-shadow: 2px 2px 5px #4200008c;';
    afterMessage.innerHTML = 'Do you wanna try another one?';
    contentBox.innerHTML = '';
    contentBox.appendChild(afterMessage);
    drawBtn.style = 'display: block;';
    goBack.style = 'display: none;';
})
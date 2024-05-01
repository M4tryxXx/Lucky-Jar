

//Global variables
let messageNumber = document.getElementById('quantity');
let contentBox = document.getElementById('instructions');
const drawBtn = document.getElementById('draw-button');
const goBack = document.getElementById('back-button');

//Used to save extracted data from local storage.
let retString;
let retArray;

//Used to store random number that we will use it to extract the random message.
let messageNum;

//Used to store the message in a variable.
let messageFinal;

//Used to store the number of messages left to draw.
let drawsLeft;

//Used to save messages indexes that has been drwan into an array so it will not be drwan again until all messages from the messages array has been drawn, bassically you will not see a message twice until all the messages from the messages array has been seen once.
let messagesDrawn;

//Used to convert the array containing messages indexes that has already been extracted and it is stored into an array into a string to be saved into local storage.
let string;

//Used to store messages into an array.
const messageList = [
    'Trust the wait, Embrace the uncerteinty, Enjoy the beauty of becoming!',
    'Wake up with Determination, Go to bed with Satisfaction!',
    'Your next chapter is going to be amazing!',
    "Old ways won't open newdoors!",
    'I can & I will, Watch me!',
    'One small positive change in the morning can change your whole day!',
    'My first blessing of the day, I woke up!',
    'You get in life what you have the courage to ask for!',
    'Just for the record, not all positive change feels positive in the beginnig!',
    "Don't downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny!",
    'When you focus on the good, the good gets better!',
    "If you believe it will work out, you`ll see opportunities. If you believe it won't, you will see obstacles!",
    'Do not ignore your own potential!',
    'Something wonderful is about to happen!',
    'Know your worth & then add tax!',
    'Today is a beautiful day and you will attract good things into your life!',
    'Do something today that your future self will thank you',
    'You are loved. You have purpose. You are a masterpiece. You are wonderfully made.',
    'Do not let fear Decide your future!',
    'Life is full of chalanges, seen and unseen. So to look and feel great, you must hold your head up each day and project your inner confidence!',
    'The secret to change is to focus all your energy not on fighting the old but on building the new!',
    'Look in the mirror. That`s your competition!',
    'Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you!',
    'It`s your life. Live it well!',
    'We tend to forget that happiness doesn`t come as a result of getting something we don`t have, but rather of recognising and appreciating what we do have!',
    'Happiness is free, sprinkle that stuff everywhere!',
    'Think positive, feel positive and positive things will happen!',
    'Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness comes from within!',
    'keep going! Keep growing!',
    'Someday everythingll make perfect sense. So for now, laugh at the confusion, smile through the tears and keep reminding yourself that everything happens for a reason!',
    'It`s kind of fun to do the impossible!',
    'The happiness of your life depends upon the quality of your thoughts!',
    'For every minute you are angry, you loose sixty seconds of happiness!',
    'When you are at peace you attract positive energy!',
    'Today I open my mind and my heart, I am allowing happiness to enter!',
    'It always seems imposible until it`s done!',
    'Always remember you are braver than you belive, stronger than you seem, smarter than you think and twice as beautiful as you`ve ever imagined!',
    'Change your thoughts and your whole world changes!',
    'You are the architect of your reality. You choose your thought, perceptions and your reaction to external forces!',
    'It is in your moments of decision that your destiny is shaped!',
    'Follow your bliss and the universe will open doors where there were only walls!',
    'Learn to enjoy every minute of your life, be happy now!',
    'As we work to create light for others, we naturally light our own way!',
    'Every dream begins with a dreamer!',
    'Logic will take you from A to B. Imagination will take you everywhere!',
    'The best way to predict the future is to invent it!',
    'Happiness can be found in the darkest of places, if only one remembers to turn on the light!',
    'A tiny change today brings a wonderfully different tommorow!',
    'The price of anything is the amount of life you exchange for it!',
    'One day can change everything!', 'You have to dream before your dreams can come true!',
    'Laughter is medicine!',
    'You might be worhless to one person but piceless to another. Never doubt your value!',
    'No matter what people tell you, Words and ideas can change the world!',
    'People are going to talk about you no matter what you do. So you might as well do whatever brings you joy and live your best life!',
    'A smile is a facelift everyone can afford!',
    'Forgiveness is a gift you give yourself!',
    'People who wonder if the glass is half full or half empty miss the point. The glass is refillable!'
];

/* , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];*/
//Getting the string with messages indexes that has been drawn and saved last time user drawn a message.
retString = localStorage.getItem("contentTotals");

//Converting the string containing messages indexes that has been already drawn and saved into local storage back to an array and assign it to messagesDrawn variable so the program knows what messages the user already drawn.
messagesDrawn = JSON.parse(retString);
//For first time use or when there is nothing in local storage.
if (messagesDrawn === null) {
    messagesDrawn = [];
}

//Function that take a random message, also checks if the message drawn has been drawn before, it will return a message that has not been drawn before, once all messages from the messagesList array has been returned it will reset.
const takeMessage = () => {
    //Getting a random number for use it to extract a random message from the list.
    messageNum = Math.floor(Math.random() * messageList.length);
    if (messagesDrawn.length === messageList.length - 1) {
        messagesDrawn = [];
    }
//Used to check if message has been returned before, if true it will draw another message and check again until the message drawn was not shaved before at which point it will be saved rerurned and pushed in drawn array.
    while (messagesDrawn.includes(messageNum) === true) {
        messageNum = Math.floor(Math.random() * messageList.length);
        //console.log(messageNum);
    }
    messagesDrawn.push(messageNum);
    
    return messageList[messageNum];

}

//Checking how many draws are left to be drawn by user.
drawsLeft = messageList.length - messagesDrawn.length + 1;
messageNumber.innerHTML = `Notes in the jar: ${drawsLeft} !`

//Create an event listener for Draw button

drawBtn.addEventListener('click', () => {
    drawsLeft = messageList.length - messagesDrawn.length;
    messageFinal = takeMessage();
    messageNumber.innerHTML = `Note no: ${messageNum}`;
    let message = document.createElement('h2');
    message.style = 'color: #001530; text-shadow: 2px 2px 5px #4200008c; text-style: italic;';
    message.innerHTML = messageFinal;
    contentBox.innerHTML = '';
    contentBox.appendChild(message);
    drawBtn.style = 'display: none;';
    goBack.style = 'display: block;';
    string = JSON.stringify(messagesDrawn);
    localStorage.setItem("contentTotals", string);
});


goBack.addEventListener('click', () => {
    messageNumber.innerHTML = `Notes in the jar: ${drawsLeft} !`;
    let afterMessage = document.createElement('h2');
    afterMessage.style = 'color: #001530; text-shadow: 2px 2px 5px #4200008c;';
    afterMessage.innerHTML = 'Do you wanna pull one more?';
    contentBox.innerHTML = '';
    contentBox.appendChild(afterMessage);
    drawBtn.style = 'display: block;';
    goBack.style = 'display: none;';
})

//messagesDrawn = messagesDrawn + retArray;



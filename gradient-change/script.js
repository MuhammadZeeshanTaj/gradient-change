// catch the targeted elements form the DOM:
const sendBtn = document.getElementById('sendBtn');
const messageInserted = document.getElementById('messageInserted');
const msgDisplay = document.getElementById('messageOut');
const body = document.getElementsByTagName('body')[0];

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];




sendBtn.addEventListener('click', displayMsg);

function displayMsg(){
    let content = messageInserted.value;
    if(content == ''){
        alert('Please Type a valid Message!!');
    }else{
        msgDisplay.innerHTML += `<p>${content}</p>`;
        messageInserted.value = '';
    }; 
    
    let code1 = '#';
    let code2 = '#';
    for(var i=0; i < 6;  i++){
        //get a rendom number for color:
    var random1 = Math.floor(Math.random() * hexNumbers.length);
    code1 += hexNumbers[random1];
    }; 

    for(var i=0; i < 6;  i++){
        //get a rendom number for color:
    var random2 = Math.floor(Math.random() * hexNumbers.length);
    code2 += hexNumbers[random2];
    }; 
    body.style.background = `linear-gradient(to right, ${code1}, ${code2})`;
    body.animate(
        [{opacity: 0.1},
        {opacity: 1.0}],{
            duration: 500,
            fill: 'forwards'
        }
    );
}

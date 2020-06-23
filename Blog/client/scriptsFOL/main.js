const getForm =  document.querySelector('#get-form');
const postForm =  document.querySelector('#post-form');

const postNameInput = document.querySelector('#post-name-input');
const postMessageInput = document.querySelector('#post-message-input');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const nameValue = postNameInput.value;
    const messageValue = postMessageInput.value;
    
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameValue,
            message: messageValue
        })
    })
})
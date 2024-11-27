const submit = async () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
   
    const data = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://bhu-haat-api.onrender.com/api/message', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            response.json()
            if (response.ok) {
                document.getElementById('modal_text').innerText = 'Success';
                document.getElementById('desc').innerText = 'Your message has been sent!';
            }
            else {
                document.getElementById('modal_text').innerText = 'Failed!';
                document.getElementById('desc').innerText = 'Invalid Data! Please try again.';
            }
        })
    return;
}

const submitEvent = () => {
    document.getElementById('submitButton').removeEventListener('click', submitEvent);
    submit()
    document.getElementById('modal').style.display = 'block'
    scrollTo(0, 0);
}

document.getElementById('submitButton').addEventListener('click', submitEvent);

document.getElementById('close').addEventListener('click', () => {
    location.reload();
})
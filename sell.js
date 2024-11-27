const submit = async () => {

    const Name = document.getElementById('name').value;
    const owner = document.getElementById('owner').value;
    const cost = document.getElementById('cost').value;
    const contact = document.getElementById('contact').value;
    const imageURL = document.getElementById('imageURL').value;

    const data = {
        name: Name,
        owner: owner,
        cost: cost,
        contact: contact,
        imageURL: imageURL,
    };

    fetch('https://bhu-haat-api.onrender.com/api/sell', {
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
                document.getElementById('desc').innerText = 'Your data has been submitted!';
            }
            else {
                document.getElementById('modal_text').innerText = 'Failed!';
                document.getElementById('desc').innerText = 'Invalid Data! Please try again.';
            }
        });
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
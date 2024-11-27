const submit = async () => {

    const Name = document.getElementById('name').value;
    const foundBy = document.getElementById('foundBy').value;
    const Location = document.getElementById('location').value;
    const contact = document.getElementById('contact').value;
    const imageURL = document.getElementById('imageURL').value;
    const content = document.getElementById('content').value;

    const data = {
        name: Name,
        foundBy: foundBy,
        location: Location,
        contact: contact,
        imageURL: imageURL,
        content: content
    };

    fetch('https://bhu-haat-api.onrender.com/api/lost', {
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
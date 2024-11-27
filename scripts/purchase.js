const showItem = (Item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    const img = document.createElement('img');
    img.src = Item.imageURL;
    img.classList.add('imageContainer');
    div.appendChild(img);
    props = ['name', 'owner', 'cost', 'contact'];
    propsTitle = ['Name', 'Owner', 'Cost', 'Contact'];
    for (let i = 0; i < props.length; i++) {
        div.innerHTML += `<p>${propsTitle[i]}: ${Item[props[i]]}<\p>`;
        div.innerHTML += '<br>'
    };
    const container = document.getElementById('container');
    container.appendChild(div);
}

const fetchLostItems = () => {
    fetch('https://bhu-haat-api.onrender.com/api/sell')
        .then(response => response.json())
        .then(data => data.map(Item => {
            showItem(Item);
        })
        )
}

fetchLostItems();

const search = (val) => {
    api = 'https://bhu-haat-api.onrender.com/api/sell';
    if (val != '') {
        api += `?name=${val}`
    }
    document.getElementById('container').innerHTML = '';
    fetch(api)
        .then(response => response.json())
        .then(data => data.map(Item => {
            showItem(Item);
        }));
}

document.getElementById('searchButton').addEventListener('click', () => {
    search(document.getElementById('searchBar').value)
});

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        document.getElementById('searchButton').click();
    }
})
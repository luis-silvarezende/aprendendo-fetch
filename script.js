function fetchAPI(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((data) => {
            const ul = document.querySelector('ul')

            data.map((item) => {
                const li = document.createElement('li')

                li.setAttribute('id', item.id)
                li.innerHTML = item.title;
                ul.appendChild(li)
            })
        })
}

function limpar(){
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
}
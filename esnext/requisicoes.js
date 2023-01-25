//https://jsonplaceholder.typicode.com/posts
// function clicou() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((data) => {
//             return data.json();//json() -> transforma um json em object
//         })
//         .then((data) => {
//             console.log(data)
//             alert(`Titulo do primeiro post: ${data[0].title}`)
//         })
//         .catch((error) => {
//             console.log('Deu problema' + error)
//         })
//         .finally(() => {
//             alert('Opa acabou tudo');//Certo ou errado será executado
//         })
// }
async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    alert(`Titulo do primeiro post: ${json[0].title}`);
    alert('CLICOU');
}

// document.querySelector('#botao').addEventListener('click', clicou)
// document.querySelector('#inserir').addEventListener('click', inserir)

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Título de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        }
    )
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json)
        })
        .catch((error) => {
            console.log('Erro: ' + error)
        })
}
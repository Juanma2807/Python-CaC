const contenido = document.querySelector('#card')

function empleados() {
    fetch('https://randomuser.me/api?results=500')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let empleadosExtranjeros = []
            for (let i = 0; i < response.results.length; i++) {
                if (response.results[i].location.country === 'India' || response.results[i].location.country === 'Australia' || response.results[i].location.country === 'Mexico' || response.results[i].location.country === 'Canada' || response.results[i].location.country === 'Serbia') {
                    empleadosExtranjeros.push(response.results[i])
                }
            }
            empleadosExtranjeros = empleadosExtranjeros.slice(0, 6)
            let contenidoHTML = ''

            for (let i = 0; i < empleadosExtranjeros.length; i++) {
                contenidoHTML += `
                    <div class="empleado">
                        <img src="${empleadosExtranjeros[i].picture.large}" width: 5rem height: 5rem>
                        <h4> ${empleadosExtranjeros[i].name.first} ${empleadosExtranjeros[i].name.last}</h4>
                        <h5> ${empleadosExtranjeros[i].location.country}</h5>
                        <h6> Contacto: <a href="${empleadosExtranjeros[i].email}" target="_blank">${empleadosExtranjeros[i].email}</a></h6>
                    </div>
                `
            }

            contenido.innerHTML = contenidoHTML
        })
}
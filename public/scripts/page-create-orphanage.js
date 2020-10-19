// create map
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 15)

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;


// create and and marker
map.on('click', (event) => {
    const lat  = event.latlng.lat;
    const lng  = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker);

    // add icon Layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
});


// adicioner o campo de fotos

function addPhotoField() {
    // pegar o container de fotos #imagens
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da ultma imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return;
    }
	
    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}


function deleteFiend(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new.upload');

    if(fieldsContainer.length <= 2) {
        span.parentNode.children[0].value = "";
        return ;
    }

    // deletar campo
    span.parentNode.remove();

}



// select yes or no
function toggleSelect(event) {

    // retirar a class .active (dos botes)
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

    // colocar  a class . active nesse clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o menu  input  hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}

function validate(event) {
    //validar se lat e lng estao preenchidos
    const verLatLng = document.querySelector('[name=lat]').value
    
    if(!verLatLng){
        event.preventDefault()
        alert("Selecione um ponto no mapa!")
    }
    
    
}
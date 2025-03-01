const xBTN = document.querySelector('#x-btn i');
const sideMenu = document.querySelector('#side-menu');

xBTN.addEventListener('click', ()=>{
    sideMenu.classList.toggle('hide');

    if(xBTN.classList.contains('bi-list')) {
        xBTN.classList.remove('bi-list');
        xBTN.classList.add('bi-x-circle-fill');
    } else{
        xBTN.classList.remove('bi-x-circle-fill');
        xBTN.classList.add('bi-list');
    }
});
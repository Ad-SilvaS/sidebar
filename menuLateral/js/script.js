const openBTN = document.querySelector('#open-btn i');
const sideMenu = document.querySelector('#side-menu');

openBTN.addEventListener('click', ()=>{
    sideMenu.classList.toggle('hide');

    if(openBTN.classList.contains('bi-arrow-right-square-fill')) {
        openBTN.classList.remove('bi-arrow-right-square-fill');
        openBTN.classList.add('bi-arrow-left-square-fill');
    } else{
        openBTN.classList.remove('bi-arrow-left-square-fill');
        openBTN.classList.add('bi-arrow-right-square-fill');
    }
});

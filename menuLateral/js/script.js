const sidebar = document.querySelector('#sidebar');
const openBtn = document.querySelector('#open-btn i');

openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('close');

    if(sidebar.classList.contains('close')){
        openBtn.classList.remove('bi-arrow-left-circle-fill');
        openBtn.classList.add('bi-arrow-right-circle-fill');
    } else{
        openBtn.classList.remove('bi-arrow-right-circle-fill');
        openBtn.classList.add('bi-arrow-left-circle-fill');
    }
})

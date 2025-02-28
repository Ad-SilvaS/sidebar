const openBTN = document.querySelector('#open-btn');

openBTN.addEventListener('click', ()=>{
    const sidebar = document.querySelector('#sidebar');

    sidebar.classList.toggle('open-sidebar');
});
console.log('hello')

const backBtn = document.getElementById('back-btn')

backBtn.addEventListener('click', ()=>{
    history.back()
})
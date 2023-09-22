const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
modalBtn.addEventListener("click",function(){
    // console.log(modalBtn.classList.contains("open-modal"))
    // if (modalBtn.classList.contains("open-modal")){
    //     modalOverlay.classList.remove("open-modal")
    // }else{
    //     modalOverlay.classList.add("open-modal")
    // }
    modalOverlay.classList.toggle("open-modal")
})
closeBtn.addEventListener("click",function(){
    modalOverlay.classList.remove("open-modal")
})
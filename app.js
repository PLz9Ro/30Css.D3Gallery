var images = document.querySelectorAll('.images img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__linner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery (){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }

    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }
    // dispaly
    galleryImg.src= images[currentIndex].src // gắn ảnh img = vị trí dc gắn
    gallery.classList.add('show') // add ảnh và show ra
}

// khai báo hàm index để đánh vị trí
images.forEach((item, index)=>{
    item.addEventListener('click',function()
    // line 11 ghe click 
    {
        currentIndex = index  //gắn index = vị trí đầu
        showGallery() 
    })   
    
})
  

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})
// tắt show 

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        // nếu núi tôi ấn == 27 '27 = escase' thì tắt show
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click',function(){
    if (currentIndex > 0 ){
        currentIndex --
        showGallery()
    }
})

prev.addEventListener('click',function(){
    if (currentIndex < images.length -1 ){
        currentIndex ++
        showGallery()
    }
})
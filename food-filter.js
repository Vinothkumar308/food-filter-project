const buttons = document.querySelectorAll("#buttons")
const search = document.querySelector("#search")
const images = document.querySelectorAll(".class")
const toggle = document.querySelector(".trible")
const options = document.querySelector(".options")
const body = document.querySelector("body")

toggle.addEventListener("click",()=>{
     options.classList.toggle("flex")
})
buttons.forEach((btn)=>{
     btn.addEventListener("click",()=>{
          if(body.clientWidth<=700){
             options.classList.toggle("flex")
          }
     })
})
search.addEventListener("keyup",(e)=>{
     let searched = e.target.value.toLowerCase().trim()
     images.forEach((img)=>{
          const selectedimg = img.dataset.item
          if(selectedimg.includes(searched)){
              img.style.display="block"
          }
          else{
               img.style.display="none"
          }
     })
     buttons.forEach((but)=>{
          but.classList.remove('btn-clicked')
     }) 
     buttons[0].classList.add('btn-clicked')
})

buttons.forEach((button)=>{
     button.addEventListener("click",(e)=>{
          e.preventDefault()
          setactivebtn(e)
          const filter = e.target.dataset.filter
          images.forEach((imge=>{
               if(filter=="all"){
                    imge.style.display="block"
               }
               else{
                    const box = imge.dataset.item
                    if(filter==box){
                         imge.style.display="block"
                    }
                    else{
                         imge.style.display="none"
                    }
               }
          }))
     })
})

function setactivebtn(e){
     buttons.forEach((but)=>{
          but.classList.remove('btn-clicked')
     })
     e.target.classList.add('btn-clicked')
}

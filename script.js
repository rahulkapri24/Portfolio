const filterButton = document.querySelector("#filterbtns").children;
const item=document.querySelector(".portfoliogallery").children;


for(let i=0;i<filterButton.length;i++){
   filterButton[i].addEventListener("click",function()
    {
       for(let j=0;j<filterButton.length;j++){
           filterButton[j].classList.remove("active") 
       }
       this.classList.add("active"); 
       const target=this.getAttribute("data-target")
       
       for(let k=0 ; k<item.length;k++){
           item[k].style.display="none";
           if(target==item[k].getAttribute("id"))
               {
                   item[k].style.display="block";
               }
           if(target=="all"){
              item[k].style.display="block";
              }
       }
       
   })
}



  window.onscroll= function(){
      const doScrollTop=document.documentElement.scrollTop;
      
      if(window.innerWidth>991){
          if(doScrollTop>100){
             document.querySelector("header").classList.add("fixed")
         }
         else {
             document.querySelector("header").classList.remove("fixed")
         }
    }
}

const navbar = document.querySelector(".navbar");
const b = navbar.querySelectorAll("#nav");

    b.forEach(function(element){
        element.addEventListener("click" , function(){
                for(let i=0 ;i<b.length ;i++){
                    b[i].classList.remove("active");
                }
            
                this.classList.add("active");
           
           
            
        })
    
             
    })

 
  
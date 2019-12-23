const app = document.getElementById('root')
var lastindex=10;
function ui(p){
    for(var i=0;i<10;i++){

      adddata(p[i])
    }
   }


window.onscroll=function(){
    if(window.scrollY+window.innerHeight>=document.body.scrollHeight)
    {
       
       if(lastindex>=100)
    
        load();
    
        nextdata();
    }
}


function nextdata() {  
    for(var next=lastindex;next<lastindex+10;next++)
    {
       adddata(p[next]);
    }
    lastindex+=10
   }


function adddata(megana)    
   {

          const card = document.createElement('div')
         card.setAttribute('class', 'card')
         if(megana.picture.large)
         {
           img=document.createElement('img');
           img.src = megana.picture.large;
           img.setAttribute('class','img')
           card.appendChild(img)
         }
         else{
           console.log("no image");
           const na=document.createElement('div');
           na.textContent=megana.name.first[0]+megana.name.last[0]
           na.setAttribute('class','na')
           card.appendChild(na)
         }

        
         const h1 = document.createElement('h1')
         h1.textContent = megana.name.title+megana.name.first+megana.name.last

         const h2 = document.createElement('h2')
         h2.textContent = megana.email

        
         app.appendChild(card)
         
         card.appendChild(h1)
         card.appendChild(h2)
    } 
 

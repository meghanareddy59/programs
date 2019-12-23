function ui(p){
       for(var i=0;i<p.length;i++){
         adddata(p[i])
       }
      }
      function adddata(db)    
      {

             const card = document.createElement('div')
            card.setAttribute('class', 'card')
            if(db.avatar)
            {
              img=document.createElement('img');
              img.src = db.avatar;
              img.setAttribute('class','img')
              card.appendChild(img)
            }
            else{
              console.log("no image");
              const na=document.createElement('div');
              na.textContent=db.first_name[0]+db.last_name[0]
              na.setAttribute('class','na')
              card.appendChild(na)
            }

           
            const h1 = document.createElement('h1')
            h1.textContent = db.first_name+" "+db.last_name;

            const h2 = document.createElement('h2')
            h2.textContent = db.email

           
            app.appendChild(card)
            
            card.appendChild(h1)
            card.appendChild(h2)
           } 
      
        }
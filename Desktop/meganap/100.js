var p;
function load() {
    url= "https://randomuser.me/api/?results=100";
    var request = new XMLHttpRequest()
    request.open('GET',url,true)
    request.onload = function() {
    var data = JSON.parse(this.response)
     p=data['results']
    if(p.length>0)
    {
    
      ui(p);
    }
    else
       alert("no data to show")
    
  }    
  request.send()
     
}
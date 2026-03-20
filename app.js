function login(){
 if(u.value==="admin" && p.value==="rennco123"){
  login.style.display="none";
  app.style.display="flex";
 } else alert("Wrong login");
}

function show(id){
 document.querySelectorAll('.main > div').forEach(d=>d.style.display='none');
 document.getElementById(id).style.display='block';
}

let jobs=[];

function addJob(){
 jobs.push({name:jn.value,address:ja.value,desc:jd.value});
 render();
}

function render(){
 jobList.innerHTML=jobs.map(j=>`<div class='card'><b>${j.name}</b><br>${j.address}<br>${j.desc}</div>`).join('');
 jobCount.innerText=jobs.length;
}

function addItem(){
 let d=document.createElement("div");
 d.innerHTML="<input placeholder='Description'><input placeholder='Qty'><input placeholder='Price'>";
 items.appendChild(d);
}

function genQuote(){
 quoteOut.innerHTML="<div class='card'>Quote ready</div>";
}

function genInvoice(){
 invOut.innerHTML="<div class='card'>Invoice ready</div>";
}

render();

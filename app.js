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
 jobs.push({name:jn.value,address:ja.value});
 render();
}

function render(){
 jobList.innerHTML=jobs.map(j=>`<div>${j.name} - ${j.address}</div>`).join('');
 stats.innerHTML="Jobs: "+jobs.length;
}

function addItem(){
 let d=document.createElement("div");
 d.innerHTML="<input placeholder='Desc'><input placeholder='Qty'><input placeholder='Price'>";
 items.appendChild(d);
}

function genQuote(){
 quoteOut.innerHTML="<div>Quote Generated</div>";
}

render();

let table=document.getElementById('Carttable');
function getIt(){
    
    var row=table.insertRow();
    var cell0=row.insertCell();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    newFunction(cell0,cell1, cell2, cell3, cell4, cell5);
}

function newFunction(cell0,cell1, cell2, cell3, cell4, cell5) {
    cell0.innerHTML=document.getElementById('Index').value;;
    cell1.innerHTML = document.getElementById('Name').value;
    cell2.innerHTML = document.getElementById('qty').value;
    cell3.innerHTML = document.getElementById('unit').value;
    cell4.innerHTML = document.getElementById('Dept').value;
    cell5.innerHTML = document.getElementById('Notes').value;
}

var $button=document.getElementById('increment-btn');
var $counter=document.getElementById('Index');
$button.addEventListener('click',function(){
    $counter.value=parseInt($counter.value)+1;
},false);

var $buttonClear=document.getElementById('Clear-btn');
$buttonClear.addEventListener('click',function(){
    $('#Carttable tr:gt(0)').remove();
})

// now=new Date();
// randomNum='Prd';
// randomNum+=Math.round(Math.random());
// // //randomNum+=now.getTime();
// window.onload=function(){
//     document.getElementById("Index").value='1';
//     // document.getElementById("Index").value='1';
// }


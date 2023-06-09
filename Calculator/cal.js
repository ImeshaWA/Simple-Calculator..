function add(){
    let fn = parseFloat(document.getElementById("fNumber").value);
    let sn = parseFloat(document.getElementById("sNumber").value);

    document.getElementById("answer").value= fn+sn ;  
}

function sub(){
    let fn = parseFloat(document.getElementById("fNumber").value);
    let sn = parseFloat(document.getElementById("sNumber").value);

    document.getElementById("answer").value= fn-sn ;  
}

function multy(){
    let fn = parseFloat(document.getElementById("fNumber").value);
    let sn = parseFloat(document.getElementById("sNumber").value);

    document.getElementById("answer").value= fn*sn ;  
}

function div(){
    let fn = parseFloat(document.getElementById("fNumber").value);
    let sn = parseFloat(document.getElementById("sNumber").value);

    document.getElementById("answer").value= fn/sn ;  
}

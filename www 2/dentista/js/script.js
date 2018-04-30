
function dropMenu(){
    var x = document.getElementById("dropClick");
    if(x.className === "nav"){
        x.className += " responsive";
    }else{
        x.className = "nav";
    }
}
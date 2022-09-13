function playMemoryGame(){
    if(document.getElementById('memorycircle').checked == true){
        $("#memory-play").attr("href", "memorycircle.html");
    } else if(document.getElementById('memorybutton').checked == true){
        $("#memory-play").attr("href", "memorybuttons.html");
    }
}
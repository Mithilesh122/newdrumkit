function handleClick()
{
    var InnerHtml=this.innerHTML;
    switch(InnerHtml)
    {
        case "w":var tom1=new Audio("sounds\\tom-1.mp3");
                 tom1.play();
                 break;
        case "a":var tom2=new Audio("sounds\\tom-2.mp3");
                 tom2.play();
                 break;
        case "s":var tom2=new Audio("sounds\\tom-3.mp3");
                 tom2.play();
                 break;  
        case "d":var tom2=new Audio("sounds\\tom-4.mp3");
                 tom2.play();
                 break;
        case "j":var tom2=new Audio("sounds\\snare.mp3");
                 tom2.play();
                 break; 
        case "k":var tom2=new Audio("sounds\\crash.mp3");
                 tom2.play();
                 break;  
        case "l":var tom2=new Audio("sounds\\kick-bass.mp3");
                 tom2.play();
                 break;                                                 
    }
    addAnimation(InnerHtml);
}
var x=document.querySelector(".set").querySelectorAll(".drum");
for(var i=0;i<x.length;i++)
{
    x[i].addEventListener("click",handleClick);
}

document.addEventListener("keypress",function(event){
    var key=event.key;
    switch(key)
    {
        case "w":var tom1=new Audio("sounds\\tom-1.mp3");
                 tom1.play();
                 break;
        case "a":var tom2=new Audio("sounds\\tom-2.mp3");
                 tom2.play();
                 break;
        case "s":var tom2=new Audio("sounds\\tom-3.mp3");
                 tom2.play();
                 break;  
        case "d":var tom2=new Audio("sounds\\tom-4.mp3");
                 tom2.play();
                 break;
        case "j":var tom2=new Audio("sounds\\snare.mp3");
                 tom2.play();
                 break; 
        case "k":var tom2=new Audio("sounds\\crash.mp3");
                 tom2.play();
                 break;  
        case "l":var tom2=new Audio("sounds\\kick-bass.mp3");
                 tom2.play();
                 break;                                                 
    }
    addAnimation(key);
});

function addAnimation(k)
{
var activButton=document.querySelector("."+k);
activButton.classList.add("pressed");
setTimeout(function(){
    activButton.classList.remove("pressed");
},100);
}

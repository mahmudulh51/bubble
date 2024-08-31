function bubbleCreate(){
    const bubble = document.createElement('div');
    bubble.classList.add("bubble");

    let size = Math.random() * 60 + 20 + "px";
    // Bubble 
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vh';
    bubble.style.animationDuration = Math.random() * 3 + 3 +'s';

    document.body.appendChild(bubble);
    setTimeout(()=>{
        bubble.remove();
    }, 5000)

}

setInterval(bubbleCreate, 500);
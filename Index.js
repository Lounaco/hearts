 const bodyEl = document.querySelector ("body")

 bodyEl.addEventListener("mousemove",(event)=> {
    const xPos = event.offsetX
    const yPos = event.offsetY
    const divEl = document.createElement("div");
    divEl.style.left = xPos + "px";
    divEl.style.top = yPos + "px";
    const size = Math.random()*100;
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    bodyEl.appendChild(divEl);
    setTimeout(()=>{
      divEl.remove();

    }, 5000)

 }
 )
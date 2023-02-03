 const bodyEl = document.querySelector ("body")

 bodyEl.addEventListener("mousemove",(event)=> {
    const xPos = event.offsetX
    const yPos = event.offsetY
    const divEl = document.createElement("div");
    divEl.style.left = xPos + "px";
    divEl.style.top = yPos + "px";
    bodyEl.appendChild(divEl);

 }
 )
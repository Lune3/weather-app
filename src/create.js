function createP(text = "",className = ""){
    const p = document.createElement("p");
    p.textContent = `${text}`;
    if(className !== "")
    p.className = `${className}`;
    return p;
}

function createH1(text = "",className = ""){
    const p = document.createElement("h1");
    p.textContent = `${text}`;
    if(className !== "")
    p.className = `${className}`;
    return p;
}

function createH2(text = "",className = ""){
    const p = document.createElement("h2");
    p.textContent = `${text}`;
    if(className !== "")
    p.className = `${className}`;
    return p;
}

function createimg(src){
    const img = new Image();
    img.src = src;
    return img;
}

function createDiv(className=""){
    const p = document.createElement("div");
    if(className !== "")
    p.className = `${className}`;
    return p;
}

export {createP, createH1,createimg,createH2,createDiv};
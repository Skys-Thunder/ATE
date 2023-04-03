i = document.getElementsByClassName("text-center");
m = ["gray", "brown", "green", "cyan", "blue", "yellow", "orange", "red"];
d = ["128,128,128,0.3", "128,64,0,0.3", "0,128,0,0.3", "0,192,192,0.3", "0,0,255,0.3", "192,192,0,0.3", "255,128,0,0.3", "255,0,0,0.3"];
for(c = 7;c < i.length;c++){
    r = i[c].children[3];
    if(!(r.innerText == "-")){
        r.style.background = (Math.floor(Number(r.innerText) / 400) >= 7) ? "rgba(255,0,0,0.3)" : `rgba(${d[Math.floor(Number(r.innerText) / 400)]})`;
    }
}

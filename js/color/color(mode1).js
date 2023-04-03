i = document.getElementsByClassName("text-center");
m = ["gray", "brown", "green", "cyan", "blue", "yellow", "orange", "red"];
for(c = 7;c < i.length;c++){
    r = i[c].children[3];
    if(!(r.innerText == "-")){
        r.className = (Math.floor(Number(r.innerText) / 400) >= 7) ? "user-red" : `user-${m[Math.floor(Number(r.innerText) / 400)]}`;
    }
}

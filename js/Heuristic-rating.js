async function accessgo(){
    var name = document.querySelectorAll(".username")[0].children[0];
    var res = await (await fetch(`https://atcoder.jp/users/${name.innerText}/history/json?contestType=heuristic`)).json();
    m = ["gray", "brown", "green", "cyan", "blue", "yellow", "orange", "red"];
    if(res.length==0) name.className="user-unrated"
    else name.className = (Math.floor(Number(res[res.length-1].NewRating) / 400) >= 7) ? "user-red" : (Number(res[res.length-1].NewRating)/400==0)?`user-unrated`:`user-${m[Math.floor(Number(res[res.length-1].NewRating) / 400)]}`;
}
accessgo();

function go(){
    async function test(){
        var name = document.querySelectorAll(".inner")[0].outerText;
        var htmls = new DOMParser();
        var res = await (await fetch(`https://atcoder.jp/users/${name}`)).text();
        var res = htmls.parseFromString(res,"text/html");
        return res.querySelector(".avatar").attributes.src.value;
    }
    var icon = document.querySelector(".header-mypage_btn");
    test().then((data) => icon.insertAdjacentHTML("afterbegin", `<img src="${data}" width="50" height="50" style="padding: 9px;border-radius: 50%;">`));
}

window.onload = go;
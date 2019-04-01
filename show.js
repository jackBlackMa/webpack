function show(content){
    document.querySelector("#app").innerHTML = `hello${content}`;
}

module.exports = show;
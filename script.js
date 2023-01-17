const img=document.getElementById("photo")
console.log(img)
let tab=["a.jpeg","b.jpeg","c.jpeg","d.jpeg"]
let count=0
function L(){
    count --
    if(count< 0)count=tab.length-1
    img.src=tab[count]   
}
function R(){
    count ++
    if(count> tab.length-1)  count=0
    img.src=tab[count]
}

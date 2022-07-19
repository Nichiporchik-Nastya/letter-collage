let dropdown = document.body.querySelector(".dropdown"),
wrapper = document.body.querySelector(".dropdown-wrapper"),
  listItems = document.body.querySelectorAll(".dropdown__item"),
    text = document.body.querySelector(".control-text"),
    list = document.body.querySelector(".dropdown__list");
// if(wrapper.classList.contains("closed"))
dropdown.addEventListener("click", ()=>{

  wrapper.classList.toggle("closed");

});
listItems.forEach((item)=>{
	item.addEventListener("click", ()=>{
    text.innerText = item.innerText;
    wrapper.classList.toggle("closed");
  })
});


var canvas = new fabric.Canvas('canvas');

let rect = new fabric.Rect({
  left: 150,
  top: 150,
  fill: 'red',
  width: 200,
  height: 200,
  angle: 45
});
let copy = new fabric.Text("letter collage", {selectable: false});
canvas.add(copy);
canvas.add(rect);

canvas.add(new fabric.IText("STRAIGHT\nOUTTA\n ", {textAlign: 'center', active: true}));
function getText() {
  alert(canvas.getObjects()[0].text);
}
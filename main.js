function changeColor(){
    let change = document.getElementsByClassName('change_color')[0];
    let body = document.body;
    if (change.style.backgroundColor === "black") {
        change.style.backgroundColor = "red";
      } else {
        change.style.backgroundColor = "coral";
      }
}


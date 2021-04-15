// let img = document.querySelector("h1");
// // console.log(img);
//  img.addEventListener("click", function(e){
//      console.log(e.target);
//  })

 function boxFlip() {
    let img = document.getElementById("mikey");
   // console.log(img);
    img.addEventListener("click", function(e){
       // img.style.background = "#f3f3f3 url('https://media.istockphoto.com/vectors/red-cross-mark-drawn-grunge-x-in-vector-vector-id1175729985?k=6&m=1175729985&s=612x612&w=0&h=F93m3QT3w2XmBiG6PeT7TnGn7ftKA7dSql7B6o1Nc5U=') no-repeat right top";
        
       console.log(e.target.childNode);
    })

}

boxFlip();
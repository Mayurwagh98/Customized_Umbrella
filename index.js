let pink_btn = document.querySelector(".pink").addEventListener("click", function(){

    document.querySelector(".image").src="./assessts/Pink umbrella.png"

    document.querySelector("#uploadButton").style.backgroundColor = "#d8348b"

    document.body.style.backgroundColor = "#FDCEDF"
})

let blue_btn = document.querySelector(".blue").addEventListener("click", function(){

    document.querySelector(".image").src="./assessts/Blue umbrella.png"

    document.querySelector("#uploadButton").style.backgroundColor = "#2eb3e5"

    document.body.style.backgroundColor = "#e6f6fc"
})

let yellow_btn = document.querySelector(".yellow").addEventListener("click", function(){

    document.querySelector(".image").src="./assessts/Yello umbrella.png"

    document.querySelector("#uploadButton").style.backgroundColor = "#fed247"

    document.body.style.backgroundColor = "#FFFFD0"
})

let upload_btn = document.getElementById("uploadButton").addEventListener("click", function() {
    document.getElementById("fileInput").click();
  });

let umbrellaFun = (item, bgc, bodycolor) =>{
  document.querySelector(".umbrella_image").src = `./assessts/${item}`
  document.querySelector(".custom-file-upload").style.backgroundColor = bgc
  document.body.style.backgroundColor = bodycolor
}

let pink_btn = document.querySelector(".pink").addEventListener("click", function(){
  umbrellaFun("Pink umbrella.png","#d8348b","#FDCEDF")
})

let blue_btn = document.querySelector(".blue").addEventListener("click", function(){
  umbrellaFun("Blue umbrella.png","#2eb3e5","#e6f6fc")
})

let yellow_btn = document.querySelector(".yellow").addEventListener("click", function(){
  umbrellaFun("Yello umbrella.png","#fed247","#FFFFD0")
})


let uploadLogo = document.getElementById('file-upload').addEventListener('change', function (e) {
          var file = e.target.files[0]; // Get the selected file
           
          var reader = new FileReader();
        
          let {name} = file // destructuring file name 
          
          reader.onload = function (event) {
            
            var image = new Image();
            image.src = event.target.result; // Set the source of the image to the uploaded file
            image.setAttribute("class","uploaded_image")
            image.onload = function () {
              document.getElementById('logo_div').innerHTML = ''; // Clear previous image
              document.getElementById('logo_div').appendChild(image); // Append the image to the logo_div element
            };
            document.querySelector(".display_file_name").textContent = name// displaying file name on button
          };
          
          setTimeout(() =>{
            reader.readAsDataURL(file); // Read the file as a data URL   
          },2000)
          
          let loader_icon_img = document.querySelector(".upload_icon_img")
          loader_icon_img.src = "./assessts/loader_icon.svg"
          loader_icon_img.setAttribute("class","loader_icon_img")
          
          let remove_span = document.createElement("span")
          remove_span.textContent = "X"
          remove_span.setAttribute("class", "remove_btn")
        
          document.querySelector(".custom-file-upload").append(remove_span)
          
            document.querySelector(".remove_btn").addEventListener("click", function(){
              let fileelement =  document.getElementById('logo_div')
              fileelement.remove()
              document.querySelector(".display_file_name").textContent = "upload logo"
              location.reload()
          })
  });


  
  
  



  
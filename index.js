
let pink_btn = document.querySelector(".pink").addEventListener("click", function(){
  
    document.querySelector(".umbrella_image").src = "./assessts/Pink umbrella.png"

    document.querySelector(".custom-file-upload").style.backgroundColor = "#d8348b"

    document.body.style.backgroundColor = "#FDCEDF"
})

let blue_btn = document.querySelector(".blue").addEventListener("click", function(){
 
    document.querySelector(".umbrella_image").src = "./assessts/Blue umbrella.png"

    document.querySelector(".custom-file-upload").style.backgroundColor = "#2eb3e5"

    document.body.style.backgroundColor = "#e6f6fc"
})

let yellow_btn = document.querySelector(".yellow").addEventListener("click", function(){
  
    document.querySelector(".umbrella_image").src = "./assessts/Yello umbrella.png"
    
    document.querySelector(".custom-file-upload").style.backgroundColor = "#fed247"

    document.body.style.backgroundColor = "#FFFFD0"
})


let uploadLogo = document.getElementById('file-upload').addEventListener('change', function (e) {

          var file = e.target.files[0]; // Get the selected file
           
          var reader = new FileReader();
        
          reader.onload = function (event) {
            var image = new Image();
            image.src = event.target.result; // Set the source of the image to the uploaded file
            image.setAttribute("class","uploaded_image")
            image.onload = function () {
              document.getElementById('logo_div').innerHTML = ''; // Clear previous image
              document.getElementById('logo_div').appendChild(image); // Append the image to the logo_div element
            };
          };
          
          setTimeout(() =>{
            reader.readAsDataURL(file); // Read the file as a data URL   
          },2000)
          
          let {name} = file // destructuring file name 

          let loader_icon_img = document.querySelector(".upload_icon_img")
          loader_icon_img.src = "./assessts/loader_icon.svg"
          loader_icon_img.setAttribute("class","loader_icon_img")
      
          document.querySelector(".display_file_name").textContent = name// displaying file name on button
          
        
            
  });

  
  
  



  
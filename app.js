document.getElementById("button1").addEventListener("click", getText);

//Get local Text File
function getText(){
  fetch("test.txt")
  .then(function(res){
    return(res.text());
  })
  .then(data =>{
    console.log(data);

    document.getElementById("output").innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  });
  
}

//Get local JSON File
document.getElementById("button2").addEventListener("click", getJSON);

function getJSON(){
  fetch("posts.json")
  .then(function(res){
    return(res.json())
  })
  .then(data =>{
    console.log(data);
    let output = "";
    data.forEach(post => {
      output += `<li> ${post.title}</li>`
    });
    document.getElementById("output").innerHTML = output;
    })
    .catch(err =>{
      console.log(err);
    });
  }

  //Get API Data
document.getElementById("button3").addEventListener("click", getExternal);
function getExternal(){
  fetch("https://api.github.com/users")
  .then(function(res){
    return(res.json());
  })
  .then(data =>{
    console.log(data);
    let output = "";
    data.forEach(user => {
      output += `<li> ${user.login}</li>`
    });
    document.getElementById("output").innerHTML = output;
    })
    .catch(err =>{
      console.log(err);
    });
  }

  


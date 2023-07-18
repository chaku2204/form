const url = "http://localhost:3000/api/data";

const actve = document.getElementsByClassName("active");
actve[0].classList.remove("active");

const temp = document.getElementsByClassName("nav-links");
const temp2 = temp[0].children;
temp2[1].getElementsByTagName('a')[0].classList.add("active");

let ele = document.getElementsByClassName("details");

const formdata = async(url)=>{
    try{
       const response = await fetch(url);
       const data = await response.json();
       for(let i = 0; i<data.length; i++){
          const name = document.createElement("li");
          const email = document.createElement("li");
          const userid = document.createElement("li");
          const mobile = document.createElement("li");
          name.innerText = data[i].name;
          ele[0].appendChild(name);

          email.innerText = data[i].email;
          ele[1].appendChild(email);

          userid.innerText = data[i].user;
          ele[2].appendChild(userid);

          mobile.innerText = data[i].mobile;
          ele[3].appendChild(mobile);

          
        

       }
    }catch(e){
       console.error(e);
    }
}
formdata(url);
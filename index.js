const form = document.getElementById('form');
const name= document.getElementById("name");
const age= document.getElementById("age");
const hidden = document.getElementById("section-hidden");
const formArea =document.getElementById("form-section")




function section(){
    if(form){
        formArea.hidden = true
        hidden.hidden = false
    }

}






form.addEventListener('submit', function(event) {
     event.preventDefault();

     console.log("Form submitted");

     console.log(name.value);
     console.log(age.value);



     localStorage.setItem("name", name.value);
     localStorage.setItem("age", age.value);


     const savedName = localStorage.getItem("name");
     const savedAge = localStorage.getItem("age");

     



     
});
 function years_Old(){
    if(age>=18) {
        ("You can access adult content");
    }
    else{
        console.log("You are too young for adult content")
    }
 } 








function  rainingDay(){
    if(raining) {
        console.log("carry umbrella");

    }
      else{
        console.log("dont carry umbrella")
      }  
}
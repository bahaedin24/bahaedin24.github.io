
//a) initialize paroller.js 
$('.my-paroller').paroller();  

//b) initialize paroller.js and set attributes 
$(".jumbotron1").paroller({ factor: 0.3, factorXs: 0.1, factorSm: 0.1, type: 'foreground', direction: 'vertical',    transition: 'translate 0.4s ease' });  

document.getElementById("devis").addEventListener("submit", function(event) {
    event.preventDefault();
    var nom = this.elements["nom"].value;
    var prenom = this.elements["prenom"].value;
    var email = this.elements["email"].value;
    var tel = this.elements["tel"].value;
    var devis = this.elements["devis"].value;

    if ((nom == "")||(nom.toUpperCase() == nom.toLowerCase())) {
      // Allow form submission
      this.querySelector(".the_alert1").classList.remove("invisible")
      this.querySelector(".the_alert1").classList.add("visible")

      event.preventDefault();
    } 
    
    if  ((prenom == "")||(prenom.toUpperCase() == prenom.toLowerCase())) {
        // Allow form submission
        this.querySelector(".the_alert2").classList.remove("invisible")
        this.querySelector(".the_alert2").classList.add("visible")
  
        event.preventDefault();
      } 
      if((email)||(email.indexOf("@")==-1)||(email.length<6)){
        this.querySelector(".the_alert3").classList.remove("invisible")
        this.querySelector(".the_alert3").classList.add("visible")
  
        event.preventDefault();
      }

      if ((tel.length!=8)||(tel.toUpperCase() != tel.toLowerCase())){
        this.querySelector(".the_alert4").classList.remove("invisible")
        this.querySelector(".the_alert4").classList.add("visible")
  
        event.preventDefault();
      }

      if  ((devis == "")||(devis.toUpperCase() == devis.toLowerCase())) {
        // Allow form submission
        this.querySelector(".the_alert5").classList.remove("invisible")
        this.querySelector(".the_alert5").classList.add("visible")
  
        event.preventDefault();
      } 
      
    else{
        this.submit();
    }
    
      // Display an error message or perform other actions
    
 

   

    
    
  });

  document.getElementById("devis").addEventListener("reset", function(event) {
    this.querySelector(".the_alert1").classList.remove("visible")
    this.querySelector(".the_alert1").classList.add("invisible")
    this.querySelector(".the_alert2").classList.remove("visible")
    this.querySelector(".the_alert2").classList.add("invisible")
    this.querySelector(".the_alert3").classList.remove("visible")
    this.querySelector(".the_alert3").classList.add("invisible")
    this.querySelector(".the_alert4").classList.remove("visible")
    this.querySelector(".the_alert4").classList.add("invisible")
    this.querySelector(".the_alert5").classList.remove("visible")
    this.querySelector(".the_alert5").classList.add("invisible")

  });

  


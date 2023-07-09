var content = document.querySelector(".nav_container");
var content2 = document.querySelector("#expandable-menu");

var scrollThreshold = window.innerHeight * 0.03;
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > scrollThreshold) {
    content.classList.add("md:bg-white");
    content.classList.add("nav_shadow");
    content.classList.add("md:h-[10%]");
    
    content.classList.remove("md:top-[7vh]");
    content.classList.remove("top-[5vh]");
    content.classList.add("top-0");
    content2.classList.remove("top-[10vh]");
    content2.classList.add("top-[9vh]");

  
  } else {
    content.classList.remove("md:bg-white");
    content.classList.remove("nav_shadow");
    content.classList.remove("md:h-[10%]");
    content.classList.remove("top-0");
    content.classList.add("md:top-[7vh]");
    content.classList.add("top-[5vh]");
    content2.classList.add("top-[12vh]");
    content2.classList.remove("top-[9vh]");

  }
});

document.getElementById("devis").addEventListener("submit", function (event) {
  event.preventDefault();
  var nom = this.elements["nom"].value;
  var prenom = this.elements["prenom"].value;
  var email = this.elements["email"].value;
  var tel = this.elements["tel"].value;
  var devis = this.elements["devis"].value;

  if (nom == "" || nom.toUpperCase() == nom.toLowerCase()) {
    // Allow form submission
    this.querySelector(".the_alert1").classList.remove("invisible");
    this.querySelector(".the_alert1").classList.add("visible");

    event.preventDefault();
  }

  if (prenom == "" || prenom.toUpperCase() == prenom.toLowerCase()) {
    // Allow form submission
    this.querySelector(".the_alert2").classList.remove("invisible");
    this.querySelector(".the_alert2").classList.add("visible");

    event.preventDefault();
  }
  if (email || email.indexOf("@") == -1 || email.length < 6) {
    this.querySelector(".the_alert3").classList.remove("invisible");
    this.querySelector(".the_alert3").classList.add("visible");

    event.preventDefault();
  }

  if (tel.length != 8 || tel.toUpperCase() != tel.toLowerCase()) {
    this.querySelector(".the_alert4").classList.remove("invisible");
    this.querySelector(".the_alert4").classList.add("visible");

    event.preventDefault();
  }

  if (devis == "" || devis.toUpperCase() == devis.toLowerCase()) {
    // Allow form submission
    this.querySelector(".the_alert5").classList.remove("invisible");
    this.querySelector(".the_alert5").classList.add("visible");

    event.preventDefault();
  } else {
    this.submit();
  }

  // Display an error message or perform other actions
});

document.getElementById("devis").addEventListener("reset", function (event) {
  this.querySelector(".the_alert1").classList.remove("visible");
  this.querySelector(".the_alert1").classList.add("invisible");
  this.querySelector(".the_alert2").classList.remove("visible");
  this.querySelector(".the_alert2").classList.add("invisible");
  this.querySelector(".the_alert3").classList.remove("visible");
  this.querySelector(".the_alert3").classList.add("invisible");
  this.querySelector(".the_alert4").classList.remove("visible");
  this.querySelector(".the_alert4").classList.add("invisible");
  this.querySelector(".the_alert5").classList.remove("visible");
  this.querySelector(".the_alert5").classList.add("invisible");
});

window.addEventListener("load", function () {
  var element = document.querySelector(".need_animation1");
  element.classList.add("satisfaction");
});

const observer00 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("shhow00");
      }, index * 200); // Multiply index by 200ms (0.2s)
    }
  });
});

const observer0 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shhow0");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shhow");
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("shhow2");
      }, index * 200); // Multiply index by 200ms (0.2s)
    }
  });
});
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shhow3");
    }
  });
});
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shhow4");
    }
  });
});
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shhow5");
    }
  });
});

const hiddenElements00 = document.querySelectorAll(".hiddden00");
hiddenElements00.forEach((ee) => {
  observer00.observe(ee);
});
const hiddenElements0 = document.querySelectorAll(".hiddden0");
hiddenElements0.forEach((e) => {
  observer0.observe(e);
});

const hiddenElements = document.querySelectorAll(".hiddden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
const hiddenElements2 = document.querySelectorAll(".hiddden2");
hiddenElements2.forEach((ell) => {
  observer2.observe(ell);
});

const hiddenElements3 = document.querySelectorAll(".hiddden3");
hiddenElements3.forEach((elll) => {
  observer3.observe(elll);
});

const hiddenElements4 = document.querySelectorAll(".hiddden4");
hiddenElements4.forEach((ellll) => {
  observer4.observe(ellll);
});
const hiddenElements5 = document.querySelectorAll(".hiddden5");
hiddenElements5.forEach((elllll) => {
  observer5.observe(elllll);
});

function handleDivClick(c) {
  const content = [
    '<div class=" col-span-2  flex  justify-center items-center  relative"><div class=" h-2/3 flex flex-col justify-around items-center ">  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-quote absolute top-2 left-2 quote  md:w-16 md:h-16 h-10 w-10" viewBox="0 0 16 16">    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>  </svg>  <img src="./images/K.png" class="w-full h-2/4 object-contain" alt=""><span class="service title md:text-3xl text-xs h-1/4">khadija rabei</span></div></div><div class="col-span-4  flex flex-col justify-center items-center relative">  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-quote absolute bottom-2 right-2 quote transform rotate-180  md:w-16 md:h-16 h-10 w-10" viewBox="0 0 16 16">    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>  </svg>  <div class="  mx-auto w-10/12   md:text-2xl text-xs service "> Très professionnel,nous avons eu un problème de batterie à l\'hôtel ,mon mari a trouvé son numéro sur internet et il était là très rapidement  Un grand merci </div>  <div class=" mt-5 mx-auto w-10/12 flex justify-content-around  ">    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill  text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>  </div></div>',
    '<div class=" col-span-2  flex  justify-center items-center  relative"><div class=" h-2/3 flex flex-col justify-around items-center ">  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-quote absolute top-2 left-2 quote  md:w-16 md:h-16 h-10 w-10" viewBox="0 0 16 16">    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>  </svg>  <img src="./images/M.png" class="w-full h-2/4 object-contain" alt=""><span class="text-center service title md:text-xl text-xs h-1/4">Mohamed Aouled Si Hassen</span></div></div><div class="col-span-4  flex flex-col justify-center items-center relative">  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-quote absolute bottom-2 right-2 quote transform rotate-180  md:w-16 md:h-16 h-10 w-10" viewBox="0 0 16 16">    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>  </svg>  <div class="  mx-auto w-10/12   md:text-2xl text-sm service ">Service rapid et professioneli </div>  <div class=" mt-5 mx-auto w-10/12 flex justify-content-around  ">    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill  text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-gray-300 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>  </div></div>',
    '<div class=" col-span-2  flex  justify-center items-center  relative"><div class=" h-2/3 flex flex-col justify-around items-center ">  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-quote absolute top-2 left-2 quote  md:w-16 md:h-16 h-10 w-10" viewBox="0 0 16 16">    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>  </svg>  <img src="./images/A.png" class="w-full h-2/4 object-contain" alt=""><span class="service title md:text-3xl text-xs h-1/4">Atef Benjloud</span></div></div><div class="col-span-4  flex flex-col justify-center items-center relative">  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-quote absolute bottom-2 right-2 quote transform rotate-180  md:w-16 md:h-16 h-10 w-10" viewBox="0 0 16 16">    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>  </svg>  <div class="  mx-auto w-10/12   md:text-2xl text-sm service ">bon services</div>  <div class=" mt-5 mx-auto w-10/12 flex justify-content-around  ">    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill  text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-yellow-500 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-star-fill text-gray-300 md:h-8 md:w-8 w-3 h-3 " viewBox="0 0 16 16">      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>    </svg>  </div></div>',
  ];
  const elements = document.querySelectorAll(".temoign");
  elements.forEach((element) => {
    element.classList.remove("bg-gray-100");
  });

  const clickedDiv = document.getElementById("temoign" + c);
  console.log(clickedDiv.classList);
  clickedDiv.classList.add("bg-gray-100");
  document.querySelector(".grand_temoign").innerHTML = content[c - 1];
}

window.addEventListener("DOMContentLoaded", function () {
  var tickerTitle = document.querySelector(".ticker-title");
  var alfa = document.querySelector(".alfa");

  var tickerTitleWidth = tickerTitle.offsetWidth;
  var alfaWidth = tickerNews.offsetWidth;

  var duration = alfaWidth / 100;

  tickerTitle.style.width = tickerTitleWidth + alfaWidth + "px";
  alfa.style.animationDuration = duration + "s";
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.style.opacity = "0";
  });

  const options = {
    rootMargin: "-50px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transition = "opacity 0.3s ease-in";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

const mobileMenuButton = document.getElementById("mobile-menu-button");
const expandableMenu = document.getElementById("expandable-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

mobileMenuButton.addEventListener("click", () => {
  expandableMenu.classList.toggle("hidden");
  expandableMenu.classList.add("anim");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

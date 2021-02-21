
$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click( ()=> {   
        $nav.toggleClass('collapse');
    })
    AOS.init();
});


// /---------------------email--------------------/
function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }
  
  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }
  
  function ajax(method, url, data, success) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        // success(xhr.response, xhr.responseType);
        

        
        xhr.response;
        xhr.responseType;
      }
    };
    xhr.send(data);
  }
  
  let form = document.getElementById("my-form");
  let status = document.getElementById("status");
  let sub = document.querySelector("input[name=submit]")
  sub.addEventListener("click", (e) => {
    let fname = document.getElementById("fname"),
      lname = document.getElementById("lname"),
      em = document.getElementById("em");
      
    if (fname.value.length != 0 || lname.value.length != 0) {
      e.preventDefault();
      console.log("full");
      var data = new FormData(form);
      
      ajax(form.method, form.action, data);
      
        status.classList.add("success");
        status.innerHTML = "Thanks!";
        form.reset();
        setTimeout(()=>{
          window.location.reload();
        },2000);
        

    }
    else {
      e.preventDefault();
      // error();
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
      console.log("empty");
      setTimeout(()=>{
        window.location.reload();
      },3000);
      

    }
    console.log(fname.value.length);
  })
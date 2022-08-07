document.querySelector('.tugma').addEventListener('click', function(){
    var ekran =  document.querySelector('.ekran');
    console.log (typeof parseInt(ekran. value));
    ekran.value = parseInt(ekran. value)+1;
  });

  document.querySelector('.nolga').addEventListener('click', function(){
    document.querySelector('.ekran'). value=0;


  })

  if("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("/serviceWorker.js")
    })
};
// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let button = document.querySelector('#save_lincoln')
let input = document.querySelector('#interval')

function fadeOutEffect(num) {
  var fadeTarget = document.getElementById("foreground");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        console.log("part 1")
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        console.log("part 2")
          fadeTarget.style.opacity -= .1;
      } else {
        console.log("part 3")
        clearInterval(fadeEffect);
      }
      console.log("part 4")
  }, num);
}
button.addEventListener('click', function(e) {
  if (input.value !== "") {
    fadeOutEffect(parseInt(input.value)/10)
  }
  
});

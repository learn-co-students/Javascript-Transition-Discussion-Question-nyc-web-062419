// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const foreground = document.querySelector('#foreground')
const intervalForm = document.querySelector('#interval')
const button = document.querySelector('#save_lincoln')

function saveLincoln (interval) {
  console.log(interval)
  if (isNaN(interval)) {
      interval = 10000
      console.log("test")
    }
  fadeOutEffect(foreground, interval)
}

function getValue() {
  return parseInt(intervalForm.value)
}

function fadeOutEffect(fadeTarget, interval) {
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, interval/10);
}

button.addEventListener("click", (event)=>saveLincoln(getValue()))





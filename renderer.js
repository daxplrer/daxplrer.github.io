var sectionduration = 5000
var issleep = false
const progressBar = document.getElementById("smoothProgressBar");
const jqprog = $(document.querySelector('.progress'))
$(jqprog).animate({opacity:100}, 'fast', 'linear')
document.addEventListener('sleep', ()=>{issleep=true})
document.addEventListener('wake', ()=>{
  issleep=false
  $('#maintitle').empty().append('<code>hey, you opened this tab again!</code>')
  setTimeout(()=>{
    $('#maintitle').empty().append('<code>daxplrer</code>')
  }, 3000)
})
var objcount = $('.sectioncontainer').children('.section').length;
var cachedVar = 0;
window.ismobile = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
var needtoshow = false
function runprogbar(){
  if (issleep) return
  if (clickedUsingGesture) {
    needtoshow = true
    $(jqprog).animate({opacity:0}, 'fast', 'linear')
    return
  } 
  if (needtoshow) {
    $(jqprog).animate({opacity:100}, 'fast', 'linear')
    needtoshow = false
  }
  const duration = sectionduration; // 5 seconds in milliseconds
  const interval = 10; // Update the progress every 10 milliseconds
  const increment = (interval / duration) * 200;

  let currentProgress = 0;
  const updateProgressBar = () => {
      if (issleep || clickedUsingGesture) return
      currentProgress += increment;
      progressBar.style.width = currentProgress + "%";
      if (currentProgress < 100) {
          requestAnimationFrame(updateProgressBar);
      } 
  };

  requestAnimationFrame(updateProgressBar);
}
const sectionopt = [
  ['Visit my GitHub', 'section1.png', 'https://github.com/daxplrer', ''],
  ['Follow me on Instagram!', 'section2.png', 'https://instagram.com/daxplrer.public'],
  ['Chat me in discord', 'section3.png', 'https://discordapp.com/users/999863217557880842'],
  ['i do shitpost too', 'section4.png', 'https://instagram.com/daxplrer.public']
];
var showedsection = 0;
var firstboot = true;
var countedelem = 0;
var sectionHighlightOnRun = false;
var clickedUsingGesture = false

function setInfo(elem) {
  $('#sectioninfo').fadeOut('slow', 'linear', () => {
    $('#sectioninfo').empty().append(`<code>${sectionopt[$(elem).data('sectionnum') || 0][0]}</code>`);
    $('#sectioninfo').fadeIn('fast');
  });
}
$('.sectioncontainer').children('.section').each((i, section) => {
  $(section).data('sectionnum', i); // Use .data() to set and retrieve data attributes
  if ($(section).hasClass('active')) {
    showedsection = i;
    countedelem = i;
    setInfo(section);
  }
  $(section).css({ 'background': `url(./assets/images/${sectionopt[$(section).data('sectionnum') || 0][1] || 'default.jpg'})` });
  $(section).on('changesection', function(){
    const sectionNum = i;
    $('.sectioncontainer').children('.section').each((i, section1) => {
        $(section1).animate({ 'border-radius': '20vh', opacity: 10 }, 0.3)
          .addClass("others")
          .removeClass("active");
      });
      $(section).removeClass("others").addClass("active")
        .animate({ 'border-radius': '10px', opacity: 100 }, 0.3, 'linear', ()=>{runprogbar()});
      showedsection = sectionNum;
      setInfo(section);
  })
  $(section).on("click", function(){
    clickedUsingGesture = true
    const sectionNum = i
    if (cachedVar === sectionNum) {
      window.location.assign(sectionopt[sectionNum][2]);
    } else {
      cachedVar = sectionNum;
      $(section).trigger('changesection')
    }
  });

  if (!$(section).hasClass('active')) {
    $(section).css('border-radius', 40)
      .animate({ 'border-radius': '20vh', opacity: 10 }, 0.3);
  } else {
    $(section).animate({ 'border-radius': '10px', opacity: 100 }, 0.3, 'linear', ()=>{runprogbar()});
  }
});

var counter = 1
function loopStep() {
  const expectedelem = $('.sectioncontainer').children('.section')[counter]
  sectionHighlightOnRun = true;
  if (!clickedUsingGesture) {
    $(expectedelem).trigger('changesection');
    cachedVar = counter
  counter++
  if (counter>objcount-1){
     counter = 0
     clickedUsingGesture = false
  }
  } else {
    counter = showedsection
    clickedUsingGesture = false
  }
}

const interval = setInterval(loopStep, sectionduration);
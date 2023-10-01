var objcount = $('.sectioncontainer').children('.section').length;
var cachedVar = 0;
const sectionopt = [
  ['Visit my GitHub', 'section1.png', 'https://github.com/daxplrer'],
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
    const sectionNum = $(section).data('sectionnum') || 0;
    $('.sectioncontainer').children('.section').each((i, section1) => {
        $(section1).animate({ 'border-radius': '20vh', opacity: 10 }, 0.3)
          .addClass("others")
          .removeClass("active");
      });
      $(section).removeClass("others").addClass("active")
        .animate({ 'border-radius': '10px', opacity: 100 }, 0.3);
      showedsection = sectionNum;
      setInfo(section);
  })
  $(section).on("click", function(){
    clickedUsingGesture = true
    const sectionNum = $(section).data('sectionnum') || 0;
    if (cachedVar === sectionNum) {
      window.location.assign(sectionopt[sectionNum][2]);
    } else {
      $(this).trigger('changesection')
    }
    cachedVar = sectionNum;
  });

  if (!$(section).hasClass('active')) {
    $(section).css('border-radius', 40)
      .animate({ 'border-radius': '20vh', opacity: 10 }, 0.3);
  } else {
    $(section).animate({ 'border-radius': '10px', opacity: 100 }, 0.3);
  }
});

var counter = 1
function loopStep() {
  sectionHighlightOnRun = true;
  console.log(countedelem, showedsection, objcount);
  if (!clickedUsingGesture) {
    $($('.sectioncontainer').children('.section')[counter]).trigger('changesection');
  counter++
  if (counter>objcount-1){
     counter = 1
  }
  } else {
    counter = showedsection
    clickedUsingGesture = false
  }
}

const interval = setInterval(function () {
    loopStep();
}, 7000);

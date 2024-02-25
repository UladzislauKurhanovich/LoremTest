var rangeSlider = function() {
  var sliders = document.querySelectorAll('.range-slider');
  
  sliders.forEach(function(slider) {
    var range = slider.querySelector('.range-slider__range');
    var value = slider.querySelector('.range-slider__value');

    var values = slider.querySelectorAll('.range-slider__value');
    values.forEach(function(val) {
      var valValue = val.previousElementSibling.getAttribute('value');
      if (valValue !== null) val.innerHTML = valValue;
    });

    range.addEventListener('input', function() {
      if (this.value !== undefined) value.innerHTML = `${this.value}%`;
    });
  });
};
  
rangeSlider();

function setup() {
    document.getElementById('buttonid').addEventListener('click', openDialog);
    function openDialog() {
        document.getElementById('fileid').click();
    }
    document.getElementById('fileid').addEventListener('change', submitForm);
    function submitForm() {
        document.getElementById('formid').submit();
    }
}

setup();
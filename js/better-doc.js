var apiKey = require('./../.env').apiKey;

Doctor = function(){
}

Doctor.prototype.getDoctor = function(symptom, city, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=' + city + '&skip=0&limit=25&user_key=' + apiKey).then(function(response) {
    displayDoctors(response)
  })
  .fail(function(error) {
    $('.showDocs').text(error.responseJSON.message);
  });
}

exports.doctorModule = Doctor;

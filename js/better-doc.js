var apiKey = require('./../.env').apiKey;

Doctor = function(){
}

Doctor.prototype.getDoctor = function(city, symptom) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + city + '&skip=0&limit=10&user_key=' + apiKey)
    .then(function(response) {
      // displayDoctors(response)
      console.log(response);
    $('.showDocs').text(response);
  })
  .fail(function(error) {
    $('.showDocs').text(error.responseJSON.message);
  });
}

exports.doctorModule = Doctor;

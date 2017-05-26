var Doctor = require('./../js/better-doc.js').doctorModule;

var displayDoctors = function(response) {
  response.data.forEach(function(doctor) {
    $('.showDocs').append(`<li>Doctor: ${doctor.practices[0].name}</li>`);

  });
};

$(document).ready(function() {
  $('#locate').click(function() {
    var currentDoctorObject = new Doctor();
    var city = $("#city").val();
    var symptom = $("#symptom").val();
    currentDoctorObject.getDoctor(city, symptom, displayDoctors);
  });
});

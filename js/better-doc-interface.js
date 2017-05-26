var Doctor = require('./../js/better-doc.js').doctorModule;

var displayDoctors = function(response) {
  response.practices.forEach(function(doctor) {
    $('.showDocs').append(`<li>Location:${practice.location_slug}</li>`)
  });
};

$(document).ready(function() {
  $('#locate').click(function() {
    var currentDoctorObject = new Doctor();
    var city = $("#city").val();
    var symptom = $("#symptom").val();
    currentDoctorObject.getDoctors(city, displayDoctors);
  });
});

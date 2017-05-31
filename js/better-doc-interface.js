var Doctor = require('./../js/better-doc.js').doctorModule;

var displayDoctors = function(response) {
  response.data.forEach(function(doctor) {
    $('.showDocs').append(`<li><b>Dr.</b> ${doctor.practices[0].name}</li><li><b>Specialty:</b> ${doctor.specialties[0].actor}</li><li><b>Bio:</b> <em>${doctor.profile.bio}</em></li><br>`);
  });
};

$(document).ready(function() {
  $('#locate').click(function() {
    var currentDoctorObject = new Doctor();
    var city = $("#city").val();
    var symptom = $("#symptom").val();
    currentDoctorObject.getDoctor(symptom, city, displayDoctors);
  });
});

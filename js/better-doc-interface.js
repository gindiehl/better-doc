var Doctor = require('./../js/better-doc.js').doctorModule;

// var displayDoctors = function(response) {
//   response.practices.forEach(function(practice) {
//     $('.showDocs').append(`<li>Doctor:${practice.name}</li>`);
//   });
// };

$(document).ready(function() {
  $('#locate').click(function() {
    var currentDoctorObject = new Doctor();
    var city = $("#city").val();
    var symptom = $("#symptom").val();
    currentDoctorObject.getDoctor(city, symptom);
  });
});

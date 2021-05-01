/**
 * Adding jQuery Support
 * Good Commenting
 * Let's Use Our Framework (Library)
 */

var g = G$('John', 'doe');
g.greet().setLang('es').greet(true).log();

$('#Login').click(function(){

    var loginGrtr = G$('John','Doe');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
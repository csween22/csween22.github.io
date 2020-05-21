$(document).ready(function(){
/*
  alert("I am fully loaded");
  console.log("hello world");

  var firstName = "Don"
  var lastName = "Shine"
  console.log('hello ' + firstName + ' ' + lastName);
  console.log(3+1);
  firstName = 'Tom';
  console.log('hello ' + firstName);
  var is_an_excellent_teacher = true
  if(is_an_excellent_teacher == true){
    var firstName = "Don"
  }
  else{
    firstName = "Tom"
  }
  console.log('hello ' + firstName + ' ' + lastName);
  */
  var foods = ['pizza', 'pasta', 'chocolate', 'apples']
  console.log(foods.length);
  for (var i = 0; i < foods.length; i++) {
    console.log(foods[i]);
    $('#ThingsILike').append('<li>'+ foods[i] + '</li>')
  }
/*  $.each(foods,fucntion(key,value){
    console.log(key + ':' + value)
  }) */
  /*$('#Coffee').mouseover(function(){
    console.log('mouse is over coffee')
    $(this).hide();
  })
  $('#Coffee').mouseleave(function(){
    console.log('mouse is not over coffee')
    $(this).show();
  })
  $('#hide').click(function(){
    console.log("Hide button clicked")
    $('#Coffee').hide();
  })
  $('#show').click(function(){
    console.log("show button clicked")
    $('#Coffee').show();
  })

$('#hide').on('click',function() {
    $('#Coffee').fadeOut(1000);
});
$('#show').on('click',function() {
    $('#Coffee').fadeIn(1000);
});

$('#changeColor').on('click', function(){
  $('#ThingsILike').fadeIn().css('background-color', 'red').css('color', 'blue');
  $('#firstheading').fadeIn(1000).append('Welcome to our class');
})
*/
$.ajax({
  url: 'https://randomuser.me/api/?results=50',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $.each(data.results , function(key, person){
      console.log(person.name.title + ' ' + person.name.first + ' ' + person.name.last)
      $('#users').append(
      '<div class="col-md-2">' + '<img src="'+ person.picture.medium +'" class="rounded-circle" class="img-fluid" alt="person">'
      + '</br>' + person.name.title + ' ' + person.name.first + ' ' + person.name.last
      + '</br>' + 'Country: ' + person.location.country
      + '</br>' + '<i class="fab fa-facebook"></i>'
      + '   ' + '<i class="fab fa-instagram"></i>'
      + '   ' + '<i class="fab fa-twitter"></i>' + '</div>')


    })
  }
});

});

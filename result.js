function updateAvatarFromQueryParams() {
  // Get the query parameters from the URL
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  // Retrieve the selected items from local storage
  var storedAvatarDetails = localStorage.getItem("selectedAvatar");
  if (storedAvatarDetails) {
    var avatar = JSON.parse(storedAvatarDetails);

    // Update the avatar display
    $('#eyes-image').attr('src', avatar.eyes);
    $('#ears-image').attr('src', avatar.ears);
    $('#nose-image').attr('src', avatar.nose);
    $('#mouth-image').attr('src', avatar.mouth);
  }
}


/*
function updateAvatarFromQueryParams() {
  // Get the query parameters from the URL
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  // Retrieve the selected items
  var eyes = decodeURIComponent(urlParams.get('eyes'));
  console.log(eyes);
  console.log("f");
  var ears = decodeURIComponent(urlParams.get('ears'));
  var nose = decodeURIComponent(urlParams.get('nose'));
  var mouth = decodeURIComponent(urlParams.get('mouth'));

  // Update the avatar display
  $('#eyes-image').attr('src', eyes);
    $('#ears-image').attr('src', ears);
    $('#nose-image').attr('src', nose);
    $('#mouth-image').attr('src', mouth);
}
*/

window.addEventListener('DOMContentLoaded', function() {
  updateAvatarFromQueryParams();
});

function redirectToHomePage() {
  window.location.href = 'index.html';
  console.log("redirecting to index.html");
}

function redirectToQuizzPage() {
  window.location.href = 'quiz.html';
  console.log("redirecting to quiz.html");
}

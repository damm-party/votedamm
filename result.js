function updateAvatarFromQueryParams() {
  // Get the query parameters from the URL
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  // Retrieve the selected items from local storage
  var storedAvatarDetails = localStorage.getItem("selectedAvatar");
  if (storedAvatarDetails) {
    var avatar = JSON.parse(storedAvatarDetails);
    /*
  self: ["body","eyes","mouth"],
      gear: ["balls", "glasses", "hat", "hold", "hp"]
      */
    // Update the avatar display
    $('#body-image').attr('src', avatar.body);
    $('#eyes-image').attr('src', avatar.eyes);
    $('#mouth-image').attr('src', avatar.mouth);
    $('#balls-image').attr('src', avatar.balls);
    $('#glasses-image').attr('src', avatar.glasses);
    $('#hat-image').attr('src', avatar.hat);
    $('#hold-image').attr('src', avatar.hold);
    $('#hp-image').attr('src', avatar.hp);

  }
}


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
const characteristicDescriptions = {
    "Serenity Seeker": "Your zen-like demeanor is the envy of everyone around you. No matter how chaotic the world gets, you remain a calming force, turning every space into a sanctuary of peace and tranquility.",
    "Time Warp Dancer": "Your moves on the dance floor are legendary, as if you were transported from a different era. People can't help but be mesmerized by your vintage-inspired dance style and magnetic charm.",
    "Wanderlust Voyager": "Adventure calls your name, and you're always ready to embark on a journey to explore new horizons. With a well-worn map in hand and an insatiable curiosity, you're the ultimate globetrotter.",
    "Laughter Alchemist": "You possess the uncanny ability to turn any frown upside down with your humor and wit. Your laughter is contagious, and you sprinkle joy wherever you go, leaving people in stitches.",
    "Master Storyweaver": "Your tales are like magic, captivating listeners as you spin intricate and fantastical narratives. Whether it's around a campfire or in a cozy living room, you are the undisputed bard of the group.",
    "Whimsical Dreamer": "Your imagination knows no bounds, and your dreams are filled with enchanting wonders. You have a knack for turning the ordinary into something extraordinary with a touch of whimsy.",
    "Empathy Oracle": "People seek you out for your extraordinary ability to understand and empathize with their feelings. Your compassion and insight make you the go-to confidante for everyone around you.",
    "Culinary Fusionist": "You have a flair for blending diverse cuisines and flavors, creating dishes that transcend traditional boundaries. Your culinary experiments leave taste buds delighted and amazed.",
    "Galaxy Gazer": "With your telescope always at the ready, you're the stargazing expert of your group. You take others on cosmic journeys, introducing them to the wonders of the universe.",
    "Digital Marvel": "You're a tech-savvy genius, effortlessly navigating the digital realm. From coding to designing, you're the go-to person for any tech-related conundrum.",
    "Whirlwind Mentor": "You have an uncanny ability to inspire and motivate others. Your mentoring skills are like a whirlwind, propelling people towards their goals with incredible enthusiasm.",
    "Artistic Alchemist": "You transform ordinary materials into stunning works of art, making the world around you a canvas for your creativity. Your artistry knows no bounds, from paintings to sculptures and everything in between.",
    "Mindful Innovator": "You blend innovation with mindfulness, creating products and solutions that not only push boundaries but also foster a sense of mindfulness and well-being.",
    "Nighttime Maestro": "When the sun sets, you come alive, orchestrating unforgettable nighttime experiences. Whether it's throwing themed parties or leading midnight adventures, you're the master of nocturnal fun.",
    "Curiosity Cartographer": "You're on a quest to explore the unknown and map out uncharted territories of knowledge. Your insatiable curiosity is an inspiration to others to seek answers beyond the horizon.",
    "Serendipity Conjurer": "Fortune smiles upon you, and serendipity seems to follow your every step. Your life is a tapestry of delightful coincidences, making you the luckiest charm anyone could wish for.",
    "Euphoric Harmonizer": "Music is your passion, and you have an exceptional ability to create harmonious blends that stir emotions. Your music has the power to heal and uplift spirits.",
    "Eco Warrior": "You're a fierce advocate for the environment, fighting to protect nature and promote sustainability. Your passion for eco-conscious living inspires others to join the cause.",
    "Timeless Fashionista": "Your fashion sense transcends trends, creating a unique style that stands the test of time. You're a trendsetter with an eye for classic elegance.",
    "Imagination Architect": "You build fantastical worlds and universes with the power of your imagination. From intricate fantasy realms to futuristic cities, your mind's creations are awe-inspiring.",
    "Peak Performer": "The epitome of perfect athleticism, excelling in strength, agility, and endurance. Unwavering dedication to training, constantly setting new personal bests, and dominating every sport with superhuman abilities.",
    "Adrenaline Virtuoso": "The undisputed virtuoso of extreme sports and daring feats. Fearlessly embracing the thrill of the unknown with lightning-fast reflexes and unyielding determination. Transforms every challenge into a playground for extraordinary talents.",
    "Graceful Dynamo": "Even Mr. Tillo calls you a dynamo with mesmerizing fluidity and precision. Effortlessly gliding across fields, courts, or stages, leaving spectators entranced by your elegance and control. An inspiration to aspiring athletes with your athletic artistry.",
  };
  

document.addEventListener('DOMContentLoaded', function () {
    // Get the dominant characteristic from localStorage
    const dominantCharacteristic = localStorage.getItem('dominantCharacteristic');
  
    // Check if the dominant characteristic is available
    if (dominantCharacteristic && characteristicDescriptions.hasOwnProperty(dominantCharacteristic)) {
      // Update the h2 tag with the dominant characteristic name
      const h2Element = document.getElementById('dominantCharacteristicName');
      console.log(h2Element);
      h2Element.textContent = dominantCharacteristic;
      const pElement = document.getElementById('characteristicDescription');
      pElement.textContent = characteristicDescriptions[dominantCharacteristic].toLowerCase();
      console.log(characteristicDescriptions[dominantCharacteristic]);
    }
  });
  

function redirectToQuiz() {
    // Redirect to the final result page
    window.location.href = 'quiz.html';
  }
  

  function updateAvatarFromLocalStorage() {
    // Retrieve the selected avatar details from local storage
    var storedAvatarDetails = localStorage.getItem("selectedAvatar");
    if (storedAvatarDetails) {
      var avatar = JSON.parse(storedAvatarDetails);
  
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
  
  // Call the function when the page loads
  $(document).ready(function() {
    updateAvatarFromLocalStorage();
  });
  

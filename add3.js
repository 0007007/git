document.getElementById("titre").addEventListener("keyup", function() {
    var titre = this.value;
    var feedback = document.getElementById("titreFeedback");

    if (titre.length < 3) {
        feedback.innerText = "Le titre doit contenir au moins 3 caractères.";
        feedback.classList.add("error");
        feedback.classList.remove("success");
    } else {
        feedback.innerText = "Correct";
        feedback.classList.add("success");
        feedback.classList.remove("error");
    }
});

document.getElementById("destination").addEventListener("keyup", function() {
    var destination = this.value;
    var feedback = document.getElementById("destinationFeedback");
    var regexDestination = /^[A-Za-z\s]+$/;

    if (!regexDestination.test(destination) || destination.length < 3) {
        feedback.innerText = "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.";
        feedback.classList.add("error");
        feedback.classList.remove("success");
    } else {
        feedback.innerText = "Correct";
        feedback.classList.add("success");
        feedback.classList.remove("error");
    }
});

document.getElementById("prix").addEventListener("keyup", function() {
    var prix = this.value;
    var feedback = document.getElementById("prixFeedback");

    if (prix <= 0 || isNaN(prix)) {
        feedback.innerText = "Le prix doit être un nombre positif.";
        feedback.classList.add("error");
        feedback.classList.remove("success");
    } else {
        feedback.innerText = "Correct";
        feedback.classList.add("success");
        feedback.classList.remove("error");
    }
});
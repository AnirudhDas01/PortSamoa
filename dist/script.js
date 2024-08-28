document.addEventListener("DOMContentLoaded", function () {
    // Get references to the anchor tags and sections
    const bookLink = document.getElementById("book-link");
    const manageTripsLink = document.getElementById("manage-trips-link");
    const scheduleLink = document.getElementById("schedule-link");
    const vesselTrackingLink = document.getElementById("vessel-tracking-link");

    const bookSection = document.querySelector(".book");
    const manageTripsSection = document.querySelector(".manage");
    const scheduleSection = document.querySelector(".Schedule");
    const vesselTrackingSection = document.querySelector(".vessel");

    const domesticLink = document.getElementById("domestic-link");
    const internationalLink = document.getElementById("international-link");
    // const domesticDiv = document.getElementById("domestic");
    // const internationalDiv = document.getElementById("international");
    // const redBox = document.getElementById("red-box");

    // Function to hide all sections
    function hideAllSections() {
        bookSection.style.display = "none";
        manageTripsSection.style.display = "none";
        scheduleSection.style.display = "none";
        vesselTrackingSection.style.display = "none";
    }

    // Function to show a specific section
    function showSection(section) {
        hideAllSections();
        section.style.display = "flex";

    }

    function resetInternational () {
        internationalLink.style.background = "";
        internationalLink.style.color = "";
        internationalLine.style.textDecoration = "";
    }
    function resetDomestic () {
        domesticLink.style.background = "";
        domesticLink.style.color = "";
        domesticLink.style.textDecoration = "";
    }

    domesticLink.addEventListener("click", function (event) {
        this.style.backgroundColor = ('#21235e');
        this.style.color = ('white');
        this.style.textDecoration = "none";
        resetInternational();
    });
    internationalLink.addEventListener("click", function (event) {
        this.style.backgroundColor = ('#21235e');
        this.style.color = ('white');
        this.style.textDecoration = "none";
        resetDomestic();
    });
    // Set up event listeners for the anchors
    bookLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(bookSection);
    });

    manageTripsLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(manageTripsSection);
    });

    scheduleLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(scheduleSection);
    });

    vesselTrackingLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(vesselTrackingSection);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the anchor tags, divs, and the red box
    const domesticLink = document.getElementById("domestic-link");
    const internationalLink = document.getElementById("international-link");
    const domesticDiv = document.getElementById("domestic");
    const internationalDiv = document.getElementById("international");
    const redBox = document.getElementById("red-box");

    // Initially show domestic and hide international, show red box
    domesticDiv.style.display = "block";
    internationalDiv.style.display = "none";
    redBox.style.display = "flex";

    // Add click event listener to Domestic link
    domesticLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        domesticDiv.style.display = "block"; // Show domestic
        internationalDiv.style.display = "none"; // Hide international
        redBox.style.display = "flex"; // Show red box
    });

    // Add click event listener to International link
    internationalLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        domesticDiv.style.display = "none"; // Hide domestic
        internationalDiv.style.display = "block"; // Show international
        redBox.style.display = "none"; // Hide red box
    });
});

// Function to reset styles for all links
function resetLinkStyles() {
const links = document.querySelectorAll('.nav-link'); // Assuming all nav links have the 'nav-link' class
links.forEach(link => {
    link.style.backgroundColor = '#f2f2f2'; // Set to default background color
    link.style.color = '#518cac'; // Reset font color to default
    link.style.textDecoration = ''; // Reset text decoration
});
}


// Event listeners for each link
document.getElementById('book-link').addEventListener('click', function(event) {
event.preventDefault();
resetLinkStyles(); // Reset all links to default style
this.style.backgroundColor = '#21235e'; // Change background color
this.style.color = 'white'; // Change font color
this.style.textDecoration = 'none'; // Remove text decoration
});

document.getElementById('manage-trips-link').addEventListener('click', function(event) {
event.preventDefault();
resetLinkStyles();
this.style.backgroundColor = '#21235e';
this.style.color = 'white';
this.style.textDecoration = 'none';
});

document.getElementById('schedule-link').addEventListener('click', function(event) {
event.preventDefault();
resetLinkStyles();
this.style.backgroundColor = '#21235e';
this.style.color = 'white';
this.style.textDecoration = 'none';
});

document.getElementById('vessel-tracking-link').addEventListener('click', function(event) {
event.preventDefault();
resetLinkStyles();
this.style.backgroundColor = '#21235e';
this.style.color = 'white';
this.style.textDecoration = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
var RadioOneWay = document.getElementById('radio-one-way');
var RadioCharter = document.getElementById('radio-charter');
var RadioCruise = document.getElementById('radio-cruise');
var OneWayDiv = document.getElementsByClassName('one-way');
var CharterDiv = document.getElementsByClassName('charter');
var CruiseDiv = document.getElementsByClassName('cruise');
RadioOneWay.addEventListener("click", function() {
// Show only OneWayDiv, hide CharterDiv and CruiseDiv
for (var i = 0; i < OneWayDiv.length; i++) {
    OneWayDiv[i].classList.remove("hidden");
    OneWayDiv[i].classList.add("block");
}
for (var i = 0; i < CharterDiv.length; i++) {
    CharterDiv[i].classList.remove("block");
    CharterDiv[i].classList.add("hidden");
}
for (var i = 0; i < CruiseDiv.length; i++) {
    CruiseDiv[i].classList.remove("block");
    CruiseDiv[i].classList.add("hidden");
}
});
// Similar event listeners for other radio buttons
RadioCharter.addEventListener("click", function() {
// Show only CharterDiv, hide OneWayDiv and CruiseDiv
for (var i = 0; i < OneWayDiv.length; i++) {
    OneWayDiv[i].classList.remove("block");
    OneWayDiv[i].classList.add("hidden");
}
for (var i = 0; i < CharterDiv.length; i++) {
    CharterDiv[i].classList.remove("hidden");
    CharterDiv[i].classList.add("block");
}
for (var i = 0; i < CruiseDiv.length; i++) {
    CruiseDiv[i].classList.remove("block");
    CruiseDiv[i].classList.add("hidden");
}
});
RadioCruise.addEventListener("click", function() {
// Show only CruiseDiv, hide OneWayDiv and CharterDiv
for (var i = 0; i < OneWayDiv.length; i++) {
    OneWayDiv[i].classList.remove("block");
    OneWayDiv[i].classList.add("hidden");
}
for (var i = 0; i < CharterDiv.length; i++) {
    CharterDiv[i].classList.remove("block");
    CharterDiv[i].classList.add("hidden");
}
for (var i = 0; i < CruiseDiv.length; i++) {
    CruiseDiv[i].classList.remove("hidden");
    CruiseDiv[i].classList.add("block");
}
});
});

document.addEventListener('DOMContentLoaded', function() {
// Get elements
const OneWayIntlRadio = document.getElementById('radio-one-way-intl');
const CharterIntlRadio = document.getElementById('radio-charter-intl');
const OneWayIntlDiv = document.querySelector('.one-way-intl');
const CharterIntlDiv = document.querySelector('.charter-intl');
const InternationalSection = document.getElementById('international');

// Show one-way and hide charter
OneWayIntlRadio.addEventListener("click", function() {
OneWayIntlDiv.classList.remove("hidden");
OneWayIntlDiv.classList.add("block");
CharterIntlDiv.classList.remove("block");
CharterIntlDiv.classList.add("hidden");
});

// Show charter and hide one-way
CharterIntlRadio.addEventListener("click", function() {
CharterIntlDiv.classList.remove("hidden");
CharterIntlDiv.classList.add("block");
OneWayIntlDiv.classList.remove("block");
OneWayIntlDiv.classList.add("hidden");
});

// Hide international section when clicking any other anchor
document.querySelectorAll('a').forEach(anchor => {
anchor.addEventListener("click", function() {
if (InternationalSection) {
    InternationalSection.classList.add('hidden');
}
});
});

// Optionally, hide international section when clicking outside of it
document.addEventListener('click', function(event) {
if (!InternationalSection.contains(event.target) && !event.target.closest('a')) {
InternationalSection.classList.add('hidden');
}
});
});

const otherAnchors = document.querySelectorAll('a:not([href="#"])'); // Adjust the selector as needed

otherAnchors.forEach(anchor => {
anchor.addEventListener("click", function() {
// Hide international content when any other anchor is clicked
if (InternationalSection) {
    InternationalSection.classList.add('hidden');
}
});
});
document.addEventListener('DOMContentLoaded', function() {
// Get references to the elements
var internationalDiv = document.getElementById('international');
var oneWayIntlRadio = document.getElementById('radio-one-way-intl');
var charterIntlRadio = document.getElementById('radio-charter-intl');
var bookLink = document.getElementById('book-link');
var manageTripsLink = document.getElementById('manage-trips-link');
var scheduleLink = document.getElementById('schedule-link');
var vesselTrackingLink = document.getElementById('vessel-tracking-link');

// Function to hide the international div
function hideInternationalDiv() {
internationalDiv.style.display = 'none';
}

// Event listener for One Way radio button
oneWayIntlRadio.addEventListener('click', function() {
for (var i = 0; i < document.getElementsByClassName('one-way-intl').length; i++) {
document.getElementsByClassName('one-way-intl')[i].classList.remove('hidden');
document.getElementsByClassName('one-way-intl')[i].classList.add('block');
}
for (var i = 0; i < document.getElementsByClassName('charter-intl').length; i++) {
document.getElementsByClassName('charter-intl')[i].classList.remove('block');
document.getElementsByClassName('charter-intl')[i].classList.add('hidden');
}
});

// Event listener for Charter radio button
charterIntlRadio.addEventListener('click', function() {
for (var i = 0; i < document.getElementsByClassName('charter-intl').length; i++) {
document.getElementsByClassName('charter-intl')[i].classList.remove('hidden');
document.getElementsByClassName('charter-intl')[i].classList.add('block');
}
for (var i = 0; i < document.getElementsByClassName('one-way-intl').length; i++) {
document.getElementsByClassName('one-way-intl')[i].classList.remove('block');
document.getElementsByClassName('one-way-intl')[i].classList.add('hidden');
}
});

// Event listener for Manage Trips link
manageTripsLink.addEventListener('click', function(event) {
hideInternationalDiv();
});

// Event listener for Schedule link
scheduleLink.addEventListener('click', function(event) {
hideInternationalDiv();
});

// Event listener for Vessel Tracking link
vesselTrackingLink.addEventListener('click', function(event) {
hideInternationalDiv();
});

// Optionally handle the book link if you want specific behavior
bookLink.addEventListener('click', function(event) {
// Optionally, you can keep the international div open
});
});



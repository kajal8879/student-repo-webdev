// Create the main container div
var container = document.createElement("div");
container.className = "container";

var image = document.createElement("img");
image.className = "profileImg";
image.src = "../images/Kajal.png";
image.alt = "kajalProfilePicture";

bioText =
  " My name is Kajal Patil and I am pursuing masters at Portland State University. I joined in last Fall term for Computer Scinece course. My focus is on software engineering and database track. Apart from studies I am exploring calm and blooming spots nearby.";

// Split the paragraph into sentences
var sentences = bioText.split(". ");

// Create a span for the first sentence and make it bold
var firstSentence = document.createElement("span");
firstSentence.style.fontWeight = "bold";
firstSentence.textContent = sentences[0] + "."; // Add the period back
var remainingText = document.createElement("span");
for (var i = 1; i < sentences.length; i++) {
  remainingText.textContent += sentences[i] + ". ";
}
// Create a new paragraph element
var paragraph = document.createElement("p");
paragraph.className = "bio";
paragraph.appendChild(firstSentence);
paragraph.appendChild(remainingText);
// Append the modified first sentence and the rest of the sentences to the new paragraph

// Append the header and paragraph to the container
container.appendChild(image);
container.appendChild(paragraph);

// Add the container to the body of the HTML document
document.body.appendChild(container);

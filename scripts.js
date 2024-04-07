/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// Hello to whom reads this, I added a submodule which will allow anyone in the future to 
// clone my repo and it will be "light weight." I know it looks like I downloaded an entire 
// folder but I assure you, it is not. :)


const FRESH_PRINCE_URL = "https://github.com/l3LlFF/flowers/blob/master/astilbe.jpg?raw=true"
const CURB_POSTER_URL = "https://github.com/l3LlFF/flowers/blob/master/bellflower.jpg?raw=true";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High"
];
// creation of an array of object images which I iterate over
const images = {
    image0241: 'Flower-17-dataset/Bluebell/image_0241.jpg',
    image0242: 'Flower-17-dataset/Bluebell/image_0242.jpg',
    image0243: 'Flower-17-dataset/Bluebell/image_0243.jpg'
    // ... add all other images in similar fashion
  };
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
   
      
      const imageContainer = document.getElementById('card-container');
      
      for (const [key, value] of Object.entries(images)) {
        const img = document.createElement('img');
        img.src = value; // Set the source of the image to the value
        img.alt = key; // Use the key as the alt text for the image
        img.classList.add('image-size');
        imageContainer.appendChild(img); // Append the image to the container
      }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}


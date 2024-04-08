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

/* 
  Hello to whom reads this, I added a submodule which will allow anyone in the future to 
  clone my repo and it will be "light weight." I know it looks like I downloaded an entire 
  folder but I assure you, it is not. :)
*/

/* 
  per the README page, we are to show our understanding of basic data structures 
  and objects. 
  A couple data structures that I might use include arrays
  - arrays, vectors, A map? A stack? A queue? 
*/ 

// My first data structure, An array of objects

const images = [
{
  path: 'Flower-17-dataset/Bluebell/image_0242.jpg',
  description: 'BlueBell'
}, 
{
  path: 'Flower-17-dataset/Bluebell/image_0265.jpg',
  description: 'BlueBell2' 
},
{
  path: 'Flower-17-dataset/Bluebell/image_0249.jpg',
  description: 'BlueBell3'
},
{
  path: 'Flower-17-dataset/Buttercup/image_1121.jpg',
  description: 'Butter cup'
},
{
  path: 'Flower-17-dataset/Buttercup/image_1122.jpg',
  description: 'Butter cup'
}
,
{
  path: 'Flower-17-dataset/Buttercup/image_1123.jpg',
  description: 'Butter cup'
}
,
{
  path: 'Flower-17-dataset/Daisy/image_0801.jpg',
  description: 'Butter cup'
}


];

// other data structures can be a map, vector

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
   
      
      const imageContainer = document.getElementById('card-container');
      
   
      // one of the best things is the for each loop, since 
      // i dont have to find a index, i can just loop over the 
      // entire object array
      images.forEach(detail => {
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, detail.path, detail.description); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
      });
     
}
/* 
  I am altering this functions to provide a deciption of the image
  I will also change this function to print out the image
*/
function editCardContent(card, img_Path, img_Description) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = img_Description;

    const cardImage = card.querySelector("img");
    cardImage.src = img_Path;
    
    cardImage.alt = img_Description;

   
    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
   // console.log("new card:", img_Description, "- html: ", img_Path);
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


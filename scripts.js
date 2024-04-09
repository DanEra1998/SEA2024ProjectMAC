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
//*********************************************************************************/
//                              MY CODE STARTS HERE
//*********************************************************************************/


/* 
Hello to whom reads this, I added a submodule which will allow anyone in the future to 
clone my repo and it will be "light weight." I know it looks like I downloaded an entire 
folder but I assure you, it is not. :)
*/

/*
The difference between const, let, var 
https://community.appsmith.com/content/guide/variables-javascript-comprehensive-guide-var-let-and-const#:~:text=Use%20var%20for%20function%2Dlevel,constant%20within%20a%20block%20scope.
*/

/* 
per the README page, we are to show our understanding of basic data structures 
and objects. 
A couple data structures that I might use include arrays
- arrays, vectors, A map? A stack? A queue? 
*/ 

/*
My first data structure, An array of objects. My original idea was an array that contains path files and a decscription. 
This gets the job done but copy and pasting the same string over and over and changing it slighlty implicitly means 
I can create a helper function to do this.
*/

//*********************************************************************************/
//                       GLOBAL VARIABLES 
//*********************************************************************************/
let isSorted = true; 


//*********************************************************************************/
//                  FUNCTION THAT USED DATASET TO GENERATE IMAGES 
//*********************************************************************************/

// The following is a function that helps me generate images. 
function imageGenerator(imagePath, imagedescription, starting_Index, end_Index){
  // creating of array that will contain these objects, initially empty 

  const images = [];
  // As a beginner in javascript, this is neat, I did not know that arrays in java are versatile which means they can 
  // be used as stack. In this case, I am not using it as a stack. but it can be used as a stack 
  for(let i = starting_Index; i < end_Index - 1; i++){
    // here we add the funtionality to add to the end of 
    const appendedNumber = i.toString().padStart(4,'0');
    images.push({
      path: `${imagePath}${appendedNumber}.jpg`,
      description: imagedescription[i - starting_Index]
    });
  }  
  return images; 
}





//*********************************************************************************/
//        ARRAY OF FUNCTION CALLS TO POPULATE MY WEBSISTE
//*********************************************************************************/
const images = [
  ...imageGenerator('Flower-17-dataset/Bluebell/image_', ['A', 'B', 'C'], 250, 254),
  ...imageGenerator('Flower-17-dataset/Buttercup/image_', 'zaButtercup', 1121, 1125),
  ...imageGenerator('Flower-17-dataset/Daisy/image_', 'Daisy', 809, 813),
  ...imageGenerator('Flower-17-dataset/Iris/image_', 'iris', 401, 405),
  ...imageGenerator('Flower-17-dataset/Crocus/image_', 'crocus', 321, 325),
  ...imageGenerator('Flower-17-dataset/Sunflower/image_', 'crocus', 748, 752),
  ...imageGenerator('Flower-17-dataset/Snowdrop/image_', 'crocus', 81, 85),
  ...imageGenerator('Flower-17-dataset/Pansy/image_', 'crocus', 1285, 1289),
  ...imageGenerator('Flower-17-dataset/Dandelalion/image_', 'crocus', 961, 965),
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
  NOTE to future self, you may change this function or add a function create card
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

/* 
I am not sure if Javascript runs on top down design but Im assuming that it does. I would need to create the cards before 
I sort them so I will create the sort function here 
*/
function flowerSort(){
  // I will sort the images lexicographically
  
  images.sort((a,b) => {
    // lets create two variables ... 
    const card_A = a.description.toUpperCase(); 
    const card_B = b.description.toUpperCase();
    if (card_A < card_B){
      return isSorted ? -1 : 1;
    }
    if(card_B < card_A){
      return isSorted ? 1 : -1;
    }
    return 0; 
  });

  isSorted != isSorted;
  showCards(); 

  // when clicking sort again, it should resort the state. 

}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// We will need to add an event listener for clicking the sort button

document.addEventListener('DOMContentLoaded', () => {
  const sortButton = document.getElementById('sortButton');
  sortButton.addEventListener('click', flowerSort);
  
  // Initial display of cards
  showCards();
});


function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    images.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}


/*
this was my original idea, I kept it in the code to show the differnce in my 
process when starting this project and my final code. 
*/
// {
//   path: 'Flower-17-dataset/Bluebell/image_0242.jpg',
//   description: 'BlueBell'
// }, 
// {
//   path: 'Flower-17-dataset/Bluebell/image_0265.jpg',
//   description: 'BlueBell2' 
// },
// {
//   path: 'Flower-17-dataset/Bluebell/image_0249.jpg',
//   description: 'BlueBell3'
// },
// {
//   path: 'Flower-17-dataset/Buttercup/image_1121.jpg',
//   description: 'Butter cup'
// },
// {
//   path: 'Flower-17-dataset/Buttercup/image_1122.jpg',
//   description: 'Butter cup'
// }
// ,
// {
//   path: 'Flower-17-dataset/Buttercup/image_1123.jpg',
//   description: 'Butter cup'
// }
// ,
// {
//   path: 'Flower-17-dataset/Daisy/image_0801.jpg',
//   description: 'Butter cup'
// }
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
function imageGenerator(FlowerPath, imagedescription, starting_Index, end_Index, bulletsArray){
  // creating of array that will contain these objects, initially empty 
  // ***** THE ARRAY THAT WILL CONTAIN IMAGES FROM DATASET
  const flowerDataSet = [];
  // As a beginner in javascript, this is neat, I did not know that arrays in java are versatile which means they can 
  // be used as stack. In this case, I am not using it as a stack. but it can be used as a stack 
  for(let i = starting_Index; i < end_Index - 1;i++){
    // here we add the funtionality to add to the end of 
    const appendedNumber = i.toString().padStart(4,'0');
    flowerDataSet.push({
      path: `${FlowerPath}${appendedNumber}.jpg`,
      description: imagedescription[i - starting_Index],
      bullets: bulletsArray || [i - starting_Index]
    });
  }  
  return flowerDataSet; 
}





//*********************************************************************************/
//        ARRAY OF FUNCTION CALLS TO POPULATE MY WEBSISTE
//*********************************************************************************/
// Note: the bullet points dont work, I can not figure out how to get them to be difrerent on each cards 
// right now I have three ways to ensure the the images 
// are populated. 
// the empty bracket parameter, the filed bracket parameters and above this code, the OR statment which defaults a empty arrays 
const flowerDataSet = [
  ...imageGenerator('Flower-17-dataset/Bluebell/image_', ['A) BlueBell 1', 'B) BlueBell 2', 'C) BlueBell 3'], 250, 254, []),
  ...imageGenerator('Flower-17-dataset/Buttercup/image_', ['D) Buttercup 1', 'E) Buttercup 2', 'F) Buttercup 3'], 1121, 1125, []),
  ...imageGenerator('Flower-17-dataset/Daisy/image_', ['G) Daisy 1', 'H) Daisy 2', 'I) Daisy 3'], 809, 813, []),
  ...imageGenerator('Flower-17-dataset/Iris/image_', ['J) Iris 1', 'K) Iris 2', 'L) Iris 3'], 401, 405, []),
  ...imageGenerator('Flower-17-dataset/Crocus/image_', ['M) Crocus 1', 'N) Crocus 2', 'O) Crocus 3'], 321, 325,[]),
  ...imageGenerator('Flower-17-dataset/Sunflower/image_', ['P) Sunflower 1', 'Q) Sunflower 2', 'R) Sunflower 3'], 748, 752,[]),
  ...imageGenerator('Flower-17-dataset/Snowdrop/image_', ['S) Snowdrop 1', 'T) Snowdrop 2', 'U) Snowdrop 3'], 81, 85, []),
  ...imageGenerator('Flower-17-dataset/Pansy/image_', ['V) Pansy 1', 'W) Pansy 2', 'X) Pansy 3'], 1285, 1289,[]),
  ...imageGenerator('Flower-17-dataset/Dandelalion/image_', ['Z) Sunflower 1', 'AB) Sunflower 2', 'AC) Sunflower 3'], 961, 965,[]),
  ...imageGenerator('Flower-17-dataset/Colts Foot/image_', ['AD) Colts Foot 1', 'AE) Colts Foot 2', 'AF) Colts Foot 3'], 881, 885,[]),
  ...imageGenerator('Flower-17-dataset/Daffodil/image_', ['AG) Daffodil 1', 'AH) Daffodil 2', 'AI) Daffodil 3'], 30, 34,[]),
  ...imageGenerator('Flower-17-dataset/Windflower/image_', ['AJ) Windflower 1', 'AK) Windflower 2', 'AL) Windflower 3'], 1201, 1205,[]),


];
//[["each picture represents a different perspective of the flower "]]
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
      flowerDataSet.forEach(detail => {
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, detail.path, detail.description, detail.bullets); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
      });
     
}
/* 
  I am altering this functions to provide a deciption of the image
  I will also change this function to print out the image
  NOTE to future self, you may change this function or add a function create card
*/
function editCardContent(card, img_Path, img_Description, bulletPoints) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = img_Description;

    const cardImage = card.querySelector("img");
    cardImage.src = img_Path;
    
    cardImage.alt = img_Description;

    const bulletList = card.querySelector("ul");
    // this did not do anything i.e adding the .src. I can not figure out why i get duplicated bullet points s
    bulletList.src = bulletPoints;
    bulletList.innerHTML = '';
  
    bulletPoints.forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      bulletList.appendChild(li); // Append to bulletList, not bulletPoints
    });
   
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
  
  flowerDataSet.sort((a,b) => {
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

function shuffleFlowers(array){
  for(let i = array.length - 1; i > 0; i--){
    // since we want to shuffle, we want to call the random fucntion
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// We will need to add an event listener for clicking the sort button

document.addEventListener("DOMContentLoaded", () => {

  const sortButton = document.getElementById('sortButton');
  sortButton.addEventListener('click', flowerSort);

  const shuffleButton = document.getElementById('shuffleButton');
  shuffleButton.addEventListener('click', ()=>{
    shuffleFlowers(flowerDataSet);
    showCards(); 
  });

  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', function(){
    location.reload(); 
  });

  const cycleButton = document.getElementById('cycleButton');
  cycleButton.addEventListener('click', cycleCard);

  showCards();
});

//*****************************************************************************/
//        MY SECOND DATA STRUCTURE: A STACK USING LIFO THAT CONTAINS OBJECTS 
//*****************************************************************************/
let quoteStack = [
  {quote: "Nothing is impossible, the word itself says ‘I’m possible’", author: "Audrey Hepburn"},
  {quote: "Each day comes bearing its gift. Untie the ribbon", author: "Ann Ruth Schabacker"},
  {quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.", author: "Kobe Bryant"},
  {quote: "Happiness is not by chance but by choice.", author: "Jim Rohn"},
  {quote: "Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you. ", author: "Mary Lou Retton"},
  {quote: "Setting goals is the first step in turning the invisible into the visible", author: "Tony Robbins"},
  {quote: "You’ll never do a whole lot unless you’re brave enough to try.", author: "Dolly Parton"},
];
// quotes source: 
//https://www.southernliving.com/positive-thinking-quotes-7255842

function positiveQuotes() {
   if(quoteStack.length == 0){
    alert("We are out of Quotes, I bet I made you smile?");
    return;
   }
   let selectedObj = quoteStack.pop(); 
    alert(`"${selectedObj.quote}" - ${selectedObj.author}`);
}
//********************************************************************************/
//       END OF MY SECOND DATA STRUCTURE: A STACK USING LIFO THAT CONTAINS OBJECTS 
//********************************************************************************/

function cycleCard() {
  if (flowerDataSet.length > 0) {
      const firstCard = flowerDataSet.shift(); // Remove the first item and store it
      flowerDataSet.push(firstCard); // Add the stored item to the end of the array
      showCards(); // Refresh the display of cards
  } else {
      console.log("No cards available to move.");
  } // Remove last item in titles array
    //showCards(); // Call showCards again to refresh
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
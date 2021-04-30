/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// The deviseElement function will streamline my code so that the showPage function is easier to read.
// Must use quotation marks when entering arguments into the function. Otherwise it won't work. This function
// creates the element that is fed into the function and then changes its class to the class fed into it. 


function deviseElement(element, nameofclass) {
   const createdElement = document.createElement(element);
   createdElement.className = nameofclass;
   return createdElement;
}

// The purpose of the appendElement function is to streamline the code in my showPage function by 
// handling the appendChild method for each set of elements. You feed the parent and child elements into the function
// and they come out connected. 

function appendElement(parent, child) {
   parent.appendChild(child);
}

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentListUL = document.querySelector('.student-list');
   studentListUL.innerHTML = '';
   for ( i = 0; i < list.length; i++ ) {
      // Make sure the second part of the if statement is set to i<endIndex so that only 9 appear on one page.
      if ( i >= startIndex && i < endIndex ) {
         const list_student = deviseElement('li', 'student-item cf');
         const div_student = deviseElement('div', 'student-details');
         const img_student = deviseElement('img', 'avatar');
         img_student.src = `${data[i].picture.large}`;
         img_student.alt = 'Profile Picture';
         const heading_three = deviseElement('h3', '');
         heading_three.textContent = `${data[i].name.first} ${data[i].name.last}`;
         const span_student = deviseElement('span', 'email');
         span_student.textContent = `${data[i].email}`
         const div_student_two = deviseElement('div', 'joined-details');
         const span_student_two = deviseElement('span', 'date');
         span_student_two.textContent = `Joined ${data[i].registered.date}`
         appendElement(div_student, img_student);
         appendElement(div_student, heading_three);
         appendElement(div_student, span_student);
         appendElement(div_student_two, span_student_two);
         appendElement(list_student, div_student);
         appendElement(list_student, div_student_two);
         //return list_student; Testing purposes - Everything is nested correctly and showing the right info
         studentListUL.insertAdjacentElement('beforeend', list_student);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const list_length = list.length / 9; // may need to round up or down here
   const ul_linklist = document.querySelector('.link-list');
   ul_linklist.innerHTML = '';

   for ( i = 0; i < list_length; i++ ) {
      const buttonListItem = document.createElement('li');
      const pageButton = document.createElement('button');
      pageButton.textContent = `${i+1}`;
      // adding an if statement to change the first button's className to active
      if ( i == 0 ) {
         pageButton.className = 'active';
      }
      appendElement(buttonListItem, pageButton);
      ul_linklist.insertAdjacentElement('beforeend', buttonListItem);
   }
   // Still need to figure out how to make it fire specifically on the buttons and not around them.
   
   ul_linklist.addEventListener('click', (e) => {
      // .tagName always returns the name of the tag in uppercase letters, so make sure it's BUTTON not button.
      if ( e.target.tagName == 'BUTTON' ) {
         const newInactiveButton = document.querySelector('.active');
         newInactiveButton.classList.remove('active');
         const newActiveButton = e.target;
         newActiveButton.className = 'active';
         showPage(data, newActiveButton.textContent);
      }
   })
}

// extra credit - Add a search component

function addSearchBar() {
   const searchLabel = deviseElement('label', 'student-search');
   searchLabel.htmlFor = 'search';
   const searchSpan = deviseElement('span', '');
   searchSpan.textContent = 'Search by name';
   const searchInput = deviseElement('input', '');
   searchInput.id = 'search';
   searchInput.placeholder = 'Search by name...';
   const searchButton = deviseElement('button', '');
   searchButton.type = 'button';
   const searchIMG = deviseElement('img', '');
   searchIMG.src = 'img/icn-search.svg';
   searchIMG.alt = 'Search Icon';
   appendElement(searchButton, searchIMG);
   appendElement(searchLabel, searchSpan);
   appendElement(searchLabel, searchInput);
   appendElement(searchLabel, searchButton);
   const headingTwo = document.querySelector('h2');
   headingTwo.insertAdjacentElement('beforeend', searchLabel);

}

// Call functions

showPage(data, 1);
addPagination(data);


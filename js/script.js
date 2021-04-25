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

// Must use quotation marks when entering arguments into the function. Otherwise it won't work.
function deviseElement(element, nameofclass) {
   const createdElement = document.createElement(element);
   createdElement.className = nameofclass;
   return createdElement;
}
 
function appendElement(parent, child) {
   parent.appendChild(child);
}

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentListUL = document.querySelector('.student-list');
   studentListUL.innerHTML = '';
   for ( i = 0; i < list.length; i++ ) {
      if ( i >= startIndex && i <= endIndex ) {
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
/*
function addPagination(list) {
   const list_length = list.length / 9;
   const ul_linklist = document.getElementsByClassName('link-list');
   ul_linklist.innerHTML = '';

   for ( i = 0; i < list_length; i++ ) {




   }


}
*/


// Call functions

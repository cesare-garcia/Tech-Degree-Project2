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
function deviseElement( element, nameofclass ) {
   const createdElement = document.createElement(element);
   createdElement.className = nameofclass;
   return createdElement;
}
 
function appendElement( parent, child ) {
   parent.appendChild(child);
}

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentListUL = document.getElementsByClassName('student-list');
   studentListUL.innerHTML = '';
   for ( i = 0; i < list.length; i++ ) {
      if ( i >= startIndex && i <= endIndex ) {
         const list_student = deviseElement( 'li', 'student-item cf' );
         const div_student = deviseElement( 'div', 'student-details' );
         const img_student = deviseElement( 'img', 'avatar' );
         const heading_three = deviseElement( 'h3', '' );
         heading_three.textContent = list[i];
         const span_student = deviseElement( 'span', 'email' );
         const div_student_two = deviseElement( 'div', 'joined-details' );
         const span_student_two = document.createElement( 'span', 'date' );
         appendElement( div_student , img_student );
         appendElement( div_student , heading_three );
         appendElement( div_student , span_student );
         appendElement( div_student_two , span_student_two );
         appendElement( list_student , div_student );
         appendElement( list_student , div_student_two );

         studentListUL.insertAdjacentHTML( 'beforeend' , list_student );

      }


   }


}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

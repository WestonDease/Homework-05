/* keep count of how many buttons have been added */
let count = 0;

/* add a new button with a class of new and text of count */
const addButton = function(e){
  e.preventDefault(); //prevent reload
  count++; //increment count by 1
  const button = `<button class="new">${count}</button>`; //make a string that represents the new button
  render(button); //render the new button to the page
  render($(this).text()); // render the text from the more button to the page
}

/* render the text of the element clicked to the page.
READ ABOUT JQUERY $(this) http://html-tuts.com/jquery-this-selector */
const printNum = function(e){
  e.preventDefault();
  render($(this).text());
}

/* append the string argument to the page as html.
append a line break after*/
const render = function(htmlStr){
  $('#content').append(htmlStr)
  $('#content').append('<br />')
}

/* event listener adds a new button when more is clicked*/
$('#more').on('click', addButton);

/*broken event listener.
 Should render the new button's number to the page when clicked */
$('#content').on('click', '.new', function(){
  printNum(event);
});
function toDoApp () {

//creates a new item when user hits enter

  $('form').submit(function newToDo(event){
    event.preventDefault();

    var textInput = ($('.new-todo').val());
    var newArticle = $('<article>')
      .append(  $('<button>').attr({class: 'check'})  )
      .append(  $('<p>').text(textInput)  )
      .append(  $('<input>').attr({type: 'text', class: 'edit-todo', value: textInput})  )
      .append(  $('<button>').attr({class: 'delete'}) );

    $('.items')
      .append( $('<li>').append(newArticle));


  });

  $('.items').on('click', 'p', function editListItem(event){
    // event.preventDefault();
    $(this).parent('article').addClass('editing');

  });


  $('.items').on('keyup', '.edit-todo', function enterNewListIten (event){
    // event.preventDefault();  // this STOPS "h" key from printing the letter "h"!!
    if(event.keyCode === 13){
      // other stuff
      $(this).parent('article').removeClass('editing');
    }
  });





}

toDoApp();

function toDoApp () {

//creates a new item when user hits enter

  $('form').submit(function newToDo(event){
    event.preventDefault();

    var textInput = ($('.new-todo').val());
    var newArticle = $('<article>')
      .append(  $('<button>').attr({class: 'check'})  )
      .append(  $('<p>').text(textInput)  )
      .append(  $('<input>').attr({type: 'text', class: 'edit-todo', value: textInput})  )
      .append(  $('<button>').attr({class: 'delete'}).text ('X') );
    $('.items')
      .append( $('<li>').append(newArticle));
  });

  $('.items').on('click', 'p', function editListItem(event){
    $(this).parent('article').addClass('editing');

  });


  $('.items').on('keyup', '.edit-todo', function enterNewListIten (event){
    if(event.keyCode === 13){
      // '.edit-todo'.val()); /// i want to put something here that grabs new input, stores it, and spits it out when enter is pressed.
      $(this).closest('article').removeClass('editing');

    }
  });
// this is applying to all li instead of the targeted on click
  $('.items').on('click', '.check', function completeItemClick(event){
    $(this).closest('article').toggleClass('completed');
  });
// this is applying to all li instead of the targeted on click
  $('.items').on('click', '.delete', function deleteItem (event){
    $(this).closest('li').remove(); // change this to closest li
  });

}

toDoApp();

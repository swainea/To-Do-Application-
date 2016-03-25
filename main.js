function toDoApp () {

//creates a new item when user hits enter

  var itemList = [];

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
    $(this).closest('article').addClass('editing');
  });

  $('.items').on('keyup', '.edit-todo', function enterNewListIten (event){
    if(event.keyCode === 13){
      $(this).closest('article').find('p').text( $(this).val());
      $(this).closest('article').removeClass('editing');
    }
  });
  $('.items').on('click', '.check', function completeItemClick(event){
    $(this).closest('article').toggleClass('completed');
  });

  $('.items').on('click', '.delete', function deleteItem (event){
    $(this).closest('li').remove();
  });

  $('.show-all').on('click', function showAll (event){
    $('article').closest('li').css('display', 'block');
    $('.show-all').addClass('.active');
    $('.show-active').removeClass('.active');
    $('.show-completed').removeClass('.active');
  });
//above is working
  $('.show-active').on('click', function showActive (event){
    $('article').not('.completed').closest('li').css('display', 'block');
    $('.completed').closest('li').css('display', 'none');
    $('.show-all').removeClass('.show-all');
    $('.show-active').addClass('.active');
  });
      // completed will be display then anthing that is not completed (still active, display)
      // eliminate the show all and show the show active
//above is working
  $('.show-completed').on ('click', function showCompleted (event){
    $('article').not('.active').closest('li').css('display', 'block');
    // $('.active').closest('li').css('display', 'none'); <--- deletes the button- BAD! 
    $('.show-all').removeClass('.show-all');
    $('.show-active').removeClass('.active');
  });
  //ABOVE IS NOT WORKING
  // });

//WHATS LEFT!!!
  //Need to add in item count //need to add in array // need to work on the display
    //remember to incremnt and decrement the items for the left button when you are

}

toDoApp();

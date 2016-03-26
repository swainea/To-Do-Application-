function toDoApp () {

  var itemList = [];
  var itemsLeft = 0;

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
      // itemsLeft.text(Number(itemsLeft.text()) + 1); //math not working properly
    $('.incomplete-items').text(itemsLeft);
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
    if ($(this).closest('article').toggleClass('completed')){
      itemsLeft.text(Number(itemsLeft.text()) + 1); //math not working properly
    }
  });

  $('.items').on('click', '.delete', function deleteItem (event){
    $(this).closest('li').remove();
      itemsLeft.text(Number(itemsLeft.text()) - 1); //math not working properly
  });

  $('.show-all').on('click', function showAll (event){
    $('article').closest('li').css('display', 'block');
    $('.show-all').addClass('.active');
    $('.show-active').removeClass('.active');
    $('.show-completed').removeClass('.active');
  });

  $('.show-active').on('click', function showActive (event){
    $('article').not('.completed').closest('li').css('display', 'block');
    $('.completed').closest('li').css('display', 'none');
    $('.show-all').removeClass('.show-all');
    $('.show-active').addClass('.active');
  });

  $('.show-completed').on ('click', function showCompleted (event){
    $('article').not('.completed').closest('li').css('display', 'none');
    $('.completed').closest('li').css('display', 'block');
    $('.show-all').removeClass('.active');
    $('.show-active').removeClass('.active');
  });


//WHATS LEFT!!!
  //Need to add in item count //need to add in array // need to work on the display
    //remember to incremnt and decrement the items for the left button when you are

}

toDoApp();

function toDoApp () {

  var itemList = [];
  var itemsLeft = 0;

  $('form').submit(function newToDo(event){
    itemsLeft++;
    $('.incomplete-items').text(itemsLeft);
    event.preventDefault();

    var textInput = ($('.new-todo').val());
    itemList.push(textInput);
  
    var newArticle = $('<article>')
      .append(  $('<button>').attr({class: 'check'})  )
      .append(  $('<p>').text(textInput)  )
      .append(  $('<input>').attr({type: 'text', class: 'edit-todo', value: textInput})  )
      .append(  $('<button>').attr({class: 'delete'}).text ('X') );
    $('.items')
      .append( $('<li>').append(newArticle));
    $('.new-todo').val("");
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
    if($(this).closest('article').hasClass('completed')){
      itemsLeft++;
      $('.incomplete-items').text(itemsLeft);
    } else {
      itemsLeft--;
      $('.incomplete-items').text(itemsLeft);
    }
    $(this).closest('article').toggleClass('completed')
  });

  $('.clear').on('click', function clearComplete (event){
    $(this).closest('main').find('.completed').closest('li').remove();
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

}

toDoApp();

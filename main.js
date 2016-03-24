function toDoApp () {

//creates a new item when user hits enter

  $('form').submit(function newToDo(event){
    event.preventDefault();

    var textInput = ($('.new-todo').val());
    var newArticle = $('<article>')
      .append(  $('<button>').attr({class: 'check'})  )
      .append(  $('<button>').attr({class: 'delete'}) )
      .append(  $('<p>').text(textInput).addClass("toDoText")  )
      .append(  $('<input>').attr({type: 'text', class: 'edit-todo', value: textInput})  );

    $('.items').append( $('<li>') ).append(newArticle);


  });

  $('.items').on('click', ".toDoText", function editListItem(event){
    event.target
//this is where I want to DECLARE a variable// 


  });






}

toDoApp();

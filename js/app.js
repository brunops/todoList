var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  }
});

var myTodo = new Todo({
  title: 'My todo item'
});


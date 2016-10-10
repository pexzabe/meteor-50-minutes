/**
 * Created by Preston on 10/9/2016.
 */

Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  })

  Template.tasks.events({
    "submit .add-task": function(event) {
      var name = event.target.name.value;

      Tasks.insert({
        name: name,
        createdAt: new Date()
      })

      event.target.name.value = '';

      return false;
    }
  })
}

if (Meteor.isServer) {

}

const BucketlistFormView = require('./views/bucketlist_form_view.js');
const Bucketlist = require('./models/bucketlist.js');
const BucketlistView = require('./views/bucketlist_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://localhost:3000/api/bucketlist';
  const bucketlist = new Bucketlist(url);
  bucketlist.bindEvents();
  bucketlist.getData();


  const listContainer = document.querySelector('div#bucketlist');
  const bucketlistView = new BucketlistView(listContainer);
  bucketlistView.bindEvents();

  const bucketlistForm = document.querySelector('form#bucketlist-form');
  const bucketlistFormView = new BucketlistFormView(bucketlistForm);
  bucketlistFormView.bindEvents();


});

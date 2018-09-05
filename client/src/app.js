const BucketlistFormView = require('./views/bucketlist_form_view.js');
const Bucketlist = require('./models/bucketlist.js');
const BucketlistListView = require('./views/bucketlist_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const bucketlist = new Bucketlist();
  bucketlist.getData();

});

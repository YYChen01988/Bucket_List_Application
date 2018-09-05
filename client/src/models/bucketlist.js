const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Bucketlist = function(){
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
};

Bucketlist.prototype.getData = function () {
  this.request.get()
    .then((list) => {
      PubSub.publish('BucketLists:data-loaded', list);
      // console.log(list);
    })
    .catch(console.error);
};


Bucketlist.prototype.bindEvents = function () {
  // PubSub.subscribe('SightingView:sighting-delete-clicked', (evt) => {
  //   this.deleteSighting(evt.detail);
  // });

  PubSub.subscribe('BucketListView:form-submitted', (evt) => {
    this.postBucketlist(evt.detail);
  })
};

Bucketlist.prototype.postBucketlist = function (list) {
  const request = new Request(this.url);
  request.post(list)
    .then((list) => {
      PubSub.publish('BucketLists:data-loaded', list);
    })
    .catch(console.error);
};

// Bucketlist.prototype.deletelist = function (listId) {
//   this.request.delete(listId)
//     .then((lists) => {
//       PubSub.publish('BucketLists:list-delete-clicked', lists);
//     })
//     .catch(console.error);
// };


module.exports = Bucketlist;

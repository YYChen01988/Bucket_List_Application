const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Bucketlist = function(){
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
};

Bucketlist.prototype.getData = function () {
  this.request.get()
    .then((list) => {
      // PubSub.publish('BucketLists:data-loaded', list);
      console.log(list);
    })
    .catch(console.error);
};

module.exports = Bucketlist;

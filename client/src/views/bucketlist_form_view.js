const PubSub = require('../helpers/pub_sub.js');
const BucketlistFormView = function(form){
  this.form = form;
};


BucketlistFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketlistFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newList = this.createList(event.target);
  PubSub.publish('BucketListView:form-submitted', newList);
  event.target.reset();
}

BucketlistFormView.prototype.createList = function(form){
  const newList = {
    item: form.item.value
  };
return newList;
};



module.exports = BucketlistFormView;

const PubSub = require('../helpers/pub_sub.js');
// const BucketlistFormView = ('../bucketlist_form_view.js');

const BucketlistView = function(container){
  this.container = container;
}

BucketlistView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketLists:data-loaded', (evt) => {
    this.render(evt.detail);
    // console.log(event.detail);
  });
};

BucketlistView.prototype.render = function (listItems){
  this.container.innerHTML = '';
  const orderElement = document.createElement('ul');
  listItems.forEach((listItem) => {
    const itemElement = document.createElement('li');
    itemElement.textContent = listItem.item;
    orderElement.appendChild(itemElement);
  });
  this.container.appendChild(orderElement);
};

// BucketlistView.prototype.createDeleteButton = function (itemId) {
//   const button = document.createElement('button');
//   button.classList.add('delete-btn');
//   button.value = itemId;
//
//   button.addEventListener('click', (evt) => {
//     PubSub.publish('BucketLists:list-delete-clicked', evt.target.value);
//   });
//
//   return button;
// };




module.exports = BucketlistView;

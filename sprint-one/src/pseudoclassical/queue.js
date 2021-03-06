var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.count; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var cache = this.storage[--this.count];
    delete this.storage[this.count];
    return cache;
  }
};

Queue.prototype.size = function() {
  return this.count;
};

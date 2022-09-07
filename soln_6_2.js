class Group {
  // Your code here.
  constructor() {
    this.members = [];
  }
  
  add(x){
    if(!this.has(x))
    this.members.push(x);
  }
  delete(x){
    this.members.splice(this.members.indexOf(x),1);
  }
  
  has(x){
    return this.members.includes(x);
  }
  static from(collection)
  {
    let group = new Group;
    for(let value of collection)
      group.add(value);
    return group;
  }
  
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

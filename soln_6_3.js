// Your code here (and the code from the previous exercise)
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
  [Symbol.iterator](){
    return new GroupIterator(this);
  }
  
}

class GroupIterator{
  constructor(group){
    this.group = group;
    this.position = 0;
  }
  
  next(){
    if(this.position >= this.group.members.length){
      return {done: true};
    }else{
      let result = {value: this.group.members[this.position],
                    done:false};
      this.position++;
      return result;
    }
  }
}
      
  


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

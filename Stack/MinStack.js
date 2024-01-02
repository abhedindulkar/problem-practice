function solve() {
     this.stack1 = [];
     this.stack2 = [];
     this.currentMin = Number.MAX_SAFE_INTEGER;
    // this.prototype.a = 2;

    // console.log(this)
    // console.log(a);

    return this;
    
    // Initalize your variables here
};

solve.prototype.push = function (e) {
    // console.log(this.a);
    this.stack1.push(e);
    this.currentMin = Math.min(this.currentMin, e);
    this.stack2.push(this.currentMin);
    // return;
};

solve.prototype.pop = function () {
    
    if ( this.stack1.length === 0 )
        return;

    this.stack2.pop();
    this.stack1.pop();

    return;
};

solve.prototype.top = function () {
    // return top
    if ( this.stack1.length === 0 )
        return -1;

    return this.stack1[this.stack1.length - 1];
};

solve.prototype.getMin = function () {
    // return minimum
    if ( this.stack2.length === 0 )
        return -1;

    return this.stack2[this.stack2.length - 1];
};

let solve1 = new solve();

// console.log(solve1.push(1));
// console.log(solve1.push(2));
// console.log(solve1.push(-2));
// console.log(solve1.getMin());
console.log(solve1.getMin());
console.log(solve1.pop());
console.log(solve1.top());
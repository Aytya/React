//1//Array Prototype Last

// Array.prototype.last = function() {
//     if(this.length > 0){
//         return this.pop()
//     }else{
//         return -1
//     }
// };

//2// Counter

// var createCounter = function(n) {
//     let cnt = n - 1
//     return function() {
//         cnt++
//         return cnt
//     };
// };

//3//Sleep

// async function sleep(millis) {
//     await new Promise(resolve => setTimeout(resolve,millis))
// }

//4//Array Reduce Transformation

// var reduce = function(nums, fn, init) {
//     let number = init
//
//     for(let i = 0;i<nums.length;i++){
//         number = fn(number,nums[i])
//     }
//
//     return number
// };

//5//Function Composition

// var compose = function(functions) {
//
//     return function(x) {
//         if(functions.length === 0){
//             return x
//         }else{
//             let result = x
//             for(let i = functions.length - 1;i>= 0;i--){
//                 result = functions[i](result)
//             }
//             return result
//         }
//     }
// };

//6//Group By

// Array.prototype.groupBy = function(fn) {
//     let a = {}
//
//     for(let i of this){
//         a[fn(i)] ||= []
//
//         a[fn(i)].push(i)
//     }
//     return a
//
// };

//7//Filter Elements from Array

// var filter = function(arr, fn) {
//     var number = [];
//
//     for(var i = 0;i < arr.length;i++){
//
//         if( fn(arr[i],i)){
//             number.push(arr[i]);
//         }
//     }
//     return number;
// };

//8//Apply Transform Over Each Element in Array

// var map = function(arr, fn) {
//     let number = []
//     for(let i = 0;i < arr.length;i++){
//         number.push(fn(arr[i],i))
//     }
//     return number
// };

//9//2665. Counter II

// var createCounter = function(init) {
//     let count = init
//
//     return{
//         increment(){
//             count++
//             return count
//         },
//         decrement(){
//             count -= 1
//             return count
//         },
//         reset(){
//             count = init
//             return count
//         }
//     }
// };
//
//
// const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

//10//2666. Allow One Function Call

// var once = function(fn) {
//     let times = 0
//     return function(...args){
//         times += 1
//         if(times == 1){
//             return fn(...args)
//         }return undefined
//     }
// };

//11//Create Hello World Function

// function createHelloWorld() {
//     return function() { return "Hello World" }
// }

//12//Chunk Array

// var chunk = function(arr, size) {
//     let a = []
//     let start = 0
//
//     while(start < arr.length){
//         a.push(arr.slice(start,size + start))
//         start+=size
//     }
//     return a
// };

//13//Array Wrapper

// var ArrayWrapper = function(nums) {
//     this.nums = nums
// };
//
// ArrayWrapper.prototype.valueOf = function() {
//     let sum = 0
//
//     for(let i = 0;i < this.nums.length;i++){
//         sum += this.nums[i]
//     }
//     return sum
// };
//
// ArrayWrapper.prototype.toString = function() {
//     return `[${this.nums.join(',')}]`
// };

//14//Return Length of Arguments Passed

// var argumentsLength = function(...args) {
//     return args.length
// };

//15//To Be Or Not To Be

// const expect = target => ({
//     toBe(val) {
//         if (val === target) return true;
//         throw new Error('Not Equal')
//     },
//     notToBe(val) {
//         try {
//             this.toBe(val)
//         } catch (e) {
//             return true
//         }
//         throw new Error('Equal')
//     }
// });

//16//Timeout Cancellation

// var cancellable = function(fn, args, t) {
//     const otmena = function(){
//         clearTimeout(timer)
//     }
//     let timer = setTimeout(() => {
//         fn(...args)
//     },t)
//     return otmena
// };

//17//Join Two Arrays by ID

// var join = function(arr1, arr2) {
//     let arr = []
//     let i = 0
//     let j = 0
//
//     arr1.sort((a, b) => a.id - b.id);
//     arr2.sort((a, b) => a.id - b.id);
//
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i].id == arr2[j].id){
//             arr.push({...arr1[i], ...arr2[j]})
//             i++
//             j++
//         }
//         else if(arr1[i].id > arr2[j].id){
//             arr.push(arr2[j])
//             j++
//         }
//         else {
//             arr.push(arr1[i])
//             i++
//         }
//     }
//     while(i<arr1.length){
//         arr.push(arr1[i])
//         i++
//     }
//     while(j<arr2.length){
//         arr.push(arr2[j])
//         j++
//     }

//18// Add Two Promises

// var addTwoPromises = async function(promise1, promise2) {
//     return Promise.all([promise1, promise2])
//         .then(value => value.reduce((acc,val) => acc + val,0))
// };

//19//Sort By

// var sortBy = function(arr, fn) {
//     return arr.sort((a, b) => fn(a) - fn(b))
// };

//20// Is Object Empty

// var isEmpty = function(obj) {
//     if(typeof(obj) == 'object'){
//         if(Object.keys(obj).length > 0){
//             return false
//         }else{return true}
//     }else{
//         if(obj.length > 0){
//             return false
//         }else{
//             return true
//         }
//     }
// };
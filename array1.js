// let arr = [1,7,5,15,64,0,89,9]
// let a = arr.sort(
//     function(a,b){return a-b}
// )
// console.log(a) 
//a=1 b= 7 = -6 arr[1,7]
//a=1 b=5 = -4 arr[1,5,7]
//a = 7 b = 5 = 2 arr[1,5,7]
let arr= [1,2,3,4,5,6,7,8,9,10]
// index=[0,1,2,3,4,5,6,7,8,9] 
// let sum = 0 
// for(let i in arr){
//     sum+=arr[i]
// }
let arr1=[]
for (var i=0; i<= arr.length-2;i+=2)
{
    arr1.push([arr[i],arr[i+1]])
    

}
let arr2 = []
for (var i=0;i<arr.length;i+=2){
    arr2.push(arr[i]+arr[i+1])

}
// console.log(arr2)
let arr3=[]
for (var i=0;i<arr1.length;i+=1){
    let sum=0
    arr1[i].forEach(x => {
        sum += x;
    });    
    arr3.push(sum)
}
console.log(arr3)





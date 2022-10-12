// product为购物车商品数据
let product = [
    {
        name: "ipad",
        price: 135.2
    },
    {
        name: "iphone",
        price: 25.2
    }, {
        name: "macbook",
        price: 2010.3
    },
]

//求出购物车最贵的商品
// let arr = [];
// product.forEach((item,index)=>{
// 	arr.push(item.price);
// })
// console.log(arr);
// let max = arr.reduce(function(a , b){
// 	return b > a ? b : a;
// });
// console.log(max);

//求最贵商品
function MAXproduct(array){
	return array.reduce((pre,cur)=>{return pre.price<cur.price?cur:pre})
}
console.log(MAXproduct(product));

//求出购物车商品总价
		// let arr = [];
		// product.forEach((item,index)=>{
		// 	arr.push(item.price);
		// })
		// console.log(arr);
		// let num = 0;
		// for(let i=0; i<arr.length; i++){
		// 	num += arr[i];
		// }
		// console.log(num);
function everyPrice(array){
	return array.reduce((total,cur)=>{
		return total+=cur.price
	},0)
}
console.log(everyPrice(product));
		
//去重以下数组
// let arr = [1,2,3,3,4,5]
// for(let i=0; i<arr.length; i++){
// 	for(let j=i+1; j<arr.length; j++){
// 		if(arr[i] == arr[j]){
// 			arr.splice(j,1);
// 			console.log(arr);
// 		}
// 	}
// }
let arr1  = [1,2,3,3,4,5]
const newArr = arr1.reduce((arr,cur)=>{
	if(!arr.includes(cur)){
		arr.push(cur)
	}
	return arr
},[])
console.log(newArr)
// // 找出数组中相同的值出现的次数
// let arr = ['1', '2', 'Eagon', 'Eagon']
// for(let i=0; i<arr.length; i++){
// 	for(let j=i+1; j<arr.length; j++){
// 		if(arr[i] == arr[j]){
// 			console.log(arr[j]);
// 		}
// 	}
// }
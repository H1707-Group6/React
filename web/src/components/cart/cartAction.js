export function getCart(){
    return {
        url: 'getCart',
        data: {userId: 2}
    }
}

// export function goods_qty(arr){
//     console.log(arr)
//     for(var i = 0;i < arr.length;i++){
//         for(var j = i+1;j < arr.length;j++){
//             if(arr[i].id == arr[j].id){
//                 arr[i].qty++;
//                 arr.splice(j,1);
//                 getQty(arr);
//             }
//         }
//     }
//     return arr;
// }
export function genOrder(cartids, goodsids){
    return {
        url: 'genorder',
        method: 'post',
        data: {uid: 1, cartids, goodsids}
    }
}
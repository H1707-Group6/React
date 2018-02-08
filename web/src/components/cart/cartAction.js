import * as cartContants from './cartContants'
export function getCart(){
    return {
        types:[cartContants.CART_REQUESTING,cartContants.CART_REQUESTED,cartContants.CART_REQUESTERROR],
        url: 'getCart',
        data: {userId: 2}
    }
}
export function genOrder(cartids, goodsids){
    return {
        url: 'genorder',
        method: 'post',
        data: {uid: 1, cartids, goodsids}
    }
}
export function del(gid,uid){
    return {
        types:[cartContants.DEL_REQUESTING,cartContants.DEL_REQUESTED,cartContants.DEL_REQUESTERROR],
        url: 'delCart',
        method: 'post',
        data: {gid:gid,uid: uid}
    }
}
// export function getQty(){
//     console.log(55)
// }
// export function  updata(event,idx){
//     return {
//         type:'cc',

//         data:{
//             e:event,
//             id:idx
//         }
//     }
//     console.log(event,idx)
//     // if(event.target.innerText =='+'){
//     //     cartlist[idx][0].qty = ++ event.target.parentNode.children[1].innerText ;
        
//     //     // this.total += Number(onePrice)
//     // }else if(event.target.innerText =='-'){
//     //     cartlist[idx][0].qty = --event.target.parentNode.children[1].innerText ;
//     //     if( cartlist[idx][0].qty<=1){
//     //          cartlist[idx][0].qty = event.target.parentNode.children[1].innerText = 1;
//     //     }
       
//     // }
//     // cartlist[idx][0].onePrice =  cartlist[idx][0].qty*cartlist[idx][0].saleprice;
//     // this.check();

//     // this.total = onePrice;
//     // // setState({total:})
//     // return this.total;
// }
// export function check(checks){
//     this.total = 0;
//     for(var i =0; i<checks.length;i++){
        
//         if(checks[i].checked){
//             this.states.total  += Number(cartlist[i][0].qty*cartlist[i][0].saleprice) ;
//         }
//     }
// }
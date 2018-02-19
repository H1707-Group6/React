import * as ajaxConstants from '../../../constants/ajaxConstants'
import * as managerConstants from './managerConstants'

export function getManagers(num){
    return {
        
        url: 'manager',
        data: {page: num}
    }
}
export function deleteManagers(id){
    return {
       types: [managerConstants.MANAGER_RQUESTING, managerConstants.MANAGER_RQUESTED, managerConstants.MANAGER_RQUESTERROR],
        url: 'managerdel',
        method: 'post',
        data: {id: id}
    }
}
export function updateManagers(id,username,password,position,updatelimit,deletelimit){
    return {
       types: [managerConstants.MANAGER_RQUESTING, managerConstants.MANAGER_RQUESTED, managerConstants.MANAGER_RQUESTERROR],
        url: 'managerupdate',
        method: 'post',
        data: {id:id,username:username,password:password,position:position,updatelimit:updatelimit,deletelimit:deletelimit}
    }
}
export function insertManagers(username,password,position,updatelimit,deletelimit){
    return {
       types: [managerConstants.MANAGER_RQUESTING, managerConstants.MANAGER_RQUESTED, managerConstants.MANAGER_RQUESTERROR],
        url: 'managerinsert',
        method: 'post',
        data: {username:username,password:password,position:position,updatelimit:updatelimit,deletelimit:deletelimit}
    }
}

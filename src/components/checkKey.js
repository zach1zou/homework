 
export default function checkKey(key) {
    // 获取权限数组
         let permissionData = JSON.parse(sessionStorage.getItem("permissionData"))
    //   console.log(permissionData);
    //如果传入的元素key不在权限数组里，则不可显示
    let index = permissionData.indexOf(key)
    if (index > -1) {
        return true;
    } else {
        return false;
    }
        }
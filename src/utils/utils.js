//工具函数
import qs from 'qs';

//url拼接 去除空值的option
export const  createUrl=obj=>{
  const  newObj={};
    for(var v in obj){
      if(obj[v]!=""){
        newObj[v] = obj[v]
      }
    }
    return qs.stringify(newObj);
}

//将 毫秒数的时间换算成 展示时间
export const changeTime=time=>{
    //1506590567000
 return time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日 " + time.getHours() + "点" + time.getMinutes() + "分" + time.getSeconds() + "秒";

}

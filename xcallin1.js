
/*
20210727 Milo
软件名：微信小程序携程：周周乐
[rewrite_remote]
https://m.ctrip.com/restapi  script-request-body  https://raw.githubusercontent.com/milomoon/MyScripts/main/zzlin1.js
[HITM]
m.ctrip.com
cron 30 0 * * *

一、完成周周乐一项任务获得任务ck
二、进入周周乐获得抽卡数据ck
三、完成一次抽卡获得抽卡ck
四、完成一次签到获得签到ck
五、完成一次会员签到获得ck
*/






const $ = new Env('携程周周乐');
let xcckspurl = $.getdata('xcckspurl')
let xccksphd = $.getdata('xccksphd')
let xcckspbody = $.getdata('xcckspbody')
let xcfpurl = $.getdata('xcfpurl')
let xcfphd = $.getdata('xcfphd')
let xcfpbody = $.getdata('xcfpbody')
let xcsjurl = $.getdata('xcsjurl')
let xcsjhd = $.getdata('xcsjhd')
let xcsjbody = $.getdata('xcsjbody')
let xcqdurl = $.getdata('xcqdurl')
let xcqdhd = $.getdata('xcqdhd')
let xcqdbody = $.getdata('xcqdbody')
let xchyqdurl = $.getdata('xchyqdurl')
let xchyqdhd = $.getdata('xchyqdhd')
let xchyqdbody = $.getdata('xchyqdbody')
let user_id = ''
let Y = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await xcqdck()     
    await xcckspck() 
    await xcfpck()     
    await xcsjck()     
    await xchyqdck()   
  } else {
    await xchyqd()
    await $.wait(1000);
    await xcqdqd();
    await $.wait(1000);
    for (let c = 0; c < 5; c++) {
        $.index = c + 1
       console.log(`\n第${c+1}次看视频！`)

               await xcckspqd()
               await $.wait(1000);}
   await xc10s1(); 
   await $.wait(1000);
   await xc10s2();
   await $.wait(1000);
   await xc10s3();
   await $.wait(1000);
   await xc10s4();
   await $.wait(1000);
   await xc10s5();
   await $.wait(1000);
   await xclq1();
   await $.wait(1000);
   await xclq2();
   await $.wait(1000);
   await xclq3();
   await $.wait(1000);
   await xclq4();
   await $.wait(1000);
   await xclq5();
   await $.wait(1000);
   await xclq6();
   await $.wait(1000);
   await xcsj()
   await $.wait(1000)
}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//获取ck
function xcckspck() {
   if ($request.url.indexOf("userTodoTask") > -1) {
    $.setdata($request.url,'xcckspurl')
    $.log(xcckspurl)
$.setdata(JSON.stringify($request.headers),'xccksphd')
$.log(xccksphd)
    $.setdata($request.body,'xcckspbody')
$.log(xcckspbody)
   $.msg($.name,"","携程五次视频body成功！")
    } 
  }

  function xcfpck() {
    if ($request.url.indexOf("sendZzlCardToUser") > -1) {
     $.setdata($request.url,'xcfpurl')
     $.log(xcfpurl)
 $.setdata(JSON.stringify($request.headers),'xcfphd')
 $.log(xcfphd)
     $.setdata($request.body,'xcfpbody')
 $.log(xcfpbody)
    $.msg($.name,"","获取携程发牌body成功！")
     } 
   }
 
   function xcsjck() {
     if ($request.url.indexOf("getZzlUserCard") > -1) {
      $.setdata($request.url,'xcsjurl')
      $.log(xcsjurl)
  $.setdata(JSON.stringify($request.headers),'xcsjhd')
  $.log(xcsjhd)
      $.setdata($request.body,'xcsjbody')
  $.log(xcsjbody)
     $.msg($.name,"","获取携程发牌数据body成功！")
      } 
    }


    function xcqdck() {
        if ($request.url.indexOf("signin") > -1) {
         $.setdata($request.url,'xcqdurl')
         $.log(xcqdurl)
     $.setdata(JSON.stringify($request.headers),'xcqdhd')
     $.log(xcqdhd)
         $.setdata($request.body,'xcqdbody')
     $.log(xcqdbody)
        $.msg($.name,"","携程签到获取body成功！")
         }     
       }


       function xchyqdck() {
        if ($request.url.indexOf("saveDailyBonus") > -1) {
         $.setdata($request.url,'xchyqdurl')
         $.log(xchyqdurl)
     $.setdata(JSON.stringify($request.headers),'xchyqdhd')
     $.log(xchyqdhd)
         $.setdata($request.body,'xchyqdbody')
     $.log(xchyqdbody)
        $.msg($.name,"","获取携程会员签到body成功！")
         } 
       }
//签到 
function xcqdqd(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xcqdurl.match(/user_id=(\d+)/)[1]
  //let url = {url : `https://m.ctrip.com/restapi/soa2/16575/signin`,
    let url = {url : xcqdurl,
          headers : 
  JSON.parse(xcqdhd),
          body : xcqdbody
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.errcode == 0){
          console.log('\n普通签到成功：'+result.errmsg)
  }else{
          console.log('\n普通签到失败或已签到'+result.errmsg)
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }


  function xchyqd(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xchyqdurl.match(/user_id=(\d+)/)[1]
  //let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
    let url = {url : xchyqdurl,
          headers : 
  JSON.parse(xchyqdhd),
          body : xchyqdbody
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.resultcode == 0){
          console.log('\n会员签到成功：'+result.resultmessage)
  }else{
          console.log('\n会员签到失败：'+result.resultmessage)
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }
  


function xcckspqd(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
  //let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":69,"taskId":405,"isDone":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}} `
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n观看成功：'+result.msg)
}else{
        console.log('\n观看失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}



function xc10s1(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
//let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userAcceptPrize`,
  let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":71,"taskId":407,"isDone":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}} `
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n拼团浏览成功：'+result.msg)
}else{
        console.log('\n拼团浏览失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}



function xc10s2(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
//let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
  let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":70,"taskId":406,"isDone":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n积分浏览成功：'+result.msg)
}else{
        console.log('\n积分浏览失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}


function xc10s3(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
//let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
  let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":74,"taskId":421,"isDone":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n暑期打工浏览成功：'+result.msg)
}else{
        console.log('\n暑期打工浏览失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}



function xc10s4(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
  //let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
    let url = {url : xcckspurl,
          headers : 
  JSON.parse(xccksphd),
          body : `{"projectId":14,"demandId":39,"taskId":316,"isDone":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 200){
          console.log('\n抽好物任务成功：'+result.msg)
  }else{
          console.log('\n抽好物任务失败：'+result.msg)
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }




  function xc10s5(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
  //let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
    let url = {url : xcckspurl,
          headers : 
  JSON.parse(xccksphd),
          body : `{"projectId":14,"demandId":82,"taskId":435,"isDone":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 200){
          console.log('\n游游一分钟任务成功：'+result.msg)
  }else{
          console.log('\n游游一分钟任务失败：'+result.msg)
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }











//领取抽奖机会
function xclq1(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userAcceptPrize`,
  //let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":69,"taskId":405,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n5次机会领取成功：'+result.msg)
}else{
        console.log('\n5次机会领取失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}



function xclq2(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userAcceptPrize`,
  //let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":71,"taskId":407,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n拼团浏览抽奖领取成功：'+result.msg)
}else{
        console.log('\n拼团浏览抽奖领取失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}



function xclq3(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userAcceptPrize`,
 // let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":70,"taskId":406,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n积分浏览抽奖领取成功：'+result.msg)
}else{
        console.log('\n积分浏览抽奖领取失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}


function xclq4(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userAcceptPrize`,
  //let url = {url : xcckspurl,
        headers : 
JSON.parse(xccksphd),
        body : `{"projectId":14,"demandId":74,"taskId":421,"isDone":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n暑期打工浏览奖励领取成功：'+result.msg)
}else{
        console.log('\n暑期打工浏览奖励领取失败：'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}




function xclq5(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
  let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userAcceptPrize`,
    //let url = {url : xcckspurl,
          headers : 
  JSON.parse(xccksphd),
          body : `{"projectId":14,"demandId":39,"taskId":316,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 200){
          console.log('\n抽好物奖励领取成功：'+result.msg)
  }else{
          console.log('\n抽好物奖励领取失败：'+result.msg)
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }



  function xclq6(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xcckspurl.match(/user_id=(\d+)/)[1]
cid = xcckspbody.match(/"cid":"(\d+)"/)[1]
auth = xcckspbody.match(/"auth":"(\w+)"/)[1]
appId1 = xcckspbody.match(/"appId","value":"(\w+)"/)[1]
  let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userAcceptPrize`,
    //let url = {url : xcckspurl,
          headers : 
  JSON.parse(xccksphd),
          body : `{"projectId":14,"demandId":82,"taskId":435,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 200){
          console.log('\n游游一分钟奖励领取成功：'+result.msg)
  }else{
          console.log('\n游游一分钟奖励领取失败：'+result.msg)
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }



  function xcsj(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xcfpurl.match(/user_id=(\d+)/)[1]
  //let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
    let url = {url : xcsjurl,
          headers : 
  JSON.parse(xcsjhd),
          body : xcsjbody
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.errCode == 0){
          console.log('\n获取次数成功：'+result.chanceNum)
    let Y = result.chanceNum
    for (let c = 0; c < Y; c++) {
      $.index = c + 1
     console.log(`\n第${c+1}次发牌！`)
  
             await xcfpqd()
             await $.wait(1000);}
              
  }else{
          console.log('\n获取次数失败：'+result.chanceNum)
  
  }
 
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }




function xcfpqd(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcfpurl.match(/user_id=(\d+)/)[1]
//let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
  let url = {url : xcfpurl,
        headers : 
JSON.parse(xcfphd),
        body : xcfpbody
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errCode == 0){
        console.log('\n发牌成功：'+result.activityId)
}else{
        console.log('\n观看失败：'+result.activityId)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

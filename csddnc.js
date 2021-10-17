



const $ = new Env('叮咚买菜农场');
//感谢Tom大神
//实现功能：1、叮咚买菜app每日签到；2、叮咚鱼塘每日签到、连续签到、任务列表任务、定时福袋、喂食。3、叮咚农场每日签到、连续签到、任务列表任务、定时福袋、浇水。
//时间设置： 30 0,8,11,17 * * *
//变量设置： export ddcookie="DDXQSESSID=xxxxxxxxx"@"DDXQSESSID=xxxxxxx"
//适配青龙多账号
//var ddcookie = process.env.ddcookie ?? ""
let status;

status = (status = ($.getval("ddstatus") || "1")) > 1 ? `${status}` : "";
let cookiearr = []
let cookie = $.isNode() ? (process.env.ddcookie ? process.env.ddcookie : "") : ($.getdata('ddcookie') ? $.getdata('ddcookie') : "")

//cookiearr = ddcookie.split('@');//使用@分解字符串变成数组


let cookie = ""  , A = '' , B = ''

let cookies = ''

let taskcode = ''
let taskid = ''
let taskzt = ''
let taskname = ''
let seedid = ''
let propsid = ''
let seedid1 = ''
let propsid1 = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await ddmcck()      
  } else {  if(!$.isNode()){
    cookiearr.push($.getdata('ddcookie'))
//多账号循环
console.log(`=================== 共${cookiearr.length}个账号 ==================\n`)
      for (let i = 0; i < cookiearr.length; i++) {
        if (cookiearr[i]) {
          $.index = i + 1
         console.log(`\n【 正在签到账号${$.index} 】`)
         cookie = cookiearr[i]

    await ddmcqd()
    await $.wait(1000); 
    await gymrqd()
    await $.wait(1000);
    await gylxqd()
    await $.wait(1000);  
    await gyrwlb();
    await $.wait(1000);     
    await gyxx()
    await $.wait(1000);
    
    await ytmrqd()
    await $.wait(1000);
    await ytlxqd()
    await $.wait(1000);
    await ytrwlb();
    await $.wait(1000);
    await ytxx()
    await $.wait(1000);
    }
     
    }
  }  else{
       if (process.env.ddcookie && process.env.ddcookie.indexOf('@') > -1) {
            cookiearr = process.env.ddcookie.split('@'); }
            else{
                cookies = [process.env.ddcookie]
              }
              Object.keys(cookies).forEach((item) => {
                if (cookies[item]) {
                  cookiearr.push(cookies[item])
                }
            })
            //多账号循环
console.log(`=================== 共${cookiearr.length}个账号 ==================\n`)
      for (let i = 0; i < cookiearr.length; i++) {
        if (cookiearr[i]) {
          $.index = i + 1
         console.log(`\n【 正在签到账号${$.index} 】`)
         cookie = cookiearr[i]

    await ddmcqd()
    await $.wait(1000); 
    await gymrqd()
    await $.wait(1000);
    await gylxqd()
    await $.wait(1000);  
    await gyrwlb();
    await $.wait(1000);     
    await gyxx()
    await $.wait(1000);
    
    await ytmrqd()
    await $.wait(1000);
    await ytlxqd()
    await $.wait(1000);
    await ytrwlb();
    await $.wait(1000);
    await ytxx()
    await $.wait(1000);





  }}}

} 
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//获取ck


function ddmcck() {
    if ($request.url.indexOf("task/list") > -1) {
        
        const ddcookie = JSON.stringify($request.headers)
        if (ddcookie) $.setdata(ddcookie, `ddcookie${status}`)
        $.log(ddcookie)



        $.msg($.name, "", `叮咚买菜${status}获取数据成功`)

    }
}

 



































//读取果园任务列表
function gyrwlb(timeout = 0) {
    return new Promise((resolve) => {
  let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/list?latitude=23.001539&longitude=113.13065&env=PE&station_id=&city_number=1117&api_version=9.28.0&app_client_id=3&native_version=9.36.2&h5_source=&page_type=2&gameId=2&`,
             headers : {"Cookie": `${cookie}`,
                        "DDMC-GAME-TID": "2"}
             
      };
        $.get(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 0){
          console.log('\n任务列表获取：'+result.success)
          A = result.data.userTasks.length
          console.log(`============共${A}个任务 ==================\n`)
			
            for (let i = 0; i < A; i++) {
                      if (result.data.userTasks[i].taskCode) {
                        $.index = i + 1
                       console.log(`\n【 正在执行第${$.index}个任务 】`)
                       taskcode = result.data.userTasks[i].taskCode
                       taskname = result.data.userTasks[i].taskName
                       taskzt = result.data.userTasks[i].buttonStatus
                       if (taskzt == 'TO_ACHIEVE') {
                          await zxgyrw()  //执行果园任务
                          await $.wait(1000)
                          
                        }else{
                            console.log(`${taskname}`+'\n任务已完成，无需重复执行')                          
                    }
  }else{
          console.log('\n任务列表获取失败')
         
  }}}
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }








//执行果园任务
function zxgyrw(timeout = 0) {
    return new Promise((resolve) => {
  let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/achieve?latitude=23.001539&longitude=113.13065&env=PE&station_id=&city_number=1117&api_version=9.28.0&app_client_id=3&native_version=9.36.2&h5_source=&page_type=2&gameId=2&taskCode=${taskcode}&`,
             headers : {"Cookie": `${cookie}`,
                        "DDMC-GAME-TID": "2"}
             
      };
        $.get(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 0){
          console.log(`${taskname}`+'\n执行：'+result.success+','+result.data.buttonStatus)
          taskid = result.data.userTaskLogId
          await lqgyrwjl()  //领取果园任务奖励
  }else{
          console.log(`${taskname}`+'\n执行失败')
         
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }




//领取果园任务奖励
function lqgyrwjl(timeout = 0) {
    return new Promise((resolve) => {
  let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/reward?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.001539&longitude=113.13065&userTaskLogId=${taskid}`,
             headers : {"Cookie": `${cookie}`,
                        "DDMC-GAME-TID": "2"}
             
      };
        $.get(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 0){
          console.log(`${taskname}`+'\n领取：'+result.success)
          
  }else{
          console.log('\n领取失败')
         
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }

































//果园信息
function gyxx(timeout = 0) {
    return new Promise((resolve) => {
  let url = {url : `https://farm.api.ddxq.mobi/api/v2/userguide/orchard/detail?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.009539&longitude=113.13065&gameId=2&cityCode=1117`,
             headers : {"Accept": "*/*",
             "Accept-Encoding": "gzip, deflate, br",
             "Accept-Language": "zh-cn",
             "Connection": "keep-alive",
             "Cookie": `${cookie}`,
             "DDMC-GAME-TID": "2",
             "Host": "farm.api.ddxq.mobi",
             "Origin": "https://orchard-m.ddxq.mobi",
             "Referer": "https://orchard-m.ddxq.mobi/?is_nav_hide=true&isResetAudio=true&s=mine_orchard","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 xzone/9.36.2 station_id/5fa39bcd57597600010e795b"},
             };
        $.get(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 0){
          console.log('\n获取数据成功：水滴剩余数'+result.data.feed.amount)
          seedid = result.data.baseSeed.seedId
          propsid = result.data.feed.propsId
          B = parseInt(result.data.feed.amount/10)
          console.log('\n可浇水次数'+B)
           for (let c = 0; c < B; c++) {
            $.index = c + 1
            console.log(`\n第${c+1}次浇水！`)
           
                 await gyjs()  //执行果园浇水任务
                 await $.wait(1000)}
                 

  }else{
          console.log('\n获取失败')
         
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }







//果园浇水
function gyjs(timeout = 0) {
    return new Promise((resolve) => {
  let url = {url : `https://farm.api.ddxq.mobi/api/v2/props/feed?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.009539&longitude=113.13065&propsCode=FEED&seedId=${seedid}&propsId=${propsid}`,
             headers : {"Accept": "*/*",
             "Accept-Encoding": "gzip, deflate, br",
             "Accept-Language": "zh-cn",
             "Connection": "keep-alive",
             "Cookie": `${cookie}`,
             "DDMC-GAME-TID": "2",
             "Host": "farm.api.ddxq.mobi",
             "Origin": "https://orchard-m.ddxq.mobi",
             "Referer": "https://orchard-m.ddxq.mobi/?is_nav_hide=true&isResetAudio=true&s=mine_orchard",
             "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 xzone/9.36.2 station_id/5fa39bcd57597600010e795b"},
             };
        $.get(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 0){
          console.log('\n浇水：'+result.success+','+result.data.seed.msg)
          
  }else{
          console.log('\n浇水失败')
         
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }




//果园每日签到
function gymrqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/achieve?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.009539&longitude=113.13065&taskCode=DAILY_SIGN`,
           headers : {"Cookie": `${cookie}`,
                      "DDMC-GAME-TID": "2"}
           
    };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('果园每日签到'+`${result.msg}`+'\n领取：'+result.data.rewards.amount)
        
}else{
        console.log('\n果园每日签到失败'+`${result.msg}`)
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}





//果园连续签到
function gylxqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/achieve?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.009539&longitude=113.13065&taskCode=CONTINUOUS_SIGN`,
           headers : {"Cookie": `${cookie}`,
                      "DDMC-GAME-TID": "2"}
           
    };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('果园连续签到'+`${result.msg}`+'\n领取：'+result.data.rewards.amount)
        
}else{
        console.log('\n果园连续签到失败'+`${result.msg}`)
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}




















































































//读取鱼塘任务列表
function ytrwlb(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/list?latitude=23.001539&longitude=113.13065&env=PE&station_id=&city_number=1117&api_version=9.28.0&app_client_id=3&native_version=9.36.2&h5_source=&page_type=2&gameId=2&`,
           headers : {"Cookie": `${cookie}`}
           
    };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n任务列表获取：'+result.success)
        A = result.data.userTasks.length
        console.log(`============共${A}个任务 ==================\n`)
    
          for (let i = 0; i < A; i++) {
                    if (result.data.userTasks[i].taskCode) {
                      $.index = i + 1
                     console.log(`\n【 正在执行第${$.index}个任务 】`)
                     taskcode = result.data.userTasks[i].taskCode
                     taskname = result.data.userTasks[i].taskName
                     taskzt = result.data.userTasks[i].buttonStatus
                     if (taskzt == 'TO_ACHIEVE') {
                        await zxytrw()  //执行鱼塘任务
                        await $.wait(1000)
                        
                      }else{
                          console.log(`${taskname}`+'\n任务已完成，无需重复执行')                          
                  }
}else{
        console.log('\n任务列表获取失败')
       
}}}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}








//执行鱼塘任务
function zxytrw(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/achieve?latitude=23.001539&longitude=113.13065&env=PE&station_id=&city_number=1117&api_version=9.28.0&app_client_id=3&native_version=9.36.2&h5_source=&page_type=2&gameId=2&taskCode=${taskcode}&`,
           headers : {"Cookie": `${cookie}`}
           
    };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`${taskname}`+'\n执行：'+result.success+','+result.data.buttonStatus)
        taskid = result.data.userTaskLogId
        await lqytrwjl()  //领取鱼塘任务奖励
}else{
        console.log(`${taskname}`+'\n执行失败')
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}




//领取鱼塘任务奖励
function lqytrwjl(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/reward?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.001539&longitude=113.13065&userTaskLogId=${taskid}`,
           headers : {"Cookie": `${cookie}`}
           
    };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`${taskname}`+'\n领取：'+result.success)
        
}else{
        console.log('\n领取失败')
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}

















//鱼塘信息
function ytxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/userguide/detail?api_version=9.1.0&app_client_id=1&station_id=&native_version=&app_version=9.36.2&uid=&latitude=23.009539&longitude=113.13065&gameId=1&guideCode=FISHPOND_NEW`,
           headers : {"Accept": "*/*",
           "Accept-Encoding": "gzip, deflate, br",
           "Accept-Language": "zh-cn",
           "Connection": "keep-alive",
           "Cookie": `${cookie}`},
           };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n获取数据成功：鱼粮剩余数'+result.data.feed.amount)
        seedid1 = result.data.baseSeed.seedId
        propsid1 = result.data.feed.propsId
        B = parseInt(result.data.feed.amount/10)
        console.log('\n可喂食次数'+B)
         for (let c = 0; c < B; c++) {
          $.index = c + 1
          console.log(`\n第${c+1}次喂食！`)
         
               await ytws()  //执行鱼塘喂食任务
               await $.wait(1000)}
               

}else{
        console.log('\n获取失败')
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}







//鱼塘喂食
function ytws(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/props/feed?api_version=9.1.0&app_client_id=1&station_id=&native_version=&app_version=9.36.2&uid=&latitude=23.009539&longitude=113.73065&gameId=1&propsId=${propsid1}&seedId=${seedid1}`,
           headers : {"Accept": "*/*",
           "Accept-Encoding": "gzip, deflate, br",
           "Accept-Language": "zh-cn",
           "Connection": "keep-alive",
           "Cookie": `${cookie}`,
           "Host": "farm.api.ddxq.mobi",
           "Origin": "https://orchard-m.ddxq.mobi",
           "Referer": "https://orchard-m.ddxq.mobi/?is_nav_hide=true&isResetAudio=true&s=mine_orchard",
           "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 xzone/9.36.2 station_id/5fa39bcd57597600010e795b"},
           };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n喂食：'+result.success+','+result.data.seed.msg)
        
}else{
        console.log('\n喂食失败')
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}





//鱼塘每日签到
function ytmrqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/achieve?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.009539&longitude=113.13065&taskCode=DAILY_SIGN`,
           headers : {"Cookie": `${cookie}`}
           
    };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('鱼塘每日签到'+`${result.msg}`+'\n领取：'+result.data.rewards.amount)
        
}else{
        console.log('\n鱼塘每日签到失败'+`${result.msg}`)
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}





//鱼塘连续签到
function ytlxqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://farm.api.ddxq.mobi/api/v2/task/achieve?api_version=9.1.0&app_client_id=1&station_id=&native_version=&uid=&latitude=23.009539&longitude=113.13065&taskCode=CONTINUOUS_SIGN`,
           headers : {"Cookie": `${cookie}`}
           
    };
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('鱼塘连续签到'+`${result.msg}`+'\n领取：'+result.data.rewards.amount)
        
}else{
        console.log('\n鱼塘连续签到失败'+`${result.msg}`)
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}
























function ddmcqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {url : `https://sunquan.api.ddxq.mobi/api/v2/user/signin/`,
           headers : {"Cookie": `${cookie}`}
           
    };
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n签到成功，获取积分：'+result.data.point+'，连续签到:'+result.data.sign_series+'天')
        
}else{
        console.log('\n签到失败')
       
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}






  function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

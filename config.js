//查询今日是否签到成功接口  https://api.juejin.cn/growth_api/v1/get_today_status
module.exports = {
  //掘金相关参数
  nuggets: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到接口
    freeCheckUrl: `https://api.juejin.cn/growth_api/v1/lottery_config/get`, //免费抽奖次数查询
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖接口
    headers: {
      Referer: "https://juejin.cn/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
      cookie: `_ga=GA1.2.1799954712.1668415459; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227165789784551802406%2522%252C%2522user_unique_id%2522%253A%25227165789784551802406%2522%252C%2522timestamp%2522%253A1668415458962%257D; MONITOR_WEB_ID=501cf844-6002-44ab-b13d-b4445b03ea82; passport_csrf_token=a8e802a6d99ab648dfc3fc0dc751d51d; passport_csrf_token_default=a8e802a6d99ab648dfc3fc0dc751d51d; n_mh=eDykKa9X8smSJGfZH80UqmPr9Lql3VzVjY-jgxyv-Xw; sid_guard=046b748cf5367e925d1351fccf241711%7C1670293203%7C31536000%7CWed%2C+06-Dec-2023+02%3A20%3A03+GMT; uid_tt=e5d32433be419b56c0af300cf75cfe07; uid_tt_ss=e5d32433be419b56c0af300cf75cfe07; sid_tt=046b748cf5367e925d1351fccf241711; sessionid=046b748cf5367e925d1351fccf241711; sessionid_ss=046b748cf5367e925d1351fccf241711; sid_ucp_v1=1.0.0-KDFhMDk3ZGY2ZDM3ZGZmMDViYzg1MWEwYTQ1MTE5ZTc2Yzk3MzM5YTQKFwiekqD7wI3dBRDTzbqcBhiwFDgCQPEHGgJsZiIgMDQ2Yjc0OGNmNTM2N2U5MjVkMTM1MWZjY2YyNDE3MTE; ssid_ucp_v1=1.0.0-KDFhMDk3ZGY2ZDM3ZGZmMDViYzg1MWEwYTQ1MTE5ZTc2Yzk3MzM5YTQKFwiekqD7wI3dBRDTzbqcBhiwFDgCQPEHGgJsZiIgMDQ2Yjc0OGNmNTM2N2U5MjVkMTM1MWZjY2YyNDE3MTE; _tea_utm_cache_2608={%22utm_medium%22:%22user_center%22%2C%22utm_campaign%22:%22hdjjgame%22}; _gid=GA1.2.1375061693.1674870240`, //用自己的
    }, //相关请求头
  },
  //消息推送相关参数 关注pushplus微信公众号可以获得一对一推送的调用参数，不是推广
  pushPlus: {
    url: `http://www.pushplus.plus/send`, //微信推送URL
    token: `88529ea429d147c2be08ddcebef436ec`, //没有广告啊，这是免费的
  }
}
/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx5ee0a4435d16c244',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fa7cff028477a16cd8f7242bbef2d9c2',

  PROVINCE: '广东',
  CITY: '广州',

  USERS: [
	  ///---------------1-----------
    {
      // 想要发送的人的名字
      name: '居居',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ovrK55oh1bRgiS8dp8JnRdAB-4u0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'xf5eSmS8DXVsntGTD65DxjdqH4quO57WDOd0X8CUvo0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{
         // type: '*生日', name: '居居', year: '1995', date: '10-03',
       //},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '居居', year: '1995', date: '11-24',
        },
        {
          type: '生日', name: '小宁', year: '1995', date: '01-20',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '06-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-06-20' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
	  //------------End-----1---------
	  
	 ///-------------------------2-------------- 
	{
	      // 想要发送的人的名字
	      name: '小宁',
	      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
	      id: 'ovrK55ha2b3EJjVtlxk7QRECg-wc',
	      // 使用微信测试号：你想对他发送的模板消息的模板ID
	      useTemplateId: 'hIkzmOurtAy3lwQCsCO7YirBiDqvk5K3uSrJ3DKWPm8',
	      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
	      horoscopeDate: '01-20',
	      festivals: [
	        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
	        //{
	         // type: '*生日', name: '居居', year: '1995', date: '10-03',
	       //},
	        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
	        {
	          type: '生日', name: '居居', year: '1995', date: '11-24',
	        },
	        {
	          type: '生日', name: '小宁', year: '1995', date: '01-20',
	        },
	        {
	          type: '节日', name: '相识纪念日', year: '2022', date: '06-20',
	        },
	      ],
	      // 我们在一起已经有xxxx天了的配置
	      customizedDateList: [
	        // 在一起的日子
	        { keyword: 'love_day', date: '2022-06-20' },
	        // 结婚纪念日
	        ////{ keyword: 'marry_day', date: '2022-09-09' },
	      ],
	    },
	  ////////end----------2
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  //CALLBACK_TEMPLATE_ID: 'DKVDHPqk-_P_Eby8owy-sj2uDsZd_4HTbUyeuaFMwMc',

  //CALLBACK_USERS: [
    //{
      //name: '小宁',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      //id: 'ovrK55ha2b3EJjVtlxk7QRECg-wc',
    //}
  //],

}

module.exports = USER_CONFIG


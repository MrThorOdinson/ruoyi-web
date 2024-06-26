module.exports = (req, res) => {
  try {
    let data = req.body.data; 
    let obj ={
        "status": "Success",
        "message": "",
        "data": {
            "isHideServer": false,
            "isUpload": false,
            "auth":   process.env.AUTH_SECRET_KEY?true:false ,
            "model": "ChatGPTAPI",
            "amodel": process.env.OPENAI_API_MODEL?? "gpt-3.5-turbo"
            ,isApiGallery:    process.env.MJ_API_GALLERY ? true : false 
            ,cmodels : process.env.CUSTOM_MODELS??'' 
            ,baiduId : process.env.TJ_BAIDU_ID?? "" 
            ,googleId: process.env.TJ_GOOGLE_ID?? ""
            , notify : process.env.SYS_NOTIFY?? "" 
        }
    }
    res.writeHead(200).end(
        JSON.stringify( obj )
    );
  } catch (e) {
    console.error('session.js', e, req.body);
  }
}
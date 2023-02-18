module.exports={
    lintOnSave:false,
    //webpack中的代理跨域
devServer:{
    proxy:{
        '/api':{
            //服务器地址
            target:'http://gmall-h5-api.atguigu.cn'
        }
    }
}
}


export default {
    path:"/login",
    name:"登录",
    component:()=>import("../../views/login"),
    // 独享路由守卫、
    beforeEnter: (to, from, next) => {
        //  通过存储过程，判断存储中是否登录
        if(!localStorage.isLogin){
            //  没有登录，进入登录页
            next();
        }else{
            //  有登录，进入主页
            next("/home");

        }
    }
}
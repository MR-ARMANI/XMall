export default {
    path:"/user",
    name:"我的",
    component:()=>import("../../views/user"),
    redirect: '/user/information',
    children:[
        {
            path: '/user/orderList',
            name: '订单列表',
            component:()=>import("../../components/user/orderList.vue")
        },
        {
            path: '/user/orderDetail',
            name: '订单详情',
            component:()=>import("../../components/user/orderDetail.vue")
        },
        {
            path: '/user/information',
            name: '账户资料',
            component:()=>import("../../components/user/information.vue")
        },
        {
            path: '/user/addressList',
            name: '收货地址',
            component:()=>import("../../components/user/addressList.vue")
        },
        {
            path: '/user/coupon',
            name: '我的优惠',
            component:()=>import("../../components/user/coupon.vue")
        },
        {
            path: '/user/support',
            name: '售后服务',
            component:()=>import("../../components/user/support.vue")
        },
        {
            path: '/user/aihuishou',
            name: '以旧换新',
            component:()=>import("../../components/user/aihuishou.vue")
        }
    ]
}

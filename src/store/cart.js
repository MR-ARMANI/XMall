//  存放登录状态
export default {
    namespaced: true,
    state:{
        zeronum:0,

        value:0,
        
        goodsLists:[
            {price:"4799",name:"支付测试商品 IPhone X 全面屏 全面绽放"}
        ],
        // 购物车列表
        cartLists:[
        ],
        //总价格
        totalPrice:0,
        //订单列表
        orderLists:[
        ],
        //地址
        addressData:[
            {id:'1',name:'小明',telNumber:'13000000000',address:'浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',isDefault: true,},
            {id:'2',name:'小红',telNumber:'1830000000',address:'浙江省杭州市拱墅区莫干山路 50 号',},
        ],

        chosenAddressId: '1',

        //编辑地址序号
        editnum:0,
    },
    mutations:{
           add(state,obj){
            // 加入购物车，把数据添加cartLists购物车列表
            // 1.判断如果没有数据添加数据，购物车中存在数据，数据加一
            // 获取数据中id
            let index = state.cartLists.findIndex(val => val.id == obj.id);
            if(index != "-1"){ //存在，数量加一
                state.cartLists[index].value += 1;
                state.value = state.cartLists[index].value;//修改数量
            }else{ //不存在添加数据
                obj.checked = true; //默认选中
                state.cartLists.push(obj);
                state.value = 1;//数量
            }
        },
        edit(state,obj){
            Object.assign(state.lists,obj);
        }
    },
    actions:{

    },
}
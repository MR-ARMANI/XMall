<template>
  <div>
    <y-shelf title="收货地址">
      <span slot="right">
        <y-button text="添加收货地址" style="margin: 0" @btnClick="addDate()"></y-button>
      </span>

      <div slot="content">
        <div>
          <div class="table-title">
            <span class="name">姓名</span>
            <span class="address">详细地址</span>
            <span class="tel">电话</span>
          </div>
          <div>
            <div
              class="address-item"
              v-for="(item,index) in this.$store.state.cart.addressData"
              :key="index"
            >
              <div class="name">{{item.name}}</div>
              <div class="address-msg">{{item.address}}</div>
              <div class="telephone">{{item.telNumber}}</div>
              <div class="defalut">
                <a href="javascript:;" class="defalut-address"></a>
              </div>

              <div class="operation">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="small"
                  @click="update(item,index)"
                ></el-button>
                <el-button type="danger" icon="el-icon-delete" size="small" @click="del(index)"></el-button>
              </div>
            </div>

            <!-- <div >
                <div style="padding: 80px 0;text-align: center">
                    <div style="font-size: 20px">你还未添加收货地址</div>
                    <div style="margin: 20px ">
                    <y-button text="添加地址" @btnClick="update()"></y-button>
                    </div>
                </div>
            </div>-->
          </div>
        </div>
      </div>
    </y-shelf>

    <y-popup :open="popupOpen" @close="popupOpen=false" :title="popupTitle" :data-id="1 ">
      <div slot="content" class="md">
        <div>
          <input type="text" placeholder="收货人姓名" v-model="name" />
        </div>
        <div>
          <input type="number" placeholder="手机号码" v-model="telNumber" />
        </div>
        <div>
          <input type="text" placeholder="收货地址" v-model="address" />
        </div>
        <y-button text="保存" class="btn main-btn"   @btnClick="save({userId:userId,addressId:msg.addressId,userName:msg.userName,tel:msg.tel,streetName:msg.streetName,isDefault:msg.isDefault})"></y-button>
      </div>
    </y-popup>
  </div>
</template>

<script>
import YShelf from "../shelf";
import YButton from "../button/button";
import YPopup from "../ypopup";
export default {
  data() {
    return {
      popupOpen: false,
      popupTitle: "管理收货地址",
      msg: {
        addressId: "",
        userName: "",
        tel: "",
        streetName: "",
        isDefault: false
      },
      chosenAddressId: "1",
      id: "1",
      name: "",
      telNumber: "",
      address: ""
    };
  },
  components: {
    YShelf,
    YButton,
    YPopup
  },
  methods: {
    // 修改
    update(item) {
      this.popupOpen = true;

      if (item) {
        this.popupTitle = "管理收货地址";
        this.name = item.name;
        this.telNumber = item.telNumber;
        this.address = item.address;
        this.isDefault = item.isDefault;
        this.id = item.id;
      } else {
        this.popupTitle = "新增收货地址";
        this.name = "";
        this.telNumber = "";
        this.address = "";
        this.isDefault = false;
        this.id = this.$store.state.cart.addressData.length + 1;
      }
    },
    addDate() {
      this.popupOpen = true;
      this.popupTitle = "新增收货地址";
      this.id = this.$store.state.cart.addressData.length + 1;
      this.$store.state.cart.addressData.push({
        id: this.id,
        name: this.name,
        telNumber: this.telNumber,
        address: this.address,
        isDefault: false
      });
    },
    del(index) {
      this.$store.state.cart.addressData.splice(index, 1);
    },

    save() {
      this.popupOpen = false;
      if (this.id) {
        if (this.name != "" && this.telNumber != "" && this.address != "") {
          this.$store.state.cart.addressData[this.id - 1].name = this.name;
          this.$store.state.cart.addressData[
            this.id - 1
          ].telNumber = this.telNumber;
          this.$store.state.cart.addressData[
            this.id - 1
          ].address = this.address;
          this.name = "";
          this.telNumber = "";
          this.address = "";
        }
      } 
    }

    // update(item) {
    //   this.popupOpen = true;
    //   if (item) {
    //     this.popupTitle = "管理收货地址";
    //     this.msg.userName = item.userName;
    //     this.msg.tel = item.tel;
    //     this.msg.streetName = item.streetName;
    //     this.msg.isDefault = item.isDefault;
    //     this.msg.addressId = item.addressId;
    //   } else {
    //     this.popupTitle = "新增收货地址";
    //     this.msg.userName = "";
    //     this.msg.tel = "";
    //     this.msg.streetName = "";
    //     this.msg.isDefault = false;
    //     this.msg.addressId = "";
    //   }
    // }
  },
  created() {
    this.id = this.$store.state.cart.addressData.id;
    this.name = this.$store.state.cart.addressData.name;
    this.telNumber = this.$store.state.cart.addressData.telNumber;
    this.address = this.$store.state.cart.addressData.address;

    //地址
    this.chosenAddressId = this.$store.state.cart.chosenAddressId;
  }
};
</script>

<style lang="scss" scoped>
.table-title {
  position: relative;
  z-index: 1;
  line-height: 38px;
  height: 38px;
  padding: 0 0 0 38px;
  font-size: 12px;
  background: #eee;
  border-bottom: 1px solid #dbdbdb;
  border-bottom-color: rgba(0, 0, 0, 0.08);
  .name {
    float: left;
    text-align: left;
  }
  span {
    width: 137px;
    float: left;
    text-align: center;
    color: #838383;
  }
  .address {
    margin-left: 115px;
  }
  .tel {
    margin-left: 195px;
  }
}

.address-item {
  display: flex;
  align-items: center;
  height: 115px;
  text-align: center;
  .name {
    width: 106px;
  }
  .address-msg {
    flex: 1;
  }
  .telephone {
    width: 160px;
  }
  .defalut {
    width: 80px;
    > a {
      text-align: center;
      /*display: none;*/
    }
  }
  .operation {
    width: 135px;
    a {
      padding: 10px 5px;
    }
  }
  &:hover {
    .defalut > a {
      display: block;
    }
  }
}

.address-item + .address-item {
  border-top: 1px solid #cfcfcf;
}

.defalut-address {
  color: #626262;
  display: block;
  pointer-events: none;
  cursor: default;
}

.md {
  > div {
    text-align: left;
    margin-bottom: 15px;
    > input {
      width: 100%;
      height: 50px;
      font-size: 18px;
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
        -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
      line-height: 46px;
    }
  }
}

.btn {
  margin: 0;
  width: 100%;
  height: 50px;
  font-size: 14px;
  line-height: 48px;
}
</style>
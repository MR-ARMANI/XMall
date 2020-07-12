<template>
  <div>
    <y-shelf title="账户资料">
      <div slot="content">
        <div class="avatar-box">
          <div class="img-box">
            <img src="../../../static/images/11.jpg" alt />
          </div>
          <div class="r-box">
            <h3 style="margin-left: 13px;">修改用户名</h3>
            <y-button text="修改用户名" classStyle="main-btn" style="margin: 0;" @btnClick="editAvatar()"></y-button>
          </div>
        </div>
      </div>
    </y-shelf>

    <y-popup :open="popupOpen" @close="popupOpen=false" :title="popupTitle">
      <div slot="content" class="md">
        <div>
          <input type="text" v-model="user" placeholder="用户名" />
        </div>
        <y-button text="保存" class="btn main-btn" @btnClick="popupOpen=false"></y-button>
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
      popupTitle: "修改用户名",
      user:'',
    };
  },
  methods: {
    editAvatar() {
      this.popupOpen = true;
      this.popupTitle = "修改用户名";
      this.user = this.$store.state.user
    },
  },
  beforeUpdate(){
     this.$store.state.user = this.user 
  },
  created() {
    this.user = this.$store.state.user
  },
  components: {
    YShelf,
    YButton,
    YPopup
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.avatar-box {
  height: 124px;
  display: flex;
  margin: 0 30px 30px;
  border-bottom: #dadada solid 1px;
  line-height: 30px;
  display: flex;
  align-items: center;
  .img-box {
    @include wh(80px);
    border-radius: 5px;
    overflow: hidden;
  }
  img {
    display: block;
    @include wh(100%);
  }
  .r-box {
    margin-left: 20px;
    h3 {
      font-size: 16px;
      font-weight: 400;
      color: #333;
    }
  }
}

// 修改头像
.edit-avatar {
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @include wh(100%);
  background-color: rgba(0, 0, 0, 0.5);
  @extend %block-center;
  .content {
    display: flex;
    padding: 45px 100px 0;
  }
  > div {
    box-sizing: content-box;
    @include wh(700px, 500px);
    margin: 0;
  }
  .btn {
    width: 80px;
    height: 30px;
    margin-left: 10px;
    position: relative;
    text-align: center;
    line-height: 30px;
    text-shadow: rgba(255, 255, 255, 0.496094) 0 1px 0;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    &:hover {
    }
    a {
      color: #666;
      display: block;
      @include wh(100%);
    }
  }
  input[type="file"] {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    opacity: 0;
    width: 80px;
    height: 30px;
    cursor: pointer;
    box-sizing: border-box;
    border: 15px solid #000;
    overflow: hidden;
  }
  .edit-l {
    width: 100px;
    text-align: center;
  }
  .edit-r {
    margin-left: 20px;
    flex: 1;
    > div {
      border: 1px solid #ccc;
      width: 320px;
      height: 320px;
    }
  }
}

.image-container {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}

.close {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  padding: 0 10px;
  @extend %block-center;
  &:hover {
    svg {
      transition: all 1s;
      transform: rotate(360deg);
      transform-origin: 50% 50%;
    }
    path {
      fill: #8a8a8a;
    }
  }
}

.big {
  display: block;
  width: 320px;
  height: 320px;
}

.bootom-btn {
  padding: 0 15px;
  border-top: 1px solid #e6e6e6;
  bottom: 0;
  height: 60px;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>
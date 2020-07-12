<template>
  <div>
    <y-shelf title="售后服务">
      <div slot="content">
        <div style="padding: 118px 0px 117px;;text-align: center">
          <img src="../../../static/images/support.png">
          <br>
          <span class="support">如有疑问请联系邮箱761339887@qq.com</span>
        </div>
      </div>
    </y-shelf>
  </div>
</template>
<script>
  import YShelf from '../shelf'
  export default {
    components: {
      YShelf
    }
  }
</script>
<style lang="scss" scoped>
  .support {
    line-height: 2em;
    font-size: 22px;
    color: #999;
  }
  img{
    width: 200px;
    height: 200px;
  }
</style>

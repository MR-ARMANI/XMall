<template>
  <div>
    <y-shelf title="以旧换新">
      <div slot="content">
        <div style="padding: 118px 0px 117px;;text-align: center">
          <img src="../../../static/images/smile.png">
          <br>
          <span class="support">请问你拿什么和我换新</span>
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
    width: 204px;
    height: 200px;
  }
</style>

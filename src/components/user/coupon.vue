<template>
  <div>
    <y-shelf title="我的优惠">
      <div slot="content">
        <div style="padding: 118px 0px 117px;;text-align: center">
          <img src="../../../static/images/no-search.png">
          <br>
          <span class="no-discount">您目前还没有优惠券</span>
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
  .no-discount {
    line-height: 2em;
    font-size: 22px;
    color: #999;
  }
  img{
    width: 320px;
    height: 200px;
  }
</style>

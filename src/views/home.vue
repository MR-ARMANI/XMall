<template>
  <div>
    <headertop></headertop>
    <!-- 轮播图 -->
    <div class="banner">
      <div class="container">
        <div class="block">
          <el-carousel height="500px">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
              <img :src="require(`../../static/images/${item.url}`)" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div>
      <div class="activity-panel">
        <ul class="box">
          <li class="content">
            <img src="https://resource.smartisan.com/resource/6/610400xinpinpeijian.jpg" class="i" />
            <a class="cover-link"></a>
          </li>
          <li class="content">
            <img src="https://resource.smartisan.com/resource/6/610400yijiuhuanxin.jpg" class="i" />
            <a class="cover-link"></a>
          </li>
          <li class="content">
            <img src="https://resource.smartisan.com/resource/4/489673079577637073.png" class="i" />
            <a class="cover-link"></a>
          </li>
          <li class="content">
            <img
              src="https://resource.smartisan.com/resource/fe6ab43348a43152b4001b4454d206ac.jpg"
              class="i"
            />
            <a class="cover-link"></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="hotCommodity">
        <section class="w mt30 clearfix">
          <div class="gray-box">
            <div class="title">
              <h2>热门商品</h2>
              <div></div>
            </div>
            <div>
              <div class="hot">
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="支付测试商品 IPhone X 全面屏 全面绽放"
                          data-src="https://i.loli.net/2018/07/13/5b48a7f468bf2.png"
                          src="https://i.loli.net/2018/07/13/5b48a7f468bf2.png"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">支付测试商品 IPhone X 全面屏 全面绽放</h6>
                    <h3 class="sub-title ellipsis">此仅为支付测试商品 拍下不会发货</h3>
                    <div class="good-price pr">
                      <div class="ds pa ml_32">
                        <a href="/goodslist">
                          <input
                            type="button"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                          @click="addCart"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>4799.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="捐赠商品"
                          data-src="https://i.loli.net/2018/07/13/5b48a952de430.png"
                          src="../../static/images/wechatpay.png"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">捐赠商品</h6>
                    <h3 class="sub-title ellipsis">您的捐赠将用于本站维护 给您带来更好的体验</h3>
                    <div class="good-price pr">
                      <div class="ds pa ml_32">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>1.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="container">
      <div>
        <section class="w mt30 clearfix">
          <div class="gray-box">
            <div class="title">
              <h2>官方精选</h2>
              <div></div>
            </div>
            <div>
              <div class="floors">
                <div class="imgbanner">
                  <img
                    data-src="https://resource.smartisan.com/resource/1/1220858shoujilouceng.jpg"
                    src="https://resource.smartisan.com/resource/1/1220858shoujilouceng.jpg"
                    lazy="loaded"
                  />
                  <a class="cover-link"></a>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="坚果 3 前屏钢化玻璃保护膜"
                          data-src="https://resource.smartisan.com/resource/3a7522290397a9444d7355298248f197.jpg"
                          src="https://resource.smartisan.com/resource/3a7522290397a9444d7355298248f197.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">坚果 3 前屏钢化玻璃保护膜</h6>
                    <h3 class="sub-title ellipsis">超强透光率、耐刮花、防指纹</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>49.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="坚果 3 绒布国旗保护套"
                          data-src="https://resource.smartisan.com/resource/63ea40e5c64db1c6b1d480c48fe01272.jpg"
                          src="https://resource.smartisan.com/resource/63ea40e5c64db1c6b1d480c48fe01272.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">坚果 3 绒布国旗保护套</h6>
                    <h3 class="sub-title ellipsis">质感精良、完美贴合、周到防护</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>79.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="坚果 3 TPU 软胶透明保护套"
                          data-src="https://resource.smartisan.com/resource/5e4b1feddb13639550849f12f6b2e202.jpg"
                          src="https://resource.smartisan.com/resource/5e4b1feddb13639550849f12f6b2e202.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">坚果 3 TPU 软胶透明保护套</h6>
                    <h3 class="sub-title ellipsis">轻薄透明、完美贴合、TPU 环保材质</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>29.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="Smartisan 半入耳式耳机"
                          data-src="https://resource.smartisan.com/resource/10525c4b21f039fc8ccb42cd1586f5cd.jpg"
                          src="https://resource.smartisan.com/resource/10525c4b21f039fc8ccb42cd1586f5cd.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">Smartisan 半入耳式耳机</h6>
                    <h3 class="sub-title ellipsis">经典配色、专业调音、高品质麦克风</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>89.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="坚果 3 TPU 软胶保护套"
                          data-src="https://resource.smartisan.com/resource/b899d9b82c4bc2710492a26af021d484.jpg"
                          src="https://resource.smartisan.com/resource/b899d9b82c4bc2710492a26af021d484.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">坚果 3 TPU 软胶保护套</h6>
                    <h3 class="sub-title ellipsis">TPU 环保材质、完美贴合、周到防护</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>49.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="坚果 3 &quot;足迹&quot;背贴 乐高创始人出生"
                          data-src="https://resource.smartisan.com/resource/abb6986430536cd9365352b434f3c568.jpg"
                          src="https://resource.smartisan.com/resource/abb6986430536cd9365352b434f3c568.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">坚果 3 "足迹"背贴 乐高创始人出生</h6>
                    <h3 class="sub-title ellipsis">1891 年 4 月 7 日</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>79.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="container">
      <div>
        <section class="w mt30 clearfix">
          <div class="gray-box">
            <div class="title">
              <h2>品牌周边</h2>
              <div></div>
            </div>
            <div>
              <div class="floors">
                <div class="imgbanner">
                  <img
                    data-src="https://resource.smartisan.com/resource/z/zhoubianshangpin1220858web.jpg"
                    src="https://resource.smartisan.com/resource/z/zhoubianshangpin1220858web.jpg"
                    lazy="loaded"
                  />
                  <a class="cover-link"></a>
                </div>

                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="Smartisan 帆布鞋"
                          data-src="https://resource.smartisan.com/resource/2f9a0f5f3dedf0ed813622003f1b287b.jpg"
                          src="https://resource.smartisan.com/resource/2f9a0f5f3dedf0ed813622003f1b287b.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">Smartisan 帆布鞋</h6>
                    <h3 class="sub-title ellipsis">一双踏实、舒适的帆布鞋</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>199.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="Smartisan T恤 伍迪·艾伦出生"
                          data-src="https://resource.smartisan.com/resource/2b05dbca9f5a4d0c1270123f42fb834c.jpg"
                          src="https://resource.smartisan.com/resource/2b05dbca9f5a4d0c1270123f42fb834c.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">Smartisan T恤 伍迪·艾伦出生</h6>
                    <h3 class="sub-title ellipsis">一件内外兼修的舒适T恤</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>149.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="Smartisan T恤 任天堂发售“红白机”"
                          data-src="https://resource.smartisan.com/resource/804edf579887b3e1fae4e20a379be5b5.png"
                          src="https://resource.smartisan.com/resource/804edf579887b3e1fae4e20a379be5b5.png"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">Smartisan T恤 任天堂发售“红白机”</h6>
                    <h3 class="sub-title ellipsis">100% 美国 SUPIMA 棉、舒适拉绒质地</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>149.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="Smartisan 牛津纺衬衫"
                          data-src="https://resource.smartisan.com/resource/a1c53b5f12dd7ef790cadec0eaeaf466.jpg"
                          src="https://resource.smartisan.com/resource/a1c53b5f12dd7ef790cadec0eaeaf466.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">Smartisan 牛津纺衬衫</h6>
                    <h3 class="sub-title ellipsis">一件无拘无束的舒适衬衫</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>199.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="Smartisan Polo衫 经典款"
                          data-src="https://resource.smartisan.com/resource/daa975651d6d700c0f886718c520ee19.jpg"
                          src="https://resource.smartisan.com/resource/daa975651d6d700c0f886718c520ee19.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">Smartisan Polo衫 经典款</h6>
                    <h3 class="sub-title ellipsis">一件表里如一的舒适 POLO 衫</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>249.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="Smartisan 明信片"
                          data-src="https://resource.smartisan.com/resource/3973d009d182d8023bea6250b9a3959e.jpg"
                          src="https://resource.smartisan.com/resource/3973d009d182d8023bea6250b9a3959e.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">Smartisan 明信片</h6>
                    <h3 class="sub-title ellipsis">优质卡纸、包装精致、色彩饱满</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>9.90
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="container">
      <div>
        <section class="w mt30 clearfix">
          <div class="gray-box">
            <div class="title">
              <h2>品牌精选</h2>
              <div></div>
            </div>
            <div>
              <div class="floors">
                <div class="imgbanner">
                  <img
                    data-src="https://resource.smartisan.com/resource/a/acillouceng1220856.jpg"
                    src="https://resource.smartisan.com/resource/a/acillouceng1220856.jpg"
                    lazy="loaded"
                  />
                  <a class="cover-link"></a>
                </div>

                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="优点智能 E1 推拉式智能指纹密码锁"
                          data-src="https://resource.smartisan.com/resource/7ac3af5a92ad791c2b38bfe1e38ee334.jpg"
                          src="https://resource.smartisan.com/resource/7ac3af5a92ad791c2b38bfe1e38ee334.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">优点智能 E1 推拉式智能指纹密码锁</h6>
                    <h3 class="sub-title ellipsis">推拉一下，轻松开关</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>2699.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="极米无屏电视 CC"
                          data-src="https://resource.smartisan.com/resource/41cb562a47d4831e199ed7e2057f3b61.jpg"
                          src="https://resource.smartisan.com/resource/41cb562a47d4831e199ed7e2057f3b61.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">极米无屏电视 CC</h6>
                    <h3 class="sub-title ellipsis">720P 高清分辨率、JBL 音响、两万毫安续航力</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>2799.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="FIIL Diva Pro 全场景无线降噪耳机"
                          data-src="https://resource.smartisan.com/resource/99c548bfc9848a8c95f4e4f7f2bc1095.png"
                          src="https://resource.smartisan.com/resource/99c548bfc9848a8c95f4e4f7f2bc1095.png"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">FIIL Diva Pro 全场景无线降噪耳机</h6>
                    <h3 class="sub-title ellipsis">智能语音交互、高清无损本地存储播放</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>1499.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="畅呼吸智能空气净化器超级除甲醛版"
                          data-src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png"
                          src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">畅呼吸智能空气净化器超级除甲醛版</h6>
                    <h3 class="sub-title ellipsis">购新空净 赠价值 699 元活性炭滤芯</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>2999.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="FIIL Diva Pro 全场景无线降噪耳机"
                          data-src="https://resource.smartisan.com/resource/804b82e4c05516e822667a23ee311f7c.jpg"
                          src="https://resource.smartisan.com/resource/804b82e4c05516e822667a23ee311f7c.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">FIIL Diva Pro 全场景无线降噪耳机</h6>
                    <h3 class="sub-title ellipsis">智能语音交互、高清无损本地存储播放</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>1499.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="good-item">
                  <div>
                    <div class="good-img">
                      <a>
                        <img
                          alt="FIIL Driifter 脖挂蓝牙耳机"
                          data-src="https://resource.smartisan.com/resource/367d93db1d58f9f3505bc0ec18efaa44.jpg"
                          src="https://resource.smartisan.com/resource/367d93db1d58f9f3505bc0ec18efaa44.jpg"
                          lazy="loaded"
                        />
                      </a>
                    </div>
                    <h6 class="good-title">FIIL Driifter 脖挂蓝牙耳机</h6>
                    <h3 class="sub-title ellipsis">全天佩戴 抬手就听 HEAC稳连技术</h3>
                    <div class="good-price pr">
                      <div class="ds pa">
                        <a href="/goodslist">
                          <input
                            type="button"
                            readonly="readonly"
                            class="default-btn"
                            value="查看详情"
                            style="margin: 0px 5px;"
                          />
                        </a>
                        <input
                          type="button"
                          readonly="readonly"
                          class="main-btn"
                          value="加入购物车"
                          style="margin: 0px 5px;"
                        />
                      </div>
                      <p>
                        <span style="font-size: 14px;">￥</span>499.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="container">
      <div class="activity-panel-bottom">
        <div class="activity-panel">
          <ul class="box">
            <li class="content">
              <img
                src="https://resource.smartisan.com/resource/5ea6f0905535d7b11258e9a0f9b1abeb.jpg"
                class="i"
              />
              <a class="cover-link"></a>
            </li>
            <li class="content">
              <img
                src="https://resource.smartisan.com/resource/c245ada282824a4a15e68bec80502ad4.jpg"
                class="i"
              />
              <a class="cover-link"></a>
            </li>
            <li class="content">
              <img src="https://resource.smartisan.com/resource/m/minibanner_03.jpg" class="i" />
              <a class="cover-link"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <fooder></fooder>
  </div>
</template>

<script>
import headertop from "../components/headertop";
import fooder from "../components/fooder";
export default {
  data() {
    return {
      num: 1,
      big: "",
      value: 1, //数量
      indexFlag: 0,
      goodsLists: [
        { price: "4799", name: "支付测试商品 IPhone X 全面屏 全面绽放" }
      ],
      zeronum: 0,
      goods: [],
      orderLists: [],
      cartlists: [],
      lists: [],
      banner: [
        { url: "bannerimg04.webp" },
        { url: "bannerimg05.webp" },
        { url: "bannerimg01.webp" },
        { url: "bannerimg02.webp" },
        { url: "bannerimg03.webp" }
      ]
    };
  },
  components: {
    headertop,
    fooder
  },
  methods: {
    addCart() {
      let lastname = localStorage.getItem("isLogin");
      if (!lastname) {
        this.message("请先登录!");
        return;
      }
      //如果登录了
      else {
        let index = this.$store.state.cart.cartLists.findIndex(
          val => val.id == this.$store.state.cart.cartLists.id
        );
        if (index != "-1") {
          //存在，数量加1
          this.$store.state.cart.cartLists[index].value += 1;
        } else {
          // 不存在添加数据
          this.$store.state.cart.cartLists.checked = true; //默认选中
          this.$store.state.cart.cartLists.push({
            price: this.goodsLists[this.zeronum].price,
            name: this.goodsLists[this.zeronum].name,
            checked: true,
            value: 1
          });
        }
      }
    }
  },
  mounted() {},
  created() {
    this.goodsLists = this.$store.state.cart.goodsLists;
  }
};
</script>

<style lang="scss" scoped>
.banner {
  padding-top: 40px;
}

.default-btn {
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
  color: #646464;
  background-color: #f9f9f9;
  background-image: linear-gradient(180deg, #fff, #f9f9f9);
  width: 100px;
  height: 30px;
  line-height: 28px;
  vertical-align: middle;
  display: inline-block;
}
input {
  display: inline-block;
  cursor: pointer;
  text-align: center;
}
.main-btn {
  border: 1px solid #5c81e3;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  background-color: #678ee7;
  background-image: linear-gradient(180deg, #678ee7, #5078df);
  width: 100px;
  height: 30px;
  line-height: 28px;
  vertical-align: middle;
}

.hotCommodity {
  margin-top: 40px;
}
.activity-panel {
  width: 1220px;
  margin: 0 auto;
  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 25px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
    display: flex;
  }

  .content {
    //   flex: 1;
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 25%;
    height: 200px;
    text-align: center;
    float: left;
  }
  .content ::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    border-left: 1px solid #f2f2f2;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    content: "";
    pointer-events: none;
  }
  .i {
    width: 305px;
    height: 200px;
  }
  .cover-link {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==)
      repeat;
  }
  a {
    color: #5079d9;
    cursor: pointer;
    transition: all 0.15s ease-out;
    text-decoration: none;
  }
  a:hover {
    box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
    transition: all 0.15s ease;
  }
}

.gray-box {
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  .title {
    padding-left: 30px;
    position: relative;
    z-index: 10;
    height: 60px;
    padding: 0 10px 0 24px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: rgba(0, 0, 0, 0.06) 0 1px 7px;
    background: #f3f3f3;
    background: -webkit-linear-gradient(#fbfbfb, #ececec);
    background: linear-gradient(#fbfbfb, #ececec);
    line-height: 60px;
    font-size: 18px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #626262;
      display: inline-block;
    }
  }
}
.hot {
  display: flex;
  > div {
    flex: 1;
    width: 25%;
  }
}
.good-item {
  width: 25%;
  height: 430px;
  background: #fff;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
    .good-price p {
      display: none;
    }
    .ds {
      display: flex;
    }
  }
  .ds {
    width: 100%;
    display: none;
    margin-left: 13%;
  }
  .ml_32 {
    margin-left: 32%;
  }

  .good-img {
    img {
      margin: 50px auto 10px;
      width: 206px;
      height: 206px;
      display: block;
    }
  }
  .good-price {
    margin: 15px 0;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #d44d44;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
  }
  .good-title {
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
    margin: 0 auto;
    padding: 0 14px;
    text-align: center;
    overflow: hidden;
  }
  h3 {
    text-align: center;
    line-height: 1.2;
    font-size: 12px;
    color: #d0d0d0;
    padding: 10px;
  }
}

.floors {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .imgbanner {
    width: 50%;
    height: 430px;
    .cover-link {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 60px;
      left: 0;
      width: 50%;
      height: 430px;
      z-index: 4;
      background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==)
        repeat;
    }
    .cover-link:hover {
      box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.activity-panel-bottom {
  padding-bottom: 100px;
  .content {
    margin-right: 100px;
  }
}
</style>
<template>
  <div>
    <headertop></headertop>
    <div class="all-view clearfix">
      <div class="container">
        <div class="nav">
          <div class="w">
            <a href="javascript:;" class="active">综合排序</a>
            <a href="javascript:;" class>价格从低到高</a>
            <a href="javascript:;" class>价格从高到低</a>
            <div class="price-interval">
              <input type="number" placeholder="价格" class="input" />
              <span style="margin: 0px 5px;">-</span>
              <input type="number" placeholder="价格" />
              <input
                type="button"
                readonly="readonly"
                class="main-btn"
                value="确定"
                style="margin-left: 10px;"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="goods-box w">
          <div class="good-item">
            <div>
              <div class="good-img">
                <a>
                  <img
                    alt="支付测试商品 IPhone X 全面屏 全面绽放"
                    data-src="https://i.loli.net/2018/07/13/5b48ac7766d98.png"
                    src="https://i.loli.net/2018/07/13/5b48ac7766d98.png"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">支付测试商品 IPhone X 全面屏 全面绽放</h6>
              <h3 class="sub-title ellipsis">此仅为支付测试商品 拍下不会发货</h3>
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
                    alt="ACIL E1 颈挂式蓝牙耳机"
                    data-src="https://resource.smartisan.com/resource/406eddef8808fa5a9be9594d07ef8643.jpg"
                    src="https://resource.smartisan.com/resource/406eddef8808fa5a9be9594d07ef8643.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">ACIL E1 颈挂式蓝牙耳机</h6>
              <h3 class="sub-title ellipsis">无感佩戴，一切变得简单</h3>
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
                    alt="坚果 3"
                    data-src="https://resource.smartisan.com/resource/718bcecced0df1cd23bbdb9cc1f70b7d.png"
                    src="https://resource.smartisan.com/resource/718bcecced0df1cd23bbdb9cc1f70b7d.png"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">坚果 3</h6>
              <h3 class="sub-title ellipsis">漂亮得不像实力派</h3>
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
                  <span style="font-size: 14px;">￥</span>1999.00
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
                    alt="Smartisan 半入耳式耳机"
                    data-src="https://resource.smartisan.com/resource/9c1d958f10a811df841298d50e1ca7c0.jpg"
                    src="https://resource.smartisan.com/resource/9c1d958f10a811df841298d50e1ca7c0.jpg"
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
                    alt="Smartisan T恤 伍迪·艾伦出生"
                    data-src="https://resource.smartisan.com/resource/f96f0879768bc317b74e7cf9e3d96884.jpg"
                    src="https://resource.smartisan.com/resource/f96f0879768bc317b74e7cf9e3d96884.jpg"
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
                    alt="极米无屏电视 CC"
                    data-src="http://image.smartisanos.cn/resource/41cb562a47d4831e199ed7e2057f3b61.jpg"
                    src="http://image.smartisanos.cn/resource/41cb562a47d4831e199ed7e2057f3b61.jpg"
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
                    alt="Smartisan 原装 Type-C 数据线"
                    data-src="http://image.smartisanos.cn/resource/c79a73ffc6f8e782160d978f49f543dc.jpg"
                    src="http://image.smartisanos.cn/resource/c79a73ffc6f8e782160d978f49f543dc.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">Smartisan 原装 Type-C 数据线</h6>
              <h3 class="sub-title ellipsis">PTC 过温保护、凹形设计、TPE 环保材质</h3>
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
                  <span style="font-size: 14px;">￥</span>39.00
                </p>
              </div>
            </div>
          </div>

          <div class="good-item">
            <div>
              <div class="good-img">
                <a>
                  <img
                    alt="Smartisan 快充移动电源 10000mAh"
                    data-src="http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg"
                    src="http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">Smartisan 快充移动电源 10000mAh</h6>
              <h3 class="sub-title ellipsis">10000mAh 双向快充、轻盈便携、高标准安全保护</h3>
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
                    alt="Smartisan 原装快充充电器 18W"
                    data-src="http://image.smartisanos.cn/resource/dc53bd870ee64d2053ecc51750ece43a.jpg"
                    src="http://image.smartisanos.cn/resource/dc53bd870ee64d2053ecc51750ece43a.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">Smartisan 原装快充充电器 18W</h6>
              <h3 class="sub-title ellipsis">18W 安全快充、支持主流 QC3.0, MTK PE+2.0 快充协议</h3>
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
                  <span style="font-size: 14px;">￥</span>59.00
                </p>
              </div>
            </div>
          </div>

          <div class="good-item">
            <div>
              <div class="good-img">
                <a>
                  <img
                    alt="Smartisan 坚果自拍杆"
                    data-src="http://image.smartisanos.cn/resource/afe5728faa22f4b078b84d9c725c136d.jpg"
                    src="http://image.smartisanos.cn/resource/afe5728faa22f4b078b84d9c725c136d.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">Smartisan 坚果自拍杆</h6>
              <h3 class="sub-title ellipsis">通用 3.5 mm 接口、航空铝合金伸缩杆、防过敏硅胶手柄</h3>
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
                  <span style="font-size: 14px;">￥</span>69.00
                </p>
              </div>
            </div>
          </div>

          <div class="good-item">
            <div>
              <div class="good-img">
                <a>
                  <img
                    alt="《索尼设计，塑造现代》"
                    data-src="http://image.smartisanos.cn/resource/f950d9c27ef21e17374fa212b40d66a9.jpg"
                    src="http://image.smartisanos.cn/resource/f950d9c27ef21e17374fa212b40d66a9.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">《索尼设计，塑造现代》</h6>
              <h3 class="sub-title ellipsis">索尼全盛时期工业设计作品首次集结成书并引进中国</h3>
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
                  <span style="font-size: 14px;">￥</span>259.00
                </p>
              </div>
            </div>
          </div>

          <div class="good-item">
            <div>
              <div class="good-img">
                <a>
                  <img
                    alt="Smartisan S-100 半入耳式线控耳机"
                    data-src="http://image.smartisanos.cn/resource/c98abe89b5a5502ef04c30e751b2bfef.png"
                    src="http://image.smartisanos.cn/resource/c98abe89b5a5502ef04c30e751b2bfef.png"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">Smartisan S-100 半入耳式线控耳机</h6>
              <h3 class="sub-title ellipsis">卓越的 14.2mm 发音单元、三按键式线控</h3>
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
                  <span style="font-size: 14px;">￥</span>99.00
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
                    data-src="http://image.smartisanos.cn/resource/804b82e4c05516e822667a23ee311f7c.jpg"
                    src="http://image.smartisanos.cn/resource/804b82e4c05516e822667a23ee311f7c.jpg"
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
                    alt="坚果 Pro 钢化玻璃保护膜（前屏用）"
                    data-src="http://image.smartisanos.cn/resource/30cacf4088f7105d16452c661afd9299.jpg"
                    src="http://image.smartisanos.cn/resource/30cacf4088f7105d16452c661afd9299.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">坚果 Pro 钢化玻璃保护膜（前屏用）</h6>
              <h3 class="sub-title ellipsis">高达&nbsp;92% 的超强透光率、耐刮花、防指纹</h3>
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
                    alt="坚果 Pro 软胶保护套"
                    data-src="http://image.smartisanos.cn/resource/902befd5f32a8caf4ca79b55d39ee25a.jpg"
                    src="http://image.smartisanos.cn/resource/902befd5f32a8caf4ca79b55d39ee25a.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">坚果 Pro 软胶保护套</h6>
              <h3 class="sub-title ellipsis">TPU 环保材质、耐磨、耐油、耐久性强</h3>
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
                    alt="FIIL CARAT 蓝牙运动耳机"
                    data-src="http://image.smartisanos.cn/resource/61b4f3de01f00e57a664e648d6ea4721.jpg"
                    src="http://image.smartisanos.cn/resource/61b4f3de01f00e57a664e648d6ea4721.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">FIIL CARAT 蓝牙运动耳机</h6>
              <h3 class="sub-title ellipsis">智能计步、磁吸项链式、佩戴舒适不易掉</h3>
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

          <div class="good-item">
            <div>
              <div class="good-img">
                <a>
                  <img
                    alt="FIIL CARAT LITE 蓝牙运动耳机"
                    data-src="http://image.smartisanos.cn/resource/62c1a6988de8071beef4203bedde5144.jpg"
                    src="http://image.smartisanos.cn/resource/62c1a6988de8071beef4203bedde5144.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">FIIL CARAT LITE 蓝牙运动耳机</h6>
              <h3 class="sub-title ellipsis">线控带麦、IP65 防水、磁吸项链式</h3>
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
                  <span style="font-size: 14px;">￥</span>299.00
                </p>
              </div>
            </div>
          </div>

          <div class="good-item">
            <div>
              <div class="good-img">
                <a>
                  <img
                    alt="《深泽直人》"
                    data-src="http://image.smartisanos.cn/resource/5e4e40120d09fb6791f9430f914c6f68.jpg"
                    src="http://image.smartisanos.cn/resource/5e4e40120d09fb6791f9430f914c6f68.jpg"
                    lazy="loaded"
                  />
                </a>
              </div>
              <h6 class="good-title">《深泽直人》</h6>
              <h3 class="sub-title ellipsis">首次面向中国读者介绍其作品</h3>
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
  components: {
    headertop,
    fooder
  },
  data() {
    return {
      num: 1,
      value: 1, //数量
      goodsLists: [
        { price: "4799", name: "支付测试商品 IPhone X 全面屏 全面绽放" }
      ],
      zeronum: 0,
      cartlists: []
    };
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
  created() {
    this.goodsLists = this.$store.state.cart.goodsLists;
    this.$store.state.navindex = 1;
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 60px;
  line-height: 60px;
  > div {
    display: flex;
    align-items: center;
    a {
      padding: 0 15px;
      height: 100%;
      font-size: 12px;
      color: #999;
      &.active {
        color: #5683ea;
      }
      &:hover {
        color: #5683ea;
      }
    }
    input {
      width: 80px;
      height: 30px;
      border: 1px solid #ccc;
    }
    input + input {
      margin-left: 10px;
    }
  }
  .price-interval {
    padding: 0 15px;
    input[type="number"] {
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      border-radius: 5px;
    }
  }
}
.goods-box {
  margin-top: 20px;
}
.goods-box > div {
  float: left;
  border: 1px solid #efefef;
}
.good-item {
  width: 24%;
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

.all-view {
  padding-top: 20px;
  padding-bottom: 60px;
}

.el-pagination {
  align-self: flex-end;
  margin: 3vw 10vw 2vw;
}
</style>
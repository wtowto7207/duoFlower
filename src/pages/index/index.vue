<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="userinfo" @click="bindViewTap">
      <swiper class="swiper-items-wrap" :next-margin="nextMargin" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item class="swiper-item-wrap" >
            <image :src="item" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
      <!-- <image class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="imgUrl" mode="center"></image>
      <div class="userinfo-nickname">
        <text>{{userInfo.nickName}}</text>
      </div> -->
    </div>
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data() {
      return {
        motto: 'Hello World',
        userInfo: {},
        imgUrl: 'http://www.5068.com/uploads/allimg/150615/1-150615153947.jpg',
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        nextMargin:'80rpx',
        circular:true,
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ]
      }
    },

    components: {
      card
    },

    methods: {
      bindViewTap() {
        const url = '../logs/main'
        wx.navigateTo({
          url
        })
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle(msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }

</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 750rpx;
  }

  .swiper-items-wrap{
    height: 700rpx;
  }
  .swiper-item-wrap{
   
  }

  .slide-image{
    padding: 20rpx;
  }

  .userinfo-avatar {
    width: 600rpx;
    height: 800rpx;
    margin: 20rpx;
    border-radius: 50rpx;
  }

  .userinfo-nickname {
    color: #aaa;
    text-align: center;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

</style>

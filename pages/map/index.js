const app = getApp()
// import { showFailure } from "../../utils/util"
Page({
  data: {
    scale: 12,
    latitude: 0,
    longitude: 0,
    client_no: '',
    controls: [],
    markers: [],

    array: [],
    index: 0,
    pileId: '',
    pileName: '',
    show_picker: false,
    chargePortIndex: '1'
  },
  onLoad: function (options) {
    // 获取并设置当前位置经纬度   
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        console.log("kkkkkkkkkkkkk")
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })

        wx.setStorageSync('longitude', res.longitude)
        wx.setStorageSync('latitude', res.latitude)

        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/',
          data:{
            location:`${this.data.latitude},${this.data.longitude}`,
            key:'3RIBZ-KVP6W-EEVRO-RE4IF-RM3NO-FABWB'
          },
          success:(res)=>{
            cityId: res.data.result.ad_info.city_code,

            wx.setStorageSync('cityId', res.data.result.ad_info.city_code)
            
            console.log(res.data.result.ad_info.city_code)
            console.log(wx.getStorageSync('cityId').substring(3, 9))
           
          }

        })
       

        // wx.request({
        //   url: `${app.api_host}/api/station/list?pageSize=100&page=1`,
        //   method: 'GET',
        //   success: (res) => {
        //     let markers = []
        //     res.data.result.forEach((value, index) => {
        //       markers.push({
        //         id: value.id,
        //         iconPath: '/images/map_pile_ding.png',
        //         latitude: value.latitude,
        //         longitude: value.longitude,
        //         width: 34,
        //         height: 44
        //       })
        //     })
        //     this.setData({
        //       markers: markers
        //     })
        //   },
        //   fail(res) {
        //   },
        //   complete(res) {
        //     // complete
        //   }
        // })
      },
      fail(res){
        console.log("ssssss")
      }
    })

    // 3.设置地图控件的位置及大小，通过设备宽高定位
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [
            {
            id: 1,
            iconPath: '/image/map_fixed.png',
            position: {
              left: res.windowWidth*0.05,
              top: res.windowHeight*0.8,
              width: 38,
              height: 38
            },
            clickable: true
          },
          // {
          //   id: 2,
          //   iconPath: '/image/list.png',
          //   position: {
          //     left: res.windowWidth - res.windowWidth / 6,
          //     top: 15,
          //     width: 40,
          //     height: 40
          //   },
          //   clickable: true
          // },
            {
              id: 3,
              iconPath: '/image/scan_round.png',
              position: {
                left: res.windowWidth/2 -50,
                top: res.windowHeight * 0.7,
                width: 100,
                height: 100
              },
              clickable: true
            },
            
        {
          id: 4,
          iconPath: '/image/personal.png',
            position: {
              left: res.windowWidth * 0.95-38,
              top: res.windowHeight * 0.8,
              width: 38,
              height: 38
          },
          clickable: true
        },
          {
            id: 5,
            iconPath: '/image/map_collect.png',
            position: {
              left: res.windowWidth * 0.05,
              top: res.windowHeight * 0.7,
              width: 38,
              height: 38
            },
            clickable: true
          },
            {
              id: 6,
              iconPath: '/image/history.png',
              position: {
                left: res.windowWidth * 0.05,
                top: res.windowHeight * 0.6,
                width: 38,
                height: 38
              },
              clickable: true
            },
            {
              id: 7,
              iconPath: '/image/map_charging.png',
              position: {
                left: res.windowWidth * 0.05,
                top: res.windowHeight * 0.5,
                width: 38,
                height: 38
              },
              clickable: true
            },
          ]
        })
      }
    })
  },

  // 页面显示
  onShow () {
    // 1.创建地图上下文，移动当前位置到地图中心
    this.mapCtx = wx.createMapContext("yueMap")
    this.mapCtx.moveToLocation()
  },

  // 地图控件点击事件
  controltap (e) {
    console.log(e.controlId)
    switch (e.controlId) {
      case 1:
        this.mapCtx.moveToLocation()
        break
      case 2:
        wx.navigateTo({
          url: '/pages/lists/index'
        })
        break
      case 4:
        wx.navigateTo({
          url: '/pages/user/user'
        })
        break
      case 5:
        wx.navigateTo({
          url: '/pages/collection/collection'
        })
        break
      case 6:
        wx.navigateTo({
          url: '/pages/records/records'
        })
        break
      case 7:
        wx.navigateTo({
          url: '/pages/charging/charging'
        })
        break
      default:
        break
    }
  },
  stationList(){
    console.log("点击地图查找")
    wx.navigateTo({
      url: `/pages/station/station`
    })
  },



  bindmarkertap (e) {
    wx.navigateTo({
      url: `/pages/park/index?park_id=${e.markerId}`
    })
  }
})

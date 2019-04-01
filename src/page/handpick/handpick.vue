<template>
    <div class="handpick_contain">
        <div class="banner_contain">
            <img src="../../common/images/home_banner.png" height="272" width="636" class="banner_img">
        </div>
        <div class="list_contain">
            <h5 class="list_title"><span class="title">精品店</span></h5>
            <div class="list_wrap">
                <commodity-list :commodityListData="commodityListData"></commodity-list>
            </div>
        </div>
    </div>
</template>

<script>
import CommodityList from '../../components/CommodityList'
export default {
    data(){
        return {
            commodityListData: [
                {
                    commodityItemData: [
                        {
                            imgSrc: require('../../common/images/list_card3.png'),
                            commodityName: '简约个性帽子',
                            commodityIns: '增强你的时尚感'
                        },{
                            imgSrc: require('../../common/images/list_card4.png'),
                            commodityName: '精美餐具',
                            commodityIns: '爱上居家美食'
                        }
                    ]
                },{
                    commodityItemData: [
                        {
                            imgSrc: require('../../common/images/list_card3.png'),
                            commodityName: '简约个性帽子',
                            commodityIns: '增强你的时尚感'
                        },{
                            imgSrc: require('../../common/images/list_card4.png'),
                            commodityName: '精美餐具',
                            commodityIns: '爱上居家美食'
                        }
                    ]
                },{
                    commodityItemData: [
                        {
                            imgSrc: require('../../common/images/list_card1.png'),
                            commodityName: '粉色时尚时钟',
                            commodityIns: '时尚造型，小巧可爱'
                        },{
                            imgSrc: require('../../common/images/list_card2.png'),
                            commodityName: '简约笔记本记事本',
                            commodityIns: '记录生活点滴'
                        }
                    ]
                },{
                    commodityItemData: [
                        {
                            imgSrc: require('../../common/images/list_card3.png'),
                            commodityName: '简约个性帽子',
                            commodityIns: '增强你的时尚感'
                        },{
                            imgSrc: require('../../common/images/list_card4.png'),
                            commodityName: '精美餐具',
                            commodityIns: '爱上居家美食'
                        }
                    ]
                }
            ]
        }
    },
    components: {
        CommodityList
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .banner_contain { height: 272px; border-radius: 8px; box-shadow: 0 4px 40px #4a90e24d; overflow: hidden;
        .banner_img { display: block; width: 100%; height: 100%; }
    }
    .list_title { padding: 42px 0; font-size: 32px; line-height: 1; color: #484747; font-weight: bold;
        .title { display: inline-block; padding-right: 26px; background: url('../../../static/images/right_icon.png') no-repeat right center; background-size: 11px 20px; }
    }
</style>

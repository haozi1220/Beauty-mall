<template>
    <div>
        <commodity-list :commodityListData="shoesListData"></commodity-list>
    </div>
</template>

<script>
import CommodityList from '../../components/CommodityList'
export default {
    data(){
        return {
            shoesListData: [
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
<style scoped lang="">

</style>

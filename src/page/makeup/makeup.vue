<template>
  <div>
    <gift-list :giftList="makeupListData" :pinkBg="isPink"></gift-list>
  </div>
</template>

<script>
import GiftList from '../../components/GiftList'
export default {
    data(){
        return {
            isPink: true,
            makeupListData: [
                {
                    giftImg: require('../../common/images/makeup_list1.png'),
                    giftApplicable: '指甲油',
                    giftName: 'CHANEL',
                    giftInstr: '保护你的手指',
                    giftPrice: '229.0',
                    giftStarCount: '3560'
                },{
                    giftImg: require('../../common/images/makeup_list2.png'),
                    giftApplicable: '香水',
                    giftName: '威尼斯之恋',
                    giftInstr: '爱的滋味',
                    giftPrice: '320.0',
                    giftStarCount: '1180'
                },{
                    giftImg: require('../../common/images/makeup_list3.png'),
                    giftApplicable: '乳化液',
                    giftName: '像雪一样',
                    giftInstr: '水合皮肤',
                    giftPrice: '228.0',
                    giftStarCount: '892'
                },{
                    giftImg: require('../../common/images/makeup_list4.png'),
                    giftApplicable: '唇膏',
                    giftName: '良好湿润性',
                    giftInstr: '迷人的润唇',
                    giftPrice: '119.0',
                    giftStarCount: '228'
                }
            ]
        }
    },
    components: {
        GiftList
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">

</style>

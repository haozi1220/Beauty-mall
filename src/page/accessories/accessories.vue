<template>
    <div>
        <gift-list :giftList="accessoriesListData" :pinkBg="isPink"></gift-list>
    </div>
</template>

<script>
import GiftList from '../../components/GiftList'
export default {
    data(){
        return {
            isPink: false,
            accessoriesListData: [
                {
                    giftImg: require('../../common/images/accessories_list1.png'),
                    giftApplicable: '耳环',
                    giftName: '红玛瑙耳环',
                    giftInstr: '妩媚风情',
                    giftPrice: '49.0',
                    giftStarCount: '40'
                },{
                    giftImg: require('../../common/images/accessories_list2.png'),
                    giftApplicable: '项链',
                    giftName: '爱之星',
                    giftInstr: '爱你的光环',
                    giftPrice: '120.0',
                    giftStarCount: '118'
                },{
                    giftImg: require('../../common/images/accessories_list3.png'),
                    giftApplicable: '项链',
                    giftName: '天使之泪',
                    giftInstr: '会有天使为我爱你',
                    giftPrice: '228.0',
                    giftStarCount: '662'
                },{
                    giftImg: require('../../common/images/accessories_list4.png'),
                    giftApplicable: '吊坠',
                    giftName: '月色玻璃',
                    giftInstr: '简约星点',
                    giftPrice: '39.0',
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

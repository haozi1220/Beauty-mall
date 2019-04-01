<template>
    <div>
        <gift-list :giftList="giftsListData"></gift-list>
    </div>
</template>

<script>
import GiftList from '../../components/GiftList'
export default {
    data(){
        return {
            giftsListData: [
                {
                    giftImg: require('../../common/images/gifts_list1.png'),
                    giftApplicable: '女士用',
                    giftName: '米色陶瓷花瓶',
                    giftInstr: '自然清新的意境',
                    giftPrice: '59.0',
                    giftStarCount: '459'
                },{
                    giftImg: require('../../common/images/gifts_list2.png'),
                    giftApplicable: '女士用',
                    giftName: '概念笔记本',
                    giftInstr: '我的生活故事书',
                    giftPrice: '59.0',
                    giftStarCount: '998'
                },{
                    giftImg: require('../../common/images/gifts_list3.png'),
                    giftApplicable: '女士用',
                    giftName: '简单典雅的手表',
                    giftInstr: '时光流逝',
                    giftPrice: '59.0',
                    giftStarCount: '228'
                },{
                    giftImg: require('../../common/images/gifts_list4.png'),
                    giftApplicable: '女士用',
                    giftName: '经典的玻璃是一生的',
                    giftInstr: '颜值与使用并重的台灯',
                    giftPrice: '59.0',
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


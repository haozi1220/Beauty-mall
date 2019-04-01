<template>
    <div class="gift_info">
        <div class="top_nav"><top-nav :navData="navData"></top-nav></div>
        <div class="gift_info_contain">
            <div class="img_contain">
                <img :src="giftInfoData.imgSrc" class="gift_img"/>
            </div>
            <p class="gift_title">{{giftInfoData.giftText}}</p>
            <p class="gift_list_title">礼物列表</p>
            <div class="gift_item" v-for="(giftItem, index) in giftInfoData.giftListItems" :key="index">
                <p class="item_order">{{index + 1}}、{{giftItem.giftItemName}}</p>
                <p class="gift_text">{{giftItem.giftItemInstr}}</p>
                <div class="gift_info_img">
                    <img :src="giftItem.giftItemImgSrc" />
                </div>
                <p class="gift_text">{{giftItem.giftItemInstr2}}</p>
                <p class="price_wrap">
                    <span class="now_price">¥ {{giftItem.giftNewPrice}}</span>
                    <span class="old_price">¥ {{giftItem.giftOldPrice}}</span>
                </p>
                <router-link to='/giftDetails' tag="a" class='more_btn'>更多</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '../../components/TopNav'
export default {
    data(){
        return {
            navData: {
                title: '礼物',
                text: 'share'
            },
            giftInfoData: {
                imgSrc: require('../../common/images/shape_list2.png'),
                giftText: '世界上热门流行礼物',
                giftListItems: [
                    {
                        giftItemName: '白色恋人',
                        giftItemInstr: '据说，原名“白色恋人”的浪漫例外：“一个蛋糕师在冬天的时候做了一块甜美可口的饼干，有一天，蛋糕师看到了一个对手。情侣们一起穿越原始的雪地，甜美的景色感动了蛋糕师，从此，这种美味的饼干有了一个美丽的名字--白色恋人。人们可以在白色恋人产品的包装上免费印上自己喜欢的图案，做成私人专属的定制款。另外，1997年（平成9年），作为白色恋人的姐妹产品，“白色巧克力饮料”也开始贩卖。',
                        giftItemInstr2: '在札幌市西区，石屋制果设有一处由厂房改装成的旅游景点，内有公园、博物馆及工厂介绍“白色恋人”的历史及制造方法，亦珍藏了各国的历史茶具及关于巧克力的海报。',
                        giftNewPrice: 62.0,
                        giftOldPrice: 88.0,
                        giftItemImgSrc: require('../../common/images/gift_info_img.png')
                    },
                    {
                        giftItemName: '白色恋人2',
                        giftItemInstr: '据说，原名“白色恋人”的浪漫例外：“一个蛋糕师在冬天的时候做了一块甜美可口的饼干，有一天，蛋糕师看到了一个对手。情侣们一起穿越原始的雪地，甜美的景色感动了蛋糕师，从此，这种美味的饼干有了一个美丽的名字--白色恋人。人们可以在白色恋人产品的包装上免费印上自己喜欢的图案，做成私人专属的定制款。另外，1997年（平成9年），作为白色恋人的姐妹产品，“白色巧克力饮料”也开始贩卖。',
                        giftItemInstr2: '在札幌市西区，石屋制果设有一处由厂房改装成的旅游景点，内有公园、博物馆及工厂介绍“白色恋人”的历史及制造方法，亦珍藏了各国的历史茶具及关于巧克力的海报。',
                        giftNewPrice: 72.0,
                        giftOldPrice: 108.0,
                        giftItemImgSrc: require('../../common/images/gift_info_img.png')
                    }
                ]
            }
        }
    },
    components: {
        TopNav
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../common/sass/mixin';
    .gift_info { height: 100%; }
    .top_nav { position: absolute; left: 0; top: 0; width: 100%; z-index: 2; }
    .gift_info_contain { height: 100%; padding: 108px 57px 0; overflow-y: auto;
        .img_contain { width: 100%; height: 296px; padding-bottom: 28px;
            img { display: block; width: 100%; height: 100%; }
        }
        p { text-align: left;
            &.gift_title { font-size: 36px; line-height: 1; font-weight: 700; color: #484747; }
            &.gift_list_title { padding-top: 20px; font-size: 22px; line-height: 1; color: #b4b4b4; }
            &.item_order { padding-bottom: 13px; font-size: 28px; line-height: 1; font-weight: bold; color: #484747; }
            &.gift_text { font-size: 22px; line-height: 26px; color: #737373; }
            &.price_wrap { padding-top: 25px; font-size: 22px; line-height: 1;
                .now_price { display: inline-block; margin-right: 10px; color: #4da1dd; }
                .old_price { display: inline-block; width: 72px; text-align: center; text-decoration:line-through; color: #c2c4c5; }
            }
        }
        .gift_item { position: relative; padding-top: 34px; padding-bottom: 32px;
            .gift_info_img { margin: 29px auto; width: 596px; background-color: #f5f8fd;
                img { display: block; margin: 0 auto; width: 222px; height: 212px; }
            }
            .more_btn { @include extend-click(); position: absolute; right: 0; bottom: 25px; width: 92px; height: 32px; text-align: center;  font-size: 18px; line-height: 32px; color: #fff; border-radius: 8px; background-color: #4a90e2; }
        }
    }
</style>

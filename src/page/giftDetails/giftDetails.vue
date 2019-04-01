<template>
    <div class="details_contain">
        <div class="top_nav">
            <top-nav :navData="navData"></top-nav>
        </div>
        <div class="details_contain">
            <p class="detail_title">{{detailsData.giftItemName}}</p>
            <div class="start_core">
                <div class="start_contain"><star-score :starCount="detailsData.giftStars"></star-score>{{detailsData.giftStarCount}}</div>
                <div class="price_contain">¥ {{detailsData.giftNewPrice}}</div>
            </div>
            <div class="detail_img_contain">
                <img :src="detailsData.giftItemImgSrc" />
            </div>
            <div class="detail_text">{{detailsData.giftItemInstr}}</div>
            <div class="selected_quantily">
                <span class="text">已选: 2盒</span>
                <span class="select_icon"></span>
            </div>
            <div class="bottom_contain">
                <span class="collection"></span>
                <span class="similar_contrast">相似对比</span>
                <span class="buy_btn">购买</span>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '../../components/TopNav'
import StarScore from '../../components/StarScore'
export default {
    data(){
        return {
            navData: {
                title: '礼物',
                text: 'share'
            },
            detailsData: {
                giftItemName: '白色恋人',
                giftItemInstr: '白色恋人是北海道札幌市的石屋制果株式会社出产的一种巧克力夹心博饼。它由两片博饼组成。',
                giftNewPrice: 62.0,
                giftStarCount: 1128,
                giftStars: 4,
                giftItemImgSrc: require('../../common/images/details_img.png')
            }
        }
    },
    components: {
        TopNav,
        StarScore
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../common/sass/mixin';
    .details_contain { height: 100%;
        .top_nav { position: absolute; left: 0; top: 0; width: 100%; z-index: 2; }
        .details_contain { padding: 105px 57px 0; min-height: 100%; overflow-y: auto; text-align: left;
            .detail_title { padding-bottom: 30px; line-height: 40px; font-size: 40px; color: #484747; }
            .start_core { display: flex; justify-content: space-between; font-size: 22px; line-height: 1; color: #5d5d5d;
                .price_contain { color: #4da1dd; }
            }
            .detail_img_contain { padding: 8px 0 30px;
                img { display: block; width: 388px; height: 402px; margin: 0 auto; }
            }
            .detail_text { font-size: 22px; line-height: 26px; color: #6c6c6c; }
            .selected_quantily { display: flex; justify-content: space-between; align-items: center; margin-top: 40px; border-radius: 8px; background-color: #f7f7f7;
                .text { display: block; padding-left: 42px; font-size: 24px; line-height: 88px; color: #999; }
                .select_icon { display: block; width: 71px; height: 88px; background: url('../../../static/images/right_icon.png') no-repeat center center; background-size: 11px 20px; }
            }
            .bottom_contain { display: flex; justify-content: flex-start; align-items: center; margin-top: 30px;
                span { display: block; border-radius: 10px; background-color: #f0f7fe; font-size: 24px; line-height: 88px; color: #4c4c4c;
                    &.collection { width: 130px; height: 88px; margin-right: 20px; background: url('../../../static/images/collection_icon.png') no-repeat center center #f0f7fe; background-size: 38px 38px; }
                    &.similar_contrast { width: 260px; margin-right: 40px; text-align: center; }
                    &.buy_btn { width: 186px; text-align: center; color: #fff; background-color: #4a90e2;}
                }
            }
        }
    }
</style>

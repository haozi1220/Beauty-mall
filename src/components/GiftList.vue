<template>
    <ul class="gift_list" :class="{'pink_bg' : pinkBg}">
        <li v-for="giftItem in giftList" class="gift_item">
            <img :src="giftItem.giftImg" class="gift_img">
            <span class="gift_info">
                <span class="applicabel_obj">{{giftItem.giftApplicable}}</span>
                <span class="gift_name">{{giftItem.giftName}}</span>
                <span class="gift_instr">{{giftItem.giftInstr}}</span>
                <span class="gift_price"><strong class="price">¥ {{giftItem.giftPrice}}</strong><strong class="start_count"><i class="start"></i>{{giftItem.giftStarCount}}</strong></span>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'GiftList',
    props: ['pinkBg','giftList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .gift_item { display: flex; justify-content: flex-start; padding: 52px 50px 50px 24px; margin-bottom: 20px; border-radius: 5px; background-color: #f7fbff;
        .gift_img { display: block; width: 170px; height: 170px; }
        .gift_info { display: block; width: 80%; padding: 12px 0 6px 28px;
            span { display: block; text-align: left;
                &.applicabel_obj { width: 126px; text-align: center; font-size: 24px; line-height: 40px; border-radius: 20px; color: #fff; background-color: #4a90e2; }
                &.gift_name { padding-top: 12px; font-size: 24px; line-height: 1; color: #313131; }
                &.gift_instr { padding-top: 6px; font-size: 20px; line-height: 1; color: #aeaeae; }
                &.gift_price { display: flex; justify-content: space-between; padding-top: 27px;
                    .price { font-size: 22px; line-height: 24px; color: #4da1dd; }
                    .start_count { vertical-align: bottom; font-size: 20px; line-height: 1; color: #a6a6b0;
                        .start { display: inline-block; width: 24px; height: 24px; margin-right: 5px; background: url('../../static/images/like_icon.png') no-repeat center center; background-size: 100% 100%; }
                    }
                }
            }
        }
    }
    .pink_bg {
        .gift_item { background-color: #fefafc;
            .gift_info {
                .applicabel_obj { background-color: #e26593; }
            }
        }
    }
</style>

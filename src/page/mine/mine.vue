<template>
    <div class="personal_center_contain">
        <div class="top_contain">
            <span class="avatar_contain">
                <img src="../../common/images/person_avatar.png" height="140" width="140">
            </span>
            <span class="personal_info">
                <strong class="personal_name">Charlotter</strong>
                <strong class="personal_tag">时尚博客</strong>
            </span>
            <!-- <router-link tag="span" to="" class="to_personal_homepage">个人主页</router-link> -->
        </div>
        <div class="center_nav">
            <span class="center_nav_item">
                <i class="club_icon"></i>
                <strong class="text">会员</strong>
            </span><span class="center_nav_item">
                <i class="collection_icon"></i>
                <strong class="text">收藏</strong>
            </span><span class="center_nav_item">
                <i class="shopping_icon"></i>
                <strong class="text">购物</strong>
            </span><span class="center_nav_item">
                <i class="store_icon"></i>
                <strong class="text">商店</strong>
            </span>
        </div>
        <ul class="center_list">
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">我的资料</span>
            </router-link>
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">账户信息</span>
            </router-link>
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">密码</span>
            </router-link>
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">设置</span>
            </router-link>
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">消息</span>
            </router-link>
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">关于我们</span>
            </router-link>
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">意见反馈</span>
            </router-link>
            <router-link tag="li" to="" class="center_link_item">
                <span class="center_item">帮助</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../common/sass/mixin';
    .top_contain { position: relative; padding: 40px 65px 0; text-align: left;
        span { display: inline-block; vertical-align: top;
            &.avatar_contain { width: 140px; height: 140px; border: 3px solid #fcfbfb; border-radius: 50%; overflow: hidden;
                img { display: block; width: 100%; height: 100%; }
            }
            &.personal_info { margin-left: 37px; height: 100%; padding: 34px 0 43px;
                strong { display: block;
                    &.personal_name { font-size: 36px; line-height: 1; color: #4a4a4a; }
                    &.personal_tag { padding-left: 30px; margin-top: 10px; height: 24px; font-size: 16px; line-height: 24px; color: #9b9b9b; background: url('../../../static/images/tag_icon.png') no-repeat left center; background-size: 24px 24px;}
                }
            }
            &.to_personal_homepage { position: absolute; right: 75px; top: 80px; width: 200px; text-align: center; font-size: 30px; line-height: 50px; border: 1px solid #9b9b9b; border-radius: 10px; }
        }
    }
    .center_nav { padding: 35px 55px; display: flex; justify-content: space-around; align-items: center;
        .center_nav_item { width: 20%; display: block; text-align: center; @include extend-click();
            i { display: block; width: 40px; height: 40px; margin: 0 auto;
                &.club_icon { background: url('../../../static/images/club_icon.png') no-repeat center center; background-size: 40px 40px; }
                &.collection_icon { background: url('../../../static/images/collect_icon.png') no-repeat center center; background-size: 40px 40px; }
                &.shopping_icon { background: url('../../../static/images/shopping_icon.png') no-repeat center center; background-size: 40px 40px; }
                &.store_icon { background: url('../../../static/images/store_icon.png') no-repeat center center; background-size: 40px 40px; }
            }
            .text { display: block; padding-top: 10px; font-size: 24px; line-height: 1; color: #555; }
        }
    }
    .center_list { padding: 4px 55px 0; text-align: left;
        .center_link_item { padding-top: 54px; background: url('../../../static/images/right_icon.png') no-repeat right center; background-size: 11px 20px;
            .center_item { font-size: 28px; line-height: 1; color: #555; }
        }
    }
</style>

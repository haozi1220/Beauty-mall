<template>
    <div class="mainContainer">
        <div class="main">
            <router-view/>
        </div>
        <ul class="tabBar">
            <router-link tag="li" to='/home'><i class="icon home_icon"></i>
            </router-link>
            <router-link tag="li" to='/search'><i class="icon search_icon"></i>
            </router-link>
            <router-link tag="li" to='/messager'><i class="icon message_icon"></i>
            </router-link>
            <router-link tag="li" to='/mine'><i class="icon mine_icon"></i>
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
    .mainContainer{ position: relative; height: 100%; padding-bottom: 98px;
        .main { height: 100%; }
    }
    .tabBar { position: absolute; bottom: 0; left: 0; right: 0; display: flex; justify-content: space-around; box-shadow: 0 -5px 5px #e0e0e0;
        li { padding: 27px;
            .icon { display: block; width: 48px; height: 44px;
                &.home_icon { background: url('../../../static/images/home_icon.png') center center; background-size: 48px 44px; }
                &.search_icon { background: url('../../../static/images/search_icon.png') center center; background-size: 48px 44px; }
                &.message_icon { background: url('../../../static/images/message_icon.png') center center; background-size: 48px 44px; }
                &.mine_icon { background: url('../../../static/images/mine_icon.png') center center; background-size: 48px 44px; }
            }
            &.active {
                .home_icon { background: url('../../../static/images/home_act_icon.png') center center; background-size: 48px 44px; }
                .search_icon { background: url('../../../static/images/search_act_icon.png') center center; background-size: 48px 44px; }
                .message_icon { background: url('../../../static/images/message_act_icon.png') center center; background-size: 48px 44px; }
                .mine_icon { background: url('../../../static/images/mine_act_icon.png') center center; background-size: 48px 44px; }
            }
        }
    }
</style>

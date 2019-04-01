<template>
    <div class="action_contain">
        <ul class="action_nav">
            <router-link tag="li" to="/messager/interAction/disCover" class="action_li">新发现</router-link>
            <router-link tag="li" to="/messager/interAction/goodFriend" class="action_li">好友</router-link>
            <router-link tag="li" to="/messager/interAction/readyFollow" class="action_li">关注</router-link>
        </ul>
        <div class="action_view">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .action_contain { height: 100%; }
    .action_nav { display: flex; justify-content: flex-start; border-bottom: 1px solid #efefef; padding: 0 57px; background-color: #fff;
        .action_li { padding: 0 30px; font-size: 30px; line-height: 60px; color: #3f3f3f63; font-weight: 600;
            &.active { color: #3f3f3f; }
        }
    }
    .action_view { height: calc(100% - 60px); overflow-y: auto;}
</style>

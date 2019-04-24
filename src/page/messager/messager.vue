<template>
    <div class="messageer_contain">
        <ul class="messager_tab">
            <router-link tag="li" to="/messager/chatList" class="messager_tab_li">聊天</router-link>
            <router-link tag="li" to="/messager/interAction" class="messager_tab_li">互动</router-link>
        </ul>
        <div class="messager_wrap" @click="goAllMessage">
            <img src="~images/message_icon.png" height="44" width="48">
        </div>
        <div class="messager_view">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goAllMessage () {
            this.$router.push('/allMessage');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .messageer_contain { height: 100%; }
    .messager_tab { position: absolute; top: 0; left: 0; width: 50%; display: flex; justify-content: center; padding: 10px 25%; background-color: #2c3e50; box-sizing: content-box;
        .messager_tab_li { width: 50%; text-align: center; font-size: 28px; line-height: 60px; color: #fff; border: 1px solid #fff;
            &:nth-of-type(1) { border-top-left-radius: 20px; border-bottom-left-radius: 20px; border-right: 0; }
            &:nth-of-type(2) { border-top-right-radius: 20px; border-bottom-right-radius: 20px; border-left: 0; }
            &.active { background-color: #fff; color: #333; font-weight: 700; }
        }
    }
    .messager_wrap { position: absolute; right: 0; top: 0; height: 80px; padding: 20px; z-index: 2;
        img { display: block; width: 48px; height: 44px; }
    }
    .messager_view { height: 100%; padding-top: 84px; }
</style>

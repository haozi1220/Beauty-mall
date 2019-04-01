<template>
    <div class="top_nav_wrap">
        <div class="back_btn" @click="goBack"></div>
        <div class="page_title">{{navData.title}}</div>
        <div class="shareSet" :class="navData.text"></div>
    </div>
</template>

<script>
export default {
    props: ['navData'],
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../common/sass/mixin';
    .top_nav_wrap { display: flex; justify-content: space-between; padding: 27px 57px 36px; background: #fff;
        .back_btn { width: 44px; height: 42px; @include extend-click(); background: url('../../static/images/back_icon.png') no-repeat center center; background-size: 24px 42px; }
        .page_title { font-size: 32px; line-height: 42px; color: #484747; }
        .shareSet { width: 42px; height: 42px; @include extend-click(); background: url('../../static/images/share_icon.png') no-repeat center center; background-size: 40px 40px; }
    }
</style>


<template>
    <div class="start_score_wrap">
        <div class="star_wrapper">
            <span class="start_score_span" v-for='(item, index) in 5' :class="index < starCount ? 'black_star' : ''" :key="index"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartScore',
    props: ['starCount']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .start_score_wrap { display: inline-block; margin-right: 14px;
        .star_wrapper { display: flex; justify-content: space-between; width: 124px; }
        .start_score_span { display: block; width: 22px; height: 22px; background: url('~@/common/images/gray_star.png') no-repeat center center; background-size: 22px 22px;
            &.black_star { background: url('~@/common/images/black_star.png') no-repeat center center; background-size: 22px 22px; }
        }
    }
</style>

<template>
    <div>
        <gift-list :giftList="giftsListData"></gift-list>
    </div>
</template>

<script>
import GiftList from '@/components/GiftList'
export default {
    data(){
        return {
            giftsListData: []
        }
    },
    mounted(){
        // 第一加载组件时挂在请求数据
        this.getProductData(this.$route.params.productName);
    },
    watch: {
        $route (to, from) {
            if (to.name === 'gifts') {
                // 响应路由变化时请求数据
                this.getProductData(to.params.productName);
            }
        }
    },
    methods:{
        getProductData(productName){
            this.giftsListData = [];
            this.$http.get('/api/product/'+ productName).then((res) => {
                if (res.data.result.length === 0) {
                    console.log('暂无数据');
                } else {
                    this.giftsListData = res.data.result
                }
            },(err) => {
                console.log(err);
            })
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


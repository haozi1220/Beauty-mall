<template>
    <div>
        <commodity-list :commodityListData="bagListData"></commodity-list>
    </div>
</template>

<script>
import CommodityList from '@/components/CommodityList'
export default {
    data(){
        return {
            bagListData: []
        }
    },
    mounted(){
        // 第一加载组件时挂在请求数据
        this.getProductData(this.$route.params.productName);
    },
    watch: {
        $route (to, from) {
            this.bagListData = [];
            if (to.name === 'bag') {
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
                    this.getDataHandle(res.data.result);
                }
            },(err) => {
                console.log(err);
            })
        },
        getDataHandle(dataArr){
            let emptyObj = {};
            emptyObj.commodityItemData = dataArr.splice(0,2);
            this.bagListData.push(emptyObj);
            if (dataArr.length < 1) {
                return;
            }
            this.getDataHandle(dataArr);
        }
    },
    components: {
        CommodityList
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">

</style>

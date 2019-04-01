<template>
    <ul class="list_contain">
        <li class="commodity_item" v-for="commodItme in commodityListData">
            <div class="sigle_item" v-for="singleItem in commodItme.commodityItemData">
                <img :src="singleItem.imgSrc" class="commodity_img">
                <span class="commodity_name">{{singleItem.commodityName}}</span>
                <span class="commodity_ins">{{singleItem.commodityIns}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'commodityList',
    data() {
        return {}
    },
    props: ['commodityListData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .list_contain { height: 100%; overflow-y: auto;
        .commodity_item { display: flex; padding-bottom: 45px; justify-content: space-between;
            .sigle_item { width: 308px;
                .commodity_img { display: block; width: 100%; height: 172px; }
                span { display: block; text-align: left; }
                .commodity_name {  padding-top: 17px; font-size: 24px; line-height: 1; color: #484747; }
                .commodity_ins { padding-top: 16px; font-size: 20px; line-height: 1; color: #9b9b9b; }
            }
        }
    }
</style>

<template>
    <div class="search_contain">
        <div class="top_contain">
            <span class="graph_span"></span>
            <span class="title">礼物</span>
            <span class="shape_span"></span>
        </div>
        <ul class="search_list_contain">
            <router-link tag="li" to="/search/giftInfo" class="shape_item" v-for='shapeItem in shapeListData' :key="shapeItem.imgSrc">
                <img class="shape_img" :src="shapeItem.imgSrc"/>
                <div class="info_wrap">
                    <div class="opacity_bg"></div>
                    <div class="info_contain">
                        <p class="name">{{shapeItem.shapeName}}</p>
                        <p class="instro">{{shapeItem.shapeInstr}}</p>
                    </div>
                </div>
            </router-link>
        </ul>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            shapeListData: [
                {
                    imgSrc: require('../../common/images/shape_list1.png'),
                    shapeName: '摩羯座的创意礼物',
                    shapeInstr: '当今世界'
                },{
                    imgSrc: require('../../common/images/shape_list2.png'),
                    shapeName: '世界上热门流行礼物',
                    shapeInstr: '礼物'
                },{
                    imgSrc: require('../../common/images/shape_list3.png'),
                    shapeName: '因为有你',
                    shapeInstr: '礼物天堂'
                },{
                    imgSrc: require('../../common/images/shape_list4.png'),
                    shapeName: '为了独一无二的你',
                    shapeInstr: 'Because I know you'
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '~@/common/sass/mixin';
    .search_contain { position: relative; height: 100%; overflow: hidden;
        .top_contain { position: absolute; display: flex; justify-content: space-between; top: 0; left: 0; right: 0; padding: 24px 57px 36px; z-index: 1; background: #fff;
            .graph_span { display: block; width: 44px; height: 42px; @include extend-click(); background: url('~@/common/images/graph_icon.png') no-repeat center center; background-size: 38px 33px; }
            .title { font-size: 32px; ;line-height: 42px; color: #484747; }
            .shape_span { display: block; width: 42px; height: 42px; @include extend-click(); background: url('~@/common/images/shape_icon.png') no-repeat center center; background-size: 42px 42px; }
        }
        .search_list_contain { height: 100%; padding: 102px 57px 0; overflow-y: auto;
            .shape_item { position: relative; padding-bottom: 20px;
                .shape_img { display: block; width: 100%; height: 296px; }
                .info_wrap { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 6px; border-radius: 5px; overflow: hidden;
                    .opacity_bg { position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: #fff; opacity: .8; z-index: -1;}
                    .info_contain { width: 498px; padding: 8px 0 14px; border: 1px solid #858582; border-radius: 5px;
                        .name { padding-bottom: 7px; font-size: 28px; line-height: 1; color: #484747; }
                        .instro { font-size: 22px; line-height: 1; color: #b4b4b4; }
                    }
                }
            }
        }
    }
</style>
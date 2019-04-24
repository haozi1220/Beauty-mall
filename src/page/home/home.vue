<template>
    <div class="home_contain">
        <div class="main_contain">
            <div class="top_contain">
                <div class="logo_contain">
                    <img src="~images/logo.png" height="56" width="48">
                </div>
                <div class="searcher_contain">
                    <a href="javascript:;"><i class="searcher_icon"></i><span>搜索</span></a>
                </div>
                <div class="camera_contain">
                    <img src="~images/camera_icon.png" height="44" width="56">
                </div>
            </div>
            <ul class="main_tab">
                <router-link tag="li" :to="{path: '/home/handpick',name: 'handpick'}">精选<i class="blue_line"></i></router-link>
                <router-link tag="li" :to="{paht: '/home/gifts', name: 'gifts', params: {productName: 'gifts'}}">礼物<i class="blue_line"></i></router-link>
                <router-link tag="li" :to="{paht: '/home/gifts', name: 'gifts', params: {productName: 'accessories'}}">配饰<i class="blue_line"></i></router-link>
                <router-link tag="li" :to="{paht: '/home/gifts', name: 'gifts', params: {productName: 'makeup'}}">美妆<i class="blue_line"></i></router-link>
                <router-link tag="li" :to="{path: '/home/bag' ,name: 'bag', params: {productName:'bag'}}">女包<i class="blue_line"></i></router-link>
                <router-link tag="li" :to="{path: '/home/bag' ,name: 'bag', params: {productName:'shoes'}}">女鞋<i class="blue_line"></i></router-link>
            </ul>
        </div>
        <div class="route_contain">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '~@/common/sass/mixin';
    .home_contain { position: relative; padding: 0 57px; height: 100%;
        .main_contain { position: absolute; top: 0; left: 57px; right: 57px; background-color: #fff; }
        .top_contain { display: flex; justify-content: space-between; padding-top: 8px;
            .logo_contain { width: 48px; height: 56px;
                img { display: block; width: 100%; height: 100%; }
            }
            .searcher_contain { width: 384px; height: 56px; border-radius: 10px; background: #f8f8f8; text-align: center;
                a { display: inline-block;padding: 16px 0; font-size: 24px; color: #cecece;
                    .searcher_icon { display: inline-block; width: 24px; height: 24px; margin-right: 16px; background: url('~@/common/images/search_icon.png') no-repeat center center; background-size: 24px 24px; }
                }
            }
            .camera_contain { width: 56px; padding: 6px 0;
                img { display: block; width: 100%; height: 44px; }
            }
        }
    }
    .main_tab { display: flex; justify-content: space-between; padding-top: 13px; padding-bottom: 24px;
        li { position: relative; font-size: 28px; line-height: 68px; color: #aeaeae; @include extend-click();
            &.active { color: #262626;
                .blue_line { position: absolute; left: 0; bottom: -4px; width: 24px; height: 4px; border-radius: 2px; background: #4a90e2; }
            }
        }
    }
    .route_contain { height: 100%; padding-top: 170px; overflow-y: auto;}
</style>

<template>
    <div class="discover_contian">
        <ul class="discover_list">
            <li class="cover_item" v-for="(coverItem, index) in disCoverData" :key="index">
                <div class="avatar_contain">
                    <img :src="coverItem.coverAvatarImg">
                </div>
                <div class="cover_info">
                    <span class="cover_name">{{coverItem.coverName}}</span>
                    <span class="cover_label">{{coverItem.fashionBloggers}}</span>
                </div>
                <div class="follow_contain">
                    <span class="follow_btn ready" style="display: none;">已关注</span>
                    <span class="follow_btn not_ready" >+ 关注</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            disCoverData: [
                {
                    coverAvatarImg: require('../../common/images/avatar_img1.png'),
                    coverName: 'Eartha',
                    fashionBloggers: '时尚博主'
                },{
                    coverAvatarImg: require('../../common/images/avatar_img2.png'),
                    coverName: 'Abagael',
                    fashionBloggers: '摄影师'
                },{
                    coverAvatarImg: require('../../common/images/avatar_img3.png'),
                    coverName: 'Kaitlyn',
                    fashionBloggers: '模特'
                },{
                    coverAvatarImg: require('../../common/images/avatar_img4.png'),
                    coverName: 'Madeline',
                    fashionBloggers: '画家'
                },{
                    coverAvatarImg: require('../../common/images/avatar_img5.png'),
                    coverName: 'Bunny',
                    fashionBloggers: '演员'
                },{
                    coverAvatarImg: require('../../common/images/avatar_img6.png'),
                    coverName: 'Estelle',
                    fashionBloggers: '歌星'
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .discover_list { padding: 0 57px;
        .cover_item { padding-top: 66px; text-align: left;
            div { display: inline-block; vertical-align: top; height: 86px;
                &.avatar_contain { width: 86px; height: 86px; overflow: hidden; border-radius: 50%;
                    img { display: block; width: 100%; height: 100%; }
                }
                &.cover_info { margin-left: 20px; margin-top: 8px;
                    span { display: block;
                        &.cover_name { font-size: 28px; line-height: 1; color: #4a4a4a; }
                        &.cover_label { margin-top:  15px; font-size: 22px; line-height: 1; color: #9b9b9b; }
                    }
                }
                &.follow_contain { float: right; height: 100%; padding: 18px 0;
                    .follow_btn { display: block; width: 164px; text-align: center; font-size: 22px; line-height: 46px; border-radius: 24px;
                        &.ready { color: #9b9b9b; border: 2px solid #979797; }
                        &.not_ready { color: #fff; background-color: #4a4a4a; border: 2px solid #e9e9e9; box-shadow: 0 1px 3px #e9e9e9; }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="chat_list_contain">
        <ul class="chat_list">
            <router-link tag="li" to='' v-for="( chatItem, index) in chatListData" :key="index" class="chat_item">
                <div class="avatar_contain">
                    <img :src="chatItem.avatarImg">
                </div>
                <div class="chat_message">
                    <span class="chater_name">{{chatItem.chaterName}}</span>
                    <span class="last_message">{{chatItem.lastMessage}}</span>
                </div>
                <div class="chat_tiem">{{chatItem.chatTime}}</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            chatListData: [{
                avatarImg: require('../../common/images/avatar_img1.png'),
                chaterName: 'Eartha',
                lastMessage: '是时候准备过冬了',
                chatTime: '5分钟'
            },{
                avatarImg: require('../../common/images/avatar_img2.png'),
                chaterName: 'Abagael',
                lastMessage: '我觉得用这首歌很好',
                chatTime: '10分钟'
            },{
                avatarImg: require('../../common/images/avatar_img3.png'),
                chaterName: 'Kaitlyn',
                lastMessage: '除了嘴唇，还有你的心',
                chatTime: '10分钟'
            },{
                avatarImg: require('../../common/images/avatar_img4.png'),
                chaterName: 'Madeline',
                lastMessage: '北方已经下雪',
                chatTime: '20分钟'
            },{
                avatarImg: require('../../common/images/avatar_img5.png'),
                chaterName: 'Bunny',
                lastMessage: '有些事情是错误的',
                chatTime: '20分钟'
            },{
                avatarImg: require('../../common/images/avatar_img6.png'),
                chaterName: 'Estelle',
                lastMessage: '我还是受不了',
                chatTime: '20分钟'
            }]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .chat_list_contain { height: 100%; }
    .chat_list { height: 100%; overflow-y: auto; padding: 0 30px;
        .chat_item { position: relative; margin-bottom: 30px; padding: 17px 48px 17px 26px; text-align: left; box-shadow: 0 2px 5px #9b9b9b45; border-radius: 5px;
            div { display: inline-block; vertical-align: top;
                &.avatar_contain { width: 86px; height: 86px; border-radius: 50%; overflow: hidden; margin-right: 30px;
                    img { display: block; width: 100%; height: 100%; }
                }
                &.chat_message { padding: 8px 0 18px;
                    .chater_name { display: block; font-size: 28px; line-height: 1; color: #4a4a4a; }
                    .last_message { display: block; margin-top: 10px; font-size: 22px; line-height: 1; color: #9b9b9b; }
                }
                &.chat_tiem { position: absolute; right: 48px; top: 45px; font-size: 22px; line-height: 1; color: #9b9b9b;
                    &:after { position: absolute; content: ''; right: -20px; top: 7px;  width: 10px; height: 10px; border-radius: 50%; background-color: #e86c6c;}
                }
            }
        }
    }
</style>

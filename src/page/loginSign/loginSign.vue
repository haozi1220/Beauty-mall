<template>
    <div class="login_sign_contain">
        <div class="top_img_contain">
            <img src="~images/logo_bg.png" height="360" width="750">
        </div>
        <ul class="login_sign_nav">
            <router-link tag="li" to="/loginSign/logIn" class="login_sign_item">登录</router-link>
            <router-link tag="li" to="/loginSign/signUp" class="login_sign_item">注册</router-link>
        </ul>
        <div class="login_sign_wrap">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .login_sign_contain { height: 100%;
        .top_img_contain { height: 360px;
            img { display: block; width: 100%; height: 100%;}
        }
        .login_sign_nav { display: flex; justify-content: space-between; padding: 6px 74px 10px; background-color: #fff; box-shadow: 0 5px 22px #f8f7f7;
            .login_sign_item { width: 224px; text-align: center; font-size: 28px; line-height: 88px; color: #3f3f3f; border-bottom: 0.2rem solid #fff;
                &.active { color: #4a90e2; border-color: #4a90e2; }
            }
        }
        .login_sign_wrap { height: calc(100% - 464px); }
    }
</style>

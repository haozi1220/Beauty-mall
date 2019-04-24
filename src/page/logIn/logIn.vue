<template>
    <div class="login_contain">
        <div class="login_item">
            <span class="login_span account_number">账号</span><input type="text" v-model="username"/>
        </div>
        <div class="login_item">
            <span class="login_span pass_word">密码</span><input type="password" v-model="password"/>
        </div>
        <div class="login_btn_wrap">
            <a href="javascript:;" class="login_btn" @click="checkUser">登录</a>
        </div>
        <router-link tag="a" to="" class="forget_password">忘记密码？</router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password:''
        }
    },
    methods : {
        checkUser () {
            var _this = this;
            this.$http.post('/api/login', {
                username: _this.username,
                password: _this.password
            }).then((res) => {
                if(res.data.msg === "登陆成功") {
                    // 登陆成功，获取此时时间戳，作为判断localstorage过期的开始时间
                    let currentTime = new Date().getTime() + 60000;
                    let tokenStr = JSON.stringify({'data':res.data.token,'time':currentTime})
                    localStorage.setItem("userToken",tokenStr);
                    _this.error = false;
                    // 拿到来时路径，登陆成功后跳回原路径
                    _this.$router.push({path: _this.$route.query.redirect});
                } else {
                    _this.error = true
                }
            },(err) => {
                console.log(err);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '~@/common/sass/mixin';
    .login_contain { margin-top: 26px; padding: 0 74px; text-align: left;
        .login_item { margin-top: 26px; padding: 26px 0 26px 20px; border-bottom: 0.1rem solid #e2e2e2; border-radius: 2px;
            .login_span { display: inline-block; margin-right: 20px; padding-left: 54px; font-size: 28px; line-height: 32px; color: #cbcbcb;
                &.account_number { background: url('~@/common/images/profile_icon.png') no-repeat left center; background-size: 34px 32px; }
                &.pass_word { background: url('~@/common/images/unlock_icon.png') no-repeat left center; background-size: 34px 32px; }
            }
            input { display: inline-block; font-size: 24px; line-height: 1; color: #585858; }
        }
        .login_btn_wrap { margin-top: 96px;
            .login_btn { display: block; width: 100%; text-align: center; font-size: 30px; line-height: 80px; color: #fff; background: #4a90e2; border-radius: 41px;
                &:active { background-color: #5fa3f2; }
            }
        }
        .forget_password { display: block; width: 200px; margin: 20px auto 0; text-align: center; font-size: 24px; line-height: 1; color: #4a90e2; @include extend-click(); }
    }
</style>


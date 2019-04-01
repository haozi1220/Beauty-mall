<template>
    <div class="login_contain">
        <div class="login_item">
            <span class="login_span account_number">账号</span><br /><input type="text" value="Gchahissea" />
        </div>
        <div class="login_item">
            <span class="login_span email">邮箱</span><br /><input type="email" value="Rchan387989@163.com" />
        </div>
        <div class="login_item">
            <span class="login_span pass_word">密码</span><br /><input type="password" value="123456" />
        </div>
        <div class="login_btn_wrap">
            <a href="javascript:;" class="login_btn">注册</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../common/sass/mixin';
    .login_contain { margin-top: 26px; padding: 0 74px; text-align: left;
        .login_item { margin-top: 26px; padding: 26px 0 26px 20px; border-bottom: 0.1rem solid #e2e2e2; border-radius: 2px;
            .login_span { display: inline-block; margin-right: 20px; margin-bottom: 12px; padding-left: 54px; font-size: 28px; line-height: 32px; color: #cbcbcb;
                &.account_number { background: url('../../../static/images/profile_icon.png') no-repeat left center; background-size: 34px 32px; }
                &.email { background: url('../../../static/images/email_icon.png') no-repeat left center; background-size: 34px 32px; }
                &.pass_word { background: url('../../../static/images/unlock_icon.png') no-repeat left center; background-size: 34px 32px; }
            }
            input { display: inline-block; margin-left: 54px; font-size: 24px; line-height: 1; color: #585858; }
        }
        .login_btn_wrap { margin-top: 96px;
            .login_btn { display: block; width: 100%; text-align: center; font-size: 30px; line-height: 80px; color: #fff; background: #4a90e2; border-radius: 41px;
                &:active { background-color: #5fa3f2; }
            }
        }
    }
</style>


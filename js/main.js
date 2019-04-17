

layui.use(['jquery'],function(){
    var $ = layui.jquery;

    var contactInfo = [];
    contactInfo.push('<h4 class="title">我的联系方式</h4>');
    contactInfo.push('<p>微信<span class="WeChat">404832261</span></p>');
    contactInfo.push('<p>手机<span class="iphone">15316766381</span></p>');
    contactInfo.push('<p>邮箱<span class="email">404832261@qq.com</span></p>');
    $(".contactInfo").append(contactInfo.join(''));





})



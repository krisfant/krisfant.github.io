

layui.use(['jquery'],function(){
    var $ = layui.jquery;

    var contactInfo = [];
    contactInfo.push('<h4 class="title">我的联系方式</h4>');
    contactInfo.push('<p>微信<span class="WeChat">593309703</span></p>');
    // contactInfo.push('<p>手机<span class="iphone">emmm不告诉你</span></p>');
    contactInfo.push('<p>邮箱<span class="email">593309703@qq.com</span></p>');
    $(".contactInfo").append(contactInfo.join(''));





})



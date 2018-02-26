/*chris 2017.6.16*/
//var height_content = [130,264,210,210,430,451,130];
var height_content = [150,150,150,150,150,150,150,150,150,150,150,150];
function deadline() {
    $.ajax({
        url : "js/txt.json",
        data : "",
        type : "POST",
        dataType : "json",
        success : function (data) {
            if(data.code == "0000"){
                var content_ol_li="";
                $.each(data.data,function (i,v) {

                    var content = v.content;
                    var ul_li = "";
                    $.each(content,function (contentI,contentV) {ul_li += '<li>'+ contentV +'</li>'});
                    if((i+1)%2==0){
                        if((i+1)%3==0){
                            content_ol_li +=
                                '<li class="color transparent-white">'+
                                '<div class="pointer slategray">'+ '<i class="fa fa-calendar"></i>'+ '</div>'+
                                '<div class="el-container">'+
                                '<div class="content">'+
                                '<span class="time"><i class="fa fa-clock-o"></i> Deadline, '+ v.time +'</span>'+
                                '<h1 onclick="show_ul(this,'+ i +')">'+ v.headline +'</h1>'+
                                '<ul class="ulStyle" style="height: '+ height_content[i] +'px;">'+ ul_li +'</ul>'+
                                '<p onclick="show_ul(this,'+ i +')" class="footer_p fa fa-angle-double-down"></p>'+
                                '</div>'+
                                '<div class="side"><img src="images/carousel'+ (i+1) +'.jpg" alt=""></div>'+
                                '</div>'+
                                '</li>'
                        }else {
                            content_ol_li +=
                                '<li class="color transparent-black">'+
                                '<div class="pointer slategray">'+ '<i class="fa fa-calendar"></i>'+ '</div>'+
                                '<div class="el-container">'+
                                '<div class="content">'+
                                '<span class="time"><i class="fa fa-clock-o"></i> Deadline, '+ v.time +'</span>'+
                                '<h1 onclick="show_ul(this,'+ i +')">'+ v.headline +'</h1>'+
                                '<ul class="ulStyle" style="height: '+ height_content[i] +'px;">'+ ul_li +'</ul>'+
                                '<p onclick="show_ul(this,'+ i +')" class="footer_p fa fa-angle-double-down"></p>'+
                                '</div>'+
                                '<div class="side"><img src="images/carousel'+ (i+1) +'.jpg" alt=""></div>'+
                                '</div>'+
                                '</li>'
                        }
                    }else {
                        if((i+1)%3==0){
                            content_ol_li +=
                                '<li class="color transparent-white">'+
                                '<div class="pointer slategray">'+ '<i class="fa fa-calendar"></i>'+ '</div>'+
                                '<div class="el-container">'+
                                '<div class="side bg-greensea"><img src="images/carousel'+ (i+1) +'.jpg" alt=""></div>'+
                                '<div class="content">'+
                                '<span class="time"><i class="fa fa-clock-o"></i> Deadline, '+ v.time +'</span>'+
                                '<h1 onclick="show_ul(this,'+ i +')">'+ v.headline +'</h1>'+
                                '<ul class="ulStyle" style="height: '+ height_content[i] +'px;">'+ ul_li +'</ul>'+
                                '<p onclick="show_ul(this,'+ i +')" class="footer_p fa fa-angle-double-down"></p>'+
                                '</div>'+
                                '</div>'+
                                '</li>'
                        }else {
                            content_ol_li +=
                                '<li class="color transparent-black">'+
                                '<div class="pointer slategray">'+ '<i class="fa fa-calendar"></i>'+ '</div>'+
                                '<div class="el-container">'+
                                '<div class="side bg-greensea"><img src="images/carousel'+ (i+1) +'.jpg" alt=""></div>'+
                                '<div class="content">'+
                                '<span class="time"><i class="fa fa-clock-o"></i> Deadline, '+ v.time +'</span>'+
                                '<h1 onclick="show_ul(this,'+ i +')">'+ v.headline +'</h1>'+
                                '<ul class="ulStyle" style="height: '+ height_content[i] +'px;">'+ ul_li +'</ul>'+
                                '<p onclick="show_ul(this,'+ i +')" class="footer_p fa fa-angle-double-down"></p>'+
                                '</div>'+
                                '</div>'+
                                '</li>'
                        }
                    }

                });
                $("#content_div").html(content_ol_li);
            }
        },
        error : function () {

        }
    });
}
function show_ul(btn,index) {
    if($(btn).parent().find("ul").height()==height_content[index]){
        $(btn).parent().find("ul").css("height","auto");
        $(btn).parent().parent().find(".side").hide();
        $(btn).parent().find("p").attr("class","footer_p fa fa-angle-double-up");
    }else {
        $(btn).parent().find("ul").css("height",height_content[index]);
        $(btn).parent().parent().find(".side").show();
        $(btn).parent().find("p").attr("class","footer_p fa fa-angle-double-down");
    }
}
deadline();
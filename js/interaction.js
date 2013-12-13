$(document).ready(function(){

    $('html, body').animate({scrollTop: '0px'}, 1000);

    $('#displayDesktopSize').click(
        function(){
            $("#sizeFrame").removeClass().addClass("desktopSized");
            $("#demoHolder").removeClass().addClass("desktopSizedHolder");            
        }
    );

    $('#displayTabletSize').click(
        function(){
            $("#sizeFrame").removeClass().addClass("tabletSized");
            $("#demoHolder").removeClass().addClass("tabletSizedHolder");              
        }
    );

    $('#displaySmartphoneSize').click(
        function(){
            $("#sizeFrame").removeClass().addClass("smartPhoneSized");
            $("#demoHolder").removeClass().addClass("smartPhoneSizedHolder");               
        }
    );    

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-100
        }, 500);
        return false;
    });

});
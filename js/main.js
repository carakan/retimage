/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

}*/


$(document).ready(function(){
    $('#splash').height($(window).height()-20);
    $('.logo1').click(function(){
        window.open('http://www.novartis.es', '_system');
    })
    $('.logo2').click(function(){
        window.open('http://www.lineadecomunicacion.com/lang/es/main.htm', '_system');
    })


    $('img.mob-img').click(function(){
        $('[data-role=header],[data-role=footer]').fixedtoolbar({ tapToggle:false });
        $.mobile.changePage('#img-viewer');
        $('body').addClass('black');

        $('#beatles').panzoom("destroy");
        $('#beatles').attr('src',$(this).attr('src'))
        $("#beatles").panzoom({
            startTransform: 'scale(0.5)',
            minScale: 0.5
        })



    });

    $("#beatles").panzoom();
    $('#btn-back').on('touchstart',function(){
        $('[data-role=header],[data-role=footer]').fixedtoolbar({ tapToggle:true });
        $('body').removeClass('black');
        $('body').removeClass('black');
        $('body').removeClass('black');
        $('body').removeClass('black');

    });




    $('#btn-save').click(function(){

        function saveImageToPhone(url, success, error) {
            var canvas, context, imageDataUrl, imageData;
            var img = new Image();

            try {
                img.onload = function() {
                    canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context = canvas.getContext('2d');
                    context.drawImage(img, 0, 0);
                    try {
                        imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
                        imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');


                        window.canvas2ImagePlugin.saveImageDataToLibrary(
                            function(msg){
                                //alert('The image was saved to the photos gallery on your device.');
                                $("#popupBasic").popup("open")
                            },
                            function(err){
                                //alert('There was a problem saving the image to your device.');
                            },
                            canvas
                        );

                        /*cordova.exec(
                            success,
                            error,
                            'Canvas2ImagePlugin',
                            'saveImageDataToLibrary',
                            [imageData]
                        );*/
                    }
                    catch(e) {
                        error(e.message);
                    }
                };
                img.src = url;
            }
            catch(e) {
                error(e.message);
            }
        }



        var success = function(msg){
            //alert('success: '+msg);
            //$("#popupBasic").popup("open")
        };

        var error = function(err){
            //alert('error: '+err);
        };

        saveImageToPhone($('#beatles').attr('src'), success, error);
        // 'http://my7bits.com/a.bmp'

    });

});
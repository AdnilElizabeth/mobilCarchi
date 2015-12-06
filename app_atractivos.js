jQuery(function($){
    $.ajax({
        type: 'GET',
        url: 'http://turismo.coored.org/atractivos/app.php',
        data: {field: 'value',llenar:''},
        dataType: 'jsonp',
        crossDomain: true,
    }).done(function(response){
        console.log(response);
        var data=response[0];
        var a=0;
        $('#tabla-informacion').DataTable().clear().draw();
        for (var i = 0; i < data.length; i=i+5) {
             a++;
                        $('#tabla-informacion').DataTable().row.add( [
                            a,
                            data[i+0],
                            data[i+1],
                            data[i+2],                          
                            data[i+3],
                            '<div class="">'
                                +'<a href="#" class="blue"  onclick=mostrar_info("'+data[i+4]+'")>'
                                    +'<i class="ace-icon fa fa-eye bigger-130"></i>'
                                +'</a>'
                            +'</div>'
                        ] ).draw(); 
        }
        // $('#obj_body').html(response)
    }).fail(function(error){
        console.log(error.statusText);
    });

});
function mostrar_info(id){
    $.ajax({
        type: 'GET',
        url: 'http://turismo.coored.org/atractivos/app.php',
        data: {field: 'value',datos_editar:'ok'},
        dataType: 'jsonp',
        crossDomain: true,
    }).done(function(response){
        console.log(response);
        var data=response[0];
        var a=0;
         $('#modal-ver').modal('show');
                        $('#select_cat1').text(data['0']);
                        $('#select_tipo1').text(data[1]);
                        $('#select_subtipo1').text(data[2]);
                        $('#lbl_nombre1').text(data[3]);
                        $('#lbl_propietario1').text(data[4]);
                        $('#select_canton1').text(data[5]);
                        $('#select_parroquia1').text(data[6]);
                        $('#lbl_direccion1').text(data[7]);
                        $('#lbl_latitud1').text(data[8]);
                        $('#lbl_longitud1').text(data[9]);
                        $('#select_clima1').text(data[10]);
                        $('#lbl_telefono1').text(data[11]);
                        $('#lbl_correo1').text(data[12]);
                        $('#lbl_web1').text(data[13]);
                        $('#lbl_descripcion1').text(data[14]);
                        $('#lbl_foto1').text(data[18]);
                        $('#lbl_actividades1').text(data[15]);
                        $('#lbl_estado1').text(data[16]);
                        $('#lbl_rutas1').text(data[17]);
                        $('#lbl_poblado1').text(data[18]);
                        $('#lbl_quien1').text(data[19]);
                        $('#lbl_contacto1').text(data[20]);
                        $('#lbl_alojamiento1').text(data[21]);
                        $('#lbl_alimentacion1').text(data[22]);
                        $('#lbl_atractivos_cercanos1').text(data[23]);
                        $('#lbl_precio1').text(data[24]);
     
        // $('#obj_body').html(response)
    }).fail(function(error){
        console.log(error.statusText);
    });

};

// function mostrar_info(id){
//      $('#txt_id_alojamiento_img').val(id);
//      $('#txt_id_atractivo').val(id);
//     $.ajax({
//         type: 'GET',
//         url: 'http://turismo.coored.org/atractivos/app.php',
//         data: {field: 'value',datos_editar:'ok'},
//         dataType: 'jsonp',
//         crossDomain: true,
//     }).done(function(response){
//         console.log(response);
//         var data=response[0];
//       $('#modal-ver').modal('show');
//                         $('#select_cat1').text(data[0]);
//                         $('#select_tipo1').text(data[1]);
//                         $('#select_subtipo1').text(data[2]);
//                         $('#lbl_nombre1').text(data[3]);
//                         $('#lbl_propietario1').text(data[4]);
//                         $('#select_canton1').text(data[5]);
//                         $('#select_parroquia1').text(data[6]);
//                         $('#lbl_direccion1').text(data[7]);
//                         $('#lbl_latitud1').text(data[8]);
//                         $('#lbl_longitud1').text(data[9]);
//                         $('#select_clima1').text(data[10]);
//                         $('#lbl_telefono1').text(data[11]);
//                         $('#lbl_correo1').text(data[12]);
//                         $('#lbl_web1').text(data[13]);
//                         $('#lbl_descripcion1').text(data[14]);
//                         $('#lbl_foto1').text(data[18]);
//                         $('#lbl_actividades1').text(data[15]);
//                         $('#lbl_estado1').text(data[16]);
//                         $('#lbl_rutas1').text(data[17]);
//                         $('#lbl_poblado1').text(data[18]);
//                         $('#lbl_quien1').text(data[19]);
//                         $('#lbl_contacto1').text(data[20]);
//                         $('#lbl_alojamiento1').text(data[21]);
//                         $('#lbl_alimentacion1').text(data[22]);
//                         $('#lbl_atractivos_cercanos1').text(data[23]);
//                         $('#lbl_precio1').text(data[24]);
//     }).fail(function(error){
//         console.log(error.statusText);
//     });
//     // mostrar_img1(id);
// };

            function mostrar_img1(id){
                $.ajax({
                    url: 'http://turismo.coored.org/atractivos/app.php',
                    type: 'POST',
                    data: {edicion_imagenes1: 'ok',id:id},
                    success:function(data){
                        $('#obj_img1').html(data)
                    }
                });
            }


$(function(){
        $('#btn_mapa_ver').click(function(){
        var latlon;
        function localize() { 
    if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(mapa,error); 
    } else { 
    alert('Tu navegador no soporta geolocalizacion.'); 
    } 
    } 
    function mapa(pos) { /************************ Aqui están las variables que te interesan***********************************/ 
    var latitud = pos.coords.latitude; 
    var longitud = pos.coords.longitude; 
    latlon=latitud+','+longitud;
    var lo=document.getElementById("lbl_longitud1").innerHTML;
    var la=document.getElementById("lbl_latitud1").innerHTML;
    var pos=(latlon+'&loc='+la+','+lo); 
    window.location.href = 'http://127.0.0.1/CarchiTuristico/cliente_movil/ruta/index.html?z=14&loc='+pos

    } 
    function error(errorCode) { 
    if(errorCode.code == 1) 
    alert("No has permitido buscar tu localizacion") 
    else if (errorCode.code==2) 
    alert("Posicion no disponible") 
    else 
    alert("Ha ocurrido un error") 
    } 

    localize();

        });
     

});
jQuery(function($){
    $.ajax({
        type: 'GET',
        url: 'http://turismo.coored.org/alojamiento/app.php',
        data: {field: 'value',llenar:''},
        dataType: 'jsonp',
        crossDomain: true,
    }).done(function(response){
        console.log(response);
        var data=response[0];
        var a=0;
        $('#tabla-informacion').DataTable().clear().draw();
        for (var i = 0; i < data.length; i=i+6) {
             a++;
                        $('#tabla-informacion').DataTable().row.add( [
                            a,
                            data[i+0],
                            data[i+1],
                            data[i+3],
                            '<div class="">'
                                +'<a href="#" class="blue"  onclick=mostrar_info("'+data[i+5]+'")>'
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
                
                $('#txt_id_alojamiento_img').val(id)
                $('#txt_id_comida').val(id)
                // edicion
                $.ajax({
                    url:'http://turismo.coored.org/alojamiento/app.php',
                    type:'POST',
                    dataType:'json',
                    data:{datos_editar:'ok',id:id},
                    success:function(data){
                        $('#modal-ver').modal('show');  
                        $('#select_tipo1').text(data[0]);
                        $('#lbl_nombre1').text(data[1]);
                        $('#lbl_propietario1').text(data[2]);
                        $('#select_canton1').text(data[3]);
                        $('#select_parroquia1').text(data[4]);
                        $('#lbl_direccion1').text(data[5]);
                        $('#lbl_latitud1').text(data[6]);
                        $('#lbl_longitud1').text(data[7]);
                        $('#select_categoria1').text(data[8]);
                        $('#lbl_habitaciones1').text(data[9]);
                        $('#lbl_plazas1').text(data[10]);
                        $('#lbl_telefono1').text(data[11]);
                        $('#lbl_correo1').text(data[12]);
                        $('#lbl_web1').text(data[13]);
                        $('#lbl_descripcion1').text(data[14]);
                        $('#lbl_foto1').text(data[15]);
                        $('#lbl_precio1').text(data[16]);
                    }
                })
                // edicion de imagenes
                mostrar_img1(id);
        
            }
        // edicion de registro

            function mostrar_img1(id){
                $.ajax({
                    url: 'http://turismo.coored.org/alojamiento/app.php',
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
    window.location.href = 'http://186.3.11.220/CarchiTuristico/cliente_movil/ruta/index.html?z=14&loc='+pos

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
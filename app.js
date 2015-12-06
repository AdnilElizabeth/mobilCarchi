	function mostrar_info_alojamiento(id){
				//alert (id);
				$('#txt_id_alojamiento_img').val(id)
				$('#txt_id_alojamiento').val(id)
				// edicion
				$.ajax({
					url:'http://turismo.coored.org/app.php',
					type:'POST',
					dataType:'json',
					async:false,
					data:{datos_editar_alojamiento:'ok',id:id},
					success:function(data){
						$('#modal-ver-alojamiento').modal('show');	
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
						$('#lbl_precio1').text(data[16]);
						$('#lbl_foto1').text(data[15]);
					 	$('#lbl_contador').text(data[17]);
					}
				})
				// edicion de imagenes
				mostrar_img1_aloja(id);
				contador_aloja(id);

			}

			function contador_aloja(id){
				var id=$('#txt_id_alojamiento').val();		
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_contador_aloja: 'ok',id:id}
				});
			}
				
			function mostrar_img1_aloja(id){
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_imagenes1_aloja: 'ok',id:id},
					success:function(data){
						$('#obj_img1_aloja').html(data)
					}
				});
			}
			function mostrar_img_aloja(id){
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_imagenes_aloja: 'ok',id:id},
					success:function(data){
						$('#obj_img_aloja' ).html(data)
					}
				});
			}

			function mostrar_info_comidas(id){
				$('#txt_id_alojamiento_img_c').val(id)
				$('#txt_id_comida').val(id)
				// edicion
				$.ajax({
					url:'http://turismo.coored.org/app.php',
					type:'POST',
					dataType:'json',
					async:false,
					data:{datos_editar_comidas:'ok',id:id},
					success:function(data){
						$('#modal-ver-comidas').modal('show');	
						$('#select_tipo2').text(data[0]);
						$('#lbl_nombre2').text(data[1]);
						$('#lbl_propietario2').text(data[2]);
						$('#select_canton2').text(data[3]);
						$('#select_parroquia2').text(data[4]);
						$('#lbl_direccion2').text(data[5]);
						$('#lbl_latitud2').text(data[6]);
						$('#lbl_longitud2').text(data[7]);
						$('#select_categoria2').text(data[8]);
						$('#lbl_habitaciones2').text(data[9]);
						$('#lbl_plazas2').text(data[10]);
						$('#lbl_telefono2').text(data[11]);
						$('#lbl_correo2').text(data[12]);
						$('#lbl_web2').text(data[13]);
						$('#lbl_descripcion2').text(data[14]);
						$('#lbl_foto2').text(data[15]);
					}

				})
				// edicion de imagenes
				mostrar_img1_comidas(id);


			contador_comida(id);
		
			}
		// edicion de registro
		

				function contador_comida(ide){
				var ide=$('#txt_id_comida').val();
				// alert (ide + "contador");		
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_contador_comida: 'ok',ide:ide}
				});
			}

			function mostrar_img1_comidas(id){
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_imagenes1_comidas: 'ok',id:id},
					success:function(data){
						$('#obj_img1_comidas').html(data)
					}
				});
			}
			function mostrar_img_comidas(id){
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_imagenes_comidas: 'ok',id:id},
					success:function(data){
						$('#obj_img_comidas').html(data)
					}
				});
			}

function mostrar_info_atractivos(id){
				$('#txt_id_alojamiento_img_a').val(id)
				$('#txt_id_atractivo').val(id)
				// edicion
				$.ajax({
					url:'http://turismo.coored.org/app.php',
					type:'POST',
					dataType:'json',
					data:{datos_editar_atractivos:'ok',id:id},
					success:function(data){
						$('#modal-ver-atractivos').modal('show');
						$('#select_cat3').text(data[0]);
						$('#select_tipo3').text(data[1]);
						$('#select_subtipo3').text(data[2]);
						$('#lbl_nombre3').text(data[3]);
						$('#lbl_propietario3').text(data[4]);
						$('#select_canton3').text(data[5]);
						$('#select_parroquia3').text(data[6]);
						$('#lbl_direccion3').text(data[7]);
						$('#lbl_latitud3').text(data[8]);
						$('#lbl_longitud3').text(data[9]);
						$('#select_clima3').text(data[10]);
						$('#lbl_telefono3').text(data[11]);
						$('#lbl_correo3').text(data[12]);
						$('#lbl_web3').text(data[13]);
						$('#lbl_descripcion3').text(data[14]);
						$('#lbl_foto3').text(data[18]);
						$('#lbl_actividades3').text(data[15]);
						$('#lbl_estado3').text(data[16]);
						$('#lbl_rutas3').text(data[17]);
						$('#lbl_poblado3').text(data[18]);
						$('#lbl_quien3').text(data[19]);
						$('#lbl_contacto3').text(data[20]);
						$('#lbl_alojamiento3').text(data[21]);
						$('#lbl_alimentacion3').text(data[22]);
						$('#lbl_atractivos_cercanos3').text(data[23]);
						$('#lbl_precio3').text(data[24]);
					}

				})
				// edicion de imagenes
				mostrar_img1_atractivos(id);
				contador_atractivo(id);
}
	function contador_atractivo(id1){
				var id1=$('#txt_id_atractivo').val();		
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_contador_atractivo: 'ok',id1:id1}
				});
			}
			function mostrar_img1_atractivos(id){
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_imagenes1_atractivos: 'ok',id:id},
					success:function(data){
						$('#obj_img1_atractivos').html(data)
					}
				});
			}
			function mostrar_img_atractivos(id){
				$.ajax({
					url: 'http://turismo.coored.org/app.php',
					type: 'POST',
					data: {edicion_imagenes_atractivos: 'ok',id:id},
					success:function(data){
						$('#obj_img_atractivos').html(data)
					}
				});
			}

function iniciar_mapa()
{

		var lon=document.getElementById("lbl_longitud1").innerHTML;
		var lat=document.getElementById("lbl_latitud1").innerHTML;
		var tipo_a=document.getElementById("select_tipo1").innerHTML;
		var nombre_a=document.getElementById("lbl_nombre1").innerHTML;
		
	
	$('#obj_mapa').html('')
	map=new OpenLayers.Map("obj_mapa");
	
    map.addLayer(new OpenLayers.Layer.OSM());
 
    var lonLat = new OpenLayers.LonLat(lon,lat)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
 
    var zoom=18;
var marker = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(marker); 
    marker.addMarker(new OpenLayers.Marker(lonLat)); 

   marker.events.register("click", marker, function(e){
    map.addPopup(new  OpenLayers.Popup.FramedCloud(
                            "Alojamiento",
                             new OpenLayers.LonLat(lon,lat )
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // de WGS 1984
            new OpenLayers.Projection("EPSG:900913")),
          
          null,
           'Tipo:'+tipo_a+ "</br>"+' Nombre:'+nombre_a,

          null,
          true
    ));

  });
    map.setCenter (lonLat, zoom);
}
function iniciar_mapa2()
{

		var lon=document.getElementById("lbl_longitud2").innerHTML;
		var lat=document.getElementById("lbl_latitud2").innerHTML;

		var tipo_c=document.getElementById("select_tipo2").innerHTML;
		var nombre_c=document.getElementById("lbl_nombre2").innerHTML;
		$('#obj_mapa').html('')
	map=new OpenLayers.Map("obj_mapa");
    map.addLayer(new OpenLayers.Layer.OSM());
 
    var lonLat = new OpenLayers.LonLat(lon,lat)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
 
      var zoom=18;
var marker = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(marker); 
    marker.addMarker(new OpenLayers.Marker(lonLat)); 

   marker.events.register("click", marker, function(e){
    map.addPopup(new  OpenLayers.Popup.FramedCloud(
                            "Comidas & Bebidas",
                             new OpenLayers.LonLat(lon,lat )
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // de WGS 1984
            new OpenLayers.Projection("EPSG:900913")),
          
          null,
           'Tipo:'+tipo_c+ "</br>"+' Nombre:'+nombre_c,

          null,
          true
    ));

  });
    map.setCenter (lonLat, zoom);
}
function iniciar_mapa3()
{
		var lon=document.getElementById("lbl_longitud3").innerHTML;
		var lat=document.getElementById("lbl_latitud3").innerHTML;

		var tipo_a=document.getElementById("select_subtipo3").innerHTML;
		var nombre_a=document.getElementById("lbl_nombre3").innerHTML;
		$('#obj_mapa').html('')
	map=new OpenLayers.Map("obj_mapa");
    map.addLayer(new OpenLayers.Layer.OSM());
 
    var lonLat = new OpenLayers.LonLat(lon,lat)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
 
       var zoom=18;
var marker = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(marker); 
    marker.addMarker(new OpenLayers.Marker(lonLat)); 

   marker.events.register("click", marker, function(e){
    map.addPopup(new  OpenLayers.Popup.FramedCloud(
                            "Atractivo Turistico",
                             new OpenLayers.LonLat(lon,lat )
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // de WGS 1984
            new OpenLayers.Projection("EPSG:900913")),
          
          null,
           'Tipo:'+tipo_a+ "</br>"+' Nombre:'+nombre_a,

          null,
          true
    ));

  });
    map.setCenter (lonLat, zoom);
}

//Funcion que registrar el movimiento del mouse


$(function(){
	$('#btn_mapa_ver1').click(function(){
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
		$('#btn_mapa_ver2').click(function(){
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
var lo=document.getElementById("lbl_longitud2").innerHTML;
var la=document.getElementById("lbl_latitud2").innerHTML;
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
		$('#btn_mapa_ver3').click(function(){
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
var lo=document.getElementById("lbl_longitud3").innerHTML;
var la=document.getElementById("lbl_latitud3").innerHTML;
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

	$('#btn_alojamiento1').click(function(){
		$('#modal-alojamiento').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {alojamientos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_alojamiento').html(data)
			}
		});
		
	});
	$('#btn_comidas1').click(function(){
		$('#modal-comidas').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {comidas: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_comidas').html(data)
			}
		});
		
	});
	$('#btn_atractivos1').click(function(){
		$('#modal-atractivos').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {atractivos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_atractivos').html(data)
			}
		});
		
	});
	$('#btn_alojamiento2').click(function(){
		$('#modal-alojamiento').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {alojamientos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_alojamiento').html(data)
			}
		});
		
	});
	$('#btn_comidas2').click(function(){
		$('#modal-comidas').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {comidas: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_comidas').html(data)
			}
		});
		
	});
	$('#btn_atractivos2').click(function(){
		$('#modal-atractivos').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {atractivos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_atractivos').html(data)
			}
		});
		
	});
	$('#btn_alojamiento3').click(function(){
		$('#modal-alojamiento').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {alojamientos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_alojamiento').html(data)
			}
		});
		
	});
	$('#btn_comidas3').click(function(){
		$('#modal-comidas').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {comidas: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_comidas').html(data)
			}
		});
		
	});
	$('#btn_atractivos3').click(function(){
		$('#modal-atractivos').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {atractivos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_atractivos').html(data)
			}
		});
		
	});
	// $('#btn_alojamiento4').click(function(){
	// 	$('#modal-alojamiento').modal('show');		
	// 	$.ajax({
	// 		url: 'http://turismo.coored.org/app.php',
	// 		type: 'POST',
	// 		data: {alojamientos: '',id_canton:$('#txt_id_cantones').val()},
	// 		dataType: 'jsonp',
 //       		crossDomain: true,
	// 		success:function(data){
	// 			console.log(data);
	// 			$('#obj_alojamiento').html(data)
	// 		}
	// 	});
		
	// });


$('#btn_alojamiento4').click(function(){
    $.ajax({
        type: 'GET',
        url: 'http://turismo.coored.org/app.php',
        data: {field: 'value',alojamientos: '',id_canton:$('#txt_id_cantones').val()},
        dataType: 'jsonp',
        crossDomain: true,
    }).done(function(response){
        console.log(response);
        var data=response[0];
       
				$('#obj_alojamiento').html(data)
        // $('#obj_body').html(response)
    }).fail(function(error){
        console.log(error.statusText);
    });

});




	$('#btn_comidas4').click(function(){
		$('#modal-comidas').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {comidas: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_comidas').html(data)
			}
		});
		
	});
	$('#btn_atractivos4').click(function(){
		$('#modal-atractivos').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {atractivos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_atractivos').html(data)
			}
		});
		
	});
	$('#btn_alojamiento5').click(function(){
		$('#modal-alojamiento').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {alojamientos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_alojamiento').html(data)
			}
		});
		
	});
	$('#btn_comidas5').click(function(){
		$('#modal-comidas').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {comidas: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_comidas').html(data)
			}
		});
		
	});
	$('#btn_atractivos5').click(function(){
		$('#modal-atractivos').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {atractivos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_atractivos').html(data)
			}
		});
		
	});
	$('#btn_alojamiento6').click(function(){
		$('#modal-alojamiento').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {alojamientos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_alojamiento').html(data)
			}
		});
		
	});
	$('#btn_comidas6').click(function(){
		$('#modal-comidas').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {comidas: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_comidas').html(data)
			}
		});
		
	});
	$('#btn_atractivos6').click(function(){
		$('#modal-atractivos').modal('show');		
		$.ajax({
			url: 'http://turismo.coored.org/app.php',
			type: 'POST',
			data: {atractivos: '',id_canton:$('#txt_id_cantones').val()},
			success:function(data){
				console.log(data);
				$('#obj_atractivos').html(data)
			}
		});
		
	});
	$('#btn_modal_tulcan').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan1').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar1').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar1').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo1').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira1').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca1').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan2').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar2').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar2').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo2').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira2').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca2').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan3').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar3').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar3').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo3').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira3').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca3').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan4').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar4').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar4').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo4').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira4').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca4').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan5').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar5').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar5').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo5').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira5').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca5').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan6').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar6').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar6').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo6').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira6').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca6').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan7').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar7').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar7').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo7').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira7').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca7').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan8').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar8').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar8').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo8').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira8').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca8').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan9').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar9').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar9').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo9').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira9').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca9').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
	$('#btn_modal_tulcan0').click(function(){
		$('#txt_id_cantones').val('20150413153432552c2858816e7');
	});
	$('#btn_modal_montufar0').click(function(){
		$('#txt_id_cantones').val('20150413153422552c284e7e5cb');
	});
	$('#btn_modal_bolivar0').click(function(){
		$('#txt_id_cantones').val('20150413153410552c284220c0d');
	});
	$('#btn_modal_espejo0').click(function(){
		$('#txt_id_cantones').val('20150413153416552c284887ccf');
	});
	$('#btn_modal_mira0').click(function(){
		$('#txt_id_cantones').val('20150413153419552c284b5b67f');
	});
	$('#btn_modal_huaca0').click(function(){
		$('#txt_id_cantones').val('20150413153429552c2855e5014');
	});
});

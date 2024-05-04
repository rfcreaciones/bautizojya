



Swal.fire({
	// title:'Reserva el Día',
	//text: '',
	html:'<p class="textos-alert-inicio">M. Estefanía Soriano Villegas <br> y<br> Rogelio Velázquez Sánchez</p><br><p class="textos-alert-inicio-T3">Tienen el honor de invitar a usted y a su apreciable familia al bautizo de nuestros hijos:</p><br><p class="textos-alert-inicio-T2">Joselin y Axel</p></div>',
	//icon:'success'
	confirmButtonText:'Abrir Invitación',
	confirmButtonColor: "#c99d0fec",
	footer:'Te Esperamos, No Faltes!',
	width:'100%',
	allowOutsideClick: false,
	// background: '#fff url(img/indx.jpg)',
	
	// background:'rgba(0,0,123,0.4)'
	// imageUrl: 'https://unsplash.it/400/200',

	
}).then((result)=>{
	if(result.isConfirmed){
		
		musica=true;
		audio.play();
		$('.volumen').attr("src","img/no-sound.png");
		$('div').removeClass('visible')
	


	}

});



$('#ceremonia').click(function () {
Swal.fire({
	title:'Ubicación de la Ceremonía ',
	//text: '',
	html:'<p>Parroquia de Santa Isabel Chalma<br>Cuándo: 30 de Junio de 2024<br>Dirección:Manzana 004, 56935 Santa Isabel Chalma, Méx.</p><div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.443951957966!2d-98.76400439800341!3d19.156383477114716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3cba0f600bfd%3A0xcfeb02ed0401c784!2sCapilla%20de%20Santa%20Isabel!5e0!3m2!1ses-419!2smx!4v1713588646744!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
	//icon:'success'
	confirmButtonText:'Cerrar',
	//footer:'Parroquia de Dulce Nombre de Jesus ',

});
});

$('#recepcion').click(function () {
	Swal.fire({
		title:'Ubicación de la Recepción ',
		//text: '',
	
		html:'<p>Calle Campo Florido No. 10 Colonia Santa Isabel Chalma Amecameca Edo.Mex.</p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235.55362342303903!2d-98.7641372086852!3d19.157693202598626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1714763394986!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
	});
	


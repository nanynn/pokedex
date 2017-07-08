/*$(document).ready(function($) {
	$.get('http://pokeapi.co/api/v2/pokedex/1/', function(e){
		console.log(e);
		e.pokemon_entries.forEach(function(element){
			console.log(element);
			$('.pokemon').append('<div class="espacio-poke">'+ '<img src="https://img.pokemondb.net/sprites/x-y/normal/'+element.pokemon_species.name+'.png">' + element.pokemon_species.name +'</div>');
		})
	});
});*/


/*var padre = ('nombre del padre')
cosa.attr('class', 'nombre');
cosa.addClass('nombre de la clase');*/

//ajax que llama a los pokemos
//ajax que llama cuando da info de los pokemones
//ajax que llama la imgen de los pokemones
$(document).ready(function($) {
	var contador = 1;
	 // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.buscador').append('<div class="col m6 lupa">'+
    							'<i class="fa fa-search" aria-hidden="true"></i>'+
    						'<input>'+'</>'+
    					'</div>');
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokedex/1/',
		type: 'GET',
		dataType: 'json',
		data: {"limit":'721'},
	})
	.done(function(res) {
		console.log(res);
		res.pokemon_entries.forEach(function(e){
			$('.pokemon').append('<a href="#modal">'+
									'<div class="poke-espacio col m3">'+
										'<div class="poke-img center">'+
											 '<img src="https://img.pokemondb.net/sprites/x-y/normal/'+e.pokemon_species.name+'.png">'+
										'</div>' +
										'<div class="poke-texto">' + e.pokemon_species.name +'</div>'+
									'</div>'+
								'</a>');
			$('.poke-modal').append('<div id="modal" class="modal modal-fixed-footer">' + 
										'<div class="modal-content">'+
											'<h4>'+e.pokemon_species.name+'</h4>'+
											 '<img src="https://img.pokemondb.net/sprites/x-y/normal/'+e.pokemon_species.name+'.png">'+
										'</div>'+
								'</div>'
								);
		})
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
});



	
$(document).ready(function($) {
	$.get('http://pokeapi.co/api/v2/pokedex/1/', function(e){
		console.log(e);
		e.pokemon_entries.forEach(function(element){
			console.log(element);
			$('.pokemon').append('<div class="espacio-poke">'+ element.pokemon_species.name +'</div>');
		})
	});
});


/*var padre = ('nombre del padre')
cosa.attr('class', 'nombre');
cosa.addClass('nombre de la clase');*/

//ajax que llama a los pokemos
//ajax que llama cuando da info de los pokemones
//ajax que llama la imgen de los pokemones
$(document).ready(function($) {
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/?limit=811',
		type: 'GET',
		dataType: 'json',
		data: {"limit":'811'},
	})
	.done(function(result) {
		console.log(result);
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	
});
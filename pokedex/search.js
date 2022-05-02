function process_(data){
    type_num = data.types
    jQuery("#search_pokemon_name").html(data.name)
    jQuery("#search_pokemon_type1").html(data.types[0].type.name);
    if (type_num.length > 1)
        jQuery("#search_pokemon_type2").html(data.types[1].type.name);
}

function ajax_get(){

    y = jQuery("#search_input").val()
    $.ajax(

        {
            "url":`https://pokeapi.co/api/v2/pokemon/${y}`,
            "type": "GET",
            "success": process_
        }
      
    )
  }


function setup(){
    counter = 0
      console.log('s');
    $('#get_search').click(ajax_get);
}

$(document).ready(setup);
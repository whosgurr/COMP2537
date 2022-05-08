

typing = ''
function typeProcess(data){
    for(i =0 ; i < data.types.length; i++)
        if(data.types[i].type.name  == typing)
            console.log(data)
            // $("#search_pokemon_name").html(data.name)
            // $("#search_pokemon_type1").html(data.types[0].type.name);
            // if (type_num.length > 1)
            //     $("#search_pokemon_type2").html(data.types[1].type.name);
}

function process_(data){
    type_num = data.types
    $("#search_sprite").attr("src", data.sprites.front_default);
    $("#search_pokemon_name").html(data.name);
    $("#search_pokemon_type1").html(data.types[0].type.name);
    if (type_num.length > 1)
        $("#search_pokemon_type2").html(data.types[1].type.name);
    else
        $("#search_pokemon_type2").html("");
    // $("#search_desc").html(data.species.url)
        console.log(data)
}


function type_search(type){
    typing = type
    for(i = 1 ; i < 100, i++;) {
        $.ajax(
            {
                "url":`https://pokeapi.co/api/v2/pokemon/${y}`,
                "type": "GET",
                "success": typeProcess
            })
        }
}

function input_search(){

    y = $("#search_input").val()
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
    // type_search($("#type_select").find(":selected").val())
    $('#get_search').click(input_search);
}

$(document).ready(setup);
typing = ''
to_add  = ''
// function typeProcess(data){
//     for(i =0 ; i < data.types.length; i++)
//         if(data.types[i].type.name  == typing)
//             console.log(data)
//             // $("#search_pokemon_name").html(data.name)
            // $("#search_pokemon_type1").html(data.types[0].type.name);
            // if (type_num.length > 1)
            //     $("#search_pokemon_type2").html(data.types[1].type.name);
            // to_add += ` ${data.name}
            //     <div class="image_container">
            //     <a href="/profile/${data.id}">  
            //     <img src="${data.sprites.other["official-artwork"].front_default}">
            //     <type1 "${data.types[0].type.name}"></type1>
            //     <type2 "${data.types[1].type.name}"></type2>
            //     </a>
            //     </div>`
    // }



function process_(data){
    type_num = data.types
    $("#search_sprite").attr("src", data.sprites.front_default);
    $("#search_id").html(data.id);
    $("#search_pokemon_name").html(data.name);
    $("#search_pokemon_type1").html(data.types[0].type.name);
    if (type_num.length > 1)
        $("#search_pokemon_type2").html(data.types[1].type.name);
    else
        $("#search_pokemon_type2").html("");
    $("#search_pokemon_ability1").html(data.abilities[0].ability.name);
    $("#search_pokemon_ability2").html(data.abilities[1].ability.name);
    $.ajax(
        {
            "url":`${data.species.url}`,
            "type": "GET",
            "success": getDesc
        })
    $("#hp").html(data.stats[0].base_stat)
    $("#atk").html(data.stats[1].base_stat)
    $("#def").html(data.stats[2].base_stat)
    $("#spatk").html(data.stats[3].base_stat)
    $("#spdef").html(data.stats[4].base_stat)
    $("#speed").html(data.stats[5].base_stat)

}

function getDesc(data){
    $("#search_desc").html(data.flavor_text_entries[2].flavor_text)
}

// function display(typing){
//     typing = $("#type_select").val()
    // for(i = 1 ; i < 100, i++;) {
//         $.ajax(
//             {
//                 "url":`https://pokeapi.co/api/v2/pokemon/${i}`,
//                 "type": "GET",
//                 "success": type_search
//             })
//         }

// }

function dropdown(){
    for(i = 1 ; i < 100, i++;)
        type_select = $("#type_select option:selected").val();
            $.ajax(
            {  
                    
                "url":`https://pokeapi.co/api/v2/pokemon/${i}`,
                "type": "GET",
                "success": type_search
            })

}

function type_search(data, type_select){
    type_select = $("#type_select option:selected").val();
    if (data.types[i].type.name == type_select)
        $("search_pokemon_name").html(data.name)
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
    $('#get_search').click(input_search);
    $("#type_select").change(()=>{
        dropdown
        // type_select = $("#type_select option:selected").val();
        // alert(type_select)
    });
}

$(document).ready(setup);
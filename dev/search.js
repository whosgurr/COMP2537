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

function getTypeSearch(data){
    type_num = data.types
    // console.log(to_add)
    to_add += `
    <div class="image_container">
    <a href="/profile/${data.id}">  
        <img src="${data.sprites.other["official-artwork"].front_default}">
        <h4>"${data.name}"</h4>
        <type1>${data.types[0].type.name}</type1>`

    if (type_num.length > 1)
    to_add += `
        <type2>${data.types[1].type.name}</type2>
        <br>
        </a>
        </div>`
    

    jQuery("main").html(to_add)

}


function dropdown(){

    type_select = $("#type_select option:selected").val();

        $.ajax(
        {  
                
            "url":`https://pokeapi.co/api/v2/type/${type_select}`,
            "type": "GET",
            "success": type_search
        })

}

function type_search(data){
    type_select = $("#type_select option:selected").val();
    console.log(data)
    // console.log(type_select)
    
    data.pokemon.forEach((element,i) => {
        // console.log(element)
        if (i % 3 == 0) {
            to_add += `<div class="images_group">`
        }
        
        $.ajax(
            {
                "url":`${element.pokemon.url}`,
                "type": "GET",
                "success": getTypeSearch
            })

        if (i % 3 == 1) { 
            to_add += `</div>`
        }
        // jQuery("main").html(to_add)

    })
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
        // type_select = $("#type_select option:selected").val();
        // alert(type_select)
        dropdown()
    });
}

$(document).ready(setup);
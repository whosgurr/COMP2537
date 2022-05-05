counter = 0

function process_(data){
    console.log(data)
    type_num = data.types
    $(`#pokemon_name${counter}`).html(data.name)
    $(`#pokemon_type1_${counter}`).html(data.types[0].type.name);
    if (type_num.length > 1)
        $(`#pokemon_type2_${counter}`).html(data.types[1].type.name);

    // jQuery('#pokemon_description').html(data.);
    x = data.id;
    console.log(x)
    $(`#sprite_${counter}`).attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${x}.png`);
    counter++
    console.log(counter)
}

function main_load(){
  add = ''
  y = Math.ceil(Math.random() * 150)
  $.ajax(

    {
        "url":`https://pokeapi.co/api/v2/pokemon/${y}`,
        "type": "GET",
        "success": process_
    }
  
    )
    for (i = 1; i <= 9; i++) {
      if(i % 3 == 1)
        add += `<div class="images_group>`
        add += `<div class="image_container> <img src="https://pokeapi.co/api/v2/pokemon/${y}"<div>`
      if (i % 3 == 0){
        add+=`<div>`
      }
      $("main").html(add)
    }

  }


function ajax_get(){

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
    main_load()
    // main_load()
    // main_load()
    // main_load()
    // main_load()
    // main_load()
    // main_load()
    // main_load()
    // main_load()
    // main_load()
  }
  $(document).ready(setup);

counter = 0

// to_add = ''

// function processPokeResp(data){
//     // console.log(data)
//      // 3- process the reponse and extract the img
//      to_add += ` ${data.name}
//       <div class="image_container">
//       <a href="/profile/${data.id}">
//       <img src="${data.sprites.other["official-artwork"].front_default}">
//       <type1>"${data.types[0].type.name}"</type1>
//       <type2>"${data.types[1].type.name}"</type2>
//       </a>
//       </div>`
// }

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
  y = Math.ceil(Math.random() * 600)
  $.ajax(

    {
        "url":`https://pokeapi.co/api/v2/pokemon/${y}`,
        "type": "GET",
        "success": process_
    })
    

  }

// async function loadNineImages() {
//   for (i = 1; i <= 9; i++) {
//       if (i % 3 == 1) {
//           to_add += `<div class="images_group">`
//       }
      
//       // 1- generate randome numebers 
//       x =  Math.floor(Math.random() * 100) + 1

//       // 2- init a AJAX request to pokeapi.co
//       await $.ajax({
//           type: "GET",
//           url: `https://pokeapi.co/api/v2/pokemon/${x}/`,
//           success: processPokeResp
//       })

      

//       if (i % 3 == 0) { // only when i= 3, 6, 9
//           to_add += `</div>`
//       }
//   }
//   jQuery("main").html(to_add)
// }

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
    // loadNineImages();
    for (i = 1; i <= 10; i++)
      main_load()
  }
  
  $(document).ready(setup);

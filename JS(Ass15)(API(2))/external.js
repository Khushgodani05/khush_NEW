let poke_info;
let moreload=document.querySelector(".more");
let limit=200;
let offset=0;

let poke;
let pok;
let typelen;
let type;
let pokemonimg;
let exit =document.querySelector("#exit");
let search=document.querySelector("#search");
let srch=document.querySelector("#srch");
let pokename=document.querySelectorAll(".pokename");
let pokeurl=document.querySelectorAll(".pokeurl");
let pokeid=document.querySelectorAll(".pokeid");
let poketype=document.querySelectorAll(".type");
let pokeimg=document.querySelectorAll(".pokeimg");
let pokemon;
let searchsection=document.querySelector(".hide")
let section=document.querySelector(".block");
let pability=document.querySelector(".pability");
let purl=document.querySelector(".purl");
let pid=document.querySelector(".pid");
let ptype=document.querySelector(".ptype");
let pimg=document.querySelector(".pimg");
let pname=document.querySelector(".pname");

moreload.addEventListener("click",function(){
limit+=200;
offset+=200;
srch.value="";
document.querySelector(".message").classList.add("hide");
poke_info = fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
poke_info.then(function(result){
    // console.log(result);
    poke=result.json();
    return poke;
}).then((poke)=>{
   console.log(poke);
//    console.log(poke.results)
   poke.results.forEach(function (values,index){
        console.log(pokename)
        pokename[index].innerHTML=`${poke['results'][index].name}`;
      pokemon=fetch(`${poke['results'][index]['url']} `);
    pokemon.then((result)=>{
        // console.log(result);
        pok=result.json();
        return pok;
     }).then((pok)=>{
        //  console.log(pok);
        //  console.log(pok.types.length)
        // console.log(pok.types[0].type.name)
         typelen=pok.types.length;
        //  console.log(typelen)
         poketype.forEach(function(){
            if(typelen===1){
                poketype[index].innerHTML=pok.types[0].type.name;
             }
             else if(typelen===2)
             {
                poketype[index].innerHTML=`${pok.types[0].type.name}  ${pok.types[1].type.name}`;
             }
             else if(typelen===3){
                poketype.innerHTML=poketype[index].innerHTML=`${pok.types[0].type.name}  ${pok.types[1].type.name}  ${pok.types[2].type.name}`;
            }
            
         })
         
         search.addEventListener("click",function(){
            srch.value=srch.value.toLowerCase();
            if(srch.value===pok.name){
                section.classList.add("hide");
                searchsection.classList.remove("hide");
                moreload.classList.add("hide");
                console.log(pok.name)
                console.log(pok.abilities)
                console.log(pok.abilities[0].ability.name)
                console.log(pok.abilities.length)
               let alength=pok.abilities.length;
                    if(alength===1){
                        pability.innerHTML=`Abilities : <br>${pok.abilities[0].ability.name}`; 
                    }
                    else if(alength===2){
                        pability.innerHTML=`Abilities : <br>${pok.abilities[0].ability.name}  <br>  ${pok.abilities[1].ability.name} `;
                    }
                    else if(alength===3){
                        pability.innerHTML=`Abilities : <br>${pok.abilities[0].ability.name} <br>   ${pok.abilities[1].ability.name}  <br>   ${pok.abilities[2].ability.name}`;
                    }
                //  console.log(pok.ability.name)
                //  console.log(pok.ability)
                typelen=pok.types.length;
            if(typelen===1){
                ptype.innerHTML=pok.types[0].type.name;
             }
             else if(typelen===2)
             {
                ptype.innerHTML=`${pok.types[0].type.name}  ${pok.types[1].type.name}`;
             }
          
                pid.innerHTML=`Id : ${pok.id}`;
                pimg.innerHTML=`<img src=${pok.sprites['front_default']}></img>`;
            
                pname.innerHTML=`${pok.name}`;
                purl.innerHTML=`weight : ${pok.weight}<br>height : ${pok.height}<br>Base exp : ${pok.base_experience}`;
                
            }
            else{
                document.querySelector(".message").classList.remove("hide");
            }


         })
       
        //  console.log(typelen)
            // if(typelen==1)
            // {
            //     poketype[index].innerHTML=`Types : ${pok.types[index]['type'].name} `;
            // }
            // else {
            //     poketype[index].innerHTML=`${pok.types[index]['type'].name} ${pok.types[index+1]['type'].name}`
            // }
            pokeimg[index].innerHTML=`<img src=${pok.sprites['front_default']}></img>`

       pokeid[index].innerHTML=`Id : ${pok.id}`; 
            pokeurl[index].innerHTML=`weight : ${pok.weight}<br>height : ${pok.height}<br>Base exp : ${pok.base_experience}
             `;
             })


        
  
    

}) 
 
})
console.log("clicked");
})

//main
exit.addEventListener("click",()=>{
    section.classList.remove("hide");
    searchsection.classList.add("hide");
    moreload.classList.remove("hide"); 
})
poke_info = fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
poke_info.then(function(result){
    // console.log(result);
    poke=result.json();
    return poke;
}).then((poke)=>{
   console.log(poke);
//    console.log(poke.results)
   poke.results.forEach(function (values,index){
        console.log(pokename)
        pokename[index].innerHTML=`${poke['results'][index].name}`;
      pokemon=fetch(`${poke['results'][index]['url']} `);
    pokemon.then((result)=>{
        // console.log(result);
        pok=result.json();
        return pok;
     }).then((pok)=>{
        //  console.log(pok);
        //  console.log(pok.types.length)
        // console.log(pok.types[0].type.name)
         typelen=pok.types.length;
        //  console.log(typelen)
         poketype.forEach(function(){
            if(typelen===1){
                poketype[index].innerHTML=pok.types[0].type.name;
             }
             else if(typelen===2)
             {
                poketype[index].innerHTML=`${pok.types[0].type.name}  ${pok.types[1].type.name}`;
             }
             else if(typelen===3){
                poketype.innerHTML=poketype[index].innerHTML=`${pok.types[0].type.name}  ${pok.types[1].type.name}  ${pok.types[2].type.name}`;
            }
            
         })
         
         search.addEventListener("click",function(){
            srch.value=srch.value.toLowerCase();
            if(srch.value===pok.name){
                section.classList.add("hide");
                searchsection.classList.remove("hide");
                moreload.classList.add("hide");
                console.log(pok.name)
                console.log(pok.abilities)
                console.log(pok.abilities[0].ability.name)
                console.log(pok.abilities.length)
               let alength=pok.abilities.length;
                    if(alength===1){
                        pability.innerHTML=`Abilities : <br>${pok.abilities[0].ability.name}`; 
                    }
                    else if(alength===2){
                        pability.innerHTML=`Abilities : <br>${pok.abilities[0].ability.name}  <br>  ${pok.abilities[1].ability.name} `;
                    }
                    else if(alength===3){
                        pability.innerHTML=`Abilities : <br>${pok.abilities[0].ability.name} <br>   ${pok.abilities[1].ability.name}  <br>   ${pok.abilities[2].ability.name}`;
                    }
                //  console.log(pok.ability.name)
                //  console.log(pok.ability)
                typelen=pok.types.length;
            if(typelen===1){
                ptype.innerHTML=pok.types[0].type.name;
             }
             else if(typelen===2)
             {
                ptype.innerHTML=`${pok.types[0].type.name}  ${pok.types[1].type.name}`;
             }
          
                pid.innerHTML=`Id : ${pok.id}`;
                pimg.innerHTML=`<img src=${pok.sprites['front_default']}></img>`;
            
                pname.innerHTML=`${pok.name}`;
                purl.innerHTML=`weight : ${pok.weight}<br>height : ${pok.height}<br>Base exp : ${pok.base_experience}`;
                
            }
            else{
                document.querySelector(".message").classList.remove("hide");
            }

         })
       
        //  console.log(typelen)
            // if(typelen==1)
            // {
            //     poketype[index].innerHTML=`Types : ${pok.types[index]['type'].name} `;
            // }
            // else {
            //     poketype[index].innerHTML=`${pok.types[index]['type'].name} ${pok.types[index+1]['type'].name}`
            // }
            pokeimg[index].innerHTML=`<img src=${pok.sprites['front_default']}></img>`

       pokeid[index].innerHTML=`Id : ${pok.id}`; 
            pokeurl[index].innerHTML=`weight : ${pok.weight}<br>height : ${pok.height}<br>Base exp : ${pok.base_experience}
             `;
             })


        
  
    

}) 
 
})



// pokeurl.innerHTML=poke.results[0]['url'];



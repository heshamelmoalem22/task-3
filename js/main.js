async function getApi() {
    var ahmed = await fetch("https://dummyjson.com/products");
    var door = await ahmed.json();
    var mohamed = door.products;
    var text ="";
    for(var i=0; i<mohamed.length; i++){
        
        var cartoona =`

            <div class="col-md-4  text-center my-4">
            <img class="img-fluid" style="height:200px" src="${mohamed[i].images[0]}">
            <h3 >${mohamed[i].id}</h3>
            <h5>${mohamed[i].title}</h5>
            <h6>${mohamed[i].price}$</h6>
        </div>
        `
        text= text+ cartoona;
        
    }
    document.querySelector(".test").innerHTML = text;
    
    
}
getApi();
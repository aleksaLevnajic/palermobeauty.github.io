console.log("proba");

$(document).ready(function(){
    // ajaxCallBack("data/hrana.json", "get", function(data){
    //     ispis(data);
    // });

    
    $.ajax({
        url: "data/hrana.json",
        method: "get",
        dataType: "json",
        success: function(result){
            //console.log(result);
            ispisHrana(result);
        },
        error: function(xhr)
        {
            console.log(xhr);
        }
    });
    
    
    function ispisHrana(data){
        //data = sortCena(data);
        let html = "";
        for(let elemnet of data)
        {
            html += `<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                 <figure>
                                     <img src="${elemnet.slika.src}" alt="${elemnet.slika.alt}" class="img-fluid tm-gallery-img" />
                                 <figcaption>
                                     <h4 class="tm-gallery-title">${elemnet.naziv}</h4>
                                     <p class="tm-gallery-description">${elemnet.opis}</p>
                                     <p class="tm-gallery-price">$${elemnet.novaCena} </p>
                                     <input type="button" id="btnOrder" name="orderBtn" class="tm-btn tm-btn-success tm-btn-right btnOrder" value="Order now" />
                                 </figcaption>
                                 </figure>
                             </article>`
        }
        //console.log(data);

        

        $("#tm-gallery-page-pizza").html(html);
    }

   

    // $.ajax({
    //     url: "data/kategorije.json",
    //     method: "get",
    //     dataType: "json",
    //     success: function(result){
    //         console.log(result);
    //         ispisKategorija(result);
    //     },
    //     error: function(xhr)
    //     {
    //         console.log(xhr);
    //     }
    // });

    // function ispisKategorija(data){
    //     let html ="";
    //     for(let katObj of data)
    //     {
    //         html +=`
    //             <li id="${katObj.id}" class="tm-paging-item"><a href="#"  class="tm-paging-link active">${katObj.nazivKat}</a></li>
    //         `;
    //     }
    //     $("#kat").html(html);
    // }

    document.querySelector("#pizza").addEventListener("click", filterZaPizza);

    function filterZaPizza(){
        $( "a" ).click(function( event ) {
            event.preventDefault();
        });
        $.ajax({
            url: "data/hrana.json",
            method: "get",
            dataType: "json",
            success: function(pizza){
            let filterPizza = [];
            for(let pizzaObj of pizza){
                //console.log(filterPizza);
                if(pizzaObj.kategorija == "Pizza")
                {
                    //console.log(filterPizza);
                    filterPizza.push(pizzaObj);
                }
            }
            ispisHrana(filterPizza);
            // filterPizza = pizza.filter(el => {
            //     if(el.kategorija == "Pizza")
            //     {
            //         return true;
            //     }
            //     console.log(filterPizza);
            //     ispisHrana(filterPizza);
            // });
            },
            error: function(xhr)
            {
                console.log(xhr);
            }
        });
    }

    document.querySelector("#salad").addEventListener("click", filterZaSalad);

    function filterZaSalad(){
        $( "a" ).click(function( event ) {
            event.preventDefault();
        });
        $.ajax({
            url: "data/hrana.json",
            method: "get",
            dataType: "json",
            success: function(salad){
            let filterSalaz = [];
            for(let saladObj of salad){
                //console.log(filterPizza);
                if(saladObj.kategorija == "Salad")
                {
                    //console.log(filterPizza);
                    filterSalaz.push(saladObj);
                }
            }
            ispisHrana(filterSalaz);
            // filterPizza = pizza.filter(el => {
            //     if(el.kategorija == "Pizza")
            //     {
            //         return true;
            //     }
            //     console.log(filterPizza);
            //     ispisHrana(filterPizza);
            // });
            },
            error: function(xhr)
            {
                console.log(xhr);
            }
        });
    }

    document.querySelector("#noodle").addEventListener("click", filterZaNoodle);

    function filterZaNoodle(){
        $( "a" ).click(function( event ) {
            event.preventDefault();
        });
        $.ajax({
            url: "data/hrana.json",
            method: "get",
            dataType: "json",
            success: function(noodle){
            let filterNoodle = [];
            for(let noodleObj of noodle){
                //console.log(filterPizza);
                if(noodleObj.kategorija == "Noodle")
                {
                    //console.log(filterPizza);
                    filterNoodle.push(noodleObj);
                }
            }
            ispisHrana(filterNoodle);
            // filterPizza = pizza.filter(el => {
            //     if(el.kategorija == "Pizza")
            //     {
            //         return true;
            //     }
            //     console.log(filterPizza);
            //     ispisHrana(filterPizza);
            // });
            },
            error: function(xhr)
            {
                console.log(xhr);
            }
        });
    }

    document.querySelector("#ddlSort").addEventListener("change", promenaSort);

    function promenaSort(){
        $.ajax({
            url: "data/hrana.json",
            method: "get",
            dataType: "json",
            success: function(hrana){
                let tip = $("#ddlSort").val();
            if(tip == "nazivAsc"){
                hrana.sort(function(a, b){
                    if(a.naziv < b.naziv){
                        return -1;
                    }
                    else if(a.naziv > b.naziv){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                })
            }
    
            if(tip == "nazivDesc"){
                hrana.sort(function(a, b){
                    if(a.naziv > b.naziv){
                        return -1
                    }
                    else if(a.naziv < b.naziv){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                })
            }
    
            if(tip == "cenaAsc"){
                hrana.sort(function(a, b){
                    return a.novaCena - b.novaCena;
                })
            }
    
            if(tip == "cenaDesc"){
                hrana.sort(function(a, b){
                    return b.novaCena - a.novaCena;
                })
            }
            ispisHrana(hrana)
            },
            error: function(xhr)
            {
                console.log(xhr);
            }
        });
    }
    
    
    
    
});

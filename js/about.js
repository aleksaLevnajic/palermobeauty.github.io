$(document).ready(function(){
    $.ajax({
        url: "data/about.json",
        method: "get",
        dataType: "json",
        success: function(result){
            console.log(result);
            ispisAbout(result);
        },
        error: function(xhr)
        {
            console.log(xhr);
        }
    });    
    
    function ispisAbout(data){
        console.log("proba");
        let html = "";
        for(let aboutObj of data)
        {
            html += `<article class="col-lg-6">
            <figure class="tm-person">
                <img src="${aboutObj.slika.src}" alt="${aboutObj.slika.alt}" class="img-fluid tm-person-img" />
                <figcaption class="tm-person-description">
                    <h4 class="tm-person-name">${aboutObj.imeRadnika}</h4>
                    <p class="tm-person-title">${aboutObj.pozicija}</p>
                    <p class="tm-person-about">${aboutObj.kratakOpis}</p>
                    <div>
                        <a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
                        <a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
                        <a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
                    </div>
                </figcaption>
            </figure>
        </article>`
        }
        console.log(data);        
    
        $("#aboutIspis").html(html);
    }
});


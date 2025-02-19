list = document.getElementById ('list');
table = document.getElementById ('table');
overlay = document.getElementById ('overlay');

list.addEventListener ("click",() => {
    if(table.style.display =="none") {
        table.style.display = "block";
        overlay.style.display = "block";
    }
    else {
        table.style.display ="none"
        overlay.style.display = "none";
    }  
})

overlay.addEventListener ("click",() => {
    table.style.display = "none";
    overlay.style.display = "none";
})
user = document.getElementById ('user');
form = document.getElementById ('form');
overlay = document.getElementById ('overlay');

user.addEventListener ("click",() => {
    if(form.style.display =="none") {
        form.style.display = "block";
        overlay.style.display = "block";
    }
    else {
        form.style.display ="none"
        overlay.style.display = "none";
    }  
})

overlay.addEventListener ("click",() => {
    form.style.display = "none";
    overlay.style.display = "none";
})


const productlist = document.getElementById("product_list");
window.addEventListener("load", function() {
    fetch('js/index.json').then(response => {
        if (!response.ok) {
            throw new Error('Error in network response');
        }
        return response.json();
    }).then(data => {
        const listitems = data.products.map(product => {
            const listitem = document.createElement("li");
            listitem.innerHTML = `<div class="drugs">
                <ul id="productlist">
                    <li>
                        <img src="images/image1.jpg" alt="">
                    </li>
                    <li>
                        <img src="images/image2.png" alt="">
                    </li>
                    <li>
                        <img src="images/image3.jpg" alt="">
                    </li>
                </ul> 
            </div>`;
            return listitem;
        });
        productlist.append(...listitems);
    })
    .catch(error => {
        console.log("Error:", error);
    });
});

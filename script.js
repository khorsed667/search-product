const search = () =>{
    const searchInput = document.getElementById('type-search').value.toUpperCase();
    const productList = document.getElementById('products-area');
    const product = document.querySelectorAll('.product');
    const productName = productList.getElementsByTagName('h2');

    for( var i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchInput) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}
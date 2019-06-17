function OnClick(obj){
    switch(obj){
        case 'logo':
            window.location = "https://rainys.ml/";
            break;

        case "search":
        
            break;

        case 'shoppingBag':
            window.location = "https://rainys.ml/login";
            break;

        default:
            window.location = "https://rainys.ml/detail/" + obj;
            break;
    }
}
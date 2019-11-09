var wordprintter = document.querySelector("#word");
var wordObject;


var getWord = function(){
    fetch(`http://localhost:8080/getWord`).then( function ( response ){
        response.json().then( function ( data ){
            console.log("The data is: ", data);
            wordObject = data;
            // getWordFromOwlBot( data);
            // function that loads image from url
            wordprintter.innerHTML = data['word'];
        });
    });
};

var getWordImage = function(){
    return wordObject['image_url'];
};






// var getWordFromOwlBot = function(owlBotWord) {
//     fetch(`https://owlbot.info/api/v3/dictionary/${owlBotWord}`, {
//         method: 'GET',
//         headers: {
//             "Authorization": "Token 9eadc1086b6feb94c2ceded157e3cf25afd87bb1"
//         }
//     }).then( function ( response ){
//         if ( response['status'] != 200 ){
//             getWord();
//         }
//         console.log("response status: ", response['status']);
//         response.json().then(function(data){
//             console.log("the data after owl bot is: ", data );
//             // if( data['definitions'][0]['image-url'] == null )

//         });
//     });
// };




getWord();
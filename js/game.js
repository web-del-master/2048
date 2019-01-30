let createAndAppend = function({className, parentElement, value}, tag='div'){
    let element = document.createElement(tag);
    element.className = className;
    if(value){
        element.innerHTML  = value
    }   
    parentElement.appendChild(element);

    return element;

};
console.log()
 
class game{
    constructor(parentElement, size){
        let gameFieldElement = createAndAppend({
            className: 'game',
            parentElement
        });                

        let headerElement = createAndAppend({
            className: 'header',
            parentElement:gameFieldElement            
        });        

        this.rating=0; 
        headerElement.innerHTML = 'rating' + this.rating ;     

        let fieldelemt = createAndAppend({
            className: 'field',
            parentElement:gameFieldElement,            
        });                

        for(let i =0; i<size; i++){
            for(let k=0; k<size;k++){
                let cellElement = createAndAppend({
                    className: 'cell',
                    parentElement:fieldelemt           
                });     
                if(Math.random()>0.8){
                    cellElement.innerHTML = Math.random() > 0.5 ? 4 : 2;
                }
                
            }

        }


    }
}
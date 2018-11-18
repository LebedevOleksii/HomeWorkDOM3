
class Button {
    constructor(options){
        var {
            width = 30,
            height = 50,
            parentElement = document.body,
            innerHTML = 'button',
            opacity =  0.5,
            onClick = ()=>{}
        } = options;
        this.button = document.createElement('button');
        this.button.style.width = `${width}px`;
        this.button.style.height = `${height}px`;
        this.button.innerHTML = innerHTML;
        this.button.style.opacity = opacity;
        this.button.style.border = '1px solid #333';
        this.button.style.padding = 0;
        this.button.style.font = 'inherit';
        this.button.style.color = 'inherit';
        this.button.style.backgroundColor = 'transparent';
        this.button.classList.add('myButton');
        
        this.button.addEventListener('mouseup', (event)=>{
            if( event.clientX > 608 && event.clientX < 717 && event.clientY > 120 && event.clientY < 139 ) {
                this.transitionButton('all 2s ease-in-out .5s');
                this.transformButton('rotateX(0deg)');
                this.transformButton('rotateX(-45deg)');
                this.transformButton('rotateX(-180deg)');
                this.transformButton('rotateX(-360deg)');
            }
        });

        
        this.appenToElement(parentElement);
    }
    appenToElement(element){
        if(!(element instanceof HTMLElement)){ 
            throw new ERROR ("Перший елемент. повинен бути HTML елементом");
        }
        element.append(this.button);
    }
    changeInnerHTML(innerHtml){
        this.button.innerHTML(innerHtml);
    }
    animateButton(scale){
        this.button.style.transform = `scale(${scale})`;
    }
    transitionButton(transition){
        this.button.style.transition = transition;
    }
    opacityButton(value){
        this.button.style.opacity = value;
    }
    transformButton(value){
        this.button.style.transform = value;
    }
    
}

const testButton = new Button ({
    width: 110,
    height: 40,
    innerHTML: "кнопка",
    parentElement: document.querySelector('.wrapper')
});
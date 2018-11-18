
class Button {
    constructor(options){
        var {
            width = 30,
            height = 50,
            parentElement = document.body,
            innerText = 'button',
            opacity =  0.5,
            onClick = ()=>{}
        } = options;
        this.button = document.createElement('button');
        this.button.style.width = `${width}px`;
        this.button.style.height = `${height}px`;
        this.button.innerText = innerText;
        this.button.style.opacity = opacity;
        this.button.style.border = '1px solid #D3D3D3';
        this.button.style.padding = 0;
        this.button.style.font = 'inherit';
        this.button.style.color = 'inherit';
        this.button.style.backgroundColor = 'transparent';
        this.button.classList.add('myButton');
        
        this.button.addEventListener('mouseup', (event)=>{
            if( 608 < event.clientX  < 717 && 120 < event.clientY < 139 ) {
                this.button.style.background = '#6495ED';
                this.transitionButton('1.5s ease-in-out ');
                this.transformButton('rotateX(-10deg)');
                this.transformButton('rotateX(-360deg)');
                this.button.style.font = '1.3em Ariel';
                this.button.style.boxShadow = '4px 4px 12px -5px #000000, 4px 4px 14px -3px #ffffff inset';
                setTimeout(()=>{
                    this.opacityButton(1);
                    this.button.innerText = 'натиснуто';
                }, 500);
            }
        });
        this.appenToElement(parentElement);
    }
    appenToElement(element){
        element.append(this.button);
    }
    changeInnerHTML(innerHtml){
        this.button.innerHTML(innerHtml);
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
    innerText: "натиснути",
    parentElement: document.querySelector('.wrapper')
});
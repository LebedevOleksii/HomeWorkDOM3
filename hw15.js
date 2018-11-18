
class Button {
    constructor(options){
        var {
            width = 30,
            height = 50,
            parentElement = document.body,
            innerText = 'button',
            opacity =  .3,
            onClick = () => {}
        } = options;
        this.button = document.createElement('button');
        this.button.style.width = `${width}px`;
        this.button.style.height = `${height}px`;
        this.button.innerText = innerText;
        this.button.style.opacity = opacity;
        this.button.style.font = 'inherit';
        this.button.style.backgroundColor = 'transparent';
        this.button.classList.add('myButton');
        this.button.onClicl = 
        
        this.button.addEventListener('mouseup', (event)=>{
            onClick(event);
            this.button.style.background = '#6495ED';
            this.transitionButton('1s ease-in-out ');
            this.transformButton('rotateX(10deg)');
            this.transformButton('rotateX(360deg)');
            this.button.style.fontSize = '1.3em';
            this.button.style.boxShadow = '4px 4px 12px -4px #000000, 4px 4px 14px -3px #ffffff inset';
            setTimeout(()=>{
                this.opacityButton(1);
                this.changeInnerText('натиснуто');
                setTimeout(()=>{
                    this.transformButton('rotateX(0deg)');
                    this.button.style.background = '0';
                    this.transitionButton('.5s ease-in ');
                    this.button.style.fontSize = '1em';
                    this.button.style.boxShadow = 'none';
                    this.opacityButton(.3);
                    this.changeInnerText('натиснути');
                },3000)
            }, 500);
        });
        this.appenToElement(parentElement);
    }
    appenToElement(element){
        element.append(this.button);
    }
    changeInnerText(innerText){
        this.button.innerText = innerText;
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
    parentElement: document.querySelector('.wrapper'),
    onClick: function(event){
        setTimeout(()=>{
            document.querySelector('#message').classList.toggle('open');
        },350)
    }
});
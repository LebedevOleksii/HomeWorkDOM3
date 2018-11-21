
class Button {
    constructor(options){
        var {
            width = 30,
            height = 50,
            parentElement = document.body,
            onClick = () => {},
            axis = 'Z',
            innerText = 'press'
        } = options;
        this.button = document.createElement('button');
        this.button.style.width = `${width}px`;
        this.button.style.height = `${height}px`;
        this.button.innerText = innerText;
        this.button.style.opacity = '.2';
        this.button.axis = axis;
        this.button.style.font = 'inherit';
        this.button.style.backgroundColor = 'transparent';
        this.button.addEventListener('click', (event)=>{
            onClick(event);
            this.RotateButton(`rotate${axis}(360deg)`, `rotate${axis}(0deg)`)
        });
        
        this.appenToElement(parentElement);
    }
    appenToElement(element){
        element.append(this.button);
    }
    transitionButton(transition){
        this.button.style.transition = transition;
    }
    RotateButton(rotate1, rotate2){
        this.button.style.background = '#6495ED';
        this.transitionButton('.6s ease-in-out ');
        this.button.style.transform = rotate1;
        this.button.style.fontSize = '1.3em';
        this.button.style.boxShadow = '4px 4px 12px -4px #000000, 4px 4px 14px -3px #ffffff inset';
        setTimeout(()=>{
            this.button.style.opacity = '1';
            this.button.innerText = 'pressed';
        }, 300);
        setTimeout(()=>{
            this.button.style.transform = rotate2;
            this.button.style.background = 'none';
            this.transitionButton('.5s ease-in ');
            this.button.style.fontSize = '1em';
            this.button.style.boxShadow = 'none';
            this.button.style.opacity = '.2';
            this.button.innerText = 'button';
        },3000)
    }
}
const firstButton = new Button ({
    innerText:'press',
    axis: 'X',
    width: 110,
    height: 40,
    parentElement: document.querySelector('#wrapper'),
    onClick: function(event){
            document.querySelector('#message').classList.toggle('open');
    }
});

const secondButton = new Button({
    parentElement: document.querySelector('#wrapper'),
    axis: 'Z',
    innerText:'press',
    width: 110,
    height: 40,
    onClick: function(event){
        document.querySelector('#message').classList.toggle('open');
    }
});

const thirdButton = new Button({
    parentElement: document.querySelector('#wrapper'),
    axis: 'Y',
    innerText:'press',
    width: 110,
    height: 40,
    onClick: function(event){
        document.querySelector('#message').classList.toggle('open');
    }
});

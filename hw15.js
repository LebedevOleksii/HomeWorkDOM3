
class Button {
    constructor(options){
        var {
            width = 130,
            height = 40,
            parentElement = document.body,
            onClick = () => {},
            axis = 'Z',
            innerText = 'press',
            activeText = 'pressed'
        } = options;
        this.button = document.createElement('button');
        this.button.style.width = `${width}px`;
        this.button.style.height = `${height}px`;
        this.button.innerText = innerText;
        this.button.activeText = activeText;
        this.button.axis = axis;
        this.button.style.opacity = '.2';
        this.button.style.font = 'inherit';
        this.button.style.backgroundColor = 'transparent';
        this.button.addEventListener('click', (event)=>{
            onClick(event);
            this.RotateButton(`rotate${axis}(360deg)`, `rotate${axis}(0deg)`,innerText,activeText)
        });
        
        this.appenToElement(parentElement);
    }
    appenToElement(element){
        element.append(this.button);
    }
    transitionButton(transition){
        this.button.style.transition = transition;
    }
    RotateButton(rotate1, rotate2, text, activeText){
        this.button.style.background = '#6495ED';
        this.transitionButton('.6s ease-in-out ');
        this.button.style.transform = rotate1;
        this.button.style.fontSize = '1.3em';
        this.button.style.boxShadow = '4px 4px 12px -4px #000000, 4px 4px 14px -3px #ffffff inset';
        setTimeout(()=>{
            this.button.style.opacity = '1';
            this.button.innerText = activeText;
        }, 300);
        setTimeout(()=>{
            this.button.style.transform = rotate2;
            this.button.style.background = 'none';
            this.transitionButton('.5s ease-in ');
            this.button.style.fontSize = '1em';
            this.button.style.boxShadow = 'none';
            this.button.style.opacity = '.2';
            this.button.innerText = text;
        },3000)
    }
}
const firstButton = new Button ({
    parentElement: document.querySelector('#wrapper'),
    width: 110,
    height: 40,
    innerText:'button(x)',
    activeText: "pressed(X)",
    axis: 'X',
    onClick: function(event){
            document.querySelector('#message').classList.toggle('open');
    }
});

const secondButton = new Button({
    parentElement: document.querySelector('#wrapper'),
    width: 110,
    height: 40,
    innerText:'button(z)',
    activeText: "pressed(Z)",
    axis: 'Z',
    onClick: function(event){
        document.querySelector('#message').classList.toggle('open');
    }
});

const thirdButton = new Button({
    parentElement: document.querySelector('#wrapper'),
    width: 110,
    height: 40,
    innerText:'button(y)',
    activeText: "pressed(Y)",
    axis: 'Y',
    onClick: function(event){
        document.querySelector('#message').classList.toggle('open');
    }
});

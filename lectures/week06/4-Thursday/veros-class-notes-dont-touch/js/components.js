

class Button {

    constructor(node, color, text){
        
        this.state = {
            node: node , 
            color: color, 
            text: text, 
            count: 0
        }
    }


    createButton(){

        let button = document.createElement('button')

        button.textContent = this.state.text 

        button.style.backgroundColor = this.state.color;

        button.addEventListener('click', ()=>{

            this.state.count +=1 

            console.log(this.count);

            button.textContent = `${this.state.count}  ${this.state.text}` 
        })

        this.state.node.append(button)
    }


    render(){

        this.createButton()
    }


}
'use strict'

import { getAluno, createAluno} from './alunos.js'

const url = 'https://testeleonid.herokuapp.com/alunos'

class card extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createCard())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
        .card {
            width: 250px;
            height: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            background-color: ${this.bgcolor()};
        }
        
        .card-text {
            width: 50%;
            padding: 4px;
            text-align: center;
            color: #fff;
            text-transform: uppercase;
            border-radius: 12px;
            box-shadow: 0 0 2px #000;
        }
        
        .card-image {
            width: 50%;
            height: 50%;
            border-radius: 50%;
            box-shadow: inset 0 0 8px #000;
            background-image: url(${this.bgimage()});
            background-size: cover;
        }
        
      
        `
        return style
    }

    createCard({nome, turma, status, id, foto}) {
        //<div class="card">
        //<div class="card-text">Mariana</div>   
        //<div class="card-image"></div>
       // <div class="card-text">DS2T</div>
        //</div>
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card-text nome">${nome}</div>   
            <div class="card-image"></div>
            <div class="card-text turma">${turma}</div>
            <div class="card-text status">${status}</div>
        `
        return card
    }

    // bgcolor() {
    //     const color = this.getAttribute('data-bgcolor') ?? "#f98"
    //     return color
    // }

    // nomeAluno(){
    //     const nome = this.getAttribute('data-nome') ?? "Aluno"
    //     return nome
    // }

    // turmaAluno() {
    //     const turma = this.getAttribute('data-turma') ?? "Turma"
    //     return turma
    // }

    // bgimage() {
    //     const image = this.getAttribute('data-img') ?? "./img/vazio.png"
    //     return image
    // }

    // cardwidth(){
    //     const width = this.getAttribute('data-width') ?? "250"
    //     return width
    // }

    // cardheight(){
    //     const height = this.getAttribute('data-height') ?? "250"
    //     return height
    // }
}

customElements.define('card-aluno', card)
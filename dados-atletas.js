class Atleta {
    
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        }
        else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
            
        } else {
            return "Sem categoria"
        }
        
    }

    calculaIMC() {
        let imc = this.altura * this.altura
        return imc / this.peso 
    }

    calculaMediaValida() {
        
        let notasOrdenadas = this.notas.sort(function(a, b) {
            return a - b
        })
        let notasComputadas = notasOrdenadas.slice(1,4)
                        
        let soma = 0
        
        notasComputadas.forEach(function(nota){
            soma =  soma + nota
        })
        
        return soma / notasComputadas.length
            
    }

    obtemNomeAtleta() {
        return this.nome
    }

    obtemIdadeAtleta() {
        return this.idade
    }

    obtemPesoAtleta() {
        return this.peso
    }

    obtemAltura() {
        return this.altura
    }

    obtemNotasAtleta() {
        return this.notas
    }
}   

const atleta = new 
    Atleta("Cesar Abascal",30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome:${atleta.obtemNomeAtleta()}`);
console.log(`Idade:${atleta.obtemIdadeAtleta()}`);
console.log(`Peso:${atleta.obtemPesoAtleta()}`);
console.log(`Altura:${atleta.obtemAltura()}`);
console.log(`Notas:${atleta.obtemNotasAtleta()}`);
console.log(`Categoria:${atleta.calculaCategoria()}`);
console.log(`IMC:${atleta.calculaIMC()}`);
console.log(`Média válida:${atleta.calculaMediaValida()}`);

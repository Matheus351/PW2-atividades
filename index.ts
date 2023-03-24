// Como podemos rodar isso em um arquivo .ts sem causar erros?



let employee:{code:number, name:string} = { code: 0, name:''};

employee.code = 10;

employee.name = "John";

// Como podemos melhorar o esse código usando TS?


type Pessoa = {
    nome:string;
    idade:number;
    profissao:string
}

let pessoa1:Pessoa = { nome:'', idade:0, profissao:'' };

pessoa1.nome = "maria";

pessoa1.idade = 29;

pessoa1.profissao = "atriz"



let pessoa2: Pessoa = {nome:'',idade:0,profissao:''}

pessoa2.nome = "roberto";

pessoa2.idade = 19;

pessoa2.profissao = "Padeiro";



let pessoa3:Pessoa = {

nome: "laura",

idade: 32,

profissao: "Atriz"

};



let pessoa4:Pessoa = {

nome : "carlos",

idade : 19,

profissao : "padeiro"

}
  

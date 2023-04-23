class Animal {
  nome: string;
  caracteristicas: string[];

  constructor(nome: string, caracteristicas: string[]) {
    this.nome = nome;
    this.caracteristicas = caracteristicas;
  }

  exibirAnimal(): void {
    console.log(`Nome do animal: ${this.nome}`);
  }

  cadastrar(caracteristica: string): void {
    this.caracteristicas.push(caracteristica);
  }

  exibirCaracteristica(): string {
    const randomIndex = Math.floor(Math.random() * this.caracteristicas.length);
    return this.caracteristicas[randomIndex];
  }
}

const animal = new Animal('Lobo', ['Forte', 'Feroz']);
animal.exibirAnimal(); 
animal.cadastrar('Caçador');
console.log(animal.exibirCaracteristica()); 

interface FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  tutor: string | undefined;
}

class Filhote implements FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  tutor: string | undefined;

  constructor(cores: string[], pelagem: number) {
    this.cores = cores;
    this.pelagem = pelagem;
    this.tutor = undefined;
  }

  adotar(tutor: string): void {
    this.tutor = tutor;
  }
}

const cachorro = new Filhote(['preto', 'branco'], 2);
console.log(cachorro.cores); // ['preto', 'branco']
console.log(cachorro.pelagem); // 2
console.log(cachorro.tutor); // undefined

cachorro.adotar('João');
console.log(cachorro.tutor); // 'João'

type ComidaDePet = 'insetos' | 'frutas' | 'plantas' | 'sementes' | 'vegetais';

class PequenoRoedor {
  readonly especie: string;
  felicidade: number = 0;

  constructor(especie: string) {
    this.especie = especie;
  }

  comer(comida: ComidaDePet): boolean {
    return false;
  }

  estaFeliz(): boolean {
    return this.felicidade > 0;
  }
}

class Furao extends PequenoRoedor {
  constructor() {
    super('Furão');
  }

  cavar(): void {
    this.felicidade += 1;
  }

  comer(comida: ComidaDePet): boolean {
    return ['insetos', 'plantas', 'sementes', 'vegetais'].includes(comida);
  }
}

class Hamster extends PequenoRoedor {
  constructor() {
    super('Hamster');
  }

  correr(): void {
    this.felicidade += 1;
  }

  comer(comida: ComidaDePet): boolean {
    return true;
  }
}

const furao = new Furao();
furao.cavar()
furao.cavar()
console.log(furao.felicidade)//2
console.log(furao.comer('insetos'))//true 

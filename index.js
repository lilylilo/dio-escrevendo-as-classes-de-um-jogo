// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis
  const mago = new Heroi('Merlin', 40, 'mago');
  const guerreiro = new Heroi('Arthur', 35, 'guerreiro');
  const monge = new Heroi('Lee', 30, 'monge');
  const ninja = new Heroi('Hanzo', 28, 'ninja');
  
  // Testando o método atacar
  mago.atacar(); // Saída: O mago atacou usando usou magia
  guerreiro.atacar(); // Saída: O guerreiro atacou usando usou espada
  monge.atacar(); // Saída: O monge atacou usando usou artes marciais
  ninja.atacar(); // Saída: O ninja atacou usando usou shuriken
  
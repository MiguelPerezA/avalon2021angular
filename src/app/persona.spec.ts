import { Persona } from './persona';

describe('Persona', () => {
  let persona: Persona;

  beforeEach(()=>{
    persona=new Persona("pedro",20);
  });

  it('test creando objeto Persona', () => {
    expect(new Persona("Pedro",32)).toBeTruthy();
  });

  it('test tiempoParaJubilacion()', () => {
        
    let persona2=new Persona("Pedro",20);
    expect(persona.tiempoParaJubilacion()).toBe(50);
    expect(persona2.tiempoParaJubilacion()).toBe(50);
  });

  it('test tiempoParaJubilacion() pasado', () => {
    let persona3=new Persona("Pedro",75);
    expect(persona3.tiempoParaJubilacion()).toBe(0);
  });


});

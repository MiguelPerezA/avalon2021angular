import { Libro } from './libro';

describe('Libro', () => {
  it('should create an instance', () => {
    expect(new Libro("1","Java","pedro")).toBeTruthy();
  });
});

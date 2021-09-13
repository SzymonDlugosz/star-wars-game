export class Fighter {
  name: string;
  mass?: number;
  crew?: number;

  constructor(mass?: number, crew?: number) {
    this.mass = mass;
    this.crew = crew;
  }
}

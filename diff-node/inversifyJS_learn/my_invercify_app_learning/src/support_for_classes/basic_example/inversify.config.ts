import 'reflect-metadata';
import { Container, injectable } from 'inversify';

@injectable()
class Katana {
  public hit() {
    return 'cut!';
  }
}

@injectable()
class Shuriken {
  public throw() {
    return 'hit!';
  }
}

@injectable()
export class Ninja {
  private _katana: Katana;
  private _shuriken: Shuriken;

  public constructor(katana: Katana, shuriken: Shuriken) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight() {
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}

export const container = new Container();
container.bind<Ninja>(Ninja).to(Ninja);
container.bind<Katana>(Katana).to(Katana);
container.bind<Shuriken>(Shuriken).to(Shuriken);

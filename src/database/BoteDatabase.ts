import { botes } from "./botes";

export class BoteDatabase {
  static find(id: string): Bote {
    const bote = botes.find((b) => b.id === id);
    if (!bote) throw new Error(`el bote ${id} no existe`);
    return bote;
  }
}

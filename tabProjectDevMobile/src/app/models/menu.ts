import { Plat } from './plat';

export class Menu {
    public id: number;
    public titre: string = '';
    public jour: Date;
    public plats : Plat[];
    public commandes : any[];
}

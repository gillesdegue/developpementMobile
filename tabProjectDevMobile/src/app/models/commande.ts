import { Menu } from './menu';
import { Plat } from './plat';

export class Commande {
    public id: number;
    public utilisateur: string ;
    public menu: Menu;
    public plat: Plat;
}

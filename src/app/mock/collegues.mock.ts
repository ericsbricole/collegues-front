import { Collegue } from '../models/Collegue';

export const collegueMock = new Collegue('asterixlegaulois',
  'Astérix', 'le gaulois', 'astérix@armorique.fr', new Date('1950-01-01'), 'http://om1337.o.m.pic.centerblog.net/4w7h72p3.jpg');

export const colleguesMock = [
  new Collegue('darkvador',
  'Dark', 'Vador', 'vador@blackstar.empire', new Date('1960-12-05'), 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Darth_Vader.jpg/220px-Darth_Vader.jpg'),
  new Collegue('asterixlegaulois',
  'Astérix', 'le gaulois', 'astérix@armorique.fr', new Date('1950-01-01'), 'http://om1337.o.m.pic.centerblog.net/4w7h72p3.jpg'),
  new Collegue('une poule',
  'Gallus', 'gallus', 'gallus@jesuisundinosaure.fr', new Date('1990-01-25'), 'https://img.plantis.info/wp-content/uploads/sites/10/2015/09/Gallus-gallus-domesticus.jpg')
];

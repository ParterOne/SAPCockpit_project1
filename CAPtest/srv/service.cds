using { prova.db as myTestDB } from '../db/schema';

service ValerioService{
   entity TabellaProvaService as projection on myTestDB.TabellaProva;
}

service PatricoloService{
   entity TabellaProvaService2 as projection on myTestDB.TabellaProva2;
}
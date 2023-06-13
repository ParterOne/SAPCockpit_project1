using { prova.db as myTestDB } from '../db/schema';

service ValerioService{
   entity TabellaProvaService as projection on myTestDB.TabellaProva;
}
using { sap } from '@sap/cds/common';
namespace prova.db; 

entity TabellaProva { 
  key ID : Integer;
  Name  : String(50);
  Date  : Timestamp;
}
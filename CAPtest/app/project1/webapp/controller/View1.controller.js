sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: async function () {
            /* var oModel = new JSONModel({
                TabellaProvaService: {
                    testprop: {
                        
                    }
                }
            }); */
            var oModel = new JSONModel({});
            
            var aData = await this._getHanaData("/TabellaProvaService");
            /* oModel.setData(aData); */
            /* oModel.setProperty("/TabellaProvaService/testprop", aData) */
            oModel.setProperty("/TabellaProvaService", aData)
            this.getView().setModel(oModel, "myModel");
        },

        _getHanaData: function (Entity) {
            var xsoDataModelReport = this.getOwnerComponent().getModel();

            return new Promise(function (resolve, reject) {
                xsoDataModelReport.read(Entity, {
                    success: function (oDataIn) {
                        resolve(oDataIn.results);
                    },
                    error: function (error) {
                        console.error("Error calling HANA DB:", error);
                        reject(error);
                    }
                });
            });
        },

        onOpenDialog: function () {
            if (!this.pDialog) {
              this.pDialog = this.loadFragment({
                  name: "project1.view.Fragments.form"
              });
          } 
          this.pDialog.then(function(oDialog) {
              oDialog.open();
              oDialog.setModel(new JSONModel({}),"formModel");
          });
          },
          closeOnPress: function(oEvent){
            var oDialog = this.getView().byId("helloDialog");
            oDialog.close();
          },

          addEmployee: function (e) {
            debugger;
            var oDialog = e.getSource().getParent();
            var oModel = oDialog.getModel("formModel");
            var oData = oModel.getData();
            var xsoDataModelReport = this.getOwnerComponent().getModel();
            //xsoDataModelReport.create("/TabellaProvaService", {ID: oData.Id, Name: oData.FirstName , Date: oData.Data});
            //xsoDataModelReport.update("/TabellaProvaService(ID=5)", {Name: oData.FirstName , Date: oData.Data});
            xsoDataModelReport.remove("/TabellaProvaService(ID=5)");


            /* var oForm = this.getView().getModel("oForm").getProperty("/CustomerID");
            this.getView().getModel("Riga").setProperty("/CustomerID",oForm);
            this.getView().getModel("Orders").updateBindings(); */
          }
    })
})

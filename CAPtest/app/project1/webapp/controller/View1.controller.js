sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: async function () {
                var oModel = new sap.ui.model.json.JSONModel();
                var aData = await this._getHanaData("/TabellaProvaService");
                oModel.setData(aData);
                this.getView().setModel(oModel, "myModel");
                debugger
            },
            _getHanaData: function (Entity) {
                var xsoDataModelReport = this.getOwnerComponent().getModel();
                return new Promise(
                    function (resolve, reject) {
                        xsoDataModelReport.read(Entity, {
                            success: function (oDataIn, oResponse) {
                                resolve(oDataIn.results);
                            },
                            error: function (error) {
                                reject(console.log("error calling hana DB"))
                            }
                        });
                    });
            }
        });
    });

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("employeedetails.controller.View1", {
        onInit: function () {
            var employees = new sap.ui.model.json.JSONModel();
            employees.loadData("model/employee_data.json");
            this.getView().setModel(employees, "emp");

        },
        onRowPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            var sEmployeeId = oContext.getProperty("employee_id");
 
            this.getOwnerComponent().getRouter().navTo("empDetails", {
                employeeId: sEmployeeId
            });
        },

        onPress : function(){
            
        }
        
    });
});

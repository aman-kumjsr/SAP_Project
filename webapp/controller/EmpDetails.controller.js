sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
 
    return Controller.extend("your.namespace.controller.EmployeeDetails", {
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("employeeDetails").attachPatternMatched(this._onObjectMatched, this);
        },
 
        _onObjectMatched: function (oEvent) {
            var sEmployeeId = oEvent.getParameter("arguments").employeeId;
            var oModel = this.getView().getModel();
            var oData = oModel.getData();
            var oEmployee = oData.employees.find(function (employee) {
                return employee.employee_id === sEmployeeId;
            });
 
            var oEmployeeModel = new JSONModel(oEmployee);
            this.getView().setModel(oEmployeeModel, "employeeDetails");
        }
    });
});

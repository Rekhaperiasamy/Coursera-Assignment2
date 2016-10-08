(function()
{
    'use strict';
    angular.module('ShoppingListCheckoff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckoffService',ShoppingListCheckoffService);

    ToBuyController.$inject = ['ShoppingListCheckoffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];

    function ToBuyController(ShoppingListCheckoffService)
    {
      var buy = this;
      buy.items = ShoppingListCheckoffService.GetToBuyItems();
      buy.buyItem = function(index)
      {
        ShoppingListCheckoffService.buyItem(index);
      };
    };

    function AlreadyBoughtController(ShoppingListCheckoffService)
    {
      var bought = this;
      bought.items = ShoppingListCheckoffService.GetBoughtItems();
    }

    function ShoppingListCheckoffService()
    {
      var service = this;
      var toBuyItems = [
                         { name: "cookies", quantity: 12 },
                         { name: "milk", quantity: 6 },
                         { name: "chips", quantity: 3},
                         { name: "drinks", quantity: 1 },
                         { name: "choco", quantity: 2 }
                       ];
      var boughtItems = [];

      service.GetToBuyItems = function()
      {
        return toBuyItems;
      };

      service.GetBoughtItems = function()
      {
        return boughtItems;
      };

      service.buyItem = function(itemIndex)
      {
        var item = toBuyItems[itemIndex];
        boughtItems.push(item);
        toBuyItems.splice(itemIndex, 1);
      };
    };

})();

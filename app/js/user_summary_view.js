ec.views.userSummary = (function() {
  var model, fullName, email, subscription, dateJoined, recentPurchases;

  function init(parentNode) {
    var getNode = parentNode.querySelector.bind(parentNode);
    fullName = getNode('.fullname');
    email = getNode('.email');
    subscription = getNode('.subscription');
    dateJoined = getNode('.date-joined');
    recentPurchases = getNode('.purchases');

    ec.util.getJson(function(result) {
      //add init user state. This data should come from a form or an api. 
      model = new ec.User("John","Doe", "john.doe@gmail.com", [], Date.now());

      //Will not work in IE or early browsers. Recomend downloading and including JSON2
      result = JSON.parse(result);

      //should use extend here to combine the json object with the original data but they are completley different?
      // model = ec.util.extend(result); 

      for (var prop in result) {
        model[prop] = result[prop];
      };
      
       console.log(model);
      render(model);
      return model;
    });
  }

  function render(model) {
    console.log("running render");
    fullName.textContent = model.getFullName();
    email.textContent = model.getEmail();
    subscription.textContent = model.getSubscription();
    dateJoined.textContent = model.getDateJoined();
    recentPurchases.textContent = model.getRecentPurchases();
  }

  return {
    init: init,
    render: render
  }
})();

ec.views.userSummary = (function() {
  var model, fullName, email, subscription, dateJoined, recentPurchases;

  function init(parentNode, initUserState) {
    var getNode = parentNode.querySelector.bind(parentNode);
    fullName = getNode('.fullname');
    email = getNode('.email');
    subscription = getNode('.subscription');
    dateJoined = getNode('.date-joined');
    recentPurchases = getNode('.purchases');

    ec.util.getJson(function(result) {
      //add init user state. This data should come from a form or an api.
      //Ensured user object constructor is not in the global scope.
      model = new ec.User(
        initUserState.firstName,
        initUserState.lastName,
        initUserState.email,
        initUserState.subscriptions,
        initUserState.dateJoined
      );

      //Will not work in IE or early browsers. Recomend downloading and including JSON2
      result = JSON.parse(result);

      //should use extend here to combine the json object with the original data
      // model = ec.util.extend(result); 

      for (var prop in result) {
        model[prop] = result[prop];
      };

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

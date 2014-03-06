describe('Front end assesment', function() {

  var fragment = document.createDocumentFragment();
  var cssClasses = ['fullname', 'email', 'subscription', 'date-joined', 'purchases'];

  cssClasses.forEach(function(cssClass) {
    var node = document.createElement('p');
    node.className = cssClass;
    fragment.appendChild(node);
  });

  describe('best practices', function() {
    it('you should avoid global variables', function() {
      expect(window.User).not.toBeDefined();
    });

    it('you should check for own properties when extending objects', function() {
      Object.prototype.gotcha = "gotcha";
      var model = ec.views.userSummary.init(fragment);
      expect(model.gotcha).not.toBeDefined();
    });
  });

});

ec.User = function User(firstName, lastName, email, subscription, dateJoined  ) {
  this.loggedIn = false;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.subscription = subscription;
  this.dateJoined = dateJoined;
}

// ie. John Doe
ec.User.prototype.getFullName = function() {
	return this.firstName + this.lastName;
}

// ie. john.doe@gmail.com
ec.User.prototype.getEmail = function() {
	return this.email;
}

// ie. Small business
ec.User.prototype.getSubscription = function() {
	return this.subscription;
}

// ie. 14 Decemeber 2013
ec.User.prototype.getDateJoined = function() {
	return this.dateJoined;
}

// ie. Festival of Marketing booking, Small business subscription
ec.User.prototype.getRecentPurchases = function() {
	return this.recentPurchases;
}

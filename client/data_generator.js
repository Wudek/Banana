var _ = require('lodash');

var Actions = require('./actions/all_actions');

var User = require('./classes/user');
var Diet = require('./classes/diet');
var Meal = require('./classes/meal');
var Food = require('./classes/food');
var MealElement = require('./classes/meal_element');

function generateFoods() {
	var foods = {};

	function addFood(name, proteinPer100Gram, fatsPer100Gram, carbsPer100Gram) {
		var food = new Food(name, proteinPer100Gram, fatsPer100Gram, carbsPer100Gram);
		foods[food.id] = food;
	}

	addFood('Egg', 13, 11, 1.1);
	addFood('Egg White', 11, 0.2, 0.7);
	addFood('Chicken Breast', 32, 3.6, 0);
	addFood('Lean Ground Turkey', 23.2, 1.3, 0);
	addFood('Salmon', 25.5, 8.1, 0);
	addFood('Tilapia', 26.1, 2.6, 0);
	addFood('Tuna', 23.6, 3, 0);
	addFood('Lean Ground Beef', 20.5, 7.1, 0);
	addFood('Fat Free Cottage Cheese', 12, 0.3, 4.8);
	addFood('0% Greek Yogurt (Plain)', 10, 0, 4.7);
	addFood('Pork Tenderloin', 26.1, 3.5, 0);
	addFood('Oatmeal', 2.5, 1.5, 12);
	addFood('Banana', 1.1, 0.3, 22.9);
	addFood('Mixed Berries', 0.8, 0, 13.7);
	addFood('Apple', 0.3, 0.2, 13.8);
	addFood('Broccoli', 2.7, 0.3, 6.6);
	addFood('Onion', 1.4, 0, 9.3);
	addFood('Spinach', 3, 0.3, 3.7);
	addFood('Sweet Potatoes', 2, 0.2, 20.7);
	addFood('Brown Rice', 2, 0.7, 21.9);
	addFood('Whole Wheat Pasta', 5.4, 0.5, 26.6);
	addFood('Almond Butter', 21.3, 56.3, 17.5);
	addFood('Peanut Butter', 24, 50, 21.6);
	addFood('Almonds', 21.2, 50.2, 21.6);
	addFood('Peanuts', 23.7, 49.8, 21.6);
	addFood('Avocado', 2, 15.4, 8.6);

	Actions.setFoods(foods);
}

function generateUsersAndDiets() {
	var users = {};
	var diets = {};
	var meals = {};
	var mealElements = {};
	var userNames = ['Bob', 'Alice', 'Jack', 'Sara'];
	_.forEach(userNames, function (userName) {
		var user = new User(userName);
		users[user.id] = user;
		for (var i = 0, length = _.random(2, 5); i < length; i++) {
			var diet = new Diet('Diet ' + (i + 1), user.id, _.random(12, 25) * 100);
			for (var j = 0, jLength = _.random(1, 3); j < jLength; j++) {
				var meal = new Meal('Meal ' + (j + 1), diet.id);
				for (var k = 0, kLength = _.random(1, 3); k < kLength; k++) {
					var mealElement = new MealElement('Meal Element ' + (k + 1), meal.id);
					mealElements[mealElement.id] = mealElement;
				}
				meals[meal.id] = meal;
			}
			diets[diet.id] = diet;
		}
	});
	Actions.setUsers(users);
	Actions.setDiets(diets);
	Actions.setMeals(meals);
	Actions.setMealElements(mealElements);
}

module.exports = function () {
	console.log('generating dummy data');
	generateFoods();
	generateUsersAndDiets();
};

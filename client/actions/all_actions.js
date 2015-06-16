var Reflux = require('reflux');

var Actions = Reflux.createActions([
	'incrementCounter',
	'setUsers',
	'createUser',
	'deleteUser',
	'setDiets',
	'deleteDiet',
	'createDiet',
	'setMeals',
	'setMealElements',
	'setFoods'
]);

module.exports = Actions;

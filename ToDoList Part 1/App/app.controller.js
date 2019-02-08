"use strict;"
function TodoController() {
    const vm = this;
    vm.tasks = [
    { task: "Make Coffee", completed: false },
    { task: "Drink Coffee", completed: true },
    { task: "Smell Coffee", completed: false },
    { task: "Say nice things to people", completed: true }
  ];
}





angular
    .module("todoApp")
    .controller("TodoController", TodoController);
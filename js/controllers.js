'use strict';

/* Controllers */
var app = angular.module('app', []);



app.controller('myCtrl', function($scope) {
    
    $scope.questions = [];
    $scope.questions.push(new Question("What's your favourite color?", [new Answer('yellow'), new Answer('green')]));
    $scope.questions.push(new Question("What's your favourite game?", [new Answer('valleyball'), new Answer('football')]));
    $scope.questions.push(new Question("Which game is more interesting?", [new Answer('uno'), new Answer('chess')]));

    // $http.get('test/tests.json').success(function(data, status, headers, config) {
    //     $scope.tests = data;
    // });
    // var param = JSON.stringify({id:3, question: "What's your favourite subject?", answers: [{id:1, v:"math"}, {id:2, v:"history"}]});
    //  $http.put('test/tests.json', param).success(function(data, status, headers, config) {
    //     $scope.tests = data;
    // });

    $scope.addQuestion = function() {
      var question = $scope.value;
      if (question) {
        $scope.questions.push(new Question(question, $scope.objanswers));
      }
    };
    $scope.editFormQuestion = function(obj) {
      $scope.value = obj.question;
      // console.log(obj.answers);
      $scope.objanswers = obj.answers;
       console.log($scope.objanswers);
    };
    $scope.deleteQuestion = function() {
      $scope.questions.splice(this.$index, 1);
    };

    $scope.addAnswers = function(event) {
      // console.log(event);
      if (event.keyCode == 13) {
      var value = $scope.inputAnswer;
      if (value) {
          $scope.objanswers.push(new Answer(value));
          event.preventDefault();
        }
        $scope.inputAnswer = '';
      }
    };


    $scope.deleteAnswer = function() {
      $scope.objanswers.splice(this.$index, 1);
    };


});

  class Question{
    constructor(question, answers) {
      this.question = question;
      this.answers = [];
      // this.answers.push(new Answer(this));
      }
    };

  class Answer {
    constructor(answer) {
      this.answer = answer;
    }

    toggleEdit() {
      this.editable = !this.editable;
      
      if (this.editable) {
        this.newText = this.answer;
      }
      if (!this.editable) {
        this.answer = this.newText;
      }
    }
  };


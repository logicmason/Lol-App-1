'use strict';

angular.module('eartrainingApp')
  .controller('QuestionsCtrl', function ($scope) {
    $scope.currentOption = null;
    $scope.options = ["major 3rd", "fifth", "fourth", "octave"];
    $scope.notes = ["A4.mp3", "Ab4.mp3", "B4.mp3", "Bb4.mp3", "C4.mp3", "D4.mp3"];
    $scope.randomNote = function() {
      return $scope.notes[0];
    };

  });
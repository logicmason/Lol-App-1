'use strict';

angular.module('eartrainingApp')
  .controller('QuestionsCtrl', function ($scope) {
    $scope.currentOption = null;
    $scope.options = ["major 3rd", "fifth", "fourth", "octave"];
    $scope.notes = ["A4.mp3", "Ab4.mp3", "B4.mp3", "Bb4.mp3", "C4.mp3", "D4.mp3"];
    $scope.randomNoteIndex = function() {
      var index = Math.floor(Math.random() * $scope.notes.length);
      return index;
    };
    $scope.index1 = $scope.randomNoteIndex();
    $scope.index2 = $scope.randomNoteIndex();
    $scope.interval = $scope.index2 - $scope.index1;
    $scope.noteUrl1 = 'piano/' + $scope.notes[$scope.index1];
    $scope.noteUrl2 = 'piano/' + $scope.notes[$scope.index2];
  });
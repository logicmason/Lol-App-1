'use strict';

angular.module('eartrainingApp')
  .controller('QuestionsCtrl', function ($scope) {
    $scope.currentOption = null;
    $scope.options = ["major 3rd", "fifth", "fourth", "octave"];
    $scope.notes = ["Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4"];
    $scope.stepNames = ['perfect unison', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd',
      'perfect 4th', 'tri-tone', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th', 'octave'];
    $scope.randomNoteIndex = function() {
      var index = Math.floor(Math.random() * $scope.notes.length);
      return index;
    };
    $scope.index1 = $scope.randomNoteIndex();
    $scope.index2 = $scope.randomNoteIndex();
    $scope.interval = $scope.index2 - $scope.index1;
    $scope.direction = ($scope.interval > 0) ? "an ascending " : "a descending ";
    $scope.intervalName = $scope.direction + $scope.stepNames[Math.abs($scope.interval)];
    $scope.noteUrl1 = 'piano/' + $scope.notes[$scope.index1] + '.mp3';
    $scope.noteUrl2 = 'piano/' + $scope.notes[$scope.index2] + '.mp3';

  });
'use strict';

/**
 * @ngdoc function
 * @name yoAngularCordovaApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the yoAngularCordovaApp
 */
angular.module('yoAngularCordovaApp')
  .controller('GlobalCtrl', function ($scope, $rootScope, $mdSidenav, $mdToast, $mdDialog){

  $scope.searchModel = {
    searchActive: false,
    searchQuery: null
  };

  $scope.clickNav = function() {
    // Publish an event that can be handled by directives
    $rootScope.$emit('NavClicked');
  };

  /**
   * Closes the mdSidenav and handles any related behavior
   */
  $scope.closeSideNav = function(){
    $mdSidenav('left').close()
      .then(function(){
      });
  };

  /**
   * A replacement for the sidenav toggle button if it is replaced with a hamburger action.
   */
  $scope.handleHamburger = function() {
    if ($rootScope.isHistoryEmpty()) {
      $scope.toggleSideNav();
    } else {
      $rootScope.backFunction(true);
    }
  };

  $scope.openSidenav = function() {
    $mdToast.hide();
    $mdSidenav('left').open()
      .then(function(){
      });
  };

  $scope.executeSearch = function() {
    var path = '/search/' + $scope.searchModel.searchQuery;
    console.debug('go to path ' + path);
    $scope.disableSearch();
    // lose focus on search bar
    $rootScope.go(path);
  };

  $scope.disableSearch = function() {
    //var searchBox = angular.element('#searchBox');
    //searchBox.blur();
    $scope.searchModel.searchActive = false;
    $scope.searchModel.searchQuery = null;
  };

  /**
   * Closes the mdSidenav and handles any related behavior
   */
  $scope.closeSideNav = function(){
    $mdSidenav('left').close()
      .then(function(){
      });
  };

  /**
   * A replacement for the sidenav toggle button if it is replaced with a hamburger action.
   */
  $scope.handleHamburger = function() {
    if ($rootScope.isHistoryEmpty()) {
      $scope.toggleSideNav();
    } else {
      $rootScope.backFunction(true);
    }
  };

  /**
   * Handles the event of clicking on the nav bar- this is a common application convention that will make the active
   * scrollable container scroll to the top.
   */
  $scope.$on('NavClicked', function() {
    var domElement = document.getElementById('scrollcontainer');
    domElement.style.overflow = 'hidden';
    // wait for any current momentum scrolling to finish and then jump to top
    //$('#scrollcontainer').animate({scrollTop: 0}, 'fast');
    domElement.style.overflow = '';
  });

  /**
   * Displays the search box element on the toolbar
   */
  $scope.showSearch = function() {
    //var searchBox = angular.element('#searchBox');
    //searchBox.focus();
    $scope.searchModel.searchActive = true;
  };

  $scope.toggleSearch = function() {
    if ($scope.searchModel.searchActive) {
      $scope.disableSearch();
    } else {
      $scope.showSearch();
    }
  };

  /**
   * Displays an alert toast in the bottom right that disappears after 3 seconds
   *
   * Suitable for displaying short unactionable messages to the user
   *
   * @param message The alert message to display to the user
   */
  $scope.showAlertToast = function(message) {
    var toast = $mdToast.simple()
      .content(message)
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(2000);
    $mdToast.show(toast);
  };

  /**
   * Displays an alert toast in the bottom right that disappears when dismissed by the user
   *
   * Suitable for displaying short unactionable messages to the user
   *
   * @param message The alert message to display to the user
   */
  $scope.showAlertToastPersistent = function(message) {
    var toast = $mdToast.simple()
      .content(message)
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(0);
    $mdToast.show(toast);
  };

  /**
   * Displays an undoable toast in the bottom right that disappears after 3 seconds
   *
   * @param message the message to display to the user
   * @param callback the function to call when the undo action is clicked
   */
  $scope.showUndoToast = function(message, callback) {
    var toast = $mdToast.simple()
      .content(message)
      .action('undo')
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(2000);
    $mdToast.show(toast).then(function() {
      callback(true);
    });
  };

  /**
   * Displays an undoable toast in the bottom right that disappears when dismissed by the user
   *
   * @param message the message to display to the user
   * @param callback the function to call when the undo action is clicked
   */
  $scope.showUndoToastPersistent = function(message, callback) {
    var toast = $mdToast.simple()
      .content(message)
      .action('undo')
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(0);
    $mdToast.show(toast).then(function() {
      callback(true);
    });
  };

  /**
   * Displays an alert modal dialog
   *
   * Suitable for displaying short messages to the user
   *
   * @param title The title of the dialog box
   * @param message The alert message to display to the user
   * @param ev An event to animate the dialog box from
   */
  $scope.showAlertDialog = function(title, message, ev) {
    console.log(ev);
    $mdDialog.show(
      $mdDialog.alert()
        .title(title)
        .content(message)
        .ariaLabel('A modal dialog box: ' + message)
        .ok('close')
      //.targetEvent(ev)
    );
  };

  var backButton = function() {
    console.debug('back button');
    $rootScope.backFunction();
    $rootScope.$apply();
  };
  document.addEventListener('backbutton', backButton, false);

  $scope.quotes = [
      'Michael: You\'re wearing ostrich-skin boots.',
      'Lindsay: Well, I don\'t care about ostriches.',
      'Lucille Bluth: I\'ll be in the hospital bar.',
      'Michael: Uh, you know there isn\'t a hospital bar, Mother.',
      'Lucille: Well, this is why people hate hospitals. [Cackles at her own wit]',
      'Buster: She\'s just wigged out because I have a girlfriend.',
      'Lucille: A waiter hands him a note and suddenly he\'s Steve McQueen. He doesn\'t even know what she looks like.',
      'Buster: I know that she\'s a brownish area with points.',
      'Michael: You\'re just jumping right into this, huh?',
      'Buster: That\'s what you do when life hands you a chance to be with someone special. You just grab that brownish area by its points and you don\'t let go no matter what your mom says.',
      'Prison warden: You really think you can break out of my prison?',
      'Gob: You won\'t even know I was here.',
      'Narrator: The warden was intrigued. Less about the stunt, and more about the prison beatings this brash magician was sure to receive.',
      'Michael: Hey, speaking of kidding, How serious are you about Marta? I get the sense that there’s not much of a future there. Am I reading that right?',
      'Gob: [from inside the prison] Let me ask you something. How would you feel if I came down on you hard?',
      'Michael: You\'re saying I\'m not reading this right.',
      'Gob: No, I\'m saying move the bike. I need to jump on you to break my fall.',
      'Marta: I just couldn\'t find my keys.',
      'Michael: Well, my brother may have eaten them.',

      'Gob: Take off your glasses. Oh... wait, wait. Let down your hair. No: glasses on, hair back up. Let\'s just get that hair right back up.',
      'Kitty: Let me turn the lights off.',
      'Gob: Yes, yes, please.',
      'Kitty: How\'s that? Is that better?',
      'Gob: It just seems like there\'s still light coming in from under the door.',
      'George Sr.: I just haven\'t had sex in a month.',
      'Michael: You know, you\'ve been here two months.',
      'George Sr.: It\'s hard to gauge time.',
      'Michael: Yeah, I\'ll bet.',
      'Gob: I [bleep]ed Kitty!',
      'Michael: Gob! I just wanted you to get the information.',
      'Gob: I got the information.',
      'Michael: You did, huh? About the international accounts?',
      'Gob: Oh, I see what you\'re getting at. No, I didn\'t get any information.',
      'Kitty: Gob? I wish I would have know you were coming. I am a mess.',
      'Gob: I don\'t know if a call from me would\'ve changed that.',
      'Kitty: Do you like my outfit?',
      'Gob: Not as much as I like what\'s underneath it.',
      'Kitty: Gob!',
      'Gob: No, I need your chair. Get up.',

      'Michael: Come on, face it. You just do all this charity crap just to stroke your ego. You don\'t even know what the auction\'s for tonight.',
      'Lindsay: The wetlands.',
      'Michael: To do what with them?',
      'Lindsay: Dry them.',
      'Michael: Save them.',
      'Lindsay: From drying.',
      'Lindsay: Look, I screwed up, ok? I\'m lost, and I hate them. I hate the Wetlands. They\'re stupid and wet, and there are bugs everywhere, and I think I maced a crane, Michael.',
      'Narrator: Tobias had intended to park the family’s only vehicle at the airport parking lot, but was waved onto the tarmac instead, where he found a spot close to his gate.',
      'Lucille: Supposedly, Luz had to take her daughter to the hospital. That’s Lupe, her sister.',
      'Michael: I hope she’s okay.',
      'Lucille: She’s awful. Can barely wash a dish.',
      'Lindsay: (loudly) Well, how embarrassing. My own brother buying me? I\'d rather die. (whispers to Michael) Thank you. Maybe you\'re not that selfish.',

      '[at the prison]',
      'Barry Zuckerkorn: Are all the guys in here... you know? [referencing gay inmates]',
      'George Sr.: Oh, no, no. No, not all of them.',
      'Barry Zuckerkorn: Yeah. It\'s never the ones you hope.',
      'George Sr.: Hope?',
      'Barry Zuckerkorn: Think.',
      'Lucille: What\'d she do, get you drunk?',
      'Michael: No, we just, uh, well... we — we did drink a little bit. How\'d you know that?',
      'Lucille: Because that\'s what she said she\'d do. I said you wouldn\'t give her the money, and she said, "He will if I get him drunk." Probably because she thinks you\'re a cheap bastard. Oh... her words.',
      'Wayne Jarvis: I use one adjective to describe myself, what is it?',
      'Michael: Professional.',
      '[Jarvis shakes head and walks out]',
      'Michael: Did I just wake you up? I didn’t even know you were home.',
      'Lindsay: No, Michael, I don’t just sleep all day.',
      'Narrator: Actually, Lindsay was so upset at Michael that she tried meditating to calm herself but ended up taking a two-hour angry nap.',
      'Michael: I love Marta.',
      'Lindsay: Mom\'s housekeeper?',
      'Wayne Jarvis: I shall duck behind the couch.',
      'Michael: What a pro.',
      'Wayne Jarvis: I shall duck behind that little garbage can.',
      'Michael: Guy\'s a pro.',
      'Michael: [to Lucille] Oh, um... there\'s a big bowl of candy in my office. Why don\'t you go eat it?',
      'Wayne Jarvis: Wayne Jarvis, attorney at law. I have a responsibility to tell you that there is no candy in this office.',
      'Gob: [to Michael] Well, if it isn\'t the boy who lives under the stairs.',

      'Michael: Hey, Mom. Remember we had that conversation about trying to cut back on things that aren\'t necessities?',
      'Lucille: Like it was yesterday.',
      'Michael: It was this morning.',
      'Lucille: You\'re my third least favorite child.',
      'Michael: I can live with that.',
      '[Speaking of the surprise party for Lucille]',
      'Maeby: We [George Michael and Maeby] don\'t have to go, do we?',
      'Michael: This is a Bluth family celebration. It\'s no place for children.',
      'Michael: I can\'t believe she got that driver\'s license renewed.',
      'Gob: She didn\'t. I dummied her up a new one. Not my best work, though. She wanted to look 48. I nearly airbrushed her into oblivion. Ended up checking “albino” in the form.',
      'Lindsay: It would just give Dad one more reason to think that I\'ve got nothing to offer but my looks.',
      'Gob: Yeah, I got some of that. Except he also didn\'t like my looks.',

      'Buster: And I\'m going to continue dating, Mom.',
      'Michael: It sounds a little bit like "dating Mom."',
      'Buster: It\'s starting to feel a little like it.',
      'Michael: Since when are you against leather?',
      'Maeby: Yeah, you\'re not even a vegetarian.',
      'Lindsay: Well, I\'m not against the insides. I mean, people need meat to survive.',
      'Michael: You are aware they don\'t remove it from the cow surgically, right?',
      'Man at the store: May I help you?',
      'Tobias: Oh, I hope so. Um, I\'m looking for something that says, "Dad likes leather."',
      'Man: Something that says, "leather daddy"?',
      'Tobias: Oh, is there such a thing?',
      'Michael: I\'m a saint, you know. I\'m a living saint, and I get absolutely nothing out of it.',
      'Lindsay: Well, you get a false feeling of superiority',
      'Michael: That is nice, but this time it\'s not enough.',
      'Cab driver: Where to, mate?',
      'Tobias: The Gothic Castle.',
      'Cab driver: Gothic Asshole?',
      'Tobias: That\'s what I said.',
      'Rollo: If you care about your brother, you\'ll get in this car.',
      'Michael: Which brother?',
      'Rollo: Gob.',
      '[Michael leaves]',
      'Lucille: You\'re the only one who chose a spouse I liked and she had to die.',
      'Michael: I know, that\'s rough for you.'

    ];
});

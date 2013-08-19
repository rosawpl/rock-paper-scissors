if (Meteor.isClient) {
  Template.rock.greeting = function () {
    return "Welcome to rock_paper_scissors!";
  };

  Template.rock.invite = function () {
    return "To start the game, click one of the following button";
  }; 

  Template.rock.create = function() {
    Session.set ('x')
    // Session.set('aiPick', 'paper');
  };
  Template.rock.aiOutput = function() {
    //random number 0 to 3    
    return Session.get('Ai');    
    //put the random number into computer's choice and display 
  }

  Template.rock.events({
    'click input' : function (evt) {
      setAiChoice();

      var btnValue = evt.currentTarget.value;
      // console.log(evt.currentTarget);
      Session.set('x', btnValue);
      console.log('btnValue---', btnValue)       

       winner=decideWinner(btnValue, Session.get('Ai'));

      console.log('Ai---', Session.get('Ai'))

      console.log('winner------',winner)
      
      if (winner==0)
       { console.log('This is a tie')
            Session.set ('result','This is a tie') 
          }
      if (winner==-1)
        {console.log('Ai is the winner')
            Session.set ('result','Ai is the winner') }
      if (winner==1)
        {console.log('You are the winner')

          Session.set ('result','You are the winner') }
      // console.log('displaywinner------', $('#displayWinner'))
      

  //put the random number into computer's choice and display 
      
      
    },
    // 'click #paper-btn':function(){
    //   Session.set('x', 'paper');
    // },
    // 'click #scissors-btn': function(){
     
    //    Session.set('x', 'scissors')
    //   console.log('you click"scissors"')
    // },
    // 'click #rock-btn': function(){
    //   Session.set('x', 'rock')
    // }
  });

  Template.rock.display = function() {
    return Session.get ('x')
  }

  Template.rock.displayWinner = function() {
    return Session.get ('result')
  }
  //put x into yourpick
  //put y into aipick
  Session.set('yourpick', Session.get ('x'))

  //random number 0 to 3
  var setAiChoice = function(){
    var randomnumber= Math.floor(Math.random()*3);
    Session.set('Y', randomnumber)

    var r  = Session.get('Y')
    //setup computer choice and display computer choice
    var AiChoice=new Array();
        AiChoice[0]="rock";
        AiChoice[1]="paper";
        AiChoice[2]="scissors";
    Session.set('Ai',AiChoice[r])
  }

  var decideWinner = function(yourpick, aipick){
    if (yourpick === aipick ){
      return 0;
    }

  
    if (yourpick =="rock" &&   aipick =="paper" )
    {
        return  -1;}
    if (yourpick =="paper" &&   aipick =="scissors" )
        {return -1;}

    if (yourpick =="scissors"&&   aipick =="rock" )
        {return  -1;}
    // 1 means you win
    if (yourpick =="rock"&&   aipick =="scissors" )
        {return 1;}

    if (yourpick =="paper"&&   aipick =="rock" )
        {return 1;}


    if (yourpick =="scissors"&&   aipick =="paper" )
        {return 1;}


  }

  
     
  } 
      


  

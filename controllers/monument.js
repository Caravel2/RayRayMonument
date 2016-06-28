var fs  = require("fs");
var jsonfile = require('jsonfile');
var file_timeStamp = './timeStamp.json';
var async = require("async");

module.exports.index = function(req,res,next){
  return res.render("index");
};

module.exports.punchTime = function(req,res,next){
  

  async.series([
      function(callback){
          // do some stuff ...
          punchTime(callback);
      }
  ],
  // optional callback
  function(err, results){
      // results is now equal to ['one', 'two']
      return res.json({"data2file_timeStamp":results[0]});
  });
};

var punchTime = function(callback){
  var date = new Date();

  jsonfile.readFile(file_timeStamp, function(err, obj) {
    console.dir(obj);

    var data2file_timeStamp;
    var hasBeenPunched = punchedChecker(obj.date);

    if(hasBeenPunched){
      data2file_timeStamp = {
        date:date.toLocaleDateString(),
        planet_status:"two_planet"
      };
    }else{
      //first one to punch in this day
      data2file_timeStamp = {
        date:date.toLocaleDateString(),
        planet_status:"one_planet"
      };
    }

    jsonfile.writeFile(file_timeStamp, data2file_timeStamp, function(err){
      if (err) throw err;
      console.log(file_timeStamp + ' is saved! ' + data2file_timeStamp.planet_status);
      callback(null,data2file_timeStamp);
    });

  });

};

var punchedChecker = function(lastTimeStampDate){
  var currentlyDate = new Date();
  if((new Date(lastTimeStampDate).setHours(0,0,0,0) == new Date(currentlyDate.toLocaleDateString()).setHours(0,0,0,0))){
    //Today is punched
    return true;
  }else{
    //Today is not punched
    return false;
  }
};

module.exports.getPunchTime = function(req,res,next){
  jsonfile.readFile(file_timeStamp, function(err, obj){
    var planet_status;
    if (err){
      if(err.code == 'ENOENT'){

        async.series([
            function(callback){
                // do some stuff ...
                initialPunchTime(callback);
            }
        ],
        // optional callback
        function(err, results){
            // results is now equal to ['one', 'two']
            return res.json({"planet_status":results[0]});
        });

      }else{
        throw err;
      }
      
    }else{

      var data2file_timeStamp;
      var hasBeenPunched = punchedChecker(obj.date);

      if(!hasBeenPunched){
        //first one to punch in this day
        data2file_timeStamp = {
          planet_status:"zero_planet"
        };
      }

      jsonfile.writeFile(file_timeStamp, data2file_timeStamp, function(err){
        if (err) throw err;
        console.log(file_timeStamp + ' is saved! ' + data2file_timeStamp.planet_status);
        callback(null,data2file_timeStamp);
      });


      planet_status = obj.planet_status;
      return res.json({"planet_status":planet_status});
    }
    
  });
};

var initialPunchTime = function(callback){
  var date = new Date();
  data2file_timeStamp = {
    planet_status:"zero_planet"
  };

  jsonfile.writeFile(file_timeStamp, data2file_timeStamp, function(err){
    if (err) throw err;
    console.log(file_timeStamp + ' is saved! ' + data2file_timeStamp.planet_status);

    return callback(null,data2file_timeStamp.planet_status);
  });
};
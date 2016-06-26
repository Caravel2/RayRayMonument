var fs  = require("fs");

module.exports.index = function(req,res,next){
  fs.readFile('timeStamp.txt','utf8', function(err, lastTimeStampDate){
    if (err){
      if(err.code == 'ENOENT'){
        punchTime();
        lastTimeStampDate = new Date().toLocaleDateString();
      }else{
        throw err;
      }
      
    }
    console.log(lastTimeStampDate);

    var currentlyDate = new Date();
    var todayVisit = (new Date(lastTimeStampDate).getTime() >= new Date(currentlyDate.toLocaleDateString()).getTime());

    return res.render("index",{"todayVisit":todayVisit});
  });

  
};

module.exports.punchTime = function(req,res,next){

  return res.render({"todayVisit":true});
};

var punchTime = function(){
  var date = new Date();

  fs.writeFile('timeStamp.txt', date.toLocaleDateString(), function(err){
    if (err) throw err;
    console.log('It\'s saved!');
  });
};
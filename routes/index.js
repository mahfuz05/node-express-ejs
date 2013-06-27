
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', 
  	author: 'Rashedul Kabir',
  	msg: 'Welcome to my homepage !',
  	name: "Nothing"
  });
};
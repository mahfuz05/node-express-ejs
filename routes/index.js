
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Home',
  	brand: 'MyApp', 
  	author: 'Rashedul Kabir',
  	welcome_msg: 'Welcome to my homepage !',
  	msg1: 'Mesage One',
  	msg2: 'Message Two',
  	msg3: 'Message Three',
  	copyright: '2013'
  });
};
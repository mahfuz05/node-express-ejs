// Module for Feedback

function feedback(request, response) {
	response.render('feedback', {
		title: 'Feedback',
	  	brand: 'MyApp', 
	  	author: 'Rashedul Kabir',
	  	copyright: '2013'

	});
};

exports.feedback = feedback ;
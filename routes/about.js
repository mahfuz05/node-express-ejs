// Module for the about page

function about(request, response) {
	response.render('about', {
		title: 'About Me',
	  	brand: 'MyApp', 
	  	author: 'Rashedul Kabir',
	  	organization: 'My Organization',
	  	bio: 'My short bio....',
	  	copyright: '2013'

	});
};

exports.about = about;
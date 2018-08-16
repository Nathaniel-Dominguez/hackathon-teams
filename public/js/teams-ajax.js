$(document).ready(function() {
	$('#delete-btn').on('click', function(e) {
		e.preventDefault();

		var teamElement = $(this);
		var teamUrl = teamElement.attr('href');

		$.ajax({
			method: 'DELETE',
			url: teamUrl
		}).done(function(data) {
			console.log('success', data);
			window.location = '/teams'
		}).fail(function(err) {
			console.log('Error:', err);
		});
	});

	$('#edit-form').on('submit', function(e) {
		e.preventDefault();

		var teamElement = $(this);
		var teamUrl = $(this).attr('action');
		var teamData = $(this).serialize();

		$.ajax({
			method: 'PUT',
			url : teamUrl,
			data: teamData
		}).done(function(data) {
			window.location = '/teams' 
		}).fail(function(err) {
			console.log('Error:', err)
		});
	});
});

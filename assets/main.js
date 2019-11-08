var generalVideos = [
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/yC4XF0DNoM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/EuLwH32vzh4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/JeyMB4CRzPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/0R_GOOeDxuU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/XHqlLMuKjNE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/n6370YXjlKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/-U0AFQbfv88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/UvjRalM_nrw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/YH5ty3Kucz4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/YYKMoZnuTJE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/yW6EwhM9l68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="600" height="300" src="https://www.youtube.com/embed/bjOcNXivsiA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
];

var beatBoxers = [
	{
		name: 'D-low',
		youtube: 'https://www.youtube.com/channel/UCI2-CSNIq-_GhJOA2ORF9wg/videos',
		image: 'assets/images/Dlow.jpg'
	},
	{
		name: 'Codfish',
		youtube: 'https://www.youtube.com/user/BunnyF1uff/videos',
		image: 'assets/images/codfish.jpg'
	},
	{
		name: 'Reeps One',
		youtube: 'https://www.youtube.com/user/Reepsone/featured',
		image: 'assets/images/ReepsOne.jpg'
	},
	{
		name: 'B-Art',
		youtube: 'https://www.youtube.com/user/BPMxDBeatsPerMinute/featured',
		image: 'assets/images/B-art.jpg'
	},
	// {
	// 	name: 'Audical',
	// 	youtube: 'https://www.youtube.com/channel/UCf7ujqQzI9YY5RzzBgpGSbg/featured',
	// 	image: ''
	// },
	// {
	// 	name: 'NaPoM',
	// 	youtube: 'https://www.youtube.com/user/NaPoMBeatbox/featured',
	// 	image: ''
	// },
	// {
	// 	name: 'Alexinho',
	// 	youtube: 'https://www.youtube.com/channel/UCXXGewmKCnsc4WiS3_4hZig/featured',
	// 	image: ''
	// },
	// {
	// 	name: 'TylaDubya',
	// 	youtube: 'https://www.youtube.com/user/TylaDubya/featured',
	// 	image: ''
	// },
	// {
	// 	name: 'ALEM',
	// 	youtube: 'https://www.youtube.com/user/38mael/featured',
	// 	image: ''
	// },
	// {
	// 	name: 'Azel',
	// 	youtube: 'https://www.youtube.com/user/azelbeatbox/featured',
	// 	image: ''
	// },
];

var challenges = [
	{
		id: 0,
		name: 'Bass',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		id: 1,
		name: 'Hi-Hat',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		id: 2,
		name: 'Snare',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		id: 3,
		name: 'Bass, Hi-Hat and Snare',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		id: 4,
		name: 'Throat-Bass',
		status: false,
		level: 'pre-intermediate',
		tutorial: ''
	},
		{
		id: 5,
		name: 'Vibration-Bass',
		status: false,
		level: 'pre-intermediate',
		tutorial: ''
	},
		{
		id: 6,
		name: 'Lip Roll',
		status: false,
		level: 'pre-intermediate',
		tutorial: ''
	},
		{
		id: 7,
		name: 'Lip Roll, Hi-Hat and Bass',
		status: false,
		level: 'Intermediate',
		tutorial: ''
	},
		{
		id: 8,
		name: 'Inward-Bass',
		status: false,
		level: 'Intermediate',
		tutorial: ''
	},
		{
		id: 9,
		name: 'Inward-Lip Roll',
		status: false,
		level: 'Advanced',
		tutorial: ''
	},
		{
		id: 10,
		name: 'Tongue Bass',
		status: false,
		level: 'Advanced',
		tutorial: ''
	},
];


function display() {
	return {
		videosDisplay: function() {
			generalVideos.forEach(function(element) {
				$('#generalVideos').append(element);
			})
		},
		beatBoxersDisplay: function() {
			beatBoxers.forEach(function(element) {
				$('<img class="bbImages">').appendTo('#beatboxers').attr('src', element.image);
			})
		},

		challenges: function() {
			$('#challenges').click(function() {
				newPage();
				$('<div id="challengesDiv"> </div>')
				.appendTo('#page');

				//forEach
				for (var i = 0; i < challenges.length; i++) {
					$('#challengesDiv')
					.append('<div class="challenge" value="' + i + '">' + challenges[i].name + ' ' + '(' + challenges[i].level + ')' + '</div>')
					};

				$('.challenge').click(function() {
					$(this).css('background-color', 'white').css('color', 'black');
					var val = $(this).attr('value');
					var num = parseInt(val);

					challenges.forEach(function(element) {
							if (num === element.id) {
								element.status = true;
							}
						});
					$(this).fadeOut(1000);
					});
				
			});
		},

		done: function() {
			$('#done').click(function() {
				newPage();
				$('#challengesDiv').html('');

				$('<div id="doneDiv"> </div>')
				.appendTo('#page');

				for (var i = 0; i < challenges.length; i++) {
					if (challenges[i].status === true) {
						$('#doneDiv').append('<div class="done">' + challenges[i].name + ' ' + '(' + challenges[i].level + ')' + '</div>');
					}
				}
			})
		}
	}
}

var display = display();
$('#videos').html(display.videosDisplay());
$('#beatboxers').append(display.beatBoxersDisplay());
$('#challenges').html(display.challenges());
$('#done').html(display.done());


// FUNCTIONS 
var newPage = function() {																		
	$('#page').html('')																						
}

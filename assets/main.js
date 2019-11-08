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
		name: 'Bass',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		name: 'Hi-Hat',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		name: 'Snare',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		name: 'Bass, Hi-Hat and Snare',
		status: false,
		level: 'basics',
		tutorial: ''
	},
		{
		name: 'Throat-Bass',
		status: false,
		level: 'pre-intermediate',
		tutorial: ''
	},
		{
		name: 'Vibration-Bass',
		status: false,
		level: 'pre-intermediate',
		tutorial: ''
	},
		{
		name: 'Lip Roll',
		status: false,
		level: 'pre-intermediate',
		tutorial: ''
	},
		{
		name: 'Lip Roll, Hi-Hat and Bass',
		status: false,
		level: 'Intermediate',
		tutorial: ''
	},
		{
		name: 'Inward-Bass',
		status: false,
		level: 'Intermediate',
		tutorial: ''
	},
		{
		name: 'Inward-Lip Roll',
		status: false,
		level: 'Advanced',
		tutorial: ''
	},
		{
		name: 'Tongue Bass',
		status: false,
		level: 'Advanced',
		tutorial: ''
	},
];


var newPage = function() {
	$('#page').html('');
}

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
				$('<div id="challengesDiv"> </div>').appendTo('#page').append('<ul id="challengesList"> </ul>');
				//refactor to foreach
				challenges.forEach(function(element) {
					$('#challengesList').append('<li class="challengesLi">' + element.name + ' ' + '(' + element.level + ')' + '</li>');
				})
			});
		}
	}
}

var display = display();
$('#videos').html(display.videosDisplay());
$('#beatboxers').append(display.beatBoxersDisplay());
$('#challenges').html(display.challenges());


	$('.challengesLi').click(function() {
		alert('hi this is challenge ')
	})

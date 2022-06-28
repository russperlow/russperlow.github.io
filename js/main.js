let categories = [{
	title: 'Languages',
	subs: [
		{name: 'C#', percentage: '95%'},
		{name: 'Java', percentage: '100%'}
	]
}];


Vue.component('knowledge-level', {
	props:['sub', 'percentage'],
	template: `<div class="knowledge-level-div">
					<b-card class="knowledge-level-sub">{{sub.name}}</b-card>
					<svg class="knowledge-level-rect" width="50%" height="15%">
						<rect :style="{width: sub.percentage + '%'}" height="100%" style="fill:rgb(0,214,70); stroke-width:0; stroke:rgb(0,0,0); transition: width 1s ease;						" />
					  </svg>
					  <b-card class="knowledge-level-percent">{{sub.percentage}}%</b-card>				
				  </div>`
});

Vue.component('knowledge-level-category', {
	props:['category', 'subs'],
	template: `<div>
				<b-card class="knowledge-level-category">
					<b-card class="knowledge-level-title">{{category}}</b-card>
					<knowledge-level is="knowledge-level" v-for="(sub, index) in subs" v-bind:sub="sub" v-bind:index="index">
					</knowledge-level>
				</b-card>
				</div>`
});

Vue.component('work-experience', {
	props: ['job', 'index'],
	template: `
		<div class="container right" v-if="index % 2 == 1">
			<div class="content">
				<p class="timePeriodRight rightMoveIn invisible">{{job.timePeriod}}</p>
				<p class="companyRight rightMoveIn invisible">{{job.company}}</p>
				<p class="positionRight rightMoveIn invisible">{{job.position}}</p>
				<p class="contentRight rightMoveIn invisible">{{job.content}}</p>
			</div>
		</div>
		<div class="container left" v-else>
			<div class="content">
				<p class="timePeriodLeft leftMoveIn invisible">{{job.timePeriod}}</p>
				<p class="companyLeft leftMoveIn invisible">{{job.company}}</p>
				<p class="positionLeft leftMoveIn invisible">{{job.position}}</p>
				<p class="contentLeft leftMoveIn invisible">{{job.content}}</p>
			</div>
		</div>
	`
});

const app = new Vue({
	el: '#root',
	data: {
		languages: 'Languages & Extensions',
		languageSubs: [
			{name: 'JavaScript', percentage: '95'},
			{name: 'HTML & CSS', percentage: '95'},
			{name: 'Node.js', percentage: '95'},
			{name: 'C#', percentage: '95'},
			{name: 'Java', percentage: '95'},
			{name: 'Python', percentage: '95'},
			{name: 'Flask', percentage: '95'},
			{name: 'SQL', percentage: '75'},
			{name: 'Swift', percentage: '75'},
			{name: 'Kotlin', percentage: '75'},
			{name: 'C++', percentage:'75'},
		],
		devTools: 'Developer Tools',
		devToolSubs: [
			{name: 'Visual Studio', percentage: '95'},
			{name: 'Visual Studio Code', percentage: '95'},
			{name: 'IntelliJ', percentage: '95'},
			{name: 'Android Studio', percentage: '95'},
			{name: 'MonoGame & XNA', percentage: '95'},
			{name: 'Unity 4.0 & 5.0', percentage: '85'},
			{name: 'Xamarin', percentage: '85'},
			{name: 'K2 Five', percentage: '75'}
		],
		software: 'Software',
		softwareSubs: [
			{name: 'Microsoft PowerPoint', percentage: '95'},
			{name: 'Microsoft Excel', percentage: '95'},
			{name: 'Azure DevOps', percentage: '90'},
			{name: 'Adobe Photoshop', percentage: '90'},
			{name: 'SharePoint', percentage: '75'},
			{name: 'Adobe After Effects', percentage: '75'}
		],
		jobs: [
			{
				timePeriod: 'November 2021 - Present',
				company: 'Wingbrace',
				position: 'Scrum Master',
				content: 'Scrum Master of single Agile Development team. Leader of Daily Stand-up, Retrospectives, Bi-Weekly Sprint Reviews & Presentations, and Sprint Planning (Poker-Based). Continued team and sprint metrics tracking. '
			},
			{
				timePeriod: 'June 2020 - Present',
				company: 'Wingbrace',
				position: 'Software Engineer',
				content: 'Working in an Agile Development Enviornment on Models Based System Engineering. Creating and modifying models and simulations in an array of enviorments based on the given clients needs. Bringing to our clients the most optimized, comprehensible and tailored cloud architecture and data analytics.'
			},
			{
				timePeriod: 'January 2019 - August 2019',
				company: 'Wegmans Food Markets',
				position: 'Web Developer (CO-OP',
				content: 'Designed and developed End to End Applications for multiple projects in SharePoint, utilizing K2, HTML, JavaScript, CSS, and JQuery. Gathered requirements and led discovery meetings for each project. Implemented updates to existing sites and helped test in-progress work.',
			},
			{
				timePeriod: 'May 2017 - December 2017',
				company: 'REDCOM Labs',
				position: 'Software Engineer (CO-OP)',
				content: 'Create automating testing for Sigma Client for Android using Espresso. Developed Visual Voicemail feature and patched bugs for Sigma Client for Windows, Android and iOS, using Java Eclipse, Android Studio and xCode respestively.',
			},
			{
				timePeriod: 'August 2017 - December 2017',
				company: 'RIT Interactive Games and Media',
				position: 'Teaching Assistant',
				content: 'Teach and tutor students in Visual Studio 2015, C#, Microsoft XNA, and Git. Grade exercises, homework, projects, exams and presentations.',
			},
			{
				timePeriod: 'August 2016 - December 2018',
				company: 'RIT Interactive Games and Media',
				position: 'Lab Assistant',
				content: 'Tutor students in Visual Studio 2017, C#, C++, JavaScript, Html/CSS, Microsoft XNA, Unity 5.0, Photoshop, and Unix. Assist in the replacement, repairing and addition of lab equipment.',
			},
		],

	}
});

const TIME_OUTS = [0, 1000, 2000, 3000];

function isElementInViewport(elem){
	var element = $(elem)
	// window bottom edge
	var windowBottomEdge = $(window).scrollTop() + $(window).height();
	
	// element top edge
	var elementTopEdge = element.offset().top;
	var offset = 100;

	// if element is between window's top and bottom edges
	return elementTopEdge + offset <= windowBottomEdge;

}

function checkAnimationRight(){
	$('.rightMoveIn').each(function(index){
		if(isElementInViewport($(this))){
			if($(this).hasClass('timePeriodRight')){
				$(this).removeClass('invisible');
				$(this).addClass('rightMoveInStart')
			}else if($(this).hasClass('companyRight')){
				var $element = $(this)
				setTimeout(function(){addRightAnimationClass($element)}, TIME_OUTS[1])
			}else if($(this).hasClass('positionRight')){
				var $element = $(this)
				setTimeout(function(){addRightAnimationClass($element)}, TIME_OUTS[2])
			}else if($(this).hasClass('contentRight')){
				var $element = $(this)
				setTimeout(function(){addRightAnimationClass($element)}, TIME_OUTS[3])
			}
		}
	})
}

function checkAnimationLeft(){
	$('.leftMoveIn').each(function(index){
		if(isElementInViewport($(this))){
			if($(this).hasClass('timePeriodLeft')){
				$(this).removeClass('invisible');
				$(this).addClass('leftMoveInStart')
			}else if($(this).hasClass('companyLeft')){
				var $element = $(this)
				setTimeout(function(){addLeftAnimationClass($element)}, TIME_OUTS[1])
			}else if($(this).hasClass('positionLeft')){
				var $element = $(this)
				setTimeout(function(){addLeftAnimationClass($element)}, TIME_OUTS[2])
			}else if($(this).hasClass('contentLeft')){
				var $element = $(this)
				setTimeout(function(){addLeftAnimationClass($element)}, TIME_OUTS[3])
			}
		}
	})
}

function addRightAnimationClass(elem){
	$(elem).addClass('rightMoveInStart')
	$(elem).removeClass('invisible')
}

function addLeftAnimationClass(elem){
	$(elem).addClass('leftMoveInStart')
	$(elem).removeClass('invisible')
}

$(window).scroll(function(){
	checkAnimationRight()
	checkAnimationLeft()
})
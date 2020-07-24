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

const app = new Vue({
	el: '#root',
	data: {
		languages: 'Languages',
		languageSubs: [
			{name: 'JavaScript', percentage: '95'},
			{name: 'HTML & CSS', percentage: '95'},
			{name: 'C#', percentage: '95'},
			{name: 'Java', percentage: '95'},
			{name: 'SQL', percentage: '75'},
			{name: 'Swift', percentage: '75'},
			{name: 'Kotlin', percentage: '75'},
			{name: 'C++', percentage:'75'},
			{name: 'Python', percentage: '75'},
		],
		devTools: 'Developer Tools',
		devToolSubs: [
			{name: 'Visual Studio', percentage: '95'},
			{name: 'Android Studio', percentage: '95'},
			{name: 'MonoGame & XNA', percentage: '95'},
			{name: 'Unity 4.0 & 5.0', percentage: '85'},
			{name: 'Xamarin', percentage: '85'},
			{name: 'K2 Five', percentage: '75'}
		],
		software: 'Software',
		softwareSubs: [
			{name: 'Adobe Photoshop', percentage: '90'},
			{name: 'SharePoint', percentage: '75'},
			{name: 'Adobe After Effects', percentage: '75'}
		]

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
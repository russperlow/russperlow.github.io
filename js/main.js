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
						<rect :style="{width: sub.percentage + '%'}" height="100%" style="fill:rgb(0,214,70); stroke-width:0; stroke:rgb(0,0,0)" />
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
			{name: 'C#', percentage: '95'},
			{name: 'Java', percentage: '95'},
			{name: 'HTML & CSS', percentage: '95'},
			{name: 'JavaScript', percentage: '95'},
			{name: 'C++', percentage:'85'}
		],
		devTools: 'Developer Tools',
		devToolSubs: [
			{name: 'Visual Studio', percentage: '95'},
			{name: 'Android Studio', percentage: '95'},
			{name: 'MonoGame & XNA', percentage: '95'},
			{name: 'Unity 4.0 & 5.0', percentage: '85'},
			{name: 'Xamarin', percentage:'85'}
		],
		software: 'Software',
		softwareSubs: [
			{name: 'Adobe Photoshop', percentage: '90'},
			{name: 'Adobe After Effects', percentage: '75'}
		]

	}
});
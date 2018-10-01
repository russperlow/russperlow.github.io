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
					<svg width="400" height="110">
						<rect :style="{width: sub.percentage + '%'}" height="10%" style="fill:rgb(0,214,70); stroke-width:0; stroke:rgb(0,0,0)" />
				  	</svg>				
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
		category: 'Languages',
		subs: [
			{name: 'C#', percentage: '95'},
			{name: 'Java', percentage: '100'}
		]
	}
});
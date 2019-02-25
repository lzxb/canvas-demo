<template>
	<div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {
	mounted() {
		const arr = [100, 300, 500, 33, 100, 1333, 395];

		const app = d3.select(this.$el);
		const rootSvg = app.append('svg');
		const reactArr = rootSvg
			.selectAll('rect')
			.data(arr)
			.enter()
			.append('rect')
			.attr('transform', (d, i) => `translate(${35 * i}, 0)`)
			.attr('width', (d) => String(30))
			.attr('height', (d, i) => 30 * i)
			.style('fill', 'red');
		reactArr
			.append('text')
			.text((d) => `${d}`)
			.attr('x', 0)
			.attr('y', 0);
	}
}
</script>

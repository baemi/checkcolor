<template>
	<div id="mainApp">
		<div class="mainApp__container">
			<header>
				<caption-bar></caption-bar>
			</header>
			<main>
				<canvas ref="colorView" class="mainApp__color-view" width="100" height="100"></canvas>
				<div class="mainApp__color-sliders">
					<label for="">
						<input type="range" min="0" max="255" v-model="color.r" class="" /><span>{{ color.r }}</span>
					</label>
					<label for="">
						<input type="range" min="0" max="255" v-model="color.g" class="" /><span>{{ color.g }}</span>
					</label>
					<label for="">
						<input type="range" min="0" max="255" v-model="color.b" class="" /><span>{{ color.b }}</span>
					</label>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import CaptionBar from '@/layout/CaptionBar.vue';
import { throttle } from 'throttle-debounce';
import robot from 'robotjs';
import NativeMouse from 'win-mouse';

export default {
	components: {
		CaptionBar,
	},
	created() {},
	mounted() {
		const mouseEvent = NativeMouse();
		mouseEvent.on('move', throttle(17, this.trackColor));
		this.mouseEvent = mouseEvent;
	},
	beforeDestroy() {
		this.mouseEvent.destroy();
	},
	methods: {
		trackColor(x, y) {
			const hex = robot.getPixelColor(x, y);
			this.color.r = parseInt(hex.slice(0, 2), 16);
			this.color.g = parseInt(hex.slice(2, 4), 16);
			this.color.b = parseInt(hex.slice(4, 6), 16);
			this.hex = hex;
			this.draw('#' + hex);
		},

		draw(color) {
			const context = this.$refs.colorView.getContext('2d');
			context.clearRect(0, 0, 100, 100);
			context.fillStyle = color;
			context.fillRect(0, 0, 100, 100);
		},
	},
	data: () => ({
		color: {
			r: 0,
			g: 0,
			b: 0,
		},
		hex: '0',
	}),
};
</script>

<style lang="scss">
:root {
	font-size: 10px;
}
* {
	box-sizing: border-box;
}
html,
body {
	padding: 0;
	margin: 0;
	cursor: pointer;
}
#mainApp {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	// -webkit-font-smoothing: antialiased;
	// -moz-osx-font-smoothing: grayscale;
	// text-align: center;
	// color: #2c3e50;
	main {
		display: flex;
		flex-flow: row nowrap;
		width: 100vw;
		height: calc(100vh - 30px);
		padding: 1em;
	}
}

.mainApp__color-view {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 4px solid grey;
	margin-right: 1em;
}
.mainApp__color-sliders {
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;
	height: 100px;

	label {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		span {
			padding: 0 0.5em;
			font-size: 1.6em;
			width: 3em;
		}
	}
}
</style>

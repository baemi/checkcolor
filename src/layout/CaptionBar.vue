<template>
	<div id="captionBar">
		<div class="captionBar__container">
			<div class="captionBar__contents"></div>
			<!-- 시스템 버튼 -->
			<button class="captionBar__system-button" @click="minimize()">
				<span class="shape__bar"></span>
			</button>
			<button class="captionBar__system-button" @click="maximaize()">
				<span class="shape__square"></span>
			</button>
			<button class="captionBar__system-button" @click="close()">
				<span class="shape__cross"></span>
			</button>
		</div>
	</div>
</template>

<script>
import { remote } from 'electron';
export default {
	methods: {
		minimize() {
			remote.getCurrentWindow().minimize();
		},
		maximaize() {
			remote.getCurrentWindow().maximize();
		},
		close() {
			remote.getCurrentWindow().close();
		},
	},
};
</script>

<style lang="scss" scoped>
$primaryColor: #3f51b5;
$primaryColor-darken-2: #303f9f;
$primaryColor-lighten-1: #5c6bc0;
$errorColor: #e74c3c;
$backgroundColor: #fafafa;

.captionBar__container {
	height: 30px;
	width: 100vw;
	display: flex;
	flex-flow: row nowrap;
	background-color: $primaryColor;
	border-bottom: 1px solid $primaryColor-darken-2;
}
.captionBar__contents {
	flex: 1 0 0;
	user-select: none;
	-webkit-app-region: drag;
	font-size: 1.4rem;
	// line-height: $captionBarHeight;
	padding: 0 1em;
	color: $backgroundColor;
}
.captionBar__system-button {
	color: #eee;
	background-color: transparent;
	border: none;
	outline: none;
	transition: all 0.3s;
	width: 45px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: $primaryColor-lighten-1;
	}

	&:last-child:hover {
		background-color: $errorColor;
	}
}

.shape__square {
	display: inline-block;
	width: 10px;
	height: 10px;
	border: 1px solid $backgroundColor;
}
.shape__cross {
	position: relative;
	display: inline-block;
	width: 10px;
	height: 10px;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 14px;
		border-bottom: 1px solid $backgroundColor;
	}
	&::before {
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&::after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
}
.shape__bar {
	display: inline-block;
	width: 10px;
	height: 1px;
	border-bottom: 1px solid $backgroundColor;
}
</style>

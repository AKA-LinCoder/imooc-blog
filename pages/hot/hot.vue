
<!--定义当前页面结构--,相当于wxml-->
<template>
	<view class="hot-container">
		<!--@相当于直接找到根目录-->
		<image  class="logo" src="@/static/images/logo.png" 
		mode="aspectFit"></image>
		<view class="search-box"><my-search placeholderText="hahah"></my-search></view>
		
	</view>
</template>
<!--定义当前页面逻辑,相当于js.ts-->
<script>
	import { getHotTabs } from '@/api/hot.js'
	export default {
		data() {
			return {
				
			};
		},
		//组件配置完成，但DOM未渲染,可以进行数据请求，配置数据
		created() {
			this.loadHotTabs();
		},
		//所有方法必须在methods中
		methods: {
			async loadHotTabs(){
				const res = await getHotTabs();
				console.log(res);
			}
		}
	}
</script>
<!--定义样式 wxss-->

<style lang="scss" scoped>
	//scoped，表示当前样式只在当前文件生效，样式的隔离性
.hot-container {
	background-color: #ffpxffff;
	.logo {
		width: 100%;
		height: 80px;
	}
	.search-box {
		padding: 0 16px;
		margin-bottom: 8px;
	}
}
</style>

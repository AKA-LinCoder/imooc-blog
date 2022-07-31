<template>
	<!--
	1.具备输入框的样式
	2.不可输入
	3.placeholder内容由父组件决定
	-->
	<view class="my-search-container">
		<!--搜索按钮-->
		<view class="my-search-box">
			<!--图标-->
			<image src="/static/images/search.png" class="icon"></image>
			<!--placeholder-->
			<text class="placeholder">{{placeholderText}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		//接收数据
		props: {
			placeholderText: {
				type:String,
				default:'搜索'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.my-search-container {
	display: flex;
	align-items: center;
	.my-search-box {
		height: 36px;
		background-color: #ffffff;
		border-radius: 15px;
		border: 1px solid #c9c9c9;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 10px;
		
		.icon {
			width: 20rpx;
			height: 20rpx;
		}
		.placeholder {
			font-size: 12px;
			margin-left: 5px;
			color: #999;
		}
	}
}
</style>
<template>
	<view class="tab-container">
		<!--
		1.在父组件中定义样式，数据，指定选中项
		-->
		<view class="tab-box">
			<scroll-view scroll-x class="scroll-view" scroll-with-animation>
				<view class="scroll-content">
					<view class="tab-item-box">
						<block v-for="(item,index) in tabData" :key="index">
							<view class="tab-item">{{item.name}}</view>
						</block>
					</view>
				</view>
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-tabs",
		props: {
			//1.指定样式
			config: {
				type:Object,
				//default 如果是复杂数据类型，那么需要指定value为一个函数，通过返回值的形式执行默认值
				default: ()=>{
					return {};
				}
			},
			//2.指定数据
			tabData: {
				type:Array,
				default: () => {
					return [];
				}
			},
			//3.指定选中项
			defaultIndex: {
				type:Number,
				default:0
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.tab-container {
	font-size: 14px;
	height: 45px;
	line-height: 15px;
	background-color: #ccc;
	.tab-box {
		width: 100%;
		height: 45px;
		display: flex;
		position: relative;
		.scroll-view {
			white-space: nowrap;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			.scroll-content {
				width: 100%;
				height: 100%;
				position: relative;
				.tab-item-box {
					height: 100%;
					.tab-item {
						height: 100%;
						display: inline-block;
						text-align: center;
						padding: 0 15px;
						position: relative;
						color: #333;
					}
					
				}
			}
			
		}
	}
}
</style>
<template>
	<view>
		<!--
		1.在父组件中定义样式，数据，指定选中项
		-->
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

</style>
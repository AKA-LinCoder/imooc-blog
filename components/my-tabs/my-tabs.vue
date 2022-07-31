<template>
	<view>
		<!--
		1.在父组件中定义样式，数据，指定选中项
		-->
		<!-- <scroll-view
		  id="_scroll"
		  scroll-x
		  class="scroll-view"
		  scroll-with-animation
		  :scroll-left="scrollLeft"
		>
		  <view class="scroll-content">
		    <view class="tab-item-box">
		      <block v-for="(item, index) in tabList" :key="index">
		        <view
		          class="tab-item"
		          :id="'_tab_' + index"
		          :class="{ 'tab-item-active': activeIndex === index }"
		          @click="tabClick(index)"
		          :style="{
		            color:
		              activeIndex === index ? defaultConfig.activeTextColor : defaultConfig.textColor
		          }"
		          >{{ item.name || item }}</view
		        >
		      </block>
		    </view>
		    <!-- 滑块 -->
	<!-- 	    <view
		      class="underLine"
		      :style="{
		        transform: 'translateX(' + slider.left + 'px)',
		        width: defaultConfig.underLineWidth + 'px',
		        height: defaultConfig.underLineHeight + 'px',
		        backgroundColor: defaultConfig.underLineColor
		      }"
		    />
		  </view>
		</scroll-view> 
		 -->
		<view>{{tabData}}</view>
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
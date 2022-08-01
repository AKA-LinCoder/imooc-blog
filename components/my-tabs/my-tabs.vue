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
							<view 
							:id="'_tab_' + index"
							class="tab-item" :class="{ 'tab-item-active': activeIndex===index}"
							@click="onTabClick(index)"
							
							>{{item.name}}</view>
						</block>
					</view>
					<!--滑块-->
					<view class="underline" :style="{
						width:defaultConfig.underLineWidth+'px',
						hright:defaultConfig.underLineHeight+'px',
						backgroundColor:defaultConfig.underLineColor,
						transform:'translateX(' + slider.left + 'px)',
					
					}"></view>
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
				//当前激活项的index
				activeIndex: -1,
				//滑块
				//想要实现滑块的滚动
				//1.确定滚动时机 -》点击tab时
				//2.滑块滚动的距离
				slider: {
					//滑块距左侧的距离
					left:0
				},
				//默认配置
				defaultConfig: {
					//下划线宽度
					underLineWidth:24,
					//下划线高度
					underLineHeight:2,
					//下划线颜色
					underLineColor:'#f94d2a'
				},
				//n内部维护的数据对象,为每个item单独维护一个slider的滑块对象
				tabList:[
					
				]
			};
		},
		//监听器，相当于小程序的observe
		watch: {
			defaultIndex:{
				//当defaultIndex发生变化时，回调的方法
				handler (val){
					 this.activeIndex = val;
				},
				//当前handler回调会在侦听开始之后立即被调用
				immediate: true
			},
			//监听tabData数据变化
			tabData:{
				handler (val){
					this.tabList = val;
					//tabList已经和tabData同步了
					//维护tabList中每个item，为DOM渲染完成之后
					//this.$nextTick() uniapp虽然支持，但是$nextTick()存在兼容性问题
					setTimeout(()=>{
						//计算item的slider
						this.updateTabWidth();
					},0)
					
				},
				//当前handler回调会在侦听开始之后立即被调用
				immediate: true
			}
		},
		methods: {
			/*
			*
			* 更新tab宽度
			*/
		   updateTabWidth(){
			 //tabItem的宽度，tabItem的left  ,为tabList的每个item维护一个slider对象
			 let data = this.tabList;
			 if(data.length===0)return;
			 //uniapp中拿到渲染之后的dom
			 const query =  uni.createSelectorQuery().in(this);
			 //循环数据源
			 data.forEach((item,index)=>{
				 //获取dom的固定写法
				 query.select('#_tab_' + index)
				 .boundingClientRect((res) => 
				 {
					 //res就是拿到的dom
					 //为数据对象的每个item都维护一个_slider对象
					 item.slider = {
						 left:res.left + (res.width - this.defaultConfig.underLineWidth)/2
					 };
					 //运算完成之后，计算一次滑块的位置
					 if(data.length - 1 === index){
						 this.tabToIndex();
					 }
				 })
				 .exec();
			 })
		   },
		   
			/**
			 * tabItem点击事件
			 * **/
			onTabClick(index){
				this.activeIndex = index;
				this.tabToIndex();
				//发送一个通知，通知表示激活项发生变化
				this.$emit('tabClick',index)
	
			},
			/**
			 * 计算滑块滚动距离
			 * **/
			 tabToIndex(){
				 const index = this.activeIndex;
				 //计算滚动距离
				 //配置滚动条的left
				 this.slider = {
					 //拿到tabItem的宽度，tabItem的left,slider的width 
					 //left = tabItem.left + (tabItem.width- slider.width)/2
					 left:this.tabList[this.activeIndex].slider.left
				 }
			 }
		}
	}
</script>

<style lang="scss" scoped>
.tab-container {
	font-size: 14px;
	height: 45px;
	line-height: 45px;
	background-color: #fff;
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
						
						&-active {
						  color: #f94d2a;
						}
					}
					
				}
				.underline {
					height: 2px;
					width: 24px;
					background-color: #f94d2a ;
					border-radius: 8px;
					transition: 0.5s;
					position: absolute;
					bottom: 0;
				}
			}
			
		}
	}
}
</style>
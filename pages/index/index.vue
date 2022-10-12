<template>
	<view class="container">
		<view class="title">
			51二手闲置
		</view>
		<view class="search">
			<input type="text" placeholder="输入物品名搜搜看" class="inputs" confirm-type="search" @confirm="inputConfirm"
				@input="onKeyInput" placeholder-style='color:#a5c4c7'>
			<!-- <image src="" mode="" @click="search"></image> -->
		</view>
		<!-- 横向滚动条 -->
		<view class="line">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<block v-for="(item,index) in AllProduct">
					<view class="scroll-view-item_H" @click="findProduct(index)">
						<view class="HH">
							<view style="height: 100rpx;">image</view>
							<view style="height: 30rpx;">{{item.title}}</view>
						</view>
					</view>
				</block>
				<view class="after" :style="{'bottom': 10+'rpx','left':current*wid+'rpx'}"></view>
			</scroll-view>
		</view>

		<!-- 商品展示 -->
		<view class="products">
			<!-- 新鲜的 附近的 -->
			<view class="options">

			</view>
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
					:interval="interval" :duration="duration" :current="current">
					<block v-for="(item,index) in AllProduct">
						<swiper-item>
							<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
								@scrolltolower="lower" @scroll="scroll">
								<view class="swiper-center">
									<block v-for="(items,indexs) in item.product">
										<view id="demo1" class="swiper-item">
											<view class="img"></view>
											<view class="title">
												{{items.title}}
											</view>
											<view class="address">
												<view class="add">{{items.address}}</view>
												<view class="time">{{items.time}}</view>
											</view>
											<view class="price">${{items.price}}</view>
										</view>
									</block>
								</view>
							</scroll-view>
						</swiper-item>
					</block>

				</swiper>
			</view>
		</view>
		<!-- Tabbar 导航 -->
		<tabbar index="0"></tabbar>
	</view>
</template>

<script>
	import store from '@/store/index.js'; //需要引入store
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				AllProduct: [],
				CurrentProduct: [],
				current: 0,
				//swiper
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				distance: 30,
				wid:0
			}
		},
		methods: {
			add() {},
			upper: function(e) {
				// console.log(e)
			},
			lower: function(e) {
				// console.log(e)
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}, // 回车键确定
			inputConfirm(event) {
				// 确定之后跳转到哪里
				console.log(event.detail.value)
			},
			//边输入边触发 得到文本框的值
			onKeyInput(event) {
				// 把值赋给data中的变量
				console.log(event.target.value)
			},
			//点击搜索图标 跳转页面
			search() {
				// 获取data中的变量,跳转页面
			},
			findProduct(index) {
				this.CurrentProduct = this.AllProduct[index] //获取当前分类下标赋值给CurrentProduct
				this.current = index
				// console.log(this.current);
				// console.log(this.CurrentProduct);
				console.log(this.current*this.wid);
				console.log(this.current);
				console.log(this.wid);
			},

			//swiper
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		},
		async onLoad() {
			await store.dispatch('_getProducts') // 进页面获取数据
			this.AllProduct = store.state.AllProducts //赋值
			console.log(this.AllProduct);
	
			let info = uni.createSelectorQuery().in(this).selectAll(".container");
			info.boundingClientRect(function(data) {
				// console.log(data)
				// console.log(data[0].width) // 获取元素宽度
				this.wid = data[0].width-80
				// console.log(this.wid);
			}).exec()
		}
	}
</script>

<style lang="scss">
	.scroll-Y {
		height: 100%;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 85vh;

		.title {
			height: 30rpx;
		}

		.search {
			height: 40rpx;
		}

		.line {
			height: 200rpx;
		}

		.products {
			width: 100vw;
			flex: 1;
			background-color: rebeccapurple;

			.options {
				width: 100%;
				height: 90rpx;
				background-color: red;
			}
		}
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		height: 200rpx;
		background-color: rebeccapurple;

		.HH {
			padding-left: 30rpx;
			width: 130rpx;
			display: flex;
			flex-direction: column;
			line-height: 0 !important;
			background-color: saddlebrown;
			margin-left: 30rpx;
		}
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 300rpx;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
		background-color: burlywood;
		position: relative;
	}

	.after {
		width: 144rpx;
		height: 10rpx;
		background-color: yellow;
		position: absolute;
	}

	.product_list {
		display: flex;
	}

	.product_inner {
		width: 1000rpx;
		height: 100rpx;
		float: left;
	}

	.search {
		padding-top: 40rpx;
		padding-bottom: 40rpx;
	}

	.inputs {
		width: 90%;
		border: 1rpx solid black;
		border-radius: 30rpx;
		margin: 0 auto;
		text-indent: 30px;
	}

	.uni-margin-wrap {
		width: 100%;
		height: 100%;
	}

	.swiper {
		height: 100%;
	}

	.swiper-center {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.swiper-item {
		display: block;
		width: 45%;
		margin: 0 auto;
		background-color: saddlebrown;
		// text-align: center;
		border-radius: 10rpx;
		position: relative;

		.img {
			height: 200rpx;
			background-color: green;
		}

		.title {
			height: 50rpx;
			background-color: rosybrown;
		}

		.address {
			height: 100rpx;
			display: flex;
			flex-direction: row-reverse;
			background-color: red;
			font-size: 20rpx;
			line-height: 140rpx;

			.time {
				padding-right: 30rpx;
			}
		}

		.price {
			width: 100rpx;
			height: 67rpx;
			background-color: beige;
			position: absolute;
			font-size: 38rpx;
			bottom: 11rpx;
			left: 8rpx;
			font-weight: 700;
		}
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>

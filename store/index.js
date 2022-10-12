// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'
import {getProducts} from '../router/MOCKProducts.js'
Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		AllProducts:null
	},
	mutations:{
		addProducts(state,n){ // 添加到state
			state.AllProducts = n
			console.log(state.AllProducts);
		}
	},
	actions:{
		async _getProducts(){ // 请求数据
			const data = await getProducts()
			this.commit('addProducts',data)
		}
	}
})
export default store

// router/modules/home.js
const home = [
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	{
		path: '/pages/index/index',
		aliasPath: '/', //对于h5端你必须在首页加上aliasPath并设置为/
		name: 'index',
		meta: {
			title: '商品列表',
		},
	}, {

		path: '/pages/me/me',
		name: 'me',
		meta: {
			title: 'me',
		},
	},
	{
		path: '/pages/find/find',
		name: 'find',
		meta: {
			title: 'find',
		},
	},
	{
		path: '/pages/msg/msg',
		name: 'msg',
		meta: {
			title: 'msg',
		},
	}

]
export default home

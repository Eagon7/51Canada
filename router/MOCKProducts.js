const _products = [{
		title: '电子设备',
		product: [{
				id: 1,
				title: "ipad pro",
				price: 500,
				address: '多伦多',
				img:"",
				time:"2小时前"
			},
			{
				id: 2,
				title: "ipad air",
				price: 15,
				address: '万锦',
				img:"",
				time:"1小时前"
			},

		]
	},
	{
		title: '家具',
		product: [{
				id: 1,
				title: "衣柜",
				price: 500.01,
				inventory: 2,
				address: '列治文山',
				img:"",
				time:"3小时前"
			},
			{
				id: 2,
				title: "桌子",
				price: 1500.01,
				inventory: 21,
				address: '列治文山',
				img:"",
				time:"3小时前"
			},

		]
	},
	{
		title: '床上用品',
		product: [{
				id: 1,
				title: "衣柜",
				price: 500.01,
				inventory: 2,
				address: '列治文山',
				img:"",
				time:"3小时前"
			},
			{
				id: 2,
				title: "桌子",
				price: 1500.01,
				inventory: 21,
				address: '列治文山',
				img:"",
				time:"3小时前"
			},

		]
	},
	{
		title: '生活用品',
		product: [{
				id: 1,
				title: "衣柜",
				price: 500.01,
				inventory: 2,
				address: '列治文山',
				img:"",
				time:"3小时前"
			},
			{
				id: 2,
				title: "桌子",
				price: 1500.01,
				inventory: 21,
				address: '列治文山',
				img:"",
				time:"3小时前"
			},
	
		]
	}
]

// 定时器模拟延迟
async function timer(delay) {
	return new Promise(resolve => setTimeout(resolve, delay))
}

//封装获取数据函数
export const getProducts = async () => {
	await timer(1000);
	return _products
}

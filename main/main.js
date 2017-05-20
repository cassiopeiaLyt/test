const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var item_list = loadAllItems();
	var list = [];
	var sum = 0;;
	//处理输入数据
	for (var i in inputs) {
		var item = new Object();
		item.barcode = inputs[i];
		var index = find(item, list);
		if(index == -1) {//如果不存在
			item.count = 1;
			//找到商品的额外信息
			for (var j in item_list) {
				if(item.barcode == item_list[j].barcode) {
					item.name = item_list[j].name;
					item.unit = item_list[j].unit;
					item.price = item_list[j].price;
				}
			}
			list.push(item);
		} else {
			list[index].count ++;
		}
	}
	
	//生成输出数据
	var info = '***<没钱赚商店>购物清单***\n';
	for (var i in list) {
		var total = list[i].count * list[i].price;
		info += '名称：'+list[i].name+'，数量：'+list[i].count+list[i].unit+'，单价：'+(list[i].price).toFixed(2)+'(元)，小计：'+total.toFixed(2)+'(元)\n';
		sum += total;
	}
	info += '----------------------\n' +
            '总计：'+sum.toFixed(2)+'(元)\n' +
            '**********************';
	return info;
};

function find(item, list) {
	if(list.length == 0) return -1;
	var index = -1;
	for(var i in list) {
		if(list[i].barcode == item.barcode) {
			index = i;
			break;
		}
	}
	return index;
}



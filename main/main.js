const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    console.log("Debug Info");
	var item;
	var item_list = loadAllItems();
	var list = new Array();
	var sum = 0;
	//处理输入数据
	for (var i in inputs) {
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
	var title = '***<没钱赚商店>购物清单***\n';
	var middle;
	for (var i in list) {
		var total = list[i].count * list[i].unit;
		middle += '名称：'+list[i].name+'，数量：'+list[i].count+list[i].unit+'，单价：'+list[i].price+'(元)，小计：'+total+'(元)\n';
		sum += total;
	}
	var tail = '----------------------\n' +
            '总计：'+sum+'(元)\n' +
            '**********************';
	var info = title + middle + tail;
	return info;
};

module.exports = function isExist(item, list) {
	var index = -1;
	for(var i in list) {
		if(list[i].barcode == item.barcode) {
			index = i;
			break;
		}
	}
	return index;
}


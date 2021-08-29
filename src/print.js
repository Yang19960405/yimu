export default function printMe() {
    let data = [{
        name: "uc",
        value: 5
      }, {
        name: "amap",
        value: 2
      }, {
        name: "ali",
        value: 3
      }];

    console.log(combineData([
        {id: 101, configId: 2, from: '3088001'},
        {id: 102, configId: 3, from: '3088002'},
        {id: 103, configId: 1, from: '3088003'},
        {id: 104, configId: 1, from: '3088004'}
    ],[
        { id: 101, configId: 2, from:'3088001', image: 'https://www.alipay.com/b.png', text: '配置2' },
        { id: 102, configId: 3, from:'3088002', image: 'https://www.alipay.com/c.png', text: '配置3' },
        { id: 103, configId: 1, from:'3088003', image: 'https://www.alipay.com/a.png', text: '配置1' },
        { id: 104, configId: 1, from:'3088004', image: 'https://www.alipay.com/a.png', text: '配置1' },
    ]));
    console.log( deleteItemsFromListById1([ {id: 1, name: '张三'}, {id: 2, name: '李四'}, {id: 1, name: '张三'}, {id: 3, name: '王五'} ],[ {id: 1} ]));
    console.log(toUrlQueryString({ aaa: 111, bbb: 222 }));
    console.log(toUrlQueryObject("aaa=111&bbb=222"));
    console.log();
   
}
function getUrlParam(sUrl, sKey) {
    if(sKey !== null){
        if(sUrl!==null){
            let ss = sUrl.split('?');
            if(ss.length > 1){
                let s = ss[1].split('#')[0];
                let keyValues = s.split('&');
                let values = [];
                keyValues.map(item =>{
                    if(item.split('=')[0]===sKey){
                        values.push(item.split('=')[1])
                    }
                });
                if(values.length > 1){
                    return values;
                }else{
                    return values.join('');
                }
                
            }
        }
    }else{
        return new Object();
    }

}

function sort(arr){
    var len = arr.length;
    for (var i = 0; i < len-1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j].value > arr[j + 1].value) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function getMyName(arr,myName){
    let value = {};
    arr.map((item,i)=>{
        console.log(i);
        if(item.name === myName){
            value=item;
        }
    });
    return value;
}

function toObject(arr){
    let Object = {};
    arr.map(item=>{
        Object[item.name] = item;
    });
    return Object;
}
function a(){
    var parentDom = document.createElement('div');
    parentDom.classList.add('container')
    var h1Obj = document.createElement("h1");
    h1Obj.innerHTML="hello world";
    parentDom.appendChild(h1Obj);
    var divObj = document.createElement("div");
    divObj.classList.add('header');
    parentDom.appendChild(divObj);
    var styleObj = document.createElement("div");
    styleObj.style.padding='1px';
    parentDom.appendChild(styleObj);
}

function toString(){

}

function combineData(dataList, config) {
	dataList.map((dataItem,i)=>{
      config.map(conItem=>{
        if(dataItem.configId === conItem.configId){
          dataList[i].image = conItem.image;
          dataList[i].text = conItem.text;
        }
      });
    });
  return dataList;
}


function replaceWords(str, targetWords, toWords) {
	return str.replace(targetWords, toWords)
}

function deleteItemsFromListById(list, items) {
    if(items.length>0){
    list.map((item, i)=>{
      if(item.id === items[0].id){
        list.splice(i,1);
        items.shift();
        if(items.length>0){
          deleteItemsFromListById(list,items)
        }
      }
    })
  } 	
}

function deleteItemsFromListById1(list, items) {
    let returnList = [];
    list.map(listItem => {
    let isSave = true;
    items.map(item => {
      if(item.id === listItem.id){
        isSave = false;
      }
    });
    if(isSave){
      returnList.push(listItem);
    }
  });

  return returnList;
}

function toUrlQueryString(obj) {
	let keys = Object.keys(obj);
  	let arr = [];
  	keys.map(item=>{
      arr.push(`${item}=${obj[item]}`)
    });
  	return arr.join('&');
}

function toUrlQueryObject(urlParamStr) {
    let obj = {};
    let arr = urlParamStr.split('&');
    arr.map(item=>{
      let arrson = item.split('=');
      if(arrson.length > 1){
        obj[arrson[0]]=obj[arrson[1]]
      }
    });
    return obj;
  }

function aaa(str){
    let strs = str.split('');
    for(var i =0 ;i<str.length/2;i++){
        if(strs[i]!==strs[str.length-1-i]){
            return false;
        }
    }
    return true;
}

function bbb(data){
    let idArrs = [];
    let newData = [];
    data.map(item=>{
        idArrs.push(item.id);
    });
    let idNewArrs= Array.from(new Set(idArrs));
    data.map(item=>{
        idNewArrs.map(i =>{
            if(item.id === i){
                newData.push(item);
            }
        })
    });
    return newData;
}
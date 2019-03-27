function  getString(str){
  str=str.split('?')[1]
  var args = {};//保存数据的对象
  let items = str.length?str.split('&'):[];//取得每一项
  let item = null;
  let name = null;
  let value = null;
  for(let i=0; i<items.length;i++){
      item = items[i].split('=');
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      if(name.length){
          args[name] = value;
      }
  }
  return args;
}

  export {
    getString,
  }
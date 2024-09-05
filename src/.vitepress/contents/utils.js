const path = require('path');
function getMenuList(list){
  return list.map(item => {
    const link = item.replace(/\\/g,'/').replace('src','')
    const text = path.basename(link)
    return {text,link}
  })
}

module.exports = {
  getMenuList
}
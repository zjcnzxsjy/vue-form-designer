import { cloneDeep } from 'lodash-es'

//转换formGenerator组件的schema
export function config2Schema(layout, formConfigData) {
  const schema = {};
  schema.config = cloneDeep(formConfigData);
  const sortLayout = sortLayoutItemsByRowCol(layout);
  const finalLayout = calcXoffset(sortLayout);

  const widgets = finalLayout.map(item => {
    const obj = {};
    for(let [key, value] of Object.entries(item.widget)) {
      if (key === 'options') {
        obj[key] = {};
        for (let [key1, value1] of Object.entries(value)) {
          obj[key][key1] = value1.value;
        }
      } else if (key !== "dataSourceType" && key !== "dataSource"){
        obj[key] = value;
      }
    }
    obj.span.y = item.y;    //组件在的行  
    return obj;
  });
  schema.widgets = widgets;
  return schema;
}

export function sortLayoutItemsByRowCol(layout) {
  return cloneDeep(layout).sort(function(a, b) {
    if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
      return 1;
    }
    return -1;
  });
}

//计算grid item的offset
function calcXoffset(sortLayout) {
  let yaxisSet = new Set();
  sortLayout.forEach(item => {
    yaxisSet.add(item.y);
  })
  const ret = [];
  [...yaxisSet].forEach(yAxis => {
    const filterYItem = sortLayout.filter(layout => layout.y === yAxis);
    for (let i = 0; i < filterYItem.length; i++) {
      if (i === 0) {
        filterYItem[i].widget.span.offset = filterYItem[i].x;
      } else {
        filterYItem[i].widget.span.offset = filterYItem[i].x - filterYItem[i - 1].x - filterYItem[i - 1].w
      }
      ret.push(filterYItem[i]);
    }
  })
  return ret;
}
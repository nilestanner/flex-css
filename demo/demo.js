function toggleAttribute(attr,id){
  var elm = document.getElementById(id);
  if(elm.hasAttribute(attr)){
    elm.removeAttribute(attr);
  }else{
    elm.setAttribute(attr,'');
  }
  displayHTML();
}

function setByRadio(attr){
  var elm = document.getElementById('demo');
  var radios = document.getElementsByName(attr);
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      elm.setAttribute(attr,radios[i].value);
      break;
    }
  }
  displayHTML();
}

function setItemByInput(attr,index,name){
  var item = document.getElementById('demo').children[index];
  var value = document.getElementsByName(name)[0].value;
  item.setAttribute(attr,value);
  displayHTML();
}

function displayHTML() {
  var demo = document.getElementById('demo');
  var display = document.getElementById('display');
  display.innerHTML = safe_tags_replace(demo.outerHTML);
  hljs.initHighlighting.called = false;
  hljs.initHighlighting();
}

var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"':'\"'
};

function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
}

function safe_tags_replace(str) {
    return str.replace(/[&<>]/g, replaceTag);
}

hljs.initHighlighting();

function addReverse(){
  var container = document.getElementById("demo");
  console.log('here');
  container.setAttribute('reverse','');
}

function toggleAttribute(attr,id){
  var elm = document.getElementById(id);
  if(elm.hasAttribute(attr)){
    elm.removeAttribute(attr);
  }else{
    elm.setAttribute(attr,'');
  }
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
}

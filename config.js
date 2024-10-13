const oa_name = "副业有了方向";
const oa_description = "副业人免费交流社区";
const web_beian = "蜀ICP备2024088058号";

function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
      element.innerText = newText;
  } else {
      console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description)
replaceText('web-beian', web_beian)

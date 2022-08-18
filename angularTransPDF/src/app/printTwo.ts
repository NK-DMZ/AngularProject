const html2canvas = (window as any).html2canvas;
import  JsPDF  from "jspdf";

export function exportPdf(
  dom: any,
  name: any,
  backgroundColor = '#f6f6f6',
  scale = 3.15
) {
  // window.getCanvas() //把svg的图表转成canvas
  return html2canvas(dom, {
    backgroundColor,
    width: dom.offsetWidth,
    height: dom.offsetHeight + 200,
    scale,
    useCORS: true,
  }).then(function (canvas:any) {
    let width = canvas.style && canvas.style.width,
      height = canvas.style && canvas.style.height;
    let contentWidth = width.replace(/px/, '');
    let contentHeight = height.replace(/px/, '');
    let context = canvas.getContext('2d');
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    let imageData = context.getImageData(0, 0, contentWidth, contentHeight);
    // 下面处理防止canvas转成img时 出现黑色背景，现在更改为白色背景
    for (let i = 0; i < imageData.data.length; i += 4) {
      // 当该像素是透明的，则设置成白色
      if (imageData.data[i + 3] === 0) {
        imageData.data[i] = 246;
        imageData.data[i + 1] = 246;
        imageData.data[i + 2] = 246;
        imageData.data[i + 3] = 246;
      }
    }
    context.putImageData(imageData, 0, 0);
    // 以上将html转成canvas完成,下面将canvas转成图片,由图片生成pdf
    var imgData = canvas.toDataURL('image/jpeg', 1.0); // 返回图片dataURL，参数：图片格式和清晰度(0-1)
    let img = new Image();
    img.src = imgData;
    img.onload = function () {
      let doc;
      if (contentWidth > contentHeight) {
        doc = new JsPDF('l', 'pt', [contentWidth, contentHeight]);
      } else {
        doc = new JsPDF('p', 'pt', [contentWidth, contentHeight]);
      }
      doc.addImage(imgData, 'jpeg', 0, 0, contentWidth, contentHeight);
      doc.save((name || new Date().getTime()) + '.pdf');
    };
  });
}

$(function () {
  $('body').append('<iframe></iframe>');
  const frameWindow = $('iframe')[0].contentWindow;
  frameWindow.document.body = frameWindow.document.createElement('body');
  $(frameWindow.document.body).append('<h1>Text created by JavaScript</h1>');
});

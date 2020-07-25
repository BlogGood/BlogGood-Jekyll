function w(v){
  document.write(v);
}
w("<!DOCTYPE html><html><head><meta charset='utf-8' /><title>哈哈，鼠标</title><style>");
w("html, body {")
w("padding: 0px;");
w("margin: 0px;");
w("}");
w("body {")
w("background-color: #cccccc;")
w("}")
w(".hand {-webkit-transform: translate3d(-50%, -50%, 0);-moz-transform: translate3d(-50%, -50%, 0);-ms-transform: translate3d(-50%, -50%, 0);-o-transform: translate3d(-50%, -50%, 0);transform: translate3d(-50%, -50%, 0);position: absolute;height: 444px;width: 344px;left: 50%;top: 50%;background-image: url("/img/flippers.png");}")

w("@media (max-width: 600px) {")
w("  .hand {")
w("    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.6);")
w("    -moz-transform: translate3d(-50%, -50%, 0) scale(0.6);")
w("    -ms-transform: translate3d(-50%, -50%, 0) scale(0.6);")
w("    -o-transform: translate3d(-50%, -50%, 0) scale(0.6);")
w("    transform: translate3d(-50%, -50%, 0) scale(0.6);")
w("  }")
w("}</style><body>")
w("<div class="hand"></div><script src='js/flip-the-bird.js'></script><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-56795519-1', 'auto');ga('send', 'pageview');</script></body></html>")

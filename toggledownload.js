function toggledl(){

      var cururl = window.location.href;

      var dl = document.createElement('a');

      dl.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.mazhan.android_fundfriend' ;

      dl.className =  'dl' ;

      dl.style.cssText = "display: none;height: 52px;width: 100%;position: fixed;top: 0;left: 0;background: url('dl.png') 50% 50% no-repeat;background-size: 100% 100%;";

      document.body.insertBefore(dl,document.body.childNodes[0]) ;

      if ( cururl.indexOf('share=1') !== -1 ) {
        

        dl.style.display = 'block';
        
        document.body.style.position = 'relative';

        document.body.style.top = dl.clientHeight + 'px';

      }
    }

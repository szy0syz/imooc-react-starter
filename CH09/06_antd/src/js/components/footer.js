import React from 'react';
import { inspect } from 'util'
var footerCss = require('../../css/footer.css');

export default class ComponentFooter extends React.Component {
  render() {
    console.log(inspect(footerCss));
    // 感谢webpack为我们打包成这德行
    // { miniFooter: 'footer__miniFooter___2W_7G' }
    return (
      <footer class={footerCss.miniFooter}>
        <h1>这里是页脚，放网站主要信息等。</h1>
      </footer>
    )
  }
}
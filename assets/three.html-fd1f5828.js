import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as i,a as e,b as n,d as a,f as o}from"./app-ce0b07a4.js";const c={},p=e("h1",{id:"vuepress2插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress2插件","aria-hidden":"true"},"#"),n(" vuepress2插件")],-1),d=e("h2",{id:"评论插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#评论插件","aria-hidden":"true"},"#"),n(" 评论插件")],-1),u={href:"https://plugin-comment2.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),v=e("br",null,null,-1),m=e("strong",null,"注意：",-1),k=e("code",null,"VuePress Theme Hope",-1),_=o(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vuepress-plugin-comment2 -d --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项配置" tabindex="-1"><a class="header-anchor" href="#选项配置" aria-hidden="true">#</a> 选项配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-comment2&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">&quot;Artalk&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Artalk | Giscus | Waline | Twikoo</span>

      <span class="token comment">// 在这里放置其他选项</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数解释" tabindex="-1"><a class="header-anchor" href="#参数解释" aria-hidden="true">#</a> 参数解释</h3><ul><li><strong>provider</strong> 有四种参数，分别为 Artalk | Giscus | Waline | Twikoo <br><code>Giscus</code> 是针对于程序员开发者使用，评论留言需要登录 github<br><code>Waline</code> 是针对于大众用户，适合所有人。<br></li></ul><h3 id="waline-配置" tabindex="-1"><a class="header-anchor" href="#waline-配置" aria-hidden="true">#</a> Waline 配置</h3><h4 id="leancloud-设置-数据库" tabindex="-1"><a class="header-anchor" href="#leancloud-设置-数据库" aria-hidden="true">#</a> LeanCloud 设置 (数据库)</h4>`,8),b={href:"https://console.leancloud.app/login",target:"_blank",rel:"noopener noreferrer"},g={href:"https://console.leancloud.app/register",target:"_blank",rel:"noopener noreferrer"},f={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[e("p",null,"进行邮箱等认证")],-1),y={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[e("p",null,[n("进入应用后，选择 "),e("code",null,"凭证"),n(" ，保存 "),e("code",null,"APP ID"),n(","),e("code",null,"APP Key"),n(" 和 "),e("code",null,"Master Key")])],-1),w={href:"https://leancloud.app/",target:"_blank",rel:"noopener noreferrer"},P=e("h3",{id:"vercel-部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vercel-部署","aria-hidden":"true"},"#"),n(" Vercel 部署")],-1),E={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample",target:"_blank",rel:"noopener noreferrer"},L=o("<li><p>进入后，先进行注册登录，或者使用 <strong>github</strong>快捷登录。</p></li><li><p>输入一个你喜欢的 <code>Vercel</code> 项目名称并点击 <code>Create</code> 继续</p></li><li><p>此时 <code>Vercel</code> 会基于 <code>Waline</code> 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名</p></li><li><p>一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 <code>Go to Dashboard</code> 可以跳转到应用的控制台</p></li><li><p>点击顶部的<code>Settings - Environment Variables</code>进入环境变量配置页，并配置三个环境变量 <code>LEAN_ID</code>, <code>LEAN_KEY</code> 和 <code>LEAN_MASTER_KEY</code>,它们的值分别对应上一步在 LeanCloud 中获得的 <code>APP ID</code>, <code>APP KEY</code>, <code>Master Key</code>。</p></li><li><p>此时会跳转到 Overview 界面开始部署，等待片刻后 STATUS 会变成 <code>Ready</code>。此时请点击 <code>Visit</code> ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。</p></li>",6),V=o(`<h3 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件" aria-hidden="true">#</a> 使用插件</h3><p>在插件选项中设置 <code>provider: &quot;Waline&quot;</code>，同时设置服务端地址 <code>serverURL</code> 为上一步获取到的值<br> 配置如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">&quot;Waline&quot;</span><span class="token punctuation">,</span> <span class="token comment">//评论服务提供者。</span>
      <span class="token literal-property property">serverURL</span><span class="token operator">:</span><span class="token string">&#39;https://kolento-xxxxxxx.vercel.app/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，将<code>&lt;CommentService&gt;</code>组件放置在你网站中合适的位置 (通常是页面的底部)，即可使用 Waline 评论功能<br> 如果已经使用了hope 主题 ，就不需要再防止这个标签了。</p><h3 id="评论管理" tabindex="-1"><a class="header-anchor" href="#评论管理" aria-hidden="true">#</a> 评论管理</h3><ol><li>部署完成后，请访问 <code>&lt;serverURL&gt;/ui/register</code> 进行注册。首个注册的人会被设定成管理员。<br></li><li>管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。<br></li><li>用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。<br></li></ol>`,6);function j(q,W){const s=l("ExternalLinkIcon");return r(),i("div",null,[p,d,e("p",null,[e("a",u,[n("vuepress-plugin-comment2"),a(s)]),h,n(" 可以用于vuepress2 的一款评论留言插件。"),v,m,n(" 该插件在vuepress默认主题下，打包的时候会报错，推荐在使用"),k,n("主题的时候使用。")]),_,e("ol",null,[e("li",null,[e("p",null,[e("a",b,[n("登录"),a(s)]),n(" 或 "),e("a",g,[n("注册"),a(s)]),n(" LeanCloud 国际版 并进入 "),e("a",f,[n("控制台"),a(s)])])]),x,e("li",null,[e("p",null,[n("点击左上角 "),e("a",y,[n("创建应用"),a(s)]),n(" 并起一个你喜欢的名字")])]),A,e("li",null,[e("p",null,[n("这里推荐使用 "),e("a",w,[n("国际版"),a(s)]),n(",因为默认的国内版需要备案。")])])]),P,e("ol",null,[e("li",null,[e("p",null,[n("点击这个连接 "),e("a",E,[n("服务部署"),a(s)])])]),L]),V])}const T=t(c,[["render",j],["__file","three.html.vue"]]);export{T as default};

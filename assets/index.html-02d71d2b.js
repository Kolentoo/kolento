import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,d as l,f as i}from"./app-2b014c71.js";const r={},c=n("h1",{id:"vuepress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),s(" VuePress")],-1),u=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d={href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k=n("br",null,null,-1),m=n("br",null,null,-1),b=n("br",null,null,-1),g=i(`<h4 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h4><blockquote><p>本文档使用v1.x版本<br><strong>前提条件</strong><br><strong>v1.x版本的 VuePress 需要 Node.js (opens new window)&gt;= 8.6</strong><br> v2.x的版本目前还不稳定</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>1.创建并进入一个新目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir vuepress-starter
d vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.进行配置文件初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.安装VuePress本地依赖<br> 目前已经不推荐进行全局安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -D vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.创建第一篇文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir docs
echo &#39;# Hello VuePress&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5.配置<code>package.json</code>文件</p><ul><li>配置运行命令和打包命令</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>处理node17/18版本中 运行和打包的报错问题<br> 在命令前添加对应的配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vuepress build docs&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.启动服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong><br> 一些文档的配置，例如<code>.vuepress/config.js</code>文件中的配置，和侧边栏的显示都需要重新运行服务才能看到修改。</p><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：<br></p><ul><li>所有的静态文件需要存放在<code>public</code>文件夹下<br></li><li><code>styles</code>下的样式文件都采用<code>stylus</code>的写法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><p>通过新建配置文件来控制 <code>vuepress</code> 网站的显示和设置<br> 1.首先在docs下新建一个<code>.vuepress</code>文件夹<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.然后在<code>.vuepress</code>文件夹下新建<code>config.js</code><br> 在这个配置文件中对网站的信息内容进行配置，内容包含 导航栏、侧边栏、图标、图片等功能。<br> 以下是一个简单的案例<br></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;K o l e n t o&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;前端工程师&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 注入到当前页面的 HTML &lt;head&gt; 中的标签</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 增加一个自定义的 favicon(网页标签的图标)</span>
    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/kolento.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span> 
  <span class="token comment">// 这是部署到github相关的配置 打包的时候用这个配置,和你的github仓库相关</span>
  <span class="token comment">// base: &#39;/kolento2023/&#39;, </span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//开发环境</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 代码块显示行号</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span><span class="token string">&#39;/kolento.png&#39;</span><span class="token punctuation">,</span> <span class="token comment">//首页的logo</span>
    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// e&#39;b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文档更新时间：每个文件git最后提交的时间</span>
    <span class="token comment">// 顶部导航栏</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;学习笔记&#39;</span><span class="token punctuation">,</span> 
          <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue3&#39;</span><span class="token punctuation">,</span>  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Vue3/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;TypeScript&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/typescript/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/VuePress/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;个人简历&#39;</span><span class="token punctuation">,</span> 
          <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;简历信息&#39;</span><span class="token punctuation">,</span>  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/aboutme/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;项目经验&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/projects/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//侧边栏的控制</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/typescript/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>     <span class="token comment">/* /foo/ */</span>
        <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span>  <span class="token comment">/* /foo/one.html */</span>
        <span class="token string">&#39;two&#39;</span>   <span class="token comment">/* /foo/two.html */</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/vue3/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>      <span class="token comment">/* /bar/ */</span>
        <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* /bar/one.html */</span>
        <span class="token string">&#39;two&#39;</span>   <span class="token comment">/* /bar/two.html */</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>1.新建github仓库<br> 2.修改 <code>config.js</code> 配置文件中的<code>base</code>字段配置,改成github的仓库名<br> 3.通过命令打包<br> 4.上传到github仓库<br> 5.通过github上的设置，发布成网页。<br></p>`,30);function h(y,x){const a=t("ExternalLinkIcon");return p(),o("div",null,[c,u,n("p",null,[n("a",d,[s("VuePress官方文档地址"),l(a)]),v,s(" 由 Vue 驱动的,极简的静态网站生成器。"),k,s(" 一个 VuePress 网站是一个由 Vue、Vue Router和 webpack驱动的单页应用。"),m,s(" 本篇文章仅记录比较常用的内容，更多内容请阅读官网文档。"),b]),g])}const q=e(r,[["render",h],["__file","index.html.vue"]]);export{q as default};

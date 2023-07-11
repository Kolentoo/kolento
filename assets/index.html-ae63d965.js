import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as l,a as e,b as s,d as t,f as r}from"./app-bd19c109.js";const o={},c=e("h1",{id:"vuepress2-x",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress2-x","aria-hidden":"true"},"#"),s(" VuePress2.x")],-1),u=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),p={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),b=e("code",null,"VuePress v2",-1),m=e("br",null,null,-1),h=e("br",null,null,-1),g=r(`<h4 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h4><blockquote><p>本文档使用v2.0.0-beat63 版本<br><strong>前提条件</strong><br><strong>Node.js&gt;= 16.9.0+</strong><br></p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>步骤 1: 创建并进入一个新目录</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir vuepress
cd vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>步骤 2: 初始化项目</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>步骤 3: 将 VuePress 安装为本地依赖</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>步骤 4: 在 package.json 中添加一些 <code>scripts</code><br><strong>这里配置了dev和build命令用于版本较高的node环境下启动和打包报错的问题</strong></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;blog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build blog&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot; vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;set&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>步骤 5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中<br> 忽略不需要提交的文件。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;node_modules&#39; &gt;&gt; .gitignore
echo &#39;.temp&#39; &gt;&gt; .gitignore
echo &#39;.cache&#39; &gt;&gt; .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>步骤 6: 创建你的第一篇文档</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir docs
echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>步骤 7: 在本地启动服务器来开发你的文档网站</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2><h3 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h3><p>首先在你的文档目录下创建一个 <code>.vuepress</code> 目录，所有 VuePress 相关的文件都将会被放在这里。<br><strong>项目文件结构</strong><br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 <code>TypeScript</code> 配置文件<br> 一个基础的配置文件是这样的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;你好， VuePress ！&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;这是我的第一个 VuePress 站点&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导航栏配置" tabindex="-1"><a class="header-anchor" href="#导航栏配置" aria-hidden="true">#</a> 导航栏配置</h3><ul><li>使用navbar进行配置，字段和1.x版本有所不同</li><li>sidebarDepth为左侧的侧边栏显示分级</li><li>hopeTheme为vuepress的主题，也可以使用默认主题，非默认主题使用前需要安装。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  import { hopeTheme } from &quot;vuepress-theme-hope&quot;;
  theme: hopeTheme({
    logo:&#39;/kolento.png&#39;,
    sidebarDepth: 2, // e&#39;b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: &#39;Last Updated&#39;, // 文档更新时间：每个文件git最后提交的时间
    navbar: [
      { text: &#39;首页&#39;, link: &#39;/&#39; },
      { text: &#39;文章记录&#39;, 
        children: [
            { text: &#39;JS常用API&#39;,  link: &#39;/articleJS/&#39; },
            { text: &#39;项目搭建笔记&#39; , link:&#39;/articleProjectNote/&#39;}
        ]
      },
    ],


  }),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侧边栏配置" tabindex="-1"><a class="header-anchor" href="#侧边栏配置" aria-hidden="true">#</a> 侧边栏配置</h3><p>在上面<code>theme</code>的配置下，添加<code>sidebar</code>配置即可，格式如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    sidebar: {
      &#39;/typescript/&#39;: [
        &#39;&#39;,     /* /foo/ */
        &#39;one&#39;,  /* /foo/one.html */
        &#39;two&#39;   /* /foo/two.html */
      ],
      &#39;/comments/&#39;: [
        &#39;&#39;,      /* /bar/ */
        &#39;summer&#39;, /* /bar/summer.html */
        &#39;reset&#39;   /* /bar/reset.html */
      ],
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h2><p>同样放在<code>.vuepress</code>文件夹中<br> 客户端的配置文件，可以用来手动写js来控制项目。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   &lt;--- 客户端配置文件
│  │  └─ config.js   &lt;--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2><p>由于vuepress采用约定大于配置的方法，只要将静态资源放在<code>.vuepress/public</code>文件夹下即可。<br></p><ul><li>样式文件可以在<code>public</code>文件夹下新建 <code>/styles/index.css</code>文件就可以直接引用到,不需要再配置文件的<code>head</code>中配置了。</li><li>图片文件也可以时间存在于<code>public</code>文件夹下</li></ul><h2 id="首页基本配置" tabindex="-1"><a class="header-anchor" href="#首页基本配置" aria-hidden="true">#</a> 首页基本配置</h2><p>2.x版本的首页基本配置和1.x版本有些区别，以下是我的主页配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
home: true
heroImage: /logo.png
heroText: K o l e n t o
tagline: 让 美 好 触 手 可 及
actions:
    - text: 我的笔记 →
      link: /vue3
      type: primary
features:
- title: 学习笔记
  details: 关于Vue、VuePress、JS、TS、Node、React、小程序等学习笔记记录。
- title: 个人简历
  details: 内容包含我的技术栈、工作经验和项目经验、以及一些以自己兴趣为导向项目。
- title: 兴趣爱好
  details: 记录生活中的兴趣爱好、旅行日志、生活点滴、游戏动漫、自媒体短视频。
footer: Kolento | 始于2023
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署github" tabindex="-1"><a class="header-anchor" href="#部署github" aria-hidden="true">#</a> 部署github</h2><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3><ol><li>修改<code>config.js</code>中的配置，将<code>base</code>字段改成自己在github上的仓库名<br> 如果我的仓库是 kolento 那就使用如下的配置即可<br></li><li>项目打包将输出的文件<code>dist</code>下生成的文件，推送到<code>github</code>对应的仓库中<br></li><li>在仓库中的设置里，开启访问<br></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/kolento/&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="github上的操作" tabindex="-1"><a class="header-anchor" href="#github上的操作" aria-hidden="true">#</a> github上的操作</h4><p><code>setting</code>→<code>pages</code>→选择分支后保存</p><ul><li>这里github的部署需要几分钟，等待一会儿后，刷新页面点击<code>visit site</code>就能进入你的网站了。</li><li>部署后的地址https://kolentoo.github.io/{你的仓库名}/</li></ul>`,45);function x(k,f){const n=i("ExternalLinkIcon");return d(),l("div",null,[c,u,e("p",null,[e("a",p,[s("VuePress2.x官方文档地址"),t(n)]),v,b,s(" 目前仍处于 beta 阶段，各个版本之间更新后 API 的变动可能会比较大。"),m,s(" 本篇文章仅记录比较常用的内容，更多内容请阅读官网文档。"),h]),g])}const y=a(o,[["render",x],["__file","index.html.vue"]]);export{y as default};

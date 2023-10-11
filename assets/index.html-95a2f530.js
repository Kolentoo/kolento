import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as p,a as n,b as s,d as a,e as r,f as l}from"./app-8bb6b4cf.js";const c={},u=n("h1",{id:"vue3-开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3-开始","aria-hidden":"true"},"#"),s(" Vue3 开始")],-1),d=n("h2",{id:"官方地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#官方地址","aria-hidden":"true"},"#"),s(" 官方地址")],-1),v={href:"https://cn.vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),h={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),m={href:"https://cn.vuejs.org/guide/typescript/overview.html",target:"_blank",rel:"noopener noreferrer"},q=l(`<ul><li>Vue3兼容Vue2的语法<br></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><blockquote><p><strong>前提条件</strong> <br> 已安装 16.0 或更高版本的 Node.js<br></p></blockquote><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> VITE</h3><p>是一个web开发构建工具，由于其原生ES模块导入方式，可以实现闪电般的冷服务器启动。比CLI脚手架的方式，少很多配置文件和依赖，速度更快。<br> 创建的项目将使用基于 Vite 的构建设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// 安装命令
npm init vue@latest
cd init
npm install
npm run dev
// 打包命令
npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此命令会在 <strong>./dist</strong> 文件夹中为你的应用创建一个生产环境的构建版本。</p><h4 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h4><p>我这里安装的版本是 <code>vue3.3.4</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;init&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.3.9&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置推荐" tabindex="-1"><a class="header-anchor" href="#配置推荐" aria-hidden="true">#</a> 配置推荐</h4><ul><li>推荐的配置是 <code>Visual Studio Code + Volar</code> 扩展。</li></ul>`,12);function _(g,f){const e=o("ExternalLinkIcon");return i(),p("div",null,[u,d,n("p",null,[n("a",v,[s("vue3官方文档"),a(e)]),s(),k,n("a",h,[s("vite官方文档"),a(e)]),s(),b,n("a",m,[s("typeScript使用指南"),a(e)])]),q,r(" <CommentService /> ")])}const V=t(c,[["render",_],["__file","index.html.vue"]]);export{V as default};

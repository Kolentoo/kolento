import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as r,a as e,b as n,d as i,f as p}from"./app-f4b77c86.js";const c={},l=e("h1",{id:"vuepress2主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress2主题","aria-hidden":"true"},"#"),n(" vuepress2主题")],-1),d={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},u=p(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>主题包含了右侧的侧边栏、评论留言功能和一些常用的插件</li><li>主题不仅在默认主题的基础上大幅提高美观性</li><li>同时搭配各种插件，在各种细节与功能上为 VuePress 提供全方位的增强</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>也可以使用<code>pnpm</code>和<code>yarn</code>进行安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vuepress-theme-hope --save -dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>直接在 <code>config.js</code> 文件里引入后进行配置即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 此处放置主题配置</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> <br></p><ul><li>在使用此主题后，页面中的一些样式和节点都会变化，比如className id等。</li></ul>`,10);function h(m,v){const s=t("ExternalLinkIcon");return o(),r("div",null,[l,e("p",null,[n("推荐使用主题"),e("a",d,[n("VuePress Theme Hope"),i(s)])]),u])}const b=a(c,[["render",h],["__file","one.html.vue"]]);export{b as default};

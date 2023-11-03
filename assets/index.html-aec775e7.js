import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as l,a as n,b as s,d as c,f as a}from"./app-d5ebc045.js";const o={},u=a(`<h1 id="油猴脚本开发" tabindex="-1"><a class="header-anchor" href="#油猴脚本开发" aria-hidden="true">#</a> 油猴脚本开发</h1><h2 id="初始化配置" tabindex="-1"><a class="header-anchor" href="#初始化配置" aria-hidden="true">#</a> 初始化配置</h2><h4 id="主要配置" tabindex="-1"><a class="header-anchor" href="#主要配置" aria-hidden="true">#</a> 主要配置</h4><ul><li><strong>@name</strong>：用于设置脚本的名称</li><li><strong>@description</strong>：用于设置脚本的描述</li><li><strong>@author</strong>：用于设置作者信息</li><li><strong>@match</strong>：用于设置匹配的网站，这个最重要</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         抖音直播点赞</span>
<span class="token comment">// @namespace    http://tampermonkey.net/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  这是一个基于抖音直播的自动点赞脚本</span>
<span class="token comment">// @author       Kolento</span>
<span class="token comment">// @match        https://www.baidu.com/*</span>
<span class="token comment">// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">//这里是匹配到合适的网站后，开启脚本后，运行的代码</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;11111&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Your code here...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加样式" tabindex="-1"><a class="header-anchor" href="#添加样式" aria-hidden="true">#</a> 添加样式</h2><h4 id="样式同样写在js里" tabindex="-1"><a class="header-anchor" href="#样式同样写在js里" aria-hidden="true">#</a> 样式同样写在js里</h4><p>通过 <strong>addGlobalStyle</strong> 方法调用插入css</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">addGlobalStyle</span><span class="token punctuation">(</span><span class="token parameter">css</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> head<span class="token punctuation">,</span> style<span class="token punctuation">;</span>
        head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        style <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        style<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;text/css&#39;</span><span class="token punctuation">;</span>
        style<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> css<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">addGlobalStyle</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.kolento {
            content: &#39;&#39;;
            font-size: 14px;
            position: fixed;
            top: 70px;right: 30px;
            z-index: 500;
            cursor: pointer;
            background: #3eaf7c;
            border-radius: 50%;
            color: #fff;
            display: block;
            width: 46px;height: 46px;
            line-height: 16px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all ease 0.3s;

        }
        .kolento:hover {
            background-color: #4abf8a;
            transform: rotate(360deg)
        }

        </span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本发布" tabindex="-1"><a class="header-anchor" href="#脚本发布" aria-hidden="true">#</a> 脚本发布</h2>`,10),d={href:"https://greasyfork.org/zh-CN/users/1074158-kolento",target:"_blank",rel:"noopener noreferrer"},r=n("br",null,null,-1),v=n("li",null,[s("点击控制台-发布你编写的脚本 "),n("br")],-1),k=n("li",null,[s("复制黏贴进去全部代码 "),n("br")],-1),m=n("li",null,[s("移动到页面底部 点击发布即可"),n("br")],-1),b=a(`<h2 id="点赞脚本" tabindex="-1"><a class="header-anchor" href="#点赞脚本" aria-hidden="true">#</a> 点赞脚本</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         抖音直播点赞</span>
<span class="token comment">// @namespace    http://tampermonkey.net/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  这是一个基于抖音直播的自动点赞脚本</span>
<span class="token comment">// @author       Kolento</span>
<span class="token comment">// @match        *://live.douyin.com/*</span>
<span class="token comment">// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> page <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>page<span class="token punctuation">)</span>
        <span class="token keyword">let</span> kolento <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kolento<span class="token punctuation">.</span>className<span class="token operator">=</span><span class="token string">&quot;kolento&quot;</span><span class="token punctuation">;</span>
        kolento<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">&#39;开始&lt;br/&gt;点赞&#39;</span>
        page<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>kolento<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> total <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        total<span class="token punctuation">.</span>className<span class="token operator">=</span><span class="token string">&quot;total&quot;</span><span class="token punctuation">;</span>
        total<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">&#39;&lt;p class=&quot;text&quot;&gt;点赞数：&lt;/p&gt;&lt;p class=&quot;kolento-all&quot;&gt;0&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
        page<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">var</span> timeBox<span class="token punctuation">;</span>
        <span class="token keyword">let</span> totalNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> num <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;kolento-all&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        num<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>totalNum<span class="token punctuation">;</span>

        <span class="token keyword">let</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;.Zs4Pv2bD&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>


        kolento<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>kolento<span class="token punctuation">.</span>innerHTML<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;开始&#39;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 执行点赞脚本</span>
                sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行点赞脚本&#39;</span><span class="token punctuation">)</span>
                kolento<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">&#39;停止&lt;br/&gt;点赞&#39;</span>


                timeBox <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                    totalNum<span class="token operator">++</span><span class="token punctuation">;</span>
                    num<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>totalNum<span class="token punctuation">;</span>
                    target<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span>

            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;停止点赞&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">clearInterval</span><span class="token punctuation">(</span>timeBox<span class="token punctuation">)</span><span class="token punctuation">;</span>
                kolento<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token string">&#39;开始&lt;br/&gt;点赞&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">addGlobalStyle</span><span class="token punctuation">(</span><span class="token parameter">css</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> head<span class="token punctuation">,</span> style<span class="token punctuation">;</span>
            head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
            style <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            style<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;text/css&#39;</span><span class="token punctuation">;</span>
            style<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> css<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">addGlobalStyle</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.kolento {
                content: &#39;&#39;;
                font-size: 14px;
                position: fixed;
                top: 70px;right: 30px;
                z-index: 500;
                cursor: pointer;
                background: #3eaf7c;
                border-radius: 50%;
                color: #fff;
                display: block;
                width: 46px;height: 46px;
                line-height: 16px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all ease 0.3s;

            }
            .kolento:hover {
                background-color: #4abf8a;
                transform: rotate(360deg)
            }

            .total {
                font-size: 14px;
                position: fixed;
                top: 79px;
                right: 85px;
                z-index: 500;
                background: #3eaf7c;
                color: #fff;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all ease 0.3s;
                padding: 5px 8px;
                border-radius: 20px;

            }
            .total p {
                color:#fff;
            }

            </span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>







<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(h,f){const e=i("ExternalLinkIcon");return p(),l("div",null,[u,n("ol",null,[n("li",null,[s("登录"),n("a",d,[s("油猴网站"),c(e)]),s(),r]),v,k,m]),b])}const A=t(o,[["render",g],["__file","index.html.vue"]]);export{A as default};

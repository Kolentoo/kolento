import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,a as p,f as n}from"./app-8bb6b4cf.js";const c={},l=n(`<h1 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h1><p>这里只记录几种常用的内置组件。</p><h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h2><p>这是一个内置组件，使用不需要注册。<br> 该组件可以用于控制组件显示和隐藏的过渡动画。<br><code>&lt;Transition&gt;</code> 会在一个元素或组件进入和离开 DOM 时应用动画。<br> 以下几种情况可以触发这个组件的效果：<br></p><ul><li>由 v-if 所触发的切换</li><li>由 v-show 所触发的切换</li><li>由特殊元素 <code>&lt;component&gt;</code> 切换的动态组件</li><li>改变特殊的 key 属性</li></ul><h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = !show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 下面我们会解释这些 class 是做什么的 */</span>
<span class="token selector">.v-enter-active,
.v-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.5s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.v-enter-from,
.v-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css过渡步骤" tabindex="-1"><a class="header-anchor" href="#css过渡步骤" aria-hidden="true">#</a> css过渡步骤</h3><h4 id="css-过渡-class" tabindex="-1"><a class="header-anchor" href="#css-过渡-class" aria-hidden="true">#</a> CSS 过渡 class</h4><p>一共有 6 个应用于进入与离开过渡效果的 CSS class。</p>`,11),o=["_src","src"],i=n(`<table><thead><tr><th>class名</th><th>触发时间/时机</th></tr></thead><tbody><tr><td><strong>v-enter-from</strong></td><td>进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。</td></tr><tr><td><strong>v-enter-active</strong></td><td>进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。</td></tr><tr><td><strong>v-enter-to</strong></td><td>进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 v-enter-from 被移除的同时)，在过渡或动画完成之后移除。</td></tr><tr><td><strong>v-leave-from</strong></td><td>离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。</td></tr><tr><td><strong>v-leave-active</strong></td><td>离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。</td></tr><tr><td><strong>v-leave-to</strong></td><td>离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 v-leave-from 被移除的同时)，在过渡或动画完成之后移除。</td></tr></tbody></table><h4 id="为过渡效果命名" tabindex="-1"><a class="header-anchor" href="#为过渡效果命名" aria-hidden="true">#</a> 为过渡效果命名</h4><p>我们可以给 <code>&lt;Transition&gt;</code> 组件传一个 name prop 来声明一个过渡效果名</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一个有名字的过渡效果,被应用的 <code>class</code> 将会是 <code>fade-enter-active</code> 而不是 <code>v-enter-active</code>。<br> 这个“fade”过渡的 class 应该是这样:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.fade-enter-active,
.fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.5s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-enter-from,
.fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keepalive" tabindex="-1"><a class="header-anchor" href="#keepalive" aria-hidden="true">#</a> KeepAlive</h2><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><p><code>&lt;KeepAlive&gt; </code>是一个内置组件，它的功能是在多个组件间动态切换时，之前的状态可以被保存。</p><ul><li>当组件A的状态改变后，通常情况下切换到组件B，再切换回组件A，A的状态不会保留。</li><li>当使用<code>keep-alive</code>，切换回A组件时，可以保留先前的状态。</li><li>使用时将 <code>keep-alive</code> 包裹在组件外即可</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>KeepAlive</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeComponent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>KeepAlive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最大缓存实例数" tabindex="-1"><a class="header-anchor" href="#最大缓存实例数" aria-hidden="true">#</a> 最大缓存实例数</h3><p>可以通过传入 <code>max prop</code> 来限制可被缓存的最大组件实例数。<br> 如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>KeepAlive</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeComponent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>KeepAlive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function u(a,d){return t(),e("div",null,[l,p("img",{_src:a.$withBase("/vue3/transition.jpg"),src:a.$withBase("/loading.jpg"),class:"big"},null,8,o),i])}const k=s(c,[["render",u],["__file","four.html.vue"]]);export{k as default};

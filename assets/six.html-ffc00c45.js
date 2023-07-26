import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-691e9873.js";const p={},e=t(`<h1 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制" aria-hidden="true">#</a> 权限控制</h1><p>权限控制主要分为 两部分。</p><ul><li>左侧菜单栏权限控制</li><li>全局页面的各种按钮权限控制</li></ul><p>这里主要讲使用 自定义指令 进行后台管理系统的权限控制。</p><h2 id="v-auth自定义指令" tabindex="-1"><a class="header-anchor" href="#v-auth自定义指令" aria-hidden="true">#</a> v-auth自定义指令</h2><p>可以注册局部自定义指令 或者 全局自定义指令。<br> 局部自定义指令只能在当前的vue文件中使用，全局指令可以在所有vue文件中使用。<br></p><p><strong>指令可以单独写一个文件引入在main.js，也可以直接在main.js中写</strong></p><h3 id="指令的创建和使用" tabindex="-1"><a class="header-anchor" href="#指令的创建和使用" aria-hidden="true">#</a> 指令的创建和使用</h3><h4 id="参数解释" tabindex="-1"><a class="header-anchor" href="#参数解释" aria-hidden="true">#</a> 参数解释</h4><ul><li><strong>el：</strong> 指令所绑定的元素，可以用来直接操作 DOM</li><li><strong>binding：</strong> 一个对象，包含很多属性，具体看如下列表</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token template-punctuation string">\`</span></span>：指令名，不包括 v<span class="token operator">-</span> 前缀。
 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">value</span><span class="token template-punctuation string">\`</span></span>：指令的绑定值，例如：v<span class="token operator">-</span>my<span class="token operator">-</span>directive<span class="token operator">=</span><span class="token string">&quot;1 + 1&quot;</span> 中，绑定值为 <span class="token number">2</span>。
 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">oldValue</span><span class="token template-punctuation string">\`</span></span>：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">expression</span><span class="token template-punctuation string">\`</span></span>：字符串形式的指令表达式。例如 v<span class="token operator">-</span>my<span class="token operator">-</span>directive<span class="token operator">=</span><span class="token string">&quot;1 + 1&quot;</span> 中，表达式为 <span class="token string">&quot;1 + 1&quot;</span>。
 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">arg</span><span class="token template-punctuation string">\`</span></span>：传给指令的参数，可选。例如 v<span class="token operator">-</span>my<span class="token operator">-</span>directive<span class="token operator">:</span>xx中，参数为 <span class="token string">&quot;xx&quot;</span>。
 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">modifiers</span><span class="token template-punctuation string">\`</span></span>：一个包含修饰符的对象。例如：v<span class="token operator">-</span>my<span class="token operator">-</span>directive<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar 中，修饰符对象为 <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vnode</span><span class="token template-punctuation string">\`</span></span>：Vue 编译生成的虚拟节点
 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">oldVnode</span><span class="token template-punctuation string">\`</span></span>：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>main.js</strong><br></p><ul><li><strong>authBox</strong>为从<strong>session</strong>中取到的权限列表<br></li><li><strong>auth</strong>为权限的自定义指令 使用为 v-auth<br></li><li><strong>binding.value</strong>为使用自定义指令中配置的值<br></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局自定义指令</span>
<span class="token keyword">let</span> sessionStr <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sessionData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>sessionStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> authBox <span class="token operator">=</span> sessionData<span class="token punctuation">.</span>authBox<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;authBox&#39;</span><span class="token punctuation">,</span>authBox<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;auth&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;el&#39;</span><span class="token punctuation">,</span>el<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;binding&#39;</span><span class="token punctuation">,</span>binding<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;vnode&#39;</span><span class="token punctuation">,</span>vnode<span class="token punctuation">)</span>
        
        <span class="token comment">// 这里用来写指令的逻辑</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>authBox<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>home.vue</strong></p><ul><li>这里需要注意的是，需要在v-auth中再添加一个单引号放入字符串。</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    首页
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>home&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>有权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>hello&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>没有权限<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义指令生命周期" tabindex="-1"><a class="header-anchor" href="#自定义指令生命周期" aria-hidden="true">#</a> 自定义指令生命周期</h3><p><strong>平时用的到不多，了解即可</strong></p><table><thead><tr><th>生命周期</th><th>解释/触发时间</th></tr></thead><tbody><tr><td>created</td><td>在绑定元素的 attribute 或事件监听器被应用之前调用</td></tr><tr><td>beforeMount</td><td>当指令第一次绑定到元素并且在挂载父组件之前调用</td></tr><tr><td>mounted</td><td>在绑定元素的父组件被挂载后调用</td></tr><tr><td>beforeUpdate</td><td>在更新包含组件的 VNode 之前调用</td></tr><tr><td>updated</td><td>在包含组件的 VNode 及其子组件的 VNode 更新后调用</td></tr><tr><td>beforeUnmount</td><td>在卸载绑定元素的父组件之前调用</td></tr><tr><td>unmounted</td><td>在卸载绑定元素的父组件之前调用，只调用一次</td></tr></tbody></table>`,20),o=[e];function l(c,i){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","six.html.vue"]]);export{d as default};

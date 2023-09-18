import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-2b014c71.js";const e={},p=t(`<h1 id="vue3-笔记" tabindex="-1"><a class="header-anchor" href="#vue3-笔记" aria-hidden="true">#</a> Vue3 笔记</h1><h2 id="响应式渲染" tabindex="-1"><a class="header-anchor" href="#响应式渲染" aria-hidden="true">#</a> 响应式渲染</h2><h3 id="ref与reactive的区别" tabindex="-1"><a class="header-anchor" href="#ref与reactive的区别" aria-hidden="true">#</a> ref与reactive的区别</h3><p><strong>ref</strong>:函数参数可以是基本数据类型，也可以接受对象类型，需要添加<code>.value</code>属性来渲染，也可以用于声明复杂对象，内部会通过<code>reactive</code>转为代理对象。</p><p><strong>reactive</strong>: 它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 <code>string、number 或 boolean</code> 这样的原始类型。</p><ol><li><p><strong>数据类型不同：</strong><code>ref</code>用于包装 JavaScript 基本类型的数据（如字符串、数字、布尔值等），而reactive可以用于包装JavaScript对象和数组等复杂类型的数据。</p></li><li><p><strong>使用方式不同：</strong><code>ref</code>需要通过在模板中使用<code>ref</code>指令以及在 JavaScript 代码中使用ref函数进行创建和使用，而<code>reactive</code>则需要通过调用 Vue.js 提供的<code>reactive</code>函数进行包装和创建。</p></li><li><p>**访问方式不同：**对于通过<code>ref</code>函数创建的响应式数据，我们可以通过.value属性来访问其实际值；而对于通过<code>reactive</code>函数创建的响应式对象，我们可以直接访问其属性或调用其方法。</p></li><li><p>**设计理念不同：**ref主要是为了解决单一元素/数据的响应式问题（<strong>ref通过Object.defineProperty()的get和set实现数据代理</strong>），而<code>reactive</code>则是为了解决JavaScript对象和数组等复杂数据结构的响应式问题，他的响应式更加深层次。（<strong>reactive使用Proxy实现数据代理，并且通过Reflect操作源对象内部的数据</strong>）。</p></li><li><p>如果想通过 <code>reactive</code> 来完成对某单个元素的响应式，需要通过 <code>toRefs</code> 进行转换。</p></li></ol><p>总的来说，<code>ref</code>和<code>reactive</code>都是用于实现 Vue.js 组件的数据响应式更新，但是它们的使用方法、适用范围和设计理念等方面略有不同，需要根据具体的应用场景选择合适的API进行使用。</p><h3 id="ref、toref、torefs的区别" tabindex="-1"><a class="header-anchor" href="#ref、toref、torefs的区别" aria-hidden="true">#</a> ref、toRef、toRefs的区别</h3><p><code>ref、toRef、toRefs</code> 都可以将某个对象中的属性变成响应式数据</p><p><strong>ref:</strong> 的本质是拷贝，修改响应式数据，不会影响到原始数据，视图会更新</p><p><strong>toRef、toRefs</strong>:的本质是引用，修改响应式数据，会影响到原始数据，视图不会更新</p><p><code>toRef</code> 一次仅能设置一个数据，接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性</p><p><code>toRefs</code> 接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用<code>toRef</code>执行</p><h2 id="组件之间值的传递" tabindex="-1"><a class="header-anchor" href="#组件之间值的传递" aria-hidden="true">#</a> 组件之间值的传递</h2><h3 id="子组件接收父组件的值-defineprops" tabindex="-1"><a class="header-anchor" href="#子组件接收父组件的值-defineprops" aria-hidden="true">#</a> 子组件接收父组件的值 defineProps</h3><h4 id="组合式api的用法" tabindex="-1"><a class="header-anchor" href="#组合式api的用法" aria-hidden="true">#</a> 组合式api的用法</h4><p>defineProps 可以直接用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="选项式api的用法" tabindex="-1"><a class="header-anchor" href="#选项式api的用法" aria-hidden="true">#</a> 选项式api的用法</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// setup() 接收 props 作为第一个参数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对象声明形式" tabindex="-1"><a class="header-anchor" href="#对象声明形式" aria-hidden="true">#</a> 对象声明形式</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
defineProps({
  title: String,
  likes: Number
})
js
// 非 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
export default {
  props: {
    title: String,
    likes: Number
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子组件向父组件传值-触发事件-defineemits" tabindex="-1"><a class="header-anchor" href="#子组件向父组件传值-触发事件-defineemits" aria-hidden="true">#</a> 子组件向父组件传值/触发事件 defineEmits</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
 <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;changeData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>h4 @click<span class="token operator">=</span><span class="token string">&quot;change&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隔代传值-provide-inject" tabindex="-1"><a class="header-anchor" href="#隔代传值-provide-inject" aria-hidden="true">#</a> 隔代传值 provide/inject</h3><p><strong>上层组件【provide 提供】</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>inject 获取值注入】</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兄弟组件传值" tabindex="-1"><a class="header-anchor" href="#兄弟组件传值" aria-hidden="true">#</a> 兄弟组件传值</h3><ol><li><p>A——父——B</p></li><li><p>使用插件mitt</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install mitt -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建bus.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> emitter <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> emitter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>父组件中引入 A B 组件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;A @fn=&quot;getmsg&quot; /&gt;
    &lt;B :Amsg=&quot;Amsg&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import A from &#39;./A.vue&#39;;
  import B from &#39;./B.vue&#39;;
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在A组件中引入emitter.emit，传给将值传给Fn</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>我是A组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Busbtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>bus按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> emitter <span class="token keyword">from</span> <span class="token string">&#39;../../utils/Bus.ts&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> Btnmsg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;我是A组件Btnmsg的值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// mmit</span>
  <span class="token keyword">const</span> <span class="token function-variable function">Busbtn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;Fn&#39;</span><span class="token punctuation">,</span> Btnmsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在B组件中使用emitter.on接收数据</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>我是B组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    {{ ABtnmsg }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> emitter <span class="token keyword">from</span> <span class="token string">&#39;../../utils/Bus.ts&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// mitt</span>
  <span class="token keyword">let</span> ABtnmsg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;Fn&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ABtnmsg<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 移除指定事件</span>
    emitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;Fn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 移除全部事件</span>
    emitter<span class="token punctuation">.</span>all<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","index.html.vue"]]);export{d as default};

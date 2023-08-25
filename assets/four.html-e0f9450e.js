import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-a28611cb.js";const t={},p=e(`<h1 id="接口封装" tabindex="-1"><a class="header-anchor" href="#接口封装" aria-hidden="true">#</a> 接口封装</h1><h2 id="axios封装" tabindex="-1"><a class="header-anchor" href="#axios封装" aria-hidden="true">#</a> axios封装</h2><p>通过接口请求拦截和响应拦截，统一处理接口，比如在请求的时候，<br> 统一带上token，免去每次请求都要手动添加的麻烦。<br></p><h3 id="添加request-js" tabindex="-1"><a class="header-anchor" href="#添加request-js" aria-hidden="true">#</a> 添加request.js</h3><ol><li>引入axios<br></li><li>创建axios实例<br></li><li>接口请求拦截，在请求时，统一添加token<br></li><li>接口响应拦截<br></li><li>最后进行导出<br></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 创建axios实例</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//前半段url</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
  <span class="token comment">//如果5s后未响应，就通知用户页面存在加载错误</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 接口请求拦截</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求成功拦截, 无论地址是否是对的, 只要发请求就会走这个</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;成功请求拦截&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不知道什么情况下会走这个, 把地址删除了好像也是正常的</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;失败请求拦截&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 接口响应拦截</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回的status 以 2 开头会走这个</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;拦截器&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 响应拦截, status !== 200 会被这里拦截</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;失败拦截&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口统一管理" tabindex="-1"><a class="header-anchor" href="#接口统一管理" aria-hidden="true">#</a> 接口统一管理</h2><p>在 <strong>request</strong> 文件夹下新建 <strong>api.js</strong>，用于对接口进行统一管理。<br> 当然，如果接口较多，也可以单独新建一个文件夹进行管理。<br></p><h3 id="一般使用" tabindex="-1"><a class="header-anchor" href="#一般使用" aria-hidden="true">#</a> 一般使用</h3><h4 id="内容大致如下" tabindex="-1"><a class="header-anchor" href="#内容大致如下" aria-hidden="true">#</a> 内容大致如下</h4><ol><li>引入之前创建好的 <strong>axios</strong> 实例用于请求接口<br></li><li>将所有的接口写入并且暴露出来<br></li><li>在这里使用 service 进行调用，就能起到拦截的作用了。<br></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> service <span class="token keyword">from</span> <span class="token string">&quot;./request&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 
    <span class="token comment">//登录接口</span>
    <span class="token function">loginApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/login</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面调用" tabindex="-1"><a class="header-anchor" href="#页面调用" aria-hidden="true">#</a> 页面调用</h3><ul><li>引入接口,命名一个变量来接收暴露出来的api.js中的内容。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">import</span> apiBox <span class="token keyword">from</span> <span class="token string">&#39;@/request/api.js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>调用 此时接口被成功调用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> apiBox<span class="token punctuation">.</span><span class="token function">loginApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span>formState<span class="token punctuation">.</span>uname<span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span>formState<span class="token punctuation">.</span>psd
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","four.html.vue"]]);export{d as default};

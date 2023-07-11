import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as s,d as t,f as i}from"./app-289826da.js";const l={},u=n("h1",{id:"jssip",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jssip","aria-hidden":"true"},"#"),s(" Jssip")],-1),r=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),k=n("br",null,null,-1),d=n("br",null,null,-1),v={href:"https://jssip.net/documentation/3.10.x/overview/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/561675433",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>也可以去官网自行下载.js文件然后引入封装。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm install jssip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><p>直接在对应的页面中引入使用即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> JsSIP <span class="token keyword">from</span> <span class="token string">&#39;jssip&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用教程" tabindex="-1"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><ol><li>新建一个jssip的对象，传入 服务器地址/socket 地址。</li><li>配置 <code>configuration</code> 对象。</li><li>配置<code>jssip</code>下的<code>userAgent</code>对象，即<code>ua</code>对象。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">var</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsSIP<span class="token punctuation">.</span>WebSocketInterface</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sipUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> domain <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sipUrl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;//&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> uri <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">sip:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>sipUser<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>domain<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

    <span class="token keyword">var</span> configuration <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sockets</span>  <span class="token operator">:</span> <span class="token punctuation">[</span> socket <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">uri</span>      <span class="token operator">:</span> uri<span class="token punctuation">,</span>
        <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sipPwd
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>ua <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsSIP<span class="token punctuation">.</span>UA</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//  这里需要注意的是</span>
    <span class="token comment">//  1. socket需要中括弧</span>
    <span class="token comment">//  2.uri的格式，需要sip: + 用户名 + @ + 服务器名 拼接</span>
    <span class="token keyword">var</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsSIP<span class="token punctuation">.</span>WebSocketInterface</span><span class="token punctuation">(</span><span class="token string">&#39;wss://sip.myhost.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> configuration <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sockets</span>  <span class="token operator">:</span> <span class="token punctuation">[</span> socket <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uri</span>      <span class="token operator">:</span> <span class="token string">&#39;sip:alice@example.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token string">&#39;superpassword&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册与注销" tabindex="-1"><a class="header-anchor" href="#注册与注销" aria-hidden="true">#</a> 注册与注销</h3><p>在初始化完成后，要进行注册操作，使用完要进行注销。<br> 在通信连接成功、失败时也有对应的回调时间，可查阅文档。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 注册成功</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;registered&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;注册成功&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>reg<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;newRTCSession&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rtc&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>

        <span class="token keyword">var</span> session <span class="token operator">=</span> e<span class="token punctuation">.</span>session<span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注册失败</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;registrationFailed&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;注册失败&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>reg<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注销</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;unregistered&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;注销&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="电话监听" tabindex="-1"><a class="header-anchor" href="#电话监听" aria-hidden="true">#</a> 电话监听</h3><p>在注册成功后，使用插件<code>peerconnection</code>+调用answer方法可以执行电话监听。<br> 1.通过插件中返回的值，获得语音对象<br> 2.在页面中创建一个audio标签，赋值后进行同步播放进行监听。<br><code>peerconnection</code>是jssip中自带的控件，直接使用即可<br></p><p><strong>完整代码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">this</span><span class="token punctuation">.</span>remoteAudio <span class="token operator">=</span> window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;audio&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>remoteAudio<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;registered&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;注册成功&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>reg<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;newRTCSession&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rtc&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>

        <span class="token keyword">var</span> session <span class="token operator">=</span> e<span class="token punctuation">.</span>session<span class="token punctuation">;</span>

        session<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;peerconnection&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            data<span class="token punctuation">.</span>peerconnection<span class="token punctuation">.</span><span class="token function-variable function">ontrack</span><span class="token operator">=</span><span class="token parameter">obj</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;objobj&#39;</span><span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>streams <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>streams<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>listenStatus<span class="token operator">=</span><span class="token string">&#39;on&#39;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>remoteAudio<span class="token punctuation">.</span>srcObject <span class="token operator">=</span> obj<span class="token punctuation">.</span>streams<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>remoteAudio<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 接听呼叫</span>
        session<span class="token punctuation">.</span><span class="token function">answer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">mediaConstraints</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否接收音频</span>
            <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 是否接收视频</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;newMessage&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new message&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;registrationFailed&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;注册失败&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>reg<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 这个start方法是必须的，否则不生效</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取消监听" tabindex="-1"><a class="header-anchor" href="#取消监听" aria-hidden="true">#</a> 取消监听</h4><p>进行注销操作 + 执行<code>stop</code>方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;unregistered&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;注销&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function h(g,f){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[s("可用于进行语音通信，网络电话拨打接听等操作。"),k,s(" 可以通过音频，视频等获得实时通信功能。"),d,n("a",v,[s("官网地址"),t(a)]),n("a",m,[s("jssip教程"),t(a)])]),b])}const j=p(l,[["render",h],["__file","index.html.vue"]]);export{j as default};

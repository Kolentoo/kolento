import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p,f as t}from"./app-9fd1b0fe.js";const e={},o=t(`<h1 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h1><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2><p>作用：类型别名可以用来给类型取一个新的名字。<br> 常用于联合类型。</p><h4 id="使用type关键字取别名" tabindex="-1"><a class="header-anchor" href="#使用type关键字取别名" aria-hidden="true">#</a> 使用type关键字取别名</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">s</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 给类型起别名</span>
<span class="token keyword">let</span> str<span class="token operator">:</span>s <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//当类型较多比较重复的情况也可以使用</span>
<span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">boolean</span><span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">boolean</span><span class="token operator">=</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">boolean</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 使用别名后可以少写一些代码</span>
<span class="token keyword">type</span> <span class="token class-name">all</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a<span class="token operator">:</span>all<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span>all<span class="token operator">=</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c<span class="token operator">:</span>all<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串字面量类型" tabindex="-1"><a class="header-anchor" href="#字符串字面量类型" aria-hidden="true">#</a> 字符串字面量类型</h2><p>用来约束取值只能是某几个字符串中的其中一个。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 张三 李四 王五 </span>
<span class="token comment">// 让这个names的值只能为这几个值的其中一个</span>
<span class="token keyword">type</span> <span class="token class-name">stringType</span> <span class="token operator">=</span><span class="token string">&quot;张三&quot;</span><span class="token operator">|</span><span class="token string">&#39;李四&#39;</span><span class="token operator">|</span><span class="token string">&#39;王五&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 报错 type stringType =&quot;张三&quot;|&#39;李四&#39;|&#39;王五&#39;;</span>
<span class="token keyword">let</span> names<span class="token operator">:</span>stringType <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元祖-tuple" tabindex="-1"><a class="header-anchor" href="#元祖-tuple" aria-hidden="true">#</a> 元祖 Tuple</h2><p>ts中数组合并了相同类型的对象，而元祖可以合并不同类型的对象。可以在里面添加不同类型的对象。<br><strong>注意：</strong> 元祖声明里面的值时候，必须与[]中声明的类型顺序对应。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ts中数组合并相同类型的对象</span>
<span class="token keyword">let</span> arr1<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token comment">// 元祖Tuple合并不同类型的对象</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 在给元祖类型添加数据的时候 只要是联合类型中的类型就可以直接使用</span>
arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 报错 类型“boolean”的参数不能赋给类型“string | number”的参数</span>
arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举-enum" tabindex="-1"><a class="header-anchor" href="#枚举-enum" aria-hidden="true">#</a> 枚举 Enum</h2><p>枚举类型用于取值被限定在一定的范围内的场景，比如一周只能有七天。<br></p><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用 <br></h4><p>1.可以通过名称去取值，也可以通过值去拿取名称。<br> 2.添加可读性强的属性名。<br></p><p><strong>我们可以进行手动赋值，如果没有手动赋值 第一个值默认为0，后面的值递增+1</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 用枚举类型给一组数值赋予名称</span>
<span class="token keyword">enum</span> week <span class="token punctuation">{</span>
    monday<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>
    tuesday<span class="token punctuation">,</span>
    wednesday<span class="token punctuation">,</span>
    thurday<span class="token punctuation">,</span>
    friday<span class="token punctuation">,</span>
    saturday<span class="token punctuation">,</span>
    sunday
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;week&#39;</span><span class="token punctuation">,</span>week<span class="token punctuation">)</span>
<span class="token comment">//返回 第一个定义1，后面的值自动递增+1</span>
monday<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
tuesday<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
wednesday<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
thurday<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
friday<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
saturday<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
sunday<span class="token operator">:</span> <span class="token number">7</span>

<span class="token comment">// 如果没有手动赋值 第一个值默认为0 即monday=0</span>
<span class="token keyword">enum</span> week <span class="token punctuation">{</span>
    monday<span class="token punctuation">,</span>
    tuesday<span class="token punctuation">,</span>
    wednesday<span class="token punctuation">,</span>
    thurday<span class="token punctuation">,</span>
    friday<span class="token punctuation">,</span>
    saturday<span class="token punctuation">,</span>
    sunday
<span class="token punctuation">}</span>

<span class="token comment">// 可以通过名称去取值，也可以通过值去拿取名称。</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;week&#39;</span><span class="token punctuation">,</span>week<span class="token punctuation">[</span>tuesday<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//返回 2</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;week&#39;</span><span class="token punctuation">,</span>week<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//返回 tuesday</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常数项和计算所得项" tabindex="-1"><a class="header-anchor" href="#常数项和计算所得项" aria-hidden="true">#</a> 常数项和计算所得项</h3><p>枚举项有2中类型，一种是 <strong>常数项</strong>，一种是<strong>计算所得项</strong>。<br> 上面提到的 <code>enum week</code>则为常数项<br> 以下为计算所得项，即通过计算所得出的项<br><strong>注意：计算所得项后不能存放为手动赋值的枚举项</strong> <br> 因为它会因为没有获得初始值而报错，因为前一项是计算所得项，值还在计算，无法根据前一个值来计算得到当前的值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> a<span class="token punctuation">{</span>
    red<span class="token punctuation">,</span>
    blue<span class="token operator">=</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    yellow
<span class="token punctuation">}</span>
<span class="token comment">// 这里yellow 会报错，因为计算所得项后不能存放为手动赋值的枚举项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常数枚举" tabindex="-1"><a class="header-anchor" href="#常数枚举" aria-hidden="true">#</a> 常数枚举</h3><p>常数枚举是通过<code>const enum</code>定义的枚举类型。<br><strong>常数枚举与普通枚举的区别</strong><br> 1.常数枚举会在编译阶段被删除<br> 2.常数枚举不包含计算所得项<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> obj<span class="token punctuation">{</span>
    one<span class="token punctuation">,</span>two<span class="token punctuation">,</span>three
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span> <span class="token comment">//报错 obj已经没删除找不到了</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span>one<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部枚举" tabindex="-1"><a class="header-anchor" href="#外部枚举" aria-hidden="true">#</a> 外部枚举</h3><p>外部枚举是使用<code>declare enum</code>定义的枚举类型。<br><code>declare</code>定义的类型会在编译的时候检查，编译结果中会被删除，这一点和常数枚举一样。<br> 外部枚举常作用于 声明文件 中。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">enum</span> Directions <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>

<span class="token keyword">let</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span>Directions<span class="token punctuation">.</span>Up<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Down<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Right<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>同时使用外部枚举和常数枚举</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> Directions <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>

<span class="token keyword">let</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span>Directions<span class="token punctuation">.</span>Up<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Down<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> Directions<span class="token punctuation">.</span>Right<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><p>typescript除了实现所有ES6中类的功能以外，还添加了一些新的用法。<br></p><h3 id="类的概念-介绍" tabindex="-1"><a class="header-anchor" href="#类的概念-介绍" aria-hidden="true">#</a> 类的概念/介绍</h3><p>类 是描述了所创建的对象共同的属性和方法<br> 类可以被理解为一个模板，然后通过这个模板去实例化对象。<br></p><h3 id="es6中类的用法" tabindex="-1"><a class="header-anchor" href="#es6中类的用法" aria-hidden="true">#</a> ES6中类的用法</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 声明一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token comment">// 构造器/构造函数</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当new一个类的时候，会执行这个类里面的构造函数 constructor</span>
<span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在typescript中的用法" tabindex="-1"><a class="header-anchor" href="#在typescript中的用法" aria-hidden="true">#</a> 在typescript中的用法</h3><p>需要要在类中定义要需要使用的属性，才能在构造函数中赋值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 声明一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token comment">// 构造器/构造函数</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

 constructor
<span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在类中定义方法" tabindex="-1"><a class="header-anchor" href="#在类中定义方法" aria-hidden="true">#</a> 在类中定义方法</h3><p>需要对参数的类型作类型的约束</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 声明一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token comment">// 构造器/构造函数</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token operator">+</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当new一个类的时候，会执行这个类里面的构造函数 constructor</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回 hikolento</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h3><p>通过类的继承 可以扩展现有的类<br></p><p><strong>总结</strong> <br> 1.类与类质检可以存在集成关系，通过<code>extends</code>关键字继承<br> 2.子类可以调用父类的构造函数和方法，通过<code>super</code>关键字<br> 3.子类可以重写父类的方法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 父类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age
    <span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi,&#39;</span><span class="token operator">+</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 使用super调用父类的构造函数,将父类的属性给到子类</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 1.构造函数中使用super后，子类也能调用父类的方法</span>
    <span class="token comment">// 2.也可以重写父类的方法</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;重写的方法&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// 也可以在方法中调用父类的方法</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">&#39;中华田园犬&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&#39;猫咪&#39;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">&#39;波斯猫&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;泰迪&#39;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//返回</span>
hi<span class="token punctuation">,</span>波斯猫
重写的方法
hi<span class="token punctuation">,</span>中华田园犬
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存取器" tabindex="-1"><a class="header-anchor" href="#存取器" aria-hidden="true">#</a> 存取器</h3><p>使用<code>getter</code>和<code>setter</code>可以改编属性的赋值和读取行为<br> 可以帮助我们控制对对象成员的访问。<br></p><ul><li>通过<code>get</code>来设置读取器读取数据，<code>get</code>为只读属性</li><li>通过<code>set</code>来设置存储数据</li><li>在没有<code>set</code>的情况下，无法修改值</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Name</span><span class="token punctuation">{</span>
    firstName<span class="token operator">:</span><span class="token builtin">string</span>
    lastName<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>lastName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstName<span class="token operator">=</span>firstName
        <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token operator">=</span>lastName
    <span class="token punctuation">}</span>
    <span class="token comment">//设置存取器 </span>
    <span class="token comment">// 读取器作用：用来读取数据</span>
    <span class="token keyword">get</span> <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span><span class="token string">&#39;-&#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 设置器 用来设置数据</span>
    <span class="token keyword">set</span> <span class="token function">fullName</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token string">&#39;张&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;伟&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span> <span class="token comment">//张-伟</span>
<span class="token comment">// 这里会去调用类中 设置器 的set fullName方法</span>
n<span class="token punctuation">.</span>fullName<span class="token operator">=</span><span class="token string">&#39;测试&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 测试</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态方法-属性" tabindex="-1"><a class="header-anchor" href="#静态方法-属性" aria-hidden="true">#</a> 静态方法/属性</h3><p>通过关键字<code>static</code>将属性和方法设置成静态的属性/方法。<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> sex<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">static</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 静态成员无法被访问</span>
a<span class="token punctuation">.</span>sex<span class="token punctuation">;</span> <span class="token comment">// 属性“sex”在类型“Test”上不存在。</span>
a<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//属性“sex”在类型“Test”上不存在。</span>

<span class="token comment">// 只能通过类自己进行访问</span>
Test<span class="token punctuation">.</span>sex<span class="token punctuation">;</span>
Test<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3><p><code>public</code> <code>private</code> 和 <code>protected</code></p><ul><li><strong>public 修饰符表示属性或者方法是公有的</strong></li><li>可以在任何地方被访问到，默认所有属性和方法都是public</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 以下两种是一样的</span>
<span class="token keyword">class</span> <span class="token class-name">Kolento</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Amiee</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">public</span> <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>private只能在类的内部被访问</strong><br> 当把类中的name属性改成private类型后，通过k访问name就会报错。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Kolento</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 类自己本身是可以访问到的</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> k <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kolento</span><span class="token punctuation">(</span><span class="token string">&#39;kkk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 报错 属性“name”为私有属性，只能在类“Kolento”中访问</span>
k<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当通过子类去继承父类时，父类的私有属性可以被继承，但是不能被读取。<br></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Kolento</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> k <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kolento</span><span class="token punctuation">(</span><span class="token string">&#39;kkk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token keyword">extends</span> <span class="token class-name">Kolento</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> Cindy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">(</span><span class="token string">&#39;happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 报错 属性“name”为私有属性，只能在类“Kolento”中访问</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cindy&#39;</span><span class="token punctuation">,</span>Cindy<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong><code>protected</code>修饰符可以让被继承的子类访问，但是不能被自身和子类之外的地方访问</strong></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Kolento</span><span class="token punctuation">{</span>
    <span class="token keyword">protected</span> name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// const k = new Kolento(&#39;kkk&#39;);</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token keyword">extends</span> <span class="token class-name">Kolento</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// name在子类中可以被访问</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> Cindy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">(</span><span class="token string">&#39;happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 报错 属性“name”受保护，只能在类“Kolento”及其子类中访问</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Cindy<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// 可以通过子类方法中访问</span>
Cindy<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong><br></p><ul><li><code>public</code> : 类 默认修饰符为public，可以被任意访问<br></li><li><code>private</code> : 只有自身可以访问，子类只能继承不能访问<br></li><li><code>protected</code> : 只有自身和子类可以访问，外部依旧不能访问。<br></li></ul><h4 id="readonly只读属性" tabindex="-1"><a class="header-anchor" href="#readonly只读属性" aria-hidden="true">#</a> readonly只读属性</h4><p>1.<code>readonly</code>修饰符下的属性只能读取不能修改<br> 2.只读属性，但是在构造函数中可以修改</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">X</span></span><span class="token punctuation">{</span>
    <span class="token comment">//只读属性，但是在构造函数中可以修改</span>
    <span class="token keyword">readonly</span> age<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age
    <span class="token punctuation">}</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//报错 无法为“age”赋值，因为它是只读属性</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">18</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h3><ul><li>通过<code>abstract</code>关键字定义一个抽象类<br></li><li>也可以通过这个关键字定义 抽象属性和抽象方法。<br> 1.抽象类不允许被实例化<br> 2.抽象类的作用主要是服务与它的子类<br></li></ul><p><strong>错误的写法：</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 抽象类不能够被实例化</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">Y</span></span><span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> name<span class="token operator">:</span>String
    <span class="token comment">//报错 不能在构造函数中访问类“Y”中的抽象属性“name”</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
    <span class="token comment">// 报错 方法“hello”不能具有实现，因为它标记为抽象</span>
    <span class="token keyword">abstract</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//  报错 非抽象类不能继承抽象类的属性和方法</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">Z</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">Y</span></span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>写法思路与作用</strong><br> 1.抽象类中的抽象属性和方法不能有具体实现，只能简单定义。<br> 2.抽象类的作用就是为子类服务，子类可以通过继承后具体实现抽象类中的属性和方法。<br></p><p><strong>正确的写法：</strong><br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 抽象类不能够被实例化</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">Y</span></span><span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> name<span class="token operator">:</span>String

    <span class="token comment">// 报错 方法“hello”不能具有实现，因为它标记为抽象</span>
    <span class="token keyword">abstract</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">Z</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">Y</span></span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> String
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类的类型" tabindex="-1"><a class="header-anchor" href="#类的类型" aria-hidden="true">#</a> 类的类型</h4><p>1.类可以被作为类型声明使用。<br> 2.类中的属性方法和被声明的类 的属性方法必须相同才能使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Food</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    price<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>price<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
        <span class="token keyword">this</span><span class="token punctuation">.</span>price<span class="token operator">=</span>price
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 把类Car 作为类型传给了car</span>
<span class="token keyword">const</span> car <span class="token operator">:</span>Car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&#39;bmw&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 报错 类型 &quot;Car&quot; 中缺少属性 &quot;price&quot;，但类型 &quot;Food&quot; 中需要该属性</span>
<span class="token keyword">const</span> car <span class="token operator">:</span>Food <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&#39;bmw&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类与接口" tabindex="-1"><a class="header-anchor" href="#类与接口" aria-hidden="true">#</a> 类与接口</h2><h3 id="类和接口的应用" tabindex="-1"><a class="header-anchor" href="#类和接口的应用" aria-hidden="true">#</a> 类和接口的应用</h3><p><strong>接口与类的结合</strong><br> 通过接口的形式，对类的形状进行描述和约束。<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Sing</span><span class="token punctuation">{</span>
    <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过implements 使得类来实现之前定义的接口</span>
<span class="token comment">// 接口与类的结合，也是通过接口来约束这个类的格式形状</span>
<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token keyword">implements</span> <span class="token class-name">Sing</span><span class="token punctuation">{</span>
    <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;蔡徐坤&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Woman</span> <span class="token keyword">implements</span> <span class="token class-name">Sing</span><span class="token punctuation">{</span>
    <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;鸡你太美&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> man <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> woman <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Woman</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
man<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
woman<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一个类与多个接口" tabindex="-1"><a class="header-anchor" href="#一个类与多个接口" aria-hidden="true">#</a> 一个类与多个接口</h3><ul><li>当使用一个类与多个接口时候，通过逗号<code>，</code>进行分割。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Sing</span><span class="token punctuation">{</span>
    <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Dance</span><span class="token punctuation">{</span>
    <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Rap</span><span class="token punctuation">{</span>
    <span class="token function">rap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Baskerball</span><span class="token punctuation">{</span>
    <span class="token function">basketball</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Caixukun</span> <span class="token keyword">implements</span> <span class="token class-name">Sing</span><span class="token punctuation">,</span>Dance<span class="token punctuation">,</span>Rap<span class="token punctuation">,</span>Baskerball<span class="token punctuation">{</span>
    <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;唱&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;跳&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">rap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rap&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">basketball</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;篮球&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">const</span> cai <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Caixukun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cai<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cai<span class="token punctuation">.</span><span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cai<span class="token punctuation">.</span><span class="token function">rap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cai<span class="token punctuation">.</span><span class="token function">basketball</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回</span>
<span class="token comment">// 唱</span>
<span class="token comment">// 跳</span>
<span class="token comment">// rap</span>
<span class="token comment">// 篮球</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口继承接口" tabindex="-1"><a class="header-anchor" href="#接口继承接口" aria-hidden="true">#</a> 接口继承接口</h3><p>使用接口继承接口的方法，就不用像上面那样，当一个类设置多个接口的时候，使用逗号分割了。<br></p><ul><li>用一个新的接口，继承其他几个接口<br></li><li>类的格式使用新的接口进行规范设置即可</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Sing</span><span class="token punctuation">{</span>
    <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Dance</span><span class="token punctuation">{</span>
    <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过声明一个新的接口来继承原先的两个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Cool</span> <span class="token keyword">extends</span> <span class="token class-name">Sing</span><span class="token punctuation">,</span>Dance<span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Caixukun</span> <span class="token keyword">implements</span> <span class="token class-name">Cool</span><span class="token punctuation">{</span>
    <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;唱歌&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;跳舞&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口继承类" tabindex="-1"><a class="header-anchor" href="#接口继承类" aria-hidden="true">#</a> 接口继承类</h3><p>在ts中，接口可以继承类。<br> 因为在我们声明一个类的同时，其实也声明了一个类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 这里我们既声明了一个类，又可以把类当做类型使用。</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 把类Car 作为类型传给了car</span>
<span class="token keyword">const</span> car <span class="token operator">:</span>Car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&#39;bmw&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>尝试通过接口继承类</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个普通类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 通过接口去继承这个类</span>
<span class="token keyword">interface</span> <span class="token class-name">Man</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将接口Man设置在p上面</span>
<span class="token comment">// 发现这个Man上面存在age name 和hello方法，说明都继承上了</span>
<span class="token comment">// 报错 类型“{}”缺少类型“Man”中的以下属性: age, name, hello</span>
<span class="token keyword">let</span> p<span class="token operator">:</span>Man<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 正确的写法 必须要包含这些内容</span>
<span class="token keyword">let</span> people<span class="token operator">:</span>Man<span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="声明合并" tabindex="-1"><a class="header-anchor" href="#声明合并" aria-hidden="true">#</a> 声明合并</h2><p>如果定义了两个相同名字的函数、接口或类，那么他们会合并成一个类型。<br></p><h3 id="函数的合并" tabindex="-1"><a class="header-anchor" href="#函数的合并" aria-hidden="true">#</a> 函数的合并</h3><p>参照函数重载 <br> 允许一个函数接受不同数量或者类型的参数时，做出不同的处理。 也就是同一个函数，通过不同类型的参数，返回不同的结果。<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">;</span><span class="token builtin">number</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span>

<span class="token comment">// 参数为数字：相加</span>
<span class="token comment">// 参数为字符串：拼接</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token operator">==</span><span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">==</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token operator">+</span>y <span class="token comment">//字符串拼接</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token operator">==</span><span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">==</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token operator">+</span>y <span class="token comment">//数值相加</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//返回 33</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;前端&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;测试&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 返回 前端测试</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口的合并" tabindex="-1"><a class="header-anchor" href="#接口的合并" aria-hidden="true">#</a> 接口的合并</h3><p>当出现两个同名的接口时，会合并他们变成一个接口<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Cat</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;小猫咪&#39;</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span><span class="token string">&#39;mail&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Cat</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;小猫咪&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token comment">// 以上两个接口合并成了一个接口，这里有3个属性了</span>
<span class="token keyword">const</span> cat<span class="token operator">:</span>Cat<span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;小猫咪&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span><span class="token string">&#39;mail&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的合并" tabindex="-1"><a class="header-anchor" href="#类的合并" aria-hidden="true">#</a> 类的合并</h3><p>类的合并与接口的合并一致。</p><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><p>泛型是指在定义函数、接口或类的时候，不提前指定具体类型，而是在使用的时候再执行类型的一种特性。<br></p><h3 id="简单案例" tabindex="-1"><a class="header-anchor" href="#简单案例" aria-hidden="true">#</a> 简单案例</h3><p><strong>使用场景:</strong> 在类型不确定的时候使用。<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个函数 参数1的类型不确定，参数2的类型为数值</span>
<span class="token comment">// 返回一个数组</span>
<span class="token comment">// T表示可以输入任意类型，等到执行时根据参数类型再指定当前类型</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>count<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 返回 [ 123, 123, 123, 123, 123 ]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment">// 返回 [ &#39;111&#39;, &#39;111&#39;, &#39;111&#39;, &#39;111&#39;, &#39;111&#39; ]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;111&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意<br></h4><p>1.泛型的这个 T 字母可以随意替换，只要在方法中保持一致即可。<br> 2.使用泛型后，就会根据传参的具体参数类型，去在方法执行的时候指定类型。这一点不同于<code>any</code>，<code>any</code>不会指定类型，只是允许所有的类型。<br> 3.注意要先用<code>&lt;T&gt;</code>来标明泛型，才能在后面使用。</p><h3 id="多个泛型参数" tabindex="-1"><a class="header-anchor" href="#多个泛型参数" aria-hidden="true">#</a> 多个泛型参数</h3><ul><li>在尖括弧里面可以定义多个泛型</li><li>一般用在参数中包含多个不同类型，多个参数不确定类型的情况下<br></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 需求背景</span>
<span class="token comment">// 将[123,&#39;123&#39;] 修改成 [&#39;123&#39;,123]</span>
<span class="token comment">// 因为这里t是一个元组，而元组里面的元素可能都是不同类型</span>
<span class="token comment">// 因此需要在这里定义类型时，使用多个泛型</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">update</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>t<span class="token operator">:</span><span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span><span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>t<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;111&#39;</span><span class="token punctuation">,</span><span class="token number">222</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回 [ 2222, &#39;1111&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h3><p>理论上来说，泛型的类型是不确定的，但是可以通过方法中使用的属性，来确定一个范围<br> 例如下面的例子中<code>x.length</code>，如果<code>x</code>为数值，是不存在<code>length</code>属性的。<br> 那么我们可以通过这一点对这里的泛型进行约束。<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 方法目的：获取参数的长度</span>
<span class="token comment">// 由于不知道参数x是什么类型，因此使用泛型</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token comment">// 报错 类型“T”上不存在属性“length”。</span>
    <span class="token comment">// 因为数字不存在属性length</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<strong>泛型约束</strong>来指定参数的类型，必须要有<code>length</code>属性<br> 实现如下：<br></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 首先定义一个接口，指定必须有length属性</span>
<span class="token keyword">interface</span> <span class="token class-name">HasLength</span><span class="token punctuation">{</span>
    length<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// 然后再方法后将泛型通过刚才指定的接口进行属性的约束</span>
<span class="token comment">// 这样方法里的x.length就不会报错了</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> HasLength<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 报错 类型“number”的参数不能赋给类型“HasLength”的参数</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就成功约束了参数必须有length的属性。<br> 当传入 数值456 的时候，就会报错提醒，456没有length的属性。<br></p><p><strong>总结</strong><br> 实际上还是通过了泛型类型继承到接口上，被接口约束。这一点还挺妙的。</p><h3 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h3><p>使用泛型接口去约束函数<br> 1.定义一个泛型接口。<br> 2.在函数表达式上，使用这个泛型接口。<br></p><ul><li>第一种写法 将泛型卸载函数上<br></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个泛型接口 value参数和返回的数组 类型都不确定</span>
<span class="token keyword">interface</span> <span class="token class-name">Arr</span><span class="token punctuation">{</span>
    <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>count<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过泛型接口来约束我们的函数</span>
<span class="token keyword">let</span> getArr<span class="token operator">:</span>Arr <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>count<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>count<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二种写法<br> 如果将泛型卸载接口上了，那在使用接口约束函数表达式时，需要在设置的时候，指定泛型的具体类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个泛型接口 value参数和返回的数组 类型都不确定</span>
<span class="token keyword">interface</span> <span class="token class-name">Arr2<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>count<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过泛型接口来约束我们的函数</span>
<span class="token keyword">let</span> getArr2<span class="token operator">:</span>Arr2<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>count<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>count<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h3><p>1.简单的说就是创建一个泛型类，这个类中的属性存在不确定性，先使用泛型表示。<br> 2.在实例化声明的时候，这时候可以具体传参了，通过具体的参数，在尖括弧里进行具体的类型的声明。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 创建一个泛型类，假定对这个age属性的类型不确定</span>
<span class="token keyword">class</span> <span class="token class-name">Person<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
    age<span class="token operator">:</span><span class="token constant">T</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类型“number”的参数不能赋给类型“string”的参数</span>
<span class="token comment">// 因为这里在传参的时候给泛型定义成了string所以报错</span>
<span class="token comment">// 泛型是在传参的那一刻才明白参数类型的</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment">// 正常执行</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;20&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;kolento&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TS的学习笔记就此完结，后续有更新再进行补充。</strong></p>`,129);function c(l,i){return s(),a("div",null,[o,p(" <CommentService /> ")])}const k=n(e,[["render",c],["__file","two.html.vue"]]);export{k as default};

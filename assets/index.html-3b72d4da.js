import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as l,a as n,b as s,d,f as c}from"./app-2b014c71.js";const r={},o=n("h1",{id:"node-express服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node-express服务","aria-hidden":"true"},"#"),s(" Node+Express服务")],-1),p=n("br",null,null,-1),u={href:"http://101.132.73.35/",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="linux安装node" tabindex="-1"><a class="header-anchor" href="#linux安装node" aria-hidden="true">#</a> linux安装node</h2><p>先在服务器上新建一个文件夹存放node压缩包<br> 输入以下命令下载压缩包<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.下载
wget https://cdn.npm.taobao.org/dist/node/v12.13.1/node-v12.13.1-linux-x64.tar.xz

2.解压：
xz -d node-v12.13.1-linux-x64.tar.xz
tar -xvf node-v12.13.1-linux-x64.tar

3.移动
mv node-v12.13.1-linux-x64  /usr/local/

4.重命名
mv /usr/local/node-v12.13.1-linux-x64/  /usr/local/node

5.编辑配置文件
vim /etc/profile

6.文件末尾增加内容，按 i 命令，进行新增
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH

ps:内容新增后，先按esc键，退出插入模式，然后按住shift键，并连按两次z字符，
即可保存刚才的编辑并退出vim编辑状态

7.执行source才能使环境变量立即有效
source /etc/profile

安装成功后，查看对应版本信息
node -v
npm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网站部署" tabindex="-1"><a class="header-anchor" href="#网站部署" aria-hidden="true">#</a> 网站部署</h2><h3 id="配置express服务" tabindex="-1"><a class="header-anchor" href="#配置express服务" aria-hidden="true">#</a> 配置express服务</h3><ol><li>打包网站文件 生成dist文件夹，放入项目目录中。<br></li><li>初始化 npm init 生成 package.json文件<br></li><li>新建app.js文件，写入express服务，监听80端口。<br></li><li>安装 express 服务<code>cnpm install express</code><br></li><li>本地测试，通过node app测试，看是否可以打开页面,能打开说明服务已经开启<br></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Example app listening on port 80&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器端配置" tabindex="-1"><a class="header-anchor" href="#服务器端配置" aria-hidden="true">#</a> 服务器端配置</h3><p>只要开启80端口，确保端口没有被占用即可。</p><h3 id="安装pm2" tabindex="-1"><a class="header-anchor" href="#安装pm2" aria-hidden="true">#</a> 安装pm2</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install pm2 -g
pm2 -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用pm2启动node服务" tabindex="-1"><a class="header-anchor" href="#使用pm2启动node服务" aria-hidden="true">#</a> 使用pm2启动node服务</h3><p>这样可以确保服务器指令窗口关闭时，服务仍旧处于启动状态。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 start app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14);function m(b,x){const e=i("ExternalLinkIcon");return t(),l("div",null,[o,n("p",null,[s("由于之前通过 vite 打包的页面不支持 file 协议，无法部署在github上，因此就直接部署在服务器上了。"),p,n("a",u,[s("Vue3-Ant-Admin"),d(e)])]),v])}const f=a(r,[["render",m],["__file","index.html.vue"]]);export{f as default};

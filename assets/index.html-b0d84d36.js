import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,a as e,b as a,d as r,e as d,f as o}from"./app-97f3f247.js";const p={},c=e("h1",{id:"kplayer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kplayer","aria-hidden":"true"},"#"),a(" Kplayer")],-1),u=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),v=e("br",null,null,-1),m={href:"https://docs.kplayer.net/v0.5.8/",target:"_blank",rel:"noopener noreferrer"},h=o(`<h4 id="服务端推流" tabindex="-1"><a class="header-anchor" href="#服务端推流" aria-hidden="true">#</a> 服务端推流</h4><p>需要准备的工具：kplayer + 云服务器linux</p><h2 id="部署与安装" tabindex="-1"><a class="header-anchor" href="#部署与安装" aria-hidden="true">#</a> 部署与安装</h2><p>1.登录连接服务器 2.下载工具</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://download.bytelang.cn/kplayer-v0.5.6-linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar zxvf kplayer-v0.5.6-linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.进入kplayer文件夹内 复制里面的json文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp config.json.example config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.修改刚才复制的json文件为如下内容</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;lists&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;/video/example_1.mp4&quot;</span>        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;lists&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;服务器地址+串流密钥&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.去b站直播中心 点击开始直播开启直播 7.启动kplayer服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 开启服务命令
./kplayer play start
sudo ./kplayer play start --daemon

// 关闭服务命令
./kplayer play stop
sudo ./kplayer play stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.文件缓存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 在不开启推流的情况下进行文件缓存操作
./kplayer play start -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h4><p>b站推流地址：服务器地址 + 串流密钥</p><h2 id="弹幕姬" tabindex="-1"><a class="header-anchor" href="#弹幕姬" aria-hidden="true">#</a> 弹幕姬</h2><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h3><p>1.在github下载linux版本的弹幕姬<br> 2.上传到服务器<br> 3.解压后启动命令部署<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//启动命令
java -jar BiliBili_Danmuji-2.6.4beta.jar
nohup java -jar BiliBili_Danmuji-2.6.4beta.jar &gt;/dev/null &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.打开服务器23333端口<br> 在网页端进行设置 http://101.132.73.35:23333/</p><h2 id="视频裁剪" tabindex="-1"><a class="header-anchor" href="#视频裁剪" aria-hidden="true">#</a> 视频裁剪</h2><blockquote><p>由于当前0.5.8的kplayer只能实现对单个视频文件的时间节点跳转 无法进行批量操作，因此使用 ffmpeg</p></blockquote>`,24);function b(k,x){const n=t("ExternalLinkIcon");return i(),l("div",null,[c,u,e("p",null,[a("用于服务端进行直播推流的工具。"),v,e("a",m,[a("官网地址"),r(n)])]),h,d(" <CommentService /> ")])}const y=s(p,[["render",b],["__file","index.html.vue"]]);export{y as default};

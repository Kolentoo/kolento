import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as l,a as n,b as s,d as r,e as o,f as d}from"./app-8bb6b4cf.js";const c={},p=d(`<h1 id="项目搭建笔记" tabindex="-1"><a class="header-anchor" href="#项目搭建笔记" aria-hidden="true">#</a> 项目搭建笔记</h1><h2 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介" aria-hidden="true">#</a> 项目简介</h2><blockquote><p><strong>官网首页：</strong> https://www.kolento.cn (域名已过期) <br><strong>后台管理系统：</strong> vue2.x + ele 开发 <br><strong>二次元番剧 小程序：</strong> ui框架：vant webapp <br><strong>后台支持：</strong> node <br><strong>数据来源：</strong> api接口转发+puppeteer爬虫 <br><strong>数据库：</strong> mysql8.0.22 <br><strong>数据库可视化软件：</strong> dbeaver <br></p></blockquote><p><strong>此笔记 主要用于记录 个人项目 的搭建的流程</strong> <br></p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><h3 id="一、购买域名" tabindex="-1"><a class="header-anchor" href="#一、购买域名" aria-hidden="true">#</a> 一、购买域名</h3><p><strong>域名：</strong> kolento.club / kolento.cn <br><strong>到期时间：</strong> 2021-05-31 <br><strong>购买渠道：</strong> 百度云 / 腾讯云 <br><strong>域名备案：</strong> （申请备案→填写信息→审核、最好上传域名证书，证书从域名购买处查找） <br><strong>SSL证书：</strong> http转https，现申请了腾讯云的免费一年SSL证书，2022年1月25日到期 <br><strong>申请SSL证书流程：</strong> 申请→下载→解压找到nginx文件夹下内容复制进项目文件夹下（node项目中） <br></p><h3 id="二、百度云-腾讯云架设node开发环境-建议系统centos8" tabindex="-1"><a class="header-anchor" href="#二、百度云-腾讯云架设node开发环境-建议系统centos8" aria-hidden="true">#</a> 二、百度云/腾讯云架设node开发环境（建议系统centos8）</h3><p><strong>远程服务器连接工具：</strong> xShell6 <br><strong>数据库连接工具：</strong> dbeaver <br><strong>用户名：</strong> root <br><strong>密码：</strong> xxxxxx <br></p><h4 id="搭建node环境" tabindex="-1"><a class="header-anchor" href="#搭建node环境" aria-hidden="true">#</a> 搭建node环境</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://nodejs.org/dist/latest/
下载nodejs（老版本）
wget https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.xz
如果报错
wget --no-check-certificate https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.xz
下载nodejs（新版本 推荐使用新版本）
wget https://nodejs.org/dist/latest/node-v15.12.0-linux-x64.tar.xz
解压与安装node
xz -d node-v15.12.0-linux-x64.tar.xz
新版本：tar -xf node-v15.12.0-linux-x64.tar
这里可以选择修改文件夹名字方便后面输入命令，修改文件夹名字为nodebox
mv node-v15.12.0-linux-x64 nodebox
映射node与npm（映射需要观察/nodebox/bin/下是否有node命令用于映射）
ln -s /nodebox/bin/node /usr/bin/node 
ln -s /nodebox/bin/npm /usr/bin/npm
安装淘宝镜像，然后进行映射
ln -s /nodebox/bin/cnpm /usr/bin/cnpm
如果成功，则测试是否安装成功检测版本号
node -v
npm -v
如果不成功，删除原有映射，重新映射尝试
进入需要删除的映射文件夹
cd /usr/bin
rm -rf ./node (删除node映射为例)
下载解压yum并且安装 用于安装其他软件
wget http://yum.baseurl.org/download/3.2/yum-3.2.28.tar.gz
tar xvf yum-3.2.28.tar.gz 
进入目录运行安装
cd yum-3.2.28  
安装git和pm2
yum install git
yum install pm2
如果yum安装不成功使用npm安装
npm install -g  pm2
如果pm2显示没不存在命令
执行映射 
ln -s /nodebox/bin/pm2 /usr/bin/pm2
pm2开命令：
全部停止：pm2 stop all
全部开启：pm2 start all
显示pm2列表：pm2 list
参考链接（可用）
https://blog.csdn.net/putao2062/article/details/79647597
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、服务器安装mysql8-0" tabindex="-1"><a class="header-anchor" href="#三、服务器安装mysql8-0" aria-hidden="true">#</a> 三、服务器安装mysql8.0</h3><blockquote><p>如果使用的是cenos7版本会在安装的时候提示缺包，不能安装此版本 <br> centos8安装mysql8.0.22，在kolento目录下的mysql8.0目录下进行</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.下载
wget https://dev.mysql.com/get/mysql80-community-release-el8-1.noarch.rpm
2.安装数据源
yum install mysql80-community-release-el8-1.noarch.rpm
3.检查数据源、查看mysql源是否安装成功：
yum repolist enabled | grep &quot;mysql.*-community.*&quot;
4.禁用CentOS8自带mysql模块
yum module disable mysql
5.安装数据库、真正安装mysql
安装语句：yum install mysql-community-server
6.启动数据库
service mysqld start
service mysqld status
7.显示mysql的随机密码
grep &#39;temporary password&#39; /var/log/mysqld.log
此时会显示出当前生成的随机密码用这个密码登录后再次修改为简单的密码

8.登录并且修改mysql密码
登录：mysql -u root -p
然后输入上面生成的密码
9.修改密码
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;Root_21root&#39;;（设置密码 Root_21root）
ssh服务器上登录密码：Root_21root
10.查看密码策略
SHOW VARIABLES LIKE &#39;validate_password%&#39;;
11.修改密码策略
 修改密码长度：set global validate_password.length=1;（长度）
修改密码等级：set global validate_password.policy=0;（等级）
并且再次进行查看确认是否修改成功
12.Mysql8.0.22开放远程访问
先创建权限记录：create user &#39;root&#39;@&#39;%&#39; identified by &#39;root123&#39;;
13.设置自己的密码
ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED BY &#39;123456&#39;;
原文中%为local，应改成%，否则node连不上远程数据库
授权：grant all privileges on *.* to &#39;root&#39;@&#39;%&#39; with grant option;
14.开放防火墙端口
由于mysql8.0的加密方法变了。mysql8.0默认采用caching_sha2_password的加密方式。sqlyog不支持这种加密方式。
修改密码过期
ALTER USER&#39;root&#39;@&#39;%&#39; IDENTIFIED BY &#39;123456&#39; PASSWORD EXPIRE NEVER;
重新修改密码
ALTER USER&#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;
刷新权限（不做可能无法生效）
FLUSH PRIVILEGES;
参考地址：https://www.cnblogs.com/zhulei2/p/13912167.html
登录本机mysql：mysql -uroot -p
停止mysql服务：service mysqld stop
开启mysql服务：service mysqld start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node项目配置与开发" tabindex="-1"><a class="header-anchor" href="#node项目配置与开发" aria-hidden="true">#</a> node项目配置与开发</h2><ol><li><p>开发<strong>api.js</strong> <br> 用于爬虫爬取所需数据并且存入数据库（puppeteer）每日定时执行,爬取最新信息。</p></li><li><p>开发<strong>serve.js</strong> <br> 建立数据库连接，开发接口，转发接口，允许跨域</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  host     <span class="token operator">:</span> <span class="token string">&#39;106.12.xx.xx&#39;</span><span class="token punctuation">,</span>
  user     <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
  password <span class="token operator">:</span> <span class="token string">&#39;xxxxxx&#39;</span><span class="token punctuation">,</span>
  port     <span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
  database <span class="token operator">:</span> <span class="token string">&#39;kolento&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且引入静态资源</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;./public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>读取<strong>public</strong>文件下的<strong>index.html</strong>使得网站可以被访问 <br> 3. SSL证书配置与<strong>start.js</strong>开发 <strong>public</strong> 文件夹下放入下载的证书和打包好的网页文件 <br> 引入相关文件，导入<strong>serve.js</strong>中暴露的<strong>app</strong>并且开启<strong>https</strong>服务 <br></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> httpsOption <span class="token operator">=</span> <span class="token punctuation">{</span>
    key <span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./public/SSL/Nginx/2_kolento.club.key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    cert<span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./public/SSL/Nginx/1_kolento.club_bundle.crt&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建服务，默认80端口</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
https默认<span class="token number">443</span>端口
https<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>httpsOption<span class="token punctuation">,</span> app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本地运行 <code>node start</code> 测试是否成功</p><h2 id="开启node服务" tabindex="-1"><a class="header-anchor" href="#开启node服务" aria-hidden="true">#</a> 开启node服务</h2><ol><li>在根目录创建文件夹 <code>mkdir kolento</code> <br><strong>kolento</strong> 下创建2个文件夹一个 <strong>node20201</strong> 用于存放项目、一个 <strong>mysql8.0</strong> 用于放置 <strong>mysql</strong> <br></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/xxxxxx/node2021.git
开始拉取安装已开发打包的项目
cd node2021
git init 初始化仓库
git pull https://github.com/xxxxxx/node2021.git
安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
node start 尝试启动start.js查看是否可以正常运行
使用pm2永久开启服务
需要开启服务的js文件：start.js
pm2 start start.js
查看pm2服务列表：
pm2 list
pm2 stop all
pm2 start all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题总结" tabindex="-1"><a class="header-anchor" href="#问题总结" aria-hidden="true">#</a> 问题总结</h2><ul><li>主要是 <strong>puppetter</strong>和<strong>linux</strong>相关问题 <br></li></ul><ol><li>async外不要使用console <br></li><li>不渲染chrome浏览器，linux没有图形化组件 <br></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      headless<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      args<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;--no-sandbox&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;--disable-setuid-sandbox&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// puppeteerOptions: {</span>
      <span class="token comment">//   ignoreHTTPSErrors: true,</span>
      <span class="token comment">//   dumpio: false,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>安装相关puppeteer在linux下的依赖</li></ol><h4 id="依赖库" tabindex="-1"><a class="header-anchor" href="#依赖库" aria-hidden="true">#</a> 依赖库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="字体库" tabindex="-1"><a class="header-anchor" href="#字体库" aria-hidden="true">#</a> 字体库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code>ipa-gothic-fonts</code>需要手动下载安装 4. 如果提示缺少组件按照缺少的组件进行安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(node:201386) ExperimentalWarning: The fs.promises API is experimental

(node:201386) UnhandledPromiseRejectionWarning: Error: Failed to launch the browser process!

/kolento/node2021/node_modules/_puppeteer@5.5.0@puppeteer/.local-chromium/linux-818858/chrome-linux/chrome: error while loading shared libraries: libgbm.so.1: cannot open shared object file: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install libgbm  -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h2><ol><li>如何进行ip动态代理更换提高爬虫的效率（付费代理池）<br></li><li>Error: Node is either not visible or not an HTMLElement<br></li></ol><h4 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1" aria-hidden="true">#</a> 解决方案：</h4><p>添加登录的模拟操作步骤 <br></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">waitForSelector</span><span class="token punctuation">(</span><span class="token string">&#39;.more:not(:empty)&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> timeout<span class="token operator">:</span> <span class="token number">120000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span> visible<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本机调用爬虫，不在服务端进行running</p><h2 id="cdn资源管理" tabindex="-1"><a class="header-anchor" href="#cdn资源管理" aria-hidden="true">#</a> CDN资源管理</h2><ul><li>信息均已过期 腾讯云cdn 3元/50g <br> 购买日期：2月5日，过期时间22年2月5日 <br> https://console.cloud.tencent.com/ <br></li></ul><p>腾讯云控制台子用户登录页面： <br> https://cloud.tencent.com/login/subAccount/100003948444?type=subAccount <br></p><h2 id="云服务器" tabindex="-1"><a class="header-anchor" href="#云服务器" aria-hidden="true">#</a> 云服务器</h2><p><strong>有效日期：</strong> 2021/319--2023/3/19 <br></p><h2 id="公安备案" tabindex="-1"><a class="header-anchor" href="#公安备案" aria-hidden="true">#</a> 公安备案</h2>`,52),u=n("strong",null,"备案地址：",-1),v={href:"http://www.beian.gov.cn/portal/index?login=Y&token=f77071a7-08b4-489d-bb75-6e64a3094449&info=%E6%B3%A8%E5%86%8C%E6%88%90%E5%8A%9F%EF%BC%81",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b=n("h2",{id:"开发工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开发工作","aria-hidden":"true"},"#"),s(" 开发工作")],-1),g=n("h4",{id:"小程序-注意的问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#小程序-注意的问题","aria-hidden":"true"},"#"),s(" 小程序 注意的问题")],-1),h=n("ol",null,[n("li",null,[s("ios不支持webp格式的图片 "),n("br")]),n("li",null,[s("wxml中调用js或者写表达式的方法 "),n("br")]),n("li",null,[s("后台设置中bangumi https和ic备案问题 "),n("br")])],-1);function x(k,y){const e=i("ExternalLinkIcon");return t(),l("div",null,[p,n("ul",null,[n("li",null,[s("信息均已过期 "),u,s(),n("a",v,[s("备案地址"),r(e)]),s(),m])]),b,g,h,o(" <CommentService /> ")])}const q=a(c,[["render",x],["__file","index.html.vue"]]);export{q as default};

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import './style.css';

export default function HomepageFeatures() {
  return (
    <section className="features">
      <div className="container">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
            aria-hidden="true"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="text-center pb-12 md:pb-16">
                <h1
                  className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"
                  data-aos="zoom-y-out"><span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 tracking-wider">IceCMS</span>
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-600 mb-8 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="150">
                    基于 Spring Boot + Vue 前后端分离的内容管理系统，适合做 资讯商城，社区论坛，聊天交友 社区.</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate"
                    data-aos="zoom-y-out" data-aos-delay="300">
                    <div><a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                      target="_blank" href="/docs/faststart" style={{ outline: 'none' }}>快速开始</a></div>
                    <div><a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                      target="_blank" href="https://www.macwk.cc/" style={{ outline: 'none' }}>查看演示</a></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex justify-center mb-8 aos-init aos-animate" data-aos="zoom-y-out"
                  data-aos-delay="450">
                  <div className="flex flex-col justify-center">
                    {/* <img className="mx-auto" src={require('/static/img/icecms/0e825aee09f37000c6b8e5ccecaaefac.png').default} 
                    width="600" alt="Hero"/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative">
              <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">美观、流畅的操作体验
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">IceCMS 在各个方便考虑易用性，简洁性，力求给您最畅快的体验。</p>
            </div>
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:space-x-8 nav">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">自适应性布局</h3>
                <p className="mt-3 text-lg text-gray-500">响应式自适应手机、平板、PC 等多种设备屏幕分辨率，提供绝佳的浏览体验，一次建站即可拥有多个站点。</p>
                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122">
                          </path>
                        </svg></div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">PC端</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">采用简洁布局，灵感来源于MacWk对于特定ui进行美化处理。</dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                        </svg></div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">移动端</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">对移动端进行适配处理，保障用户操作体验。</dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                          </path>
                        </svg></div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">小程序端</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">使用uniapp进行开发，一次开发多端编译运行。</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-10 hover:border-gray-300 relative lg:mt-0 h-full" aria-hidden="true">
                <div className="el-carousel el-carousel--horizontal">
                  <div className="el-carousel__container" style={{ height: 381 + 'px' }}>
                    <img src="https://camo.githubusercontent.com/889b1a28a72fa29bc8c2cea77b00cb0f974fc0a822b84ac60aa909db4d34b70e/68747470733a2f2f73312e617831782e636f6d2f323032322f31312f31382f7a6e697670342e706e67" loading="auto"
                      className="el-image__inner el-image__preview" />
                  </div>

                </div>
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24 nav">
              <div
                className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center lg:space-x-8 lg:space-x-reverse">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">高效规范的代码结构</h3>
                  <p className="mt-3 text-lg text-gray-500">符合标准的纯净 XHTML/CSS 手写编码, 规范合理简单易读的程序结构, 方便客户进行网站的二次开发, 具备良好的功能扩展优势。</p>
                  <dl className="mt-10 space-y-10">
                    <div className="relative">
                      <dt>
                        <div
                          className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                            </path>
                          </svg></div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">文本处理</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">后端支持预览纯文本、Markdown等编辑模式.
                      </dd>
                    </div>
                    <div className="relative">
                      <dt>
                        <div
                          className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                            </path>
                          </svg></div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">上传图片</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">支持在线上传图片，还提供oss等云端存储方式。</dd>
                    </div>
                    <div className="relative">
                      <dt>
                        <div
                          className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                          </svg></div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">更多功能</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">更多功能等待探索.
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-10 hover:border-gray-300 relative lg:mt-0 h-full" aria-hidden="true">
                  <div className="el-carousel el-carousel--horizontal">
                    <div className="el-carousel__container" style={{ height: 381 + 'px' }}>
                      <img src="https://camo.githubusercontent.com/28faa75d418795ceec544df32a1c8cd6a43d52652703f7b09b3f6c14c2ad7e34/68747470733a2f2f73312e617831782e636f6d2f323032322f31312f32302f7a4d53374f312e706e67" loading="auto"
                        className="el-image__inner el-image__preview" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:space-x-8 nav">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">开源无加密</h3>
                <p className="mt-3 text-lg text-gray-500">采用 GPL 开源且无任何代码加密的代码，所提供程序文件无条件开放源代码。</p>
                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                          </path>
                        </svg></div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">GPL 开源协议</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      代码支持商用、二次开发</dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                          stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg></div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">无后门</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">代码一经授权不留痕迹</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-10 hover:border-gray-300 relative lg:mt-0 h-full" aria-hidden="true">
                <div className="el-carousel el-carousel--horizontal">
                  <div className="el-carousel__container" style={{ height: 381 + 'px' }}>
                    <img src="https://camo.githubusercontent.com/51a61b8ac87c4ddffee0aeb7f989a5ecfbfe974951a3d1649a0089d0180172b6/68747470733a2f2f73312e617831782e636f6d2f323032322f31312f31382f7a6e697236412e706e67" loading="auto"
                      className="el-image__inner el-image__preview" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{marginBottom: "88px"}}>
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">一款追求体验的社区论坛系统</h2>
              <p className="mt-4 text-lg text-gray-500">Operation experience forum system</p>
              <div className="wrap-title-padding-top display-flex-center characteristics-item-box nav">
                <div className="characteristics-item" style={{ marginRight: '55px' }}>
                  <img className='characteristics-item-image' src={require('/static/img/site/duoneirong.png').default} alt="多类型内容形式" draggable="true" />
                  <h2 className='characteristics-item-h2 nav'>多类型内容形式</h2>
                  <div className="characteristics-item-div nav">
                    <p className='characteristics-item-p'>长文、短图文、音频、视频、短视频、</p>
                    <p className='characteristics-item-p'>问卷、活动</p>
                  </div>
                </div>
                <div className="characteristics-item" style={{ marginRight: '88px' }}>
                  <img className='characteristics-item-image' src={require('/static/img/site/qiangdayulun.png').default} alt="强大的舆论管控能力" />
                  <h2 className='characteristics-item-h2 nav'>强大的舆论管控能力</h2>
                  <div className="characteristics-item-div nav">
                    <p className='characteristics-item-p'>预审核、敏感词、禁止评论等功能</p>
                    <p className='characteristics-item-p'>小程序社交类目上架无忧</p>
                  </div>
                </div>
                <div className="characteristics-item" style={{ marginRight: '93px' }}>
                  <img className='characteristics-item-image' src={require('/static/img/site/neirongzidingyi.png').default} alt="跨版块内容自定义组合" />
                  <h2 className='characteristics-item-h2 nav'>跨版块内容自定义组合</h2>
                  <div className="characteristics-item-div nav">
                    <p className='characteristics-item-p'>自定义频道功能，跨版块的内容</p>
                    <p className='characteristics-item-p'>可自由DIY组成新的内容聚合频道</p>
                  </div>
                </div>
                <div className="characteristics-item" style={{ marginRight: '45px' }}>
                  <img className='characteristics-item-image' src={require('/static/img/site/dulijianzhan.png').default} alt="全平台独立建站支持" />
                  <h2 className='characteristics-item-h2 nav'>全平台独立建站支持</h2>
                  <div className="characteristics-item-div nav">
                    <p className='characteristics-item-p'>支持主流形式。PC端、移动端</p>
                    <p className='characteristics-item-p'>均支持。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="download" className="section text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #6f86d6 0%, #48c6ef 100%)' }}>
          <canvas className="constellation" data-radius="0"></canvas>
          <div className="container">
            <div className="row-dow">

              <div className="col-md-6 align-self-center text-center text-md-left mb-7 mb-md-0">
                <h2 className='more-function'>更多的功能，体验从这里开始</h2>
                <p className="lead">您可以通过下载 IceCMS 源码,来更加了解，更深入的体会和谐与优雅。</p>


                <div className="gap-xy-2 my-6 jpress-download">
                  <a className='padding-a' target="_blank" href="https://github.com/Thecosy/IceCMS">
                    <svg width="18px" className="svg-icon" viewBox="0 0 20 20">
                      <path stroke="#FFFFFF" d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                    </svg>Docker 一键安装</a>
                  <a className='padding-a' target="_blank" href="https://github.com/Thecosy/IceCMS">
                    <svg width="18px" className="svg-icon" viewBox="0 0 20 20">
                      <path stroke="#FFFFFF" d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                    </svg>Tomcat 安装包 （.jar）</a>
                  <a className='padding-a' target="_blank" href="https://github.com/Thecosy/IceCMS">
                    <svg width="18px" className="svg-icon" viewBox="0 0 20 20">
                      <path stroke="#FFFFFF" d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                    </svg>下载源码</a>
                </div>

              </div>

              <div className="col-md-6 text-center">
                <img src="https://oss4jpressio.oss-cn-beijing.aliyuncs.com/templates/dockers/NewJPress/images/download-banner.jpg" />
              </div>

            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">更多功能</h2>
              <p className="mt-4 text-lg text-gray-500">更多功能待您探索...</p>
            </div>
            <dl
              className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8 nav">
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">高效的后台管理</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">独有可视化模版后台设置和内置常用模块, 帮助客户轻松快捷地安装设置管理网站栏目, 无需代码知识减少管理成本。基本设置、 首页</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">强大的SEO搜索优化</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">更加强调和注重合理的搜索引擎优化, 充分发挥 WordPress 特有的强大搜索优化优势, 使得您的网站优化推广更加轻松, 站点收录更快</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">兼容各主流浏览器</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">每一套网站模版都会在各主流浏览器中进行测试, 确保兼容这些浏览器, 例如: Firefox、Google Chrome、Safari、Opera等。</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">预设常用功能模块</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">预设企业网站常用功能模块, 包括新闻文章、产品展示、SEO优化、在线留言、友情链接等, 并完美兼容常见第三方插件扩展更多特色</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">自动缩略图功能</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">内置强大的自动缩略图功能, 减少产品文章发布编辑时间, 自动完成文章缩略图尺寸控制, 并支持多种有效的递进式缩略图显示方式。</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Docker 支持</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">支持 Docker 和 Docker Compose 方式部署，且支持 amd64 和 arm 架构.</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">强大自定义栏目模块
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">可视化自定义设置网站首页、企业特色栏目、侧边栏等众多栏目模块, 方便快捷地完成更多个性化内容的添加设置, 发挥特性实现高效建</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">直链统计
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">针对直链和短链下载情况进行统计，支持按文件、IP、Referer 来源查看热点文件</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">全局搜索
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">对内容进行全局搜索功能、子目录搜索、当前搜索</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">OSS
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">支持对外提供 WebDAV 服务，方便挂载到本地电脑或其他设备上 (目前只支持只读)</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">权限控制
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">对存用户的权限控制，设置管理员/匿名用户是否可以进行操作.</dd>
              </div>
              <div className="relative">
                <dt><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true" className="absolute h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">超宽屏
                    <span className="badge-blue">Pro</span>
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">灵活部署</dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-200">
              <div className="max-w-3xl mx-auto text-center pb-20">
                <h2 className="h2">常见问题</h2>
              </div>
              <ul className="max-w-3xl mx-auto pl-12">
                <li><button className="quaection flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
                  aria-expanded="false" style={{ outline: 'none' }}><svg
                    className="w-4 h-4 fill-current text-blue-500 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16"
                    xmlns="https://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center transition duration-200 ease-out"></rect>
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
                  </svg><span>授权是否是永久的？</span></button>
                  <div className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <p className="pb-5"> 是的，永久授权，买断制，就算以后出 V5、V6 您也不用再次付费。 </p>
                  </div>
                </li>
                <li><button className="quaection flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
                  aria-expanded="false" style={{ outline: 'none' }}><svg
                    className="w-4 h-4 fill-current text-blue-500 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16"
                    xmlns="https://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center transition duration-200 ease-out"></rect>
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
                  </svg><span>授权的形式是什么？</span></button>
                  <div className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                  >

                  </div>
                </li>
                <li><button className="quaection flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
                  aria-expanded="false" style={{ outline: 'none' }}><svg
                    className="w-4 h-4 fill-current text-blue-500 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16"
                    xmlns="https://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center transition duration-200 ease-out"></rect>
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
                  </svg><span>我之前捐赠过 IceCMS，现在购买捐赠版有没有优惠？</span></button>
                  <div className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <p className="pb-5"> 当然，非常感谢您之前对 IceCMS 的支持，之前捐赠过的用户，购买后，可凭捐赠转账截图联系我，可返 1.5 倍捐赠金额（返现金额最大为 IceCMS
                      购买金额），如您之前捐赠过 IceCMS 100 元，购买后，可找我返现 150. </p>
                  </div>
                </li>
                <li><button className="quaection flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
                  aria-expanded="false" style={{ outline: 'none' }}><svg
                    className="w-4 h-4 fill-current text-blue-500 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16"
                    xmlns="https://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center transition duration-200 ease-out"></rect>
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
                  </svg><span>是否支持从 3.x 版本升级？</span></button>
                  <div className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <p className="pb-5"> 很抱歉，由于版本差异过大，数据无法直接迁移，安装 4.x 版本会让您重新初始化数据（不会覆盖之前版本的数据），IceCMS 只保证同一个大版本可无缝升级，如您从 4.x
                      升级到 4.x Pro 是可以无缝升级的。 </p>
                  </div>
                </li>
                <li><button className="quaection flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
                  aria-expanded="false" style={{ outline: 'none' }}><svg
                    className="w-4 h-4 fill-current text-blue-500 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16"
                    xmlns="https://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center transition duration-200 ease-out"></rect>
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
                  </svg><span>IceCMS 是否可以商用？</span></button>
                  <div className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <p className="pb-5"> 当然，只要您不删除 IceCMS 相关 logo 或标志。但绝对不允许用来做赌博、诈骗、木马、病毒等违法规范行为。 </p>
                  </div>
                </li>
                <li><button className="quaection flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
                  aria-expanded="false" style={{ outline: 'none' }}><svg
                    className="w-4 h-4 fill-current text-blue-500 flex-shrink-0 mr-8 -ml-12" viewBox="0 0 16 16"
                    xmlns="https://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center transition duration-200 ease-out"></rect>
                    <rect y="7" width="16" height="2" rx="1"
                      className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
                  </svg><span>购买捐赠版后是否支持退款？</span></button>
                  <div className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <p className="pb-5"> 理论上不支持退款，如有特殊需求，可申请退款，但要扣除支付平台的手续费，约 3%。（购买超出 14 天后不再支持退款。） </p>
                  </div>
                </li><span className="block border-t border-gray-200" aria-hidden="true"></span>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              <div className="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl aos-init" data-aos="zoom-y-out">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                    <h3 className="h3 text-white mb-2">觉得怎么样？</h3>
                    <p className="text-white text-lg opacity-75">如果觉得不错的话，快来试试吧！</p>
                  </div>
                  <div><a href="https://doc.macwk.cc"
                    className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white" style={{ outline: 'none' }}>快速开始</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

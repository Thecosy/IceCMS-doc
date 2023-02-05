import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import './style.css';

export default function HomepagePrice() {
  return (
    <section className="features">
      <div className="container">
        <div className="manual-reader manual-container manual-search-reader">
          <div className="">
            <div id="app" data-v-app="">
              <div className="flex flex-col min-h-screen overflow-hidden">

                <main className="flex-grow">
                  <section className="bg-gradient-to-b to-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div className="max-w-3xl mx-auto text-center pb-12">
                          <h1 className="h1 mb-4 aos-init aos-animate" data-aos="zoom-y-out">产品定价</h1>
                          <p className="text-xl text-gray-600 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="150"> 以下为
                            IceCMS 的定价，您可以根据您的需求自行选择。 </p>
                        </div>
                        <div>
                          <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto gap-8 grid md:grid-cols-1 xl:grid-cols-3 xl:gap-6 items-start">
                            <div className="relative flex flex-col h-full py-5 px-6 rounded shadow-xl aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
                              <div className="mb-4">
                                <div className="text-lg font-bold mb-1">社区版</div>
                                <div className="inline-flex items-baseline mb-2"><span className="text-3xl font-bold">￥</span><span className="text-4xl font-bold">0</span><span className="text-gray-600 pl-2">/免费</span></div>
                                <div className="text-base text-gray-500">适合个人轻度使用</div>
                              </div>
                              <ul className="text-gray-600 -mb-2 flex-grow">
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>在线预览</span></li>


                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>简易权限控制</span></li>
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>所有基础功能</span></li>
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>定期更新中...</span></li>
                              </ul>
                              <div className="border-t border-gray-200 pt-5 mt-6"><a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" target="_blank" href="/docs/faststart" style={{ outline: 'none' }}>查看部署文档</a></div>
                            </div>
                            <div className="relative flex flex-col h-full py-5 px-6 rounded bg-blue-100 shadow-xl border-2 border-blue-500 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
                              <div className="absolute top-0 right-0 mr-5 p-3 -mt-5 bg-yellow-500 rounded-full"><svg className="w-4 h-4 fill-current text-white" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg">
                                <path d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z">
                                </path>
                              </svg></div>
                              <div className="mb-4">
                                <div className="text-lg font-bold mb-1">捐赠版</div>
                                <div className="inline-flex items-baseline mb-2"><span className="text-3xl font-bold">￥</span><span className="text-4xl font-bold">199</span><span className="text-gray-600 pl-2">/根域名（限时特价）</span></div>
                                <div className="text-base text-gray-500">适合个人轻度使用</div>
                              </div>
                              <ul className="text-gray-600 -mb-2 flex-grow">
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>社区版所有功能</span></li>
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>细致权限控制</span></li>
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>付费系统</span></li>

                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>打包下载</span></li>

                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>持续更新中...</span></li>
                              </ul>
                              <div className="border-t border-gray-200 pt-5 mt-6"><a href="https://mbd.pub/o/bread/Y56bmJ9s" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" style={{ outline: 'none' }}>立即购买</a>
                              </div>
                            </div>
                            <div className="relative flex flex-col h-full py-5 px-6 rounded shadow-xl aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
                              <div className="mb-4">
                                <div className="text-lg font-bold mb-1">定制版</div>
                                <div className="inline-flex items-baseline mb-2"><span className="text-3xl font-bold">￥</span><span className="text-4xl font-bold">详询</span><span className="text-gray-600 pl-2"></span></div>
                                <div className="text-base text-gray-500">适合有特殊需求的用户</div>
                              </div>
                              <ul className="text-gray-600 -mb-2 flex-grow">
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>基于捐赠版所有功能</span></li>
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>支持随主版本升级</span></li>
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>定制化服务</span></li>
                              </ul>
                              <div className="border-t border-gray-200 pt-5 mt-6"><a target="_blank" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="https://wpa.qq.com/msgrd?v=3&amp;uin=873019219&amp;site=qq&amp;menu=yes&amp;jumpflag=1" style={{ outline: 'none' }}>联系作者</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>


                  <main className="main-content">



                    <div style={{margin: '29px -51px 63px 37px'}}>
                      <div className="container jp-pt-5 jp-pb-5">
                        <div className="text-center  jp-pb-5" style={{marginRight: '87px',marginBottom: '52px', fontSize: '2.35rem'}}>
                          <h2 className="jp-title">IceCMS 特征</h2>
                        </div>
                        <div className="jp-features-container jp-pb-5">
                          <div className="row1" style={{display: 'flex'}}>
                            <div className="col">
                              <div className="jp-features-item">
                                 <img className="img-fluid jp-mb-4" style={{width: '30px',marginLeft: '12px'}} src={require('/static/img/site/vector1.png').default} 
                    width="600" alt="Hero"/>
                                <h6>自主研发</h6>
                              </div>
                            </div>
                            <div className="col" >
                              <div className="jp-features-item">
                              <img className="img-fluid jp-mb-4" style={{width: '25px',marginLeft: '12px'}} src={require('/static/img/site/vector2.png').default} 
                    width="600" alt="Hero"/>                                <h6>国产信创</h6>
                              </div>
                            </div>
                            <div className="col">
                              <div className="jp-features-item">
                              <img className="img-fluid jp-mb-4" style={{width: '21px',marginLeft: '12px'}} src={require('/static/img/site/vector3.png').default} 
                    width="600" alt="Hero"/>                                <h6>等保测评</h6>
                              </div>
                            </div>
                            <div className="col">
                              <div className="jp-features-item">
                              <img className="img-fluid jp-mb-4" style={{width: '30px',marginLeft: '12px'}} src={require('/static/img/site/vector4.png').default} 
                    width="600" alt="Hero"/>                                <h6>安全稳定</h6>
                              </div>
                            </div>
                            <div className="col">
                              <div className="jp-features-item">
                              <img className="img-fluid jp-mb-4" style={{width: '30px',marginLeft: '12px'}} src={require('/static/img/site/vector5.png').default} 
                    width="600" alt="Hero"/>                                <h6>正版授权</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="jp-bottom-back" >
                      <div className="containe maxwidth jp-pt-5 jp-pb-5">
                        <div className="text-center  jp-pb-5" style={{marginRight: '0px',marginBottom: '52px', fontSize: '2.35rem'}}>
                          <h2 className="jp-title mb-3">版本&amp;服务</h2>
                        </div>
                        <div>
                          <table className="table table-bordered text-center table-responsive table-hover">
                            <thead style={{position: 'sticky', top: 0 }}>
                              <tr>
                                <th scope="col" colSpan="2" style={{ width: 30 + '%' }}>功能模块</th>
                                <th scope="col" style={{ width: 17.5 + '%' }}>
                                  <span className="table-icon bg-transparent"><i className="text-white"> </i></span>
                                  <p className="text-muted mb-1">开源版</p>
                                  <h4>-</h4>
                                </th>
                                <th scope="col" style={{ width: 17.5 + '%' }}>
                                  <span className="table-icon"> 二开无忧</span>
                                  <p className="text-muted mb-1">授权版</p>
                                  <h5>¥ 199</h5>
                                </th>
                                <th scope="col" style={{ width: 17.5 + '%' }}>
                                  <span className="table-icon">性价比最高</span>
                                  <p className="text-muted mb-1">企业版</p>
                                  <h5>¥ 2999</h5>
                                </th>
                                <th scope="col" style={{ width: 17.5 + '%' }}>
                                  <span className="table-icon"> 高安全需求</span>
                                  <p className="text-muted mb-1">旗舰版</p>
                                  <h5>¥ 8999</h5>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td rowSpan="10" className="bg-table" >IceCMS服务</td>
                                <td>授权方式</td>
                                <td>基于 GPL 开源协议授权。但是无法二开，包括无法修改任何的 html 和 css 文件等。</td>
                                <td>源码同开源版一致，但是可以进行二次开发不用担心版权问题，可以把后台的版权信息修改为自己的信息等。</td>
                                <td>基于商业合同授权，不用担心侵权</td>
                                <td>基于商业合同授权，不用担心侵权</td>
                              </tr>
                              <tr>
                                <td className="text-left">源码</td>
                                <td>开源</td>
                                <td>开源</td>
                                <td>全部源码</td>
                                <td>全部源码</td>
                              </tr>
                              <tr>
                                <td className="text-left">授权域名</td>
                                <td>-</td>
                                <td>1个域名，及其子域名</td>
                                <td>3个域名，及其子域名</td>
                                <td>无域名数量限制</td>
                              </tr>
                              <tr>
                                <td className="text-left">服务方式</td>
                                <td>开源社区</td>
                                <td>独立微信群 + 技术工程师</td>
                                <td>独立微信群 + 技术架构师</td>
                                <td>独立微信群 + 高级架构师</td>
                              </tr>
                              <tr>
                                <td className="text-left">服务周期</td>
                                <td>-</td>
                                <td>3个月</td>
                                <td>1年</td>
                                <td>1年</td>
                              </tr>
                              <tr>
                                <td className="text-left">等保测评</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅ 二级等保</td>
                                <td>✅ 三级等保</td>
                              </tr>
                              <tr>
                                <td className="text-left">信创兼容</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">集群部署</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">前台和后台分离部署</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">分布式缓存</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>

                              <tr>
                                <td rowSpan="11" className="bg-table">安全加固</td>
                                <td className="text-left">前端登录对密码进行非对称数据加密，防止中间网络窃取</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>

                              <tr>
                                <td className="text-left">IP 登录密码错误次数限制，冻结某个 IP 登录时间</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">密码失效时长配置，失效后续重新设置新的密码</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">账号登录密码次数错误，冻结时间设置 </td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">用户登录成功后，在登录成功页面会显示当前登录的时间、IP地址、浏览器等信息，以及上一次登录的时间，IP地址和浏览器信息。</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">用户登录 IP 地址/操作系统、硬件设备，网络状况等安全数据记录</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">后台允许登录时间配置 </td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">后台允许登录的 IP 白名单配置</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">密码设置的加固配置，不允许设置 123456、abcdef 等等简单密码</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">登录后，闲置固定时间（可配置）自动退出</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">密码设置时，对简单密码，与旧密码相同等不让设置</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>

                              <tr>
                                <td rowSpan="4" className="bg-table" >附件模块</td>
                                <td className="text-left">基本功能：附件的上传、查看、删除等功能</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>

                              </tr>
                              <tr>
                                <td className="text-left">附件后缀白名单功能</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">附件上传  IP 地址、地理位置、浏览器、硬件设备、的记录功能</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">视频功能：支持阿里云/腾讯云的的直播、点播等功能</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>


                              <tr>
                                <td rowSpan="4" className="bg-table">流程模块</td>
                                <td className="text-left">待办事项</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>

                              </tr>
                              <tr>
                                <td className="text-left">我的已办</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">流程管理</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">可视化流程设计</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>

                              <tr>
                                <td className="bg-table" >模板和插件</td>
                                <td className="text-left">模板和插件的安装，配置等功能</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>

                              <tr>
                                <td rowSpan="2" className="bg-table">多站点和多语言</td>
                                <td className="text-left">基础功能：多站点的创建、删除等基础功能</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>

                              </tr>
                              <tr>
                                <td className="text-left">站点和部门绑定，不同的部门管理不同的站点</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>

                              <tr>
                                <td rowSpan="3" className="bg-table" >用户模块</td>
                                <td className="text-left">基本功能：用户的增删改查和密码设置等功能</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>

                              </tr>
                              <tr>
                                <td className="text-left">普通账号密码登录和手机登录</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>
                              <tr>
                                <td className="text-left">SSO 单点登录，整合其他系统用户登录</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>

                              <tr>
                                <td rowSpan="2" className="bg-table">统计模块</td>
                                <td className="text-left">文章访问统计</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>

                              </tr>
                              <tr>
                                <td className="text-left">页面访问统计</td>
                                <td>❌</td>
                                <td>❌</td>
                                <td>✅</td>
                                <td>✅</td>
                              </tr>


                              <tr className="text-left price-note">
                                <td colSpan="6" className="bg-table">
                                  <div className="p-3">
                                    <p className="mb-3">服务价格（注：所有服务不含硬件相关费用，不含差旅费用。）</p>
                                    <p>以下情况不属于服务范围：</p>
                                    <p>1、自行修改或使用非原始IceCMS企业版程序代码产生的问题；</p>
                                    <p>2、自行对数据库进行直接操作导致数据库出错或者崩溃；</p>
                                    <p>3、非官方的模块/插件的安装以及由于安装模块/插件造成的故障；</p>
                                    <p>4、服务器、虚拟主机原因造成的系统故障；</p>
                                    <p>5、二次开发或定制及其他可能产生问题的情况。</p>
                                  </div>
                                </td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <section>
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
                    </section>
                    <section>
                      <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pb-12 md:pb-20">
                          <div className="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl aos-init" data-aos="zoom-y-out">
                            <div className="flex flex-col lg:flex-row justify-between items-center">
                              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                                <h3 className="h3 text-white mb-2">觉得怎么样？</h3>
                                <p className="text-white text-lg opacity-75">如果想要购买的话，点击右侧按钮跳转至购买页面。</p>
                              </div>
                              <div><a href="https://www.IceCMS.vip/signup" className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white" style={{ outline: 'none' }}>购买授权</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </main>

                </main></div>
            </div>

          </div>

        </div>
      </div>
    </section >
  );
}

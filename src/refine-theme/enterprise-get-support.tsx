import React from "react";
import clsx from "clsx";
import { ClockIcon } from "./icons/clock";
import { SlackIcon } from "../assets/integration-icons";
import { CommonThemedImage } from "./common-themed-image";
import './css/style.css';

export const EnterpriseGetSupport = ({ className }: { className?: string }) => {
    return (
        
        <div className={clsx("flex flex-col", "not-prose", className)}>
           
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
                        <div
                className={clsx(
                    "pl-4 landing-sm:pl-6 landing-md:pl-10",
                    "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
                )}
            >
                <h2
                    className={clsx(
                        "font-semibold",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                   产品定价
                </h2>
            </div>
                          <p className="text-xl text-gray-6001 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="150"> 以下为
                            IceCMS 的定价，您可以根据您的需求自行选择。 </p>
                        </div>
                        <div>
                          <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto gap-8 grid md:grid-cols-1 xl:grid-cols-3 xl:gap-6 items-start">
                            <div className="relative flex flex-col h-full py-5 px-6 rounded shadow-xl aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
                              <div className="mb-4">
                                <div className="text-lg font-bold mb-1">社区版</div>
                                <div className="inline-flex items-baseline mb-2"><span className="text-3xl font-bold">￥</span><span className="text-4xl font-bold">0</span><span className="text-gray-6001 pl-2">/免费</span></div>
                                <div className="text-base text-gray-500">适合个人轻度使用</div>
                              </div>
                              <ul className="text-gray-6001 -mb-2 flex-grow">
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
                              <div className="border-t border-gray-200 pt-5 mt-6"><a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" target="_blank" href="/docs" style={{ outline: 'none' }}>查看部署文档</a></div>
                            </div>
                            <div className="relative flex flex-col h-full py-5 px-6 rounded bg-blue-100 shadow-xl border-2 border-blue-500 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
                              <div className="absolute top-0 right-0 mr-5 p-3 -mt-5 bg-yellow-500 rounded-full"><svg className="w-4 h-4 fill-current text-white" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg">
                                <path d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z">
                                </path>
                              </svg></div>
                              <div className="mb-4">
                                <div className="text-lg font-bold mb-1">捐赠版</div>
                                <div className="inline-flex items-baseline mb-2"><span className="text-3xl font-bold">￥</span><span className="text-4xl font-bold">199</span><span className="text-gray-6001 pl-2">/不限根域名（限时特价）</span></div>
                                <div className="text-base text-gray-500">适合个人使用</div>
                              </div>
                              <ul className="text-gray-6001 -mb-2 flex-grow">
                                <li className="flex items-center mb-2"><svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                  </path>
                                </svg><span>社区版所有功能 + 领先一个版本拉入私人仓库优先更新</span></li>
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
                                </svg><span>Nuxt - seo优化版本</span></li>

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
                                <div className="inline-flex items-baseline mb-2"><span className="text-3xl font-bold">￥</span><span className="text-4xl font-bold">详询</span><span className="text-gray-6001 pl-2"></span></div>
                                <div className="text-base text-gray-500">适合有特殊需求的用户</div>
                              </div>
                              <ul className="text-gray-6001 -mb-2 flex-grow">
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
                </main></div>
            </div>

          </div>

        </div>
      </div>
    </section >
            <div
                className={clsx(
                    "pl-4 landing-sm:pl-6 landing-md:pl-10",
                    "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
                )}
            >
                <h2
                    className={clsx(
                        "font-semibold",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    IceCMS 提供怎样的专业支持
                </h2>
                <h3 className={clsx("mt-4 landing-sm:mt-10")}>
                    <span className={clsx("dark:text-gray-0 text-gray-900")}>
                        产品{" "}
                    </span>
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
                        )}
                    >
                        和帮助
                    </span>
                    。
                </h3>
            </div>

            <div
                className={clsx(
                    "mt-8 landing-md:mt-20",
                    "grid",
                    "grid-cols-1 landing-md:grid-cols-2",
                    "gap-8 landing-sm:gap-12 landing-lg:gap-6",
                )}
            >
                <div
                    className={clsx(
                        "flex flex-col",
                        "dark:bg-landing-noise",
                        "dark:bg-gray-800 bg-gray-50",
                        "rounded-2xl landing-sm:rounded-3xl",
                    )}
                >
                    <CommonThemedImage
                        className={clsx(
                            "rounded-2xl landing-sm:rounded-3xl",
                            "landing-lg:h-[360px]",
                        )}
                        srcDark="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/priority-support-dark.png"
                        srcLight="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/priority-support-light.png"
                    />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-4",
                            "p-4 landing-sm:p-10",
                            "not-prose",
                        )}
                    >
                        <h2
                            className={clsx(
                                "text-base landing-sm:text-2xl",
                                "dark:text-gray-300 text-gray-900",
                                "font-semibold",
                            )}
                        >
                            私有支持
                        </h2>
                        <p
                            className={clsx(
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            由IceCMS独家技术支持。
                        </p>
                        <div
                            className={clsx(
                                "flex items-center flex-wrap gap-4",
                                "mt-4",
                            )}
                        >
                            <div
                                style={{
                                    backdropFilter: "blur(4px)",
                                }}
                                className={clsx(
                                    "flex items-center gap-2",
                                    "dark:bg-gray-900/50 bg-gray-0",
                                    "dark:text-gray-400 text-gray-600",
                                    "pl-3 py-3 pr-5",
                                    "rounded-full",
                                    "text-xs",
                                )}
                            >
                                <SlackIcon />
                                <div>Private Slack channel</div>
                            </div>
                            <div
                                style={{
                                    backdropFilter: "blur(4px)",
                                }}
                                className={clsx(
                                    "flex items-center gap-2",
                                    "dark:bg-gray-900/50 bg-gray-0",
                                    "dark:text-gray-400 text-gray-600",
                                    "pl-3 py-3 pr-5",
                                    "rounded-full",
                                    "text-xs",
                                )}
                            >
                                <ClockIcon
                                    className={clsx(
                                        "dark:text-refine-blue-alt text-refine-blue",
                                    )}
                                />
                                <div>24 Hours First response time</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={clsx(
                        "flex flex-col",
                        "dark:bg-landing-noise",
                        "dark:bg-gray-800 bg-gray-50",
                        "rounded-2xl landing-sm:rounded-3xl",
                    )}
                >
                    <CommonThemedImage
                        className={clsx(
                            "rounded-2xl landing-sm:rounded-3xl",
                            "landing-lg:h-[360px]",
                        )}
                        srcDark="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/onboarding-dark.png"
                        srcLight="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/onboarding-light.png"
                    />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-2 landing-sm:gap-4",
                            "p-4 landing-sm:p-10",
                            "not-prose",
                        )}
                    >
                        <h2
                            className={clsx(
                                "text-base landing-sm:text-2xl",
                                "dark:text-gray-300 text-gray-900",
                                "font-semibold",
                            )}
                        >
                            独家帮助和教程
                        </h2>
                        <p
                            className={clsx(
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            我们的加速计划旨在帮助规划、架构和
                            构建您的项目。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

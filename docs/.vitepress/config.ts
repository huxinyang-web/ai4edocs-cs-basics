import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'
import path from 'path'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy Docs - Computer Science Basics',
  base: '/ai4edocs-cs-basics/',
  srcDir: '.',
  publicDir: '.vitepress/public',
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      alias: [
        {
          find: '/assets/',
          replacement: path.resolve(__dirname, './public/assets/') + '/'
        }
      ]
    }
  },
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Cs-Basics', icon: 'book', link: '/' },
      { text: 'Dev-Tools', link: 'https://huxinyang-web.github.io/ai4edocs-dev-tools/' },
      { text: 'Modeling', link: 'https://huxinyang-web.github.io/ai4edocs-modeling/' },
      { text: 'Optimization', link: 'https://huxinyang-web.github.io/ai4edocs-optimization/' },
      { text: 'AI-Energy', link: 'https://huxinyang-web.github.io/ai4edocs-ai-energy/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'CS 基础',
          collapsed: false,
          items: [
            { text: 'Windows 命令提示符介绍', link: '/01CSBase/1-Windows 命令提示符介绍.md' },
            { text: 'PowerShell 和 Windows Terminal', link: '/01CSBase/2-PowerShell 和 WindowsTerminal.md' },
            { text: '环境变量及其设置', link: '/01CSBase/3-环境变量及其设置.md' },
            { text: 'Windows 下安装 gcc 编译器和 CLion', link: '/01CSBase/4-Windows 下安装 gcc 编译器和 CLion.md' },
            { text: 'make 和 Makefile 介绍', link: '/01CSBase/5-make 和 Makefile 介绍.md' },
            { text: '静态链接库和动态链接库', link: '/01CSBase/6-静态链接库和动态链接库.md' },
            { text: '以 SAM 为例整体实操一下', link: '/01CSBase/7-以 SAM 为例整体实操一下.md' },
            { text: '以 CoolProp 为例的实操', link: '/01CSBase/8-以 CoolProp 为例的实操.md' },
            { text: 'dll 生成与调用实操', link: '/01CSBase/9-dll 生成与调用实操.md' }
          ]
        },
        {
          text: 'Julia 入门',
          collapsed: true,
          items: [
            { text: 'julia 的安装', link: '/02JuliaIntro/0010-julia 的安装.md' },
            { text: 'julia 的 REPL', link: '/02JuliaIntro/0020-julia 的 REPL.md' },
            { text: 'julia 的语法要点', link: '/02JuliaIntro/0030-julia 的语法要点.md' },
            { text: 'julia 的包管理', link: '/02JuliaIntro/0040-julia 的包管理.md' },
            { text: 'julia 的环境', link: '/02JuliaIntro/0050-julia 的环境.md' },
            { text: '创建 julia 包', link: '/02JuliaIntro/0060-创建 Julia 包.md' },
            { text: 'julia 的类型系统', link: '/02JuliaIntro/0070-julia 的类型系统.md' },
            { text: 'julia 代码编译成 app', link: '/02JuliaIntro/0090-julia 代码编译成 app.md' },
            { text: 'julia 编译成 library', link: '/02JuliaIntro/0091-julia 编译成 library.md' },
            { text: 'julia 编译自定义系统镜像', link: '/02JuliaIntro/0092-julia 编译自定义系统镜像.md' },
            { text: 'julia 的元编程', link: '/02JuliaIntro/0110-julia 的元编程.md' },
            { text: 'julia-binary-wrappers', link: '/02JuliaIntro/0120- julia-binary-wrappers.md' },
            { text: 'ijulia', link: '/02JuliaIntro/0130-ijulia.md' },
            { text: 'julia 的 http 服务', link: '/02JuliaIntro/1001-julia 的 http 服务.md' },
            { text: 'julia 与 grpc', link: '/02JuliaIntro/1002-julia 与 grpc.md' },
            { text: 'julia 的前后端分离', link: '/02JuliaIntro/1003-julia 的前后端分离.md' }
          ]
        },
        {
          text: 'Go 语言简介',
          collapsed: true,
          items: [
            { text: 'golang 的安装', link: '/12GolangIntro/01-golang 的安装.md' },
            { text: 'golang 的特点', link: '/12GolangIntro/02-golang 的特点.md' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/huxinyang-web/ai4edocs-cs-basics/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  },

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
})

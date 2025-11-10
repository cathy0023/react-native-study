/**
 * PostCSS 配置文件
 * 
 * 设计思想：
 * 这个文件配置了 PostCSS 的处理流程，用于在 web 端构建时处理 Tailwind CSS。
 * PostCSS 是一个用 JavaScript 转换 CSS 的工具，Tailwind CSS 需要它来生成最终的 CSS 文件。
 * 
 * 功能说明：
 * - 配置 tailwindcss 插件：处理 Tailwind 的指令和类名
 * - 配置 autoprefixer 插件：自动添加浏览器前缀
 * 
 * 使用场景：
 * 在 web 端构建时，PostCSS 会处理 global.css 文件，将 Tailwind 指令转换为实际的 CSS。
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


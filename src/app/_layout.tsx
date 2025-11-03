/**
 * 应用布局组件
 * 
 * 设计思想：
 * 这是应用的根布局组件，负责设置全局样式和布局结构。
 * 使用 Stack Navigator 来管理页面导航栈，支持页面间的返回功能。
 * 
 * 功能说明：
 * - 导入全局样式文件
 * - 使用 Stack Navigator 管理页面导航
 * - 支持页面返回功能（如练习页面返回到测评中心）
 * 
 * 依赖关系：
 * - 依赖 expo-router 的 Stack 组件进行导航栈管理
 * - 依赖全局样式文件
 */
import "../global.css";
import { Stack } from "expo-router";

/**
 * 应用布局组件
 * 
 * 组件功能：
 * - 使用 Stack Navigator 渲染当前路由对应的页面组件
 * - 提供导航栈管理，支持页面返回功能
 */
export default function Layout() {
  return (
    <Stack
      // 设置屏幕选项，隐藏默认的头部导航栏
      // 因为我们使用自定义的底部导航栏
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

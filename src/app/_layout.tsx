/**
 * 应用布局组件
 * 
 * 设计思想：
 * 这是应用的根布局组件，负责设置全局样式和布局结构。
 * 使用 Stack Navigator 来管理页面导航栈，支持页面间的返回功能。
 * 使用 GluestackUIProvider 提供全局的 UI 配置和主题支持。
 * 
 * 功能说明：
 * - 导入全局样式文件
 * - 使用 GluestackUIProvider 包裹整个应用，提供 gluestack UI 的全局配置
 * - 使用 Stack Navigator 管理页面导航
 * - 支持页面返回功能（如练习页面返回到测评中心）
 * 
 * 依赖关系：
 * - 依赖 gluestack UI v3 的 GluestackUIProvider 提供全局 UI 配置
 * - 依赖 expo-router 的 Stack 组件进行导航栈管理
 * - 依赖全局样式文件
 */
import "../global.css";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

/**
 * 应用布局组件
 * 
 * 组件功能：
 * - 使用 GluestackUIProvider 包裹整个应用，确保所有 gluestack UI 组件能正常工作
 * - 使用 Stack Navigator 渲染当前路由对应的页面组件
 * - 提供导航栈管理，支持页面返回功能
 * 
 * GluestackUIProvider 的作用：
 * - 提供全局的主题配置（颜色、字体、间距等）
 * - 让所有 gluestack UI 组件能够访问这些配置
 * - 统一管理应用的视觉风格
 */
export default function Layout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack
        // 设置屏幕选项，隐藏默认的头部导航栏
        // 因为我们使用自定义的底部导航栏
        screenOptions={{
          headerShown: false,
        }}
      />
    </GluestackUIProvider>
  );
}

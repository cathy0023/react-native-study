/**
 * Gluestack UI 自定义主题配置
 * 
 * 设计思想：
 * 这个文件定义了整个应用的视觉主题，包括颜色、字体、间距等全局样式。
 * 通过自定义主题，我们可以让 gluestack UI 组件的外观与原始设计保持一致。
 * 
 * 功能说明：
 * - 定义颜色系统：主色、背景色、文字颜色等
 * - 定义间距系统：统一的内边距和外边距值
 * - 定义字体系统：字体大小、字重等
 * - 定义圆角系统：统一的圆角值
 * 
 * 使用场景：
 * 这个配置会被 GluestackUIProvider 使用，为所有 gluestack UI 组件提供统一的样式基础。
 */

import { config as defaultConfig } from '@gluestack-ui/config';

// 基于默认配置，只覆盖需要修改的值
export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      // 覆盖蓝色系，使用原设计的主蓝色
      blue500: '#3458f8', // 主蓝色
      blue600: '#3458f8', // 主蓝色（用于激活状态）
      
      // 覆盖灰色系，使用原设计的灰色值
      gray50: '#f5f7fa', // 背景色
      gray100: '#f3f4f6', // 边框色
      gray500: '#888888', // 次要文字色
      gray600: '#666666', // 描述文字色
      gray900: '#333333', // 主要文字色
    },
    space: {
      ...defaultConfig.tokens.space,
      // 确保间距值正确
      4: '16px',
      5: '20px',
      6: '24px',
    },
    borderRadius: {
      ...defaultConfig.tokens.borderRadius,
      // 覆盖圆角值
      md: '10px', // Logo 圆角
      lg: '12px', // 卡片图标圆角
      xl: '16px', // 卡片圆角
      '2xl': '20px', // 按钮圆角
    },
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      // 覆盖字体大小
      sm: '13px', // 卡片描述
      md: '14px', // 副标题、按钮文字
      lg: '16px', // 卡片标题
      xl: '18px', // 区域标题
      '2xl': '20px', // 页面标题
    },
  },
  components: defaultConfig.components,
};


/**
 * 底部导航栏组件
 * 
 * 设计思想：
 * 这是一个固定在页面底部的导航栏，用于在不同页面之间切换。
 * 它提供了两个主要入口：测评中心和控制台。
 * 使用 gluestack UI 组件库实现，提供统一的样式和交互体验。
 * 
 * 功能说明：
 * - 显示两个导航选项：测评中心和控制台
 * - 根据当前路由高亮显示激活的导航项
 * - 点击导航项可以切换到对应的页面
 * 
 * 使用场景：
 * 这个组件会在所有需要底部导航的页面中使用，通过布局文件统一管理。
 * 
 * 依赖关系：
 * - 依赖 expo-router 的 usePathname 和 useRouter 进行路由管理
 * - 使用 gluestack UI 的 Box、HStack、Pressable、Text 组件进行渲染
 * - gluestack UI 组件使用样式属性（如 bg、p、rounded）而不是 className
 */
import React from 'react';
import { Box, HStack, Pressable, Text } from '@gluestack-ui/themed';
import { usePathname, useRouter } from 'expo-router';

/**
 * 导航项配置类型
 * 定义每个导航项的基本信息
 */
interface NavItem {
  /** 路由路径 */
  path: string;
  /** 显示的文字 */
  label: string;
}

/**
 * 导航项配置数组
 * 定义底部导航栏的所有导航选项
 */
const navItems: NavItem[] = [
  { path: '/assessment-center', label: '测评中心' },
  { path: '/console', label: '控制台' },
];

/**
 * 底部导航栏组件
 * 
 * 组件功能：
 * - 显示导航选项列表
 * - 根据当前路径高亮激活项
 * - 处理导航切换逻辑
 */
export default function BottomNav() {
  // 获取当前路径，用于判断哪个导航项应该高亮
  const pathname = usePathname();
  // 获取路由对象，用于页面跳转
  const router = useRouter();

  /**
   * 处理导航项点击事件
   * 当用户点击某个导航项时，跳转到对应的页面
   */
  const handleNavPress = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      // 固定在底部，使用绝对定位
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      // 白色背景
      bg="$white"
      // 水平布局，使用 flex-row
      flexDirection="row"
      // 垂直内边距
      py="$3"
      // 顶部边框 - 使用非常浅的灰色，几乎不可见
      // 如果不需要边框，可以完全移除这两行
      borderTopWidth={1}
      borderTopColor="rgba(0, 0, 0, 0.05)"
      // 阴影效果（iOS）
      shadowColor="$black"
      shadowOffset={{ width: 0, height: -2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      // Android 阴影效果
      elevation={5}
    >
      {navItems.map((item) => {
        // 判断当前导航项是否激活（当前路径是否匹配）
        const isActive = pathname === item.path || 
          (item.path === '/assessment-center' && pathname === '/');

        return (
          <Pressable
            key={item.path}
            // 使用 flex-1 让每个导航项平均分配空间
            flex={1}
            // 居中对齐
            alignItems="center"
            justifyContent="center"
            // 绑定点击事件，跳转到对应页面
            onPress={() => handleNavPress(item.path)}
          >
            {/* 导航图标和文字容器 */}
            <Box alignItems="center" justifyContent="center">
              {/* 导航图标 - 使用实心圆点表示 */}
              {/* 
                修复方形变圆形的问题：
                1. 确保宽高相等（使用相同的值）
                2. 使用 rounded="$full" 创建完美的圆形
                3. 添加 overflow: 'hidden' 确保圆角生效
                4. 使用 aspectRatio 确保是正方形
              */}
              <Box
                w="$6"
                h="$6"
                // 使用 rounded="$full" 创建完美的圆形
                rounded="$full"
                // 确保是正方形，避免渲染时出现方形闪烁
                aspectRatio={1}
                mb="$1"
                // 根据激活状态设置背景色
                bg={isActive ? '$blue600' : '$gray200'}
                // 确保圆角正确渲染
                overflow="hidden"
              />

              {/* 导航文字 */}
              <Text
                fontSize="$xs"
                // 根据激活状态设置文字颜色和字重
                color={isActive ? '$blue600' : '$gray500'}
                fontWeight={isActive ? '$medium' : '$normal'}
              >
                {item.label}
              </Text>
            </Box>
          </Pressable>
        );
      })}
    </Box>
  );
}


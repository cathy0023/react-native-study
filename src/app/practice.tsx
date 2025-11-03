/**
 * 练习页面
 * 
 * 设计思想：
 * 这是一个简单的占位页面，用于展示练习功能入口。
 * 当前只显示占位文字，后续可以扩展为实际的对话练习界面。
 * 使用 gluestack UI 组件库实现，提供统一的样式和交互体验。
 * 
 * 功能说明：
 * - 显示练习页面的占位文字
 * - 接收路由参数（练习ID和类型）
 * - 可以显示当前选择的练习信息
 * - 提供返回按钮，可以返回到测评中心
 * 
 * 使用场景：
 * 用户从测评中心页面点击"开始练习"按钮后跳转到此页面。
 * 
 * 依赖关系：
 * - 使用 expo-router 的 useLocalSearchParams 获取路由参数
 * - 使用 expo-router 的 useRouter 进行页面导航
 * - 使用 Stack Navigator 的导航栈功能支持返回
 * - 使用 gluestack UI 的 Box、Text、Pressable、HStack 组件进行UI渲染
 * - gluestack UI 组件使用样式属性（如 bg、p、rounded）而不是 className
 */
import React from 'react';
import { Box, Text, Pressable, HStack } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

/**
 * 练习页面组件
 * 
 * 页面结构：
 * 1. 返回按钮区域：固定在顶部
 * 2. 页面内容区域：显示占位文字和练习信息
 */
export default function Practice() {
  // 获取安全区域边距，确保内容不会被系统UI遮挡
  const insets = useSafeAreaInsets();
  // 获取路由参数，包括练习ID和类型
  const { id, type } = useLocalSearchParams<{ id: string; type: string }>();
  // 获取路由对象，用于页面导航和返回
  const router = useRouter();

  /**
   * 处理返回按钮点击事件
   * 返回到测评中心页面
   */
  const handleGoBack = () => {
    // 使用 router.back() 返回到上一个页面（导航栈中的前一个页面）
    // 如果导航栈中只有一个页面，则跳转到测评中心
    router.back();
  };

  // 计算动态的顶部内边距值
  const dynamicPaddingTop = insets.top + 16;

  return (
    <Box flex={1} bg="$gray50">
      {/* 返回按钮区域 */}
      {/* 
        注意：对于动态值（如根据设备状态栏高度计算的 paddingTop），必须使用内联样式
        gluestack UI 的样式属性主要用于静态样式，动态样式使用 style prop
      */}
      <Box
        flexDirection="row"
        alignItems="center"
        px="$4"
        pb="$4"
        bg="$white"
        style={{ 
          paddingTop: dynamicPaddingTop,
        }}
      >
        {/* 返回按钮 */}
        <Pressable
          flexDirection="row"
          alignItems="center"
          onPress={handleGoBack}
        >
          {/* 返回箭头图标（使用文字模拟） */}
          <Text fontSize="$xl" color="$gray700" mr="$2">
            ←
          </Text>
          {/* 返回文字 */}
          <Text fontSize="$md" color="$gray700">
            返回
          </Text>
        </Pressable>
      </Box>

      {/* 页面内容区域 */}
      <Box flex={1} alignItems="center" justifyContent="center" px="$4">
        {/* 占位文字 */}
        <Text fontSize="$xl" color="$gray600" mb="$4">
          练习页面
        </Text>
        {/* 显示练习信息（如果有参数） */}
        {id && type && (
          <Text fontSize="$sm" color="$gray500">
            练习ID: {id} | 类型: {type === 'fast' ? '极速版' : '深度思考版'}
          </Text>
        )}
      </Box>
    </Box>
  );
}


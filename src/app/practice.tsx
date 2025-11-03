/**
 * 练习页面
 * 
 * 设计思想：
 * 这是一个简单的占位页面，用于展示练习功能入口。
 * 当前只显示占位文字，后续可以扩展为实际的对话练习界面。
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
 */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
    <View className="flex-1 bg-gray-50">
      {/* 返回按钮区域 */}
      {/* 
        注意：Tailwind CSS 在构建时扫描代码生成 CSS，动态生成的类名无法被识别
        因此对于动态值（如根据设备状态栏高度计算的 paddingTop），必须使用内联样式
        静态样式使用 Tailwind，动态样式使用 style prop，这是最佳实践
      */}
      <View 
        className="flex-row items-center px-4 pb-4 bg-white"
        style={{ 
          paddingTop: dynamicPaddingTop,
        }}
      >
        {/* 返回按钮 */}
        <TouchableOpacity
          className="flex-row items-center"
          onPress={handleGoBack}
          activeOpacity={0.7}
        >
          {/* 返回箭头图标（使用文字模拟） */}
          <Text className="text-xl text-gray-700 mr-2">←</Text>
          {/* 返回文字 */}
          <Text className="text-base text-gray-700">返回</Text>
        </TouchableOpacity>
      </View>

      {/* 页面内容区域 */}
      <View className="flex-1 items-center justify-center px-4">
        {/* 占位文字 */}
        <Text className="text-xl text-gray-600 mb-4">
          练习页面
        </Text>
        {/* 显示练习信息（如果有参数） */}
        {id && type && (
          <Text className="text-sm text-gray-500">
            练习ID: {id} | 类型: {type === 'fast' ? '极速版' : '深度思考版'}
          </Text>
        )}
      </View>
    </View>
  );
}


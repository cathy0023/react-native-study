/**
 * 控制台页面
 * 
 * 设计思想：
 * 这是一个简单的占位页面，用于展示控制台功能入口。
 * 当前只显示占位文字，后续可以扩展更多功能。
 * 
 * 功能说明：
 * - 显示控制台页面的占位文字
 * - 提供底部导航栏
 * 
 * 使用场景：
 * 用户通过底部导航栏切换到控制台页面时显示。
 * 
 * 依赖关系：
 * - 使用通用组件 BottomNav
 */
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';

/**
 * 控制台页面组件
 * 
 * 页面结构：
 * 1. 页面内容区域：显示占位文字
 * 2. 底部导航栏：固定在页面底部
 */
export default function Console() {
  // 获取安全区域边距，确保内容不会被系统UI遮挡
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-50">
      {/* 页面内容区域 */}
      <View 
        className="flex-1 items-center justify-center px-4"
        style={{ paddingBottom: 80 }} // 为底部导航栏留出空间
      >
        {/* 占位文字 */}
        <Text className="text-xl text-gray-600">
          控制台页面
        </Text>
      </View>

      {/* 底部导航栏：固定在页面底部 */}
      <BottomNav />
    </View>
  );
}


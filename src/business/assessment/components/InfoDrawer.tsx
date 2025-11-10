/**
 * 辅助信息抽屉组件
 * 
 * 设计思想：
 * 这是一个底部弹出的抽屉组件，用于显示练习的辅助信息。
 * 用户可以通过点击信息按钮打开这个抽屉，查看AI患者的详细信息、
 * 来访者信息、背景资料和咨询目标。
 * 
 * 功能说明：
 * - 显示AI患者的基本信息（标题、描述、头像）
 * - 展示来访者信息、背景资料、咨询目标等辅助内容
 * - 支持点击背景遮罩关闭抽屉
 * - 提供清晰的视觉层次和信息组织
 * 
 * 使用场景：
 * 这个组件会在练习页面中使用，用户点击右上角的信息按钮时弹出，
 * 帮助用户了解练习的背景信息和咨询目标。
 * 
 * 依赖关系：
 * - 使用 React Native 的 Modal 组件实现弹出效果
 * - 使用 gluestack UI v3 的 Box、Text、VStack、HStack、ScrollView 组件进行UI渲染
 * - 使用 PracticeInfo 类型定义数据结构
 * - 使用 className 属性应用 Tailwind CSS 样式，与 web 端 React 开发保持一致
 */
import React from 'react';
import { Modal, Pressable as RNPressable } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { ScrollView } from '@/components/ui/scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PracticeInfo } from '../types';

/**
 * 辅助信息抽屉组件的属性接口
 */
interface InfoDrawerProps {
  /** 是否显示抽屉 */
  isOpen: boolean;
  /** 关闭抽屉的回调函数 */
  onClose: () => void;
  /** 练习的辅助信息数据 */
  info: PracticeInfo;
}

/**
 * 辅助信息抽屉组件
 * 
 * 组件功能：
 * - 显示练习的辅助信息
 * - 提供关闭功能
 * - 适配移动端安全区域
 */
export default function InfoDrawer({ isOpen, onClose, info }: InfoDrawerProps) {
  // 获取安全区域边距，确保内容不会被系统UI遮挡
  const insets = useSafeAreaInsets();

  return (
    <Modal
      // Modal 组件：实现弹出效果
      // visible 属性控制是否显示
      visible={isOpen}
      // 透明背景，允许自定义样式
      transparent={true}
      // 动画类型：从底部滑出
      animationType="slide"
      // 点击背景时关闭抽屉
      onRequestClose={onClose}
    >
      {/* 背景遮罩层：半透明黑色背景 */}
      <RNPressable
        // 点击背景时关闭抽屉
        onPress={onClose}
        // 背景遮罩样式：全屏，半透明黑色
        className="flex-1 bg-black/50 justify-end"
      >
        {/* 抽屉内容容器 */}
        <RNPressable
          // 阻止事件冒泡，避免点击内容区域时关闭抽屉
          onPress={(e) => e.stopPropagation()}
          // 抽屉容器样式：白色背景，圆角顶部
          className="bg-white rounded-t-[20px] max-h-[80%]"
          style={{
            paddingBottom: insets.bottom,
          }}
        >
          {/* 可滚动内容区域 */}
          <ScrollView
            // 使用 gluestack UI 的 ScrollView 组件
            // 允许内容超出屏幕时滚动
            showsVerticalScrollIndicator={false}
          >
            {/* 内容容器：使用 gluestack UI 的 VStack 实现垂直布局 */}
            <VStack space="lg" className="p-5">
              {/* 拖拽指示器：帮助用户理解可以拖拽关闭 */}
              <Box
                // 拖拽指示器样式：灰色横条
                className="w-16 h-1 bg-gray-300 rounded-full self-center mb-2"
              />

              {/* AI患者信息区域 */}
              <VStack space="md" className="items-center">
                {/* AI患者头像 */}
                <Box
                  // 头像样式：圆形蓝色背景
                  // 使用 bg-[#3458f8] 来设置自定义蓝色背景色
                  className="w-16 h-16 rounded-full bg-[#3458f8]"
                >
                  {/* 头像文字：显示字母A表示AI患者 */}
                  <Text className="text-white font-bold text-2xl text-center leading-[64px]">
                    A
                  </Text>
                </Box>

                {/* AI患者标题 */}
                <Text className="text-xl font-semibold text-gray-900 text-center">
                  {info.title}
                </Text>

                {/* AI患者描述 */}
                <Text className="text-sm text-gray-600 text-center">
                  {info.description}
                </Text>
              </VStack>

              {/* 分隔线 */}
              <Box className="h-0.5 bg-gray-200" />

              {/* 来访者信息区域 */}
              <VStack space="sm">
                {/* 信息标题 */}
                <Text className="text-lg font-semibold text-gray-900">
                  来访者信息
                </Text>
                {/* 信息内容 */}
                <Text className="text-sm text-gray-700 leading-5">
                  {info.visitorInfo}
                </Text>
              </VStack>

              {/* 背景资料区域 */}
              <VStack space="sm">
                {/* 信息标题 */}
                <Text className="text-lg font-semibold text-gray-900">
                  背景资料
                </Text>
                {/* 信息内容 */}
                <Text className="text-sm text-gray-700 leading-5">
                  {info.background}
                </Text>
              </VStack>

              {/* 咨询目标区域 */}
              <VStack space="sm">
                {/* 信息标题 */}
                <Text className="text-lg font-semibold text-gray-900">
                  咨询目标
                </Text>
                {/* 信息内容 */}
                <Text className="text-sm text-gray-700 leading-5">
                  {info.consultationGoals}
                </Text>
              </VStack>
            </VStack>
          </ScrollView>
        </RNPressable>
      </RNPressable>
    </Modal>
  );
}



/**
 * 练习卡片组件
 * 
 * 设计思想：
 * 这是一个展示AI患者练习选项的卡片组件，每个卡片代表一个可选择的练习类型。
 * 卡片采用白色背景和圆角设计，提供清晰的视觉层次。
 * 使用 gluestack UI v3 组件库实现，提供统一的样式和交互体验。
 * 
 * 功能说明：
 * - 显示AI患者的图标（使用字母A表示）
 * - 展示练习的标题和描述信息
 * - 提供"开始练习"按钮，点击后跳转到练习页面
 * 
 * 使用场景：
 * 这个组件会在测评中心页面中使用，用于展示所有可用的练习选项。
 * 
 * 依赖关系：
 * - 依赖 expo-router 的 useRouter 进行页面跳转
 * - 使用 gluestack UI v3 的 Box、Text、Button、Pressable 组件进行UI渲染
 * - 使用 PracticeCard 类型定义数据结构
 * - 使用 className 属性应用 Tailwind CSS 样式，与 web 端 React 开发保持一致
 */
import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Pressable } from '@/components/ui/pressable';
import { HStack } from '@/components/ui/hstack';
import { useRouter } from 'expo-router';
import { PracticeCard as PracticeCardType } from '../types';

/**
 * 练习卡片组件的属性接口
 */
interface PracticeCardProps {
  /** 练习卡片的数据，包含标题、描述等信息 */
  practice: PracticeCardType;
}

/**
 * 练习卡片组件
 * 
 * 组件功能：
 * - 展示练习信息（标题、描述）
 * - 提供开始练习的入口
 * - 处理点击事件，跳转到练习页面
 */
export default function PracticeCard({ practice }: PracticeCardProps) {
  // 获取路由对象，用于页面跳转
  const router = useRouter();

  /**
   * 处理开始练习按钮的点击事件
   * 跳转到练习页面，并传递练习ID作为参数
   */
  const handleStartPractice = () => {
    router.push(`/practice?id=${practice.id}&type=${practice.type}`);
  };

  return (
    <Pressable
      // 卡片容器样式：纯白色背景、圆角、阴影效果
      className="bg-white rounded-2xl p-5 mb-4 border border-gray-100 shadow-sm"
      // 绑定点击事件
      onPress={handleStartPractice}
    >
      <HStack space="md" className="w-full">
        {/* 左侧图标区域 */}
        <Box
          // 图标容器：使用蓝色背景，固定尺寸
          // 使用 bg-[#3458f8] 来设置自定义蓝色背景色
          className="w-9 h-9 rounded-xl shrink-0 bg-[#3458f8]"
        >
          {/* 图标文字：显示字母A表示AI患者 */}
          <Text className="text-white font-bold text-xl text-center leading-9">
            A
          </Text>
        </Box>

        {/* 右侧内容区域 */}
        <Box className="flex-1">
          {/* 练习标题 */}
          <Text className="text-base font-semibold text-gray-900 mb-1">
            {practice.title}
          </Text>
          
          {/* 练习描述 */}
          <Text className="text-sm text-gray-600 mb-3 leading-5">
            {practice.description}
          </Text>

          {/* 开始练习按钮 */}
          <Button
            // 按钮样式：蓝色背景、圆角、内边距
            className="bg-blue-600 rounded-full px-5 py-2 self-start"
            // 阻止事件冒泡，避免触发卡片的点击事件
            onPress={(e) => {
              e.stopPropagation();
              handleStartPractice();
            }}
          >
            {/* 按钮文字 */}
            <ButtonText className="text-white text-sm font-medium">
              开始练习 →
            </ButtonText>
          </Button>
        </Box>
      </HStack>
    </Pressable>
  );
}


/**
 * 练习卡片组件
 * 
 * 设计思想：
 * 这是一个展示AI患者练习选项的卡片组件，每个卡片代表一个可选择的练习类型。
 * 卡片采用白色背景和圆角设计，提供清晰的视觉层次。
 * 使用 gluestack UI 组件库实现，提供统一的样式和交互体验。
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
 * - 使用 gluestack UI 的 Box、Text、Button、Pressable 组件进行UI渲染
 * - 使用 PracticeCard 类型定义数据结构
 * - gluestack UI 组件使用样式属性（如 bg、p、rounded）而不是 className
 */
import React from 'react';
import { Box, Text, Button, ButtonText, Pressable, HStack } from '@gluestack-ui/themed';
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
      // 卡片容器样式：纯白色背景、圆角、增强阴影效果使其更突出
      // 使用 flex-row 实现水平布局
      bg="$white"
      rounded="$2xl"
      p="$5"
      mb="$4"
      flexDirection="row"
      borderWidth={1}
      borderColor="$gray100"
      // 阴影效果（iOS）
      shadowColor="$black"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      // Android 阴影效果
      elevation={2}
      // 绑定点击事件
      onPress={handleStartPractice}
    >
      {/* 左侧图标区域 */}
      <Box
        // 图标容器：使用蓝色背景
        // 宽度和高度固定，圆角设计
        w="$9"
        h="$9"
        rounded="$xl"
        alignItems="center"
        justifyContent="center"
        mr="$4"
        flexShrink={0}
        // 使用蓝色作为主色
        bg="#3458f8"
      >
        {/* 图标文字：显示字母A表示AI患者 */}
        <Text color="$white" fontWeight="$bold" fontSize="$xl">
          A
        </Text>
      </Box>

      {/* 右侧内容区域 */}
      <Box flex={1}>
        {/* 练习标题 */}
        <Text fontSize="$md" fontWeight="$semibold" color="$gray900" mb="$1">
          {practice.title}
        </Text>
        
        {/* 练习描述 */}
        <Text fontSize="$sm" color="$gray600" mb="$3" lineHeight={20}>
          {practice.description}
        </Text>

        {/* 开始练习按钮 */}
        <Button
          // 按钮样式：蓝色背景、圆角、内边距
          bg="$blue600"
          rounded="$full"
          px="$5"
          py="$2"
          alignSelf="flex-start"
          // 阻止事件冒泡，避免触发卡片的点击事件
          onPress={(e) => {
            e.stopPropagation();
            handleStartPractice();
          }}
        >
          {/* 按钮文字 */}
          <ButtonText color="$white" fontSize="$sm" fontWeight="$medium">
            开始练习 →
          </ButtonText>
        </Button>
      </Box>
    </Pressable>
  );
}


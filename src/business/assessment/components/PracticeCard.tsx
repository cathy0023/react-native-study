/**
 * 练习卡片组件
 * 
 * 设计思想：
 * 这是一个展示AI患者练习选项的卡片组件，每个卡片代表一个可选择的练习类型。
 * 卡片采用白色背景和圆角设计，提供清晰的视觉层次。
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
 * - 使用 React Native 的组件进行UI渲染
 * - 使用 PracticeCard 类型定义数据结构
 */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
    <TouchableOpacity
      // 卡片容器样式：白色背景、圆角、阴影效果
      className="bg-white rounded-2xl p-5 mb-4 shadow-sm flex-row"
      // 添加点击反馈效果
      activeOpacity={0.9}
      // 绑定点击事件
      onPress={handleStartPractice}
    >
      {/* 左侧图标区域 */}
      <View
        // 图标容器：使用渐变色的背景（使用内联样式实现，因为NativeWind不支持渐变）
        // 宽度和高度固定，圆角设计
        className="w-9 h-9 rounded-xl items-center justify-center mr-4 flex-shrink-0"
        style={{
          backgroundColor: '#3458f8', // 使用蓝色作为主色
        }}
      >
        {/* 图标文字：显示字母A表示AI患者 */}
        <Text className="text-white font-bold text-xl">A</Text>
      </View>

      {/* 右侧内容区域 */}
      <View className="flex-1">
        {/* 练习标题 */}
        <Text className="text-base font-semibold text-gray-900 mb-1">
          {practice.title}
        </Text>
        
        {/* 练习描述 */}
        <Text className="text-sm text-gray-600 mb-3 leading-5">
          {practice.description}
        </Text>

        {/* 开始练习按钮 */}
        <TouchableOpacity
          // 按钮样式：蓝色背景、圆角、内边距
          className="bg-blue-600 rounded-full px-5 py-2 self-start"
          // 添加点击反馈效果
          activeOpacity={0.8}
          // 阻止事件冒泡，避免触发卡片的点击事件
          onPress={(e) => {
            e.stopPropagation();
            handleStartPractice();
          }}
        >
          {/* 按钮文字 */}
          <Text className="text-white text-sm font-medium">
            开始练习 →
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}


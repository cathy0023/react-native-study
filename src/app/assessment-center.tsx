/**
 * 测评中心页面
 * 
 * 设计思想：
 * 这是应用的主页面，展示所有可用的AI患者练习选项和历史练习记录。
 * 页面采用垂直布局，分为三个主要区域：头部、练习卡片列表、历史记录列表。
 * 使用 gluestack UI 组件库实现，提供统一的样式和交互体验。
 * 
 * 功能说明：
 * - 显示页面标题和副标题
 * - 展示所有可用的练习卡片（极速版和深度思考版）
 * - 展示历史练习记录列表
 * - 提供底部导航栏
 * 
 * 使用场景：
 * 用户打开应用后首先看到的页面，可以在这里选择练习或查看历史记录。
 * 
 * 依赖关系：
 * - 使用业务组件 PracticeCard 和 HistoryItem
 * - 使用业务常量数据 practiceCards 和 historyRecords
 * - 使用通用组件 BottomNav
 * - 使用 gluestack UI 的 Box、ScrollView、Text、VStack、HStack 组件进行UI渲染
 * - gluestack UI 组件使用样式属性（如 bg、p、rounded）而不是 className
 */
import React from 'react';
import { Box, ScrollView, Text, VStack, HStack } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import PracticeCard from '../business/assessment/components/PracticeCard';
import HistoryItem from '../business/assessment/components/HistoryItem';
import { practiceCards, historyRecords } from '../business/assessment/constants';

/**
 * 测评中心页面组件
 * 
 * 页面结构：
 * 1. 头部区域：Logo + 标题 + 副标题
 * 2. 练习卡片区域：显示所有可用的练习选项
 * 3. 历史记录区域：显示用户的练习历史
 * 4. 底部导航栏：固定在页面底部
 */
export default function AssessmentCenter() {
  // 获取安全区域边距，确保内容不会被系统UI遮挡
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} bg="$gray50" style={{ paddingTop: insets.top }}>
      {/* 可滚动内容区域 */}
      <ScrollView
        flex={1}
        // 设置内容区域的底部内边距，为底部导航栏留出空间
        contentContainerStyle={{ paddingBottom: 80 }}
        // 隐藏滚动条
        showsVerticalScrollIndicator={false}
      >
        {/* 页面容器：添加水平内边距 */}
        <Box px="$4" pt="$3">
          {/* 头部区域 */}
          <HStack alignItems="center" mb="$6" pt="$3">
            {/* Logo图标 */}
            <Box
              // Logo容器：使用蓝色背景，圆角设计
              w="$10"
              h="$10"
              rounded="$2xl"
              alignItems="center"
              justifyContent="center"
              mr="$3"
              // 使用蓝色作为主色
              bg="#3458f8"
            >
              {/* Logo文字：显示字母U */}
              <Text color="$white" fontWeight="$bold" fontSize="$lg">
                U
              </Text>
            </Box>

            {/* 标题和副标题区域 */}
            <VStack flex={1}>
              {/* 主标题 */}
              <Text fontSize="$xl" fontWeight="$semibold" color="$gray900" mb="$0.5">
                测评中心
              </Text>
              {/* 副标题 */}
              <Text fontSize="$sm" color="$gray600">
                选择一个AI智能体，开始模拟咨询
              </Text>
            </VStack>
          </HStack>

          {/* 开始新的练习区域 */}
          <VStack mb="$4">
            {/* 区域标题 */}
            <HStack alignItems="center" justifyContent="space-between" mb="$4">
              <Text fontSize="$lg" fontWeight="$semibold" color="$gray900">
                开始新的练习！
              </Text>
              {/* 提示文字 */}
              <Text fontSize="$sm" color="$blue600">
                对话完成后将生成详细的AI点评报告
              </Text>
            </HStack>

            {/* 练习卡片列表 */}
            <VStack>
              {practiceCards.map((practice) => (
                <PracticeCard key={practice.id} practice={practice} />
              ))}
            </VStack>
          </VStack>

          {/* 历史练习记录区域 */}
          <VStack mb="$8">
            {/* 区域标题 */}
            <Text fontSize="$lg" fontWeight="$semibold" color="$gray900" mb="$4">
              历史练习记录
            </Text>

            {/* 历史记录列表 */}
            <VStack>
              {historyRecords.map((record) => (
                <HistoryItem key={record.id} record={record} />
              ))}
            </VStack>
          </VStack>
        </Box>
      </ScrollView>

      {/* 底部导航栏：固定在页面底部 */}
      <BottomNav />
    </Box>
  );
}


/**
 * 测评中心页面
 * 
 * 设计思想：
 * 这是应用的主页面，展示所有可用的AI患者练习选项和历史练习记录。
 * 页面采用垂直布局，分为三个主要区域：头部、练习卡片列表、历史记录列表。
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
 */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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
    <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
      {/* 可滚动内容区域 */}
      <ScrollView
        className="flex-1"
        // 设置内容区域的底部内边距，为底部导航栏留出空间
        contentContainerStyle={{ paddingBottom: 80 }}
        // 显示滚动条
        showsVerticalScrollIndicator={false}
      >
        {/* 页面容器：添加水平内边距 */}
        <View className="px-4 pt-3">
          {/* 头部区域 */}
          <View className="flex-row items-center mb-6 pt-3">
            {/* Logo图标 */}
            <View
              // Logo容器：使用渐变背景，圆角设计
              // NativeWind不支持渐变，使用内联样式实现
              className="w-10 h-10 rounded-[10px] items-center justify-center mr-3"
              style={{
                backgroundColor: '#3458f8', // 使用蓝色作为主色
              }}
            >
              {/* Logo文字：显示字母U */}
              <Text className="text-white font-bold text-lg">U</Text>
            </View>

            {/* 标题和副标题区域 */}
            <View className="flex-1">
              {/* 主标题 */}
              <Text className="text-xl font-semibold text-gray-900 mb-0.5">
                测评中心
              </Text>
              {/* 副标题 */}
              <Text className="text-sm text-gray-600">
                选择一个AI智能体，开始模拟咨询
              </Text>
            </View>
          </View>

          {/* 开始新的练习区域 */}
          <View className="mb-4">
            {/* 区域标题 */}
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold text-gray-900">
                开始新的练习！
              </Text>
              {/* 提示文字 */}
              <Text className="text-sm text-blue-600">
                对话完成后将生成详细的AI点评报告
              </Text>
            </View>

            {/* 练习卡片列表 */}
            <View>
              {practiceCards.map((practice) => (
                <PracticeCard key={practice.id} practice={practice} />
              ))}
            </View>
          </View>

          {/* 历史练习记录区域 */}
          <View className="mb-8">
            {/* 区域标题 */}
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              历史练习记录
            </Text>

            {/* 历史记录列表 */}
            <View>
              {historyRecords.map((record) => (
                <HistoryItem key={record.id} record={record} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 底部导航栏：固定在页面底部 */}
      <BottomNav />
    </View>
  );
}


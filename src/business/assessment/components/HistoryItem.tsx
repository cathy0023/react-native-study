/**
 * 历史记录项组件
 * 
 * 设计思想：
 * 这是一个展示单条历史练习记录的组件，以简洁的卡片形式展示过去的练习信息。
 * 采用扁平化设计，突出显示重要信息（标题、日期、时长、分数）。
 * 使用 gluestack UI v3 组件库实现，提供统一的样式和交互体验。
 * 
 * 功能说明：
 * - 显示历史练习的标题
 * - 展示练习的日期和时长
 * - 突出显示练习得分（使用蓝色高亮）
 * 
 * 使用场景：
 * 这个组件会在测评中心页面的历史记录区域中使用，用于展示用户的练习历史。
 * 
 * 依赖关系：
 * - 使用 gluestack UI v3 的 Box、Text、HStack 组件进行UI渲染
 * - 使用 HistoryRecord 类型定义数据结构
 * - 使用 className 属性应用 Tailwind CSS 样式，与 web 端 React 开发保持一致
 */
import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { HistoryRecord } from '../types';

/**
 * 历史记录项组件的属性接口
 */
interface HistoryItemProps {
  /** 历史记录的数据，包含标题、日期、时长、分数等信息 */
  record: HistoryRecord;
}

/**
 * 历史记录项组件
 * 
 * 组件功能：
 * - 展示单条历史记录的完整信息
 * - 以清晰的布局展示各个字段
 */
export default function HistoryItem({ record }: HistoryItemProps) {
  return (
    <Box
      // 卡片容器样式：纯白色背景、圆角、阴影效果
      className="bg-white rounded-xl p-4 mb-3 flex-row justify-between items-center border border-gray-100 shadow-sm"
    >
      {/* 左侧信息区域 */}
      <Box className="flex-1">
        {/* 练习标题 */}
        <Text className="text-base font-medium text-gray-900 mb-1">
          {record.title}
        </Text>
        
        {/* 日期和时长信息 */}
        <HStack space="md">
          {/* 日期 */}
          <Text className="text-sm text-gray-500">
            {record.date}
          </Text>
          {/* 时长 */}
          <Text className="text-sm text-gray-500">
            {record.duration}分钟
          </Text>
        </HStack>
      </Box>

      {/* 右侧分数区域 */}
      <Box>
        {/* 分数显示：使用蓝色高亮，字体加粗 */}
        <Text className="text-lg font-semibold text-blue-600">
          {record.score}分
        </Text>
      </Box>
    </Box>
  );
}


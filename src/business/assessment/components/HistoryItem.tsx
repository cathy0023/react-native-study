/**
 * 历史记录项组件
 * 
 * 设计思想：
 * 这是一个展示单条历史练习记录的组件，以简洁的卡片形式展示过去的练习信息。
 * 采用扁平化设计，突出显示重要信息（标题、日期、时长、分数）。
 * 使用 gluestack UI 组件库实现，提供统一的样式和交互体验。
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
 * - 使用 gluestack UI 的 Box、Text、HStack 组件进行UI渲染
 * - 使用 HistoryRecord 类型定义数据结构
 * - gluestack UI 组件使用样式属性（如 bg、p、rounded）而不是 className
 */
import React from 'react';
import { Box, Text, HStack } from '@gluestack-ui/themed';
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
      // 卡片容器样式：纯白色背景、圆角、增强阴影效果使其更突出
      // 使用 flex-row 实现水平布局
      bg="$white"
      rounded="$xl"
      p="$4"
      mb="$3"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderWidth={1}
      borderColor="$gray100"
      // 阴影效果（iOS）
      shadowColor="$black"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      // Android 阴影效果
      elevation={2}
    >
      {/* 左侧信息区域 */}
      <Box flex={1}>
        {/* 练习标题 */}
        <Text fontSize="$md" fontWeight="$medium" color="$gray900" mb="$1">
          {record.title}
        </Text>
        
        {/* 日期和时长信息 */}
        <HStack>
          {/* 日期 */}
          <Text fontSize="$sm" color="$gray500" mr="$4">
            {record.date}
          </Text>
          {/* 时长 */}
          <Text fontSize="$sm" color="$gray500">
            {record.duration}分钟
          </Text>
        </HStack>
      </Box>

      {/* 右侧分数区域 */}
      <Box>
        {/* 分数显示：使用蓝色高亮，字体加粗 */}
        <Text fontSize="$lg" fontWeight="$semibold" color="$blue600">
          {record.score}分
        </Text>
      </Box>
    </Box>
  );
}


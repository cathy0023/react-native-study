/**
 * 聊天消息组件
 *
 * 设计思想：
 * 这是一个展示单条聊天消息的组件，用于在聊天界面中显示对话内容。
 * 组件会根据消息的发送者（AI患者或用户）显示不同的样式和布局：
 * - AI患者消息：左对齐，灰色背景气泡，左侧显示头像
 * - 用户消息：右对齐，蓝色背景气泡，右侧显示头像
 *
 * 功能说明：
 * - 显示消息发送者的头像（A表示AI患者，U表示用户）
 * - 显示消息内容文本
 * - 根据发送者类型应用不同的样式（颜色、对齐方式）
 *
 * 使用场景：
 * 这个组件会在练习页面的聊天界面中使用，用于展示对话中的每条消息。
 *
 * 依赖关系：
 * - 使用 gluestack UI 的 Box、Text、HStack 组件进行UI渲染
 * - 使用 NativeWind 的 className 属性应用 Tailwind CSS 样式
 * - 使用 ChatMessage 类型定义数据结构
 * - 使用 Tailwind CSS 类名进行样式设置，与web端保持一致
 */
import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { ChatMessage } from '../types';

/**
 * 聊天消息组件的属性接口
 */
interface ChatMessageProps {
  /** 聊天消息的数据，包含发送者、内容等信息 */
  message: ChatMessage;
}

/**
 * 聊天消息组件
 * 
 * 组件功能：
 * - 根据消息发送者显示不同的布局和样式
 * - 显示头像和消息内容
 * - 提供清晰的视觉区分（AI消息和用户消息）
 */
export default function ChatMessageComponent({ message }: ChatMessageProps) {
  // 判断消息是否来自AI患者
  // 如果是AI消息，使用左对齐布局和灰色样式
  // 如果是用户消息，使用右对齐布局和蓝色样式
  const isAIMessage = message.sender === 'ai';

  return (
    <Box
      // 消息容器：使用 flex-row 实现水平布局
      // 根据消息类型设置对齐方式（AI消息左对齐，用户消息右对齐）
      className={`${isAIMessage ? '' : 'flex-row-reverse'} mb-4 px-4`}
    >
      {/* 消息内容区域：包含头像和消息气泡 */}
      <HStack
        // 水平布局：头像和消息气泡并排显示
        // AI消息：头像在左，气泡在右
        // 用户消息：气泡在左，头像在右（通过 reversed 属性控制）
        reversed={!isAIMessage}
        space="sm"
        className="max-w-[80%]"
      >
        {/* 头像容器 */}
        <Box
          // 头像样式：圆形背景，固定尺寸
          // AI消息使用蓝色背景，用户消息使用浅灰色背景
          className={`w-10 h-10 rounded-full ${isAIMessage ? 'bg-blue-500' : 'bg-gray-400'} shrink-0`}
        >
          {/* 头像文字：A表示AI患者，U表示用户 */}
          <Text className="text-white font-bold text-base text-center leading-10">
            {isAIMessage ? 'A' : 'U'}
          </Text>
        </Box>

        {/* 消息气泡容器 */}
        <Box
          // 消息气泡样式：圆角背景，内边距
          // AI消息使用白色背景，用户消息使用蓝色背景
          // 使用 shrink 允许气泡根据内容调整大小
          className={`rounded-xl px-4 py-3 ${isAIMessage ? 'bg-white border border-gray-200' : 'bg-blue-500'} shrink`}
        >
          {/* 消息内容文本 */}
          <Text
            // 文本样式：根据消息类型设置颜色
            // AI消息使用深灰色文字，用户消息使用白色文字
            className={`text-base ${isAIMessage ? 'text-gray-800' : 'text-white'}`}
          >
            {message.content || ''}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}


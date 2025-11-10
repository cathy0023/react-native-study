/**
 * 练习页面
 * 
 * 设计思想：
 * 这是练习页面的主界面，提供与AI患者进行文字对话的功能。
 * 页面采用移动端优化的布局，分为三个主要区域：
 * 1. 顶部导航栏：返回按钮、标题、辅助信息按钮
 * 2. 聊天消息区域：可滚动的消息列表，显示对话内容
 * 3. 输入区域：输入框、发送按钮、结束练习按钮
 * 
 * 功能说明：
 * - 显示聊天消息列表（AI患者和用户的对话）
 * - 提供输入框供用户输入消息
 * - 发送消息后立即显示，并模拟AI回复
 * - 点击信息按钮可以查看辅助信息
 * - 提供结束练习功能
 * - 键盘弹出时自动调整布局
 * 
 * 使用场景：
 * 用户从测评中心页面点击"开始练习"按钮后跳转到此页面，
 * 可以在这里与AI患者进行对话练习。
 * 
 * 依赖关系：
 * - 使用业务组件 ChatMessage 和 InfoDrawer
 * - 使用业务常量数据 practiceInfo 和 initialMessages
 * - 使用 expo-router 进行路由管理
 * - 使用 gluestack UI v3 组件进行UI渲染
 * - 使用 className 属性应用 Tailwind CSS 样式，与 web 端 React 开发保持一致
 * - 使用 React Native 的 TextInput 和 KeyboardAvoidingView 处理输入和键盘
 */
import React, { useState, useRef, useEffect } from 'react';
import { TextInput, KeyboardAvoidingView, Platform, ScrollView as RNScrollView, Keyboard } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { HStack } from '@/components/ui/hstack';
import { Button, ButtonText } from '@/components/ui/button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ChatMessage from '../business/assessment/components/ChatMessage';
import InfoDrawer from '../business/assessment/components/InfoDrawer';
import { practiceInfo, initialMessages } from '../business/assessment/constants/practiceData';
import { ChatMessage as ChatMessageType } from '../business/assessment/types';

/**
 * 练习页面组件
 * 
 * 页面结构：
 * 1. 顶部导航栏：返回按钮、标题、信息按钮
 * 2. 聊天消息区域：可滚动的消息列表
 * 3. 输入区域：输入框、发送按钮、结束练习按钮
 * 4. 辅助信息抽屉：点击信息按钮时弹出
 */
export default function Practice() {
  // 获取安全区域边距，确保内容不会被系统UI遮挡
  const insets = useSafeAreaInsets();
  // 获取路由参数，包括练习ID和类型
  const { id, type } = useLocalSearchParams<{ id: string; type: string }>();
  // 获取路由对象，用于页面导航和返回
  const router = useRouter();

  // 消息列表状态：存储所有聊天消息
  const [messages, setMessages] = useState<ChatMessageType[]>(initialMessages);
  // 输入框内容状态：存储用户输入的文本
  const [inputText, setInputText] = useState('');
  // 辅助信息抽屉显示状态：控制抽屉的显示和隐藏
  const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);
  // 键盘显示状态：用于动态调整底部内边距
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // 滚动视图引用：用于控制消息列表的滚动位置
  // 使用 React Native 的 ScrollView ref 类型，确保兼容性
  const scrollViewRef = useRef<RNScrollView>(null);

  /**
   * 当消息列表更新时，自动滚动到底部
   * 这样用户可以看到最新的消息
   */
  useEffect(() => {
    // 延迟滚动，确保消息已经渲染完成
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  /**
   * 监听键盘显示和隐藏事件
   * 在Android上，需要根据键盘状态动态调整布局
   */
  useEffect(() => {
    // 键盘显示事件监听器
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      }
    );

    // 键盘隐藏事件监听器
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      }
    );

    // 清理监听器
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  /**
   * 处理返回按钮点击事件
   * 返回到测评中心页面
   */
  const handleGoBack = () => {
    router.back();
  };

  /**
   * 处理发送消息
   * 当用户点击发送按钮时，将输入框的内容添加到消息列表
   */
  const handleSendMessage = () => {
    // 如果输入框为空，不发送消息
    if (!inputText.trim()) {
      return;
    }

    // 创建用户消息对象
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputText.trim(),
      timestamp: Date.now(),
    };

    // 将用户消息添加到消息列表
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    // 清空输入框
    setInputText('');

    // 模拟AI回复：延迟1-2秒后自动回复
    // 这里使用简单的模拟回复，实际应用中应该调用AI API
    setTimeout(() => {
      const aiMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        content: '我理解你的感受。能详细说说你现在的感受吗？',
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1500);
  };

  /**
   * 处理结束练习按钮点击事件
   * 返回到测评中心页面
   */
  const handleEndPractice = () => {
    router.back();
  };

  /**
   * 处理打开辅助信息抽屉
   */
  const handleOpenInfoDrawer = () => {
    setIsInfoDrawerOpen(true);
  };

  /**
   * 处理关闭辅助信息抽屉
   */
  const handleCloseInfoDrawer = () => {
    setIsInfoDrawerOpen(false);
  };

  // 计算动态的顶部内边距值
  const dynamicPaddingTop = insets.top + 16;

  // 根据平台决定是否使用KeyboardAvoidingView
  // iOS上使用KeyboardAvoidingView，Android上手动处理键盘
  const content = (
      <Box className="flex-1 bg-gray-50">
        {/* 顶部导航栏 */}
        <Box
          className="flex-row items-center justify-between px-4 pb-3 bg-white border-b border-gray-200"
          style={{
            paddingTop: dynamicPaddingTop,
          }}
        >
          {/* 左侧：返回按钮 */}
          <Pressable
            className="flex-row items-center"
            onPress={handleGoBack}
          >
            <Text className="text-xl mr-2 text-gray-500">
              ←
            </Text>
            <Text className="text-base text-gray-500">
              返回
            </Text>
          </Pressable>

          {/* 中间：标题 */}
          <Box className="flex-1 items-center">
            <Text className="text-base font-semibold text-gray-900">
              {practiceInfo.title}
            </Text>
          </Box>

          {/* 右侧：信息按钮 */}
          <Pressable
            onPress={handleOpenInfoDrawer}
            className="w-8 h-8 items-center justify-center"
          >
            <Text className="text-xl text-blue-500">
              ℹ️
            </Text>
          </Pressable>
        </Box>

        {/* 聊天消息区域 */}
        {/* 使用 React Native 的 ScrollView，确保 ref 正常工作 */}
        <RNScrollView
          ref={scrollViewRef}
          className="flex-1 bg-gray-50"
          // 隐藏滚动条
          showsVerticalScrollIndicator={false}
          // 内容容器的样式
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 16,
          }}
        >
          {/* 渲染所有消息 */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </RNScrollView>

        {/* 输入区域 */}
        <Box
          className="bg-white px-4 py-3 border-t border-gray-200"
          style={{
            // Android上：键盘隐藏时只使用安全区域底部内边距
            // iOS上：始终使用安全区域底部内边距
            paddingBottom: insets.bottom + 12,
          }}
        >
          {/* 输入框和按钮容器 - 单行布局 */}
          <HStack space="sm" className="items-center">
            {/* 输入框容器：使用 gluestack UI 的 Box 包装 TextInput */}
            <Box
              className="flex-1 rounded-xl px-3 border border-gray-300 bg-gray-50"
              style={{ 
                minHeight: 40, 
                maxHeight: 80,
              }}
            >
              <TextInput
                // TextInput：React Native 的原生输入框组件
                // 注意：TextInput 在某些情况下可能不完全支持 className，所以使用 style 作为备选
                value={inputText}
                onChangeText={setInputText}
                placeholder="输入你的回应......"
                placeholderTextColor="#9CA3AF"
                multiline
                maxLength={500}
                className="text-[15px] text-gray-900 py-2.5 px-1 leading-5"
                style={{
                  fontSize: 15,
                  color: '#111827',
                  paddingVertical: 10,
                  paddingHorizontal: 4,
                  lineHeight: 20,
                }}
              />
            </Box>

            {/* 发送按钮 - 使用图标 */}
            <Pressable
              className={`w-10 h-10 rounded-full items-center justify-center ${inputText.trim() ? 'bg-blue-500' : 'bg-gray-300'}`}
              onPress={handleSendMessage}
              disabled={!inputText.trim()}
            >
              <Text 
                className={`text-lg ${inputText.trim() ? 'text-white' : 'text-gray-400'}`}
              >
                ↑
              </Text>
            </Pressable>

            {/* 结束练习按钮 - 使用图标 */}
            <Pressable
              className="w-10 h-10 rounded-full items-center justify-center bg-gray-100"
              onPress={handleEndPractice}
            >
              <Text className="text-lg text-gray-500">
                ✕
              </Text>
            </Pressable>
          </HStack>
        </Box>

        {/* 辅助信息抽屉 */}
        <InfoDrawer
          isOpen={isInfoDrawerOpen}
          onClose={handleCloseInfoDrawer}
          info={practiceInfo}
        />
      </Box>
  );

  // iOS使用KeyboardAvoidingView，Android直接返回内容
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        {content}
      </KeyboardAvoidingView>
    );
  }

  // Android直接返回内容，通过android:windowSoftInputMode="adjustResize"配置处理键盘
  return content;
}

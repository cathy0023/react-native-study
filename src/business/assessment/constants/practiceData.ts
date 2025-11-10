/**
 * 练习数据常量文件
 * 
 * 设计思想：
 * 这个文件包含练习页面使用的模拟数据，包括辅助信息和初始聊天消息。
 * 这些数据用于演示和测试聊天功能，后续可以替换为从API获取的真实数据。
 * 
 * 功能说明：
 * - 定义练习的辅助信息（来访者信息、背景资料、咨询目标）
 * - 定义初始的聊天消息数据
 * 
 * 使用场景：
 * 在练习页面中，这些数据用于：
 * 1. 在辅助信息抽屉中显示练习的背景信息
 * 2. 在聊天界面中显示初始的对话消息
 */

import { PracticeInfo, ChatMessage } from '../types';

/**
 * 练习辅助信息数据
 * 包含AI患者的基本信息和咨询相关的背景资料
 * 
 * 这个数据对象包含了：
 * - title: AI患者的标题
 * - description: AI患者的描述
 * - visitorInfo: 来访者的当前状况描述
 * - background: 背景资料
 * - consultationGoals: 咨询目标
 */
export const practiceInfo: PracticeInfo = {
  title: 'AI患者-焦虑症(极速版)',
  description: '一位患有焦虑症的AI患者，用于心理咨询师角色扮演练习',
  visitorInfo: '来访者是一位职场新人，最近工作压力较大，感到持续焦虑，希望通过对话了解自己的情绪状态',
  background: '职场环境压力较大，每天工作时间较长，对工作任务感到不确定和担忧，晚上难以入睡，影响日常状态，希望学习情绪管理技巧',
  consultationGoals: '识别焦虑情绪的具体表现，学习有效的情绪调节方法，建立更好的工作和生活平衡',
};

/**
 * 初始聊天消息列表
 * 定义练习开始时显示的初始对话消息
 * 
 * 这些消息模拟了AI患者和用户之间的初始对话：
 * - AI患者首先打招呼并描述自己的情况
 * - 用户回应表示理解
 * - AI患者继续描述更多细节
 */
export const initialMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'ai',
    content: '你好，我是木木，我最近感觉自己快被工作压得喘不过气来了，我真的不知道该怎么办了。',
    timestamp: Date.now() - 60000, // 1分钟前
  },
  {
    id: '2',
    sender: 'user',
    content: '你好，不着急慢慢说',
    timestamp: Date.now() - 30000, // 30秒前
  },
  {
    id: '3',
    sender: 'ai',
    content: '我是一名小学老师，我一直都很努力地工作，想要做到最好。但是最近我发现，我好像陷入了一个完美主义的漩涡里，怎么也出不来了。',
    timestamp: Date.now(), // 刚刚
  },
];



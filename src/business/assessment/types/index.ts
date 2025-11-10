/**
 * 测评业务相关的类型定义
 * 这个文件定义了测评中心模块中使用的所有数据类型
 */

/**
 * 练习类型枚举
 * 定义不同的练习类型，用于区分不同的AI患者版本
 */
export type PracticeType = 'fast' | 'deep';

/**
 * 练习卡片数据接口
 * 用于展示可选择的AI患者练习卡片
 */
export interface PracticeCard {
  /** 练习的唯一标识符 */
  id: string;
  /** 练习的标题，例如："AI患者-焦虑症（极速版）" */
  title: string;
  /** 练习的描述信息，说明这个练习的用途 */
  description: string;
  /** 练习类型：极速版或深度思考版 */
  type: PracticeType;
}

/**
 * 历史记录数据接口
 * 用于展示用户之前的练习记录
 */
export interface HistoryRecord {
  /** 历史记录的唯一标识符 */
  id: string;
  /** 练习的标题，例如："与焦虑症患者对话练习" */
  title: string;
  /** 练习日期，格式：YYYY-MM-DD */
  date: string;
  /** 练习时长，单位：分钟 */
  duration: number;
  /** 练习得分 */
  score: number;
}

/**
 * 消息发送者类型
 * 区分消息是来自AI患者还是用户
 */
export type MessageSender = 'ai' | 'user';

/**
 * 聊天消息数据接口
 * 用于展示聊天对话中的单条消息
 */
export interface ChatMessage {
  /** 消息的唯一标识符 */
  id: string;
  /** 消息的发送者：AI患者或用户 */
  sender: MessageSender;
  /** 消息的内容文本 */
  content: string;
  /** 消息的发送时间戳（可选） */
  timestamp?: number;
}

/**
 * 练习辅助信息数据接口
 * 包含练习相关的背景信息和指导内容
 */
export interface PracticeInfo {
  /** AI患者的标题，例如："AI患者-焦虑症(极速版)" */
  title: string;
  /** AI患者的描述信息 */
  description: string;
  /** 来访者信息：描述AI患者的当前状况 */
  visitorInfo: string;
  /** 背景资料：提供更多关于AI患者背景的信息 */
  background: string;
  /** 咨询目标：说明这次咨询练习的目标 */
  consultationGoals: string;
}


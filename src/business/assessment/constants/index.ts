/**
 * 测评业务相关的常量数据
 * 这个文件包含测评中心模块使用的模拟数据
 */

import { PracticeCard, HistoryRecord } from '../types';

/**
 * 练习卡片列表数据
 * 包含两个AI患者练习选项：极速版和深度思考版
 */
export const practiceCards: PracticeCard[] = [
  {
    id: '1',
    title: 'AI患者-焦虑症（极速版）',
    description: '一位患有焦虑症的AI患者，用于心理咨询师角色扮演练习',
    type: 'fast',
  },
  {
    id: '2',
    title: 'AI患者-焦虑症（深度思考版）',
    description: '一位患有焦虑症的AI患者，用于心理咨询师角色扮演练习',
    type: 'deep',
  },
];

/**
 * 历史练习记录数据
 * 包含用户之前的练习记录，展示日期、时长和得分
 */
export const historyRecords: HistoryRecord[] = [
  {
    id: '1',
    title: '与焦虑症患者对话练习',
    date: '2023-10-15',
    duration: 12,
    score: 88,
  },
  {
    id: '2',
    title: '深度思考版练习记录',
    date: '2023-10-10',
    duration: 25,
    score: 92,
  },
  {
    id: '3',
    title: '首次焦虑症咨询练习',
    date: '2023-10-05',
    duration: 18,
    score: 85,
  },
];

// 导出练习数据常量（从 practiceData.ts 重新导出，方便统一导入）
export { practiceInfo, initialMessages } from './practiceData';


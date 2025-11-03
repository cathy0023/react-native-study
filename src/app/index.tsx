/**
 * 首页组件
 * 
 * 设计思想：
 * 这是应用的首页，用户打开应用时首先看到的页面。
 * 当前实现为直接重定向到测评中心页面，作为应用的入口。
 * 
 * 功能说明：
 * - 自动重定向到测评中心页面
 * 
 * 使用场景：
 * 用户打开应用时的初始页面。
 * 
 * 依赖关系：
 * - 依赖 expo-router 的 Redirect 组件进行页面重定向
 */
import React from "react";
import { Redirect } from "expo-router";

/**
 * 首页组件
 * 
 * 组件功能：
 * - 自动重定向到测评中心页面
 */
export default function Page() {
  return <Redirect href="/assessment-center" />;
}

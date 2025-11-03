/**
 * 底部导航栏组件
 * 
 * 设计思想：
 * 这是一个固定在页面底部的导航栏，用于在不同页面之间切换。
 * 它提供了两个主要入口：测评中心和控制台。
 * 
 * 功能说明：
 * - 显示两个导航选项：测评中心和控制台
 * - 根据当前路由高亮显示激活的导航项
 * - 点击导航项可以切换到对应的页面
 * 
 * 使用场景：
 * 这个组件会在所有需要底部导航的页面中使用，通过布局文件统一管理。
 * 
 * 依赖关系：
 * - 依赖 expo-router 的 usePathname 和 useRouter 进行路由管理
 * - 使用 React Native 的 View 和 Text 组件进行渲染
 */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { usePathname, useRouter } from 'expo-router';

/**
 * 导航项配置类型
 * 定义每个导航项的基本信息
 */
interface NavItem {
  /** 路由路径 */
  path: string;
  /** 显示的文字 */
  label: string;
}

/**
 * 导航项配置数组
 * 定义底部导航栏的所有导航选项
 */
const navItems: NavItem[] = [
  { path: '/assessment-center', label: '测评中心' },
  { path: '/console', label: '控制台' },
];

/**
 * 底部导航栏组件
 * 
 * 组件功能：
 * - 显示导航选项列表
 * - 根据当前路径高亮激活项
 * - 处理导航切换逻辑
 */
export default function BottomNav() {
  // 获取当前路径，用于判断哪个导航项应该高亮
  const pathname = usePathname();
  // 获取路由对象，用于页面跳转
  const router = useRouter();

  /**
   * 处理导航项点击事件
   * 当用户点击某个导航项时，跳转到对应的页面
   */
  const handleNavPress = (path: string) => {
    router.push(path);
  };

  return (
    <View 
      className="absolute bottom-0 left-0 right-0 bg-white flex-row py-3"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Android阴影效果
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
      }}
    >
      {navItems.map((item) => {
        // 判断当前导航项是否激活（当前路径是否匹配）
        const isActive = pathname === item.path || 
          (item.path === '/assessment-center' && pathname === '/');

        return (
          <TouchableOpacity
            key={item.path}
            // 使用 flex-1 让每个导航项平均分配空间
            className="flex-1 items-center justify-center"
            // 绑定点击事件，跳转到对应页面
            onPress={() => handleNavPress(item.path)}
            // 添加点击反馈效果
            activeOpacity={0.7}
          >
            {/* 导航图标 - 使用实心圆点表示 */}
            <View
              className={`w-6 h-6 rounded-full mb-1 ${
                isActive ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              {/* 图标内容占位 */}
            </View>
            {/* 导航文字 */}
            <Text
              className={`text-xs ${
                isActive ? 'text-blue-600 font-medium' : 'text-gray-500'
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


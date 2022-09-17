# Import 规范

> 遵守引入规范, 保持代码的可读性高

```typescript
// 引入类型统一提权到最高
// ⚠️ 引入类型使用import type
import type { Plugin } from 'vite'
import type { ReactElement } from 'react';

// 框架相关
import React from "react";
import { Link } from "react-router-dom":

// 组件区域 (优先 UI库组件)
import { Button, Box } from '@mui/material';
import { RouteGuard } from "@/components"

// 方法区
import { useRequest } from 'ahooks'
import { use1vh } from '@/hooks'
import { sleep } from '@/utils'

// 静态文件区
import defaultUserAvatar from  "@/assets/images/default-user-avatar.png"
// 样式区
import "xxx.less || xxx.css ....";
import cssStyle from "xxx.module.css";

```

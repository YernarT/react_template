# Import specification

> Follow the import specification to keep the code readable

```typescript
// Introduce the type to be uniformly escalated to the highest
// ⚠️ Import types use "import type"
import type { Plugin } from 'vite'
import type { ReactElement } from 'react';

// Framework related
import React from "react";
import { Link } from "react-router-dom":

// Components (preferably UI library components)
import { Button, Box } from '@mui/material';
import { RouteGuard } from "@/components"

// Methods
import { useRequest } from 'ahooks'
import { use1vh } from '@/hooks'
import { sleep } from '@/utils'

// Static files
import defaultUserAvatar from  "@/assets/images/default-user-avatar.png"
// Styles
import "xxx.less || xxx.css ....";
import cssStyle from "xxx.module.css";

```

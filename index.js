#!/usr/bin/env node
import { Plop, run } from 'plop';

// 配置 Plop
Plop.prepare(
  {
    cwd: process.cwd(), // 当前工作目录
    configPath: './plopfile.cjs', // plopfile.js 的路径
  },
  (env) => Plop.execute(env, run)
);

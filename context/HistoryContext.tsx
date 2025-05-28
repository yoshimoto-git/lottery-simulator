// context/HistoryContext.tsx

import React, { createContext, ReactNode, useContext, useState } from 'react';

// 宝くじの結果（数字6個）の型定義（number型の配列）
export type LotteryResult = number[];

// Contextで扱うデータの構造を定義（履歴配列 + 追加関数）
type HistoryContextType = {
  history: LotteryResult[];                // 履歴：過去の抽選結果を配列で保持
  addResult: (result: LotteryResult) => void; // 抽選結果を履歴に追加する関数
};

// Context本体を作成（初期値はundefined）
const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

// アプリ全体を履歴Contextで囲うProviderコンポーネント
export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  // 履歴を保持する状態（初期値は空の配列）
  const [history, setHistory] = useState<LotteryResult[]>([]);

  // 履歴に新しい抽選結果を追加する関数
  const addResult = (result: LotteryResult) => {
    setHistory((prev) => [result, ...prev]); // 最新の結果を先頭に追加
  };

  // children（=アプリ全体）にContextを提供
  return (
    <HistoryContext.Provider value={{ history, addResult }}>
      {children}
    </HistoryContext.Provider>
  );
};

// 他のコンポーネントで履歴にアクセスするためのカスタムフック
export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};


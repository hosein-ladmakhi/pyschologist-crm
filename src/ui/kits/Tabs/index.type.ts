import { PropsWithChildren, ReactNode } from 'react';

type TTabNavRender = {
  activeTab: number;
  handleChangeActive: (activeTab: number) => void;
  tabIndex: number;
  item: string;
};

interface IBaseTabs {
  tabNavs: string[];
  tabNavRender: (props: TTabNavRender) => void;
  tabNavsWrapper: (children: ReactNode) => void;
}

export type TTabsProps = IBaseTabs & PropsWithChildren;

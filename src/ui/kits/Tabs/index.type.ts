import { PropsWithChildren } from "react";

type TTabNavRender = {
	activeTab: number;
	handleChangeActive: (activeTab: number) => void;
	tabIndex: number;
	item: string;
};

interface IBaseTabs {
	tabNavs: string[];
	tabNavRender: (props: TTabNavRender) => void;
}

export type TTabsProps = IBaseTabs & PropsWithChildren;

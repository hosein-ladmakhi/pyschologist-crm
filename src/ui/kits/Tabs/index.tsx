'use client';

import React, { FC, useState } from 'react';
import { TTabsProps } from './index.type';

const Tabs: FC<TTabsProps> = ({
  tabNavs,
  tabNavRender,
  children,
  tabNavsWrapper,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleChangeActiveTab = (index: number) => setActiveTabIndex(index);

  return (
    <>
      {tabNavsWrapper(
        React.Children.toArray(
          tabNavs.map((item, itemIndex) => (
            <>
              {tabNavRender({
                activeTab: activeTabIndex,
                handleChangeActive: handleChangeActiveTab,
                tabIndex: itemIndex,
                item,
              })}
            </>
          )),
        ),
      )}

      {React.Children.map(children, (child, childIndex) =>
        childIndex === activeTabIndex ? child : null,
      )}
    </>
  );
};

export default Tabs;

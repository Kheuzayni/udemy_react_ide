import React, { useState } from 'react'
import CodeTab from './CodeTab'
import { useSelector } from 'react-redux'
import { ButtonTab } from './ButtonTab';

export default function Tabs() {

  const tabs = useSelector(state => state.tabs)
    console.log (tabs);
    const [tabIndex, setTabIndex] = useState(tabs[0].id)

  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        {tabs.map(tab => (
          <ButtonTab 
            key={tab.id}
            id={tab.id}
            toggleTab={id => setTabIndex(id)}
            imgURL={tab.imgURL}
            buttonContent={tab.buttonContent}
          />
        ))}
      </div>
      <div className="w-full grow relative">
      <p>Le code here ....</p>
      <CodeTab/>
      </div>
    </div>
  )
}

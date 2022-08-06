import React, { useState } from "react";
import "./Header.css";
import {FaBars} from "react-icons/fa"
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../utilities/commonUtilities";
import { ScrollService } from "../../utilities/ScrollService";


export const Header = () => {
  const [selectScreen, setSelectScreen] = useState(0);
  const [showHeaderOption, setShowHeaderOption] = useState(false);
  const updateGurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  const getHeaderOptions=()=>{
    return(
        TOTAL_SCREENS.map((screen,i)=>(<div key={screen.screen_name} className={getHeaderOptionsClass(i)}
        onClick={()=>swithchScreen(i,screen)}
        >
            <span>{screen.screen_name} </span> 
        </div>))
        
    )
  } 
  let currentScreenSubsciption =
    ScrollService.CurreentScreenBrodCaster.subscrib(updateGurrentScreen);


    const getHeaderOptionsClass=(index)=>{
        let classes="header-option"
        if(index<TOTAL_SCREENS.length-1)
        classes+="header-option-seperator"

        if(selectScreen===index)
        classes+="selected-header-option"
        return
    }

    const swithchScreen=(index,screen)=>{
        let screenComponent=document.getElementById(screen.screen_name)
        if(!screenComponent)
        return

        screenComponent.scrollIntoView({behavior:"smooth"})
        setSelectScreen(index)
        setShowHeaderOption(false)


    }

  return (
    <div></div>
  // <div>
  //   <div className='header-option' onClick={()=> setShowHeaderOption(!showHeaderOption)}>
  //   <div className="header-parent">
  //       <div className="header-hamburger" onClick={()=>setShowHeaderOption(!showHeaderOption) }>
  //           <FaBars className="'header-hamburger-bars" />
  //       </div>
  //       <div className="header-logo">
  //           <span>MOHAMMADI</span>
  //       </div>
  //       <dic className={(showHeaderOption)?"header-options show-hambergure-options":"header-=options"}>
  //           {getHeaderOptions()}
  //       </dic>
  //   </div>
  //   </div>
  // </div>

  )
};

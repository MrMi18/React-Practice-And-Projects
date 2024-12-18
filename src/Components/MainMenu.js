import ResMenuHeader from "./ResMenuHeader";
import Recommendation from "./Recommendation";
import { useState } from "react";

const MainMenu = ({cards}) =>{

  
  const[showMenu,setShowMenu] = useState(false);


    return(
        <div className="flex m-2 w-9/12  mx-auto flex-col p-2  ">
                 {cards && cards.map((menuSection, index) => {

                    if( menuSection?.card.card?.["@type"] ==  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"  ){
                    //  { console.log(menuSection?.card?.card?.title)}
                     
                      
                     const {itemCards } = menuSection?.card?.card;
                    
                      return (<div key ={menuSection?.card?.card?.title}  >

                            <ResMenuHeader title={menuSection?.card?.card?.title} size={itemCards.length} flag = {true} showMenu = {showMenu} setShowMenu= {setShowMenu}  />
                              {itemCards &&
                               showMenu && itemCards.map((item) => (
                                  <Recommendation menu={item.card.info} key={item.card.info.id} />
                                ))}
                            

                        
                       </div>)
                      
                    }
                    if( menuSection?.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
                       const categories = menuSection?.card?.card?.categories;
                      //  console.log(menuSection?.card?.card);
                      return (<div key ={menuSection?.card?.card?.title}>
                         <h1 className="m-3 font-bold text-xl">{menuSection?.card?.card?.title}</h1>
                         {/* {<ResMenuHeader title ={menuSection?.card?.card?.title } showMenu = {showMenu} setShowMenu= {setShowMenu}   />} */}
                          {
                            
                            categories && categories.map(category =>{
                              const {itemCards}  = category;
                             return  (
                               <div key={category.title}>
                               {/* {console.log(category.itemCards.length)} */}
                                {<ResMenuHeader title ={category.title } size={category.itemCards.length} flag = {false} showMenu = {showMenu} setShowMenu= {setShowMenu}   />}
                                {
                                 showMenu && itemCards && itemCards.map(item =>{
                                    return( <Recommendation menu =  {item.card.info} key={item.card.info.id} />)
                                  })
                                }
                                 
                               </div>
                             )
                            })
                          }
                        
                       </div>)
                    }
                    
                 })}   {/* // apna sections and subSections wala logic ka end 
                 */}
                 </div>
    )
}

export default MainMenu;
.card:hover {
    
    border: 1px solid #aaaaaa ;
    box-shadow: .2rem .2rem .2rem #aaaaaa;
}
.card{
    
}
.shimmer-cards{
    width:14rem;
     margin-top:1rem;
     height:12rem;
     border-radius:1rem;
     background-color: #f0f0f0;
}
.shimmer-logo{
    width:8rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #f0f0f0;
}
.food-logos{
    overflow:scroll;
    
}
.ResturanDetails {
  
  font-weight: 700;
}
.Bold{
    font-weight: 700;
}
.resturant{
    border: 1px solid #aaaaaa ;
    box-shadow: .2.1rem .2rem .2rem #aaaaaa;
}
.menuCards>li:hover{
    cursor: pointer;

}
.menuCards>li{
   
}
.fullMenu{

}

/* Main Container */
#ResMenuContainer {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

/* Restaurant Header */
#restaurantHeader {
    padding-bottom: 3rem;
    margin-left: 0px;
    font-size: 2rem;
    font-weight: bold;
}

/* Restaurant Info Box */
.resturant {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    padding: 2rem;
    width: 70vw;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Restaurant Details */
.ResturanDetails {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: #333;
    font-size: 1rem;
    line-height: 1.5rem;
}

.menuCards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ddd;
    transition: background-color 0.3s ease;
    font-weight: 700;
    font-size: 1.2rem;
}

.menuCards:hover {
    background-color: #f8f8f8;
}

.fullMenu {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid #ddd;
}

/* Icon */
.menuCards svg {
    transition: transform 0.3s ease;
}

.menuCards svg:hover {
    transform: rotate(180deg);
}

import React from 'react'

 const CategoryPreview = ({categoryName,products}) => {
    //  for(let i=0 ; i<6 ; i++){
         
    //  }
    return (
        <div>
            <div>
            <h1>{categoryName}</h1>
            </div>
            {
            products.map((product,index)=>{
                if(index !== 6){
                console.log(index);
                }
            })
            }
        </div>
    )
}

export default CategoryPreview;

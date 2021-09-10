import React from 'react'


const Categories = ({items, filterItems}) => {

    return (
        <div className="buttons-container">
            {
                items.map((item, index) => {
                    return (
                        <button 
                            className="category-button"
                            key={index}
                            onClick={() => filterItems(item)}
                        >
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )

}


export default Categories

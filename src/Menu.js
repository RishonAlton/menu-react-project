import React from 'react'


const Menu = ({menu}) => {

    return (
        <main className="menu-container">
            {
                menu.map(item => {
                    const {id, title, price, image, description} = item
                    return (
                        <article key={id} className="item-container">
                            <img src={image} alt={title} className="image" />
                            <div className="info">
                                <h5 className="title">{title}</h5>
                                <h5 className="price">$ {price}</h5>
                                <hr />
                                <p>{description}</p>
                            </div>
                        </article>
                    )
                })
            }
        </main>
    )

}


export default Menu

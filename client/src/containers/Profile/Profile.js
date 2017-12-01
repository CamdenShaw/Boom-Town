import React, { Component } from "react"
import Masonry from "react-masonry-component"

import ItemCard from "../../components/ItemCard"
import { getCardItems } from "../../redux/modules"

const Profile = ({ data }) => {
    if (data.loading) return <p>loading</p>
    console.log(data)
    return (
        <Masonry className="item-gallery" elementType={"ul"}>
            {data.map((item, key) => (
                <li key={key} style={{ padding: "1%", width: "33.333333333%" }}>
                    <ItemCard fetchItem={item} />
                </li>
            ))}
        </Masonry>
    )
}

export default Profile

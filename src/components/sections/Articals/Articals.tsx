import React from "react";
import ArticalsCard from "./ArticalsCard";
import GridList from "@/components/common/LogicList/GridList/GridList";
import { articals } from "../../../types/articals.type";


const Articals = async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articals: articals[] = await res.json()

    if (!res.ok) {
        throw new Error("Faild To fetch articals");

    }


    const records = articals;

    const renderCategories = (itemData: articals) => (
        <div className="" >
          <ArticalsCard {...itemData} />
        </div>
      );
    


  return (
    <div>
       <GridList records={records} renderItem={renderCategories} />
    </div>
  );
};

export default Articals;

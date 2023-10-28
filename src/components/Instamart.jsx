import { useState } from "react";

const Section = ({ title, p ,setIsvisible,isvisible}) => {
//   const [isvisible, setIsvisible] = useState(false);

  const show = () => {
    setIsvisible(true);
  };
  const hide = () => {
    setIsvisible(true);
  };
  return (
    <div className=" p-2 m-4 outline-dashed">
      <h1 className="text-2xl font-bold ">{title}</h1>

      {!isvisible ? (
        <button
          className=" p-2 m-1 bg-green-300 border-black outline-4 rounded-xl"
          onClick={() => show()}
        >
          Show
        </button>
      ) : (
        <button
          className=" p-2 m-1 bg-green-300 border-black outline-4 rounded-xl"
          onClick={() => hide()}
        >
          Hide
        </button>
      )}

      {isvisible && <p>{p}</p>}
    </div>
  );
};

const Instamart = () => {

    const [isvisibleSection, setIsvisibleSection] = useState("a");
  return (
    <div>
      <Section
      isvisible={isvisibleSection=="main"}
      setIsvisible={()=>setIsvisibleSection('main')}
      
        title={"Main"}
        p={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sint sapiente ea itaque dolores natus, nam earum minima porro error?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo doloribus error veritatis laborum similique, ab, consequuntur culpa repellendus vitae repellat voluptates, reprehenderit magnam hic deleniti explicabo ipsum delectus sed? Adipisci eius ad odit officiis eaque quo quaerat atque tempore laudantium, dolore corporis natus placeat minima corrupti officia fugit rerum quasi."
        }
      />
      <Section
       isvisible={isvisibleSection=="About"}
      setIsvisible={()=>setIsvisibleSection('About')}
        title={"About"}
        p={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sint sapiente ea itaque dolores natus, nam earum minima porro error?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo doloribus error veritatis laborum similique, ab, consequuntur culpa repellendus vitae repellat voluptates, reprehenderit magnam hic deleniti explicabo ipsum delectus sed? Adipisci eius ad odit officiis eaque quo quaerat atque tempore laudantium, dolore corporis natus placeat minima corrupti officia fugit rerum quasi."
        }
      />
      <Section
         isvisible={isvisibleSection=="Game"}
      setIsvisible={()=>setIsvisibleSection('Game')}
       
        title={"Game"}
        p={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sint sapiente ea itaque dolores natus, nam earum minima porro error?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo doloribus error veritatis laborum similique, ab, consequuntur culpa repellendus vitae repellat voluptates, reprehenderit magnam hic deleniti explicabo ipsum delectus sed? Adipisci eius ad odit officiis eaque quo quaerat atque tempore laudantium, dolore corporis natus placeat minima corrupti officia fugit rerum quasi."
        }
      />
    </div>
  );
};

export default Instamart;

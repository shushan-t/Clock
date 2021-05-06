import {useState} from "react";


// function Clock(){
//     const [text1, setText1] = useState("");
//     const [text2, setText2] = useState("");
//     const [text3, setText3] = useState("");

//     const onAdd1=(text1)=>{
//         setText1({text1})
//           }; 
//     const onAdd2=(text2)=>{
//         setText2({text2})
//           };
//     const onAdd3=(text3)=>{
//         setText3({text3})
//           }; 

//     const handleChange1=(e)=>{
//             setText1(e.target.value);
//          };
//     const handleChange2=(e)=>{
//             setText2(e.target.value);
//          };
//     const handleChange3=(e)=>{
//             setText3(e.target.value);
//          };

//     return(
//        <form onSubmit={(e)=>{
//            e.preventDefault();
//            onAdd1(text1);
//            onAdd2(text2);
//            onAdd3(text3);
//            setText1("");
//            setText2("");
//            setText3("");
//        }}>



//           <input
//             type="text"
//             className="input"
//             placeholder="set hours"
//             value={text1}
//             onChange={handleChange1}
//           />
//           <input
//             type="text"
//             className="input"
//             placeholder="set minutes"
//             value={text2}
//             onChange={handleChange2}
//           />
//           <input
//             type="text"
//             className="input"
//             placeholder="set seconds"
//             value={text3}
//             onChange={handleChange3}
//           />
           
//            <button>Add</button>
          
//            <div className="clock">
//           <div
//             className="hourIndex"
//             style={{
//               transform: `rotateZ(${text1 * 30}deg)`,
//               transitionDuration: "3s",
//             }}
//           />
//           <div
//             className="minIndex"
//             style={{
//               transform: `rotateZ(${text2 * 6}deg)`,
//               transitionDuration: "3s",
//             }}
//           />
//           <div
//             className="secIndex"
//             style={{
//               transform: `rotateZ(${text3 * 6}deg)`,
//               transitionDuration: "3s",
//             }}
//           /></div>
//        </form>
//     )
    
// }



function TodoForm(){
    const [text, setText] = useState("");

    const onAdd=(text)=>{
        setText({text})
          } 

    const handleChange=(e)=>{
            setText(e.target.value);
}

    return(
       <form onSubmit={(e)=>{
           e.preventDefault();
           onAdd(text);
           setText("");
       }}>



<input
            type="text"
            className="input"
            placeholder="set hours"
            name="hours"
            value={text}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input"
            placeholder="set minutes"
            name="minutes"
            value={text}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input"
            placeholder="set seconds"
            name="seconds"
            value={text}
            onChange={handleChange}
          />
           {/* <input text='text' value={text} onChange={(e)=>{
               setText(e.target.value);
           }} /> */}
           <button>Add</button>
           <div className="clock">
          <div
            className="hourIndex"
            style={{
              transform: `rotateZ(${text * 30}deg)`,
              transitionDuration: "3s",
            }}
          />
          <div
            className="minIndex"
            style={{
              transform: `rotateZ(${text * 6}deg)`,
              transitionDuration: "3s",
            }}
          />
          <div
            className="secIndex"
            style={{
              transform: `rotateZ(${text * 6}deg)`,
              transitionDuration: "3s",
            }}
          /></div>
       </form>
    )
    
}

export default TodoForm;
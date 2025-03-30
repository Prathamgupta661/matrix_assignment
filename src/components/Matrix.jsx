import {useState} from 'react'
import './Matrix.css'
const Matrix = () => {

    const [matrix, setmatrix] = useState(Array(9).fill(null));
    const [order, setorder] = useState([]);

    const handleClick=(index)=>{
        if(matrix[index]!==null) 
            return;
        const newmatrix=[...matrix];
        newmatrix[index]='green';
        setmatrix(newmatrix);
        setorder([...order,index]);

        if(order.length===8){
            order.push(index);
            order.forEach((index,i)=>{

                setTimeout(() => {
                    setmatrix((prev)=>{
                        const updatematrix=[...prev]
                        updatematrix[index]='orange';
                        return updatematrix
                    })
                }, i*500);
            })
            
            
        }
    }

    const handleReset=()=>{
        setmatrix(Array(9).fill(null));
        setorder([]);
    }
  return (
    <div className='matrix_container'>
      {
        matrix.map((item,index)=>(
            <div className='matrix' key={index} onClick={()=>handleClick(index)} style={{backgroundColor:item}}></div>
        ))
      }
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Matrix


// import axios from 'axios'
// export default function New() {
//     const handleSubmit = (event) => {
//         console.log("shit happened")
//         // const formData = new FormData(event.target); 
//         // const response = await axios.post('https://localhost/3000/orders/create', formData);
//         // console.log(response.data)
//     };
//   return (
//     <div className="h-screen">
//       <form onSubmit={handleSubmit}>
//        <div>
//             <label htmlFor="Food"> Food
//                 <input type="text"name='food' />
//             </label>
//        </div>
//         <div>
//             <label htmlFor="drink">Drink
//                 <input type="text" name="drink" />
//             </label>
//         </div>
//         <input type="submit" value="Create order" />
//       </form>
//     </div>
//   )
// }
import axios from 'axios'; 

export default function New() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await axios.post('http://localhost:3000/orders/create', formData); 
        console.log(response.data)
    };
  
    return (
      <div className="h-screen">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Food">
              Food
              <input type="text" name="food" />
            </label>
          </div>
          <div>
            <label htmlFor="drink">
              Drink
              <input type="text" name="drink" />
            </label>
          </div>
          <input type="submit" value="Create order" />
        </form>
      </div>
    );
  }
  
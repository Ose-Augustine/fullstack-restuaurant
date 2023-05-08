
import axios from 'axios'; 

export default function NewOrder() {
    const handleSubmit = (event) => {
        const formData = new FormData(event.target);
        axios.post('http://localhost:3000/orders/create', formData); 
        
    };
  
    return (
      <>
        <div></div>
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
      </>
    );
  }
  
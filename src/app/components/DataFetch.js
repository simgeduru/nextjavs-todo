

const FetchIslemi = () =>{
    
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        
        const newArray = Array.from(json);
        console.log(json);
        console.log(newArray);
        console.log(typeof(newArray));
      })
}



export default FetchIslemi;
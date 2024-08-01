import './home.css'
export default function Home(){
const listOfItems =[
    { title: 'Apples', id: 1 , isFruit: true},
    { title: 'Mango', id: 2 , isFruit: true},
    { title: 'Banana', id: 3 ,isFruit: true},
    { title: 'Carrot', id: 3 ,isFruit: false},
]


const listing = listOfItems.map(data=>
    <li key={data.id} style={{color: data.isFruit? 'green': 'red'}}>
      {data.title}
    </li>
 
)
    
    return (<div className='home-page'>
        <h1 className='heading'>Differentiate fruit and vegetables</h1>
            <ul>
               {listing}

            </ul>
       
    </div>)
}
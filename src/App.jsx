
import { Image01, Image02,Image03} from './assets'
const Home = () => {
  return (
    <div>Home</div>
  )
}


const Product = () => {
  return (
    <div>Product</div>
  )
}


const Route = ({home}) => {
    return home ? <Home /> : <Product />
}

const Greeting = ({TimeOfTheDay,name}) => {
    return(
        <h1>Good {TimeOfTheDay} {name}!</h1>
    )
}


const Title = ({text}) => {
    return <h1>{text}</h1>
}



const Child = ({change}) => {
    const onChange = () => {
        change ()
    }
    return (
        <input onChange = {onChange} />
    )
}


const Titles = () => {
    const fn = () => "Hello World"
    return <h1>{fn()}</h1>
}


const Titlex = () => {
    const arr = [
        {name :'Apple' , index : 0}, {name:'Orange', index :1 }, {name:'Pawpaw', index : 2}]
    return (
        <ul>{arr.map((fruit) =>(
            <li key = "index">{fruit.name}</li>
        ))}</ul>
    )
}



const Image = [
    {image: Image01,
     index: 0},
     {image: Image02,
    index: 1},
    {image: Image03,
    index: 2}
]

const  Windows = () => {
    return (
        <ul>{Image.map((item) => (
            <li key= {item.index}>
            <img src = {item.image} alt = {`Image ${item.index}`} />
            </li>
        )
        )}</ul>
    )
}


const App = ({flag}) => {
    const change = () => {
        console.log("child notify me")
    }
    const home = true;
    const text = flag ? "Hello" : "World";
  return (
    <>
    <div>
    <Route home= {home} />
    <Greeting TimeOfTheDay= "Afternoon" name="Vincent"/>
    <Title text= {text} />
    <Child change={change} />
    <Titles />
    <Titlex />
    </div>
    <div>
     <Windows />
    </div>
    </>
    )
}



export default App
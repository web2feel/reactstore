import Header from "./components/Header"
import Main  from "./components/Main"
import Footer from "./components/Footer"
import productData from "./data.json"
import {useState} from "react"

const App = () => {
    const siteName = "React Shop"
    const [cart, setCart] = useState([])
    console.log(cart)
    return(
        <div className="appWrapper">
            <Header name={siteName} />
            <Main products={productData} cart={cart} setCart={setCart}/>
            <Footer name={siteName} />
        </div>
    )
}

export default App
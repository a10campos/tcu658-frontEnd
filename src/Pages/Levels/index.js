import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import level from "../../data/levels.json"

export default function Levels() {
    return(
        <>
            <div>
                <Header></Header>
                <div className="lg:min-h-[450px] min-h-[590px]">
                    <h1 className=" flex items-center justify-center text-4xl font-bold mt-10 mb-8">Levels</h1>
                    <div className=" flex flex-wrap justify-center"> 
                        {
                            level.map((i) => {
                                return(
                                <Cards title={i.Description} url={i.img} link={`${i.id}`}/>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

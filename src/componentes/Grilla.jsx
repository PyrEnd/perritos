import Cards from "./MyCard";

const Grilla = ()=> {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-3">
                <Cards
                    image="https://placedog.net/286/284"
                    name="Guapo"
                    description="Lleno de energía y listo para jugar. ¡Dale a Guapo el hogar amoroso que se merece!"
                    color="success"
                    raza="Golden Retriever"
                />
            </div>

            <div className="col-md-3">
                <Cards
                    image="https://placedog.net/286/287"
                    name="Kyra"
                    description="Es juguetona, amigable y se lleva bien con niños y otros animales. ¡Adopta a Kyrita!"
                    color="danger"
                    raza="Shih Tzu"
                />
            </div>

            <div className="col-md-3">
                <Cards
                    image="http://static.boredpanda.com/blog/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-57.jpg"
                    name="Layney"
                    description="Una perrita de tamaño mediano con un corazón gigante. ¡Haz de Layney un miembro de tu familia!"
                    color="primary"
                    raza="Shiba"
                />
            </div>

            <div className="col-md-3">
                <Cards
                    image="https://i.pinimg.com/170x/31/f8/35/31f8355610381d96191af4c7e03905ba.jpg"
                    name="Irina"
                    description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Irina!"
                    color="warning"
                    raza="Poodle"
                />
            </div>
        </div>
        </div>
    )
}

export default Grilla;
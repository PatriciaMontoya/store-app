import React from 'react'
import { ProductDetail } from '../components/Styled/Cards'

class ComicDetail extends React.Component {
    state = {
        comic: {}
    }

    addItemHandler = () => {
        const item = {
            id: this.state.comic.id,
            name: this.state.comic.name,
            img: this.state.comic.img,
            price: this.state.comic.price,
            quantity: 1
        }

        this.props.addItem(item)
    }

    componentDidMount() {
        const { match, comics } = this.props
        if(match.params.id) {
            const comic = comics.data.filter((comic) => {
                return Number(comic.id) === Number(match.params.id)
            })
            this.setState({comic: comic[0]})
        }
    }

    render() {
        const { id, name, date, img, price, publisher} = this.state.comic
        return <ProductDetail>
                <p>ID: {id}</p>
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>Release date: {date}</p>
                <h4>Publisher: {publisher}</h4>
                <h4>${price}</h4>
                <button className="comic-btn" onClick={this.addItemHandler}>Add to cart</button>
        </ProductDetail>
    }
}

export default ComicDetail
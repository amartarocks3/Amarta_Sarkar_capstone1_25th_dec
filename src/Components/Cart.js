import { useSelector } from 'react-redux/es/hooks/useSelector';
//  
// import '../style/favorite.css'

let Cart = () => {
    // const dispatch = useDispatch();
    // const [book_link, setBook_Link] = useState();
    // const [book_id, setBook_id] = useState();
    // const [book_thumb, setBook_thumb] = useState('');
    // const [book_title, setBook_title] = useState('');
    // const [book_price, setBook_price] = useState();
    // const [book_des, setBook_des] = useState();
    // const [book_big_thumb, setBook_big_thumb] = useState();
    const favlist = useSelector((state)=>state.cart);
    console.log(favlist);
    // function removeProduct() {
    //     let removeFevList = {
    //         book_id : book_id,
    //         thumbnail : book_thumb,
    //         book_title : book_title,
    //         price : book_price
    //     }
    //     dispatch(removeFromfev(removeFevList));
    // }

    // let bookdetails = async() => {
    //     let res = await fetch(book_link);
    //     let jsonResponse = await res.json();
    //     setBook_big_thumb(jsonResponse?.volumeInfo?.imageLinks?.thumbnail);
    //     setBook_des(jsonResponse?.volumeInfo?.description);
    //     console.log(book_des);
    // }


    return (
        <div>cart</div>
    )
}
export default Cart

import {useSelector, useDispatch} from 'react-redux';
import {Row,Col,Card} from "react-bootstrap";
import { Star,Link, StarFill } from 'react-bootstrap-icons';

function Playlist (props){

    
    const songInfo = () => {
        fetch(' https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
        .then(res =>  res.json())
        .then (data => {console.log(data);})
        .catch(error => {console.error('Errore',error);})
    }

     const Song = ({ data }) => {
    const favourites = useSelector((state) => state.favourite.list)
    const dispatch = useDispatch()
  
    const isFav = favourites.includes(data.title)

    const albumCard = function (songIn) {
        return (`
            <div class="col text-center" id=${songInfo.id}>
                <img class="img-fluid" src=${
                  songInfo.album.cover_medium
                } alt="track" />
              <p>
                  Track: "${
                    songInfo.title.length < 16
                      ? `${songInfo.title}`
                      : `${songInfo.title.substring(0, 16)}...`
                  }"<br>
                  Artist: ${songInfo.artist.name}
              </p>
            </div>`)}
    
    
    return(
        <div>
            <Row>
                <Col>
                {albumCard}
                {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: 'REMOVE_FROM_FAVOURITE',
                payload: data.title,
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_FAVOURITE',
                payload: data.title,
              })
            }
          />
        )}
        <Link to={`/${data.title}`}>{data.title}</Link>
                </Col>
                <Col>
                {albumCard}
                </Col>
                <Col>
                {albumCard}
                </Col>
                <Col>
                {albumCard}
                </Col>
            </Row>
        </div>
      )
    
    }
  }

    
   

      
    

    export default Playlist
 
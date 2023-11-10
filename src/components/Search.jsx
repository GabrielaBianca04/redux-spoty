

import { Form, Button } from "react-bootstrap"

function Search(){
    const search = async (event) => {
    event.preventDefault()
    let div = document.querySelector('#searchResults .row')
    div.innerHTML = ''
    let searchQuery = document.querySelector('#searchField').value
  
    if (searchQuery.length > 2) {
      document.querySelector('#searchResults').style.display = 'block'
  
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            searchQuery,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
              'X-RapidAPI-Key':
                '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
            },
          }
        )
       
      } 
      catch (err) {
        console.log('error', err)
      }
    } else {
      document.querySelector('#searchResults').style.display = 'none'
    }
  }

  return (<>
  <Form.Group >
        <Form.Label>{Search}</Form.Label>
        <Form.Control type="text" placeholder="Search" />
        <Button variant="dark">Go</Button>
      </Form.Group></>)
}

export default Search


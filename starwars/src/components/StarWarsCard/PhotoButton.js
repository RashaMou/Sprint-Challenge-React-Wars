import React from "react";
import { Button, Image, Modal } from 'semantic-ui-react'

const PhotoButton = (props) => (
  <Modal trigger={<Button>View Photo</Button>} closeIcon>
    <Modal.Content header image>
      <div className='modal-wrapper'>
        <div className='header'>
          {props.name}
        </div>
        <div>
          { props.name === 'Luke Skywalker'? <div><Image src='https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-i-am-a-jedi_fce1d84d.jpeg?region=204%2C0%2C414%2C413'/></div> : null }
          { props.name === 'C-3PO'? <div><Image src='https://imgix.ranker.com/user_node_img/50066/1001308627/original/borrowing-his-red-arm-from-a-fallen-friend-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces'/></div> : null }
          { props.name === 'R2-D2'? <div><Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Star_Wars_and_the_Power_of_Costume_July_2018_19_%28R2-D2_costume_from_Episode_IV%29.jpg/1024px-Star_Wars_and_the_Power_of_Costume_July_2018_19_%28R2-D2_costume_from_Episode_IV%29.jpg'/></div> : null }
          { props.name === 'Darth Vader'? <div><Image src='https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960'/></div> : null }
          { props.name === 'Leia Organa'? <div><Image src='https://vafloc02.s3.amazonaws.com/isyn/images/f811/img-2007811-f.jpg'/></div> : null }
          { props.name === 'Owen Lars'? <div><Image src='https://i0.wp.com/www.heyuguys.com/images/2017/06/Joel-Edgerton-Star-Wars.jpg?fit=1200%2C901&ssl=1'/></div> : null }
          { props.name === 'Beru Whitesun lars'? <div><Image src='https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20170713063118'/></div> : null }
          { props.name === 'R5-D4'? <div><Image src='https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960'/></div> : null }
          { props.name === 'Biggs Darklighter'? <div><Image src='https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960'/></div> : null }
          { props.name === 'Obi-Wan Kenobi'? <div><Image src='https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/08/star-wars-episode-4-obi-wan.jpg'/></div> : null }
        </div>
      </div>  
    </Modal.Content>
  </Modal>
)

export default PhotoButton

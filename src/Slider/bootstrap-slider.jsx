import Carousel from 'react-bootstrap/Carousel';
import { Sliderimage } from './sliderimage';
import sliderimg1 from "../Image/1.webp"
import sliderimg2 from "../Image/2.webp"
import sliderimg3 from "../Image/3.webp"
import sliderimg4 from "../Image/4.webp"
import sliderimg5 from "../Image/5.webp"
import sliderimg6 from "../Image/6.webp"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Sliderimage img={sliderimg1}/>
        <Carousel.Caption>
            <button>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sliderimage img={sliderimg2}/>
        <Carousel.Caption>
        <button>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sliderimage img={sliderimg3}/>
        <Carousel.Caption>
        <button>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sliderimage img={sliderimg4}/>
        <Carousel.Caption>
        <button>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sliderimage img={sliderimg5}/>
        <Carousel.Caption>
        <button>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sliderimage img={sliderimg6}/>
        <Carousel.Caption>
        <button>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
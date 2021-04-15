import React from 'react';
import './App.css';
import Card from './layout/Card';
import IdCard from './components/IdCard';
import Greetings from './components/Gretings';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor';
import CardWrapper from './components/CardWrapper';
import Rating from './components/Rating.jsx';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePictures from './components/ClickablePictures';
import Dice from './components/Dice';
import Carousel from './components/Carousel.js';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/FaceBook';

function App() {
  return (
    <div className="App">
      <Card titulo="Iteração 1" color="#B9006E">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </Card>

      <Card titulo="Iteração 2" color="#CE845C">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">Mike</Greetings>
        <Greetings lang="es">Manolo</Greetings>
        <Greetings lang="pt">Pedro</Greetings>
      </Card>

      <Card titulo="Iteração 3" color="#95464D">
        <Random min={1} max={6} />
        <Random min={1} max={50} />
        <Random min={-50} max={6} />
      </Card>
      <Card titulo="Iteração 4" color="#044da7">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={120} g={180} b={0} />
        <BoxColor r={0} g={255} b={200} />
      </Card>
      <Card titulo="Iteração 5" color="#6aa704">
        <CardWrapper />
      </Card>
      <Card titulo="Iteração 6" color="#a7048a">
        <Rating>5</Rating>
        <Rating>4</Rating>
        <Rating>3</Rating>
        <Rating>2</Rating>
        <Rating>1</Rating>
      </Card>
      <Card titulo="Iteração 7" color="#04a79b">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </Card>

      <Card titulo="Iteração 8" color="#F02693">
        <LikeButton />
      </Card>

      <Card titulo="Iteração 9" color="#F0D532">
        <ClickablePictures
          img="https://randomuser.me/api/portraits/women/1.jpg"
          imgClicked="https://randomuser.me/api/portraits/men/1.jpg"
        />
      </Card>

      <Card titulo="Iteração 10" color="#AC1AF0">
        <Dice />
      </Card>

      <Card titulo="Iteração 11" color="#09F002">
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </Card>

      <Card titulo="Iteração 12" color="#5E4BF2">
        <NumbersTable limit={36} />
      </Card>

      <Card titulo="Iteração 13 e 14" color="#F02F0C">
        <Facebook />
      </Card>

      <Card titulo="Iteração 15" color="#2910A3"></Card>
    </div>
  );
}

export default App;

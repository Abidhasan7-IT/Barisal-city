import { useState } from 'react';
import Panel from './panel';
import './App.css';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Barisal, <span>Bangladesh</span> </h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)} >
        Demographics According to provisional results of the 2011 national census, the population of Barisal (areas under the jurisdiction of the Barisal city corporation) stands at 328,278. By gender, the population was 51.63% male and 48.37% female. <br/>

      <img src="https://th.bing.com/th/id/R.e480f6f401134a0a2086592a0767ca0e?rik=qS76nou%2b%2bMRUUA&pid=ImgRaw&r=0" alt="" />
      </Panel>

      <Panel
        title="Place of Barisal"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)} >
        Barisal, East as popular as many canals of Venice, known locally as khals known rivers in the city, passing through the city. Business in the last 400-500 years has sailed heremestic apple. <br />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Barisal_Launch_Terninal.jpg/280px-Barisal_Launch_Terninal.jpg" alt="" />
      </Panel>

      <Panel
        title="Guthia Mosque"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)} >
        The Guthia Mosque, located in Barisal, Bangladesh, is an architectural marvel that holds significant historical and cultural value. This ancient mosque stands as a testament to the rich Islamic heritage of the region and serves as a place of worship for the local Muslim community.

        The construction of Guthia Mosque dates back to the early 17th century, during the Mughal period in Bengal. The mosque was built by the esteemed Mughal governor of Dhaka, Shahbaz Khan Mosque, as a place of prayer for the residents of Guthia village. It is believed that the mosque was constructed on the site of an older mosque, which was in a dilapidated state at the time. <br />

        <img src="https://expeditions-bd.com/wp-content/uploads/2016/12/barisal.png" alt="" />
      </Panel>

      <Panel
        title="Durga Sagar"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)} >
          Durga Sagar, known locally as Madhabpasha Dighi, is the largest lake in southern Bangladesh. It has a total area of about 25 hectares. The lake is about 11 kilometres (6.8 mi) away from Barisal city. Rani Durgabati, mother of Raja Joy Narayan, had the pond excavated in 1780.
          <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%97%E0%A6%B0.JPG/480px-%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%97%E0%A6%B0.JPG" alt="" />
      </Panel>

      <Panel
        title="Oxford Mission"
        isActive={activeIndex === 4}
        onShow={() => setActiveIndex(4)} >
         Oxford Mission Epiphany Cathedral Church, commonly known as Oxford Mission Church and the Church of Bangladesh Diocese of Barisal is an Anglican church in Barisal, a southern city in Bangladesh. It is one of the oldest and arguably the second largest church
          <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9A%E0%A7%87%E0%A6%B0_%E0%A6%9B%E0%A6%AC%E0%A6%BF.jpg/480px-%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9A%E0%A7%87%E0%A6%B0_%E0%A6%9B%E0%A6%AC%E0%A6%BF.jpg" alt="" />
      </Panel>

      <Panel
        title="Bell's Park"
        isActive={activeIndex === 5}
        onShow={() => setActiveIndex(5)} >
         Bangabandhu Udyan popularly known as Bell's Park is a historic urban park and recreation area situated at the heart of Barisal, a city in south-central Bangladesh. This park is one of the beautiful areas in Barisal with a playground, walkway, helipad, many trees and a lake adjacent to it.
          <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bangabandhu_Uddyan_Aerial_View.jpg/250px-Bangabandhu_Uddyan_Aerial_View.jpg" alt="" />
      </Panel>

      <Panel
        title="30 Godown"
        isActive={activeIndex === 6}
        onShow={() => setActiveIndex(6)} >
         30 Godown Freedom Fighters Monument is located at Opposite of Sher e Bangla Medical College & hospital; Baptist Mission Rd, Barisal, Barisal. Besides this landmark, there are nine more landmarks.
          <br />
        <img src="https://th.bing.com/th?id=OLC.QC7GX+EUwDxquQ480x360&w=262&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
      </Panel>

      <Panel
        title="Kamalapur Mosque"
        isActive={activeIndex === 7}
        onShow={() => setActiveIndex(7)} >
         Kamalapur Mosque, also known as Masum Khan Mosque, is a square shaped three domed ancient mosque and archaeological site located in Barisal District of Bangladesh. It is located in the Kamalapur village under Gournadi Upazila. It was built in the Mughal architecture style.
          <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kamalapur_Mosque%2C_July_2018_02.jpg/480px-Kamalapur_Mosque%2C_July_2018_02.jpg" alt="" />
      </Panel>

      <Panel
        title="Qasba Mosque"
        isActive={activeIndex === 8}
        onShow={() => setActiveIndex(8)} >
         Qasba Mosque is an early 16th-century nine-domed mosque and archaeological site located in Barisal District of Bangladesh. It is located in the Qasba village under Gournadi Upazila. It is named after the village. The mosque, which has a total of nine domes
          <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/%E0%A6%95%E0%A6%B8%E0%A6%AC%E0%A6%BE_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6_8.jpg/480px-%E0%A6%95%E0%A6%B8%E0%A6%AC%E0%A6%BE_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6_8.jpg" alt="" />
      </Panel>

      <Panel
        title="Barisal Divisional Stadium"
        isActive={activeIndex === 9}
        onShow={() => setActiveIndex(9)} >
         Barisal Divisional Stadium is a multi-purpose, district stadium in Barisal, Bangladesh. It is currently used mostly for football and cricket matches. The stadium can hold up to 30,000 people. 
          <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Barisal_stadium_%26_swimming_pool.jpg/480px-Barisal_stadium_%26_swimming_pool.jpg" alt="" />
      </Panel>

      <Panel
        title="River Port"
        isActive={activeIndex === 10}
        onShow={() => setActiveIndex(10)} >
         The Port of Barisal, officially known as Barisal River Port is the second largest and busiest river port in Bangladesh after Dhaka in terms of passenger traffic. It is located on the banks of the Kirtankhola river in the city of Barisal. The port operates daily services between Dhaka and Barisal
          <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Barisal_River_Port_Launch_Terminal%2C_Bangladesh_%283%29.jpg/480px-Barisal_River_Port_Launch_Terminal%2C_Bangladesh_%283%29.jpg" alt="" />
      </Panel>

      <Panel
        title="Kuakata"
        isActive={activeIndex === 11}
        onShow={() => setActiveIndex(11)} >
         Kuakata beach is a beautiful beach in the southern part of Bangladesh. It is located in Patuakhali district of Barisal Division. It is known as the 'daughter of the sea'. It is believed that in the 18th century, the Arakans migrated to this region from Burma after being driven out by the Mughal rulers. They dug a lot of wells (Kua in Bengali) to meet the need of drinking water. Probably the name Kuakata has been derived from digging of Kua.
          <br />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/08/8e/27/kuakata.jpg?w=500&h=400&s=1" alt="" />
      </Panel>

      <Panel
        title="Guava Garden"
        isActive={activeIndex === 12}
        onShow={() => setActiveIndex(12)} >
         The largest guava garden in Asia has been established in the border area of three districts of Jhalokati, Barisal, and Pirojpur. This guava garden is grown on about 31 thousand acres of land in 26 villages. About 20,000 families of these places are directly involved in guava cultivation.
          <br />
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/0f/58/63/guavas-being-taken-to.jpg" alt="" />
      </Panel>
      

      <footer>
        <img  class="abid"
        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/391641657_1387127731872890_6259989048545417604_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHAXJcnNgQSfEgbPfn_aLhvDQdA-h9Mq6kNB0D6H0yrqTou-XQ0MUbwZjKzY3yl6AoX9z0PlUefDFuvjy-Fgy-z&_nc_ohc=L_2tw2dwUMAAX93RsHD&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCrRoDl-ywq3vxygRWTMT6BrOzLywagqlKbW_4h8WROkA&oe=65384018" alt="" />
       <h3> @ Abid Hasan</h3>
      </footer>

    </>
  );
}


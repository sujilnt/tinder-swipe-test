import {useState} from "react";
import TinderCard from "react-tinder-card";
import logo from '../../assets/logo.png';
import {IconButton} from "@material-tailwind/react";

import './styles.css';

interface Person {
    name?: string;
    url?: string;
}

export default function Home() {
    const [people, setPeople] = useState<Person[]>([
        {name: "musk", url: 'https://hips.hearstapps.com/hmg-prod/images/actor-jack-nicholson-pose-backstage-after-winning-best-news-photo-1677854810.jpg'},
        {name: "bezos", url: 'https://hips.hearstapps.com/hmg-prod/images/cultural-icon-maya-angelou-poses-for-a-photo-in-december-news-photo-1678980279.jpg'},
    ]);



    return (
        <div className='w-full flex justify-center'>
            <div className='w-4/12 h-screen border rounded flex flex-col'>
                <div>
                    <img
                        className="max-h-20 w-full object-cover object-center"
                        src={logo}
                        alt="nature image"
                    />
                </div>
                <div className='tinderCards__cardContainer'>
                    {people.map((person, index) => {
                        return (<TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            noSwipe={(dir) => swiped(dir, person.name)}
                            noCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{backgroundImage: `url(${person.url})`}}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>);
                    })}
                </div>
                <div className="flex justify-around">
                    <IconButton className="bg-pink-500 rounded-full size-24 inline-block" placeholder='Replay'>
                        <i className="fas fa-reply" />
                    </IconButton>
                    <IconButton className="bg-pink-500 rounded-full size-24 inline-block" placeholder={'close'}>
                        <i className="fas fa-close"/>
                    </IconButton>

                    <IconButton className="bg-pink-500 rounded-full size-24 inline-block" placeholder={'star'}>
                        <i className="fas fa-star"/>
                    </IconButton>

                    <IconButton className="bg-pink-500 rounded-full w-20 h-20 inline-block" placeholder='favorite'>
                        <i className="fas fa-heart"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

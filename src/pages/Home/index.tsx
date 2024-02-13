import {useState} from "react";
import TinderCard from "react-tinder-card";
import './styles.css';

interface Person {
    name?: string;
    url?: string;
}

export default function Home() {
    const [people, setPeople] = useState<Person[]>([
        {name: "musk", url: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'},
        {name: "bezos", url: 'https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'},
    ]);



    return (
        <div className='w-full flex justify-center'>
            <div className='w-4/12 h-screen border rounded'>
                <div>test</div>
                <div className='tinderCards__cardContainer'>
                    {people.map((person, index) => {
                        return(<TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            noSwipe={(dir) => swiped(dir, person.name)}
                            noCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/cultural-icon-maya-angelou-poses-for-a-photo-in-december-news-photo-1678980279.jpg)` }}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>);
                    })}
                </div>
            </div>
        </div>
    )
}

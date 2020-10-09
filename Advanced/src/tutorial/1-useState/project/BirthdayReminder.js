import React, { useState } from 'react';

const Birthdays = [{
    id: 1,
    name: 'Bertir',
    age: 29,
    photo: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
},
{
    id: 2,
    name: 'Bertir',
    age: 29,
    photo: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'
},
{
    id: 3,
    name: 'Bertir',
    age: 29,
    photo: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
},
{
    id: 4,
    name: 'Bertir',
    age: 29,
    photo: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
},
{
    id: 5,
    name: 'Bertir',
    age: 29,
    photo: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
}]

export default function BirthdayReminder(){

    const [birthdays, setBirthdays] = useState(Birthdays)

    return <>
    <section>
    <h1>{birthdays.length} Birthdays Today</h1>
        {
            birthdays.map(
                person => {
                    return <div key={person.id}>
                            <img src={person.photo}/>
                            <div>
                                <h2>{person.name}</h2>
                                <h3>{person.age}</h3>
                            </div>
                        </div>
                }
            )
        }
        <button onClick={() => setBirthdays([])}> Clear All</button>
    </section>
    </>
}
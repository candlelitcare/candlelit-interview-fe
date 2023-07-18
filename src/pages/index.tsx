import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

interface PageProps {
    coaches: Coach[]
}

const CoachCard = ({coach}: { coach: Coach }) => {

    return <div className='bg-slate-600 rounded text-white gap-3 p-4  flex flex-col'>
        <h5>{coach.name}</h5>
        <hr/>
        <p>
            {coach.email}
        </p>
        <p>
            {coach.location}
        </p>
        <p>{coach.bio}


        </p>

        <h5 className='mt-4 font-extrabold'>Qualifications:</h5>
        <hr/>
        {
            coach.qualifications.map((qualification, index) => <li key={qualification}>{qualification}</li>)
        }

    </div>;
}

export default function Home(props: PageProps) {

    const {coaches} = props

    return (
        <main
            className={`flex h-screen bg-slate-300 flex-col items-center p-24 ${inter.className}`}
        >
            <h4 className='text-xl font-extrabold'>Welcome to Candlelit Care</h4>
            <Link href='add_coach'>Add Coach</Link>

            <div className='bg-gray-100 flex flex-col gap-6 w-full p-4'>
                <h4>All Coaches</h4>
                <div className='shadow grid grid-cols-3 w-full'>

                    {
                        coaches && coaches.map((coach) => <CoachCard key={coach.id} coach={coach}/>)
                    }


                </div>
            </div>


        </main>
    )
}

export async function getServerSideProps() {


    const res = await fetch("http://localhost:8000/v1/coaches")
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const {data} = await res.json()
    return {
        props: {
            coaches: data
        }
    }
}

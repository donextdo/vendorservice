import {Inter} from 'next/font/google'
import IndexPage from '@/components/Home'

const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (
        <>
            <IndexPage/>
        </>
    )
}

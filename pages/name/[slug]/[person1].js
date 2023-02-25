import { useRouter } from 'next/router'
import Home from '../../index'

const person1 = () => {
    const router = useRouter()
    const { id, person1 } = router.query

    return (
        <div>
            <Home />
            <h1>Post: {id}</h1>
            <h2>Blog: {person1}</h2>
        </div>
    );
};

export default person1;